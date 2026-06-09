# Affaires

> Categorie: Affaires et Financements | Pages 696-722

## Sous-rubriques
- Affaires et Financements (p.696)
- Généralités et Théorie (p.696)
- Gérer les affaires (p.697)
- Suivre les commandes et les affaires (p.699)
- Consulter les budgets de dérogation (p.701)
- Interroger les articles d'ajustement dans les affaires (p.701)
- Extraire les affaires (p.703)
- Particularités (p.709)
-   Composition d'une affaire (p.709)
-   Lister les commandes sans affaires (p.710)
-   Mettre en place une classification (p.710)
-   Paramétrage lié aux affaires (p.712)
-   Valider, dé valider une affaire (p.713)
-   Gérer les Matelas et dérogation (p.714)
-     Gérer les matelas (p.714)
-     Gérer les dérogations (p.720)

Rechercher la Table de décision "TD_ActiviteAnalytiqueV2".
Numéro Activité Famille Sous-famille Code activité
1 0 * * 01
2 1 * * 01
... ... ... ... ...
16 [A-E] 8 * 08
17 P C 001 05
18 P [ACD] * 09
19 P B FRAISFACT 01
28 C 2 053 25
... ... ... ... ...
30 E 2 050|052|053|055 25
Pour la gestion d'une table de décision, voir Critère dans les tables de décision
Activité analytique
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
Cette table de décision permet le contrôle de la clé flexible.
Rechercher la Table de décision "TD_ActiviteAnalytiqueV2".
Numéro Numéro de compte comptable Type organisation Region Division Product groupe Product type Sales Channel Related company Free

Pour la gestion d'une table de décision, voir Critère dans les tables de décision
Affaires et Financements
Affaires
Généralités et Théorie
GÉNÉRALITÉ, THÉORIE SUR LES AFFAIRES ET
FINANCEMENTS
Objectif
La gestion des affaires a pour objectif essentiel, la prise en compte de tous les éléments d'un
dossier de vente, afin d'établir une préparation au calcul des commissions des vendeurs :
o En déterminant un chiffre d'affaires commercial (CA COM)
o En prenant en compte différents coûts de revient
o En déterminant une marge commerciale
Le chiffre d'affaires commercial est souvent différent du chiffre d'affaires comptable.
Le chiffre d'affaires comptable correspond au montant des factures, qui seront interfacées en
comptabilité. Tandis que le chiffre d'affaires commercial inclut le chiffre d'affaires comptable, ajouté
de montants (positifs ou négatifs) correspondant à des éléments liés à la vente elle-même.
Affaire et rachat de dossier
Lors d'une vente d'un matériel remplaçant un matériel déjà en place qui a fait l'objet d'un
financement non terminé, alors le solde de dossier de financement est pris en compte dans cette
nouvelle vente. Ce solde est aussi nommé « Dossier de rachat ».
Il existe deux méthodes dans ARTIS.NET pour prendre en compte les dossiers de rachat dans le
chaînage des ventes :
o La gestion des dossiers de rachat/reprise n'est pas activée. Les rachats de dossier sont alors
enregistrés dans les commandes client à l'aide des types de ligne « Ajustement ». Veuillez
consulter le point « Article d'ajustement ».
o La gestion des dossiers de rachat/reprise est activée.
Synoptique des traitements
Voici une vidéo montrant l'organisation des affaires sur les commandes, incluant les dossiers de
financement, de rachat/reprise, les DIT liées aux lignes de commande.
Gérer les affaires
GÉRER LES AFFAIRES
Cas pratique
Pour créer un dossier de vente complet, il faut :
1. Créer une commande,
2. Créer une affaire et la lier à cette commande,
3. Créer les commandes suivantes et les lier à cette affaire.
Créer une affaire
Créer une affaire à partir d'une commande client
Ventes / Commandes Clients / Gérer les commandes clients
1. Saisir la commande,
1. Insérer des articles dits "articles commandés",
La marge est calculé en faisant la différence entre prix de vente et coût de revient,
consulter Comment est valorisé le coût de revient,
2. Insérer des articles dits "articles de facturation",
La marge est égale au prix de vente (pas de coût de revient),
3. Insérer des articles dits "articles d'ajustement",
Selon le choix "CA Com" ou "Coût", la marge est positive ou négative,
Dans le cas où la la gestion des dossiers de rachat/reprise n'est pas activée, le
montant du solde du rachat de dossier est géré par un article d'ajustement,
consulter Créer un article d'ajustement,
2. Cliquer sur le lien « Affaire »,
3. Les informations de la commande sont reprises pour compléter les informations de l'affaire,
4. <Disquette>,
5. Le numéro de l'affaire est reporté dans la zone "Affaire" de la commande.
Créer une affaire à partir de la gestion des affaires
Affaires et Financements / Affaires / Gérer les affaires
1. <+>,
2. Choisir le client,
3. Sélectionner le prestataire (organisation interne),
4. Saisir la date,
5. Renseigner le vendeur,
6. <Disquette>
7. L'affaire est créée, existe mais sans commande.
Affecter une commande client à une affaire
Affecter une commande à une affaire depuis la commande
1. Saisir puis l'afficher la commande (visualisation globale),
2. <Crayon>,
3. <Loupe> dans la zone "Affaire", puis sélectionner
4. Le numéro de l'affaire est reporté dans la zone "Affaire" de la commande,
5. <Disquette>.
Affecter une commande à une affaire depuis l'affaire
1. Afficher l'affaire,
2. Cliquer sur l'icône Grille, puis sur "Rattacher commande",
3. <Flèche bouton vert>, sélectionner, <Disquette>,
4. La commande est rattachée à l'affaire.
Supprimer une commande affectée à une affaire
1. Afficher l'affaire,
2. Sélectionner la ou les commandes,
3. Cliquer sur l'icône Grille, puis sur "Détacher commande",
4. La ou les commandes sont détachées de l'affaire.
Information complémentaire
Voir Composition d'une affaire
Suivre les commandes et les affaires
SUIVRE LES COMMANDES ET LES AFFAIRES
Cet option permet de suivre l'état d'avancement des commandes liées ou non à des affaires, avec
des prestations qui ont donner lieu à la génération de DIT. L'état d'avancement de ces DIT est
mentionnés à l'écran.
Il est possible de suivre plus particulièrement :
o Une affaire,
o Une commande,
o Un client,
o Un gestionnaire,
o Un vendeur,
Sur une période donnée sur les commandes, les livraisons, les validations d'affaires.
Il faut pouvoir consulter la liste des affaires dont toutes les commandes sont livrables en totalité afin
de préparer la livraison.
Remarque
Pour la mise en place des DITs de prestation à partir des commandes, voir Lien DIT - Prestation
commande.
Critères de sélection
État de livraison de l'affaire
o Affaire livrable en totalité
Affiche toutes les affaires dont les commandes sont dans l'état "livrable en totalité".
o Affaire livrable partiellement
Affiche toutes les affaires dont au moins une commande est "livrable en totalité".
o Affaire avec commande livrable en totalité
Affiche toutes les affaires dont au moins une commande est "livrable partiellement".
Présence d'une affaire
Permet d'afficher toutes les commandes avec une affaire. Cette recherche correspond aux
commandes de négoce, avec valeur ajoutée.
Présence d'un bien
o Bien maître
Permet d'afficher les commandes dont au moins une des lignes a un article déclaré comme
bien maître (article pouvant avoir des accessoires). Cette recherche correspond aux
commandes de l'activité Impression.
o Sans bien maître
Cette recherche correspond aux commandes de l'activité Informatique, par exemple.
État du suivi
o En-cours
Les commandes en-cours, livrées partiellement avec au moins une DIT non clôturée.
o Terminé
Les commandes livrées en totalité avec toutes les DIT clôturées.
Informations affichées
Des actions sont possibles dans le tableau : consulter les commentaires. Les informations à
disposition sont :
Position Label de la colonne Format Commentaire
1 Affaire Texte Accès  pos s ible aux détails  en cliquant des s us
2 Etat Cmde Texte Livrable en totalité, Livré partiellement, Livré
en totalité
3 Etat fact. Texte Non facturable, Facturable, Facturé en totalité
4 Commande Texte Accès  pos s ible aux détails  en cliquant des s us
5 Date livrais on Texte
6 Code client Texte Accès  pos s ible aux détails  en cliquant des s us
7 Nom client livré, Nom du
s ite Texte Accès  pos s ible aux détails  en cliquant des s us
8 Ville client livré Texte
9 Marque Texte
10 Modèle Texte
11 Trans porteur Texte L'utilis ateur a la pos s ibilité de pos itionner un
trans porteur, en utilis ant la loupe
12 Org.int. Texte
13 Ges tionnaire Texte
14 Vendeur Texte
15 Détail Texte
Donne lieu à un récapitulatif des  CRIT de la DIT
: tableau complémentaire affiché des s ous  ce
même tableau
16 Etat DIT Texte Non générée, Générée, Terminée
 Information répétée pour chaque pres tation
