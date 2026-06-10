# AUDIT — Performance & Efficacité du code

> **STATUT 2026-06-10 (v1.9.43) — corrections appliquées :**
> - ✅ #1 Canvas : grille+orbes+dégradé pré-rendus offscreen, pause `visibilitychange`, throttle 30 fps, connexions via buckets spatiaux (app + login)
> - ✅ #2 Observer : mutations batchées (1 traitement/frame via rAF), passes blanc+bleu fusionnées, `disconnect()` pendant nos écritures. Portée reste `body` (les dropdowns Artis sont en fin de body — piège connu)
> - ✅ #3 `capturePageText` : mémoïsée (clé page + childElementCount + TTL 4 s) ; `innerText` conservé (règle error.md : respecte la visibilité)
> - ✅ #4 Init : `initialSweep()` = un seul parcours (blanc + bleu + boutons + form wrappers)
> - ✅ #5 (partiel) : hover sidebar dédupliqué, `backdrop-filter` 20-22px → 10-12px partout. NON fait : scoper les `!important` sous `#page-content` (casserait les menus body-level) ; split du fichier par page
> - ✅ #6 : `artis.txt` caché (`_base`), budget KB 80k → 50k chars
> - ✅ #7 : `showChangelog` + `injectWatermark` supprimés (CHANGELOG conservé comme journal)
>
> **Sécurité :**
> - ✅ S1 (partiel) : clé envoyée en header `x-goog-api-key` (plus en query string). `apigemini.txt` reste en local dev (gitignored, hors WAR) — à exclure d'un éventuel build de release ; restrictions/rotation de clé côté Google = action manuelle
> - ✅ S2 : URLs nettoyées (`session/cKey/cStatus=***`) avant stockage/envoi ; toggle popup « Partage pages → Gilles » + notice de confidentialité dans le panel. NON fait : rédaction PII automatique
> - ✅ S3 : conversations purgées après 30 jours ; pages restent en sessionStorage uniquement ; purge des pages si partage désactivé
> - ✅ S4 : permission `tabs` retirée (host permission `artis.digithall.org` à la place), matches restreints à `artis.digithall.org` (jokers `*.artis.fr/.net` supprimés)
> - S5 : inchangé (échappement `esc()` déjà en place — risque maîtrisé)
> - ✅ S6 : `console.log` du texte page (Reformuler) supprimé ; aucune clé loggée
> - ✅ S7 : polices bundlées (`fonts/*.woff2` + `fonts.css`), plus aucune requête Google Fonts

Date : 2026-06-09 · Version auditée : 1.9.21
Périmètre : `extension/*.js` + `extension/*.css` (5 694 lignes)

Légende sévérité : 🔴 fort impact · 🟠 moyen · 🟡 faible / cosmétique

| Fichier | Lignes |
|---------|--------|
| app-override.css | 2662 |
| app-content.js | 972 |
| login-override.css | 429 |
| content.js | 353 |
| giles-bg.js | 283 |
| giles.css | 253 |
| giles.js | 488 |
| popup.js | 141 |
| popup.css | 113 |

---

## 🔴 1. Canvas — boucle de rendu coûteuse en continu

**Fichiers :** `app-content.js` (`createBackground`, l.42-117) · `content.js` (`createBackground`, l.33-133)

