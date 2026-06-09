# Livraisons client

> Categorie: Ventes | Pages 428-436

## Sous-rubriques
- Gérer les livraisons clients (p.428)
- Générer les livraisons clients (p.428)
- Reprendre des articles en clientèle (p.429)
- Lister les BL par transporteur (p.429)
- Particularités (p.430)
-   Actualiser les biens (p.430)
-   Gérer le suivi des BL de consommables (p.430)
-   Grouper/Dégrouper les biens (p.431)
-   Interfacer vers des transporteurs (p.432)
-     Interfacer vers Exapaq (p.432)
-     Interfacer vers UPS (p.434)
-     Interfacer vers logiciel (Karelis) (p.436)

§ Non coché : Autorisé.
Livraisons client
Gérer les livraisons clients
GÉRER LES LIVRAISONS CLIENTS
Il est possible de créer la livraison directement depuis l'option du menu. Cette méthode est plutôt
contraignante et ARTIS préconise de faire la livraison depuis la commande.
Faire la livraison depuis la commande
Ventes / Commandes clients / Gérer les commandes clients
1. Rappeler la commande,
2. La commande est à l'état "Livrable partiellement" ou "Livrable en totalité",
3. Cliquer sur "Livrer la commande",
4. L'écran de livraison client s'affiche,
5. Section "Commandes à livrer",
6. Toutes les lignes sont cochées : les articles sont considérés comme étant à réceptionner,
7. Les quantités sont complétées en fonction du reliquat,
8. Décocher les lignes des articles non réceptionnés,
9. "Quantité livrée" : Modifier les quantités reçues partiellement,
10. <Disquette> ou <F2>,
11. Le bon de livraison est automatiquement créé et affiché,
12. Les mouvements de stock sont automatiquement générés, et les fiches des biens ont été
actualisées automatiquement,
13. Si nécessaire,  faire <Mosaïque> et "Aperçu du BL" ou "Imprimer le BL".
Générer les livraisons clients
GÉNÉRER LES LIVRAISONS CLIENT
Ventes / Livraisons clients / Générer les livraisons clients
1. "Activité" : Sélectionner les activités/métiers à prendre en compte dans la fiche article parmi les
activités/métiers courantes,
2. Compléter les critères suivants en fonction des besoins :
§ Les commandes livrables partiellement seulement,
§ Les commandes livrables en totalité seulement,
§ Les commandes avec biens,
§ Les commandes autres,
3. <Suivant> ou <Triangle vers la droite>,
4. La liste des commandes à livrer s'affichent,
5. Toutes les lignes sont automatiquement sélectionnées,
6. Pour consulter ou modifier une commande, cliquer sur "Numéro interne",
7. Dé sélectionner les commandes à ne pas livrer,
8. <Flèche verte> ou <F2>,
9. La liste des BL générés s'affichent,
10. Les mouvements de stock sont automatiquement générés, et les fiches des biens ont été
actualisées automatiquement,
11. Les drapeaux sont oranges tant que l'impression n'est pas faite et validée,
12. Imprimer en cliquant sur l'imprimante dans l'entête de la section,
13. Valider le message,
14. Si la réponse est "Oui", les drapeaux passent au vert.
15. <X > pour quitter ou <Précédent> ou <Triangle vers la gauche> pour revenir.
Reprendre des articles en clientèle
REPRENDRE UN CONSOMMABLE
Ventes / Livraisons clients / Reprendre des articles en clientèle
Cette option est prévu pour permettre la reprise d'articles hors contrat ou sous contrat. Le bien de
destination n'est plus obligatoire.
Lors de la saisie de la ligne d'article, conserver le prix de revient mis par défaut, cela permet de ne
pas modifier le PMP.
Paramètres
Dépôt de reprise des consommables
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_DEPOT_REPRISE_CONSO"
Valeur : Code du dépôt par défaut utilisé en reprise de consommable.
Lister les BL par transporteur
LISTER LES BL PAR TRANSPORTEUR
Position Label de la colonne Format Commentaire
1 CodeTransp  Texte
2 Transporteur  Texte
3 BL  Texte
4 DateLivraison  Instant
5 NumExterne  Texte
6 CodeClt  Texte
7 Code site  Texte
8 Client  Texte
9 Adresse1  Texte
10 Adresse2  Texte
11 Adresse3  Texte
12 Adresse4  Texte
13 CP  Texte
14 Ville  Texte
15 Code org int.  Texte
16 EtatBL  Texte
17 Opérateur  Texte
18 CrééLe  Instant
19 MàJLe  Instant
20 Date du lot de génération  Instant
21 ClientLivré  Texte
Particularités
Actualiser les biens
ACTUALISER LES BIENS
Mettre à jour les liens Maîtres/Accessoires d'un bien au moment de
la livraison client
o Ventes / Livraisons clients / Gérer les livraisons clients
1. Rechercher la livraison à traiter qui contient les machines et les accessoires,
2. cliquer sur "Actualiser les biens",
3. Le bien Maître est coché dans la colonne M/A, les accessoires ne sont pas cochés,
4. Dans la première colonne du tableau :
1. Sélectionner les lignes des biens qui doivent être liés,
2. Un seul bien Maître doit être coché,
3. Cliquer sur "Grouper",
5. Refaire la procédure pour effectuer les groupages Maître par Maître,
6. <Disquette> ou <F2>.
Les dégroupages peuvent être effectuer en une seule fois.
Gérer le suivi des BL de consommables
GERER LE SUIVI DES BL DE CONSOMMABLES
Ventes / Livraison client / Gérer les livraisons client
1. <F1> ou <Loupe>,
2. Dans le critère "État BL", sélectionner tout sauf "Facturé en totalité", "Non facturable" et
"Archivé",
3. <Disquette> ou <F2>,
4. Exporter le résultat sous Excel,
5. Travailler la liste sous Excel.
Grouper/Dégrouper les biens
GROUPER/DÉGROUPER LES BIENS
GROUPER / DEGROUPER LES BIENS AU MOMENT DE LA LIVRAISON
CLIENT
Ventes / Commande client / Livrer la commande
o Dans la commande client, une fois les biens réservés, cliquer sur "Livrer commande"
o Le Bon de livraison est généré.
o Zone accueil, dans le carré de carrés
   , sélectionner "Actualiser les biens"
