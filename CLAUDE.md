# Artis Login Enhancer — CLAUDE.md

## 🛑 VÉRIFIER `error.md` AVANT TOUTE MODIF

**RÈGLE PERMANENTE :** Avant chaque modification, lire `error.md` (racine projet) pour ne pas répéter une erreur déjà signalée. Quand l'utilisateur signale une erreur, l'ajouter à `error.md` immédiatement.

## ⚙️ MAINTENANCE AUTO DE CE FICHIER

**RÈGLE PERMANENTE — à appliquer à chaque session sans qu'on le redemande :**
Dès qu'un nouvel élément est traité, tenir ce CLAUDE.md à jour automatiquement :
- **Nouvelle URL/page** rencontrée → l'ajouter à la table « LIENS / PAGES UTILES » avec description + ce qui y a été corrigé.
- **Nouveau mot-clé utilisateur** → l'ajouter au « LEXIQUE ».
- **Nouvelle classe/sélecteur clé** découverte (ex: `#thumbnail`, `.bg-blue`) → lexique + pièges.
- **Nouveau piège/comportement** → section « Pièges connus ».
- Convertir dates relatives en absolues. Pas de doublons : mettre à jour la ligne existante plutôt que dupliquer.
- **À chaque patch/modif visuelle** : incrémenter `ARTIS_VERSION` + `manifest.json version` (synchros) ET ajouter une entrée en tête de `CHANGELOG` dans `app-content.js` (bouton Version sidebar `#artis-version-btn` affiche ces notes dans un modal).

---

## Contexte projet

Extension Chrome/Edge qui applique un thème dark glassmorphism sur Artis.net (ERP métier).
Stack cible : HTML Bootstrap 5 + jQuery (Metronic theme), pas de framework moderne.

**Repo GitHub :** https://github.com/SimplementJohn/Artis-Redesign

---

## LIENS / PAGES UTILES

Base : `https://artis.digithall.org/ArtisWebDigitInvest/`
(params communs : `cKey`, `cStatus`, `session`, `typeLicence=BM`)

| Page | URL (relative à la base) | Description | Traité |
|------|--------------------------|-------------|--------|
| Login SSO Bureau Mobile | `composants/login/sso/BM.action` | Page de connexion SSO. Erreur possible « accès simultané ». | Glassmorphism dark, canvas animé, bouton fluide, password toggle, watermark JusteJohn bas-droite |
| Login déconnecté | `composants/login/sso/loggedOut.action?typeLicence=BM` | Page après logout. | Même thème login + watermark `justejohn.png` |
| Accueil / Visualiser entrée | `composants/commun/accueil/entreeVisualiser.action` | Page d'accueil (favoris, carte profil). Body flag JS `html.artis-page-entree`. | Bande vide aside-secondary masquée ; carte profil `#thumbnail` re-thémée ; tooltips z-index relevé |
| Planning | `composants/ccPlanningV2/...` (page `body.page-ccPlanningV2`) | Planning emploi du temps. Blocs `.planning-event`. | Grille dark, blocs harmonisés + hover zoom |
| Workflow Manager | `composants/workflow/ccWorkflowManager/submit.action` | Tâches/workflow, gros tableaux. | Tables dark, boutons toolbar dark |
| Mon compte | `composants/commun/navigation/redirect_ccMonCompte.action` | Profil utilisateur (lien depuis carte `#thumbnail`). | — |
| Aide en ligne | `https://portail.artis.fr/docs/5.0.5/index.html` | Doc externe Artis (nouvelle fenêtre). | — |

---

## LEXIQUE UTILISATEUR → ÉLÉMENTS RÉELS

L'utilisateur décrit les éléments en langage courant + donne souvent un **XPath complet**
(`/html/body/form/div[12]/...`). Traduction de ses mots-clé :

