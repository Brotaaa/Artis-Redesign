# Généralités et Théorie

> Categorie: Biens et Configurations | Pages 131-150

## Sous-rubriques
- Estimation du temps de trajet (p.131)
- Biens et Configurations (p.131)
- Cycles de vie d'un Bien : Statuts (p.133)
-   Statut pour les biens "En parc client" (p.135)
-   Statut pour les biens "En stock" (p.137)
-   Statut pour les biens "En prêt courte durée" (p.140)
-   Statut pour les biens "En immobilisation" (p.141)
-   Combinaison des statuts à partir du Statut commercial (p.141)
- Méthode de calcul des Estimation et VMM (p.142)
- Ventiler les grandeurs Noir / Couleur (p.147)

Ils sont également visibles lors de l'affectation d'un technicien à une IT (en session Artis.net).
Services / Demandes de prestation / Ajouter une demande
1. Rechercher le client et le site
2. Dans le carré de carrés

3. sélectionner "Calendrier site"
Suivre la procédure décrite dans Saisir les horaires d'ouverture d'un site ou d'un client
Estimation du temps de trajet
ESTIMATION DU TEMPS DE TRAJET
Cette option permet de calculer la durée de travail effectif d'un intervenant en estimant les temps de
trajet par une estimation à partir d'un site web tel que ViaMichelin, Googlemaps, Mappy, etc).
Pour calculer le trajet, ARTIS s'appuie sur les coordonnées GPS du site du client, de l'agence et du
lieu d'habitation de l'intervenant.
Un temps de courtoisie permet d'augmenter le temps de trajet (par ex, 10 minutes) et ainsi  justifier
les temps «perdus» (recherche du bien chez le client, recherche de la personne à contacter, temps
pour garer la voiture, accès sécurisés du client, saisie du CRIT, etc)
Une durée de temps personnel par exemple de 25 minutes couvre le trajet Aller (domicilie à  début de
travail) et le trajet Retour (fin de travail à  domicile). Ce temps est  imputable à  l'intervenant comme
pour tout autre collaborateur venant travailler au bureau.
L'estimation du Trajet Aller du matin commence dès que l'intervenant clique sur ‘Début de journée' et
s'arrête lorsqu'il ‘Débute' son intervention.
ARTIS prend en compte dans son estimation, la distance via le site Web, déduit le temps personnel
et ajoute le temps de courtoisie.
Biens et Configurations
Généralités et Théorie
LES BIENS
Définition d'un Bien
Un Bien est une "chose identifiable" généralement utilisée chez un Client, ayant en principe un
propriétaire, mais qui n'est pas nécessairement connu, et sur laquelle l'entreprise effectue ou
pourrait effectuer des prestations de services.
Exemple : un photocopieur en maintenance par l'entreprise.
Le concept de Bien est plus général que le concept de Machine. Il recouvre aussi bien un élément
physique identifié (une machine d'un modèle et d'un numéro de série connus, par exemple) qu'un
ensemble d'éléments que l'on ne connaît pas individuellement.
Exemple : l'ensemble des machines d'un certain type utilisé par le Client (son "parc", son parc de
micros, son parc de matériels d'impression), la connectique de ses machines ou son réseau.
Un Bien peut être élémentaire (une machine, un accessoire, une connectique) ou composé (un
parc, une configuration de machine).
Type de bien
Un Type de bien caractérise l'appartenance d'un Bien suivant une classification du métier en
séparant la notion de Bien matériel et de Bien logiciel.
Un Type de bien peut, par exemple, permettre de caractériser plus rapidement un Appel.
Un bien peut-être :
o Versionné ou non,
o Périssable ou non, et dans l'affirmative sa date limite de vente,
o Maître ou esclave,
§ Dans le premier cas, le système donne la liste des biens "esclaves".
§ Dans le second cas, le système donne le bien "maître".
o Générique ou spécifique,
o Logiciel ou non, et dans l'affirmative sa gamme d'appartenance
o Matériel ou immatériel,
Dans le premier cas, il est nécessaire de préciser si c'est un bien à grandeurs (compteurs)
ou non, et dans l'affirmative :
§ le nombre de grandeurs (compteurs),
§ leur nom,
§ l'unité dans laquelle sont valorisées les grandeurs,
§ leur type (physique ou calculée)
§ éventuellement, la formule de calcul définissant la grandeur calculée à partir des
grandeurs techniques,
§ les grandeurs facturées,
§ le système propose la possibilité d'accéder au VMM et à l'historique des grandeurs
(compteurs).
o Immatriculé ou non,
o Connecté ou non
Grandeur
Une Grandeur est un paramètre quantitatif affecté à un bien (par exemple, un compteur sur un bien
matériel). Cette grandeur peut être mesurable (représentant un compteur technique, par exemple)
ou calculée (compteur virtuel résultant d'un calcul à partir de compteurs techniques, par exemple).
Immatriculation
Immatriculation client
Une immatriculation client est l'identifiant unique d'un bien, généré et géré par le client, permettant
de repérer le bien dans son parc.
Elle n'est pas obligatoire.
Immatriculation fabricant
c'est le Numéro de série.
Elle est obligatoire et identique au numéro gravé sur le bien.
Immatriculation prestataire
Une immatriculation prestataire est l'identifiant unique d'un bien, généré et géré par le prestataire,
permettant de repérer le bien dans son parc.
Elle n'est pas obligatoire.
Logiciel
Un Logiciel est un Type de produit tangible (correspondant à des boîtes) qui décrit les
caractéristiques techniques d'un produit logiciel sur étagère (celui dont le support est contenu dans
la boîte).
Modèle
Un Modèle est un Type de produit tangible qui décrit les caractéristiques techniques de matériels
proposés par un même fabricant et de fabrication absolument identique.
Un Modèle recouvre tout ou partie des fonctionnalités de la Gamme marketing à laquelle il
appartient.
Un Modèle est spécifique à un fabricant. Il figure la "matrice génitrice" des unités disponibles sur le
marché. Un Modèle se répare, contrairement à un Type de composant, de disquettes, un lecteur
et un graveur de CD-ROM.
Parc
La notion de biens en parc englobe :
o Les biens neufs issus des livraisons fournisseurs
o Les biens d'occasion issus des reprises lors du renouvellement de matériels chez un client
o Les biens vendus à client
o Les biens loués à un client
o Les biens prêtés
o Les biens entretenus pour le compte d'un confrère ou d'un constructeur
Cycles de vie d'un Bien : Statuts
LES CYCLES DE VIE D'UN BIEN : STATUTS
La complexité de ce concept et le besoin de lecture, suivant des approches différentes, a nécessité
de qualifier les cycles de vie d'un bien au travers de cinq cycles  différents.
Ces cycles de vie représentent une lecture selon une vue :
o Commerciale
o Financement
o Juridique
o Logistique
o Solution de service.
5 STATUTS
Statut Commercial Statut Logistique Statut Juridique Statut Financement Statut Solution de Services
• Possédé par le prestataire
à destination du parc client
• Possédé par le prestataire
et loué à un client
• Possédé par le prestataire
à destination du parc broker
• Loué par le prestataire et
loué à un client
• Non possédé par le
prestataire à destination du
parc client
• Vendu à un client
• Vendu à un confrère
• Vendu à un broker
• Détruit
• Neuf
• Occasion en triage
• Emmagasiné
• En préparation
• Préparé
• Livré
- livré chez le client
- livré en prêt interne
- livré en prêt client courte
durée
- livré en prêt client longue
durée
• Livré chez le confrère
• Installé
- installé chez le client
- installé en prêt interne
- installé en prêt client
courte durée
- installé en prêt client
longue durée
• En reconditionnement
• Reconditionné
• A été reconditionné
• Remis en état
• Enlevé par le broker
• Retourné confrère
• Retourné fournisseur
• Détruit
• Neuf
• Occasion
• Détruit
- physiquement
- démantelé
• Autofinancé
- par trésorerie
- par emprunt bancaire
- par un leaser
• Location adossée
• Location pure
• Location avec mandat de
gestion
• Détruit
• Non couvert
• Couvert par les conditions
de garantie constructeur
• Couvert par solution de
services
- couvert par et à la charge
du prestataire
- entretenu par le confrère
en lieu et place du
prestataire
- entretenu par le
prestataire en lieu et place
du constructeur ou du
confrère
• Désactivé
Consulter :
Statut pour les biens "En parc client"
Statut pour les biens "En stock"
Statut pour les biens "En prêt courte durée"
Statut pour les biens "En immobilisation"
Combinaison des status à partir du Statut commercial
Statut pour les biens "En parc client"
STATUT POUR LES BIENS "EN PARC CLIENT"
Statut commercial
o Détruit
Le bien est détruit sans être supprimé de la base, ce qui permet un suivi légal.
o Loué par le prestataire et en cours d'achat
Le prestataire est propriétaire du bien qui est en cours d'achat pour le  louer à  un de ses
clients qui en fera l'usage.
o Loué par le prestataire et loué à un client
Le prestataire est propriétaire du bien qu'il loue à un de ses clients qui en fait l'usage.
(Nom d'usage : Location pure.)
o Non possédé par le prestataire
Le prestataire finance un bien auprès d'un leaser. Le leaser est le propriétaire du bien et le
client en fait l'usage.
(Nom d'usage : Location adossée.)
o Possédé par le client et repris à l'entretien
o Possédé par le prestataire et loué à un client
Le prestataire finance un bien auprès d'un leaser  et  le  loue  au  client.  Le  leaser  est  le
propriétaire du bien et le client en fait l'usage.
(Nom d'usage : Location adossée.)
o Possédé par le prestataire à usage interne
o Transfert de client à client
o Vendu à un brooker
Le broker devient propriétaire de ce bien
o Vendu à un client
Le client devient propriétaire de ce bien.
o Vendu à un confrère
Le confrère devient propriétaire de ce bien
Statut logistique
o Installé.chez le client
Le bien est installé chez un client.
En termes de processus, la SSC doit être validé à l'issue de cet état.
o Installé.en prêt client longue durée
Le bien est installé chez le client dans le cadre d'un prêt pour une longue durée.
En  termes  de  processus,  cet  état  initialise  une  Solution  de  service  client  incluant  la
perception d'un loyer (gratuit ou valorisé).
o Livré.chez le client
Le bien est en cours de livraison chez un client.
o Livré.en prêt client longue durée
Le bien est en cours d'installation chez le client dans le  cadre d'un prêt pour une longue
durée.
Statut Juridique
o Neuf
Le bien provenant du fournisseur-fabricant est neuf.
o Néant
o Occasion
Le bien est d'occasion, par opposition à neuf, dès qu'il a fait l'objet au moins une fois d'une
vente
Statut financement
o Financement client.non identifié
Le bien appartient au client et il le finance intégralement de façon autonome
o Financement client.par emprunt bancaire
Le client finance son bien par un emprunt via un organisme bancaire indépendamment du
prestataire
o Financement client.par trésorerie
Le client finance son bien par sa trésorerie propre
o Financement client.par un leaser
Le client finance son bien par l'intermédiaire d'un leaser indépendamment du prestataire
o Location adossée
Le bien appartient au leaser mais le prestataire assure seul le risque de non-paiement des
loyers.
Le client loue le bien au prestataire et ce dernier prélève des loyers au client.  Les loyers
sont gérés par une Solution de services client.
Le prestataire loue le bien au leaser et ce dernier prélève des loyers au prestataire.
o Location avec mandat de gestion
Le bien appartient au leaser qui assure seul le risque de non-paiement des loyers.
Le client loue le bien au leaser. Néanmoins, le  leaser prélève des loyers au prestataire -
jouant le rôle d'intermédiaire- et ce dernier prélève au client ces mêmes loyers.
Ces loyers sont gérés par une Solution de services client.
o Location interne
o Location pure
Le bien appartient au prestataire. Le client  loue ce  bien au prestataire. Les  loyers  sont
gérés par une Solution de services client.
o Néant
Statut SSC
o Couvert par les conditions de garantie constructeur
Le bien est couvert :
par la garantie de base constructeur,
par une extension de garantie,
par un pack constructeur,
par un mixte des trois fonctions des constructeurs.
o Couvert par SSC
Ce bien est entretenu par le prestataire dans le cadre d'une Solution de services client.
Couvert par et à la charge du prestataire
Entretenu par le confrère en lieu et place du prestataire
Entretenu par le prestataire
En lieu et place du constructeur
En lieu et place du confrère
o Désactivé
L'historique du bien est conservé. Si ce bien est cédé par le client à un autre client tiers, ce
dernier peut contacter le prestataire afin de demander une reprise de maintenance sur ce
bien, le bien est alors "réactivé".
o Non couvert
Ce bien n'est pas couvert par une Solution de services client. Toute intervention déclenche
donc une facturation.
Statut pour les biens "En stock"
STATUT POUR LES BIENS "EN STOCK"
Statut commercial
o Non possédé par le prestataire
Le bien est entretenu en lieu et place d'un confrère ou d'un fournisseur
o Possédé par le prestataire à destination du parc broker
Le bien est libre à la vente commerciale mais affecté aux ventes "broker", par opposition à
la vente à un client.
o Possédé par le prestataire à destination du parc client.libre
Le bien, commandé au fournisseur ou pris sur le stock,  est libre à la vente commerciale à
un client, par opposition à un broker.
o Possédé par le prestataire à destination du parc client.pré-réservé
La commande fournisseur de ce bien est directement liée à la commande client. Il est donc
prioritairement affecté dès réception de la livraison fournisseur.
Ce lien peut être rompu à tout moment si la commande client est annulée ou suite à un
ordre logistique.
o Possédé par le prestataire à destination du parc client.réservé
La commande fournisseur de ce bien n'est pas liée à la commande client. La réservation se
gère au moment de la préparation de la machine.
Statut logistique
o A détruire
Le  bien  est  à  détruire physiquement  en  intégralité.  La  trace  de  cette  destruction  est
conservée à des fins de justification légale.
o A retourner au confrère
Le bien pris en maintenance chez le prestataire en lieu et place du confrère est repris par le
confrère ou le fournisseur
o A retourner au confrère fin de SSC
Le bien pris en maintenance chez le prestataire en lieu et place du confrère et arrivant en
fin de Solution de services client est repris par le confrère.
o A retourner au constructeur
Le bien pris en maintenance chez le prestataire en lieu et  place du confrère est  repris le
fournisseur
o A retourner au constructeur fin de SSC
Le bien en maintenance et  arrivant en fin de Solution de services client  est  repris par le
fournisseur
o Emmagasiné
Le bien est disponible physiquement en magasin.
o En préparation
Ce bien nécessite une préparation de contrôle avant la livraison au client.
o En reconditionnement
Ce  bien  nécessite  un  reconditionnement  (par  exemple,  un  changement  de  pièces
défectueuses) avant d'être disponible commercialement.
o Enlevé par le brooker
Le broker vient emmener les biens qui lui ont été affectés.
o Livré chez le confrère
o Neuf
o Occasion en triage
Quelle que soit sa provenance, le bien enregistré est mis immédiatement en attente ("gare
de triage") avant qu'un logisticien ne décide de son sort.
Dans le cas d'un retour par FR, le bien ne peut passer à un autre état qu'à la condition que
la cellule SSC ait saisi dans la SSC client le retour du bien à l'aide de la FR (Responsable
de  cette  tâche  ?  =  module  logistique  :  passage  de  l'état  "Occasion  triage"  à
"emmagasiné").
o Préparé
La préparation de ce bien est close.
En terme de processus, le  passage à  l'état suivant doit déclencher la  préparation de  la
livraison par un OL.
Cet OL doit engendrer le BL client, la FR et la FI.
o Reconditionné
Le reconditionnement de ce bien est clos.
o Remis en état
Le bien est remis en état suite à un prêt client de courte durée.
o Retour constructeur-matériel défectueux
Le bien neuf n'est pas en état de fonctionnement (défaut de référence, pièces abîmées, ...).
Il est donc retourné au fournisseur/constructeur pour remplacement.
o Retourné confrère
Le  bien  neuf  n'est  pas  conforme au  bon  de  commande  (défaut de  référence, pièces
abîmées, ...). Il est donc retourné au confrère pour remplacement.
o Retourné confrère fin de SSC
o Retourné fournisseur
Le  bien  neuf  n'est  pas  conforme au  bon  de  commande  (défaut de  référence, pièces
abîmées, ...). Il est donc retourné au fournisseur pour remplacement.
o Retourné fournisseur fin de SSC
Statut Juridique
o Neuf
o Néant
o Occasion
Statut Financement
o Néant
Statut SSC
Se met à jour avec la création du contrat
Statut pour les biens "En prêt courte durée"
STATUT POUR LES BIENS "EN PRÊT COURTE DURÉE"
Statut Commercial
o Possédé par le prestataire et loué à un client
Statut Logistique
o Installé.en prêt client courte durée
Le bien est installé chez le client dans le cadre d'un prêt pour une courte durée.
Ce peut être, par exemple, dans le cadre d'un matériel nouvellement installé chez un client
et défectueux, ou encore en démo-vente.
C'est le processus de Gestion des prêts qui déclenche le passage de ce bien à cet état.
o Installé.en prêt interne
Le bien est installé dans le cadre d'un prêt à un service en interne.
Ce peut être par exemple dans le cadre d'un showroom.
C'est le processus de Gestion des prêts qui déclenche le passage de ce bien à cet état.
o Livré.en prêt client courte durée
Le bien est  en cours de livraison chez  le  client  dans le  cadre d'un prêt pour une courte
durée.
Ce peut être, par exemple, dans le cadre d'un matériel nouvellement installé chez un client
et défectueux, ou encore en démo-vente.
C'est le processus de Gestion des prêts qui déclenche le passage de ce bien à cet état.
o Livré.en prêt interne
Statut Juridique
o Neuf
o Néant
o Occasion
Statut Financier
o Néant
Statut SSC
Se met à jour avec la création du contrat
Statut pour les biens "En immobilisation"
STATUT POUR LES BIENS "EN IMMOBILISATION"
Lorsque le bien est installé en interne, il est indiqué dans la fiche en Immobilisation.
Cet  état  n'est  pas  un  état  statique  de  ce  cycle  de  vie. C'est  un  état  comptable  résultant  de
l'historique des états par lequel est passé le bien. En d'autres termes, il est nécessaire de garder
l'information comme quoi ce bien a transité au moins une fois par cet état.
Le bien entre en immobilisation dès qu'il est loué à un tiers ou s'il est passé en magasin et que le
dernier mouvement de sortie est "possédé par le prestataire et loué à un client". Le bien est alors
dans "possédé par le prestataire à destination du parc client" et n'apparaît pas dans les inventaires.
Le bien quitte les immobilisations s'il est vendu (à un confrère, un client  ou un broker) ou s'il  est
détruit.
Combinaison des statuts à partir du Statut commercial
COMBINAISON DES STATUTS À PARTIR DU STATUT
COMMERCIAL
Possédé par le Prestataire à Destination du Parc Broker
o Logistique : il est « emmagasiné »
o Financement : Néant
o Juridique : Occasion
o Solution Service : Non Couvert
Possédé par le Prestataire à Destination du Parc Client
Elle doit être Libre uniquement
o Logistique : il est « emmagasiné »
o Financement : On peut rectifier pour mettre autre chose que Néant
o Juridique : Il doit être modifiable
o Solution Service : Non Couvert
Possédé par le Prestataire et Loué à un Client
o Logistique : Installé en prêt client longue durée
o Financement : Il doit être modifiable
o Juridique : Il doit être modifiable
Il faut aussi pouvoir gérer le bouton Immo
o Solution Service : Non Couvert
Non Possédé par le Prestataire à Destination du Parc Client (Confrère ou
Constructeur)
o Logistique : Installé client
o Financement : Néant
o Juridique : Néant
o Solution Service : Non Couvert
Vendu à un client
o Logistique : Installé client
o Financement : Néant ou identifié
o Juridique : Néant
o Solution Service : Non couvert
Méthode de calcul des Estimation et VMM
MÉTHODE DE CALCUL DES ESTIMATION ET VMM
Origine de valorisation
Un relevé compteur a une origine : il s'agit d'un type de compteur. Les origines constituent une liste
système prédéfinie, non modifiable par l'utilisateur. Les origines des valorisations sont :
o Achat neuf,
o Achat occasion,
o Installation chez le client,
o Relevé client,
o Relevé prestataire,
o Estimation,
o Suspension,
o Résiliation,
o Reprise client,
o Fermeture SSC,
o Destruction,
o Vente broker,
o Vente confrère,
o Nouveau compteur,
o Pca par,
o Installation en prêt,
o Retour prêt.
Parmi toutes ces origines de relevés, ARTIS.net considère les compteurs réels d'après les origines
suivantes :
§ Relevé client,
§ Relevé prestataire,
§ Installation chez le client,
§ Installation en prêt,
§ Nouveau compteur,
§ Retour prêt.
C'est à partir de ces relevés réels que les caluls d'estimation sont faits.
Estimation
Si le dernier compteur réel a plus de 20 jours (consulter Nombre de jours d'écart entre 2 relevés),
ARTIS.net détermine une estimation d'après son propre calcul.
Le compteur estimé est calculé à partir du dernier compteur relevé auquel on ajoute la
consommation estimée pour la période allant du jour du dernier compteur réel au jour de calcul.
L'estimation des compteurs s'effectue suivant le VMM Statistique des grandeurs à la date
d'estimation.
Les relevés postérieurs à la date de calcul sont ignorés.
Pour ce calcul, il ne s'intéresse qu'aux relevés compteurs de la machine chez le client dont on
souhaite établir l'estimation. Car un VMM dépend du dernier client installé. Le point de départ du
calcul est un compteur de type :
o Soit "Installation chez le client",
o Soit "Installation en prêt",
o Soit "Nouveau compteur".
Estimation du compteur
Consommation estimée
Méthode de calcul
Base de calcul : les trois VMM
ARTIS distingue 3 types de volumes moyens mensuels VMM :
o VMM depuis la livraison
o VMM depuis 1 an
o VMM calculé à partir de 2 relevés réels.
Chacun des trois VMM calculés correspondent à une période précise de la grandeur chez le client.
ARTIS a donc besoin des relevés qui correspondent à chacune de ces périodes afin d'effectuer les
calculs de VMM.
Les relevés de référence permettant de calculer les différents VMM sont :
o Relevé d'installation
Il s'agit du dernier relevé de type installation de la grandeur chez le client.
o Dernier relevé réel
Il s'agit du dernier relevé réel connu, 20 jours après le relevé d'installation, consulter
Nombre de jours d'écart entre 2 relevés.
Ce relevé doit avoir une date antérieure ou égale à la date de calcul.
o Avant dernier relevé réel
Il s'agit du premier relevé réel connu 20 jours, avant le dernier relevé réel et postérieur
au relevé d'installation, consulter Nombre de jours d'écart entre 2 relevés.
o Relevé 1 an
Il s'agit du relevé antérieur au dernier relevé réel le plus proche de la date de calcul
moins un an. Il peut s'agir du relevé d'installation.
VMM depuis la livraison
Il s'agit du volume moyen mensuel calculé entre le compteur d'installation et  le  dernier relevé
réel connu.
Si  aucun relevé ne satisfait  pour le  dernier relevé réel  connu  ou  pour l'installation,  le  VMM
depuis la livraison sera égal à 0.
VMM depuis 1 an ou la livraison
Il s'agit du volume moyen mensuel calculé entre le relevé 1 an et le dernier relevé réel connu.
Si aucun relevé ne satisfait pour le relevé 1 an ou le dernier relevé réel connu, le VMM depuis la
livraison sera égal à 0.
Dans le cas d'une livraison de moins de 12 mois, le relevé 1 an sera le relevé d'installation.
Le VMM depuis 1 an ou livraison sera égal au VMM depuis la livraison.
VMM entre les 2 derniers relevés
Il s'agit du volume moyen mensuel calculé entre l'avant dernier relevé réel et  le  dernier relevé
réel.
Si aucun relevé ne satisfait  pour l'avant dernier relevé réel ou le  dernier relevé réel connu, le
VMM entre les deux derniers relevés sera égal à 0.
Une valeur négative n'est pas possible.
Si le nombre de copies a diminué entre les 2 relevés, le VMM sera égal à 0.
Le VMM calculé entre 2 relevés réels se fait selon la formule suivante :
VMM Statistique
Le VMM Statistique doit refléter le mieux possible l'utilisation de la grandeur chez le client puisqu'il
qui va servir de base de calcul pour les estimations.
Pour cela, le VMM statistique est obtenu à partir, dans l'ordre suivant :
1. Des trois VMM calculés,
2. Du VMT (Volume Moyen technique) du modèle,
3. Du VMS (Volume Moyen Société) défini dans les paramètres ARTIS.Net.
Cas général
ARTIS repère les deux VMM les plus proches. Exprimé autrement, ARTIS.net écarte celui qui
est le plus éloigné des deux autres. Puis il effectue une moyenne des deux retenus pour
devenir le VMM statistique.
Exemple :
· VMM depuis la livraison (01/01/2009) : 5500
· VMM entre 2 derniers relevés : 7000
· VMM depuis 1 an ou la livraison (01/07/2010) : 8000
Le 5500 est exclu. Le VMM Statistique retenu est la moyenne de 7000 et 8000 soit 7500.
1er cas : Pas de valeur extrême
Si l'écart entre le VMM calculé le plus important et celui intermédiaire est égal à l'écart entre le
VMM intermédiaire et le moins important, le VMM Statistique sera obtenu par moyenne des
trois VMM calculés.
Exemple :
· VMM depuis la livraison (01/01/2009) : 5000
· VMM entre 2 derniers relevés : 7000
· VMM depuis 1 an ou la livraison (01/07/2010) : 9000
Le VMM Statistique retenu est la moyenne de 5000, 7000 et 9000 soit 7000
2ème cas : 2 VMM calculés égaux à 0
Le VMM Statistique sera égal au seul VMM calculé différent de 0.
Exemple :
· VMM depuis la livraison (01/01/2009) : 500
· VMM entre 2 derniers relevés : 0
· VMM depuis 1 an ou la livraison (01/07/2010) : 0
Le VMM Statistique retenu est 500
3ème cas : un VMM calculé à 0 parmi les deux VMM les plus proches
Si  l'un  des  VMM  calculés  parmi  les  plus  proches  est  égal  à  0,  le  VMM  Statistique
correspondra au VMM différent de 0.
Exemple :
· VMM depuis la livraison (01/01/2009) : 1100
· VMM entre 2 derniers relevés : 0
· VMM depuis 1 an ou la livraison (01/07/2010) : 500
Les deux plus proches sont 0 et 500. Le VMM Statistique retenu est donc celui  différent
de 0 soit 500.
4ème cas : Tous les VMM calculés sont égaux à 0
S'il  existe  un relevé qui satisfait  au relevé de référence «dernier relevé réel» (+  20 jours),  le
VMM statistique sera égal à 0.
Sinon, le VMM Statistique sera égal au VMT du modèle (s'il est différent de 0) ou à défaut au
VMS.
Exemple 1 : le dernier relevé a plus de 20 jours par rapport au relevé de livraison :
· VMM depuis la livraison (01/01/2009) : 0
· VMM entre 2 derniers relevés : 0
· VMM depuis 1 an ou la livraison (01/07/2010) : 0
Le VMM Statistique retenu est donc 0.
Exemple 2 : le dernier relevé a moins de 20 jours par rapport au relevé de livraison :
· VMM depuis la livraison (01/01/2011) : 0
· VMM entre 2 derniers relevés : 0
· VMM depuis 1 an ou la livraison (01/01/2011) : 0
Le VMM Statistique retenu est donc le VMT ou à défaut, le VMS
Attention
Dans tous les cas, si le paramètre «CONSERVER_VMM_INF_1» est dévalidé et que la valeur
obtenue pour le ‘VMM Statistique' est inférieure à 1, ARTIS.net lui substituera la valeur du VMT du
modèle (s'il est différent de 0) ou, à défaut, celle du VMS, Consulter VMM inférieur à 1.
Cette action a pour but de forcer le déclenchement de la facturation pour les grandeurs qui ne
disposent pas d'un historique suffisant et donc d'inciter les clients à communiquer régulièrement
leurs relevés.
VMM Statistique des compteurs calculés
Pour les grandeurs calculées, le VMM Statistique est obtenu par application de la formule de calcul
aux VMM Statistiques des grandeurs qui la composent.
Sauf dans les états statistiques où pour des raisons de performance, le VMM statistique des
grandeurs calculées est obtenu comme pour les grandeurs calculées à partir de l'historique de la
grandeur.
Source
Il est possible de définir d'autres sources de relevés pour détailler les  origines des compteurs (cf
Annexe D).
PARAMÉTRAGE
Paramètres application
Nombre de jours d'écart entre 2 relevés
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "ECART_REL_EST"
Valeur : 20 par défaut. Il s'agit du nombre de jours maximum entre 2 relevés réels.
VMM inférieur à 1
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CONSERVER_VMM_INF_1"
Valeur :
Non cochée : si la valeur obtenue pour le VMM Statistique est inférieure à 1, ARTIS.net lui
substituera la valeur du VMT du modèle (s'il est différent de 0) ou, à défaut, celle du VMS.
Volume Moyen Société
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "VMS"
Valeur : Exemple : 1000,
Nombre de copies utilisé pour les estimations de compteur.
Volume Moyen Société non cumulable
Paramètres application / Paramètres application / Gérer les paramètres
Volume moyen société pour les grandeurs non cumulables.
Paramètre "VMS"
Valeur : Exemple : 1000,
Valeur utilisée pour les estimations de compteur.
Ventiler les grandeurs Noir / Couleur
VENTILER LES GRANDEUR EN EQUIVALENT PAGE A4
NOIR ET COULEUR
Biens  et  configurations /  Gérer  les  configurations de  grandeurs prédéfinies et  leurs  formules
associées'
Principe de base
Toutes les grandeurs (compteurs impressions, scans, etc.)  peuvent être exprimées en Équivalent
Page A4 noir et Équivalent Page A4 couleur.
Exemples
Exem ples Com pteurs
facturés
Configuration de
Grandeurs
Équivalent Page A4 Unité de ventilation
Exemple 1
A4 noir Compteur A4 N/B Page A4 noir  = Compteur A4 N/B
+ (Compteur A3 N/B x 2)
Équivalent Page A4 Noir
A3 noir Compteur A3 N/B
A4 couleur Compteur A4 couleur Page A4 = Compteur A4 couleur
+ (Compteur A3 couleur x 2)
Équivalent Page A4 Couleur
A3 couleur Compteur A3 couleur
Le principe consiste à indiquer à ARTIS comment calculer le Volume en Pages A4 et quels sont les
compteurs permettant de ventiler le Chiffre d'Affaires :
1er cas : Une seule grandeur comptabilise déjà toutes les pages A4
Utilisez cette grandeur pour calculer le Volume en Pages A4
Com pteurs facturés Configuration de
Grandeurs
Grandeur utilisée pour la
ventilation en Pages A4
Grandeur utilisée pour
la ventilation du C.A.
A4 noir Compteur A4 N/B Compteur A4 N/B Compteur A4 N/B
A4 couleur Compteur A4 couleur Compteur A4 couleur Compteur A4 couleur
2ème  cas  :  Une  seule  grandeur  comptabilise  déjà  toutes  les  pages  A4  mais  plusieurs
grandeurs servent à la facturation
Utilisez la grandeur pour calculer le Volume en Pages A4 et rattachez les autres pour le C.A.
Com pteurs facturés Configuration de
Grandeurs
Grandeur utilisée pour la
ventilation en Pages A4
Grandeur utilisée pour
la ventilation du C.A.
A4 noir Compteur A4 N/B Compteur A4 N/B Compteur A4 N/B
Compteur A3 N/B
A3 noir Compteur A3 N/B
Si aucune grandeur ne donne directement le compteur de Pages A4, il faut créer une formule pour le
calculer.
Créez une formule qui déduit le A3 du totalisateur pour trouver le A4.
Com pteurs facturés Configuration de
Grandeurs
Grandeur utilisée pour la
ventilation en Pages A4
Grandeur utilisée pour
la ventilation du C.A.
A3 couleur Compteur A3 couleur
Totalisateur (A4 + A3) Totalisateur (A4 + A3)
Formule :
Compteur Pages A4
couleur
Compteur Pages A4 couleur =
Totalisateur – A3 couleur
A3 couleur
Totalisateur (A4 + A3)
Mise à jour des configurations de grandeurs
Nous conseillons de confier cette tâche à un collaborateur maîtrisant parfaitement les configurations de grandeurs et
leur impact sur les traitements ARTIS, notamment sur la facturation des Solutions de service.
Paramétrer une configuration de grandeurs :
Sélectionner une grandeur comme sur l'exemple ci-dessous
Associer une grandeur prédéfinie (exemple, Compteur noir) avec une équivalence Page A4.
1er cas: le compteur prédéfini existe pour calculer une équivalence Page A4
Æ Cliquer sur le compteur prédéfini qui servira à calculer le volume en pages A4  et  le  rattacher
avec le lien ‘Saisie des ventilations en page A4'.
Cocher la grandeur et choisir le type ‘A4N – A4 noir' ou ‘A4C – A4 Coul'.
Un tableau avec le compteur noir ventilé pour le volume en pages A4 noir est créé.
2ème cas: le compteur prédéfini n'existe pas pour calculer une équivalence Page A4
Æ Créer un nouveau compteur calculé prédéfini qui servira à calculer le volume en page A4
Æ Définir la formule de calcul sur la nouvelle grandeur calculée créée par le lien ‘Nouvelle'
Æ Sélectionner le nouveau compteur calculé pour le volume en pages A4  et le rattacher avec le
lien ‘Saisie des ventilations en page A4'
Æ Sélectionner les grandeurs déjà existantes (qui peuvent servir à la facturation) et les ventiler en
Noir ou en couleur.
Un tableau avec le nouveau compteur calculé pour le volume en pages A4 noir est créé.
Æ Cocher le nouveau compteur calculé pour le volume en pages A4 et mettre à jour tous les biens
utilisant cette configuration de grandeurs avec le lien ‘Ajouter la grandeur à tous les biens'
La grandeur s'ajoute  à  tous  les  biens  des  modèles  utilisant  cette  configuration de  grandeurs
prédéfinie.
Cliquez sur <F2> pour ajouter la grandeur à tous les biens cochés.
Confirmer la mise à jour des biens sélectionnés.
Le tableau des biens mis à jour s'affiche avec un drapeau vert
Si besoin, vérifier la formule saisie lors de l'ajout de cette nouvelle grandeur à tous les biens.
Exemple : le compteur ‘Équivalent Page A4 noir' correspond bien à la formule :
Compteur A4 N/B (75) + (2 x Compteur A3 N/B (12)) = 99
Mise à jour des articles
Tous les ‘Composants' (toners ou pièces) peuvent être classés  en ‘Noir',  en ‘Couleur'  ou les  deux
pour ventiler les  coûts  de revient en Équivalent Page  A4  noir  et  Équivalent Page  A4  couleur.  La
ventilation se fait par des cases à cocher.
Les cases à cocher sont accessibles sur tous les types d'articles mais elles n'ont aucun effet en dehors des
articles de type ‘composant'.
Cette ventilation des articles alimente quatre traitements :
§ L'Analyse de rentabilité
§ La durée de vie des articles
§ Le contrôle des stocks consommables chez le client
§ Le Portail clients
Appeler la fiche Article vendu et descendre en bas de page pour cocher la ventilation :
ü A4 Couleur
Æ Ventile tous les articles impactés par un tour de compteur ‘Couleur'
ü A4 Noir
Æ Ventile tous les articles impactés par un tour de compteur ‘Noir'
Certains articles ne se consomment que pour un usage de pages noires ou que pour un usage de pages
couleur.
Exemple 1 : un toner CYAN doit être coché en ‘Couleur' uniquement car lorsque l'utilisateur fait une
impression Couleur, seules les encres Couleur sont consommées :
Æ 100% des coûts de revient sur cet article iront en A4 couleur
Exemple 2 : un toner NOIR doit être coché en ‘Noir ‘ et en ‘Couleur' car lorsque l'utilisateur fait une
impression Noire, l'encre noire et les différentes encres Couleur peuvent être consommées :
Æ les coûts de revient sur cet article se ventileront au prorata des volumes ‘Noir' et
‘Couleur'
Exemple 3 : une pièce détachée telle qu'une Molette doit être coché en ‘Noir ‘ et en ‘Couleur' pour
qu'ARTIS ventile les coûts de revient au prorata des volumes ‘Noir' et ‘Couleur'
Si ces articles ne sont pas ventilés (aucune case cochée), alors, ils seront impactés par les deux
(noir et couleur).
Dans ce cas, ils seront ventilés pour le coût de revient au prorata des volumes de pages réalisés.
