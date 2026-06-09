# Généralités et Théorie

> Categorie: Articles | Pages 625-628

## Sous-rubriques
- Articles (p.625)

Le menu de création est choisi en fonction du tiers à créer :
o Créer un fournisseur déjà client, prendre Tiers / Fournisseurs / Gérer les organisations de type
fournisseur,
o Créer un client déjà fournisseur, prendre Tiers / Fournisseurs / Gérer les organisations de type
client,
1. Prendre l'option du menu,
2. <+>,
3. Dans le champ "Code", faire <F1>,
4. Dans le critère de recherhe "Type Organisation", séléctionner le type d'organisation
"Organisation interne",
5. Les informations de la fiche de l'organisation interne sont ramenées dans cette nouvelle fiche,
6. Renseigner l'Organisation interne à mettre en relation si demandé,
7. Compléter ou corriger la fiche,
8. Vérifier l'onglet correspondant au nouveau type,
Attention aux informations comptables !
9. <Disquette> ou <F2>.
La nouvelle fiche Tiers comporte plusieurs onglet récapitulant les différents rôles.
Articles
Généralités et Théorie
LES ARTICLES
Les articles sont décomposés en :
o Article tangible
o Article intangible
o Article de facturation
o Article d'ajustement
LES ARTICLES TANGIBLES
Ce sont des articles physiques vus comme des produits finis (on peut les toucher). Un article
tangible est un article réel, qui peut être acheté et peut être vendu.
Ces articles sont classés suivant des types :
o Type Logiciel : Tout article tangible permettant d'identifier des logiciels
o Type Modèle :  Tout article  tangible qui  n'entre  pas  dans  la  composition  d'un  article.  C'est
notamment un article identifiable par un matricule ou numéro de série.
o Type Composant : Tout article tangible servant à faire fonctionner un article modèle.
o Type Produit Tangible Autre : Tout article tangible autre que Logiciel ou Modèle ou Composant
LES ARTICLES INTANGIBLES
Tout article acheté ou vendu mais ne correspondant pas à un produit fini.
LES ARTICLES DE FACTURATION
Tout article servant uniquement à ajouter des lignes dans une facture d'achat ou de vente.
LES ARTICLES D'AJUSTEMENT
Tout article nécessaire au calcul de la marge dossier commercial et n'ayant aucun lien avec la
facturation (et donc a fortiori avec la comptabilité). Ils seront utilisés notamment avec la notion
d'Affaire sur les commandes clients
L'article et ses caractéristiques
Lors de la création d'un article, la trame de réflexion est la suivante :
o Points à traiter suivant la nature de l'article :
Position Opérations à faire Copieur Serveur Accessoire Consommable Pièce détachée Mobilier de
bureau
Extension de
garantie ou
similaire
1 Créer l'article (fiche article) Oui Oui Oui Oui Oui Oui Oui OBL
2 Configuration de Grandeurs (Compteurs) Oui - - - - - - OBL
3 Relation Maître-Accessoire Oui - Oui - - - - OBL
4 Configuration de commande Oui (Oui) Oui (Oui) - - (Oui)
5 Compatibilité - - - Oui - - -
6 Domaine d'intervention Oui Oui - - - - -
7 Mini-Maxi, Emplacement - - - (Oui) (Oui) - -
OBL : Obligatoire, sans quoi  après utilisation de l'article, des corrections fastidieuses et
nombreuses seront à effectuer.
o Caractéristiques approfondies à vérifier :
Position Opérations à faire Copieur Serveur Accessoire Consommable Pièce détachée Mobilier de
bureau
Extension de
garantie ou
similaire
1 Créer l'article (fiche article) Oui Oui Oui Oui Oui Oui Oui
2 Type d'article
3 o Modèle x x x
4 o Composant  x x x
5 o Type de produit tangible autre  x x
6 o Type de produit intangible
7 Arrêt de la vente  : date à partir de laquelle il ne
peut plus être utilisé dans une commande
8
Couverture contractuelle d'articles  :
catégorie qui permet de faire le lien avec les
couvertures présentes ou non dans les SSC
(absence ou date de fin dépassée => article
facturable)
x x x x x x x
9
Catégorie com ptable de Vente  : catégorie
liée à un compte comptable de vente (voir
génération des écritures, interface des
écritures)
x x x x x x x
10
Ventilation Nb/Coul  : Pour les articles
composant, le prix de revient est réparti suivant
les VMM noir et couleur (voir Configuration
prédéfinie des grandeurs, Analyse de rentabilité)
 x x
11
Catégorie com ptable d'Achat  : catégorie liée
à un compte comptable de vente (voir génération
des écritures, interface des écritures)
x x x x x x x
12
Référence de rem placem ent  : permet de
déclarer les évolutions de référence que le
fournisseur effectuent

13 Référence active  : active : elle utilisable partout
/ inactive : inutilisable
14
Référence prioritaire  : Elle est prise
automatiquement dans la génération des achats,
sinon c'est la moins chère qui est prise en
compte.

15
Gam m e technique  : permet de faire des
statistique, et est utilisée pour les compatibilités,
les compétences techniques
x
16
Durabilité annoncée  : durée de vie des articles
(en copie) selon le constructeur (ajuster à 90%
éventuellement)
 x x
17
Garantie fournisseur  : permet d'enregistrer la
SSC Garantie et la durée, la SSC Garantie est
créée en automatique lors de la livraison
(x) (x)
18
Extension de garantie : permet d'enregistrer la
SSC Extension de garantie et la durée, la SSC
Extension de garantie est créée en automatique
lors de la livraison
 x
19 Configuration de Grandeurs (Compteurs) Oui - - - - - -
20
Configuration de grandeurs  : pour les
articles modèle (copieur, traceurs... en
particulier), permet d'ouvrir les compteurs sur
ces articles
x
21
VMT par grandeurs  : permet par modèle et par
grandeur (compteur) de positionner un volume
moyen (prioritaire sur le volume moyen société
VMS, paramétré à 1000 par défaut)
(x)
22 Relation Maître-Accessoire Oui - Oui - - - -
23
Maître Accessoire  : Pour les articles modèle,
déclare la relation maître accessoire, et permet
d'établir le lien lors des livraisons
x x
24 Configuration de commande Oui (Oui) Oui (Oui) - - (Oui)
25
Configuration de com m ande  : permet
d'enregistrer pour chaque modèle du
fournisseur, l'ensemble des accessoires,
consommables, prestations obligatoires ou
optionnelles. Une config est utilisée en saisie de
commande afin d'accélérer les saisies et éviter
des oublis
x (x) x (x) (x)
26 Compatibilité - - - Oui - - -
27
Com patibilité  : Pour les articles composant
(consommable en particulier), déclare la relation
entre un modèle (maître ou accessoire) et le
consommable, et permet de trouver les articles
compatibles en saisie de commande de
consommable (utiliser également la compatibilité
avec la gamme)
 x
28 Domaine d'intervention Oui Oui - - - - -
29
Dom aine d'intervention  : pour les articles
modèles, cible un domaine d'intervention, est
utilisé dans la génération des DIT de prestation et
en saisie des appels
x x
30 Mini-Maxi, Emplacement - - - (Oui) (Oui) - -
31
Mini, Maxi et Em placem ent  : pour les articles
composants, permet de gérer l'article en stock,
utilisé dans les réapprovisionnement des
techniciens, et en génération de commande
fournisseur
   (x) (x)
