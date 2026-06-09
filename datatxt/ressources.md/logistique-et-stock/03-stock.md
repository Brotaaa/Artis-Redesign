# Stock

> Categorie: Logistique et Stock | Pages 514-532

## Sous-rubriques
- Réceptions (p.514)
- Gérer le catalogue des articles des dépôts (p.514)
-   Saisir des mini, maxi, emplacements (p.517)
- Régulariser les stocks (p.519)
- Transférer les articles (p.519)
- Transférer un article vers un autre (p.520)
- Réapprovisionner les dépôts (p.521)
- Consulter l'état des stocks par dépôt (p.523)
- Consulter l'état des stocks par article (p.524)
- Consulter la liste des mouvements de stock (p.525)
-   Vérifier les mouvements de stock sur une période donnée (p.527)
- Consulter les articles demandés en interventions (p.528)
- Consulter les articles au stock négatif (p.529)
- Imprimer un lot d'etiquettes (p.529)
- Gérer les situations de stocks (p.530)
- Particularités (p.530)
-   Actualiser automatiquement les emplacements (p.530)
-   Fusionner deux dépôts (p.531)

Gérer les livraisons clients
Consulter Ventes, Gérer les livraisons clients.
Suivre les reliquats clients
Consulter Ventes, Suivre les commandes et les reliquats clients.
Réceptions
RÉCEPTIONS
Gérer les livraisons fournisseurs
Consulter Achats, Gérer les livraisons fournisseurs.
Suivre les reliquats fournisseurs
Consulter Achats, Suivre les reliquats fournisseurs.
Stock
Gérer le catalogue des articles des dépôts
GÉRER LE CATALOGUE DES ARTICLES DES DÉPÔTS
Cette option permet de :
o Consulter les articles actifs dans le dépôt,
o Analyser la consommation des articles sur une période (à indiquer obligatoirement),
o Gérer les mini / maxi sur les articles en fonction de leur consommation,
o Déterminer les stocks âgés.
Logistique et Stocks / Stocks / Consulter le catalogue des dépôts
1. Ecran de sélection
2. Eventuellement, renseigner les critères de sélection : Dépôts, Catégorie d'articles ou Marques,
3. <F2> ou <flèche verte>,
4. Artis.net recherche les informations et les affiches, voir ...
Section critère de sélection / Sélection à l'aide des onglets (partie
basse de l'écran)
o Dépôts : il s'agit d'une liste de dépôts,
o Catégories d'articles de stock : il s'agit d'une liste de catégories.
o Marques : il s'agit d'une liste de marques.
Le module de multi-sélection des Dépôts, des Catégories d'articles de stock et des Marques (voir la
partie basse de l'écran) permet d'obtenir le catalogue de plusieurs dépôts et/ou filtrer sur les
catégories d'articles de stock et/ou sur les marques qui vous intéressent.
Les listes permettent de cocher les données pour les réutiliser à chaque analyse. Il est possible de
cocher/dé-cocher ponctuellement des critères (par exemple, un ou plusieurs dépôts) sans les
sauvegarder dans une liste.
Critères de calcul
Choix du filtre
Les filtres sur les articles sont les suivants :
§ Aucun filtrage : tous les articles du catalogue sont ramenés,
§ Articles à zéro :  tous les articles avec une quantité en stock à 0 sont exclus,
§ Consos à zéro : tous les articles sans consommation sur la période sont exclus,
§ Articles et consos à zéro : tous les articles avec une quantité en stock à 0 ou un mini /
maxi à 0 ET sans consommation sur la période sont exclus,
§ Articles ou consos à zéro : tous les articles avec une quantité en stock à 0 ou un
mini /maxi à 0 OU sans consommation sur la période sont exclus.
Choix de la valorisation
La valorisation est possible :
§ Soit au PMP,
§ Soit au prix d'achat de la fiche Article.
La valeur du dépôt ainsi que celle des reliquats réservés sur des interventions s'affichent en
haut du tableau, dans l'entête de la section.
Attention
Le traitement est beaucoup plus rapide si la valorisation n'est pas demandé.
Consommation
Si l'utilisateur demande les consommation sur une période, ARTIS.net ajoute 2 colonnes, voir le
descriptif du tableau ci-dessous.
Tableau de résultat
Position Position
lettrée Label de la colonne Format Valorisation : Pas de calcul
Consom m ation : Pas de période
Valorisation : PMP ou prix d'achat
Consom m ation : Pas de période
Valorisation : PMP ou prix d'achat
Consom m ation : Sur une période Commentaire
1 A Code art.
2 B Libellé art.
3 C Référence fournisseur Par défaut, il s'agit de la référence prioritaire. A défaut, Artis.net
affiche la première des références fournisseurs actives
4 D Mini
5 E Maxi
6 F Empl.
7 G Stk phy.
8 H Stk théo. C'est la quantité disponible à terme de l'article (disponible +
reliquats fournisseurs)
9 I Mini franchi C'est la date à laquelle la quantité en stock est descendue sous
le minimum
10 J Conso. X
La quantité est cliquable : consulter Saisie / modification des
mini, maxi, emplacement fiche par fiche
Dans le cas une sélection de plusieurs dépôts, l'écran qui
s'affiche permet d'avoir la quantité par dépôt
11 K Conso. dépôts liés X Pour les dépôts de réapprovisionnement, elle donne la
consommation des dépôts rattachés au dépôt fixe
12 L Valeur unitaire X X
13 M Valeur totale X X
14 N Dernière entrée
15 O Dernière sortie
16 P Act. Catégorie niveau 1 de la classification "Articles de stock"
17 Q Activité
18 R Fam. Catégorie niveau 2 de la classification "Articles de stock"
19 S Famille
20 T S-fam. Catégorie niveau 3 de la classification "Articles de stock"
21 U Sous-famille
22 V Marque C'est la marque de l'article de stock
23 W Code dépôt S'affiche si vous n'avez sélectionné qu'un seul dépôt
24 X Libellé dépôt S'affiche si vous n'avez sélectionné qu'un seul dépôt
25 Y Nom art. chez fournisseur
Pour qu'un article apparaisse, les conditions suivantes doivent être satisfaites :
§ L'article doit être suivi en stock et avoir une référence de stock,
§ Il a au moins une référence fournisseur active et non remplacée.
Rafraichissement du tableau
Si des modification ont été faites, lors du réaffichage du tableau, les données ne sont pas
actualisées afin d'optimiser le temps d'affichage. Au besoin, cliquer sur "Rafraîchir", en haut à
droite.
Comportement en cas de multi-sélection des articles et des dépôts
Si plusieurs dépôts sont sélectionnés, l'emplacement récupéré est celui du premier dépôt
sélectionné. Les mini / maxi sont quant à eux cumulés pour l'ensemble des dépôts.
Les touches <Suivant> ou <Précédent> permettent de faire défiler les différents dépôts
sélectionnés. Ce défilement des dépôts dépend de la présence ou non de l'article analysé dans le
Catalogue :
Par exemple, sur 5 dépôts sélectionnés :
o En visualisant ou modifiant l'article 1, ARTIS fait défiler uniquement les dépôts dans lesquels il
est géré
o En visualisant ou modifiant l'article 2, ARTIS fait défiler les 5 dépôts car il est géré dans les 5.
Le comportement est le même en cliquant sur la quantité consommée.
Prise en compte des mouvements clients et fournisseurs
uniquement
L'analyse des consommations ne prend en compte que les mouvements clients et fournisseurs.
Les mouvements de transferts et de régularisations sont exclus.
Option dans <Mozaique>
Si un ou des articles sont cochés, il est possible en cliquant sur <Mozaique> de :
o Consulter la liste des biens correspondants (il faudra utiliser les touches <Suivant> et
<Précédent>),
o Consulter l'état des stock par article (il faudra utiliser les touches <Suivant> et <Précédent>).
Saisir des mini, maxi, emplacements
SAISIR DES MINI, MAXI, EMPLACEMENTS
Logistique et stock / stock / Gérer le catalogue des articles d'un dépôt
1. Gérer le catalogue des articles d'un dépôt,
2. Cocher le dépôt à actualiser,
3. Puis faire <F2> ou <Flèche verte>,
4. Le tableau ci-dessous s'affiche.
Saisie / modification dans le tableau
Pour des articles existants
1. Trier sur l'entête des colonne (cliquer une fois pour obtenir en premières lignes, les articles
sans information),
2. <Modifier> ou <Crayon> de la barre verticale,
3. Saisir  les Mini/maxi et emplacements,
4. <F2> ou <Disquette>.
Remarque
Pour  travailler vos Mini/Maxi, il est plus facile d'exporter sous Excel le résultat, de travailler ceux-ci
sous Excel et d'apporter ensuite vos corrections.
Pour des articles inexistants
1. Faire <+> dans la barre horizontale en bas du tableau,
2. Sélectionner l'article,
3. Saisir  les Mini/maxi et emplacements.
Saisie / modification fiche par fiche
Sélectionner les articles à modifier,
1. <Modifier> ou <Crayon> dans la barre horizontale en bas du tableau,
2. L'écran obtenu donne :
§ Dans la partie haute de l'écran, les champs modifiables MINI, MAX I, Emplacement,
§ Dans la partie basse de l'écran, la section "Consommation" donne la consommation du
mois en cours et la consommation moyenne des 6 derniers mois.
§ Un graphique donne l'évolution de la consommation sur les 12 derniers mois,
3. Saisir les informations,
4. <F2> ou <Disquette>,
5. Artis.net passe automatiquement à l'article suivant.
Régulariser les stocks
RÉGULARISER LES STOCKS
Logistique et Stocks / Stocks / Régulariser les stocks
1. <+>,
2. Rechercher l'article à régulariser,
3. Indiquer la quantité de régularisation,
4. Mettre un commentaire pour justifier.
Les régularisations sont toujours visualisables : modifier la période.
Transférer les articles
TRANSFÉRER LES ARTICLES
Logistique et Stocks / Stocks / Transférer les articles
1. Rechercher le dépôt d'origine,
2. Rechercher le dépôt de destination,
3. Rechercher l'article à transférer,
4. Indiquer la quantité à transférer,
5. Mettre un commentaire pour justifier,
6. <F2> ou <Disquette>,
7. Eventuellement, refaire la procédure pour un autre article,
8. <X > ou <Esc> pour quitter.
Les régularisations sont toujours visualisables : modifier la période.
Lors d'un transfert de stock d'un article géré comme bien, une question est posée pour savoir ce
que l'utilisateur veut faire des accessoires et des constituants liés.
o Pour un accessoire :
§ Transférer : l'accessoire suit le bien maître, un mouvement de transfert est effectué
§ Détacher : l'accessoire est détaché du bien maître et reste dans le dépôt
o Pour un constituant :
§ Rien : le constituant reste attaché au bien maître, aucun mouvement n'est effectué
§ Transférer : le constituant reste attaché au bien maître, un mouvement de transfert est
effectué
§ Détacher : le constituant  est détaché du bien maître et reste dans le dépôt
Un ordre de transfert peut être édités pour les articles non gérés comme bien.
Transférer un article vers un autre
TRANSFÉRER UN ARTICLE VERS UN AUTRE (FUSION
D'ARTICLES)
Cet écran permet de transférer les stocks d'un article X  vers un autre Y. Les quantités en stock de
l'article X  seront ainsi ajoutées aux quantités en stock de l'article Y.
Il sert à harmoniser votre base de données en fusionnant par exemple deux articles créés en
double.
Il ne faut pas transférer l'article vers un autre avant que les quantités en stock soient épuisées ; car
les techniciens auraient alors un problème de saisie de référence (ancienne) n'ayant pas de stock.
Étape 1
1. Vérifier les reliquats de l'article d'origine,
2. Changer les reliquats de l'article d'origine et mettre l'article de destination (Commandes
fournisseur, Demandes d'articles dans les CRIT, Commandes client (éventuellement)),
3. Vérifier le mini et le maxi de la de l'article d'origine et actualiser le mini et le maxi de l'article de
destination.
Étape 2
Lorsque tous les quantités en stock sont épuisés, dans toutes les organisations internes, le
gestionnaire de stock :
1. Met une date d'arrêt de la vente
2. Effectue l'opération « Transférer un article vers un autre »
1. Article d'origine : La sélection de l'article vendu se fait dans la liste des articles
remplacés ET retirés de la vente. Cette actualisation de la fiche Article devra donc être
effectuée avant le lancement du traitement.
2. Article de destination : Celui qui doit être conservé. Il sera donc crédité.
3. Valider la date et l'heure de la régularisation de stock,
4. Sélectionner ensuite un commentaire type du mouvement (texte prédéfini),
5. Saisir éventuellement un commentaire explicatif (texte libre).
6. <F2> ou <Disquette>
Traitement
Contrôles effectués
o Un contrôle d'existence de l'article d'origine, de l'article destination et du commentaire type est
effectué,
o L'article vendu lié à l'article destination est sélectionné dans la liste des articles non remplacés
ni retirés de la vente,
o Le mode de gestion des articles est contrôlé : Suivi en stock et Non géré comme bien,
o L'encours sur l'article d'origine est contrôlé. S'il existe des réservations, des reliquats clients ou
des reliquats fournisseurs, le traitement est annulé et sans effet.
Effet du traitement
o Le mouvement lié à l'article d'origine a une quantité négative.
o Le mouvement lié à l'article de destination a une quantité positive.
o La valeur du mouvement est le prix moyen pondéré (PMP) de l'organisation interne au moment
de la régularisation. Le PMP de l'article d'origine est remis à zéro tandis que le PMP de l'article
destination est recalculé au prorata des quantités mouvementées.
o Les mini et maxi de l'article de destination sont dupliquées dans les dépôts à condition qu'ils
n'existent pas déjà.
Au terme du traitement, cliquez sur "Visualiser le résultat" pour obtenir un tableau récapitulatif
exportable.
Réapprovisionner les dépôts
RÉAPPROVISIONNER LES DÉPÔTS
Logistique et Stocks / Stocks/ Réapprovisionner les dépôts
Paramètres de réapprovisionnement
1. Dépôt prévu de réappro. : Sélection du dépôt de réapprovisionnement (dépôt d'origine des
transferts), exemple : le stock central,
2. Dépôt(s) destination : Sélection des dépôts de destination (liste paramétrée des dépôts à
réapprovisionner), exemple : les véhicules, les agences, etc,
3. Catégories d'articles de stock : Sélection des catégories d'articles de stock (liste paramétrée
des articles à prendre en compte), exemple, les pièces détachées et les consommables
embarqués,
Remarque
Seul le dépôt source de réapprovisionnement est obligatoire. Par contre, les listes prédéfinies
sont devenues facultatives. Dans ce cas sélectionner dans les tableaux des onglets de la partie
inférieure de l'écran.
Section "Filtre sur les demandes"
Il est possible de cocher "Uniquement les demandes bloquantes" pour réapprovisionner en
premier les reliquats des techniciens les plus urgents.
4. <Flèche verte> ou <F2>.
Proposition des articles à réapprovisionner
Après calcul des besoin, la proposition de réappro s'affiche,
Calcul des besoins
Le calcul suit la procédure suivante (intégrant en même temps les réservations) :
Récupération des besoins non réapprovisionnables
Tous les besoins sont récupérés systématiquement. Par contre, la quantité de réapprovisionnement
reste à 0 si le stock disponible dans le dépôt de réapprovisionnement n'est pas suffisant.
Cela présente deux avantages :
§ Le gestionnaire des stocks  est  alerté sur ses  ruptures de stocks  dans  le  dépôt  de
réapprovisionnement,
§ Le  destinataire (le  technicien  le  plus  souvent) est  avisé des  ruptures de  stock  du
gestionnaire et des reliquats d'interventions qu'il ne peut finaliser.
Alerte sur le stock négatif
Un drapeau d'alerte est affiché lorsque le dépôt de réapprovisionnement est négatif.
Remarque
Dans ce cas, la quantité de réapprovisionnement est initialisée à 0.0 pour que le traitement ne
corrige pas l'erreur de stock (c'est au gestionnaire d'enquêter et de faire le transfert ou la
régularisation nécessaires).
Détail du besoin
Pour avoir le détail du besoin, cliquer sur la quantité "Besoin" de la ligne. L'origine est :
§ Soit un réapprovisionnement au vu des Mini/Maxi,
§ Soit une demande d'article pour intervention,
§ Soit une commande client.
Après génération des transferts de stocks
Après la génération des transferts de stocks, la case "Uniquement les propositions avec stock
disponible" est cochée par défaut. Les fiches de réapprovisionnement ne contiennent ainsi que les
articles donnés et les reliquats d'interventions fournis.
Si il est nécessaire de communiquer aux techniciens l'ensemble des besoins, y compris les
articles que le gestionnaire n'a pas pu lui fournir, il suffit de décocher cette case.
Modification de la quantité et validation
1. Pour modifier une quantité réapprovisionnée d'un article :
1. Sélectionner la ligne,
2. <Modifier>,
3. Corriger la quantité "qté. réappro.",
4. <F2>,
2. Cocher les lignes qu'il est nécessaire de réapprovisionner,
3. Lancer le traitement par <F2>.
Si la quantité réapprovisionnée porte sur plusieurs demandes, elles sont toutes listées.
Le site d'intervention figure dans le tableau des demandes clients. Ainsi, l'intervenant peut organiser
son retour client en fonction du lieu d'intervention.
Après validation
En bas de l'écran, deux liens permettent d'éditer :
o Une fiche de réapprovisionnement
o Et/ou les étiquettes des dépôts réapprovisionnés.
Consulter l'état des stocks par dépôt
CONSULTER L'ÉTAT DES STOCKS PAR DÉPÔT
Logistique et Stocks / Stocks / Consulter les stocks par dépôt
1. Sélectionner le dépôt,
2. Une fois le dépôt sélectionné, Artis.net génère la liste des articles avec les informations
Le tableau de résultat est le suivant :
Position Position
lettrée Label de la colonne Format Commentaire
1 A Code Code article
2 B Référence Référence fournisseur
3 C Libellé Libellé article
4 D Empl Emplacement en stock
5 E Stock physique Quantité réelle en stock
Liste des mouvements de stock pour cet article dans ce dépôt
depuis le dernier comptage, consulter Consulter la liste des
mouvements de stock
6 F Stock dispo. Stock disponible immédiat = Stock physique - Stock réservé
pour clients
7 G Reliquat clients Quantité en commande clients Liste des réservations
= Résa stock + Résa rel. fourn + A réserver
8 H Résa stock Quantité en reliquat client et réservée sur le stock disponible
9 I Résa rel. fourn. Réservation sur reliquat fournisseur = Quantité en reliquat client
et réservé sur les commandes fournisseurs
10 J A réserver Quantité en reliquat client mais en attente de réservation
11 K Reliquat fourn. Quantité en commande fournisseurs Liste des réservations
12 L Qté théorique = Stock physique - Reliquats clients + Reliquats fournisseurs
13 M Mini Quantité minimum en stock
14 N Maxi Quantité maximum en stock
Filtres possibles
o Articles en stock : Articles dont la quantité disponible est supérieure à 0,
o Articles actifs : Articles dont un mini ou maxi ou un emplacement ou un stock physique
différent de 0, et a été mouvementé depuis le dernier inventaire (ou il n'y a jamais eu d'inventaire
sur le dépôt),
o Articles à commander : Articles dont la quantité disponible est inférieure au mini de l'article,
o Articles à rapatrier : Articles dont la quantité physique est supérieure au maxi de l'article,
o Articles avec un stock négatif : Articles dont la quantité disponible est inférieure à 0
o Tous les articles
Consulter l'état des stocks par article
CONSULTER L'ÉTAT DES STOCKS PAR ARTICLE
Sur l'ensemble des dépôts que l'utilisateur peut visualiser :
o Stock physique TOTAL
o Stock disponible TOTAL : Stock physique - Stock réservé pour clients
o Stock théorique TOTAL : Stock physique - Reliquats clients + Reliquats fournisseurs
Les quantités sont affichés dans un tableau de la forme :
Position Position
lettrée Label de la colonne Format Commentaire Informations suite à un clic
1 A Secteur Secteur logistique
2 B Dépôt Dépôt
3 C Empl Emplacement en stock
4 D Stock physique Quantité réelle en stock
Liste des mouvements de stock pour cet article dans ce dépôt
depuis le dernier comptage, consulter Consulter la liste des
mouvements de stock
5 E Stock dispo.

 Stock disponible immédiat = Stock physique - Stock réservé
