# Refacturation des mouvements de stock

> Categorie: Module Sous-traitance | Pages 820-820

1. Chaque organisation interne doit être déclarée comme client, consulter Créer un tiers à partir
d'un tiers.
2. Il est nécessaire de mettre en place une tarification entre organisations internes, utile à la
valorisation de la refacturation.
Il peut s'agir de tarifs à prix net et/ou relatif, consulter Gérer les tarifs.
Les tarifs créés doivent prendre le pas sur le tarif Public (à faire depuis le tarif Public).
3. Dans le cas d'un tarif à prix net, mettre à jour les prix dans les fiches articles.
Facturation
Pour générer la facturation, consulter Générer les factures clients, en prenant l'option "Intervention".
ARTIS.net va générer à la fois les factures des interventions facturables aux clients, et les factures
de refacturation de CRIT.
Paramètres
Refacturation
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "REFACTURATION"
Valeur :
§ Coché : La refacturation des CRIT est possible,
§ Non coché : Pas de refacturation.
Refacturation des mouvements de stock
REFACTURATION DES MOUVEMENTS DE STOCK
Contexte
Plusieurs organisations internes cohabitent dans la même base de données. Les mouvements de
stock qui peuvent faire l'objet d'une refacturation sont :
o Les transferts de stock :
Il s'agit des mouvements d'un dépôt d'une organisation interne vers un dépôt d'une autre
organisation interne,
o Les mouvements fournisseur :
Il s'agit des mouvements d'entrée en stock d'un fournisseur d'une organisation interne dans
un dépôt d'une autre organisation interne,
o Les mouvements clients :
Il s'agit des mouvements de sortie de stock d'un dépôt d'une organisation interne vers un
client d'une autre organisation interne. Seuls les mouvements liés aux livraisons sont pris
en compte. Pour les mouvements liés aux CRIT, consulter Refacturation des CRIT.
Remarque