o Colonne M/A, cocher le bien maître
o En première colonne, sélectionner les lignes des biens à grouper, le bien maître et le ou les
accessoires
o dans le carré de carrés
 ,
o Grouper : rattacher des accessoires à un bien maître
Le bien maître s'affiche en gras
L'accessoire s'affiche en italique non gras sous le bien maître, avec "G" dans la première
colonne
o Dégrouper : Détacher des accessoires d'un bien maître
o Ajouter un constituant (de la commande) : rechercher l'article, indiquer la quantité.
o Valider par < Disquette > et
o Valider par < Disquette >
ou
GROUPER / DEGROUPER LES BIENS DES CLIENTS
Biens et Configuration / Actualiser les biens des clients /
o Suivre la procédure décrite ci-dessus et consulter aussi Actualiser les biens des clients
Interfacer vers des transporteurs
Interfacer vers Exapaq
INTERFACER VERS LE TRANSPORTEUR EXAPAQ
Le but de l'interface EX APRINT est de permettre l'automatisation de l'impression des étiquettes à
partir des bons de livraisons saisis dans ARTIS.net, sans avoir à saisir à nouveau dans EX APRINT.
Pour communiquer avec le logiciel, il existe deux modes :
o Dépôt des données par ARTIS.net dans un répertoire. Exaprint est en lecture constante de ce
répertoire,
o Via un serveur FTP.
Consulter le paramétrage ci-dessous.
Consulter ARTIS pour effectuer la mise en place.
Client
Le pays de la fiche principale ou des sites des clients (obligatoires) sont transcodés avec les codes
utilisés par EX APAQ.
Si un pays utilisé dans ARTIS.net n'a pas de correspondance avec un code pays EX APAQ, la
valeur "F" par défaut est envoyé dans le fichier EX APAQ.
Remarque
Si dans ARTIS.net, l'ensemble des pays (norme ISO) ne sont pas paramétrés, contacter ARTIS. En
effet, le pays a une incidence sur le régime fiscal.
Transporteur
Tiers / Autres organisations / Gérer les organisations de type transporteur
Avant de procéder à ces paramétrage vous devrez avoir créé au préalable une organisation de type
transporteur dans la gestion des Tiers.
Le code du transporteur doit être "EX APAQ".
Table de décision
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
Transporteur et étiquette
Appelez la table de décision "TD_ETIQUETTE_TRANSPORTEUR", puis renseignez les valeurs :
Numéro Code transporteur Code organisation interne Question de confirmation Type d'interface Référence chez le transporteur Numéro compte chargeur EXAPAQ
1 EX APAQ 01 Oui EX APAQ 12345 12345
Code transporteur
EXAPAQ,
Code organisation interne
Exemple : 01,
Question confirmation
Cette colonne permet de préciser si l'impression de l'étiquette transporteur est soumise ou non à
une confirmation.
Coché : Une question apparaitra lors de l'impression d'un bon de livraison ou d'un lot de bons de
livraison.
Non coché : L'étiquette transporteur sera imprimée à chaque impression d'un bon de livraison ou
d'un lot de bons de livraison.
Pour ne pas imprimer d'étiquette transporteur sans même poser de question, il suffira de ne pas
renseigner le code du transporteur concerné.
Type d'interface
EXAPAQ,
Référence chez le transporteur
Numéro de compte de l'organisation interne chez EXAPAQ
Numéro de compte chargeur EXAPAQ
Numéro de compte de l'organisation interne chez EXAPAQ
Valeur par défaut en saisie
Cette table de décision facultative permet de spécifier un transporteur par défaut dans les
saisies de commandes de consommable.
Appelez la table de décision ‘TransporteurCmde_Cellule' puis renseignez le transporteur repris
par défaut dans les commandes de consommables :
Code unité organisationnelle Code transporteur Commentaire
CDECONSO001 EX APAQ Transporteur par défaut en saisie de
commandes de consommables
Paramètres d'application
Paramètres
Extension des fichiers
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre ‘EX TENSION_FICHIER_EX APRINT'
Valeur : ".dat" est l'extension des fichiers générés pour l'impression d'étiquettes transporteur
Mode répertoire
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre ‘FTP_EX APRINT_REP'
Valeur : Le répertoire du serveur ftp EX APRINT dans lequel les fichiers d'interface devront être
déposés, exemple "/artis/interface/exapaq"
Mode FTP
Adresse IP
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre ‘FTP_EX APRINT_IP'
Valeur : L'adresse IP du serveur ftp EX APRINT
Login
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre ‘FTP_EX APRINT_LOGIN'
Valeur : Le login du serveur ftp EX APRINT
Mot de passe
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre ‘FTP_EX APRINT_MDP'
Valeur : Le mot de passe du serveur ftp EX APRINT
Interfacer vers UPS
INTERFACER VERS LE TRANSPORTEUR UPS
Le but de l'interface UPS est de permettre l'automatisation de l'impression des étiquettes à partir
des bons de livraisons saisis dans ARTIS.net, sans avoir à saisir à nouveau dans UPS.
Pour communiquer avec le logiciel, il existe deux modes :
o Dépôt des données par ARTIS.net dans un répertoire. Exaprint est en lecture constante de ce
répertoire,
o Via un serveur FTP.
Consulter le paramétrage ci-dessous.
Consulter ARTIS pour effectuer la mise en place.
Transporteur
Tiers / Autres organisations / Gérer les organisations de type transporteur
Avant de procéder à ces paramétrage vous devrez avoir créé au préalable une organisation de type
transporteur dans la gestion des Tiers.
Le code du transporteur doit être "UPS".
Table de décision
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
Transporteur et étiquette
Appelez la table de décision "TD_ETIQUETTE_TRANSPORTEUR", puis renseignez les valeurs :
Numéro Code transporteur Code organisation interne Question de confirmation Type d'interface Référence chez le transporteur Numéro compte chargeur EXAPAQ
1 UPS 01 Oui UPS 12345 12345
Code transporteur
UPS,
Code organisation interne
Exemple : 01,
Question confirmation
Cette colonne permet de préciser si l'impression de l'étiquette transporteur est soumise ou non à
une confirmation.
Coché : Une question apparaitra lors de l'impression d'un bon de livraison ou d'un lot de bons de
livraison.
Non coché : L'étiquette transporteur sera imprimée à chaque impression d'un bon de livraison ou
d'un lot de bons de livraison.
Pour ne pas imprimer d'étiquette transporteur sans même poser de question, il suffira de ne pas
renseigner le code du transporteur concerné.
Type d'interface
EXAPAQ,
Référence chez le transporteur
Inutilisé, mettre 99999,
Numéro de compte chargeur EXAPAQ
Inutilisé, mettre 99999.
Valeur par défaut en saisie
Cette table de décision facultative permet de spécifier un transporteur par défaut dans les
saisies de commandes de consommable.
Appelez la table de décision ‘TransporteurCmde_Cellule' puis renseignez le transporteur repris
par défaut dans les commandes de consommables :
Code unité organisationnelle Code transporteur Commentaire
CDECONSO001 UPS Transporteur par défaut en saisie de
commandes de consommables
Paramètres d'application
Paramètres
Répertoire
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "BON_TRANSPORT_UPS_REP"
Valeur : Le répertoire dans lequel les fichiers d'interface UPS devront être déposés.
Interfacer vers logiciel (Karelis)
INTERFACER VERS LOGICIEL (KARELIS)
Le but de cet interface est de permettre de générer un fichier en même temps que les interfaces
vers EX APAQ, UPS ou TNT.
Consulter ARTIS pour effectuer la mise en place.
Table de décision
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
Transporteur et étiquette
Appelez la table de décision "TD_ETIQUETTE_TRANSPORTEUR", puis renseignez les valeurs :
Numéro Code transporteur Code organisation interne Question de confirmation Type d'interface Référence chez le transporteur Numéro compte chargeur EXAPAQ
1 EX APAQ 01 Oui EX APAQ 12345 12345
2 EX APAQ 01 Oui KARELIS 99999 99999
Code transporteur
Mettre le code transporteur pour lequel le fichier doit être généré. Dans l'exemple, ci-dessus, le
fichier KARELIS sera généré en même temps que le fichier EX APAQ,
Code organisation interne
Mettre le même choix que le transporteur référent,
Question confirmation