| Ce que dit l'utilisateur | Élément réel | Sélecteur CSS |
|--------------------------|--------------|---------------|
| « bandeau de gauche » / « menu de gauche » (icônes) | Sidebar verticale icônes | `.aside-primary` / `.bg-artis-default-color` |
| « le menu où il y a le bouton theme » | Zone icônes nav sidebar | `#kt_aside_nav` (= `.aside-primary > div:nth-child(3)`) |
| « bouton theme » / « lune » / « soleil » | Toggle dark/light injecté | `#artis-theme-toggle` (cloné depuis `.aside-item-btn`) |
| « volet déroulant » / « volet avec la barre de recherche » | Panel flyout menu | `.aside-secondary` (overlay absolu, anchored via `--artis-primary-w`) |
| « barre de recherche » (Ctrl+K) | Bouton recherche globale | `.global-search-button-shortcut` |
| « menus Services / Biens / Logistique » | Items menu nav | `.menu-item` > `.menu-link` > `.menu-title` (sous-menus `.menu-sub-accordion`) |
| « blocs de RDV » / « blocs emploi du temps » / « blocs de dit » | Événements planning colorés | `.planning-event` > `.panel-planning` (couleur inline par nature/type) |
| « label / badge type » sur un bloc | Étiquette nature | `.label.label-nature` |
| « le tableau » / « tableau vide » | Grilles de données | `table` / `.dataTable` / `.array-content table` (empty = `.dataTables_empty`) |
| « le planning » / « grille » | Calendrier planning | `#planning-container`, `div.grid`, `table.table-grid` |
| « page de chargement » | Overlay loading | `.divChargement` + loader custom `.artis-loader` injecté |
| « page de login » / « SSO » | Login bureau mobile | `body.login-page`, `#loginForm`, message SSO « accès simultané » |
| « il y a du blanc » | Fond blanc/gris résiduel Artis | strip via `stripWhiteBg()` + CSS `[style*="background..."]` |
| « bleu pas violet » | Bleu Artis `#00AEEF/#0084BD` à remplacer | `stripArtisBlueBg()` → violet `#6366f1` |
| « carte profil » / « ma pp » / « bloc bleu avec photo » | Widget profil accueil | `#thumbnail.bg-blue` (`.bg-blue`=`#03a9f4`), avatar `.photo-content`, glow derrière via `.thumb.frozen-dreams-gradient` |
| « bouton rond rose » (profil/aide/logout) | Actions carte profil | `#thumbnail .btn.bg-pink-400` → recoloré violet |
| « sous-menu pour changer le nombre de jours » / « sélecteur de semaine » (en haut EDT) | Date range picker (popup calendrier + raccourcis) | `.daterangepicker` (`.ranges li`, `.drp-calendar`, `table.table-condensed td.in-range/.active`, `.drp-buttons`) — thémé dark |
| « les 3 boutons » (login) | Rangée SSO / Entrer / À propos | `.row.form-actions` > `.col.btn-action-login` > `.btn-group` (`#b_sso`, `#b_Entrer`, `#aProposModalLoginLink`) — checkbox dans un `.col` séparé, rangée passée en wrap pleine largeur (v1.9.42) |

