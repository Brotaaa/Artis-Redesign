# Import des relevés compteurs

> Categorie: Biens et Configurations | Pages 214-219

## Sous-rubriques
- Paramétrer le Machine to Machine (p.214)
- Paramétrer les Alertes et les contrôles des relevés entrants (p.218)

o Valider par < Disquette >
Un tableau des dernières saisies est affiché en bas de page
Import des relevés compteurs
IMPORTER LES RELEVÉS COMPTEURS
Action à faire régulièrement en fonction des  périodicité de facturation pour récupérer les
consommations des clients.
Selon les marques et leur logiciel de remontée compteurs, l'utilisateur a éventuellement à déposer
le fichier dans un répertoire spécifique.
Biens et configurations / Import des relevés compteurs
1. La barre de progression informe de l'avancement de l'import,
2. Une fois terminé, aucune information n'est affichée,
3. Pour contrôler l'import, vérifier par sondage l'historique des compteurs des biens concernés,
4. Vérifier et contrôler les rapports (log) reçus par courriel.
Attention
Un nouveau lancement sur "Import des relevés compteurs" entraîne un nouvel import.
Rapport d'envoi automatique
Un message est envoyé à l'adresse de réceptionnaire des logs. Ce message contient un rapport qu'il faut
analyser, consulter .
Dès que le fichier est traité, un message est adressé au réceptionnaire des logs indiqué dans le
paramétrage.
Paramétrer le Machine to Machine
PARAMÉTRER LE MACHINE TO MACHINE
Ce module permet d'importer automatiquement des relevés compteurs dans la base ARTIS. Les
valeurs des compteurs sont importés sur ARTIS à l'aide d'un robot de type KPAX  ou KDFM, etc.
Cette fonctionnalité est un module particulier, contacter ARTIS pour plus d'informations et pour sa
mise en place technique, consulter Paramétrage technique. Le paramétrage ci-dessous ne peut
être réalisé que si a mise en place technique est faite.
Paramétrage
Correspondances sur les modèles
Dans les fichiers mis à disposition par les constructeurs, les compteurs ont des codes qui leur sont
propres. Ces codes compteur ne sont pas forcément ceux paramétrer dans les configurations de
grandeurs dans ARTIS.net. Il convient donc de faire des correspondances et ces dernières se font
pas modèle.
Biens et configurations / Gérer les configurations prédéfinies et leurs formules associées.
Correspondance unitaire
1. Rechercher la configuration prédéfinie de grandeurs prédéfinies,
2. Section "Modèles", rechercher lmodèle à traiter,
3. Cliquer sur "Correspondance" à droite,
4. L'écran affiche :
§ Deux sections :
· Correspondances référence modèle,
· Correspondance des grandeurs,
§ Pour les deux sections, autant de colonne que de module d'import typé par
constructeur,
5. <Modifier> ou <Crayon>,
6. Section "Correspondances référence modèle" :
§ Mettre en correspondance du modèle d'ARTIS.net, le code du modèle que le
constructeur précise dans son fichier,
7. Section "Correspondance des grandeurs" :
§ Pour chaque grandeur technique à importer, mettre en correspondance de la grandeur
d'ARTIS.net, le code du compteur que le constructeur précise dans son fichier,
8. <F2> ou <Disquette>.
Cette procédure à réitérer pour chaque modèle dont les correspondances ne sont pas identiques.
Duplication des correspondances
Pour les modèles dont les correspondances sont identiques à un modèle déjà paramétré :
1. Refaire les étapes 1 à 4 (rester en visualisation),
2. Dans la section "Modèles de la configuration prédéfinie",
3. Sélectionner les modèles qui vont recevoir les mêmes correspondances que celui du modèle de
la section "Correspondances référence modèle",
4. Cliquer sur «Dupliquer vers»,
5. Valider le message,
6. Vérifier.
A l'inverse, il est possible de récupérer une correspondance de grandeur existante et de la copier
vers le modèle en cours de visualisation :
1. <Modifier> ou <Crayon>,
2. Sélectionner dans la liste le modèle contenant la configuration à copier,
3. Cliquer sur "Dupliquer depuis".
Pré-valorisation à partir du premier modèle
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CREATION_PRE_CORRESPONDANCE"
Valeur :
o Pré-valorisation à partir du premier modèle  : ARTIS.net reporte les codes de
correspondances qu'il trouve dans le premier modèle de la configuration sur le nouveau modèle
créé,
o Manuelle  : ARTIS.net ouvre l'écran de saisie des codes de correspondances afin que
l'utilisateur saisisse les correspondances du nouveau  modèle créé.

