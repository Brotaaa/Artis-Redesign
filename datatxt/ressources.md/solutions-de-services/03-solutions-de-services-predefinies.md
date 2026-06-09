# Solutions de services prédéfinies

> Categorie: Solutions de services | Pages 325-335

## Sous-rubriques
- Saisir les relevés compteurs (p.325)
- Imprimer les factures (p.325)
- Consulter les décomptes d'UT (p.325)
- Valider les décomptes d'UT (p.325)
- Gérer les Numéros de marché (p.325)
- Généralités et Théorie (p.325)
- Gérer une solution de services prédéfinie (SSP) (p.326)
- Gérer un module de services prédéfini (MSP) (p.326)
- Gérer une règle de facturation prédéfinie (RFP) (p.326)
-   Règle de facturation de type Forfait avec Régularisation (p.326)
-   Règle de facturation de type Tranche (p.331)
-   Créer une RFP Gestion des Kits de livraison (p.334)
-     Kits de consommables (nombre détermine couvert) (p.334)
- Gérer un service prédéfini (SP) (p.335)
- Gérer une condition générale de vente prédéfinie (CGVP) (p.335)

Saisir les relevés compteurs
SAISIR LES RELEVÉS COMPTEURS
Consulter Saisir les relevés compteurs.
Imprimer les factures
IMPRIMER LES FACTURES
Consulter Imprimer les factures.
Consulter les décomptes d'UT
Valider les décomptes d'UT
Gérer les Numéros de marché
GÉRER LES NUMÉROS DE MARCHÉ
Consulter Gestion des marchés.
Solutions de services prédéfinies
Généralités et Théorie
SOLUTIONS DE SERVICES PREDEFINIES (SSP)
Base de création des SSC, comme un fond de tarte  dans laquelle les ingrédients vont être ajoutés
Une Solution de Services  Prédéfinie (SSP) permet de créer les Solution de Services Client (SSC).
La SSP sert de base, dans laquelle vont être ajouté les Règles de facturation et les Services (ingrédients)
Une Solution de Services Client est  constituée de un ou plusieurs Modules  Services Clients  (MSC) qui
permettent de facturer la maintenance technique de un ou plusieurs biens.
Chaque Module Service Client est composé de :
· Une ou plusieurs Règles de Facturation Clients (RFC)
· Une ou plusieurs couvertures
Chaque Règle de Facturation contient ses propres conditions de Facturation et est Liée à :
· Une ou plusieurs grandeurs de Biens Spécifiques
· Un ou plusieurs Biens Spécifiques
· Un Parc de Biens Génériques
· Une Raison Sociale
Gérer une solution de services prédéfinie (SSP)
Gérer un module de services prédéfini (MSP)
En attente.
Gérer une règle de facturation prédéfinie (RFP)
Règle de facturation de type Forfait avec Régularisation
RÈGLE DE FACTURATION DE TYPE FORFAIT AVEC
RÉGULARISATION
Cette règle de facturation peut-être selon la périodicité du forfait et de la régularisation différente
selon les contrats.
Exemples :
o Forfait trimestriel avec régularisation trimestrielle ;
o Forfait trimestriel avec régularisation annuelle.
o Forfait mensuel avec régularisation trimestrielle
Le forfait en terme échu avec régularisation en terme échu
Le forfait en terme échu
Cette règle facture périodiquement et à échéance révolue un nombre déterminé de copies. Prenons,
comme exemple, un forfait trimestriel en terme échu commençant au 01 janvier. La facturation se
déclenchera donc le 31 mars pour ensuite se facturer périodiquement tous les trimestres.
La régularisation en terme échu
Une régularisation est toujours en terme échu. Elle peut se caler différemment du forfait. La règle
permet de prendre en compte la régularisation selon trois types de valorisation compteur
(définissable dans la règle).
o Mode Réel : Pas d'estimation sur ce mode. La régularisation ne prendra en compte que les
relevés d'origine « relevé client » ou « relevé prestataire ».
o Mode Estimation autorisée : La règle est facturée selon un paramètre prédéfini et modifiable
lors de la génération ou de la simulation de la facturation. Ce paramètre permet de rechercher
sous les 20 derniers jours (valeur par défaut mais modifiable par l'utilisateur), le compteur le
plus récemment saisi. Au delà de ces 20 jours, le compteur est estimé selon son VMM à la
date de facturation.
o Mode Particulier : La régularisation est facturée uniquement à partir du relevé client du
compteur (relevés transmis par les clients). Il n'y a pas de facturation sur estimation, ni sur
relevé prestataire.
Schématisation
Ce schéma représente le fonctionnement d'un forfait trimestriel de 2000 copies (calé pour
simplification à l'année civile) en terme échu (TE) avec une régularisation trimestrielle et une règle
de facturation (RFC) en mode « estimation autorisée » et sans l'option « remboursement de copies
non consommées ».
Le forfait se facture donc tous les trimestres de 2000 copies en même temps que la régularisation
des copies supplémentaires soit le 1er de chaque trimestre civil.
Si le forfait (ou autres types de contrat) doit se facturer à une période différente de la date
d'anniversaire, un prorata se calculera automatiquement lors de la facturation. Ainsi, si l'on souhaite
facturer un forfait mensuel en terme à échoir de 1000 copies au 01 avril alors que le contrat débute
normalement le 15 mars, la facture portera sur 1500 copies (15 jours pour 500 copies au mois de
mars et le mois avril pour 1000 copies).
Le forfait en terme à échoir + régularisation à terme échu
Le forfait en terme à échoir
Cette règle facture périodiquement et dès le 1er jour du contrat, un nombre déterminé de copies
(terme à échoir). Prenons, comme exemple, un forfait mensuel de 1000 copies en terme à échoir
commençant au 01 janvier. La facturation se déclenche donc directement au 1er janvier pour
ensuite se facturer périodiquement tous les mois. Elle facture, alors, 1000 copies d'avance tous les
mois.
La régularisation en terme échu
Voir paragraphe sur la régularisation pour les forfaits en terme échu.
Schématisation
Ce schéma représente le fonctionnement d'un forfait mensuel de 1000 copies (calé pour
simplification au 1er du mois) en terme à échoir (TAE) avec une régularisation trimestrielle, une
règle de facturation (RFC) en mode « estimation autorisée » et sans l'option « remboursement de
copies non consommées ».

