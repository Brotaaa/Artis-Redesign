# Particularités

> Categorie: Services | Pages 128-130

## Sous-rubriques
- Facture de sous-traitant (p.129)
- Garantie constructeur sur PD particulière (p.129)
- Paramétrer le cumul de domaines (p.130)
- Saisir les horaires d'ouverture d'un site depuis une DIT (p.130)

o Ne pas ramener les intervenants avec collaboration échue
o Afficher les groupes de travail vides
Résultats du tableau
Position Position
lettrée Label 1 Label 2 Label 3 Format Commentaire
1 A       Libellé
2 B Heures ouvrables
3 C
INTERVENTIONS (en heures)
PRODUCTIVES
IT sur DIT (h)
4 D IT directe (h)
5 E %
6 F MARGE REDUITE Temps (h)
7 G %
8 H NON PRODUCTIVE Temps (h)
9 I %
10 J
Total
Temps (h)
11 K %
12 L Nbre  Il s'agit du nombre d'interventions en état "CRIT saisi"
13 M
DEMANDES (en nbre)
1 IT
Il s'agit du nombre de demandes d'intervention (DIT)
clôturées en 1 CRIT (pas de retour)
-> Toute DIT qui n'est jamais passée par l'état "Travail non
terminé"
14 N TNT
Il s'agit du nombre de demandes d'intervention (DIT)
clôturées en plus d'1 CRIT (retours)
-> Toute DIT qui est passée par l'état "Travail non terminé"
et dont toutes les interventions sont réalisées par le
technicien
15 O %  Taux de retours
PARAMÉTRAGE
Paramètres
Paramètres application / Paramètres application / Gérer les paramètres
Le paramètre permet de renseigner les codes des natures de DIT à prendre en compte dans la
colonne "Marge réduite".
Paramètre "NATURE_AMR"
Valeur : Saisir les codes des natures pour les activités à marge réduite, séparés par un ";" (point-
virgule).
Rappel
Les natures qualifient les Demandes d'interventions (DIT).
Particularités
Facture de sous-traitant
RÉCEPTION DES FACTURES D'INTERVENTION
Le prestataire les enregistre dans ARTIS.net en facture d'achat.
Si le prestataire souhaite avoir une analyse de rentabilité sur les machines en sous-traitance, la
procédure est la suivante :
1. Saisie d'un CRIT direct sur le bien en « Non facturable » OU au niveau du planning, faire clic
droit et prendre « Saisie CRIT » sur la DIT (mise initialement en « Non facturable », domaine
d'intervention « Sous-traitance »)
2. Dans le CRIT, prendre le technicien sous-traitant,
3. Saisir les quantités sur les lignes de prestation (ne pas ajouter d'articles pièces suivi en stock.
Dans le cas contraire, des sorties de stock seraient enregistrées !),
Si vous souhaitez faire une différence sur les pièces et consommables, ajouter les articles
particuliers (type composant, non suivi en stock)
4. Clôturer le CRIT
5. Cliquer sur le lien « Info. coût de revient »
6. Sélectionner la ligne de l'article puis <Crayon>
7. Cliquer sur « Statique »
8. Saisir le montant de la facture dans la zone « Coût rev. unitaire utilisateur »
9. <Disquette>
Remarque
Les articles particuliers doivent être créés au préalable (type composant, non suivi en stock).
Garantie constructeur sur PD particulière
GARANTIE CONSTRUCTEUR SUR PIÈCE DÉTACHÉE
PARTICULIÈRE
Gérer la couverture
Rien de spécifique n'est prévu à ce jour.
Solution préconisée
1. Une couverture "Garantie pièce Constructeur" (ou "Remboursement Pièce par le Constructeur")
est à créer au préalable dans les services prédéfinis.
2. Lors de la création de la SSC, il faut ajouter cette couverture
Cette couverture est visible sur les PDA
3. Lors de la reprise, la SSC est fermée. Il faut donc reporté l'information dans un champ sur le
bien (par exemple : l'identifiant client).
4. Lors de la revente, au moment d'affecter le matricule à la ligne de commande, l'identifiant client
est visible (à droite dans le tableau des matricules disponibles)
5. Lorsque l'information est confirmée, la couverture devra alors être ajoutée à la nouvelle SSC
(opération 1 ci-dessus).
Gérer la consommation des pièces détachées dans le cadre d'une
garantie constructeur/fournisseur
Lors d'une intervention, le technicien consomme une pièce de son véhicule et celle-ci doit faire
l'objet d'un remboursement.
1. Au retour de son intervention, le technicien en fait part à l'acheteur.
2. L'acheteur passe ensuite commande au fournisseur.
3. Lors de la réception de la livraison, l'acheteur doit intervenir sur le CRIT initial :
1. Rechercher et afficher le CRIT
2. Cliquer sur le lien « Info. coût de revient »
3. Sélectionner la ligne de l'article puis <Crayon>
4. Cliquer sur « Statique »
5. Saisir le montant zéro 0 dans la zone « Coût rev. unitaire utilisateur »
6. <Disquette>
Ce ne peut être qu'à la livraison de la pièce, que le coût de revient sur le CRIT peut être impacté.
Tant que cette pièce n'est pas remboursée, la rentabilité est impactée.
Si la pièce n'est pas en stock :

1. L'acheteur la commande à 0 euro.
2. Lors de la réception, elle est donnée au technicien.
3. Le technicien la consomme pour réaliser son intervention.
4. Dans son CRIT, le coût de revient de cette pièce est déjà à 0, donc sans impact pour la
rentabilité.
Paramétrer le cumul de domaines
PARAMÉTRER LE CUMUL DE DOMAINES
Paramétrage
Paramètres application / Classifications, Listes et tables de décision / Gérer les tables de
décisions
Cette table configure l'envoi de mail en cas de non saisie des données obligatoires dans le CRIT.
Modifier la table de décision ‘CUMUL_DOMAINES' et cocher les cases des domaines concernés.
Saisir les horaires d'ouverture d'un site depuis une DIT
SAISIR LES HORAIRES D'OUVERTURE D'UN SITE DEPUIS UNE
DIT
Les horaires ne sont visibles que sur le PDA du technicien (non visibles sur le planning en session
Artis.net).
