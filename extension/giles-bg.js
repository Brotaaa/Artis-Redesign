/* ============================================================
   Gilles — Service worker (appels IA Gemini)
   - Charge le préprompt + la base de connaissance (artis.txt)
   - Récupère la clé API (chrome.storage > apigemini.txt bundlé)
   - Reçoit GILES_ASK du content script, renvoie la réponse
   Aucune donnée de conversation n'est stockée ici.
   ============================================================ */

const GILES_MODEL_DEFAULT = 'gemini-2.5-flash-lite';

/* Caches en mémoire (réinitialisés à chaque réveil du SW) */
let _systemPrompt = null;
let _knowledge = null;

async function loadText(path) {
  try {
    const res = await fetch(chrome.runtime.getURL(path));
    if (!res.ok) return '';
    const t = await res.text();
    return t.replace(/^﻿/, '');   // strip BOM éventuel
  } catch (e) {
    return '';
  }
}

async function getSystemPrompt() {
  if (_systemPrompt === null) _systemPrompt = await loadText('prompts/giles-system-prompt.txt');
  return _systemPrompt || 'Tu es Gilles, assistant du site Artis.';
}

/* ── Base de connaissance avec RÉCUPÉRATION ciblée ───────────
   La doc complète (93 fichiers .md) est trop grosse pour être envoyée
   à chaque message. On sélectionne les fichiers les plus pertinents
   selon la question, via knowledge-index.json.                        */
let _index = null;          // [{f, t, k}]
let _base = null;           // artis.txt (seed), caché comme le reste
const _fileCache = {};       // f -> contenu
const KB_MAX_CHARS = 50000;  // budget base de connaissance (+ ~40k de pages côté client)

