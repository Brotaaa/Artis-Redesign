# Paramètres

> Categorie: Services | Pages 94-101

## Sous-rubriques
-   Paramètres (p.94)
- Gérer les domaines d'intervention (p.94)
- Gérer les secteurs d'intervention (p.95)
- Gérer les groupes de travail (p.96)
- Gérer les prestations prédéfinies (p.96)
- Gérer les types de demandes (p.98)
- Gérer les natures d'intervention et catégories non productives (p.98)
- Gérer les priorités d'intervention (p.100)
- Gérer les motifs d'état de la demande (p.101)
- Paramétrer le questionnaire de Satisfaction (p.101)

Il est mis dans le tableau du bas avec la quantité et le tarif prévu dans le devis (1x30.00 €)
Par défaut, pour tout article intangible, il n'est pas nécessaire de saisir la quantité
consommée

ATTENTION, pour conserver les quantités et les prix unitaires du devis, ne cliquez surtout pas sur
‘Calcul des couvertures'.
Si vous devez modifier l'état de facturation (couvert ou non facturable), le bouton ‘Calcul des
couvertures' permet de prendre en compte la modification. Par contre, les prix unitaires de base
sont récupérés.
Paramètres
PARAMÈTRES
Responsable à mettre sur les devis
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "DEVIS_RESPONSABLE"
Valeur : Nom du responsable affiché sur la fiche du devis.
Fax à mettre sur les devis
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "DEVIS_FAX "
Valeur : Numéro de fax auquel le client peut envoyer sa réponse ou demander des précisions.
Téléphone à mettre sur les devis
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "DEVIS_TEL"
Valeur : Numéro de téléphone affiché sur la fiche du devis.
Paramètres
Gérer les domaines d'intervention
GÉRER LES DOMAINES D'INTERVENTION
Les domaines d'intervention permettent de rattacher les techniciens par rapport à leurs domaines de
travail et leurs compétences, de définir des articles de prestations prédéfinis, de paramétrer les
causes, symptômes, pannes pour chaque domaine.
Les domaines d'intervention sont généraux, c'est à dire communs à toutes les organisations
internes. Il n'est pas possible de restreindre un domaine à une seule organisation. Il en est de
même pour les Symptômes, Causes, Actions, Unités
Par ailleurs, il est possible de classifier les modèles de machines par domaine d'intervention. Dans
ce cas, lors de la saisie d'un appel, la recherche d'un technicien prend en compte ce critère.
Exemple :
Domaine d'intervention
Impression
Informatique
Téléphonie
Formation
Etc...
Les Symptômes, Causes, Actions, Unités peuvent être :
Domaine
d'intervention Symptômes Causes Actions Unités
Impression
Qualité copies
Bourrage
Entretien
Électrique / électronique
Mécanique
Pb Accessoire
Pb Connexion
Etc...
01 Défaut de réglage
02 Qualité papier
03 Défaut mécanique
21 Casse
22 Erreur manipulation
31 Non déterminée
Etc...
01 Nettoyage
02 Réglage
03 Mise à jour soft / hard
04 Remplacement
21 Maintenance préventive
22 Info utilisateur
Etc...
01 Zone tambour
02 Zone départ papier
Etc...
Informatique
Pb démarrage Serveur/Poste
Pb connexion Internet
Pb impression
Pb virus
Pb sauvegarde
Pb Réseau
Etc...
01 Driver
02 Programmation
22 Erreur manipulation
31 Non déterminé
Etc…
01 Programmation
02 Paramétrage
03 Mise à jour soft
22 Info utilisateur
Etc...
01 Application
Etc...
Etc… … … … …
Gérer les secteurs d'intervention
GÉRER LES SECTEURS D'INTERVENTION
Dans le site de la fiche " Client ", le secteur d'intervention est obligatoire.
Un client est relié à un et un seul secteur.
Les secteurs d'intervention permettent de gérer les techniciens et leurs déplacements ainsi que
différentes statistiques.
Créer un secteur d'intervention
1. <+>,
2. Section "Secteur d'intervention",
3. Saisir le Code,
4. Saisir le libellé du secteur technique,
5. Section "Organisations internes",
6. Attacher l'organisation interne,
7. <Disquette> ou <F2>.
Secteur d'intervention mono organisation interne ou multi
organisations internes
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "PLUSIEURS_ORG_INT_PAR_SECTEUR_INTERVENTION"
Valeur :
§ Coché : A oui, un secteur d'intervention peut être partagé par plusieurs organisations
internes,
§ Non coché, Le secteur est uniquement pour une organisation interne.
Gérer les groupes de travail
GÉRER LES GROUPES DE TRAVAIL
Cet élément n'est pas indispensable pour ARTIS.net.
Néanmoins, il permet de déterminer l'ordre d'affichage des techniciens au planning.
Exemple :
Code Libellé
1-TER 1-Terrain
2-Hotline 2-Hotline
3-Atelier 3-Atelier
Gérer les prestations prédéfinies
PARAMÉTRER LES PRESTATIONS PRÉDÉFINIES
Les prestations prédéfinies permettent de lier les articles de main d'œuvre et trajet à un domaine
d'intervention. Ainsi, les coûts de revient et le C.A. sont ventilés en fonction du contrat (couverts ou
pas). Exemple, le CA et/ou les coûts de main d'œuvre connexion.
Services / Paramètres / Gérer les prestations prédéfinies
Sélectionner le domaine concerné.
Le tableau obtenu contient les colonnes suivantes :
o Info : une infobulle donne le créateur et le dernier modificateur de la ligne,
o Code de la prestation,
o Libellé de la prestation,
o Qté : quantité pour initialiser la qté dans le CRIT (exprimée en Heure / Minute),
o Position de la prestation dans le CRIT,
o Code de l'article correspondant à la prestation,
o Libellé de l'article correspondant à la prestation,
o Active : si la prestation est inactive, elle est conservée mais ne s'affiche plus dans le CRIT.
Les Prestations prédéfinies sont généralement paramétrées par Domaine d'intervention.
Avec les domaines d'intervention pris en exemple dans Gérer les domaines d'intervention, les
prestations peuvent être :
Domaine d'intervention Code prestation Prestation dans les CRIT Code article Article associé Ordre de saisie
Formation
PODA Déplacement (Aller) PIT001 Déplacement 1
POFO Formation PIT007 Formation 2
PODR Déplacement (Retour) PIT001 Déplacement 4
Impression
PIDA Déplacement (Aller) PIT001 Déplacement 1
PILV Livraison Impression PIT002 Prestation Livraison 2
PIMO Main d'oeuvre Impression PIT003 Prestation Impression 3
PICX Main d'oeuvre Connexion PIT004 Prestation Connexion 4
PIHL Prestation Hot line PIT005 Prestation Hot Line 5
PIAT Main d'oeuvre atelier PIT006 Prestation Atelier 6
PIFO Formation PIT007 Formation 7
PIDR Déplacement (Retour) PIT001 Déplacement 9
Informatique
PFDA Déplacement (Aller) PIT001 Déplacement 1
PFMO Main d'oeuvre Informatique PIT012 Prestation Informatique 2
PFHL Prestation Hot line PIT013 Prestation Hot Line Informatique 3
PFAT Main d'oeuvre atelier PIT014 Prestation Atelier Informatique 4
PFFO Formation PIT015 Formation Informatique 5
PFDR Déplacement (Retour) PIT001 Déplacement 7
Téléphonie
PTDA Déplacement (Aller) PIT001 Déplacement 1
PTMO Main d'oeuvre Téléphonie PIT008 Prestation Téléphonie 2
PTHL Prestation Hot line PIT009 Prestation Hot Line Téléphonie 3
PTAT Main d'oeuvre atelier PIT010 Prestation Atelier Téléphonie 4
PTFO Formation PIT011 Formation Téléphonie 5
PTDR Déplacement (Retour) PIT001 Déplacement 6
Etc...