pour clients
6 F Reliquat clients

 Quantité en commande clients
= Résa stock + Résa rel. fourn + A réserver Liste des réservations
7 G Résa stock Quantité en reliquat client et réservée sur le stock disponible
8 H Résa rel. fourn.

 Réservation sur reliquat fournisseur = Quantité en reliquat client
et réservé sur les commandes fournisseurs Liste des réservations
9 I A réserver Quantité en reliquat client mais en attente de réservation
10 J Reliquat fourn. Quantité en commande fournisseurs
11 K Qté théorique = Stock physique - Reliquats clients + Reliquats fournisseurs
12 L Mini Quantité minimum en stock
13 M Maxi Quantité maximum en stock
Remarque
Sur ce tableau, un constat est que le stock disponible immédiatement est étroitement lié aux
réservations. De plus, le calcul des reliquats clients et fournisseurs intègre les réservations,
consulter le chapitre et sous-chapitres Mécanisme des réservations.
Biens en stock
Pour savoir quels sont les matricules en stock, procéder ainsi :
1. Sélectionner la ligne du dépôt,
2. Cliquer sur "Biens correspondants", dans l'entête de la ssection en haut à droite,
3. La liste des biens s'affichent,
4. La consultation de chaque bien est possible.
Impression des étiquettes de stock
Il est possible d'imprimer des étiquettes de stock :
1. Pour la quantité, cela peut être :
§ A la demande : l'utilisateur saisit dans la zone le nombre d'étiquette qu'il souhaite,
§ Suivant le nombre d'article dans le stock : l'utilisateur doit cliquer sur la ligne
correspondant au dépôt ciblé.,
2. Pour imprimer, cliquer sur "Imprimer".
Consulter la liste des mouvements de stock
CONSULTER LA LISTE DES MOUVEMENTS DE STOCK
Logistique et stocks / Stocks / Consulter la liste des mouvements de stock
Les critères de sélection sont :
o Article : Possibilité de rechercher les mouvements de stock sur un article,
o Matricule : Recherche sur un matricule précisément,
o Liste des catégories d'articles : Cette liste est paramétrable pour une réutilisation ultérieure
(Activité, famille, sous-famille de stock),
o Liste des dépôts : Cette liste est paramétrable pour une réutilisation ultérieure. La liste
comprend à la fois les dépôts source et cible,
o Période d'analyse :
§ Date des mouvements (date de valeur du mouvement) : Par défaut, la date de début de
mouvement est égale à la date du dernier inventaire pour limiter la période d'analyse,
§ Date de saisie des mouvements : Il est possible de mettre une borne sur l'heure des
mouvements,
o Type de mouvement : une multi sélection est possible :
§ Transfert (les transferts apparaissent sur 2 lignes (une entrée sur le dépôt cible, une
sortie sur le dépôt source)
§ Reprise (pour les biens)
§ Mouvement fournisseur (Bon de livraison ou facture directe ou avoir direct)
§ Mouvement client (Bon de livraison ou facture directe ou avoir direct)
§ Régularisation
§ Comptage (inventaire)
§ Inventaire (valorisation du comptage)
En bas de la page, deux liens vous permettent de visualiser :
· L'état des stocks
· Les biens correspondants (à un article de type ‘Géré comme bien')
Position Position
lettrée Label de la colonne Format Commentaire
1 A Article  Texte
2 B Référence  Texte
3 C Libellé  Texte
4 D Type de mouvement  Texte
5 E Dépôt  Texte
6 F Entrée stock  Monétaire
7 G Sortie stock  Monétaire
8 H Position stock  Monétaire
La position de stock est calculée dynamiquement, selon l'affichage : si des filtres sont appliqués, le
calcul est impacté.
Pour un calcul juste, il faut prendre tous les mouvements sans appliqués de filtre.
9 I Valeur unitaire  Monétaire
► Article NON géré comme bien : Toujours  valoris ée.
► Article géré comme bien : La valeur unitaire es t valoris ée uniquement pour les  mouvement de type
"Situation" et "Inventaire" (la zone es t vide pour les  autres  cas ).
10 J Frais ventilés  Monétaire
► Article NON géré comme bien : Frais .
► Article géré comme bien : Somme des  frais  de tous  les  biens .
11 K Valeur du mouvement  Monétaire
► Article NON géré comme bien : Quantité mouvementée multipliée par la valeur unitaire.
► Article géré comme bien : S omme des valeur des biens + somme des frais des biens.
12 L Px moy. unitaire  Monétaire Exemple : il reste 10 à 100.00 € et 1 à 90.00 € -> le prix unitaire est 99.09 €.
13 M Date mvt  Instant Il s'agit de la date de valeur du mouvement.
Cette colonne contient l'heure du mouvement s'il provient d'un CRIT ou d'un mouvement manuel de
régularisation ou de transfert
14 N Opérateur  Texte
15 O Date saisie  Instant
16 P Modif.  Texte
17 Q Date modif.  Instant
18 R Commentaire  Texte Commentaire type + commentaire saisi
19 S N° doc.  Texte
Document du mouvement (livraison ou facture ou avoir client / livraison ou facture ou avoir
fournisseur / CRIT).
20 T Date doc.  Instant Date du document
21 U Coût revient  Monétaire
Il s'agit du coût de revient mémorisé à la date du mouvement dans le document.
Pour les mouvements manuels et les entrées fournisseurs, le coût de revient est vide.
22 V C.A.  Monétaire Total facturé de la ligne de livraison.
23 W Client ou Fournisseur  Texte
24 X Biens mouvementés  Texte
Liste des identifiant (fabricant, client ou prestataire en fonction du paramètre
IDENTIFIANT_BIEN_IMMA).
25 Y Biens de destination  Texte Matricule rattaché dans la ligne de vente
26 Z ACT  Texte Code Activité de la classification "Article de stock"
27 AA Activité  Texte
28 AB FAM  Texte Code Famille de la classification "Article de stock"
29 AC Famille  Texte
30 AD SFAM  Texte Code de la Sous-Famille de la classification "Article de stock"
31 AE Sous-famille  Texte
32 AF Dépôt source  Texte
33 AG Dépôt cible  Texte
34 AH Org Int du dépôt du Mvt  Texte
35 AI Org Int dépôt opposé/ Org Int document  Texte
Vérifier les mouvements de stock sur une période donnée
VÉRIFIER LES MOUVEMENTS DE STOCK SUR UNE PÉRIODE
DONNÉE
Logistique et stocks / Stocks / Consulter la liste des mouvements de stock
1. Compléter un ou plusieurs des critères suivants :
§ Article,
§ Liste de catégories d'articles,
§ Liste de dépôts,
§ Matricules,
§ Opérateurs,
§ Type de mouvement,
§ Dates de mouvement ,
§ Dates de saisie,
2. <F2> ou <Forest>,
3. Consulter le résultat à l'écran (voir les liens sur les documents à l'origine des mouvements),
4. Faire un export sous Excel pour plus d'analyse.
Consulter les articles demandés en interventions
CONSULTER LES ARTICLES DEMANDÉS EN INTERVENTIONS
Il s'agit des articles en reliquats d'intervention :
Position Position
lettrée Label de la colonne Format Commentaire
1 A Dépôt  Texte
2 B Code dépôt  Texte
2 C Libellé dépôt  Texte
3 D Code art.  Texte
4 E Libellé art.  Texte
5 F Date souhaitée  Instant
6 G Qté. dmde. IT  Monétaire
7 H Résa stocks  Monétaire
8 I Résa rel. frs  Texte
9 J Qté. dmde. utilisée  Monétaire
10 K Qté en Stock  Monétaire
11 L Bloquant  Texte
12 M Code  Texte
13 N Client  Texte
14 O Identifiant fabricant  Texte
15 P Identifiant prestataire  Texte
16 Q Identifiant client  Texte
17 R Bien  Texte
18 S Dmde. art.  Texte
19 T Date Dmde. art.  Instant
20 U Etat Dmde. interv.  Texte
21 V Suite Dmde. interv.  Texte
Consulter les articles au stock négatif
CONSULTER LES ARTICLES AU STOCK NÉGATIF
Cette option permet de lister à tout moment les articles avec des quantités négatives en stock.
Le gestionnaire de stock déclenche ensuite une recherche sur l'explication de ces stocks négatifs :
Sortie par les CRIT, Quantité au dernier comptage, Mouvements de stock depuis ce-dernier.
Après explication, il convient de procéder à des corrections :
o Rattraper les saisies manquantes,
o Enregistrer des régularisations.
Position Position
lettrée Label Format Commentaire
1 A Code dépôt Texte
2 B Libellé dépôt Texte
3 C Code art. Texte
4 D Libellé art. Texte
5 E Qté en Stock Numérique
6 F Qté MINI Numérique
7 G Qté MAXI Numérique
Imprimer un lot d'etiquettes
IMPRIMER UN LOT D'ETIQUETTES
Biens et configurations / Imprimer un lot d'étiquettes
ou
Stocks / Logistique et Stocks / Imprimer un lot d'étiquettes
Consulter Impression des étiquettes en masse.
Gérer les situations de stocks
GÉRER LES SITUATIONS DE STOCKS
Ce traitement permet de faire des situations comptables des stocks, c'est-à-dire une photo des
quantités et des valeurs de stocks à un instant donné. Il est possible également d'établir des
dépréciations.
Le calcul de l'état des stocks est rétroactif, sauf pour les articles gérés comme bien.
Création d'une situation
Logistique et Stocks / Stocks / Gérer les situations de stocks
1. Faire <+>,
2. Sélectionner l'organisation interne concernée,
3. Indiquer la date de la situation comptable,
4. Par défaut :
§ La case "Exclure les articles avec des quantités à zéro" est cochée,
§ La valorisation des articles est le PMP,
5. La valorisation des biens est le prix de reprise.Rechercher une liste de dépôts ou sélectionner
dans la liste (partie basse de l'écran),
6. <F2> ou <Disquette>.
Une fois la situation générée :
o Dans la liste des mouvements de stocks, un mouvement de type "Situation" est généré pour
mémoriser la position de stock (quantité) au moment de la situation,
o Deux tableaux de résultat sont visibles :
§ Article non géré comme bien : Consulter Gérer l'inventaire, Article non géré comme
bien,
§ Article non géré comme bien : Consulter Gérer l'inventaire, Article géré comme bien.
Si des saisies (bons de livraison, CRIT...) sont effectuées à une date antérieure à la situation, la
quantité de la situation n'est pas actualisée. Pour prendre en compte ces rattrapages de saisies,
vous devez supprimer la situation initiale et la recréer à la même date.
Les fonctionnalités liées à une situation de stock sont les mêmes que celles de l'inventaire :
o Dépréciations
o Edition.
Par contre, il n'y a pas de validation de situation (lien inactif).
Edition d'une situation
Consulter Gérer les inventaires, Editer un inventaire.
Particularités
Actualiser automatiquement les emplacements
ACTUALISER AUTOMATIQUEMENT LES EMPLACEMENTS

Dépôt stock maître
Paramètres application / Paramètres application / Gérer les paramètres
Pour mettre à jour les emplacements indiqués dans le dépôt fixe et répercuter l'information au
niveau des dépôts mobiles
Paramètre "STOCKS_DEPOT_STK_MAITRE"
Valeur :  Indiquer le code du dépôt
Mise à jour en cascade
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre ‘STOCKS_EMPL_EN_CASCADE'
Valeur : Cocher la case pour que les modifications effectuées dans le dépôt central s'affichent dans
les dépôts mobiles
Attention
Le remplacement se fait sans aucun contrôle. Si le dépôt de destination avait déjà un
emplacement, il est remplacé
Fusionner deux dépôts
FUSIONNER DEUX DÉPÔTS
Arrêter une date et heure à partir desquelles, aucun mouvement ne sera fait
Concernant les articles non gérés comme bien
1. A cet instant, faire une situation de stock du dépôt à fermer
2. A partir de la situation, constituer un fichier d'import de ces quantités dans le dépôt cible :
§ Selon le "descriptif du fichier des stocks par dépôt", à obtenir auprès d'ARTIS
§ Les quantités sont positives
§ Renseigner impérativement la "Date mouvement"
3. A partir de la situation constituer un fichier d'import de ces quantités dans le dépôt source :
§ Selon le "descriptif du fichier des stocks par dépôt", à obtenir auprès d'ARTIS
§ Les quantités sont négatives
§ Renseigner impérativement la "Date mouvement"
4. Importer ensuite ces 2 fichiers (voir auprès d'ARTIS pour effectuer l'import)
5. Refaire une situation pour contrôle
6. Traiter les mini et maxi des articles du dépôt source (Faire un fichier séparé / Import avec "Mise
à jour autorisée" cochée) :
§ Selon le "descriptif du fichier des stocks par dépôt", à obtenir auprès d'ARTIS
§ Les quantités en stock doivent être à  vide
§ Les dates de mouvement doivent être à  vide
§ Les mini doivent être à  zéro
§ Les maxi en stock doivent être à  zéro
7. Traiter les mini et maxi des articles du dépôt cible (Faire un fichier séparé / Import avec "Mise à
jour autorisée" cochée) :
§ Selon le "descriptif du fichier des stocks par dépôt", à obtenir auprès d'ARTIS
§ Les quantités en stock doivent être à  vide
§ Les dates de mouvement doivent être à  vide
§ Compléter les nouvelles valeurs des mini et des maxi
Concernant les articles gérés comme bien
1. A partir de la situation faites au point précédent A.2
2. Effectuer des transferts de biens d'un dépôt vers un autre, pour les machines maîtres et les
accessoires :
1. Logistique et Stock / Stock / Transférer les articles
2. Mettre le dépôt source et le dépôt cible
3. Utiliser "Transférer des biens avec leurs accessoires"
3. Refaire une situation pour contrôle
Re-facturation entre sociétés

Si l'organisation interne du dépôt source est différente de celle du dépôt cible, il y a lieu de procéder à
une re-facturation.
Concernant les articles non gérés comme bien
A partir du fichier établi au A.2, une facture de vente est à établir :
§ Utiliser des articles non suivi en stock selon le type de marchandise
§ Le fichier est le justificatif de cette facture
§ Une facture de vente est donc à enregistrer dans les achats de l'organisation cible
Concernant les articles gérés comme bien
Si vous utilisez les mouvements de stock extraits en fin de mois pour établir les re-facturations, ces
transferts (cf B.) en feront partie. La procédure est donc comme à l'habitude.
Dans le cas contraire, procéder à l'extraction des mouvements concernés. A partir de ces
mouvements, une facture de vente est à établir :
§ Utiliser des articles non suivi en stock selon le type de marchandise
§ Le fichier est le justificatif de cette facture
§ Une facture de vente est donc à enregistrer dans les achats de l'organisation cible
Reliquat sur les commandes
En commande client
Il faut modifier le dépôt de déstockage dans l'entête de la commande. Le dépôt sera répercuté sur
chaque ligne.

Remarque
