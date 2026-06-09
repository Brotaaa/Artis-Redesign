# Commandes client

> Categorie: Ventes | Pages 360-427

## Sous-rubriques
- Gérer les commande clients (p.360)
-   Saisir une commande matériel (p.360)
-   Réserver/dé-réserver un bien pour une commande (p.364)
- Gérer les commandes de consommables (p.366)
-   Saisir une commande de consommable (p.366)
-   Rechercher une commande de consommables existante (p.370)
-   Particularités (p.370)
-     Alertes de sur-stock, sous-stock et Besoin conso (p.370)
-     Historique des livraisons (p.375)
-     Mettre en Non facturable ou Facturable un BL de consommable (p.378)
-     Relever des stocks chez le client (p.379)
-       Paramétrage (p.382)
-     Sur-consommation de consommables (p.383)
-       Paramétrage des alertes de sur-consommation (p.384)
-       Règles de calcul de la sur-consommation (p.388)
-       Gérer les alertes de surconsommation (p.389)
-     Paramétrer les options par défaut (p.390)
- Valider les commandes du PORTAIL (p.390)
- Gérer les configurations de commande (p.391)
- Gérer les devis commerciaux (p.392)
-   Gérer les états sur les devis (p.395)
- Suivre les commandes et les reliquats clients (p.396)
- Consulter l'historique des commandes (p.397)
- Particularités (p.398)
-   Activer le mode brouillon (p.398)
-   Ajouter une ligne négative (p.399)
-   Comment est choisi le dépôt d'une commande (p.399)
-   Comment est valorisé le coût de revient (p.400)
-   Faire une mise à disposition (p.403)
-   Faire une commande pour un un broker (p.403)
-   Gérer une commande client avec cotation (p.403)
-   Initialiser la date de livraison souhaitée (p.403)
-   Les différents états de la commande (p.404)
-   Lien DIT - Prestation de commande (p.405)
-     Générer une DIT avec matricule (p.405)
-     Générer une DIT sans matricule (p.408)
-     Livrer et facturer (p.409)
-     Cas particulier (p.410)
-     Paramétrage (p.411)
-   Réserver des biens en stock avec accessoires liées (p.419)
-   Mécanisme des réservations (p.419)
-     Synoptique des réservations (p.421)
-     Visualiser les réservations (p.422)
-     Transférer des réservations (p.424)
-     Exemple de mouvements et de réservations (p.426)
-     Paramètres (p.426)
-   Rechercher des commandes (p.427)
-   Paramètres (p.427)

