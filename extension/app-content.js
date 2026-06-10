/* ============================================================
   Artis App Enhancer — Content Script (interface interne)
   ============================================================ */

(function () {
  'use strict';

  /* ── 1. Animated canvas background ──────────────────────── */
  function createBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'artis-app-canvas';
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    let W, H, particles, animId = null, lastTs = 0;
    const FRAME_MS = 33;                                  // ~30 fps, suffisant pour un fond
    const staticLayer = document.createElement('canvas'); // dégradé + orbes + grille pré-rendus

    const ORBS = [
      { x: 0.05, y: 0.3,  r: 0.25, color: 'rgba(99,102,241,0.12)' },
      { x: 0.95, y: 0.6,  r: 0.30, color: 'rgba(129,140,248,0.10)' },
      { x: 0.5,  y: 0.05, r: 0.20, color: 'rgba(16,185,129,0.08)'  },
      { x: 0.8,  y: 0.95, r: 0.22, color: 'rgba(99,102,241,0.08)'  },
    ];

    /* Couches statiques rendues UNE fois par resize (plus jamais par frame) */
    function renderStatic() {
      staticLayer.width = W; staticLayer.height = H;
      const s = staticLayer.getContext('2d');
      const grad = s.createLinearGradient(0, 0, W * 0.5, H);
      grad.addColorStop(0,   '#161634');
      grad.addColorStop(0.5, '#1b1b40');
      grad.addColorStop(1,   '#181838');
      s.fillStyle = grad;
      s.fillRect(0, 0, W, H);
      ORBS.forEach(orb => {
        const ox = orb.x * W, oy = orb.y * H, rr = orb.r * Math.min(W, H);
        const g = s.createRadialGradient(ox, oy, 0, ox, oy, rr);
        g.addColorStop(0, orb.color);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        s.fillStyle = g;
        s.beginPath(); s.arc(ox, oy, rr, 0, Math.PI * 2); s.fill();
      });
      s.fillStyle = 'rgba(99,102,241,0.06)';
      for (let x = 40; x < W; x += 40)
        for (let y = 40; y < H; y += 40) {
          s.beginPath(); s.arc(x, y, 0.8, 0, Math.PI * 2); s.fill();
        }
    }

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      renderStatic();
      initParticles();
      ctx.drawImage(staticLayer, 0, 0);   // affichage immédiat même si animation en pause
    }

    function initParticles() {
      const count = Math.min(60, Math.floor((W * H) / 18000));
      particles = Array.from({ length: count }, () => ({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r:  Math.random() * 1.2 + 0.4,
        a:  Math.random() * 0.35 + 0.08,
      }));
    }

    /* Connexions via grille spatiale (buckets) — évite le O(n²) complet */
    const LINK_D = 100;
    function drawLinks() {
      const cols = Math.ceil(W / LINK_D) + 2;
      const buckets = new Map();
      particles.forEach((p, i) => {
        const k = (((p.x / LINK_D) | 0) + 1) + (((p.y / LINK_D) | 0) + 1) * cols;
        let b = buckets.get(k);
        if (!b) { b = []; buckets.set(k, b); }
        b.push(i);
      });
      const OFFS = [0, 1, cols - 1, cols, cols + 1];   // demi-voisinage → chaque paire vue 1 fois
      ctx.lineWidth = 0.4;
      buckets.forEach((cell, key) => {
        for (const off of OFFS) {
          const other = off === 0 ? cell : buckets.get(key + off);
          if (!other) continue;
          for (let a = 0; a < cell.length; a++) {
            const i = cell[a];
            for (let b2 = (off === 0 ? a + 1 : 0); b2 < other.length; b2++) {
              const j = other[b2];
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const d2 = dx * dx + dy * dy;
              if (d2 < LINK_D * LINK_D) {
                const d = Math.sqrt(d2);
                ctx.strokeStyle = `rgba(99,102,241,${0.12 * (1 - d / LINK_D)})`;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
              }
            }
          }
        }
      });
    }

    function draw(ts) {
      animId = requestAnimationFrame(draw);
      if (ts - lastTs < FRAME_MS) return;   // throttle 30 fps
      lastTs = ts;

      ctx.drawImage(staticLayer, 0, 0);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129,140,248,${p.a})`;
        ctx.fill();
      });

      drawLinks();
    }

    function start() { if (animId === null) animId = requestAnimationFrame(draw); }
    function stop()  { if (animId !== null) { cancelAnimationFrame(animId); animId = null; } }

    resize();
    window.addEventListener('resize', resize);

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      start();
      /* Onglet masqué → animation en pause (CPU/batterie) */
      document.addEventListener('visibilitychange', () => { document.hidden ? stop() : start(); });
    }
  }

  /* ── 1b. Nuclear CSS rule — catch anything with white bg ─── */
  function injectNuclearCSS() {
    const style = document.createElement('style');
    style.textContent = `
      /* Catch inline style="background:white" etc. via attribute selector */
      [style*="background: white"],
      [style*="background:white"],
      [style*="background-color: white"],
      [style*="background-color:white"],
      [style*="background: #fff"],
      [style*="background:#fff"],
      [style*="background-color: #fff"],
      [style*="background-color:#fff"],
      [style*="background: rgb(255, 255, 255)"],
      [style*="background-color: rgb(255, 255, 255)"],
      [style*="background:rgb(255,255,255)"],
      [style*="background-color:rgb(255,255,255)"] {
        background: rgba(10, 10, 30, 0.97) !important;
        background-color: rgba(10, 10, 30, 0.97) !important;
        color: #e2e8f0 !important;
      }

      /* Light grey inline styles */
      [style*="background: #f"],
      [style*="background:#f"],
      [style*="background-color: #f"],
      [style*="background-color:#f"],
      [style*="background: #e"],
      [style*="background:#e"],
      [style*="background-color: #e"],
      [style*="background-color:#e"],
      [style*="background: #d"],
      [style*="background:#d"],
      [style*="background-color: #d"],
      [style*="background-color:#d"],
      [style*="background: rgb(2"],
      [style*="background:rgb(2"],
      [style*="background-color: rgb(2"],
      [style*="background-color:rgb(2"],
      [style*="background: rgb(1"],
      [style*="background:rgb(1"],
      [style*="background-color: rgb(1"],
      [style*="background-color:rgb(1"] {
        background: transparent !important;
        background-color: transparent !important;
      }
    `;
    document.head.appendChild(style);
  }

  /* ── 2. Override loading screens ────────────────────────── */
  function enhanceLoadingScreens() {
    const style = document.createElement('style');
    style.textContent = `
      /* Loading overlay */
      .divChargement,
      [class*="chargement"],
      [class*="loading"],
      [class*="loader"],
      [id*="loading"],
      [id*="chargement"] {
        background: rgba(6, 6, 22, 0.92) !important;
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
      }

      /* Loading text */
      .chgtText,
      [class*="chargement"] .text,
      [class*="loading"] .text,
      [class*="loading-text"] {
        color: #94a3b8 !important;
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        font-size: 0.875rem !important;
        letter-spacing: 0.04em !important;
      }

      /* Spinner boxes → recolor */
      .box-rotate-box {
        border-color: #6366f1 !important;
      }

      /* Dots spinner */
      .spinner-main .dot1,
      .spinner-main .dot2 {
        background: #6366f1 !important;
      }

      /* Custom artis spinner replacement */
      .artis-spinner {
        width: 40px;
        height: 40px;
        border: 3px solid rgba(99, 102, 241, 0.2);
        border-top-color: #6366f1;
        border-radius: 50%;
        animation: artis-spin 0.8s linear infinite;
        margin: 0 auto 12px;
      }

      @keyframes artis-spin {
        to { transform: rotate(360deg); }
      }

      /* Progress bar */
      [class*="progress-bar"],
      .progress .bar {
        background: linear-gradient(90deg, #6366f1, #818cf8) !important;
      }
      .progress,
      [class*="progress"] {
        background: rgba(99, 102, 241, 0.15) !important;
        border-radius: 99px !important;
      }

      /* SweetAlert2 overrides */
      .swal2-popup {
        background: rgba(10, 10, 30, 0.97) !important;
        backdrop-filter: blur(20px) !important;
        border: 1px solid rgba(99, 102, 241, 0.2) !important;
        border-radius: 18px !important;
        box-shadow: 0 24px 64px rgba(0,0,0,0.6) !important;
        color: #e2e8f0 !important;
        font-family: 'Plus Jakarta Sans', sans-serif !important;
      }
      .swal2-title { color: #e2e8f0 !important; }
      .swal2-html-container { color: #94a3b8 !important; }

      .swal2-confirm {
        background: linear-gradient(135deg, #6366f1, #818cf8) !important;
        border: none !important;
        border-radius: 10px !important;
        font-weight: 600 !important;
        box-shadow: 0 4px 14px rgba(99,102,241,0.35) !important;
      }
      .swal2-cancel {
        background: rgba(255,255,255,0.08) !important;
        border: 1px solid rgba(255,255,255,0.12) !important;
        border-radius: 10px !important;
        color: #94a3b8 !important;
      }
      .swal2-deny {
        background: linear-gradient(135deg, #ef4444, #f87171) !important;
        border: none !important;
        border-radius: 10px !important;
        font-weight: 600 !important;
      }

      .swal2-icon.swal2-info    { border-color: #6366f1 !important; color: #818cf8 !important; }
      .swal2-icon.swal2-success { border-color: #10b981 !important; color: #34d399 !important; }
      .swal2-icon.swal2-warning { border-color: #f59e0b !important; color: #fbbf24 !important; }
      .swal2-icon.swal2-error   { border-color: #ef4444 !important; color: #f87171 !important; }

      .swal2-loader {
        border-color: #6366f1 rgba(0,0,0,0) #6366f1 rgba(0,0,0,0) !important;
      }

      /* Toast variant */
      .swal2-popup.swal2-toast {
        background: rgba(10,10,30,0.95) !important;
        border: 1px solid rgba(99,102,241,0.2) !important;
        border-radius: 12px !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.4) !important;
        color: #e2e8f0 !important;
      }
    `;
    document.head.appendChild(style);
  }

  /* ── 3. Ripple on buttons ─────────────────────────────────── */
  function injectRipple() {
    const style = document.createElement('style');
    style.textContent = `@keyframes artis-ripple { to { transform:translate(-50%,-50%) scale(30); opacity:0; } }`;
    document.head.appendChild(style);

    document.addEventListener('click', e => {
      const btn = e.target.closest('.btn, button');
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const r = document.createElement('span');
      r.style.cssText = `
        position:absolute;border-radius:50%;background:rgba(255,255,255,0.2);
        width:6px;height:6px;pointer-events:none;z-index:9999;
        left:${e.clientX - rect.left}px;top:${e.clientY - rect.top}px;
        transform:translate(-50%,-50%) scale(0);
        animation:artis-ripple 0.5s ease-out forwards;
      `;
      const prev = btn.style.position;
      const prevO = btn.style.overflow;
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(r);
      r.addEventListener('animationend', () => {
        r.remove();
        btn.style.position = prev;
        btn.style.overflow = prevO;
      });
    });
  }

  /* ── 4. Strip inline white/light backgrounds ─────────────── */
  /* Catches: white, #fff, #ffffff, rgb(255,255,255),
              light greys: #eee, #e8e8e8, #f2f2f2, #f5f5f5,
              rgb(230+), hsl light etc.                        */
  const WHITE_BG = /^(white|#fff(fff)?|rgba?\(\s*255\s*,\s*255\s*,\s*255[\s,)0-9.]*\))$/i;
  // Light greys: hex #e0+, #f0+, rgb(210+,210+,210+)
  const LIGHT_BG = /^(#[ef][0-9a-f]{5}|#[ef][0-9a-f]{2}|#[cd][0-9a-f]{5}|rgb\(\s*(2[1-9]\d|2[2-9][0-9]|[3-9]\d\d)\s*,\s*(2[1-9]\d|2[2-9][0-9]|[3-9]\d\d)\s*,\s*(2[1-9]\d|2[2-9][0-9]|[3-9]\d\d)\s*\))/i;

  function isLightColor(val) {
    if (!val) return false;
    const v = val.trim().toLowerCase();
    if (WHITE_BG.test(v)) return true;
    if (LIGHT_BG.test(v)) return true;
    // Short hex: #eee #ddd #ccc #fff #f0f0f0 patterns
    if (/^#([c-f][0-9a-f]){3}$/.test(v)) return true;
    // Named light colours
    if (/^(white|snow|ivory|ghostwhite|whitesmoke|seashell|floralwhite|linen|antiquewhite|beige|bisque|wheat|lightyellow|lightcyan|aliceblue|lavender|honeydew|mintcream|azure|oldlace|cornsilk)$/.test(v)) return true;
    return false;
  }

  function stripWhiteBg(el) {
    if (!el || el.nodeType !== 1) return;
    ['backgroundColor', 'background'].forEach(prop => {
      const val = el.style[prop];
      if (val && isLightColor(val)) {
        el.style.removeProperty(prop === 'backgroundColor' ? 'background-color' : 'background');
      }
    });
    /* Strip dark text (invisible on dark bg) */
    const col = el.style.color;
    if (col && /^(#[012][0-9a-f]{5}|#[012][0-9a-f]{2}|black|rgb\(\s*[0-5]\d\s*,\s*[0-5]\d\s*,\s*[0-5]\d\s*\))$/i.test(col.trim())) {
      el.style.removeProperty('color');
    }
  }

  /* Passe combinée blanc + bleu Artis : UN seul parcours du sous-arbre */
  function stripInline(el) {
    stripWhiteBg(el);
    stripArtisBlueBg(el);
  }
  function stripAllInline(root) {
    /* Seuls les éléments AVEC attribut style peuvent matcher → pas de parcours '*' */
    const all = root.querySelectorAll('[style]');
    for (const el of all) stripInline(el);
  }

  /* ── 4bis. Préfixe d'état sur les blocs planning (✅ crité / ❌ non crité) ── */
  const CRITE_EMOJI = '✅';        // ✅
  const NONCRITE_EMOJI = '❌';     // ❌
  const REUNION_EMOJI = '⏳';      // ⏳ sablier (blocs de réunion)
  const STATE_EMOJI_RE = /^[✅❌⏳]\s*/u;   // emoji déjà présent en tête

  /* Un bloc est une "réunion" = rendez-vous agenda synchronisé (menu contextuel Appointment),
     ou dont le titre visible est « Réunion ». */
  function isBlockReunion(evt, title) {
    if (evt.getAttribute('data-contextmenu') === 'contextMenuAppointment') return true;
    const t = (title ? title.textContent : '').replace(STATE_EMOJI_RE, '').trim().toLowerCase();
    return t === 'réunion' || t === 'reunion';
  }

  /* Un bloc est une vraie "intervention" (DIT/IT) → seul cas où ✅/❌ a un sens.
     Les blocs de temps non productif (is-planning-tnp : réservation, absence…) n'ont pas
     d'état crité et ne doivent PAS recevoir ✅/❌. */
  function isBlockIntervention(evt) {
    if (evt.classList.contains('is-planning-tnp')) return false;
    const idd = evt.getAttribute('data-iddit');
    if (idd && idd !== 'null' && idd !== '0') return true;
    return evt.getAttribute('data-productif') === 'true';
  }

  /* Un bloc est "crité" s'il est réalisé (CRIT saisi) → affiché en gris par Artis.
     Source fiable : classe is-planning-realise ; secours : fond gris ou idinterrealisee renseigné. */
  function isBlockCrite(evt) {
    if (evt.classList.contains('is-planning-realise')) return true;
    const idr = evt.getAttribute('data-idinterrealisee');
    if (idr && idr !== 'null' && idr !== '0') return true;
    const panel = evt.querySelector('.panel-planning');
    const bg = panel && (panel.style.backgroundColor || '').replace(/\s+/g, '').toLowerCase();
    return bg === 'rgb(162,162,162)' || bg === '#a2a2a2';
  }

  function applyStateEmoji(evt) {
    if (!evt || !evt.classList || !evt.classList.contains('planning-event')) return;
    /* Titre visible du bloc = .panel-heading > .left */
    const title = evt.querySelector('.panel-heading .left');
    if (!title) return;
    /* Réunion ⏳ ; intervention ✅/❌ ; autre TNP (réservation…) → aucun emoji */
    let wanted = '';
    if (isBlockReunion(evt, title)) wanted = REUNION_EMOJI;
    else if (isBlockIntervention(evt)) wanted = isBlockCrite(evt) ? CRITE_EMOJI : NONCRITE_EMOJI;
    const raw = title.textContent.replace(STATE_EMOJI_RE, '');  // retire un éventuel emoji précédent
    const next = wanted ? (wanted + ' ' + raw) : raw;
    if (title.textContent !== next) title.textContent = next;   // n'écrit que si changement (anti-boucle observer)
  }

  function tagPlanningBlocks(root) {
    const scope = (root && root.querySelectorAll) ? root : document;
    scope.querySelectorAll('.planning-event').forEach(applyStateEmoji);
    /* root peut être lui-même un bloc */
    if (root && root.classList && root.classList.contains('planning-event')) applyStateEmoji(root);
  }

  /* ── 5. Observe DOM for dynamic panels + new table rows ────
     Mutations ACCUMULÉES puis traitées en un seul lot par frame (rAF).
     Pendant nos propres écritures de style, l'observer est déconnecté
     → casse la boucle de rétroaction (strip → mutation → strip…). */
  function observeDOM() {
    const OBS_OPTS = {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class', 'data-idinterrealisee'],
    };
    let pendingNodes = new Set();   // nœuds ajoutés
    let pendingStyle = new Set();   // styles inline modifiés
    let pendingEvts  = new Set();   // blocs planning à re-taguer
    let scheduled = false;
    let observer;

    function schedule() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(processBatch);
    }

    function processBatch() {
      scheduled = false;
      const nodes  = pendingNodes; pendingNodes = new Set();
      const styled = pendingStyle; pendingStyle = new Set();
      const evts   = pendingEvts;  pendingEvts  = new Set();

      observer.disconnect();   // nos écritures ne re-déclenchent pas l'observer

      nodes.forEach(node => {
        if (!node.isConnected) return;
        /* Panels: add animation */
        if (node.classList && (
          node.classList.contains('dropdown-menu') ||
          node.classList.contains('modal') ||
          node.classList.contains('swal2-container')
        )) {
          node.style.animation = 'artis-panel-in 0.25s cubic-bezier(0.22,1,0.36,1) both';
        }
        /* Loader custom dans écrans chargement ajoutés */
        if (node.classList && (node.classList.contains('box-rotate-loader') ||
            node.classList.contains('chgtContent') || node.classList.contains('divChargement') ||
            (node.querySelector && node.querySelector('.box-rotate-loader, .chgtContent')))) {
          injectLoader(node);
        }
        /* Strip white + Artis blue : une seule passe combinée */
        stripInline(node);
        if (node.children && node.children.length) stripAllInline(node);
        /* Blocs planning ajoutés dynamiquement → préfixe d'état */
        if (node.classList && node.classList.contains('planning-event')) applyStateEmoji(node);
        else if (node.querySelector && node.querySelector('.planning-event')) tagPlanningBlocks(node);
      });

      styled.forEach(el => { if (el.isConnected) stripInline(el); });
      evts.forEach(evt => { if (evt.isConnected) applyStateEmoji(evt); });

      observer.observe(document.body, OBS_OPTS);
    }

    observer = new MutationObserver(mutations => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node.nodeType === 1) pendingNodes.add(node);
        }
        if (m.type === 'attributes') {
          if (m.attributeName === 'style') pendingStyle.add(m.target);
          else if (m.attributeName === 'class' || m.attributeName === 'data-idinterrealisee') {
            const evt = m.target.closest ? m.target.closest('.planning-event') : null;
            if (evt) pendingEvts.add(evt);
          }
        } else if (m.type === 'childList' && m.target.closest) {
          const evt = m.target.closest('.planning-event');
          if (evt) pendingEvts.add(evt);
        }
      }
      if (pendingNodes.size || pendingStyle.size || pendingEvts.size) schedule();
    });
    observer.observe(document.body, OBS_OPTS);
  }

  /* ── 6. Theme toggle button (dark ↔ light) ───────────────── */
  const STORAGE_KEY = 'artis-theme';

  /* Réglages pilotés par la popup (chrome.storage.local) — défauts = activés */
  const CFG = { dark: true, versionBtn: true };

  const MOON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;
  const SUN_SVG  = `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="5"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;

  function injectThemeToggle() {
    /* Attendre que la sidebar soit présente */
    const sidebar = document.querySelector('.aside-primary');
    if (!sidebar) return;

    /* Mode sombre piloté par la popup (CFG.dark). false = thème clair forcé. */
    if (!CFG.dark) {
      document.documentElement.classList.add('artis-light');
      try { localStorage.setItem(STORAGE_KEY, 'light'); } catch (e) {}
    } else {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light') document.documentElement.classList.add('artis-light');
    }

    /* Liste de TOUS les wrappers boutons existants pour cloner + se coller */
    const allWrappers = Array.from(sidebar.querySelectorAll('.aside-item-btn'));
    const refWrapper = allWrappers[allWrappers.length - 1];          // dernier bouton (cube)
    if (!refWrapper) return;

    /* Cloner exactement le dernier wrapper */
    const wrapper = refWrapper.cloneNode(false);
    wrapper.removeAttribute('id');

    /* Cloner le <a> interne du wrapper de référence pour styles pixel-perfect */
    const refBtn = refWrapper.querySelector('.nav-link, a, button');
    const btn = refBtn ? refBtn.cloneNode(false) : document.createElement('a');
    btn.id = 'artis-theme-toggle';
    if (refBtn) btn.className = refBtn.className.replace(/\bactive\b/g, '').trim();
    else btn.className = 'nav-link btn btn-icon';
    btn.setAttribute('aria-label', 'Basculer thème clair/sombre');
    btn.setAttribute('title', 'Thème clair / sombre');
    btn.setAttribute('role', 'button');
    btn.setAttribute('href', 'javascript:void(0)');
    btn.removeAttribute('data-kt-menu-trigger');
    btn.removeAttribute('data-bs-toggle');
    btn.removeAttribute('data-bs-target');
    btn.removeAttribute('data-id');
    btn.innerHTML = document.documentElement.classList.contains('artis-light') ? SUN_SVG : MOON_SVG;
    wrapper.appendChild(btn);

    /* Insérer JUSTE APRÈS le dernier bouton — collé au groupe, pas en bas */
    refWrapper.insertAdjacentElement('afterend', wrapper);

    /* Toggle handler */
    btn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.toggle('artis-light');
      localStorage.setItem(STORAGE_KEY, isLight ? 'light' : 'dark');

      btn.style.transform = 'scale(0.8) rotate(30deg)';
      btn.style.opacity = '0';
      setTimeout(() => {
        btn.innerHTML = isLight ? SUN_SVG : MOON_SVG;
        btn.style.transform = 'scale(1) rotate(0deg)';
        btn.style.opacity = '1';
      }, 150);
    });

    /* ── Bouton VERSION (sous le toggle theme) — masquable via popup ── */
    if (CFG.versionBtn) injectVersionButton(wrapper);
  }

  /* ── 6b1. Bouton version — journal des versions : CHANGELOG.md (racine repo) ── */
  const ARTIS_VERSION = '1.9.51';
  const GITHUB_REPO = 'https://github.com/SimplementJohn/Artis-Redesign';
  const VERSION_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0024 12.5C24 5.87 18.63.5 12 .5z"/></svg>`;

  function injectVersionButton(afterWrapper) {
    const ref = afterWrapper;
    const wrapper = ref.cloneNode(false);
    wrapper.removeAttribute('id');
    const refBtn = ref.querySelector('.nav-link, a, button');
    const btn = refBtn ? refBtn.cloneNode(false) : document.createElement('a');
    btn.id = 'artis-version-btn';
    if (refBtn) btn.className = refBtn.className.replace(/\bactive\b/g, '').trim();
    btn.setAttribute('aria-label', 'Projet GitHub');
    btn.setAttribute('title', 'GitHub — v' + ARTIS_VERSION);
    btn.setAttribute('role', 'button');
    btn.setAttribute('href', 'javascript:void(0)');
    ['data-kt-menu-trigger','data-bs-toggle','data-bs-target','data-id'].forEach(a => btn.removeAttribute(a));
    btn.innerHTML = VERSION_SVG + '<span class="artis-version-badge">v' + ARTIS_VERSION + '</span>';
    wrapper.appendChild(btn);
    ref.insertAdjacentElement('afterend', wrapper);

    btn.addEventListener('click', () => window.open(GITHUB_REPO, '_blank', 'noopener'));
  }

  /* ── Stagger entrée sidebar — une seule timeline (natifs+injectés) ── */
  function runSidebarStagger() {
    const sidebar = document.querySelector('.aside-primary');
    if (!sidebar) return;
    /* Ordre visuel : logo, avatar, puis tous les boutons nav */
    const items = [
      sidebar.querySelector('#kt_aside_logo'),
      sidebar.querySelector('#kt_aside_user'),
      ...sidebar.querySelectorAll('.aside-item-btn'),
    ].filter(Boolean);

    /* Reset → tout invisible, même base-time */
    items.forEach(el => {
      el.classList.remove('artis-stagger-go');
      el.classList.add('artis-stagger-init');
    });

    /* Forcer reflow pour que l'animation reparte de zéro pour tous ensemble */
    void sidebar.offsetWidth;

    /* Lancer en cascade depuis MAINTENANT (un seul T0 partagé) */
    items.forEach((el, i) => {
      el.style.animationDelay = (i * 0.22) + 's';
      el.classList.remove('artis-stagger-init');
      el.classList.add('artis-stagger-go');
    });
  }

  /* ── 6c. Inject custom loader into loading screens ────────── */
  function injectLoader(scope) {
    const root = scope && scope.nodeType === 1 ? scope : document;
    const targets = [];
    if (root.matches && root.matches('.box-rotate-loader, .chgtContent')) targets.push(root);
    if (root.querySelectorAll) targets.push(...root.querySelectorAll('.box-rotate-loader, .chgtContent'));

    targets.forEach(container => {
      if (container.querySelector('.artis-loader')) return;       // déjà injecté ici
      if (container.closest('.artis-loader')) return;             // dans un loader déjà injecté
      /* Évite le doublon : si .chgtContent contient un .box-rotate-loader,
         on laisse l'injection se faire sur le .box-rotate-loader interne. */
      if (!container.matches('.box-rotate-loader') && container.querySelector('.box-rotate-loader')) return;
      const loader = document.createElement('div');
      loader.className = 'artis-loader';
      loader.innerHTML = '<span class="artis-loader-core"></span>';
      container.insertBefore(loader, container.firstChild);
    });
  }

  /* ── 6c1. Carte profil : fond bleu → theme + glow derrière PP ─ */
  function styleProfileCard() {
    /* Repérer les grandes images d'avatar / photo de profil */
    const imgs = document.querySelectorAll(
      'img[src*="photo"], img[src*="avatar"], img[src*="profil"], .profile-picture, [class*="avatar"] img, [class*="user-photo"] img'
    );
    imgs.forEach(img => {
      const w = img.naturalWidth || img.width || 0;
      /* Remonter de 1-3 niveaux pour trouver le parent au fond bleu */
      let el = img.parentElement;
      for (let i = 0; i < 4 && el; i++, el = el.parentElement) {
        const bg = getComputedStyle(el).backgroundColor;
        const bgImg = getComputedStyle(el).backgroundImage;
        const isBlue = /rgb\(\s*0?\s*,?\s*(1[2-9]\d|2[0-4]\d)\s*,\s*(2[0-4]\d|25[0-5])/.test(bg) ||
                       /rgb\(\s*0\s*,\s*1[3-9]\d/.test(bg) ||
                       /00aeef|0084bd|0090d4/i.test(bgImg);
        if (isBlue || el.classList.contains('bg-artis-default-color')) {
          el.style.setProperty('background',
            'radial-gradient(circle at 50% 38%, rgba(129,140,248,0.35) 0%, rgba(99,102,241,0.18) 30%, transparent 65%), linear-gradient(160deg, #1c1c44 0%, #161636 100%)',
            'important');
          el.style.setProperty('box-shadow', 'inset 0 1px 0 rgba(255,255,255,0.06)', 'important');
        }
      }
      /* Glow + ring sur l'avatar */
      img.style.setProperty('border-radius', '50%', 'important');
      img.style.setProperty('box-shadow',
        '0 0 0 3px rgba(129,140,248,0.5), 0 0 28px rgba(99,102,241,0.55), 0 6px 18px rgba(0,0,0,0.4)',
        'important');
      img.style.setProperty('border', '2px solid rgba(255,255,255,0.12)', 'important');
    });
  }

  /* ── 6c1b. Volet menu : retirer les tooltips redondants ─────
     Les liens Services/Biens/Logistique… portent un title identique
     au libellé déjà visible → popup bleu moche au survol. On supprime. */
  function stripMenuTitles() {
    document.querySelectorAll(
      '.aside-secondary .menu-link[title], .aside-secondary .menu-title[title], ' +
      '.aside-secondary a[title], .aside-secondary [data-bs-original-title]'
    ).forEach(el => {
      el.removeAttribute('title');
      el.removeAttribute('data-bs-original-title');
    });
  }

  /* ── 6c2. Flags de page selon URL (scopes CSS ciblés) ─────── */
  function tagPage() {
    const url = location.href;
    const root = document.documentElement;
    if (/entreeVisualiser\.action/i.test(url)) root.classList.add('artis-page-entree');
    if (/ccPlanningV2/i.test(url) || document.body.classList.contains('page-ccPlanningV2'))
      root.classList.add('artis-page-planning');
  }

  /* ── 6c3. Replier le volet menu par défaut (via le bouton natif Artis) ──
     On NE force PAS display:none (Artis gère l'état). On clique simplement
     une fois sur #kt_aside_toggle si le volet est déployé au chargement.
     L'utilisateur le rouvre avec ce même bouton quand il en a besoin. */
  function collapseAsideByDefault() {
    const toggle = document.getElementById('kt_aside_toggle');
    if (!toggle) return;
    /* Icône « expanded » visible = volet actuellement ouvert → on replie */
    const expIcon = toggle.querySelector('.aside-toggle-expanded');
    const isOpen = expIcon ? (expIcon.offsetParent !== null) : true;
    if (isOpen) {
      try { toggle.click(); } catch (e) {}
    }
  }

  /* ── 6d. Mesurer largeur sidebar primary → var CSS ────────── */
  function setPrimaryWidth() {
    const primary = document.querySelector('.aside-primary');
    if (!primary) return;
    const set = () => {
      const w = primary.offsetWidth;
      if (w) document.documentElement.style.setProperty('--artis-primary-w', w + 'px');
    };
    set();
    window.addEventListener('resize', set);
    new ResizeObserver(set).observe(primary);
  }

  /* ── 7. Favicon replacement ───────────────────────────────── */
  function replaceFavicon() {
    const faviconUrl = chrome.runtime.getURL('icon-32.png');   /* 1,6 Ko vs justejohn.png 165 Ko */
    document.querySelectorAll("link[rel*='icon']").forEach(el => el.remove());
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = faviconUrl;
    document.head.appendChild(link);
  }

  /* ── 6b. Strip Artis legacy blue inline backgrounds ─────── */
  const ARTIS_BLUE = /^(#00aeef|#0084bd|#428bca|#337ab7|#0090d4|#007bff|#17a2b8|rgb\(\s*0\s*,\s*1[3-9]\d|rgb\(\s*0\s*,\s*17[0-9]|rgb\(\s*0\s*,\s*13[0-9])/i;

  function stripArtisBlueBg(el) {
    if (!el || el.nodeType !== 1) return;
    ['backgroundColor', 'background'].forEach(prop => {
      const val = el.style[prop];
      if (val && ARTIS_BLUE.test(val.trim())) {
        el.style.setProperty(
          prop === 'backgroundColor' ? 'background-color' : 'background',
          'transparent',
          'important'
        );
      }
    });
  }

  /* ── 7. Balayage initial : seuls les éléments avec STYLE INLINE
     nous intéressent (strips + boutons) → querySelectorAll('[style]')
     au lieu de '*' (10-100× moins d'éléments sur une page planning). */
  function initialSweep() {
    document.body.querySelectorAll(
      'button[style], input[type="button"][style], input[type="submit"][style], .btn[style], [role="button"][style]'
    ).forEach(el => {
      /* Remove ALL inline background overrides on buttons */
      el.style.removeProperty('background');
      el.style.removeProperty('background-color');
    });
    for (const el of document.body.querySelectorAll('[style]')) stripInline(el);
    stripNotificationsTable();
  }

  /* ── 7c. Strip #ea_notifications inline td backgrounds ───── */
  function stripNotificationsTable() {
    const tbl = document.querySelector('#ea_notifications');
    if (!tbl) return;
    tbl.querySelectorAll('td, th, tr').forEach(el => {
      el.style.removeProperty('background');
      el.style.removeProperty('background-color');
    });
  }

  /* ── 8. Suivi des DIT + autoreload (page entreeVisualiser) ──
     Sur la page « Clients et Problèmes » du planning :
     - recharge la page toutes les 60 s pour voir les nouvelles DIT ;
     - compare le tableau aux DIT déjà vues (localStorage) ;
     - notifie le navigateur pour chaque NOUVELLE DIT (Client + Problème). */
  const DIT_URL_RX  = /ccPlanningV2\/entreeVisualiser\.action/i;
  const DIT_SEEN_KEY = 'artis_dit_seen';
  const DIT_RELOAD_MS = 60000;

  function isDitPage() { return DIT_URL_RX.test(location.href); }

  /* Trouve le tableau dont l'entête contient Client + Problème */
  function findDitTable() {
    const tables = document.querySelectorAll('table');
    for (const t of tables) {
      const head = (t.tHead ? t.tHead.innerText : t.innerText.slice(0, 300)).toLowerCase();
      if (head.includes('client') && (head.includes('problème') || head.includes('probleme'))) return t;
    }
    return null;
  }

  /* Index colonnes Client / Problème depuis l'entête */
  function ditColumns(table) {
    const ths = table.querySelectorAll('thead th, thead td');
    let client = -1, probleme = -1;
    ths.forEach((th, i) => {
      const txt = (th.innerText || '').trim().toLowerCase();
      if (client < 0 && txt.startsWith('client')) client = i;
      if (probleme < 0 && (txt.startsWith('problème') || txt.startsWith('probleme'))) probleme = i;
    });
    return { client, probleme };
  }

  function ditRows(table) {
    const col = ditColumns(table);
    const body = table.tBodies && table.tBodies[0] ? table.tBodies[0] : table;
    const rows = body.querySelectorAll('tr');
    const out = [];
    rows.forEach(tr => {
      const cells = tr.querySelectorAll('td');
      if (!cells.length) return;
      if (tr.querySelector('.dataTables_empty')) return;
      const clean = s => (s || '').replace(/\s+/g, ' ').trim();
      const client   = col.client   >= 0 && cells[col.client]   ? clean(cells[col.client].innerText)   : '';
      const probleme = col.probleme >= 0 && cells[col.probleme] ? clean(cells[col.probleme].innerText) : '';
      if (!client && !probleme) return;
      out.push({ client, probleme, sig: (client + '||' + probleme).slice(0, 240) });
    });
    return out;
  }

  function loadSeen() {
    try { const a = JSON.parse(localStorage.getItem(DIT_SEEN_KEY) || '[]'); return Array.isArray(a) ? a : []; }
    catch (e) { return []; }
  }
  function saveSeen(arr) {
    try { localStorage.setItem(DIT_SEEN_KEY, JSON.stringify(arr.slice(-200))); } catch (e) {}
  }

  function checkDit() {
    const table = findDitTable();
    if (!table) return;
    const rows = ditRows(table);
    if (!rows.length) return;

    const seen = loadSeen();
    const firstRun = seen.length === 0;
    const seenSet = new Set(seen);
    const fresh = rows.filter(r => !seenSet.has(r.sig));

    /* Premier passage = baseline : on enregistre sans notifier (évite le spam initial) */
    if (!firstRun) {
      fresh.forEach(r => {
        const body = (r.client ? r.client + ' — ' : '') + (r.probleme || 'Nouvelle DIT');
        try {
          chrome.runtime.sendMessage({
            type: 'ARTIS_NOTIFY',
            title: 'Nouvelle DIT — ' + (r.client || 'Client'),
            body,
            tag: 'dit',
          });
        } catch (e) {}
      });
    }
    if (fresh.length || firstRun) saveSeen([...seen, ...fresh.map(r => r.sig)]);
  }

  function startDitMonitor() {
    if (!isDitPage()) return;
    /* Laisse le tableau se rendre (DataTables ajax) avant de comparer */
    setTimeout(checkDit, 1500);
    setTimeout(checkDit, 4000);
    /* Autoreload toutes les 60 s — UNIQUEMENT si l'onglet n'est pas affiché
       (inutile de recharger sous les yeux de l'utilisateur). */
    setTimeout(function tryReload() {
      if (document.hidden) location.reload();
      else setTimeout(tryReload, DIT_RELOAD_MS);   // visible → on repousse
    }, DIT_RELOAD_MS);
  }

  /* ── Bouton "Reformuler avec Gilles" sur éditeur compte rendu DIT ── */
  /* System prompt CR — passé en systemOverride pour bypasser le prompt Gilles */
  const CR_SYSTEM = `Tu es un assistant spécialisé dans la rédaction de comptes rendus d'intervention technique pour Digithall à Saint-Rémy-de-Provence (services : achats, déploiement, support tél, reprographie, network).

Ton unique rôle ici est de transformer les notes brutes de l'utilisateur en compte rendu structuré. Tu ne fais rien d'autre.

CONTEXTE DIT : un bloc « CONTEXTE DE LA DEMANDE (DIT) » peut précéder les notes (client, site, demandeur, dates, détail de la demande initiale). Il sert UNIQUEMENT à comprendre la demande — ne le recopie pas (pas de coordonnées client/site dans le compte rendu).

RÈGLES ABSOLUES :
- Base-toi sur les informations des notes fournies. Ne génère aucun fait technique inventé.
- Quand une action des notes est raccord avec la demande initiale du contexte, tu PEUX expliciter les étapes logiques évidentes qu'elle implique (ex: « mise à jour de l'ordinateur » → remise en service et vérification du bon fonctionnement pour l'utilisateur). Reste factuel, pas de détails techniques non mentionnés.
- Si une section ne peut pas être remplie avec les informations disponibles, omets-la.
- Formate avec **gras** pour les titres et points clés, tirets pour les listes.
- Réponds UNIQUEMENT avec le compte rendu, sans commentaire ni introduction.

STRUCTURE À RESPECTER :

**Constat initial**
Phrase introductive décrivant le contexte (ex: "Prise en main à distance, constat de...")

**Actions réalisées**
- Action 1
- Action 2
(liste des étapes effectuées)

**Tests effectués** (uniquement si mentionnés dans les notes)
- TEST NOM : OK / ÉCHEC

**Conclusion**
DEMANDE INITIALE RÉSOLUE : OK
ou DEMANDE INITIALE RÉSOLUE : ÉCHEC
ou DEMANDE PARTIELLEMENT RÉSOLUE : préciser`;

  /* Message utilisateur — juste les notes brutes */
  const CR_USER_PREFIX = `Voici mes notes brutes à transformer en compte rendu :\n\n`;

  /* Lit le bloc détail DIT (#s_detail_dit .card-body) → contexte précis pour Gilles :
     Client / Site / Demandeur / dates / Détail de la demande, en lignes "Label : valeur" */
  function getDitContext() {
    const body = document.querySelector('#s_detail_dit .card-body');
    if (!body) return '';
    const clean = s => (s || '').replace(/\s+/g, ' ').trim();
    const lines = [];
    body.querySelectorAll('.form-group').forEach(fg => {
      const label = clean(fg.querySelector('label') && fg.querySelector('label').textContent);
      const value = clean(fg.querySelector('.text-value') && fg.querySelector('.text-value').textContent);
      if (label && value) lines.push(label + ' : ' + value);
    });
    return lines.join('\n');
  }

  /* Convertit le markdown Gemini en HTML compatible TinyMCE inline (pas de h1-h6) */
  function crMdToHtml(md) {
    const lines = md.split('\n');
    let html = '';
    let inUl = false, inOl = false;

    const closeList = () => {
      if (inUl) { html += '</ul>'; inUl = false; }
      if (inOl) { html += '</ol>'; inOl = false; }
    };
    const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const inline = s => esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g,     '<em>$1</em>');

    for (const raw of lines) {
      const line = raw.replace(/\s+$/,'');
      if (!line.trim()) { closeList(); html += '<p>&nbsp;</p>'; continue; }
      /* Titres markdown → div gras souligné (compatible inline TinyMCE) */
      const mH = line.match(/^#{1,4}\s+(.*)/);
      if (mH) { closeList(); html += `<p><strong><u>${esc(mH[1])}</u></strong></p>`; continue; }
      const mUl = line.match(/^\s*[-*•]\s+(.*)/);
      if (mUl) { if (!inUl) { closeList(); html += '<ul>'; inUl = true; } html += `<li>${inline(mUl[1])}</li>`; continue; }
      const mOl = line.match(/^\s*\d+[.)]\s+(.*)/);
      if (mOl) { if (!inOl) { closeList(); html += '<ol>'; inOl = true; } html += `<li>${inline(mOl[1])}</li>`; continue; }
      closeList();
      html += `<p>${inline(line)}</p>`;
    }
    closeList();
    return html;
  }

  /* Injecte le bouton sur l'éditeur DIT compte rendu */
  function injectReformulerBtn() {
    const editor = document.querySelector('#ita_messclt');
    if (!editor || editor.dataset.gilesBtn) return;
    editor.dataset.gilesBtn = '1';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'artis-reformuler-btn';
    btn.title = 'Reformuler avec Gilles';
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M4 5.5h13A2.5 2.5 0 0 1 19.5 8v6A2.5 2.5 0 0 1 17 16.5H9l-4 3.2V16.5A2.5 2.5 0 0 1 4 14V8A2.5 2.5 0 0 1 6.5 5.5"/><circle cx="8.5" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="15.5" cy="11" r="1" fill="currentColor" stroke="none"/><path d="M19.5 2.5l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5z" fill="currentColor" stroke="none"/></svg> Reformuler';
    btn.style.cssText = [
      'display:flex',
      'align-items:center',
      'gap:5px',
      'padding:4px 10px',
      'border:1px solid rgba(99,102,241,0.45)',
      'border-radius:6px',
      'background:rgba(99,102,241,0.18)',
      'color:#a5b4fc',
      'font-size:0.75rem',
      'font-weight:600',
      'cursor:pointer',
      'transition:background 0.2s,color 0.2s',
      'backdrop-filter:blur(8px)',
      'line-height:1',
      'white-space:nowrap',
    ].join(';');

    btn.addEventListener('mouseenter', () => {
      btn.style.background = 'rgba(99,102,241,0.35)';
      btn.style.color = '#e0e7ff';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.background = 'rgba(99,102,241,0.18)';
      btn.style.color = '#a5b4fc';
    });

    btn.addEventListener('click', () => {
      /* Lecture texte : 3 sources par ordre de fiabilité */
      let rawText = (editor.innerText || editor.textContent || '').trim();
      /* Fallback : hidden input (HTML → strip tags) */
      if (!rawText) {
        const hi = editor.parentElement && editor.parentElement.querySelector('input[type="hidden"][name="ita_messclt"]');
        if (hi && hi.value) rawText = hi.value.replace(/<[^>]+>/g, ' ').replace(/\s+/g,' ').trim();
      }
      if (!rawText) {
        btn.innerHTML = '⚠ Champ vide';
        setTimeout(resetBtn, 2000);
        return;
      }

      btn.disabled = true;
      btn.innerHTML = '<span style="display:inline-block;animation:artis-spin 0.8s linear infinite">⟳</span> En cours…';

      /* Contexte DIT (client/site/demande) → Gilles comprend la demande initiale */
      const ditCtx = getDitContext();
      const userMsg = (ditCtx ? 'CONTEXTE DE LA DEMANDE (DIT) :\n' + ditCtx + '\n\n' : '') + CR_USER_PREFIX + rawText;
      const history = [{ role: 'user', text: userMsg }];

      const SVG_BTN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M4 5.5h13A2.5 2.5 0 0 1 19.5 8v6A2.5 2.5 0 0 1 17 16.5H9l-4 3.2V16.5A2.5 2.5 0 0 1 4 14V8A2.5 2.5 0 0 1 6.5 5.5"/><circle cx="8.5" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="15.5" cy="11" r="1" fill="currentColor" stroke="none"/><path d="M19.5 2.5l.5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5z" fill="currentColor" stroke="none"/></svg> Reformuler';
      const resetBtn = () => { btn.disabled = false; btn.innerHTML = SVG_BTN; };
      const showErr  = code => { btn.innerHTML = '⚠ ' + code; console.error('[Reformuler]', code); setTimeout(resetBtn, 5000); };

      try {
        /* Port long-lived : évite le bug MV3 "message port closed before response" */
        const port = chrome.runtime.connect({ name: 'gilles-ask' });
        let answered = false;

        port.onMessage.addListener(resp => {
          answered = true;
          port.disconnect();
          if (!resp || !resp.ok) {
            showErr((resp && resp.error) || 'NO_RESP');
            return;
          }
          const html = crMdToHtml(resp.text);
          editor.innerHTML = html;
          editor.dispatchEvent(new Event('input',  { bubbles: true }));
          editor.dispatchEvent(new Event('change', { bubbles: true }));
          const hiddenInput = editor.parentElement && editor.parentElement.querySelector('input[type="hidden"][name="ita_messclt"]');
          if (hiddenInput) hiddenInput.value = html;
          btn.innerHTML = '✓ Reformulé';
          setTimeout(resetBtn, 3000);
        });

        port.onDisconnect.addListener(() => {
          if (!answered) showErr(chrome.runtime.lastError ? chrome.runtime.lastError.message : 'Recharge la page (F5)');
        });

        port.postMessage({ type: 'GILLES_ASK', history, pages: [], systemOverride: CR_SYSTEM });
      } catch (e) {
        showErr('Recharge la page (F5)');
      }
    });

    /* Monte le bouton DANS la barre d'outils TinyMCE inline, à côté des boutons
       police/gras — la barre (.tox-tinymce-inline) est créée au focus éditeur. */
    btn.style.margin = '0 2px';
    /* mousedown sur la barre ne doit pas blur l'éditeur (sinon TinyMCE cache la barre) */
    btn.addEventListener('mousedown', e => e.preventDefault());

    function mountInToolbar() {
      if (document.getElementById('artis-reformuler-btn')) return true;   /* déjà monté */
      const toolbar = document.querySelector('.tox.tox-tinymce-inline .tox-toolbar__primary');
      if (!toolbar) return false;
      const group = document.createElement('span');
      group.className = 'tox-toolbar__group';
      group.style.cssText = 'display:flex;align-items:center;';
      group.appendChild(btn);
      toolbar.appendChild(group);
      return true;
    }

    /* Toolbar TinyMCE : remontée AU-DESSUS du bloc et CENTRÉE dessus.
       TinyMCE pose top/left inline (ancrage haut-gauche, chevauche le texte) ;
       on corrige via transform (que TinyMCE ne touche jamais). */
    function placeToolbar() {
      const tb = document.querySelector('.tox.tox-tinymce-inline');
      if (!tb) return;
      tb.style.transform = 'none';            // mesure de la position naturelle
      const tr = tb.getBoundingClientRect();
      if (!tr.width) return;
      const er = editor.getBoundingClientRect();
      const dx = Math.round((er.left + er.width / 2) - (tr.left + tr.width / 2));
      const wantTop = Math.max(8, er.top - tr.height - 10);   // 10px au-dessus du bloc
      const dy = Math.round(wantTop - tr.top);
      if (dx || dy) tb.style.transform = `translate(${dx}px, ${dy}px)`;
    }
    let _plRaf = null;
    const schedulePlace = () => {
      if (_plRaf) return;
      _plRaf = requestAnimationFrame(() => { _plRaf = null; placeToolbar(); });
    };
    /* capture:true → scroll des conteneurs internes aussi (TinyMCE re-ancre au scroll) */
    window.addEventListener('scroll', schedulePlace, { passive: true, capture: true });
    window.addEventListener('resize', schedulePlace, { passive: true });

    /* La toolbar peut être détruite/recréée par TinyMCE → à CHAQUE focus :
       monter le bouton si absent + replacer. */
    editor.addEventListener('focusin', () => {
      let tries = 0;
      (function tryMount() {
        const mounted = mountInToolbar();
        placeToolbar();
        if (!mounted && ++tries < 20) setTimeout(tryMount, 150);
      })();
    });

    /* Toolbar visible EN PERMANENCE : TinyMCE ne rend la barre qu'au 1er focus
       → focus furtif pour forcer le rendu (le CSS display !important la garde
       affichée ensuite, même après blur). Re-essais bornés. */
    let kicked = false, tries = 0;
    (function ensureToolbar() {
      if (mountInToolbar()) {
        placeToolbar();
        setTimeout(placeToolbar, 600);    /* re-place après stabilisation du layout */
        setTimeout(placeToolbar, 2000);
        return;
      }
      if (!kicked && tries >= 2) {
        kicked = true;
        try {
          const prev = document.activeElement;
          editor.focus({ preventScroll: true });
          if (prev && prev !== document.body && prev.focus) prev.focus({ preventScroll: true });
          else editor.blur();
        } catch (e) {}
      }
      if (++tries < 30) setTimeout(ensureToolbar, 300);
    })();
  }

  /* ── Init ─────────────────────────────────────────────────── */
  function init() {
    createBackground();
    injectNuclearCSS();
    enhanceLoadingScreens();
    injectRipple();
    initialSweep();   /* blanc + bleu + boutons + notifications : un seul parcours */
    tagPage();
    styleProfileCard();
    setTimeout(styleProfileCard, 800);  /* re-pass si avatar chargé tard */
    injectThemeToggle();        /* injecte theme + version */
    runSidebarStagger();        /* anime TOUS les boutons d'un coup, raccord */
    setPrimaryWidth();
    stripMenuTitles();
    setTimeout(stripMenuTitles, 1200);         /* re-pass si le menu se rend tard */
    setTimeout(collapseAsideByDefault, 500);   /* replie le volet menu une fois Artis initialisé */
    injectLoader(document);
    observeDOM();
    startDitMonitor();                    /* suivi DIT + autoreload (page entreeVisualiser) */
    tagPlanningBlocks(document);          /* préfixe ✅/❌ sur les blocs déjà présents */
    setTimeout(() => tagPlanningBlocks(document), 800);  /* re-pass si planning rendu tard */
    replaceFavicon();
    injectReformulerBtn();
    setTimeout(injectReformulerBtn, 1200);   /* re-pass si TinyMCE monte tard */
    setTimeout(injectReformulerBtn, 3000);
    /* Thème appliqué → révéler le contenu en fondu (anti-saccade reload) */
    requestAnimationFrame(() => document.documentElement.classList.add('artis-ready'));
  }

  /* ── Master switch (slider popup) ─────────────────────────── */
  function ourSheet(sheet) {
    try { return !!sheet.href && (/app-override\.css$/.test(sheet.href) || /giles\.css$/.test(sheet.href)); }
    catch (e) { return false; }
  }
  function disableThemeSheets(off) {
    for (const s of document.styleSheets) { if (ourSheet(s)) { try { s.disabled = off; } catch (e) {} } }
  }

  function boot() {
    chrome.storage.local.get(['artis_enabled', 'artis_dark', 'artis_version_btn'], s => {
      if (s && s.artis_enabled === false) {
        disableThemeSheets(true);   // thème off : on neutralise notre CSS, init non lancé
        return;
      }
      CFG.dark       = s.artis_dark !== false;        // défaut = sombre
      CFG.versionBtn = s.artis_version_btn !== false; // défaut = visible
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
      else init();
    });
  }

  /* Bascule du slider → recharge pour appliquer/retirer proprement */
  let _lastEnabled = null;
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== 'local') return;
    /* Mode sombre / bouton version : on recharge pour réappliquer proprement */
    if ('artis_dark' in changes || 'artis_version_btn' in changes) { location.reload(); return; }
    if (!('artis_enabled' in changes)) return;
    const nv = changes.artis_enabled.newValue;
    if (_lastEnabled !== null && nv !== _lastEnabled) location.reload();
    _lastEnabled = nv;
  });
  chrome.storage.local.get('artis_enabled', s => { _lastEnabled = (s && s.artis_enabled) !== false; });

  chrome.storage.local.get('artis_enabled', s => {
    if ((s && s.artis_enabled) === false) return;
    boot();
  });
})();
