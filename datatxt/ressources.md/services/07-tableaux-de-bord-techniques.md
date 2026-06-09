# Tableaux de bord techniques

> Categorie: Services | Pages 102-127

## Sous-rubriques
- Analyse de rentabilité des biens ou clients (p.102)
-   Calcul de la rentabilité (p.106)
-   Détails des colonnes de l'analyse de rentabilité (p.111)
- Analyser la satisfaction client (p.118)
-   Calcul de la satisfaction (p.119)
-   Détails des colonnes des temps de réponse par bien (p.122)
-   Détails des colonnes des temps de réponse par modèle (p.124)
-   Détails des colonnes des temps de réponse par marque (p.125)
-   Détails des colonnes des temps de réponse par gamme (p.126)
-   Détails des colonnes des temps de réponse par client (p.126)
- Suivre l'activité technique (p.127)

o Champ ' Domaine ', sélectionner le domaine d'intervention à traiter,
o Valider par
 ,
o Saisir la première question,
o Saisir la première réponse à la question,
o Pour une question fermée,
o Ajouter une réponse
 , au milieu du tableau
o Saisir les réponses
o exemple : oui / non
o Ajout d'une question :
o Ajouter par
  en haut du tableau,
o Saisir la question,
o
o Valider par
  ou <F2>.
Pour supprimer,
En modification, utiliser les <->
Après validation, cliquer sur
 .
Tableaux de bord techniques
Analyse de rentabilité des biens ou clients
ANALYSE DE RENTABILITE
Services / Tableaux de bord techniques / Analyse de rentabilité des biens ou clients
Rappel
Comme dans tout tableau de bord, les résultats dépendent beaucoup de la qualité des saisies dans
ARTIS et notamment, celles des comptes-rendus d'interventions.les (CRITs).
Lors de prochaines réunions techniques, il sera sans doute indispensable de rappeler aux
intervenants que les relevés compteurs remontés dans leurs CRITs sont essentiels pour :
o Mieux factures les solutions de services
o Diminuer les litiges de facturation
o Mieux gérer les litiges techniques
o Mieux suivre la satisfaction client
Paramétrages indispensables
Avant de lancer l'Analyse de rentabilité, il est nécessaire d'effectuer les paramétrages
indispensables à la ventilation "NOIR" et "COULEUR" des configurations de grandeurs et des
articles.
Sélection
Sur un(e) ou plusieurs :
o Biens,
o Modèle,
o Marques,
o Gammes,
o Clients,
o Sous-traitants,
o Commanditaires.
A côté de chaque critère, des liens ‘Voir sélection' et ‘Supprimer sélection' permettent de lister les
données retenues ou de les effacer.
Critères de tri
Période
Par défaut, la période est sur les 12 derniers mois.
L'analyse de rentabilité prend en compte les coûts de revient observés sur la période et recalcule le
C.A. estimé sur cette même période (cf. "Chiffre d'affaires" et "Coûts de revient", ci-dessous).
Si le bien a été mis en service en cours de la période, la rentabilité est calculée à partir de la date
d'installation.
Exclusion des biens inactifs
La case "Exclure les biens inactifs", pré-cochée, exclut les biens qui ne présentent :
o Aucun coût de revient (aucun article livrés sur le bien),
o Aucun chiffre d'affaires (aucune règle de facturation ni aucun article facturé sur le bien),
o Les biens avec un volume mensuel (VMM ou VMT ou VMS).
Exclure les biens sans SSC
Cette case est pré-cochée. La rentabilité est normalement faite pour faire des calculs sur biens qui
font l'objet de contrat. Il est tout de même possible d'élargir le calcul à des biens hors contrat.
En dé-cochant, la requête ramène tous les biens, quels que soient leurs différents statuts.
Marge
Cette zone permet de demander les marges inférieures à un taux saisi sur un critère de sélection.
(Biens, Modèles, Marques, Gammes ou clients). Le taux de référence doit être saisi sous la forme
d'un coefficient : 0.nn. Par exemple, pour obtenir les biens dont la marge est antérieure à 20%, vous
devez taper 0.2.
Si vous demandez les marges inférieures à un montant sur un critère Modèle, Marque, Gamme ou
Client, il faut que la marge totale du critère réponde à cette sélection.
Exemples: Analyse des marges < 0 (négatives) :
o 1ère analyse sur un ensemble de biens :
Tous les biens dont la marge est négative s'afficheront.
o 2ème analyse sur un ensemble de modèles :
Tous les modèles dont la marge globale est négative s'afficheront.
Articles vendus à exclure
Cette zone permet de filtrer les articles à exclure de l'analyse de rentabilité. Par exemple, on ne
veut pas prendre en compte certaines catégories d'articles telles que les accessoires, les
fournitures, etc, rattachés à un matricule (cf. "Paramétrage des listes prédéfinies", ci-dessous).
Pour la Rentabilité, vous devez exclure toutes les sous-familles correspondant au négoce (matériel
et accessoire).
RFP à exclure
Cette zone permet de filtrer les Règles de facturation Prédéfinies à exclure de l'analyse de
rentabilité. Par exemple, on souhaite exclure les locations internes (cf. "Paramétrage des listes
prédéfinies", ci-dessous).
Résultats
Accès à l'export des résultats :
o A partir du 1er écran, consulter Détails des colonnes de l'analyse de rentabilité
o A partir du 2ème écran.
Différences entre une Rentabilité par bien et par client
Rentabilité par bien sous SSC
ARTIS récupère tous les articles livrés et rattachés au bien à partir du début de la SSC. Si
l'article est livré avant le début de la SSC, il n'apparaîtra pas dans le résultat.
Exemple, un client a une livraison du matériel avec le toner de 1ère monte au 15/09. Si la
SSC démarre au 20/09, il est exclu de la rentabilité.
Rentabilité par client
ARTIS récupère tous les articles livrés et rattachés ou non à tous les biens du client. Du
coup, ARTIS ne tient pas compte de la date de début de SSC puisqu'il ne trouve pas
forcément de bien rattaché et donc la SSC correspondante.
Dans ce même exemple, la livraison du matériel avec le toner de 1ère monte est prise en
compte dans la Rentabilité, sans tenir compte de la date de début de SSC.
Cas particulier des articles à matricule dans une Rentabilité par client
Dans une rentabilité par client, les articles à matricule sont pris en compte car il peut s'agir
d'articles que vous voulez suivre avec un matricule (par exemple, carte, switch, etc). Il faut
donc les exclure au niveau des listes d'exclusion pour ne jamais prendre en compte les
matériels maîtres (copieurs, imprimantes, etc) et autres accessoires (trieuses, magasins,
etc).
PARAMÉTRAGE
Paramétrage des listes prédéfinies
Les listes sont des paramétrages de données à exclure qui peuvent être réutilisées à chaque
analyse. Il est possible de rappeler une liste prédéfinie existante, soit d'en créer une nouvelle dans
cet écran. Si une liste de catégories préétablie est reprise, les données exclues apparaissent
cochées dans l'arborescence ou dans la liste. Pour sauvegarder une liste, donner un nom dans la
zone de recherche puis cliquer sur le lien "Enregistrer la liste".
Cette version ne permet pas encore de supprimer des listes créées. Il est conseillé de réutiliser les
listes existantes au lieu d'en créer sans cesse de nouvelles.
De plus, il est préférable de définir des règles de gestion de listes et de centraliser leur création sur
quelques responsables. Le nom des listes doit être clair et harmonisé (par exemple, même
structure de nom)
1. Dans le tableau,
2. Saisir le nom d'une liste de catégories (activités / familles / sous-familles) à exclure,
3. Cocher les catégories voulues (un niveau coché exclut tous les sous-niveaux),
4. Cliquer sur "Créer une liste".
A chaque utilisation, il est possible de cocher ou décocher provisoirement des données sans
enregistrer ou bien sauvegarder les modifications apportées dans les listes préétablies ou encore
créer des nouvelles listes.
Les sélections par listes sont possibles pour les classifications "Articles vendus" et "Règle de
Facturation prédéfinies".
Liste des RFP identifiant la connectique
Pour ventiler la rentabilité sur la connectique, il est nécessaire de paramétrer une liste regroupant
toutes les Règles de facturation de la connectique.
Paramètres application / Classification, listes et tables de décision / Gérer les listes
1. Créez une nouvelle liste :
§ Nom de la liste : "REGLES FACT PREDEF CONNEX",
§ Domaine : solutionsdeservice,
§ Classe : RegleFactuPredef,
2. Enregistrez la liste,
3. <Modifier>,
4. <Disquette> ou <F2>,
5. Cliquez sur le nom de la liste créée "REGLES FACT PREDEF CONNEX",
6. Cliquer sur Rattacher élément,
7. Cocher les règles de facturation de la connectique,
8. <Disquette> ou <F2>.
Paramètres
Paramètres application / Paramètres application / Gérer les paramètres
1.
Paramètre "LIST_RFP_CONNEX '"
Valeur : Saisir  le nom de la liste créée précédemment "REGLES FACT PREDEF CONNEX".
Paramètres application / Paramètres application / Gérer les paramètres
2.
Paramètre "DOMAINE_CONNEX '"
Valeur : Saisir le code du domaine d'intervention correspondant à la connectique "REGLES FACT
PREDEF CONNEX ".
Paramètres application / Paramètres application / Gérer les paramètres
3.
Paramètre "CLASSIF_ARTICLE"
Valeur : Saisir l'abréviation de la classification des articles à afficher dans l'export de la renta (article
fournisseur).
Calcul de la rentabilité
CALCUL DE LA RENTABILITÉ
Particularités
Prise en compte des avoirs d'intervention dans la Rentabilité
o Les avoirs générés à partir des factures d'intervention sont prises en compte dans l'Analyse de
rentabilité.
o Pour cela, les lignes de factures sont liées au bien de destination.
Prise en compte des biens dont la SSC est fermée dans le futur
Dans le cas d'une analyse des biens sous Solution de services, si le bien est lié à une SSC fermée
dans le futur, ARTIS conserve le bien dans les résultats.
Puisque la date de fin d'analyse est antérieure à celle de fermeture de la SSC, le bien est encore
considéré comme couvert par une SSC.
Le C.A. du contrat est récupéré (à l'écran et dans l'export) et les informations de la SSC sont
envoyées dans le fichier exporté.
Affichage des Règles de facturation exclues
Le tableau "Détail du chiffre d'affaire" rappelle dans la colonne "Type C.A." les règles de facturation
(RF) que vous avez exclues dans les critères de la Rentabilité.
RAPPEL
Les Règles de facturation exclues se définie par une liste paramétrée dans le critère ‘RFP à
Exclure'.

Détail des anomalies de calcul
La liste des anomalies détectées dans le calcul de la Rentabilité possède des liens pour accéder
directement au bien ou au client.
Les messages d'anomalie sont :
Impossible de récupérer la grandeur pour le calcul du Volume Page A4 A4N
o Le paramétrage de l'Équivalent Pages A4 n'existe pas sur la configuration de compteurs
Solution : vérifier le paramétrage de 'Équivalent Pages A4'
Impossible de calculer le volume en page A4
o ARTIS ne peut calculer un Volume moyen mensuel et donc calculer l'Équivalent Pages A4
correspondant
Solution : vérifier l'historique des relevés (absence d'un compteur d'installation, pas de relevés,
relevés incohérents, etc.)