Gérer les types de demandes
GÉRER LES TYPES DE DEMANDES
Cette option permet d'enregistrer l'origine de la DIT. Les types les plus courants sont :
Code Libellé
10 Sollicitation client
15 RAPPEL client < 72 heures
20 Sollicitation interne
30 Contractuelle
40 Maintenance Préventive
Des types de demandes ont été créés à l'issu du référentiel de paramétrage.
Il est possible par la suite d'ajouter de nouveaux Types de demandes:
CREER DES TYPES DE DEMANDES
Ajouter par
o Saisir un code (vérifier qu'il n'existe pas déjà)
o Saisir un libellé
o Valider par
Le type de demande est disponible pour la saisie des DITs.
Gérer les natures d'intervention et catégories non productives
GÉRER LES NATURES D'INTERVENTION ET CATÉGORIES
NON PRODUCTIVES
Dans cette requête, sont gérées les natures de DIT et les catégories des temps non productifs.
A chaque ligne, il est possible d'associer une couleur visible sur le planning.
Une ligne peut être désactiver, interdisant ainsi son utilisation dans les futures saisies.
Pour les temps non productifs, il est possible de déclarer un temps de trajet (par ligne).
Pour avoir accès aux lignes des tableaux,
Modifier par
GERER LES NATURES
Modifier
Gérer les couleurs pour le planning
Rendre Actif ou Non Actif
Les lignes sont disponibles à la modification
o Code & Libellé : modifier dans les lignes du tableau
o Couleur : utiliser le combobox et sélectionner une couleur
o Actif : coché pour Actif ou décoché pour Non Actif.
o Valider par
  ou F2