Commandes client
Gérer les commande clients
GÉRER LES COMMANDE CLIENTS
Cette option permet de gérer à la fois les commandes de négoce, et les commandes de
consommable, ou tout aute commande. suivre les procédures suivantes en fonction du type de
commande :
o Commande de consommable : Saisir une commande de consommable,
o Commande de négoce, matériel, autre : Saisir une commande matériel.
Saisir une commande matériel
SAISIR UNE COMMANDE CLIENTS DE MATERIEL
Ventes / Commandes clients / Gérer les commandes clients
Préambule
ARTIS préconise :
o Une commande par configuration de commande :
Cela facilite le traitement : un site de livraison par commande, un ordre de préparation par
commande, des modifications sur les lignes de commande plus faciles,
o Un ordre de saisie des lignes de la commande :
1. L'article du bien maître,
2. Les articles de prestations générant les DIT,
3. Les articles des accessoires gérés comme bien,
4. Les articles accessoires non gérés comme bien ou consommables,
5. Les articles prestations vendues,
6. Les éventuels articles de frais (articles de facturation),
7. Les articles d'ajustement.
La saisie peut être facilité en utilisant :
§ Les configurations de commande (cas de configuration matériel d'impression avec des
accessoires, des consommables, des prestations),
§ Les kits (cas de prestations types comme les reconditionnements, les préparations de
machines neuves, les formations…).
Procédure
1. <+> pour créer une commande
Page "En-tête de commande"
Section "Filière"
1. Rechercher le client,
2. Le client de commande est reporté automatiquement dans le client de livraison. Dans "Livrer",
sélectionner un autre code client, le cas échéant,
3. L'adresse (site) privilégiée de livraison de la fiche client est prise en compte automatiquement.
Dans "Livraison", sélectionner un autre site du client, le cas échéant,
4. Le client de commande est reporté automatiquement dans le client de facturation. Dans
"Facturer", sélectionner un autre code client, le cas échéant,
5. L'adresse (site) privilégiée de facturation de la fiche client est prise en compte
automatiquement. Dans "Facturation", sélectionner un autre site du client, le cas échéant,
6. Le dépôt affecté à l'adresse de livraison du client livré est pris en compte automatiquement
(sauf paramétrage particulier),
Section "Infos principales commande"
1. Le numéro interne est automatique,
2. Saisir la date de commande, la date souhaitée,
3. Vendeur terrain (obligatoire) : Il s'agit du vendeur qui suit le client sur le "terrain" (visites
régulières, …),
4. Télévendeur (non obligatoire) : Le télévendeur est en quelque sorte un deuxième vendeur affecté
à cette commande (par exemple, un client est suivi par un vendeur "terrain" saisi dans la
commande. La vente de la commande en cours est à l'initiative d'un vendeur "sédentaire",
5. Numéro affaire : S'il s'agit d'une commande correspondant à une vente avec valeur ajoutée, il
est possible d'insérer la commande en cours dans une affaire déjà existante. Alors toutes les
lignes de la commande entreront dans le calcul du CA COM et des coûts de revient, afin de
déterminer un taux de marge. Cliquer sur le lien pour créer une affaire, puis <Valider> ou <F2>.
Un numéro d'affaire est généré et reporté,
6. Numéro externe (numéro ou la référence de commande du client),
7. Gestionnaire : Le gestionnaire est la personne qui gère cette commande. Parfois, il peut-être
différent de l'opérateur (exemple, s'il est absent, les commandes seront faites par un opérateur
différent du gestionnaire),
8. Transporteur : Selon les paramétrages, possibilité d'avoir le suivi des livreurs,
9. Interlocuteur : Personne à contacter chez votre client pour tout ce qui concerne la commande,
10. Localisation : Détail sur le site d'installation des biens,
Zone "Règlement - Financement commande"
1. Payeur : Par défaut, c'est le client qui est enregistré dans la filière du client,
2. Règlement : Par défaut, c'est l'information enregistré dans la filière du client,
3. Financement (obligatoire) : sélectionner le mode de financement. Il s'agit de préciser quel est le
type de financement de la commande, utile notamment dans la gestion des affaires. Il impacte
également les statuts du bien qui fait l'objet de la commande,
4. Acompte déjà payé : Ce montant viendra en déduction du total TTC pour obtenir le net à payer,
5. <Disquette> ou <F2>.
Ces informations seront reportées sur toutes les lignes saisies dans la commande.
Page "Lignes de commande"
Section "Lignes de commande"
Au fur et à mesure de la saisie des lignes, le tableau des lignes et les totaux s'actualisent :
o HT commandé : Sont cumulés ici les lignes d'article de commande,
o HT frais annexes : Sont cumulés ici les lignes d'article de facturation,
o Total HT commande : HT commandé + HT frais annexes,
o Total TTC commande : Total HT commande auquel la TVA est appliquée,
o Total marge : HT commandé + HT frais annexes + Total ajustement – Total coût de revient,
o Taux de marge : Le rapport du total marge sur (HT commandé + HT frais annexes + Total
ajustement).
Section "Article commandé"
1. Rechercher l'article :
§ Dans "Code article" : Saisir le code interne ou la référence fournisseur ou une partie du
libellé de l'article,
§ Ou dans "Référence fournisseur",
2. Champ "Qté cdée", indiquer la quantité,
3. Champs "P.U. (prix de vente)" :
§ Brut : indiquer le prix brut, puis le taux de Remise ou le montant de remise, et cliquer
sur "P.U. net" pour mettre à jour,
§ Ou saisir le P.U. net dans le champ,
4. Taux de TVA : vérifier le taux,
5. Champ "Coût de revient" (prix d'achat) : vérifier ou saisir le montant, consulter Comment est
valorisé le coût de revient.
6. La marge est calculée à partir de ce Coût de revient, impactant ainsi l'analyse commerciale de
votre activité,
7. Le commentaire est un commentaire attaché à l'article qui suit donc l'article dans tous les
documents de livraison et dans les reliquats.
<Disquette> ou <F2> permettent dès cet instant d'enregistrer la ligne d'article. Les autres
informations ont été complétées automatiquement, consulter les paragraphes ci-dessous pour plus
d'explications.
L'utilisateur réitère autant de fois la procédure qu'il y a d'articles à saisir.
Une fois toutes les lignes saisie, quitter le mode saisie en faisant <X> ou <Esc>.
Informations complémentaires
Sur la ligne de section "Article commandé" ou dans <Mosaïque>
ÉTAT DES STOCKS
Permet d'afficher l'écran de consultation des stocks. Dans la première colonne, se trouve le
stock disponible à terme affiché en détail de ligne de commande. C'est le stock disponible
une fois que toutes les livraisons client et les livraisons fournisseur ont été effectuées, y
compris les réservations, consulter Consulter l'état des stocks par article.
TARIFS DE VENTE
Permet d'obtenir les informations de vente de l'article : tarifs, classification…
HISTORIQUE DES LIVRAISONS
En cliquant sur ce lien, un écran de filtre apparaît. Par défaut, la liste de toutes les
livraisons pour le client et pour l'article s'affiche.
BESOINS CONSO
Dans le cas de commande de consommable, ce lien donne les besoins, les quantités
estimées… pour ce consommable, consulter Gérer les commandes de consommables.
UTILISER UN KIT
Le kit d'articles permet de une commande automatiquement (permet de vendre des kits de
maintenance par exemple), consulter Gérer les kits.
UTILISER UNE CONFIG. DE COMMANDE
En sélectionnant une configuration de commande, l'utilisateur inséreré les articles
obligatoires et sélectionnera tout ou partie des articles optionnels, exemple :Une machine
et l'ensemble de ses accessoires. Il ne sera possible de supprimer de la commande les
accessoires optionnels. Consulter Gérer les configurations de commande.
CLASSIFICATIONS
Classifier la commande.
SAISIE DU STOCK CLIENT
Permet de consulter ou d'enregistrer au moment de la saisie de la commande, la quantité
de toner déjà livrée et non consommée et à disposition chez le client (consommable "au
pied de la machine").
Section "Infos livraison"
Date souhaitée (date souhaitée de livraison), Code du client livré, Site de livraison, Secteur
logistique, Dépôt de déstockage : Il s'agit des informationssaisies dans l'entête de la
commande. Elles sont modifiables et peuvent être différentes d'une ligne à l'autre.
Section "Facturation - règlement - financement ligne"
Client facturé, Site de facturation, Payeur, Financement : Il s'agit des informationssaisies
dans l'entête de la commande. Elles sont modifiables et peuvent être différentes d'une ligne
à l'autre.
Section "Vendeur"
§ Vendeur, Télévendeur : Il s'agit des informations saisies dans l'entête de la commande.
Elles sont modifiables et peuvent être différentes d'une ligne à l'autre.
§ Origine : Cette option permet de qualifier la ligne avec un des éléments de la liste. Il
s'agit d'une table paramétrable.
Les différents types de ligne
Les articles commandés
Ce type de ligne correspond à "Commande" dans la liste déroulante "Ajouter ligne", en haut, à
droite de l'écran (utiliser l'ascenseur vertical).
Dans la première colonne "Type" du tableau "Lignes de commande", ces lignes sont typées "Cdé".
Il s'agit des articles "classiques", tangibles, gérés comme bien ou non, suivis en stock ou non,
intangibles, consulter le chapitre "Section "Article commandé" ci-dessus pour plus d'explications
et Articles, Généralités et Théorie et Gérer les articles.
Ces articles sont livrés, facturés et font l'objet d'une écriture comptable.
Les articles de facturation
Ce type de ligne correspond à "Facturation" dans la liste déroulante "Ajouter ligne", en haut, à
droite de l'écran (utiliser l'ascenseur vertical).
Dans la première colonne "Type" du tableau "Lignes de commande", ces lignes sont typées
"Fact".
Il s'agit des articles de facturation, consulter Articles, Généralités et Théorie et Gérer les articles de
facturation.
Ces articles sont livrés, facturés et font l'objet d'une écriture comptable.
Il est nécessaire de renseigner : Code article, Libellé article, Qté commandée, Prix unitaire net HT,
Taux de TVA et Commentaire.
Les articles d'ajustement
Ce type de ligne correspond à "Ajustement" dans la liste déroulante "Ajouter ligne", en haut, à
droite de l'écran (utiliser l'ascenseur vertical).
Dans la première colonne "Type" du tableau "Lignes de commande", ces lignes sont typées
"Ajust".
Il s'agit des articles de facturation, consulter Articles, Généralités et Théorie.
Ces articles NE peuvent PAS être livrés, ne sont donc pas facturés et ne font pas l'objet d'écriture
comptable.
Elles permettent seulement d'obtenir une vue commerciale de la commande et de l'affaire.
Il est nécessaire de renseigner :
o Code article, Libellé article, Qté ajustement, Coût unitaire, Commentaire,
o CA COM :
Le montant calculé de la ligne entre dans le calcul du CA commercial de la commande et
donc de l'affaire (le cas échéant).
Une quantité positive donne un montant positif et augmente le CA Commercial et donc la
marge commerciale.
Une quantité négative donne un montant négatif et diminue donc le CA Commercial et donc
la marge commerciale.
Ou inversement, le signe négatif peut être porté sur le coût.
Les lignes de commentaire
Ces informations vont apparaître dans le corps de la commande. L'information sera reprise dans la
livraison et la facture (200 caractères maximum).
Réserver/dé-réserver un bien pour une commande
RÉSERVER UN BIEN DANS UNE COMMANDE
Ventes / Commandes clients / Gérer les commandes
Un article géré comme bien ne peut être livré depuis une commande client, que si un matricule a
été attaché à cette ligne de commande.
Un matricule ne peut être attaché à une ligne de commande que si ses statuts sont :
o Statut commercial : Possédé par le prestataire à destination du parc client, libre,
o Statut logistique : "Emmagasiné".
Si le bien est déjà réservé dans la commande, la colonne "Liste matricules" de cette commande
est renseignée avec le matricule du bien.
1. Rechercher la commande,
2. Sélectionner la ligne d'article, colonne "Géré comme bien" à "Oui",
3. Dans la ligne de section "Lignes de commande", cliquer sur "Réserver les biens",
4. Un écran s'affiche avec en partie haute, l'article et la quantité commandé, et en partie basse un
tableau (vide dans un premier temps),
5. Réserver le nombre de bien demandé :
A. Faire <Mosaïque> en haut à droite,
B. Quatre options sont disponibles :
Rattacher les biens avec changement de dépôt dans la ligne de
commande
L'utilisateur souhaite réserver pour la commande en cours un bien qui est en
stock.
Si le dépôt du bien est différent de celui de la ligne de commande, ce dernier
est actualisé lors de la réservation du bien,
Rattacher les biens avec transfert de dépôt à dépôt
L'utilisateur souhaite réserver pour la commande en cours un bien qui est en
stock.
Si le dépôt du bien est différent de celui de la ligne de commande, ce dernier
est conservé lors de la réservation. Un mouvement et une fiche de transfert de
stock se génèrent,
Rattacher les biens réservés avec changement de dépôt dans la ligne de
commande (1)
L'utilisateur souhaite réserver pour la commande en cours un bien qui est déjà
réservé dans une autre commande client.
Si le dépôt du bien est différent de celui de la ligne de commande, ce dernier
est actualisé lors de la réservation. L'ancienne réservation est supprimée,
Rattacher les biens réservés avec transfert de dépôt à dépôt (1)
L'utilisateur souhaite réserver pour la commande en cours un bien qui est déjà
réservé dans une autre commande client.
Si le dépôt est différent de celui de la ligne de commande, ce dernier est
conservé lors de la réservation. Un mouvement et une fiche de transfert de
stock se génèrent,
C. Sélectionner le bien à réserver,
D. Si des accessoires sont liés au bien, ARTIS.net pose une question, consulter Réserver
des biens en stock avec accessoires liées.
E. Recommencer les étapes A à C pour réserver le nombre de biens demandés,
6. <X > ou <Esc> pour revenir à la commande.
(1)  Remarque
En fonction de l'urgence d'une commande client, il est possible d'intervenir sur les réservations et
de transférer manuellement une réservation sur la commande plus urgente le matricule d'une autre
commande.
LIBÉRER UN BIEN (DÉ-RÉSERVER UN BIEN)
En cas d'erreur ou pour Libérer un bien d'une réservation :
1. Rechercher la commande,
2. Sélectionner la ligne d'article, colonne "Géré comme bien" à "Oui",
3. Dans la ligne de section "Lignes de commande", cliquer sur "Réserver les biens",
4. Un écran s'affiche avec en partie haute, l'article et la quantité commandé, et en partie basse un
tableau (vide dans un premier temps),
5. <Détacher>,
6. <X > ou <Esc> pour revenir à la commande.
Gérer les commandes de consommables
Saisir une commande de consommable
SAISIR UNE COMMANDE DE CONSOMMABLE
Ventes / Commandes clients / Gérer les commandes de consommables
Page de l'en-tête
1. Section "Filière",
2. Recherche du client :
§ Rechercher directement le bien : identifiant fabricant ou prestataire ou client ou <F1>
(préconisé par ARTIS),
§ Ou rechercher le client dans "Client",
3. Pour une saisie rapide de commande, ARTIS.net complète automatiquement le dépôt, le
secteur logistique, le vendeur et le mode de financement,
4. Nunméro externe : Exemple : numéro de la commande interne du client, Média de réception
(Selon fax du JJ/MM/AAAA),
5. <Disquette> ou <F2>.
Remarque
Si le dépôt, le secteur logistique, le vendeur et le mode de financement ne sont pas
automatiquement renseigné, effectuer le paramétrage.
Remarque
SI le client possède un site positionné comme adresse privilégiée de livraison de consommable,
l'adresse est alors affichée en rouge. Dans ce cas, toutes les lignes de commande auront comme
adresse de livraison cette adresse privilégiée. Cette dernière est donc prioritaire sur celle du bien,
consulter Mettre une adresse privilégiée de livraison de consommable.
Saisir un consommable
Si le bien n'a pas pu être sélectionné dans l'entête de la commande :
1. Section "Couverture/Garanties",
2. Recherche du bien :
§ Le bien sélectionné dans l'entête de la commande a été reporté,
§ Ou rechercher le bien : <Loupe> ou <F1> ou <Arbre>,
1ère méthode : avec l'utilisation des compatibilités (préconisé par ARTIS)
1. Dans la section "Article commandé",
2. Cliquer sur "Élément compatible" à droite,
3. Cliquer sur l'article à livrer,
4. Si un service de la solution de service attaché au bien couvre les consommable,
ARTIS.net met en non facturable (prix de vente à 0) le consommable sélectionné,
5. Saisir la "Qté cdée",
6. < Disquette > ou <F2>.
Remarque
L'utilisation de "Élément compatible" ne peut se faire que si les compatibilités sont
enregistrées au préalable, consulter Gérer les compatibilités.
2ème méthode : en utilisant le calcul de besoin de conso
1. Section "Article commandé", faire <Mosaïque>,
2. Cliquer sur "Besoin conso",
3. La liste des consommables compatibles s'affiche,
4. Consulter et vérifier la cohérence de la commande de consommable au regard des
informations,
5. Section "Anticipation des commandes",
6. Saisir les quantités à livrer,
7. < Disquette > ou <F2>,
8. Si un service de la solution de service attaché au bien couvre les consommable,
ARTIS.net met en non facturable (prix de vente à 0) le consommable sélectionné,
9. < Disquette > ou <F2>.
Remarque
Cette option fonctionne sous certaines conditions. Consulter le paragraphe "Besoin conso"
ci-dessous.
3ème méthode
1. Section "Article commandé",
2. Rechercher l'article dans "Code article",
3. Si un service de la solution de service attaché au bien couvre les consommable,
ARTIS.net met en non facturable (prix de vente à 0) le consommable sélectionné,
4. Saisir la "Qté cdée",
5. < Disquette > ou <F2>.
Saisie de la quantité en stock chez le client
Le calcul de la quantité de  surconsommation déduira la quantité de stock d'avance chez le client.
Cette quantité en stock "au pied de la machine" est essentielle pour estimer au mieux la
surconsommation du client et de calculer au mieux la facturation des consommables (à la charge
du client de donner des informations correctes s'il ne veut pas être surfacturé)
Contrôle
Au moment de valider la saisie, ARTIS vérifie si une commande n'a pas déjà été saisie pour ce bien
avec ce même consommable, dans ce cas, un message s'affiche.
Ajouter une ligne de facturation
Il est parfois nécessaire d'ajouter une ligne de facturation comme les frais de port.
En ajout de ligne d'article commandé :
1. Dans "Ajouter ligne" en haut à droite, sélectionner "Facturation",
2. L'écran de ligne d'article de facturation s'affiche,
3. Rechercher l'article,
4. Saisir la quantité,
5. Saisir le prix unitaire,
6. <Disquette> ou <F2>.
Ajouter une ligne de commentaire
Il est parfois nécessaire d'ajouter une ligne de facturation comme les frais de port.
En ajout de ligne d'article commandé :
1. Dans "Ajouter ligne" en haut à droite, sélectionner "Commentaire",
2. Saisir dans le pavé commentaire,
3. <Disquette> ou <F2>.
Informations importantes et/ou complémentaires
Section "Article commandé", dans <Mosaïque>
ÉTAT DES STOCKS
Permet :
§ De voir l'état des stocks,
§ De voir la disponibilité de l'article.
§ De changer le dépôt de la ligne de commande :
1. Sélectionner le dépôt ciblé,
2. <Disquette> ou <F2>,
Sinon <X >.
HISTORIQUE DES LIVRAISONS
Permet de voir les précédentes livraisons et les prix déjà pratiqués envers le client :
1. Lancer le traitement avec <Flèche verte>,
2. Le tableau récapitulatif des livraisons s'affiche, consulter Historique des livraisons.
BESOINS CONSO
Le compteur estimé de la dernière livraison est calculé avec les relevés précédant la dernière
livraison.
Le compteur estimé à la date de la commande reste calculé avec le VMM courant.
Rappel
Les alertes ARTIS ne peuvent fonctionner :
§ Qu'avec un historique des relevés cohérent,
§ Que si les compatibilités sont enregistrées,
§ Que si les durées de vie des composants (consommables) sont enregistrées.
Pour plus de détail, consulter "Besoin conso".
MODÈLES COMPATIBLES
Permet :
§ De consulter les compatibilités existantes,
§ De compléter les Compatibilités.
Consulter Gérer les compatibilités.
TARIFS DE VENTE
Permet :
§ De voir les prix actuels de vente et d'achat,
§ De mettre à jour les tarifs pour cet article :
1. <Crayon>,
2. Saisir le "Prix" du ou des lignes de Tarifs de Vente et d'Achat,
3. < Disquette > ou <F2>.
SAISIE DU STOCK CLIENT
Au moment de l'appel du client, l'ADV a l'opportunité de faire le point avec le client sur les
stocks encore disponible sur le site d'installation du bien.
Ce menu permet d'accéder au masque de saisie des relevés de stocks clients.
Pour la saisie de la quantité du stock chez le client, voir ' Relever les stocks chez les clients
Les différents types de ligne
Les articles commandés
Ce type de ligne correspond à "Commande" dans la liste déroulante "Ajouter ligne", en haut, à
droite de l'écran (utiliser l'ascenseur vertical).
Dans la première colonne "Type" du tableau "Lignes de commande", ces lignes sont typées "Cdé".
Il s'agit des articles "classiques", tangibles, gérés comme bien ou non, suivis en stock ou non,
intangibles, consulter le chapitre "Section "Article commandé" ci-dessus pour plus d'explications
et Articles, Généralités et Théorie et Gérer les articles.
Ces articles sont livrés, facturés et font l'objet d'une écriture comptable.
Les articles de facturation
Ce type de ligne correspond à "Facturation" dans la liste déroulante "Ajouter ligne", en haut, à
droite de l'écran (utiliser l'ascenseur vertical).
Dans la première colonne "Type" du tableau "Lignes de commande", ces lignes sont typées
"Fact".
Il s'agit des articles de facturation, consulter Articles, Généralités et Théorie et Gérer les articles de
facturation.
Ces articles sont livrés, facturés et font l'objet d'une écriture comptable.
Il est nécessaire de renseigner : Code article, Libellé article, Qté commandée, Prix unitaire net HT,
Taux de TVA et Commentaire.
Les lignes de commentaire
Ces informations vont apparaître dans le corps de la commande. L'information sera reprise dans la
livraison et la facture (200 caractères maximum).
Rechercher une commande de consommables existante
RECHERCHER UNE COMMANDE DE CONSOMMABLES
EXISTANTE
Ventes / Commandes clients / Gérer les commandes de consommables
1. Recherche de la commande :
§ Rechercher d'après le numéro de commande,
§ Ou en tapant tout ou partie du nom du client,
· Sélectionner la commande dans la liste,
§ Ou <Loupe> ou <F1>,
· Compléter un ou plusieurs critères,
· <Disquette> ou <F2>,
· Sélectionner la commande dans la liste,
2. <Disquette> ou <F2>,
3. La commande s'affiche.
Particularités
Alertes de sur-stock, sous-stock et Besoin conso
CONTRÔLER LES STOCKS CHEZ LE CLIENT
Un contrôle du stock client se fait sur la ligne de commande en fonction d'un seuil et d'un plafond :
o Stock MINI : c'est le nombre de mois de stock minimum autorisé. Cette valeur permet de
diminuer les commandes et donc les frais d'expédition
o Stock MAX I : c'est le nombre de mois de stock maximum autorisé. Cette valeur permet de ne
pas envoyer trop de consommables d'avance
Ce contrôle se fait sur le volume Pages A4 en fonction de la nature du produit mis dans la
commande (par exemple, Volume pages A4 couleur si on livre un toner couleur). Pour ventiler vos
articles en noir ou couleur, consulter la fiche Article.
Lorsque une ligne d'article liée à un matricule est enregistrée, la système calcule la durée de vie du
produit (toner par exemple) et estime le stock chez le client en fonction du volume mensuel de la
machine.
Exemple : alerte  sur le volume noir (équivalent Page A4)
Date de livraison Consommables
livrés Compteur estimé Delta précédente livraison
24/10/2005 2 2454
14/12/2005 2 7896 (  7896 –   2454) / 2 soit 2721 copies par toner
20/02/2006 1 15153 (15153 –   7896) / 2 soit 3629 copies par toner
Aujourd'hui 1 20916 (20916 – 15153) / 1 soit 5763 copies par toner
Le delta moyen est (20916 – 2454) / 5 soit 3692 copies par toner
Pour justifier l'alerte, vous pouvez cliquer sur le lien ‘Besoin conso'. Un tableau vous donne les
différents calculs effectués pour détecter un sous-consommation (mini non atteint) ou une sur-
consommation.(maxi dépassé)
Calcul du Stock Estimé chez le Client (en mois)
Préambule : Le Delta moyen jusqu'à la dernière livraison est calculé ainsi :
1ER CAS
L'historique des livraisons est suffisant (plus d'1 bon de livraison). Le Delta moyen depuis la
dernière livraison est :
2ÈME CAS
L'historique des livraisons n'est pas suffisant (1 bon de livraison maxi). Le Delta moyen depuis la
dernière livraison est la durée de vie de l'article
Dans notre exemple ci-dessus (1er cas), le Delta moyen depuis la dernière livraison est :
(15153 - 2454) / 4 = 3175
Formule de calcul du nombre de mois de stock chez le client
( (3175 x 1) - (20916 - 15153) ) / 3246 = (3175 - 5763) / 3246
Soit :
- 0.8 mois de stock d'avance
Ou
+ 0.8 mois de rupture de stock
Alertes
Lors de la saisie de la quantité commandée, le programme effectue ces contrôles :
Alerte de surconsommation
Dès que la durée de vie moyenne de l'article livré est plus de 2 fois inférieure à la durabilité
annoncée de l'article (donnée constructeur), un message apparaît :
" ALERTE DE SURCONSOMMATION
La durée de vie estimée (consommation client)
est au moins 2.0 fois moins importante que
durée de vie théorique constructeur.
Durée de vie estimée : 354
Durée de vie théorique : 15000
Voulez-vous continuer l'enregistrement ? "
Remarque
Lorsqu'ARTIS déclenche une alerte de sur-consommation, il n'affiche pas celles de sur-stock.
Alerte de surstock
Dès que la quantité commandée donne une estimation de stock supérieure au MAX I autorisé,
vous obtenez ce message :
1– Il reste du stock chez le client
" DEPASSEMENT STOCK MAXI (3 mois)
Estimation du stock client : stock de 3.31 mois
Livraison de 1.0 représente 2.69 mois de stock
Stock final estimé à 2.69 + 3.31 = 6.01 mois
Voulez-vous continuer l'enregistrement ? "
2– Le client est en rupture de stock
" DEPASSEMENT STOCK MAXI (3 mois)
Estimation du stock client : rupture de 0.16 mois
Livraison de 2.0 représente 9.34 mois de stock
Stock final estimé à 9.34 + 0.16 = 9.18 mois
Voulez-vous continuer l'enregistrement ? "
Alerte de sous-stock
Dès que la quantité commandée donne une estimation de stock inférieur au MINI autorisé, vous
obtenez ce message :
1– Il reste du stock chez le client
"STOCK MINI NONN ATTEINT (1 mois)
Estimation du stock client : stock de 0.11 mois
Livraison de 1.0 représente 0.53 mois de stock
Stock final estimé à 0.53 + 0.11 = 0.64 mois
Voulez-vous continuer l'enregistrement ? "
2– Le client est en rupture de stock
"STOCK MINI NONN ATTEINT (1 mois)
Estimation du stock client : stock de 0.27 mois
Livraison de 1.0 représente 0.52 mois de stock
Stock final estimé à 0.52 + 0.27 = 0.25 mois
Voulez-vous continuer l'enregistrement ? "
Attention
Cet exemple de rupture de stock estimée (0.271 mois) peut s'expliquer par :
§ des relevés erronés entraînant de mauvaises estimations donc de mauvais calculs de
stock supposé
§ des affectations de consommables à un autre matériels entraînant une sous-
consommation sur le matériel concerné (et une sur-consommation sur les autres
matériels),
§ des durées de vie réelles pour les consommables supérieures à celles données par le
constructeur parce que la densité d'encre utilisée par le client est inférieure à la norme
du constructeur.
Besoin Conso
Un lien "Besoin conso" permet de consulter un écran avec :
o Le besoin sur l'article sur l'article en cours,
o Les besoins sur les autres articles compatibles.
Dans la section "Besoins et surconsommations"
Code et le nom du client,
Matricule et le libellé du bien concerné,
Code et le libellé de l'article vendu (si un article a déjà été saisi dans la ligne de commande),
Besoin
C'est la qté estimée du besoin client,
VPA4
C'est le Volume Pages A4 de la machine en fonction de la nature de l'article commandé (VPA4
noir + couleur si l'article est typé ‘Noir', VPA4 couleur si l'article est typé ‘Couleur'),
Cpt. Estimé aujourd'hui
C'est le compteur estimé à la date d'aujourd'hui,
Date rupture estimée
Indique la date estimée à laquelle le client va se trouver en rupture de stock. Si elle est
dépassée, ARTIS considère que le client est d'ores et déjà en rupture et reporte la date de la
commande dans cette colonne,
Cpt. rupture estimé
C'est le compteur estimé de la rupture de stock. S'il est dépassé, ARTIS considère que le
client est d'ores en rupture et reporte l'estimation du bien dans cette colonne,
Durée de vie estimée
C'est la durabilité constatée chez le client. Si aucune livraison n'a été faîte, on affiche la durée
de vie théorique,
Durée de vie théorique
C'est la durabilité théorique (annoncée par le fabricant) renseignée dans la fiche de l'article
d'achat. Si on ne la trouve pas dans cette fiche, on affiche 0,
Date dernière livraison
C'est la date de la dernière livraison effectuée. Si aucune livraison n'a été faîte, la zone est vide,
Cpt. Dernière livraison
C'est le compteur estimé à la dernière livraison de ce consommable. Si aucune livraison n'a été
faîte, la zone est vide,
Qte dernière livraison
C'est la quantité de consommable de la dernière livraison. S'il n'y a aucune livraison pour cet
article et ce bien, la zone est vide,
Qté totale livrée
C'est la quantité totale de consommable livré pour ce bien. Si aucune livraison n'a été faîte, on
affiche 0,
Cpt mini
C'est le compteur de rupture estimé avec le stock mini (1 mois généralement),
Cpt maxi
C'est le compteur de rupture estimé avec le stock maxi (3 mois généralement),
Date installation
C'est la date d'installation du bien,
Cpt à l'installation
C'est le compteur à l'installation du bien,
Date rupture
Indique la date estimée à laquelle le client va se trouver en rupture de stock,
Cpt proch. rupture
C'est le compteur estimé de la prochaine rupture de stock en prenant en compte la qté de la
commande en cours,
Ratio des durées de vie
C'est le ratio entre la durée de vie estimée et la durée de vie théorique. S'il est inférieur à la
limite de surconsommation, on affiche la ligne en surconsommation,
Dern. Qté chez le client
Dernier relevé de stock effectué chez le client,
Date saisie stock client
Date de ce dernier relevé de stock effectué chez le client.
Dans la section "Anticipation"
Matricule et le libellé du bien concerné,
Code et le libellé de l'article vendu,
Qté à commander,
Date de livraison souhaitée,
Stock dispo.
Remarque
Dans la section "Besoins et surconsommations", la dernière livraison est prise en compte car
ARTIS.net considère que le client demande du  consommable parce qu'il est en rupture.
Dans la section ‘Anticipation des commandes', la dernière livraison n'est pas prise en compte.
Historique des livraisons
HISTORIQUE DES LIVRAISONS
Cette requête est utilisée à partir de plusieurs écrans :
o Les Commandes,
o Les Solutions de service client,
o Les Demandes de prestations - DIT.
Par défaut, la période de recherche est positionnée en fonction de la valeur d'un paramètre,
consulter le paramètre à la fin de cette page.
Par défaut, l'historique est fait sur les livraisons uniquement. Il est possible d'étendre la recherche
aux consommations faites pas les comptes-rendus d'intervention - CRIT. Pour cela, l'utilisateur met
"Oui" dans  "Inclure CRIT".
Remarque
En pratique, ARTIS effectue une union des résultats de l'historique des livraisons avec les résultats
de "Consulter les articles livrés en interventions", consulter Consulter les articles livrés en
interventions.
Commande
L'historique peut être fait uniquement en ligne de commande. Certains critères sont pré-remplis.
L'utilisateur peut le cas échéant, les modifier :
§ Code article vendu : Si un article est présent sur la ligne, il s'agit de son code,
§ Bien de destination : Identifiant fabricant de la ligne de commande (cas d'une
commande de consommable),
§ Client livré : Code du client de livraison de la ligne de commande (identique à celui de
l'entête le plus souvent),
§ Organisation interne : L'organisation interne de la commande.
SSC
L'historique peut être fait uniquement après avoir sélectionné un bien. Les critères pré-remplis sont :
§ Bien de destination : Identifiant fabricant du bien sélectionné,
§ Client livré : Code du client de la SSC,
§ Organisation interne : L'organisation interne de la SSC.
DIT
Les critères pré-remplis sont :
§ Bien de destination : Identifiant fabricant du CRIT,
§ Client livré : code du client de la DIT,
§ Organisation interne : L'organisation interne de la DIT.
DESCRIPTIF DES INFORMATIONS EN RÉSULTAT
Position Position
lettrée Label de la colonne Format Commentaire
1 A N° affaire  Texte
2 B N° Cde  Texte
3 C N° ext. Cde  Texte
4 D Date Cde  Instant
5 E Date souhaitée Livr  Instant
6 F Date confirmée Livr  Instant
7 G Code client Livr  Texte
8 H Raison sociale client Livr  Texte
9 I Date BL  Instant
10 J N° BL  Texte
11 K N° ext. BL  Texte
12 L Etat BL  Texte
13 M Date CRIT  Instant
14 N N° CRIT  Texte
15 O Article cdé  Texte
16 P Libellé Article cdé  Texte
17 Q Marque d'achat  Texte
18 R Référence  Texte
19 S Qté cdée  Monétaire
20 T Qté livrée  Monétaire
21 U Prix net HT  Monétaire
22 V Total ligne HT  Monétaire
23 W Coût revient  Monétaire
24 X Coût revient ligne  Monétaire
25 Y Id. fabricant  Texte
26 Z Id. prestataire  Texte
27 AA Id. client  Texte
28 AB Id. fabricant de destination  Texte
29 AC Id. prestataire de destination  Texte
30 AD Id.client de destination  Texte
31 AE Date facture  Instant
32 AF N° facture  Texte
33 AG N° ext. facture  Texte
34 AH Code client facturé  Texte
35 AI Raison sociale client facturé  Texte
36 AJ Qté facturée  Monétaire
37 AK Code Org int  Texte
38 AL Raison sociale Org int  Texte
39 AM Nom Activité  Texte
40 AN Nom Famille  Texte
41 AO Nom sous-famille  Texte
42 AP Couverture contractuelle d'articles  Texte
43 AQ Prestation et nature de DIT  Texte
44 AR A3-A4  Texte
45 AS Métier CRM  Texte
Colonnes dépendant du paramétrage
de ARTIS.net
Paramètres
Paramètres application / Paramètres application / Gérer les paramètres
o Paramètre "PARAM_APPLI_NBMOIS_HISTORIQUE"
o Valeur : Mettre le nombre de mois, par défaut 10
Mettre en Non facturable ou Facturable un BL de consommable
METTRE EN NON FACTURABLE OU FACTURABLE UN BL DE
CONSOMMABLE
Rectifier un BL de consommable mis en facturable à tort
Ventes / Livraison client / Gérer les livraisons clients
1. Rechercher le BL,
2. Sélectionner la ligne à rectifier,
3. <Crayon>,
4. Mettre le prix unitaire H.T. de vente à zéro,
5. < Disquette > ou <F2>.
Facturer un BL de consommable mis en NON facturable à tort
Ventes / Livraison client / Gérer les livraisons clients
1. Rechercher le BL,
2. Sélectionner la ligne à rectifier,
3. <Crayon>,
4. Mettre le prix unitaire H.T. de vente,
5. < Disquette > ou <F2>.
Consulter "Historique des livraisons" à droite pour visualiser les précédentes livraison et les prix
déjà facturés.
Consulter "Tarif de vente" à droite pour visualiser tous les prix praticables.
Relever des stocks chez le client
RELEVER DES STOCKS CHEZ LE CLIENT
Option
1. En prise de commande de consommables
Ventes  / Commandes clients / Gérer les commandes de consommables
Consulter ' Saisir une commande de consommable ', point  "Saisie du stock client"
2. Depuis le menu
Biens et configurations / Relever les stocks chez les clients
Procédure
1. En entrant dans l'écran, la recherche des biens se fait selon trois critères :
§ Tous les sites du client : la recherche se fait sur les clients,
§ Les biens du site : la recherche se fait sur les sites des clients,
§ Un seul bien : la recherche se fait sur les biens,
2. Après avoir trouvé le(s) bien(s) du client,
3. Sélectionner ceux pour lesquels les Quantité de stocks doivent être relevées,
4. Lancez par <F2>.
Remarque
Si, dans votre sélection, des biens n'ont pas de compatibilités, ils sont exclus automatiquement de
la liste obtenue.
5. La liste des articles compatibles avec les modèles de biens sélectionnés s'affichent,
6. Dans le tableau des biens, la colonne "Date dernière saisie" affiche la date du dernier relevé de
stock. Si ARTIS n'en trouve pas, il la remplace par "Aucune saisie",
7. Cliquer sur le lien pour obtenir tous les articles compatibles avec le bien concerné.
8. Dans le tableau de saisie des stocks chez le client pour les articles compatibles, le lien "Stock
client" donne le dernier relevé de stock et/ou le dernier mouvement de stocks de l'article
compatible sur le(s) modèle(s).
Cas d'une saisie sur un seul bien compatible
1. Saisir la quantité de stocks relevée chez le client et modifier éventuellement une date de relevé,
2. Valider par <F2>,
3. Retour sur le 1er écran : la date de dernière saisie est donc alimentée.
Cas d'une saisie sur plusieurs biens compatibles
Dans le cas d'une saisie de relevé de stock portant sur plusieurs biens compatibles, ARTIS va
chercher à ventiler la quantité relevée sur les différents biens du même modèle.
Règle de ventilation par bien sélectionné
QUANTITÉ MULTIPLE DU NOMBRE DE BIENS
Si la quantité commandée est un multiple du nombre de biens sélectionnés, la ventilation se
fait équitablement sur chaque bien, exemple :
20 toners commandés pour 10 biens sélectionnés è 2 toners sont affectés à chaque biens.
QUANTITÉ NON MULTIPLE INFÉRIEURE AU NOMBRE DE BIEN
Si la quantité commandée est inférieure et n'est pas un multiple du nombre de biens
sélectionnés, la ventilation se fait ainsi :
1. Calcul du Volume en Pages A4 de chaque bien
2. Si le VPA4 est OK (pas d'incohérences dans l'historique)
è La quantité commandée est dispatchée sur les biens avec le haut VPA4
3. Si le VPA4 n'est pas OK (incohérences dans l'historique)
è La quantité commandée est dispatchée sur les premiers biens affichés
Exemple avec VPA4 OK :
2 toners commandés pour 3 biens sélectionnés
§ 1 toner est affecté au bien avec VPA4 de 10000,
§ 1 toner est affecté au bien avec VPA4 de 5000.
Exemple avec VPA4 pas OK :
2 toners commandés pour 3 biens sélectionnés
§ 1 toner est affecté au bien numéro 1,
§ 1 toner est affecté au bien numéro 2.
QUANTITÉ NON MULTIPLE SUPÉRIEURE AU NOMBRE DE BIEN
Si la quantité commandée est supérieure et n'est pas un multiple du nombre de biens
sélectionnés, la ventilation se fait ainsi :
1. Répartition de la quantité multiple sur chaque bien
2. Calcul du Volume en Pages A4 de chaque bien
3. Si le VPA4 est OK (pas d'incohérences dans l'historique)
è La quantité commandée restante est dispatchée sur les biens avec le haut
VPA4
4. Si le VPA4 n'est pas OK (incohérences dans l'historique)
è La quantité commandée restante est dispatchée sur les premiers biens affichés
Exemple avec VPA4 OK :
8 toners commandés pour 3 biens sélectionnés
§ 2 toners sont affectés à chaque bien,
§ 1 toner est affecté au bien avec VPA4 de 10000,
§ 1 toner est affecté au bien avec VPA4 de 5000.
Exemple avec VPA4 pas OK :
8 toners commandés pour 3 biens sélectionnés
§ 2 toners sont affectés à chaque bien,
§ 1 toner est affecté au bien numéro 1,
§ 1 toner est affecté au bien numéro 2.
Drapeaux
La couleur du drapeau indique la possibilité de ventilation automatique des quantités relevées :
Drapeau rouge : pas de ventilation automatique (aucun mouvement enregistré depuis le dernier
relevé de stocks
Drapeau vert : ventilation automatique possible (il existe un mouvement depuis le dernier relevé
de stocks
CAS D'UNE SAISIE SUR UN OU PLUSIEURS BIENS COMPATIBLES SANS MOUVEMENT
Dans le cas d'une saisie de relevé de stock portant sur un ou plusieurs biens compatibles, si
ARTIS.net ne trouve aucun mouvement, cela veut dire que le client n'est pas censé avoir du
stock d'avance. Le drapeau est donc rouge.
Cependant, l'utilisateur peut vouloir forcer la saisie. Après avoir saisi la quantité de stock, un
message d'anomalie s'affiche. Il suffit de le valider pour continuer.
L'article qui pose problème s'affiche en rouge. En validant à nouveau, la ventilation est forcée.
Modification des historiques des quantités en stock
Pour modifier l'historique des quantités en stock :
1. Depuis la commande,
2. Cliquer sur "Bien",
3. Cliquer sur "Grandeur",
4. Cliquer sur "Relever une quantité en stock",
5. Une page avec l'article et la dernière quantité en stock saisie s'affiche,
6. Cocher la ligne,
7. Modifiez la quantité,
8. <Disquette> ou <F2>.
complément
Consulter Rendre la saisie des relevés de stock obligatoire.
Paramétrage
PARAMÉTRAGE
Article
Articles / Articles / Gérer les articles
Durabilité
Les articles de type "composant" doivent être renseignés dans l'un des champs Durabilité de la
fiche article. La durée de vie théorique du constructeur s'indique dans la zone "Durabilité
annoncée".
1. Appeler l'article,
2. Cliquer sur "Réf. fournisseur et/ou fabricant",
3. Section "Références", sélectionner la ou une ligne de référence fournisseur,
4. <Crayon>,
5. Section "Références fabricant", compléter la "Durabilité",
6. <Disquette> ou <F2>.
Compatibilité
Gérer les compabilités sur les consommables, consulter Gérer les compatibilités.
Cas particulier
Certains modèles ont un seuil d'alerte d'encre proche de 0, ce qui impose au client d'avoir un
consommable d'avance. Pour gérer ce cas et faciliter la saisie des commandes, il est prévu une
zone "Nb toners en stock nécessaire". Il suffit de saisir la quantité en stock par défaut.
Ainsi, à chaque saisie de ligne de commande sur cet article, la quantité en stock chez le client
sera initialisée avec cette valeur par défaut. L'opérateur pourra malgré tout la modifier.
Consulter Articles.
Liste
Liste de catégories d'article
Une liste définit les catégories d'articles compatibles pour lesquels le relevé de stock sera possible.
Paramètres application / Classifications, listes et tables de décision / Gérer les listes
Créez une liste paramétrée comme suit :
o Id technique : "FILTRE_ARTICLES_CLIENT"
o Nom : Catégories d'articles pour le relevé de stock,
o Domaine "articles", Classe "ArtVendu".
Complément
Consulter Paramétrage des alertes de sur-consommation.
Sur-consommation de consommables
CONTRÔLER ET FACTURER LA SURCONSOMMATION

La couverture contractuelle des consommables dans les Solutions de services s'appuie sur les
durées de vie données par les constructeurs (théoriques), exprimées généralement par rapport à un
taux d'aplat de 5% sur une page A4.
Lorsqu'un client surconsomme de l'encre, c'est-à-dire que la durée de vie du consommable
constatée est nettement inférieure à celle théorique du constructeur, les termes du contrat peuvent
prévoir la facturation de la surconsommation au client.
A l'aide des paramétrages suivants, cette alerte automatise la détection de cette surconsommation
et déclenche la facturation sur une facture de la chaîne des ventes ou l'insére dans la prochaine
facture de Solution de services.
Si l'article commandé n'a pas de couverture contractuelle valide, le contrôle ne s'effectue pas.
Pour gérer les exceptions clients ou Solution de services une classification dans la fiche du Client
ou dans la Solution de services est à compléter.
Paramétrage des alertes de sur-consommation
PARAMÉTRAGE DES ALERTES DE SUR-CONSOMMATION
Paramétrages de gestion
Activation de l'alerte sur les stocks
Paramètres application / Paramètres application / Gérer les paramètres
§ Paramètre "GERE_CMDECONSO"
§ Coché : Active l'alerte de sur-stock ou sous-stock lors d'une commande de
consommable
Limite du déclenchement de l'alerte
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre sert à déclencher l'alerte de surconsommation des consommables. Par défaut, il
est à 0.5. Cela veut dire que le message d'alerte s'affiche lorsqu'ARTIS constate une durée de
vie deux fois moins importante que la durée de vie théorique. Si une alerte doit être faite dès
que le consommable a fait un tiers de moins que sa durée théorique, passer ce paramètre à
0.66.
§ Paramètre "LIMIT_SURCONSO"
§ Coché : 0.5 Limite de surconsommation permise par rapport à la durée de vie théorique
(pourcentage)
Facturation de la surconsommation
Paramètres application / Paramètres application / Gérer les paramètres
§ Paramètre "FACTURER_LES_SURCONSOMMATIONS"
§ Valeur :
· Coché : Indique que les surconsommations sont à facturer
· Non coché : Par défaut
Délai sans surconsommation
Paramètres application / Paramètres application / Gérer les paramètres
§ Paramètre "DELAI_SANS_SURCONSO"
§ Valeur : 12 Délai depuis l'installation du bien avant de déterminer s'il y a
surconsommation ou pas (en mois)
Mode de facturation de la surconsommation
Paramètres application / Paramètres application / Gérer les paramètres
Le paramètre déclenche la facturation des consommables en surconsommation dans la chaîne
des ventes classique (Commande, Livraison, facture). La valeur est celle de l'Identifiant
technique de la Catégorie dans la classification "MODE_FACTURATION_LGNCMDE" et
"MODE_FACTURATION_LGNLIVR"
§ Paramètre "FACTURATION_SURCONSOMMATION_MODE"
§ Valeur :
· M_FACT_CLA  : Mode de facturation des surconsommations sur une facture
classique
· M_FACT_SSC : Mode de facturation des surconsommations sur les factures
SSC
Tarif de facturation des surconsommations
Paramètres application / Paramètres application / Gérer les paramètres
Le paramètre sert à déterminer le tarif utilisé pour facturer les consommables en
surconsommation. Il est possible par exemple de créer un nouveau tarif pour facturer les
consommables à un tarif préférentiel.
§ Paramètre "TARIF_ARTICLE_SURCONSOMMATION"
§ Valeur : PUB Code du tarif à utiliser pour facturer les articles en surconsommation
Nombre de mois maximum
Paramètres application / Paramètres application / Gérer les paramètres
§ Paramètre "MAX I_MOIS_LIVR"
§ Valeur : 3, par défaut. Le stock maxi permis chez le client en nombre de mois.
Nombre de mois minimum
Paramètres application / Paramètres application / Gérer les paramètres
§ Paramètre "MINI_MOIS_LIVR"
§ Valeur : 1, par défaut. Le stock mini permis chez le client en nombre de mois.
Classification
Consulter Créer une classification avec les informations ci-après.
Facturation
Classification
Nom : "Facturation des consommables en surconsommation"
Abréviation : "CEFS"
Identifiant technique : "CLT_NE_PAS_FACTURER_LES_SURCONSO"
Domaine : "Partie"
Classe : "com.artis.business.parties.OrgClte"
Catégorie
Ensuite, définissez les deux catégories suivantes :
1.
Nom : "Oui"
abréviation : "O"
Identifiant technique : "OUI"
2.
Nom : "Non"
abréviation : "N"
Identifiant technique : "NON"
Mode de facturation (commande)
Classification (obligatoire)
Nom : "Mode de facturation de la surconsommation dans les commandes"
Abréviation : "MFSC"
Identifiant technique : "MODE_FACTURATION_LGNCMDE"
Domaine : "Ventes"
Classe : "artis.business.ventes.LgnCmdeArtVendu"
Catégorie
Ensuite, définissez les deux catégories suivantes :
1.
Nom : "Facture classique"
abréviation : "Classique"
Identifiant technique : "M_FACT_CLA"
2.
Nom : "Facture SSC"
abréviation : "SSC"
Identifiant technique : "M_FACT_SSC"
Mode de facturation (livraison)
Classification (obligatoire)
Nom : "Mode de facturation de la surconsommation dans les livraisons"
Abréviation : "MFSL"
Identifiant technique : "MODE_FACTURATION_LGNLIVR"
Domaine : "Ventes"
Classe : "artis.business.ventes.LgnLivrArtVendu"
Catégorie
Ensuite, définissez les deux catégories suivantes :
1.
Nom : "Facture classique"
abréviation : "Classique"
Identifiant technique : "M_FACT_CLA"
2.
Nom : "Facture SSC"
abréviation : "SSC"
Identifiant technique : "M_FACT_SSC"
Client
Tiers / Clients / Gérer les organisations de type client
Il s'agit de classifier les clients à exclure de la facturation des surconsommations :
1. Appeler leur fiche,
2. Cliquer  sur  le  lien  ‘Classifications'  pour  les  mettre  dans  la  catégorie  correspondant  à
l'exclusion.
Règles de calcul de la sur-consommation
RÈGLE DE CALCUL DE LA SURCONSOMMATION
Calcul de quantité consommée
Exemple :
Quantité en stock à la dernière livraison (15/07/2009) 2
Quantité livrée à la dernière livraison consommée (15/07/2009) 3
Quantité en stock à la commande en cours (30/09/2009) 1
La quantité consommée depuis la dernière livraison est : 2+3-1 = 4
Volume pages A4 en surconsommation
Exemple :
Durée de vie théorique (durée de vie théorique du constructeur dans la fiche Article) 40000
Volume pages A4 théorique (durée de vie théorique x quantité consommée (4) 160000
Volume pages A4 estimé au 30/09/2009 100000
Le volume pages A4 de surconsommation au 30/09/2009 60000
Contrôle de la limite de surconsommation
Exemple :
Volume pages A4 théorique (durée de vie théorique x quantité consommée (4) 160000
Valeur du paramètre LIMIT_SURCONSO 0.66
Volume pages A4 estimé au 30/09/2009 100000
Contrôle de la limite de la surconsommation (100000 / 160000) 0.625
Le taux de surconsommation (0.625) est inférieur au paramètre (0.66) donc il y a surconsommation
Calcul du montant facturé
Lorsqu'une surconsommation est détectée, ARTIS va exprimer une équivalence en nombre de
consommables du volume pages A4 en surconsommation.
Exemple :
Volume pages A4 en surconsommation au 30/09/2009   60000
Durée de vie théorique (équivaut au volume pages A4 théorique pour un consommable) 40000
Equivalent en nombre de consommables (60000 / 40000) 1.5
Prix unitaire du consommable (en euros) 100.00
Le montant de la ligne en surconsommation (en euros) est 150.00 €
Gérer les alertes de surconsommation
GÉRER LES ALERTES DE SURCONSOMMATION
En saisie de ligne de commande de consommable, un contrôle de la surconsommation est
effectuée et un message s'affiche, consulter Contrôler et facturer la surconsommation.
Alerte de surconsommation
Lorsqu'une lligne de commande est saisie, ARTIS.net contrôle la surconsommation des articles mis
dans la commande. Selon la règle de calcul décrite, consulter Règles de calcul de la sur-
consommation, dès que la surconsommation est détectée, un message d'alerte s'affiche.
" ALERTE DE SURCONSOMMATION
La durée de vie estimée (consommation client)
est au moins 2.0 fois moins importante que
durée de vie théorique constructeur.
Durée de vie estimée : 1668
Durée de vie théorique : 15000
Voulez-vous continuer l'enregistrement ? "
En confirmant, la ligne de commande s'enregistre avec un prix de vente correspondant au tarif
déclaré dans le paramètre "TARIF_ARTICLE_SURCONSOMMATION".
Deux cas se présentent :
1. Soit la quantité demandée est 1 :
â La ligne de commande s'enregistre avec 1 en quantité et le prix de vente correspondant
à la surconsommation.
2. Soit la quantité demandée est supérieure à 1 :
â  Une 1ère ligne  de  commande  s'enregistre  avec  1  en  quantité  et  le  prix  de  vente
correspondant à la surconsommation.
â Une 2ème ligne de commande s'enregistre avec le reliquat de quantité commandée avec
un prix de vente à 0.0 (couverture contractuelle).
Remarque
Cette alerte de surconsommations prend le pas sur l'alerte de sur-stock car, si les
surconsommations sont à factuer, il n'y a pas d'intérêt à limiter le stock des clients.
Remarque
Dans le cas rare d'une estimation de consommation négative, ARTIS  préfère ne pas déclencher la
surconsommation et affiche un message d'alerte.
Par exemple, pour un bien dont la consommation récente est beaucoup plus faible que le Volume
Moyen  Mensuel  pris  en  compte  dans  le  calcul,  il  se  peut  qu'ARTIS estime  un  compteur à  la
dernière livraison supérieur au  compteur  estimé  du  jour  de  la  commande.  Dans  ce  cas,  la
surconsommation n'est pas facturée et un message prévient l'opérateur.
Détail surconsommation
Dans la ligne de commande, dans <Mosaïque>, "Détail surconsommation" permet de justifier le
calcul de surconsommation. Il apparait quand ARTIS détecte une surconsommation. Il donne un
écran justificatif de la facturation de la surconsommation. Deux cas se présentent :
1. Si vous avez répondu "Non" au message d'alerte de surconsommation :
â  Cela veut dire  que  vous ne  voulez pas  facturer la  surconsommation. Le  lien  ‘Détail
surconsommation' vous donne le détail du calcul mais n'affiche pas le montant facturable.
2. Si vous avez répondu "Oui" au message d'alerte de surconsommation :
â  Cela  veut  dire  que  vous  voulez  facturer  la  surconsommation.  Le  lien  ‘Détail
surconsommation' vous donne le détail du calcul avec le montant facturable.
Facturation de la surconsommation
Le traitement est celui d'une commande classique (le bon de livraison est chiffré et la facture est
saisie manuellement ou générée automatiquement).
Paramétrer les options par défaut
PARAMÉTRER LES OPTIONS PAR DÉFAUT
Les données par défaut découlent du paramétrage lié aux tables de décisions :
o DepotCmde_Cellule,
o Financement_Cellule,
o VendeurCmde_Cellule,
o TransporteurCmde_Cellule.
Valider les commandes du PORTAIL
VALIDER LES COMMANDES DU PORTAIL
Ventes / Commandes clients / Valider les commandes de consommables externes
Si les règles de traitements automatiques dans la table de décisions "INTEGRATION_PORTAIL"
n'ont pas été définies, une étape supplémentaire permet de valider et d'activer les Demandes
d'intervention dans ARTIS.
Pour  plus  de  détail  sur  les  paramétrages  du  portail,  consulter  le  chapitre  "Portail",  Accès
administrateur.
1. Les commandes en état "Saisie externes" s'affichent,
2. Sélectionner les commandes à intégrer,
3. Modifier les commandes pour ajouter le cas échéant des lignes, exemple : un article de frais de
port,
4. <Flèche verte> ou <F2>.
Remarque
Si cette étape de validation n'est souhaitée, consulter le chapitre "PARAMETRAGE DE
L'INTEGRATION AUTOMATIQUE DANS ARTIS".
Annulation des Commandes de consommables
Il est possbile de ne pas valider une Commande de consommables dans les cas suivants :
o Le client vous appelle pour vous demander de l'annuler,
o Le client est passé en litige comptable.
Pour cela :
1. Cliquer sur "Annulation",
2. Compléter la zone justificative de l'annulation,
3. <Flèche verte> ou <F2>.
Après annulation, un e-mail de confirmation est envoyé au demandeur.
Gérer les configurations de commande
GÉRER LES CONFIGURATIONS DE COMMANDE
Ventes / Commandes client / Gérer les configurations de commande
La configuration de commande est une fonctionnalités qui permet d'accélérer la saisie des
commandes de matériel. Sont insérés dans une configuration l'article modèle maître, tous ses
accessoires obligatoires ou optionelles selon le tarif du constructeur, des consommables, des
prestations...
Pré-requis
Pour le bon fonctionnement de cette fonctionnalité, il est obligatoire d'avoir renseigné correctement
les articles. Deux caractéristiques sont concernées :
o La relation maître – accessoire entre les articles modèles gérés comme bien,
o Le domaine d'intervention de l'article modèle maître.
Consulter Gérer les articles.
Remarque
Si au moins une des caractéristiques n'est pas satisfaite correctement, un message d'erreur
s'affiche et la génération n'est alors pas possible.
Procédure
1. <+>,
2. Donner une abréviation et une description,
3. Sélectionner un article modèle géré comme bien,
4. Sélectionner la ligne pour laquelle un élément doit être inséré,
5. Elément obligatoire :
1. <Mosaïque>,
2. Faire "Ajouter des éléments obligatoires",
3. Sélectionner l'article (modèle géré comme bien, composant, tangible autre ou
intangibles),
6. Elément optionnel :
1. <Mosaïque>,
2. Faire "Ajouter des éléments obligatoires",
3. Sélectionner l'article (modèle géré comme bien, composant, tangible autre ou
intangibles),
7. Reproduire la procédure de 4 à 6 autant de fois que nécessaire,
8. <X >
Pour modifier, utiliser <Crayon> ou <Poubelle> en bas du tableau.
Pour utiliser la configuration de commande, consulter Saisir une commande matériel.
Gérer les devis commerciaux
GÉRER LES DEVIS COMMERCIAUX
Créer un devis
Vente / Commandes clients / Gérer les devis commerciaux
Devis pour un prospect :
Pour établir un devis à un prospect, il est nécessaire d'avoir créer au préalable un client générique
de type "Devis client" ou "Divers". En effet, le devis est fait pour ce code client, mais il sera
possible de saisir les coordonnées propres au prospect.
Procédure
1. <+> pour créer un nouveau devis,
Page "En-tête de commande"
Section "Filière"
1. Rechercher le client,
2. Le client de commande est reporté automatiquement dans le client de livraison. Dans "Livrer",
sélectionner un autre code client, le cas échéant,
3. L'adresse (site) privilégiée de livraison de la fiche client est prise en compte automatiquement.
Dans "Livraison", sélectionner un autre site du client, le cas échéant,
4. Le client de commande est reporté automatiquement dans le client de facturation. Dans
"Facturer", sélectionner un autre code client, le cas échéant,
5. L'adresse (site) privilégiée de facturation de la fiche client est prise en compte
automatiquement. Dans "Facturation", sélectionner un autre site du client, le cas échéant,
6. Le dépôt affecté à l'adresse de livraison du client livré est pris en compte automatiquement
(sauf paramétrage particulier),
Section "Infos principales commande"
1. Le numéro interne est automatique,
2. Saisir la date de commande,
3. Vendeur terrain (obligatoire) : Il s'agit du vendeur qui suit le client sur le "terrain" (visites
régulières, …),
4. Télévendeur (non obligatoire) : Le télévendeur est en quelque sorte un deuxième vendeur affecté
à cette commande (par exemple, un client est suivi par un vendeur "terrain" saisi dans la
commande. La vente de la commande en cours est à l'initiative d'un vendeur "sédentaire",
5. Numéro externe (numéro ou la référence de commande du client),
6. Gestionnaire : Le gestionnaire est la personne qui gère cette commande. Parfois, il peut-être
différent de l'opérateur (exemple, s'il est absent, les commandes seront faites par un opérateur
différent du gestionnaire),
7. Interlocuteur : Personne à contacter chez votre client pour tout ce qui concerne la commande,
Zone "Règlement - Financement commande"
1. Payeur : Par défaut, c'est le client qui est enregistré dans la filière du client,
2. Règlement : Par défaut, c'est l'information enregistré dans la filière du client,
3. Acompte déjà payé : Ce montant viendra en déduction du total TTC pour obtenir le net à payer,
4. <Disquette> ou <F2>.
Ces informations seront reportées sur toutes les lignes saisies dans la commande.
Page "Lignes de commande"
Section "Lignes de commande"
Au fur et à mesure de la saisie des lignes, le tableau des lignes et les totaux s'actualisent :
o HT commandé : Sont cumulés ici les lignes d'article de commande,
o HT frais annexes : Sont cumulés ici les lignes d'article de facturation,
o Total HT commande : HT commandé + HT frais annexes,
o Total TTC commande : Total HT commande auquel la TVA est appliquée,
Section "Article commandé"
1. Rechercher l'article :
§ Dans "Code article" : Saisir le code interne ou la référence fournisseur ou une partie du
libellé de l'article,
§ Ou dans "Référence fournisseur",
2. Champ "Qté cdée", indiquer la quantité,
3. Champs "Prix unitaire net H.T..U.",
4. Taux de TVA : vérifier le taux,
5. Le commentaire est un commentaire attaché à l'article qui suit donc l'article dans tous les
documents de livraison et dans les reliquats.
<Disquette> ou <F2> permettent dès cet instant d'enregistrer la ligne d'article. Les autres
informations ont été complétées automatiquement, consulter les paragraphes ci-dessous pour plus
d'explications.
L'utilisateur réitère autant de fois la procédure qu'il y a d'articles à saisir.
Le devis est à l'état "Enregistré".
Une fois toutes les lignes saisie, quitter le mode saisie en faisant <X> ou <Esc>.
Autres types de ligne possible
Les articles de facturation
Ce type de ligne correspond à "Facturation" dans la liste déroulante "Ajouter ligne", en haut, à
droite de l'écran (utiliser l'ascenseur vertical).
Dans la première colonne "Type" du tableau "Lignes de commande", ces lignes sont typées
"Fact".
Il s'agit des articles de facturation, consulter Articles, Généralités et Théorie et Gérer les articles de
facturation.
Ces articles sont livrés, facturés et font l'objet d'une écriture comptable.
Il est nécessaire de renseigner : Code article, Libellé article, Qté commandée, Prix unitaire net HT,
Taux de TVA et Commentaire.
Les articles d'ajustement
Ce type de ligne correspond à "Ajustement" dans la liste déroulante "Ajouter ligne", en haut, à
droite de l'écran (utiliser l'ascenseur vertical).
Dans la première colonne "Type" du tableau "Lignes de commande", ces lignes sont typées
"Ajust".
Il s'agit des articles de facturation, consulter Articles, Généralités et Théorie.
Ces articles NE peuvent PAS être livrés, ne sont donc pas facturés et ne font pas l'objet d'écriture
comptable.
Elles permettent seulement d'obtenir une vue commerciale de la commande et de l'affaire.
Il est nécessaire de renseigner :
o Code article, Libellé article, Qté ajustement, Coût unitaire, Commentaire,
o CA COM :
Le montant calculé de la ligne entre dans le calcul du CA commercial de la commande et
donc de l'affaire (le cas échéant).
Une quantité positive donne un montant positif et augmente le CA Commercial et donc la
marge commerciale.
Une quantité négative donne un montant négatif et diminue donc le CA Commercial et donc
la marge commerciale.
Ou inversement, le signe négatif peut être porté sur le coût.
Les lignes de commentaire
Ces informations vont apparaître dans le corps de la commande. L'information sera reprise dans la
livraison et la facture (200 caractères maximum).
Gérer les états sur les devis
GÉRER LES ÉTATS DES DEVIS COMMERCIAUX
De prospect à client
Ventes / Commandes clients / Gérer les devis commerciaux clients
Le devis a été fait en utilisant le code du client générique.
1. Rechercher le devis,
2. Cliquer sur "Client",
3. Créer le client à partir des informations du prospect, consulter Créer un client,
4. Revenir au devis,
5. <Modifier> l'entête du devis,
6. Changer le code du client pour y mettre le nouveau code client,
7. Passer le devis en "Accepté",
8. <Disquette> ou <F2>.
De devis en commande
Ventes / Commandes clients / Gérer les devis commerciaux clients
1. Rechercher le devis,
2. Si le devis est fait à un prospect, consulter le prargraphe ci-dessus,
3. <Mosaïque>,
4. Cliquer sur "Générer commande client",
5. La commande s'affiche,
6. Faire les éventuelles modifications,
7. <X > ou <Esc> pour revenir au devis,
8. Si le devis était resté à l'état "Enregistré", alors il passe automatiquement à l'état "Accepté".
Les différents états du devis
Etat du devis Commentaire Etat suivant
Enregistré Devis saisi. Accepté
Accepté Passage manuel à cet état ou suite à la génération de la commande. Livré
Livré La commande issue du devis a été livrée en totalité (pas de gestion de l'état "Livré
partiellement"). Facturé
Facturé La commande issue du devis a été facturée en totalité (pas de gestion de l'état "Facturé
partiellement"). -
Remarque
L'état du devis ne change que si l'état de la commande est « ... en totalité ». Puisque les états du
devis ne gèrent pas les "partiellement".
Il est interdit de saisir une quantité commandée négative sur une ligne de devis. le prix peut être
négatif (fonctionnement similaire à celui des commandes).
Suivre les commandes et les reliquats clients
SUIVRE LES COMMANDES ET LES RELIQUATS CLIENTS
Ventes / Commandes clients / Suivre les commandes et les reliquats clients
Position Position
lettrée Label de la colonne Format Commentaire
1 A Etat livr. cmde Non livrable Partiellement livrable
Totalement livrable
2 B Etat livr. ligne Non livrable Partiellement livrable
Totalement livrable
3 C Cmde client Lien vers la commande client
4 D N° externe cmde
5 E Etat de la cmde
6 F Etat de préparation
7 G Date de la cmde
8 H Code client
9 I Raison sociale du client
10 J Code de l'article
11 K Libellé de l'article
12 L Référence fournisseur
13 M Qté cmdée
14 N Qté réservée en stock Lien vers "Réservations sur documents"
15 O Qté réserv. en cmde fourn.
16 P Qté livrée
17 Q Qté en reliquat
18 R Réservations Lien sur les "Transferts de réservations"
Lien sur "Réserver les biens"
19 S Dépôt
20 T Empl.
21 U Stock physique du dépôt Lien vers "Etat des stocks par article"
22 V Stock dispo du dépôt
Stock dispo de l'agence Sur l'ensemble des dépôts rattachées au
secteur logistique (agence)
Stock dispo de la société
Sur l'ensemble des dépôts de tous les
secteurs logistique de l'organisation
interne
23 W Cmde fourn.
24 X Date de la cmde fourn.
25 Y Date de livraison prévue fourn.
26 Z Etat de la cmde fourn.
27 AA Livr fourn.
28 AB Date livr.
29 AC Date souhaitée de livraison client
30 AD Date confirmée de livraison client
31 AE Matricule de destination
32 AF Modèle de destination
33 AG Num affaire
34 AH Opérateur
35 AI Nom du gestionnaire
36 AJ Prénom du gestionnaire
37 AK Nom du vendeur
38 AL Prénom du vendeur
39 AM Qté cmdée
40 AN P.U. brut HT ligne
41 AO Remise (taux)
42 AP Remise (montant)
43 AQ P.U. net HT ligne
44 AR Total net HT ligne
45 AS Code TVA
46 AT Total TVA ligne
47 AU Total TTC ligne
Consulter l'historique des commandes
CONSULTER L'HISTORIQUE DES COMMANDES
Ventes / Commandes clients / Consulter l'historique des commandes
Position Position
lettrée Label de la colonne Format Commentaire
1 A CodeClient  Texte
2 B Client  Texte
3 C NumCde  Texte
4 D NumExterne  Texte
5 E DateCde  Instant
6 F EtatCde  Texte
7 G DateDeLivraisonPrévue  Instant
8 H CodeArticle  Texte
9 I LibelléArticle  Texte
10 J LibelléArticleCde  Texte
11 K RéfArticle  Texte
12 L QtéCdée  Monétaire
13 M PUHTNet  Monétaire
14 N TotalHTLigne  Monétaire
15 O CoutURev  Monétaire
16 P CoutRevLigne  Monétaire
17 Q Code_Act  Texte
18 R Activité  Texte
19 S C_Fam  Texte
20 T Famille  Texte
21 U C_SousFam  Texte
22 V SousFamille  Texte
23 W CodeOrgInt  Texte
24 X OrgInterne  Texte
25 Y Nom classification  Texte
26 Z MatriculeGest  Texte
27 AA MatriculeTélév  Texte
28 AB MatriculeVend  Texte
29 AC Commentaire  Texte
Particularités
Activer le mode brouillon
ACTIVER LE MODE BROUILLON
Une commande "Brouillon" est une commande dont aucune demande de réservation n'est faite pour
les lignes d'articles.
Lorsque la commande est saisie, l'utilisateur dispose
o "Valider la commande" :
Cette validation génère des réservations automatiques :
§ Si aucune réservation n'est possible, la commande passe en état "En cours",
§ Si une partie des réservations sont établies, la commande passe en état "Livrable
partiellement ",
§ Si toutes les réservations sont établies, la commande passe en état "Livrable en
totalité",
o "Dévalider la commande" : la commande passe à l'état "Brouillon".
Paramétrage
Etat Brouillon
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "GESTION_ETAT_COMMANDE"
Valeur :
§ Coché : Active l'état Brouillon en création de commande,
§ Non coché : Les commandes sont immédiatement à l'état "en cours".
SUIVRE L'ÉTAT DES COMMANDES
Les différents états permettent de suivre la situation des commandes clients.
Les différents états d'une commande :
o "Brouillon"
Cet état optionnel permet de ne pas déclencher de réservation automatique.
o "En cours"
 Sans l'activation du mode "Brouillon", toute nouvelle commande reste à cet état avant
livraison. Les demandes de résevation sont activées dès la saisie des lignes d'articles,
o "Livrable partiellement"
Tout ou partie des lignes d'articles ou des quantité partielles sont réservées,
o "Livrable en totalité"
Toutes les lignes et toutes les quantités sont réservées,
Lorsque la commande passe en valide (complète), l'opérateur doit la rappeler et la valider en
cliquant sur le lien ‘Valider la commande'.
Ajouter une ligne négative
AJOUTER UNE LIGNE NÉGATIVE
Il est interdit de saisir une quantité commandée négative dans une ligne d'article commandé. Le prix
unitaire brut ou net peut, quant à lui, être négatif.
Comment est choisi le dépôt d'une commande
COMMENT EST CHOISI LE DÉPÔT D'UNE COMMANDE
Le choix du dépôt d'une commande concerne :
Pour les Ventes :
o Commande client + ligne
o Entête de facture client (directe)
Pour les Achats :
o Commande + ligne
o Livraison + ligne
o Facture
Commande client (classique)
1. Recherche sur le site de livraison (dépôt privilégié indiqué dans le site du client)
2. Via l'agence du client ( Table de décision « Dépôt agence »)
3. Via le paramètre CODE_DEPOT_DEFAUT_CMDE
4. Via le paramètre CODE_DEPOT_DEFAUT_LIVR
Commande  de consommable
1. Via la cellule conso du collaborateur connecté.
2. Recherche sur le site de livraison (dépôt privilégié indiqué dans le site du client)
3. Via l'agence du client ( Table de décision « Dépôt agence »)
4. Via le paramètre CODE_DEPOT_DEFAUT_CMDE
5. Via le paramètre CODE_DEPOT_DEFAUT_LIVR
Particularité de la saisie de commande de consommable
Au niveau de la ligne de commande cliente, on cherche un dépôt via la table de décision
"TD_CLASSIF_ARTICLE_DEPOT_EX TERNE". Si un dépôt est trouvé via les classifications de
l'article , le dépôt sélectionné précédemment dans l'entête de la commande est écrasé.
La saisie de cette table de décision impacte aussi l'intégration des commandes de consommable
via web service (portail).
Commande  fournisseur
1. Via le site de livraison de l'organisation interne (dépôt privilégié indiqué dans le site de
livraison)
2. Via le paramètre CODE_DEPOT_DEFAUT_CMDE
3. Via le paramètre CODE_DEPOT_DEFAUT_LIVR
Comment est valorisé le coût de revient
COMMENT EST VALORISÉ LE COÛT DE REVIENT
En mode dynamique (l'utilisateur ne fait pas de saisie)
La zone s'affiche en noir avec le libellé "Coût de revient"
Pour une ligne d'article géré comme bien avec une quantité multiple :
§ la zone s'affiche alors en bleu avec le libellé "Coût rev. moyen"
§ La valeur est la moyenne de la somme des valeurs des biens lorsque la quantité
commandée est supérieure à 1
L'ordre de valorisation est le suivant :
o Article non géré comme bien
1. Valorisation au tarif d'achat commercial
2. Valorisation avec la cotation (OPG)
3. Si suivi en stock : valorisation au PMP
4. Valorisation au prix d'achat
o Article géré comme bien
§ Biens d'occasions, lorsque le matricule est affecté à la ligne de commande
5. Valorisation au Prix Normal de cession commercial + Frais du bien
6. Selon paramètre : valorisation au prix Argus + frais du bien ou valorisation au
prix de reprise + frais du bien
7. Valorisation à 0 si aucune valeur présente dans la fiche du bien
8.
§ Biens neuf, lorsque le matricule est affecté à la ligne de commande
5. Valorisation au tarif d'achat commercial
6. Valorisation avec la cotation (OPG)
7. Valorisation au prix d'achat du bien + frais du bien
8. Valorisation au prix d'achat de la fiche article (article modèle)
§ Si la valorisation n'est pas complète : articles gérés comme bien mais encore non
réservé uniquement pour les commandes clients
5. Valorisation au prix d'achat du bien présent sur la ligne de commande
fournisseur (pour les calculs de CR depuis les lignes de commandes)
6. Valorisation au tarif d'achat commercial (pour les biens encore non réservés
sur la ligne de commande)
7. Valorisation avec la cotation (OPG)
8. Valorisation au prix d'achat de la fiche article
o Article intangible
§ Valorisation avec le taux horaire du collabo uniquement pour les articles utilisés dans
les prestations prédéfinies
· Technicien ayant effectué l'intervention (CRIT)
· Vendeur (ligne de commande, de devis, de livraison, de facture)
§ Valorisation au tarif d'achat commercial
§ Valorisation avec la cotation (OPG)
§ Si suivi en stock : valorisation au PMP
§ Valorisation au prix d'achat
Le mode statique
Le mode statique est appliqué dans les cas suivants :
§ L'utilisateur saisit une valeur dans la zone coût de revient,
§ Lorsqu'une affaire est validée, tous les coûts de revient des commandes de l'affaire
passent en statique,
§ Lorsque l'interface analytique des livraisons est effectué (option spécifique à un client).
La zone s'affiche alors en vert avec le libellé "Coût rev. saisi"
Modification des coûts de revient
Considérant une commande qui a fait l'objet d'une livraison puis d'une facture, alors...
o Si le coût de revient est modifié sur une ligne de Commande :
§ La modification est reporté sur la ligne correspondante dans la Livraison,
§ La modification est reporté sur la ligne correspondante dans la Facture,
o Si le coût de revient est modifié sur une ligne de Facture :
§ La modification est reporté sur la ligne correspondante dans la Livraison,
§ La modification est reporté sur la ligne correspondante dans la Commande.
Contrôle à la saisie ou à l'import
Des contrôles rendent obligatoire la saisie d'une valeur en création d'un bien en stock (valeur d'achat
obligatoire pour un bien neuf, ou valeur de reprise ou d'argus pour un bien d'occasion).
Le contrôle est également fait au niveau des outils d'import de migration.
Paramètres
Coût de revient accessible
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "BLOQUER_COUTREVIENT"
Valeur :
§ Coché : La zone du coût de revient en commande client est bloquée,
§ Non coché : Le coût de revient est accessible.
Mise à jour du coût de revient
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "BLOQ_MAJ_COUT_REVIENT"
Valeur :
§ Coché : Les coûts de revient sont bloqués (plus mis à jour) une fois que les factures
sont interfacées,
§ Non coché : Non bloqué.
Coût de revient des occasions
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "COUTREVIENT_BIENOCCAS_PRIX ARGUS"
Valeur :
§ Coché : Le prix ARGUS est le coût de revient des biens d'occasions,
§ Non coché : Montant reconditionné (Prix de reprise + Montant de reconditionnement).
Faire une mise à disposition
FAIRE UNE MISE À DISPOSITION
Consulter Mettre en immobilisation - Location pure - Mise à disposition.
Faire une commande pour un un broker
FAIRE UNE COMMANDE POUR UN UN BROKER
Consulter Broker ou Donner un Bien.
Gérer une commande client avec cotation
GÉRER UNE COMMANDE CLIENT AVEC COTATION
Paramètres
Consulter Réservation, Paramètres, Réservation pour cotation.
Initialiser la date de livraison souhaitée
INITIALISER LA DATE DE LIVRAISON SOUHAITÉE
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre permet d'initialiser la Date de livraison souhaitée.
Paramètre "INITIALISER_DATE_LIVRAISON_SOUHAITEE_COMMANDE"
Valeur :
§ Coché : La date de livraison souhaitée prend la valeur de la date de commande,
§ Non coché : Le paramètre, la date de livraison souhaitée reste vide.
Les différents états de la commande
LES DIFFÉRENTS ÉTATS DE LA COMMANDE
Etat de la comande
Etat commande Commentaire Etat suivant
Saisie externe Commande qui provient d'un outils externe à ARTIS.net (notamment le Portail, CRM ARTIS…).
En cours,
Livrable partiellement,
Livrable en totalité
Brouillon Commande en cours de saisie. Aucune demande de réservation n'est faite.
En cours,
Livrable partiellement,
Livrable en totalité
En cours Il s'agit d'une commande pour laquelle des demandes de réservations ont été faites mais non
satisfaites (aucune réservation en stock, ni aucun matricule de réservé).
Livrable partiellement,
Livrable en totalité
Livrable partiellement Un partie des demandes de réservation en stock ont été satisfaites. Des demandes restent en
attente.
Livrée partiellement,
Livrée en totalité
Livrable en totalité Toutes les lignes ont été totalement livrées. Livrée partiellement,
Livrée en totalité
Expédiée Non géré -
Livrée partiellement Une partie des lignes de la commande ont été livrées, ou des quantités partielles ont été livrées. Livrée en totalité
Livrée en totalité Toutes les lignes ont été totalement livrées. -
Archivé Commande supprimée ou importée suite à une migration. -
Etat de facturation de la commande
Etat de facturation Commentaire Etat suivant
Non facturable Commande dont le total H.T. est à zéro euro. -
Facturable Commande dont le total H.T. est différent de zéro euro. Facturée partiellement,
Facturée en totalité
Facturée partiellement Une partie des lignes de la commande ont été facturées, ou des quantités partielles ont été
facturées.
Facturée partiellement,
Facturée en totalité
Facturée en totalité Toutes les lignes ont été totalement facturées. -
Etat de préparation de la commande
Etat de préparation Commentaire Etat suivant
A préparer Une DIT de préparation a été générée depuis la commande Préparée
Préparée La DIT de préparation a été cloturée -
Sans préparation La commande n'a pas d'article de prestation générant une DIT de préparation -
Lien DIT - Prestation de commande
LIEN DIT - PRESTATION DE COMMANDE
Il est possible d'établir un lien entre une ligne de commande client et une demande de prestation.
Le type de prestation concerne le plus souvent :
o La préparation,
o La livraison,
o La connexion.
Ce lien est possible en fonction des articles classifiés et utilisés dans les lignes de commande
d'article.
Lors de la saisie d'une commande, le gestionnaire de commande doit planifier les tâches dans le
planning des techniciens.
Ainsi, il a une vue à long terme du planning et des travaux à effectuer.
Générer une DIT avec matricule

GÉNÉRER UNE DIT À PARTIR D'UNE COMMANDE
Saisie de la commande
Ventes / Commandes clients / Gérer les commandes clients
L'utilisateur doit procéder à la saisie de la commande client, consulter Saisir une commande
matériel.
Complément sur la saisie de la commande
Ligne d'article du bien maître
La quantité commandée de cet articles doit être obligatoirement de 1 (si la quantité est supérieure à
1, une message d'erreur est affiché).
Ligne d'article de prestation
La quantité commandée de ces articles peut être supérieure à 1. La quantité n'a aucune incidence
sur la DIT à générer.
Génération la DIT
A partir de l'affaire
1. Aller sur l'affaire,
2. Sélectionner la ou les commandes,
3. <Mosaïque>,
4. Cliquer sur "Générer les DIT à partir des commandes".
§ Génère toutes les DIT à générer suivant le paramétrage établi,
5. L'état de préparation de la commande est impacté suivant le paramétrage établi,
A partir d'une commande
1. Visualiser la commande client,
2. <Mosaïque>,
3. Cliquer :
§ Soit sur "Imprimer OP et générer DIT" :
· Imprime le document "Ordre de préparation",
· Génère toutes les DIT à générer suivant le paramétrage établi,
§ Soit sur "Générer DIT" :
· Génère toutes les DIT à générer suivant le paramétrage établi,
4. L'état de préparation de la commande est impacté suivant le paramétrage établi,
DIT  en attente de matricule
Cette option "ENATTENTE_MATRICULE" donne la possibilité de générer les DIT avant que les
numéros de série soient affectés aux lignes.
Si la ligne du bien maître n'a pas le matricule affécté, la DIT est générée sans bien.
AFFECTATION DES MATRICULES
Lors de l'affectation du matricule à la ligne de commande (lors d'une réservation dans les stocks ou
par une livraison fournisseur liée), ARTIS.net vérifie la présence de la DIT et modifie la DIT en
ajoutant le matricule du bien.
DIT  avec matricule
Cette option "AVEC_MATRICULE" permet de générer la DIT uniquement si le numéro de série est
présent.
DIT de reprise
Si une DIT de reprise est générée à partir de l'article généré automatiquement à partir du dossier de
Rachat/Reprise, alors la DIT porte sur le matricule du bien à reprendre (et non sur le matricule du
nouveau bien à livrer).
Après génération
Sur la DIT
Lors de la génération de la DIT :
o Le demandeur reprend l'interlocuteur de la commande,
o Le détail de la DIT contient :
§ Le numéro de l'affaire,
§ Le numéro de la commande,
§ Le numéro externe de la commande,
§ le modèle du bien,
§ L'accès au site (informations de la zone « indication d'accès » se trouvant sur la fiche
du site du client,
§ Le commentaire de la  ligne d'article de prestation (issu  de la  description de la  fiche
article).
Sur la commande
Après génération des DIT, un message s'affiche pour indiquer la génération.
Les lignes d'article de prestations sont mises à jour avec les numéros de DIT, cliquable pour afficher
l'écran de la DIT générée.
A suivre
Le traitement de la commande (Livraison, puis Facture) ne dépend pas du traitement de la DIT (IT,
puis CRIT) et inversement. Chaque document suit son propre chaînage.
Planification de la livraison
Lors de la planification de la DIT de livraison, la date à laquelle la livraison est plsnifiée est reportée
automatiquement dans la date confirmée de livraison sur la ligne du bien.
Saisie du compte-rendu d'intervention - CRIT
Le technicien saisit son CRIT normalement : il peut être amené à faire un ou plusieurs CRIT.
Dans le cas où le paramétrage prévoit des actions lors de la clôture, ARTIS.net vérifie la  table de
décision paramétrée.
Remarque
Les temps de main d'œuvre et de déplacement seront pris en compte dans le calcul de rentabilité
dans la mesure où la DIT est liée un bien. Ce bien est soit celui issu de la commande client, soit
celui que le technicien positionne lors de la saisie du compte rendu d'intervention.
Messages d'alertes
Lors de la génération :
o Si des lignes de commandes n'ont pas de matricule réservé, un message d'information
s'affiche.
o Si la demande (DIT) est déjà générée, un message de confirmation s'affiche.
o Dans l'écran « Réserver les biens », un message informe immédiatement l'utilisateur.
Générer une DIT sans matricule
GÉNÉRER UNE DIT SANS MATRICULE
Il existe deux cas d'utilisation des DIT sans matricule :
o Il s'agit de prestations, qui de part leur nature, n'ont pas à être liées à un matricule, comme une
commande nécessitant des prestations auxquelles il n'est pas nécessaire de rattacher des
biens, exemple : des formations dans une commande Informatique livrant un serveur et des
logiciels,
o Il s'agit d'une commande sur des biens à quantité multiple, pour lesquelles il n'est pas juger
nécessaire d'avoir autant de DIT que de biens, exemple : des installations pour une commande
Bureautique de 50 fax. Il faut une seule DIT d'installation.
Saisie de la commande
Ventes / Commandes clients / Gérer les commandes clients
L'utilisateur doit procéder à la saisie de la commande client.
Complément sur la saisie de la commande
Ligne d'article de prestation
La quantité commandée de ces articles peut être supérieure à 1. La quantité n'a aucune incidence
sur la DIT à générer.
Génération la DIT
A partir de l'affaire
1. Aller sur l'affaire,
2. Sélectionner la ou les commandes,
3. <Mosaïque>,
4. Cliquer sur "Générer les DIT à partir des commandes".
§ Génère toutes les DIT à générer suivant le paramétrage établi,
5. L'état de préparation de la commande est impacté suivant le paramétrage établi,
A partir d'une commande
1. Visualiser la commande client,
2. <Mosaïque>,
3. Cliquer :
§ Soit sur "Imprimer OP et générer DIT" :
· Imprime le document "Ordre de préparation",
· Génère toutes les DIT à générer suivant le paramétrage établi,
§ Soit sur "Générer DIT" :
· Génère toutes les DIT à générer suivant le paramétrage établi,
4. L'état de préparation de la commande est impacté suivant le paramétrage établi,
Après génération
Sur la DIT
Lors de la génération de la DIT :
o Le demandeur reprend l'interlocuteur de la commande,
o Le détail de la DIT contient :
§ Le numéro de l'affaire,
§ Le numéro de la commande,
§ Le numéro externe de la commande,
§ L'accès au site (informations de la zone « indication d'accès » se trouvant sur la fiche
du site du client,
§ Le commentaire de la  ligne d'article de prestation (issu  de la  description de la  fiche
article).
Sur la commande
Après génération des DIT, un message s'affiche pour indiquer la génération.
Les lignes d'article de prestations sont mises à jour avec les numéros de DIT, cliquable pour afficher
l'écran de la DIT générée.
A suivre
Le traitement de la commande (Livraison, puis Facture) ne dépend pas du traitement de la DIT (IT,
puis CRIT) et inversement. Chaque document suit son propre chaînage.
Saisie du compte-rendu d'intervention - CRIT
Le technicien saisit son CRIT normalement : il peut être amené à faire un ou plusieurs CRIT.
Dans le cas où le paramétrage prévoit des actions lors de la clôture, ARTIS.net vérifie la  table de
décision paramétrée.
Livrer et facturer
LIVRER ET FACTURER
Livraison
Ventes / Livraisons clients / Générer les livraisons clients
Avec l'option "Les commandes avec biens"
Cette option permet de voir l'état de la DIT de préparation liée. ARTIS.net identifie la DIT de
préparation grâce à l'identifiant technique de la catégorie "Préparation" de la classification,
consulter Lien DIT- Prestation de commande, Paramétrage.
Facturation
Ventes / Factures clients / Générer les factures clients
Avec les options "LIVRAISONS" et "Uniquement les livraisons avec affaire"
Ces options permettent de voir l'état de la DIT d'installation ainsi que la date et heure du dernier
CRIT qui a permis de clôturer la DIT. ARTIS.net identifie la DIT de préparation grâce à l'identifiant
technique de la catégorie "Préparation" de la classification, consulter Lien DIT- Prestation de
commande, Paramétrage.
Cas particulier
PLANIFICATION DE LA LIVRAISON, DE LA PRÉPARATION ET
DE LA REPRISE
Table de décision
TD_ASSOCIATION_NATURE_DIT_CATEGORIE_ARTICLE
Paramètres / Classifications, listes et tables de décision / Gérer les tables de décision
Numéro Code
Nature DIT
Nom de la catégorie
article Quand générer la DIT ? Date maxi inter Type groupe
de travail
Nouvel Etat
Commande
Que faire à la
clôture ?
Priorité
intervention
Type de
solicitation
Que faire
après la
génération?
Bien Que faire après la planification?
1 PR Préparation CMDE DITp5 Atelier A préparer GENDIT 01 04 ENATTENTE_MATRICULE
2 22 LivraisonCmde CMDE DITp5 Terrain Préparée RAL-GENDIT 01 04 ENATTENTE_MATRICULE DITm5(Préparation)-PLANIF(Reprise)-PRINTODP-
PRINTREP
10 21 InstallationCmde CMDE DITp5 Terrain Préparée DINST-CPT 01 04 ENATTENTE_MATRICULE
14 56 Reprise CMDE DITp5 Terrain 01 04 ENATTENTE_MATRICULE
Traitement
Planning
Lors de la planification de la livraison :
o Date confirmée
1. La date de planification de la livraison est reportée dans la date confirmée de livraison
de la ligne de commande du bien,
o Préparation
2. La date et la date maximum de l'IT de préparation est actualisée : positionnée 5 jours
avant la date de planification de la livraion,
o Reprise
3. La reprise est planifiée en même temps que la livraison l'une après l'autre (selon la
durée des IT),
o Impression
4. L'ordre de préparation et la fiche de reprise sont imprimée.
Commande fournisseur
En tenant compte du délai d'apprivsionnement du fournisseur et du délai de préparation, il convient
de passer les commandes d'après les dates confirmées de livraison dans les commandes client.
Achats / Commandes Fournisseurs/ Générer les commandes fournisseur
1. Section "Origine des besoins",
2. Prendre l'option "Par commande client",
3. Section "Sélection",
4. Prendre l'option "Commandes client",
5. Rechercher les commandes d'après un intervalle de date sur le critère "Date de livraison
confirmée",
6. Poursuivre la génération.
Paramétrage
PARAMÉTRAGE DE BASE
Article
Pour le bon fonctionnement de ce module, il est obligatoire d'avoir renseigné correctement les
articles. Deux caractéristiques sont concernées :
o La relation maître – accessoire entre les articles modèles gérés comme bien, consulter Gérer
les relations maître-accessoires,
o Le domaine d'intervention de l'article modèle maître, consulter Gérer les domaines
d'intervention.
Remarque
Si au moins l'une des caractéristiques n'est pas satisfaite correctement, un message d'erreur
s'affiche et la génération n'est alors pas possible.
Classification
Prestation et nature de DIT
Paramètres applications / Classifications, listes et tables de décision / Gérer les classifications
Consulter Créer une classification
Classification
Nom : "Prestation et nature de DIT"
Abréviation : "PND"
Identifiant technique : "PRESTATION_DIT_COMMANDE"
Domaine : "Articles"
Classe : "com.artis.business.articles.ArtVendu"
Catégorie
Ajouter les catégories concernées, exemple :
1.
Nom : "PREPARATION"
Abréviation : "PREP"
Identifiant technique : "PREPARATION"
2.
Nom : "LIVRAISON"
Abréviation : "LIV"
Identifiant technique : "LIVRAISON"
3.
Nom : "INSTALLATION"
Abréviation : "INS"
Identifiant technique : "INSTALLATION"
4.
Nom : "CONNEX ION"
Abréviation : "CNX "
Identifiant technique : sans identifiant
...
Articles
Il est nécessaire de créer au minimum, autant d'articles intangibles que de catégories créées dans
la  classification  précédente.  Ces  articles  de  prestation  sont  à  classifier  sur  les  catégories
précédemment créées, exemple : Préparation, Livraison, Installation, Connexion.
Articles / Articles / Gérer les articles
Consulter Gérer les articles.
Chaque article de prestation doit être affecté de la catégorie qui lui convient :
1. Rechercher l'article,
2. <Modifier> ou <Crayon>,
3. Section "Classification de vente",
4. "Prestation et nature de DIT" : Sélectionner la catégorie.
Table de décision
TD_ASSOCIATION_NATURE_DIT_CATEGORIE_ARTICLE
Paramètres / Classifications, listes et tables de décision / Gérer les tables de décision
Cette Table de décision permet :
§ D'identifier dans les  commandes, les  lignes d'articles  correspondant aux natures de
DIT,
§ De compléter les DIT à générer avec les informations qu'il convient,
§ De faire les actions paramétrées.
Numéro Code
Nature DIT
Nom de la catégorie
article Quand générer la DIT ? Date maxi
inter
Type groupe
de travail
Nouvel Etat
Commande
Que faire à la
clôture ?
Priorité
intervention
Type de
solicitation
Que faire
après la
génération?
Bien
Que faire
après la
planification?
1 PR Préparation CMDE DITp5 Atelier A préparer GENDIT 01 04 ENATTENTE_MATRICULE
3 22 Livraison DIT-(Préparation,Reconditionnement) DITp5 Terrain Préparée CPT,RAL-
GENDIT 01 04 ENATTENTE_MATRICULE PRINTREP
4 20 Installation DIT-(Préparation,Reconditionnement) DITp5 Terrain Préparée DINST-CPT 01 04 ENATTENTE_MATRICULE
5 57 Reconditionnement CMDE DITp3 Atelier A préparer GENDIT 01 04 AVEC_MATRICULE
6 23 Connexion CMDE DITp3 Atelier 01 04 AVEC_MATRICULE
14 56 Reprise DIT-(Préparation) DITp5 Terrain 01 04 ENATTENTE_MATRICULE
Ou
Numéro Code
Nature DIT
Nom de la catégorie
article Quand générer la DIT ? Date maxi
inter
Type groupe
de travail
Nouvel Etat
Commande
Que faire à la
clôture ?
Priorité
intervention
Type de
solicitation
Que faire
après la
génération?
Bien
Que faire
après la
planification?
1 PR Préparation CMDE DITp5 Atelier A préparer GENDIT 01 04 ENATTENTE_MATRICULE
2 20 Livraison-Mes-Cx DIT-(Préparation,Reconditionnement) DITp5 Terrain Préparée CPT 01 04 ENATTENTE_MATRICULE
3 22 Livraison DIT-(Préparation,Reconditionnement) DITp5 Terrain Préparée CPT 01 04 ENATTENTE_MATRICULE PRINTREP
4 20 Installation DIT-(Préparation,Reconditionnement) DITp5 Terrain Préparée DINST-CPT 01 04 ENATTENTE_MATRICULE
5 57 Reconditionnement CMDE DITp3 Atelier A préparer GENDIT 01 04 AVEC_MATRICULE
6 22 Préparation-Autre CMDE DITp3 Atelier A préparer GENDIT 01 04 SANS_BIEN
7 22 Livraison-Autre DIT-(Préparation-Autre) DITp3 Atelier Préparée DINST-CPT 01 04 SANS_BIEN
8 20 Installation-Autre DIT-(Préparation-Autre) DATELIVR Terrain Préparée 01 04 SANS_BIEN
9 22 LivraisonCmde CMDE DITp5 Terrain Préparée RAL-GENDIT 01 04 ENATTENTE_MATRICULE
10 21 InstallationCmde CMDE DITp5 Terrain Préparée DINST-CPT 01 04 ENATTENTE_MATRICULE
11 65 Solution CMDE DITp5 Terrain 01 04 AFFTECH SANS_BIEN
12 66 Sous Traitant Solution CMDE DITp5 Terrain 01 04 AFFTECH SANS_BIEN
13 67 Formation CMDE DITp5 Terrain 01 04 ENATTENTE_MATRICULE
14 56 Reprise DIT-(Préparation) DITp5 Terrain 01 04 ENATTENTE_MATRICULE
Numéro
Il définit l'ordre des lignes et également l'ordre d'affichage des prestations dans le tableau de
suivi des commandes et des affaires,
Nature de DIT
Code de la nature à mettre sur la DIT générée, consulter Gérer les natures d'intervention et
catégories non productives,
Nom de la catégorie
Nom de la catégorie de la classification "Prestations et nature de DIT", consulter le paragraphe
ci-dessus,
Quand générer la DIT ?
Obligatoire, une seule parmi les options suivantes :
§ CMDE : la DIT sera générée à partir du lien "Générer DIT",
§ DIT-(catégorie [,...]) : La DIT sera générée à la clôture de la DIT issue elle-même
d'une génération, dont la catégorie est une de celles précisées entre parenthèses,
consulter "Que faire à la clôture ?", option "GENDIT" ci-dessous,
Date maxi inter
Obligatoire, une seule parmi les options suivantes :
§ DATELIVR : La date maximum d'intervention prend la valeur de la date de livraison
souhaitée de la ligne de commande client,
§ DITp[nb jours] : La date maximum d'intervention prend la valeur de la date de création
de la DIT plus («p») un nombre de jours («nb jours»).
Type groupe de travail
Obligatoire, une seule parmi les options suivantes :
§ Terrain,
§ Atelier,
§ Hotline.
Nouvel Etat Commande

