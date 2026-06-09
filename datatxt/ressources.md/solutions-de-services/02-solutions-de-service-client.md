# Solutions de service Client

> Categorie: Solutions de services | Pages 232-324

## Sous-rubriques
- Gérer une solution de service client (p.232)
-   Synoptique de création d'une SSC (p.232)
-   Créer une SSC avec compteurs (p.235)
-   SSC, MSC, RFC, SC (p.236)
-   Particularités (p.237)
-     Appliquer des frais d'estimation (p.237)
-     Appliquer des frais d'expédition de consommable (p.240)
-     Autoriser les coûts ou forfaits à zéro ou négatifs (p.242)
-     Corriger des couvertures (Suppression, Ajout, Modification) (p.242)
-     Corriger le client d'un bien et celui de la SSC (p.244)
-     Enregistrer les factures copies des confrères (p.245)
-     Facturer au mille (p.245)
-     Faire les demandes de relevés compteur par fax ou e-mail (p.246)
-     Faire une SSC interne pour les DIT internes (p.253)
-     Gérer les augmentations des SSC (p.253)
-       Paramétrer, activer les augmentations récurrentes (p.255)
-       Changement des taux d’augmentation Société (p.257)
-       Gérer l'augmentation selon l'indice Syntec (p.258)
-       Modifier l'augmentation d'une SSC (p.262)
-       Modifier l'augmentation sur plusieurs SSC (p.263)
-       Gérer les augmentations ponctuelles (p.264)
-       Suivre l'historique des augmentations (p.265)
-     Gérer les copies offertes (p.265)
-     Gérer les regroupements de factures (p.266)
-     Gérer la présentation dans les SSC (p.268)
-     Gérer les SSC de type Extension de garantie (p.268)
-     Gérer les RFC de type Kit (p.269)
-     Gérer les RFC en régularisation sur regroupement (p.270)
-     Gérer les types de relevés dans la facturation des RFC (p.271)
-     Gérer les UT (p.274)
-       Les éléments de la SSC en UT (p.275)
-       Les prestations prédéfinies et les UT (p.278)
-     Historique des livraisons (p.282)
-     Imprimer la SSC, Editer le contrat (p.282)
-     Imprimer le commentaire de la RFC sur la facture (p.283)
-     Imprimer le libellé SSC sur la facture (p.283)
-     Paramétrer les Garantie constructeur / Garantie fournisseur (p.284)
-     Pré-créer une SSC depuis la commande (p.284)
- Simuler la facturation des solutions (p.285)
-   Détail du fichier de préfacturation (p.287)
-   Corriger les anomalies de facturation (p.289)
-   Particularités (p.292)
-     Modifier le montant du seuil de facturation (p.292)
-     Bloquer, débloquer la facturation SSC sur anomalie (p.293)
- Générer la facturation des solutions (p.293)
- Traiter une solution de services client (p.294)
-   Valider une SSC (p.295)
-   Détacher des grandeurs (p.296)
-   Changer le statut d'une SSC (p.298)
-   Suspendre une SSC (p.299)
-   Dé-suspendre une SSC (p.300)
-   Arrêter une SSC (p.302)
-   Fermer une SSC (p.303)
-   Résilier une SSC (p.305)
-   Résilier une SSC dans les délais (p.311)
-   Ré-ouvrir une SSC (p.312)
-   Particularités (p.314)
-     Avoir l'habilitation pour ré-ouvrir une SSC (p.314)
-     Lister les SSC suspendues (p.315)
- Calculer le PCA-PAR (Cut-off) (p.315)
-   Édition détaillée du PCA-PAR (p.319)
-   Édition concentrée du PCA-PAR (p.320)
-   Édition de synthèse du PCA-PAR (p.322)
-   Paramètres (p.322)
- Actualiser les augmentations des SSC (p.323)

sera reconduite.
Remarque
Si dans l'écran "Périodicité" du premier écran d'une règle de facturation, la date de fin définitive est
saisie, alors il n'y a pas de tacite reconduction du module auquel cette règle est attachée.
Exemple : La SSC client est signée le 01/01/2006 pour 60 mois et est soumise à tacite
reconduction. Elle est composée de deux modules service :
o Un module copie soumis à reconduction 12 mois avec les couvertures suivantes :
§ Délai 8H reconductible
§ MO copieur reconductible
§ TR copieur   reconductible
§ PD copieur non reconductible
§ ConsoNB  reconductible
o Un module abonnement service non reconduit
§ Délai 2H reconductible
Impact dans le temps :
Date Création SSC Facturation de
Décembre 2009 Commentaires 1 Commentaires 2
SSC
SSC Date début initiale 01/01/2006 01/01/2006
SSC Date fin initiale 31/12/2009 31/12/2009
MSC 1
MSC Date début initiale 01/01/2006 01/01/2006
MSC Date fin initiale 31/12/2009 31/12/2010
Couverture Date début initiale 01/01/2006 01/01/2006
Couverture Date fin initiale 31/12/2009 31/12/2010 Sauf pour la couverture PD qui reste
au 31/12/2009 Les PD deviennent donc facturables
MSC 2
MSC Date début initiale 01/01/2006 Pas de reconduction Plus de facturation
MSC Date fin initiale 31/12/2009 Pas de reconduction Plus de facturation
Couverture Date début initiale 01/01/2006 Pas de reconduction
Couverture Date fin initiale 31/12/2009 Pas de reconduction Plus de délai 2H en saisie d'appel
Solutions de service Client
Gérer une solution de service client
Synoptique de création d'une SSC
SYNOPTIQUE DE CRÉATION D'UNE SSC

Créer une SSC avec compteurs
CRÉER UNE SSC AVEC COMPTEURS
Solutions de services / Solutions de services client / Gérer une solution de services client
Première partie
1. Créer par <+>
2. Section "Solution de Services Client",
3. Dans "Libellé SSP", rechercher la SSP voulue,
4. Dans "Commentaire", indiquer les particularités de la SSC (éléments visible en interne
uniquement),
5. Section "Document Contractuel",
6. Dans "Début", saisir la date de départ du contrat (date de livraison),
7. Dans "Durée", indiquer la durée et choisir l'unité de la durée,
8. Cliquer sur "Fin initiale" pour calculer la date de fin,
9. Section "Parties Contractantes",
10. Rechercher le client,
11. ARTIS.net ouvre une fenêtre avec la liste des modules obligatoires et optionnels,
12. Sélectionner les modules à conserver,
13. Section "Biens Clients Hors Solutions de Services Clients",
14. Dé-sélectionner les biens à ne pas prendre en compte,
15. Faire <Suivant>,
Deuxième partie
1. Section "Biens et grandeurs à facturer",
2. Rechercher le ou les compteurs à facturer :
§ Ouvrir l'arbre des biens et sélectionner les grandeurs,
§ Ou utiliser la multisélection à droite :
1. Sélectionner un type de grandeurs,
2. Cliquer sur "Actualiser",
3. Désélectionner les éventuels grandeurs à ne pas prendre en compte,
3. Section "Règles de facturation prédéfinies",
4. Sélectionner la Règle prédéfinie à appliquer,
5. Faire <F2> ou <Flèche verte>,
Refaire cette action pour toutes les règles à créer avec grandeur.
Pour les règles portant sur des matricules :
1. Section "Biens et grandeurs à facturer",
2. Ouvrir l'arbre des biens et sélectionner les matricules,
3. Section "Règles de facturation prédéfinies",
4. Sélectionner la Règle prédéfinie à appliquer,
5. Faire <F2> ou <Flèche verte>,
Une fois, et une fois seulement, que toutes les règles sont créées :
1. Ne pas indiquer de date de facture théorique, ARTIS.net le fait en automatique à la validation,
2. Saisir le nombre d'unités vendues (si engagement),
3. Saisir le coût unitaire,
4. Saisir le jour de facturation (normalement, il y a eu report du jour du livraison),
5. Saisir le terme et la périodicité,
6. Saisir, si c'est le cas, les copies offertes et financées,
7. Faire <Précédent>,
Fin de la saisie
1. Le contrat et ses spécificités sont affichés en totalité,
2. <F2> ou <Disquette>,
3. Apporter les modifications spécifiques dans les règles de facturaition,
4. Faire les ajouts ou suppressions de couvertures spécifiques,
5. Vérifier que La SSC est viable : Elle doit être en Statut "Validée",
6. Faire un contrôle de facturation.
SSC, MSC, RFC, SC
SSC, MSC, RFC, SC
Organisation d'une SSC
Ajouter un module de service client
Ajouter un bien
Particularités
Appliquer des frais d'estimation
APPLIQUER DES FRAIS D'ESTIMATION
A défaut de vrais relevés compteur, ARTIS.net procéde à une estimation pour facturer les SSC.
Pour inciter le client à envoyer les relevés compteurs, il est possible de mettre en place des frais
d'estimation (une fois par facture) qui s'ajoute à la suite des règles de facturation dans le corps de
la facture.

Remarque
Les frais d'estimation ne sont pas les frais de facturation (ou frais de facture), consulter Appliquer
des frais de factures, Appliquer des frais d'expédition de consommable.
Frais de facture par défaut
Le montant des frais par défaut est le montant du tarif public de l'organisation interne.
Frais de valeur différente du tarif public
Si le client doit avoir un montant des frais différent de celui par défaut, il faut ajouter le code du
client dans le tarif correspondant :
Dans un premier temps, il faut créer le tarif correspondant à ce montant
Articles / Tarifs / Gérer les tarifs
1. <+>,
2. Donner le code, le libellé, la période de validité et cocher "en vigueur",
3. Cocher "Vente particulier" et "Valorisation à prix net",
4. <Disquette>,
5. Dans le carré de carrés, sélectionner "Superposition de tarif",
6. Dans le tableau "Ce tarif prend le pas sur", ajouter le tarif public de vente
(habituellement codifié "PUB"),
7. <X >,
8. Puis sélectionner "Conditions tarifaires",
9. Dans le tableau "Accordé par les organisations", il faut mettre les organisations
internes.
 A chaque client à qui on veut appliquer ce montant particulier, il faut alors ajouter le code du client
dans les conditions tarifaires du tarif :
Articles / Tarif / Gérer les tarifs
1. Afficher le tarif souhaité,
2. Prendre l'option "Condition de ventes et Achats",
3. Ajouter le code du client dans le tableau "accordé aux", avec l'option à droite
"Rattacher".,
PARAMÉTRAGE
Classification
Natures de la vente
Consulter Créer une classification avec les informations ci-après.
Classification sur les commandes
Nom : "Frais d'estimation"
Abréviation : "FRAIS_ESTIMATION"
Identifiant technique : "FRAIS_ESTIMATION"
Domaine : "parties"
Classe : "com.artis.business.parties.ProfilClt"
Catégorie
Ensuite, pour les natures, ajouter les catégories  :
SOUMIS - Soumis,
EX ONERE - Exonéré.
Table de décision
Frais d'estimation
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
Cette table permet d'appliquer des frais d'estimation lors de la facturation des SSC.
Rechercher la Table de décision "TD_FRAIS_ESTIMATION".
Code
Organisation
Interne
Intitulé de l'Agence Classification frais
estimation
Code Article des Frais
d'Estimation
* * Exonéré
03 * Soumis FRAIS500
04 BEAUVALLON * FRAIS500
04 VILLENEUVE D'ORIENT Soumis FRAIS500
05 * * FRAIS500
Pour la gestion d'une table de décision, voir Critère dans les tables de décision
CODE ORGANISATION INTERNE
INTITULÉ DE L'AGENCE
Fait référence au libellé de la catégorie de la classification "Agence" de l'organisation interne,
CLASSIFICATION FRAIS ESTIMATION
Fait référence au libellé de la catégorie de la classification "Frais d'estimation" de l'organisation
interne,
CODE ARTICLE DES FRAIS D'ESTIMATION
L'article doit exister en tant qu'article intangible. L'absence de code article implique que le client
n'est pas soumis aux frais d'estimation.
Appliquer des frais d'expédition de consommable
APPLIQUER DES FRAIS D'EXPÉDITION DE CONSOMMABLE
L'objectif est de facturer des frais de participation par expédition de consommable afin d'appliquer
les conditions générales de vente lors de la facturation des SSC.
Remarque
Les frais d'estimation ne sont pas les frais de facturation (ou frais de facture), ni les frais
d'estimation, consulter Appliquer des frais de factures, Appliquer des frais d'estimation.
Méthode de facturation
Etant données :
o Une SSC 1 dont la prochaine date de facturation est au 15/11 et pour laquelle les frais sont
applicables (présence d'une règle de facturation de type  "Frais d'envoi de consommable" dont
les frais à facturer sont de 5 €) :
§ Un bien B1 lié à la SSC1 et pour lequel une livraison L1 de 1 consommable a eu lieu le
30/10,
§ Un bien B2 lié à la SSC1 et pour lequel une livraison L2 de 2 consommables a eu lieu
le 10/11,
o Une SSC 2 dont la prochaine date de facturation est au 15/12 et pour laquelle les frais sont
applicables (présence d'une règle de facturation de type  "Frais d'envoi de consommable" dont
les frais à facturer sont de 5 €) :
§ Un bien B3 lié à la SSC2 et pour lequel une livraison L3 de 1 consommable a eu lieu le
30/10,
§ Un bien B4 lié à la SSC2 et pour lequel une livraison L4 de 2 consommables a eu lieu
le 16/12,
Si le gestionnaire lance la facturation des contrats au 15/11, alors la facture générée ne prendra en
compte que la SSC1 et les frais de participation à la livraison de toners seront facturés pour les
livraisons L1 et L2 (soient 3 toners). Le client sera facturé de 3 frais à 5 €. Dans la facture, les
lignes suivantes seront générées :
§ Numéro du contrat,
§ Libellé de la règle de facturation,
§ Numéro de la livraison et sa date,
§ Consommable livré,
§ Article de frais d'envoi, avec la quantité égale au nombre de consommbales
consommées.
Il y a autant de lignes de frais que de lignes de livraison de consommable.
Solution de service client
Solutions de services / Solutions de services client / Gérer une solution de services client
1. Créer la solution de service client de manière habituelle,
2. Dans l'écran 1 de la règle de facturation client "Frais d'envoi de consommable",
3. Section "Services facutrés",
4. Vérifier ou insérer la couverture correspondante au consommable ciblé.
Saisie des livraisons de consommable
La saisie de commande de consommable ainsi que les livraisons s'effectuent de manière
habituelles, en attachant la ligne de commande au bien (sans quoi la facturation des frais ne
s'effectuera pas).
Au fur et à mesure des saisies, la règle de facturation du client est actualisée et contient la liste
des lignes de livraison qui n'ont pas encore fait l'objet d'une facturation.
Facturation des frais
La facturation des frais d'envoi de consommable est visible en simulation de facturation des SSC, et
se fait lors de la génération de la facturation des SSC.
Après facturation d'une SSC, la règle de facturation du client est actualisée et contient la liste des
lignes de livraison qui ont fait l'objet d'une facturation.

Paramétrage
Régle de facturation prédéfinie
Solutions de services / Solutions de services prédéfinies / Gérer une règle de facturation prédéfinie
(RFP)
1. <+>
2. "Libellé" : Mettre "Frais d'envoi de consommable",
3. "Règle choisie" : Sélectionner "Kits de livraison",
4. Section "Périodicité",
5. Cliquer sur "Prériodicité",
6. Définir la périodicité de facturation, exemple, "tous les mois" indique que le programme de
facturation des SSC vérifie s'il existe de nouvelles livraisons de consommables,
7. Section "Services facturés",
8. Rattacher la couverture consommable,
PARAMÈTRES DE FACTURATION
9. Cliquer sur "Paramètres de facturation",
10. "Engagement" : Ne pas cocher,
11. "Facturer l'article livré" : Ne pas cocher,
12. "Contrôler la durée de vie" : Ne pas cocher,
13. "Facturer un abonnement" : Ne pas cocher,
14. "Unité de facturation" : rien,
15. "Nb kits offerts" : rien,
16. Section "Montant KIT",
17. Ajouter l'article "Participation aux livraisons de consommables", ainsi que le prix à facturer,
18. <Disquette> ou <F2>.
Module de service prédéfini
Solutions de services / Solutions de services prédéfinies / Gérer un module de service prédéfini
(MSP)
Ajouter la règle précédamment créée dans un module comprenant les règles de facturation
habituelles.
Solution de service prédéfinie
Solutions de services / Solutions de services prédéfinies / Gérer une solution de service prédéfini
(SSP)
Mettre à jour ou créer une SSP.
Autoriser les coûts ou forfaits à zéro ou négatifs
AUTORISER LES COÛTS OU FORFAITS À ZÉRO OU NÉGATIFS
Autoriser les coûts à zéro ou négatifs
Coût à zéro ou négatif
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "COUT_FACTU_AUTORISE"
Valeur :
§ POSITIF : Coût supérieur à 0,
§ POSITIF_OU_ZERO : Coût supérieur ou égale à 0,
§ POSITIF_OU_ZERO_OU_NEGATIF : Tout est permis.
Autoriser les forfaits à zéro
Forfait à zéro
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "FORFAIT_A_ZERO_AUTORISE"
Valeur :
§ Coché : Ce paramètre permet d'autoriser forfait à zéro dans la règle de facturation.
§ Non coché : Interdit.
Corriger des couvertures (Suppression, Ajout, Modification)
CORRIGER DES COUVERTURES (SUPPRESSION, AJOUT,
MODIFICATION)
Après création et validation d'une SSC, des cas particuliers de couvertures sont à gérer :
o Délai d'intervention :
§ Par défaut, les SSC prédéfinies ont toutes un délai d'intervention de 8H. Si le client
bénéficie d'un délai particulier, il faut :
§ Supprimer la couverture existante,
§ Ajouter la nouvelle couverture délai,
o Les agrafes :
§ Par défaut, la couverture agrafe ne fait pas partie des conditions pré définies. Si pour le
client, le contrat prévoit la couverture des agrafes, il faut ajouter celle-ci.
En création de SSC, les biens concernés sont attachés aux couvertures liées à la SSC.
Supprimer une couverture
Solutions de services / Solutions de services client / Gérer une solution de services client
1. Sélectionner la SSC,
2. <Crayon> de la barre verticale,
3. Descendre sur les couvertures,
4. Cocher la ligne couverture à annuler,
5. <Poubelle> dans la bas du tableau des couvertures,
6. <X >  de la barre verticale.
Ajouter une couverture
Solutions de services / Solutions de services client / Gérer une solution de services client
1. Sélectionner la SSC,
2. Sélectionner le module N/B pour tout ajout de délai ou de couverture agrafe,
3. <Crayon> dans la bas du tableau des modules,
4. Descendre sur le pavé couverture (appelé également "Services client"),
5. <Trombone Non barré> pour attacher une nouvelle couverture,
6. Saisir un élément de recherche et/ou faire <Forest>,
7. Sélectionner le bon délai (ou autre couverture souhaitée) puis <Disquette>,
8. De nouveau faire <Disquette> : La couverture n'est active qu'à partir de cet instant,
9. Validez la SSC par <Disquette>.
Modification d'une couverture
Solutions de services / Solutions de services client / Gérer une solution de services client
1. Sélectionner la SSC,
2. Descendre sur les couvertures,
3. Cocher la ligne couverture à modifier,
4. <Crayon> dans la bas du tableau des couvertures,
5. Appliquer les modifications,
6. <Disquette>.
Vérification de l'état de couverture d'un bien
Le bien a le bon statut SSC, et est rattaché aux RFC.
Solutions de services / Solutions de services client / Gérer une solution de services client
1. Sélectionner la SSC,
2. Descendre sur les couvertures,
3. Un drapeau vert sur une ligne indique que la période de couverture est correcte et qu'il y a
présence d'au moins un bien,
4. Cependant, dans le détail de ces couvertures, les matricules rattachés peuvent être des
accessoires ou d'autres biens, et le bien concerné est peut être absent. Vérifier et modifier :
a) Sélectionner toutes les lignes lignes ou uniquement les couvertures cibles,
b) <Crayon> en haut du tableau,
c) Dans la section "Biens", <Chaîne> pour rattacher le ou les biens,
d) <Disquette> ou <F2>,
e) Répéter l'opération pour chaque couverture sélectionnée.
Corriger le client d'un bien et celui de la SSC
CORRIGER LE CLIENT D'UN BIEN ET/OU CELUI DE LA SSC
Le client du bien doit être le même que celui de la SSC. Sans cette condition, les DIT-CRIT seront
facturables.
Corriger le client d'un bien et celui de la SSC
Il faut d'abord corriger le client de la SSC avant de corriger celui du bien. Dans le cas contraire un
message s'affiche : "Veuillez modifier le client de la SSC 03000133 avant de modifier le client du
bien 05003459."
Solutions de services / Solutions de services client / Gérer une Solutions de services client
1. Rechercher la SSC,
2. <Modifier> ou <Crayon> de la barre verticale,
3. Modifier le client,
4. <F2> ou <Disquette>.
Si le client de la SSC était différent, c'est peut-être pour des raisons de facturation, dans ce cas,
voir Modifier le client de facturation dans les règles de facturation.
Biens et configuration / Gérer un bien
ou
tout autre lien qui permet d'afficher la fiche du bien
1. Rechercher le bien,
2. Cliquer sur l'onglet "Client",
3. <Crayon>,
4. Rechercher le client puis le site,
5. ou Rechercher directement le site,
6. <F2> ou <Disquette>,
7. <X >.
Corriger uniquement le client de la SSC
Solutions de services / Solutions de services client / Gérer une Solutions de services client
1. Rechercher la SSC,
2. <Modifier> ou <Crayon> de la barre verticale,
3. Modifier le client (mettre le même que celui du bien),
4. <F2> ou <Disquette>.
Si le client de la SSC était différent, c'est peut-être pour des raisons de facturation, dans ce cas,
voir Modifier le client de facturation dans les règles de facturation.
Modifier le client de facturation dans les règles de facturation
Pour chaque RFC :
1. Cliquer sur <Engrenage>,
2. <Modifier> ou <Crayon>,
3. Modifier le client de facturation dans les tableaux de lignes de coût (attention aux
régularisations),
4. <F2> ou <Disquette>.
Enregistrer les factures copies des confrères
ENREGISTRER LES FACTURES COPIES DES CONFRÈRES
Pour la partie Achat
1. Réception des factures d'achat,
2. Vérification de la facture d'achat,
3. Saisie d'une facture directe  d'achat :
§ Ne pas oublier de cocher "Directe" dans l'entête de la facture d'achat,
§ Utiliser l'article "Sous-traitance" ou "Achat de copies", consulter le paragraphe ci-
dessous,
§ Ne pas utiliser les articles paramétrés dans les règles de facturation client car il s'agit
d'articles intangibles ne pouvant pas être liés aux biens.
Pour la partie Coût de revient
1. Saisir une commande client par le programme "Gérer les commandes de consommables",
2. Saisir le matricule du bien concerné,
3. Le vendeur est : Technique,
4. En commentaire :saisir les périodes de facturation,
5. Sur la ligne article :
§ Utiliser le même article que dans la partie Achat,
§ Saisir une quantité de 1,
§ Saisir uniquement le coût de revient,
§ Vérifier que sur cette ligne article on a bien un copieur attaché.
En analyse de rentabilité
Le montant facturé par le confrère se trouve en "CR ARTICLES".
Article
Articles / Article / Gérer les articles
Créer l'article "Sous-traitance" ou "Achat de copies" avec les caractéristiques suivantes :
§ Type d'article tangible Composant,
§ Non suivi en stock.
Consulter Gérer les articles.
Facturer au mille
FACTURER AU MILLE
Contexte
Le bien possède une grandeur comptabilisant des copies. Le client ou le prestataire souhaite
facturer au mille.
Compteur calculé
ARTIS conseille l'utilisation de cette méthode (le prestataire est autonome).
1. Afficher la configuration prédéfinie de grandeurs prédéfinies (en créer une au besoin),
2. Ajouter un compteur calculé,
3. Saisir la formule :
a) Compteur calculé = compteur technique / 1000,
b) Appliquer un arrondi au choix : à la valeur la plus proche, supérieur ou inférieur,
4. Créer la SSC,
5. Saisir le prix unitaire de la RFC = prix de la copie x 1000.
Remarque
Le compteur calcule ne peut avoir de décimales (il en est de même pour le compteur technique).
Ajustement à l'impression
Le compteur technique à mettre en place ne peut contenir des décimales. Les valeurs sont donc
saisies sans la virgule décimale, exemple : pour 177.77 Go, l'utilisateur saisit 17777 (la valeur est
multipliée par 100), ou alors il saisit 177770 (ce qui revient à saisir des Mo).
Pour une impression correcte sur la facture, il est nécessaire d'adapter l'imprimé. Au moment de
l'impression, la quantité est divisé par 100 ou par 1000, tandis que le prix unitaire est multiplié par
100 ou par 1000.
Remarque
Pour la mise en place de cette méthode, la RFP et les articles de la RFC doivent être spécifiques.
L'imprimé doit faire l'objet d'une modification spécifique, consulter ARTIS pour plus d'informations.
Faire les demandes de relevés compteur par fax ou e-mail
FAIRE LES DEMANDES DE RELEVÉS COMPTEUR PAR FAX
OU E-MAIL
Pour faire les demandes de relevé compteur, ARTIS se base sur
1. Le mode positionné sur le bien,
2. Une recherche du fax ou du courriel pour un bien :
§ Ensuite, au 1er niveau, il cherche le fax ou le courriel dans la fiche de l'interlocuteur du
bien déclaré comme responsable utilisateur du bien
§ Sinon, au 2ème niveau, il cherche le fax ou le courriel dans la localisation du bien
§ Sinon, au 3ème niveau, il cherche le fax ou le courriel dans le site du bien
§ Sinon, au 4ème niveau, il cherche le fax ou le courriel dans la fiche du client
(commercial)
§ Sinon, aucune demande n'est générée
Afficher le mode actuel pour un bien
Biens et configuration / Gérer un bien
ou tout autre lien qui permet d'afficher la fiche du bien
o Rechercher votre bien
o Dans l'onglet "Classification", ligne "Demande de relevés compteurs Bien" dans le tableau, le
mode de relevé du bien est affiché.
Mettre à jour le mode de relevé compteur
Mode d'envoi dans les Biens
Biens et configurations / Gérer les biens
ou tout autre lien qui permet d'afficher la fiche du bien
§ Rechercher votre bien
§ Cliquer sur l'onglet "Classification"
§ <Crayon>
§ Ouvrir la liste déroulante et sélectionner le mode
§ <Disquette>
§ <X >
Si le nouveau mode est "Fax" ou "e-mail", ARTIS.net recherche le fax ou l'adresse courriel
et l'affiche sous le mode
Si le fax ou l'adresse courriel ne sont pas correct, corriger l'information
Les choix sont au moins au nombre de 3 :
§ Fax : la demande se fera par fax
§ Adresse e-mail : la demande se fera par un message électronique
§ Aucun : aucune demande ne se fera faite
Certains peuvent avoir en plus :
§ E-maintenance : dans les traitements, cela correspond à la valeur "Aucun". Mais cette
option précise qu'une e-maintenance est en place. Le mot "E-maintenance" peut avoir
des équivalents suivant les logiciels mis en place pour les imports de relevé, comme
"@Remote", "Kpax"...