Le forfait se facture donc tous les mois de 1000 copies, la régularisation des copies
supplémentaires (si copies supplémentaires) se facturera le 1er de chaque trimestre civil.
Explication sur le calcul du prorata : Selon l'option choisie, un prorata du volume copies à facturer
(ou de la somme forfaitaire selon le type de contrat)  peut se déclencher si la date initiale du contrat
est antérieure à la date de facturation.
Ainsi, si l'on souhaite facturer un forfait mensuel en terme à échoir de 1000 copies au 01 avril alors
que le contrat débute normalement le 15 mars (début de la couverture), la facture portera sur 1500
copies (500 copies pour 15 jours au mois de mars et le mois avril pour 1000 copies). Si l'option
prorata est choisie, celui-ci peut se déclencher soit à la 1ere facture soit à la dernière facture.
Dans Artis.net, les paramètres de facturation du forfait plus régularisation sont représentés comme
tel :
o Valeur de la dernière régularisation (facturée ou non),
o Cumul des forfaits facturés depuis la dernière régularisation,
o Seuil théorique à atteindre pour déclencher la facturation des copies supplémentaires.
Forfait avec régularisation flottante
Ce mode de facturation est assez spécifique et peu utilisé. Le mode de fonctionnement reste
sensiblement le même que les 2 cas énumérés ci-dessus, à la différence que la valeur du compteur
n'est jamais estimée et que la régularisation est dite « flottante ».
La base de calcul du seuil théorique à atteindre pour facturation des copies supplémentaires voire,
le cas échéant, pour le remboursement des copies non consommées prend en compte la dernière
régularisation auquel est rajouté le cumul des forfaits facturés jusqu'à un prochain relevé compteur.
Comme exemple, reprenons le même schéma que précédemment d'un forfait mensuel en terme à
échoir de 1000 copies avec régularisation supplémentaire trimestrielle. L'estimation du mois de
juillet ne sera donc pas calculée.
Schématisation

Règle de facturation de type Tranche
RÈGLE DE FACTURATION DE TYPE TRANCHE
La tranche en terme échu sans régularisation
La tranche en terme échu
Cette règle facture périodiquement (par sa date de renouvellement) et à échéance révolue un
nombre déterminé de copies. Prenons, comme exemple, une tranche trimestrielle en terme échu
commençant au 01 janvier. La facturation se déclenchera donc le 31 mars pour ensuite se facturer
périodiquement tous les trimestres à moins que la valeur du compteur ne dépasse la tranche à
atteindre et qu'une nouvelle tranche se déclenche avant échéance.
 La différence entre un forfait et une tranche est principalement sur ce point. Le forfait se déclenche
