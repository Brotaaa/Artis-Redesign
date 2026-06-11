/* Popup — interrupteurs + mode thème (sombre/auto/clair) + clé Gilles */

const $ = id => document.getElementById(id);

/* Version depuis le manifest */
try { $('pp-ver').textContent = 'v' + chrome.runtime.getManifest().version; } catch (e) {}

/* ── Mode thème (segmented) ─────────────────────────────────── */
const MODE_BTNS = Array.from(document.querySelectorAll('#pp-mode button'));
let themeMode = 'dark';

function paintMode() {
  MODE_BTNS.forEach(b => b.classList.toggle('active', b.dataset.mode === themeMode));
}

MODE_BTNS.forEach(b => b.addEventListener('click', () => {
  if (b.disabled || b.dataset.mode === themeMode) return;
  themeMode = b.dataset.mode;
  paintMode();
  /* app-content recharge les onglets Artis avec l'overlay anti-saccade */
  chrome.storage.local.set({ artis_theme_mode: themeMode });
}));

/* ── Charger l'état (défaut = activé) ───────────────────────── */
chrome.storage.local.get(
  ['artis_enabled', 'artis_theme_mode', 'artis_dark', 'artis_version_btn',
   'giles_enabled', 'giles_page_share', 'notif_enabled', 'giles_api_key'], s => {
  $('pp-main').checked    = s.artis_enabled !== false;
  $('pp-version').checked = s.artis_version_btn !== false;
  $('pp-giles').checked   = s.giles_enabled !== false;
  $('pp-pages').checked   = s.giles_page_share !== false;
  $('pp-notif').checked   = s.notif_enabled === true;   // défaut décoché
  /* Migration : ancien slider artis_dark si pas encore de mode */
  themeMode = s.artis_theme_mode || (s.artis_dark === false ? 'light' : 'dark');
  paintMode();
  syncDependentDisabled();
  if (s.giles_api_key) $('pp-key').placeholder = 'Clé personnalisée enregistrée ✓';
});

/* ── Master toggle ──────────────────────────────────────────── */
$('pp-main').addEventListener('change', e => {
  if (!e.target.checked) {
    const ok = confirm("Désactiver l'extension ?\n\nArtis risque de ne plus s'afficher correctement. La page va se recharger.");
    if (!ok) { e.target.checked = true; return; }
  }
  chrome.storage.local.set({ artis_enabled: e.target.checked }, () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs[0]) chrome.tabs.reload(tabs[0].id);
    });
  });
  syncDependentDisabled();
});

/* ── Interrupteurs simples ──────────────────────────────────── */
$('pp-version').addEventListener('change', e => {
  chrome.storage.local.set({ artis_version_btn: e.target.checked });
});
$('pp-giles').addEventListener('change', e => {
  chrome.storage.local.set({ giles_enabled: e.target.checked });
});
$('pp-pages').addEventListener('change', e => {
  chrome.storage.local.set({ giles_page_share: e.target.checked });
});

/* Notifications — demande l'autorisation au navigateur quand activé */
$('pp-notif').addEventListener('change', e => {
  if (e.target.checked) {
    if (!('Notification' in window)) {
      alert("Notifications non supportées par ce navigateur.");
      e.target.checked = false;
      return;
    }
    Notification.requestPermission().then(perm => {
      if (perm === 'granted') {
        chrome.storage.local.set({ notif_enabled: true });
      } else {
        e.target.checked = false;
        chrome.storage.local.set({ notif_enabled: false });
        if (perm === 'denied') {
          alert("Notifications bloquées par le navigateur.\nAutorise-les dans les réglages du site/extension puis réessaie.");
        }
      }
    });
  } else {
    chrome.storage.local.set({ notif_enabled: false });
  }
});

/* Si le thème est off, les réglages dépendants sont grisés */
function syncDependentDisabled() {
  const off = !$('pp-main').checked;
  $('pp-giles').disabled   = off;
  $('pp-pages').disabled   = off;
  $('pp-version').disabled = off;
  MODE_BTNS.forEach(b => { b.disabled = off; });
}

/* ── Enregistrer la clé API ─────────────────────────────────── */
$('pp-key-save').addEventListener('click', () => {
  const val = $('pp-key').value.trim();
  const hint = $('pp-key-hint');
  if (val) {
    chrome.storage.local.set({ giles_api_key: val }, () => {
      hint.textContent = 'Clé enregistrée ✓';
      $('pp-key').value = '';
      $('pp-key').placeholder = 'Clé personnalisée enregistrée ✓';
      checkApi();   // revérifie avec la nouvelle clé
    });
  } else {
    chrome.storage.local.remove('giles_api_key', () => {
      hint.textContent = 'Clé effacée — fichier apigemini.txt utilisé';
      $('pp-key').placeholder = 'Laisser vide = clé du fichier apigemini.txt';
      checkApi();
    });
  }
  setTimeout(() => { hint.textContent = ''; }, 2500);
});

/* ── Pastille état API (vert = répond / rouge = erreur) ─────── */
const API_ERR = {
  NO_KEY:      "Aucune clé API — vérifier la clé",
  KEY_INVALID: "Clé API invalide — vérifier la clé",
  QUOTA:       "Quota Gemini dépassé — réessaie plus tard / autre clé",
  OVERLOAD:    "Modèles surchargés — réessaie dans un instant",
  MODEL:       "Modèle indisponible pour cette clé",
  API:         "Erreur API — vérifier l'API",
  NETWORK:     "Pas de connexion au service IA",
  PARSE:       "Réponse illisible du service IA",
  EXT:         "Service worker injoignable",
  UNKNOWN:     "Erreur inconnue — vérifier l'API",
};

function setApi(state, text) {
  const box = $('pp-api');
  box.classList.remove('checking', 'ok', 'fail');
  box.classList.add(state);
  $('pp-api-txt').textContent = text;
  $('pp-api-retry').hidden = (state !== 'fail');
}

function checkApi() {
  setApi('checking', "Vérification de l'API…");
  try {
    chrome.runtime.sendMessage({ type: 'GILES_PING' }, resp => {
      if (chrome.runtime.lastError) { setApi('fail', API_ERR.EXT + ' (code : EXT)'); return; }
      if (resp && resp.ok) { setApi('ok', 'API connectée — Gilles opérationnel'); return; }
      const code = (resp && resp.error) || 'UNKNOWN';
      const msg  = API_ERR[code] || API_ERR.UNKNOWN;
      const det  = resp && resp.detail ? ' — ' + String(resp.detail).slice(0, 60) : '';
      setApi('fail', `${msg} (code : ${code})${det}`);
    });
  } catch (e) {
    setApi('fail', API_ERR.EXT + ' (code : EXT)');
  }
}

$('pp-api-retry').addEventListener('click', checkApi);
checkApi();   // au chargement de la popup

/* ── Lien vers la page de paramètres avancés ── */
$('pp-options-link').addEventListener('click', e => {
  e.preventDefault();
  chrome.runtime.openOptionsPage();
});
