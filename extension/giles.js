/* ============================================================
   Gilles — Assistant IA (UI content script)
   - Pop-up flottante en bas à droite
   - Mémoire active = 5 derniers messages (sessionStorage, vidée au reload)
   - Conversations sauvegardées en local (localStorage), jamais envoyées ailleurs
   ============================================================ */

(function () {
  'use strict';

  const MEM_LIMIT      = 5;                       // messages gardés en mémoire active
  const SS_ACTIVE      = 'giles_active';          // sessionStorage : conversation en cours
  const LS_CONVOS      = 'giles_conversations';   // localStorage : historique
  const SS_PAGES       = 'giles_pages';           // sessionStorage : mémoire des pages visitées (vidée à la fermeture/reload session)
  const PAGE_MAX       = 12000;                   // chars max par page stockée
  const PAGES_TOTAL    = 40000;                   // budget total tous pages confondus
  const WELCOME        = 'Bonjour, je suis Gilles. Je peux vous aider à comprendre et utiliser Artis.';
  const ERR_BASE       = "Gilles n'arrive pas à répondre pour le moment. Réessaie dans quelques instants.";

  /* Messages par code d'erreur (renvoyés par le service worker) */
  const ERR_CODES = {
    NO_KEY:      "Aucune clé API configurée. Ajoute-la dans la popup de l'extension.",
    KEY_INVALID: "Clé API invalide. Vérifie la clé dans la popup.",
    QUOTA:       "Quota Gemini dépassé. Réessaie plus tard, ou utilise une autre clé / active la facturation Google.",
    OVERLOAD:    "Tous les modèles sont surchargés (forte demande). Réessaie dans quelques instants.",
    MODEL:       "Modèle indisponible pour cette clé.",
    NETWORK:     "Impossible de joindre le service IA (réseau / hors-ligne).",
    API:         "Le service IA a renvoyé une erreur.",
    NO_TEXT:     "Réponse vide ou bloquée par le filtre de sécurité.",
    EMPTY:       "Aucun message à envoyer.",
    PARSE:       "Réponse illisible du service IA.",
    EXT:         "Erreur interne de l'extension (service worker injoignable).",
    NO_RESP:     "Pas de réponse du service worker.",
    UNKNOWN:     "Erreur inconnue.",
  };

  function errMessage(code, detail) {
    const base = ERR_CODES[code] || ERR_BASE;
    const d = detail ? ' — ' + String(detail).slice(0, 140) : '';
    return `⚠️ ${base}${d}\n\n(code : ${code})`;
  }

  let activeMessages = [];   // [{role:'user'|'assistant', text, ts}]
  let currentConvId  = null;
  let busy           = false;
  let mounted        = false;
  let pageShare      = true; // partage du contenu des pages avec Gemini (popup)

  /* ── Stockage local (robuste) ───────────────────────────── */
  const CONVO_TTL_MS = 30 * 24 * 3600 * 1000;   // purge auto des conversations > 30 jours
  function loadConvos() {
    try {
      const raw = localStorage.getItem(LS_CONVOS);
      const arr = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(arr)) return [];
      return arr.filter(c => c && (!c.ts || Date.now() - c.ts < CONVO_TTL_MS));
    } catch (e) { return []; }   // corrompu → on repart propre
  }
  function saveConvos(list) {
    try { localStorage.setItem(LS_CONVOS, JSON.stringify(list)); } catch (e) {}
  }
  function persistCurrent() {
    if (!activeMessages.length) return;
    const list = loadConvos();
    const firstUser = activeMessages.find(m => m.role === 'user');
    const title = firstUser ? firstUser.text.slice(0, 48) : 'Conversation';
    const idx = list.findIndex(c => c.id === currentConvId);
    const conv = {
      id: currentConvId,
      title,
      ts: Date.now(),
      messages: activeMessages.slice(),
    };
    if (idx >= 0) list[idx] = conv; else list.unshift(conv);
    saveConvos(list);
  }

  /* ── Mémoire active (vidée à chaque chargement complet) ──── */
  function resetActive() {
    try { sessionStorage.removeItem(SS_ACTIVE); } catch (e) {}
    activeMessages = [];
    currentConvId = 'c_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
  }
  function mirrorActive() {
    try { sessionStorage.setItem(SS_ACTIVE, JSON.stringify(activeMessages)); } catch (e) {}
  }

  /* ── Utilitaires ────────────────────────────────────────── */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
  }
  /* Inline markdown : gras, italique, souligné, barré, code */
  function fmtInline(s) {
    let h = esc(s);
    h = h.replace(/`([^`]+?)`/g, '<code>$1</code>');           // `code`
    h = h.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');     // **gras**
    h = h.replace(/__(.+?)__/g, '<u>$1</u>');                   // __souligné__
    h = h.replace(/~~(.+?)~~/g, '<del>$1</del>');               // ~~barré~~
    h = h.replace(/(^|[^*])\*([^*\n]+?)\*(?!\*)/g, '$1<em>$2</em>');   // *italique*
    h = h.replace(/(^|[^_])_([^_\n]+?)_(?!_)/g, '$1<em>$2</em>');      // _italique_
    return h;
  }

  /* Markdown bloc : titres, listes (- * 1.), paragraphes */
  function fmt(text) {
    const lines = String(text).split('\n');
    let html = '', listType = null;
    const closeList = () => { if (listType) { html += `</${listType}>`; listType = null; } };

    for (let raw of lines) {
      const line = raw.replace(/\s+$/, '');
      let m;
      if (!line.trim()) { closeList(); continue; }
      if ((m = line.match(/^(#{1,4})\s+(.*)$/))) {           // titres
        closeList();
        const lvl = m[1].length + 2;
        html += `<h${lvl} class="giles-h">${fmtInline(m[2])}</h${lvl}>`;
      } else if ((m = line.match(/^\s*[-*•]\s+(.*)$/))) {     // liste à puces
        if (listType !== 'ul') { closeList(); html += '<ul>'; listType = 'ul'; }
        html += `<li>${fmtInline(m[1])}</li>`;
      } else if ((m = line.match(/^\s*\d+[.)]\s+(.*)$/))) {   // liste numérotée
        if (listType !== 'ol') { closeList(); html += '<ol>'; listType = 'ol'; }
        html += `<li>${fmtInline(m[1])}</li>`;
      } else {                                                // ligne normale
        closeList();
        html += fmtInline(line) + '<br>';
      }
    }
    closeList();
    return html.replace(/(<br>)+$/,'');
  }
  /* Logo IA — petit robot (avatar, bouton flottant, bouton sidebar) */
  /* Bulle de chat IA : speech bubble + 3 points + étincelle (assistant IA) */
  const ICON_GILES = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'
    + '<path d="M4 5.5h13A2.5 2.5 0 0 1 19.5 8v6A2.5 2.5 0 0 1 17 16.5H9l-4 3.2V16.5A2.5 2.5 0 0 1 4 14V8A2.5 2.5 0 0 1 6.5 5.5"/>'
    + '<circle cx="8.5" cy="11" r="1.05" fill="currentColor" stroke="none"/>'
    + '<circle cx="12" cy="11" r="1.05" fill="currentColor" stroke="none"/>'
    + '<circle cx="15.5" cy="11" r="1.05" fill="currentColor" stroke="none"/>'
    + '<path d="M19.5 2.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z" fill="currentColor" stroke="none"/>'
    + '</svg>';
  const ICON_CHAT = ICON_GILES;

  /* ── Notification si l'utilisateur n'est pas sur la page ──── */
  function isAway() {
    try { return document.hidden || !document.hasFocus(); } catch (e) { return false; }
  }
  function notifyIfAway(title, body) {
    if (!isAway()) return;
    let txt = String(body || '').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
    if (txt.length > 180) txt = txt.slice(0, 180) + '…';
    try { chrome.runtime.sendMessage({ type: 'ARTIS_NOTIFY', title, body: txt, tag: 'giles' }); } catch (e) {}
  }

  /* ── Construction de l'UI ───────────────────────────────── */
  let elPanel, elMsgs, elInput, elSend, elConvos, root;

  function buildUI() {
    root = document.createElement('div');
    root.id = 'giles-root';
    root.innerHTML = `
      <section id="giles-panel" role="dialog" aria-label="Assistant Gilles" aria-hidden="true">
        <header class="giles-head">
          <div class="giles-id">
            <div class="giles-ava">${ICON_CHAT}</div>
            <div>
              <div class="giles-name">Gilles</div>
              <div class="giles-status" id="giles-status">
                <span class="giles-dot" id="giles-dot"></span>
                <span id="giles-status-txt">Vérification…</span>
              </div>
            </div>
          </div>
          <button id="giles-close" aria-label="Fermer">&times;</button>
        </header>

        <nav class="giles-tabs">
          <button class="giles-tab active" data-tab="chat">Chat</button>
          <button class="giles-tab" data-tab="convos">Conversations</button>
        </nav>

        <div class="giles-view" id="giles-view-chat">
          <div class="giles-conn checking" id="giles-conn" hidden>
            <span class="giles-conn-spin"></span>
            <span class="giles-conn-txt" id="giles-conn-txt">Connexion à Gilles…</span>
            <button type="button" class="giles-conn-retry" id="giles-conn-retry" hidden>Réessayer</button>
          </div>
          <div class="giles-msgs" id="giles-msgs"></div>
          <form class="giles-inputbar" id="giles-form">
            <textarea id="giles-input" rows="1" placeholder="Écris ta question…" autocomplete="off"></textarea>
            <button type="submit" id="giles-send" aria-label="Envoyer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
          </form>
          <div class="giles-privacy">Le contenu des pages visitées est envoyé à Google Gemini pour répondre (désactivable dans la popup).</div>
        </div>

        <div class="giles-view" id="giles-view-convos" hidden>
          <div class="giles-convos-bar">
            <span>Historique local</span>
            <button id="giles-clear-all">Tout vider</button>
          </div>
          <div class="giles-convos" id="giles-convos"></div>
        </div>
      </section>`;
    document.body.appendChild(root);

    elPanel  = root.querySelector('#giles-panel');
    elMsgs   = root.querySelector('#giles-msgs');
    elInput  = root.querySelector('#giles-input');
    elSend   = root.querySelector('#giles-send');
    elConvos = root.querySelector('#giles-convos');

    /* Events (ouverture via le bouton sidebar #giles-aside-btn — plus de FAB flottant) */
    root.querySelector('#giles-close').addEventListener('click', () => openPanel(false));
    root.querySelector('#giles-form').addEventListener('submit', onSubmit);
    root.querySelectorAll('.giles-tab').forEach(t =>
      t.addEventListener('click', () => switchTab(t.dataset.tab)));
    root.querySelector('#giles-clear-all').addEventListener('click', clearAllConvos);
    root.querySelector('#giles-conn-retry').addEventListener('click', checkApi);

    /* Textarea : Enter = envoyer, Shift+Enter = nouvelle ligne, auto-grow */
    elInput.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); onSubmit(e); }
    });
    elInput.addEventListener('input', () => {
      elInput.style.height = 'auto';
      elInput.style.height = Math.min(elInput.scrollHeight, 120) + 'px';
    });

    renderWelcome();
  }

  /* ── Panel open/close ───────────────────────────────────── */
  function openPanel(open) {
    elPanel.classList.toggle('open', open);
    elPanel.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open) {
      setTimeout(() => elInput.focus(), 80);
      checkApi();
      /* Clic hors du pop-up → on réduit. Différé pour ignorer le clic d'ouverture. */
      setTimeout(() => document.addEventListener('mousedown', onOutsideClick, true), 0);
    } else {
      document.removeEventListener('mousedown', onOutsideClick, true);
    }
  }

  /* Ferme le pop-up si clic en dehors (et hors bouton sidebar Gilles) */
  function onOutsideClick(e) {
    if (!elPanel.classList.contains('open')) return;
    if (elPanel.contains(e.target)) return;                 // clic dans le pop-up
    if (e.target.closest && e.target.closest('#giles-aside-btn')) return; // bouton toggle gère lui-même
    openPanel(false);
  }
  function togglePanel() { openPanel(!elPanel.classList.contains('open')); }

  function switchTab(tab) {
    root.querySelectorAll('.giles-tab').forEach(t =>
      t.classList.toggle('active', t.dataset.tab === tab));
    root.querySelector('#giles-view-chat').hidden   = tab !== 'chat';
    root.querySelector('#giles-view-convos').hidden = tab !== 'convos';
    if (tab === 'convos') renderConvos();
  }

  /* ── Rendu messages ─────────────────────────────────────── */
  function renderWelcome() {
    elMsgs.innerHTML = '';
    addBubble('assistant', WELCOME, false);
  }
  function addBubble(role, text, store = true) {
    const b = document.createElement('div');
    b.className = 'giles-bubble ' + (role === 'user' ? 'me' : 'bot');
    b.innerHTML = `<div class="giles-bubble-in">${fmt(text)}</div>`;
    elMsgs.appendChild(b);
    elMsgs.scrollTop = elMsgs.scrollHeight;
    if (store) {
      activeMessages.push({ role, text, ts: Date.now() });
      if (activeMessages.length > 40) activeMessages = activeMessages.slice(-40); // garde-fou
      mirrorActive();
    }
    return b;
  }
  function showLoader() {
    const b = document.createElement('div');
    b.className = 'giles-bubble bot';
    b.id = 'giles-loader';
    b.innerHTML = '<div class="giles-bubble-in giles-typing"><span></span><span></span><span></span></div>';
    elMsgs.appendChild(b);
    elMsgs.scrollTop = elMsgs.scrollHeight;
  }
  function hideLoader() {
    const l = root.querySelector('#giles-loader');
    if (l) l.remove();
  }

  /* ── Nettoyage URL : jamais de token de session/clé vers un tiers ── */
  function sanitizeUrl(u) {
    return String(u || '').replace(/([?&])(session|cKey|cStatus)=[^&#]*/gi, '$1$2=***');
  }

  /* ── Capture du texte de la page (DOM entier, hors-écran inclus) ──
     Mémoïsée : recapture seulement si la page a changé ou cache > 4 s
     (le clone/innerText force un reflow → coûteux à chaque envoi). */
  let _capCache = null;
  const CAP_TTL_MS = 4000;
  function capturePageText() {
    const key = pageKey();
    const count = document.body.childElementCount;
    const now = Date.now();
    if (_capCache && _capCache.key === key && _capCache.count === count &&
        now - _capCache.ts < CAP_TTL_MS) return _capCache.cap;

    /* IMPORTANT : lire le DOM LIVE (innerText respecte la visibilité → seul
       l'onglet actif est capturé). Le clone détaché ignorait display:none et
       renvoyait du texte erroné (ex : tableau « Aucune donnée » d'un onglet caché). */
    let txt = '';
    /* On masque temporairement nos propres UI pour ne pas polluer la capture */
    const ours = document.querySelectorAll('#giles-root, #artis-app-canvas');
    const prev = [];
    ours.forEach(n => { prev.push(n.style.display); n.style.display = 'none'; });
    try {
      txt = (document.body.innerText || '').replace(/\n{3,}/g, '\n\n').replace(/[ \t]{2,}/g, ' ').trim();
    } catch (e) { txt = (document.body.textContent || '').trim(); }
    ours.forEach((n, i) => { n.style.display = prev[i] || ''; });
    if (txt.length > PAGE_MAX) txt = txt.slice(0, PAGE_MAX) + '\n…[texte tronqué]';
    const cap = { url: sanitizeUrl(location.href), title: document.title, text: txt };
    _capCache = { key, count, ts: now, cap };
    return cap;
  }

  /* ── Mémoire des pages visitées (sessionStorage, locale) ──────
     Permet de visiter le Planning puis une autre page et demander
     à Gilles ce qu'il y avait au Planning. Rechargée/rafraîchie à
     chaque chargement de page (la page courante est ré-capturée). */
  function pageKey() {
    /* Clé stable = chemin sans le token de session */
    return location.pathname + location.search.replace(/([?&])session=[^&]*/i, '$1session=');
  }
  function loadPages() {
    try { const r = sessionStorage.getItem(SS_PAGES); const o = r ? JSON.parse(r) : {}; return (o && typeof o === 'object') ? o : {}; }
    catch (e) { return {}; }
  }
  function savePages(map) {
    /* Budget total : si dépassé, on retire les pages les plus anciennes */
    let entries = Object.entries(map).sort((a, b) => (b[1].time || 0) - (a[1].time || 0));
    let total = 0; const kept = {};
    for (const [k, v] of entries) {
      total += (v.text || '').length;
      if (total > PAGES_TOTAL && Object.keys(kept).length) break;  // garde au moins la plus récente
      kept[k] = v;
    }
    try { sessionStorage.setItem(SS_PAGES, JSON.stringify(kept)); } catch (e) {}
  }
  function storeCurrentPage() {
    const cap = capturePageText();
    if (!cap.text || cap.text.length < 20) return;   // page vide/chargement → ignore
    const map = loadPages();
    map[pageKey()] = { url: cap.url, title: cap.title, text: cap.text, time: Date.now() };
    savePages(map);
  }
  function getStoredPages() {
    const map = loadPages();
    return Object.values(map).sort((a, b) => (b.time || 0) - (a.time || 0));
  }

  /* ── Envoi ──────────────────────────────────────────────── */
  function onSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (busy) return;
    const text = elInput.value.trim();
    if (!text) return;

    elInput.value = '';
    elInput.style.height = 'auto';
    addBubble('user', text);
    persistCurrent();

    busy = true;
    elSend.disabled = true;
    showLoader();

    /* Mémoire envoyée = 5 derniers messages utiles */
    const history = activeMessages.slice(-MEM_LIMIT).map(m => ({ role: m.role, text: m.text }));

    const send = extra => {
      chrome.runtime.sendMessage(Object.assign({ type: 'GILES_ASK', history }, extra), resp => {
        hideLoader();
        busy = false;
        elSend.disabled = false;

        if (chrome.runtime.lastError) {
          addBubble('assistant', errMessage('EXT', chrome.runtime.lastError.message));
        } else if (!resp) {
          addBubble('assistant', errMessage('NO_RESP'));
        } else if (!resp.ok) {
          addBubble('assistant', errMessage(resp.error || 'UNKNOWN', resp.detail));
        } else {
          addBubble('assistant', resp.text);
          notifyIfAway('Gilles a répondu', resp.text);
        }
        persistCurrent();
      });
    };

    /* Contexte pages envoyé en DELTA : le service worker met en cache les pages
       déjà transmises (par onglet) ; on ne fait transiter que les nouvelles /
       modifiées. Désactivable dans la popup (rien ne part vers Gemini). */
    if (pageShare) {
      storeCurrentPage();
      const all = getStoredPages();
      chrome.runtime.sendMessage({ type: 'GILES_PAGES_STATE' }, st => {
        void chrome.runtime.lastError;   // SW redémarré → cache vide, on renvoie tout
        const have = (st && st.have) || {};
        const delta = all.filter(p => (have[p.url] || 0) < (p.time || 0));
        send({ pages: delta, pagesDelta: true, pageUrls: all.map(p => p.url) });
      });
    } else {
      send({ pages: [] });
    }
  }

  /* ── Onglet Conversations ───────────────────────────────── */
  function renderConvos() {
    const list = loadConvos();
    if (!list.length) {
      elConvos.innerHTML = '<div class="giles-empty">Aucune conversation enregistrée.</div>';
      return;
    }
    elConvos.innerHTML = list.map(c => `
      <div class="giles-conv" data-id="${esc(c.id)}">
        <div class="giles-conv-main">
          <div class="giles-conv-title">${esc(c.title || 'Conversation')}</div>
          <div class="giles-conv-meta">${new Date(c.ts).toLocaleString('fr-FR')} · ${c.messages.length} msg</div>
        </div>
        <button class="giles-conv-del" data-id="${esc(c.id)}" aria-label="Supprimer">&times;</button>
      </div>`).join('');

    elConvos.querySelectorAll('.giles-conv-main').forEach(el =>
      el.addEventListener('click', () => openConv(el.parentElement.dataset.id)));
    elConvos.querySelectorAll('.giles-conv-del').forEach(el =>
      el.addEventListener('click', ev => { ev.stopPropagation(); deleteConv(el.dataset.id); }));
  }
  function openConv(id) {
    const c = loadConvos().find(x => x.id === id);
    if (!c) return;
    switchTab('chat');
    elMsgs.innerHTML = '';
    const banner = document.createElement('div');
    banner.className = 'giles-readonly';
    banner.textContent = 'Conversation enregistrée (lecture seule)';
    elMsgs.appendChild(banner);
    c.messages.forEach(m => addBubble(m.role, m.text, false));
  }
  function deleteConv(id) {
    saveConvos(loadConvos().filter(c => c.id !== id));
    renderConvos();
  }
  function clearAllConvos() {
    saveConvos([]);
    renderConvos();
  }

  /* ── Pastille état API dans le header ───────────────────── */
  function setApiDot(state, text, chatState) {
    if (!root) return;
    const s = root.querySelector('#giles-status');
    const t = root.querySelector('#giles-status-txt');
    if (!s || !t) return;
    s.classList.remove('checking', 'ok', 'fail');
    s.classList.add(state);
    t.textContent = text;
    updateChatState(chatState || state, text);
  }

  /* Bandeau connexion + dispo de la saisie selon l'état de l'API */
  function updateChatState(state, text) {
    if (!root) return;
    const conn  = root.querySelector('#giles-conn');
    const ctxt  = root.querySelector('#giles-conn-txt');
    const retry = root.querySelector('#giles-conn-retry');
    if (!conn) return;
    conn.classList.remove('checking', 'fail');
    if (state === 'ok') {
      conn.hidden = true;
      if (elInput) { elInput.disabled = false; elInput.placeholder = 'Écris ta question…'; }
      if (elSend && !busy) elSend.disabled = false;
    } else if (state === 'checking') {
      conn.hidden = false; conn.classList.add('checking');
      ctxt.textContent = 'Connexion à Gilles…'; retry.hidden = true;
      if (elInput) { elInput.disabled = true; elInput.placeholder = 'Connexion à Gilles…'; }
      if (elSend) elSend.disabled = true;
    } else { /* fail */
      conn.hidden = false; conn.classList.add('fail');
      if (state === 'nokey') {
        ctxt.textContent = 'Configurez votre clé API dans l\'extension !';
        retry.hidden = false;
        if (elInput) { elInput.disabled = true; elInput.placeholder = 'Configurez votre clé API dans l\'extension !'; }
      } else {
        ctxt.textContent = 'Gilles est hors-ligne (' + text + ').';
        retry.hidden = false;
        if (elInput) { elInput.disabled = true; elInput.placeholder = 'Gilles indisponible…'; }
      }
      if (elSend) elSend.disabled = true;
    }
  }
  const API_SHORT = {
    NO_KEY: 'pas de clé', KEY_INVALID: 'clé invalide', QUOTA: 'quota dépassé',
    OVERLOAD: 'surchargé', NETWORK: 'hors-ligne', MODEL: 'modèle indispo', PARSE: 'réponse illisible',
  };
  function checkApi() {
    setApiDot('checking', 'Vérification…');
    try {
      chrome.runtime.sendMessage({ type: 'GILES_PING' }, resp => {
        if (chrome.runtime.lastError) { setApiDot('fail', 'API injoignable'); return; }
        if (resp && resp.ok) { setApiDot('ok', 'en ligne'); return; }
        const code = (resp && resp.error) || 'UNKNOWN';
        if (code === 'NO_KEY') { setApiDot('fail', 'clé API manquante', 'nokey'); return; }
        setApiDot('fail', (API_SHORT[code] || 'erreur API') + ' · ' + code);
      });
    } catch (e) { setApiDot('fail', 'API injoignable'); }
  }

  /* ── Bouton Gilles dans la sidebar (comme theme / version) ── */
  function injectSidebarButton(tries) {
    tries = tries || 0;
    if (document.getElementById('giles-aside-btn')) return;
    const sidebar = document.querySelector('.aside-primary');
    const wrappers = sidebar ? sidebar.querySelectorAll('.aside-item-btn') : [];
    if (!sidebar || !wrappers.length) {
      if (tries < 20) setTimeout(() => injectSidebarButton(tries + 1), 300);
      return;
    }
    const ref = wrappers[wrappers.length - 1];      // dernier bouton (version si présent)
    const wrapper = ref.cloneNode(false);
    wrapper.removeAttribute('id');

    const refBtn = ref.querySelector('.nav-link, a, button');
    const btn = refBtn ? refBtn.cloneNode(false) : document.createElement('a');
    btn.id = 'giles-aside-btn';
    if (refBtn) btn.className = refBtn.className.replace(/\bactive\b/g, '').trim();
    else btn.className = 'nav-link btn btn-icon';
    btn.setAttribute('role', 'button');
    btn.setAttribute('href', 'javascript:void(0)');
    btn.setAttribute('aria-label', 'Ouvrir Gilles');
    btn.setAttribute('title', 'Gilles — assistant IA');
    ['data-kt-menu-trigger', 'data-bs-toggle', 'data-bs-target', 'data-id'].forEach(a => btn.removeAttribute(a));
    btn.innerHTML = ICON_GILES;
    wrapper.appendChild(btn);
    ref.insertAdjacentElement('afterend', wrapper);

    btn.addEventListener('click', () => { if (mounted) togglePanel(); });
  }

  /* ── Activation / désactivation ─────────────────────────── */
  function mount() {
    if (mounted) return;
    mounted = true;
    resetActive();          // mémoire active vidée à chaque chargement complet
    chrome.storage.local.get('giles_page_share', s => {
      pageShare = !s || s.giles_page_share !== false;   // défaut = activé
      if (pageShare) {
        storeCurrentPage();                     // mémorise la page courante
        setTimeout(storeCurrentPage, 1500);     // re-capture si la page se rend tard (tables, planning…)
      }
    });
    buildUI();
    injectSidebarButton();
    checkApi();             // pastille état API (ping léger, sans quota)
  }
  function unmount() {
    if (!mounted) return;
    mounted = false;
    if (root) root.remove();
    root = null;
    const sb = document.getElementById('giles-aside-btn');
    if (sb && sb.parentElement) sb.parentElement.remove();
  }

  function applyEnabled() {
    chrome.storage.local.get(['artis_enabled', 'giles_enabled'], s => {
      const on = s.artis_enabled !== false && s.giles_enabled !== false;
      if (on) mount(); else unmount();
    });
  }

  /* Réagit aux changements du slider (popup) sans recharger */
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== 'local') return;
    if ('artis_enabled' in changes || 'giles_enabled' in changes) applyEnabled();
    if ('giles_page_share' in changes) {
      pageShare = changes.giles_page_share.newValue !== false;
      if (!pageShare) { try { sessionStorage.removeItem(SS_PAGES); } catch (e) {} }
    }
  });

  /* ── Init ───────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyEnabled);
  } else {
    applyEnabled();
  }
})();