Problèmes par frame (60 fps, en permanence tant que l'onglet est visible) :
- **Connexions particules O(n²)** : double boucle `for i / for j`. App = 60 particules → ~1 770 paires/frame ; Login = 90 → ~4 005 paires/frame. Chaque paire fait un `Math.sqrt`.
- **Grille de points redessinée chaque frame** : `(W/40)·(H/40)` arcs. En 1920×1080 ≈ 48·27 = **1 296 arcs/frame** recalculés alors que la grille est **statique**.
- **Orbes + gradients** recréés chaque frame (`createRadialGradient`).
- rAF **jamais mis en pause** quand l'onglet est masqué (hors `prefers-reduced-motion`) ou quand le canvas est entièrement recouvert.

**Impact :** CPU/GPU constant, batterie, ventilateur — le plus gros poste de conso.

**Recommandations :**
1. Pré-rendre **grille de points + orbes** sur un canvas offscreen (ou dégradé CSS statique) ; ne réanimer que les particules.
2. Plafonner les connexions : grille spatiale (buckets) au lieu du O(n²), ou supprimer les liaisons.
3. `document.hidden` → `cancelAnimationFrame` ; reprendre sur `visibilitychange`.
4. Throttle à 30 fps suffit pour un fond.

---

## 🔴 2. MutationObserver global non throttlé + walks O(n) imbriqués

**Fichier :** `app-content.js` `observeDOM` (l.414-468)

- Observe `document.body` avec `childList + subtree + attributes` (`style`, `class`, `data-idinterrealisee`).
- Pour **chaque nœud ajouté** : `stripWhiteBg` + `stripArtisBlueBg`, et si enfants → `stripAllWhite(node)` + `stripAllArtisBlueBg(node)` qui font **deux `querySelectorAll('*')`** sur le sous-arbre.
- Le planning injecte des **centaines de nœuds** → coût quasi quadratique sur gros rendus.
- **Boucle de rétroaction** : `stripWhiteBg` retire un `style` → déclenche une mutation `attributes:style` → ré-exécute le handler. Idem `applyStateEmoji` écrit `title.textContent` (childList) — protégé par un test d'égalité, mais le réveil de l'observer a un coût.

**Recommandations :**
1. **Débattre/regrouper** : accumuler les mutations et traiter dans un `requestIdleCallback` / microtask unique par frame.
2. Fusionner les deux passes `stripWhiteBg`+`stripArtisBlueBg` en **un seul parcours** (`stripAll` combiné) — évite 2× `querySelectorAll('*')`.
3. Se **déconnecter** pendant nos propres écritures de style, puis reconnecter (`observer.disconnect()/observe()`), pour casser la rétroaction.
4. Restreindre la portée : observer le conteneur app (`#page-content`) plutôt que `body` entier.

---

## 🔴 3. `capturePageText()` — clone du body entier à chaque appel

**Fichier :** `giles.js` (l. ~capturePageText) + `storeCurrentPage`

- `document.body.cloneNode(true)` **clone tout le DOM**, puis `querySelectorAll(skip).remove()`, puis `.innerText` (force un **reflow**).
- Appelé : à `mount`, `setTimeout(1500)`, **et à chaque `onSubmit`**. Sur une page planning lourde, clone + innerText = plusieurs ms à chaque message.

**Recommandations :**
1. Ne pas cloner : lire `document.body.innerText` puis filtrer le texte de nos UI par regex, ou exclure via un conteneur ciblé (`#page-content`).
2. **Mémoïser** la capture (invalidée par l'observer ou un hash de `body.childElementCount`) plutôt que recapturer à chaque envoi.
3. `innerText` (reflow) → préférer `textContent` si la mise en forme visuelle n'est pas requise.

---

## 🟠 4. Multiples passes plein-DOM à l'init

**Fichier :** `app-content.js` `init` (l.875-896)

Séquence au chargement, chacune parcourant tout ou partie du DOM :
`stripAllWhite(body)` → `stripAllArtisBlueBg(body)` → `stripFormWrappers` (`body > form *`) → `stripWhiteButtons` (tous boutons) → `stripNotificationsTable` → `styleProfileCard` (+ `setTimeout 800` re-pass) → `tagPlanningBlocks` (+ `setTimeout 800`).

= **4-5 balayages complets** consécutifs. `styleProfileCard` appelle `getComputedStyle` dans une boucle (reflows).

**Recommandations :**
1. **Un seul parcours** `querySelectorAll('*')` appliquant white-strip + blue-strip + bouton en une fois.
2. Privilégier le **CSS** (déjà `injectNuclearCSS`) pour les fonds statiques ; réserver le JS aux `style` inline dynamiques.
3. Mettre en cache les `getComputedStyle` ou cibler par sélecteur au lieu de tester la couleur calculée.

---

## 🟠 5. CSS — redondance et coût de recalc

**Fichier :** `app-override.css` (2662 lignes)

- **Règles dupliquées** : `.aside-primary .nav-link.btn.btn-icon:hover` redéfini à ~l.672, 2337, 2469 ; variantes `:hover` boutons éparpillées. Maintenance + poids.
- **Sélecteurs très larges + `!important`** : `div, section, article, main, header, footer, p, span { background-color: transparent !important }`, `* { box-sizing }`, `* { scrollbar-color }`. Forcent un style recalc large à chaque mutation.
- **`[style*="..."]` nombreux** (nuclear CSS) : attribute-substring matching réévalué sur changements de `style` — coûteux combiné à l'observer.
- **`backdrop-filter: blur()`** empilé (cards, `.aside-secondary`, panel Gilles, login) : **très lourd GPU**, surtout plusieurs couches visibles simultanément.
- `:has(...)` (l.2370) : recalc supplémentaire (acceptable, peu d'occurrences).

**Recommandations :**
1. **Dédupliquer** les blocs `:hover` sidebar (1 seule définition).
2. Limiter `backdrop-filter` aux surfaces réellement translucides ; baisser le rayon (20px→12px) ou retirer sur les grandes surfaces.
3. Scoper les `!important` larges sous un conteneur (`#page-content ...`) au lieu du sélecteur de type nu.
4. Envisager un **split** du fichier (login/app/planning) chargé par page.

---

## 🟠 6. `giles-bg.js` — `artis.txt` rechargé à chaque message

**Fichier :** `giles-bg.js` `getKnowledgeFor` (l.58-59)

- `const base = await loadText('artis.txt')` : **fetch non mis en cache**, exécuté à **chaque** `GILES_ASK`, alors que `_systemPrompt`, `_index`, `_fileCache` sont cachés.
- `KB_MAX_CHARS = 80000` (~20k tokens) envoyé + désormais le **contexte pages** (jusqu'à 40k chars) → requêtes Gemini lourdes : latence + coût + risque de dépassement de contexte.

**Recommandations :**
1. Cacher `artis.txt` (`_base`) comme les autres ressources.
2. Réduire le budget combiné `KB + pages` (ex : 50k total) et prioriser le contexte page courante sur la base statique selon la question.

---

## 🟡 7. Code mort / poids inutile

- `app-content.js` : `showChangelog()` (l.~707) **plus appelée** depuis que le bouton version ouvre GitHub — supprimable (+ overlay/CSS associés si inutilisés).
- `content.js` : `injectWatermark()` **plus appelée** (watermark retiré v1.9.16) — supprimable.
- `app-content.js` : `injectThemeToggle` redéclare des SVG inline volumineux (acceptable mais factorisable).

**Recommandation :** purge du code mort → moins de parse/poids.

---

## 🟡 8. Divers

- `setPrimaryWidth` : `ResizeObserver` + `resize` listener sur la sidebar — OK, peu d'événements.
- `addBubble` : `activeMessages` capé à 40 — OK.
- `savePages` : `JSON.parse`/`stringify` jusqu'à 40k chars à chaque navigation — acceptable, mais à surveiller si budget augmente.
- Pas de `passive` sur certains listeners (non critiques ici).
- Double canvas (login + app) jamais simultanés (pages distinctes) — OK.

---

## Synthèse priorisée

| # | Sévérité | Gain | Effort | Action |
|---|----------|------|--------|--------|
| 1 | 🔴 | Élevé | Moyen | Canvas : grille/orbes statiques + pause `document.hidden` + cap connexions |
| 2 | 🔴 | Élevé | Moyen | Observer : throttle (rIC), fusion passes, disconnect pendant nos écritures |
| 3 | 🔴 | Moyen | Faible | `capturePageText` : sans clone + mémoïsation |
| 4 | 🟠 | Moyen | Faible | Init : fusionner les balayages plein-DOM |
| 5 | 🟠 | Moyen | Moyen | CSS : dédupliquer, alléger `backdrop-filter` |
| 6 | 🟠 | Moyen | Faible | Cacher `artis.txt` + réduire budget tokens |
| 7 | 🟡 | Faible | Faible | Supprimer code mort (`showChangelog`, `injectWatermark`) |

**Quick wins (faible effort, effet immédiat) :** #3, #4, #6, #7 + pause canvas sur onglet masqué (partie de #1).

> Audit en lecture seule — aucune modification de code appliquée. Dire quels points traiter et je les implémente.

---
---

# AUDIT — Sécurité & Confidentialité

Date : 2026-06-09 · Version auditée : 1.9.22
Périmètre : extension MV3 complète (content scripts, service worker, popup, manifest).

Légende : 🔴 critique · 🟠 important · 🟡 mineur · 🟢 OK / bonne pratique constatée

---

## 🔴 S1. Clé API Gemini embarquée et exfiltrable

**Fichiers :** `giles-bg.js` `getApiKey` (l.109-122) · `apigemini.txt` (bundlé) · `chrome.storage.local['giles_api_key']`

- La clé peut venir de **`apigemini.txt` livré dans le paquet de l'extension**. Toute personne qui installe/récupère le `.crx`/dossier peut **lire le fichier et voler la clé** (un `.crx` est une archive ; le dossier non packagé est en clair).
- La clé saisie via la popup est stockée **en clair** dans `chrome.storage.local` (lisible par toute extension ayant accès au profil / quiconque a accès à la machine).
- La clé est transmise en **query string** de l'URL Gemini (`?key=...`, l.146) → susceptible d'apparaître dans des logs/proxies.

**Mitigations existantes :** 🟢 `apigemini.txt` **n'est pas** dans `web_accessible_resources` (seul `justejohn.png` l'est) → une page web ne peut pas le `fetch`. `host_permissions` limité à `generativelanguage.googleapis.com`.

**Recommandations :**
1. **Ne pas embarquer de clé** dans le paquet distribué. Forcer la saisie par utilisateur (popup) ; retirer `apigemini.txt` du build de release.
2. Restreindre la clé côté Google (referrers/quotas) ; prévoir rotation.
3. Idéalement, proxy backend signant les requêtes (la clé ne touche jamais le client). Sinon assumer la clé comme « semi-publique » à quota limité.

---

## 🔴 S2. Exfiltration de données métier vers un tiers (Google)

**Fichiers :** `giles.js` `capturePageText` / `storeCurrentPage` / `onSubmit` · `giles-bg.js` `askGemini`

- Tout le **texte de la page ERP** (clients, interventions, planning, données potentiellement **personnelles → RGPD**) est envoyé à l'**API Google Gemini** à chaque message.
- La **mémoire de pages** envoie *plusieurs* pages d'un coup (jusqu'à 40k chars).
- **Fuite de jeton de session** : `storeCurrentPage` stocke `cap.url = location.href` **complet, avec le paramètre `session=...`** ; `getStoredPages()` envoie ce `p.url` à Gemini (`giles-bg.js` ajoute « URL : … »). Le **token de session Artis part chez un tiers**.

**Recommandations :**
1. **Nettoyer les URL** avant stockage/envoi : supprimer `session`, `cKey`, tout token (`url.replace(/([?&])(session|cKey|cStatus)=[^&]*/gi, '$1$2=***')`).
2. Avertir l'utilisateur (consentement) que le contenu de la page est envoyé à Google ; rendre la capture **opt-in**.
3. Masquer/rédiger les données sensibles (emails, téléphones, n° client) avant envoi, ou limiter la capture à la zone utile.
4. Vérifier la conformité RGPD (sous-traitant US, finalité, base légale) — point **juridique**, pas seulement technique.

---

## 🟠 S3. Persistance en clair de données sensibles

**Fichiers :** `giles.js` — `localStorage['giles_conversations']`, `sessionStorage['giles_pages']`, `sessionStorage['giles_active']`

- Conversations (questions + réponses, pouvant contenir des données métier) stockées **en clair dans `localStorage`** → persistent après fermeture, lisibles sur **poste partagé** par tout utilisateur du même profil navigateur.
- `giles_pages` (texte intégral des pages) en `sessionStorage` clair.

**Recommandations :**
1. Bouton « purge à la déconnexion » / TTL sur les conversations.
2. Ne pas persister le texte intégral des pages au-delà de la session (déjà sessionStorage — OK) ; éviter `localStorage` pour tout contenu métier.
3. Documenter clairement à l'utilisateur ce qui est gardé en local.

---

## 🟠 S4. Surface de contenu large (match patterns)

**Fichier :** `manifest.json` `content_scripts.matches`

- `*://*.artis.fr/*`, `*://*.artis.net/*`, `*://artis.digithall.org/*` : injection sur **tous sous-domaines** `.artis.fr`/`.artis.net` (potentiellement des hôtes non maîtrisés). `permissions: ["tabs"]` donne accès aux **URL de tous les onglets** (utilisé seulement pour `tabs.reload`).

**Recommandations :**
1. Restreindre `matches` aux hôtes réellement ciblés (l'app utilise `artis.digithall.org`). Retirer les jokers de sous-domaine si non nécessaires.
2. Remplacer `"tabs"` par **`"activeTab"`** si seul l'onglet courant est rechargé → principe du moindre privilège.

---

## 🟡 S5. Injection HTML via `innerHTML` (risque résiduel maîtrisé)

**Fichier :** `giles.js` `addBubble` (l.253), `fmt`/`fmtInline` (l.92-104), `renderConvos` (l.375)

- Le texte du **modèle** et le titre des conversations sont insérés via `innerHTML`.
- 🟢 **Mitigé** : `fmt()` appelle `esc()` (échappe `& < > " '`) **avant** d'appliquer le markdown, qui ne génère que des balises contrôlées (`code/strong/u/del/em/h/li`), **sans** `href`, `src`, ni handlers. `renderConvos` échappe via `esc()`. → Pas de vecteur XSS direct identifié.

**Recommandations (défense en profondeur) :**
1. Préférer la construction par `createElement`/`textContent` pour le contenu dynamique, ou un assainisseur dédié.
2. Tester des charges type ``[x](javascript:...)``, balises imbriquées, séquences `*`/`_` pathologiques pour confirmer l'absence de contournement des regex.

---

## 🟡 S6. Clé/secret et logs

- `console`/erreurs : vérifier qu'aucune réponse d'API contenant la clé ou le `detail` brut n'est loggée en clair (le `detail` est tronqué à 60-140 chars côté UI — OK).
- 🟢 Aucune `eval`, `Function()`, ni chargement de script distant détecté. Aucune ressource JS externe (seules les **Google Fonts** via `@import` CSS — voir S7).

---

## 🟡 S7. Ressources externes (CSS Google Fonts)

**Fichiers :** `app-override.css`, `login-override.css`, `giles.css` — `@import url('https://fonts.googleapis.com/...')`

- Chargement de polices depuis Google → **fuite d'IP/agent** vers Google à chaque page, et dépendance réseau externe (CSP de la page peut bloquer).

**Recommandation :** **héberger les polices en local** (bundlées dans l'extension) → pas de requête tierce, fonctionne hors-ligne, meilleure confidentialité.

---

## 🟢 Points positifs constatés

- MV3, pas de `eval`/script distant, pas de `unsafe-inline` requis.
- `host_permissions` limité à l'API Gemini.
- `apigemini.txt` **hors** `web_accessible_resources`.
- Échappement HTML systématique (`esc`) avant rendu markdown.
- Aucune écriture réseau autre que l'API Gemini ; aucune télémétrie tierce.
- Données de conversation **non** stockées côté service worker.

---

## Synthèse sécurité priorisée

| # | Sévérité | Risque | Action clé |
|---|----------|--------|-----------|
| S1 | 🔴 | Vol de la clé API (embarquée + clair) | Ne pas distribuer `apigemini.txt` ; clé utilisateur + restrictions Google |
| S2 | 🔴 | Données ERP + token session → Google (RGPD) | Nettoyer URL (session/cKey), opt-in + consentement, rédaction PII |
| S3 | 🟠 | Données sensibles en clair (localStorage) | TTL/purge, éviter localStorage pour le métier |
| S4 | 🟠 | Surface/permissions trop larges | Restreindre `matches`, `tabs`→`activeTab` |
| S5 | 🟡 | XSS (maîtrisé) | Durcir rendu (textContent), fuzzing markdown |
| S6 | 🟡 | Secrets en logs | Vérifier absence de log de clé |
| S7 | 🟡 | Fuite vers Google Fonts | Polices en local |

**Priorité immédiate :** S2 (nettoyage du `session=` envoyé à Gemini — fuite active de jeton) puis S1 (clé embarquée).

> Audit en lecture seule. Dire quels points corriger — S2 (strip token URL) et S1 sont des correctifs rapides.