Fax ou courriel dans la Localisation d'un bien
Biens et configurations / Gérer les biens
ou tout autre lien qui permet d'afficher la fiche du bien
§ Rechercher votre bien
§ Cliquer sur l'onglet "Client"
§ Si la localisation n'existe pas et qu'elle est nécessaire :
· <Crayon>
· Saisir le nom de la localisation
· <Disquette>
§ Cliquer sur le mot "Localisation"
§ <Crayon>
§ Saisir le fax ou courriel spécifique
§ <Disquette>
Fax ou courriel dans le site du client
Dans le site du client, il est possible de saisir le fax ou le courriel.
Fax ou courriel dans la fiche client
Dans le site du client, il est possible de saisir un fax ou courriel.
Procédure pour effectuer les demandes de relevés
Envoi par ‘Simulation d'une ou plusieurs SSC', avant le calcul
La simulation se fait :
§ soit à partir du menu : Solutions de services / Solutions de services clients / Simuler la
facturation des solutions
§ soit à partir d'une solution de service avec contrôle de la facturation (lien en bas de
l'écran).
Critères de sélection : vous pouvez sélectionnez les SSC à partir des critères de ce paragraphe.
Paramètres de génération : les éléments de ce paragraphe ne sont pris en compte que pour les
demandes de relevé compteur, lancées à partir de cet écran.
Paramètres de sortie : seule l'option «sans relevé depuis le» est prise en compte dans les
demandes de relevé compteur lancées à partir de cet écran.
La demande  se lance par un clic sur le lien Demande de relevé en bas à droite de l'écran.
Envoi par ‘Simulation d'une ou plusieurs SSC', après le calcul
La simulation (listing de pré-facturation) est lancée soit à partir de l'option au menu Simuler la
facturation des solutions, soit à partir d'une solution de service avec contrôle de la facturation (lien
en bas de l'écran).
Lancer la simulation (ou pré-facturation)
Les paragraphes Critères de sélection, Sélection, Paramètres de génération, Paramètres de sortie
ne peuvent pas et ne sont pas pris en compte. La demande de relevé compteur par fax se lance par
un clic sur le lien Demande de relevé en bas à droite de l'écran.
Après un premier traitement, ARTIS.net passe au point suivant.
Confirmation d'envoi
Une proposition (liste des demandes à effectuer) est alors faite sous forme de tableau.
Date de demande : il est possible de modifier la date de demande. Elle figure sur le document
envoyé.
Fax/Courriel : Vous avez la possibilité de modifier le numéro de fax, ou d'effacer le contenu.
§ Sans numéro de fax, aucun envoi n'est réalisé pour la ligne concernée.
§ Si le numéro de fax contient un « # », aucun envoi n'est réalisé pour la ligne concernée.
§ Dans tous les cas, les envois sont faits uniquement pour les lignes cochées (à
gauche).
L'export  en bas du tableau permet de conserver l'ensemble des demandes proposées par
ARTIS.net (les cases cochées ne font pas partie de l'export). Il est conseillé de enregistrer cet
export pour avoir une traçabilité des envois.
La touche <F2> permet de faire l'envoi.
Génération et Envoi
La barre de progression permet de suivre l'évolution des envois. Une trace des demandes de relevé
envoyées dans la boîte d'envoi des fax s'affiche.
RAPPEL
La case ‘Conserver la session à la fin du traitement' peut être cochée pour faire un copier-coller du
contenu du cadre dans un fichier texte (historique conservé).
A la fin du traitement, le message "Préparation des fax/courriel finis. Envoi en cours"
PARAMÉTRAGE TECHNIQUE
Le paramétrage technique est réalisé sur le serveur d'application et sur le serveur de fax par un
consultant technique de la société ARTIS.
La mise en œuvre standard de la société ARTIS passe par l'utilisation des services fax de Windows
X P avec un modem et une ligne analogique.
Pour une mise en œuvre autre (ligne Numéris en parallèle par exemple), il faut contacter de la
société ARTIS pour étudier la faisabilité.
Paramètres application
Seveur de mail
Ce paramétrage est à faire par ARTIS.
<?xml version="1.0" encoding="ISO-8859-1"?>
<smtp>
<ipserver>smtp.hostname.com</ipserver>
<port>25</port>
<mail>contact@xlbureautique.com</mail>
<mailTo>contact@xlbureautique.com</mailTo>
</smtp>
Fax de retour pour les demandes
Paramètres application / Paramètres application / Gérer les paramètres
Fax à utiliser pour retourner les demandes de relevé compteur.
Paramètre "SOC_FAX _RELEVE_COMPTEUR "
Valeur : Numéro du fax
Courriel expéditeur des demandes
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "BIEN_COMPTEUR_EX PEDITEUR_MAIL"
Valeur : Adresse email de l'expéditeur pour l'envoi des demandes de relevés, exemple :
ArtisWeb4@artis.fr
Courriel expéditeur général
Paramètres application / Paramètres application / Gérer les paramètres
Le paramètre « MAIL » est utilisé dans le cas où le paramètre
« BIEN_COMPTEUR_EX PEDITEUR_MAIL » n'est pas renseigné.
Paramètre "MAIL"
Valeur : Adresse de l'expéditeur du message (exemple, l'adresse e-mail du Service Dispatch),
exemple ArtisWeb6@artis.fr
Courriel retour des demandes
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "BIEN_COMPTEUR_DESTINATAIRE_MANAGEMENT_MAIL"
Valeur : Adresse email du destinataire recevant le résultat de l'envoi des demandes de relevés
Compteur, exemple ArtisWeb5@artis.fr
Fax retour des demandes
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "BIEN_COMPTEUR_NUMERO_FAX "
Valeur : Fax à utiliser pour retourner les demandes de relevé Compteur.
Remarque
La valeur est envoyé dans le champ "SOC_FAX _RELEVE_COMPTEUR" de l'X ML de données de la
demandes de relevé.
Courriel destinataire général
Paramètres application / Paramètres application / Gérer les paramètres
Le paramètre «MAILTO» est utilisé dans le cas où le paramètre
«BIEN_COMPTEUR_DESTINATAIRE_MANAGEMENT_MAIL» n'est pas renseigné.
Paramètre "MAILTO"
Valeur : Adresse du destinataire du message dans la cas où le technicien n'a pas d'adresse
paramétrée dans sa fiche, exemple ArtisWeb7@artis.fr
Paramétrage du mail pour les envois automatiques
Lors de la mise en place des demandes automatiques, le mail envoyé au client est paramétré par
défaut avec la signature et l'adresse d'Artis.
Donc, pour indiquer la signature de la société voire modifier le contenu du mail expédié, 4 fichiers
sont à modifier dans le répertoire /artis/configuration/templates/
o mailReleveCompteur.vm : contient le texte du mail
o mail-signature.vm : Indique l'adresse mail de l'expéditeur selon le module (Dit-Commande-
Demandes de relevés)
o signature.vm : Pour indiquer l'adresse de la société en bas de mail
o mailReleveCompteur.properties : Pour indiquer le logo de la société s'affichant en bas de mail
(signature). Le logo doit se trouver dans /artis/configuration/templates/
Calendrier des demandes pour l'envoi automatique
Les demandes de relevés peuvent être générées automatiquement selon un calendrier :
o Le calendrier générique,
o Le calendrier pour les exceptions (par exemple, tous les clients qui sont en forfait avec
régularisation sauf les clients d'une certaine classification (Grands comptes),
o Le calendrier pour les exclusions (par exemple, les écoles au mois d'août).
Ces calendriers sont à paramétrer dans des tables de décision.
Contacter un consultant ARTIS pour cette mise en place.
PARAMÉTRAGE APPLICATION
Paramètres application
Il est possible de définir un paramètre pour envoyer des demandes que pour les règles forfaits ou
tranches arrivés à la période de régularisation ou de renouvellement.
Recherche et envoi des demandes
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "IGNORE_FACTURE_THEORIQUE_POUR_COLLECTE_COMPTEUR"
Valeur :
§ Oui, la recherche et l'envoi des demandes sont limités aux dates de régularisation
(forfaits) ou de renouvellement (tranches),
§ Non coché :
Nombre de jours sans relevé
Paramètre "NB_JOURS_MAX _SANS_RELEVE_COMPTEUR_REEL"
Valeur :
§ 20, Nombre de jours maximum entre 2 relevés réels de compteur avant une nouvelle
demande de relevé automatique.
Document de demande de relevé compteur
Mise en page du document de demande de relevé
La mise en page du document se fait à l'aide d'un outil tel que X slFast, contacter ARTIS.
Paramétrage de l'image « mode opératoire »
Objectif
Il est possible d'insérer dans les demandes de relevé un mode opératoire qui rappelle au client
la manière de relever physiquement les compteurs sur sa machine.
Mise en oeuvre
Lien entre le Bien et l'Image
D'une part, pour rappel, les informations des biens sont :
§ Un bien (identifié par un matricule) est rattaché à un type de produit.
§ Un type de produit (référence fabricant ou référence constructeur) est lié à un article
vendu.
D'autre part, un mode opératoire est inséré dans le modèle d'impression grâce à une image
dont les caractéristiques sont :
§ Format : jpg (en minuscule)
§ Hauteur : maximum 12 cm
§ Largeur : fixe 17 cm
Le lien entre l'image et la machine est la référence du type de produit. C'est-à-dire que l'image a
pour nom la référence du type de produit suivi de l'extension "jpg".
Remarque
Les éventuels "blanc" qui figurent dans une référence de type de produit sont remplacés par
des "_" (trait de soulignement, touche <8> du clavier alphanumérique).
Mise en Place
L'ensemble des images doit être déposé dans un répertoire prévu à cet effet. Il est possible
depuis l'explorateur Windows d'accéder à ce répertoire : il faut saisir dans la zone adresse :
"\\adresse IP du server\interface\images",
Exemple "\\192.168.1.27\interface\images".
Mise à Jour
Pour tout nouveau type de produit qui est nouvellement commercialisé, il convient de créer
l'image correspondante (avec un outil tel que Microsoft Paint ou tout autre produit) et ensuite de
déposer l'image dans le répertoire cité.
Exemple : le bien "SDP00140" a pour référence de type de produit "603-1272". L'image "mode
opératoire" qui correspond à ce type de produit a pour nom "603-1272.jpg".
Si votre référence de type de produit contient des espaces, il est nécessaire de les convertir en
"_".
Remarque
Pour être plus explicite sur le document, insérer en haut de l'image la phrase « Pour relever les
compteurs, suivre les opérations suivantes : ».
Faire une SSC interne pour les DIT internes
FAIRE UNE SSC INTERNE POUR LES DIT INTERNES
Afin que les DIT de travaux internes ne soient pas facturable, une SSC au nom de l'organisation
interne peut être créée.
Solutions de services / Solutions de services client / Gérer une Solutions de services client
1. <+>
2. Sélection une solution de service prédéfinie de type "contrat d'entretien"
3. Mettre une durée du contrat longue, exemple : fin en 2030
4. Sélectionner le client créé spécifiquement au nom de l'organisation interne
5. Dans le module, cocher "comme portant sur la raison sociale" : c'est-à-dire que les couvertures
s'appliquent uniquement au client  sans s'occuper des biens
6. Pas de bien
7. Sélectionner une règle de facturation avec un montant à facturer à zéro et une date de
prochaine facture théorique très éloignée.
8. Enregistrer la SSC
9. Toutes les couvertures nécessaires sont gérées.
Consulter Saisir une DIT interne (Reconditionnement...)
Gérer les augmentations des SSC
GÉRER LES AUGMENTATIONS DES SSC
L'augmentation est automatique si elle a été rendu active. Lors de l'installation d'ARTIS.net, par
défaut, ce paramètre est à Non, consulter Paramétrer, activer les augmentations récurrentes.
Les différents modes d'augmentation (majoration) sont :
Non révisable
Les coûts dans les RFC ne sont pas impactés : pas de modification.
Syntec
Augmentation selon la grille de syntec à mettre à jour tous les mois, consulter Gérer
l'augmentation selon l'indice Syntec.
Majoration société
Augmentaion faite à partir d'un coefficient enregistré dans les paramètres du logiciel, consulter
Changement des taux d'augmentation Société.
Majoration personnalisée
L'augmentation est se renseigne au niveau de la RFC, en fonction des choix commerciaux.
Date d'application des augmentations
Règle de type "Forfait + Régularisation"
La date de prochaine augmentation n'a pas le même effet suivant son positionnement par rapport à
la date de régularisation.

Paramétrer, activer les augmentations récurrentes
PARAMÉTRER, ACTIVER L'AUGMENTATION RÉCURRENTE
Dans le cas où vous n'aviez pas mis en place l'augmentation récurrente, il nécessaire de procéder
à deux étapes :
o Modification des informations d'augmentation sur les SSC,
o Activation de l'augmentation.
L'activation de l'augmentations des côuts des RFC s'effectue à l'aide d'un paramètre. Il indique si
l'augmentation est active ou non active dans les règles de facturaiton. Par défaut ce paramètre est à
Non.
Attention
Cette opération doit être faite :
o Par un utilisateur averti,
o Après que les modifications éventuelles sur les SSC aient été faites (voir le paragraphe
précédent).
ARTIS conseille vivement de faire une mise en place dans une base TEST avant la mise en place
sur la base de PROD. Certaines éventuelles anomalies peuvent être irréversibles.
Si il y a un doute, ou pour un accompagnement pour la première fois, contacter ARTIS.
Activer l'augmentation
Paramètres application / Paramètres application / Gérer les paramètres
Activation de l'augmentations des côuts des RFC. Ce paramètre est utilisé pour indiquer si on
active les augmentations sur les règles de facturation. Par défaut ce paramètre est à Non.
Paramètre "REGLEFACT_AUGMENTATION"
Valeur :
§ Coché : Active l'augmentation,
§ Non coché : L'augmentation récurrente n'est pas active.
Gérer les augmentations récurrentes
Les éléments des  augmentations des  Règles de  Facturaiton Clients  sont  prédéfinis dans  les
Règles de Facturation Prédéfinies et correspondent aux règles de gestion commerciale.
Pour les augmentations personnalisées, deux types sont possibles :
· Ajouter valeur fixe
Ce type sert à augmenter d'une valeur, celle en vigueur.
Exemple : 10.00 € sont ajoutés aux 150.00 € facturés dans la RFC.
· Remplacer valeur actuelle (0.0010 à la place 0.008)
Ce type sert à remplacer la valeur en vigueur par une nouvelle valeur.
Exemple : le tarif 0.0010 est mis à la place du tarif 0.0008 facturé dans la RFC.
Modifier les augmentations dans les RFP
Les RFP sont créées par un consultant ou une personne formée et habilitée à la création dans
ARTIS.net. Le choix commerciale des augmentations est indiqué dans ces RFP. En cas de
changement des règles commerciales, la RFP est à modifier.
Solutions de services / Solutions de services prédéfinies / Gérer une règle de facturation prédéfinie
(RFP)
1. Choisir la RFP
2. Section "Accueil", suivre le lien "Paramètres de facturation",
3. <Modifier> ou <Crayon>,
4. Section "Augmentation",
5. Compléter :
§ "Type d'augmentation récurrente",
§ "Renouvellement" :
· "Renouvellement à date",
· Ou "à date" ou "annuel",
§ <F2> ou <Disquette>.
Changement des taux d'augmentation Société
CHANGEMENT DES TAUX D'AUGMENTATION SOCIÉTÉ
Il s'agit des taux pris en compte pour les RFC dont le mode est "SOCIETE".
Attention
Cette opération doit être faite :
o Par un utilisateur averti,
o Après que les modifications éventuelles sur les SSC aient été faites (voir le paragraphe
précédent).
ARTIS conseille vivement de faire une mise en place dans une base TEST avant la mise en place
sur la base de PROD. Certaines éventuelles anomalies peuvent être irréversibles.
Si il y a un doute, ou pour un accompagnement pour la première fois, contacter ARTIS.
Majoration société en coefficient
Paramètres application / Paramètres application / Gérer les paramètres
Le paramétrage d'un coefficient général pour la majoration société des coûts unitaires.
Paramètre "COEFF_UNITAIRE_MAJORATIONSOCIETE"
Valeur : Exemple, 1.097
Majoration société en pourcentage
Paramètres application / Paramètres application / Gérer les paramètres
Le paramétrage d'un pourcentage général pour la majoration société des coûts unitaires. Utilisé si
le coefficient n'est pas renseigné.
Paramètre "POURC_UNITAIRE_MAJORATIONSOCIETE"
Valeur : Exemple, 9.7

Remarque
L'augmentation est exprimée une fois en pourcentage et une fois en coefficient. ARTIS.net vous
conseille de compléter les deux paramètres, exemple : 5 % et 1.05).
Si plusieurs organisations internes sont présentes et que l'un paramètre est mis "Unique par
organisation", faire les modifications une par une.
Gérer l'augmentation selon l'indice Syntec
GÉRER L'AUGMENTATION SELON L'INDICE SYNTEC
Principe
L'indice SYNTEC mesure l'évolution du coût de la main d'œuvre.
Le prix d'une prestation pourra être révisé à chaque échéance du contrat selon une formule qui
prend en compte l'indice SYNTEC et qui s'établit ainsi :
P1 : prix révisé
P0 : prix contractuel d'origine
S0 : indice SYNTEC de référence retenu à la date contractuelle d'origine
S1 : dernier indice publié à la date de révision
Paramétrer une règle de facturation client - RFC
Avant tout, il faut indiquer la règle de facturation contractuelle en majoration Syntec.
Saisir les indices
Dans Artis, la table de décision «INDICES_SYNTEC »  permet de renseigner les indices émis
environ trimestriellement par la Syntec.
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
1. Rechercher la table "INDICES_SYNTEC"
2. Pour chaque mois à saisir :
§ <+> pour ajouter une ligne (une ligne = un mois)
§ Saisir l'année, le mois et la valeur de l'indice dans la colonne "S"
§ <Disquette>
Attention
la saisie des mois dans la table se fait en minuscule en respectant les accents. Les indices doivent
se renseigner au moins sur les 2 dernières années, la formule utilisant l'indice N-1
Numéro Année Mois S
1 2006 janvier 131.800
2 2006 février 132.300
3 2006 mars 132.800
4 2006 avril 133.100
5 2006 mai 133.500
6 2006 juin 133.800
7 2006 juillet 134.000
8 2006 août 134.300
9 2006 septembre 134.500
10 2006 octobre 134.700
11 2006 novembre 134.900
12 2006 décembre 134.800
13 2007 janvier 135.300
14 2007 février 135.700
15 2007 mars 136.300
16 2007 avril 136.600
17 2007 mai 137.300
18 2007 juin 137.400
19 2007 juillet 137.600
20 2007 août 137.900
21 2007 septembre 138.100
22 2007 octobre 138.200
23 2007 novembre 138.400
24 2007 décembre 138.600
25 2008 janvier 139.000
26 2008 février 139.600
27 2008 mars 140.200
28 2008 avril 140.800
29 2008 mai 141.300
30 2008 juin 141.800
31 2008 juillet 142.200
32 2008 août 142.500
33 2008 septembre 142.600
34 2008 octobre 143.000
35 2008 novembre 143.000
36 2008 décembre 143.000
37 2009 janvier 142.860
38 2009 février 142.860
39 2009 mars 142.710
40 2009 avril 142.710
41 2009 mai 142.570
42 2009 juin 142.280
43 2009 juillet 142.140
44 2009 août 142.142
45 2009 septembre 142.142
46 2009 octobre 142.140
47 2009 novembre 142.428
48 2009 décembre 142.710
49 2010 janvier 142.860
50 2010 février 143.430
51 2010 mars 143.860
52 2010 avril 144.290
53 2010 mai 145.000
54 2010 juin 145.860
55 2010 juillet 146.432
56 2010 août 147.004
57 2010 septembre 147.576
58 2010 octobre 148.148
59 2010 novembre 148.863
60 2010 décembre 149.578
61 2011 janvier 150.293
62 2011 février 150.865
63 2011 mars 151.294
64 2011 avril 151.866
65 2011 mai 152.581
66 2011 juin 153.296
67 2011 juillet 154.011
68 2011 août 154.297
69 2011 septembre 154.583
70 2011 octobre 155.012
71 2011 novembre 155.584
72 2011 décembre 156.013
73 2012 janvier 156.442
74 2012 février 156.585
75 2012 mars 156.728
76 2012 avril 157.157
77 2012 mai 157.300
78 2012 juin 157.586
79 2012 juillet 157.872
80 2012 août 158.158
81 2012 septembre 158.444
82 2012 octobre 158.587
83 2012 novembre 159.016
84 2012 decembre 159.302
85 2013 janvier 159.588
86 2013 février 159.445
87 2013 mars 159.445
88 2013 avril 159.445
89 2013 mai 159.731
90 2013 juin 159.874
91 2013 juillet 160.160
92 2013 août 160.303
93 2013 septembre 160.446
94 2013 octobre 160.589
95 2013 novembre 160.732
96 2013 decembre 160.875
97 2014 janvier 161.018
98 2014 février 161.447
99 2014 mars 161.876
100 2014 avril 162.162
101 2014 mai 162.162
102 2014 juin 162.305
103 2014 juillet 162.591
L'évolution des indices est sur différents sites internet. Consulter http://www.syntec-numerique.fr/
Services/Avantages/Indice-Syntec.
Modifier l'augmentation d'une SSC
MODIFIER L'AUGMENTATION D'UNE SSC
1. Appeler la SSC,
2. Cliquer sur <Engrenage> de la RFC,
3. <Modifier> ou <Crayon>,
4. Descendre sur la section "Augmentations",
5. Appliquer les modifications,
6. <Disquette> ou <F2>
7. <Esc> ou <X >.
Modifier l'augmentation sur plusieurs SSC
MODIFIER L'AUGMENTATION SUR PLUSIEURS SSC
Modification du Mode d'Augmentation, du Taux, de la Date
Procédure
Si un grand nombre de SSC doivent subir un changement sur
o le mode d'augmentation,
o le taux propre à la RFC,
o la date d'application de l'augmentation,
il est possible de travailler à partir d'un fichier Excel. Suivre la procédure détaillée Actualiser les
augmentations des SSC.
Remarque
Pour information : le programme de traitement des augmentations utilisé par ARTIS, ne gère
actuellement pas les augmentations SYNTEC, et ne prend pas en compte la colonne « Nouveau
"Renouvellement" ». Pour ces demandes, un traitement manuel doit être effectué. Le temps et la
charge seront donc évalués par ARTIS.
Gérer les augmentations ponctuelles
GÉRER LES AUGMENTATIONS PONCTUELLES
Permet de déclencher une augmentation ponctuelle des coûts d'une SSC.
Solutions de services / Solutions de services client / Gérer une solution de services client
1. Rechercher la SSC,
2. Section "Règles de Facturation",
3. <Engrenage>,
4. <Modiier> ou <Crayon>,
5. Section "Augmentation" / "Augmentations ponctuelles"
6. Faire <+> du tableau,
7. Type : Choisir le mode d'augmentation (Personnalisée, Société ou Syntec),
8. Date : Saisir la date d'application,
9. Affichage : Choisir le Type de majoration
§ Appliquer coefficient (pour appliquer l'unité exprimée en coefficient au tarif en vigueur)
§ Appliquer pourcentage (pour appliquer l'unité  exprimée  en  pourcentage au  tarif  en
vigueur)
§ Ajouter valeur fixe (ajouter une valeur au tarif en vigueur)
§ Remplacer valeur actuelle  (mettre  une  valeur à  la  place  du  tarif  en  vigueur)Indiquer
l'unité en foncrtion du mode à choisir dans le combobox
10. Unité : Saisir le valeur de l'augmentation suivant le choix effectué dans "Affichage",
11. <F2> ou <Disquette>.
Après l'application de cette augmentation ponctuelle, elle apparaitra dans l'historique détaillé.
Remarque
Par défaut, tous les coûts sont cochés et donc augmentés.
Suivre l'historique des augmentations
SUIVRE L'HISTORIQUE DES AUGMENTATIONS
Solutions de services / Solutions de services client / Gérer une Solution de Services Client
1. Rechercher la SSC,
2. Section "Règles de Facturation",
3. Sélectionner la RFC,
4. <Engrenage>,
5. Section "Augmentations",
6. Cliquer sur "Historique des augmentations",
7. Un tableau reprend les différentes augmentations de tarifs constatées,
8. Le lien dans la colonne "Numéro facture" accède à la facture de SSC impactée par
l'augmentation.
Gérer les copies offertes
COPIES OFFERTES
Cas du Relevé et de la Tranche
Artis.net ne gère des copies offertes que pour les modes de facturation :
§ Copies échues ou Copies Consommées
§ Tranches Copies  Limitées ou non limitées
Dans le détail de la RFC (écran 1), en bas à droite, dans le pavé "Unités offertes et financées"
§ Mettre le nombre d'unité offerte dans la zone "Unités offertes"
§ Mettre au besoin une date de fin de validité des copies offertes, dans la case "Fin"
Le premier des deux critères ci-dessus atteint déclenche la facturation.
ATTENTION : la gestion des copies offertes n'est prise en compte que si la RFC n'a jamais été
facturée.
Ce qui veut dire que la date de dernière facturation théorique, la date de dernière facturation réelle et
le numéro de facture soient vide.
Cas du Forfait + Régularisation
Prise en compte dans la RFC
Il est possible de saisir un nombre de copies offertes dans la règle de facturation. Ce nombre de
copies offertes est alors pris en compte uniquement au moment de la régularisation (pas au
moment de facturer les forfaits).
Autres solutions
Pour une prise en compte sur les engagements, il faut faire un traitement manuel. Il faut saisir en
commentaire  uniquement le nombre de copies offertes et pas dans la RFC. Après on 2 solutions :
Solution 1
1. On génère la première facture
2. On ajoute une ligne en déduisant les copies offertes
3. On a donc un avoir pour le client
4. On facture ensuite normalement la SSC .
5. Tant que l'avoir établi n'est pas consommé le client ne règle rien
6. A faire valider par le DAF qu'on laisse un solde créditeur chez le client
Solution 2
1. On estime que le nombre de copies offertes correspond à  x années de forfait.
2. Mettre en date de prochaine facture théorique : date début de SSC + X  années de forfait
3. Mettre les  RFC en régime particulier
4. A date demandée de prochaine facture théorique, appeler le client pour avoir une valeur exacte
de compteurs
5. Compteur inférieur aux copies offertes : repousser date de prochaine facture théorique
6. Compteur supérieur aux copies offertes :
7. Actualiser le compteur de dernière régularisation : nombre de copies offertes
8. Actualiser le cumul des forfaits facturés : nombre de copies offertes
9. On peut facturer ensuite la SSC à cadence normale
Gérer les regroupements de factures
GÉRER LES REGROUPEMENTS DE FACTURES
Etablir des factures séparées dépend de la combinaison des critères ci-dessous :
§ Client en regroupement ou pas,
§ Sites de facturation différents ou absents entre les RFC,
§ Marchés différents ou absents entre les RFC,
§ Modes de règlement différents entre les RFC.
Il faut privilégier l'utilisation de sites de facturation et des numéros de marché. Les sites peuvent
être déclarés uniquement "site de facturation" afin de limiter leur utilisation (ne pas les déclarer
comme site de livraison), consulter .
La « séparation » ne se fait que lors de la création des factures au moment de la génération réelle.
Procédure
Pour des cas complexes de regroupement ou de factures séparées, il est nécessaire d'avoir une
vue globale
1. Solutions de services / Suivi et contrôle / Consulter les SSC,
2. Mettre le client à traiter,
3. <Flèche verte> ou <F2>,
4. <Export>,
5. Sélection la configuration personnalisée "Vérification pour factures différentes", consulter le
paragraphe ci-dessous,
6. Exporter sous Excel,
7. Dans ARTIS.net, à partir de la fiche du client, faire un export des sites,
8. Sous Excel, utiliser des nouvelles colonnes pour établir les regroupements,
9. Vérifier les sites disponibles (point 7 ci-dessus) et positionner les sur les RFC selon les
besoins,
10. Créer des nouveaux sites uniquement de type "Facturation" dans la fiche du client, pour
terminer les regroupements,
11. Faire les modifications dans les RFC des SSC du client.
Configuration personnalisée "Vérification pour factures
différentes"
Les colonnes nécessaire au travail sont les suivantes :
Position Position
lettrée Label de la colonne Form at Com m entaire
1 A Code SSC
2 B Libellé SSC
3 C Statut SSC
4 D Code client
5 E Raison sociale client
6 F Code RFC
7 G Libellé RFC
8 H Type RFC
9 I Rang RFC
10 J Nb Biens / Grandeurs
11 K Coût STANDARD code org
12 L Coût STANDARD raison sociale org
13 M Coût STANDARD code site
14 N Coût STANDARD nom site
15 O Coût STANDARD lib condi paiement
16 P Coût STANDARD type moyen paiement
17 Q Coût DEPASSEMENT code org
18 R Coût DEPASSEMENT raison sociale org
19 S Coût DEPASSEMENT code site
20 T Coût DEPASSEMENT nom site
21 U Coût DEPASSEMENT lib condi paiement
22 V Coût DEPASSEMENT type moyen paiement
23 W Identifiant Fabricant
24 X Identifiant Prestataire
25 Y Libellé du bien
26 Z Site
27 AA Site Ville
28 AB Localisation
29 AC Site à trouver Etablir les regroupements
30 AD L/M Exemple : L pour Location / M pour Maintenance
31 AE Mettre le site … Après avoir créer les sites manquants dans la fiche client, reporter chaque site,
puis mettre à jour les RFC
Colonnes à ajouter
Gérer la présentation dans les SSC
GÉRER LA PRÉSENTATION DE FACTURE DES SSC
Définir l'ordre d'affichage des RFC
Solutions de services / Solutions de services client / Gérer une solution de services client
1. Rechercher la SSC,
2. <Modifier> ou <Crayon jaune>,
3. Section "Règles de Facturation",
4. Colonne "Position",
5. Modifier l'ordre,
6. <Disquette> ou <F2>.
L'ordre défini pour l'affichage est repris lors de la génération de la facture de la SSC.
Gérer les SSC de type Extension de garantie
GÉRER LES SSC DE TYPE EXTENSION DE GARANTIE
1. Créer une SSC en utilisant la SSP « …Extension de garantie… »,
2. Lors de la création de la RFC, mettre le prix de vente de la garantie,
3. <Triangle précédent> ,
4. <Disquette>,
5. Modifier la RFC afin de mettre 0 en « Prix facturé » (pas de facturation par les SSC car déjà
facturé),
6. Conserver les valeurs « PCA/PAR » et « Renta »,
7. <Disquette> ou <F2>.
Ainsi le matériel est couvert, visible en saisie de DIT.
La SSC est prise en compte dans la calcul de PCA/PAR pour les situations comptables.
Gérer les RFC de type Kit
GÉRER DES SSC DE TYPE KIT
Ce type de règle permet de gérer des contrats avec facturation de consommables (toners) en
fonction des livraisons effectuées
Exemple
· Livraison d'1 toner le 22/01
· Livraison de 2 toners le 15/02
· Livraison d'1 toner le 31/03
è Facturation d'un montant forfaitaire (500.00 €) par quantité livrée (4) soit 2000.00 € pour le
1er trimestre. Ce montant couvre la fourniture des consommables mais peut aussi inclure
les prestations de maintenance (MO, Trajet) et la fourniture des pièces détachées.
Paramétrage
Solutions de services / Solutions de services prédéfinies / Gérer une règle de facturation prédéfinie
(RFP)
Créer ce nouveau type de RFP en sélectionnant la règle ‘Kits de livraison'.
Définir la périodicité de facturation
(par exemple, ‘tous les mois' indique que le programme de facturation des SSC vérifie s'il existe de
nouvelles livraisons de consommables à facturer)
Compléter les éléments de facturation dans l'écran obtenu par le lien ‘Paramètres de facturation' :
· Montant facturé avec l'article de facturation (par ex, 500.00 €)
· Engagement
o ‘Oui' signifie que le nombre de kits définis dessous sera facturé au client (minimum
facturé)
o ‘Non' signifie que seuls les kits envoyés seront pris en compte pour facturer le client
· Durée de vie du kit
· Nombre kits minimum
· Nombre kits offerts
· Facture l'article livré :
o ‘Oui' signifie que le kit livré sera facturé par la chaîne des ventes
o ‘Non' signifie que la facturation se fera par ‘Générer les factures de solutions de
services'
Renseigner les ‘Service' lié à la facturation des kits (par exemple, ‘Consommables Noir/blanc').
Complément :
Le tarif de la RFC est propre à un type de couverture (dans l'exemple, ‘Consommables Noir/Blanc').
Pour facturer les kits couleur, créer une RFC spécifique associée au service ‘Consommables
Couleur'.
Créer la Solution de services client (SSC)
Solutions de services / Solutions de services prédéfinies / Gérer une solution de services client
(SSC)
La création d'une SSC ‘Contrat KIT' est identique aux autres SSC
Visualisation des livraisons de consommables
Les livraisons de consommables effectuées par un B.L. ou un CRIT s'affichent dans le tableau des
livraisons à facturer
(Consulter ‘Paramètres de facturation' de la RFC).
Rentabilité
Le calcule du C.A. se fait à partir des factures réelles et non pas sur la base de l'engagement qui
n'est pas forcément facturé dans sa totalité lorsqu'il n'est pas atteint.
Le traitement est spécifique à ce type de règle de facturation (pour les autres, la rentabilité prend en
compte l'engagement pour estimer le C.A.).
Gérer les RFC en régularisation sur regroupement
GÉRER LES RFC EN RÉGULARISATION SUR
REGROUPEMENT
Regroupement sur prix
Le principe est expliqué d'après l'exemple suivant :
Un forfait de 3000 copies N/B au prix de 0.005 € = 15 €
Un forfait de 2000 copies Couleur au prix de 0.05 € = 100 €
Ce qui fait un total de 115 € forfaitaire.
Au moment de la régularisation, si la somme de la facturation N/B et Couleur est supérieure au
forfait de 115 €, les copies supplémentaires sont alors facturées.
Regroupement sur quantité
Le principe est expliqué d'après l'exemple suivant :
Un forfait de 3000 copies N/B au prix de 0.005 € = 15 €
Un forfait de 2000 copies Couleur au prix de 0.05 € = 100 €
Ce qui fait un total de 115 € forfaitaire.
Au moment de la régularisation, si la somme des copies N/B et Couleur est supérieure au forfait de
5000 €, les copies supplémentaires sont alors facturées.
Mise en place
Prédéfinis
Solutions de services / Solutions de services prédéfinies / Gérer une solution de service prédéfinie
Paramétrer une SSP, avec un MSP et des RFP propres à ce type de contrat.
Les deux règles de facturation (RFP) sont de type Forfait avec régularisation, avec les
caractéristiques suivantes :
§ Contrôle des forfaits facturés à "Oui",
§ Remboursement des unités facturées non consommées à "Oui",
§ Régularisation groupée sur le module positionnée sur "REGROUPEMENT SUR PRIX "
ou "REGROUPEMENT SUR REGROUPEMENT".
Impression
Cet type de contrat nécessite un paramétrage spécifique. En effet, un certain nombre de lignes
doivent être masquées à l'impression.
Table de décision
Paramètres application / Classification, listes et tables de décision / Gérer les Tables de
décision
Appeler la table de décision "TD_TEMPLATE_IMPRESSION",
Ajouter une ligne et compléter :
· Code SSP : mettre le code de la SSP créé précédement,
· Nom template : mettre un nouveau nom de format d'impression.
Format d'impression
Paramètres application / Impression / Gérer les formats d'impression
1. Créer un nouveau format d'impression avec le nom mis dans la table de décision
(consulter le paragraphe précédent) et enregistrer immédiatement,
2. Modifier le format d'impression créé :
· Dans la section "Lignes de commentaires", rendre non imprimable les lignes
types :
1. Le libellé RFC,
2. Les lignes type concernant les informations de cumul,
3. Les informations de compteurs de régularisation,
· Dans la section "Lignes d'articles", ajouter les articles utilisés dans les coûts
forfait et enregistrer immédiatement,
3. Modifier le format d'impression :
· Dans la section "Lignes d'articles", rendre non imprimable les articles utilisés
dans les coûts forfait et enregistrer immédiatement.
Gérer les types de relevés dans la facturation des RFC
GÉRER LES TYPES DE RELEVÉS DANS LA FACTURATION
DES RFC
Cas général
Sélectionner dans les RFC, les types de relevé pour la facturation
Dans les règles de facturation prédéfinies ou client, il est possible de définir le type de relevé
privilégié pour la facturation de celles-ci (premier écran des règles de facturation, en bas à
gauche).
1. Estimation autorisé : ARTIS.net va faire une estimation, si un compteur réel est daté de
plus de 20 jours par rapport à la date de travail/calcul.
2. Relevé réel : ARTIS.net ne fait pas d'estimation, il prendra obligatoirement un relevé
client ou prestataire, daté de moins de 20 jours par rapport à la date de travail/calcul.
En l'absence de compteur, la RFC est en anomalie.
3. Relevé particulier : ARTIS.net ne fait pas d'estimation, il prendra obligatoirement un
relevé client uniquement, daté de moins de 20 jours par rapport à la date de travail/
calcul. En l'absence de compteur, la RFC est en anomalie.
Remarque
La règle des 20 jours est dictée par un paramètre : consulter le paragraphe ci-dessous.
Paramètres application
Nombre de jours pour prendre en compte les relevés
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "NB_JOURS_MAX _SANS_RELEVE_COMPTEUR_REEL"
Valeur : 20 par défaut. Il s'agit du nombre de jours maximum entre 2 relevés réels de compteur
avant une nouvelle demande de relevé automatique.
Nombre de jours pour trouver un relevé de compteur Non estimé
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "NB_JOURS_RELEVE_PRFACTU"
Valeur : 20 par défaut. Ce paramètre indique le nombre de jours pour trouver un relevé de
compteur Non estimé.
Anomalie en pré-facturation ou facturation
Ce paramètre est à prendre en compte pour les cas 2 et 3 cités ci-dessus.
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "EX CEPTION_RELEVE_FACTURATION"
Valeur :
§ Oui : L'absence de relevé déclenche une anomalie. ARTIS lève une exception et
l'anomalie est visible,
§ Non : L'absence de relevé déclenche une anomalie. ARTIS NE lève PAS d'exception :
l'anomalie n'est pas visible. La facturation de la SSC est vue comme "Rien à facturer".
Options de facturation des RFC au relevé réel
Une table de décision permet de gérer des options de facturation pour les règles de facturation au
relevé réel.
Paramètres application / Classifications, Listes et tables de décision / Gérer les tables de
décisions
Modifier la table de décision "TD_FACTURATION_RELEVES_REEL".
Numéro Code Organisation Interne Intitulé Agence Code Règle de facturation prédéfinie Traitement à appliquer Relevés autorisés Relevé prioritaire Recherche relevés suivant nombre de jours d'estimation Estimation forcée
1 041 VILLENEUVE D'ASCQ * Relevé Réel 3 Relevé prestataire, Relevé
client Non Non
Les premiers critères du tableau sont :
o Le code de l'organisation interne concernée,
o Le libellé de l'agence concernée,
o Le code de la règle de facturation prédéfinie (RFP) concernée,
o Le traitement à appliquer (il s'agît d'un commentaire libre expliquant le mode de facturation
adopté).
Relevés autorisés
Les choix possibles sont :
§ Relevé prestataire, Relevé client : dans ce cas, ARTIS prend en compte indifféremment
un relevé client ou prestataire pour facturer la RFC,
§ Relevé prestataire : dans ce cas, ARTIS ne prend en compte qu'un relevé du prestataire
pour facturer la SSC,
§ Relevé client : dans ce cas, ARTIS ne prend en compte qu'un relevé du client pour
facturer la SSC.
Relevé prioritaire
Les choix possibles sont :
§ Relevé prestataire : dans ce cas, ARTIS prend en priorité le relevé du prestataire. S'il
n'en trouve pas, il se rabat sur un relevé client
§ Relevé client : dans ce cas, ARTIS prend en priorité le relevé du client. S'il n'en trouve
pas, il se rabat sur un relevé prestataire
Recherche suivant nombre de jours d'estimation
S'il est à "Oui", ARTIS recherche les relevés dans la limite du nombre de jours précisé
dans les paramètres de la génération.
Si Non, ARTIS recherche un relevé depuis la dernière facture.
Estimation forcée
S'il est à "Oui" et qu'aucun relevé ne correspond aux options de facturation définies, ARTIS
effectue une estimation pour facturer.

Gérer les UT
Les éléments de la SSC en UT
LES ÉLÉMENTS DE LA SSC EN UT
Une SSC UT est composée :
o D'un module,
o D'une règle UT,
o De service UT.
D'un module
D'une règle UT
C'est une règle avec le mode de facturation "Tranche de grandeur à l'unité".
Premier écran
§ Périodicité : rythme selon lequel ARTIS.net va vérifier le dépassement
§ Terme : mettre "A échoir"
§ Service facturé : services (couvertures) qui vont permettre un décompte d'UT selon le
temps saisi dans les CRIT. Ce rattachement est obligatoire. Sans quoi, les temps des
CRIT ne seront pas convertis en UT et seront même facturable dans le CRIT. La façon
dont sont créés les services est particulière. Se reporter au point nommé Service UT.

Deuxième écran : Paramètres de facturation
§ Grandeurs à l'unité : il s'agit du nombre d'UT à facturer (nommée également "Tranche
d'UT"). Il est nécessaire d'adapter ce qui est facturé avec ce qui est est décompté.
Exemple : Si le décompte des temps se fait en 1/4 d'heure, "Grandeurs à l'unité doit
alors être exprimée en nombre de 1/4 d'heure. Se reporter au point nommé Service UT.
§ Renouvellement : Les UT facturées ont elles une durée limitée ?
· CAS 1, Oui : Cliquer sur "Périodicité" pour la définir (exemple : tous les 12
mois). Au retour, l'option "Périodique" est cochée.
o Report des unités non consommées :
§ si dans la période en cours (qui s'achève), les UT non
consommées sont perdues pour le client, mettre "Non"
§ si dans la période en cours (qui s'achève), les UT non
consommées doivent être reportées sur la période suivante
(qui va être facturée), mettre "Oui"
· CAS 2, Non : mettre "Apériodique". Les UT sont valables sans limite dans le
temps.
§ Dépassement : Si au cours de la période en-cours, le nombre UT consommées
dépasse celui facturé, que faire ?
· Dans le CAS 1, 2 possibilités :
o Une nouvelle tranche est facturée : Le CRIT qui est cause n'est pas
facturable. La facturation de la SSC procède à la facturation d'autant
de tranches complètes d'UT nécessaire à la couverture de la totalité
des UT consommées. La période de validité des UT débute alors à
partir de cette de facturation.
o Le dépassement est facturée au coût unitaire suivant (coût à préciser
dans le tableau "Coût unitaire") : Le CRIT qui est cause n'est pas
facturable. Le temps du CRIT est convertit en UT et impacte la règle
de facturation. En fonction de la périodicité précisée dans le premier
écran, la facturation de la SSC procède à la facturation de toutes les
UT supplémentaires au prix indiqué dans le tableau se trouvant
dessous.
· Dans le CAS 2 :
o Seule l'option "Une nouvelle tranche est facturée" est nécessaire. Le
CRIT qui est cause n'est pas facturable. La facturation de la SSC
procède à la facturation d'autant de tranches complètes d'UT
nécessaire à la couverture de la totalité des UT consommées. Les UT
du solde sont valables sans limite dans le temps.
§ Nombre de décimales : au minimum 3. Pour être plus juste 4 (surtout si avant la mise
en place d'ARTIS.net, des montants forfaitaires étaient facturés).
De service UT
Les services doivent être obligatoirement dans le même module que la règle de facturation.
Cas simple
Le temps est converti en une unité de temps, exemple : 1 UT =  un 1/4 d'heure ou 1 UT =
une 1/2 heure.
§ Périodicité : "Apériodique"
§ Le service est qualifié en unités : "sans unité de mesure"
§ Critère de comparaison : "="
§ Valeur : "1"
§ Caractéristiques Qualitatives : "Oui"
§ Consommation en unités : "De temps"
§ Une unité de traitement correspond à : "1" "Quart d'heure(s)"  (ou Demi-
heure, Heure, Minute)

Cas forfaitaire
Quel que soit le temps passé, un nombre fixe d'UT est décompté, exemple : Pour un
déplacement 4 UT sont décomptées.
§ Périodicité : "Apériodique"
§ Le service est qualifié en unités : "sans unité de mesure"
§ Critère de comparaison : "="
§ Valeur : "4"
§ Caractéristiques Qualitatives : "Oui"
§ Consommation en unités : "De temps"
§ Une unité de traitement correspond à : "50" "Heure(s)"
Les déplacements dont la durée sont inférieurs à 50 heures feront l'objet d'un décompte de
4 UT. "50 heures" est une valeur suffisamment grande afin qu'elle ne soit jamais dépassée.
Ce cas peut être exprimées dans une unité de temps différente des autres services et
"Grandeurs facturées".
Cas complexe
Le temps est à décompter en UT selon la nature du travail effectué. Exemple :
· Temps de niveau 1 (PC, Imprimante...) : 4 UT par 1/4 d'heure
· Temps de niveau 2 (Réseaux, Serveurs...) : 5 UT par 1/4 d'heure
· Temps de niveau 3 (Solutions) : 6 UT par 1/4 d'heure
· Temps de déplacement :  : 4 UT par 1/4 d'heure
Nom du
service
Périodicit
é
Le service
est
qualifié
en unités
Critère de
comparais
on
Valeur
Caractéris
tiques
Qualitativ
es
Consomm
ation en
unités
Une unité
de
traitemen
t
correspon
d à
Temps de
niveau 1
(PC,
Impriman
te...)
Apériodiq
ue
sans
unité de
mesure
= 4 Oui De temps 1 Quart
d'heure(s)
Temps de
niveau 2
(Réseaux,
Serveurs..
.)
Apériodiq
ue
sans
unité de
mesure
= 5 Oui De temps 1 Quart
d'heure(s)
Temps de
niveau 3
(Solutions
)
Apériodiq
ue
sans
unité de
mesure
= 6 Oui De temps 1 Quart
d'heure(s)
Précautions
Si une prestation dans un CRIT est couvert à la fois par :
o un service (heure),
o un service (UT),
o quelque soit la portée des modules (sur un bien ou sur raison sociale).
Alors c'est le service (Heure) qui pris en compte ; il est prioritaire.
Donc il faut n'avoir qu'un seul service en place dans la SSC : le service (UT)
Les prestations prédéfinies et les UT
LES PRESTATIONS PRÉDÉFINIES ET LES UT
Les prestations prédéfinies sont les lignes de prestation qui s'affichent lors des CRIT, en session
ARTIS.net ou sur PDA.
Le lien entre les services (couvertures) et les lignes de prestations dans les CRIT se fait de la
manière suivante :
Domaine Solution de service Domaine Service
Domaine Article
SSC MSC RFC (E) Service ou couverture (D)
Classificatio
n
"Couvertur
e
contractuel
le des
articles" (C
)
Article (B)
Ligne de
prestation
(A)
Contrat
offrant des
couverture
s au nom
du client
"Porte sur
raison
sociale" ou
sur un ou
des biens
précis.
"Groupe"
qui permet
de
rassembler
les RFC et
les
services.
Règle de
facturation
permettant
de gérer
les UT
facturées
et
consommé
es.
Liste des couvertures offertes
par le type de contrat. Les
services (ou couvertures)
couvrent des besoins sans
décompte d'UT (pièces,
fournitures, éventuellement le
déplacement..) ou couvrent
des besoins donnant lieu à un
décompte d'UT (mains
d'oeuvre, éventuellement le
déplacement...)
Cette
classificati
on est
obligatoire
pour tous
les
articles.
A chaque
ligne de
prestation,
un article
est
associé.
Dans les
CRIT, il
s'agit de
rubriques
dans
lesquelles
le
technicien
va pouvoir
saisir les
consomma
tions de
temps (MO,
déplaceme
nt).
Les pièces
et et les
fournitures
sont des
articles
directemen
t saisis
dans les
CRITs.
Le rattachement des services à la règle de
facturation UT est impératif.
C'est l'article et sa
catégorie dans la
classification qui
permettent à ARTIS.net
de savoir ce qu'il faut
appliquer comme
traitement, lors de la
saisie du CRIT.
(2) Il faut donc avoir
une classification
suffisamment précise
et déterminante afin
qu'ARTIS.net trouve la
bonne couverture
(1) Depuis la ligne de prestation, ARTIS.net va remonter à l'article, puis à la
catégorie de la classification "couverture contractuelle des articles", puis à la
couverture, puis à la règle de facturation. Il mettra alors à jour le nombre d'UT
consommées après avoir transformé le temps saisi en nombre d'UT, selon la
définition de la couverture.
Suivant la règle définie au point (1) ci-dessus, ARTIS.net ne doit détecter qu'une seule couverture
(2), sans quoi, le décompte ne s'effectuera pas correctement.
(A) - Exemple de prestations liées à des articles (B) :
Code Libellé prestation Code article Libellé article
PDUT Déplacement (Aller) PITDUT Déplacement UT
P2UT Couponning 2 UT par 1/4 heure PIT2UT Couponning 2 UT par 1/4 heure (CRIT)
P3UT Couponning 3 UT par 1/4 heure PIT3UT Couponning 3 UT par 1/4 heure (CRIT)
P4UT Couponning 4 UT par 1/4 heure PIT4UT Couponning 4 UT par 1/4 heure (CRIT)
P5UT Couponning 5 UT par 1/4 heure PIT5UT Couponning 5 UT par 1/4 heure (CRIT)
P1UT Couponning 1 UT par 1/4 heure PIT1UT Couponning 1 UT par 1/4 heure (CRIT)
PDUT Déplacement (Retour) PITDUT Déplacement UT
(C) - Classification "couverture contractuelle des articles" se rapportant à l'exemple ci-dessus :
Code2 Nom2 Code3 Nom3
MO Main d'oeuvre MOIMHR Main d'oeuvre Impres s ion (Heure)
MO Main d'oeuvre MOCXHR Main d'oeuvre Connexion (Heure)
MO Main d'oeuvre MO1UT Main d'oeuvre 1 UT par 1/4 heure
MO Main d'oeuvre MOCXUT Main d'oeuvre Connexion (UT)
MO Main d'oeuvre MO2UT Main d'oeuvre 2 UT par 1/4 heure
MO Main d'oeuvre MO3UT Main d'oeuvre 3 UT par 1/4 heure
MO Main d'oeuvre MO4UT Main d'oeuvre 4 UT par 1/4 heure
MO Main d'oeuvre MO5UT Main d'oeuvre 5 UT par 1/4 heure
(D) - Liste des couvertures pour l'exemple :
Code Libellé Type de couverture (Niveau 1) Type de couverture (Niveau 2)
SMOIMUT Main d'oeuvre Impres s ion (UT) Main d'oeuvre 1 UT par 1/4 heure Main d'oeuvre
SDPH Déplacement Déplacement (Heure) Déplacements
SDPUT Déplacement (UT) Déplacement (UT) Déplacements
SMO1UTQ Couponning 1 UT par 1/4 h Main d'oeuvre 1 UT par 1/4 heure Main d'oeuvre
SMO2UTQ Couponning 2 UT par 1/4 h Main d'oeuvre 2 UT par 1/4 heure Main d'oeuvre
SMO3UTQ Couponning 3 UT par 1/4 h Main d'oeuvre 3 UT par 1/4 heure Main d'oeuvre
SMO4UTQ Couponning 4 UT par 1/4 h Main d'oeuvre 4 UT par 1/4 heure Main d'oeuvre
SMO5UTQ Couponning 5 UT par 1/4 h Main d'oeuvre 5 UT par 1/4 heure Main d'oeuvre
(E) - Règle de facturation portant sur les UT
Règle de Facturation Prédéfinie
§ Code : RFCUT
§ Libellé : Couponing
§ Règle choisie : Tranche de grandeurs à l'unité
§ Services facturés :
Code Libellé
SMO3UTQ Couponning 3 UT par 1/4 h
SMO4UTQ Couponning 4 UT par 1/4 h
SMO5UTQ Couponning 5 UT par 1/4 h
SDPUT Déplacement (UT)
SMO1UTQ Couponning 1 UT par 1/4 h
SMO2UTQ Couponning 2 UT par 1/4 h
Sur les PDA, les prestations s'affichent ainsi :
Précautions
Si une prestation dans un CRIT est couvert à la fois par :
o un service (heure)
o un service (UT)
o quelque soit la portée des modules (sur un bien ou sur raison sociale)
Alors c'est le service (Heure) qui pris en compte ; il est prioritaire.
Donc il faut n'avoir qu'un seul service en place dans la SSC : le service (UT)
Historique des livraisons
HISTORIQUE DES LIVRAISONS
Consulter Historique des livraisons
Imprimer la SSC, Editer le contrat
IMPRIMER LA SSC, EDITER LE CONTRAT
Solutions de services / Solutions de services client / Gérer une solution de services client
La solution de service client est imprimable au format pdf, sous une forme compréhensible par le
client final.
1. Rechercher la SSC,
2. <Mosaïque>,
3. Sélectionner "Edition contrat".
Paramétrage
Libellés des Modules, des RFC, des SC
Les libellés des modules de service client, des règles de facturation client, des services client
(couvertures) sont issus des modules de service prédéfinis, des règles de facturation prédéfinis, et
des services prédéfinis.
Mais en générale, le contenu de ces libellés est en général un libellé concis, court et suffisamment
significatif pour les gestionnaires. Ils ne le sont pas forcément pour un client final.
Aussi, l'édition du contrat reprend en priorité le contenu des commentaires/descriptions des
prédéfinis. Si ceux-ci sont non complétés, l'édition prend en compte les libellés des prédéfinis.
Remarque
Si une règle de facturation ne doit pas imprimer lors de l'édition du contrat, il convient de l'indiquer
en mentionnant "[MASQUE]" dans le commentaire/description de la prédéfinie en question.
L'imprimé doit tenir compte alors de cette mention, consulter ARTIS pour plus d'informations.
Conditions générales de maintenance
Les conditions générales de maintenance (CGM) peuvent être insérées de deux façons différentes
dans le document :
§ Insertion d'une image, issue de la transformation des CGM mises en forme sous un
traitement de texte (Word par exemple),
§ Gestion des CGM directement dans les prédéfinis :
§ Les articles sont insérés manuellement :
· Dans les SSP,
· Et/ou dans les MSP,
· Et/ou dans les SP.
Imprimer le commentaire de la RFC sur la facture
IMPRIMER LE COMMENTAIRE DE LA RFC SUR LA FACTURE
Il est possible d'imprimer le commentaire de la règle de facturation sur la facture de SSC.
Le paramétrage s'effectue en deux temps :
§ La génération du commentaire comme ligne de commentaire dans la facture,
§ L'impression de la ligne de commentaire sur la facture.
Génération du commentaire dans la facture
Générer le commentaire
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre permet d'afficher les commentaires de la FRC dans la facture. Lorsque le
paramétrage est en place, la ligne de commentaire est générée pour toutes les règles de
facturation, sans exception.
Paramètre "FACTURE_AFFICHER_COMMENTAIRE_RFC "
Valeur :
§ Oui : Afficher les commentaires de la FRC dans la facture,
§ Non : Le commentaire n'est pas généré.
Impression de la ligne de commentaire
Paramètres application / Impression / Gérer les formats d'impression
Dans le format d'impression qui concerne les factures impactées, il convient de rendre "Imprimable"
la ligne de type dont le nom est "LGN_COMMENTAIRE_ENTETE_FACTURE".
Imprimer le libellé SSC sur la facture
IMPRIMER LE LIBELLÉ SSC SUR LA FACTURE
Il est possible d'imprimer le libellé de la SSC sur la facture de SSC.
Le paramétrage s'effectue en deux temps :
§ La génération du libellé comme ligne de commentaire dans la facture,
§ L'impression de la ligne de libellé de la SSC sur la facture.
Génération du libellé de la SSC dans la facture
Générer le libellé de la SSC
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "FACTURE_AFFICHER_LIBELLE_SSC"
Valeur :
§ Coché : Génère le libellé de la SSC sur la facture,
§ Non coché : Pas de génération.
Impression de la ligne du libellé de la SSC
Paramètres application / Impression / Gérer les formats d'impression
Dans le format d'impression qui concerne les factures impactées, il convient de rendre "Imprimable"
la ligne de type dont le nom est "LGN_LIBELLE_SSC".
Paramétrer les Garantie constructeur / Garantie fournisseur
PARAMÉTRER UNE GARANTIE CONSTRUCTEUR OU UNE
GARANTIE FOURNISSEUR
Sur un article
1. Appeler l'article,
2. Cliquer sur « Réf. fournisseur et/ou fabricant »,
3. Sélectionner et modifier une des références fournisseur,
4. Descendre sur le tableau « Informations de garantie de base / garantie constructeur »,
5. Rechercher la SSC de type garantie fournisseur,
6. Compléter la durée et cocher « J'ai vérifié ces informations de garantie et je les valide. »,
7. <Disquette>.
Dans ce cas, la SSC est générée automatiquement par ARTIS.net et n'a pas besoin de RFC.
Ceci est à faire sur les articles pour lesquels on est sûr à 80% de ne pas vendre de contrat
prestataire.
Créer une SSC de type garantie après livraison
Il n'est pas possible de faire une SSC sans RFC.
Il faut ajouter une RFC dans le module lors de la création de la SSC (montant à 0). Il faut ensuite
valider la SSC.
Paramètres
Les SSP "Garantie constructeur" et "Garantie fournisseur" doivent être créées et classifiées.
La RFP doit être créée sans être insérée dans un MSP.
Pré-créer une SSC depuis la commande
PRÉ-CRÉER UNE SSC DEPUIS LA COMMANDE
Depuis la commande
1. Cliquer sur "Pré-créer SSC",
2. Cliquer sur "Nouveau contrat",
3. Sélectionner la SSP,
4. Compléter l'entête de la SSC,
5. Conserver les modules utiles,
6. <Suivant>,
7. Associer les compteurs et les matricules génériques aux RFC,
8. Compléter les informations des RFC,
9. <Précédent>,
10. Contrôler les couvertures,
11. <F2> ou <Disquette>,
12. Confirmer le message d'avertissement,
13. <X >.
Une fois la livraison effectuée
1. Depuis la livraison,
2. Cliquer sur "Actualisation SSC",
3. Compléter le tableau "Remplacer les biens et grandeurs modèle à facturer" en utilisant les
listes déroulantes,
4. Modèle, Bien, Grandeur : il s'agit du bien livré,
5. Bien modèle, Grandeur modèle : il s'agit du modèle utilisé lors de la création de la SSC dans la
commande,
6. Cocher la case "Activer la SSC" (le statut passera donc à "Validée", sinon il reste en "Pré-
créé),
7. <F2> ou <Disquette>,
8. <X >.
Simuler la facturation des solutions
SIMULER LA FACTURATION DES SOLUTIONS
La préfacturation des SSC donne lieu à :
o Soit une édition papier comme précédemment
o Soit à la création d'un fichier Excel
Les règles de travail consiste à exploiter le résultat de la simulation. Se présente à la simulation
toute SSC :
o Non suspendue
o Pour laquelle le code client ne fait pas parti des codes exclus
o Faisant partie des agences sélectionnées
o Faisant partie des types de solutions de services sélectionnées
o Pour laquelle au moins une règle de facturation, à une date de prochaine facture théorique
antérieure ou égale à la date de travail, est saisie.
Critères de sélection
Sélection par agence
Il propose sur le listing de pré-facturation :
o Toutes les SSC qui ont le client facturé du module service client classifié dans l'agence
sélectionnée,
o Et toutes les SSC qui ont une règle de facturation client avec un client facturé différent du client
utilisateur même si ce client facturé est classifié dans une autre agence.
Clients exclus
Ce critère peut être compléter automatiquement, Consulter le chapitre ci-dessous pour le
paramétrage. Dans ce cas, manuellement l'utilisateur peut vider le critère pour travailler sur les
clients en question.
Il est possible de renseigner manuellement des clients à exclure.
Sélection par listes paramétrables
Il est possible de paramétrer des listes pour retenir ou exclure des :
o Solutions de services clients
o Solutions de services prédéfinies
o Modules de services prédéfinis
o Règles de facturation prédéfinies
Rappel
Les listes sont des paramétrages de données à retenir. Elles évitent d'avoir à faire les mêmes
sélections dans des requêtes lancées régulièrement.
Il est possible soit rappeler une liste prédéfinie existante et au besoin la modifier, soit en créer une
nouvelle dans cet écran.
Par exemple, l'utilisateur souhaite lancer la simulation de facturation des contrats de forfaits copies
uniquement.
1. Cliquer sur l'onglet "SSP",
2. Cocher les Solutions de services prédéfinis à retenir,
3. Cliquer sur le bouton "Rafraichir",
4. Pour une réutilisation future, donner un nom à la liste,
5. Cliquez sur "Créer une liste".
Attention
Par défaut, en entrant dans l'écran, toutes les solutions de services clients sont sélectionnées. Si
l'utilisateur opte pour des listes paramétrables, il doit cliquer sur "Rafraîchir".
Paramètres
Seuil de facturation
Consulter Modifier le montant du seuil de facturation.
Nombre de jours / Estimation forcée
Consulter Gérer les types de relevés dans la facturation des RFC.
Clients à exclure de la simulation et de la facturation
Ce paramètre permet d'indiquer quels clients l'utilisateur souhaite exclure de la facturation. Les
codes des clients exclus doivent être séparés par un point virgule.
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CLIENTS_EX CLUS_FACTURATION"
Valeur :
§ exemple 02300767;02402517 : ces 2 clients s'afficheront dans "Clients exclus"
Détail du fichier de préfacturation
DÉTAIL DU FICHIER DE PRÉFACTURATION
Position Position
lettrée Label de la colonne Format Commentaire
1 A Code client Code du client contractant
2 B Ancien code client Code du client avant migration
3 C Code SSC N° chronologique de la SSC
4 D Ancien code SSC Code du contrat avant migration
5 E Client Nom du client contractant
6 F Adresse1 Adresse 1 du client contractant
7 G Adresse2 Adresse 2 du client contractant
8 H Adresse3 Adresse 3 du client contractant
9 I Code postal Code postal du client contractant
10 J Ville Ville du client contractant
11 K Téléphone N° Téléphone du client contractant
12 L Fax N° Fax du client contractant
13 M Agence Agence du client contractant
14 N Chargé d'affaires Nom du chargé d'affaire saisi à la création de la SSC
15 O Date début SSC Date saisie à la création de la SSC
16 P Date création SSC Date saisie à la création de la SSC
17 Q Libellé SSC Libellé issu du choix des modes de facturation prédéfinis
18 R Libellé MSC Libellé issu du choix des modes de facturation prédéfinis
19 S Libellé RFC Libellé issu du choix des modes de facturation prédéfinis
20 T Commentaires RFC Commentaire (selon un paramétrage, apparaît dans la facture)
21 U Terme Echu / A échoir
22 V Régime de facturation Estimation autorisée / Réel / Particulier
23 W Date installation Date installation du bien attaché à la RFC * pour les flottes, on a une ligne par Bien
24 X Valeur compteur installation Valeur du compteur d'installation du bien attaché à la RFC * pour les flottes, on a une
ligne par Bien
25 Y Matricule Matricule du bien attaché à la RFC * pour les flottes, on a une ligne par Bien
26 Z Libellé Bien Libellé du bien attaché à la RFC * pour les flottes, on a une ligne par Bien
27 AA Grandeur Intitulé du compteur du bien attaché à la RFC * pour les flottes, on a une ligne par Bien
28 AB Code Article Code de l'article facturé par le biais de la RFC
29 AC Libellé Article Libellé de l'article facturé par le biais de la RFC
30 AD Début période facturation En fonction du type de RFC
31 AE Fin période facturation En fonction de la périodicité de facturation de la RFC
32 AF Quantite Quantité à factuer
33 AG Prix Unitaire De la copie ou de l'UT ou du montant forfaitaire
34 AH Montant HT Résultat : Quantité x Prix Unitaire
35 AI Origine vol. moy. VMM / VMC / VMT / VMS
36 AJ VMM Volume Moyen Mensuel de grandeur au moment de la préparation
37 AK Date compteur servant à facturer Soit estimation à date de travail, soit un compteur réel de moins de 20 Jours
38 AL Type de grandeur servant à facturer Libellé : « estimation » ou « Relevé Client » ou « Relevé prestataire »
39 AM Valeur du compteur servant à facturer Nombre de copies
40 AN Date du dernier compteur réel
41 AO Source du dernier compteur réel
42 AP Valeur du dernier compteur réel
43 AQ Date dernier compteur facturé Date du dernier compteur utilisé lors de la précédente période de facturation
44 AR Type de grandeur dernier facturé Libellé : « estimation » ou « Relevé Client » ou « Relevé prestataire »
45 AS Valeur du compteur dernier facturé Nombre de copies lors de la précédente facturation
46 AT Date prochaine facture théorique Date calculée lors de la dernière facturation
47 AU Date dernière facture rélle
48 AV N° Facture Numéro de la facture lors de la précédente séquence de facturation
49 AW Tranche à atteindre Cas des SSC de type Tranche : Valeur de la tranche au jour de préparation sinon vide
50 AX Nouvelle Tranche Cas des SSC de type Tranche : Valeur de la tranche dés que la facturation sera
générée sinon vide
51 AY Renouvellement tranche Cas des SSC de type Tranche :
52 AZ Ligne de régularisation Cas des SSC Forfait plus régularisation des copies supplémentaires :
53 BA Compteur de dernière régularisation Cas des SSC Forfait plus régularisation des copies supplémentaires : Valeur du dernier
compteur de régularisation
54 BB Cumul des forfaits depuis la dernière régularisation Cas des SSC Forfait plus régularisation des copies supplémentaires : Cumul des
forfaits facturés depuis la précédente régularisation
55 BC Date dernière régularisation
56 BD Date prochaine régularisation
Cas des SSC Forfait plus régularisation des copies supplémentaires : Date de
prochaine régularisation qui correspond à date de précédente régularisation plus
périodicité de régularisation
57 BE Date prochaine Augmentation Date de prochaine augmentation de la RFC
58 BF Type Augmentation Libellé « Non Révisable » ou « Majoration Société » ou « Majoration personnalisée »
59 BG Taux Augmentation Unitaire Si « Non Révisable » : Vide
60 BH Taux Augmentation Forfaitaire Idem
61 BI Coeff Ou Pourcentage
62 BJ Seuil de facturation Cas des SSC GTB : Nombre de copies vendues pour un an
63 BK Seuil à atteindre Cas des SSC GTB : Nombre de seuils facturés depuis la mise en place de la SSC
64 BL Cadence Facturation Cas des SSC GTB : Nombre de copies facturées par cadence pour un seuil annuel
65 BM Cadence à atteindre Cas des SSC GTB : Nombre de cadences facturées depuis la mise en place de la
SSC
66 BN Nbre de copie de l'acompte Cas des SSC SF1 : Nombre de copies de l'acompte facturé à la mise en place de la
SSC
67 BO Date de facturation de l'acompte Cas des SSC SF1 : date de facturation de l'acompte facturé à la mise en place de la
SSC
68 BP Anomalie Contient les commentaires explicatifs des SSC qui ne peuvent être traitées sur ce
fichier. Les colonnes de S à AK sont dans ce cas vides.
69 BQ Commentaires SSC
70 BR Site du bien
71 BS Tél site du bien
72 BT Localisation du bien
73 BU Type demande de relevé
74 BV Marché
75 BW Date début marché
76 BX Date fin marché
Corriger les anomalies de facturation
CORRIGER LES ANOMALIES DE FACTURATION
Aucune Adresse de Facturation Privilégiée Indiquée Pour Ce Client
Il faut aller modifier puis enregistrer la fiche client (problème qui peut est lié à la migration).
Date de Début de Périodicité Supérieure à Date de Dernière Régularisation
En création, la date de début de périodicité de facturation  est par défaut la date de début de
Solution de Service Client.
Cette anomalie doit être réglée cas par cas car elle découle d'une correction manuelle
Date de Travail hors Période de Validité du Module Service Client
La date de contrôle du listing de pré-facturation est en dehors des dates de début et de fin de
validité du module attaché à la règle de facturation à facturer.
Vérifier s'il s'agit d'une erreur de saisie ou d'une reconduction non faite.
Rappel
Si on souhaite offrir une année de contrat connexion à un client, la saisie doit être la suivante :
o Date de début et de fin de module sont identiques à la périodicité de la SSC
o A la création de la RFC, il faut juste indiquer en date de prochaine facture théorique une année
de plus.
Erreur lors de L'estimation d'une Valorisation Pour la Grandeur « … » Du Bien « … »
o Grandeur calculée
Si la grandeur est de type calculée, il est nécessaire de mettre à jour la formule sur la
grandeur. Pour cela, par l'option «Gérer les biens / Grandeur / Configuration prédéfinie de
grandeur / Mise à jour sur la configuration»
Au besoin, reportez vous à la documentation « 3.d Grandeurs Prédéfinies »
o Grandeur technique
Si la grandeur est de type technique, il faut aller consulter la grandeur du bien et :
§ Vérifier si la position compteur d'installation est bien présente.
§ Vérifier la cohérence de l'historique.
La date de début de la périodicité de facturation (../../....) doit être <= à la date de dernière
régularisation (../../....), Facturation impossible
Corriger la RFC afin de mettre en date de début de périodicité la date de dernière régularisation :
1. <Modifier> l'écran 1 de la RFC,
2. Dans la section "Périodicité", cliquer sur "Périodicité",
3. Dans la section "Plage de périodicité", saisir la date de dernière régularisation dans "Début",
4. <F2> ou <Disquette>,
5. <F2> ou <Disquette>.
La Règle de Facturation « … . » N'est Pas Valide : MONTANT Forfaitaire Incorrect (coût<=0)
Vérifier le montant à facturer. La valeur doit être 0 ou autre.
La Règle de Facturation « … . » N'est Pas Valide : Aucune Grandeur Associée
Visualiser la SSC. Si aucune grandeur n'est associée aux règles de facturation. Il est plus rapide
de supprimer la SSC et de la re-créer, en tenant compte de l'historique du contrat.
La Règle de Facturation « xxx » n'est Pas Valide : Montant Forfaitaire Incorrect (Article Non
Renseigné)
Règle de facturation prédéfinie
Vérifier le paramétrage de la règle de facturation prédéfinie.
o Cas A
Si l'article n'existe pas dans celle-ci, voir avec votre responsable d'exploitation pour rectifier la
règle prédéfinie. Il faudra ensuite voir avec votre responsable si il faut actualiser les SSC déjà
existantes.
o Cas B
Si l'article existe dans celle-ci, rectifier la règle de facturation en saisissant l'article concerné
Autre possibilité
Sous BBX , le contrat était de type "Non Facturable" avec un montant forfaitaire de
renouvellement : Le contrat a été repris mais sans article puisqu'il n'en existait pas sous BBX  :
§ Soit ce contrat est à fermer
§ Soit ce contrat est à facturer et il est à rectifier comme indiqué au point B
Le Nombre de Forfaits Facturés Depuis la Dernière Régularisation est Incorrect
Le jour de régularisation est postérieur au jour de facturation du forfait
Exemple :
o Jour de facturation le 01 date prochaine facture théorique le 01/11/2006(Trim)
o Jour de régularisation le 02date prochaine régularisation le 02/11/2006 (Annuelle)
Le 01/11/2006, on facture le forfait du 01/11/2006 au 31/01/2007 mais on ne fait pas de
régularisation car le 02/11/2006 est non atteint
Le 01/02/2007, la régularisation se déclenche donc avec 5 forfaits au lieu de 4.
Il faut donc facturer le contrat sans cumul des forfaits puis aller rectifier le jour de facturation de la
régularisation dans le pavé régularisation et zone « Périodicité ».
Attention
Le 01/11/2007 le contrat aura comme anomalie de facturation « Nombre de forfaits Théoriques 4 –
Nombre de forfaits réels 3 » puisque la précédente régularisation s'est faite avec un trimestre de
retard.
Il suffit de facturer le contrat seul avec l'option «Pas de contrôle des cumuls des forfaits» pour que
le contrat soit définitivement recalé.
Cumul des forfaits
o Valeur du cumul
Le cumul doit être = compteur de dernière régularisation + x fois le forfait
Le nombre x est déterminé en fonction de la dernière régularisation et la date de dernière
facture. Attention, il faut tenir compte de la notion du terme échu ou à échoir.
o Historique des forfaits
Vérifier s'il y a bien une ligne dans l'historique des forfaits pour chaque date de facturation.
Si nécessaire, il faudra :
§ Soit ajouter une ligne s'il manque un mois de facturation
§ Soit supprimer une ligne inscrite à tort (Attention, cas des contrats en dessous du
seuil de facturation)
§ Soit modifier un cumul
Nombre de copies du forfait
S'il y a eu changement du nombre de copies vendues pour le forfait entre deux régularisations, il
faudra facturer le contrat seul avec l'option «Pas de contrôle des cumuls des forfaits» pour que le
contrat se recale avec le nouveau forfait copies.
Changement de périodicité de facturation du forfait entre deux régularisations
S'il y a eu changement de la périodicité de facturation entre deux régularisations, il faudra facturer
le contrat seul avec l'option «Pas de contrôle des cumuls des forfaits » pour que le contrat se
recale avec la nouvelle périodicité.
Le jour de régularisation indiqué en périodicité de régularisation est différent du jour
de dernière régularisation
Rectifier les jours et vérifier facturation contrat.
Le ou Les Bien(s) ZZZZZZZZ Possèdent Des Grandeurs Sans Nom
On a crée une grandeur au lieu de créer un relevé compteur pour une grandeur. Pour rectifier,
reportez-vous à la documentation « Gestion des grandeurs prédéfinies »
Pas de Relevé Particulier ou Réel à Facturer Pour la Grandeur « … »
Le client ne doit pas être facturé sur estimation. On ne le facture que sur les relevés compteurs qu'il
fournit
Remarque
En attendant la modification pour la gestion des copies « offertes  pour les forfaits », on utilise ce
mode de fonctionnement pour ne pas déclencher de copies à tort.
Pas de Relevé Réel à Facturer Pour la Grandeur « … » du Bien « … »
Il ne s'agit pas là d'une anomalie, mais d'un choix de facturation des grandeurs. Si ce choix ne
convient pas, il est nécessaire de modifier la règle de facturation portant sur cette grandeur. L'option
« facturation sur estimation » doit être cochée.
Il peut s'agir aussi d'une incohérence au niveau de la SSC. Si la SSC comporte par exemple
plusieurs règles de facturation, portant sur des grandeurs différentes d'un même bien, et une seule
règle est en facturation réelle, il est souhaitable de vérifier ce choix.
Particularités
Modifier le montant du seuil de facturation
MODIFIER LE MONTANT DU SEUIL DE FACTURATION
Ce montant peut être modifier ponctuellement lors de la simulation SSC ou en génération de facture
SSC.
Pour la valeur pré-paramétrée :
Paramètres application / Paramètres application / Gérer les paramètres
1. Gérer les paramètres
2. Dans "Paramètre", saisir "SEUIL_FACTURATION" puis <Entrée>
3. Passer en modification avec <Crayon>
4. Modifier la valeur,
5. <Disquette> pour enregistrer.
Remarque
Si plusieurs organisations internes sont gérées avec des seuils de facturation différents et que
l'utilisateur est multi-organisations internes, ARTIS ne peut l'afficher par défaut dans la simulation de
facturation des SSC. Un message d'alerte l'indique.
Pour récupérer le seuil paramétré d'une organisation interne, il suffit de la sélectionner dans les
critères.
Bloquer, débloquer la facturation SSC sur anomalie
BLOQUER, DÉBLOQUER LA FACTURATION SSC SUR
ANOMALIE
Facturation sur anomalie
Paramètres application / Paramètres application / Gérer les paramètres
Si votre client est en factures regroupées, et si une RFC est en anomalie en pré facturation globale,
alors toutes les SSC sont bloquées en facturation.
Paramètre "FACTURATION_SI_ANOMALIE"
Valeur :
§ Non coché : La facturation est bloquée,
§ Cochée : La facturation est possible même en présence de l'anomalie.
Générer la facturation des solutions
GÉNÉRER LA FACTURATION DES SOLUTIONS
En général, la facturation fait suite à la simulation de la facturation, dans ce cas, ARTIS.net reprend
les mêmes critères de sélection afin de facturer les mêmes SSC.
Si la facturation est lancée depuis le menu, l'utilisateur doit prendre des précautions sur ces
critères de sélection.
Deux confirmations sont demandées à l'utilisateur afin le traitement.
Critères de sélection
Consulter Simulation, critères de sélection.
Anomalie de facturation
Consulter Corriger les anomalies de facturation.
Traiter une solution de services client
TRAITER UNE SSC
Solution de service / solutions de service client / Traiter une solution de services
Il n'est pas possible de modifier les statuts d'une SSC directement dans la SSC, à partir de l'option
"Gérer une solution de services client". L'option "Traiter une SSC" permet de gérer toutes les
situations que les SSC peuvent subir. Les choix possibles sont :
o Valider une SSC
o Détacher des grandeurs
o Changer le statut d'une SSC
o Suspendre une SSC
o Dé-suspendre une SSC
o Arrêter une SSC
o Fermer une SSC
o Résilier une SSC
o Résilier une SSC dans les délais
o Ré-ouvrir une SSC
Il est possible d'accéder à cette option :
o Depuis le menu,
o Depuis l'écran de la SSC :
1. Solution de service / solutions de service client / Gérer une solution de service client
2. Recherche la SSC,
3. Cliquer sur le mot "Statut",
4. Artis.net chaîne autoamtiquement avec l'écran "Traiter une SSC",
5. Sélectionner le scénario à faire,
6. Artis.net affiche ensuite l'écran du scénario, avec toutes les informations de la SSC en
question,
7. Poursuivre ensuite le scénario choisi.
Le mode opératoire général
1. Sélectionner le traitement souhaité,
2. Saisir la date : il s'agit d'une date d'effet. Elle peut être utilisée de différentes façon selon le
traitement effectué,
3. <Triangle suivant>,
4. Rechercher la SSC (code SSC ou <F1>),
5. Selon le traitement sélectionné :
1. Sélectionner le statut final,
2. et/ou Saisir des positions compteurs,
3. et/ou Sélectionner avec ou sans calcul d'indemnité,
4. et/ou Sélectionner les options de facturation (pour pré-facturation puis facturation),
6. Saisir éventuellement un commentaire,
7. <Disquette>
Selon le traitement sélectionné, l'utilisateur aura des particularités à traiter : voir chacun des cas ci-
après.
Remarque
1. Commentaire de la SSC
Après traitement, un commentaire automatique est ajouté au début de celui qui existe. Les
informations reportées sont :
§ Traitement effectué
§ Date d'effet
§ Statut final
§ Date de réalisation
§ Login de l'utilisateur
§ Les informations sur les biens et les grandeurs (le traitement sélectionné)
§ Les options de facturation (le traitement sélectionné)
Exemple : "SSC résiliée sans indemnités le 15/08/2014 ("Résiliée.Soldée", effectué le
25/08/2014 par ACOLIN)"
2. Commentaire de la MSC
Après traitement, un commentaire automatique est ajouté au début de celui qui existe. Les
informations reportées sont les mêmes que celui de la SSC.
Impact sur l'historique des règles
Chaque traitement permet de mettre à jour l'historique des règles.
SOUS CHAPITRE
· Valider une SSC
· Détacher des grandeurs
· Changer le statut d'une SSC
· Suspendre une SSC
· Dé-suspendre une SSC
· Arrêter une SSC
· Fermer une SSC
· Résilier une SSC
· Résilier une SSC dans les délais
· Ré-ouvrir une SSC
Valider une SSC
VALIDER UNE SSC
Objectif
L'objectif de ce traitement est de rendre active une SSC, afin que tous ses composants impactent
les saisies (DIT, CRIT, Commande de consommable) et qu'elle soit facturable.
Statuts initiaux possibles
Pré-créée,
En devis (statut non utilisé à ce jour).
Statut final
Validée
Impact des statuts finaux
Validée
Avec une tacite reconduction
Sans tacite reconduction
Détacher des grandeurs
DÉTACHER DES GRANDEURS
Objectif
Cette option permet de retirer une grandeur d'une règle de facturation. Deux cas sont se présentent
:
1. Une grandeur a été rattachée par erreur à une règle de facturation (erreur de saisie).
2. Un bien doit être retiré de la SSC : Étant donné une SSC ayant une règle de facturation portant
sur une grandeur de plusieurs biens, il faut retirer la grandeur du bien qui n'en fait plus partie.
Si la grandeur détachée n'a jamais été facturée, ARTIS.net considère qu'il s'agit d'une erreur de
saisie et en conséquence cette grandeur ne figure plus dans l'historique.
ARTIS.net met à jour l'historique des règles, avec une position compteur. Lors de la prochaine
facturation, ARTIS prendra en compte la position des compteurs de ce bien, alors que ce dernier ne
fait plus partie de la RFC.
Aucun ajustement manuel n'est nécessaire, car ARTIS.net dispose de toutes les informations pour
facturer correctement.
Sur la facture, si la grandeur du bien n'a pas été facturée, ce bien est affiché en détail, à l'identique
des autres biens.
Si la grandeur du bien a été facturée, la valeur du compteur est comprise dans un cumul. Le libellé
spécifique est "Cumul compteur de reprise". Ce cumul est la somme des valeurs de reprises de
toutes les grandeurs qui ont été détachées de la règle de facturation.
Si toutes les grandeurs sont détachées de toutes les règles de facturation, le statut de la SSC sera
automatiquement mis à "Fermée".
Pour attacher une nouvelle grandeur à une règle de facturation, utiliser la méthode habituelle.
La SSC peut être ré-ouverte en utilisant le traitement Ré-ouvrir une SSC.
Un module fermé peut être de nouveau actif en ré-attachant une grandeur ou un bien à la règle de
facturation.
Méthode
Directement dans la SSC, depuis l'écran "Gérer une solution de service client" :
o Si la grandeur ou le bien est facturé : il y a un blocage avec un message invitant l'utilisateur à
utiliser "Traiter une SSC",
o Si non facturé : le détachement est possible.
Dans le scénario de "Traiter une SSC / Détacher une grandeur" :
o Si non facturé, possible
o Si la grandeur ou le bien est facturé  :
§ Si fermeture du contrat suite à la sélection de toutes les grandeurs à détacher, il y a un
blocage avec un message invitant l'utilisateur à utiliser le scénario "Fermer une SSC",
§ Si fermeture d'une règle (mais pas du contrat)  : il y a possibilité de facturer ou pas
cette règle (suivant les options de facturation cochées à l'écran),
§ Si le détachement ne provoque pas de fermeture (règle ou contrat, dans le cas d'une
flotte par exemple) : pas de facturation, la facturation sera effective lors de la facturation
normale du contrat.
Statuts initiaux possibles
En devis (statut non utilisé à ce jour),
Suspendue.partiellement,
Suspendue.autre,
Suspendue.contentieux,
Suspendue.négociation commerciale,
Suspendue.résiliation dans les délais,
Validée,
Validée.prolongée.
Statut final
Statut initial Statut final
Toutes les grandeurs et tous les
biens sont sélectionnés Tous les statuts Fermée
Une partie des grandeurs et/ou des Tous les statuts
biens sont sélectionnées
La SSC conserve son état initial
Les modules pour lesquels toutes les grandeurs ou tous
les biens sont détachés :
o Fermé
Les autres modules conservent leur état initial.
Changer le statut d'une SSC
CHANGER LE STATUT D'UNE SSC
Objectif
Cette option permet de changer des statuts pour des cas qui ne peuvent pas être fait par les autres
options.
Le statut "En-devis" n'a pas de réelle utilité dans Artis.net. Il peut être considéré comme "Pré-
créée", c'est à dire un état brouillon.
Statuts initiaux possibles
Pré-créée,
En devis (statut non utilisé à ce jour),
Validée,
Validée.prolongée.
Statut final
En devis (statut non utilisé à ce jour),
Validée.prolongée.
Impact des statuts finaux
En devis
SSC considérée comme non active.
Validée.prolongée
Avec une tacite reconduction

Sans tacite reconduction
Suspendre une SSC
SUSPENDRE UNE SSC
Objectif
L'utilisateur a la possibilité de sélectionner tous les modules (la SSC entière) ou une partie des
modules.
Les règles de facturation des modules sélectionnés et suspendus ne pourront plus être facturées.
Néanmoins, les biens sont couverts jusqu'à la date de fin des couvertures de ces mêmes modules.
Les modules suspendus sont exclus du batch de reconduction.
Les règles de facturation des modules sélectionnés continuent d'être prises en compte dans le
calcul du PCA-PAR (cut-off).
Les autres modules non impactés continuent d'avoir un comportement habituel.
Pour revalider une SSC ou un module, consulter Dé-suspendre une SSC.
Remarque
Avant d'effectuer la suspension, l'utilisateur a la possibilité (non obligatoire) de facturer ces règles
de facturation dans le cas où elles seraient facturables avant la date d'effet de la suspension.
Statuts initiaux possibles
Suspendue.partiellement,
Dans ce cas, les modules sont dans l'un des cas suivants :
§ Suspendue.autre,
§ Suspendue.contentieux,
§ Suspendue.négociation commerciale,
Validée,
Validée.prolongée.
Statut final
Statut initial Statut final
Tous les modules sont sélectionnés
et sont suspendus Tous les statuts o Suspendue,
o Suspendue.autre,
o Suspendue.contentieux,
o Suspendue.négociation commerciale.
Une partie des modules seulement
sont sélectionnés et sont suspendus Tous les statuts
Suspendue.partiellement,
Les modules sélectionnés sont :
o Suspendue,
o Suspendue.autre,
o Suspendue.contentieux,
o Suspendue.négociation commerciale.
Les autres modules conservent leur état initial.
Remarque
Si tous les modules sont suspendus, la SSC elle-même prend automatiquement le statut
sélectionné par l'utilisateur.
Si dans la SSC, certains modules ne sont pas suspendus, la SSC prend automatiquement le statut
"Suspendue.partiellement". Seuls les modules prennent le statut sélectionné par l'utilisateur.
Impact des statuts finaux
Tous les statuts "Suspendue..."
Dé-suspendre une SSC
DÉ-SUSPENDRE UNE SSC
Objectif
L'utilisateur a la possibilité de sélectionner tous les modules suspendus (la SSC entière) ou une
partie des modules suspendus.
La date de fin des modules sélectionnés est vérifiée, et la reconduction est effectuée si nécessaire.
Les règles de facturation des modules sélectionnés redeviennent facturables.
Les biens sont couverts jusqu'à la nouvelle date de fin des couvertures de ces mêmes modules.
Les autres modules non impactés continuent d'avoir un comportement habituel.
Les modules suspendus sont exclus du batch de reconduction. Les autres sont pris en compte.
Les règles de facturation des modules sélectionnés continuent d'être prises en compte dans le
calcul du PCA-PAR (cut-off).
Remarque
Avant d'effectuer la suspension, l'utilisateur a la possibilité (non obligatoire) de facturer ces règles
de facturation dans le cas où elles seraient facturables avant la date d'effet de la suspension.
Statuts initiaux possibles
Suspendue.partiellement,
Dans ce cas, les modules sont dans l'un des cas suivants :
§ Suspendue,
§ Suspendue.autre,
§ Suspendue.contentieux,
§ Suspendue.négociation commerciale,
§ Suspendue.résiliation dans les délais,
Suspendue,
Suspendue.autre,
Suspendue.contentieux,
Suspendue.négociation commerciale,
Suspendue.résiliation dans les délais.
Statut final
Statut initial Statut final
Tous les modules sont sélectionnés
et sont dé-suspendus Tous les statuts Validée
Une partie des modules seulement
sont sélectionnés et sont dé-
suspendus
Tous les statuts
Suspendue.partiellement,
Les modules sélectionnés sont :
o Validé
Les autres modules conservent leur état initial.
Remarque
Si tous les modules sont dé-suspendus, la SSC elle-même prend automatiquement le statut
"Validée".
Si dans la SSC, certains modules ne sont pas suspendus, la SSC prend automatiquement le statut
"Suspendue.partiellement".
Impact des statuts finaux
Validée
Avec une tacite reconduction
Sans tacite reconduction
Tous les statuts "Suspendue..."
Arrêter une SSC
ARRÊTER UNE SSC
Objectif
Mettre une SSC au statut "Arrêtée" permet de suspendre les couvertures et la facturation à la date
d'arrêt.
Concrètement, lors de l'arrêt, les dates de fin des couvertures qui sont supérieures à la date d'arrêt,
sont modifiées pour prendre la date d'arrêt (que ce soient des des couvertures en tacite
reconduction ou non).
Les couvertures dont les dates de fin sont inférieurs à la date d'arrêt restent inchangée.
Les dates de fin des modules sont inchangées (ces dates serviront à ré-activer correctement les
couvertures).
Une SSC au statut "Arrêtée" peut être ré-ouverte en utilisant le traitement Ré-ouvrir une SSC.
Complément d'information
Il y a une différence entre une SSC arrêtée et une SSC fermée, explication :
o Arrêter une SSC à une date d'arrêt (si on considère que cette date est différente de celle
d'aujourd'hui, exemple « Date du jour + 1 mois ») :
Le bien est couvert jusqu'à la date d'arrêt, c'est-à-dire qu'il est couvert entre la date du jour et la
date d'arrêt, c'est pourquoi, il n'est pas possible de détacher le bien dans la SSC.
Donc une intervention et/ou une commande de consommable entre la date du jour et la date
d'arrêt NE sont PAS FACTURABLES. Elles le sont après cette date.
Il n'existe pas de traitement automatique qui détache le bien, une fois la date d'arrêt dépassée,
éventuellement il faut procéder à la fermeture).
o Ferme une SSC à une date :
Quelle que soit la date de fermeture, le bien est obligatoirement et immédiatement détaché et
n'est plus couvert de ce fait.
Donc une intervention et/ou une commande de consommable entre la date du jour et la date de
fermeture sont FACTURABLES.
Alors que
o Suspendre une SSC à une date :
Le bien est couvert jusqu'à la date de fin de module (qui n'est pas la date saisie lors du
traitement « Suspendre ».
Donc une intervention et/ou une commande de consommable entre la date du jour et la date de
fin de module NE sont PAS FACTURABLES.
En fonction de l'objectif à atteindre, l'utilisateur doit choisir le bon traitement.
Statuts initiaux possibles
Suspendue.partiellement,
Suspendue,
Suspendue.autre,
Suspendue.contentieux,
Suspendue.négociation commerciale,
Suspendue.résiliation dans les délais,
Validée,
Validée.prolongée.
Statut final
Arrêtée.
Impact des statuts finaux
Arrêtée
Fermer une SSC
FERMER UNE SSC
Objectif
La SSC doit être fermée a une date.
Aucune couverture n'est active. Quel que soit la date de saisie, la DIT ou la commande de
consommable ne seront pas couvertes.
Après traitement, la SSC n'est pas facturable.
Si la SSC est au statut "Suspendu...", il faut procéder à la "Dé-suspension", voir Dé-suspendre une
SSC.
Lors de la fermeture, des options de facturation sont disponibles :
§ Ne rien facturer
L'utilisateur ne souhaite pas faire de facturation. Il s'agit simplement d'un changement
de statut.
§ Remboursement des unités facturées non consommées
Au vu de l'état de facturation de la règle de facturation, en prenant en compte les
compteurs saisis au moment de la fermeture, si trop de copies ont été facturés, un
avoir sera émis pour la règle de facturation.
Cette option n'empêche pas, si le cas se présente, de facturer les copies
complémentaires.
§ Avoir sur montant forfaitaire au prorata
Pour les règles de montant forfaitaire, la période entre la date de fermeture et la date de
fin de période facturée fera l'objet d'un avoir (calcul au prorata temporis).
Ces options de facturation peuvent être controlés par des paramètres, consulter Gérer la reprise
administrative, Paramètres.
Une SSC au statut "Fermée" peut être ré-ouverte en utilisant le traitement Ré-ouvrir une SSC.
Un module au statut "Fermé" dans une SSC au statut "Validée" peut être ré-ouvert en utilisant le
traitement Ré-ouvrir une SSC.
Statuts initiaux possibles
Arrêtée,
En devis (statut non utilisé à ce jour),
Suspendue.autre,
Suspendue.contentieux,
Suspendue.négociation commerciale,
Suspendue.résiliation dans les délais,
Validée,
Validée.prolongée.
Statut final
Statut initial Statut final
Tous les modules sont
sélectionnés Tous les statuts cités Fermée
Une partie des modules
seulement sont
sélectionnées
Tous les statuts cités
Validée ou Validée.prolongée
Les modules sélectionnés sont :
o Fermé
Impact des statuts finaux
Fermée
Résilier une SSC

