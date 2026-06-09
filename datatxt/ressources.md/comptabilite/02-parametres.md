# Paramètres

> Categorie: Comptabilité | Pages 669-685

## Sous-rubriques
- Gérer les modes de paiement (p.669)
-   Créer un mode de règlement et/ou une condition de paiement (p.669)
-   Gérer les informations sur les prélèvements (p.670)
- Gérer les exercices comptables (p.672)
- Gérer les périodes comptables (p.672)
- Gérer les plans comptables (p.673)
- Gérer les journaux comptables (p.674)
- Lister le plan comptable (p.675)
- Gérer les taux de TVA (p.676)
-   Modifier, déterminer la TVA à appliquer (p.676)
-   Déterminer les comptes de TVA (p.679)
-   Déterminer les compte de Ventes HT (p.684)
-   Appliquer une TVA différente (p.684)

Paramètre "EX CLURE_CLI_INTERFACE_FACT"
Valeur : Liste des codes clients à exclure de l'interfaçage des transactions comptables.
Paramètres
Gérer les modes de paiement
Créer un mode de règlement et/ou une condition de paiement
GERER LES MODES DE PAIEMENT
Créer un mode de règlement
Comptabilité / Paramètre / Gérer les modes de paiement     Gestion des modes de règlement
o Sélectionner "Mode de règlement" dans la liste déroulante,
o Créer par
o Sélectionner la ligne de condition de paiement,
o Valider par
 ,
o si la condition de paiement souhaitée n'existe pas :
§ Abandonner la création en-cours,
§ Exécuter la procédure du paragraphe suivant "Créer une condition de paiement",
§ Puis revenir à la procédure ci-dessus.
o Sélectionner le moyen de paiement dans la liste déroulante,
o Valider par
Créer une condition de paiement
Comptabilité / Paramètre / Gérer les modes de paiement   Gestion des modes de règlement
o Sélectionner "Condition de paiement" dans la liste déroulante,
o Créer par
o Compléter
§ le libellé, le code,
§ le décalage départ, la durée du crédit, le décalage arrivé
o Valider par
Paramétrer une condition de règlement à 30 jours ou 60 jours
fin de mois
30 jours fin de mois :
Durée de crédit :  1 jours
Décalage de départ  : fin de mois
Décalage d'arrivée  : fin de mois
60 jours fin de mois :
Durée de crédit :  32 jours
Décalage de départ  : fin de mois
Décalage d'arrivée  : fin de mois
Ces indications permettent d'avoir des échéances justes à la fin du mois suivant, quelle que soit la date de
facture et la durée du mois.
Gérer les informations sur les prélèvements
GÉRER LES INFORMATIONS SUR LES PRÉLÈVEMENTS
Identifiant SEPA
Tiers / Organisations internes / Gérer les organisations de type interne
1. Rechercher l'organisation interne (prestataire)
2. Cliquer sur l'onglet "Identifiants"
3. <Crayon>
4. renseigner la valeur de l'identifiant de créancier SEPA
5. <Disquette>
Gérer les RIB des organisations clients
Tiers / Client / Gérer les organisations de type client
1. Rechercher l'organisation cliente
2. Cliquer sur le menu déroulant de la page
  en haut
3. Prendre "Coordonnées bancaires"
4. <Crayon>
5. <+> dans le tableau "Coordonnées bancaires de l'organisation cliente"
6. Saisir :
§ Le code BIC : le code doit exister dans la liste,
§ Le code IBAN,
§ La domiciliation
§ Pour un des RIB, cocher "Prélevé par défaut pour l'org."
7. <Disquette>
8. <Disquette>
Gérer les RUMs
Dans les organisations clients
Tiers / Client / Gérer les organisations de type client
1. Rechercher l'organisation cliente
2. Cliquer sur le menu déroulant de la page
  en haut
