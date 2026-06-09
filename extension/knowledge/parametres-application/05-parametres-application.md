# Paramètres application

> Categorie: Paramètres Application | Pages 793-803

## Sous-rubriques
- Divers (p.793)
- Gérer les traitements batch (p.793)
- Mettre à jour les coûts de revient (p.793)
- Gérer les batchs ESB (p.793)
- Suivi des échanges (p.793)
- Gérer les numéros (p.793)
- Gérer les paramètres (p.794)
-   Bloquer les actions couteuses (p.795)
-   Nombre de mois de recherche sur historique (p.796)
-   Paramètres (p.797)
- Gérer les éléments accessibles (Portail, PDA) (p.802)
- Gérer les remplacements d'attributs (Portail, PDA) (p.803)
- Import/Export des paramètres d'application (p.803)

Divers
Gérer les traitements batch
Mettre à jour les coûts de revient
Gérer les batchs ESB
Suivi des échanges
Paramètres application
Gérer les numéros
GÉRER LES NUMÉROS
Créer une règle de numérotation
Paramètres application / Paramètres application / Gérer les numéros
1. <+>,
2. Libellé : "Affaire - Numéro Interne",
3. Code : "Affaire_Num",
4. Classe : "Affaire",
5. Attribut numéroté : "Numéro interne",
6. Type : "Unique par organisation",
7. Organisation : une organisation interne,
8. Premier numéro à prendre : 000001,
9. Dernier numéro utilisé : 000000,
10. Dernier numéro à prendre : 999999,
11. Longueur du numéro : 6,
12. <Disquette> ou <F2>.
Attention
Avant de valider, il est nécessaire de re-vérifier la classe. Au besoin, rectifier celle-ci juste avant de
valider.
Liste des règles de numérotation
Code Libellé Classe Attribut Type Code
Organisation
Organisation
interne
Premier numéro à
prendre
Dernier numéro
utilisé
Dernier numéro à
prendre
Longueur
du numéro
Affaire_Num_01 Affaire - Numéro Interne - 01 Affaire Numéro interne Unique par organisation 01 Impression 01 01015700 01020435 01999999 8
Bien_IdentPrest_01 Biens - Identifiant Prestataire - 01 Bien Identifiant prestataire Unique par organisation 01 Impression 01 550000 571750 999999 8
Client - Code - OMR Client - Code - OMR Organisation Code Unique par organisation 01 Impression 01 01670001 01672578 01700005 8
CmdeClt_Num_01 Commande Client - Numéro Interne - 01 Commande client Numéro interne Unique par organisation 01 Impression 01 01000000 01779703 01999999 8
CmdeFourn_Num_01 Commande Fournisseur - Numéro Interne - 01 Commande fournisseur Numéro interne Unique par organisation 01 Impression 01 01000000 01414009 01999999 8
DmdeInter_Num_01 Demande d Intervention (DIT) - Numéro Interne - 01 Demande d'intervention Numéro Unique par organisation 01 Impression 01 01000000 01267561 01999999 8
DevisCmdeClt_Num_01 Devis Commercial - Numéro Interne - 01 Devis de commande client Numéro interne Unique par organisation 01 Impression 01 01000000 01001641 01999999 8
DevisTech_Num_01 Devis Technique - Numéro Interne - 01 Devis technique Numéro Unique par organisation 01 Impression 01 01000000 01013517 01999999 8
FinancementClt_Num_01 Dossier de Financement - Numéro Interne - 01 Financement client Numéro interne Unique par organisation 01 Impression 01 01000000 01005546 01999999 8
Rachat_Num_01 Dossier de Rachat - Numéro Interne - 01 Rachat Numéro interne Unique par organisation 01 Impression 01 01000000 01001858 01999999 8
FactClt_Num_01 Facture Client - Numéro Interne - 01 Facture client Numéro interne Unique par organisation 01 Impression 01 01400001 01415472 01999999 8
FactFourn_Num_01 Facture Fournisseur - Numéro Interne - 01 Facture fournisseur Numéro interne Unique par organisation 01 Impression 01 01000000 01084789 01999999 8
LivrFourn_Num_01 Livraison Fournisseur - Numéro Interne - 01 Livraison fournisseur Numéro interne Unique par organisation 01 Impression 01 01000000 01146949 01999999 8
LivrClt_Num_01 Livraison Client - Numéro Interne - 01 Livraison client Numéro interne Unique par organisation 01 Impression 01 01000000 01513746 01999999 8
LotComptage_Num_01 Lot de Comptage - Numéro Interne - 01 Lot de comptage Numéro de lot Unique par organisation 01 Impression 01 01000000 01001652 01999999 8
LotDepreciation_Num_01 Lot de Dépréciation - Numéro Interne - 01 Lot de dépréciation Numéro de lot Unique par organisation 01 Impression 01 01000000 01000260 01999999 8
PreparationComptage_Num_01 Préparation de Comptage - Numéro Interne - 01 Préparation comptage Numéro de préparation Unique par organisation 01 Impression 01 01000000 01000030 01999999 8
SolServClt_Code_01 Solution de Service Client (SSC) - Code - 01 Solution de services client Code Unique par organisation 01 Impression 01 01000000 01038803 01999999 8
ArtVendu_Code Article Vendu - Code Article vendu Code Commun à toutes les organisations  (null) 000001 338666 499999 8
Negociation_Num Négociation - Numéro Interne Negociation Numéro interne Commun à toutes les organisations  (null) 00000001 00005227 00999999 8
Marche_Num Marché - Numéro Interne Marche Code interne Unique par organisation 01 Impression 01 01000000 01000030 01999999 8
Particularités sur les clients
Numérotation des clients
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_AUTO_CLIENT"
Valeur :
§ Coché : Numérotation automatique code client,
§ Non coché : Codification manuelle.
Gérer les paramètres
GÉRER LES PARAMÈTRES
Les paramètres sont créés automatiquement lors des mises à jours de version d'ARTIS.net.
Remarque
Après modification, si la modification ne semble pas prise en compte, il faut alors vider le cache
concerné sur le serveur d'application concerné (contacter ARTIS pour plus d'information).
Modifier un paramètre : sa valeur
Paramètres application / Paramètres application / Gérer les paramètres
1. Saisir le nom du paramètre dans "Paramètre",
2. <Entrée> pour rechercher tous les paramètres se rapportant à la saisie,
3. Sélectionner le ou les paramètres,
4. <Modifier> ou <Crayon>,
5. Saisir la valeur du paramètre, ou cocher, décocher, ou sélectionner dans la liste déroulante
suivant le type du paramètre,
6. <Disquette> ou <F2>.
Modifier un paramètre : de commun à unique par organisation
Cette opération n'est possible que si l'opérateur a les droits "admin".
Paramètres application / Paramètres application / Gérer les paramètres
1. Rechercher le paramètre,
2. <Modifier> ou <Crayon>,
3. Dans "Règle", sélectionner "Unique par organisation,
4. <Disquette> ou <F2>,
5. Re-vérifier et corriger les valeurs de ce paramètre pour chaque organisation interne.
Bloquer les actions couteuses
BLOQUER LES ACTIONS COÛTEUSES
ou "Bloquer la touche <Entrée>.
Afin d'optimiser les  temps  de  traitement  (et  diminuer du  même  coup  les  ralentissements  dans
l'exploitation d'ARTIS), un paramètre permet de bloquer l'emploi de la touche <Entrée> sans  avoir
entré un texte dans certaines requêtes.
Par exemple, dans "Gérer les commandes clients",  si <Entrée> est fait directement dans la zone
"Numéro  interne",  ARTIS  ramène  toutes  les  commandes  existantes.  Or,  si  l'historique  des
commandes est  important,  la  requête parcourt toute  la  base  de  données et  affiche le  tableau
complet de toutes les commandes.
Une telle action est inutile car :
o L'ensemble des  commandes  est  obtenu  et  l'utilisateur  doit  filtrer  pour  trouver la  ou  les
commandes recherchées,
o L'application ARTIS est considérablement ralentie pour vous et pour l'ensemble des utilisateurs
connectés.
Dès que ce paramètre est activé, l'utilisateur est contraint de saisir un texte à rechercher. Dans le
cas contraire, un message d'alerte s'affichera.
Toutefois, pour obtenir la liste complète, il suffit de faire <F1> puis <F2>.
Les programmes concernés sont :
§ Gérer les solutions de services : Recherche des SSC,
§ Gérer les commandes clients : Recherche des commandes,
§ Gérer les commandes de consommables : Recherche des biens de destination,
§ Gérer les livraisons clients : Recherche des livraisons,
§ Gérer les factures clients : Recherche des factures.
Paramètres
Actions coûteuses
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "BLOCAGE_ACTIONS_COUTEUSES"
Valeur : Oui, le blocage est activé.
Nombre de mois de recherche sur historique
NOMBRE DE MOIS DE RECHERCHE SUR HISTORIQUE
Paramètres
Historique des ventes
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "ECART_MOIS_HIST_LC"
Valeur : 6 par défaut, Nombre qui indique le nombre de mois d'historique à afficher pour des
documents de ventes.
Historique des achats
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "ECART_MOIS_HIST_LF"
Valeur : 6 par défaut, Nombre qui indique le nombre de mois d'historique à afficher pour des
documents d'achats.
Historique pour frais d'approche
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "NB_MOIS_PAR_DEFAUT_POUR_FRAIS_APPROCHE"
Valeur : 3 par défaut, obligatoire, Donne le nombre de mois par défaut pour la recherche de facture
fournisseur dans l'écran de selection pour les factures de frais d'approche.
Date dans les critères de recherche
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "VALEUR_PAR_DEFAUT_PREDICAT"
Valeur :
§ Cochée : Indique si une date limite de début de recherche est mise par défaut dans les
requêtes,
§ Non cochée : Rien.
Paramètres
PARAMÈTRES
Environnement
Nom multi-société
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "NOM_MULTI_SOCIETE"
Valeur : Saisir le texte à afficher dans le bandeau lorsque le collaborateur a un profil multi-
organisation interne.
Devise
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "DEVISE_DEFAULT"
Valeur : "EURO" par défaut
Langue
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "LANGUE_DEFAULT"
Valeur : "FR" par défaut
Régime fiscal
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "REGIME_FISCAL_CEE"
Valeur : "CEE" par défaut,
Code du régime fiscal de la Communauté Economique Européenne identique à celui qui se
trouve en base
TVA
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "TVA_DEFAUT"
Valeur : 20,
Code de TVA par défaut pour les nouveaux articles.
Mode de règlement
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "MODE_REGLEMENT_DEFAUT"
Valeur : exemple, "CHEQUE A RECEPTION DE FACTURE",
Nom de la condition de paiement par défaut à utiliser lors de la création d'un tiers.
Affichage du moyen de paiement
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "AFFICHAGE_MOYEN_PAIEMENT"
Valeur :
§ Coché : Affiche le type de moyen de paiement en plus du libellé de la condition de
paiement,
§ Non coché : Affiche uniquement le libellé de la condition de paiement.
Mode de règlement par traite
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "MODE_REGLEMENT_TRAITE"
Valeur : exemple "LCR soumise à acceptation",
Mode de règlement des traites.
Préfixe du fax
Paramètres application / Paramètres application / Gérer les paramètres
Préfixe de numérotation pour obtenir la tonalité avant de composer le numéro de Fax, utilisé des les
envois par fax des demandes de relevés compteurs.
Paramètre "PREFIX _FAX "
Valeur : Préfixe de numérotation, exemple : 0
Login d'externalisation des fax
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "FAX _EX TERNE_LOGIN_CLIENT"
Valeur : Login du client chez le fournisseur de service d'externalisation des fax.
Numéro du client d'externalisation des fax
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "FAX _EX TERNE_NUMERO_CLIENT"
Valeur : Numéro du client chez le fournisseur de service d'externalisation des fax.
Ordre des catégories dans les classifications
Paramètres application / Paramètres application / Gérer les paramètres
Méthode de tri des classifications génériques.
Paramètre "CLASSIFGEN_ORDRE"
Valeur :
§ ABREV,
§ NOM.
Critère de date de début de recherche
Paramètres application / Paramètres application / Gérer les paramètres
Dans certaines options de recherche, une date de début est positionnée automatiquement,
exemple : Ventes / Factures Clients / Gérer les factures clients suivi de <F1> ou <Loupe>. Le
criètre "Date facture" début est pré-renseignée.
Paramètre "VALEUR_PAR_DEFAUT_NB_MOIS"
Valeur :
§ 0 : la date est valorisée avec la date de début d'exercice comptable,
§ autre valeur : nombre de mois. La date est calculée = date du jour - un nombre de
mois.
Sauvegarde des configurations de colonnes par Organisation interne
Paramètres application / Paramètres application/ Gérer les paramètres
Un paramètre sert à bloquer ou non la sauvegarde des paramétrages par organisation interne.
Paramètre "GESTION_CONFIG_TABLEAU_PAR_ORG_INT"
Valeur :
§ Non cochée : l'utilisateur peut toujours mémoriser le paramétrage, même s'il est
collaborateur sur plusieurs organisations internes,
§ Cochée : l'utilisateur doit être collaborateur d'une seule organisation interne pour
pouvoir mémoriser le paramétrage.
Environnement stricte ou libre
Environnement des achats
Paramètres application / Paramètres application/ Gérer les paramètres
Ce paramètre est utilisé :
§ Lors de la recherche du dépôt dans l'en-tête d'une commande fournisseur,
§ Lors de la recherche du secteur logistique et du dépôt dans une ligne de commande
fournisseur,
§ Lors de la recherche du secteur logistique et du dépôt dans l'en-tête d'une livraison
fournisseur,
§ Lors de la recherche du secteur logistique et du dépôt dans une ligne de livraison
fournisseur,
§ Lors de la recherche du secteur logistique et du dépôt dans l'en-tête d'une facture
fournisseur,
§ Lors de la recherche du secteur logistique et du dépôt dans une ligne de facture
fournisseur.
Paramètre "UTIL_ORGINT_ACHATS"
Valeur :
§ Cochée : Mode strict. Chaque organisation interne est autonome bien que sur la même
base,
§ Non cochée : Toutes les organisations internes travaillent ensemble.
Environnement des affaires
Paramètres application / Paramètres application/ Gérer les paramètres
Ce paramètre est utilisé :
§ Lors du rattachement d'une commande client à une affaire,
§ Lors du rattachement d'une commande client à un dossier de financement,
§ Lors du rattachement d'une commande client à un dossier de rachat.
Paramètre "UTIL_ORGINT_AFFAIRES"
Valeur :
§ Cochée : Mode strict. Chaque organisation interne est autonome bien que sur la même
base,
§ Non cochée : Toutes les organisations internes travaillent ensemble.
Environnement des biens
Paramètres application / Paramètres application/ Gérer les paramètres
Ce paramètre est utilisé uniquement en recherche de dépôt sur un bien.
Paramètre "UTIL_ORGINT_BIENS"
Valeur :
§ Cochée : Mode strict. Chaque organisation interne est autonome bien que sur la même
base,
§ Non cochée : Toutes les organisations internes travaillent ensemble.
Environnement des parties
Paramètres application / Paramètres application/ Gérer les paramètres
Ce paramètre est utilisé lors de la recherche d'un dépôt lié à une adresse (dans l'écran des filières,
des sites ou de l'organisation directement).
Paramètre "UTIL_ORGINT_PARTIES"
Valeur :
§ Cochée : Mode strict. Chaque organisation interne est autonome bien que sur la même
base,
§ Non cochée : Toutes les organisations internes travaillent ensemble.
Environnement des services
Paramètres application / Paramètres application/ Gérer les paramètres
Ce paramètre est utilisé :
§ En recherche de technicien pour planification,
§ En recherche de bien, de technicien et de technicien en support sur un CRIT,
§ En recherche de client, de technicien ou de bien sur une demande d'article,
§ En recherche de client, de site, de technicien, de demandeur, de contact ou de bien
sur un devis technique,
§ En recherche de contact et de technicien sur une intervention (écran 2).
Paramètre "UTIL_ORGINT_SERVICES"
Valeur :
§ Cochée : Mode strict. Chaque organisation interne est autonome bien que sur la même
base,
§ Non cochée : Toutes les organisations internes travaillent ensemble.
Environnement des solutions de service client
Paramètres application / Paramètres application/ Gérer les paramètres
Ce paramètre est utilisé :
§ Lors du rattachement d'un bien à un module de service client,
§ Lors du rattachement d'un bien à un service client,
§ Lors du rattachement d'un bien à une règle de facturation client,
§ Pour le chargement de l'arbre des biens en création de règle de facturation client,
§ Pour le chargement du tableau des biens sur l'écran de pré-création des SSC.
Paramètre "UTIL_ORGINT_SOLSERV"
Valeur :
§ Cochée : Mode strict. Chaque organisation interne est autonome bien que sur la même
base,
§ Non cochée : Toutes les organisations internes travaillent ensemble.
Environnement des stocks
Paramètres application / Paramètres application/ Gérer les paramètres
Ce paramètre est utilisé :
§ En recherche de dépôt sur les documents de ventes et d'achat,
§ Dans le chargement des tableaux de réservations dans l'écran "Transférer des
réservations".
Paramètre "UTIL_ORGINT_STOCK"
Valeur :
§ Cochée : Mode strict. Chaque organisation interne est autonome bien que sur la même
base,
§ Non cochée : Toutes les organisations internes travaillent ensemble.
Environnement des ventes
Paramètres application / Paramètres application/ Gérer les paramètres
Ce paramètre est utilisé :
§ Lors de la recherche du dépôt dans l'en-tête de commande client,
§ Lors de la recherche du secteur logistique, du dépôt et du bien (bien de destination)
dans la ligne de commande client,
§ Lors de la recherche du bien dans l'écran de rattachement de matricule d'une
commande client,
§ Lors de la recherche du secteur logistique et du dépôt dans l'en-tête de livraison client,
§ Lors de la recherche du secteur logistique et du dépôt dans la ligne de livraison client,
§ Lors de la recherche du secteur logistique et du dépôt dans l'en-tête de facture client,
§ Lors de la recherche du bien (bien de destination) dans la ligne de facture client,
§ Lors de la recherche du bien en reprise de consommable.
Paramètre "UTIL_ORGINT_VENTES"
Valeur :
§ Cochée : Mode strict. Chaque organisation interne est autonome bien que sur la même
base,
§ Non cochée : Toutes les organisations internes travaillent ensemble.
Gérer les éléments accessibles (Portail, PDA)
GÉRER LES ÉLÉMENTS ACCESSIBLES (PORTAIL, PDA)
Cet écran permet de définir quels sont les éléments que les clients pourront sélectionner sur le
portail. Par exemple, parmi les natures d'interventions définies dans la base, il n'est pas nécessaire
que les clients en voient certaines telles que ‘Formation interne', ‘Avant-vente', etc.
1. Sélectionnez le type d'application,
2. Dans "Type d'élément", il est possible de paramétrer :
§ Les Motifs de demande d'intervention (Natures) qui seront proposées,
§ Les Solutions de services prédéfinies pour lesquelles les relevés seront exigés dans
les Commandes de consommables,
§ Les Domaines d'intervention qui seront proposés en saisie de DIT sur site (sans bien).
Motif de demande d'intervention
1. Cliquer sur le type d'élément "Motif de demande d'intervention",
2. <Attacher> pour la liste des Natures d'interventions à retenir,
3. Ainsi, sur le Portail, toutes les Natures cochées apparaitront dans la liste déroulante "Nature
d'intervention" des Demandes d'intervention.
Solution de services préfinie
Le principe est le même avec le type d'élément "Solution de services prédéfinie". Il faut filtrer les
Solutions de Services Prédéfinis (SSP) qui feront l'objet d'un relevé de compteur(s) obligatoire dans
les commandes de consommables.
Couverture contractuelle d'articles
Dans "Classification", il est possible de paramétrer les catégories à retenir dans les "Couvertures
contractuelles d'article".
Après avoir sélectionné la zone classification, lister et rattacher les Couvertures contractuelles
d'articles à retenir.
Remarque
Il est conseiller de sélectionner les catégories correspondant aux articles de type "Composant"
telles que les consommables et les fournitures. Il n'est pas utile qu'un client puisse, par erreur,
commander une pièce détachée ou une prestation.
Remarque
Dans le portail, seuls les articles compatibles avec le modèle du bien sélectionné et classifiés dans
les catégories accessibles sont proposés dans les commandes de consommables.
Gérer les remplacements d'attributs (Portail, PDA)
GÉRER LES REMPLACEMENTS D'ATTRIBUTS (PORTAIL,
PDA)
Cet écran permet d'afficher des informations plus compréhensibles par le client. Par exemple, il est
possible en quelque sorte traduire certains libellés d'article pour éviter des erreurs de commandes.
1. Sélectionnez le type d'application "Portail",
2. Cliquer sur l'objet à paramétrer,
3. Paramétrer les libellés de remplacement :
§ Des Articles vendus,
§ Des priorités d'intervention,
§ Des Motifs de demande d'intervention.
Articles vendus
1. Sélectionner l'élément "Article vendu",
2. <Modifier>,
3. <Attacher> pour lister les articles,
4. Cocher les articles à modifier,
5. <F2> ou <Disquette>,
6. Modifier le libellé à afficher sur le portail clients,
7. <F2> ou <Disquette>.
Priorités d'intervention
Même principe.
Motifs de demande d'intervention
Même principe.
Import/Export des paramètres d'application
IMPORT/EXPORT DES PARAMÈTRES D'APPLICATION