RÉSILIER UNE SSC
Objectif
Les SSC au statut "Résilié..." sont exclues :
o Du calcul du PCA-PAR,
o De la facturation.
Il existe deux écoles :
Première école
1. La facture d'indemnités de résiliation est envoyée au client sans fermeture de la SSC.
Dans ce cas, lors de la résiliation, le statut final à choisir est "Résiliée.en attente".
Cette situation correspond un fonctionnement du statut "Suspendue" :
§ Les couvertures sont actives jusqu'à la date de fin de module,
§ La facturation est suspendue,
2. Le client accepte la facture d'indemnité et la règle,
§ L'utilisateur passe la SSC du statut "Résiliée.en attente" à "Résiliée.soldée", sans
calcul d'indemnité,
3. Le client la refuse,
§ L'utilisateur :
· Fait un avoir de la facture de résiliation
· L'utilisateur passe la SSC du statut "Résiliée.en attente" à "Validée",
§ La facturation récurrente de la SSC reprend.
§ Les couvertures continuent de s'appliquer.
§ La reconduction reprend.
Deuxième école
1. La facture d'indemnités de résiliation est envoyée au client et la SSC est immédiatement
fermée.
Dans ce cas, lors de la résiliation, le statut final à choisir est "Résiliée.soldée".
Cette situation correspond un fonctionnement du statut "Fermée" :
§ Les couvertures sont inactives,
§ La facturation s'arrête,
2. Le client accepte la facture d'indemnité et la règle,
§ Aucun traitement à faire
3. Le client la refuse,
§ L'utilisateur :
· Fait un avoir de la facture de résiliation
· L'utilisateur passe la SSC du statut "Résiliée.soldée" à "Validée",
§ La facturation récurrente de la SSC reprend.
§ Les couvertures continuent de s'appliquer.
§ La reconduction reprend.
Remarque
Pour les deux cas, soit le calcul des indemnités prévu par ARTIS.net convient, la facture est
générée en cochant "avec calcul d'indemnité",
Soit le calcul prévu par ARTIS.net ne convient pas, dans ce cas, l'utilisateur aura à faire une facture
directe.
Procédure
1. L'utilisateur recherche la SSC,
2. Saisit les relevés compteur dans le tableau des Biens/Grandeurs (identifiant fabricant +
Identifiant prestataire),
3. Choisit "Sans calcul d'indemnité" ou "Avec calcul d'indemnité",
§ Sans calcul d'indemnité,
· Choisit le statut final de la SSC,
· Saisit un commentaire,
· <Disquette>,
§ Avec calcul d'indemnité,
Dans le tableau "Calcul des indemnités de résiliation",
· Les règles de facturation sont affichées dans l'ordre de leur position dans la
SSC,
· L'utilisateur doit cliquer sur le bouton "Calculer" pour valoriser les lignes
d'indemnités,
· Un taux d'indemnité à 0 donne une valeur 0,
· Si la RFC ne possède qu'un seul calcul possible, la ligne est cochée par
défaut,
· Seules les lignes cochées figureront sur la facture (avec la valeur calculée : à 0
ou non),
· L'utilisateur choisit le statut final de la SSC,
· Saisit un commentaire,
· <Disquette>,
4. La pré-facturation à suivre est obligatoire,
5. Chaînage ensuite avec la facturation réelle.
Détail du calcul des indemnités
Cas sans calcul d'indemnité
Aucun calcul n'est effectué. La SSC est mise automatiquement dans le statut choisi par
l'utilisateur.
Cas des Montant forfaitaire (RFC MF) avec calcul d'indemnité
Dans le cas d'une règle de facturation "Montant forfaitaire", ARTIS chaîne avec l'écran de pré-
facturation à la date du traitement. L'utilisateur doit obligatoirement effectuer la pré-facturation
pour pouvoir facturer réellement les indemnités.
Si la SSC est en retard de facturation, ce retard est pris en compte dans le calcul de
l'indemnité, voir ci-dessous,
Le pourcentage d'indemnité est celui saisi dans la RFC de la SSC. L'utilisateur peut le modifier.
Indemnité MF, prorata temporis
L'indemnité est égale à :
En terme à échoir, Date de fin de la dernière période facturée = Date de prochaine
facture théorique
En terme échu, Date de fin de la dernière période facturée = Date de prochaine facture
théorique - Une période de renouvellement
La formule appliquée pour calculer le nombre de mois est :
nombre jours entre les 2 dates  x  12 / 365.25
Cas des Copies échues (RFC UC : Unités Consommées) avec calcul
d'indemnité
Dans le cas d'une règle de facturation "Copies faites", ARTIS chaîne avec l'écran de pré-
facturation à la date du traitement. L'utilisateur doit obligatoirement effectuer la pré-facturation
pour pouvoir facturer réellement les indemnités.
Si la SSC est en retard de facturation, ce retard est pris en compte dans le calcul de
l'indemnité, voir ci-dessous.
Le pourcentage d'indemnité est celui saisi dans la RFC de la SSC. L'utilisateur peut le modifier.
Sur la facture, sont reportés :
§ Le compteur à la date de fin de module,
§ Le dernier compteur facturé,
§ En quantité, se trouve la somme des volumes retenus x taux d'indemnités
Dans l'historique des relevés, sont reportés :
§ Sur la position compteur de résiliation, le commentaire « Résiliation de la SSC xxxxxx
»
§ Sur la position compteur de fin, le commentaire « Estimation à date de fin module pour
calcul indemnité »
Indemnité UC, delta copies
Pour chaque grandeur attachée à cette RFC, une position compteur est estimée à la date
de fin du module.
L'indemnité est égale à :
Indemnité UC, delta mois x VMM
Pour chaque grandeur attachée à cette RFC, le VMM de la grandeur est pris en compte.
Le nombre de mois pour chaque grandeur est calculé.
L'indemnité est égale à :