Créer
o Créer une nature par
o Saisir un Code
o Saisir un Libellé
o Choisir une Couleur
o Valider par
  ou F2
GERER LES CATEGORIES
Modifier
Gérer les couleurs pour le planning
Rendre Actif ou Non Actif
Indiquer du trajet automatiquement
Les lignes sont disponibles à la modification
o Code & Libellé : modifier dans les lignes du tableau
o Couleur : utiliser le combobox et sélectionner une couleur
o Actif : coché pour Actif ou décoché pour Non Actif.
o Trajet : coché si temps de trajet à prendre en compte
o Valider par
  ou F2
Créer
o Créer une nature par
o Saisir un Code
o Saisir un Libellé
o Choisir une Couleur
o Actif : coché pour Actif ou décoché pour Non Actif.
o Trajet : coché si temps de trajet à prendre en compte
o Valider par
  ou F2
Gérer les priorités d'intervention
GÉRER LES PRIORITÉS D'INTERVENTION
Les priorités par défaut sont celles ci-dessous. Dans le planning, les DIT sont classées en premier
tri par ordre croissant de la priorité d'intervention. Une DIT en priorité "00" sera avant une priorité
"01" qu'elle que soit sa date limite d'intervention.
Code Libellé
01 01 - Standard
00 00 - Urgent
Conseil :
Les fait d'utiliser deux à trois priorités maximum permet d'optimiser l'utilisation de cette
liste.
Avec plus de priorités, le risque est de noyer le service dispatch et de ne plus avoir accès aux
priorités réelles.
Gérer les motifs d'état de la demande
GÉRER LES MOTIFS D'ÉTAT DE LA DEMANDE
Cette option permet de qualifier la DIT lorsqu'elle est passée en "TNT" (travail non terminée).
Les valeurs par défaut sont :
Code Libellé
10 Attente Info Client
20 Manque Compétence
30 Rupture Stock
40 Demande Client
Des types de demandes ont été créés à l'issu du référentiel de paramétrage.
Il est possible par la suite d'ajouter de nouveaux Types de demandes:
CREER DES MOTIFS D'ETAT DE DEMANDES
Ajouter par
o Saisir un code (vérifier qu'il n'existe pas déjà)
o Saisir un libellé
o Valider par
Le motif de la demande est disponible pour la saisie des DITs.
Paramétrer le questionnaire de Satisfaction
PARAMÉTRER LE QUESTIONNAIRE DE SATISFACTION
Il est possible de définir une enquête de Satisfaction pour stocker les appréciations des clients.
Cette enquête est disponible à la saisie des CRITs sur ARTIS.net et sur les PDA des intervenants.
Services / Paramètres / Paramétrer le questionnaire de Satisfaction
o
o Créer par
 ,
