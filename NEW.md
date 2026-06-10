# NEW.md — Audit fonctionnalités & idées d'ajouts

Date : 2026-06-10 · Version : 1.9.47
Basé sur l'existant : thème dark/light, Gilles (chat + mémoire pages + Reformuler CR), notifications DIT, emojis planning, loader custom, popup réglages.

Légende : 💪 effort (F=faible, M=moyen, G=gros) · 🎯 impact estimé sur ton usage quotidien

---

## 1. Gilles / IA

| Idée | Détail | 💪 | 🎯 |
|------|--------|----|----|
| **Streaming des réponses** | Affichage progressif (API `streamGenerateContent`) au lieu d'attendre la réponse complète — perception de rapidité immédiate | M | Élevé |
| **Sélecteur de modèle dans la popup** | `giles_model` existe déjà côté storage/fallback mais aucune UI pour le choisir (flash-lite vs flash vs pro) | F | Moyen |
| **Reprendre une conversation enregistrée** | L'onglet Conversations est en lecture seule — ajouter « Continuer ici » (recharge l'historique dans la mémoire active) | F | Moyen |
| **Bouton « Résume cette page »** | Raccourci 1-clic dans le panel (pas besoin de taper la question) | F | Élevé |
| **Copier / exporter une réponse** | Bouton copie presse-papier sur chaque bulle + export conversation en .md | F | Moyen |
| **Commandes slash** | `/planning demain`, `/dit <numéro>`, `/stock <article>` → préformate la question avec le bon contexte | M | Moyen |
| **Reformuler : ton réglable** | Choix court/détaillé/formel dans un mini-menu à côté du bouton | F | Moyen |
| **Reformuler : bouton Annuler** | Restaurer le texte d'origine après reformulation (garder l'original en mémoire) | F | Élevé |
| **Reformuler la sélection seulement** | Si du texte est sélectionné dans l'éditeur → ne reformuler que ce passage | M | Moyen |
| **Capture structurée des tableaux** | Convertir les DataTables visibles en JSON/CSV avant envoi → réponses Gilles beaucoup plus fiables sur les données chiffrées | M | Élevé |
| **Templates de CR** | Modèles prédéfinis par type d'intervention (déploiement, support tél, repro, network) sélectionnables avant Reformuler | M | Élevé |
| **Saisie vocale** | Web Speech API (fr-FR) → dicter les notes brutes du CR ou la question Gilles | M | Moyen |

## 2. Planning

| Idée | Détail | 💪 | 🎯 |
|------|--------|----|----|
| **Ligne « maintenant »** | Trait horizontal/vertical à l'heure courante dans la grille | F | Élevé |
| **Filtres rapides (chips)** | Boutons nature/technicien au-dessus de la grille → masque les blocs non concernés | M | Élevé |
| **Récap du jour dans l'entête** | « 5 interv. · 2 critées ✅ · 3 restantes ❌ · 6h30 planifiées » | M | Moyen |
| **Rappel avant RDV** | Notification X minutes avant le prochain bloc planning (réutilise `ARTIS_NOTIFY`) | M | Élevé |
| **Export .ics** | Exporter la semaine affichée vers Outlook/Google Agenda | M | Moyen |
| **Badge DIT non critées** | Compteur sur l'icône sidebar planning (réutilise le monitor DIT existant) | F | Moyen |

## 3. Tableaux / données

| Idée | Détail | 💪 | 🎯 |
|------|--------|----|----|
| **Export CSV universel** | Bouton injecté sur tout `.dataTable` → télécharge le tableau affiché | F | Élevé |
| **En-têtes sticky** | `position: sticky` sur `thead` des gros tableaux (Workflow Manager) | F | Moyen |
| **Filtre instantané injecté** | Champ de recherche client-side sur les tables qui n'en ont pas | M | Moyen |
| **Copier une cellule/ligne** | Clic droit ou double-clic → presse-papier (n° DIT, contact client…) | F | Moyen |

## 4. Navigation / productivité

| Idée | Détail | 💪 | 🎯 |
|------|--------|----|----|
| **Palette de commandes** (Ctrl+Shift+P) | Fuzzy search vers les pages fréquentes (planning, CRIT, stocks, workflow…) — complète le Ctrl+K natif | M | Élevé |
| **Raccourcis clavier** | `g p` → planning, `g d` → DIT, `Ctrl+Shift+G` → ouvrir Gilles, `Ctrl+Shift+R` → Reformuler | F | Moyen |
| **Copier la fiche contact client** | Bouton sur le bloc détail DIT → « M. ROSA John — 04 90 92 20 02 — j.rosa@… » dans le presse-papier | F | Moyen |
| **Minuteur d'intervention** | Start/stop flottant → insère « Durée : 1h25 » dans le CR à la fin | M | Moyen |
| **Suivre une DIT** | Étoile sur une DIT → notification quand son état change (extension du monitor existant) | G | Élevé |
| **Récap quotidien** | Notification à heure fixe : DIT du jour + tâches checklist non faites | M | Moyen |

## 5. Thème / personnalisation

| Idée | Détail | 💪 | 🎯 |
|------|--------|----|----|
| **Couleur d'accent réglable** | Color picker popup → remplace l'indigo `#6366f1` partout (tout passe déjà par `--a-p/--a-p2`) | M | Moyen |
| **Presets de thème** | Indigo (actuel), émeraude, ambre, rose — 4 jeux de variables CSS | M | Faible |
| **Densité compact/confort** | Réduit paddings/tailles pour voir plus de lignes sur les gros tableaux | M | Moyen |
| **Dark/light auto** | Suivre `prefers-color-scheme` ou plage horaire (ex : clair 8h-18h) | F | Faible |
| **Toggle animations** | Off = retire canvas + transitions (PC faibles / batterie) — le gros est déjà fait via `prefers-reduced-motion`, manque le réglage manuel | F | Moyen |
| **Taille de police réglable** | Slider 12-16px dans la popup | F | Faible |

## 6. Extension / technique

| Idée | Détail | 💪 | 🎯 |
|------|--------|----|----|
| **Page Options dédiée** | `options_page` Chrome — la popup devient à l'étroit (8 réglages déjà) | M | Moyen |
| **Sync des réglages** | `chrome.storage.sync` au lieu de `local` → réglages partagés entre postes | F | Moyen |
| **Export/import réglages** | JSON download/upload (sauvegarde avant réinstall) | F | Faible |
| **Check de mise à jour** | Compare la version au dernier tag GitHub → notif « v1.9.48 dispo » | F | Moyen |
| **Panneau diagnostic** | État API, taille des storages, version, erreurs récentes — debug rapide | F | Faible |
| **i18n** | FR/EN via `chrome.i18n` (si distribution un jour) | G | Faible |

---

## Top 5 recommandé (meilleur ratio effort/impact)

1. **Reformuler : bouton Annuler** (F/Élevé) — filet de sécurité indispensable
2. **Bouton « Résume cette page »** (F/Élevé) — l'usage n°1 de Gilles en 1 clic
3. **Export CSV universel** (F/Élevé) — utile sur toutes les pages de données
4. **Ligne « maintenant » planning** (F/Élevé) — repère visuel quotidien
5. **Streaming des réponses Gilles** (M/Élevé) — transforme le ressenti du chat

> Dire lesquelles implémenter — je les coche ici au fur et à mesure.