La formule appliquée pour calculer le nombre de mois est :
nombre jours entre les 2 dates  x  12 / 365.25
Cas des Tranches copies (RFC T) avec calcul d'indemnité
Dans le cas d'une règle de facturation "Tranche copies", ARTIS chaîne avec l'écran de pré-
facturation à la date du traitement. L'utilisateur doit obligatoirement effectuer la pré-facturation
pour pouvoir facturer réellement les indemnités.
Si la SSC est en retard de facturation, ce retard est pris en compte dans le calcul de
l'indemnité, voir ci-dessous.
Le pourcentage d'indemnité est celui saisi dans la RFC de la SSC. L'utilisateur peut le modifier.
Sur la facture, sont reportés :
§ Le compteur à la date de fin de module,
§ La position de la tranche à atteindre,
§ En quantité, se trouve la somme des volumes retenus x taux d'indemnités
Dans l'historique des relevés, sont reportés :
§ Sur la position compteur de résiliation, le commentaire « Résiliation de la SSC xxxxxx
»
§ Sur la position compteur de fin, le commentaire « Estimation à date de fin module pour
calcul indemnité »
Indemnité Tr, delta copies
Pour chaque grandeur attachée à cette RFC, une position compteur est estimée à la date
de fin du module.
L'indemnité est égale à :
Indemnité Tr, delta mois x VMM
Date de fin de la dernière période facturée = Date de dernière facture + Durée de
renouvellement de la tranche
La formule appliquée pour calculer le nombre de mois est :
nombre jours entre les 2 dates  x  12 / 365.25
Indemnité Tr, delta mois x prorata Tranche
Date de fin de la dernière période facturée = Date de dernière facture + Durée de
renouvellement de la tranche
La formule appliquée pour calculer le nombre de mois est :
nombre jours entre les 2 dates  x  12 / 365.25
Cas des Forfait copies avec Régularisation (RFC FR) avec calcul
d'indemnité
Dans le cas d'une règle de facturation "Forfait copies avec régularisation", ARTIS chaîne avec
l'écran de pré-facturation à la date du traitement. L'utilisateur doit obligatoirement effectuer la
pré-facturation pour pouvoir facturer réellement les indemnités.
Si la SSC est en retard de facturation, ce retard est pris en compte dans le calcul de
l'indemnité, voir ci-dessous.
Le pourcentage d'indemnité est celui saisi dans la RFC de la SSC. L'utilisateur peut le modifier.
Sur la facture, sont reportés :
§ Le compteur à la date de fin de module,
§ La position de la tranche à atteindre,
§ En quantité, se trouve la somme des volumes retenus x taux d'indemnités
Dans l'historique des relevés, sont reportés :
§ Sur la position compteur de résiliation, le commentaire « Résiliation de la SSC xxxxxx
»
§ Sur la position compteur de fin, le commentaire « Estimation à date de fin module pour
calcul indemnité »
Indemnité F+R, delta copies
Pour chaque grandeur attachée à cette RFC, une position compteur est estimée à la date
de fin du module.
L'indemnité est égale à :
Indemnité F+R, delta mois x VMM
En terme à échoir, Date de fin de la dernière période facturée = Date de prochaine
facture théorique
En terme échu, Date de fin de la dernière période facturée = Date de prochaine facture
théorique - Durée du forfait
La formule appliquée pour calculer le nombre de mois est :
nombre jours entre les 2 dates  x  12 / 365.25
Indemnité F+R, delta mois x prorata Forfait
En terme à échoir, Date de fin de la dernière période facturée = Date de prochaine
facture théorique
En terme échu, Date de fin de la dernière période facturée = Date de prochaine facture
théorique - Durée du forfait
La formule appliquée pour calculer le nombre de mois est :
nombre jours entre les 2 dates  x  12 / 365.25
La SSC résiliée.soldée peut être ré-ouverte en utilisant le traitement Ré-ouvrir une SSC.
Statuts initiaux possibles
Validée,
Validée.prolongée,
Résiliée en attente.
Statut final
Statut initial Statut final
Résiliée en attente Résiliée.soldée
Validée,
Validée.prolongée Résiliée.soldée ou Résiliée en attente
Impact des statuts finaux
Résiliée.en attente
Résiliée.soldée
Paramètres
Article d'indemnités de résiliation
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_ARTICLE_RESILIATION"
Valeur : Ce paramètre permet d'indiquer dans l'écran de résiliation des SSC, le code de l'article
résiliation qui sera affiché par défaut.
Résilier une SSC dans les délais
RÉSILIER UNE SSC DANS LES DÉLAIS
Objectif
Le client a envoyé sa lettre de résiliation en respectant les conditions de résiliation du contrat
(conditions générales de maintenance). Aucune indemnité n'est à facturer. Le contrat prendra fin à
la date de fin (soit la date de fin initiale ou la date de fin des modules suite à reconduction).
Il est aussi possible que ce soit le prestataire qui souhaite résilier le contrat, en respectant les
conditions de résiliation du contrat.
La SSC résiliée dans les délais reste dans le statut "validée". C'est le commentaire de la SSC qui
porte la mention "Résiliation dans les délais". La zone "Reconduction" dans les modules de la SSC
est mise à "Non" : arrêt de la reconduction.
La facturation et les couvertures courent jusqu'à la date de fin des modules.
De ce fait, les modules suspendus sont exclus du batch de reconduction. Les autres sont pris en
compte.
Annuellement, il est nécessaire de la liste des SSC au statut "Validée" dont les modules sont
échus et sans tacite reconduction. Il faudra alors les mettre au statut "Fermée", voir l'option
Consulter les SSC.
Statuts initiaux possibles
Validée,
Validée.prolongée.
Statut final
Validée,
Validée.prolongée.
Impact des statuts finaux
Validée
Sans tacite reconduction
Ré-ouvrir une SSC
RÉ-OUVRIR UNE SSC
Objectif
Pour chaque cas, l'utilisateur doit ensuite vérifier l'état de la SSC et la mettre en conformité.
Le traitement de réouverture ne gère pas la date de prochaine facture. Sa mise à jour reste à la
charge de l'utilisateur.
Cas d'une SSC à l'état "Fermée"
Tous les modules de la SSC sont remis à l'état "Actif".
Les grandeurs des biens sont re-attachés aux règles de facturation de type "avec consommation"
suivant l'historique des règles."
Les matricules des biens sont re-attachés aux règles de facturation de type "sans consommation"
suivant l'historique des règles.
Les matricules des biens sont re-attachés aux couvertures, rendues actives par les modules.
Cas d'un module "Fermé" dans une SSC au statut "Validée"
La loupe ne recherche que des SSC avec les états initiaux "Arrêtée", "Fermée" et
"Résiliée.soldée". L'utilisateur doit rechercher la SSC souhaitée en utilisant la recherche avancée :
1. Dans la zone "Code", faire <F1>,
2. Dans le critère "Code SSC (Recherche sur bien)", saisir le code de la SSC,
3. Décocher le critère "Etat solution de service",
4. Faire <F2>,
5. La SSC est alors affichée à l'écran,
6. Sélectionner le ou les modules au statut "Fermé".
Tous les modules sélectionnés sont remis à l'état "Actif".
Les grandeurs des biens sont re-attachés aux règles de facturation de type "avec consommation"
suivant l'historique des règles."
Les matricules des biens sont re-attachés aux règles de facturation de type "sans consommation"
suivant l'historique des règles.
Les matricules des biens sont re-attachés aux couvertures, rendues actives par les modules.
Cas d'une SSC à l'état "Arrêtée"
Dans ce cas, seules les couvertures en tacite reconduction, ayant la même date la plus récente
sont impactées : leur date de fin est modifiée pour être "calée" sur la date de fin de module.
Ainsi, la reconduction se fera normalement.
Il convient à l'utilisateur de vérifier les couvertures et de les modifier le cas échéant.
Cas d'une SSC à l'état "Résiliée.soldée"
Lors de la ré-ouverture, si le compteur de fermeture n'est pas marquée "Facturé", celui-ci est
supprimé. Dans le cas contraire, le traitement de la ré-ouverture n'impacte pas ce compteur (il reste
dans l'historique).
Pour supprimer ce compteur de fermeture, il faut procéder à un avoir de la facture. L'avoir va "libérer"
le compteur et l'utilisateur pourra alors le supprimer.
Habilitation
Tous les utilisateurs peuvent ré-ouvrir des modules au statut "Fermé". Un utilisateur ayant en plus
l'habilitation de ré-ouvrir une SSC peut effectuer le traitement sur les SSC au statut "Fermée" et
"Résiliée.soldée".
Méthode
Pour ré-ouvrir une RFC, ARTIS.net se base sur la présence d'une date de désactivation présente
sur la RFC (non visible à l'écran) et d'un historique de la règle. Il rattache automatiquement les
biens ou les grandeurs possédant la même date de fin d'historique. Il ne faut pas confondre la date
à laquelle les biens ont été détachés et la date de fermeture.
Certaines RFC liées à des SSC « fermée » ne possèdent pas d'historique des règles. Donc lors de
la réouverture, ARTIS.net n'est pas capable de retrouver les informations sur les grandeurs ou les
biens. Cela concerne les fermetures qui ont été faites antérieurement à la mise à jour qui gère
l'historique sur les RFC.
Dans ce cas, pour les RFC liées à des grandeurs, les compteurs ne pourront pas être ré-affactés.
Pour les RFC liées à des biens (de type montant forfaitaire), les biens ne pourront pas être ré-
affectés. Cependant, comme nattivement, les RFC de type montant forfaitaire n'ont pas
nécessairement besoin de matricule (de biens) pour être facturées, certaines seront ré-ouvertes.
Certaines RFC liées à des SSC « fermée » ne possèdent pas de date de désactivation. Donc lors
de la réouverture, ARTIS.net ne trouve rien à rattacher. La gestion de cette date est prise en compte
depuis la mise à jour qui gère l'historique sur les RFC.
La réouverture d'une SSC suit les règles suivantes :
ARTIS.net parcoure l'ensemble des RFC, de tous les modules, puis :
o Si au moins une RFC est correcte, la SSC est ré-ouverte sans affichage de message,
o Si toutes les RFC sont incorrectes, un message avertit l'utilisateur.
Une RFC est incorrecte dès que l'une des conditions suivantes est satisfaite. Dès qu'une condition
est vraie, ARTIS.net ne vérifie pas les suivantes :
1. Une grandeur du bien est liée à une RFC dans une autre SSC que celle en cours de ré-
ouverture,
2. Le bien n'est plus chez le client de la SSC en cours de ré-ouverture,
3. La RFC n'a pas de date de désactivation.
Alerte
Un message avertit l'utilisateur à la fin du traitement :
"Attention, lors d'une réouverture d'une SSC, la récupération des modules et des règles de
facturation initiaux n'est pas garantie (des données ont pu évoluer entre-temps telles que les biens,
les compteurs, etc). Vous devez vérifier la cohérence de la SSC et la mettre en conformité."
Statuts initiaux possibles
Arrêtée,
Fermée,
Résiliée.soldée,
Validée avec des modules au statut "Fermé".
Statut final
Validée.
Impact des statuts finaux
Validée
Avec une tacite reconduction
Sans tacite reconduction
Particularités
PARTICULARITÉS
· Avoir l'habilitation pour ré-ouvrir une SSC
· Lister les SSC suspendues
Avoir l'habilitation pour ré-ouvrir une SSC
AVOIR L'HABILITATION POUR RÉ-OUVRIR UNE SSC
Paramétrage
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
o Appeler la table de décision ‘TD_HABILITATIONS_SPECIALES
o Si la ligne dont le nom de l'habilitation "Modification statut SSC" est absente :
§ <+> du tableau pour créer une nouvelle règle et remplissez les critères :
§ Nom de l'écran : rien
§ Nom de l'habilitation : Modification statut SSC
§ Cocher ‘Modifier'
o Comptes d'accès : saisir les logins autorisés séparés par un point-virgule
Lister les SSC suspendues
LISTER LES SSC SUSPENDUES
Solution de service / solutions de service client / Gérer une solution de services
1. Faire <F1> dans la zone Numéro/Code SSC
2. Mettre "suspendue" dans le critère de recherche "État solution de service"
3. <Forest>
4. Faire un export Excel le cas échéant avec
Calculer le PCA-PAR (Cut-off)
CALCULER LE PCA-PAR (CUT-OFF)
Ce programme vous permet de dégager les produits à recevoir (PAR) et les produits constatés
d'avance (PCA) qui sont demandés lors  de la clôture de votre exercice. Cette édition peut être
effectuée, selon les besoins, dans le courant de l'exercice.
La date de génération est obligatoirement celle du dernier jour du mois et par conséquent les
valeurs de compteurs utilisés correspondent à des compteurs estimés.
De même que pour le calcul de VMM, le calcul du Cut Off se fait à partir d'un nombre de jours réels.
Le calcul du Cut Off donne lieu à trois fichiers résultats :
1. La liste des SSC traitées avec le delta copie, le coût copie et le résultat du calcul soit dans la
colonne PAR soit dans la colonne PCA,
2. La liste des SSC non traitées avec l'explication correspondante,
3. Le tableau récapitulatif des totaux par code article.
Attention
Le calcul du PCA-PAR ne peut pas se faire à effet rétroactif.
Remarque
Il n'y a pas de calcul de Cut Off pour les frais d'envoi de toner, les frais d'estimation et les droits
fixes
Les Contrats de maintenance (montant forfaitaire) et de Location
Ce sont des montants forfaitaires facturés à des périodicités diverses.
Soit une SSC qui débute en 2010 qui est facturable trimestriellement. Cette règle a été facturée
pour un montant de 33€ en février 2014 pour la période du 01/03/2014 au 24/05/2014.
Le nombre de jours constatés est égal à
o Mars 31 Jours
o Avril 30 Jours
o Mai 24 Jours
Soit un total de 85 Jours
Le prix unitaire est égal (33€ / Nombre de jours facturés)
Le nombre de jours facturés est égal à
o Février 4 Jours
o Mars 31 Jours
o Avril 30 Jours
o Mai 24 Jours
Soit un total de 89 Jours
Le PCA-PAR se calcule au prorata du temps. Le montant est donc de un PCA de (33€ / 89) x 85.
Facturation des Copies Consommées
Ces contrats sont facturés en terme échu. La consommation facturée est calculée :
o Soit à partir d'un compteur réel (client ou prestataire),
o soit sur estimation.
Copies Echues SANS Copies Offertes
Contrat non facturé
Étant donné un contrat sur une période du 20/05/2014 au 20/08/2019.
Ce contrat démarrant au 20/05/2014 n'est facturable qu'en Mai 2014 (terme échu
trimestriel).
Contrôle du PCA-PAR au 28/02/2014 :
Le contrôle du PCA-PAR au 28/02/2014 ne renvoie rien.
Contrat déjà Facturé
Étant donné un contrat sur une période du 20/05/2012 au 20/08/2017.
Cette SSC est facturée depuis le 20/05/2012 et la dernière facture est de Février 2014. La
prochaine facture est théoriquement au 20/05/2014.
Lors de la facturation, ARTIS a utilisé une estimation à 33560.
Contrôle du PCA-PAR au 28/02/2014 :
Au 28/02/2014, tout a été facturé. Il n'y a donc ni PCA ni PAR

