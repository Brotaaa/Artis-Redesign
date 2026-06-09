# Travaux quotidiens

> Categorie: Comptabilité | Pages 664-668

## Sous-rubriques
- Comptabilité (p.664)
- Générer les écritures comptables (p.664)
- Interfacer les écritures comptables (p.665)
- Editer un récapitulatif d'interface (p.666)
- Etablir la situation des ventes et des achats (p.666)
- Interroger les écritures comptables (p.667)
- Particularités (p.668)
-   Exclure des clients en génération des écritures (p.668)

6 F CodeTarifVte  Texte
7 G LibelleTarifVente  Texte
8 H Type  Texte Tarif de vente, Tarif d'achat
9 I EnVigueur  Texte
10 J Portée  Texte Tarif public, Tarif particulier, Tarif d'achat commercial
11 K RéfFournisseur  Texte
12 L PrixAchat  Monétaire
13 M Unite  Texte
14 N CodetarifAch  Texte
15 O LibelléTarifAch  Texte
16 P N1  Texte Code activité
17 Q Niveau1(A)  Texte
18 R N2  Texte Code famille
19 S Niveau2(F)  Texte
20 T N3  Texte Code sous-famille
21 U Niveau3(SF)  Texte
22 V ClassifArticle  Texte
23 W ArtVenduCrééLe  Instant
24 X ArtVenduMàjLe  Instant
25 Y ArtAchetéCrééLe  Instant
26 Z ArtAchetéMàjLe  Instant
27 AA ArtVenduCréateur  Texte
28 AB ArtVenduModificateur  Texte
29 AC ArtAchetéModificateur  Texte
Comptabilité
Travaux quotidiens
Générer les écritures comptables
GÉNÉRER LES ÉCRITURES COMPTABLES
Comptabilité / Travaux quotidiens / Générer les écritures comptables
Les Ventes
1. Cocher le bouton radio Vente,
2. Si besoin, cocher la case "Intégrer les factures enregistrées", (voir informations ci-dessous *),
3. Saisir les dates de début et les dates de fin,
4. Les numéros de factures sont facultatifs, toutefois il est conseillé de les saisir afin d'optimiser
le traitement,
5. Sélectionner aucun (= tous) ou quelques collaborateurs du tableau des collaborateurs,
6. <Disquette> ou <F2>.
Etat des documents
Au moment de la génération des factures via " Livraison " ou " Facture directe ", l'état du
document Facture est " Enregistré ".
Lors de l'édition du document Facture, l'état passe à " Envoyé au destinataire ".
* La génération des écritures comptables concerne les documents à l'état " Envoyé au
destinataire ".
Cependant, l'intégration est aussi possible pour toutes les factures en attente, à l'état "
Enregistré ".
Pour cela, cocher " Intégrer aussi les factures de ventes à l'état enregistré ".
Les Achats
Pour les achats, le traitement est identique.
1. Cocher le bouton radio Achats,
2. Sélectionner l'organisation interne.
3. Saisir les dates de début et les dates de fin,
4. Les numéros de factures sont facultatifs, toutefois il est conseillé de les saisir afin d'optimiser
le traitement,
5. <Disquette> ou <F2> ,
6. Le traitement se termine en affichant une pop up avec le nombre de factures traitées et le
nombre d'anomalies éventuelles,
7. S'il y  a des anomalies, les corriger puis relancer le traitement.
Interfacer les écritures comptables
INTERFACER LES ÉCRITURES

Comptabilité / Travaux quotidiens / Interfacer les écritures comptables
1. Sélectionner le type de journal,
2. Sélectionner le journal,
3. Saisir les dates pour le début et la fin,
4. <F2>,
5. Attention : En aucun cas annuler le traitement durant son déroulement.
Il est possible lors du lancement qu'un message d'erreur indique que « le chemin pour écrire le
fichier est introuvable », dans ce cas, vérifier le paramètre suivant :
Paramètre
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre ‘CHEMIN_INTERFACE_ECR'
Valeur : chemin physiquement existant pour y créer le fichier
Par défaut le fichier est crée dans le répertoire /u/bbx/compta/fichier/ du serveur.

Récapitulatif d'interface
Comptabilité / Travaux quotidiens / Editer un récapitulatif d'interface

