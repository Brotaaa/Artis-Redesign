# Statistiques de ventes

> Categorie: Ventes | Pages 452-478

## Sous-rubriques
- Extraire l'état des ventes, livraisons ou marges (p.452)
-   Détails des colonnes pour facture SSC, CRIT, VENTE (p.459)
-   Détails des colonnes pour avoir SSC, CRIT, VENTE et facture directe (p.468)
-   CA par Organisation interne (p.477)
-   CA récurrent SSC par article sur une période (p.478)

8. <Flèche verte> ou <F2>,
9. La facture est générée :
§ Dans la facture générée, les commentaires des différentes DITs sont récupérés en
premier,
§ Ensuite, les lignes de facturation sont affichées,
10. Dans la zone " Accueil ", cliquer sur " Editer les factures".
Paramètres
Regrouper les factures par org. interne et cliente
Paramètres application / Paramètres application / Gérer les paramètres
Fonctionnement par défaut pour la génération des factures des DIT.
Paramètre "FACTURATION_DIT_GROUPEE"
Valeur :
§ Coché : Regroupe les factures par org interne et org cliente,
§ Non coché : Fait une facture pour chaque DIT.
Statistiques de ventes
STATISTIQUES DE VENTES
· Extraire l'état des ventes, livraisons ou marges
Extraire l'état des ventes, livraisons ou marges
EXTRAIRE L'ÉTAT DES VENTES
Ventes / Statistiques de ventes / Extraire l'état des ventes, livraisons et marges
Cette requête permet d'obtenir sur un seul état l'ensemble des lignes ayant engendré un chiffre
d'affaires ou une charge sur une période. Elle contient un nombre important de colonnes et
remplace les requêtes ‘Interroger l'historique des livraisons' et ‘Extraire l'état des ventes'.
En entrant dans l'écran, vous obtenez la page de sélection multicritères.
TYPE D'ANALYSE
La section ‘Analyse' permet de sélectionner le type de :
o Ventes : Seules les lignes de factures sont extraites (directes, SSC, CRIT ou autres)
o Livraisons : Seules les lignes de livraisons sont extraites (non facturables, facturables ou
facturées)
o Marges : Seules les lignes de factures et les lignes de livraisons (BL ou CRIT) non facturables
sont extraites (les lignes de livraisons non facturées sont exclues).
Exemples : une ligne de commande est livrée en juin et facturée en août (CR = 100, CA = 150)
1er cas : BL ou CRIT facturable
Type d'analyse Extraction en juin Extraction en août CR CA
Livraisons Oui 100
réel
150
prévisionnel
Livraisons Oui La ligne n'est pas extraite
Ventes Oui La ligne n'est pas extraite
Ventes Oui 100
réel
150
réel
Marges Oui La ligne n'est pas extraite
Marges Oui 100
réel
150
Réel
2ème cas : BL ou CRIT non facturable
Type d'analyse Extraction en juin Extraction en août CR CA
Livraisons Oui 100
réel
0
Livraisons Oui La ligne n'est pas extraite
Ventes Oui La ligne n'existe pas
Ventes Oui La ligne n'existe pas
Marges Oui 100
réel
0
Marges Oui La ligne n'est pas extraite
ORIGINE
Vous pouvez sélectionner l'origine de la ligne de vente :
o Tout à Les lignes de ventes de toute origine sont extraites
o CRIT à Seules les lignes provenant des interventions sont extraites
o SSC à Seules les lignes provenant des factures et avoirs de solutions de services sont
extraites
o Autres :
§ Toutes les lignes issues de la chaîne des ventes
§ Toutes les lignes de factures directes
§ Tous les avoirs (hors avoirs de Solutions de services)
§ Toutes les interventions (facturables ou non) sont ramenées
EXPORT
En cochant la case ‘Export automatique' et en indiquant une adresse E-mail, vous recevez le
résultat de votre analyse zippée dans votre boîte aux lettres.
PÉRIODE D'ANALYSE
Indiquez les bornes de dates d'analyse. Par défaut, la période est initialisée avec La date de début
de période de vente de l'exercice comptable jusqu'à la date du jour.
CRITÈRES DE MULTI-SÉLECTION
Afin de ne pas ‘écrouler' l'application, il est fortement conseillé de diminuer la période d'analyse et/ou d'utiliser la
loupe (<F1>) sur les critères ‘N° d'affaires', ‘N° de BL', ‘N° de facture' ‘Code SSC', ‘Code article vendu', ‘Bien
livré', ‘Bien de destination', ‘Code client livré' et ‘Code client facturé'.
Module de paramétrage de listes pour les Dépôts et les Catégories d'articles
Le module de multi-sélection des Dépôts et Catégories d'articles vendus vous permet de filtrer les
lignes.
RAPPEL :
Les listes sont des paramétrages de données à retenir qui peuvent être réutilisées à chaque
analyse. Vous pouvez soit rappeler une liste prédéfinie existante, soit en créer une nouvelle dans
cet écran. Si vous reprenez une liste de catégories préétablie, les données exclues apparaissent
cochées dans l'arborescence ou dans la liste. Pour sauvegarder une liste, donnez- lui un nom dans
la zone de recherche puis cliquez sur le lien ‘Créer une liste'.
Avec article d'ajustement
Cette option permet d'obtenir les articles d'ajustement saisis dans les commandes client.
Pour les Rachats, le client livré et le client facturé est celui de la première ligne de commande.
Détail par grandeur et par bien
La case ‘Détail par grandeur et par bien' permet d'obtenir le C.A. et les coûts de revient par
compteur et par bien : Si elle est cochée, des colonnes propres au bien sont ajoutées (modèle,
marque, VMM).
Pour les lignes de ventes ou livraisons de matériel avec plusieurs biens, la ventilation est faîte en
fonction du nombre de biens.
Pour les lignes de facture SSC avec plusieurs biens (contrat flotte), la ventilation est effectuée
suivant le type de règle de facturation :
o S'il s'agit d'une règle de facturation copie (associée à plusieurs grandeurs), la ventilation se fait
au prorata du VMM de chacune des grandeurs à la date de facturation.
o Sinon, la ventilation s'effectue de façon proportionnelle sur chaque bien associé à la ligne de
facture.
Calculer le PMP
La case ‘Calculer le PMP' est par défaut décochée pour optimiser le traitement.
Exclure les CR antérieurs à la période
Case à cocher ‘Exclure les CR antérieurs à la période'
Cette case sert à exclure les coûts de revient antérieurs à la période d'analyse lorsque le BL est
passé de l'état ‘non facturable' à facturable'. Pour ne pas fausser les marges, dès qu'ARTIS trouve
un BL hors période d'analyse et à 0.00, les coûts de revient envoyés dans l'état de marges sont mis
à 0.00.
Exemple : un Bon de livraison de mai est facturé sur juin :
o Lors de l'extraction des marges de mai, vous aurez les coûts de revient et pas de C.A car le BL
était non facturable à cette date
o Lors de l'extraction des marges sur juin, vous aurez le C.A. mais pas de coûts de revient car le
BL est devenu ‘facturé'
Par contre, si la livraison passe de ‘facturable' à ‘non facturable', vous devez générer une facture à
0.00 pour que les coûts de revient soient pris en compte dans l'analyse de la marge.
Descriptif du fichier exporté
N° Colonnes Commentaires
1 A Origine
2 B Mois-année livraison
3 C Date livraison
4 D N° BL
5 E Etat BL
6 F Mois-année facture
7 G Date facture
8 H N° Facture
9 I N° ligne facture
10 J Etat facture
11 K N° CRIT
12 L Date d'intervention
13 M Etat DIT
14 N Type article
15 O Code art.
16 P Désignation
17 Q Libellé art.
18 R Quantité commandée
19 S Quantité livré
20 T Quantité facturée
21 U Pu HT facturé
22 V Total HT facturé
23 W Total HT de la facture
24 X Quantité revient
25 Y Coût de revient unitaire
26 Z Total coût de revient
27 AA Marge
28 AB Valorisation du stock
29 AC Vendeur
30 AD Unité org.1 vendeur
31 AE Unité org.2 vendeur
32 AF Gestionnaire
33 AG Intervenant
34 AH Date commande
35 AI N° commande
36 AJ Etat commande
37 AK Code Client commande
38 AL Raison sociale Client commande
39 AM Client commande adresse 1
40 AN Client commande adresse 2
41 AO Client commande adresse 3
N° Colonnes Commentaires
42 AP Client commande code postal
43 AQ Client commande ville
44 AR Client commande Tél 1
45 AS Client commande Fax
46 AT Client commande Mail
47 AU Code org. dépôt commande
48 AV Nom org. dépôt commande
49 AW Code dépôt commande
50 AX Libellé dépôt commande
51 AY Code Client livré
52 AZ Raison sociale Client livré
53 BA Client livré adresse 1
54 BB Client livré adresse 2
55 BC Client livré adresse 3
56 BD Client livré CP
57 BE Client livré ville
58 BF Client livré Tél 1
59 BG Client livré Fax
60 BH Client livré Mail
61 BI Nom Site de livraison
62 BJ Site de livraison adresse 1
63 BK Site de livraison adresse 2
64 BL Site de livraison adresse 3
65 BM Site de livraison CP
66 BN Site de livraison ville
67 BO Site de livraison Tél 1
68 BP Site de livraison Fax
69 BQ Site de livraison Mail
70 BR Code org. dépôt livraison
71 BS Nom org. dépôt livraison
72 BT Code dépôt livraison
73 BU Libellé dépôt livraison
74 BV Code Client facturé
75 BW Raison sociale Client facturé
76 BX Client facturé adresse 1
77 BY Client facturé adresse 2
78 BZ Client facturé adresse 3
79 CA Client facturé CP
80 CB Client facturé ville
81 CC Client facturé Tél 1
82 CD Client facturé Fax
83 CE Client facturé Mail
84 CF Facture directe
85 CG N° externe facture
N° Colonnes Commentaires
86 CH Mode de règlement
87 CI Org. interne
88 CJ Compte auxiliaire
90 CK Raison sociale organisation interne
91 CL Passé en compta
92 CM N° affaire
93 CN N° rachat
94 CO Montant du rachat / CA
95 CP Montant du rachat / CR
96 CQ Montant reprise
97 CR Montant argus
98 CS Montant ajustement / CA
99 CT Montant ajustement / CR
100 CU Code activité art. vendu
101 CV Libellé activité art. vendu
102 CW Code famille art. vendu
103 CX Libellé famille art. vendu
104 CY Code sous-famille art. vendu
105 CZ Libellé sous-famille art. vendu
106 DA Code marque article
107 DB Libellé marque article
108 DC Bien de destination
109 DD Code modèle bien destination
110 DE Code activité Bien de destination
111 DF Libellé activité Bien de destination
112 DG Code famille Bien de destination
113 DH Libellé famille Bien de destination
114 DI Code sous-famille Bien de destination
115 DJ Libellé sous-famille Bien de destination
116 DK Marque bien de destination
117 DL Libellé marque bien de destination
118 DM N° SSC
119 DN Libellé SSC
120 DO Code MSC
121 DP Libellé MSC
122 DQ Code RFC
123 DR Libellé RFC
124 DS Bien facturé
125 DT Libellé bien facturé
126 DU Code modèle bien facturé
126 DV Marque bien facturé
127 DW Libellé Marque bien facturé
128 DX Activité Bien facturé
129 DY Libellé activité Bien facturé
N° Colonnes Commentaires
130 DZ Famille Bien facturé
131 EA Libellé famille Bien facturé
132 EB Code sous-famille Bien facturé
133 EC Libellé sous-famille Bien facturé
134 ED Code grandeur
135 EE Nom grandeur
136 EF Valeur grandeur
137 EG Origine valeur
138 EH Code source valeur
139 EI Source valeur
140 EJ VMM
141 EK Origine VMM
142 EL Statut commercial
143 EM Statut logistique
144 EN Créateur livraison
145 EO Livraison créée le
146 EP Modificateur livraison
147 EQ Livraison modifiée le
148 ER Créateur facture
149 ES Facture créée le
150 ET Modificateur facture
151 EU Facture modifiée le
Etc Etc Toutes les CLASSIFICATIONS de la fiche Client Pour le client de la COMMANDE
Agence client Exemple de Classification de Client
Secteur commercial Exemple de Classification de Client
Etc Etc Toutes les CLASSIFICATIONS du site du client
Secteur commercial Exemple de Classification de Site client
Demande de relevés de compteurs Site Exemple de Classification de Site  client
Etc Etc Toutes les CLASSIFICATIONS de la fiche Client Pour le client de la FACTURE
Agence client Exemple de Classification de Client
Secteur commercial Exemple de Classification de Client
Toutes les CLASSIFICATIONS de l'affaire
Type d'affaire Exemple de Classification d'Affaires
Toutes les CLASSIFICATIONS du modèle (article) SAUF ‘Articles vendus', ‘Articles stockés',
‘Articles achetés'
Etc Etc Couverture contractuelle d'articles Exemple de Classification d'Article
Prestation et Nature de DIT Exemple de Classification d'Article
CLASSIFICATION comptable
Compte et Catégorie comptables Compte et Catégorie comptable de l'article
SOUS CHAPITRE
· Détails des colonnes pour facture SSC, CRIT, VENTE
· Détails des colonnes pour avoir SSC, CRIT, VENTE et facture directe
· CA par Organisation interne
· CA récurrent SSC par article sur une période
Détails des colonnes pour facture SSC, CRIT, VENTE
DÉTAILS DES COLONNES POUR FACTURE SSC, CRIT, VENTE
Position Position
lettrée
Label de la
colonne Type Facturation SSC
(Facture et Avoir SSC)
Facturation SSC
(Facture et Avoir SSC)
avec détail Compteur et Bien
Facture de CRIT
Facture de VENTE
(Commande - BL - Facture -
Affaire éventuellement)
1 A Origine Facture
► Si la facture est positive : SSC
► Si l'avoir a été fait avec "Avoir client (SSC)" : Avoir
SSC
► Si la facture est positive : SSC
► Si l'avoir a été fait avec "Avoir client (SSC)" : Avoir SSC
► Si la ligne de facture est liée à un CRIT :
Service
► Si la ligne de facture N'est PAS liée à un CRIT
: Vente
Vente
2 B Mois-année livraison BL - - - BL
3 C Date Livraison BL - - - BL
4 D N° BL BL - - - BL
5 E Etat BL BL - - - BL
6 F Mois-année facture Facture Entête de facture Entête de facture Entête de facture Entête de facture
7 G Date facture Facture Entête de facture Entête de facture Entête de facture Entête de facture
8 H N° Facture Facture Entête de facture Entête de facture Entête de facture Entête de facture
9 I N° ligne facture Facture Information de la Ligne de facture Information de la Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
10 J Etat facture Facture Entête de facture Entête de facture Entête de facture Entête de facture
11 K N° CRIT CRIT - - CRIT -
12 L Etat DIT DIT - - DIT -
13 M Type article Article Article de la Ligne de facture Ligne de facture Information de la Ligne de facture
Information de la Ligne de facture
ou de la ligne de commande pour les articles
d'ajustement présent dans la commande liée
14 N Code art. Article Article de la Ligne de facture Ligne de facture Information de la Ligne de facture
Information de la Ligne de facture
ou de la ligne de commande pour les articles
d'ajustement présent dans la commande liée
15 O Désignation Article Article de la Ligne de facture Ligne de facture Information de la Ligne de facture
Information de la Ligne de facture
ou de la ligne de commande pour les articles
d'ajustement présent dans la commande liée
16 P Libellé art. Article Article de la Ligne de facture Ligne de facture Information de la Ligne de facture
Information de la Ligne de facture
ou de la ligne de commande pour les articles
d'ajustement présent dans la commande liée
17 Q Qté commandée Lgn fact. - - Information de la Ligne de facture Information de la Ligne de facture
18 R Qté livrée Lgn fact. - - Information de la Ligne de facture Information de la Ligne de facture
19 S Qté facturée Lgn fact. Ligne de facture
► Si sans conso (ligne de facture lié à des biens)  : Qté de la
ligne / nbre de biens
► Si avec conso (ligne de facture liée à des grandeurs) :
Prorata selon VMM de chaque bien
    . Si il y a un seul bien, Qté facturée et Total HT facturé sont