Contrôle PCA-PAR au 31/03/2014 :
La facturation de Mars 2014 n'étant pas faite, ARTIS calcule un PAR de la manière suivante
:
§ Compteur estimé à date du PCA-PAR 35 310
§ Moins Dernier facturé au 28/02/2011 33 560
§ Soit un différentiel de 1 750
Le montant est donc de un PAR de 1750 x PU copie.
Copies Echues AVEC Copies Offertes
Étant donné un contrat débutant le 10/09/2014, facturable en décembre 2014 (Terme échu
Trimestriel). 2 000 copies ont été offertes au client. Cette SSC ne sera donc facturable que
lorsque le client les aura consommées.
Contrôle du PCA-PAR au 30/11/2014
Le calcul effectué est le suivant :
§ Nombre de copies offertes : 2 000
§ Compteur estimé à date du PCA-PAR 2 695
§ Delta Copies 695 non facturées et non consommées à
ce jour.
Le montant est donc de un PAR de 695 x PU copie.
Facturation des Copies par Tranches
Pour ce mode de facturation, on facture en terme à échoir, une tranche copie de x copies.
Cette tranche limitée est renouvelée :
o Soit dès que le compteur pris en compte dépasse la valeur de la tranche à atteindre,
o Soit à date anniversaire de la dernière facture émise.
Il existe encore des tranches non limitées qui ne se renouvellent que si le compteur pris en compte
dépasse la valeur de la tranche à atteindre. Le calcul des PCA/PAR reste le même.
Tranches Copies SANS Copies Offertes ou déjà Consommées renouvelables à
date anniversaire de dernière facture
Étant donné un contrat débutant le 10/06/2013, facturée le 30/04/2013 jusqu'à 20747 copies,
par tranche de 5000 copies.
Une nouvelle tranche sera facturée, avant le 30/04/2014, si le compteur pris en compte dépasse
20747 copies.
Contrôle du PCA-PAR au 28/02/2014
Le nombre de copies d'avance correspond à :
§ La valeur de la tranche à atteindre 20 747
§ Moins le compteur estimé à date du PCA-PAR 17 814
§ Soit un Delta copies de 2 933 de copies facturées non
consommées
La différence entre la tranche à atteindre et le cumul des compteurs estimés au 28/02/2014
donne un delta copies de 2 933 copies qui est inférieur de la tranche facturée (5000
copies).
Dans le cas où le delta copies est supérieure au nombre de copies de la tranche vendue,
ARTIS proratise la tranche vendue pour la période du 30/04/2013 au  30/04/2014 car il n'est
pas possible de calculer un PCA supérieur au nombre de copies vendues.
Facturation par Forfait avec Régularisation des Copies Supplémentaires
Du Au
Compteur PCA /
PAR pour un
bien
Somme
compteurs
estimés pour
PCA PAR pour la
RFC
Somme des
derniers
compteurs
facturés
Quantité P.U. Montant
PCA Montant PAR Date de dernière
régularisation
Compteur de
dernière
régularisation
Cumul des
forfaits facturés
depuis la
dernière
régularisation
Infos sur la
fréquence de
facturation de la
régularisation
Fréquence de
facturation de la
régularisation
Périodicité de
facturation de la
régularisation
Jour de
facturation de la
régularisation
Tranche à
atteindre Cadence Seuil de
facturation
N° dernière
facture
Date de
dernière
facture
Nombre de
copies
offertes
Acompte Commentaires
A B C D E F G H I J K L M N O P Q R S T U V W X
1 01/12/2012 31/01/2013 1011 0,099613 100,70 34030638 13/11/2012 FORFAIT - Facture 34030638 du 13/11/2012
2 01/11/2012 30/11/2012 12164 12164 11833 -158 0,099603 0,00 01/11/2012 11833 1500 le 1 tous les 3
mois 3 Mensuelle 1 34030638 13/11/2012 REGULARISATION -  - Non remboursement des copies facturées non consommées
3 01/12/2012 31/01/2013 3033 0,009959 30,20 34030638 13/11/2012 FORFAIT - Facture 34030638 du 13/11/2012
4 01/11/2012 30/11/2012 51401 51401 49928 6 0,009960 0,06 01/11/2012 49928 4500 le 1 tous les 3
mois 3 Mensuelle 1 34030638 13/11/2012 REGULARISATION -
Prorata du forfait non consommé
Le prorata se calcule sur le nombre de jours réels par mois et selon les jours cités.

 Période Détail Référence RFC 1 Référence RFC 2
 Nbre de copies
