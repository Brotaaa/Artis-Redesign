# Particularités

> Categorie: Comptabilité | Pages 686-695

## Sous-rubriques
- Blocages et Alertes (p.686)
- Consulter la comptabilité depuis ARTIS.net (p.688)
- Gérer les Alertes et Blocages des clients (p.688)
- Gérer les en-cours des clients et échéances non soldées (p.690)
- Lister les clients bloqués ou ayant une certaine alerte (p.690)
- Préfixer les comptes auxiliaires (p.691)
- Paramètres (p.691)

8. Au moment de la génération des écritures, le compte est pris en compte (Rappel : dans
l'écriture comptable, on utilise la valeur « Code de correspondance en compta »).
Particularités
Blocages et Alertes
BLOCAGES ET ALERTES
La recherche des informations comptables
La recherche des informations comptables varie suivant les implémentations :
· Standard Artis Sage ligne 100 SQL Server (procédures stockées)
· Standard Artis Sage Ligne 100 JDBC-ODBC (pas de procédure stockée, la requête est dans le
code)
· Client TOSHIBA Sage Ligne 1000 (procédures stockées)
· Client CANON (pas de lien avec la comptabilité ORACLE Financial)
Standard Artis Sage ligne 100 SQL Server (procédures stockées)
Compte tiers bloqué (Oui, Non) : sp_regltiersbloque(Compte auxiliaire client en comptabilité)
Montant de l'encours autorisé pour le tiers : sp_EncoursTiersSaisi(Compte auxiliaire client en
comptabilité)
Liste des échéances non soldées échues et non échues à la date du jour :
sp_EcheancesNonSoldees(Compte auxiliaire client en comptabilité,  date fin de période, Date début
exercice)
Le solde comptable est obtenu en additionnant les montants des échéances ci-dessus.
Standard Artis Sage Ligne 100 JDBC-ODBC (pas de procédure stockée, la requête est dans
le code)
Compte tiers bloqué (Oui, Non) : les paramètres (Compte auxiliaire client en comptabilité)
Montant de l'encours autorisé pour le tiers : les paramètres (Compte auxiliaire client en
comptabilité)
Liste des échéances non soldées échues et non échues à la date du jour : les paramètres (Compte
auxiliaire client en comptabilité,  Date début exercice, date fin de période)
Le solde comptable est obtenu en additionnant les montants des échéances ci-dessus.
Spécifique Artis Sage Ligne 1000 (procédures stockées)
Compte tiers bloqué (Oui, Non) : sp_regltiersbloque(Valeur du paramètre comptable
“CODE_ORGINT_COMPTA » correspondant à l'organisation interne, Code du client)
Montant du solde du compte comptable échu et non échu arrêté à la date du jour :
sp_SoldeComptableCompteTiers(Valeur du paramètre comptable “CODE_ORGINT_COMPTA »
correspondant à l'organisation interne, Code du client, Date du jour)
Montant du solde du compte comptable échu arrêté à la date du jour :
sp_SoldeComptableEchu(Valeur du paramètre comptable “CODE_ORGINT_COMPTA » correspondant à
l'organisation interne, Code du client, Date du jour)
Montant de l'encours autorisé pour le tiers : sp_EncoursTiersSaisi(Valeur du paramètre comptable
“CODE_ORGINT_COMPTA » correspondant à l'organisation interne, Code du client)
Liste des échéances non soldées échues et non échues à la date du jour :
sp_EcheancesNonSoldees(Valeur du paramètre comptable “CODE_ORGINT_COMPTA » correspondant à
l'organisation interne, Code du client, Date du jour)
Liste des échéances non soldées échues à la date du jour :sp_EcheancesEchues(Valeur du
paramètre comptable “CODE_ORGINT_COMPTA » correspondant à l'organisation interne, Code du client,
Date du jour)
Montant du total d'un journal sur une période : sp_MontantJournalPeriode(Valeur du paramètre
comptable “CODE_ORGINT_COMPTA » correspondant à l'organisation interne, Code journal, Date début
période, Date fin de période)
Spécifique Artis (pas de lien avec la comptabilité ORACLE Financial)
Pour diverses raisons, il n'est pas possible d'effectuer des requêtes dans la bas ORACLE
FINANCIAL du client.
De ce fait, il n'est pas possible d'obtenir la liste des échéances non soldées.
Par contre, il existe une interface journalière entre Oracle Financial et Artis permettant d'importer la
valeur du solde du compte client dans les comptes auxiliaires Artis (à J+1).
La valeur de l'encours client autorisé est saisie dans la fiche client Artis.
Calcul de l'encours
Calcul de l'encours = Montant TTC du commandé non livré + Montant TTC du Livré non facturé +
montant TTC du Facturé non comptabilisé + Montant des écritures non interfacées + Solde comptable
Visualisation des informations comptables
Les informations comptables peuvent être visualisées :
- à partir de la fiche client (onglet client, relation client) en cliquant sur le lien « Echéances non
soldées ». Les informations détaillées sont visualisées sont celles de l'ensemble des organisations
internes du tableau.
- à partir de la fiche client (onglet client, comptes comptables auxiliaires) en cliquant sur le lien
« Afficher le solde client ». Les informations du solde sont visualisées pour chacune des
organisations internes.
Blocages et Alertes
Les contrôles permettant d'alerter ou de bloquer les saisies sont effectuées en saisie de :
· facture
· commande client
· devis commercial client
· demande d'intervention
Le paramétrage des alertes et blocages peut varier suivant les implémentations :
· Soit aucune alerte ni blocage
· Soit seulement avec la table de décision TD_BLOCAGE_PARAM
· Soit avec le contrôle de l'encours par rapport à l'encours autorisé (si saisi) et  avec la table de
décision TD_BLOCAGE_PARAM
Les éléments de la table de décision TD_BLOCAGE_PARAM :
Les conditions :
- Nb de jours de retard : nombre de jours à partir duquel une alerte ou un blocage est déclenché.
Indiquer -1 pour ne pas prendre en compte ce critère
- Code client : liste de codes client à bloquer (séparés par des '|')
- Type client : abréviations de catégories de la classification client définie par le paramètre
CLASSIF_ORGCLTE_BLOCAGE1  (séparés par des '|')
- Classement : abréviations de catégories de la classification client définie par le paramètre
CLASSIF_ORGCLTE_BLOCAGE2 (séparés par des '|')
- Autre classement : abréviations de catégories de la classification client définie par le paramètre
CLASSIF_ORGCLTE_BLOCAGE3 (séparés par des '|')
- Seuil de blocage : montant du solde à partir duquel une alerte ou un blocage est déclenché.
Indiquer -1 pour ne pas prendre en compte ce critère
- Blocage compta : Vérifier dans la comptabilité si le client est bloqué (nécessite un lien), * pour
ignorer ce contrôle, OUI pour uniquement les clients bloqués.
Les actions :
- Alerte / Blocage : 'BLOCAGE' pour bloquer la saisie, 'ALERTE' pour avoir un message d'alerte.
Le mot BLOCAGE interdit la saisie. Le mot ALERTE propose un message à valider par l'opérateur.
A noter que la table des alertes et blocages peut être « pilotée » par des éléments extra
comptables tels que le code client et les 3 classifications clients. On peut donc gérer des alertes et des
blocages à partir de cette table sans qu'il y ait de lien direct avec la comptabilité.
Deblocages
La seule manière de débloquer une saisie est de gérer une table de décision
TD_CLIENTS_DEBLOQUES_TEMPO_ENCOMPTA.
La condition de la table est le code du client débloqué et l'action est la date maxi de déblocage.
(Il existe une autre implémentation qui n'autorise pas de déblocage), consulter '
  '
Consulter la comptabilité depuis ARTIS.net
CONSULTER LA COMPTABILITÉ DEPUIS ARTIS.NET
Lien de consultation en comptabilité
Une requête peut être mise en place dans la base de données relationnelle de la comptabilité
générale, afin que depuis ARTIS.NET, l'utilisateur puisse connaître le solde comptable d'un client,
ainsi que ses écritures non soldées (écritures non lettrées).
Appeler ARTIS pour valider la faisabilité de cette fonctionnalité.
Prise en compte du solde et prise en compte des écritures
Selon les comptabilités installées, il est nécessaire d'ajusté les dates d'exercices d'ARTIS.NET par
rapport aux dates d'exercices de la comptabilité générale. En effet, dans le cas contraire, le
montant pourrait être multiplié. Cela tient au fait de la gestion des à nouveaux dans la comptabilité
générale.
C'est le cas de SAGE.
Consulter Gérer les exercices comptables et Gérer les en-cours des clients et échéances non
soldées
Gérer les Alertes et Blocages des clients
GÉRER LES ALERTES ET BLOCAGES DES CLIENTS
Les règles de blocage des comptes s'appliquent dans les écrans suivants :
o Gestion des Demandes de prestations (DITs)
o Gestion des Résultats de prestations (CRITs)
o Gestion des commandes clients (Si vous avez mis en place la gestion de l'état ‘Brouillon', vous
pouvez quand même enregistrer la commande)
o Gestion des factures clients
Paramétrage
Définition de la table de décision Paramétrage de la Tables de décision
Paramètres application / Classifications, Listes et tables de décision / Gérer les tables de
décisions
Modifier la table de décision ‘TD_BLOCAGE_PARAM'. Chaque ligne correspond à une règle de
blocage.
o Nbre de jour de retard Cette colonne est utilisée pour une interface client spécifique.
Mettez ‘0'
o Code client Indiquez le(s) code(s) client(s) concerné(s) séparé(s) par un
‘Pipe' (ou ‘|'). Sinon, mettez une ‘*' pour tous les sélectionner.
o Classif 1 (Alertes clients) Saisissez le(s) code(s) de la catégorie à bloquer, séparé(s) par un
‘Pipe' (ou ‘|').
o Classif 2 Saisissez le(s) code(s) de la catégorie à bloquer, séparé(s) par un
‘Pipe' (ou ‘|').
o Classif 3 Saisissez le(s) code(s) de la catégorie à bloquer, séparé(s) par un
‘Pipe' (ou ‘|').
o Seuil de blocage Cette colonne est utilisée pour une interface client spécifique.
Mettez ‘0'
o Blocage compte Cette colonne est utilisée pour une interface client spécifique.
Mettez une ‘*'
o Alerte/blocage Indiquez ‘ALERTE' pour obtenir uniquement un message non
bloquant ou ‘BLOCAGE' pour obtenir un message bloquant.

