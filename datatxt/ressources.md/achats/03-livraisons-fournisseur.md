# Livraisons fournisseur

> Categorie: Achats | Pages 491-494

## Sous-rubriques
- Générer les fichiers commandes fournisseurs (p.491)
- Gérer les livraisons fournisseurs (p.491)
- Interroger l'historique des livraisons (p.493)
- Faire la livraison fournisseur en mode douchette (p.494)

fonctionne de la même façon que celui listé ci-dessus.
La différence repose sur une colonne supplémentaire comprenant les articles de facturation.
Générer les fichiers commandes fournisseurs
GENERER LES FICHIERS DE COMMANDES FOURNISSEURS
Ce module est complémentaire et spécifique, contacter ARTIS pour la mise en place.
Paramètres
Fournisseur pour les fichiers de commande
Paramètres application / Paramètres application / Gérer les paramètres
Le fournisseur à utiliser par défaut pour la génération des fichiers commandes fournisseurs, lors de
l'affichage de l'écran
Paramètre "GENFICCDEFOURN_FOURN_DEFAULT"
Valeur : Code du fournisseur
Chemin pour les fichiers de commande
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "REP_CMDE_FOURN"
Valeur : Chemin pour les commandes fournisseurs
Livraisons fournisseur
Gérer les livraisons fournisseurs
GÉRER LES LIVRAISONS FOURNISSEURS
Réceptionner une livraison Fournisseur peut être fait en créant un bon de livraison fournisseur. Cette
procédure nécessite de re-saisir des informations déjà présentes dans la commande fournisseur.
ARTIS préconise donc la procédure "Réceptionner une commande fournisseur à partir d'une
commande" ci-dessous.
Réceptionner une commande fournisseur à partir d'une commande
Achats / Commandes fournisseurs / Gérer les commandes fournisseurs
1. Appeler la commande fournisseur,
2. Cliquer sur "Livrer la commande",
3. L'écran de livraison fournisseur s'affiche,
4. Section "Livraison fournisseur",
5. Date de livraison : Elle correspond à la date d'entrée en stock, et donc impacte le mouvement
de stock,
Lignes de commandes à livrer
6. Section "Commandes à livrer",
7. Toutes les lignes sont cochées : les articles sont considérés comme étant à réceptionner,
8. Les quantités sont complétées en fonction du reliquat,
9. Décocher les lignes des articles non réceptionnés,
10. "Quantité livrée" : Modifier les quantités reçues partiellement,
11. <Disquette> ou <F2>,
12. Si des articles géré comme bien sont livrés, l'écran de saisie des matricules s'affiche :
§ Saisir les matricules dans "Identifiant fabricant",
§ <Disquette> ou <F2>,
13. La livraison est en visualisation globale,
14. Apporter les éventuelles modifications sur les lignes de livraison,
15. <Modifier> ou <Crayon>,
16. "Numéro externe" : Saisir le numéro du bon de réception présent sur le document papier du
fournisseur,
17. <Disquette> ou <F2>,
18. Reporter le numéro de BL ARTIS.net sur le document fournisseur,
19. Les mouvements de stock sont automatiquement générés, et les fiches sur les biens ont été
crées automatiquement.
Réceptionner une autre commande dans le même bon de livraison
20. Faire <Mosaïque>,
21. Cliquer sur "Commandes à livrer",
22. La liste des commandes en attente de livraison pour le fournisseur concerné s'affiche,
23. Cocher "Détails lignes",
24. Sélectionner la commande,
25. Refaire les étapes 6 à 14,
26. Refaire la même procédure pour les autres commandes à réceptionner, à partir de l'étape 20,
27. Si nécessaire,  faire <Mosaïque> et "Aperçu du BL" ou "Imprimer le BL".
Créer une livraison fournisseur
Achats / Livraisons fournisseurs / Gérer les livraisons fournisseurs
1. <+>,
2. Section "Filière",
3. Renseigner tous les champs vide,
§ Adresse : sélectionner l'adresse correspondant à celle de la commande fournisseur,
§ Dépôt : sélectionner le dépôt correspondant à celui de la commande fournisseur,
Les commands à livrer seront filtrées suivant ces critères,
4. Section "Transport",
5. Indiquer les informations si existantes,
6. Section "Infos principales livraison",
7. "N° externe", Saisir le numéro du bon de réception présent sur le document papier du
fournisseur,
8. Section "Règlement - financement livraison",
9. Vérifier les informations,
10. <Disquette> ou <F2>,
Commandes à livrer
11. La liste des commandes en attente de livraison pour le fournisseur concerné s'affiche,
12. Cocher "En-tête commandes",
13. Sélectionner la commande à livrer,
14. <Disquette> ou <F2>,
15. Toutes les lignes sont automatiquement livrées,
16. Apporter les éventuelles modifications sur les lignes de livraison,
17. Refaire la même procédure pour les autres commandes à réceptionner,
18. Si nécessaire,  faire <Mosaïque> et "Aperçu du BL" ou "Imprimer le BL",
19. Les mouvements de stock sont automatiquement générés, et les fiches sur les biens ont été
crées automatiquement.
Interroger l'historique des livraisons
INTERROGER L'HISTORIQUE DES LIVRAISONS
Achats / Livraisons fournisseurs / Interroger l'historique des livraisons
Position Position
lettrée Label de la colonne Format Commentaire
0 A Numéro livraison Format Texte
1 B Date livraison Format Instant
2 C Qte livr Format Texte
3 D PU remise HT livr Format Texte
4 E PU HT livr Format Texte
5 F Code fournisseur Format Texte
6 G Raison sociale fournisseur Format Texte
7 H Numéro commande Format Texte
8 I Date commande Format Instant
9 J Qte cde Format Texte
10 K PU remise HT cde Format Texte
11 L PU HT cde Format Texte
12 M Numéro facture Format Texte
13 N Date facture Format Instant
14 O Qte fact Format Texte
15 P PU remise HT fact Format Texte
16 Q PU HT fact Format Texte
17 R Code article vendu Format Texte
18 S Désignation Format Texte
19 T Code article acheté Format Texte
20 U Libellé article acheté Format Texte
21 V Description article acheté Format Texte
22 W Code marque article Format Texte
23 X Libellé marque article Format Texte
24 Y Libellé fournisseur Format Texte
25 Z Référence fournisseur Format Texte
26 AA Description fournisseur Format Texte
27 AB Code organisation interne Format Texte
28 AC Raison sociale organisation interne Format Texte
29 AD Code activité article vendu Format Texte
30 AE Libellé activité article vendu Format Texte
31 AF Code famille article vendu Format Texte
32 AG Libellé famille article vendu Format Texte
33 AH Code sous-famille article vendu Format Texte
34 AI Libellé sous-famille article vendu Format Texte
35 AJ Couverture contractuelle d'articles Format Texte
Faire la livraison fournisseur en mode douchette
FAIRE LA LIVRAISON FOURNISSEUR EN MODE DOUCHETTE
Achats / Livraisons fournisseurs / Gérer les livraisons fournisseurs
1. <+>,
2. Section "Filière",
3. Renseigner tous les champs vide,
§ Adresse : sélectionner l'adresse correspondant à celle de la commande fournisseur,
§ Dépôt : sélectionner le dépôt correspondant à celui de la commande fournisseur,
Les commands à livrer seront filtrées suivant ces critères,
4. Section "Transport",
5. Indiquer les informations si existantes,
6. Section "Infos principales livraison",
7. "N° externe", Saisir le numéro du bon de réception présent sur le document papier du
fournisseur,
8. Section "Règlement - financement livraison",
9. Vérifier les informations,
10. <Disquette> ou <F2>,