function norm(s) {
  return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

async function getIndex() {
  if (_index === null) {
    const raw = await loadText('knowledge-index.json');
    try { _index = raw ? JSON.parse(raw) : []; } catch (e) { _index = []; }
    if (!Array.isArray(_index)) _index = [];
  }
  return _index;
}

async function loadKnowledgeFile(f) {
  if (!(f in _fileCache)) _fileCache[f] = await loadText('knowledge/' + f);
  return _fileCache[f] || '';
}

/* Sélectionne + concatène les fichiers pertinents pour la question */
async function getKnowledgeFor(query) {
  if (_base === null) _base = await loadText('artis.txt');   // toujours inclus (seed), fetché 1 fois
  const base = _base;
  const index = await getIndex();
  if (!index.length) return base;

  const tokens = [...new Set(norm(query).split(/[^a-z0-9]+/).filter(w => w.length >= 3))];

  let scored;
  if (tokens.length) {
    scored = index.map(e => {
      const k = e.k || '';
      let s = 0;
      for (const t of tokens) {
        if (k.includes(t)) s += 1;
        if ((e.f || '').toLowerCase().includes(t)) s += 2; // bonus si dans le nom de fichier
      }
      return { e, s };
    }).filter(x => x.s > 0).sort((a, b) => b.s - a.s);
  } else {
    scored = [];
  }

  /* Toujours commencer par INDEX.md (sommaire) s'il existe */
  const picks = [];
  const idxFile = index.find(e => /(^|\/)INDEX\.md$/i.test(e.f));
  if (idxFile) picks.push(idxFile.f);

  for (const { e } of scored) {
    if (!picks.includes(e.f)) picks.push(e.f);
    if (picks.length >= 6) break;
  }
  /* Fallback si rien trouvé : INDEX + 2 premiers fichiers */
  if (picks.length <= 1) {
    for (const e of index.slice(0, 3)) if (!picks.includes(e.f)) picks.push(e.f);
  }

  let out = base ? base + '\n\n' : '';
  for (const f of picks) {
    const content = await loadKnowledgeFile(f);
    if (!content) continue;
    const block = `\n\n===== FICHIER : ${f} =====\n${content}`;
    if (out.length + block.length > KB_MAX_CHARS) {
      out += block.slice(0, Math.max(0, KB_MAX_CHARS - out.length));
      break;
    }
    out += block;
  }
  return out;
}

/* Clé API : priorité au réglage utilisateur (chrome.storage), sinon fichier bundlé */
async function getApiKey() {
  const stored = await chrome.storage.local.get('giles_api_key');
  if (stored && stored.giles_api_key) return stored.giles_api_key.trim();

  const raw = await loadText('apigemini.txt');
  if (!raw) return '';
  /* Format Google AI Studio : clé type AIza... ou AQ.... */
  const m = raw.match(/\b(AIza[0-9A-Za-z_\-]{20,}|AQ\.[0-9A-Za-z._\-]{20,})\b/);
  if (m) return m[1];
  /* Fallback : 1re ligne « longue » sans espace ni slash */
  const line = raw.split(/\r?\n/).map(s => s.trim())
    .find(s => s.length >= 20 && !/\s/.test(s) && !s.includes('/'));
  return line || '';
}

/* Modèles essayés dans l'ordre (fallback auto si quota/dispo).
   Testés OK sur la clé actuelle ; les 2.0 sont en dernier (souvent quota 0). */
const GILES_MODELS = ['gemini-2.5-flash-lite', 'gemini-2.5-flash', 'gemini-flash-lite-latest', 'gemini-flash-latest', 'gemini-2.0-flash-lite', 'gemini-2.0-flash'];

async function getModels() {
  const s = await chrome.storage.local.get('giles_model');
  if (s && s.giles_model) return [s.giles_model, ...GILES_MODELS.filter(m => m !== s.giles_model)];
  return GILES_MODELS.slice();
}

/* Classe une erreur API → code lisible */
function classifyApiError(status, message) {
  const m = (message || '').toLowerCase();
  if (status === 429 || m.includes('quota') || m.includes('resource_exhausted') || m.includes('rate limit')) return 'QUOTA';
  if (status === 503 || status === 500 || m.includes('overload') || m.includes('high demand') || m.includes('unavailable') || m.includes('try again later')) return 'OVERLOAD';
  if (status === 404 || m.includes('not found') || m.includes('not supported')) return 'MODEL';
  if (status === 400 || m.includes('api key') || m.includes('api_key') || m.includes('invalid')) return 'KEY_INVALID';
  return 'API';
}

/* Un appel generateContent sur un modèle donné */
async function callModel(model, key, systemText, contents) {
  /* Clé en HEADER (x-goog-api-key), jamais en query string → n'apparaît pas dans les logs/proxies */
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
  let res;
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemText }] },
        contents,
        generationConfig: { temperature: 0.4, maxOutputTokens: 1024, topP: 0.95 },
      }),
    });
  } catch (e) { return { ok: false, error: 'NETWORK' }; }

  let data;
  try { data = await res.json(); } catch (e) { return { ok: false, error: 'PARSE' }; }

  if (!res.ok || data.error) {
    const msg = (data.error && data.error.message) || ('HTTP ' + res.status);
    return { ok: false, error: classifyApiError(res.status, msg), detail: msg, status: res.status };
  }

  const cand = data.candidates && data.candidates[0];
  const text = cand && cand.content && cand.content.parts
    ? cand.content.parts.map(p => p.text || '').join('').trim() : '';
  if (!text) return { ok: false, error: 'NO_TEXT', detail: cand && cand.finishReason };
  return { ok: true, text, model };
}

/* Appel Gemini avec fallback multi-modèles (quota / modèle indispo) */
function fmtTime(ts) {
  if (!ts) return 'inconnue';
  try { return new Date(ts).toLocaleString('fr-FR'); } catch (e) { return String(ts); }
}

/* Keep-alive : empêche le service worker MV3 de s'endormir pendant les appels async */
let _keepAliveTimer = null;
function swKeepAlive()  { _keepAliveTimer = setInterval(() => chrome.runtime.getPlatformInfo(() => {}), 20000); }
function swStopAlive()  { clearInterval(_keepAliveTimer); _keepAliveTimer = null; }