Paramètres
Paramètres application / Paramètres application / Gérer les paramètres
Déclarez le nom de la table de décisions ‘TD_BLOCAGE_PARAM' dans le paramètre du même
nom (TD_BLOCAGE_PARAM) dans le module ‘COMPTABILITE‘.
o Domaine "COMPTABILITE"
o Code du paramètre "TD_BLOCAGE_PARAM",
o Mettre dans la valeur "TD_BLOCAGE_PARAM"
o Domaine "COMPTABILITE"
o Code du paramètre "CLASSIF_ORGCLTE_BLOCAGE1"
o Indiquez l'abréviation (code) de la classification utilisée pour le blocage des clients dans le
paramètre
En fonction des règles de blocage, spécifier deux autres classifications dans les paramètres
‘CLASSIF_ORGCLTE_BLOCAGE2' et ‘CLASSIF_ORGCLTE_BLOCAGE3'.
Gérer les en-cours des clients et échéances non soldées
GÉRER LES EN-COURS DES CLIENTS ET ÉCHÉANCES NON
SOLDÉES
Tiers / Clients / Gérer les organisations de type Client / Comptabilité
ou
"Échéances non soldées" accessible depuis plusieurs écrans (tiers, commande, SSC, DIT).
L'en-cours total comprend la somme des montants suivants :
o Le portefeuille de commandes (commandes non livrées, livrées et non facturées, commandes
facturées non comptabilisées, écritures non interfacées)
o Le Solde remonté de l'interface avec la Comptabilité (développement spécifique)
o L'en-cours autorisé
Le détail des écritures non soldées proviennent de la comptabilité (développement spécifique). Si
des lignes concernent des factures issues d'ARTIS.net, il est possible de cliquer dessus pour
consulter la dite facture.
Pour certains logiciels, il est nécessaire de bien mettre la date de début d'exercice en cours, sous
peine d'avoir les lignes en double (c'est le cas de Sage, suite à la clôture et au report des A-
Nouveaux).
En-cours autorisé
L'en-cours autorisé se saisit : Tiers / Clients / Gérer les organisations de type Client, onglet
"Client", Tableau "Relation client".
Remarque
Ces informations s'inscrivent dans le cadre de l'interface des soldes clients avec ARTIS, voir
Consulter la comptabilité depuis ARTIS.net.
Lister les clients bloqués ou ayant une certaine alerte
LISTER LES CLIENTS BLOQUÉS OU AYANT UNE CERTAINE
ALERTE
Tiers / Contrôles des organisations / Consulter les organisations
Dans les critères de sélections :
o Type organisation (Client, Fournisseur, interne...) : Client,
o Classifié dans les classifications : Utiliser la loupe, sélectionner la classification "ALERTES
CLIENTS",
o Classifié dans les catégories : Utiliser la loupe, sélectionner les catégories (alertes) qui sont
bloquantes ou les alertes souhaitées,
o <F2>,
Puis visualiser ou exporter sous Excel
Remarque
Les catégories Alertes qui sont bloquantes (ou non) sont précisées dans la table de décision
‘TD_BLOCAGE_PARAM', consulter Gérer les Alertes et Blocages des clients
Préfixer les comptes auxiliaires
PRÉFIXER LES COMPTES AUXILIAIRES
Paramètres
Préfixe Client
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre est utilisé dans l'écran de création des comptes auxiliaires des clients. La valeur de
ce paramètre permet de déterminer le préfixe à utiliser lors de la création d'un compte auxiliaire.
Paramètre "PREFIX _CPT_CLIENT"
Valeur : exemple, "41"
Préfixe Fournisseur
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre est utilisé dans l'écran de création des comptes auxiliaires des clients. La valeur de
ce paramètre permet de déterminer le préfixe à utiliser lors de la création d'un compte auxiliaire.
Paramètre "PREFIX _CPT_FOURN"
Valeur : exemple, "40"
Paramètres
PARAMÈTRES
Chemin et nom de fichier
Chemin d'interface des clients
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CHEMIN_INTERFACE_CLIENT"
Valeur : exemple "/artis/interface/compta/artis/",
Ce paramètre est utilisé lors de l'interface des clients. Il indique dans quel endroit le fichier
d'interface client sera généré.
Chemin d'interface des fournisseurs
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CHEMIN_INTERFACE_FOURNISSEUR"
Valeur : exemple "/artis/interface/compta/artis/",
Ce paramètre est utilisé lors de l'interface des fournisseurs. Il indique dans quel endroit le
fichier d'interface fournisseur sera généré.
Chemin d'interface des écritures
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CHEMIN_INTERFACE_ECR"
Valeur : exemple "/artis/interface/compta/artis/",
Ce paramètre est utilisé lors de l'interface des écritures. Il indique dans quel endroit le
fichier d'interface écriture sera généré.
Nom du fichier client
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_INTERFACE_CLIENT"
Valeur : exemple "CPTAICLT",
Ce paramètre est utilisé lors de l'interface des clients. La valeur de ce paramètre permet de
retrouver le type de fichier interface à utiliser. Ce type de fichier contient le nom du fichier à
générer.
Nom du fichier fournisseur
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_INTERFACE_FOURNISSEUR"
Valeur : exemple "CPTAIFOU",
Ce paramètre est utilisé lors de l'interface des fournisseurs. La valeur de ce paramètre
permet de retrouver le type de fichier interface à utiliser. Ce type de fichier contient le nom
du fichier à générer.
Nom du fichier écriture
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_INTERFACE_ECR"
Valeur :  exemple "CPTAIECR",
Ce paramètre est utilisé lors de l'interface des écritures. La valeur de ce paramètre permet
de retrouver le type de fichier interface à utiliser. Ce type de fichier contient le nom du
fichier à générer.
Type d'opérations
Facture client
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_TYPEOPERATION_FACTURE_CLIENT"
Valeur : exemple "FC",
Paramètre utilisé lors de la génération des écritures comptables. Ce paramètre désigne le
type d'opération à utiliser lors de la création des transactions comptables. La valeur de ce
paramètre correspond à une valeur dans le logiciel de comptabilité.
Facture fournisseur
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_TYPEOPERATION_FACTURE_FOURNISSEUR"
Valeur : exemple "FF",
Paramètre utilisé lors de la génération des écritures comptables. Ce paramètre désigne le
type d'opération à utiliser lors de la création des transactions comptables. La valeur de ce
paramètre correspond à une valeur dans le logiciel de comptabilité.
Avoir client
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_TYPEOPERATION_AVOIR_CLIENT"
Valeur : exemple "AC",
Paramètre utilisé lors de la génération des écritures comptables. Ce paramètre désigne le
type d'opération à utiliser lors de la création des transactions comptables. La valeur de ce
paramètre correspond à une valeur dans le logiciel de comptabilité.
Avoir fournisseur
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_TYPEOPERATION_AVOIR_FOURNISSEUR"
Valeur : exemple "AF",
Paramètre utilisé lors de la génération des écritures comptables. Ce paramètre désigne le
type d'opération à utiliser lors de la création des transactions comptables. La valeur de ce
paramètre correspond à une valeur dans le logiciel de comptabilité.
Opération diverse
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_TYPEOPERATION_DIVERSE"
Valeur : exemple "OD",
Paramètre utilisé lors de la génération des écritures comptables. Ce paramètre désigne le
type d'opération à utiliser lors de la création des transactions comptables. La valeur de ce
paramètre correspond à une valeur dans le logiciel de comptabilité.
Compte d'escompte
Escompte d'achat, escompte obtenu
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "COMPTE_ESCOMPTE_ACHAT"
Valeur : exemple "76500000",
Numéro compte comptable du compte d'escompte d'achat.
Escompte de vente, escompte accordé
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "COMPTE_ESCOMPTE_VENTE"
Valeur : exemple "66500000",
Numéro compte comptable du compte d'escompte de vente.
Interface, spécifique
Cessions internes
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_JOURNAL_CI"
Valeur : Code du journal des cessions internes, exemple "CI".
Transferts de stock
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_JOURNAL_TS"
Valeur : Code du journal des transferts de stock, exemple "TS".
Analytique, spécifique
Marque
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "TYPE_INTERFACE_ECR"
Valeur :
§ ARTIS : par défaut,
§ TOSHIBA : Déclenche la génération spécifique des écritures des BL et des
interventions, ainsi que d'afficher le détail analytique dans la situation des ventes et des
achats.
Agence fournisseur
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_AGENCE_ORGFOURNISSEUR"
Valeur : Ce paramètre est utilisé dans la génération des écritures. Il indique le code agence utilisé
par défaut pour les organisations fournisseurs.
Agence organisation interne
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_AGENCE_ORGINTERNE"
Valeur : Ce paramètre est utilisé dans la génération des écritures. Il indique le code agence utilisé
par défaut pour les organisations internes.
Marque
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "Marque"
Valeur : Paramètre utilisé uniquement lors du traitement analytique de la comptabilité.
OD analytique
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "ODANA"
Valeur : Paramètre utilisé uniquement lors du traitement analytique de la comptabilité.
Activité analytique
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "ACTIVITE_ANALYTIQUE"
Valeur : Code activité analytique de l'organisation interne.
Compte de coût de revient
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CPTANA"
Valeur : Numéro compte comptable du compte de coût de revient.
Autre, spécifique
Contact pour le recouvrement
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "FONCTION_INTERLOCUTEUR_RECOUVREMENT"
Valeur : exemple "REC",
Fonction de l'interlocuteur.
TABLE DE DÉCISION
Analytique, spécifique
Activité analytique
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
