# AUDIT — Performance, Efficacité & Sécurité

Date : 2026-06-10 · Version auditée : **1.9.47** · Périmètre : `extension/` complet
Légende : 🔴 fort impact · 🟠 moyen · 🟡 faible · 🟢 OK

> Cet audit remplace celui du 2026-06-09 (v1.9.21/1.9.22). Tous les points 🔴 de
> l'audit précédent ont été corrigés en v1.9.43 (canvas pré-rendu + pause onglet caché,
> observer batché, capture mémoïsée, balayage init unique, artis.txt caché, token de
> session nettoyé, clé en header, permission tabs retirée, polices locales).
> L'historique détaillé est dans le CHANGELOG (v1.9.43) et le git log.

---

## État des lieux (mesuré)

| Fichier | Lignes | Notes |
|---------|--------|-------|
| app-override.css | 3 014 | **1 233 `!important`**, 13 `backdrop-filter`, 20 `[style*=]` |
| app-content.js | 1 433 | dont ~250 lignes de CHANGELOG (données, pas du code) |
| giles.js | 594 | UI Gilles |
| login-override.css | 509 | 245 `!important` |
| content.js | 368 | login |
| giles-bg.js | 312 | service worker |
| giles.css / popup.* | ~545 | propres (1 `!important`) |
| `knowledge/` | 1,6 Mo | bundle local, lu à la demande (caché) — OK |

---

## A. Constats restants (code actuel)

### 🟠 A1. `querySelectorAll('*')` dans les strips

**Fichiers :** `app-content.js` (`initialSweep` l.1040, `stripAllInline` l.385) · `content.js` (`nukeWhiteBg` l.21)

`stripInline()` n'agit **que sur les styles inline** (`el.style`). Itérer TOUS les
éléments est inutile : seuls ceux qui ont un attribut `style` peuvent matcher.

**Fix (gain élevé, effort faible) :** remplacer `querySelectorAll('*')` par
`querySelectorAll('[style]')` dans `initialSweep`, `stripAllInline` et `nukeWhiteBg`
(garder `'*'` uniquement pour la partie boutons d'`initialSweep`, ou tester
`isButtonish` via un second sélecteur `.btn, button, input[type=button], input[type=submit], [role=button]`).
Sur une page planning (~milliers de nœuds, dizaines avec style inline), ça divise
le travail par 10-100.

### 🟠 A2. CHANGELOG embarqué dans `app-content.js`

~250 lignes / ~10 Ko de **données** parsées à chaque chargement de page, alors que
le bouton version ouvre GitHub depuis v1.9.15 (plus de modal changelog).

**Fix :** déplacer le journal vers un `CHANGELOG.md` à la racine du repo ; ne garder
dans le JS que `ARTIS_VERSION`. Mettre à jour la règle de maintenance dans CLAUDE.md
(fait). Bonus : un `CHANGELOG.md` est lisible sur GitHub, là où pointe le bouton.

### 🟠 A3. Pages envoyées à Gemini à CHAQUE message

