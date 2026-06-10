<div align="center">

# 🎨 Artis Redesign

### Extension Chrome / Edge — Thème dark glassmorphism + assistant IA pour Artis.net

Transforme l'ERP **Artis.net** en une interface moderne, sombre et fluide,
avec **Gilles**, un assistant IA intégré (Gemini) qui connaît la doc Artis
et le contenu des pages visitées.

![manifest](https://img.shields.io/badge/manifest-v3-818cf8)
![platform](https://img.shields.io/badge/Chrome%20%7C%20Edge-supported-10b981)
![stack](https://img.shields.io/badge/vanilla-JS%20%2B%20CSS-6366f1)

</div>

---

## ✨ Fonctionnalités

### Thème
| | |
|---|---|
| 🌑 **Dark glassmorphism** | Thème sombre complet, surfaces translucides, bordures indigo |
| ☀️ **Clair/sombre** | Toggle lune/soleil dans la sidebar, persistant |
| 💜 **Bleu Artis → violet** | Remplacement du bleu d'origine (`#00AEEF`) par l'indigo `#6366f1` |
| 🎯 **Zéro blanc résiduel** | Strip runtime (MutationObserver batché) + CSS « nuclear » |
| 🖼️ **Login retravaillé** | Canvas animé (30 fps, en pause onglet caché), toggle mot de passe |
| 📅 **Planning** | Grille dark, blocs harmonisés, état ✅/❌/⏳ dans le titre des blocs |
| ⏳ **Chargement** | Loader custom double anneau, overlay dark |

### Gilles — assistant IA
| | |
|---|---|
| 💬 **Chat intégré** | Pop-up depuis la sidebar, Markdown, historique local |
| 📚 **Base de connaissance** | Doc Artis bundlée, récupération ciblée par question |
| 📄 **Mémoire des pages** | Se souvient des pages visitées dans la session (désactivable) |
| ✍️ **Bouton Reformuler** | Dans la toolbar du compte rendu d'intervention : transforme les notes brutes en CR structuré, en lisant le contexte de la DIT (client, site, demande) |
| 🔔 **Notifications** | Nouvelles DIT + réponses de Gilles quand l'onglet n'est pas affiché (opt-in) |
| 🔒 **Confidentialité** | Tokens de session jamais envoyés ; partage des pages désactivable ; données stockées uniquement en local |

---

## 📦 Installation

1. Cloner le dépôt
   ```bash
   git clone https://github.com/SimplementJohn/Artis-Redesign.git
   ```
2. Ouvrir `chrome://extensions` (ou `edge://extensions`)
3. Activer le **Mode développeur**
4. **Charger l'extension non empaquetée** → sélectionner le dossier `extension/`
5. Ouvrir Artis.net — le thème s'applique automatiquement
6. **Pour Gilles** : cliquer l'icône de l'extension → coller une clé API
   [Google AI Studio](https://aistudio.google.com/apikey) → Enregistrer

La popup de l'extension permet d'activer/désactiver : le thème, le mode sombre,
Gilles, le partage des pages, les notifications et le bouton version.

---

## 🗂️ Structure

```
extension/
├── manifest.json          # MV3 — permissions minimales (storage, notifications)
├── content.js             # Login : canvas + animations + password toggle
├── login-override.css     # Login : glassmorphism dark
├── app-content.js         # App : thème runtime, observer, toggle, Reformuler, suivi DIT
├── app-override.css       # App : thème complet
├── giles.js / giles.css   # Gilles : UI chat (pop-up, conversations)
├── giles-bg.js            # Service worker : appels Gemini, base de connaissance
├── prompts/               # Préprompt système de Gilles
├── knowledge/ + artis.txt # Doc Artis bundlée (sync via sync-knowledge.ps1)
├── fonts/                 # Polices locales (aucune requête externe)
└── popup.html/.css/.js    # Réglages (sliders + clé API)

CLAUDE.md     # Doc technique agent (sélecteurs, lexique, pièges, règles)
AUDIT.md      # Audit perf/sécu + plan d'optimisation + règles code futur
ERROR.md      # Journal des erreurs à ne plus refaire
```

---

## 🎨 Design system

| Token | Valeur | Usage |
|-------|--------|-------|
| `--a-bg` | `#181836` | Fond page |
| `--a-s1` | `#1e1e44` | Surfaces cards |
| `--a-p` | `#6366f1` | Indigo primaire |
| `--a-p2` | `#818cf8` | Indigo clair (hover/actif) |
| `--a-text` | `#e2e8f0` | Texte principal |
| `--a-green` | `#10b981` | Vert success |

**Typo** : Plus Jakarta Sans (app) · Space Grotesk + DM Sans (login) — bundlées localement.

---

## 🌐 Pages ciblées

```
Login : https://artis.digithall.org/*/composants/login/*
App   : https://artis.digithall.org/ArtisWebDigitInvest/*
```

## 🛠️ Stack

Cible : HTML Bootstrap 5 · jQuery (Metronic) · TinyMCE 6 — pas de framework moderne.
Extension : vanilla JS + CSS pur, zéro dépendance, zéro build.

---

<div align="center">

Fait avec 💜 par **[JusteJohn](https://github.com/SimplementJohn)**

</div>
