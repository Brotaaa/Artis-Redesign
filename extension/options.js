const $ = id => document.getElementById(id);

const STORAGE_KEYS = [
  'artis_enabled', 'artis_theme_mode', 'artis_version_btn',
  'giles_enabled', 'giles_page_share', 'giles_api_key', 'giles_model_pref',
  'notif_enabled', 'dit_interval'
];

/* ── Navigation ── */
document.querySelectorAll('.opt-nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.opt-nav-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.opt-section').forEach(s => s.classList.remove('active'));
    item.classList.add('active');
    $('sec-' + item.dataset.section).classList.add('active');
  });
});

/* ── Version ── */
try {
  const ver = 'v' + chrome.runtime.getManifest().version;
  $('opt-ver').textContent = ver;
  $('opt-about-ver').textContent = ver;
} catch (e) {}

/* ── Mode thème ── */
const MODE_BTNS = Array.from(document.querySelectorAll('#opt-mode button'));
let themeMode = 'dark';

function paintMode() {
  MODE_BTNS.forEach(b => b.classList.toggle('active', b.dataset.mode === themeMode));
}

MODE_BTNS.forEach(b => b.addEventListener('click', () => {
  if (b.dataset.mode === themeMode) return;
  themeMode = b.dataset.mode;
  paintMode();
  chrome.storage.local.set({ artis_theme_mode: themeMode });
  toast('Thème mis à jour');
}));

/* ── Charger l'état ── */
chrome.storage.local.get(STORAGE_KEYS, s => {
  $('opt-main').checked    = s.artis_enabled !== false;
  $('opt-version').checked = s.artis_version_btn !== false;
  $('opt-giles').checked   = s.giles_enabled !== false;
  $('opt-pages').checked   = s.giles_page_share !== false;
  $('opt-notif').checked   = s.notif_enabled === true;
  themeMode = s.artis_theme_mode || (s.artis_dark === false ? 'light' : 'dark');
  paintMode();

  if (s.giles_api_key) $('opt-key').placeholder = 'Clé personnalisée enregistrée ✓';
  if (s.giles_model_pref) $('opt-model').value = s.giles_model_pref;

  const interval = s.dit_interval || 60;
  $('opt-dit-interval').value = interval;
  $('opt-dit-interval-val').textContent = interval + ' s';
});

/* ── Toggles ── */
$('opt-main').addEventListener('change', e => {
  if (!e.target.checked) {
    if (!confirm("Désactiver l'extension ?\n\nArtis risque de ne plus s'afficher correctement.")) {
      e.target.checked = true;
      return;
    }
  }
  chrome.storage.local.set({ artis_enabled: e.target.checked });
  toast(e.target.checked ? 'Extension activée' : 'Extension désactivée');
});

$('opt-version').addEventListener('change', e => {
  chrome.storage.local.set({ artis_version_btn: e.target.checked });
  toast('Paramètre enregistré');
});

$('opt-giles').addEventListener('change', e => {
  chrome.storage.local.set({ giles_enabled: e.target.checked });
  toast(e.target.checked ? 'Gilles activé' : 'Gilles désactivé');
});

$('opt-pages').addEventListener('change', e => {
  chrome.storage.local.set({ giles_page_share: e.target.checked });
  toast('Paramètre enregistré');
});

$('opt-notif').addEventListener('change', e => {
  if (e.target.checked) {
    Notification.requestPermission().then(perm => {
      if (perm === 'granted') {
        chrome.storage.local.set({ notif_enabled: true });
        toast('Notifications activées');
      } else {
        e.target.checked = false;
        chrome.storage.local.set({ notif_enabled: false });
        toast('Notifications refusées par le navigateur');
      }
    });
  } else {
    chrome.storage.local.set({ notif_enabled: false });
    toast('Notifications désactivées');
  }
});

/* ── Modèle Gemini ── */
$('opt-model').addEventListener('change', e => {
  chrome.storage.local.set({ giles_model_pref: e.target.value });
  toast('Modèle enregistré');
});