**Fichier :** `giles.js` `onSubmit` → `getStoredPages()` (jusqu'à 40 k chars) +
base de connaissance (50 k chars) **rejoints au `systemInstruction` à chaque tour**.

Coût : latence + tokens à chaque message, même si la question ne porte pas sur la page.

**Fix possible :** n'envoyer le contexte pages que (a) au 1er message de la
conversation, puis (b) quand la page courante a changé depuis le dernier envoi
(comparer `pageKey()` + timestamp). Le service worker garde le dernier contexte
envoyé par tab. Gain : ~80 % de tokens en moins sur une conversation suivie.

### 🟡 A4. Observer fallback du bouton Reformuler

**Fichier :** `app-content.js` `injectReformulerBtn` (l.1359-1362)

Le `MutationObserver(body, subtree)` tourne tant que la toolbar TinyMCE n'existe pas
(= tant que l'utilisateur n'a pas cliqué dans l'éditeur), et fait un `querySelector`
par lot de mutations.

**Fix :** déclencher le montage sur `editor.addEventListener('focusin', ...)` (la
toolbar est créée au focus) au lieu d'observer tout le body. Une ligne, zéro polling.

### 🟡 A5. Autoreload DIT (onglet caché) = rechargement complet

**Fichier :** `app-content.js` `startDitMonitor`

`location.reload()` toutes les 60 s relance Artis + extension + capture complète.
Acceptable (onglet caché, canvas en pause), mais la version sobre serait un
`fetch(location.href)` + parse du tableau dans une `DOMParser` sans recharger.
À faire seulement si la conso devient visible.

### 🟡 A6. Favicon = `justejohn.png` (165 Ko)

`replaceFavicon()` (app + login) charge un PNG de 165 Ko comme favicon.
**Fix :** pointer vers `icon-32.png` (1,6 Ko) — même visuel, 100× plus léger.

### 🟡 A7. CSS — dette contenue mais à ne pas aggraver

- `app-override.css` = monolithe 3 014 lignes chargé sur toutes les pages app.
  Les scopes par page existent (`html.artis-page-planning/-entree`) → continuer à
  scoper les nouvelles règles plutôt qu'élargir les règles globales.
- 1 233 `!important` : nécessaires pour battre le CSS Artis + styles inline, mais
  chaque nouveau doit le justifier (voir règles §C).
- Sélecteurs larges conservés sciemment : `* { scrollbar-* }` (l.2575),
  `p, span.menu-title, td, li { color }` (l.2254), `[style*=]` ×20 + nuclear CSS.
  Coût de recalc maîtrisé depuis que l'observer écrit par lots — ne pas en ajouter.
- Doublons réels quasi nuls (≤ 2 occurrences, surtout keyframes) — rien d'urgent.

### 🟡 A8. `content.js` (login) — observer non batché

`nukeWhiteBg` strippe à chaque mutation sans regroupement, contrairement au pattern
batché d'`app-content.js`. Page login = petite, impact faible. À aligner sur le
pattern commun si on retouche le fichier.

### 🟢 Points sains constatés

- Canvas : statique pré-rendu, 30 fps, pause `document.hidden`, buckets spatiaux.
- MutationObserver principal : batch par frame + `disconnect()` pendant écritures.
- Service worker : caches (`_systemPrompt`, `_base`, `_index`, `_fileCache`),
  keep-alive borné, clé en header, fallback multi-modèles.
- Capture page mémoïsée (TTL 4 s), URLs sanitizées (`session/cKey/cStatus=***`).
- Permissions minimales (`storage`, `notifications`, 2 hosts), polices locales,
  pas d'`eval`/script distant, échappement HTML systématique.

---

## B. Plan d'action priorisé

| # | Sév. | Gain | Effort | Action |
|---|------|------|--------|--------|
| A1 | 🟠 | Élevé (pages lourdes) | 15 min | `[style]` au lieu de `'*'` dans les 3 strips |
| A2 | 🟠 | Moyen (parse/poids) | 30 min | CHANGELOG → `CHANGELOG.md`, JS ne garde que la version |
| A3 | 🟠 | Élevé (tokens/latence) | 1-2 h | Contexte pages envoyé seulement si nouveau/modifié |
| A4 | 🟡 | Faible | 10 min | Reformuler : montage sur `focusin` au lieu d'observer body |
| A6 | 🟡 | Faible | 5 min | Favicon → `icon-32.png` |
| A5 | 🟡 | Faible | 2 h | Autoreload DIT → fetch+parse (seulement si besoin) |
| A8 | 🟡 | Faible | 30 min | Login : batcher l'observer comme l'app |

**Quick wins immédiats : A1 + A4 + A6** (30 min cumulées, zéro risque).

---

## C. Règles d'or pour le code FUTUR

À appliquer à toute nouvelle fonctionnalité (reprises dans CLAUDE.md) :

1. **Jamais `querySelectorAll('*')`** — cibler l'attribut/classe réellement visé
   (`[style]`, `.btn`, …).
2. **Tout observer** : batch par frame (rAF), `disconnect()` pendant nos écritures,
   portée minimale, **se déconnecter quand il a fini son travail** (one-shot →
   préférer un événement précis : `focusin`, `load`, etc.).
3. **Toute boucle d'animation** : pause sur `document.hidden`, fps plafonné,
   couches statiques pré-rendues.
4. **CSS** : nouvelle règle = scopée (page flag `html.artis-page-*` ou conteneur) ;
   `!important` seulement pour battre du style inline/`!important` Artis ;
   **aucun nouveau** `backdrop-filter`, sélecteur universel ou `[style*=]`.
5. **Données → Gemini** : tout nouvel envoi a un budget chiffré en chars, des URLs
   sanitizées, et respecte le toggle « Partage pages ».
6. **Pas de `setTimeout` en rafale** pour attendre un élément : préférer l'événement
   ou l'observer one-shot ; si timeout quand même, max 2 re-passes commentées.
7. **Jamais forcer `display`** sur un élément affiché/masqué par Artis (règle ERROR.md).
8. **Versioning** : `ARTIS_VERSION` + `manifest.json` synchrones à chaque modif
   visuelle + entrée CHANGELOG. (Candidat : script `bump-version.ps1` qui fait les 3.)
9. **Mesurer avant d'optimiser** : DevTools Performance sur la page planning
   (la plus lourde) avant/après ; pas d'optimisation spéculative.
10. **Avant toute modif : lire `ERROR.md`** ; après toute erreur signalée : l'y consigner.

---

## D. Sécurité — état (synthèse, détails dans git history)

| Point | État |
|-------|------|
| Clé API en query string | ✅ corrigé — header `x-goog-api-key` |
| Token session → Gemini | ✅ corrigé — URLs sanitizées avant stockage/envoi |
| Permission `tabs`, jokers `*.artis.fr/.net` | ✅ retirés — hosts stricts |
| Google Fonts (fuite IP) | ✅ polices bundlées localement |
| Conversations localStorage | ✅ purge TTL 30 j ; pages en sessionStorage seulement |
| `apigemini.txt` bundlé | ⚠️ **toléré en dev** (gitignored, hors `web_accessible_resources`). À EXCLURE de tout build distribué ; clé restreinte côté Google à prévoir |
| Rédaction PII avant envoi Gemini | ❌ non fait (opt-out global via popup seulement) — point RGPD ouvert |
| `innerHTML` rendu markdown | 🟢 échappé (`esc()`), balises contrôlées, pas de href/src dynamiques |

**Reste à faire sécurité :** build de release sans `apigemini.txt` ; (optionnel)
rédaction emails/téléphones avant envoi à Gemini.