Non obligatoire, une seule parmi les options suivantes.
Après la génération de la DIT, l'état de préparation de la commande peut prendre comme valeur
:
§ Préparée,
§ A préparer,
§ En cours.
Que faire à la clôture ?
Non obligatoire, plusieurs options sont possibles simultanément, séparées par un tiret "-" :
§ DINST :  Initialisation de la  date d'installation du bien avec la  date  de  réalisation du
CRIT lié à cette DIT,
§ GENDIT : Cette option déclenche la consultation de cette même table afin de créer les
DIT (suivant le paramétrage). Ce cas correspond, par exemple à la génération d'une DIT
de livraison lors de la  clôture de la  DIT de préparation, consulter "Quand générer la
DIT ?" ci-dessus,
§ CPT :  Suivant le  statut  juridique du  bien,  "Occasion"  ou  "Neuf",  le  type  de  relevé
compteur est respectivement "Installation chez le client" ou "Prestataire",
§ RAL : Cette option déclenche la consultation de cette même table afin de créer les DIT
(suivant le paramétrage) sur des articles gérés comme bien et restant à livrer, consulter
"Quand générer la DIT ?" ci-dessus.
Dans ce cas, après la saisie du CRIT, la DIT passe à l'état « Travail non terminé ». Le
détail de la DIT est alors modifié pour informer les utilisateurs et les techniciens :
· Numéro de l'affaire,
· Numéro de commande client,
· Numéro externe de la commande,
· Code article,
· Libellé de l'article,
· Quantité à livrer,
· Matricule (dans le cas d'un bien réservé).
Exemple :
"RESTE A LIVRER:
307271 MX FNX 1 FINISSEUR AGRAFEUR INTERNE Qté.: 1.0
307301 MX FNX 2 FINISSEUR TRI/AGRAFAGE Qté.: 1.0 Matricule: 6A004595
Affaire :  01020507 Cde.cli.  :  01780024 (numéro  externe)   Modèle  :  MX 2300N
COPIEUR/IMPRIMANTE Accès  site : Indications  d'accès, Description  de  l'article  de
la prestation"
Priorité d'intervention
Obligatoire, une seule parmi les options suivantes.
En général, les priorités sont (consulter Gérer les priorités d'intervention) :
§ 00 – Urgent,
§ 01 – Standard.
Type de sollicitation
Obligatoire, une seule parmi les options : Consulter Gérer les types de demandes.
Que faire après la génération ?
Non obligatoire, une seule parmi les options suivantes :
§ AFFTECH :  Après génération de la  DIT, l'écran 2  de la  DIT s'affiche afin de  pouvoir
affecter un technicien. L'utilisateur peut se raviser lors de l'affichage et ne pas mettre de
technicien. Il fait alors <Disquette> ou <F2> pour enregitrer la DIT,
§ AFFTECHAUTO : Après génération de la DIT, ARTIS.net affecte automatiquement un
technicien livreur par rapport à la classification du site de livraison du client et la
classification du technicien, grâce à l'identifiant technique de la catégorie "Livraison" de
la classification,
§ Rien : Lors de la génération, aucun technicien n'est affecté à la DIT.
Bien
Obligatoire, une seule parmi les options suivantes :
§ AVEC_MATRICULE : La DIT à venir est liée à un matricule. La génération de la DIT est
effectuée uniquement si le matricule maître est présent dans la commande,
§ ENATTENTE_MATRICULE : La DIT à venir est liée à un matricule. La génération de la
DIT est possible même si le  matricule n'est  pas encore présent dans la  commande.
Dès affectation du matricule dans la commande, celui-ci est également reporté dans la
DIT liée,
§ SANS_BIEN : La DIT à venir n'est pas liée à un matricule. La génération de la DIT est
possible à tout moment.
Que faire après la planification?
Non obligatoire, plusieurs options sont possibles simultanément, séparées par un tiret "-" :
§ PRINTODP : Cette option permet d'imprimer l'ordre de préparation,
§ PRINTREP : Cette option permet d'imprimer la fiche de reprise,
§ PLANIF(catégories article) : Cette option permet de planifier les DIT correspondantes
aux catégories d'article spécifiées, à la suite de de la DIT en cours de planification,
§ DITp[nb jours] (catégories article) : Cette option met à jour la date prévue de début
d'intervention et la date maxi d'intervention  de l'IT pour les DITs correspondantes aux
catégories d'article spécifiées.
La date prend la valeur de la date de planification plus («p») un nombre de jours
(«nb jours»),
§ DITm[nb jours] (catégories article) :Cette option met à jour la date prévue de début
d'intervention et la date maxi d'intervention  de l'IT pour les DITs correspondantes aux
catégories d'article spécifiées.
La date prend la valeur de la date de planification plus («p») un nombre de jours
(«nb jours»).
Remarque
PLANIF ne peut donc pas être utilisé en même temps que DITp ou DITm pour une même
catégorie article.
Cas particulier
Le paramétrage ci-dessous est déconseillé :
Numéro Code
Nature DIT
Nom de la catégorie
article Quand générer la DIT ? ... Bien
1 PRE Préparation CMDE ... SANS_BIEN
2 22 Livraison DIT-(Préparation,Reconditionnement) ... AVEC_MATRICULE
1. Il autorise une génération de DIT de Préparation et une saisie de CRIT sans bien (c'est OK),
2. Lors de la clôture du CRIT, il doit générer la DIT de Livraison, obligatoirement avec un matricule.
N'ayant pas de matricule, aucune génération n'est faite,
3. Après affectation du matricule dans la commande, il faudrait alors modifier et  ré-enregistrer le
CRIT de Préparation afin de générer la DIT de Livraison.
Pour résoudre ce problème, il faut paramétrer ces deux lignes :
§ Soit avec "ENATTENTE_MATRICULE",
§ Soit au moins la première ligne avec "AVEC_MATRICULE".
PARAMÉTRAGE POUR LES LIVREURS
Le paramétrage suivant n'est pas obligatoire. Il sert uniquement à déterminer un technicien livreur
automatiquement, en utilisation le paramétrage "AFFTECHAUTO" dans la table ci-dessus.
Classifications
Site de livraison et livreur
Ces deux classifications sont synchronisées. Il est dont nécessaire de suivre l'ordre de création ci-
dessous.
Consulter Créer une classification
Paramètres applications / Classifications, listes et tables de décision / Gérer les classifications
Classification
Nom : "Secteur livreur"
Abréviation : "SECT_LIVREUR"
Identifiant technique : "ID_CLASSIF_SECTEUR_LIVRAISON"
Domaine : "Parties"
Classe : "com.artis.business.parties.Collabo"
Catégorie
Ne créer pas les catégories de cette classification. Elles le seront automatiquement grâce à la
classification suivante.
Classification
Nom : "Secteur de livraison"
Abréviation : "SECT_SITELIVR"
Identifiant technique : "ID_CLASSIF_SECTEUR_LIVRAISON"
Domaine : "Parties"
Classe : "com.artis.business.parties.Site"
Catégorie
Ajouter les catégories concernées, exemple :
1.
Nom : "Secteur 45 77 89 94"
Abréviation : "45-77-89-94"
Identifiant technique : sans identifiant technique
2.
Nom : "Secteur 72"
Abréviation : "72"
Identifiant technique : sans identifiant technique
...

Collaborateur
Technicien livreur
Tiers / Organisations internes / Gérer les organisation de type interne
1. Appeler l'organisation interne,
2. Onglet "Collaborateurs",
3. Dans le tableau des collaborateurs,
4. Sélectionner le collaborateur technicien livreur,
5. <Modifier> ou <Crayon>,
6. Section "Classifications",
7. Sélectionner le secteur de livraison,
8. <Disquette> ou <F2>,
9. Refaire la procédure pour chaque livreur.
Client
Site
Tiers / Clients / Gérer les organisations de type client
1. Rechercher le client,
2. Cliquer sur "Sites" dans l'entête de la section,
3. Sélectionner le site,
4. Section "Classifications",
5. Sélectionner le secteur de livraison,
6. <Disquette> ou <F2>,
7. Refaire la procédure pour chaque site du client.
Réserver des biens en stock avec accessoires liées
RÉSERVER DES BIENS EN STOCK AVEC ACCESSOIRES
LIÉES
Lors de la réservation
Les accessoires liés à un bien maître en stock se présente lors des reprises de chez les clients.
En considérant une commande avec uniquement une ligne de commande d'article correspondant au
bien maître (les lignes d'articles des accessoires n'ont pas été saisies dans la commande).
Lors de la réservation du bien stocké, un message alerte l'utilisateur sur les accessoires liés et
propose :
o De réserver
ARTIS.net ajoute automatiquement dans la commande, les lignes d'article correspondant
aux accessoires, et réserve les matricules de ces accessoires. Les accessoires sont
toujours liés au bien maître,
o De détacher
ARTIS.net délie les accessoires du bien maître en parc. Les accessoires restent en stock
(non liés).
Cas des constituants
Dans le cas d'un bien maître lié à un constituant, un autre choix est proposé :
Rien : le constituant reste attaché au bien maître mas la ligne d'article correspondante n'est pas
intégrée dans la commande.
Lors de la dé-réservation
Lors de la dé-réservation d'un bien dans la commande, un message alerte sur les accessoires liés
s'affiche et propose d'annuler automatiquement les réservations des accessoires.
Mécanisme des réservations
MÉCANISME DES RÉSERVATIONS
ARTIS.net utilise un système de réservation des quantités en stock pour pouvoir les livraisons
clients. Ce système fait partie intégrante du logiciel et ne peut donc pas être désactivé.
Article non géré comme bien
Lors de la saisie d'articles non géré comme bien dans les lignes de commande ou demandées
dans les interventions (demandes d'articles pour les interventions), les demandes de réservation
sont automatiquement faites.
Disponibilité en stock de l'article
Un article non géré comme bien est automatiquement réservé en stock s'il est disponible en stock.
Non disponibilité en stock de l'article
Commande fournisseur faite par "Générer les commandes fournisseur"
La réservation de l'article non géré comme bien est automatiquement faite sur une commande
fournisseur générée.
Commande fournisseur faite par "Gérer les commandes fournisseur"
La réservation est à faire manuellement, à partir de la commande client : utiliser "Transférer des
réservations", consulter Transférer des réservations.
Remarque
En fonction de l'urgence d'une commande client, il est possible d'intervenir sur les réservations
et de transférer manuellement une réservation sur la commande plus urgente.
Article géré comme bien
Disponibilité en stock du bien
Un bien est exclu du système de réservation automatique. Il ne sera pas automatiquement
réservé lors de la saisie de la commande client. Pour réserver un bien, l'opérateur affecte des
matricules dans la commande client. Ces matricules sont dits « réservés ». Pour affecter un
matricule, cliquer sur les lignes d'articles gérés comme bien puis sur le lien "Réserver les biens",
consulter Réserver/dé-réserver un bien pour une commande.
Non disponibilité en stock du bien
Commande fournisseur faite par "Générer les commandes fournisseur"
La réservation de l'article est automatiquement réservé sur une commande fournisseur générée.
Commande fournisseur faite par "Gérer les commandes fournisseur"
La réservation est à faire manuellement.
Remarque
C'est l'article qui est réservé PAS LE BIEN. La réservation du bien se fera automatiquement au
moment de la livraison
Réactualisation des réservations
Evènements
Les évènements suivant réactualisent automatiquement les réservations :
Les entrées et les sorties de stock
o Les réceptions fournisseur,
o Les factures fournisseur directes,
o Les régularisations de stock,
o Les transferts de stock,
o Les réapprovisionnement des stocks.
Les actions sur les demandes
o Les modifications/annulations de demandes d'article pour les interventions,
o Les modifications/annulations des quantités commandées en commande client,
o Les modifications/annulations des quantités commandées en commande fournisseur.
Ordre de traitement des réservations
Lors de ces évènements, ARTIS.net interroge toutes les demandes de réservation en attente et
effectue si possible les réservations. Le traitement s'effectue dans l'ordre suivant :
1. Demande d'article bloquante (case "bloquante" cochée dans le CRIT),
2. Ancienneté de la demande (en fonction de la date de la commande).
Incidence des réservations sur les stocks
Consulter Consulter l'état des stocks par article.
Remarque
Sur ce tableau, un constat est que le stock disponible immédiatement est étroitement lié aux
réservations.
De plus, le calcul des reliquats clients et fournisseurs intègre les réservations.
Incidence des réservations sur les réapprovisionnement
Les réservations sont intégrées dans les calculs de réapprovisionnements
Synoptique des réservations
SYNOPTIQUE DES RÉSERVATIONS
Visualiser les réservations
VISUALISER LES RÉSERVATIONS
Cette option permet de visualiser l'état des réservations pour la commande.
Visualiser
Visualiser les réservations d'une ligne de commande
1. Afficher la commande,
2. Sélectionner la ligne,
3. <Mosaïque>,
4. Cliquer sur "Réservations".
Visualiser toutes les réservations de la commande
1. Afficher la commande,
2. <Mosaïque>,
3. Cliquer sur "Réservations".
Etat des réservations
Aucun traitement ne peut être fait sur cet écran. Seules des consultations sont possibles.
Position Position
lettrée Label Format Commentaire
1 A Document demandeur Commande client
2 B Bénéficiaire Code et raison sociale du client
3 C Code Code article
4 D Libellé Libellé article
5 E Qté demandée Quantité saisie dans la ligne de commande
6 F Date souhaitée Date souhaitée de livraison de la ligne de commande
7 G Dépôt Code et libellé du dépôt de la ligne de commande
8 H STK réservé Quantité en stock réservée en fonction de la quantité disponible
9 I Date réservation Date de réservation en stock
10 J Cdé fournisseur Numéro de la commande fournisseur
11 K Réservé sur Reliquat fourn. Quantité réservée sur la ligne de commande fournisseur
12 L Date réservation Date de réservation sur la commande fournisseur
13 M Qté livrée Quantité entrée en stock suite à une livraison fournisseur
14 N A réserver Quantité restante, à réserver
15 O Etat cmde fourn.
16 P Date prévue livraison Date prévue de livraison de la commande fournisseur
Si une demande de réservation a donné lieu à une réservation sur une commande fournisseur, deux
lignes sont alors présentes dans le tableau :
§ Une ligne pour la demande de réservation avec la réservation sur la commande
fournisseur,
§ Une ligne pour la demande de réservation avec la réservation en stock (suite à la
réception fournisseur).
Options de filtrage
o Masquer les lignes totalement réservées en stock : filtre uniquement les réservations non
totalement satisfaites,
o Afficher les articles 'Géré comme bien',
o Afficher les articles 'Non géré comme bien'.
Consultation des commandes prêtes à livrer
En cochant "Masquer les lignes totalement réservées en stock", seuls les biens en stock
apparaissent. Une fois tous les biens en stock, la commande client peut-être livrée.
Transférer des réservations
TRANSFÉRER DES RÉSERVATIONS
En fonction de l'urgence d'une commande client, il est possible d'intervenir sur les réservations et
de transférer manuellement une réservation sur la commande plus urgente.
Cette option permet de satisfaire la demande de réservation pour une ligne de commande
sélectionnée.
Il est possible de faire les réservations :
o En prenant les réservations qu'une autre commande possède : il s'agit de transfert de
réservation : "Réservation en commande client",
o En réservant sur des quantités disponilbes en stock d'un autre dépôt que celui initial de la ligne
de commande : "Réservations en stock disponibles",
o En réservant sur des quantités en commande fournisseurs (quantités déjà réservées ou non) :
"Lignes commandes fournisseur".
Procédure
Section "Document demandeur" et "Article"
Ces deux sections rapellent la commande, l'article et la quantité commandé.
§ Qté. demandée : Quantité saisie sur la ligne de commande,
§ Qté. réservée en C.F. : Quantité réservée pour la ligne de commande sur les
commandes fournisseur,
§ Qté. réservée en STK. : Quantité résevée pour la ligne de commande sur les quantités
en stock, sur un dépôt.
Section "Réservation en commande client"
Le tableau présente la liste des commandes client qui ont des réservations sur les quantités en
stock.
Pour transférer la réservation d'une commande présente dans le tableau sur la commande
urgente, faire :
1. Saisir la quantité de réservation à transférer dans la colonne "Qté à réserver",
2. <Flèche verte>  ou <F2>.
Après traitement, la réservation de la commande client d'origine a été automatiquement modifié
ou annulée. L'état initial de la commande client d'origine a été impacté en conséquence.
Section "Réservations en stock disponibles"
Le tableau présente la liste des quantités disponibles sur les autres dépôts que celui de la ligne
de commande.
Pour effectuer une réservation sur un dépôt présent dans le tableau pour la commande urgente :
1. Saisir la quantité de réservation dans la colonne "Qté à réserver",
2. <Flèche verte>  ou <F2>.
Après traitement, un mouvement de transfert a été effectué du dépôt présent dans la ligne
sélectionnée vers le dépôt de la ligne de commande. La réservation a été générée
automatiquement.
Section "Réservations en commandes fournisseurs"
Le tableau présente la liste des commandes fournisseur qui n'ont pas de quantités disponibles,
mais dont les quantités ont été réservée par d'autres commandes client. Les lignes de
commande client liées aux lignes de commande fournisseur sont affichées.
Pour effectuer la réservation sur une commande présente dans le tableau pour la commande
urgente, faire :
1. Saisir la quantité de réservation à transférer dans la colonne "Qté à réserver",
2. <Flèche verte>  ou <F2>.
Après traitement, la réservation sur la commande fournisseur a été effectuée pour la commande
urgente. La ligne de commande client est liée à la ligne de commande fournisseur. La
réservation de la commande client d'origine a été automatiquement modifié ou annulée. L'état
initial de la commande client d'origine a été impacté en conséquence.
Section "Lignes commandes fournisseurs"
Le tableau présente la liste des commandes fournisseur qui ont des quantités disponibles : ces
quantités n'ont pas fait l'objet de réservations (par opposition au paragraphe précédent).
Pour effectuer la réservation sur une commande présente dans le tableau pour la commande
urgente, faire :
1. Saisir la quantité de réservation à transférer dans la colonne "Qté à réserver",
2. <Flèche verte>  ou <F2>.
Après traitement, la réservation sur la commande fournisseur a été effectuée. La ligne de
commande client est liée à la ligne de commande fournisseur.
Cas particulier
Supprimer la réservation fournisseur et faire une demande de réservation en
stock
Le contexte est le suivant :
§ La commande client urgente a une réservation sur une commande fournisseur,
§ Une autre commande a une réservation sur les quantités en stock,
§ Il faut pouvoir livrer la commande urgente.
Procéder ainsi dans "Transférer des réservations" :
1. Dans la section "Réservation en commande client", saisir la quantité à réserver,
2. Cliquer sur "Supprimer la réservation sur commande fournisseur et la transférer sur
réservation(s) en stock existante(s)".
Remarque
Il n'est pas possible de supprimer une réservation (qu'elle soit sur les stocks ou sur les
lignes de commandes fournisseur) : d'où ce cas particulier.
Focer en stock les réservations en commandes fournisseur
Exemple de mouvements et de réservations
EXEMPLE DE MOUVEMENTS ET DE RÉSERVATIONS
Paramètres
PARAMÈTRES
Réservation en stock pour cotation
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "COTATION_RESERVE_STOCK"
Valeur :
§ Coché : Lors d'une cotation, les lignes de commandes reserve en stock,
§ Non coché : Pas de réservation.
Recherche des biens
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "RATTACHER_BIEN_SUR_TOUS_DEPOT"
Valeur :
§ 0 : Recherche des biens sur le dépôt de la ligne de commande uniquement,
§ 1 : Recherche des biens sur les dépôts du secteur logistique seul,
§ 2 : Recherche des biens sur tous dépôts.
Rechercher des commandes
RECHERCHER LES COMMANDES
Critère de recherche
Les critères de recherche rapide sont :
o Nunméro interne et Numéro externe,
o Code client,
o Nom du client.
En tapant directement les caractères recherchés dans la zone "Nnuméro interne", ARTIS.net
regarde dans les trois critères de recherche rapide et ramène toutes les commandes
correspondantes.
Paramètres
Recherche rapide
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre permet de redéfinir les critères de recherche rapide.
Paramètre "RECHERCHE_RAPIDE_COMMANDE_CLIENT_OPTIONS"
Valeur :
§ Numéros : Uniquement les numéros interne et externe,
§ Numéros Et Nom Client : Les numéros interne, externe et le nom du client,
§ Numéros et Code et Nom client : Les numéros interne, externe, le nom et le code du
client.
Paramètres
PARAMÈTRES
Modification des commandes
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "BLOQ_CMDECLT_LIVRE"
Valeur :
§ Coché : Les commandes clients livrées en totalité sont bloquées : suppression,
modification, ajout impossible,