### Notes comportement utilisateur
- Donne souvent **XPath** au lieu de classe → utiliser pour localiser, mais cibler par **classe/id stable** dans le CSS (XPath `div[12]` = index fragile).
- « collé aux autres boutons » = même structure DOM/espacement que les éléments natifs Artis (cloner l'existant, pas recréer).
- « éclaircir le fond » = monter luminosité des vars `--a-bg/--a-s1/--a-s2` (+ canvas gradient + sidebar en parallèle).
- « animation fluide » = transitions `cubic-bezier(0.22,1,0.36,1)` ~0.3-0.45s, stagger sur listes.
- Theme clair toggle : classe `html.artis-light` (persisté `localStorage['artis-theme']`).

### Menus flottants body-level
- Artis ajoute des dropdowns/popovers en **fin de `<body>`** (`body > div[7]`, etc.) hors du conteneur app.
- Leur **texte est noir** (CSS Artis) → invisible sur dark. Forcer `color` clair sur `.dropdown-menu a/li/span`, `.popover *`, `.ui-menu *`, `ul[role="menu"] a`.
- Ces menus n'ont pas toujours `.dropdown-menu` → couvrir aussi `.popover`, `.tippy-box`, `.ui-menu`, `[role="listbox/menu"]`.

### Pièges connus
- `.aside-secondary` : **flottant** (`position:absolute`) sur accueil/favoris (sinon décale le tableau), MAIS **docké** (`position:relative`) sur la page planning (`html.artis-page-planning`) sinon le panel **dépasse derrière le contenu**. Deux comportements selon la page.
- Tables vides → l'élément `<table>` doit avoir fond dark explicite (cellules transparentes laissent voir wrapper blanc).
- Blocs planning : couleurs Artis = **données métier** (nature/type) → ne pas aplatir, juste harmoniser (saturation/glow/voile).
- Metronic toggle les sous-menus via classes `.show/.here/.hover` → animer avec `grid-template-rows 0fr→1fr`.
- Polices locales : tout `.woff2` chargé par la page doit être dans `web_accessible_resources` du manifest (`fonts/*.woff2`), sinon bloqué.
- Permission `tabs` retirée (v1.9.43) : `tabs.query({url})` marche via la host permission `artis.digithall.org` ; `reload/update` n'ont jamais eu besoin de permission.
- MutationObserver (app-content) : traitement batché par frame + `disconnect()` pendant nos écritures — ne pas remettre de strip synchrone dans le callback (boucle de rétroaction).

---

## Structure HTML exacte (extraite des sources)

### Layout global (toutes pages internes)

```
body.page-ccPlanningV2  (ou autre page)
  └── div.page-container.container
        └── div.page-content#page-content
              └── div.aside.aside-extended
                    ├── div.aside-primary.d-flex.bg-artis-default-color  ← SIDEBAR GAUCHE
                    └── div.aside-secondary.d-flex.flex-row-fluid         ← PANEL + CONTENU
                          └── div.aside-workspace#kt_aside_workspace
                                ├── div.global-search-button-container    ← BARRE RECHERCHE
                                └── div.tab-content
                                      └── div.tab-pane#kt_aside_nav_tab_*
```

### Sidebar gauche (aside-primary)

```html
<div class="aside-primary d-flex flex-column align-items-lg-center flex-row-auto bg-artis-default-color" style="height: 100vh;">
  <div class="aside-logo" id="kt_aside_logo">        ← Logo Artis SVG
  <div class="aside-logo" id="kt_aside_user">        ← Avatar utilisateur + menu dropdown
  <div class="aside-nav nav" id="kt_aside_nav">      ← Icônes de navigation (tabs)
    <span class="aside-item-btn">
      <a class="nav-link btn btn-icon active">        ← Bouton icône actif
      <a class="nav-link btn btn-icon">               ← Bouton icône inactif
    <span id="labelNbFavoris" class="badge bg-secondary rounded-circle">4</span>
```

**Classes clés sidebar :**
- `.aside-primary` — conteneur principal sidebar (fond bleu Artis d'origine)
- `.bg-artis-default-color` — classe Bootstrap custom Artis = couleur bleue par défaut
- `.aside-item-btn` — wrapper de chaque icône
- `.nav-link.btn.btn-icon` — bouton icône (avec `.active` si sélectionné)
- `.aside-logo` — zone logo en haut
- `.aside-nav` — zone des icônes nav

### Panel secondaire (aside-secondary)

```html
<div class="aside-secondary d-flex flex-row-fluid">
  <div class="aside-workspace" id="kt_aside_workspace">
    <div class="global-search-button-container">
      <a class="global-search-button-shortcut">  ← Barre recherche Ctrl+K
    <div class="tab-content">
      <div class="tab-pane fade active show" id="kt_aside_nav_tab_ARTIS_NET">
        <div class="menu_ARTIS_NET menu menu-column">   ← Menu navigation
          <div class="menu-item menu-accordion">
            <span class="menu-link">
              <div class="menu-icon"><span class="svg-icon">
              <span class="menu-title">Services</span>
              <span class="menu-arrow">
            <div class="menu-sub menu-sub-accordion">
              <div class="menu-item">
                <a class="menu-link">
                  <span class="menu-title">
```

**Classes clés panel secondaire :**
- `.aside-secondary` — panel blanc par défaut → doit être dark
- `.aside-workspace` — workspace intérieur
- `.global-search-button-container` — barre recherche
- `.global-search-button-shortcut` — lien recherche
- `.menu-column` — menu vertical
- `.menu-item` — item de menu
- `.menu-link` — lien cliquable
- `.menu-title` — texte du lien
- `.menu-icon` — icône SVG à gauche
- `.menu-arrow` — flèche accordéon
- `.menu-sub.menu-sub-accordion` — sous-menu dépliable
- `.menu-accordion` — item avec sous-menu

### Navbar top

```html
<div class="navbar">
  <img class="navbar-brand">
  <div id="user-menu-defaut">
```

### Planning spécifique

```html
<div id="planning-container">
  <div id="calendarContent">           ← border-top: 1px solid #A2BBDD
  <div class="grid">                   ← background: #FFFFFF ← SOURCE DU BLANC
  <table class="table-horaires">       ← background: #E8EEF7
  <table class="table-grid">
    tbody tr td                        ← border: dotted 1px #DDDDDD
  <div class="off-working-plage">      ← background: #eee
  <span class="tech-group-name">       ← color: #446688
```

**Classes planning clés :**
- `div.grid` — grille calendrier → `background: #FFFFFF` inline à overrider
- `.table-horaires` — tableau des horaires
- `.table-grid` — grille principale
- `.off-working-plage` — plage hors-travail (gris)
- `.tech-group-name` — nom technicien
- `#planning-container` — container principal
- `#calendarContent` — zone calendrier

### Context menus (clic droit planning)

```html
<div id="contextMenuAPlanifier" class="planning-context-menu dropdown-menu bg-grey-800">
  <div class="img-background">
  <span class="dropdown-header">
  <a class="dropdown-item">
```

**Note :** Artis utilise `.bg-grey-800` sur ces menus — déjà dark, garder.

### Données de formulaire / grille tâches

```html
<div class="array-content">
  <table>
    <thead><tr><th>  ← color: #B5B5C3 (déjà muted)
    <tbody><tr><td>  ← background blanc à overrider
```

### Breadcrumb

```html
<div class="breadcrumb-line">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
    <li class="breadcrumb-item active">
```

### Chargement

```html
<div id="chargement" class="divChargement">
<div id="chargement2" class="divChargement divChargementBloquant">
  <div class="chgtContent">
    <div class="box-rotate-loader">
      <div class="box-rotate-box">
    <div class="chgtText">
```

### Page login

```html
<body class="login-page">
  <div class="login-background" style="background-image: url(...)">
    <div class="container">
      <div class="login-wrapper d-flex flex-column">
        <img class="login-img">
        <form id="loginForm">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Bureau mobile</h5>
            <div class="card-body">
              <div class="has-feedback has-feedback-left">
                <div class="form-control-feedback"><i class="mdi mdi-account">
                <input class="form-control">
            <div class="card-footer">
              <a id="mdpOublieModalLoginLink">
```

---

## Variables CSS Artis

```css
/* Artis définit ces variables dans son thème */
--artis-default-color   /* bleu Artis = #00AEEF ou similaire */
--bs-primary            /* Bootstrap primary */

/* Classes utilitaires Artis */
.bg-artis-default-color   /* fond bleu sidebar */
.text-artis-default-color /* texte bleu Artis */
.svg-icon-artis           /* icône couleur Artis */
.menu-hover-icon-artis    /* hover icône Artis */
.menu-state-icon-artis    /* état icône Artis */
```

---

## Thème à respecter — Design System

### Palette dark glassmorphism

| Token | Valeur | Usage |
|-------|--------|-------|
| `--artis-bg` | `#080818` | Fond page (canvas) |
| `--artis-surface` | `#0f0f28` | Surfaces cards |
| `--artis-surface2` | `#13132e` | Surfaces secondaires |
| `--artis-border` | `rgba(99,102,241,0.2)` | Bordures |
| `--artis-primary` | `#6366f1` | Indigo (remplace bleu Artis) |
| `--artis-primary2` | `#818cf8` | Indigo clair (hover, actif) |
| `--artis-text` | `#e2e8f0` | Texte principal |
| `--artis-muted` | `#94a3b8` | Texte secondaire |
| `--artis-accent` | `#10b981` | Vert success |

### Sidebar `.aside-primary` / `.bg-artis-default-color`

```css
background: linear-gradient(180deg, #0d0d26 0%, #0a0a20 100%);
border-right: 1px solid rgba(99,102,241,0.25);
box-shadow: 2px 0 20px rgba(0,0,0,0.5), inset -1px 0 0 rgba(99,102,241,0.15);
```

- Icônes inactives : `rgba(148,163,184,0.7)`
- Icônes hover : `#a5b4fc` + `background: rgba(99,102,241,0.12)` + `border-radius: 8px`
- Icône active : `#818cf8` + `background: rgba(99,102,241,0.2)` + `border-radius: 8px`
- Badges : `background: #6366f1` + `box-shadow: 0 2px 6px rgba(99,102,241,0.4)`

### Panel secondaire `.aside-secondary`

```css
background: #0e0e27;
border-right: 1px solid rgba(99,102,241,0.2);
box-shadow: 4px 0 32px rgba(0,0,0,0.6);
```

- Liens menu : `rgba(203,213,225,0.85)` → hover `#818cf8` + `background: rgba(99,102,241,0.15)`
- Section labels : `#94a3b8`, uppercase, 0.68rem, letter-spacing 0.1em

### Cards / panels

```css
background: rgba(13,13,38,0.88);
backdrop-filter: blur(20px) saturate(160%);
border: 1px solid rgba(99,102,241,0.18);
border-radius: 14px;
box-shadow: 0 4px 20px rgba(0,0,0,0.35);
```

### Inputs focus

```css
border-color: rgba(99,102,241,0.55);
box-shadow: 0 0 0 3px rgba(99,102,241,0.18);
```

### Boutons

- Primary/Info : `linear-gradient(135deg, #6366f1, #818cf8)` + `box-shadow: 0 2px 10px rgba(99,102,241,0.3)`
- Success : `linear-gradient(135deg, #10b981, #34d399)`

### Planning grid spécifique

```css
div.grid { background: rgba(10,10,28,0.9) !important; }  /* était #FFFFFF */
.table-horaires { background: rgba(99,102,241,0.08) !important; }
.off-working-plage { background: rgba(99,102,241,0.06) !important; }
.tech-group-name { color: #818cf8 !important; border-bottom-color: rgba(99,102,241,0.3) !important; }
#calendarContent { border-top-color: rgba(99,102,241,0.2) !important; }
table.table-grid tbody tr td { border-color: rgba(99,102,241,0.1) !important; }
```

---

## Typo

- **Font** : `Plus Jakarta Sans` (Google Fonts) — friendly, modern, SaaS
- Body : 0.875rem–1rem, line-height 1.5
- Labels section : 0.68rem, uppercase, font-weight 700, letter-spacing 0.1em
- Tabs actifs : font-weight 600

---

## Règles CSS prioritaires

### JAMAIS laisser de blanc

Toute `div`, `td`, `tr`, `section` part en `background: transparent` par défaut.
Seuls les composants explicitement listés reçoivent un fond dark.

### Inline styles blancs

Artis injecte souvent `style="background:#fff"` ou `style="background:white"` via JS.
Le `MutationObserver` dans `app-content.js` strip ces styles au runtime.
La règle CSS `[style*="background: white"]` couvre les cas statiques.

### `.bg-grey-800` (context menus planning)

Ne pas overrider — Artis l'utilise déjà comme fond sombre sur les menus contextuels. Laisser tel quel ou améliorer légèrement.

### Couleur Artis bleue → Violet

Partout où Artis utilise son bleu (`#00AEEF`, `bg-artis-default-color`, `text-artis-default-color`), remplacer par `#6366f1` / `#818cf8`.

---

## Fichiers extension

| Fichier | Rôle |
|---------|------|
| `extension/manifest.json` | Manifest V3 — URL, permissions storage, host Gemini, background, popup |
| `extension/content.js` | Login : canvas + animations + toggle password + watermark + master switch |
| `extension/login-override.css` | Login : glassmorphism dark |
| `extension/app-content.js` | App : canvas + nuclear CSS + observer + toggle theme/version + master switch |
| `extension/app-override.css` | App : thème complet |
| `extension/giles.js` | Gilles : UI pop-up IA (chat, mémoire 5, onglet Conversations) |
| `extension/giles.css` | Gilles : styles (glass, light mode, responsive) |
| `extension/giles-bg.js` | Service worker : appels Gemini, charge clé + base de connaissance |
| `extension/prompts/giles-system-prompt.txt` | Préprompt système de Gilles |
| `extension/artis.txt` + `ressources.md` | Base de connaissance (bundlée depuis `datatxt/`) |
| `extension/apigemini.txt` | Clé API Gemini (gitignored, non web-accessible) |
| `extension/fonts/` | Polices locales (Plus Jakarta Sans, Space Grotesk, DM Sans — woff2 latin/latin-ext) + `fonts.css` chargé via manifest. Plus de requête Google Fonts |
| `extension/popup.html/.css/.js` | Popup : sliders activer/désactiver + réglage clé |
| `sync-knowledge.ps1` | Re-copie `datatxt/*` → `extension/` (maj connaissance) |

### Gilles — assistant IA

- **Modèle** : Gemini `gemini-2.0-flash`, appelé depuis le **service worker** (`giles-bg.js`) → évite CORS/CSP de la page.
- **Clé API** : `chrome.storage.local['giles_api_key']` (popup) sinon parsée depuis `apigemini.txt`.
- **Connaissance** : `artis.txt` + `ressources.md` concaténés dans `systemInstruction` avec le préprompt.
- **Mémoire active** : 5 derniers messages ; vidée à chaque rechargement complet (sessionStorage).
- **Conversations** : `localStorage['giles_conversations']` (PC uniquement). Onglet : voir / supprimer / tout vider.
- **Slider on/off** : popup écrit `artis_enabled` / `giles_enabled` ; bascule thème = `location.reload()`.

### ⚠️ Lecture disque

Extension installée = **ne lit PAS un dossier disque arbitraire** (sandbox). Seuls les fichiers **bundlés dans `extension/`** sont lisibles (`getURL`+`fetch`). La doc Artis doit être copiée dans `extension/` via `sync-knowledge.ps1`. Lecture live d'un dossier choisi = File System Access API (non implémenté).

## URL ciblées

```
Login  : *://artis.digithall.org/*/composants/login/*
App    : *://artis.digithall.org/ArtisWebDigitInvest/*  (hors login)
```

---

## Pages sauvegardées localement

- `Artis.net - Bureau mobile.html` + `_files/` — page login
- `Artis.net - Planning.html` + `_files/` — page planning (connecté)

CSS clés à lire pour comprendre le thème original :
- `_files/composants.css` — CSS global Artis
- `_files/planning.css` — CSS spécifique planning
