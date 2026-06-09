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
    let W, H, particles, animId;

    const ORBS = [
      { x: 0.05, y: 0.3,  r: 0.25, color: 'rgba(99,102,241,0.12)' },
      { x: 0.95, y: 0.6,  r: 0.30, color: 'rgba(129,140,248,0.10)' },
      { x: 0.5,  y: 0.05, r: 0.20, color: 'rgba(16,185,129,0.08)'  },
      { x: 0.8,  y: 0.95, r: 0.22, color: 'rgba(99,102,241,0.08)'  },
    ];

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initParticles();
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

    function draw(ts) {
      animId = requestAnimationFrame(draw);

      const grad = ctx.createLinearGradient(0, 0, W * 0.5, H);
      grad.addColorStop(0,   '#161634');
      grad.addColorStop(0.5, '#1b1b40');
      grad.addColorStop(1,   '#181838');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      const t = ts * 0.00025;
      ORBS.forEach((orb, i) => {
        const ox = (orb.x + Math.sin(t + i * 1.5) * 0.05) * W;
        const oy = (orb.y + Math.cos(t + i * 1.1) * 0.05) * H;
        const rr = orb.r * Math.min(W, H);
        const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, rr);
        g.addColorStop(0, orb.color);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(ox, oy, rr, 0, Math.PI * 2);
        ctx.fill();
      });

      /* Subtle dot grid */
      ctx.fillStyle = 'rgba(99,102,241,0.06)';
      const spacing = 40;
      for (let x = spacing; x < W; x += spacing) {
        for (let y = spacing; y < H; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

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

      ctx.lineWidth = 0.4;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.strokeStyle = `rgba(99,102,241,${0.12 * (1 - d / 100)})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    resize();
    window.addEventListener('resize', resize);

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      draw(0);
      cancelAnimationFrame(animId);
    } else {
      requestAnimationFrame(draw);
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

  function stripAllWhite(root) {
    root.querySelectorAll('*').forEach(stripWhiteBg);
  }

  /* ── 5. Observe DOM for dynamic panels + new table rows ──── */
  function observeDOM() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return;
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
          /* Strip white + Artis blue from any newly added subtree */
          stripWhiteBg(node);
          stripArtisBlueBg(node);
          if (node.children && node.children.length) {
            stripAllWhite(node);
            stripAllArtisBlueBg(node);
          }
        });

        /* Also handle attribute changes (inline style mutations on existing nodes) */
        if (m.type === 'attributes' && m.attributeName === 'style') {
          stripWhiteBg(m.target);
          stripArtisBlueBg(m.target);
        }
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style'],
    });
  }

  /* ── 6. Theme toggle button (dark ↔ light) ───────────────── */
  const STORAGE_KEY = 'artis-theme';

  const MOON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;
  const SUN_SVG  = `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="5"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;

  function injectThemeToggle() {
    /* Attendre que la sidebar soit présente */
    const sidebar = document.querySelector('.aside-primary');
    if (!sidebar) return;

    /* Restore saved theme */
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light') document.documentElement.classList.add('artis-light');

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

    /* ── Bouton VERSION (sous le toggle theme) ──────────────── */
    injectVersionButton(wrapper);
  }

  /* ── 6b1. Changelog + bouton version ──────────────────────── */
  const ARTIS_VERSION = '1.8.0';
  const CHANGELOG = [
    { v: '1.8.0', d: '2026-06-09', notes: [
      'Barre de recherche masquée sur les pages planning',
      'Pictos theme/version encore agrandis',
      'Publication GitHub + README',
    ]},
    { v: '1.7.5', d: '2026-06-09', notes: [
      'Zoom DIT au survol ralenti (0.42s) pour un effet plus doux',
    ]},
    { v: '1.7.4', d: '2026-06-09', notes: [
      'Hover favoris + checklist plus fluide (slide, glow, étoile pulse)',
      'Carte profil agrandie (plus de scrollbar)',
      'Pictos theme/version agrandis',
    ]},
    { v: '1.7.3', d: '2026-06-09', notes: [
      'Entrée sidebar : stagger piloté en JS (1 seule timeline) → boutons theme/version parfaitement raccord avec les natifs',
    ]},
    { v: '1.7.2', d: '2026-06-09', notes: [
      'Boutons theme/version : plus de pop en retard (animation d\'entrée retirée)',
    ]},
    { v: '1.7.1', d: '2026-06-09', notes: [
      'Lignes planning : striping permanent (différence de couleur toujours visible)',
    ]},
    { v: '1.7.0', d: '2026-06-09', notes: [
      'Zoom DIT planning passe au-dessus de tout (z-index + overflow)',
      'Description DIT apparaît après 500ms au survol',
      'Icône lune/soleil agrandie (46px)',
    ]},
    { v: '1.6.0', d: '2026-06-09', notes: [
      'Bouton Version + changelog ajouté',
      'Logo JusteJohn login agrandi (x2)',
      'Tooltips passent au-dessus du volet favoris',
    ]},
    { v: '1.5.0', d: '2026-06-09', notes: [
      'Carte profil #thumbnail re-thémée (fin du bleu #03a9f4) + glow derrière la PP',
      'Surbrillance blanche des boutons sidebar réduite (violet)',
      'Menus flottants body-level : texte forcé clair',
    ]},
    { v: '1.4.0', d: '2026-06-09', notes: [
      'Volet favoris : flyout flottant (ne décale plus le tableau)',
      'Blocs planning harmonisés + hover mini-zoom',
      'Loader chargement custom (double anneau + noyau pulsant)',
    ]},
    { v: '1.3.0', d: '2026-06-09', notes: [
      'Thème clair violet/slate propre (toggle lune/soleil)',
      'Animation fluide déroulé menu + barre recherche',
      'Stagger entrée des icônes sidebar',
    ]},
    { v: '1.2.0', d: '2026-06-09', notes: [
      'Tableaux : élimination totale du blanc (même vides)',
      'Bleu Artis → violet partout',
      'Favicon personnalisée',
    ]},
    { v: '1.1.0', d: '2026-06-09', notes: [
      'Thème dark glassmorphism interface interne',
      'Page login retravaillée + canvas animé',
    ]},
  ];

  const VERSION_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`;

  function injectVersionButton(afterWrapper) {
    const ref = afterWrapper;
    const wrapper = ref.cloneNode(false);
    wrapper.removeAttribute('id');
    const refBtn = ref.querySelector('.nav-link, a, button');
    const btn = refBtn ? refBtn.cloneNode(false) : document.createElement('a');
    btn.id = 'artis-version-btn';
    if (refBtn) btn.className = refBtn.className.replace(/\bactive\b/g, '').trim();
    btn.setAttribute('aria-label', 'Notes de version');
    btn.setAttribute('title', 'Version ' + ARTIS_VERSION);
    btn.setAttribute('role', 'button');
    btn.setAttribute('href', 'javascript:void(0)');
    ['data-kt-menu-trigger','data-bs-toggle','data-bs-target','data-id'].forEach(a => btn.removeAttribute(a));
    btn.innerHTML = VERSION_SVG + '<span class="artis-version-badge">v' + ARTIS_VERSION + '</span>';
    wrapper.appendChild(btn);
    ref.insertAdjacentElement('afterend', wrapper);

    btn.addEventListener('click', showChangelog);
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
      el.style.animationDelay = (i * 0.075) + 's';
      el.classList.remove('artis-stagger-init');
      el.classList.add('artis-stagger-go');
    });
  }

  function showChangelog() {
    if (document.getElementById('artis-changelog-overlay')) return;
    const overlay = document.createElement('div');
    overlay.id = 'artis-changelog-overlay';
    overlay.innerHTML = `
      <div id="artis-changelog-modal">
        <div class="artis-cl-header">
          <div>
            <h3>Notes de version</h3>
            <span class="artis-cl-current">Version actuelle : v${ARTIS_VERSION}</span>
          </div>
          <button id="artis-cl-close" aria-label="Fermer">&times;</button>
        </div>
        <div class="artis-cl-body">
          ${CHANGELOG.map((c, i) => `
            <div class="artis-cl-entry${i === 0 ? ' latest' : ''}">
              <div class="artis-cl-vrow">
                <span class="artis-cl-tag">v${c.v}</span>
                <span class="artis-cl-date">${c.d}</span>
                ${i === 0 ? '<span class="artis-cl-new">ACTUELLE</span>' : ''}
              </div>
              <ul>${c.notes.map(n => `<li>${n}</li>`).join('')}</ul>
            </div>`).join('')}
        </div>
      </div>`;
    document.body.appendChild(overlay);

    const close = () => { overlay.style.opacity = '0'; setTimeout(() => overlay.remove(), 250); };
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    overlay.querySelector('#artis-cl-close').addEventListener('click', close);
    document.addEventListener('keydown', function esc(e){ if(e.key==='Escape'){ close(); document.removeEventListener('keydown', esc);} });
    requestAnimationFrame(() => { overlay.style.opacity = '1'; });
  }

  /* ── 6c. Inject custom loader into loading screens ────────── */
  function injectLoader(scope) {
    const root = scope && scope.nodeType === 1 ? scope : document;
    const targets = [];
    if (root.matches && root.matches('.box-rotate-loader, .chgtContent')) targets.push(root);
    if (root.querySelectorAll) targets.push(...root.querySelectorAll('.box-rotate-loader, .chgtContent'));

    targets.forEach(container => {
      if (container.querySelector('.artis-loader')) return; // déjà injecté
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

  /* ── 6c2. Flags de page selon URL (scopes CSS ciblés) ─────── */
  function tagPage() {
    const url = location.href;
    const root = document.documentElement;
    if (/entreeVisualiser\.action/i.test(url)) root.classList.add('artis-page-entree');
    if (/ccPlanningV2/i.test(url) || document.body.classList.contains('page-ccPlanningV2'))
      root.classList.add('artis-page-planning');
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
    const faviconUrl = chrome.runtime.getURL('justejohn.png');
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

  function stripAllArtisBlueBg(root) {
    root.querySelectorAll('*').forEach(stripArtisBlueBg);
  }

  /* ── 7. Force transparent on buttons with white bg ──────── */
  function stripWhiteButtons() {
    document.querySelectorAll('button, .btn, [role="button"], input[type="button"], input[type="submit"]').forEach(el => {
      /* Remove ALL inline background overrides on buttons */
      el.style.removeProperty('background');
      el.style.removeProperty('background-color');
      stripWhiteBg(el);
    });
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

  /* ── 7b. Force transparent on form wrappers ─────────────── */
  function stripFormWrappers() {
    /* Artis nests page content inside <form> — strip any bg on descendants */
    document.querySelectorAll('body > form, body > form *').forEach(el => {
      if (el.nodeType !== 1) return;
      /* Skip sidebar / aside elements */
      if (el.closest('.aside-primary') || el.closest('.aside-secondary')) return;
      stripWhiteBg(el);
    });
  }

  /* ── Init ─────────────────────────────────────────────────── */
  function init() {
    createBackground();
    injectNuclearCSS();
    enhanceLoadingScreens();
    injectRipple();
    stripAllWhite(document.body);
    stripAllArtisBlueBg(document.body);
    stripFormWrappers();
    stripWhiteButtons();
    stripNotificationsTable();
    tagPage();
    styleProfileCard();
    setTimeout(styleProfileCard, 800);  /* re-pass si avatar chargé tard */
    injectThemeToggle();        /* injecte theme + version */
    runSidebarStagger();        /* anime TOUS les boutons d'un coup, raccord */
    setPrimaryWidth();
    injectLoader(document);
    observeDOM();
    replaceFavicon();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