Exclusion du bien car inactif
o ARTIS ne trouve aucune Demande d'intervention sur le bien
Prix copie inconnu
o ARTIS ne trouve pas de prix pour une facturation à la copie
Type de RFC inconnu
o ARTIS ne peut calculer le C.A. (pas de forfait, pas de tranche, périodicité non gérée, etc)
Enfin, seuls les biens en clientèle sont traités (les détruits sont donc exclus de la liste des
anomalies).

Calculs
Calcul du Volume sur la période
Le calcul du volume des grandeurs (compteurs, scans, etc) se fait à partir des compteurs
historisés
ARTIS prend en compte les grandeurs les plus proches des bornes à l'intérieur de la période
d'analyse et recalcule une estimation sur la totalité de la période.
Exemple de calcul du volume sur la période d'analyse :
Périod
e
Gran
deur
Valeurs
trouvées
Calcul du volume
par jour
Calcul du volume
sur la période
01/01/
07
31/12/
07
Compte
ur de
copies
N/B
12500 copies le
15/03/07
63000 copies le
30/10/07
Delta constaté: 63000
– 12500 = 50500 Nbre
de jours sur la
période: 229 jours
Soit 220.52 copies
par jour
Volume période: 220.52 sur
365 jours soit 80490
Calcul du Volume des grandeurs facturées
Le calcul du volume des grandeurs facturées (compteurs, scans, etc) se fait à partir des règles
de facturation.
ARTIS prend l'engagement contractuel des règles de facturation et recalcule le chiffre d'affaires
sur la période avec les tarifs en vigueur (prix actuel dans la SSC) : Le volume le plus grand
entre la consommation estimée et l'engagement contractuel est conservé pour le calcul du
chiffre d'affaires.
Exemples de calcul du C.A. sur une période d'un an (365 jours) :
Gran
deur
Unité
de
facturat
ion
Règle de
facturati
on
Engagem
ent
contractu
el
Tarif
contract
uel
Calcul
du
volume
sur la
période
Volum
e
retenu
pour le
C.A.
C.A. calculé
Compt
eur de
copies
A la copie
effectuée
Consomm
ation
0.015 € 80843
copies
estimées
80843 80843 x 0.0015
Soit 121.26
Compt
eur de
copies
Tranche
copies
90000
copies
0.015 € 80843
copies
estimées
90000 90000 x 0.0015
Soit 135.00 €
Compt
eur de
copies
Forfait
avec
régularisa
tion
20000
copies /
trimestre
0.015 € 80843
copies
estimées
80843 80843 x 0.0015
Soit 121.26 €
Monta
nts
forfaitai
res
-
Connexio
n
- Contrat
entretien
- etc
Forfait 1000.0
0 €
1000.00 €
Unités
de
temps
(1/2
journé
es)
½ journée
planifiée
4 ½
journées
planifiées
/2 ans
1400.00
€ sur 2
ans
2 ½
journées
consom
mées
2 ½ journées à
350.00 €
Soit 700.00 €
Unités
de
temps
(UT)
UT
périodique
20 ¼
heure /an
50.00 € 10 ¼
d'heure
consom
més
20 Maxi entre la
conso (10) et
engagement (20)
x 50.00 €
Soit 1000.00 €
Unités
de
temps
(UT)
UT
apériodiqu
e
20 ¼
heure non
limités
50.00 € 10 ¼
d'heure
consom
més
10 Conso de 10 x
50.00 €
Soit 500.00 €
Les Frais de participation d'envoi de toners ne sont pas pris en compte dans le calcul du C.A.
Justificatif du calcul du C.A : Détail du CA
Pour justifier le calcul du chiffre d'affaires, sélectionnez le bien et cliquez sur le lien "Détail du
CA" :
Position Position
lettrée Label de la colonne Format Commentaire
1 A Bien Matricule du bien
2 B Document N° d'intervention ou le N° de la livraison concerné,
pour ligne de facturation hors SSC
3 C Type C.A. Règle de facturation
4 D Grandeur Nom et type (technique ou calculé)
5 E C.A. Chiffre d'affaires estimé
6 F C.R. Coût de revient
7 G Volume estimé Estimation du volume consommé
8 H Volume SSC Volume facturé dans la Solution de service
(engagement contractuel)
9 I Proportion SSC
groupée
Part du matériel analysé dans la SSC regroupant
plusieurs biens
10 J P.U. Prix unitaire facturé de la grandeur
11 K CR Unitaire
Prix unitaire facturé de la grandeur supplémentaire
(cas des forfaits avec une régularisation à un prix
différent de celui du forfait)
12 L P.U. supp.
13 M C.R. supp.
14 N Nb jours analyse  Nombre de jours pris en compte dans l'analyse
(activité de la SSC)
Calcul du Justificatif des coûts de revient : Détail du CR
Les coûts de revient sont récupérés dans les lignes d'interventions et les lignes de livraisons. Il
s'agît du PMP en vigueur au moment où l'article a été fourni (prestations ou articles livrés).
Les coûts de revient pris en compte sont limités à la période de validité de la Solution de
service. La date de début de la règle de facturation sert de date butoir. La Solution de service
retenue est celle en vigueur (le programme ne tient pas compte de l'éventuelle Solution de
service précédente).
Par exemple, pour une rentabilité du 01/01/2007 au 31/12/2007, si la SSC est créée en cours
de période (par exemple, le 14/05/2007), les coûts de revient trouvés sont calculés à partir de
cette date.
Pour justifier les coûts de revient, sélectionnez le bien et cliquez sur le lien "Détail du CR".
Pour chaque intervention et livraison, le détail de chaque coût de revient est affiché :
Position Position
lettrée Label de la colonne Format Commentaire
1 A Livré pour Matricule
2 B Modèle
3 C Code Article
4 D Libellé Article
5 E Qté
Quantité fournie. Pour les lignes de prestations, la
quantité s'affiche en centième d'heure (par
exemple, 1h30 de Main d' œuvre est devenue 1.50)
6 F CR Le coût de revient de la ligne
7 G CA Le chiffre d'affaires de la ligne
8 H Lien Le lien vers l'intervention ou la livraison
9 I A4 Noir si l'article alimente les coûts de revient A4 Noir
10 J A4 Coul si la ligne d'article alimente les coûts de revient A4
Couleur
11 K Exclu
12 L Date
13 M Type doc
14 N Sous-traitant
15 O Commanditaire
16 P Categ1
17 Q Categ2
Ventilation de la Rentabilité sur la connectique
Les coûts de revient et le chiffre d'affaires ventilés sur la connectique sont déduits des coûts de
revient totaux et du C.A. total.
La ventilation des prestations se fait sur la couverture contractuelle. Si le service ‘Mo connexion'
pointe vers la classification 'MO copieur', il nous est impossible de ventiler en CR connectique.
Cas particuliers
Contrat groupé
Plusieurs biens pour la même règle de facturation. Dans le cas d'un contrat groupé, le
chiffre d'affaires en pages A4 est proratisé en fonction du volume de chaque bien.
Exemple, pour un contrat ‘Forfait 100000 copies', groupant 3 biens qui réalisent 90000
copies, le C.A. retient l'engagement contractuel de 100000 copies :
SSC Règle de
facturation
Biens
de la
SSC
Volumes
Pages sur
la
période
Prorat
a de
Pages
A4
Prorata de C.A.
calculé
Forfait
avec
régularisati
on
Forfait de
100000 copies
Soit 1000.00 €
Bien 1
Bien 2
Bien 3
9000
36000
45000
10%
40%
50%
10 % de 1000.00 €
soit 100.00 €
40 % de 1000.00 €
soit 400.00 €
50 % de 1000.00 €
soit 500.00 €
Contrat Forfait avec un prix copies différent pour les régularisations
Dans le cas d'un contrat de type ‘Forfait avec régularisation', le chiffre d'affaires tient
compte du prix de la copie supplémentaire s'il est différent.
Exemple, pour un contrat ‘Forfait de 50000 copies à 0.010 € avec copies supplémentaires à
0.008 €, le C.A. calculé est :
SSC Règle de facturation Volumes
Pages sur
la période
C.A. calculé
Forfait avec
régularisation
Forfait de 50000 copies à
0.010 €
Copies supplémentaires à
0.008  €
57000 50000 à 0.010 € soit
500.00 €
7000 à 0.008 € soit 56.00
€
Contrat Forfait / régularisation à un prix global copies
Dans le cas d'un contrat de type ‘Forfait copies global' incluant une part de Financement du
matériel et une part de Maintenance, le chiffre d'affaires ne tient pas compte de la part de
Financement.
Exemple, pour un contrat ‘Forfait de 20000 copies global à 0.020 € ventilé en un prix de
0.011 (part Financement) et 0.009 (part Maintenance), le C.A. calculé est :
SSC Règle de facturation Volumes
Pages sur
la période
C.A. calculé
Forfait avec
régularisation
Forfait de 20000 copies à
0.020 €
22000 22000 à 0.009 € soit
198.00 €
Détails des colonnes de l'analyse de rentabilité
DÉTAILS DES COLONNES DE L'ANALYSE DE RENTABILITÉ
Position Position
lettrée Label de la colonne Format Commentaire
1 A Bien A / N Identifiant fabricant (N° de matricule)
2 B Modèle A / N Libellé du modèle (article) attaché au bien
3 C Pages A4 (mois) Num Volume de pages par mois
4 D CA Total Num Total du chiffre d'affaires total, en euros
5 E CR SSC Num Coût de revient mis dans une règle de facturation
des SSC
6 F CR Presta Num Coût de revient des prestations (Main d'œuvre et
Trajet), en euros
7 G CR Articles Num Coût de revient des autres articles
(Consommables, Pièces, etc), en euros
8 H CR Total Num Total des coûts de revient (prestations et articles),
en euros
9 I Marge Num Différence entre le CA total et le CR total, en euros
10 J Marge (%) Num Taux de marge
11 K VP A4 Noir (mois) Num Volume pages A4 noir, par mois
12 L CA A4 Noir Num Chiffre d'affaires A4 noir, en euros
13 M CR SSC A4 Noir
14 N CR Presta A4 Noir Num Coût de revient des prestations A4 noir, en euros
15 O CR Articles A4 Noir Num Coût de revient des articles A4 noir, en euros
16 P CR A4 Noir Num Coût de revient A4 noir, en euros
17 Q Marge A4 Noir Num Marge A4 noir, en euros
18 R Marge A4 Noir (%) Num Taux de marge A4 noir
19 S VP A4 Coul (mois) Num Volume pages A4 couleur, par mois
20 T CA A4 Coul Num Chiffre d'affaires A4 couleur, en euros
21 U CR SSC A4 Coul
22 V CR Presta A4 Coul Num Coût de revient des prestations A4 couleur, en
euros
23 W CR Articles A4 Coul Num Coût de revient des articles A4 couleur, en euros
24 X CR A4 Coul Num Coût de revient A4 couleur, en euros
25 Y Marge A4 Coul Num Marge A4 couleur, en euros
26 Z Marge A4 Coul (%) Num Taux de marge A4 couleur
27 AA CA Autre SSC Num
Chiffre d'affaires autre provenant des Solutions de
services portant sur des biens sans grandeurs (UT,
montants forfaitaires, etc), en euros
28 AB CR SSC Autre SSC
29 AC CR Prest Autre SSC
30 AD CR Art Autre SSC
31 AE CR Total Autre SSC
32 AF Marge Autre SSC Num Marge autre, en euros
33 AG Marge Autre SSC (%) Num Taux de marge
34 AH CA Hors SSC Num Chiffre d'affaires hors Solution de services (sur B.L.
ou CRIT facturé), en euros
35 AI CR Prest Hors SSC
36 AJ CR Art Hors SSC
37 AK CR Total Hors SSC
38 AL Marge Hors SSC Num Marge hors Solution de services, en euros
39 AM Marge Hors SSC (%) Num Taux de marge
40 AN CA connectique Num Chiffre d'affaires ventilé dans les règles de
facturation de la connectique, en euros
41 AO CR SSC connectique
42 AP CR Prest connectique
43 AQ CR Art connectique
44 AR CR Total connectique
45 AS Marge connectique Num Marge ventilée en ‘Connectique', en euros
46 AT Marge connectique (%) Num Taux de marge ‘Connectique'
47 AU Marque A / N Code de la marque du modèle
48 AV Libelle Marque A / N Libellé de la marque du modèle
49 AW Gamme A / N Code de la gamme
50 AX Act A / N Code de l'Activité, abréviation de la classification
‘Articles vendus', 1er niveau
51 AY Libelle Activite A / N Libellé de l'Activité
52 AZ Fam A / N Code de la Famille, abréviation de la classification
‘Articles vendus', 1er niveau
53 BA Libelle Famille A / N Libellé de la Famille
54 BB S-Fam A / N Code de la Sous-famille, abréviation de la
classification ‘Articles vendus', 1er niveau
55 BC Libelle Sous-Famille A / N Libellé de la Sous-famille
56 BD Code Client A / N Code du client de la Solution de service
57 BE Raison sociale A / N Raison sociale de la Solution de services
58 BF Site A / N Nom du site
59 BG Adresse 1
60 BH Adresse 2
61 BI Adresse 3
62 BJ Code Postal A / N Du site
63 BK Département A / N Du site
64 BL Ville A / N Du site
65 BM Libelle Secteur Technique
66 BN Adresse privilégiée pour consommables   Classification bien
67 BO Demande de relevés de compteurs Site   Classification bien
68 BP Site de livraison
69 BQ Date livraison
70 BR Nom Technicien A / N Nom du technicien responsable
71 BS Nom Vendeur A / N Nom du vendeur de la commande du bien
72 BT Code donneur d'ordre A / N Code du donneur d'ordre dans la relation client
73 BU Nom donneur d'ordre A / N Nom du donneur d'ordre dans la relation client
74 BV Type relation A / N Relation client
75 BW Statut Bien Juridique A / N Statut juridique du bien
76 BX Statut Bien Commercial A / N Statut commercial du bien
77 BY Statut Bien Logistique A / N Statut logistique du bien
78 BZ Statut Bien Financier A / N Statut financier du bien
79 CA Statut Bien SSC A / N Statut SSC du bien
80 CB N° de Série A / N 4 derniers caractères du matricule
81 CC Appareil Connecté A / N Bien connecté ou non
82 CD Code Modèle A / N Code article du modèle
83 CE Volume Période
84 CF Nb Mois analyse Num Nombre de mois de la période analysée
85 CG Code SSC A / N 0
86 CH Libelle SSC
87 CI Début SSC Date JJ/MM/AAAA
88 CJ Fin SSC Date JJ/MM/AAAA
89 CK Chargé d'affaire SSC
90 CL Chargé de facturation SSC
91 CM Signataire Client SSC A / N Signataire du client de la SSC
92 CN Signataire Presta SSC A / N Signataire du prestataire de la SSC
93 CO Statut SSC A / N 0
94 CP AGENCES OMR   Classification client
95 CQ ALERTES CLIENTS   Classification client
96 CR CATEGORIES CLIENTS   Classification client
97 CS SUIVI COMMERCIAL   Classification client
98 CT TYPE DE CLIENT   Classification client
99 CU Intercepter les factures client   Classification client
100 CV AGENCES DACTYL   Classification client
101 CW FIDELISATION   Classification client
102 CX FILIERE CLIENTS   Classification client
103 CY Client à exclure de la facturation conso (SSC non
signée)   Classification client
104 CZ Origine Client   Classification client
105 DA AGENCES  BS+   Classification client
106 DB Autoriser les commandes globales de consommables   Classification client
107 DC TMI Num Temps moyen d'intervention
108 DD MCBS Num Provient du calcul du Reporting technique
(développement spécifique client)
109 DE TEMPS MO Num Temps de Main d'œuvre
110 DF TEMPS TR Num Temps de Trajet
111 DG Nb interv periode Num Nombre d'interventions sur la période
112 DH Bien sous-traité A / N Oui si le client fait partie de la liste des clients dont
le parc n'est pas vendu par votre société
113 DI Code sous-traitant
114 DJ Raison sociale sous-traitant
115 DK Code commanditaire
116 DL Raison sociale commanditaire
117 DM SSC Connectique A / N Oui le bien connecté est sous SSC
118 DN Code SSC Connectique A / N Code de la SSC du bien sous contrat et sous-traité
119 DO Libelle SSC Connectique
120 DP Consommables.Agrafes   Classification article
121 DQ Autres   Classification article
122 DR Autres.Autres (non couvert)   Classification article
123 DS Consommables.Autres consommables - Fournitures   Classification article
124 DT Consommables.Consommables couleur   Classification article
125 DU Consommables.Consommables fax   Classification article
126 DV Consommables.Consommables Noir/Blanc   Classification article
127 DW Consommables   Classification article
128 DX Délai   Classification article
129 DY Déplacements   Classification article
130 DZ Consommables.Developpeur Couleur   Classification article
131 EA Déplacements.Déplacement (Heure)   Classification article
132 EB Déplacements.Déplacement (UT)   Classification article
133 EC Garantie   Classification article
134 ED Consommables.Kits Imprimantes - AA   Classification article
135 EE Loyer   Classification article
136 EF Consommables.Masters   Classification article
137 EG Main d'oeuvre   Classification article
138 EH Main d'oeuvre.Main d'oeuvre Connexion (Heure)   Classification article
139 EI Main d'oeuvre.Main d'oeuvre Informatique (Heure)   Classification article
140 EJ Main d'oeuvre.Main d'oeuvre Informatique (UT)   Classification article
141 EK Main d'oeuvre.Main d'oeuvre Fax (Heure)   Classification article
142 EL Main d'oeuvre.Main d'oeuvre Impression (Heure)   Classification article
143 EM Main d'oeuvre.Main d'oeuvre Impression (UT)   Classification article
144 EN Autres.Particularités de couverture   Classification article
145 EO Pièces détachées   Classification article
146 EP Pièces détachées.Pièces détachées connexion   Classification article
147 EQ Pièces détachées.Pièces détachées fax   Classification article
148 ER Pièces détachées.Pièces Détachées Impression (Cop,
Imp, Dup, Tra)   Classification article
149 ES Déplacements.Déplacements   Classification article
150 ET Main d'oeuvre.Main d'oeuvre   Classification article
151 EU Pièces détachées.Pièces détachées   Classification article
152 EV Art. Constructeur
153 EW Cpt 1
154 EX PU Copie Cpt 1
155 EY PU Supp Cpt 1
156 EZ CR Unitaire Cpt 1
157 FA CR Supp Cpt 1
158 FB VMM Cpt 1
159 FC VMM 1 an 1 Num Volume moyen mensuel du compteur 1 calculé sur
la dernière année
160 FD VMM Livr 1 Num
Volume moyen mensuel du compteur 1 calculé sur
la dernière année (ou depuis la livraison du bien si
elle est intervenu depuis moins d'un an)
161 FE VMM Rel 1 Num
Volume moyen mensuel du compteur 1 calculé à
partir des deux derniers relevés réels (client ou
intervenant)
162 FF Volume réel sur période Cpt 1
163 FG Volume mensuel réel sur période Cpt 1
164 FH Prorata Engagement Cpt 1
165 FI Engagement sur période Cpt 1
166 FJ MSC Cpt 1
167 FK RFC Cpt 1
168 FL Cpt 2
169 FM PU Copie Cpt 2
170 FN PU Supp Cpt 2
171 FO CR Unitaire Cpt 2
172 FP CR Supp Cpt 2
173 FQ VMM Cpt 2
174 FR VMM 1 an 2
175 FS VMM Livr 2
176 FT VMM Rel 2
177 FU Volume réel sur période Cpt 2
178 FV Volume mensuel réel sur période Cpt 2
179 FW Prorata Engagement Cpt 2
180 FX Engagement sur période Cpt 2
181 FY MSC Cpt 2
182 FZ RFC Cpt 2
183 GA Cpt 3
184 GB PU Copie Cpt 3
185 GC PU Supp Cpt 3
186 GD CR Unitaire Cpt 3
187 GE CR Supp Cpt 3
188 GF VMM Cpt 3
189 GG VMM 1 an 3
190 GH VMM Livr 3
191 GI VMM Rel 3
192 GJ Volume réel sur période Cpt 3
193 GK Volume mensuel réel sur période Cpt 3
194 GL Prorata Engagement Cpt 3
195 GM Engagement sur période Cpt 3
196 GN MSC Cpt 3
197 GO RFC Cpt 3
198 GP Cpt 4
199 GQ PU Copie Cpt 4
200 GR PU Supp Cpt 4
201 GS CR Unitaire Cpt 4
202 GT CR Supp Cpt 4
203 GU VMM Cpt 4
204 GV VMM 1 an 4
205 GW VMM Livr 4
206 GX VMM Rel 4
207 GY Volume réel sur période Cpt 4
208 GZ Volume mensuel réel sur période Cpt 4
209 HA Prorata Engagement Cpt 4
210 HB Engagement sur période Cpt 4
211 HC MSC Cpt 4
212 HD RFC Cpt 4
213 HE Cpt 5
214 HF PU Copie Cpt 5
215 HG PU Supp Cpt 5
216 HH CR Unitaire Cpt 5
217 HI CR Supp Cpt 5
218 HJ VMM Cpt 5
219 HK VMM 1 an 5
220 HL VMM Livr 5
221 HM VMM Rel 5
222 HN Volume réel sur période Cpt 5
223 HO Volume mensuel réel sur période Cpt 5
224 HP Prorata Engagement Cpt 5
225 HQ Engagement sur période Cpt 5
226 HR MSC Cpt 5
227 HS RFC Cpt 5
Colonnes dépendant du paramétrage
de ARTIS.net
Analyser la satisfaction client
ANALYSER LA SATISFACTION CLIENT
Services / Tableaux de bord techniques / Analyser la satisfaction des clients
Ce tableau de bord sert à analyser la satisfaction des clients. Différents indicateurs permettent
d'évaluer la qualité de votre service technique et anticiper l'insatisfaction potentielle des clients pour
mener des actions préventives.
Cette analyse est un outil pour le Service technique en cas de litige avec un client. Parallèlement, il
peut être un support pour le Service commercial lors des visites en clientèle pour des
renégociations de parc.
Rappel
Comme dans tout tableau de bord, les résultats dépendent beaucoup de la qualité des saisies dans
ARTIS et notamment, celles des comptes-rendus d'interventions.les (CRITs).
Lors de prochaines réunions techniques, il sera sans doute indispensable de rappeler aux
intervenants que les relevés compteurs remontés dans leurs CRITs sont essentiels pour :
o Mieux factures les solutions de services
o Diminuer les litiges de facturation
o Mieux gérer les litiges techniques
o Mieux suivre la satisfaction client
Sélections
Sur un(e) ou plusieurs :
o Biens,
o Modèle,
o Marques,
o Gammes,
o Clients.
A côté de chaque critère, des liens ‘Voir sélection' et ‘Supprimer sélection' permettent de lister les
données retenues ou de les effacer.
Critères de tri
Période
Par défaut, la période est sur les 12 derniers mois.
L'analyse de rentabilité prend en compte les coûts de revient observés sur la période et recalcule le
C.A. estimé sur cette même période (cf. "Chiffre d'affaires" et "Coûts de revient", ci-dessous).
Si le bien a été mis en service en cours de la période, la rentabilité est calculée à partir de la date
d'installation.
Exclusion des biens inactifs
La case "Exclure les biens inactifs", pré-cochée, exclut les biens qui ne présentent :
o Aucun coût de revient (aucun article livrés sur le bien),
o Aucun chiffre d'affaires (aucune règle de facturation ni aucun article facturé sur le bien),
o Les biens avec un volume mensuel (VMM ou VMT ou VMS).
Résultats
Accès à l'export des résultats :
o à l'écran,
o en PDF,
o en PDF (avec l'historique des interventions).
PARAMÉTRAGES
Paramètres
Délai par défaut
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "DELAI_IT_HEURES"
Valeur : exemple, 16,
Délai par défaut un délai pour une intervention non couverte par une Solution de services.
Calcul de la satisfaction
CALCUL DE LA SATISFACTION
Particularités
Exclusion
Les interventions avec rendez-vous sont exclues.
Pour une analyse par Modèle, Marque, Gamme ou Client, les résultats sont obtenus si ARTIS
détecte au moins un bien ou une intervention dans le critère demandé.
Par exemple, en recherchant tous les clients contenant le mot ‘mairie', un certain nombre
apparaisse. Or, dans le tableau de résultats, les mairies ne possédant aucun bien et celles sans
intervention (hors bien) sont exclues.
Possibilité d'exclure des Natures dans la ‘Satisfaction'
Des Natures d'interventions peuvent être exclues.
Par exemple, les Natures sans engagement de délai doivent être isolées pour ne pas fausser les
résultats de la Satisfaction (Livraison / reprise de consommables, Régie, Atelier, etc.) :
Dans la zone "Critères de tri", faire  < Entrée > dans le champ ‘Natures à exclure' et cochez celles
qui ne doivent pas être prises en compte pour le calcul des indicateurs de Satisfaction.

Détail des anomalies de calcul
La liste des anomalies détectées dans le calcul de la Satisfaction possède des liens pour accéder
directement au bien ou au client.
Les messages d'anomalie sont :
Impossible de récupérer la grandeur pour le calcul du Volume Page A4 A4N.
o Le paramétrage de l'Équivalent Pages A4 n'existe pas sur la configuration de compteurs.
Solution : vérifier le paramétrage de Équivalent Pages A4'.

Impossible de calculer le volume en page A4
o ARTIS ne peut calculer un Volume moyen mensuel et donc calculer l'Équivalent Pages A4
correspondant.
Solution : vérifier l'historique des relevés (absence d'un compteur d'installation, pas de relevés,
relevés incohérents, etc.)
Exclusion du bien car inactif.
o ARTIS ne trouve aucune Demande d'intervention sur le bien
o Enfin, seuls les biens en clientèle sont traités (les détruits sont donc exclus de la liste des
anomalies).
Liens
Afficher les biens
Ce lien s'affiche après analyse par Modèle, Marque, Gamme ou client.
En cliquant sur "Afficher les biens", un tableau de tous les biens du critère sélectionné
s'affiche. Le tableau obtenu correspond à celui d'une analyse par bien (Cf tableau de résultats
"Par Bien")
Détail des interventions
Ce lien donne la liste des interventions observées sur le critère choisi initialement (Bien,
Modèle, Marque, Gamme ou client).
En cliquant sur "Détail des interventions", vous obtenez un tableau récapitulatif :
Position Position
lettrée Label Format Commentaire
1 A Client Lien vers la fiche du client
2 B Bien Lien vers la fiche du bien est disponible
3 C Date IT Lien vers la demande d'intervention
4 D DIT Lien vers la demande d'intervention
5 E IT Lien vers l'intervention
6 F Intervenant Technicien qui a réalisé l'intervention (si le CRIT est saisi) ou l'intervenant
pressenti (si l'intervention n'est pas réalisée)
7 G RDV
8 H Temps réponse
Temps de réponse moyen sur la période analysée en calculant l'écart de temps
entre la date / heure de la DIT et la date / heure du 1er CRIT. Les demandes
d'interventions avec un rendez-vous sont exclues
9 I Engt. délai
L'engagement de délai d'intervention avec le client. Si le client est sous contrat, il
s'agit du délai contractuel de la SSC. S'il n'est pas couvert, on applique le délai de
réponse défnn ddns  e pdrdamtre  ‘EELA _IT_HEURES' du aodu e  SERVACES '
10 J Respect délai Si le délai contractuel a été respecté, la case est cochée
11 K Temps immo
Temps d'immobilisation du bien en calculant l'écart de temps entre la date /
heure de la DIT et la date / heure du dernier CRIT, plus le temps de main d' œuvre
de cette dernière intervention
12 L Sous-traitant
13 M Commanditaire
14 N Date DIT
15 O Etat DIT Etat de la demande d'intervention au moment de l'analyse (encours du client)
16 P Etat IT Etat de l'intervention au moment de l'analyse
17 Q Nb IT Comptabilise les interventions réalisées
18 R TNT
19 S Nature
20 T Evaluation Si vous avez mis en place l'enquête de Satisfaction, affiche la note moyenne
21 U Commentaire
client
22 V Numéro externe
DIT
23 W Numéro externe IT
Évolutions
Ce lien donne l'évolution de la satisfaction sur la période analysée.
En cliquant sur "Évolution", s'affiche un graphique avec trois indicateurs techniques (nombre de
DITs avec retour, nombre de DITs sans retour et nombre de DITs hors délai).
Par défaut, l'affichage est exprimé en trimestre sur la période analysée (sélectionner par mois).
Sous le graphique, le détail des biens concernés s'affichent dans un tableau. Les trois
indicateurs techniques (nombre de DITs avec retour, nombre de DITs sans retour et nombre de
DITs hors délai) sont exprimés dans le mode d'affichage du graphique (trimestriel si choix par
trimestre).
Consulter les interventions
Ce lien donne accès à l'historique des interventions sur le critère analysé, consulter Consulter les
demandes et les interventions
Descriptifs des tableaux de résultats exportés
Vue par Modèle
N° Col Désignation Type Correspondance / Commentaire
1 A Gamme A / N Code de la gamme
2 B Marque A / N Marque
3 C Modèle A / N Modèle du bien
4 D Biens présents Num Nombre de biens dans le modèle
5 E Biens visités Num Nombre de biens ayant subi au moins une intervention
6 F Age moyen Num Age moyen des biens exprimé en mois
7 G Nb DIT Num Nombre de demandes d'interventions sur la période
8 H Nb DIT clôturées Num Nombre de demandes d'interventions clôturées au
moment du calcul
9 I Nb DIT non clôturées Num Nombre de demandes d'interventions non clôturées au
moment du calcul
10 J Nb DIT sans retour Num Nombre de demandes d'interventions résolues en une
seule fois
11 K % DIT sans retour Num Ratio du nombre de demandes d'interventions sans
retour sur le nombre de demandes d'interventions total
12 L Nb IT Num Nombre d'interventions sur la période
13 M Interv. affecté A / N Intervenant affecté au bien
14 N Interv. principal A / N Intervenant qui est intervenu le plus souvent sur la
période
15 O Temps de réponse Num Temps de réponse moyen
16 P % respect délai Num Taux de respect du délai par rapport au délai contractuel
17 Q Engagt. délai Num Délai contractuel OU délai imposé dans la demande
d'intervention (par exemple, rendez-vous client)
18 R Temps immo Num Temps d'immobilisation du bien
19 S Delta jours Num Ecart entre la date et heure de la demande d'intervention
et date et heure de la 1 ère intervention exprimé en jours
20 T Pages A4 (mois) Num Volume de pages en A4 total
21 U VP A4 Noir (mois) Num Volume de pages en A4 noir
22 V Delta pages A4 noir Num Nombre de pages en A4 noir moyen réalisées entre deux
interventions
23 W VP A4 Couleur (mois) Num Volume de pages en A4 couleur
24 X Delta pages A4 couleur Num Nombre de pages en A4 couleur moyen réalisées entre
deux interventions
Détails des colonnes des temps de réponse par bien
DÉTAILS DES COLONNES DES TEMPS DE RÉPONSE
PAR BIEN
Position Position
lettrée Label Format Commentaire
1 A Raison sociale Lien vers la fiche du client est disponible
2 B Modèle Du bien
3 C Bien Lien vers la fiche du bien est disponible
4 D Nb DIT Comptabilise les demandes d'intervention ouvertes sur la période d'analyse
(avec un statut "En cours", "Travail non terminé", "Clôturée" ou "Annulée")
5 E Nb DIT cloturées Comptabilise les demandes d'intervention actuellement dans l'état "Clôturée"
6 F Nb DIT non
cloturées
Comptabilise les demandes d'intervention actuellement dans l'état "En cours" ou
"Travail non terminé"
7 G Nb DIT sans retour
Comptabilise les demandes d'intervention n'ayant pas nécessité un retour du
technicien c'est-à-dire clôturées lors de la 1ère visite. Ees ‘ATs en étdt  Trdvdn
non terminé' à la fin de la période d'analyse sont donc exclues puisque une 2ème
intervention est prévue
8 H % DIT sans retour Taux de résolution des demandes d'interventions en une seule fois
9 I Nb IT Comptabilise les interventions réalisées
10 J Interv. affecté Technicien responsable du bien
11 K Interv. princ Technicien qui est intervenu le plus souvent sur la période analysée
12 L Temps réponse
Temps de réponse moyen sur la période analysée en calculant l'écart de temps
entre la date / heure de la DIT et la date / heure du 1er CRIT. Les demandes
d'interventions avec un rendez-vous sont exclues
13 M Engt. délai
L'engagement de délai d'intervention avec le client. Si le client est sous contrat, il
s'agit du délai contractuel de la SSC. S'il n'est pas couvert, on applique le délai de
réponse défnn ddns  e pdrdamtre  ‘EELA _IT_HEURES' du aodu e  SERVACES '
14 N % respect délai Taux de respect du délai engagé. Ce taux est calculé en divisant le nombre de
DITs ayant respecté l'engagement de délai par le nombre total de DITs clôturées
15 O Temps immo
Temps d'immobilisation du bien en calculant l'écart de temps entre la date /
heure de la DIT et la date / heure du dernier CRIT, plus le temps de main d' œuvre
de cette dernière intervention
16 P VP A4 Noir (mois) Volume en équivalent Page A4 pour les compteurs noirs
17 Q VP A4 Coul (mois) Volume en équivalent Page A4 pour les compteurs couleur
18 R Pages A4 (mois) Volumes en équivalent Page A4 noirs et couleur
19 S Delta pages A4 Noir Nombre de pages A4 noires réalisées entre chaque 1ère intervention des DITs
ouvertes sur la période
20 T Delta pages A4 Coul Nombre de pages A4 couleur réalisées entre chaque 1ère intervention des DITs
ouvertes sur la période
21 U Delta jours Nombre de jours entre chaque 1ère intervention des DITs ouvertes sur la période
22 V Evaluation Si vous avez mis en place l'enquête de Satisfaction, affiche la note moyenne
23 W Site Du bien
24 X Gamme Du bien
25 Y Marque Du bien
26 Z Sous-traitant
27 AA Commanditaire
28 AB Date livraison
Détails des colonnes des temps de réponse par modèle
DÉTAILS DES COLONNES DES TEMPS DE RÉPONSE
PAR MODÈLE
Position Position
lettrée Label Format Commentaire
1 A Modèle Du bien
2 B Nb DIT Comptabilise les demandes d'intervention ouvertes sur la période d'analyse
(avec un statut "En cours", "Travail non terminé", "Clôturée" ou "Annulée")
3 C Nb DIT cloturées Comptabilise les demandes d'intervention actuellement dans l'état "Clôturée"
4 D Nb DIT non
cloturées
Comptabilise les demandes d'intervention actuellement dans l'état "En cours" ou
"Travail non terminé"
5 E Nb DIT sans retour
Comptabilise les demandes d'intervention n'ayant pas nécessité un retour du
technicien c'est-à-dire clôturées lors de la 1ère visite. Ees ‘ATs en étdt  Trdvdn
non terminé' à la fin de la période d'analyse sont donc exclues puisque une 2ème
intervention est prévue
6 F % DIT sans retour Taux de résolution des demandes d'interventions en une seule fois
7 G Nb IT Comptabilise les interventions réalisées
8 H Interv. affecté Technicien responsable du bien
9 I Interv. princ Technicien qui est intervenu le plus souvent sur la période analysée
10 J Temps réponse
Temps de réponse moyen sur la période analysée en calculant l'écart de temps
entre la date / heure de la DIT et la date / heure du 1er CRIT. Les demandes
d'interventions avec un rendez-vous sont exclues
11 K Engt. délai
L'engagement de délai d'intervention avec le client. Si le client est sous contrat, il
s'agit du délai contractuel de la SSC. S'il n'est pas couvert, on applique le délai de
réponse défnn ddns  e pdrdamtre  ‘EELA _IT_HEURES' du aodu e  SERVACES '
12 L % respect délai Taux de respect du délai engagé. Ce taux est calculé en divisant le nombre de
DITs ayant respecté l'engagement de délai par le nombre total de DITs clôturées
13 M Temps immo
Temps d'immobilisation du bien en calculant l'écart de temps entre la date /
heure de la DIT et la date / heure du dernier CRIT, plus le temps de main d' œuvre
de cette dernière intervention
14 N VP A4 Noir (mois) Volume en équivalent Page A4 pour les compteurs noirs
15 O VP A4 Coul (mois) Volume en équivalent Page A4 pour les compteurs couleur
16 P Pages A4 (mois) Volumes en équivalent Page A4 noirs et couleur
17 Q Delta pages A4 Noir Nombre de pages A4 noires réalisées entre chaque 1ère intervention des DITs
ouvertes sur la période
18 R Delta pages A4 Coul Nombre de pages A4 couleur réalisées entre chaque 1ère intervention des DITs
ouvertes sur la période
19 S Delta jours Nombre de jours entre chaque 1ère intervention des DITs ouvertes sur la période
20 T Evaluation Si vous avez mis en place l'enquête de Satisfaction, affiche la note moyenne
21 U Biens présents
22 V Biens visités
23 W Age Moyen (mois)
24 X Gamme Du bien
25 Y Marque Du bien
Détails des colonnes des temps de réponse par marque
DÉTAILS DES COLONNES DES TEMPS DE RÉPONSE
PAR MARQUE
Position Position
lettrée Label Format Commentaire
1 A Marque Du bien
2 B Nb DIT Comptabilise les demandes d'intervention ouvertes sur la période d'analyse
(avec un statut "En cours", "Travail non terminé", "Clôturée" ou "Annulée")
3 C Nb DIT cloturées Comptabilise les demandes d'intervention actuellement dans l'état "Clôturée"
4 D Nb DIT non cloturées Comptabilise les demandes d'intervention actuellement dans l'état "En cours" ou
"Travail non terminé"
5 E Nb DIT sans retour
Comptabilise les demandes d'intervention n'ayant pas nécessité un retour du
technicien c'est-à-dire clôturées lors de la 1ère visite. Ees ‘ATs en étdt  Trdvdn
non terminé' à la fin de la période d'analyse sont donc exclues puisque une 2ème
intervention est prévue
6 F % DIT sans retour Taux de résolution des demandes d'interventions en une seule fois
7 G Nb IT Comptabilise les interventions réalisées
8 H Interv. affecté Technicien responsable du bien
9 I Interv. princ Technicien qui est intervenu le plus souvent sur la période analysée
10 J Temps réponse
Temps de réponse moyen sur la période analysée en calculant l'écart de temps
entre la date / heure de la DIT et la date / heure du 1er CRIT. Les demandes
d'interventions avec un rendez-vous sont exclues
11 K Engt. délai
L'engagement de délai d'intervention avec le client. Si le client est sous contrat, il
s'agit du délai contractuel de la SSC. S'il n'est pas couvert, on applique le délai de
réponse défnn ddns  e pdrdamtre  ‘EELA _IT_HEURES' du aodu e  SERVACES '
12 L % respect délai Taux de respect du délai engagé. Ce taux est calculé en divisant le nombre de
DITs ayant respecté l'engagement de délai par le nombre total de DITs clôturées
13 M Temps immo
Temps d'immobilisation du bien en calculant l'écart de temps entre la date /
heure de la DIT et la date / heure du dernier CRIT, plus le temps de main d' œuvre
de cette dernière intervention
14 N VP A4 Noir (mois) Volume en équivalent Page A4 pour les compteurs noirs
15 O VP A4 Coul (mois) Volume en équivalent Page A4 pour les compteurs couleur
16 P Pages A4 (mois) Volumes en équivalent Page A4 noirs et couleur
17 Q Delta pages A4 Noir Nombre de pages A4 noires réalisées entre chaque 1ère intervention des DITs
ouvertes sur la période
18 R Delta pages A4 Coul Nombre de pages A4 couleur réalisées entre chaque 1ère intervention des DITs
ouvertes sur la période
19 S Delta jours Nombre de jours entre chaque 1ère intervention des DITs ouvertes sur la période
20 T Evaluation Si vous avez mis en place l'enquête de Satisfaction, affiche la note moyenne
21 U Biens présents
22 V Biens visités
23 W Age Moyen (mois)
Détails des colonnes des temps de réponse par gamme
DÉTAILS DES COLONNES DES TEMPS DE RÉPONSE
PAR GAMME
Consulter Détails des colonnes des temps de réponse par marque.
Détails des colonnes des temps de réponse par client
DÉTAILS DES COLONNES DES TEMPS DE RÉPONSE
PAR CLIENT
Position Position
lettrée Label Format Commentaire
1 A Code Client
2 B Raison sociale Lien vers la fiche du client est disponible
3 C Nb DIT Comptabilise les demandes d'intervention ouvertes sur la période d'analyse
(avec un statut "En cours", "Travail non terminé", "Clôturée" ou "Annulée")
4 D Nb DIT cloturées Comptabilise les demandes d'intervention actuellement dans l'état "Clôturée"
5 E Nb DIT non
cloturées
Comptabilise les demandes d'intervention actuellement dans l'état "En cours" ou
"Travail non terminé"
6 F Nb DIT sans retour
Comptabilise les demandes d'intervention n'ayant pas nécessité un retour du
technicien c'est-à-dire clôturées lors de la 1ère visite. Ees ‘ATs en étdt  Trdvdn
non terminé' à la fin de la période d'analyse sont donc exclues puisque une 2ème
intervention est prévue
7 G % DIT sans retour Taux de résolution des demandes d'interventions en une seule fois
8 H Nb IT Comptabilise les interventions réalisées
9 I Interv. affecté Technicien responsable du bien
10 J Interv. princ Technicien qui est intervenu le plus souvent sur la période analysée
11 K Temps réponse
Temps de réponse moyen sur la période analysée en calculant l'écart de temps
entre la date / heure de la DIT et la date / heure du 1er CRIT. Les demandes
d'interventions avec un rendez-vous sont exclues
12 L Engt. délai
L'engagement de délai d'intervention avec le client. Si le client est sous contrat, il
s'agit du délai contractuel de la SSC. S'il n'est pas couvert, on applique le délai de
réponse défnn ddns  e pdrdamtre  ‘EELA _IT_HEURES' du aodu e  SERVACES '
13 M % respect délai Taux de respect du délai engagé. Ce taux est calculé en divisant le nombre de
DITs ayant respecté l'engagement de délai par le nombre total de DITs clôturées
14 N Temps immo
Temps d'immobilisation du bien en calculant l'écart de temps entre la date /
heure de la DIT et la date / heure du dernier CRIT, plus le temps de main d' œuvre
de cette dernière intervention
15 O VP A4 Noir (mois) Volume en équivalent Page A4 pour les compteurs noirs
16 P VP A4 Coul (mois) Volume en équivalent Page A4 pour les compteurs couleur
17 Q Pages A4 (mois) Volumes en équivalent Page A4 noirs et couleur
18 R Delta pages A4 Noir Nombre de pages A4 noires réalisées entre chaque 1ère intervention des DITs
ouvertes sur la période
19 S Delta pages A4 Coul Nombre de pages A4 couleur réalisées entre chaque 1ère intervention des DITs
ouvertes sur la période
20 T Delta jours Nombre de jours entre chaque 1ère intervention des DITs ouvertes sur la période
21 U Evaluation Si vous avez mis en place l'enquête de Satisfaction, affiche la note moyenne
22 V Biens présents
23 W Biens visités
24 X Age Moyen (mois)
Suivre l'activité technique
SUIVRE L'ACTIVITE TECHNIQUE
Services / Tableaux de bord techniques / Suivre l'activité technique
L'activité des intervenants est ventilée :
§ Productive : somme des interventions dont la nature n'est pas "ATELIER",
§ A marge réduite : somme des interventions dont le code "Nature" est défini dans les
paramètres,
§ Non productive : somme des étiquettes de temps non productifs, exemple : congés,
maladie, absences diverses.
Période
Par défaut, la période est sur les 12 derniers mois.
Sélections
o "Imprimer" coché : Il est possible de générer directement un pdf.
o Ramener seulement les intervenants avec des interventions