paramétrée
17 Date Préparation Texte Date de la DIT,
Accès  pos s ible aux détails  en cliquant des s us
Information répétée pour chaque pres tation
paramétrée
18 Problème Préparation Texte Début du rés umé du détail
Détail complet dans  l'infobulle
Information répétée pour chaque pres tation
paramétrée
19 Technicien Préparation Texte Accès  pos s ible aux détails  en cliquant des s us Information répétée pour chaque pres tation
paramétrée
20 Info DIT Préparation Texte Information répétée pour chaque pres tation
paramétrée
21 …
Détail des prestations d'une DIT
Après avoir cliquer sur "Détail", symbolisé par "...", les informations sont :
Position Label de la colonne Format Commentaire
1 Cmde. Texte Numéro de la commande
2 Article Texte Libellé de l'article (bien maître), le cas
échéant
3 Matricule Texte
4 Pres t. cmde. Texte Pres tation s ais ie dans  la commande qui
donne lieu à une DIT
5 Crit. Texte Numéro du CRIT
6 Pres t. crit. Texte Pres tation s ais ie dans  le CRIT par le
technicien
7 M.O. Numérique Fonction du paramétrage de la pres tation
8 Dépl. Numérique Fonction du paramétrage de la pres tation
Consulter les budgets de dérogation
CONSULTER LES BUDGETS DE DÉROGATION
Position Position
lettrée Label de la colonne Format Commentaire
1 A date  Ins tant
2 B affaire  Texte
3 C client  Texte
4 D rais on.s ocial.client  Texte
5 E unite  Texte
6 F collaborateur.matricule  Texte
7 G collaborateur.nom.prenom  Texte
8 H code.type  Texte
9 I libelle.type  Texte
10 J montant  Monétaire
11 K commentaire  Texte
Interroger les articles d'ajustement dans les affaires
INTERROGER LES ARTICLES D'AJUSTEMENT DANS LES
AFFAIRES
L'utilisateur peut avoir besoin de faire ressortir et de comptabiliser ces articles d'ajustements mis
dans les commandes, à des des fins de statistique.
Rappel
Les articles d'ajustement sont des articles qui sont insérées manuellement par l'utilisateur
(comptabilisation de promotion, de quantités, de coût...) ou automatiquement (comme l'article de
rachat lors de la gestion des dossiers de rachat/reprise).
Position Position
lettrée Label de la colonne Format Commentaire
1 A NumAffaire  Texte
2 B DateAffaire  Ins tant
3 C ClientAffaire  Texte
4 D NomClientAffaire  Texte
5 E NumCde  Texte
6 F EtatCde  Texte
7 G DateDeCde  Ins tant
8 H ClientCde  Texte
9 I NomClientCde  Texte
10 J DateSais ieCde  Ins tant
11 K Article  Texte
12 L LibelléCde  Texte
13 M LibelléArticle  Texte
14 N QteRevientCmde  Monétaire
15 O CoutRevientUnit  Monétaire
16 P AffecteCACom  Texte
17 Q Commentaire  Texte
18 R AffaireValidée  Texte
19 S DateValidationAffaire  Ins tant
20 T DateLivrais on  Ins tant
21 U VendeurCodeAffaire  Texte
22 V VendeurNomAffaire  Texte
23 W VendeurPrénomAffaire  Texte
24 X MatriculeGes t  Texte
25 Y Ges tNomAffaire  Texte
26 Z Ges tPrénomAffaire  Texte
27 AA CodeOI  Texte
28 AB OrgInterne  Texte
29 AC Ajus tement  Texte
Extraire les affaires
EXTRAIRE LES AFFAIRES
Affaires / Affaires / Extraire les Affaires
Remarque sur certains critères de sélection
Suivant les règles de gestion des affaires (propres à chaque société), plusieurs critères de sélection
sont disponibles.
o État de facturation (commande)
§ "Facturé en totalité" : sont retournées les affaires pour les commandes totalement
facturées (toutes les livraisons liées à la commande sont facturés),
o Liste des biens maîtres
§ Dans le tableau de résultats, une colonne (‘LGNCMDE_BIEN_MAITRE_LIB') contient
les biens maîtres. Pour l'alimenter, une liste est nécessaire, consulter Créer une liste.
o Informations sur les RFC
§ "Oui" : les informations sur les règles de facturation clients sont retournées.
Exemple de sélection
Commissionnement des affaires sur validation
Il faut utiliser :
o Les dates de validation de début, de fin,
o Le critère "Affaire validée" à "Oui".
Commissionnement des affaires sur commandes facturées
Il faut utiliser :
o Les dates de facture de début, de fin,
o Le critère "État de facturation des commandes". Cet état vérifie l'état de tous les bons de
livraison pour une commande.
Une commande peut générer des BL facturés ou des BL non facturables. Pour prendre en compte
tous les coûts de revient (lignes des articles facturés et lignes des articles des livraisons non
facturables), deux choix de traitement sont possibles :
1. Tout bon de livraison, y compris ceux à l'état « non facturable » fait l'objet d'une facture. Dans
ce cas, la valeur du critère « État de facturation » est « facturé totalement »
2. Dans le cas où les bons de livraison « non facturable » ne font pas l'objet de factures, la valeur
du critère « État de facturation » est « facturé totalement » et « non facturable »
Une affaire ayant plusieurs commandes peut faire l'objet d'un commissionnement sur plusieurs
mois.
Une commande ayant fait l'objet de plusieurs factures sera commissionné uniquement sur le mois
de la dernière facture créée.
Portefeuille d'affaires en-cours (en attente de validation)
Il faut utiliser :
o Le critère « Affaire validée ». Le critère est « Non ».
Cette extraction, après mise en forme, doit être vérifiée afin de vérifier la cohérence des
informations. Toute anomalie doit faire l'objet d'une correction dans ARTIS.NET.
Les affaires saisies
Il faut utiliser :
o Les dates d'affaire de début, de fin (en général : un mois donné).
Cette extraction, après mise en forme, doit être vérifiée afin de vérifier la cohérence des
informations. Toute anomalie doit faire l'objet d'une correction dans ARTIS.NET.
EXTRACTION
Position Position
lettrée Label de la colonne Format Commentaire Ligne de cmde
Article d'ajustement
Ligne de cmde
Autre article Un dossier de rachat = une ligne
Un bien dans le dossier dans le
dossier de rachat = une ligne
---
(présente si un bien est
dans le dossier de rachat)
1 A AFFAIRE_NUMERO_INTERNE  Texte Numéro de l'Affaire X X X X
2 B AFFAIRE_DATE  Instant Date de l'Affaire X X X X
3 C AFFAIRE_VALIDATION_DATE  Instant Date de validation de l'Affaire X X X X
4 D AFFAIRE_VALIDEE  Texte Oui ou Non X X X X
5 E AFFAIRE_COMMENTAIRE  Texte Commentaires de l'Affaire X X X X
6 F AFFAIRE_CLIENT_CODE  Texte Code du client sur l'Affaire X X X X
7 G AFFAIRE_CLIENT_NOM  Texte Nom du client sur l'Affaire X X X X
8 H AFFAIRE_GESTIONNAIRE_NOM  Texte Nom du nom du gestionnaire de l'Affaire X X X X
9 I AFFAIRE_GESTIONNAIRE_PRENOM  Texte Nom du prénom du gestionnaire de l'Affaire X X X X
10 J AFFAIRE_GESTIONNAIRE_MATRICULE  Texte Nom du matricule du gestionnaire de l'Affaire X X X X
11 K AFFAIRE_VENDEUR_NOM  Texte Nom du vendeur de l'Affaire X X X X
12 L AFFAIRE_VENDEUR_PRENOM  Texte Prénom du vendeur de l'Affaire X X X X
13 M AFFAIRE_VENDEUR_MATRICULE  Texte Matricule du vendeur de l'Affaire X X X X
14 N FACT_NUMERO  Texte Numéro de la facture X X X X
15 O FACT_DATE  Instant Date de valeur de la facture (comptable) X X
16 P FACT_DATE_SAISIE  Instant Date de saisie de la facture X X
17 Q FACT_CLIENT_CODE  Texte Code du client facturé X X
18 R FACT_CLIENT_NOM  Texte Nom du client facturé X X
19 S LIVR_NUMERO  Texte Numéro de la livraison X X
20 T LIVR_ETAT  Texte Etat de la livraison X X
21 U CMDE_NUMERO  Texte Numéro de la commande X X
22 V CMDE_DATE  Instant Date de valeur de la commande X X
23 W LGNCMDE_ARTVENDU_DATE_SOUHAITEE  Instant Date souhaitée de livraison de la ligne de
commande X X X X
24 X LGNCMDE_ARTVENDU_DATE_CONFIRMEE  Instant Date confirmée de livraison de la ligne de
commande X X
25 Y CMDE_DATE_SAISIE  Instant Date de saisie de la commande X X
26 Z CMDE_ETAT  Texte Etat de la commande X X
27 AA CMDE_MARGE  Monétaire Marge commerciale de la commande X X
28 AB CMDE_CLIENT_CODE  Texte Code du client de commande X X
29 AC CMDE_CLIENT_NOM  Texte Nom du client de commande X X
30 AD LGNCMDE_ARTVENDU_CODE  Texte Code de l'article vendu dans la ligne de
commande X X
31 AE LGNCMDE_ARTVENDU_LIB  Texte Libellé de l'article vendu dans la ligne de
commande X X
32 AF LGNCMDE_ART_LIB  Texte Libellé de l'article dans la ligne de commande X X
33 AG LGNCMDE_QTE  Monétaire Quantité commandée X X
34 AH LGNCMDE_PUHT  Monétaire Prix unitaire HT de la ligne de commande
► Si ligne d'article ajustement affecte le CA (AL),
dont le rachat si le dossier de rachat est lié à
une commande : Valeur de la ligne
► Si l'art. ajustement affecte le CR : vide
► Si le rachat si le dossier de rachat N'est PAS
lié à une commande : vide
X
35 AI LGNCMDE_TOTALHT  Monétaire Total HT de la ligne de commande (Qté cmdée x
PU HT) X X
36 AJ LGNCMDE_QTEREVIENT  Monétaire Coût de revient de la ligne de commande X X
37 AK LGNCMDE_COUTREVIENTUNITAIRE  Monétaire Coût de revient unitaire de la ligne de
commande
► Si ligne d'article ajustement affecte le CA (AL),
dont le rachat si le dossier de rachat est lié à
une commande : Vide
► Si l'art. ajustement affecte le CR : Valeur de la
ligne
► Si le rachat si le dossier de rachat N'est PAS
lié à une commande : vide
X
38 AL LGNCMDE_AFFECTE_CACOM  Texte CA commercial affecté (vide, Oui ou Non) X
39 AM LGNCMDE_COUTREVIENTTOTAL  Monétaire Coût de revient total de la ligne de commande =
Qté revient x Coût Revient Unitaire X X
40 AN LGNCMDE_ARTVENDU_MARQUE_CODE  Texte Code de la marque de l'article vendu de la ligne
de commande      X
41 AO LGNCMDE_ARTVENDU_MARQUE_NOM  Texte Libellé de la marque de l'article vendu de la
ligne de commande      X
42 AP LGNCMDE_ARTVENDU_ACT_CODE  Texte Code de l'Activité de l'article vendu de la ligne de
commande      X
43 AQ LGNCMDE_ARTVENDU_ACT_NOM  Texte Libellé de l'activité de l'article vendu de la ligne
de commande      X
44 AR LGNCMDE_ARTVENDU_FAM_CODE  Texte Code de la Famille de l'article vendu de la ligne
de commande      X
45 AS LGNCMDE_ARTVENDU_FAM_NOM  Texte Libellé de la Famille de l'article vendu de la ligne
de commande      X
46 AT LGNCMDE_ARTVENDU_SFAM_CODE  Texte Code de la Sous-famille de l'article vendu de la
ligne de commande      X
47 AU LGNCMDE_ARTVENDU_SFAM_NOM  Texte Libellé de la Sous-famille de l'article vendu de la
ligne de commande      X
48 AV LGNCMDE_ARTVENDU_SEGMENT_CODE  Texte
Code de la catégorie de la classification
 CELSSAF _ SEGMENT_ARTICLE' (cf Paramètres ci-
dessous)
     X
