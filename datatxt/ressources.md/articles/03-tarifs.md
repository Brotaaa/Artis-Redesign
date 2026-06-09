# Tarifs

> Categorie: Articles | Pages 652-663

## Sous-rubriques
- Particularités (p.652)
-   Modifier un article composant en modèle (p.652)
-     Créer un article d'ajustement (p.652)
- Généralités et Théorie (p.652)
- Gérer les tarifs (p.654)
-   Créer un tarif Client (p.655)
-   Créer un tarif Fournisseur (p.656)
-   Créer un tarif de vente, relatif (p.657)
-   Créer un tarif de vente (Public) par intervalle de prix (p.659)
-   Mettre à jour un tarif par un import (p.661)
- Gérer les prix d'un article (p.662)
- Interroger les tarifs articles (p.663)

Colonnes dépendant du
paramétrage de ARTIS.net
Particularités
Modifier un article composant en modèle
MODIFIER UN ARTICLE COMPOSANT EN MODÈLE
Il n'est pas possible de modifier le type d'article “Composant” en “Modèle, géré comme bien”
1. Neutraliser l'ancien
§ Mettre une date d'arrêt de la vente (plus utilisable dans les commandes, BL, factures
de vente et CRIT),
§ Rendre inactif les références fournisseur (plus utilisable dans les commandes, BL,
factures d'achat),
§ Modifier les références fournisseur (car elles devront être réutilisées dans le nouvel
articles),
2. Créer un nouvel article “Modèle, géré comme bien” ,
3. Modifier les documents en cours (commande d'achat et de vente) pour y mettre le nouvel
article,
4. Répercuter les stocks de l'ancien article (régularisation en moins) sur le nouvel article (créer les
biens en stock)
Créer un article d'ajustement
CRÉER UN ARTICLE D'AJUSTEMENT
Paramètres  Application / Classifications, listes et tables de décision / Gérer les tables de libellés
ARTIS
1. Cocher la première ligne ayant le contenu "com.artis.business.articles.ArtAjustement"
2. Sélectionner la loupe en bas du tableau
3. La liste existante s'affiche
4. Cocher <+> en bas du tableau pour ajouter un libelle
5. Saisir un code et libellé
6. Valider avec <Disquette>
7. Puis revenir à l'écran principal avec <X >
Tarifs
Généralités et Théorie
LES TARIFS
Un tarif est une "enveloppe" permettant d'insérer des prix d'articles et destiné à certains tiers. Il est
identifié par un code et un libellé (le code peut être identique à celui du tiers (client ou fournisseur).
Il possède une période de validité et peut être en vigueur (actif) ou non.
Portée du tarif
Un tarif a :
o Une destination :
§ Soit "Tarif d'achat",
§ Soit "Tarif de vente",
o Une portée parmi les éléments suivants :
§ Tarif Public : tarif de vente par défaut pour tous les clients,
§ Tarif d'Achat commercial : tarif utilisé dans la chaine vente pour déterminer le coût de
revient (calcul de marge commerciale),
§ Tarif Plancher : Non utilisé (tarif utilisé pour déterminer un seuil d'alerte dans la chaine
vente),
§ Tarif de Vente particulier : tarif particulier de vente accordé à un ou plusieurs clients
(prix négocié),
§ Tarif d'Achat particulier : tarif particulier d'achat accordé par un ou plusieurs
fournisseurs.
Mode de gestion des prix
Les prix d'un tarif peuvent être exprimés en prix net (prix en euro) ou en prix relatif (sous forme de
coefficient par rapport à un autre tarif).
Lorsque le tarif est relatif, il faut indiquer le tarif de base sur lequel il est calculé, et l'algorithme de
sélection du tarif pour être capable d'effectuer un choix automatiquement.
Conditions tarifaires
Elles permettent d'indiquer :
o Pour un tarif public, un tarif d'achat commercial ou un tarif plancher, l'organisation interne qui
accorde le tarif en cours,
o Pour un tarif d'achat particulier, le(s) fournisseur(s) qui accorde(nt) le tarif et le(s)
organisation(s) interne(s) qui en bénéficie(nt) ,
o Pour un tarif de vente particulier, le(s) organisation(s) interne(s) qui accorde(nt) le tarif et le(s)
le(s) client(s) qui en bénéficie(nt).
Superposition de tarifs
La détermination d'un prix doit se faire de façon automatique. Lorsqu'un article a un prix défini dans
plusieurs tarifs simultanément, il est impératif de préciser quel est le tarif prioritaire. il s'agit de
préciser :
o Soit "Prendre le pas sur",
o Soit "Cède le pas à",
Cette notion de superposition est utile uniquement entre tarifs de même portée.
Par défaut un tarif particulier est prioritaire par rapport à un tarif public. S'il existe un tarif de vente
particulier à un client, il sera appliqué en priorité par rapport au tarif public en vigueur, sans avoir
indiqué de superposition entre les deux tarifs.
Par ailleurs, tous les tarifs qui peuvent être imposés à la saisie doivent céder le pas au tarif
"normal". C'est le cas des tarifs d'achats qui sont indiqués dans les commandes clients par
exemple.
Exemple : Le tarif 000258 est un tarif d'achat standard chez le fournisseur. Les tarifs X X  % sont des
tarifs spéciaux. Il faut donc définir que le tarif 000258 prend le pas sur les tarifs spéciaux dans les
commandes fournisseurs si on ne veut pas qu'ils soient pris en compte dans un cas « normal » et
sans indication dans la commande.
Dans la tentative de déterminer le tarif à appliquer, si ARTIS.net obtient plus de un tarif, alors aucun
tarif n'est appliqué. Le prix est valorisé à 0, zéro.
Gérer les tarifs
Tarif en direction des clients
Tarif public
Tarif de vente accordé par une organisation interne, et accordé à tous les clients. Dans ce cas, les
clients ne sont pas référencés.
Tarif de vente
Tarif de vente accordé par une organisation interne, et accordé à certains clients. Il est nécessaire
et obligatoire de lister les clients concernés.
Tarif en provenance des fournisseurs
Tarif d'achat
Tarif d'achat accordé par un fournisseur, et accordé à une organisation interne. Le fournisseur et
l'organisation interne sont référencés.
Tarif pour valorisation des marge
Tarif d'achat commercial
Tarif accordé par une organisation interne. Les prix des articles sont alors utilisés pour valoriser les
coûts de revient en saisie de commande.
Créer un tarif Client
CREER UN TARIF CLIENT
Tarif client à prix net
Créer le tarif client
Articles / Tarifs / Gérer les tarifs
1. <+>,
2. Saisir code et le libellé explicatif,
3. Indiquer dates de début et de fin de validité,
4. Cocher "en vigueur",
5. Section "Type de tarif",
6. Indiquer "tarif de vente",
7. Indiquer "à prix net",
Conditions de vente et d'achat
8. Cliquer sur "Conditions de vente et d'achat",
9. <Modifier> ou <Crayon>,
10. Section "Accordé aux organisations",
11. <Attacher>,
12. Sélectionner les clients qui bénéficieront de ce tarif particulier,
13. Section "Accordé par les organisations",
14. Vérifier l'organisation interne,
15. <Disquette> ou <F2>.
Saisir le prix accordé
Articles / Tarifs / Gérer les articles
1. Appeler l'article,
2. <Modifier> ou <Crayon>,
3. Section "Tarifs de vente",
4. Rechercher la ligne correspond au tarif créer ci-dessus,
5. Saisir le prix de vente,
6. <Disquette> ou <F2>.
Remarque
La mise à jour des tarifs est également possible dans le menu Gérer les Articles.
Créer un tarif Fournisseur
CREER UN TARIF FOURNISSEUR
Créer le tarif fournisseur
Articles / Tarifs / Gérer les tarifs
1. Vérifier l'existence du tarif pour le fournisseur,
2. <+>,
3. Saisir code : Code fournisseur suivi d'un suffixe, exemple : F00159-01,
4. Saisir le libellé explicatif,
5. Indiquer dates de début et de fin de validité,
6. Cocher "en vigueur",
7. Section "Type de tarif",
8. Indiquer "tarif d'achat",
9. Indiquer "à prix net",
Conditions de vente et d'achat
10. Cliquer sur "Conditions de vente et d'achat",
11. <Modifier> ou <Crayon>,
12. Section "Accordé par les organisations",
13. <Attacher>,
14. Insérer le fournisseur,
15. Section "Accordé aux organisations",
16. <Attacher>
17. Insérer l'organisation interne,
18. <Disquette> ou <F2>,
19. Le tarif est disponible en saisie des articles.
Saisir le prix accordé
Articles / Tarifs / Gérer les articles
1. Appeler l'article,
2. Cliquer sur "Références fournisseur/fabricant",
3. Section "Références fournisseur",
4. Sélectionner la référence fournisseur,
5. <Modifier> ou <Crayon>,
6. Section "Tarifs d'achat",
7. Saisir le prix d'achat,
8. <Disquette> ou <F2>.
Créer un tarif de vente, relatif
CRÉER UN TARIF DE VENTE RELATIF
Créer un tarif de vente, relatif à un prix de vente public
Articles / Tarifs / Gérer les tarifs
Le tarif concerne un tarif de vente particulier qui est relatif au Tarif de vente "Public".
1. <+>,
2. Saisir code et le libellé explicatif,
3. Indiquer dates de début et de fin de validité,
4. Cocher "en vigueur",
5. Section "Type de tarif",
6. Indiquer "Tarif de vente",
7. Indiquer "relatif",
8. Section "Caractéristiques propres au tarif relatif",
9. "Algorithme" : Sélectionner "Le plus cher", "Le moins cher" ou "La référence prioritaire",
10. "Tarif de base" : Sélectionner "Public",
11. <Disquette> ou <F2>,
Conditions de vente et d'achat
12. Cliquer sur "Conditions de vente et d'achat",
13. <Modifier> ou <Crayon>,
14. Section "Accordé aux organisations",
15. <Attacher>,
16. Sélectionner les clients qui bénéficieront de ce tarif particulier,
17. Section "Accordé par les organisations",
18. Vérifier l'organisation interne,
19. <Disquette> ou <F2>,
Superpositions de tarifs
20. Cliquer sur "Superpositions de tarifs",
21. S'il existe plusieurs tarifs possibles, il est nécessaire de les hiérarchiser pour indiquer les
priorités des uns par rapport aux autres. Si lors de la recherche du tarif à appliquer, plus de un
tarif se présentent, ARTIS.net n'appliquera aucun tarif, et la valeur retournée sera 0, zéro.
22. <Modifier> ou <Crayon>,
23. Hiérarchiser le tarif :
§ Soit section "Ce tarif prend le pas sur", et compléter,
§ Soit section "Ce tarif cède le pas à", et compléter,
Gérer les prix du tarif relatif
24. <Mosaïque>,
25. Cliquer sur "Gérer les prix du tarif relatif",
26. "Classification" : Sélectionner la classification (en général : "ARTICLES VENDUS"),
27. Sélectionner les éléments : Les catégories du 3ème et dernier niveau,
28. <Mosaïque>,
29. Cliquer sur "Modifier les remises des prix relatifs",
30. Section "Modifications des remises",
31. ARTIS.net affiche une ligne par catégorie sélectionnée,
32. Saisie le coefficient de remise,
33. <Disquette> ou <F2>.
Remarque
Pour accorder 20% de remise au client, indiquer 0.80 dans Coeff.Remise, c'est-à-dire : 100 – 20%
= 80% soit 0.80.
Créer un tarif de vente, relatif à un tarif d'achat
Articles / Tarifs / Gérer les tarifs
Le tarif concerne un tarif de vente particulier qui est relatif au Tarif d'achat.
1. <+>,
2. Saisir code et libellé,
3. Indiquer dates de début et de fin de validité,
4. Cocher "en vigueur",
5. Section "Type de tarif",
6. Indiquer "tarif de vente",
7. Indiquer "relatif",
8. Section "Caractéristiques propres au tarif relatif",
9. "Algorithme" : Sélectionner "Le plus cher", "Le moins cher" ou "La référence prioritaire",
10. "Tarif de base" : Sélectionner "Achat",
11. <Disquette> ou <F2>,
Conditions de vente et d'achat
12. Cliquer sur "Conditions de vente et d'achat",
13. <Modifier> ou <Crayon>,
14. Section "Accordé aux organisations",
15. <Attacher>,
16. Sélectionner les clients qui bénéficieront de ce tarif particulier,
17. Section "Accordé par les organisations",
18. Vérifier l'organisation interne,
19. <Disquette> ou <F2>,
Superpositions de tarifs
20. Cliquer sur "Superpositions de tarifs",
21. S'il existe plusieurs tarifs possibles, il est nécessaire de les hiérarchiser pour indiquer les
priorités des uns par rapport aux autres. Si lors de la recherche du tarif à appliquer, plus de un
tarif se présentent, ARTIS.net n'appliquera aucun tarif, et la valeur retournée sera 0, zéro.
22. <Modifier> ou <Crayon>,
23. Hiérarchiser le tarif :
§ Soit section "Ce tarif prend le pas sur", et compléter,
§ Soit section "Ce tarif cède le pas à", et compléter,
Gérer les prix du tarif relatif
24. <Mosaïque>,
25. Cliquer sur "Gérer les prix du tarif relatif",
26. "Classification" : Sélectionner la classification (en général : "ARTICLES VENDUS"),
27. Sélectionner les éléments : Les catégories du 3ème et dernier niveau,
28. <Mosaïque>,
29. Cliquer sur "Modifier les remises des prix relatifs",
30. Section "Modifications des remises",
31. ARTIS.net affiche une ligne par catégorie sélectionnée,
32. Saisie le coefficient de remise,
33. <Disquette> ou <F2>.
Remarque
Le prix d'achat est d'environ 9.39 €, la marge souhaitée est de 20 % sur cette sous-famille avec ce
client : mettre 1.2.
Créer un tarif de vente (Public) par intervalle de prix
CRÉER UN TARIF DE VENTE (PUBLIC) PAR INTERVALLE DE
PRIX
Dans l'exemple, les coefficients à appliquer sur les pièces détachées sont :
§ De 0 à 1,5 euro, le coefficient est : 10,
§ De 1,5 à 15 euro, le coefficient est : 3,
§ De 15 à 500 euro, le coefficient est : 2,5,
§ De 500 à 99999999999 euro, le coefficient est : 2.
La mise en place de ce tarif doit l'ordre ci-dessous.
Table de décision
Liste des tarifs avec intervalle
Paramètres application / Classifications, Listes et tables de décision / Gérer les tables de
décisions
Modifier la table de décision "LISTE_TARIFS_AVEC_TD".
Numéro Tarif
1 PV_PIECE_DETACHEE
Intervalle de prix et prix
Paramètres application / Classifications, Listes et tables de décision / Gérer les tables de
décisions
Modifier la table de décision "TARIFS_RELATIFS".
Numéro Code tarif Borne
supérieure Coefficient
1 PV_PIECE_DETACHEE 1.50 10
2 PV_PIECE_DETACHEE 15.00 3
3 PV_PIECE_DETACHEE 500.00 2.5
4 PV_PIECE_DETACHEE 9999999 2
Tarif de vente, relatif à un tarif d'achat
Articles / Tarifs / Gérer les tarifs
1. <+>,
2. "Code" : "PV_PIECE_DETACHEE",
3. Saisir le libellé,
4. Indiquer dates de début et de fin de validité,
5. Cocher "en vigueur",
6. Section "Type de tarif",
7. Indiquer "Public",
8. Indiquer "relatif",
9. Section "Caractéristiques propres au tarif relatif",
10. "Algorithme" : Sélectionner "Le plus cher", "Le moins cher" ou "La référence prioritaire",
11. "Tarif de base" : Sélectionner "Achat",
12. <Disquette> ou <F2>,
Conditions de vente et d'achat
13. Cliquer sur "Conditions de vente et d'achat",
14. <Modifier> ou <Crayon>,
15. Section "Accordé par les organisations",
16. Vérifier ou insérer l'organisation interne,
17. <Disquette> ou <F2>,
Superposition de tarifs
18. Cliquer sur "Superposition de tarifs",
19. <Modifier> ou <Crayon>,
20. Section "Ce tarif prend le pas sur",
21. <Attacher> ou <Chaîne>,
22. Décocher "Destination du tarif (Achat/Vente)",
23. <Flèche verte> ou <F2>,
24. Sélectionner le tarif public,
25. <Disquette> ou <F2>,
26. <Disquette> ou <F2>,
Gérer les prix du tarif relatif
27. <Mosaïque>,
28. Cliquer sur "Gérer les prix du tarif relatif",
29. "Classification" : Sélectionner la classification (en général : "ARTICLES VENDUS"),
30. Section "Table de décision",
31. La table des intervalles des prix et des coefficients s'affiche,
32. Sélectionner les éléments : Les catégories du 3ème et dernier niveau,
33. <Mosaïque>,
34. Cliquer sur "Modifier les articles et catégories contenus dans le tarif",
35. Section "Modifications des remises",
36. ARTIS.net affiche une ligne par catégorie sélectionnée avec "Coeff de remise" valorisé avec
"Table de décision",
37. <Disquette> ou <F2>.
Commande client
Faire un test pour validation.
Mettre à jour un tarif par un import
METTRE À JOUR UN TARIF PAR UN IMPORT
Fichier du tarif
Il s'agit d'un fichier texte, avec un séparateur « ; » (par exemple ou "Tab") et deux colonnes :
o Code article
o Prix net
Exemple de fichier : « ImportTarif000505.csv »

 Code article; Prix net HT
 S-3245;68.70
 AR202;110.35

 Le fichier est à déposer dans un répertoire sur le serveur. Ce répertoire est à préciser dans l'écran
ci-après.
Import dans ARTIS.net
Import du tarif en simulation
Articles / Tarifs / Gérer les tarifs
1. Appler le tarif à mettre à jour,
2. <Mosaïque>,
3. Cliquer sur "Import de tarif",
4. Compléter :
5. Le répertoire d'import,
6. Le nom du fichier à importer,
7. Le répertoire du log,
8. Le séparateur ";" (cas cité ci-dessus),
9. Cocher "Simuler",
10. <Flèche verte> ou <F2>,
11. Le résultat de la simulation est sous deux formes :
§ Un rapport succinct à l'écran,
§ Un fichier présent dans le répertoire indiqué.
Import définitif
1. Même procédure,
2. Cocher "Importer"

Gérer les prix d'un article
GÉRER LES PRIX D'UN ARTICLE
Articles / Tarifs / Gérer les prix d'un article
Cet écran permet de consulter ou modifier des tarifs de vente et d'achat.
1. Rechercher l'article :
§ Soit "Art. vendu" : il s'agit de l'article vendu (code interne ARTIS.net),
§ Soit "Réf. achat" : il s'agit de l'article acheté (référence du fournisseur),
Calcul d'un prix
2. Sélectionner le client,
3. Sélectionner le fournisseur,
4. Modifier éventullement les dates,
5. Cliquer sur "Calculer",
Cas particulier des tarifs relatifs
6. Cliquer sur "Calculer les prix relatifs de vente",
7. Cliquer sur "Calculer les prix relatifs d'achat",
Modification des prix
8. <Modifier> ou <Crayon>,
9. Saisir les prix dans le tableau éditable (pour les prix d'achat, sélectionner une référence
fournisseur),
10. <Disquette> ou <F2>.
Interroger les tarifs articles
INTERROGER LES TARIFS ARTICLES
Position Position
lettrée Label de la colonne Format Commentaire
1 A CodeArtVendu  Texte
2 B LibelleArticle  Texte
3 C Marque  Texte
4 D PrixDeVente  Monétaire
5 E Unite  Texte