issus de la ligne de facture
    . Si tous les VMM sont à 0, Qté facturée et Total HT facturé
sont divisés par le nombre de bien
Information de la Ligne de facture Information de la Ligne de facture
20 T PU HT facturé Lgn fact. Ligne de facture Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
21 U Total HT facturé Lgn fact. Ligne de facture
► Si sans conso (ligne de facture lié à des biens)  : Total HT
facturé / nbre de biens
► Si avec conso (ligne de facture liée à des grandeurs) :
Prorata selon VMM de chaque bien
    . Si il y a un seul bien, Qté facturée et Total HT facturé sont
issus de la ligne de facture
    . Si tous les VMM sont à 0, Qté facturée et Total HT facturé
sont divisés par le nombre de bien
Information de la Ligne de facture Information de la Ligne de facture
22 V Total HT de la facture Lgn fact. Ligne de facture Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
23 W Quantité revient Lgn fact. Ligne de facture (issu de la RFC ou 0)
Issu de la RFC ou 0
► Si sans conso (ligne de facture lié à des biens)  : Qté de
revient de la ligne / nbre de biens
► Si avec conso (ligne de facture liée à des grandeurs) :
Prorata selon VMM de chaque bien
    . Si il y a un seul bien, Qté de revient et Total coût de
revient sont issus de la ligne de facture
    . Si tous les VMM sont à 0, Qté de revient et Total coût de