3. Prendre "Coordonnées bancaires"
4. Sur la ligne correspondant au RIB ciblé, cliquer sur "Mandats"
5. <Crayon>
6. Dans le tableau "Mandats du compte FR...", faire <+>
7. Renseigner
§ L'organisation interne
§ Référence Unique de Mandat
§ Date signature mandat
8. Ne rien mettre dans "Date résiliation mandat"
9. <Disquette>
Lorsque le mandat sera résilié, il faudra revenir renseigner "Date résiliation mandat".
Si ARTIS a détecté un IBAN au moment de l'installation de la version (à partir de la V160.1), le
RUM a été initialisé. Sinon, il vous suffit de compléter l'IBAN avant de créer manuellement le RUM.
Dans les organisations fournisseurs
Pour les fournisseurs, la colonne s'intitule ‘Viré par défaut'.
Impression des factures
Il est possible d'imprimer les informations suivantes sur les factures client :
§ L'ICS du prestataire
§ Le RUM du client
§ La Date de signature du RUMC.
ATTENTION, chaque société ayant le logiciel ARTIS.net a un paramétrage personnalisé de ses
factures.
Contacter pour avoir ces informations.
Interface comptable des tiers
Il est possible d'envoyer les informations (IBAN, RUM) vers la comptabilité général.
ATTENTION, chaque société ayant le logiciel ARTIS.net a un paramétrage personnalisé de ses
factures.
Contacter pour avoir ces informations.
Gérer les exercices comptables
GÉRER LES EXERCICES COMPTABLES
Comptabilité / Paramètres / Gérer les exercices comptables
1. Sélectionner l'organisation interne,
2. <Crayon>,
3. Ajuster la date de début et de fin d'exercice
4. <F2>,
5. Vérifier vos périodes comptables, consulter Gérer les périodes comptables
La date de fin d'exercice n'a pas réellement d'intérêt.
La date de début d'exercice n'a un intérêt que lorsqu'une lecture des échéances non soldées est
paramétrée,
Consulter ' Gérer les en-cours des clients et échéances non soldées '
Gérer les périodes comptables
GÉRER LES PÉRIODES COMPTABLES
Comptabilité / Paramètres / Gérer les périodes comptables
1. Sélectionner l'organisation interne
2. Modifier la période de validité des ventes
3. Modifier la période de validité des achats
Les dates de début et de fin doivent incluses dans la période de l'exercice comptable (affichée en
haut à droite), voir  Gérer les exercices comptables.
Ces périodes ne sont applicables qu'aux factures de vente et d'achat. Les commandes et les bons
de livraison ne sont donc pas impactés.
Usage
Pour les ventes
En général, un responsable détermine le mois de facturation en cours. Cette période reste
inchangée tant que la facturation n'est pas terminée, même si la date du jour est au-delà de la date
de fin de la période de validité, voir les paragraphes ci-dessous.
Dès que la facturation est terminée, le responsable avertit l'ensemble des utilisateurs concernés par
la facturation dans la société que la période va basculer. Il procède alors à la modification des
dates.
Pour les achats
Les utilisateurs sont en général moins nombreux. La période est souvent plus large : la date de fin
est calée sur la fin de l'exercice comptable. Seule la date de début est sujette à modification,
souvent tard dans le mois suivant, pour avoir le temps d'enregistrer les factures envoyées par les
fournisseurs.
Dans les traitements
En génération de SSC
Lors de la facturation, la date d'édition des factures de l'écran de facturation est positionnée à la
date du jour.
Au moment de valider, un contrôle est effectué :
o L'utilisateur doit repositionner la date d'édition des facture avant de poursuivre.
En chaînage BL-Facture
Au moment de la création d'une facture, la date de facture est celle du jour.
Lors de l'enregistrement, un contrôle est effectué :
o Si la date de jour est antérieure à la date de début de période, une question est posée et
l'utilisateur devra confirmer. La facture est repositionnée à la date de début de période,
o Si la date de jour est après la date de fin de période, , une question est posée et l'utilisateur
devra confirmer. La facture est repositionnée à la date de fin de période.
Gérer les plans comptables
GÉRER LE PLAN COMPTABLE
Il faut distinguer les catégories comptables et les comptes comptables du plan comptable.
Dans les articles, il n'est pas possible d'affecter un compte comptable. seules des catégories
comptables leurs sont affectées.
Article Classification comptable Plan comptable
Vente Catégorie comptable de vente Compte comptable de vente
Achat Catégorie comptable d'achat Compte comptable de d'achat
Pour une question pratique, il vaut mieux créer la catégorie comptable en premier lieu, puis crée le
compte comptable et ainsi rattacher la catégorie comptable au comptable.
Classification comptable
Catégorie comptable
Comme expliqué ci-dessus, les articles n'ont pas directement les comptes comptables. Entre les
deux, il y a les catégories comptables. Suivre la procédure suivante :
Paramètres application / Classifications, listes et tables de décision / Gérer les classifications
1. Sélectionner la classification comptable «COMPTES COMPTABLES»,
2. Sélectionner soit «Vente», soit «Achat»,
3. <+> en bas,
4.  Saisir le libelle de la catégorie uniquement : par habitude, mettre le même libellé que le
compte comptable (ne pas indiquer le compte),
5. <F2>.