async function askGemini(history, pages, systemOverride) {
  swKeepAlive();
  try {
  const key = await getApiKey();
  if (!key) return { ok: false, error: 'NO_KEY' };

  const lastUser = [...(history || [])].reverse().find(m => m && m.role !== 'assistant' && m.text);
  const query = lastUser ? lastUser.text : '';

  /* systemOverride = bypass total du prompt Artis + base de connaissance */
  let systemText, models;
  if (systemOverride) {
    models    = await getModels();
    systemText = systemOverride;
  } else {
    const [sys, knowledge, mdls] = await Promise.all([getSystemPrompt(), getKnowledgeFor(query), getModels()]);
    models    = mdls;
    systemText = sys + '\n\n========================\nBASE DE CONNAISSANCE ARTIS\n========================\n' + knowledge;
  }

  /* Mémoire locale des pages visitées (Planning + autres pages).
     Permet de répondre sur une page consultée précédemment. */
  if (Array.isArray(pages) && pages.length) {
    systemText += '\n\n========================\nPAGES VISITÉES (MÉMOIRE LOCALE DE LA SESSION)\n========================\n'
      + 'Ces pages ont été consultées par l\'utilisateur durant cette session. '
      + 'Utilise leur contenu pour répondre, même s\'il s\'agit d\'une page différente de celle affichée.\n'
      + 'RÈGLES :\n'
      + '- Si l\'information demandée ne figure dans AUCUNE page ci-dessous, dis-le clairement et indique à l\'utilisateur qu\'il doit d\'abord VISITER la page concernée (ex : ouvrir le Planning) pour que tu puisses la lire.\n'
      + '- Quand tu réponds à partir d\'une page, précise l\'heure de dernière récupération de ces données (indiquée ci-dessous), car elles peuvent être périmées.\n';
    pages.forEach((p, i) => {
      systemText += `\n--- PAGE ${i + 1} : ${p.title || '(sans titre)'} ---\n`
        + 'URL : ' + (p.url || '') + '\n'
        + 'Dernière récupération : ' + fmtTime(p.time) + '\n'
        + 'CONTENU :\n' + (p.text || '') + '\n';
    });
  }

  const contents = (history || []).filter(m => m && m.text)
    .map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: String(m.text) }] }));
  while (contents.length && contents[0].role !== 'user') contents.shift();
  if (!contents.length) return { ok: false, error: 'EMPTY' };

  let last = { ok: false, error: 'UNKNOWN' };
  const RETRYABLE = ['QUOTA', 'MODEL', 'OVERLOAD'];
  for (let i = 0; i < models.length; i++) {
    const r = await callModel(models[i], key, systemText, contents);
    if (r.ok) return r;
    last = r;
    /* on tente le modèle suivant sur quota / modèle indispo / surcharge */
    if (!RETRYABLE.includes(r.error)) break;
    /* petite pause avant le modèle suivant si surcharge */
    if (r.error === 'OVERLOAD' && i < models.length - 1) await new Promise(rs => setTimeout(rs, 400));
  }
  return last;
  } finally { swStopAlive(); }
}

/* Ping santé : liste des modèles — valide la clé SANS consommer de quota génération */
async function pingGemini() {
  const key = await getApiKey();
  if (!key) return { ok: false, error: 'NO_KEY' };
  let res;
  try { res = await fetch('https://generativelanguage.googleapis.com/v1beta/models', { headers: { 'x-goog-api-key': key } }); }
  catch (e) { return { ok: false, error: 'NETWORK' }; }
  if (res.status === 200) return { ok: true };
  let data; try { data = await res.json(); } catch (e) { return { ok: false, error: 'PARSE' }; }
  const msg = (data.error && data.error.message) || ('HTTP ' + res.status);
  return { ok: false, error: classifyApiError(res.status, msg), detail: msg, status: res.status };
}