/* ── Clé API ── */
$('opt-key-save').addEventListener('click', () => {
  const val = $('opt-key').value.trim();
  const hint = $('opt-key-hint');
  if (val) {
    chrome.storage.local.set({ giles_api_key: val }, () => {
      hint.textContent = 'Clé enregistrée ✓';
      $('opt-key').value = '';
      $('opt-key').placeholder = 'Clé personnalisée enregistrée ✓';
      checkApi();
      toast('Clé API enregistrée');
    });
  } else {
    chrome.storage.local.remove('giles_api_key', () => {
      hint.textContent = 'Clé effacée — fichier apigemini.txt utilisé';
      $('opt-key').placeholder = 'Laisser vide = clé du fichier apigemini.txt';
      checkApi();
      toast('Clé API effacée');
    });
  }
  setTimeout(() => { hint.textContent = ''; }, 3000);
});

/* ── Intervalle DIT ── */
$('opt-dit-interval').addEventListener('input', e => {
  $('opt-dit-interval-val').textContent = e.target.value + ' s';
});
$('opt-dit-interval').addEventListener('change', e => {
  chrome.storage.local.set({ dit_interval: Number(e.target.value) });
  toast('Intervalle enregistré');
});

/* ── API état ── */
const API_ERR = {
  NO_KEY: 'Aucune clé API', KEY_INVALID: 'Clé API invalide',
  QUOTA: 'Quota dépassé', OVERLOAD: 'Modèles surchargés',
  MODEL: 'Modèle indisponible', API: 'Erreur API',
  NETWORK: 'Pas de connexion', PARSE: 'Réponse illisible',
  EXT: 'Service worker injoignable', UNKNOWN: 'Erreur inconnue',
};

function setApi(state, text) {
  const box = $('opt-api');
  box.classList.remove('checking', 'ok', 'fail');
  box.classList.add(state);
  $('opt-api-txt').textContent = text;
  $('opt-api-retry').hidden = state !== 'fail';
}

function checkApi() {
  setApi('checking', "Vérification de l'API…");
  try {
    chrome.runtime.sendMessage({ type: 'GILES_PING' }, resp => {
      if (chrome.runtime.lastError) { setApi('fail', API_ERR.EXT); return; }
      if (resp && resp.ok) { setApi('ok', 'API connectée — Gilles opérationnel'); return; }
      const code = (resp && resp.error) || 'UNKNOWN';
      setApi('fail', (API_ERR[code] || API_ERR.UNKNOWN) + ' (' + code + ')');
    });
  } catch (e) {
    setApi('fail', API_ERR.EXT);
  }
}

$('opt-api-retry').addEventListener('click', checkApi);
checkApi();

/* ── Export ── */
$('opt-export').addEventListener('click', () => {
  chrome.storage.local.get(STORAGE_KEYS, data => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = 'artis-redesign-settings.json';
    a.click();
    URL.revokeObjectURL(url);
    toast('Paramètres exportés');
  });
});

/* ── Import ── */
$('opt-import').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const hint = $('opt-import-hint');
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      const filtered = {};
      STORAGE_KEYS.forEach(k => { if (k in data) filtered[k] = data[k]; });
      chrome.storage.local.set(filtered, () => {
        hint.textContent = 'Importé ✓ — rechargez pour appliquer';
        toast('Paramètres importés');
        setTimeout(() => location.reload(), 1200);
      });
    } catch {
      hint.textContent = 'Fichier invalide';
    }
  };
  reader.readAsText(file);
  e.target.value = '';
});

/* ── Reset ── */
$('opt-reset').addEventListener('click', () => {
  if (!confirm('Réinitialiser tous les paramètres ?\n\nCette action est irréversible.')) return;
  chrome.storage.local.remove(STORAGE_KEYS, () => {
    toast('Réinitialisé — rechargement…');
    setTimeout(() => location.reload(), 1000);
  });
});

/* ── Changelog ── */
(async () => {
  try {
    const url  = chrome.runtime.getURL('CHANGELOG.md');
    const resp = await fetch(url);
    if (!resp.ok) throw new Error();
    const text = await resp.text();
    $('opt-changelog').textContent = text.slice(0, 8000);
  } catch {
    $('opt-changelog').textContent = 'Changelog non disponible dans cette version.';
  }
})();

/* ── Toast ── */
let toastTimer;
function toast(msg) {
  const el = $('opt-toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}