1. Sélectionner le type de journal,
2. Sélectionner le journal,
3. Sélectionner le fichier d'interfaçage à partir duquel on veut créer le récapitulatif,
4. <F2>,
5. Exporter ce tableau au format désiré (Excel, PDF…).
Editer un récapitulatif d'interface
EDITER UN RECAPITULATIF D'INTERFACE
Comptabilité / Travaux quotidiens
Zone "Critère de sélection"
o Faire un choix de "Sélection des écritrues"
o Sélectionner "Récapitulatif..." simplifié ou détaillé
Zone "Type journal"
o Cocher une des cases proposées
Zone "Journaux comptables"
o Cocher la ligne restante en fonction du choix précédent
Zone "Choix fichier" (fonction du choix "Critère de sélection")
o Choisir le fichier, <Entrée > dans la zone
ou
o Saisir date de début et date de fin.
o Lancer le traitement < F2 > ou
Le détail des écritures s'affiche en bas de page.
Etablir la situation des ventes et des achats
ÉTABLIR LA SITUATION DES VENTES ET DES ACHATS
Comptabilité / Travaux quotidiens / Situation des ventes et des achats
Zone "Critères de situation"
o Sélectionner l'organisation interne à analyse
o Saisir une date d'arrêté, "date début" et "date de fin". (Exemple : la date de situation comptable
est à saisir en "date de fin")
o Cocher la case des documents à analyser, les types de pièce
o Lancer le traitement <F2> ou
 .
Le traitement se termine en affichant une pop up avec le nombre de factures traitées et le
nombre d'anomalies éventuelles.
o S'il y  a des anomalies, les corriger puis relancer le traitement.
Chaque ligne correspond à un reliquat : voir les colonnes Quantité et Total HT.
Les colonnes "Compte HT", "Compte TVA" et mode de financement vont permettre de saisir les
écritures FNP et FAE.
Résultat
Le tableau obtenu donne le cumul des lignes en attente de livraison (pour les ventes) ou de
réception (pour les achats).
Détail 1
Par le lien ‘Afficher situation comptable', vous obtenez le détail des lignes de livraisons concernées.
A l'aide de l'export sous Excel, vous pouvez reconstituer les totaux.
ATTENTION, le détail obtenu ne fait apparaître que les lignes issues de la chaîne des ventes (les
lignes issues des CRITs sont absentes).
Détails 2
Pour obtenir celles issues des rapports d'intervention, reportez-vous au menu :
‘Services / Réalisation//Consulter la situation comptable des interventions'. ' Consulter la situation
comptable des interventions  '
Il vous faut saisir la date d'arrêté (par exemple, la date de situation comptable) et éventuellement un
compte comptable de la situation à analyser.
Pour obtenir toutes les lignes, laissez le critère compte comptable vierge.
A l'aide de l'export sous Excel, vous pouvez reconstituer les totaux.
La somme des totaux Détails 1 et 2 correspond donc à la ventilation par compte.
Interroger les écritures comptables
INTERROGER LES ÉCRITURES COMPTABLES
Comptabilité / Travaux quotidiens / Interroger les écritures comptables
Cette option permet d'interroger toutes les écritures comptables générées dans ARTIS.net :
o Vérifier l'utilisation des comptes dans les pièces comptables,
o Vérifier la ventilation débit, crédit,
o Contrôler les écritures générées à une date donnée.
Position Position
lettrée Label de la colonne Form at Com m entaire
1 A CodeJourn  Texte
2 B DateEcr  Instant
3 C Code du compte  Texte
4 D Intitulé du compte  Texte
5 E Code du compte aux.  Texte
6 F Intitulé du compte aux.  Texte
7 G Numéro du compte TVA  Texte
8 H Intitulé du compte TVA  Texte
9 I NumInterne  Texte
10 J LibelléEcriture  Texte
11 K Sens  Texte
12 L Montant  Monétaire
13 M EtatTransac  Texte
14 N Journal  Texte
15 O DateEtatTrans  Instant
16 P EcrId  Monétaire
17 Q NumEcr  Texte
18 R Date génération écriture  Instant
Particularités
Exclure des clients en génération des écritures
EXCLURE DES CLIENTS EN GÉNÉRATION DES ÉCRITURES
Clients exclus des écritures
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "EX CLURE_CLI_GENERATION_FACT"
Valeur : Liste des codes clients à exclure de la génération des écritures comptables des factures.
Clients exclus des transactions
Paramètres application / Paramètres application / Gérer les paramètres
