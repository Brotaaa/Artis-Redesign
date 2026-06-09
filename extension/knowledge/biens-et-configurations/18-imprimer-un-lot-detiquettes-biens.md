# Imprimer un lot d'étiquettes Biens

> Categorie: Biens et Configurations | Pages 220-227

## Sous-rubriques
- Types d'étiquettes (p.222)
- Paramètres (p.227)

date)
§ Contrôle d'écart en pourcentage : L'écart entre la valeur saisie et l'estimation dépasse
t'il le pourcentage d'alerte?
§ Contrôle d'écart d'alerte : L'écart entre la valeur saisie et le dernier relevé dépasse t'il la
valeur d'alerte ?
§ Contrôle d'écart maximum : L'écart entre la valeur saisie et le dernier relevé dépasse t'il
la valeur maximum ?
§ Contrôle relevé dans le futur : La date de saisie est-elle postérieure à la date du jour ?
§ Contrôle valeur sup. au dernier relevé en date : La valeur saisie est-elle supérieure au
premier relevé postérieur ?
Les valeurs possibles pour les contrôles sont :
§ AUCUN : Pas de contrôle
§ ALERTE : Message d'alerte non bloquant
§ BLOCAGE : Message d'alerte bloquant
Imprimer un lot d'étiquettes Biens
IMPRIMER DES ÉTIQUETTES
Les impressions se font à ces étapes :
o Impression lors des réapprovisionnements
o Impression des étiquettes des biens au cours du chaînage de la vente
o Impression des étiquettes en masse.
Impression des étiquettes en masse
Biens et Configurations / Imprimer un lot d'étiquettes Biens
ou
logistique et stocks / Imprimer un lot d'étiquettes Biens
Les boutons radio ci-dessous permettent d'afficher :
o Soit les critères de sélection pour édition des étiquettes de stock,
o Soit mes critères pour édition des étiquettes des biens.
Étiquettes des biens
Sélection possible :
§ pour un client (multi-sélection possible)
§ pour un modèle (unique)
§ pour une agence (multi-sélection possible)
§ pour une organisation interne
§ pour des catégories d'articles : activité, famille, sous-famille (liste de sélection
paramétrable)
§ pour des dépôts (liste de sélection paramétrable)
§ pour un intervalle d'identifiant prestataire (via une borne inférieure et supérieure)
Remarque
Pour chaque critère cité, une loupe est disponible pour une recherche plus approfondie. Il suffit de
faire <F1> pour visualiser les critères de recherche.
Sélection
Les étiquettes ne s'impriment pas immédiatement après cet écran. Après avoir lancé l'exécution,
une liste des biens répondant aux critères de sélection s'affichent avec les informations suivantes :
o Libellé du bien
o Identifiant Fabricant (matricule)
o Identifiant Prestataire
o Organisation (Nom du client
o Site du bien
o Autre code
o Code reprise
A partir de la liste affichée, il est possible d'appliquer des filtres (notamment sur les informations
liées aux champs « Autre code » et « Code reprise ».
Après avoir coché les lignes utiles, lancer l'exécution.
Étiquettes de stock
Pré-Sélection
Sélection possible :
Filtre sur les articles ayant du stock
o pour des articles (multi-sélection possible)
o pour un emplacement
o pour des dépôts (multi-sélection possible)
Il faut au moins un dépôt sélectionné.
Remarque
Pour chaque critère cité, une loupe est disponible pour une recherche plus approfondie. Il suffit de
faire <F1> pour visualiser les critères de recherche.

Sélection
Les étiquettes ne s'impriment pas immédiatement après cet écran. Après avoir lancé l'exécution,
une liste d'articles répondant aux critères de sélection s'affichent avec les informations suivantes :
o Libellé de l'article
o Référence de Stock
o Référence de l'article acheté
o Emplacement
o Quantité en stock
o Nombre d'étiquettes souhaitées
o Dépôt
Remarque
Le nombre d'étiquettes souhaitées est initialisé :
o Avec la quantité en stock de l'article dans le dépôt, si la quantité est supérieure à zéro
o A zéro dans les autres cas
L'utilisateur a la possibilité de modifier la quantité.
Après avoir coché les lignes utiles, lancer l'exécution.
Types d'étiquettes
ÉTIQUETTE
Étiquette de stock
Liste des informations disponibles
o Code article de stock
o Libellé article (30 caractères)
o Référence du type de produit (référence fabricant)
o Référence fournisseur (active et non remplacée)
o Numéro de livraison fournisseur
o Date de livraison fournisseur
o Emplacement
o Secteur logistique
o Code dépôt de stockage
o Prix de vente public
Disposition
Il existe des mises en pages déjà existante. Elles peuvent être modifiées assez facilement.
Si des nouveaux champs sont à mettre (hors la liste ci-dessus), une étude et un devis seront alors
nécessaires.
Un paramètre (module « Impression », paramètre « Etiquette_Article_Reffabricant ») permet de
choisir :
§ Soit une liste de 4 références fournisseur, avec en premier la référence prioritaire si
présente, suivi des références actives et non remplacées,
§ Soit la référence du type de produit (appelée également référence fabricant).
Mais pas les 2 types de référence en même temps.

Exemple d'étiquette de stock avec la référence fabriquant
Exemple d'étiquette de stock avec les références fournisseur
Étiquette de bien
Liste des informations disponibles
o Identifiant fabricant
o Identifiant prestataire
o Libellé du bien
o Nom du client
o Nom du site où est installé le bien
o Adresse du site où est installé le bien
§ Voie
§ Immeuble
o Quartier
o CP
o Ville
o Date d'impression de l'étiquette
Disposition
Il existe des mises en pages déjà existantes. Elles peut être modifiées assez facilement.
Si des nouveaux champs sont à mettre (hors la liste ci-dessus), une étude et un devis seront alors
nécessaires.
STOCK BIEN
1
2

3

4
5

6
7

8
9
10

11

Le prestataire peut créer une sous étiquette à celle qu'ARTIS.net imprime, exemple :

Paramètres
PARAMÈTRES
Référence sur étiquette
Paramètres application / Paramètres application / Gérer les paramètres
Choix de l'affichage des références fabricant ou fournisseur dans l'étiquette stock.
Paramètre "ETIQUETTE_ARTICLE_REFERENCE_FABRICANT"
Valeur :
§ Coché : les références fabricants,
§ Non coché : Par défaut : les références fournisseurs.
Template EPL
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "TEMPLATE_IMPR_CODE_BARRE_ARTICLE"
Valeur : Nom du template d'impression des étiquettes codes à barres pour les articles en code
EPL.
Template ZPL
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "TEMPLATE_IMPR_CODE_BARRE_ARTICLE_ZPL"
Valeur : Nom du template d'impression des étiquettes codes à barres pour les articles en code
ZPL.
Template étiquette des biens
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "TEMPLATE_IMPR_CODE_BARRE_MACH"
Valeur : Nom du template d'impression des étiquettes codes à barres pour les machines.
Tri lors de l'impression
Paramètres application / Paramètres application / Gérer les paramètres
Choix du tri des étiquettes de stock lors de l'impression.
Paramètre "TRI_IMPRESSION_ETIQUETTE"
Valeur :
§ Sans tri,
§ Par référence fabricant ou fournisseur,
§ Par libellé,
§ Par code article,
§ Par dépôt,
§ Par emplacement.