revient sont divisés par le nombre de bien
Information de la Ligne de facture Information de la Ligne de facture
24 X Coût de revient unitaire Lgn fact. Ligne de facture (issu de la RFC ou 0) Ligne de facture (issu de la RFC ou 0) Information de la Ligne de facture Information de la Ligne de facture
25 Y Total coût de revient Lgn fact. Ligne de facture (issu de la RFC ou 0)
Issu de la RFC ou 0
► Si sans conso (ligne de facture lié à des biens)  :Total coût
de revient de la ligne / nbre de biens
► Si avec conso (ligne de facture liée à des grandeurs) :
Prorata selon VMM de chaque bien
    . Si il y a un seul bien, Qté de revient et Total coût de
revient sont issus de la ligne de facture
    . Si tous les VMM sont à 0, Qté de revient et Total coût de
revient sont divisés par le nombre de bien
Information de la Ligne de facture Information de la Ligne de facture
26 Z Marge Lgn fact. Marge = Total HT - Total coût de revient Marge = Total HT - Total coût de revient Marge = Total HT - Total coût de revient Marge = Total HT - Total coût de revient
27 AA Valorisation du stock Lgn fact. - - Si option "Valorisation stock" cochée Si option "Valorisation stock" cochée
28 AB Vendeur Lgn fact. Ligne de facture : Chargé d'affaire de la SSC Ligne de facture : Chargé d'affaire de la SSC - Ligne de facture : Vendeur
29 AC Unité org.1 vendeur Lgn fact. UO du Vendeur UO du Vendeur Ligne de facture UO du Vendeur
30 AD Unité org.2 vendeur Lgn fact. UO de l'UO UO de l'UO Ligne de facture UO de l'UO
31 AE Gestionnaire Cmde - - - Gestionnaire de la commande
32 AF Intervenant CRIT - - CRIT -
33 AG Date commande Cmde - - - Entête de Commande
34 AH N° commande Cmde - - - Entête de Commande
35 AI Etat commande Cmde - - - Entête de Commande
36 AJ Code Client commande Cmde - - Client du CRIT Client de la ligne de commande
37 AK Raison sociale Client
commande Cmde - - Client du CRIT Client de la ligne de commande
38 AL Client commande adresse
1 Client de cmde - - Client du CRIT Client de la ligne de commande
39 AM Client commande adresse
2 Client de cmde - - Client du CRIT Client de la ligne de commande
40 AN Client commande adresse
3 Client de cmde - - Client du CRIT Client de la ligne de commande
41 AO Client commande CP Client de cmde - - Client du CRIT Client de la ligne de commande
42 AP Client commande ville Client de cmde - - Client du CRIT Client de la ligne de commande
43 AQ Client commande Tél 1 Client de cmde - - Client du CRIT Client de la ligne de commande
44 AR Client commande Fax Client de cmde - - Client du CRIT Client de la ligne de commande
45 AS Client commande Mail Client de cmde - - Client du CRIT Client de la ligne de commande
46 AT Code org. dépôt
commande Client de cmde - - Information de la ligne du CRIT pour les
articles suivi en stock
Information de la ligne de commande pour les
articles suivi en stock
47 AU Nom org. dépôt
commande Client de cmde - - Information de la ligne du CRIT pour les
articles suivi en stock
Information de la ligne de commande pour les
articles suivi en stock
48 AV Code dépôt commande Client de cmde - - Information de la ligne du CRIT pour les
articles suivi en stock
Information de la ligne de commande pour les
articles suivi en stock
49 AW Libellé dépôt commande Client de cmde - - Information de la ligne du CRIT pour les
articles suivi en stock
Information de la ligne de commande pour les
articles suivi en stock
50 AX Code Client livré Client livré Client contractant de la SSC Client contractant de la SSC Client du CRIT Client du BL
51 AY Raison sociale Client livré Client livré Client contractant de la SSC Client contractant de la SSC Client du CRIT Client du BL
52 AZ Client livré adresse 1 Client livré Site principale du client contractant de la SSC Site principale du client contractant de la SSC Site principal du client du CRIT Site principal du client du BL
53 BA Client livré adresse 2 Client livré Site principale du client contractant de la SSC Site principale du client contractant de la SSC Site principal du client du CRIT Site principal du client du BL
54 BB Client livré adresse 3 Client livré Site principale du client contractant de la SSC Site principale du client contractant de la SSC Site principal du client du CRIT Site principal du client du BL
55 BC Client livré CP Client livré Site principale du client contractant de la SSC Site principale du client contractant de la SSC Site principal du client du CRIT Site principal du client du BL
56 BD Client livré ville Client livré Site principale du client contractant de la SSC Site principale du client contractant de la SSC Site principal du client du CRIT Site principal du client du BL
57 BE Client livré Tél 1 Client livré Site principale du client contractant de la SSC Site principale du client contractant de la SSC Site principal du client du CRIT Site principal du client du BL
58 BF Client livré Fax Client livré Site principale du client contractant de la SSC Site principale du client contractant de la SSC Site principal du client du CRIT Site principal du client du BL
59 BG Client livré Mail Client livré Site principale du client contractant de la SSC Site principale du client contractant de la SSC Site principal du client du CRIT Site principal du client du BL
60 BH Nom Site de livraison Site livré Site principale du client contractant de la SSC Site du bien qui a fait l'objet de la facturation Site du CRIT (si présence d'un bien, souvent
c'est le site du bien) Site livré de la ligne du BL
61 BI Site de livraison adresse 1 Site livré Site principale du client contractant de la SSC Site du bien qui a fait l'objet de la facturation Site du CRIT (si présence d'un bien, souvent
c'est le site du bien) Site livré de la ligne du BL
62 BJ Site de livraison adresse 2 Site livré Site principale du client contractant de la SSC Site du bien qui a fait l'objet de la facturation Site du CRIT (si présence d'un bien, souvent
c'est le site du bien) Site livré de la ligne du BL
63 BK Site de livraison adresse 3 Site livré Site principale du client contractant de la SSC Site du bien qui a fait l'objet de la facturation Site du CRIT (si présence d'un bien, souvent
c'est le site du bien) Site livré de la ligne du BL
64 BL Site de livraison CP Site livré Site principale du client contractant de la SSC Site du bien qui a fait l'objet de la facturation Site du CRIT (si présence d'un bien, souvent
c'est le site du bien) Site livré de la ligne du BL
65 BM Site de livraison ville Site livré Site principale du client contractant de la SSC Site du bien qui a fait l'objet de la facturation Site du CRIT (si présence d'un bien, souvent
c'est le site du bien) Site livré de la ligne du BL
66 BN Site de livraison Tél 1 Site livré Site principale du client contractant de la SSC Site du bien qui a fait l'objet de la facturation Site du CRIT (si présence d'un bien, souvent
c'est le site du bien) Site livré de la ligne du BL
67 BO Site de livraison Fax Site livré Site principale du client contractant de la SSC Site du bien qui a fait l'objet de la facturation Site du CRIT (si présence d'un bien, souvent
c'est le site du bien) Site livré de la ligne du BL
68 BP Site de livraison Mail Site livré Site principale du client contractant de la SSC Site du bien qui a fait l'objet de la facturation Site du CRIT (si présence d'un bien, souvent
c'est le site du bien) Site livré de la ligne du BL
69 BQ Code org. dépôt livraison BL - - Information de la ligne de facture pour les
articles suivi en stock (issu du CRIT)
Information de la ligne de facture pour les
articles suivi en stock (issu du BL)
70 BR Nom org. dépôt livraison BL - - Information de la ligne de facture pour les
articles suivi en stock (issu du CRIT)
Information de la ligne de facture pour les
articles suivi en stock (issu du BL)
71 BS Code dépôt livraison BL - - Information de la ligne de facture pour les
articles suivi en stock (issu du CRIT)
Information de la ligne de facture pour les
articles suivi en stock (issu du BL)
72 BT Libellé dépôt livraison BL - - Information de la ligne de facture pour les
articles suivi en stock (issu du CRIT)
Information de la ligne de facture pour les
articles suivi en stock (issu du BL)
73 BU Date d'intervention CRIT - - Date du CRIT -
74 BV Code Client facturé Client facturé Client de la facture (client contractant de la SSC ou
client de la RFC)
Client de la facture (client contractant de la SSC ou client de
la RFC) Client de la facture (issu du CRIT) Client de la facture (issu du BL)
75 BW Raison sociale Client
facturé Client facturé Client de la facture (client contractant de la SSC ou
client de la RFC)
Client de la facture (client contractant de la SSC ou client de
la RFC) Client de la facture (issu du CRIT) Client de la facture (issu du BL)
76 BX Client facturé adresse 1 Site facturé Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture)
77 BY Client facturé adresse 2 Site facturé Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture)
78 BZ Client facturé adresse 3 Site facturé Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture)
79 CA Client facturé CP Site facturé Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture)
80 CB Client facturé ville Site facturé Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture)
81 CC Client facturé Tél 1 Site facturé Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture)
82 CD Client facturé Fax Site facturé Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture)
83 CE Client facturé Fax Site facturé Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture) Site facturé (ligne de facture)
84 CF Facture directe Facture Entête de facture Entête de facture Entête de facture Entête de facture
85 CG N° externe facture Facture Entête de facture Entête de facture Entête de facture Entête de facture
86 CH Mode de règlement Facture Entête de facture Entête de facture Entête de facture Entête de facture
87 CI Org. interne Facture Entête de facture Entête de facture Entête de facture Entête de facture
88 CJ Raison sociale
organisation interne Facture Entête de facture Entête de facture Entête de facture Entête de facture
89 CK Passé en compta Facture Entête de facture Entête de facture Entête de facture Entête de facture
90 CL N° affaire Affaire - - - Entête de l'affaire
91 CM N° rachat Rachat - - - Rachat dans l'affaire
92 CN Montant du rachat / CA Rachat - - - Information du rachat (somme pour les biens
dans le dossier)
93 CO Montant du rachat / CR Rachat - - - Information du rachat (somme pour les biens
dans le dossier)
94 CP Montant reprise Rachat - - - Information du rachat (somme pour les biens
dans le dossier)
95 CQ Montant argus Rachat - - - Information du rachat (somme pour les biens
dans le dossier)
96 CR Montant ajustement / CA Facture - - -
Information de la ligne de commande pour les
articles d'ajustement présent dans la
commande liée
97 CS Montant ajustement / CR Facture - - -
Information de la ligne de commande pour les
articles d'ajustement présent dans la
commande liée
98 CT Activité art. vendu Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
99 CU Libellé activité art. vendu Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
100 CV Famille art. vendu Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
101 CW Libellé famille art. vendu Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
102 CX Sous-famille art. vendu Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
103 CY Libellé sous-famille art.
vendu Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
104 CZ Marque article Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
105 DA Libellé marque article Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
106 DB Bien de destination Bien de
destination - - Bien pour lequel l'article est destiné (PD &
Conso)
Bien pour lequel l'article est destiné (PD &
Conso)
107 DC Code modèle bien
destination
Bien de
destination - - Bien pour lequel l'article est destiné (PD &
Conso)
Bien pour lequel l'article est destiné (PD &
Conso)
108 DD Activité Bien de
destination
Bien de
destination - - Bien pour lequel l'article est destiné (PD &
Conso)
Bien pour lequel l'article est destiné (PD &
Conso)
109 DE Libellé activité Bien de
destination
Bien de
destination - - Bien pour lequel l'article est destiné (PD &
Conso)
Bien pour lequel l'article est destiné (PD &
Conso)
110 DF Famille Bien de
destination
Bien de
destination - - Bien pour lequel l'article est destiné (PD &
Conso)
Bien pour lequel l'article est destiné (PD &
Conso)
111 DG Libellé famille Bien de
destination
Bien de
destination - - Bien pour lequel l'article est destiné (PD &
Conso)
Bien pour lequel l'article est destiné (PD &
Conso)
112 DH Sous-famille Bien de
destination
Bien de
destination - - Bien pour lequel l'article est destiné (PD &
Conso)
Bien pour lequel l'article est destiné (PD &
Conso)
113 DI Libellé sous-famille Bien
de destination
Bien de
destination - - Bien pour lequel l'article est destiné (PD &
Conso)
Bien pour lequel l'article est destiné (PD &
Conso)
114 DJ Marque bien de
destination
Bien de
destination - - Bien pour lequel l'article est destiné (PD &
Conso)
Bien pour lequel l'article est destiné (PD &
Conso)
115 DK Libéllé marque bien de
destination
Bien de
destination - - Bien pour lequel l'article est destiné (PD &
Conso)
Bien pour lequel l'article est destiné (PD &
Conso)
116 DL N° SSC SSC Issu de la SSC qui a générée la ligne de facture Issu de la SSC qui a générée la ligne de facture - -
117 DM Libellé SSC SSC Issu de la SSC qui a générée la ligne de facture Issu de la SSC qui a générée la ligne de facture - -
118 DN Code MSC SSC Issu de la SSC qui a générée la ligne de facture Issu de la SSC qui a générée la ligne de facture - -
119 DO Libellé MSC SSC Issu de la SSC qui a générée la ligne de facture Issu de la SSC qui a générée la ligne de facture - -
120 DP Code RFC SSC Issu de la SSC qui a générée la ligne de facture Issu de la SSC qui a générée la ligne de facture - -
121 DQ Libellé RFC SSC Issu de la SSC qui a générée la ligne de facture Issu de la SSC qui a générée la ligne de facture - -
122 DR Bien facturé Bien facturé Liste des matricules qui font l'objet de la
facturation (séparé par ",")
Bien qui a fait l'objet de la facturation, Pour RFC avec conso :
une ligne par compteur, Pour RFC sans conso : une ligne par
bien - Liste matricules des biens livrés (séparé par
",")
123 DS Code modèle bien facturé Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
124 DT Marque bien facturé Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
125 DU Libéllé marque bien
facturé Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
126 DV Activité Bien facturé Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
127 DW Libellé activité Bien
facturé Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
128 DX Famille Bien facturé Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
129 DY Libellé famille Bien facturé Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
130 DZ Sous-famille Bien facturé Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
131 EA Libellé sous-famille Bien
facturé Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
132 EB Code grandeur Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
133 EC Nom grandeur Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
134 ED Valeur grandeur Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
135 EE Origine valeur Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
136 EF Code source valeur Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
137 EG Source valeur Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
138 EH VMM Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
139 EI Origine VMM Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
140 EJ Statut commercial Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
141 EK Statut logistique Bien facturé
► Liste des matricules qui font l'objet de la
facturation (séparé par ",")
► Si "Bien facturé, Matricule" a un seul matricule,
les infos sont complétés sinon Aucune information
disponible
►Bien qui a fait l'objet de la facturation, Pour RFC avec
conso : une ligne par compteur, Pour RFC sans conso : une
ligne par bien
►Infos du matricule du bien qui a fait l'objet de la
facturation
- Liste matricules des biens livrés (séparé par
",")
142 EL Créateur Livraison BL - - - Entête BL
143 EM Livraison créée le BL - - - Entête BL
144 EN Modificateur Livraison BL - - - Entête BL
145 EO Livraison modifiée le BL - - - Entête BL
146 EP Créateur Facture Facture Entête de facture Entête de facture Entête de facture Entête de facture
147 EQ Facture créée le Facture Entête de facture Entête de facture Entête de facture Entête de facture
148 ER Modificateur Facture Facture Entête de facture Entête de facture Entête de facture Entête de facture
149 ES Facture modifiée le Facture Entête de facture Entête de facture Entête de facture Entête de facture
150 ET AGENCES OMR Client livré Client livré Classif du client contractant de la SSC Classif du  client contractant de la SSC Classif du client du CRIT Classif du client du BL
151 EU ALERTES CLIENTS Client
livré Client livré Classif du client contractant de la SSC Classif du  client contractant de la SSC Classif du client du CRIT Classif du client du BL
152 EV CATEGORIES CLIENTS Client
livré Client livré Classif du client contractant de la SSC Classif du  client contractant de la SSC Classif du client du CRIT Classif du client du BL
153 EW TYPE DE CLIENT Client livré Client livré Classif du client contractant de la SSC Classif du  client contractant de la SSC Classif du client du CRIT Classif du client du BL
154 EX FIDELISATION Client livré Client livré Classif du client contractant de la SSC Classif du  client contractant de la SSC Classif du client du CRIT Classif du client du BL
155 EY FILIERE CLIENTS Client livré Client livré Classif du client contractant de la SSC Classif du  client contractant de la SSC Classif du client du CRIT Classif du client du BL
156 EZ
Client à exclure de la
facturation conso (SSC non
signée) Client livré
Client livré Classif du client contractant de la SSC Classif du  client contractant de la SSC Classif du client du CRIT Classif du client du BL
157 FA Origine Client Client livré Client livré Classif du client contractant de la SSC Classif du  client contractant de la SSC Classif du client du CRIT Classif du client du BL
158 FB AGENCES  BS+ Client livré Client livré Classif du client contractant de la SSC Classif du  client contractant de la SSC Classif du client du CRIT Classif du client du BL
159 FC
Autoriser les commandes
globales de
consommables Client livré
Client livré Classif du client contractant de la SSC Classif du  client contractant de la SSC Classif du client du CRIT Classif du client du BL
160 FD
Adresse privilégiée pour
consommables Site de
livraison
Site livré Classif du site principale du client contractant de
la SSC Classif du site du bien qui a fait l'objet de la facturation Classif du site du CRIT (si présence d'un bien,
souvent c'est le site du bien) Classif du site livré de la ligne du BL
161 FE
Demande de relevés de
compteurs Site Site de
livraison
Site livré Classif du site principale du client contractant de
la SSC Classif du site du bien qui a fait l'objet de la facturation Classif du site du CRIT (si présence d'un bien,
souvent c'est le site du bien) Classif du site livré de la ligne du BL
162 FF AGENCE SITE Site de
livraison Site livré Classif du site principale du client contractant de
la SSC Classif du site du bien qui a fait l'objet de la facturation Classif du site du CRIT (si présence d'un bien,
souvent c'est le site du bien) Classif du site livré de la ligne du BL
163 FG AGENCES OMR Client
facturé Client facturé Classif du client de la facture (client contractant de
la SSC ou client de la RFC)
Classif du client de la facture (client contractant de la SSC ou
client de la RFC) Classif du client de la facture (issu du CRIT) Classif du client de la facture (issu du BL)
164 FH ALERTES CLIENTS Client
facturé Client facturé Classif du client de la facture (client contractant de
la SSC ou client de la RFC)
Classif du client de la facture (client contractant de la SSC ou
client de la RFC) Classif du client de la facture (issu du CRIT) Classif du client de la facture (issu du BL)
165 FI CATEGORIES CLIENTS Client
facturé Client facturé Classif du client de la facture (client contractant de
la SSC ou client de la RFC)
Classif du client de la facture (client contractant de la SSC ou
client de la RFC) Classif du client de la facture (issu du CRIT) Classif du client de la facture (issu du BL)
166 FJ TYPE DE CLIENT Client
facturé Client facturé Classif du client de la facture (client contractant de
la SSC ou client de la RFC)
Classif du client de la facture (client contractant de la SSC ou
client de la RFC) Classif du client de la facture (issu du CRIT) Classif du client de la facture (issu du BL)
167 FK FIDELISATION Client
facturé Client facturé Classif du client de la facture (client contractant de
la SSC ou client de la RFC)
Classif du client de la facture (client contractant de la SSC ou
client de la RFC) Classif du client de la facture (issu du CRIT) Classif du client de la facture (issu du BL)
168 FL FILIERE CLIENTS Client
facturé Client facturé Classif du client de la facture (client contractant de
la SSC ou client de la RFC)
Classif du client de la facture (client contractant de la SSC ou
client de la RFC) Classif du client de la facture (issu du CRIT) Classif du client de la facture (issu du BL)
169 FM
Client à exclure de la
facturation conso (SSC non
signée) Client facturé
Client facturé Classif du client de la facture (client contractant de
la SSC ou client de la RFC)
Classif du client de la facture (client contractant de la SSC ou
client de la RFC) Classif du client de la facture (issu du CRIT) Classif du client de la facture (issu du BL)
170 FN Origine Client Client
facturé Client facturé Classif du client de la facture (client contractant de
la SSC ou client de la RFC)
Classif du client de la facture (client contractant de la SSC ou
client de la RFC) Classif du client de la facture (issu du CRIT) Classif du client de la facture (issu du BL)
171 FO AGENCES  BS+ Client
facturé Client facturé Classif du client de la facture (client contractant de
la SSC ou client de la RFC)
Classif du client de la facture (client contractant de la SSC ou
client de la RFC) Classif du client de la facture (issu du CRIT) Classif du client de la facture (issu du BL)
172 FP
Autoriser les commandes
globales de
consommables Client
facturé
Client facturé Classif du client de la facture (client contractant de
la SSC ou client de la RFC)
Classif du client de la facture (client contractant de la SSC ou
client de la RFC) Classif du client de la facture (issu du CRIT) Classif du client de la facture (issu du BL)
173 FQ
Adresse privilégiée pour
consommables Site de
facturation
Site facturé Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture)
174 FR
Demande de relevés de
compteurs Site Site de
facturation
Site facturé Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture)
175 FS AGENCE SITE Site de
facturation Site facturé Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture)
176 FT Couverture contractuelle
d'articles Article Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture
177 FU Prestation et nature de
DIT Article Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture
178 FV A3-A4 Article Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture
179 FW Métier CRM Article Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture
180 FX COMPTES COMPTABLES Article Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture
181 FY
Couverture contractuelle
d'articles modèle bien
destination
Bien de
destination - - Classif du bien pour lequel l'article est destiné
(PD & Conso)
Classif du bien pour lequel l'article est destiné
(PD & Conso)
182 FZ
Prestation et nature de
DIT modèle bien
destination
Bien de
destination - - Classif du bien pour lequel l'article est destiné
(PD & Conso)
Classif du bien pour lequel l'article est destiné
(PD & Conso)
183 GA A3-A4 modèle bien
destination
Bien de
destination - - Classif du bien pour lequel l'article est destiné
(PD & Conso)
Classif du bien pour lequel l'article est destiné
(PD & Conso)
184 GB Métier CRM modèle bien
destination
Bien de
destination - - Classif du bien pour lequel l'article est destiné
(PD & Conso)
Classif du bien pour lequel l'article est destiné
(PD & Conso)
185 GC
Couverture contractuelle
d'articles modèle bien
facturé
Bien facturé Si un bien : Classif du bien facturé, sinon Rien Classif du bien facturé - Si un bien : Classif du bien facturé, sinon Rien
186 GD Prestation et nature de
DIT modèle bien facturé Bien facturé Si un bien : Classif du bien facturé, sinon Rien Classif du bien facturé - Si un bien : Classif du bien facturé, sinon Rien
187 GE A3-A4 modèle bien facturé Bien facturé Si un bien : Classif du bien facturé, sinon Rien Classif du bien facturé - Si un bien : Classif du bien facturé, sinon Rien
188 GF Métier CRM modèle bien
facturé Bien facturé Si un bien : Classif du bien facturé, sinon Rien Classif du bien facturé - Si un bien : Classif du bien facturé, sinon Rien
189 GG Qualif de vente
(classement) Affaire - - - Classif de l'affaire
190 GH Origine affaire (type) Affaire - - - Classif de l'affaire
191 GI Nature de la vente
commande client Cmde - - - Classif de la commande
192 GJ Complément Solution Cmde - - - Classif de la commande
193 GK Origine des avoirs - bis Facture Classif de la facture Classif de la facture Classif de la facture Classif de la facture
Colonnes dépendant du paramétrage
de ARTIS.net
Colonnes sans intérêt pour le type de
document
Détails des colonnes pour avoir SSC, CRIT, VENTE et facture directe
DÉTAILS DES COLONNES POUR AVOIR SSC, CRIT, VENTE ET
FACTURE DIRECTE
Position Position
lettrée
Label de la
colonne Type AVOIR sur facture de CRIT AVOIR sur Facture de vente Facture et Avoir "direct"
1 A Origine Facture Avoir Avoir Vente directe
2 B Mois-année livraison BL -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
3 C Date Livraison BL -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
4 D N° BL BL -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
5 E Etat BL BL -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
6 F Mois-année facture Facture Entête de facture Entête de facture Entête de facture
7 G Date facture Facture Entête de facture Entête de facture Entête de facture
8 H N° Facture Facture Entête de facture Entête de facture Entête de facture
9 I N° ligne facture Facture Information de la Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
10 J Etat facture Facture Entête de facture Entête de facture Entête de facture
11 K N° CRIT CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
- -
12 L Etat DIT DIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
- -
13 M Type article Article Information de la Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
14 N Code art. Article Information de la Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
15 O Désignation Article Information de la Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
16 P Libellé art. Article Information de la Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
17 Q Qté commandée Lgn fact. Information de la Ligne de facture
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
18 R Qté livrée Lgn fact. Information de la Ligne de facture
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
19 S Qté facturée Lgn fact. Information de la Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
20 T PU HT facturé Lgn fact. Information de la Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
21 U Total HT facturé Lgn fact. Information de la Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
22 V Total HT de la facture Lgn fact. Information de la Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
23 W Quantité revient Lgn fact. Information de la Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
24 X Coût de revient unitaire Lgn fact. Information de la Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
25 Y Total coût de revient Lgn fact. Information de la Ligne de facture Information de la Ligne de facture Information de la Ligne de facture
26 Z Marge Lgn fact. Marge = Total HT - Total coût de revient Marge = Total HT - Total coût de revient Marge = Total HT - Total coût de revient
27 AA Valorisation du stock Lgn fact. Si option "Valorisation stock" cochée Si option "Valorisation stock" cochée Si option "Valorisation stock" cochée
28 AB Vendeur Lgn fact. - Ligne de facture : Vendeur Ligne de facture : Vendeur
29 AC Unité org.1 vendeur Lgn fact. Ligne de facture UO du Vendeur UO du Vendeur
30 AD Unité org.2 vendeur Lgn fact. Ligne de facture UO de l'UO UO de l'UO
31 AE Gestionnaire Cmde -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
32 AF Intervenant CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
- -
33 AG Date commande Cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
34 AH N° commande Cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
35 AI Etat commande Cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
36 AJ Code Client commande Cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
37 AK Raison sociale Client
commande Cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
38 AL Client commande adresse
1 Client de cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
39 AM Client commande adresse
2 Client de cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
40 AN Client commande adresse
3 Client de cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
41 AO Client commande CP Client de cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
42 AP Client commande ville Client de cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
43 AQ Client commande Tél 1 Client de cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
44 AR Client commande Fax Client de cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
45 AS Client commande Mail Client de cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
46 AT Code org. dépôt
commande Client de cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
47 AU Nom org. dépôt
commande Client de cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
48 AV Code dépôt commande Client de cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
49 AW Libellé dépôt commande Client de cmde
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
50 AX Code Client livré Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
51 AY Raison sociale Client livré Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
52 AZ Client livré adresse 1 Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
53 BA Client livré adresse 2 Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
54 BB Client livré adresse 3 Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
55 BC Client livré CP Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
56 BD Client livré ville Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
57 BE Client livré Tél 1 Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
58 BF Client livré Fax Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
59 BG Client livré Mail Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
60 BH Nom Site de livraison Site livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
61 BI Site de livraison adresse 1 Site livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
62 BJ Site de livraison adresse 2 Site livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
63 BK Site de livraison adresse 3 Site livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
64 BL Site de livraison CP Site livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
65 BM Site de livraison ville Site livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
66 BN Site de livraison Tél 1 Site livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
67 BO Site de livraison Fax Site livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
68 BP Site de livraison Mail Site livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
69 BQ Code org. dépôt livraison BL Information de la ligne de facture pour les
articles suivi en stock
Information de la ligne de facture pour les
articles suivi en stock
Information de la ligne de facture pour les
articles suivi en stock
70 BR Nom org. dépôt livraison BL Information de la ligne de facture pour les
articles suivi en stock
Information de la ligne de facture pour les
articles suivi en stock
Information de la ligne de facture pour les
articles suivi en stock
71 BS Code dépôt livraison BL Information de la ligne de facture pour les
articles suivi en stock
Information de la ligne de facture pour les
articles suivi en stock
Information de la ligne de facture pour les
articles suivi en stock
72 BT Libellé dépôt livraison BL Information de la ligne de facture pour les
articles suivi en stock
Information de la ligne de facture pour les
articles suivi en stock
Information de la ligne de facture pour les
articles suivi en stock
73 BU Date d'intervention CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
- -
74 BV Code Client facturé Client facturé Client de la facture (issu du CRIT) Client de la facture Client de la facture
75 BW Raison sociale Client
facturé Client facturé Client de la facture (issu du CRIT) Client de la facture Client de la facture
76 BX Client facturé adresse 1 Site facturé Site facturé (ligne de facture) Client de la facture Client de la facture
77 BY Client facturé adresse 2 Site facturé Site facturé (ligne de facture) Client de la facture Client de la facture
78 BZ Client facturé adresse 3 Site facturé Site facturé (ligne de facture) Client de la facture Client de la facture
79 CA Client facturé CP Site facturé Site facturé (ligne de facture) Client de la facture Client de la facture
80 CB Client facturé ville Site facturé Site facturé (ligne de facture) Client de la facture Client de la facture
81 CC Client facturé Tél 1 Site facturé Site facturé (ligne de facture) Client de la facture Client de la facture
82 CD Client facturé Fax Site facturé Site facturé (ligne de facture) Client de la facture Client de la facture
83 CE Client facturé Fax Site facturé Site facturé (ligne de facture) Client de la facture Client de la facture
84 CF Facture directe Facture Entête de facture Entête de facture Entête de facture
85 CG N° externe facture Facture Entête de facture Entête de facture Entête de facture
86 CH Mode de règlement Facture Entête de facture Entête de facture Entête de facture
87 CI Org. interne Facture Entête de facture Entête de facture Entête de facture
88 CJ Raison sociale
organisation interne Facture Entête de facture Entête de facture Entête de facture
89 CK Passé en compta Facture Entête de facture Entête de facture Entête de facture
90 CL N° affaire Affaire -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
91 CM N° rachat Rachat -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
92 CN Montant du rachat / CA Rachat -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
93 CO Montant du rachat / CR Rachat -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
94 CP Montant reprise Rachat -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
95 CQ Montant argus Rachat -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
96 CR Montant ajustement / CA Facture -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
97 CS Montant ajustement / CR Facture -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
98 CT Activité art. vendu Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
99 CU Libellé activité art. vendu Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
100 CV Famille art. vendu Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
101 CW Libellé famille art. vendu Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
102 CX Sous-famille art. vendu Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
103 CY Libellé sous-famille art.
vendu Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
104 CZ Marque article Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
105 DA Libellé marque article Article Article de la Ligne de facture Article de la Ligne de facture Article de la Ligne de facture
106 DB Bien de destination Bien de
destination
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
107 DC Code modèle bien
destination
Bien de
destination
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
108 DD Activité Bien de
destination
Bien de
destination
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
109 DE Libellé activité Bien de
destination
Bien de
destination
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
110 DF Famille Bien de
destination
Bien de
destination
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
111 DG Libellé famille Bien de
destination
Bien de
destination
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
112 DH Sous-famille Bien de
destination
Bien de
destination
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
113 DI Libellé sous-famille Bien
de destination
Bien de
destination
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
114 DJ Marque bien de
destination
Bien de
destination
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
115 DK Libéllé marque bien de
destination
Bien de
destination
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
116 DL N° SSC SSC - - -
117 DM Libellé SSC SSC - - -
118 DN Code MSC SSC - - -
119 DO Libellé MSC SSC - - -
120 DP Code RFC SSC - - -
121 DQ Libellé RFC SSC - - -
122 DR Bien facturé Bien facturé - Liste matricules des biens livrés (séparé par
",") -
123 DS Code modèle bien facturé Bien facturé - Liste matricules des biens livrés (séparé par
",") -
124 DT Marque bien facturé Bien facturé - Liste matricules des biens livrés (séparé par
",") -
125 DU Libellé marque bien
facturé Bien facturé - Liste matricules des biens livrés (séparé par
",") -
126 DV Activité Bien facturé Bien facturé - Liste matricules des biens livrés (séparé par
",") -
127 DW Libellé activité Bien
facturé Bien facturé - Liste matricules des biens livrés (séparé par
",") -
128 DX Famille Bien facturé Bien facturé - Liste matricules des biens livrés (séparé par
",") -
129 DY Libellé famille Bien facturé Bien facturé - Liste matricules des biens livrés (séparé par
",") -
130 DZ Sous-famille Bien facturé Bien facturé - Liste matricules des biens livrés (séparé par
",") -
131 EA Libellé sous-famille Bien
facturé Bien facturé - Liste matricules des biens livrés (séparé par
",") -
132 EB Code grandeur Bien facturé - Liste matricules des biens livrés (séparé par
",") -
133 EC Nom grandeur Bien facturé - Liste matricules des biens livrés (séparé par
",") -
134 ED Valeur grandeur Bien facturé - Liste matricules des biens livrés (séparé par
",") -
135 EE Origine valeur Bien facturé - Liste matricules des biens livrés (séparé par
",") -
136 EF Code source valeur Bien facturé - Liste matricules des biens livrés (séparé par
",") -
137 EG Source valeur Bien facturé - Liste matricules des biens livrés (séparé par
",") -
138 EH VMM Bien facturé - Liste matricules des biens livrés (séparé par
",") -
139 EI Origine VMM Bien facturé - Liste matricules des biens livrés (séparé par
",") -
140 EJ Statut commercial Bien facturé - Liste matricules des biens livrés (séparé par
",") -
141 EK Statut logistique Bien facturé - Liste matricules des biens livrés (séparé par
",") -
142 EL Créateur Livraison BL -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
143 EM Livraison créée le BL -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
144 EN Modificateur Livraison BL -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
145 EO Livraison modifiée le BL -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
146 EP Créateur Facture Facture Entête de facture Entête de facture Entête de facture
147 EQ Facture créée le Facture Entête de facture Entête de facture Entête de facture
148 ER Modificateur Facture Facture Entête de facture Entête de facture Entête de facture
149 ES Facture modifiée le Facture Entête de facture Entête de facture Entête de facture
150 ET AGENCES OMR Client livré Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
151 EU ALERTES CLIENTS Client
livré Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
152 EV CATEGORIES CLIENTS Client
livré Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
153 EW TYPE DE CLIENT Client livré Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
154 EX FIDELISATION Client livré Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
155 EY FILIERE CLIENTS Client livré Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
156 EZ
Client à exclure de la
facturation conso (SSC non
signée) Client livré
Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
157 FA Origine Client Client livré Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
158 FB AGENCES  BS+ Client livré Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
159 FC
Autoriser les commandes
globales de
consommables Client livré
Client livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
160 FD
Adresse privilégiée pour
consommables Site de
livraison
Site livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
161 FE
Demande de relevés de
compteurs Site Site de
livraison
Site livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
162 FF AGENCE SITE Site de
livraison Site livré
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
163 FG AGENCES OMR Client
facturé Client facturé Classif du client de la facture (issu du CRIT) Classif du client de la facture Classif du client de la facture
164 FH ALERTES CLIENTS Client
facturé Client facturé Classif du client de la facture (issu du CRIT) Classif du client de la facture Classif du client de la facture
165 FI CATEGORIES CLIENTS Client
facturé Client facturé Classif du client de la facture (issu du CRIT) Classif du client de la facture Classif du client de la facture
166 FJ TYPE DE CLIENT Client
facturé Client facturé Classif du client de la facture (issu du CRIT) Classif du client de la facture Classif du client de la facture
167 FK FIDELISATION Client
facturé Client facturé Classif du client de la facture (issu du CRIT) Classif du client de la facture Classif du client de la facture
168 FL FILIERE CLIENTS Client
facturé Client facturé Classif du client de la facture (issu du CRIT) Classif du client de la facture Classif du client de la facture
169 FM
Client à exclure de la
facturation conso (SSC non
signée) Client facturé
Client facturé Classif du client de la facture (issu du CRIT) Classif du client de la facture Classif du client de la facture
170 FN Origine Client Client
facturé Client facturé Classif du client de la facture (issu du CRIT) Classif du client de la facture Classif du client de la facture
171 FO AGENCES  BS+ Client
facturé Client facturé Classif du client de la facture (issu du CRIT) Classif du client de la facture Classif du client de la facture
172 FP
Autoriser les commandes
globales de
consommables Client
facturé
Client facturé Classif du client de la facture (issu du CRIT) Classif du client de la facture Classif du client de la facture
173 FQ
Adresse privilégiée pour
consommables Site de
facturation
Site facturé Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture)
174 FR
Demande de relevés de
compteurs Site Site de
facturation
Site facturé Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture)
175 FS AGENCE SITE Site de
facturation Site facturé Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture) Classif du site facturé (ligne de facture)
176 FT Couverture contractuelle
d'articles Article Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture
177 FU Prestation et nature de
DIT Article Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture
178 FV A3-A4 Article Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture
179 FW Métier CRM Article Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture
180 FX COMPTES COMPTABLES Article Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture Classif de l'article de la Ligne de facture
181 FY
Couverture contractuelle
d'articles modèle bien
destination
Bien de
destination
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
182 FZ
Prestation et nature de
DIT modèle bien
destination
Bien de
destination
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
183 GA A3-A4 modèle bien
destination
Bien de
destination
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
184 GB Métier CRM modèle bien
destination
Bien de
destination
-
Même si l'avoir est issu d'une facture issue
elle-même d'un CRIT
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
185 GC
Couverture contractuelle
d'articles modèle bien
facturé
Bien facturé - Si un bien : Classif du bien facturé, sinon Rien -
186 GD Prestation et nature de
DIT modèle bien facturé Bien facturé - Si un bien : Classif du bien facturé, sinon Rien -
187 GE A3-A4 modèle bien facturé Bien facturé - Si un bien : Classif du bien facturé, sinon Rien -
188 GF Métier CRM modèle bien
facturé Bien facturé - Si un bien : Classif du bien facturé, sinon Rien -
189 GG Qualif de vente
(classement) Affaire -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
190 GH Origine affaire (type) Affaire -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
191 GI Nature de la vente
commande client Cmde -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
192 GJ Complément Solution Cmde -
-
Même si l'avoir est issu d'une facture issue
elle-même d'un BL
-
193 GK Origine des avoirs - bis Facture Classif de la facture Classif de la facture Classif de la facture

