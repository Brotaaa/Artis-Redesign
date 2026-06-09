# Particularités

> Categorie: Solutions de services | Pages 353-357

## Sous-rubriques
- Couverture limitée par un maximum copies (p.353)
-   Version ARTIS.bbx (p.354)
- Article de loyer intercalaire (p.354)
- Avoir sur SSC (p.355)
- Gestion des marchés (p.355)

32 AF Nombre Copies Facturées
33 AG Prix copie (Noir ou Couleur)
34 AH Montant facturé (Noir ou couleur)
35 AI Dernier CRIT
36 AJ Dernière commande de consommables
Remarque
Une SSC pour un copieur couleur, donc avec deux règles de facturation, aura deux lignes dans le
fichier d'extraction sous réserve que les deux compteurs soient facturés à la même date.
Particularités
Couverture limitée par un maximum copies
COUVERTURE DE SSC LIMITÉE PAR UN NOMBRE MAXIMUM
DE COPIES
Rappel du cas habituel
Le module de service client est en tacite reconduction.
Les couvertures (ou services) contenues dans ce modules suivent la même reconduction, à
condition que l'option "Reconduction" de chacune des couvertures soient cochées.
Si une couverture n'a pas cette reconduction cochée, la couverture s'arrête à sa propre date de fin.
Utilisation du nombre maximum de copies
Pour chaque compteur ouvert sur le bien, il est possible de saisir un nombre maximum de copies.
§ Il faut aller en visualisation du détail du compteur (de la grandeur)
§ Consulter la zone "Valeur maximale de fin de garantie", en haut de l'écran
Seules les couvertures qui ont une reconduction non cochée sont impactées par ce nombre
maximum de copies.
§ Il faut aller en visualisation du détail de la couverture (service)
§ Consulter la case à cocher "Reconduction", en haut à droite
Une telle couverture devient inactive lorsque au moins une des deux conditions suivantes
est vérifiée :
§ Soit la date de fin de la couverture est dépassée,
§ Soit le nombre maximum de copies d'un des compteurs du bien est dépassé
(ARTIS.net fait une estimation du compteur).
Rappel
la couverture inactive est symbolisée à l'écran par un drapeau rouge.
Version ARTIS.bbx
VERSION ARTIS.BBX
Dans ARTIS.bbx, cette fonctionnalité existe. Le fonctionnement est le suivant :
Les couvertures qui sont positionnées facturables dans la période hors garantie, le deviennent
lorsque au moins une des conditions suivantes est vérifiée :
o La date limite de fin de garantie (ou date de retour) de l'une des machines est dépassée,
o Le maximum copies fin de garantie global de l'une des machines est dépassé (ARTIS.net fait
la somme des compteurs estimés),
o Le maximum copies fin de garantie d'un des compteurs de l'une des machines est dépassé
(ARTIS.net fait une estimation du compteur).
Remarques
Lors d'une migration vers ARTIS.net, il faut vérifier le point suivant :
La somme des détails des compteurs est parfois différente du compteur maxi global de la fiche
machine.
Article de loyer intercalaire
UTILISATION DE L'ARTICLE DE LOYER INTERCALAIRE
Il est nécessaire au préalable de créer l'article intangible "Loyer intercalaire"
Le code de cet article doit être reporté dans le paramètre
"FACTURE_PRE_LOYER_CODE_ART_VENDU"
La première facturation utilise l'article « loyer intercalaire », indifféremment du montant, uniquement
si toutes les conditions suivantes sont satisfaites :
1. Si la RFC n'est pas apériodique
2. Et qu'il y a un bien dans cette RFC
3. Et que la RFC n'a jamais été facturée
4. Et que le bien est lié à un dossier de financement, dont la case « pré-échéance » est cochée
5. Et que l'article de la RFC est catégorisé « Loyer »
Avoir sur SSC
GÉRER LES AVOIRS SUR SSC
Avoir sur Forfait avec régularisation, factures séparées entre
Forfait et Régularisation
Solutions de service client / Solutions de service client / Gérer une solution de service client
1. Rechercher la SSC
2. Cliquer sur "Historiques des factures"
3. Afficher la facture du Forfait
4. Cliquer sur "Avoir SSC"
5. Sélectionner la RFC de type Forfait + Régularisation
6. <F2>
7. La RFC de la SSC revient à l'état avant la facturation : avant facturation du forfait et avant la
facturation de la régularisation
8. Pour ne pas facturer 2 fois la régularisation, il faut faire un avoir manuel de la facture de
régularisation
1. Cliquer sur "Historiques des factures"
2. Afficher la facture de la Régularisation
3. Cliquer sur "Avoir hors SSC"
Gestion des marchés
GESTION DES MARCHÉS
Objectif
La gestion des marchés dans ARTIS.net consiste :
o à référencer sous un numéro, l'ensemble des règles de facturation s'y rapportant,
o à facturer de manière groupée, ces mêmes règles de facturation (sous certaines conditions),
o à gérer le renouvellement des marchés arrivant à terme.
Description
Un marché regroupe une ou plusieurs règles de facturation. Il comprend les informations suivantes :
§ Client
§ Prestataire (organisation interne)
§ Code interne
§ Code externe
§ Libellé
§ Commentaires
§ Date début validité
§ Date fin validité
§ Règles de facturation associées
Une RFC peut être attachée à 2 marchés différents ayant des périodes qui ne chevauchent pas.
Il n'est pas possible d'attacher une RFC à 2 marchés qui ont des périodes qui se chevauchent.
Un marché est valable sur une période (date de début et fin).
Un marché public qui est renouvelé possède alors un nouveau numéro pour la nouvelle période.
Gestion des marchés
Création depuis une SSC
Le rattachement d'une règle de facturation à un marché peut se faire directement dans la
SSC, tableau des RFC (sur la droite).
Solution de service / solutions de service client / Gérer une solution de service client
1. Sélectionner la SSC,
2. <Crayon> de la barre verticale,
3. Dans le tableau des RFC (sur la droite),
4. <Loupe> pour rechercher un marché existant,
5. <+> pour créer un marché.
Création depuis le menu
Le rattachement d'une règle de facturation à un marché peut se faire depuis l'écran
spécifique au menu.
Solution de service / solutions de service client / Gérer les marchés
Facturation
Le marché est un critère de regroupement de règles de facturation, à condition que le client
a le mode "Factures regroupées" coché.
Explication :
Soit une SSC 1 ayant
· une RFC 1 inclue dans le Marché 1
· une RFC 2 inclue dans le Marché 2
Et une seconde SSC 2 ayant
· une RFC 3 inclue dans le Marché 1
· une RFC 4 inclue dans le Marché 2
Si le client a le mode "Factures regroupées" coché, 2 factures seront faites :
· Une pour le Marché 1 pour la RFC 1 et 3,
· Une autre pour le Marché 2 pour la RFC 2 et 4.
Si le client a le mode "Factures regroupées" NON coché, 4 factures seront faites :une pour
le Marché 1, une autre pour le Marché 2.
· Une pour le Marché 1 de la SSC 1,
· Une pour le Marché 2 de la SSC 1.
· Une pour le Marché 1 de la SSC 2,
· Une dernière pour le Marché 2 de la SSC 2.
Renouvellement d'un marché
Solution de service / solutions de service client / Gérer les marchés
1. Sélectionner le marché,
2. <Renouveler>,
3. Saisir le nouveau numéro de marché,
4. Saisir la nouvelle date de fin du marché.
Un nouveau marché sera alors créé avec les caractéristiques suivantes :
§ Client, prestataire du marché précédent
§ Numéro interne incrémenté
§ Numéro externe et dates de fin de validité vides
§ Date de début de validité = date de fin de validité de l'ancien marché + 1
§ Règles du nouveau marché = règles de l'ancien marché
Consultation historique
Liste l'historique des marchés (renouvellement) avec les RFC liées à ces marchés.
Statistiques / Extractions
Les numéros interne et externe sont disponibles en critère de recherche et en colonne de
résultat dans les extractions suivantes :
§ Consulter les SSC
§ Actualiser les augmentations
PARAMÉTRAGE
Règle de numérotation des affaires
Consulter Créer une règle de numérotation avec les informations ci-après.
Libellé : "Marché - Numéro Interne"
Code : "Marche_Num"
Classe : "Marche"
Attribut numéroté : "Code interne"
Type : "Unique par organisation"
Organisation : une organisation interne
