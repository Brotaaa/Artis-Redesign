/* ============================================================
   Artis Login v3 — Content Script
   Futuristic canvas + fluid button effects + SSO error dark
   ============================================================ */

(function () {
  'use strict';

  /* ── 0. Strip tout fond gris/blanc sur la page login ──────── */
  function nukeWhiteBg() {
    const LIGHT = /^(white|#fff(fff)?|#f[0-9a-f]{5}|#[ef][0-9a-f]{5}|#[ef][0-9a-f]{2}|rgb\(\s*2[0-9]{2}|rgba?\(\s*2[0-9]{2})/i;
    function strip(el) {
      if (!el || el.nodeType !== 1) return;
      ['backgroundColor','background'].forEach(p => {
        const v = el.style[p];
        if (v && LIGHT.test(v.trim())) {
          el.style.removeProperty(p === 'backgroundColor' ? 'background-color' : 'background');
        }
      });
    }
    document.querySelectorAll('*').forEach(strip);

    /* Watch dynamically added nodes */
    new MutationObserver(muts => {
      muts.forEach(m => {
        m.addedNodes.forEach(n => { if (n.nodeType === 1) { strip(n); n.querySelectorAll('*').forEach(strip); }});
        if (m.type === 'attributes') strip(m.target);
      });
    }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style'] });
  }

  /* ── 1. Canvas background ─────────────────────────────────── */
  function createBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'artis-bg-canvas';
    Object.assign(canvas.style, {
      position: 'fixed', inset: '0', width: '100%', height: '100%',
      zIndex: '0', pointerEvents: 'none',
    });
    document.body.insertBefore(canvas, document.body.firstChild);
    const ctx = canvas.getContext('2d');
    let W, H, particles, animId;

    const ORBS = [
      { x: 0.12, y: 0.22, r: 0.40, c: 'rgba(99,102,241,0.20)'  },
      { x: 0.82, y: 0.68, r: 0.35, c: 'rgba(129,140,248,0.15)' },
      { x: 0.50, y: 0.08, r: 0.28, c: 'rgba(16,185,129,0.10)'  },
      { x: 0.88, y: 0.12, r: 0.22, c: 'rgba(99,102,241,0.12)'  },
      { x: 0.05, y: 0.80, r: 0.26, c: 'rgba(165,180,252,0.08)' },
    ];

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initParticles();
    }

    function initParticles() {
      const n = Math.min(90, Math.floor((W * H) / 12000));
      particles = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.4 + 0.4,
        a: Math.random() * 0.45 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      }));
    }

    function draw(ts) {
      animId = requestAnimationFrame(draw);
      const t = ts * 0.00028;

      /* BG gradient */
      const g = ctx.createLinearGradient(0, 0, W * 0.4, H);
      g.addColorStop(0,   '#060616');
      g.addColorStop(0.45,'#0c0c24');
      g.addColorStop(1,   '#09091e');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      /* Orbs */
      ORBS.forEach((orb, i) => {
        const ox = (orb.x + Math.sin(t + i * 1.4) * 0.055) * W;
        const oy = (orb.y + Math.cos(t + i * 1.0) * 0.055) * H;
        const rr = orb.r * Math.min(W, H);
        const rg = ctx.createRadialGradient(ox, oy, 0, ox, oy, rr);
        rg.addColorStop(0, orb.c);
        rg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = rg;
        ctx.beginPath(); ctx.arc(ox, oy, rr, 0, Math.PI * 2); ctx.fill();
      });

      /* Dot grid */
      ctx.fillStyle = 'rgba(99,102,241,0.055)';
      for (let x = 60; x < W; x += 60)
        for (let y = 60; y < H; y += 60) {
          ctx.beginPath(); ctx.arc(x, y, 0.9, 0, Math.PI * 2); ctx.fill();
        }

      /* Particles */
      particles.forEach(p => {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
        p.pulse += 0.012;
        const pa = p.a * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129,140,248,${pa.toFixed(3)})`; ctx.fill();
      });

      /* Connections */
      ctx.lineWidth = 0.45;
      for (let i = 0; i < particles.length; i++)
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d < 110) {
            ctx.strokeStyle = `rgba(99,102,241,${(0.14 * (1 - d / 110)).toFixed(3)})`;
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
          }
        }
    }

    resize();
    window.addEventListener('resize', resize);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw(0); cancelAnimationFrame(animId);
    } else {
      requestAnimationFrame(draw);
    }
  }

  /* ── 2. Input focus glow ──────────────────────────────────── */
  function enhanceInputs() {
    document.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('focus', () => input.closest('.has-feedback, .form-group, .col')?.classList.add('artis-focused'));
      input.addEventListener('blur',  () => {
        const p = input.closest('.has-feedback, .form-group, .col');
        p?.classList.remove('artis-focused');
        p?.classList.toggle('artis-filled', !!input.value);
      });
    });
  }

  /* ── 3. Fluid button shimmer ripple ───────────────────────── */
  function injectRippleStyle() {
    const s = document.createElement('style');
    s.textContent = `
      @keyframes artis-ripple {
        to { transform: translate(-50%,-50%) scale(32); opacity: 0; }
      }
      @keyframes artis-btn-glow {
        0%,100% { box-shadow: 0 4px 15px rgba(99,102,241,0.4), 0 0 0 1px rgba(99,102,241,0.2); }
        50%      { box-shadow: 0 6px 24px rgba(99,102,241,0.6), 0 0 0 1px rgba(99,102,241,0.35), 0 0 40px rgba(99,102,241,0.18); }
      }
      @keyframes artis-loader-dot {
        0%,80%,100% { transform: scale(0.6); opacity: 0.4; }
        40%          { transform: scale(1.0); opacity: 1; }
      }
    `;
    document.head.appendChild(s);
  }

  function addRipple(btn) {
    btn.addEventListener('click', e => {
      const r = btn.getBoundingClientRect();
      const dot = document.createElement('span');
      dot.style.cssText = `
        position:absolute;border-radius:50%;
        background:rgba(255,255,255,0.28);
        width:7px;height:7px;pointer-events:none;
        left:${e.clientX - r.left}px;top:${e.clientY - r.top}px;
        transform:translate(-50%,-50%) scale(0);
        animation:artis-ripple 0.55s ease-out forwards;z-index:9;
      `;
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(dot);
      dot.addEventListener('animationend', () => dot.remove());
    });
  }

  function enhanceButtons() {
    document.querySelectorAll('.btn, button').forEach(btn => {
      addRipple(btn);
      /* Pulse glow on submit/primary */
      if (btn.classList.contains('btn-info') || btn.classList.contains('btn-primary') ||
          btn.type === 'submit') {
        btn.style.animation = 'artis-btn-glow 3s ease-in-out infinite';
      }
    });
  }

  /* ── 4. Form group stagger ────────────────────────────────── */
  function staggerFormGroups() {
    const form = document.getElementById('loginForm') || document.querySelector('form');
    if (!form) return;
    form.querySelectorAll('.form-group, .has-feedback, .form-actions').forEach((el, i) => {
      el.style.cssText += `opacity:0;transform:translateY(12px);transition:opacity 0.42s ease ${0.3 + i*0.09}s,transform 0.42s ease ${0.3 + i*0.09}s;`;
      requestAnimationFrame(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; });
    });
  }

  /* ── 5. Password toggle ───────────────────────────────────── */
  function addPasswordToggle() {
    document.querySelectorAll('input[type="password"]').forEach(input => {
      const wrap = input.closest('.col, .has-feedback, .form-group, .input-group');
      if (!wrap) return;
      if (wrap.style.position !== 'relative') wrap.style.position = 'relative';

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Afficher/masquer le mot de passe');
      btn.className = 'artis-pw-toggle';
      btn.innerHTML = eyeOpen();
      btn.addEventListener('click', () => {
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        btn.innerHTML = show ? eyeClosed() : eyeOpen();
      });
      btn.addEventListener('mouseenter', () => { btn.style.opacity = '1'; btn.style.color = '#a5b4fc'; });
      btn.addEventListener('mouseleave', () => { btn.style.opacity = '0.6'; btn.style.color = '#94a3b8'; });
      wrap.appendChild(btn);
    });
  }

  const eyeOpen = () => `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`;
  const eyeClosed = () => `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/></svg>`;

  /* ── 6. Style erreur SSO (accès simultané) ────────────────── */
  function styleSSO() {
    /* L'erreur SSO s'affiche dans un div/p/span hors form — on le darkify */
    document.querySelectorAll('body > div:not(#artis-bg-canvas), body > p, .container, .row, .col, [class*="error"], [class*="message"], [class*="alert"]').forEach(el => {
      const bg = window.getComputedStyle(el).backgroundColor;
      if (bg && /rgb\((2[0-4]\d|25[0-5])[^)]*\)/.test(bg)) {
        el.style.setProperty('background', 'transparent', 'important');
        el.style.setProperty('background-color', 'transparent', 'important');
        el.style.setProperty('color', '#e2e8f0', 'important');
      }
    });

    /* Centrer si pas de .login-wrapper */
    if (!document.querySelector('.login-wrapper, #loginForm')) {
      document.body.style.cssText += 'display:flex;align-items:center;justify-content:center;min-height:100vh;';
      const main = document.querySelector('.container, form > div, body > div:not(#artis-bg-canvas)');
      if (main) {
        main.style.cssText += `
          background: rgba(13,13,38,0.72) !important;
          backdrop-filter: blur(24px) !important;
          border: 1px solid rgba(99,102,241,0.22) !important;
          border-radius: 20px !important;
          box-shadow: 0 24px 64px rgba(0,0,0,0.5) !important;
          padding: 36px !important;
          max-width: 480px !important;
          width: 100% !important;
          color: #e2e8f0 !important;
          font-family: 'DM Sans', sans-serif !important;
          position: relative !important;
          z-index: 2 !important;
        `;
      }
    }
  }

  /* ── 6b. Watermark JusteJohn (bas-droite) ─────────────────── */
  function injectWatermark() {
    if (document.getElementById('artis-watermark')) return;
    const img = document.createElement('img');
    img.id = 'artis-watermark';
    img.src = chrome.runtime.getURL('justejohn.png');
    img.alt = '';
    img.style.cssText = `
      position:fixed;bottom:18px;right:18px;z-index:9999;
      width:240px;height:auto;pointer-events:none;
      opacity:0.16;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.4));
      transition:opacity 0.4s ease;animation:l-fade-up 0.9s ease 0.4s both;
    `;
    document.body.appendChild(img);
  }

  /* ── 7. Favicon ───────────────────────────────────────────── */
  function replaceFavicon() {
    const url = chrome.runtime.getURL('justejohn.png');
    document.querySelectorAll("link[rel*='icon']").forEach(el => el.remove());
    const l = document.createElement('link');
    l.rel = 'icon'; l.type = 'image/png'; l.href = url;
    document.head.appendChild(l);
  }

  /* ── Init ────────────────────────────────────────────────── */
  function init() {
    nukeWhiteBg();
    createBackground();
    injectRippleStyle();
    enhanceInputs();
    enhanceButtons();
    staggerFormGroups();
    addPasswordToggle();
    styleSSO();
    injectWatermark();
    replaceFavicon();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
