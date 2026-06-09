<div align="center">

# 🎨 Artis Redesign

### Extension Chrome / Edge — Thème dark glassmorphism pour Artis.net

Transforme l'ERP **Artis.net** en une interface moderne, sombre et fluide.
Violet indigo · glassmorphism · animations soignées · thème clair/sombre.

![version](https://img.shields.io/badge/version-1.8.0-6366f1)
![manifest](https://img.shields.io/badge/manifest-v3-818cf8)
![platform](https://img.shields.io/badge/Chrome%20%7C%20Edge-supported-10b981)

</div>

---

## ✨ Fonctionnalités

| | |
|---|---|
| 🌑 **Dark glassmorphism** | Thème sombre complet, surfaces translucides, blur, bordures indigo |
| ☀️ **Thème clair/sombre** | Toggle lune/soleil dans la sidebar, persistance `localStorage` |
| 🎯 **Élimination du blanc** | Strip runtime (MutationObserver) + CSS de tout fond blanc/gris résiduel |
| 💜 **Bleu Artis → violet** | Remplacement total du bleu d'origine (`#00AEEF`) par l'indigo `#6366f1` |
| 🖼️ **Login retravaillé** | Canvas animé (orbes + particules), boutons fluides, toggle mot de passe |
| 📅 **Planning** | Grille dark, blocs harmonisés, zoom doux au survol, striping permanent |
| ⏳ **Écran de chargement** | Loader custom (double anneau orbital + noyau pulsant) |
| 🔖 **Bouton Version** | Changelog intégré accessible depuis la sidebar |
| ⚡ **Animations** | Stagger d'entrée, transitions spring `cubic-bezier`, hover fluides |

---

## 📦 Installation

1. Télécharger / cloner ce dépôt
   ```bash
   git clone https://github.com/SimplementJohn/Artis-Redesign.git
   ```
2. Ouvrir `chrome://extensions` (ou `edge://extensions`)
3. Activer le **Mode développeur** (coin haut-droit)
4. **Charger l'extension non empaquetée** → sélectionner le dossier `extension/`
5. Ouvrir Artis.net — le thème s'applique automatiquement

> Le `.zip` racine (`artis-extension.zip`) est aussi prêt à charger directement.

---

## 🗂️ Structure

```
extension/
├── manifest.json         # Manifest V3 — patterns URL
├── content.js            # Login : canvas + animations + watermark
├── login-override.css    # Login : glassmorphism dark
├── app-content.js        # App : nuclear CSS, MutationObserver, toggle theme, loader
├── app-override.css      # App : thème complet
├── favicon.png           # Favicon personnalisée
└── justejohn.png         # Watermark login

CLAUDE.md                 # Doc technique (sélecteurs, lexique, pièges)
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

**Thème clair** : canvas slate `#f6f7fb`, cards blanches, accents indigo `#eef2ff`.

**Typo** : Plus Jakarta Sans (app) · Space Grotesk + DM Sans (login).

---

## 🌐 Pages ciblées

```
Login : *://artis.digithall.org/*/composants/login/*
App   : *://artis.digithall.org/ArtisWebDigitInvest/*
```

---

## 🛠️ Stack

HTML · Bootstrap 5 · jQuery (Metronic) — pas de framework moderne.
Vanilla JS + CSS pur côté extension.

---

<div align="center">

Fait avec 💜 par **[JusteJohn](https://github.com/SimplementJohn)**

</div>