du forfait
trimestriel
1500 4500
Fin de la
période 31/01/2013
01/12/2012 Nbre de jours 62 62
Date du PCA-
PAR 30/11/2012
Début de la
période 01/11/2012 Nbre de jours 92 92
Prorata forfait
non consommé F1 1010.87 F3 3032.61
Copies supplémentaires

 Période Détail Référence RFC 1 Référence RFC 2
Compteur à date
du PCA-PAR C2 12 164 C4 51 401
Compteur de
Dernière
régularisation
E2 11833 E4 49928
Différence 331.00 1 473.00
Cumul des
Forfaits facturés L2 1500 L4 4500
Différence -1 169.00 -3 027.00
Report du
prorata du forfait
non consommé
1010.87 3032.61
G2 -158.13 G4 5.61
PCA ou PAR 0 J4 0.06
TRAITEMENT DES ANOMALIES
Consulter Simulation de la facturation, Corriger les anomalies de facturation.
Édition détaillée du PCA-PAR
ÉDITION DÉTAILLÉE DU PCA-PAR
Position Position
lettrée Label de la colonne
Format Commentaire
1 A Client
2 B SSC
3 C RFC
4 D Du
5 E Au
6 F Quantité
7 G Prix unitaire
8 H PCA
9 I PAR
10 J numeroDerniereFactureReelle
11 K dateDerniereFactureReelle
12 L termeRfc
13 M Commentaires
14 N Article
15 O MSC
16 P prestataire
17 Q Type rfc
18 R Agence du client
19 S Chargé d'affaire
Le résultat du PCA-PAR est exportable sous Excel, mais très difficile à exploiter. Il faut
préférer l'édition concentrée.
Édition concentrée du PCA-PAR
ÉDITION CONCENTRÉE DU PCA-PAR
Position Position
lettrée Label de la colonne Format Commentaire
1 A Code client
2 B Raison sociale du client
3 C Code SSC
4 D Libellé de la SSC
5 E Statut SSC
6 F Date modif. statut
7 G Code MSC
8 H Libellé de la MSC
9 I Code RFC
10 J Libellé de la RFC
11 K Infos sur la fréquence de
facturation

