# Sous-traitance - Délégation de maintenance

> Categorie: Module Sous-traitance | Pages 814-817

## Sous-rubriques
- Planning sous-traitant (p.814)

Gérer un sous-traitant
Tiers / Fournisseurs / Gérer les organisations de type Sous-traitant
Si le sous-traitant est déjà Client ou Fournisseur.
Créer par le < + >
Dans la zone "Code", saisir le nom du Tiers
La fiche Sous-traitant est créée avec les informations déjà saisies sur l'autre ficher
Dans l'onglet "Sous-traitant", zone "Relation sous traitant", cliquer sur le trombonne
L'organisation interne est récupérer ou la liste des organisations internes s'affiche
Sélectionner l'organisation concernée
Indiquer les "Relation sous traitant" :
Moye :
Modèle de sous-traitance
Interlocuteur de référence
.....
Si le sous-traitant n'existe pas en tant que fournisseur, un message d'alerte s'affiche :
"Attention ! l'organisation 0200000 n'est pas fournisseur pour xxxx !"
Si le Tiers n'existe pas
Créer par le < + >
Saisir les informations de la fiche principale
...
Planning sous-traitant
VISUALISER LE PLANNING DES BIENS EN SOUS-TRAITANCE
Un bouton  Sous-traitées'  permet d'isoler  les interventions  affectées  à un sous-traitant.
Sous-traitance - Délégation de maintenance
1 DELEGATION SORTANTE
1.1 Préambule
1.1.1 Positionnement
Le Prestataire 1 vend un bien sur Paris. Le bien est en délégation de maintenance auprès du confrère : le
Prestataire 2.
La procédure ci-dessous concerne le Prestataire 1 qui va vendre le bien au client final.
1.2 Client et Site
1.2.1 Client
Vérifier si le client final existe en tant que client de facturation, sinon le créer.
1.2.2 Site
Vérifier si le site d'installation existe pour le client final, sinon le créer.
1.3 Vente
Faire le chaînage habituel de commande, BL, facture.
· Client de commande : le client final
· Client de livraison : le site d'installation du client final
· Client de facturation : client final ou Leaseur
1.4 Création de la SSC
Créer la SSC avec le client final comme partie contractante.
Faire « Edition contrat » et envoyer le pdf généré avec le document interne à votre confrère.
Dans notre exemple, les documents sont à envoyer au Prestataire 2.
1.5 M odification du Bien
Il faut compléter le fiche du bien en indiquant le sous-traitant.
1. Bien et configuration / Gérer un bien
2. Appeler le bien
3. Cliquer sur Client livré
4. Modifier avec <Crayon>
5. Renseigner l'organisation comme ci-dessous :
6. <Disquette>
Exemple de saisie d'appel sur une machine :
1.1 Facture de sous-traitance
Le prestataire 2 intervient chez le client final et  vous adresse une facture. Cette facture est  à  prendre en
compte dans les achats, pour une prise en compte en comptabilité et dans les Services pour une prise en
compte dans les charges liées à cette machine sous contrat (l'analyse de rentabilité en tiendra compte).
1.1.1 Dans les Achats
Soit la facture est enregistrée directement en comptabilité générale (voir le service concernée),
Soit la facture est enregistrée dans ARTIS.net.
1.1.1.1 Saisie dans ARTIS.net
Une facture directe est à saisir :
Achat / Factures fournisseur / gérer les factures fournisseur
Créer une nouvelle facture et cocher « Directe »
· Fournisseur : Le fournisseur générique « Sous-traitant » ou le compte identifié du Prestataire 2
· Articles :  Selon  ce  que  le  Prestataire  2  vous  facture,  il  est  nécessaire  d'ajouter  des
articles de facturation :
§ Code Libellé
§ ST Sous-traitance
§ PD Pièce détachée
§ CONSOConsommable Bureautique
§ FTC Frais de participation et de gestion
1.1.2 Dans les Services
La facture va faire l'objet d'une saisie de compte rendu d'intervention :
Services / Planification / Gérer le planning multi-critères
1. Au planning, faire clic droit et prendre « Saisir un CRIT direct »
2. Dans  l'écran  1  de  la  DIT, sélectionner  le  domaine  d'intervention « Bur.  /  Sous-traitance »  (ce
domaine a fait l'objet d'un paramétrage particulier),
3. Dans le CRIT, prendre le technicien sous-traitant,
4. Saisir les  quantités sur les  lignes de prestation (ne pas ajouter d'articles  pièces suivi en stock.
Dans le cas contraire, des sorties de stock seraient enregistrées !),
5. Après validation de la saisie du CRIT, cliquer sur l'option « Info. coût revient » (en bas à gauche),
6. Sélectionner les lignes et utiliser <Crayon> pour modifier les coûts de revient,
7. Pour chaque ligne, cliquer sur « Statique » et  reporter les  montants  HT de  la  facture du  sous-
traitant dans « Coût rev. unitaire utilisateur » (enregistrer à chaque ligne).
2 DELEGATION ENTRANTE
2.1 Préambule
2.1.1 Positionnement
On appelle «Délégation entrante » (ou « Entrée de Zone »), tout matériel pris en maintenance sur le secteur
technique du prestataire alors que celui-ci n'est pas à l'origine de la vente.
Le Prestataire 1 vend un bien sur Paris. Le bien est en délégation de maintenance auprès du confrère : le
Prestataire 2.
La procédure ci-dessous concerne le Prestataire 2 qui va prendre en charge la maintenance pour le compte
du Prestataire 1.
2.1.2 Bien
La vente n'étant pas faite par le prestataire, il faut créer manuellement le bien dans le Parc.
Si Prestataire 1  et  Prestataire 2  sont  gérés sous  ARTIS.net, dans une seule base de données, alors le
matricule ne peut  être  présent qu'une seule  fois  dans  la  base  de  données. Lors  de  cette  création,  le
matricule à gérer dans le Prestataire 2 sera suffixé, exemple : « -S ».
2.2 Client et Site
2.2.1 Client
Dans ARTIS, le client final n'est pas vu comme un client de facturation. Il va être enregistré sous le compte
du client correspondant au Prestataire 1, qui est à l'origine de la vente.
Dans notre  exemple,  pour Prestataire 2,  il  faut  utiliser  le  compte  client  qui  identifie Prestataire 1.  S'il
n'existe pas, le créer.
2.2.2 Site
Il faut vérifier l'existence ou non des sites d'installation des nouvelles délégations.
· Si ceux-ci existent, aller au Chapitre « Création du bien » ci-dessous.
· Sinon suivre la procédure : créer un site pour le client.
1.1 Création du BIEN
Prendre l'option «+» pour ajouter un nouveau bien
Saisir la référence du modèle du bien (code Mercury sans  les  2  lettres  en fin, exemple « 3617B004 ») à
créer puis «F2».