/* ── Notifications navigateur ────────────────────────────────
   Envoyées depuis le content script (Gilles répond hors-page,
   ou nouvelles DIT détectées). Gardées par le réglage notif_enabled. */
async function notify(title, body, tag) {
  try {
    const s = await chrome.storage.local.get('notif_enabled');
    if (s.notif_enabled !== true) return { ok: false, error: 'OFF' };
    const id = (tag || 'artis') + '_' + Date.now();
    chrome.notifications.create(id, {
      type: 'basic',
      iconUrl: chrome.runtime.getURL('icon-128.png'),
      title: String(title || 'Artis').slice(0, 100),
      message: String(body || '').slice(0, 500),
      priority: 2,
    });
    return { ok: true };
  } catch (e) {
    return { ok: false, error: 'EXT', detail: String(e && e.message || e) };
  }
}

/* Clic sur la notif → focus l'onglet Artis (ou en ouvre un) */
chrome.notifications.onClicked.addListener(id => {
  const url = 'https://artis.digithall.org/ArtisWebDigitInvest/';
  chrome.tabs.query({ url: 'https://artis.digithall.org/*' }, tabs => {
    if (tabs && tabs.length) {
      chrome.tabs.update(tabs[0].id, { active: true });
      if (tabs[0].windowId != null) chrome.windows.update(tabs[0].windowId, { focused: true });
    } else {
      chrome.tabs.create({ url });
    }
    chrome.notifications.clear(id);
  });
});

/* ── Cache des pages déjà transmises, par onglet ──────────────
   Le content script n'envoie que le DELTA (pages nouvelles/modifiées) ;
   on fusionne ici avec ce qu'on a déjà. SW redémarré → cache vide →
   le client renvoie tout (il interroge GILES_PAGES_STATE avant). */
const _pageStore = {};   // tabId -> { url: {url,title,text,time} }

function mergePages(tabId, delta, urls) {
  const store = _pageStore[tabId] || (_pageStore[tabId] = {});
  (delta || []).forEach(p => { if (p && p.url) store[p.url] = p; });
  /* Pages évincées côté client (budget) → on les retire aussi ici */
  if (Array.isArray(urls)) {
    for (const u of Object.keys(store)) if (!urls.includes(u)) delete store[u];
  }
  return Object.values(store).sort((a, b) => (b.time || 0) - (a.time || 0));
}

function pagesForMessage(msg, sender) {
  if (!msg.pagesDelta) return msg.pages;
  const tabId = sender && sender.tab && sender.tab.id != null ? sender.tab.id : -1;
  return mergePages(tabId, msg.pages, msg.pageUrls);
}

chrome.tabs.onRemoved.addListener(tabId => { delete _pageStore[tabId]; });

/* Port long-lived pour GILLES_ASK (évite le bug MV3 "message port closed") */
chrome.runtime.onConnect.addListener(port => {
  if (port.name !== 'gilles-ask') return;
  port.onMessage.addListener(msg => {
    if (!msg || msg.type !== 'GILLES_ASK') return;
    askGemini(msg.history, pagesForMessage(msg, port.sender), msg.systemOverride || null).then(resp => {
      try { port.postMessage(resp); } catch (e) {}
    });
  });
});

/* Routeur de messages (sendMessage court-terme) */
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (!msg) return false;
  if (msg.type === 'GILES_ASK')   { askGemini(msg.history, pagesForMessage(msg, sender)).then(sendResponse); return true; }
  if (msg.type === 'GILES_PAGES_STATE') {
    const tabId = sender && sender.tab && sender.tab.id != null ? sender.tab.id : -1;
    const store = _pageStore[tabId] || {};
    const have = {};
    for (const u of Object.keys(store)) have[u] = store[u].time || 0;
    sendResponse({ ok: true, have });
    return false;
  }
  if (msg.type === 'GILES_PING')  { pingGemini().then(sendResponse);            return true; }
  if (msg.type === 'ARTIS_NOTIFY'){ notify(msg.title, msg.body, msg.tag).then(sendResponse); return true; }
  return false;
});
