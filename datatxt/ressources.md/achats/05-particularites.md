# Particularités

> Categorie: Achats | Pages 509-512

## Sous-rubriques
- Réapprovisionnement Konica (p.509)
-   Mode Opératoire (p.510)
-   Statistiques (p.511)
-   Cas particulier (p.512)
-   Paramètres (p.512)

Statut de la facture
En plus de l'état, la facture a un statut indiquant l'état du contrôle effectué sur son contenu. Ce
statut peut prendre trois valeurs :
§ "Litige" : cas d'une facture en anomalie,
§ "Bon à payer" : pas d'anomalie,
§ "Bon à payer (suite à litige)" : anomalie corrigée après passage en comptabilité.
Aucun paramétrage n'est à faire, ces statuts sont disponibles d'office lors de l'activation du module.
Particularités
Réapprovisionnement Konica
RÉAPPROVISIONNEMENT KONICA
Objectif
Dans le parc :
o Des machines sont en sous-traitance (Ces machines ont été vendues par Konica-Minolta, mais
ce dernier ne fait pas la maintenance. C'est le prestataire qui effectue la maintenance).
o Des machines en maintenance directe (cas normal d'une vente par le prestataire suivi d'un
contrat d'entretien. C'est le prestataire qui effectue lui-même la maintenance).
Les pièces Konica-Minolta sont consommées par les interventions (présence de celle-ci sur le
compte-rendu d'intervention). Deux cas se présentant :
1. Pour des machines en sous-traitance (Konica-Minolta ne facture pas le prestataire)
§ Pour les pièces gérées en stock et consommées :
· Faire une commande fournisseur pour le CRIT,
· Réapprovisionner le dépôt d'origine de la pièce (soit le dépôt central, soit le
dépôt du technicien),
§ Pour les pièces non gérées en stock (atypiques) et demandées :
· Faire une commande fournisseur pour le CRIT,
· Réapprovisionner le dépôt du technicien,
2. Pour les pièces consommées pour des machines hors sous-traitance :
§ Le réapprovisionnement de ces pièces suit un réapprovisionnement classique,
§ Ces articles seront facturés par Konica-Minolta.
Contexte
Un dépôt de réapprovisionnement spécial « KM – Pièces Konica-Minolta » est paramétré.
Les machines en sous-traitant de Konica-Minolta sont affectées à des sites correspondants aux
clients utilisateurs.
Ces sites sont tous attachés au seul client Konica-Minolta.
Donc toutes les solutions de service sont au nom du seul client Konica-Minolta.
Mode Opératoire
MODE OPÉRATOIRE
CRIT
La saisie des comptes rendu d'intervention se fait normalement. Aucune particularité n'est
envisagée.
Gestion de stock
Les pièces gérées en stock (avec des quantités) nécessitent des mini et des maxi différents de
zéro, pour le dépôt central et les véhicules.
Les pièces non gérées en stock (pièces atypiques) nécessitent des mini et des maxi égaux à zéro,
pour le dépôt central et les véhicules.
Ordre des traitements
L'ordre des traitements à respecter est le suivant :
1. Réapprovisionnement interne
2. Commande des pièces gérées en stock et atypiques (sous-traitance)
3. Commande classique des pièces (hors sous-traitance)
Réapprovisionnement Interne
Réapprovisionnement automatique
La génération des réapprovisionnements internes est toujours possible du dépôt de
réapprovisionnement KM vers les véhicules. Le calcul est standard : il tient compte du stock
théorique sur les dépôts.
Réapprovisionnement manuel
Les transferts manuels du dépôt de réappro KM vers les véhicules sont possibles pour effectuer
des interventions plus rapides de la part des techniciens.
Commande des pièces gérées en stock et atypiques (sous-traitance)
Sélection
Le choix « uniquement la consommation dans les interventions et les emandes » dans «
Origine des besoins » impose l'option de génération « par CRIT ».
Calcul
Dans une même génération,
§ Pour le dépôt spécifique interne Konica-Minolta
§ Pour le code client Konica-Minolta,
§ Pour les articles de marque Konica-Minolta
ARTIS effectue les opérations suivantes :
1. A partir des consommations dans les CRIT, n'ayant pas déjà fait l'objet d'une
commande, pour les articles ayant un mini et un maxi supérieur à 0, ARTIS générera
une commande fournisseur par CRIT.
2. A partir des demandes dans les CRIT, n'ayant pas déjà fait l'objet d'une commande,
pour les articles ayant un mini et un maxi égaux à 0 avec une quantité théorique < 0,
ARTIS générera une commande fournisseur par CRIT.
Proposition
La proposition des articles à commander s'affichera. Une validation sera nécessaire.
Commande générée
La génération tient compte du fait des transferts entre le stock central et les véhicules. En effet
dans ce dernier cas, la commande fournisseur doit réapprovisionner le stock central.
Une fois les commandes générées, La liste des commandes est affichée.
Les commandes générées doivent avoir un total à zéro, car effectivement, Konica-Minolta
effectue un remboursement de pièces.
Pour cela, chaque article commandé est valorisé avec un prix unitaire d'achat égale au prix
moyen pondéré (PMP).
Un article spécifique (paramétrage) est ajouté afin que la commande soit à zéro. (le montant
H.T. de cet article est négatif et égale à la somme des montant HT des articles commandés).
Impression
A suivre, une impression des commandes fournisseur est possible. Une impression des CRIT
liés à ces commandes permettra de faire la saisie sur le site internet.
Modification des commandes
Il est toujours possible de supprimer des lignes de commande. Dans ce cas, la prochaine
génération procèdera à une nouvelle génération.
Dans le cas de modification de la quantité sur une ligne de commande fournisseur, cela revient
à modifier la quantité prévue pour le dépôt de destination de cette ligne (Consulter "Cas
particulier / Quantité en stock / Pour un véhicule, et Pour le dépôt de réapprovisionnement
Konica-Minolta »).
Commande classique des pièces (hors sous-traitance)
Une commande fournisseur sera générée par fournisseur, pour les besoins répondant aux critères
de sélection.
La commande générée peut être exportée par le lien Générer fichiers commandes fournisseurs.
Si un interlocuteur est paramétré avec une fonction ‘Réception commande' dans sa fiche, un mail
lui est envoyé.
Remarque
Le paramètre utilisé pour déclarer le code de la fonction est le suivant :

Statistiques
STATISTIQUES
Lors de l'interrogation des achats (commande ou livraison), un critère de sélection permettra de
filtrer les achats dans le cadre de la sous-traitance et les achats hors sous-traitance.
Cas particulier
CAS PARTICULIER
Modification des CRIT
Si un gestionnaire est amené à modifier un CRIT qui a fait l'objet d'un réapprovisionnement, deux
cas se présentent :
§ Augmenter la quantité consommée : il faut ajouter une ligne dans le CRIT pour cet
article. Le besoin sera pris en compte lors de la prochaine génération.
§ Diminuer la quantité consommée : deux opérations sont nécessaires :
· Supprimer dans la commande fournisseur, la ligne prévue pour l'article du CRIT
· Modifier le CRIT, en diminuant la quantité consommée
Le besoin sera pris en compte lors de la prochaine génération.
Quantité en stock
Pour un véhicule
Si un gestionnaire souhaite augmenter la quantité en stock d'un véhicule pour un article donné, il
suffit d'ajouter dans une commande fournisseur, une ligne pour cet article à destination de ce
véhicule.
Si un gestionnaire souhaite diminuer la quantité en stock d'un véhicule pour un article donné, il suffit
de faire un transfert de stock pour cet article du véhicule vers le stock central spécial Konica-
Minolta (dans notre exemple « KM »).
Si c'est tout un dépôt qui est à vider (cas par exemple d'un départ d'un technicien), il faut procéder
à des transferts.
Pour le dépôt de réapprovisionnement Konica-Minolta
Si un gestionnaire souhaite augmenter la quantité en stock du dépôt de réapprovisionnement pour
un article donné, il suffit d'ajouter dans une commande fournisseur, une ligne pour cet article à
destination de ce dépôt.
Si un gestionnaire souhaite diminuer la quantité en stock du dépôt de réapprovisionnement pour un
article donné, il faut procéder :
§ Soit par des livraisons client (Bon de livraison)
§ Soit par des régularisations.
Paramètres