49 AW LGNCMDE_ARTVENDU_SEGMENT_NOM  Texte
Libellé de la catégorie de la classification
 CELSSAF _ SEGMENT_ARTICLE' (cf Paramètres ci-
dessous)
     X
50 AX LGNCMDE_ORIGINEVTE  Texte Origine de la vente      X
51 AY LGNCMDE_PAC  Monétaire Prix d'achat unitaire confidentiel (module
spécifique)      X
52 AZ LGNCMDE_PACTOTAL  Monétaire Prix d'achat total confidentiel (module
spécifique)      X
53 BA LGNCMDE_MARGEPAC  Monétaire Marge sur prix d'achat total confidentiel
(module spécifique)      X
54 BB CMDE_CLIENT_FACT_CODE  Texte Code du client facturé dans la commande X X
55 BC CMDE_CLIENT_FACT_NOM  Texte Nom du client facturé dans la commande X X
56 BD AFFAIRE_ORGINT_CODE  Texte Code de l'organisation interne de l'Affaire X X X X
57 BE AFFAIRE_ORGINT_NOM  Texte Nom de l'organisation interne de l'Affaire X X X X
58 BF AFFAIRE_VENDEUR_UO_CODE  Texte Code de l'unité organisationnelle du vendeur X X X X
59 BG AFFAIRE_VENDEUR_UO_NOM  Texte Nom de l'unité organisationnelle du vendeur X X X X
60 BH RACHAT_MONTANT  Monétaire Montant total du dossier de rachat    X X
61 BI RACHAT_AFFECTECACOM  Texte Oui si affectation au CA commercial (prix de
vente)    X X
62 BJ CMDE_TOTALHT  Monétaire Montant du Total de la commande X X
63 BK CMDE_TOTALCR  Monétaire Coût de Revient Total de la commande X X
64 BL LGNCMDE_NATUREVENTE_CODE  Texte
Code de la catégorie de la classification
 CELSSAF _NATUREVENTE_LGNCMDE' (cf