Colonnes dépendant du paramétrage
de ARTIS.net
Colonnes sans intérêt pour le type de
document
CA par Organisation interne
CA PAR ORGANISATION INTERNE
Ventes / Statistiques de ventes / Extraire l'état des ventes, livraisons et marges
Cette requête permet d'obtenir sur un seul état l'ensemble des lignes ayant engendré un chiffre
d'affaires ou une charge sur une période.
o Type d'analyse : prendre "Vente"
o Dans la période d'analyse : mettre le mois concerné
o <F2>
ARTIS renvoie toutes les lignes de facture.
Tableau de synthèse : CA par organisation interne
1. A la suite de l'étape précédente  cliquer sur "Tableau de synthèse"
2. Ensuite :
§ Soit le tableau de synthèse existe :
1. Faire <Entrée> dans la zone "Nom de la configuration"
2. Puis sélectionner
§ Soit le tableau n'existe pas, le créer :
3. Dans le tableau "Critères de regroupement" :
o <Trombone> puis sélectionner "Raison sociale organisation interne"
puis <Disquette>
o <Trombone> puis sélectionner "Org. interne" puis <Disquette>
4. Dans le tableau "Colonnes de résultats"
o <Trombone> puis sélectionner "Total HT facturé" puis <Disquette>
5. Cocher l'option "Calculer les sous-totaux"
6. Donner un nom dans la zone "Nom de la configuration"
7. Puis cliquer sur "Enregistrer", à droite
3. <F2>
4. Le résultat apparaît
A la suite, le tableau est exportable sous Excel avec
Tableau de synthèse : CA par organisation interne, Agence et client
1. A la suite de l'étape précédente  cliquer sur "Tableau de synthèse"
2. Ensuite :
§ Soit le tableau de synthèse existe :
1. Faire <Entrée> dans la zone "Nom de la configuration"
2. Puis sélectionner
§ Soit le tableau n'existe pas, le créer :
3. Dans le tableau "Critères de regroupement" :
o <Trombone> puis sélectionner "Org. interne" puis <Disquette>
o <Trombone> puis sélectionner "AGENCES Client facturé" puis
<Disquette>
o <Trombone> puis sélectionner "Raison sociale Client facturé puis
<Disquette>
4. Dans le tableau "Colonnes de résultats"
o <Trombone> puis sélectionner "Total HT facturé" puis <Disquette>
5. Cocher l'option "Calculer les sous-totaux"
6. Donner un nom dans la zone "Nom de la configuration"
7. Puis cliquer sur "Enregistrer", à droite
3. <F2>
4. Le résultat apparaît
A la suite, le tableau est exportable sous Excel avec
CA récurrent SSC par article sur une période
CA RÉCURRENT SSC PAR ARTICLE SUR UNE PÉRIODE
Analyse du nombre de copies facturée
Ventes / Statistiques de Vente / Extraire l'état des ventes, livraisons ou marges
o Type d'analyse : prendre "Vente"
o Origine : SSC
o Dans la période d'analyse : mettre la période concernée
o <F2>
ARTIS renvoie toutes les lignes de facture.
Tableau de synthèse : CA par organisation interne
1. A la suite de l'étape précédente  cliquer sur "Tableau de synthèse"
2. Ensuite :
§ Soit le tableau de synthèse existe :
1. Faire <Entrée> dans la zone "Nom de la configuration"
2. Puis sélectionner
§ Soit le tableau n'existe pas, le créer :
3. Dans le tableau "Critères de regroupement" :
o <Trombone> puis sélectionner "Code article" puis <Disquette>
o <Trombone> puis sélectionner "Libellé article" puis <Disquette>
4. Dans le tableau "Colonnes de résultats", faire <Trombone> pour chaque
colonne à sélectionner :
o Quantité facturé (Somme)
o PU HT facturé (Moyenne)
o Total HT facturé (Moyenne)
o Total HT facturé (Somme)