12 L Fréquence de facturation
13 M Périodicité de facturation
14 N Jour de facturation
15 O Terme de la RFC
16 P Libellé du modèle
17 Q Identifiant fabricant   Pour les SSC groupées, le tableau contient
autant de lignes qu'il y a de biens
18 R Activité du modèle
19 S Famille du modèle
20 T Sous famille du modèle
21 U Montant forfaitaire   Montant facturé au client
22 V Forfait copies   Nombre de copies du forfait
23 W Tranche copies   Nombre de copies de la tranche
24 X Libellé de la grandeur
25 Y VMM
26 Z Origine vol. moy.   Base de calcul du VMM
27 AA Date dernier relevé prest
28 AB Dernier relevé prest
29 AC Date dernier relevé client
30 AD Dernier relevé client
31 AE Date dernier compteur facturé
32 AF Dernier compteur facturé
33 AG Date prochaine facture
théorique

34 AH Du   Début de la période prise en compte du calcul
de PCA / PAR
35 AI Au   Fin de la période prise en compte du calcul de
PCA / PAR
36 AJ Compteur PCA / PAR pour un
bien
  Compteur estimé au jour de calcul du PCA/
PAR
37 AK Somme compteurs estimés
pour PCA PAR pour la RFC
  Pour une flotte, cumul des compteurs estimés