Paramètres ci-dessous)
   X
65 BM LGNCMDE_NATUREVENTE_NOM  Texte
Libellé de la catégorie de la classification
 CELSSAF _NATUREVENTE_LGNCMDE' (cf
Paramètres ci-dessous)
   X
66 BN LGNCMDE_CODEAFFAIREEXCEPTIONNELLE  Texte Code Affaire (module spécifique)    X
67 BO LGNCMDE_PUBRUTHT_IMPOSEAACHAT  Monétaire Prix unitaire HT d'achat (module spécifique)    X
68 BP LGNCMDE_PUNETHT_IMPOSEAACHAT  Monétaire #N/A    X
69 BQ LGNCMDE_TOTALHT_IMPOSEAACHAT  Monétaire Total HR d'achat (module spécifique)    X
70 BR RACHAT_NUMEROINTERNE  Texte Numéro de rachat interne X X X
71 BS RACHAT_NUMEROEXTERNE  Texte Numéro de rachat externe (numéro de l'accord
de financement) X X X
72 BT AFFAIRE_VENDEUR_UOPARENT_CODE  Texte Code de l'unité organisationnelle du vendeur
(parent) X X X X
73 BU AFFAIRE_VENDEUR_UOPARENT_NOM  Texte Nom de l'unité organisationnelle du vendeur
(parent) X X X X
74 BV LGNCMDE_BIEN_MAITRE_LIB  Texte Colonne alimentée si vous avez créé une liste de
biens maîtres     X
75 BW LGNCMDE_BIEN_MAITRE_QTE  Texte Quantité de biens maîtres     X
76 BX LGNCMDE_STATUT_JUR_NEUF  Texte Nombre de bien en Statut juridique Neuf     X
77 BY LGNCMDE_STATUT_JUR_OCCAS  Texte Nombre de bien en Statut juridique Occasion     X
78 BZ LGNCMDE_STATUT_JUR_AUTRE  Texte Nombre de bien en Statut juridique Autre     X
79 CA LGNCMDE_CA  Monétaire Total HT de la ligne de commande
Rachat (s'il affecte le CACom)
► Si l'article ajustement affecte le CA (AL) : Qté
cdée x Pu HT
► Si l'art. ajustement affecte le CR : vide
► Si le dossier de rachat est lié à une
commande et affecte le CA : Valeur totale du
dossier de rachat en négatif (moins)
► Si le rachat si le dossier de rachat N'est PAS
lié à une commande : vide
X
► Si dossier de rachat N'est PAS lié à une
commande ET le rachat affecte le CA (BI) : Valeur
totale du dossier de rachat en négatif (moins)
► Sinon : vide
O
80 CB LGNCMDE_REVIENT  Monétaire Coût de revient total de la ligne de commande
Rachat (s'il n'affecte pas le CACom)
► Si l'article ajustement affecte le CR (AL) : Qté
revient x Pu Revient
► Si l'art. ajustement affecte le CA : vide
► Si le dossier de rachat est lié à une
commande et affecte le CR : Valeur totale du
dossier de rachat en positif (plus)
► Si le rachat si le dossier de rachat N'est PAS
lié à une commande : vide
X
► Si dossier de rachat N'est PAS lié à une
commande ET le rachat affecte le CR (BI) : Valeur
totale du dossier de rachat en positif (plus)
►  Sinon : vide
O
81 CC LGNCMDE_MARGE  Monétaire Marge = LGNCMDE_CA - LGNCMDE_REVIENT X X X 0
82 CD LGNCMDE_ARTVENDU_TELEVENDEUR_NOM  Texte Nom du télévendeur sur la ligne de commande
83 CE LGNCMDE_ARTVENDU_TELEVENDEUR_PRENOM  Texte Prénom du télévendeur sur la ligne de
commande
84 CF LGNCMDE_ARTVENDU_TELEVENDEUR_MATRICULE  Texte Matricule du télévendeur sur la ligne de
commande
85 CG PRESTATION_NUM_DIT  Texte Numéro de la DIT liée à la ligne de commande
(article de prestation)
86 CH PRESTATION_COUT_TOTAL_CRIT  Monétaire Somme des coûts des MO, Trajet, P‘ et conso…
saisis dans le(s) CRIT de la DIT
87 CI RACHAT_REFTYPEPROD  Texte Référence du type de produit du bien (ligne du
dossier de rachat)      X
88 CJ RACHAT_LIBELLEBIEN  Texte Libellé du bien dans la ligne (ligne du dossier de
rachat)      X
89 CK RACHAT_IDENTFAB  Texte Matricule du bien (ligne du dossier de rachat)      X
90 CL RACHAT_IDENTPREST  Texte Identifiant prestataire du bien (ligne du dossier
de rachat)      X
91 CM RACHAT_INSITU  Texte Oui en fonction de la fin de financement (ligne du
dossier de rachat)      X
92 CN RACHAT_MONTRACHAT  Monétaire Valeur de rachat du bien (ligne du dossier de
rachat)      X
93 CO RACHAT_MONTREPRISE  Monétaire Valeur de rachat du bien (ligne du dossier de
rachat)      X
94 CP REPRISESEULE_RACHAT  Texte Valeur de reprise du bien (ligne du dossier de
rachat)      X
95 CQ AFFAIRE_COEFFICIENT  Monétaire Entête de l'affaire X X
96 CR LIVRAISON_DATE  Instant Date du BL X X
97 CS LIVRAISON_QUANTITE  Monétaire Quantité livrée X X
98,111,124,137,150 CT,DG,DT,EG,ET RFC_GRANDEUR_ENGAGEMENT_COPIE1  Texte Engagement du nombre de copies au contrat     Si le bien commandé est sous
une RFC
99,112,125,138,151 CU,DH,DU,EH,EU RFC_GRANDEUR_NOM_COMPTEUR1  Texte Nom du compteur     Si le bien commandé est sous
une RFC
100,113,126,139,152 CV,DI,DV,EI,EV RFC_GRANDEUR_PRIX_COPIE1  Monétaire P.U du compteur     Si le bien commandé est sous
une RFC
101,114,127,140,153 CW,DJ,DW,EJ,EW RFC_GRANDEUR_PRIX_COPIE_SUP1  Monétaire P.U de la copie supplémentaire pour le
compteur     Si le bien commandé est sous
une RFC
102,115,128,141,154 CX,DK,DX,EK,EX RFC_GRANDEUR_PRORATA_ENGAGEMENT_COPIE1  Texte Engagement du nombre de copies au contrat (**)     Si le bien commandé est sous
une RFC
103,116,129,142,155 CY,DL,DY,EL,EY RFC_GRANDEUR_CODE_RFC1  Texte Code de la Règle de facturation du compteur     Si le bien commandé est sous
une RFC
104,117,130,143,156 CZ,DM,DZ,EM,EZ RFC_GRANDEUR_LIB_RFC1  Texte Libellé de la Règle de facturation du compteur     Si le bien commandé est sous
une RFC
105,118,131,144,157 DA,DN,EA,EN,FA RFC_GRANDEUR_CODE_MSC1  Texte Code du module du compteur     Si le bien commandé est sous
une RFC
106,119,132,145,158 DB,DO,EB,EO,FB RFC_GRANDEUR_LIB_MSC1  Texte Libellé du module du compteur     Si le bien commandé est sous
une RFC
107,120,133,146,159 DC,DP,EC,EP,FC RFC_GRANDEUR_CODE_SSC1  Texte Code de la Solution de service du compteur     Si le bien commandé est sous
une RFC
108,121,134,147,160 DD,DQ,ED,EQ,FD RFC_GRANDEUR_DUREE_INITIALE1  Texte Durée initiale de la Solution de service du
compteur     Si le bien commandé est sous
une RFC
109,122,135,148,161 DE,DR,EE,ER,FE RFC_GRANDEUR_DATE_ENVOI1  Instant Date d'envoi de la Solution de service du
compteur     Si le bien commandé est sous
une RFC
110,123,136,149,162 DF,DS,EF,ES,FF RFC_GRANDEUR_DATE_RECEPTION1  Instant Date de retour signé de la Solution de service du
compteur     Si le bien commandé est sous
une RFC
… … … …
163,173,183,193,203 FG,FQ,GA,GK,GU RFC_BIEN_MONTANT1  Monétaire Montant de la RFC      Si le bien commandé est sous
une RFC
164,174,184,194,204 FH,FR,GB,GL,GV RFC_BIEN_PRORATA_MONTANT1  Monétaire Montant proratisé de la RFC (**)      Si le bien commandé est sous
une RFC
165,175,185,195,205 FI,FS,GC,GM,GW RFC_BIEN_CODE_RFC1  Texte Code de la Règle de facturation      Si le bien commandé est sous
une RFC
166,176,186,196,206 FJ,FT,GD,GN,GX RFC_BIEN_LIB_RFC1  Texte Libellé de la Règle de facturation      Si le bien commandé est sous
une RFC
167,177,187,197,207 FK,FU,GE,GO,GY RFC_BIEN_CODE_MSC1  Texte Code du module      Si le bien commandé est sous
une RFC
168,178,188,198,208 FL,FV,GF,GP,GZ RFC_BIEN_LIB_MSC1  Texte Libellé du module      Si le bien commandé est sous
une RFC
169,179,189,199,209 FM,FW,GG,GQ,HA RFC_BIEN_CODE_SSC1  Texte Code de la Solution de service      Si le bien commandé est sous
une RFC
170,180,190,200,210 FN,FX,GH,GR,HB RFC_BIEN_DUREE_INITIALE1  Texte Durée initiale de la Solution de service      Si le bien commandé est sous
une RFC
171,181,191,201,211 FO,FY,GI,GS,HC RFC_BIEN_DATE_ENVOI1  Instant Date d'envoi de la Solution de service      Si le bien commandé est sous
une RFC
172,182,192,202,212 FP,FZ,GJ,GT,HD RFC_BIEN_DATE_RECEPTION1  Instant Date de retour signé de la Solution de service      Si le bien commandé est sous
une RFC
… … … …
213 HE A3-A4  Texte Article de la ligne de commande, Classification        X
214 HF Couverture contractuelle d'articles  Texte Article de la ligne de commande, Classification        X
215 HG Prestation et nature de DIT  Texte Article de la ligne de commande, Classification        X
216 HH A3-A4  bien dans rachat  Texte Article de la ligne de commande, Classification        X
217 HI Couverture contractuelle d'articles  bien dans
rachat  Texte Article de la ligne du dossier de rachat,
Classification        X     X
218 HJ Prestation et nature de DIT  bien dans rachat  Texte Article de la ligne du dossier de rachat,
Classification        X     X
219 HK Code activité bien dans rachat  Texte Article de la ligne du dossier de rachat,
Classification        X     X
220 HL Libellé activité bien dans rachat  Texte Article de la ligne du dossier de rachat,
Classification        X     X
221 HM Code famille bien dans rachat  Texte Article de la ligne du dossier de rachat,
Classification        X     X
222 HN Libellé famille bien dans rachat  Texte Article de la ligne du dossier de rachat,
Classification        X     X
223 HO Code sous-famille bien dans rachat  Texte Article de la ligne du dossier de rachat,
Classification        X     X
224 HP Libellé sous-famille bien dans rachat  Texte Article de la ligne du dossier de rachat,
Classification        X     X
225 HQ Qualif de vente (classement)  Texte Affaire, Classification X X
226 HR Origine affaire (type)  Texte Affaire, Classification X X
227 HS Nature de la vente DBC  Texte Commande, Classification X X
228 HT Nature de la vente commande client  Texte Commande, Classification X X
229 HU AGENCES OMR  Texte Client, Classification X X X X
230 HV ALERTES CLIENTS  Texte Client, Classification X X X X
231 HW CATEGORIES CLIENTS  Texte Client, Classification X X X X
232 HX SUIVI COMMERCIAL  Texte Client, Classification X X X X
233 HY TYPE DE CLIENT  Texte Client, Classification X X X X
234 HZ Intercepter les factures client  Texte Client, Classification X X X X
235 IA AGENCES DACTYL  Texte Client, Classification X X X X
236 IB FIDELISATION  Texte Client, Classification X X X X
237 IC FILIERE CLIENTS  Texte Client, Classification X X X X
238 ID Client à exclure de la facturation conso (SSC non
signée)  Texte Client, Classification X X X X
239 IE Origine Client  Texte Client, Classification X X X X
240 IF AGENCES  BS+  Texte Client, Classification X X X X
241 IG Autoriser les commandes globales de
consommables  Texte Client, Classification X X X X
242 IH Complément Solution  Texte Commande, Classification X X
Colonnes dépendant du paramétrage de ARTIS.net
Informations sur les RFC liées aux grandeurs ou
RFC liées aux matricules
Colonnes sans intérêt pour le type de document
(**) Le montant de la règle est proratisé selon le nombre de biens lié à la règle. Il se peut que tous
les biens ne soient pas dans l'affaire extraite.
(*) Le volume est proratisé selon le VMM du compteur de chaque bien lié à la règle. Il se peut que
tous les biens ne soient pas dans l'affaire extraite.
La règle de calcul du VMM est celle utilisée dans le calcul de la rentabilité (consulter le document,
pour plus de précisions). Il peut y avoir des différences avec le VMM affiché sur l'écran « Grandeur »
du bien et la valeur utilisé pour ces prorata.
Particularités
Composition d'une affaire
COMPOSITION D'UNE AFFAIRE
Entête de l'affaire
o Client : Obligatoire, le client de la commande est reporté dans l'affaire. L'opérateur peut le cas
échéant mettre un client différent (exemple : cas d'une affaire au nom du groupe dont les
commandes sont saisies au nom des filiales),
o Prestataire : Obligatoire, Organisation interne de la commande,
o Numéro interne : Obligatoire, numérotation automatique,
o Date de l'affaire : Obligatoire, initialisée avec la date de la commande, modifiable,
o Gestionnaire : Obligatoire, initialisé avec le gestionnaire de la commande, modifiable,
o Coefficient : Non obligatoire, peut être interprété librement : soit le coefficient de marge, soit le
coefficient de la part des coûts de revient (Coût de revient / Prix de vente). Si le module «
Matelas & Dérogation » est installé, le coefficient est utilisé pour le calcul de la dérogation,
consultez X X X,
o Commentaire : Non obligatoire, libre,
o Validée : Non obligatoire, interprété librement avec « Date de validation ». Souvent, « Validée »
à Oui indique que l'affaire est terminée (soit livrée, facturée, soit réglée),
o Date de validation : Non obligatoire. Souvent, cette date indique le mois sur lequel l'affaire va
déclencher le commissionnement du vendeur.
Dans l'icône <Grille> :
o Calculer la dérogation : Utilisé uniquement si le module « Matelas & Dérogation » est installé,
consultez X X X ,
o Classification affaire : Non obligatoire. Classification de l'affaire à paramétrer (information
disponible dans l'extraction des affaires).
Pavé « CA Com/Coût »
Synthèse de l'affaire :
o Financement commandé : Montant du financement sur l'ensemble des commandes,
o Financement facturé : Montant du financement sur l'ensemble des commandes ayant fait l'objet
d'une facture,
o HT commandé : Somme des montants HT des lignes de commandes des articles vendus (hors
articles de facturation et d'ajustement),
o HT frais annexes : Somme des montants HT des lignes de commandes des articles de
facturation,
o Ajustement : Somme des montants HT des lignes de commandes des articles d'ajustement,
o Rachat : Somme des montants HT issus des dossiers de rachat/reprise,
o Total : Totalise les colonnes,
o Marge affaire = Total « Vente (CA Com) » – Total « Coût »,
o Taux marge = (« Marge affaire » / Total « Vente (CA Com) ») x 100,
o Vendeur : Liste des vendeurs renseignés sur les différentes lignes des commandes.
En bas de la page, se trouvent les deux tableaux pour gérer les dossiers de financement et les
dossiers de rachat, consultez X X X .
LIVRAISON ET FACTURATION DES COMMANDES
La livraison et la facturation n'ont pas d'impact sur les données et l'état de l'affaire.
Lister les commandes sans affaires
LISTER LES COMMANDES SANS AFFAIRES
Ventes / Commandes clients / Gérer les commandes clients
1. <Loupe> ou <F1>,
2. Ajuster la date de début de commande,
3. Mettre "null" dans "Numéro affaire",
4. <Forest> ou <F2>.
Mettre en place une classification
METTRE EN PLACE UNE CLASSIFICATION
Mettre en place des classifications sur les commandes
Les classifications facultatives sont à mettre en place par la société. Les catégories sont à définir
suivant les besoins propres à chaque société.
L'extraction des affaires retourne cette information.
Natures de la vente
Consulter Créer une classification avec les informations ci-après.
Classification sur les commandes
Nom : "Nature de la vente commande client"
Abréviation : "Nature de la vente Cmde"
Identifiant technique : sans identifiant
Domaine : "ventes"
Classe : "com.artis.business.ventes.CmdeClt"
Catégorie
Ensuite, pour les natures, ajouter les catégories  :
0 - Sous SSC,
1 - Hors SSC.
Dans notre exemple, les catégories ‘0 - Sous SSC' et ‘1 - Hors SSC' permettent d'indiquer si la
vente aboutit à la mise en place d'une SSC. Dans l'affirmative, dans les données extraites, certains
coûts de revient peuvent être neutralisés (comme par exemple, ceux de certains consommables et
pièces).
Natures de la vente
Consulter Créer une classification avec les informations ci-après.
Classification sur les lignes de commande
Nom : "Nature de la vente ligne commande client"
Abréviation : "Nature de la vente ligne de commande client"
Identifiant technique : sans identifiant
Domaine : "ventes"
Classe : "com.artis.business.ventes.LgnCmdeArtVendu"
Catégorie
Ensuite, ajouter les catégories, exemple :
0 - PolCo
1 - Accord Cadre
2 - Cotation TA
3 - Promo
4 - Déstockage
ou
N - NEUF
O - OCCAS
Remarque
Si les catégories des deux classifications doivent être similaires, il convient de mettre le même
identifiant technique, exemple "NATUREVENTE_LGNCMDE".
Paramètres
Classification directe sur commande
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CLASSIF_AUTO_CMDECLT"
Valeur : Abréviation de la classification directe dans les commandes client.
Classification directe sur ligne de commande
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CLASSIF_AUTO_LGNCMDECLT"
Valeur : Abréviation de la classification directe dans les lignes de commandes client.
Mettre en place de classifications sur les affaires
Les classifications facultatives sont à mettre en place par la société. Les catégories sont à définir
suivant les besoins propres à chaque société.
L'extraction des affaires retourne cette information.
Classification "Type affaire" pour les affaires (facultatives)
Consulter Créer une classification avec les informations ci-après.
Classification
Nom : "Type affaire"
Abréviation : "AFFTYPE"
Identifiant technique : sans identifiant
Domaine : "affaires"
Classe : "com.artis.business.affaires.Affaire"
Catégorie
Ensuite, ajoutez les catégories, exemple :
AO - Appel d'Offre
GEO - Géographique
REFEX T - Référencement Externe
REFINT - Référencement Interne
Paramétrage lié aux affaires
PARAMÉTRAGE LIÉ AUX AFFAIRES
Liste ‘Biens maîtres ' (facultative)
Pour alimenter la colonne des biens maîtres ‘LGNCMDE_BIEN_MAITRE_LIB' dans l'extraction des
affaires, une liste doit être créée.
Consulter Créer une liste avec les informations ci-après.
Nom : "Biens maîtres"
Domaine : "articles"
Classe : "ArtVendu"
Organisation interne : une seule organisation
Règle de numérotation des affaires
Il existe 2 modes de numérotation des affaires : Manuel ou automatique.
Si une règle de numérotation des Affaires est présente, elle s'applique obligatoirement et il n'est pas
possible de saisir un numéro interne (la zone est grisée).
Mode Manuel
Ne pas mettre de règle de numérotation en place.
A la création d'une affaire, le numéro est demandé (lettres et/ou chiffres).
En l'absence de saisie de numéro, un numéro séquentiel est affecté à l'enregistrement de l'affaire.
Il est toujours possible de modifier le numéro ensuite.
Mode automatique
Consulter Créer une règle de numérotation avec les informations ci-après.
Libellé : "Affaire - Numéro Interne"
Code : "Affaire_Num"
Classe : "Affaire"
Attribut numéroté : "Numéro interne"
Type : "Unique par organisation"
Organisation : une organisation interne
Type de règle : "Commun avec tous les exercices"
Premier numéro à prendre : 000001
Dernier numéro utilisé : 000000
Dernier numéro à prendre : 999999
Longueur du numéro : 6
Paramètres
Date de validation
Paramètres application / Paramètres application / Gérer les paramètres
Les affaires antérieures à cette date ne peuvent être modifiées. Cette date est mise manuellement
par un utilisateur averti.
Paramètre "Date_VALIDATION_AFFAIRE"
Valeur : Mettre une date
Valider, dé valider une affaire
VALIDER, DÉ VALIDER UNE AFFAIRE
Objectif de la validation
En règle générale, une affaire est dite validée, lorsque celle-ci peut déclencher le calcul du
commissionnement pour le vendeur sur cette même affaire.
Le moment où une affaire est validée est définit suivant les règles de gestion des affaires. Ces
règles sont propres à chaque société.
La validation des affaires :
o n'est donc pas obligatoire,
o Elle est possible à tout instant,
o Elle est manuelle.
ATTENTION, la validation verrouille les coûts de revient dans les commandes.
Validation et impact
La validation consiste à cocher l'option « validé » et à saisir une date de validation (cette date
détermine le mois de calcul du commissionnement).
Lorsqu'une affaire est validée, le type d'actualisation des coûts de revient des lignes de commande
passe de l'état « Dynamique » à l'état « Statique ».
o L'état « dynamique » est un état qui permet à ARTIS.net d'actualiser la valeur du coût de revient
(exemple : PMP qui est recalculé suivant les achats et les ventes).
o L'état « statique » permet à ARTIS de figer les coûts de revient (il n'y a donc plus
d'actualisation).
Dé validation
Une dé validation, manuelle, est possible à tout moment, à condition que la date de validation ne
soit pas antérieure à la date limite. Cette date limite est enregistrée dans les paramètres de
l'application.
Consulter Paramétrage lié aux affaires.
Gérer les Matelas et dérogation
GÉRER LES MATELAS ET DÉROGATION
Gérer les matelas
GÉRER LES MATELAS
Objectif des Matelas
Les prix d'achat auprès du fournisseur ont été fixés pour une période donnée. Ces tarifs d'achat
sont nommés "PAC" : Prix d'Achat Confidentiel, et servent à passer les commandes fournisseur et
de valoriser la marchandise au bon prix.
La marge commerciale est la différence entre le Prix de vente et le Prix d'Achat de Distribution. Le
Prix d'Achat de Distribution nommé "PAD" est le tarif auquel est valorisé le coût de revient de la
vente pour établir la base de calcul de la marge commerciale.
Le matelas est la diférence entre le PAC - Prix d'Achat Confidentiel et le Prix d'Achat de
Distribution.
Il est donc posé :
o Valeur du Matelas =   "PAD" : Prix d'Achat de Distribution - "PAC" : Prix d'Achat Confidentiel.
o Marge commerciale = Prix de vente - "PAD" : Prix d'Achat de Distribution.
Le prestataire a établi par segmentation et nature de la vente et origine de la vente, la valeur des
matelas.
Définition dans ARTIS.net
PRIX DE VENTE
Prix saisi dans la ligne de commande, valorisant le prix total H.T.
PRIX D'ACHAT DE DISTRIBUTION
Coût de revient de la ligne de commande, issu du tarif d'achat comercial nommé "PAD". Il est donc
nécessaire d'enregistrer au préalable tous les PAD dans ce tarif, pour chaque article concerné.
PRIX D'ACHAT CONFIDENTIEL
Zone spécifique de la ligne de commande, valorisée automatiquement, consulter le paragraphe
suivant.
Lors de la génération de commande fournisseur, le PAC est automatiquement pris en compte pour
valoriser les lignes de commandes.
MATELAS
Les matelas sont enregistrés dans la table de décision "MATELAS".
Détail des calculs
En tenant compte de points suivants :
§ Prix de vente : Saisie,
§ PAD : Enregistré au préalable lors de la création de la fiche article,
§ Prix d'achat article : Enregistré au préalable lors de la création de la fiche article,
§ Matelas : Enregistré au préalable dans la table,
voici des exemples de valorisations :
Article avec Activité/Famille/Sous-famille présent dans la table des matelas
Prix de vente en
cmde client PAD Prix d'achat
article
Cout de revient en
cmde client Matelas PAC en cmde
client
Prix d'achat en
cmde fournisseur
500 340 302 340 0 340 340
500 340 302 340 50 290 290
500 302 302 0 302 302
500 302 302 Prix selon méthode
de génération
500 302 302 50 252 352 252
Article avec Activité/Famille/Sous-famille NON présent dans la table des
matelas
Prix de vente en
cmde client PAD Prix d'achat
article
Cout de revient en
cmde client Matelas PAC en cmde
client
Prix d'achat en
cmde fournisseur
500 340 302 340 302
500 302 302 302
Le prix d'achat en commande fournisseur pour les articles non présents dans la table des matelas
dépend de la référence prioritaire de la fiche article, dans le cas plusieurs références présentes
dans la fiche article.
Calcul des valeurs lors de modifications
Cas Opération Nature Origine de la
vente PAD PAC
A Saisie initiale Neuf Géo Affectation automatique :
= tarif d'achat commercial
Affectation automatique :
= PAD – Matelas selon
« neuf » et « géo »
B Modification manuelle
de la nature Occasion
Recalul :
= PAC + Matelas selon
« Occasion » et « Géo »

C Modification manuelle
de l'origine de la vente   Appel d'offre
Recalul :
= PAC + Matelas selon
« Occasion » et « Appel
d'offre »

D1 Modification manuelle
du PAC
Recalul :
= PAC + Matelas selon
« Occasion » et « Appel
d'offre »
Saisie de la nouvelle valeur
(supérieure ou égale à 0)
D2 Modification manuelle
du PAC       Suppression de la valeur
(la case est vide)
E Modification manuelle
uniquement du PAD     Saisie de la nouvelle valeur
F
Modification manuelle du
PAD
et
soit de la nature,
soit de l'origine,
soit du PAC

Recalul :
= PAC + Matelas selon la
nature et l'origine

Propagation du PAC sur la chaîne d'achat
Génération de commande fournisseur
Lors de la génération de la commande fournisseur, il n'y a pas de regroupement des demandes
matelassées. (Génération d'une ligne de commande fournisseur pour une ligne de commande client
matelassée).
Le prix d'achat de la ligne de commande fournisseur est initialisé avec le PAC
Transfert de matricule
Un message est affiché pour prévenir l'utilisateur que le prix d'achat des biens n'est pas impacté
par le PAC
Transfert de réservation
Un message est affiché pour prévenir l'utilisateur que ni le PAC des commandes client, ni le prix
d'achat de la commande fournisseur n'est mise à jour.
PARAMÉTRAGE
Table de libellé
Origine de la vente
Paramètres applications / Classifications, listes et tables de décision / Gérer les tables de libellés
1. Cliquer sur "Origine de la vente",
2. <+>,
3. Saisir le code, le libellé,
4. <Disquette>
5. <X >
Les origines sont par exemple :
1 - Géographique,
2 - Appel d'offre,
3 - Sans matelas.
Classification
Natures de la vente
Consulter Créer une classification avec les informations ci-après.
La nature de la vente est gérée avec 2 classifications de même abréviation et de même nom :
§ Une classification sur la classe "CmdeClt",
§ Une classification sur la classe "LgnCmdeArtVendu".
Ces classifications devront être paramétrées de la même façon :
§ Même nom pour que les deux écrans (entête et ligne de commande aient le même
nom de champ)
§ Mêmes catégories pour appliquer par défaut la valeur de l'entête dans la ligne.
Le nom de cette classification est paramétré avec le paramètre "CLASSIF_AUTO_CMDECLT" du
module ventes.
Consulter Mettre en place une classification.
Table de décision
Matelas
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
Cette table permet de mémoriser les matelas pour chaque segmentation.
Rechercher la Table de décision "MATELAS".
Numéro Code de
l'activité
Code de la
famille
Code de la sous
famille
Nature de la
vente Type de vente Opérateur Matelas
1 SI ACC FIPC OCCAS * + 350
2 SI ACC FIPC NEUF Géographique + 40
3 SI ACC FIPC NEUF Appel d'offre + 15
4 SI ACC FINS NEUF Géographique + 21
5 SI ACC FINS NEUF Appel d'offre + 7
6 SI MCO SEG4 NEUF Sans matelas + 0
7 SI MCO SEG3 NEUF Sans matelas + 0
8 SI MCO SEG2 NEUF Sans matelas + 0
9 SI MCO SEG1 NEUF Sans matelas + 0
10 SI MNB SEG4 NEUF Sans matelas + 0
11 SI MNB SEG3 NEUF Sans matelas + 0
12 SI MNB SEG2 NEUF Sans matelas + 0
13 SI MNB SEG1 NEUF Sans matelas + 0
14 SI ACC TELC NEUF Appel d'offre + 7
15 SI ACC TELC NEUF Géographique + 19
16 SI ACC FIPC NEUF Sans matelas + 0
17 SI ACC FINS OCCAS * + 190
18 SI ACC TELC OCCAS * + 190
19 SI TRA SEG4 NEUF Appel d'offre + 520
20 SI TRA SEG3 NEUF Appel d'offre + 330
21 SI TRA SEG2 NEUF Appel d'offre + 155
22 SI TRA SEG1 NEUF Appel d'offre + 54
23 SI TRA SEG4 NEUF Sans matelas + 0
24 SI TRA SEG3 NEUF Sans matelas + 0
25 SI TRA SEG2 NEUF Sans matelas + 0
26 SI TRA SEG1 NEUF Sans matelas + 0
27 SI ACC TELC NEUF Sans matelas + 0
28 SI ACC FINS NEUF Sans matelas + 0
29 SI TRA SEG1 OCCAS * + 870
30 SH IMP MULT NEUF * + 160
31 SI MNB SEG3 NEUF Géographique + 450
32 SI MNB SEG2 NEUF Appel d'offre + 155
33 SI MNB SEG2 NEUF Géographique + 399
34 SI MNB SEG1 NEUF Appel d'offre + 54
35 SI MNB SEG1 NEUF Géographique + 160
36 SI MCO SEG4 NEUF Appel d'offre + 520
37 SI MCO SEG4 NEUF Géographique + 550
38 SI MCO SEG3 NEUF Appel d'offre + 330
39 SI MCO SEG3 NEUF Géographique + 450
40 SI MCO SEG2 NEUF Appel d'offre + 155
41 SI MCO SEG2 NEUF Géographique + 399
42 SI MCO SEG1 NEUF Appel d'offre + 54
43 SI MNB SEG3 NEUF Appel d'offre + 330
44 SI MNB SEG4 NEUF Géographique + 550
45 SI MNB SEG4 NEUF Appel d'offre + 520
46 SH IMP MULT OCCAS * + 870
47 SI DUP SEG1 OCCAS * + 870
48 SI MNB * OCCAS * + 1200
49 SI MCO SEG1 OCCAS * + 870
50 SI MNB SEG2 OCCAS * + 1200
51 SI MCO SEG2 OCCAS * + 870
52 SI TRA SEG4 NEUF Géographique + 550
53 SI TRA SEG3 NEUF Géographique + 450
54 SI TRA SEG2 NEUF Géographique + 399
55 SI TRA SEG1 NEUF Géographique + 160
56 SI MCO SEG1 NEUF Géographique + 160
57 SI MCO SEG3 OCCAS * + 870
58 SI MCO SEG4 OCCAS * + 870
59 SI * * * *
60 PD * * * *
61 SH * * * *
62 SO * * * *
Pour la gestion d'une table de décision, voir Critère dans les tables de décision
CODE DE L'ACTIVITÉ
Activité de l'article vendu,
CODE DE LA FAMILLE
Famille de l'article vendu,
CODE DE LA SOUS FAMILLE
Sous-famille de l'article vendu,
NATURE DE LA VENTE
Libellé de la catégorie de positionnée sur la ligne de commande, à partir de la classification "Nature
de la vente" sur ligne de commande, consulter Mettre en place une classification.
TYPE DE VENTE
Libellé de l'origine de la vente de la ligne de commande, consulter la table de libellé "Origine de la
vente" citée ci-dessous.
OPÉRATEUR
Les opérateurs possibles sont :
§ + (plus),
§ - (moins),
§ * (multiplié),
§ / (divisé),
§ vide.
MATELAS
Valeur du matelas à prendre en compte pour calculer le Prix d'achat confidentiel. Il peut ne y avoir
de valeur (vide) ; cette situation va de paire avec l'opérateur qui est dans ce même cas (vide).
Le PAD est calculé à partir du PAC et du Matelas, appliqué de l'opérateur, c'est-à-dire :
§ Si l'opérateur est l'addition : PAD = PAC + matelas.
§ Si l'opérateur est la multiplication : PAD = PAC x matelas.
Si la valeur est vide, la ligne permet uniqument de prendre en compte les coûts de revient dans le
calcul de la dérogation.
Gérer les dérogations
GÉRER LES DÉROGATIONS
Objectif de la dérogation
En fonction de la nature de la vente et de son origine, le taux de marge commerciale sur l'affaire doit
toujours être le même, exemple :
o Vente de matériel neuf : coefficient de 0.74,
o Vente de matériel d'occasion : coefficient de 0.82.
Si le taux de marge n'est pas atteint, une dérogation est calculée pour compenser l'écart afin de
satisfaire le coefficient donné. La dérogation diminue les coûts de revient, augmentant ainsi la
marge commerciale. Cette dérogatoion est prise sur le budget de dérogation.
Calcul de la dérogation
Dans l'entête de l'affaire, l'utilisateur peut saisir à tout moment le coefficient 0.74 ou 0.84 ou une
autre valeur.
Lorsque toutes les commandes sont insérées dans l'affaire, l'utilisateur appliquera le traitement du
calcul de la dérogation en cliquant sur une option de l'entête de l'affaire.
Le calcul s'applique à partir des prix de vente : c'est la somme des prix de vente des lignes
matelassées. Il s'agit des articles dont l'activité, famille, sous-famille fait partie de la table des
matelas.
La dérogation est calculée la première fois sur demande de l'utilisateur. Puis toute intervention sur
la commande relance un calcul automatique de la valeur de la dérogation.
Détail du calcul
1. ARTIS.net calcule (Prix de vente x coefficient saisi) – PAD, (Coût de revient),
2. Si le calcul :
§ Est négatif : Alors la dérogation est générée avec un article d'ajustement dans la
première commande de l'affaire avec un montant négatif égale à la valeur calculée et
impactant les coûts de revient.
Dans le commentaire de la ligne, la formule valorisée explique le calcul, exemple :
"Prix de vente : 4377.0
PAD : 3780.0
Dérogation : 190.86
PADD : 3589.14
Marge : 18.000000000000004 %
Formule : [ 4377.0 (PV) * 0.82 (Coef) ] - 3780.0 (PAD)] = - 190.86 (Déro)"
§ Est positif, rien n'est fait (le taux de marge est supérieur au coefficient).
Budget de dérogation
Tiers / Organisations internes / Gérer les organisations de type interne
1. Appeler l'organisation interne,
2. <Mosaïque>,
3. Cliquer sur "Unité Organisationnelle",
4. Sélectionner l'unité,
5. <Visualiser> ou <Loupe>,
6. Section "Infos unité organisationnelle",
7. Cliquer sur "Budget de dérogation", à droite,
8. ARTIS.net affiche le budget de dérogation sur le trimestre en cours.
Remarque
Les dérogations accordées sont des lignes négatives, générées automatiquement depuis le calcul
dans l'affaire.
Ajout d'un budget
Le budget s'ajoute en général au début de chaque trimestre.
1. Depuis le même écran,
2. <+> du tableau,
3. Saisir la date d'application du budget (premier jour du trimestre),
4. "Nature" : Sélectionner "Budget initial",
5. "Montant" : Saisir le montant du budget attribué au groupe de vendeur (valeur positive),
6. Saisir éventuellement un commentaire,
7. <Disquette> ou <F2>.
Dérogation récupérable
La dérogation récupérable est une dérogation fournisseur récupérable par le vendeur (DEROGR).
Consulter les budgets
Consulter Consulter les budgets de dérogation.
Exemple de Commande avec Matelas et Dérogation
PARAMÉTRAGE
Paramètres
