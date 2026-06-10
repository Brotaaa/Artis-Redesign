# ERROR.md — Journal des erreurs à ne plus refaire

**Claude DOIT lire ce fichier AVANT toute modification.**
Quand l'utilisateur signale une erreur → l'ajouter ici **immédiatement** (en tête de section).
Format : `**Date** | **Contexte** | symptôme + cause → **Règle**`. Pas de doublon : si la
règle existe, la compléter.

---

## Règles permanentes (extraites des erreurs)

1. **JAMAIS forcer `display`** sur un élément qu'Artis affiche/masque dynamiquement
   (overlays, panels, dropdowns, toolbars). Centrer/positionner autrement
   (`position:fixed` + `transform`), laisser Artis piloter le `display`.
2. **Vérifier le DOM réel** (pages sauvegardées `*_files/` ou HTML fourni) avant
   d'écrire un layout — ne pas supposer la structure.
3. **Capture de texte = DOM live** (`innerText` respecte la visibilité), jamais un
   clone détaché (il ignore `display:none`).
4. **Tables Bootstrap 5.3 striées** : la couleur passe par
   `--bs-table-bg-type`/`--bs-table-accent-bg` (box-shadow inset), pas par
   `background-color`.
5. **Replier un conteneur à enfants multiples** : `max-height:0; overflow:hidden`
   (le pattern grid `0fr` ne marche qu'avec UN enfant wrapper).

---

## Entrées

- **2026-06-10** | Login boutons SSO/Entrer/i | texte coupé (« Entre ») : la rangée `.row.form-actions` a DEUX `.col` 50/50 (checkbox | boutons) → 3 boutons entassés dans une demi-largeur, clippés par `overflow:hidden`. Mon CSS supposait à tort la checkbox DANS le conteneur des boutons. **Règle :** vérifier le DOM réel (page sauvegardée) avant d'écrire un layout ; sur le login, passer les `.col` de `form-actions` en pleine largeur (wrap) plutôt que rétrécir les boutons.
- **2026-06-09** | Overlay chargement `.divChargement` | mis `display:flex !important` pour centrer le loader → Artis masque l'overlay via `display:none`, mon `!important` l'a écrasé → overlay permanent qui **bloque tout le site**. **Règle :** NE JAMAIS forcer `display` sur un élément qu'Artis affiche/masque dynamiquement (overlays, panels, dropdowns). Centrer le contenu autrement (`position:fixed; top/left:50%; transform`), laisser Artis garder le contrôle du `display`.
- **2026-06-09** | Accordéon sous-menu `.menu-sub-accordion` | replié via `grid-template-rows:0fr` MAIS le conteneur a PLUSIEURS `.menu-item` enfants directs → une seule piste 0fr, le reste tombe en lignes implicites `auto` = pleine hauteur → gros trous. **Règle :** pour replier un conteneur à enfants multiples, utiliser `max-height:0; overflow:hidden` (pas le grid 0fr qui ne marche qu'avec UN enfant wrapper).
- **2026-06-09** | Gilles capture page | `document.body.cloneNode(true)` détaché ignore `display:none` → renvoyait le texte d'onglets cachés (« Aucune donnée ») au lieu de l'onglet visible. **Règle :** capturer `document.body.innerText` LIVE (respecte la visibilité), masquer temporairement `#giles-root`/`#artis-app-canvas` au lieu de cloner.
- **2026-06-09** | Tableaux DIT (DataTables `.table-striped`) | lignes impaires restaient BLANCHES malgré `background-color` dark → Bootstrap 5.3 peint les cellules striées via `box-shadow: inset ... var(--bs-table-bg-type)`. **Règle :** overrider `--bs-table-bg-type` / `--bs-table-accent-bg` sur les cellules (`tr > *`), pas seulement `background-color`.