au jour de calcul du PCA/PAR
38 AL Somme des derniers
compteurs facturés
  Pour une flotte, cumul des derniers compteurs
facturés
39 AM Quantité
40 AN P.U.
41 AO Montant PCA
42 AP Montant PAR
43 AQ Date de dernière
régularisation

44 AR Compteur de dernière
régularisation

45 AS
Cumul des forfaits facturés
depuis la dernière
régularisation

46 AT Infos sur la fréquence de
facturation de la régularisation

47 AU Fréquence de facturation de la
régularisation

48 AV Périodicité de facturation de la
régularisation

49 AW Jour de facturation de la
régularisation

50 AX Tranche à atteindre
51 AY Cadence   Concerne les règle de facturation de type
‘Tranche d'unités avec seuil de facturation
52 AZ Seuil de facturation   Concerne les règle de facturation de type
‘Tranche d'unités avec seuil de facturation
53 BA N° dernière facture
54 BB Date de dernière facture
55 BC Nombre de copies offertes
56 BD Acompte
57 BE Commentaires
58 BF Code article de la RFC
59 BG Libellé article de la RFC
60 BH Organisation interne
61 BI Type de RFC
62 BJ Agence du client
63 BK Chargé d'affaire
64 BL Id RFC
Colonnes dépendant du paramétrage
de ARTIS.net
Édition de synthèse du PCA-PAR
Édition de synthèse du PAC-PAR
Position Position
lettrée Label de la colonne Format Commentaire
1 A Code article
2 B Libelle article
3 C Quantité Pca
4 D Pca
5 E Quantité Par
6 F Par
7 G Intitulé du compte de
comptabilité générale
8 H Numéro du compte
Paramètres
PARAMÈTRES
PCA-PAR sur années offertes
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CALCUL_PCAPAR_SI_ANNEES_OFFERTES"
Valeur :
§ Coché : Indique si l'on calcule du PCAPAR en cas d'années offertes. Cela concerne les
règles en terme à échoir dont la date de première facturation est supérieure à la date
de calcul du PCA,
§ Non coché : Pas de calcul.
PCA-PAR sur années offertes
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CALCUL_PCAPAR_SI_ANNEES_OFFERTES"
Valeur :
§ Coché : Indique si l'on calcule du PCAPAR en cas d'années offertes. Cela concerne les
règles en terme à échoir dont la date de première facturation est supérieure à la date
de calcul du PCA,
§ Non coché : Pas de calcul.
Tranche UT
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "PRORATISER_TRANCHE_UT"
Valeur :
§ Coché : Proratise la tranche d'UT si deltaCopie > tailleTranche,
§ Non coché : Pas d'infos supplémentaire.
Actualiser les augmentations des SSC
ACTUALISER LES AUGMENTATIONS DES SSC
Cette option s'utilise indépendamment ou conjointement avec la gestions des augmentations des
coûts dans les RFC, consulter Gérer les augmentations des SSC.
Solution de services / Solution de services client / Actualiser les augmentations » ou « Administrer
les SSC »
1. Faire une première sélection,
2. <Forest> ou <F2>,
3. Exporter le tableau sous Excel,
4. Ne masquer ou ne détruire aucune colonne,
5. Affiner votre sélection de ligne,
6. Insérer dans le fichier les colonnes nécessaire (consulter le tableau au paragraphe suivant pour
trouver les colonnes à ajouter),
7. Compléter les informations de ces colonnes,
8. Envoyer le fichier à la Maintenance ARTIS.
9. Prise en compte des modifications
Le fichier reçu sera traité par la Maintenance ARTIS :
a) Mise à jour des SSC sur la base de TEST (dans le cas de la disponibilité d'une base
de TEST),
b) Validation par le prestataire,
c) Mise à jour des SSC sur la base de PROD.
Descriptif du fichier
Après export du résultat, ajouter les colonnes comme suit :
Position Position
lettrée Libellé Choix possible
1 A client.code
2 B Client
3 C Ssc
4 D ssc.libelle
5 E Msc
6 F msc.dateDebut
7 G Rfc
8 H rfc.modeReglement
9 I rfc.nbDecimal
10 J rfc.typeArrondi
11 K Coût en vigueur
12 L Augmentation
13 M augmentation.coeff
14 N Prochaine augmentation le
15 O Périodicite d'augmentation
16 P Nouveau "Mode d'augmentation"
• Majoration société,
• Majoration personnalisée,
• Syntec,
• Non révisable
17 Q Nouveau "Coefficient"
18 R Nouveau "Renouvellement"
• A date de signature du MSC,
• A date de prise d'effet du MSC,
• Annuelle à une date
19 S Nouvelle "Date de prochaine augmentation"
20 T Plafond
21 U Non récurrent
22 V Dernière augmentation le
23 W augmentation.Date
24 X augmentation.DateCreation
25 Y client.id
26 Z ssc.id
27 AA rfc.id