Correspondances pour un bien en particulier
Biens et configurations / Gérer les biens
Si un bien doit avoir des correspondances particulières :
1. Rechercher le bien,
2. Dans l'onglet "Grandeur",
3. Sélectionner la grandeur,
4. <Modifier> ou <Crayon> du tableau,
5. Section "Correspondance des compteurs", en bas de l'écran,
6. Saisir la correspondance pour cette grandeur,
7. <F2> ou <Disquette>,
8. Réitérer la procédure pour les autres grandeurs.
Mode de relevé compteur sur les biens
Sur les biens, une classification permet d'indiquer à ARTIS.net le mode de demande de relevé
compteur, consulter Mettre à jour le mode de relevé compteur. Si le client a accepter les envois
automatiques des relevés et le paramétrage est en place dans ARTIS.net, le client n'a pas à
recevoir les demandes de relevés compteur faites par fax ou courriel. Il faut donc indiquer à
ARTIS.net que les biens en question sont dans un autre mode.
Classification portant sur les biens
1. Mettre à jour la classification afin d'ajouter les catégories, exemple :
§ de façon générique : "Import relevé" ou "MtoM",
§ de façon plus précise en fonction du constructeur : "E-Maintenance", "@Remote",
"Sharp SDM" ...
2. Consulter  Créer une classification.
Mise à jour des biens
o Pour classifier les biens : consulter Classifier un Bien.
Paramétrer les contrôles des relevés importés
Consulter Paramétrer les Alertes et les contrôles des relevés entrants.
Paramétrage technique
Traitement batch
Paramétrages / Divers / Gérer les traitements batch
Le traitement batch est optionnel. Il correspond à l'exécution automatique et périodique du
traitement de l'import. Cette option permet de définir les paramètres d'importation des relevés
compteurs et se fait avec l'assistance d'un intervenant ARTIS.net.
Le paramétrage permet d'indiquer :
o La périodicité de l'importation,
o Le matricule du collaborateur valideur de la grandeur,
o Le matricule du collaborateur mis comme valideur du relevé importé,
o Le code Organisation interne qui gère le bien concerné.
Table de décision
Paramètres application / Classification, listes et tables de décision / Gérer les Tables de décision
TD_GESTION_IMPORT_RELEVES_COMPTEURS
Les paramètres possibles sont :
§ IMPORT : case cochée
§ Nom du traitement : Nom de la marque de la machine M to M
§ Traitement automatique : oui / non
§ Code organisation : code organisation interne
§ Transport utilisé : le vecteur de transport. (ex : RELEVES_TRANSPORT_FTP)
§ Lecture utilisée : nom du format de lecteur. (ex :
RELEVE_COMPTEUR_ARTIS_FILE_PARSER)
§ Modèle de lecture utilisé : nom du modèle. (ex : empty.vm)
§ Génération utilisée : ex : IMPORT_RELEVE_COMPTEUR_TECH
§ Chemin utilisé : nom du chemin d'import. (ex : /artis/interface/import/.../releves)
§ Finalisation utilisée : ex : RAPPORT_HTML_DECORATOR...
§ Repertoire destination log : adresse sur le serveur de réception des logs
§ Repertoire fichier traite : adresse sur le serveur des fichiers
§ Mail envoi log : e-mail de réception des messages
§ Suffixe fichier log.
Paramètres
Code de grandeur inconnu
Paramètres application / Paramètres application / Gérer les paramètres
Doit on logger les erreurs concernant les codes de grandeurs inconnus lors de l'import des relevés
compteurs ?
Paramètre "LOG_ANOMALIE_CODE_GRANDEUR"
Valeur :
§ Oui : Les erreurs sont loggées,
§ Non : Pas de log.
Chemin des log
Paramètres application / Paramètres application / Gérer les paramètres
Vérifier les chemins de dépôts des fichiers logs et transferts.
Paramètre "CHEMIN_LOG_ERREURS"
Valeur : exemple
§ /artis/interface/import/PROD/IKON_LOGS
Blocage pour l'import des relevés
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "IMPORT_RELEVES_ANOMALIE"
Valeur :
§ Oui : Bloque également les anomalies de compteurs non bloquantes,
§ Non : Pas de blocage.
Traitement des fichiers
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "IMPORT_RELEVES_FICHIER_PAR_FICHIER"
Valeur :
§ Cochée : L'importer des relevés se fait fichier par fichier. Un log sera envoyé par fichier,
§ Non cochée : Tous les fichiers sont traités ensembles. Un seul log est fait.
Paramétrer les Alertes et les contrôles des relevés entrants
PARAMÉTRER LES ALERTES ET LES CONTRÔLES DES
RELEVÉS ENTRANTS
Message des anomalies bloquantes ou non bloquantes
En saisie de relevé dans une session normale ARTIS.net, dans l'application PDA, dans le portail,
ou en traitement d'import des relevés, les positions compteur sont contrôlés, consulter Paramétrer
les contrôles pour le paramétrage.
Ces contrôles sont effectués de la même manière dans tous les écrans de saisie de relevé
compteurs :
o Gestion des DIT, lien "Relevés bien",
o Gestion des CRIT, en chaînage et par le lien "Relevés bien",
o Saisir un relevé compteur, lien direct dans le menu "Biens et configurations",
o Gestion des commandes de consommables, lien "Relevés bien",
o Gestion des biens, lien "Grandeur'),
o Import des relevés compteurs.
Voici la liste des messages d'anomalie de contrôle de relevés :
§ "L'origine du dernier relevé est non contrôlée",
§ "L'origine relevé contrôlée",
§ "La valeur saisie ne peut être négative",
§ "La date de saisie est antérieure à celle du dernier relevé",
§ "La valeur saisie ( %s ) est inférieure au dernier relevé ( %s )",
§ "la valeur saisie ( %s ) est supérieure à un relevé ultérieur ( %s )",
§ "La valeur saisie est équivalente au dernier relevé ( %s )",
§ "L'écart entre la valeur saisie ( %s ) et le dernier relevé ( %s ) ne peut être supérieur à
celui autorisé ( %s )",
§ "L'écart entre la valeur saisie ( %s ) et le dernier relevé ( %s ) est supérieur à la valeur
d'alerte ( %s )",
§ "L'écart entre la valeur saisie ( %s ) et l'estimation ( %s ) est supérieur au pourcentage
d'alerte ( %s )",
§ "La date de saisie ne peut être supérieure à la date du jour".
Paramétrage particulier de blocage pour l'import des relevés (module
spécifique, hors version)
Importer les relevés en anomalie
Paramètres application / Paramètres application / Gérer les paramètres
Un paramètre permet de bloquer également les anomalies de compteurs non bloquantes.
Paramètre "IMPORT_RELEVES_ANOMALIE"
Valeur :
§ Coché : Importe les relevés en anomalie non bloquante,
§ Non coché : Par défaut, pas d'import.
Paramétrer les contrôles
Cette table configure les blocages et les contrôles effectués sur les valeurs de valorisation de
grandeurs afin de pouvoir les personnaliser par organisation et traitement. Le paramétrage peut se
faire par organisation interne.
Paramètres application / Classifications, Listes et tables de décision / Gérer les tables de
décisions
Modifier la table de décision ‘TD_PARAM_CONTROLE_VALORISATION'.
Les traitements disponibles sont :
§ ARTIS : Saisie dans ARTIS.net (session normale),
§ IMPORT : Import des relevés compteur,
§ PDA,
§ PORTAIL.
Les paramètres possibles sont :
§ Valeur pourcentage : Le pourcentage d'écart pour le contrôle du pourcentage (ex :
25%)
§ Valeur écart alerte : La valeur d'alerte pour le contrôle d'alerte (ex : 50 000)
§ Valeur écart maximum : La valeur maximum pour le contrôle d'écart maximum (ex: 500
000)
§ Valeur négative : La valeur saisie est-elle négative ?
§ La date de relevé : La date de relevé est-elle inférieure au dernier relevé ?
§ Contrôle valeur inf. au dernier relevé : La valeur saisie est-elle inférieure au dernier
relevé ?
§ Contrôle doublon de relevé : La valeur saisie existe-t-elle déjà (même valeur et même