toujours à période régulière et fixe alors qu'une tranche peut se renouveler soit par la consommation
(valeur compteur dépassant la tranche à atteindre) soit à date de renouvellement (tranche limitée
dans le temps généralement fixée à 12 mois après la date de dernière facture réelle).
On peut, bien sûr, toujours paramétrer une tranche comme « illimitée » (apériodique). Seule, alors,
la consommation déclenchera une nouvelle tranche. Aujourd'hui, ce type de règle est de plus en
plus remplacé par des tranches renouvelables annuellement.
Schématisation
La tranche en terme à échoir sans régularisation
La tranche en terme à échoir
Cette règle facture périodiquement (par la date de renouvellement) et dès le 1er jour du contrat un
nombre déterminé de copies. Prenons, comme exemple, une tranche renouvelable trimestriellement
en terme à échoir commençant au 01 janvier. La facturation se déclenchera donc le 01 janvier pour
ensuite se facturer périodiquement tous les trimestres à moins que la valeur du compteur ne
dépasse la borne à atteindre et qu'une nouvelle tranche se déclenche avant échéance.
Comme précédemment expliqué pour la tranche échue, une tranche peut, aussi, être
limitée ou pas dans le temps. Si l'option « apériodique » est cochée, la tranche sera alors «
illimitée » et ainsi, seule la consommation déclenchera une nouvelle tranche.
Schématisation
Prenons le même exemple que précédemment mais avec une tranche ce coup-ci en terme à échoir
avec renouvellement trimestriel.
La tranche en terme à échoir avec régularisation
Bien que cela ne soit pas des plus courants, Artis.net donne la possibilité de facturer une
régularisation de copies supplémentaires avant renouvellement de la tranche.
Régularisation
Rappel : Une régularisation est toujours en terme échu. La règle permet de prendre en compte la
régularisation selon trois types de valorisation compteur (définissable dans la règle).
o Mode Réel : Pas d'estimation sur ce mode. La régularisation ne prendra en compte que les
relevés d'origine « relevé client » ou « relevé prestataire ».
o Mode Estimation autorisée : La règle est facturée selon un paramètre prédéfini et modifiable
lors de la génération ou de la simulation de la facturation. Ce paramètre permet de rechercher
sous les 20 derniers jours (valeur par défaut mais modifiable par l'utilisateur), le compteur le
plus récemment saisi. Au delà de ces 20 jours, le compteur est estimé selon son VMM à la
date de facturation.
o Mode Particulier : La régularisation est facturée uniquement à partir du relevé client du
compteur (relevés transmis par les clients). Il n'y a pas de facturation sur estimation, ni sur
relevé prestataire.
Schématisation
Créer une RFP Gestion des Kits de livraison
Kits de consommables (nombre détermine couvert)
KITS DE CONSOMMABLES (NOMBRE DÉTERMINE COUVERT)
La règle de facturation telle qu'elle décrite permet de facturer les toners consommés au delà du
nombre convenu dans le contrat.
Article
Créer un article Type de produit intangible, consulter Gérer les articles.
Service prédéfini
Solutions de services / Solutions de services prédéfinies / Gérer les services prédéfinis
1. <+>,
2. "Code - Libellé" : "KITINT - Kit Intervention",
3. Cocher "Reconduction",
4. "Couverture" : Sélectionner "Aucune couverture sauf inclusion",
5. "Description" : copier le libellé
6. "Validité" : "01/01/2000"
7. "Caractéristiques" : Mettre "Sans unité de mesure",
8. <Disquette> ou <F2>,
9. Trois nouvelles zones s'affichent :
§ Articles inclus :
Lors de la saisie de la Solution de Services Client (SSC), il faudra indiquer les codes
des articles Toner inclus dans le kit qui sont amenés à être livrés,
§ Catégories incluses,
§ Conditions générales de vente.
Régle de facturation prédéfinie
Solutions de services prédéfinis / Gérer une règle de facturation prédéfinie (RFP)
1. <+>,
2. "Code - Libellé" : "RFKIT - Kit consommables",
3. "Règle choisie" : Prendre "KITS DE LIVRAISONS",
4. "Description" : "Kit consommables",
5. Section "Validité",
6. "Début - Fin" : "01/01/2000 - 01/01/3000",
7. Section "Périodicité",
8. Cliquer "Périodicité",
9. Choisir "Mensuelle",
10. "tous les" : Mettre "1", si mensuel, "3", si trimestriel...
11. <Disquette> ou <F2>,
12. "Terme" : Sélectionner "Echu",
13. <Disquette> ou <F2>,
Paramètres de facturation
14. "Section Kit",
15. "Engagement" : Mettre "Oui",
16. "Factuer l'article livré" : Mettre "Oui",
17. "Unité  de facturation" :
18. Indiquer "1" si la facturation doit se faire au fur et à mesure de la livraison,
19. Pour une facturation de plusieurs livraisons, indiquer le nombre de livraisons à regrouper,
20. Section "Engagement",
21. "Nb kits minimum" : Indiquer si le client s'engage à commander un nombre minimum de toners,
22. "Nb kits offerts" : Indiquer le nombre de toner inclus dans le kit (ex : 24 = 6 kits de 4 toners),
23. <Disquette> ou <F2>.
Gérer un service prédéfini (SP)
En attente.
Gérer une condition générale de vente prédéfinie (CGVP)
En attente.