Plan comptable
Le plan comptable général est commun à toutes les organisations internes. Seuls les collectifs
sont attachés à chaque organisation interne.
Comptabilité / Paramètres / Gérer les plans comptables
Création d'un compte général
1. <+> pour ajouter un nouveau compte,
2. Sélectionner la première organisation interne
3. <Entrée> sur zone «Exercice comptable»
4. Dans «Type de compte», sélectionner le type de compte dans lequel votre compte est à créer
5. Saisir votre Numéro de compte Artis.Net (Attention au nombre de caractères à utiliser)
6. Saisir l'intitulé du compte
7. Saisir le numéro de compte à utiliser dans votre comptabilité générale
8. <F2>.

La catégorie comptable
1. Rappeler le compte,
2. <Crayon>,
3. <+> dans le tableau "Catégories comptables associées au compte",
4. Sélectionner la catégorie,
5. <F2>.
Complément d'information :
Si le nouveau compte nécessite un traitement particulier (exemple compte vente d'occasion,
Ventes export etc…), il ne doit pas être rattaché à une catégorie comptable. Il sera à gérer dans la
Table de Décision « TD_COMPTES COMPTABLES V2 ».
Gérer les journaux comptables
GÉRER LES JOURNAUX COMPTABLES
Les écritures comptables faites dans ARTIS.net concernent :
§ Les achats (journal d'achat),
§ Les ventes (journal de vente).
Si le module "Financement" est installé, et plus particulièrement la partie dossier de financement
Banque, alors s'ajoutent :
§ Les écritures de loyer (journal de trésorerie).
Paramètres application / Classifications, listes et tables de décision / Gérer les classifications
1. <+>,
2. Sélectionner l'organisation interne, l'exercice comptable,
3. Donner le code journal et son libellé, le type de journal, le code de correspondance en
comptabilité,
4. <Disquette> ou <F2>.
Remarque
Dans le cas de multiples organisations internes, il est souhaitable d'avoir des codes journaux
différents sur l'ensemble des comptabilités des entités juridiques.
Cela permet d'avoir un contrôle sur le code journal lors des imports dans les logiciels de
comptabilité.
Remarque
Dans le cas d'un journal de trésorerie et suivant le mode de génération des écritures de loyer, il est
nécessaire d'indiquer le compte de trésorerie qui convient. Cela vent donc dire qu'il y a un journal
par banque, consulter le chapitre Paramétrer les types de dossiers de financement.

Lister le plan comptable
LISTER LE PLAN COMPTABLE
Position Position
lettrée Label de la colonne Format Commentaire
1 A Code en comptabilité  Texte
2 B Intitulé  Texte
3 C Numéro  Texte
4 D Classe cpta générale  Texte
5 E Sous classe Charges  Texte
6 F Sous classe Produits  Texte
7 G Sous classe Tiers  Texte
Cette option permet de lister tous les comptes présents dans ARTIS.net. Ils se répartissent ainsi :
Classe cpta générale Sous classe Tiers
Compte de charges
Compte de produits
Compte de tiers Compte collectif clients
Compte collectif fournisseurs
Compte de TVA collectée
Compte de TVA déductible
Compte de trésorerie
Gérer les taux de TVA
Modifier, déterminer la TVA à appliquer
MODIFIER LE TAUX DE TVA
Comptabilité / Paramètres / Gérer les taux de TVA
Un changement de taux de TVA consiste à :
o Indiquer une date de fin d'application sur un des taux utilisés,
o saisir un nouveau taux en indiquant une date de début et de fin d'application.
Pour saisir un nouveau taux, il est nécessaire de filtrer à la fois le code TVA et le régime fiscal.
Sinon <Crayon> n'est pas activé.
1. Code TVA : saisir le code,
2. Régime fiscal : Saisir le code,
3. Pour modifier les informations de laligne : <Modifier> ou <Crayon>,
4. Saisir les informations,
5. Toujours en modification, le cas échéant, faire <+> pour créer une nouvelle ligne,
6. Saisir les informations de la nouvelle ligne (vérifier la continuité des périodes),
7. <Disquette> ou <F2>.
ARTIS.net procède à un contrôle (Attention : dans le cas où la base de données contient beaucoup
de documents, commande, BL, facture, le traitement peut s'avérer long).
En cas d'anomalie lors de la validation, une infobulle s'affiche  indiquant les problèmes rencontrés,
exemple pour 2014 :
Une infobulle indique qu'il y a déjà des documents avec l'ancien taux (19.6%) présents dans la
période couverte par le nouveau taux saisi 20%.
S'il s'agit de commandes ou de livraisons, il faudra supprimer et ressaisir ces documents pour
prendre en compte le nouveau taux, exemple d'une commande trouvée sur une période sans taux
de TVA à appliquer (elle possède l'ancien taux (19.6) et sa date (02/01/2014) est postérieure à celle
de la fin d'application (31/12/2013).
DÉTERMINER LA TVA À APPLIQUER
Principe d'application des taux de TVA
Chaînage des ventes
Le fait générateur de la TVA est :
o La date de la livraison pour la vente de marchandises,
o La date d'intervention pour les prestations de service (si la demande est réalisée sur plusieurs
jours, c'est celui de la dernière intervention qui détermine le taux de TVA à appliquer).
Si des factures dont faites sur 2014 à partir de bons de livraisons de 2013 et de 2014, Il y aura des
lignes de factures avec une TVA à 19,6% et d'autres avec 20%.
Livraison ou
CRIT
Facture
(par chaînage)
Facture SSC ou
Directe
Avoir TVA Principale TVA des Frais de
facture (FTC)
2013 2014 Taux 2013 (19.6 %) Taux 2014 (20 %)
2014 2013 Taux 2014 (20 %) Taux 2013 (19.6 %)
2014 2014 Taux 2014 (20 %) Taux 2014 (20 %)
2013 Taux 2013 (19.6 %) Taux 2013 (19.6 %)
2014 Taux 2014 (20 %) Taux 2014 (20 %)
2013 2014 Taux 2013 (19.6 %) Taux 2013 (19.6 %)
2014 2014 Taux 2014 (20 %) Taux 2014 (20 %)
2014 2013 Taux 2014 (20 %) Taux 2014 (20 %)
2013 2014 Taux 2013 (19.6 %) Taux 2013 (19.6 %)
2014 2014 Taux 2014 (20 %) Taux 2014 (20 %)
Factures Fournisseurs
Pour le cas des réceptions fournisseurs faites sur une période de transition, vous pourrez modifier la
TVA sur l'en-tête de la facture.
Détermination du taux de TVA
Comptabilité / Paramètres / Gérer les taux de TVA
Pour le calcul de TVA, ARTIS se base sur le régime fiscal lié à l'adresse déterminée de la façon
suivante :
o Si il s'agit d'une facture de livraison : l'adresse de livraison est prise en compte (pour une ligne
de facture lié à une ligne de livraison)
o Si il s'agit d'une facture d'intervention : l'adresse de l'intervention est prise en compte
o Sinon l'adresse d'envoi de la facture (sur l'entête de la facture) est prise en compte
On entend par adresse, un site enregistré sur le tiers.
Puis, ARTIS détermine le taux suivant la table suivante :
Code
TVA Libellé TVA Taux
TVA
Date début
application
Date fin
application Code régime fiscal Libellé régime fiscal
E Exonéré 0 01/01/2000 01/01/3000 FRA France
E Exonéré 0 01/01/2000 01/01/3000 DOM-TOM-CT Département et Territoire Outre Mer &
Collectivités Territoriales
E Exonéré 0 01/01/2000 01/01/3000 HCE Hors CEE
E Exonéré 0 01/01/2000 01/01/3000 EXO France exonéré
E Exonéré 0 01/01/2000 01/01/3000 MON Monaco
N Normal 20 01/01/2014 01/01/3000 FRA France
N Normal 0 01/01/2000 01/01/3000 DOM-TOM-CT Département et Territoire Outre Mer &
Collectivités Territoriales
N Normal 0 01/01/2000 01/01/3000 HCE Hors CEE
N Normal 0 01/01/2000 01/01/3000 EXO France exonéré
N Normal 0 01/01/2000 01/01/3000 MON Monaco
P Parking 0 01/01/2000 01/01/3000 DOM-TOM-CT Département et Territoire Outre Mer &
Collectivités Territoriales
P Parking 0 01/01/2000 01/01/3000 HCE Hors CEE
P Parking 0 01/01/2000 01/01/3000 EXO France exonéré
P Parking 0 01/01/2000 01/01/3000 MON Monaco
R Réduit 0 01/01/2000 01/01/3000 DOM-TOM-CT Département et Territoire Outre Mer &
Collectivités Territoriales
R Réduit 6 01/01/2000 01/01/3000 FRA France
R Réduit 0 01/01/2000 01/01/3000 HCE Hors CEE
R Réduit 0 01/01/2000 01/01/3000 EXO France exonéré
R Réduit 0 01/01/2000 01/01/3000 MON Monaco
S Super Réduit 0 01/01/2000 01/01/3000 DOM-TOM-CT Département et Territoire Outre Mer &
Collectivités Territoriales
S Super Réduit 2 01/01/2000 01/01/3000 FRA France
S Super Réduit 0 01/01/2000 01/01/3000 HCE Hors CEE
S Super Réduit 0 01/01/2000 01/01/3000 EXO France exonéré
S Super Réduit 0 01/01/2000 01/01/3000 MON Monaco
Z9 Normal 20 01/01/2000 01/01/3000 FRA France
Code TVA dans les articles
Articles / Articles / Gérer les articles
En création ou en modification d'article, dans la zone "Info ventes" / "TVA", un tableau liste les
régimes fiscaux :
E Exonéré
N Normal
P Parking
R Réduit
S Super Réduit
Z9 Normal (19.6)
A chaque article, il est nécessaire de préciser la TVA à appliquer.
Régime fiscal selon le pays des Client / Fournisseur
Lors de la création d'un tiers, si le pays est sélectionné, le régime fiscal est automatiquement pré-
rempli.
Il reste modifiable tant que des factures ne sont pas enregistrées à son nom.
Chaque site des tiers a un régime fiscal.
FRA France
CEE CEE
HCE Hors CEE
EX O France exonéré
MON Monaco
DOM-TOM-CT Département et Territoire Outre Mer & Collectivités Territoriales
Ces régimes fiscaux sont directement insérés dans la base de données (Table t_regimefiscal).
Déterminer les comptes de TVA
DETERMINER LES COMPTES DE TVA
Paramètres application / Classifications, Listes et tables de décision / Gérer les tables de
décisions
Modifier la table de décision "TD_CptTvaV2".
Le paramétrage suivant permet de déterminer des comptes de TVA uniques ou différents. Le cas ci-
dessous correspond à :
o Cas par défaut de la TVA sur les débits
o pour une seule organisation interne
o ou plusieurs organisations internes ayant la même gestion de la TVA
Numéro Option TVA Sens du flux Nature du flux Code TVA Code régime fiscal Date début validité Date fin validité Compte TVA Flag TVA
1 * COLLECTEE * * * 01/01/1970 01/01/3000 445710
2 * DEDUCTIBLE * * * 01/01/1970 01/01/3000 445660
Dans cet exemple, Il n'existe qu'un seul compte de TVA collectée, et un seul compte de TVA
déductible.
Rappel : la présence "*" indique que le valeur du paramètre n'a pas d'importance comme critère de
sélection. Consulter Critère dans les tables de décision
Description des colonnes
Option TVA
Ce paramètre n'a d'intérêt que dans le cadre multi-organisations internes ayant une mise en place
de la TVA propre à chaque organisation interne. Il doit être mis en place par un utilisateur avertit.
Le paramètre obligatoire « OPTION_TVA » est un mot clé qui est pris comme critère de sélection
de la première colonne de la table de décision TD_CptTvaV2
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre ‘OPTION_TVA'
Valeur :
§ DEBIT (valeur par défaut)
§ ENCAISSEMENT
§ ou un autre mot clé repère
Sens du flux
Le sens du flux est déterminé lors du traitement de la génération des écritures. Il existe 2 sens :
o COLLECTEE : correspond au traitement des ventes
o DEDUCTIBLE : correspond au traitement des achats
Nature du flux
Il faut déterminer la nature du flux (SERVICE ou AUTRE) à partir d'une catégorie comptable.
Pour une mise en place de TVA sur ENCAISSEMENT, il est nécessaire de compléter cette table
de décision « TD_NatureFlux » en précisant quelles sont les catégories comptables qui sont de
nature "SERVICE" ou "AUTRE". Dans cette table, seules des catégories comptables de vente vont
être paramétrées.
Paramètres application / Classifications, Listes et tables de décision / Gérer les tables de
décisions
Modifier la table "TD_NatureFlux"
La table par défaut est :
Num éro Catégorie com ptable Nature du flux
1 * AUTRE
Autre exemple :
Num éro Catégorie com ptable Nature du flux
1 Achat pièces détachées Informatique AUTRE
2 * DEDUCTIBLE
ATTENTION, le libellé exact de la catégorie comptable doit être reporté.
Rappel : une catégorie comptable est associer à 1 ou plusieurs comptes comptables.
Catégorie comptable
Consulter Classification comptable
Plan comptable
Consulter Plan comptable
Code TVA
Consulter Code TVA
Code régime fiscal
Consulter Régime fiscal
Date début validité et Date fin validité
indiquer les dates précises ou du 01/01/2000 au 01/01/3000 pour ne pas bloquer les informations de
date à date.
Compte TVA
Saisir le compte à prendre en compte
Celui-ci doit être saisi dans le plan comptable : Consulter Gérer le plan comptable
Flag TVA
Spécifique à certaines interfaces comptables, à défaut : Ne rien Mettre
Cette option donne la possibilité d'attribuer un code taxe utilisé dans la comptabilité générale (dans
le cas de SAGE par exemple, une table "Code taxe" est à compléter). Se reporter à Flag
TVA.
Autres Exemples

Cas de la TVA sur les débits avec plusieurs comptes de TVA
pour une seule organisation interne ou
plusieurs organisation internes ayant la même gestion de la TVA.
Numéro Option TVA Sens du flux Nature du flux Code TVA Code régime fiscal Date début validité Date fin validité Compte TVA Flag TVA
1 * COLLECTEE * N * 01/01/1970 31/12/2013 44571001
2 * COLLECTEE * N * 01/01/2014 01/01/3000 44571002
3 * COLLECTEE * R * 01/01/1970 31/12/2013 44571011
4 * COLLECTEE * R * 01/01/2014 01/01/3000 44571012
5 * DEDUCTIBLE * N * 01/01/1970 31/12/2013 44566001
6 * DEDUCTIBLE * N * 01/01/2014 01/01/3000 44566002
7 * DEDUCTIBLE * R * 01/01/1970 31/12/2013 44566011
8 * DEDUCTIBLE * R * 01/01/2014 01/01/3000 44566012
Le paramétrage peut être plus complet en faisant intervenir les  différents régimes fiscaux dans la
colonne "Code régime fiscal" du tableau.
ATTENTION : L'ordre des lignes est important.
Vérifier l'ordre des lignes de la table car elle est lue de façon séquentielle. Une condition particulière
doit toujours être placée avant une condition générale (exemple, code régime fiscal CEE avant code
régime fiscal général (*)).
Pour la syntaxe et caractéristique sur les critères : voir Critère dans les tables de décision
Cas de la TVA sur les encaissements/débits avec plusieurs comptes de TVA
pour une seule organisation interne ou
plusieurs organisations internes ayant la même gestion de la TVA.
Numéro Option TVA Sens du flux Nature du flux Code TVA Code régime fiscal Date début validité Date fin validité Compte TVA Flag TVA
1 * COLLECTEE SERVICE N * 01/01/1970 31/12/2013 445710201
2 * COLLECTEE SERVICE N * 01/01/2014 01/01/3000 445710202
3 * COLLECTEE SERVICE R * 01/01/1970 31/12/2013 445710211
4 * COLLECTEE SERVICE R * 01/01/2014 01/01/3000 445710212
5 * COLLECTEE * N * 01/01/1970 31/12/2013 445710101
6 * COLLECTEE * N * 01/01/2014 01/01/3000 445710102
7 * COLLECTEE * R * 01/01/1970 31/12/2013 445710111
8 * COLLECTEE * R * 01/01/2014 01/01/3000 445710112
9 * DEDUCTIBLE * N * 01/01/1970 31/12/2013 44566001
10 * DEDUCTIBLE * N * 01/01/2014 01/01/3000 44566002
11 * DEDUCTIBLE * R * 01/01/1970 31/12/2013 44566011
12 * DEDUCTIBLE * R * 01/01/2014 01/01/3000 44566012
Le paramétrage peut être plus complet en faisant intervenir les  différents régimes fiscaux dans la
colonne "Code régime fiscal" du tableau.
Lors de l'interface des écritures en comptabilité, ARTIS va utiliser le flag TVA.
Se reporter à Flag TVA
Remarque
Factures clients
Pour interpréter la colonne "Option TVA", la valeur pour les factures client est celle du
paramètre « OPTION_TVA » de l'organisation interne qui a émis la facture.
Factures fournisseurs
Sans paramétrage, la colonne prendra la valeur « DEBIT » par défaut.
Toutefois, il y a la possibilité d'indiquer l'option TVA sur encaissement  pour les fournisseurs
ayant opté pour ce régime.
Pour cela, il faut :
1. Créer une classification qui classifie les organisations et dont l'identifiant technique est
« OPTION_TVA ».
2. Dans cette classification, on aura 2 catégories : ENCAISSEMENT et DEBIT.
3. Classifier le fournisseur dans la catégorie ENCAISSEMENT
ATTENTION : L'ordre des lignes est important.
Vérifier l'ordre des lignes de la table car elle est lue de façon séquentielle. Une condition particulière
doit toujours être placée avant une condition générale (exemple, code régime fiscal CEE avant code
régime fiscal général (*)).
Pour la syntaxe et caractéristique sur les critères : voir Critère dans les tables de décision
Cas de la TVA sur les encaissements/débits avec plusieurs comptes de TVA
pour plusieurs organisations internes ayant des gestions de la TVA
différentes
Le paramètre OPTION_TVA va être par exemple :
o Pour l'organisation interne 01 : DEBIT
o Pour l'organisation interne 02 : ENCAISSEMENT-02
o Pour l'organisation interne 03 : ENCAISSEMENT-03
Numéro Option TVA Sens du flux Nature du flux Code TVA Code régime fiscal Date début validité Date fin validité Compte TVA Flag TVA
1 DEBIT COLLECTEE * N * 01/01/1970 31/12/2013 445710901
2 DEBIT COLLECTEE * N * 01/01/2014 01/01/3000 445710902
3 * COLLECTEE SERVICE N * 01/01/1970 31/12/2013 445710201
4 * COLLECTEE SERVICE N * 01/01/2014 01/01/3000 445710202
5 ENCAISSEMENT-02 COLLECTEE SERVICE R * 01/01/1970 31/12/2013 445710211
6 ENCAISSEMENT-02 COLLECTEE SERVICE R * 01/01/2014 01/01/3000 445710212
7 ENCAISSEMENT-03 COLLECTEE SERVICE R * 01/01/1970 31/12/2013 445710311
8 ENCAISSEMENT-03 COLLECTEE SERVICE R * 01/01/2014 01/01/3000 445710312
9 * COLLECTEE * N * 01/01/1970 31/12/2013 445710101
10 * COLLECTEE * N * 01/01/2014 01/01/3000 445710102
11 * COLLECTEE * R * 01/01/1970 31/12/2013 445710111
12 * COLLECTEE * R * 01/01/2014 01/01/3000 445710112
13 * DEDUCTIBLE * N * 01/01/1970 31/12/2013 44566001
14 * DEDUCTIBLE * N * 01/01/2014 01/01/3000 44566002
15 * DEDUCTIBLE * R * 01/01/1970 31/12/2013 44566011
16 * DEDUCTIBLE * R * 01/01/2014 01/01/3000 44566012
Lors de l'interface des écritures en comptabilité, ARTIS va utiliser le flag TVA.
Se reporter à Flag TVA
Explication :
o TVA déductible
§ Pour toutes les organisations internes :
· Tous les montants de TVA au taux normal seront ventilés en utilisant les
lignes 13 et 14
· Tous les montants de TVA au taux réduit seront ventilés en utilisant les lignes
15 et 16
o TVA Collectée
§ Pour l'organisation interne 01 :
· Tous les montants de TVA au taux normal seront ventilés en utilisant les
lignes 1 et 2
· Tous les montants de TVA au taux réduit seront ventilés en utilisant les lignes
11 et 12
§ Pour l'organisation interne 02 :
· Les montants de TVA sur les services au taux normal seront ventilés en
utilisant les lignes 3 et 4
· Les montants de TVA sur les services au taux réduit seront ventilés en
utilisant les lignes 5 et 6
· Les montants de TVA autre (dont sur matériel) au taux normal seront ventilés
en utilisant les lignes 9 et 10
· Les montants de TVA autre (dont sur matériel) au taux réduit seront ventilés en
utilisant les lignes 11 et 12
§ Pour l'organisation interne 03 :
· Les montants de TVA sur les services au taux normal seront ventilés en
utilisant les lignes 3 et 4
· Les montants de TVA sur les services au taux réduit seront ventilés en
utilisant les lignes 7 et 8
· Les montants de TVA autre (dont sur matériel) au taux normal seront ventilés
en utilisant les lignes 9 et 10
· Les montants de TVA autre (dont sur matériel) au taux réduit seront ventilés en
utilisant les lignes 11 et 12
ATTENTION : L'ordre des lignes est important.
Vérifier l'ordre des lignes de la table car elle est lue de façon séquentielle. Une condition particulière
doit toujours être placée avant une condition générale (exemple, code régime fiscal CEE avant code
régime fiscal général (*)).
Pour la syntaxe et caractéristique sur les critères : voir Critère dans les tables de décision
Flag TVA
Le flag comporte :
o Le premier caractère est obligatoirement numérique. Il permet de définir la hiérarchie dans la
prise en compte du choix du code taxe (exemple : cas d'une facture ayant des lignes de nature
de flux différente. En générale l'ordre est : 1-Débit puis 2-Encaissement et enfin 3-Exo).
o Les caractères  suivant correspondent à un code comptable. Ces codes comptables doivent
être enregistrés dans le plan comptable ARTIS. Les codes en comptabilité de ces comptes
sont utilisés dans l'interface des écritures.
Déterminer les compte de Ventes HT
DÉTERMINER LES COMPTE DE VENTES HT
Les comptes de ventes et d'achats sont déterminer en fonction de la catégorie comptable de
l'article vendu et de l'article acheté. Ces deux éléments sont gérés dans la fiche article.
Il est possible de ventiler les HT selon des critères supplémentaires, en complétant la table de
décision ci-dessous.
Paramètres application / Classifications, Listes et tables de décision / Gérer les tables de
décisions
Modifier la table de décision "TD_CompteComptableV2".
Numéro Catégorie comptable Statut juridique du bien Marque bien / article Code régime fiscal Mode de financement Compte comptable
1 * NEUF * * * 707001
2 * OCCASION * * * 707002
Pour la syntaxe et caractéristique sur les critères : consulter Critère dans les tables de décision
o Catégorie comptable : Il s'agit d'une classification : consulter Classification comptable
ATTENTION, le libellé exact de la catégorie comptable doit être reporté.
o Statut juridique du bien : NEUF ou OCCASION
o Marque du Bien / Article
o Code du régime fiscal : consulter Régime fiscal
o Mode de financement
o Compte comptable : Saisir le compte à prendre en compte. Celui-ci doit être saisi dans le plan
comptable, consulter Plan comptable
Appliquer une TVA différente
APPLIQUER UNE TVA DIFFÉRENTE
Si des utilisateurs d'ARTIS.net demande à pouvoir faire des factures datées de 2014 à une TVA à
19.6 (pour avoir une facture correcte en corps et pied de facture), la procédure est la suivante :
o Mise à jour de la table de gestion des taux de TVA,
o Saisie de la TVA dans la facture.
o Cette manipulation se fait facture par facture, donc au cas par cas, sur les demandes faites par
les clients finaux,
o Les points 1, 2 et 3 ne se font qu'une seule fois.

Mise à jour de la table de gestion des taux de TVA
La mise à jour peut se faire de deux façons :
o Cas 1 : Soit un nouveau code est créé, puis la table est actualisée, puis appliquer cette TVA
dans la facture,
o Cas 2 : Soit la table est actualisée en reprenant une ligne qui n'a jamais été utilisé et ne l'aurait
jamais été, puis appliquer cette TVA dans la facture.
Cas 1 : Création d'un nouveau code
1. Contacter ARTIS pour créer un code TVA, exemple « Z9, Normal, 01/01/2000, 01/01/3000
» (Création en base, contacter ARTIS pour cette opération),
Comptabilité / Paramètres /  Gérer les taux de TVA
2. Section "Filtres" : Code TVA : saisir le code,
3. Section "Filtres" : Régime fiscal : Saisir le code,
4. Pour modifier les informations de laligne : <Modifier> ou <Crayon>,
5. Toujours en modification, le cas échéant, faire <+> pour créer une nouvelle ligne,
6. Saisir les informations de la nouvelle ligne (vérifier la continuité des périodes),
7. <Disquette> ou <F2>,
Paramètres application / Paramètres application / Gérer les paramètres
8. Paramétrer la table de décision (Table de décision « TD_CptTva2 ») :
Num éro Option TVA Sens du flux Nature du flux Code TVA
Code
régim e
fiscal
Date début
validité
Date fin
validité Com pte TVA Flag TVA
1 * COLLECTEE * Z9 * 01/01/2014 01/01/3000 44572000 1CODETAXEISCA_DEB
19
Appliquer cette TVA dans la facture :
9. Lors de la création, la facture est donc au taux habituel de 20%. L'utilisateur doit modifier
manuellement le code de la TVA des lignes de la facture : dans notre exemple, le code TVA
doit être passé du code « N » au code « Z9 ».
10. La facture est recalculée automatiquement.
11. Au moment de la génération des écritures, le compte est pris en compte (Rappel : dans
l'écriture comptable, on utilise la valeur « Code de correspondance en compta »).
Cas 2 : Modification d'une ligne

Comptabilité / Paramètres /  Gérer les taux de TVA
1. Section "Filtres" : Code TVA : saisir le code, exemple : Parking,
2. Section "Filtres" : Régime fiscal : Saisir le code, exemple : France,
3. Pour modifier les informations de laligne : <Modifier> ou <Crayon>,
4. Mettre le nouveau taux à appliquer,
5. <Disquette> ou <F2>.
Appliquer cette TVA dans la facture :
6. Lors de la création, la facture est donc au taux habituel de 20%. L'utilisateur doit modifier
manuellement le code de la TVA des lignes de la facture : dans notre exemple, le code TVA
doit être passé du code « N » au code correspondant à celui modifier ci-dessus.
7. La facture est recalculée automatiquement.
