# Inventaire

> Categorie: Logistique et Stock | Pages 533-559

## Sous-rubriques
- Généralités et Théorie (p.533)
-   Gérer les comptages et l'Inventaire (p.533)
-   Calcul des quantités en stock et du PMP (p.536)
- Préparer le comptage (p.538)
-   Créer les lots de comptage (p.538)
-   Edition de lots de comptage (p.542)
-   Débuter le comptage (p.544)
-   Finir le comptage (p.545)
-   Saisir le comptage (p.546)
-   Contrôler et justifier les écarts (p.548)
-   Valider le comptage (p.550)
-   Paramétrage pour le comptage, inventaire et dépréciation (p.551)
- Gérer l'inventaire (p.555)
-   Editer un inventaire (p.557)
- Gérer les dépréciations (p.559)

Ne pas oublier de modifier les lignes de commande des consommables dans les commandes
matériel des ADV.
En commande fournisseur
Il faut modifier le dépôt de déstockage sur chaque ligne. Car sur il peu y avoir plusieurs dépôts
différents sur l'ensemble des lignes de la commande.
Paramétrage
Dépôt de déstockage des commandes de consommables
Il faut actualiser, la cas échéant, le paramétrage du dépôt de déstockage des commandes client
(table de décision, selon les cellules ADV ou Commande de consommable).
Génération de commande fournisseur
L'utilisation de la génération de commande fournisseur nécessite de revoir le paramétrage des
dépôts des techniciens. L'organisation interne qui commande doit être positionnée. Pour chacun
d'eux :
§ Organisation interne du dépôt : mettre celle qui fait les achats
§ Secteur logistique du dépôt : mettre un secteur de l'organisation interne qui commande
(voir ligne précédente)
§ A pour dépôt de réapprovisionnement : mettre le dépôt cible (doit normalement
appartenir à l'organisation interne qui commande)
Inventaire
Généralités et Théorie
Gérer les comptages et l'Inventaire
GÉRER LES COMPTAGES ET L'INVENTAIRE
Un inventaire s'anticipe.

Précautions
o Avertir tous les collaborateurs au moins un mois à l'avance (gestionnaires, commerciaux,
techniciens)
o Prévenir les clients que les expéditions seront perturbées pendant la période de comptage
o Signaler aux fournisseurs et aux transporteurs que les réceptions seront bloquées pendant la
période de comptage.
o Supprimer des catalogues de stocks les articles obsolètes (Il n'est pas possible de supprimer
des articles ayant du stock, un mini et un maxi). Un contrôle de suppression est fait sur la date
de dernier mouvement. Un message de confirmation de suppression apparaît s'il en existe un
depuis le dernier inventaire
Obligations
o Un inventaire se prépare. Pour cela, tous les mouvements de stocks doivent être faits AVANT
le début du comptage :
§ Bons de livraisons et factures directes clients
§ Bons de livraisons et factures directes fournisseurs
§ Reprises de biens
§ Transferts et régularisations de stocks dans le dépôt central et les véhicules.
§ Compte-rendu d'interventions (CRIT)
Un blocage des mouvements est mis en place entre entre le début et la fin de comptage .
Procédure type
1. Créer au moins une préparation de comptage
2. Créer un lot de comptage des articles non gérés comme bien au minimum par dépôt
3. Créer un lot de comptage des biens au minimum par dépôt
4. Débuter le comptage (blocage des mouvements dans Artis)
5. Aller compter les articles et les biens dans les dépôts en fonction du lot
6. Finir le comptage (Libère les mouvements)
7. Saisir les quantités pour les articles non gérés comme bien / Cocher la présence du bien dans
le dépôt
8. Contrôler et justifier les écarts de comptage pour les articles non gérés comme biens avant de
valider le lot.
9. Contrôler les statuts, les livraisons, les reprises, les transferts de stocks pour les articles gérés
comme bien qui n'auraient pas été trouvé lors du comptage
10. Valider le lot de comptage
11. Créer l'inventaire (en intégrant toutes les préparations depuis le dernier inventaire ou en
intégrant une seule préparation)
12. Saisir les dépréciations
13. Imprimer l'inventaire pour contrôler la valorisation et les dépréciations
14. Valider l'inventaire (Attention après validation aucune modification n'est admise)
Organisation des préparations et des lots de comptage
Exemple de décomposition des préparations de comptage et des lots en fonction :
o Des organisations internes
o Des dépôts
o De la nature des articles
o Des activités (issues de la classification des articles vendus : Activité / Famille / Sous-famille)
Organisation
interne
Code
dépôt
Dépôt Nature
des articles
PREPARATION Solution
d'im pressio
n
Solution
Logiciel
Solution
Audiovisuel
Solution
Mobilier
Solution
Inform atique
Solution
Bur./Façonnage
Solution
Téléphonie
01 010 Dépôt principal Non sérialisé Prépa 01 Lot 1 Lot 3 Lot 5 Lot 7 Lot 9 Lot 11 Lot 13
Sérialisé Prépa 01 Lot 2 Lot 4 Lot 6 Lot 8 Lot 10 Lot 12 Lot 14
01 011 Dépôt annexe 011 Non sérialisé Prépa 01 Lot 15
Sérialisé Prépa 01 Lot 16
01 019 Dépôt principal Occasion Non sérialisé Prépa 01 Lot 17
Sérialisé Prépa 01 Lot 18
02 020 Dépôt agence 2 Non sérialisé Prépa 02 Lot 19
Sérialisé Prépa 02 Lot 20
02 029 Dépôt agence 2 Occasion Non sérialisé Prépa 02 Lot 21
Sérialisé Prépa 02 Lot 22
03 030 Dépôt agence 3 Non sérialisé Prépa 03 Lot 23
Sérialisé Prépa 03 Lot 24
03 039 Dépôt agence 3 Occasion Non sérialisé Prépa 03 Lot 25
Sérialisé Prépa 03 Lot 26
Remarque
Le tableau peut être modifier afin de tenir compte des familles.
Impact des comptages et des inventaires sur le fonctionnement d'ARTIS.net
Les temps de calcul des quantités en stock et des PMP dépendent énormément de
l'antériorité des comptages et des inventaires :
§ Plus la date du dernier comptage est ancienne (au delà de 1 an), plus le temps
de calcul de la quantité en stock d'un article est long,
§ Plus la date du dernier inventaire est ancienne (au delà de 1 an), plus le temps
de calcul du PMP d'un article est long.
Il faut donc procéder :
§ à un comptage de tous les articles au moins une fois par an,
§ à un inventaire de tous les articles au moins une fois par an.
Pour avoir un calcul du stock optimal il faut gérer les comptages :
o Annuellement : faire un comptage général , global
Ce comptage général permet à Artis.net de ne pas récupérer les mouvements de stocks trop
anciens afin que le calcul du stock ne prenne pas trop de temps.
Dans le cas d'un comptage général annuel, ARTIS.net limite donc théoriquement la recherche des
mouvements jusqu'à 1 an en arrière.
1. Créer un lot de comptage pour chaque dépôt de la société (en incluant tous les dépôts)
2. Intégrer tous les articles du dépôt compté, en cliquant sur "Intégrer les articles du
dépôt"  (idem pour les biens)
3. Ensuite pour chaque article, il faut renseigner la quantité en stock réelle
4. Traiter également les articles dont la quantité théorique est 0 et sans quantité réelle en
stock (quantité non saisie), en utilisant « Mettre à 0 les articles où qté comptée = vide
et qté théorique = 0 »
5. Pour être sûr de ne pas avoir oublié de compter des articles, il faut également créer
des nouveaux lots avec les articles/biens non comptés dans la préparation. Procédez
ainsi :
§ cliquer sur le lien « Articles non comptés », sélectionner tous les articles puis
<Disquette>
§ cliquer sur le lien  « Bien non comptés », sélectionner tous les articles puis
<Disquette>
o Régulièrement : faire des comptages « tournant »
Ce comptage « tournant » permet d'avoir des estimations de stocks plus précises et optimise le
temps de calcul pour les articles comptés dans ces comptages « tournant ».
1. Créer un lot de comptage pour le dépôt souhaité
2. Intégrer les articles comptés
3. Pour les articles comptés, renseigner la quantité en stock réelle.
Pour avoir un calcul du PMP optimal il faut gérer les inventaires :
o Annuellement : faire un inventaire général , global
Cet inventaire général permet à Artis.net de ne pas récupérer les mouvements de stocks trop
anciens afin que le calcul du PMP ne prenne pas trop de temps.
Dans le cas d'un comptage général annuel, ARTIS.net limite donc théoriquement la recherche des
mouvements jusqu'à 1 an en arrière.
1. Créer un inventaire dans Artis.net (pas une situation), en utilisant la préparation de
comptage général  (voir ci-dessus).
2. Lors de la création de l'inventaire, il faut également intégrer tous les articles avec la
quantité à « 0 » (ne pas cocher la case d'exclusion)
Calcul des quantités en stock et du PMP
PRÉAMBULE
Seuls les articles non sérialisés sont soumis à un calcul de Prix Moyen Pondéré (PMP)
Le PMP d'un article est mis à jour à la validation de la livraison fournisseur et/ou à la saisie de la
facture fournisseur.
Une vente ne modifie pas le PMP mais influe sur la valeur de stock et donc sur le prochain calcul
du PMP. Les livraisons clients et les saisies de CRIT sont valorisés au PMP en vigueur à la date du
document.
Les régularisations de stocks influe sur le calcul du PMP.
Les transferts de stocks ne modifient pas le PMP. Ils sont valorisés au PMP en vigueur à la date du
mouvement.
Remarque : Une régularisation manuelle est celle saisie par l'utilisateur (à l'opposé de celle qui est
générée par la validation d'un comptage)
Méthode du prix moyen pondéré
Selon cette variante, le prix unitaire est déterminé en divisant le total des coûts d'acquisition des
articles par les quantités acquises. On obtient alors le prix moyen pondéré (PMP).
Les valeurs intégrées dans le tableau suivant permettront d'illustrer les calculs
Dates Mouvements Stocks (PMP après chaque entrée)
Quantités Prix
unitaire
Valeur
A l'achat
Quantités Prix unitaire Valeur de stock
A
Nouvea
u
100 320 32000 100 320 32000
01/03 250 341 85250 350 335 117250
01/04 -230 335 -77050 120 335 40200
01/07 200 343 68600 320 340 108800
01/09 -120 340 -40800 200 340 68000
01/10 100 346 34600 300 342 102600
01/11 -100 342 -34200 200 342 68400
01/12 50 347 17350 250 343 85750
Lors de chaque nouvelle entrée, on calcule le nouveau prix moyen pondéré ainsi :
nouveau PMP = Valeur du stock précédent (à l'ancien PMP) + coût des achats
Quantités totales en stock
D'après les valeurs du tableau, au 1er décembre, le PMP équivaut à (68 400 + 17 350) / 250 = 343
Ce prix moyen pondéré donne lieu à une valorisation du stock au 31 décembre équivalente à 85750
euros.
Événement déclenchant des calculs
Saisie d'une livraison fournisseur
La validation de la livraison fournisseur déclenche un nouveau calcul de PMP.
Saisie d'une facture fournisseur
Si lors de la saisie de la facture fournisseur, le prix facturé est différent du prix commandé, il y a un
nouveau calcul de PMP.
Tous les mouvements d'entrées ou de sorties effectués entre la date du bon de livraison fournisseur
et la date de la facture fournisseur sont actualisés avec le nouveau PMP.
Saisie d'un avoir fournisseur
Lors de la saisie d'un avoir, il y a un nouveau calcul de PMP.
Tous les mouvements d'entrées ou de sorties effectués entre la date du bon de livraison fournisseur
et la date de la facture fournisseur sont actualisés avec le nouveau PMP.
Saisie d'une régularisation de stock manuelle
La régularisation déclenche un nouveau calcul de PMP.
Une régularisation manuelle est celle saisie par l'utilisateur (à l'opposé de celle qui est générée par
la validation d'un comptage)
Tableau des actualisations des coûts de revient
Suite à saisie d'un BL Fournisseur ou d'une facture d'achat :
Actualisation coût revient Actualisation coût revient Actualisation coût revient Actualisation coût revient
Cde client En cours : OUI Livré : OUI Livré  : OUI Livré  : NON
BL client Rien En attente de facturation :OUI Facturé : OUI Facturé : NON
Facture Client Rien Rien Etat Envoyé au destinataire : OUI Etat Enregistré en comptabilité : NON
Calcul des quantités en stock et du PMP
Le calcul dynamique se fait de la manière suivante :
Calcul de la quantité en stock
· ARTIS.net part du dernier comptage lié à l'article de stock, ensuite il ajoute toutes les quantités
des mouvements présents dans la période jusqu'à la date de calcul du stock.
· Donc pour avoir de bonne performance il faut faire le plus régulièrement possible des
comptages de stock dans les dépôts de la société.
· Sans cela, le calcul prends de plus en plus de temps (les mouvements sont de plus en plus
nombreux). Pour un article jamais compté, il repart depuis la création de celui-ci dans le
catalogue du dépôt…
Calcul de la valorisation de stock (PMP ou FIFO)
· ARTIS.net part du dernier inventaire pour récupérer la valeur de l'article de stock, ensuite il tient
compte des mouvements d'entrée/sortie et de la valeur de ceux-ci pour déterminer la valeur à la
date.
· Donc pour avoir de bonne performance il faut créer un inventaire (au moins à chaque bilan) dans
Artis.net afin de conserver des performances correctes.
Préparer le comptage
PRÉPARER LE COMPTAGE
Procédure type
1. Créer au moins une préparation de comptage
2. Créer un lot de comptage des articles non gérés comme bien au minimum par dépôt
3. Créer un lot de comptage des biens au minimum par dépôt
4. Débuter le comptage (blocage des mouvements dans Artis)
5. Aller compter les articles et les biens dans les dépôts en fonction du lot
6. Finir le comptage (Libère les mouvements)
7. Saisir les quantités pour les articles non gérés comme bien / Cocher la présence du bien dans
le dépôt
8. Contrôler et justifier les écarts de comptage pour les articles non gérés comme biens avant de
valider le lot.
9. Contrôler les statuts, les livraisons, les reprises, les transferts de stocks pour les articles gérés
comme bien qui n'auraient pas été trouvé lors du comptage
10. Valider le lot de comptage
Créer les lots de comptage
CRÉER LES LOTS DE COMPTAGE
Logistique et stocks / Inventaire / Préparer le comptage
Un  inventaire consiste  à  ouvrir une  préparation. Une  préparation  comprend  plusieurs  lots  de
comptage sur l'ensemble des dépôts.
1. <+>,
2. Saisir une date de référence et un commentaire,
3. Préciser l'organisation interne,
4. <Disquette> OU <F2>.
Lots de comptage pour articles non gérés comme bien
Création du lot
1. <+>,
2. Sisir la description, la date prévue de début de comptage (date non contractuelle),
3. Sélectionner le dépôt,
4. Ajouter les inventoristes,
5. Ne pas cocher "Comptage de bien",
6. <Disquette> ou <F2>.
Remarque
Toutes les personnes ayant accès à la saisie, modification et visualisation du lot de comptage créé
doivent être saisies en tant qu'inventoriste.
Par exemple, la personne qui compte, le responsable de l'inventaire et le contrôleur de gestion ont
accès au lot. Ces trois personnes doivent être rattachées comme inventoriste (gestion des droits
d'accès sécurisés).
Intégration des articles à compter dans le lot
1. Modifier le lot de comptage,
2. Intégrer les articles :
§ Métohode 1 :
1. Cliquer sur "Intégrer les articles du dépôt",
2. Sélectionner tout ou partie des articles gérés dans le dépôt.
§ Ou méthode 2 :
3. Cliquer sur "Intégrer les articles du dépôt par classification",
4. Sélectionner la ou les classifications des articles à compter,
3. Si toutefois des articles sont intégrés à tort :
1. Sélectionner les,
2. Cliquer sur "Supprimer les articles sélectionnés",
4. <Disquette> ou <F2>,
5. Lors de l'intégration des articles, la quantité théorique en stock est mémorisée.
Par contre, si le comptage d'inventaire est fait avec une douchette ou un terminal de saisie
(puisard), passer directement au paragraphe « 4.5 - Débuter le comptage » ; car l'intégration des
articles n'est pas nécessaire.
Astuce pour créer rapidement les lots
Pour créer tous les lots de comptage rapidement, procéder comme suit :
1. Créer la préparation de comptage,
2. Cliquer sur "Articles non comptés" pour créer automatiquement les lots de comptage pour tous
les dépôts,
3. Si il est souhaité de subdiviser un lot en plusieurs lots de comptage (par exemple, sur un dépôt
fixe, vous voulez un lot pour les consommables, un lot pour les pièces et un lot pour les
matériels), il suffit de supprimer le lot et de le recréer manuellement en autant de sous-lots que
nécessaires.
Astuce pour contrôler les articles non comptés lors du comptage des
dépôts mobiles
Si un contrôle des articles non comptés est souhaité pendant le comptage des dépôts mobiles
(véhicules), voici une méthode simple :
1. Créer la préparation de comptage,
2. Créer les lots des véhicules,
3. Pour chaque lot, utilisez "Intégrer les articles du dépôt" pour intégrer automatiquement tous les
articles actifs du lot (avec ou sans stock physique).
Pour un lot de comptage :
1. Faire "Début de comptage",
2. Passer en mode "Ajout" en cliquant sur le <+> du tableau et scanner les articles inventoriés,
3. Après le comptage de tous les articles, cliquer sur l'entête de la colonne "Qté comptée" pour
voir les éventuels articles non comptés.
4. Quand tous les articles sont vérifiés, cliquer sur "Fin de comptage",
5. Utiliser "Justifier les écarts",
6. Cliquer sur le lien "Mettre à 0 les articles où qté comptée = vide et qé théorique = 0",
7. Justifier les autres écarts (voir le paragraphe ci-dessous).
Lots de comptage pour biens
Création du lot
1. <+>,
2. Sisir la description, la date prévue de début de comptage (date non contractuelle),
3. Sélectionner le dépôt,
4. Ajouter les inventoristes,
5. Cocher "Comptage de bien",
6. <Disquette> ou <F2>.
Remarque
Toutes les personnes ayant accès à la saisie, modification et visualisation du lot de comptage créé
doivent être saisies en tant qu'inventoriste.
Par exemple, la personne qui compte, le responsable de l'inventaire et le contrôleur de gestion ont
accès au lot. Ces trois personnes doivent être rattachées comme inventoriste (gestion des droits
d'accès sécurisés).
Intégration des biens à compter dans le lot
1. Modifier le lot de comptage,
2. Intégrer les biens :
§ Méthode 1 :
1. Cliquer sur "Intégrer les biens du dépôt",
2. Sélectionner tout ou partie des biens présents dans le dépôt,
§ Méthode 2 :
3. Cliquer sur "Intégrer les biens du dépôt par classification",
4. Sélectionner la ou les classifications des biens à compter,
3. Si toutefois des biens sont intégrés à tort, il suffit de les sélectionner et de cliquer sur
"Supprimer les biens sélectionnés",
4. <Disquette> ou <F2>.
Descriptif du tableau :
Position Poisition
lettrée Désignation Type Correspondance / Commentaire
1 A Libellé A / N
2 B Référence fournisseur A / N
3 C Marque A / N
4 D Client A / N Identifiant Client
5 E Fabricant A / N Identifiant Fabricant
6 F Prestataire A / N Identifiant Prestataire
7 G Emplacement A / N
8 H Statut Logistique A / N
9 I Présent avant comptage A / N Oui / Non
10 J Présent avant comptage A / N Oui / Non
11 K Activité A / N
12 L Famille A / N
13 M Sous-famille A / N
14 N N° commande client A / N
15 O Date de commande Date
16 P Etat de commande Num Valeur unitaire de l'article déprécié
17 Q Code client A / N
18 R Nom du client A / N
19 S CP/Ville A / N
20 T Statut Logistique A / N
21 U Statut Juridique A / N
22 V Id. Fabricant maître A / N Identifiant Fabricant du bien maître
23 W Id. Fabricant prestataire A / N Identifiant Prestataire
24 X Libellé du bien maître A / N
25 Y Valeur du bien A / N Identifiant Client
26 Z N° commande fournisseur A / N
Les biens qui sont intégrés au comptage sont ceux dont le statut logistique est :
Libellé Traitement Mouvement de
stock
Présence à
l'inventaire Commentaires
Détruit Manuel Sortie NON
Emmagasiné BL Fournisseur Entrée OUI
En préparation CDE Client Rien OUI
En reconditionnement Manuel Rien OUI
Enlevé par le brooker BL Client Sortie NON
Installé.Chez le client BL Client Sortie NON
Installé.En prêt client courte durée Gestion des prêts Rien OUI Si le prêt est < à 6 mois, la machine doit rester en stock
Installé.En prêt client longue durée BL Client Rien NON Immo Machines en immos
Installé.En prêt à usage interne BL Client Rien NON Immo Machines en immos
Livré chez le confrère BL Client Sortie NON
Neuf BL Fournisseur Entrée OUI
Préparé CDE Client Rien OUI
Occasion en triage Reprise bien Entrée OUI
Livré.chez le client BL Client Sortie NON
Livré.En prêt client courte durée Gestion des prêts Rien OUI Si le prêt est < à 6 mois, la machine doit rester en stock
Livré.En prêt client longue durée BL Client Rien NON Immo Machines en immos
Livré.En prêt à usage interne BL Client Rien NON Immo Machines en immos
Reconditionné Manuel Rien OUI
Remis en état Manuel Rien OUI
Retourné confrère fin de SSC Manuel Sortie NON
Retourné fournisseur fin de SSC Manuel Sortie NON
A détruire Manuel Rien OUI
A retourner au confrère fin de SSC Manuel Rien NON La machine ne nous a jamais appartenus.
A retourner au constructeur fin de SSC Manuel Rien NON La machine ne nous a jamais appartenus.
Retour constructeur-Matériel défecteux Manuel OUI NON
Edition de lots de comptage
EDITION DES LOTS POUR COMPTAGE (BORDEREAUX)
1. Afficher la préparation de comptage,
2. Sélectionner tout ou partie des lots,
3. Cliquer sur "Edition des lots de comptage".
4. Sélectionner les articles à retenir,
5. Sélectionner l'ordre de tri,
6. Avec ou sans quantités théoriques (Sans: les quantités ne s'éditent pas et donc le compteur
n'est tenté de reprendre les quantités théoriques),
7. Choix du type d'édition, Rupture :
§ Cochée : un sous-total est généré à chaque lot de comptage
§ Décochée : un global de tous les lots
L'autre méthode consiste à entrer en visualisation du lot de comptage et cliquer sur "Imprimer".
Parallèlement, il est toujours possible d'exporter le tableau des articles d'un lot de comptage.

Débuter le comptage
DÉBUTER LE COMPTAGE
Après avoir cliquer sur "Début de comptage", la quantité théorique est réactualisée, et mise à jour
en fonction des mouvements de stocks qui ont eu lieu depuis la préparation du lot. La date et
l'heure se renseignent automatiquement.
Tant que vous "Fin de comptage" n'est pas ait, aucun mouvement de stock n'est autorisé
sur les articles du lot en cours de comptage :
§ Aucune livraison (client) ni réception (fournisseur) n'est possible,
§ Aucune sortie d'article dans un CRIT n'est possible,
§ Aucun transfert ni régularisation n'est possible.
Si  un  utilisateur  entreprend un  mouvement de  stock  sur  un  des  articles  du  lot  en  cours  de
comptage, un message bloquant apparaît.
Les mouvements sont donc possibles uniquement sur les articles non présents dans le lot.
Remarque
Les mouvements antérieurs à la date de fin de comptage sont enregistrés mais n'impactent pas la
quantité en stock (mouvement à 0).
Article non géré comme bien
Ajout d'article en mode manuel
1. <+>,
2. Choisir la métode de saisir d'article, pour passer de l'un à l'autre, faire <F9> :
§ par la référence article de stock (code ARTIS généralement),
§ Ou par la référence fournisseur.
3. Ne pas cocher "Mode douchette" ou faire <F8>,
4. Saisir la quantité,
5. <Disquette> ou <F2>.
Ajout d'article en mode douchette
1. <+>,
2. Choisir la métode de saisir d'article, pour passer de l'un à l'autre, faire <F9> :
§ par la référence article de stock (code ARTIS généralement),
§ Ou par la référence fournisseur.
3. Cocher "Mode douchette" ou faire <F8> :
4. Sans saisir la quantité et Scanner : Chaque scan ajoute l'article (s'il est absent de la liste) et
incrémente la quantité de 1,
5. Saisir la quantité puis Scanner : ARTIS ajoute l'article (s'il est absent de la liste) et incrémente
la quantité avec celle saisie.
Article géré comme bien
En cliquant sur "Début de comptage", la date et l'heure se renseignent automatiquement. Un
contrôle des statuts est effectué ; si une modification de statut a eu lieu (livraison à un client par
exemple) le bien concerné sera surligné en orange. Il faudra donc le supprimer du lot de comptage
(Cf. 4.8.2.1 Supprimer un bien du lot de comptage).
Remarque
Tant que "Fin de comptage" n'est fait, aucun mouvement de stock n'est autorisé sur les biens du lot
en cours de comptage :
o Aucune livraison client (ni prêt de longue durée) n'est possible,
o Aucun transfert ni régularisation n'est possible.
Donc un mouvement est autorisé sur un matricule absent du lot.
Si un utilisateur entreprend un mouvement de stock (ceux cités ci-dessus) sur un des articles du lot
en cours de comptage, un message bloquant apparaît.
Quant aux reprises de biens, il est possible d'en effectuer, car le bien étant chez le client, il ne peut
être dans le lot de comptage (donc verrouillé). Une fois la reprise effectuée, l'inventoriste doit ajouter
manuellement le matricule dans le lot de comptage.
Remarque
Les statuts ne doivent pas être modifiés tant que le comptage n'est pas terminé.
Ajout de bien manuellement
Pour appeler un bien manuellement :
1. <+>,
2. Rechercher le matricule,
3. Puis <F2> pour l'ajouter à la liste.
Finir le comptage
FINIR LE COMPTAGE
Comptage des articles et des biens dans les dépôts
A partir des états (bordereaux), par la douchette ou le puisard, l'inventoriste compte physiquement
le stock.
Ajouter des articles ou des biens avant la fin de comptage
L'inventoriste a terminé le comptage.
L'option "Fin de comptage" verrouille définitivement la liste des articles avec la quantité théorique
présents dans le lot. Aucun article ne pourra être inséré dans le lot.
Dans le cas où l'inventoriste a fait "Fin de comptage" sur un lot alors que des articles doivent être
ajoutés, un nouveau lot devra être créé pour ces articles.
Ajouter des articles dans le lot de comptage
L'inventoriste a compté des articles dans son dépôt, mais ceux-ci sont absents du lot de
comptage. Il doit alors les insérer dans le lot de comptage dans un premier temps, avant de faire
"Fin de comptage" consulter Article non géré comme bien.
Ajouter des biens dans le lot de comptage
L'inventoriste a compté des biens dans le dépôt, mais ceux-ci sont absents du lot de comptage. Il
doit alors les insérer dans le lot de comptage dans un premier temps, avant de faire "Fin de
comptage", consulter Article géré comme bien.

Finir le comptage
1. Appeler le lot de comptage,
2. Cliquer sur "Fin de comptage",
3. La date et l'heure se renseignent automatiquement,
Remarque
Les mouvements de stock sont à nouveau autorisés sur les articles du lot compté pour les CRITs,
les transferts et les régularisations de stocks. Les livraisons clients ainsi que les réceptions
fournisseurs devront être saisies avec une date postérieure à la date de comptage.
Saisir le comptage
SAISIR LE COMPTAGE
1. Appler le lot de comptage,
2. <Modifier> ou <Crayon>.
Articles non gérés comme bien
1. Les quantités sont accessibles en saisie,
2. Si la quantité est nulle, saisissez 0,
3. Si l'article n'est pas encore trouvé, laisser la zone vide (ne rien saisir pour le retrouver dans la
liste des articles non comptés).
Les touches <Précédente (Page up)> et <Suivante (Page Down)> font défiler les pages du tableau.
Les touches <Début> et <Fin> donne accès directement au début ou la fin du tableau.

Biens
Si le bien est présent, il suffit de cocher la case "Présent après comptage".
Les touches <Précédente (Page up)> et <Suivante (Page Down)> font défiler les pages du tableau.
Les touches <Début> et <Fin> donne accès directement au début ou la fin du tableau.
Supprimer un bien du lot de comptage
1. Sélectionner le bien,
2. Cliquer sur "Supprimer les biens sélectionnés",
3. Les cas dans lesquels seront supprimés des biens de lots de comptage sont listé en 4.9.2
Articles gérés comme bien : Justifier les écarts.
Ajouter un bien dans le lot de comptage
L'ajout d'un bien dans un lot de comptage terminé n'est pas possible. Il faut procéder à la création
d'un autre lot, consulter Créer les lots de comptage.
Saisie par terminal de saisie (puisard)
1. Rechercher la préparation de comptage,
2. importer des fichiers d'inventaires générés par un puisard en cliquant "Mode importation fichiers
inventaire",
3. La liste des fichiers à importer s'affiche,
4. Cliquer sur le lot concerné,
5. Vérifier en cliquant sur "Vérifier fichier",
6. Importer en cliquant sur "Importer les fichiers".
o Vérifier les fichiers : Ce lien fait un contrôle du fichier à importer et signale les éventuelles
anomalies.
o Importer les fichiers : Ce lien fait à la fois un contrôle du fichier à importer et l'importation des
quantités inventoriées. La moindre erreur bloque la mise à jour.
o Sortie du mode importation : Ce lien vous ramène sur la page principale de la préparation de
comptage.
Vérifier les fichiers : Ce lien fait un contrôle du fichier à importer et signale les éventuelles anomalies :
Importer les fichiers : Ce lien fait à la fois un contrôle du fichier à importer et l'importation des quantités
inventoriées. La moindre erreur bloque la mise à jour.
Sortie du mode importation : Ce lien vous ramène sur la page principale de la préparation de comptage.

Contrôler et justifier les écarts
CONTRÔLER ET JUSTIFIER LES ÉCARTS
1. Appeler le lot de comptage,
2. Cliquer sur "Justifier les écarts",
3. La liste des articles ayant une quantité comptée différente de la quantité théorique et la liste
des articles non comptés apparaissent.
Articles non gérés comme bien
1. Filtrer les articles avec "Uniquement les articles avec écarts",
2. Justifier l'écart de chaque article :
3. Soit en allant recompter et corriger la quantité,
4. Soit en sélectionnant un motif de justification avec la liste déroulante.
Si l'écart d'inventaire est dû à un bon de livraison non saisi, il suffit de mettre un justificatif d'écart
(par exemple, B.L. non saisi). Parallèlement, enregistrer le bon de livraison dans "Gérer les
livraisons clients" mais le mouvement de stock sera passé à 0.
Articles gérés comme bien
La justification des écarts pour les articles gérés comme bien ne peut pas se faire comme pour les
articles non gérés comme bien.
Si un bien n'est pas présent après le comptage :
Pour supprimer un bien d'un lot de comptage, consulter Supprimer un bien du lot de comptage.

Gérer les articles non comptés manuellement
Après avoir justifié tous les écarts "justifiables", il est possible de mettre à 0 tous les articles non
comptés dont la quantité théorique est à 0.
1. Filtrer en cliquant sur "Uniquement les articles non comptés",
2. Cliquer sur 'Mettre à 0 les articles où qté comptée = vide et qé théorique = 0",
Eventuellement, gérer automatiquement les articles non comptés. Voir « 4.10.1 - Gérer les articles
non comptés automatiquement après validation du lot ».
Contrôler les écarts de comptage des articles et des biens avant et après justification par les liens
dans le lot de comptage :
1. "Voir les écarts de comptage des articles",
2. "Voir les écarts de comptage des biens".
Valider le comptage
VALIDER LE COMPTAGE
La validation d'un lot de comptage ne peut s'effectuer que si la justification de tous les écarts est
faite.
Gérer les articles non comptés automatiquement après validation
du lot
Lorsque tous les lots de comptage sont validés, lister les articles et les biens non comptés (Ces
liens affichent les articles ou les biens non présents dans un lot de comptage validé. Ces deux
options ne sont possibles que si le lot ne fait pas partie d'un inventaire) :
1. "Articles non comptés",
2. "Biens non comptés".
3. Sélectionner le(s) article(s) ou le(s) bien(s) obtenus dans le tableau,
4. Cliquer sur <Disquette> ou <F2> pour générer un lot de comptage.
Remarque
Si cette création manuelle n'est pas faîte, une création automatique lors de l'inventaire peut être
faite. Reportez vous au paragraphe ‘Créer l'inventaire' option ‘Prise en compte des préparations' ci-
après.
Le lot généré avec les articles ou les biens non comptés reprend :
o Le descriptif ‘Création automatique des articles/biens non comptés – Date du jour de
génération'
o L'inventoriste est celui qui a demandé la création du lot
Tant que ces lots ne sont pas validés, ARTIS considère les articles concernés comme non
comptés. Néanmoins, lorsque des articles ou des biens présents dans un lot non validé sont repris,
le message suivant s'affiche :
"Certains articles/biens n'ont pas été intégrés dans cette préparation car ils sont déjà dans des lots
non validés".

Valider le lot
Une fois tous les contrôles effectués, vous pouvez valider votre comptage.
1. Appeler le lot de comptage,
2. <Loupe>,
3. Cliquer sur "Valider le lot de comptage",
4. Validez le message.
Modifier ou Supprimer un lot de comptage
Tant qu'un lot de comptage n'est pas validé, il peut être modifié ou supprimer. Il n'est pas possible
de supprimer un lot de comptage validé (dé-valider un lot en cliquant sur "Dévalider").

Saisie d'un mouvement antérieur à un comptage
Il s'agit de saisie de mouvements datés d'AVANT le comptage.
Les mouvements passés à une date antérieure à celle du comptage sont enregistrés avec une
quantité à 0. Le commentaire du mouvement justifie la quantité passée à 0.
Paramétrage pour le comptage, inventaire et dépréciation
PARAMÉTRAGE POUR LE COMPTAGE, INVENTAIRE ET
DÉPRÉCIATION
Tables de libellés
Commentaire de mouvements de stocks
Paramètres applications / Classifications, listes et tables de décision / Gérer les tables de libellés
Cette table "Commentaires de mouvements de stocks" contient des libellés types qui sont repris
dans les transferts de stocks, les mouvements manuels de stocks ou les justifications d'écart
d'inventaires, exemple "PERT - Perte".
1. Dans la case filtre, mettre "CommentairetypeMvtStock" suivi de <Entrée>,
2. Cliquer sur "CommentairetypeMvtStock",
3. <Loupe>,
4. <+>,
5. Saisir l'abréviation et le nom,
6. <Disquette>.
Remarque
Le service Comptabilité doit participer à élaboration de cette table.
Origine des dépréciations
Paramètres applications / Classifications, listes et tables de décision / Gérer les tables de libellés
Cette table "Origine de dépréciations" contient des libellés types qui sont repris dans les
dépréciations, exemple "D0708 - Dépréciation 07-2008".
1. Dans la case filtre, mettre "OrigineDepreciation" suivi de <Entrée>,
2. Cliquer sur "OrigineDepreciation",
3. <Loupe>,
4. <+>,
5. Saisir l'abréviation et le nom,
6. <Disquette>.
Tables de décisions
Dépréciations
Trois tables de décisions existent pour définir les règles de dépréciations automatiques à appliquer.
Ces règles de dépréciations sont facultatives. Si elles sont définies, les montants de dépréciations
seront proposés automatiquement. Sinon, il sera nécessaire de les indiquer manuellement.
Dépréciations des articles
Paramètres application / Paramètre application / Gérer les tables de décisions
Rechercher la Table de décision "TD_DEPRECIATION_STOCK_ARTICLES".
Créer une règle de dépréciation et renseigner les zones suivantes :
§ Code dépôt,
§ Code activité,
§ Code famille,
§ Code sous-famille,
§ Ancienneté Mini (en nombre de mois),
§ Ancienneté Maxi (en nombre de mois),
§ Pourcentage dépréciation.
Exemple 1, pour appliquer une dépréciation de 30 % sur la sous-famille d'articles 01/03/22 sans
mouvement entre 12 et 24 mois dans le dépôt 0101, et 40% si pas de mouvement depuis 25 à 36
mois, vous devez définir la règle suivante :
Code dépôt Code activité Code famille Code sous-famille Ancienneté mini Ancienneté maxi Pourcentage dépréciation
0101 01 03 22 12 24 30
0101 01 03 22 25 36 40
Exemple 2, pour appliquer une dépréciation de 50 % sur tous les articles sans mouvement depuis
36 mois, vous devez définir la règle suivante :
Code dépôt Code activité Code famille Code sous-famille Ancienneté mini Ancienneté maxi Pourcentage dépréciation
36 999 50
Dépréciations des biens
Paramètres application / Paramètre application / Gérer les tables de décisions
Rechercher la Table de décision "TD_DEPRECIATION_STOCK_BIENS".
Renseignez les zones suivantes :
§ Statut juridique,
§ Statut logistique,
§ Marque,
§ Modèle,
§ Code dépôt,
§ Code activité,
§ Code famille,
§ Code sous-famille,
§ Ancienneté Mini (en nombre de mois),
§ Ancienneté Maxi (en nombre de mois),
§ Pourcentage dépréciation.
Numéro Statut juridique Statut logistique Marque Modèle Code dépôt Code activité Code famille Code sous famille Ancienneté mini Ancienneté maxi Pourcentage dépréciation
Dépréciations des constituants
Paramètres application / Paramètre application / Gérer les tables de décisions
Rechercher la Table de décision "TD_DEPRECIATION_STOCK_CONSTITUANTS".
Numéro Dépot Code activité Code famille Code sous famille Ancienneté mini Ancienneté maxi Pourcentage dépréciation
Idem aux articles.
Affichage de la quantité théorique
Paramètres application / Paramètre application / Gérer les tables de décisions
Dans les lots de comptage, il est possible de cacher la colonne "Qté théorique". Ainsi, l'inventoriste
n'a pas la tentation de ressaisir la quantité théorique (ARTIS) dans la quantité inventoriée
(comptée).
Rechercher la Table de décision "TD_HABILITATIONS_SPECIALES".
Sasir les logins dans la colonne "Comptes d'accès".
Numéro Nom de l'écran Nom de l'habilitation Comptes d'accès Visualiser Modifier Ajouter Supprimer
8 ccPreparationComptage Interdire la visualisation des quantités théoriques Oui Oui Oui Oui
La  table  de  décision  joue  également sur  les  requêtes  qui  affichent  habituellement la  quantité
théorique :
o Intégrer les articles du dépôt,
o Justifier les écarts,
o Articles non comptés,
o Voir les écarts de comptage des articles.
Remarque
Le lien "Edition des lots sélectionnés" donne accès  à  un écran. Si  la  visualisation des quantités
théoriques doit être interdites, il faudra donc la gérer par le module des Droits d'accès.
Règles de numérotation
Les règles de numérotation suivantes doivent être créées, consulter Gérer les numéros :
o La numérotation des Préparations de comptage,
o La numérotation des Lots de comptage,
o La numérotation des Lots de dépréciations.
Paramètres application
Dépréciations limitées au prix Argus
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre permet de ne pas déprécier les matériels en deçà de la valeur Argus.
Paramètre "DEPRECIATION_MAX I_ARGUS"
Valeur : Oui, Dépréciation maximale au prix argus.
Utilisation d'un terminal de saisie (puisard)
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre est prévu pour l'utilisation du puisard lors des inventaires.
Paramètre "CHEMIN_IMPORT_FICHIER_INVENTAIRE"
Valeur : Chemin d'accès pour l'import des fichiers d'inventaire.
Remarque
Pour définir le chemin d'accès, vous devez contacter ARTIS.
Classification des articles de stock
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre permet de définir quelle classification d'articles de stock est prise en compte pour la
sélection et l'affichage des articles dans les écrans d'inventaire.
Paramètre "ACFASFS"
Valeur : Abréviation de la classification des articles de stocks.
Gérer l'inventaire
GÉRER LES INVENTAIRES
Informations inventaire
La création d'un inventaire valorise une ou plusieurs préparations. Par contre, la création de
plusieurs inventaires à la même date (même bilan comptable) est fortement déconseillée car les
biens sortis entre temps (livraison par anticipation ou destruction) peuvent se retrouver dans les
différents inventaires :
Exemple :
o Date de livraison ou destruction : 10/07
o Date de comptage : 15/07 (à cette date, les biens sortis ne sont pas constatés)
o Date de création d'inventaire : 20/07 en date du 30/06
Dans ce cas, les biens sortis sont réintégrés automatiquement dans les différents inventaires alors
qu'ils ne sont présents dans aucun lot de comptage.
Procédure
1. Choisisser l'Organisation interne,
2. Saisir la date de l'inventaire (en général, la date de fin d'exercice pour un bilan (par exemple,
31/12/2008 à 23:59). Cela veut dire que tous les mouvements avant le 01/01/2009 à 0h00 ne
sont pas autorisés),
3. L'option "Préparation post-inventaire à intégrer jusqu'au" permet de prendre en compte des
préparations de comptage postérieures à la date d'inventaire.
Exemple : pour un inventaire au 31/07/2008, si un ou plusieurs techniciens sont absents à
cette date et font leur comptage le 05/08/2008, cette option permettra d'intégrer leurs
préparations datées entre le 31/07/2008 et le 05/08/2008. Les sorties de stocks entre ces
deux dates seront prises en compte afin de respecter les quantités réellement en stock le
31/07/2008.
4. Valorisations des articles. La valorisation des articles à l'inventaire peut se faire :
§ Soit au PMP,
§ Soit au CUMP (PMP plus les frais de douanes),
§ Soit au prix d'achat (prix de la fiche article),
§ Soit au dernier prix d'achat (prix d'achat sur la dernière facture fournisseur),
5. Valorisation des biens d'occasion. Pour les biens inventoriés, l'option "Valorisation des biens
d'occasion" permet de les chiffrer :
§ Au prix de reprise,
§ Au prix Argus.
Si des lots ne sont pas validés, vous êtes alertés par ce message.
Prise en compte des préparations
o Toutes les préparations depuis le dernier inventaire :
Il s'agit là du cas le plus courant.
‘Toutes les préparations depuis le dernier inventaire' validé : cela garantit la vérification
du comptage de tous les articles. Un lot de comptage par dépôt pour les articles non
comptés est créé en automatique. Dans ce cas, ARTIS ne tient compte que de la
dernière préparation à laquelle est rattaché l'article (idem pour les biens)
o Une sélection de préparations :
Plusieurs préparations peuvent être prises en compte dans un inventaire. Il suffit de les
cocher pour qu'ARTIS les intègre (attention, il n'y a pas de lot de comptage créé pour
les articles non comptés)
Traitement et résultat
Le logiciel calcule l'inventaire et le mémorise immédiatement. Aucune validation n'est nécessaire.
Ce traitement peut donc être exécuté en fin journée, sans qu'un utilisateur reste à attendre le
résultat.
Cette opération de création d'inventaire peut être assez longue.
A la fin du traitement, il est possible de rappeler un inventaire créé.
Des liens permettent de chaîner vers l'édition de l'inventaire validé en cours de validation.
Articles non gérés comme bien
Position Position
lettrée Label de la colonne Format Commentaire
1 A Reference
2 B Libellé
3 C Qté
4 D Valeur brute
5 E Valeur nette
6 F Code dépôt
7 G Libellé dépôt
Articles gérés comme bien
Position Position
lettrée Label de la colonne Format Commentaire
1 A Identifiant fabricant
2 B Identifiant prestataire
3 C Libellé
4 D Valeur brute
5 E Valeur nette
6 F Code dépôt
7 G Libellé dépôt
8 H Identifiant client
Valider ou dé-valider l'inventaire
Le lien "Valider" permet de figer l'inventaire (date de validation et valeur).
Après validation, il est toujours possible de dé-valider un inventaire. Cette action vous permet
uniquement de modifier les dépréciations effectuées.
Cas particulier
Valoriser l'inventaire plusieurs fois
Le souhait est de pouvoir valoriser une première fois l'inventaire. Puis le cas échéant, on souhaite
modifier la valeur de certains biens. Pour enfin refaire une valorisation et vérifier les changements et
le total.
Il est nécessaire de prendre la précaution suivante :
Il faut impérativement faire le lot de comptage des biens non comptés à une date :
o Supérieure ou égale à la date prévue d'inventaire
ET
o Inférieure strictement à la date de premier mouvement de stock.
Créer ensuite un premier inventaire qui permettra d'en connaître le montant. Après être intervenu sur
les valeurs des biens, vous supprimerez cet inventaire. De nouveau, un nouvel inventaire sera à
créer qui tiendra compte des nouvelles valeurs des biens. Renouveller cette opération autant de fois
qu'il vous faudra.
Editer un inventaire
EDITER UN INVENTAIRE
Position Position
lettrée Label de la colonne Format Commentaire
1 A Organisation Interne
2 B Code
3 C Agence
4 D Code
5 E Dépôt
6 F Référence
7 G Libellé de l'article
8 H Référence fourn.
9 I ACT
10 J Activité
11 K FAM
12 L Famille
13 M SFAM
14 N Sous-famille
15 O PU Brut Valeur unitaire de l'article (hors dépréciation), en fonction du
type de valorisation choisi (PMP, Prix de reprise, Argus, etc)
16 P Coef. dépréciation
17 Q PU net Valeur unitaire de l'article déprécié
18 R Qté
19 S Valeur brute Valeur du stock brute (Qté x P.U brut)
20 T Montant dépréciation Valeur de la dépréciation
21 U Valeur nette Valeur du stock dépréciée (Qté x P.U net)
22 V Fabricant Pour les biens uniquement
23 W Prestataire Pour les biens uniquement
24 X Client Pour les biens uniquement
25 Y Prix achat Pour les biens uniquement
26 Z Date de reprise Pour les biens uniquement
27 AA Prix de reprise Pour les biens uniquement
28 AB Date Argus Pour les biens uniquement
29 AC Prix Argus Pour les biens uniquement
30 AD Date inventaire Renseignée dans le cas d'un inventaire
31 AE Statut logistique Pour les biens uniquement
32 AF Statut juridique Pour les biens uniquement
33 AG Date de livraison achat Date d'entrée en stock par le B.L. fournisseur (pour les biens
uniquement)
34 AH Date de facture achat Date de facture fournisseur (pour les biens uniquement)
35 AI Date dernière entrée du dépôt
36 AJ Date dernière entrée société Sur l'ensemble des dépôts de la société
37 AK Date dernière sortie du dépôt
38 AL Date dernière sortie société
39 AM Type de prêt Prêt technique, par exemple
40 AN Condit. Unité de conditionnement
41 AO Empl Emplacement en stock
42 AP Mini dépôt Qté MINI
43 AQ Maxi dépôt Qté MAXI
44 AR Nom du fournisseur
45 AS Marque
46 AT Code gamme
47 AU Gamme
48 AV Date Edition Ou Date d'export du fichier
49 AW Heure Edition Ou Heure d'export du fichier
Gérer les dépréciations
GÉRER LES DÉPRÉCIATIONS
Dès que l'inventaire est créé, il est possible de saisir les dépréciations de stocks par le lien
"Dépréciations".
1. <+>,
2. Indiquer la date du lot, une origine de la dépréciation et une description ou commentaires
facultatifs,
3. Définisser les listes de sélection qui pourront être réutilisées à chaque édition d'inventaire
(dépôts, catégories d'articles ou marques).
4. Choisir sur quels articles s'applique la dépréciation :
§ Sur les articles,
§ Sur les biens,
§ Sur les articles constituants,
5. Indiquez si la dépréciation concerne un seul article de stock, un modèle ou un matricule.
6. Articles dans mouvements. Permet de sélectionner les articles inactifs :
§ Sans mouvements depuis une date : concerne les mouvements clients et fournisseurs,
§ Sans entrée depuis le : concerne les mouvements fournisseurs,
§ Sans sortie depuis le : concerne les mouvements clients,
7. Analyser l'inactivité des articles :
§ Tous dépôts confondus :  l'article est retenu s'il est inactif dans tous les dépôts de la
l'Organisation interne (tous les dépôts dans lesquels est inventorié l'article),
§ Exclure régularisation et transfert  : les mouvements internes ne sont pas pris en
compte,
8. Montant de dépréciation à appliquer. Permet de définir le type de dépréciation :
§ Montant : la dépréciation se fait en fonction de la valeur saisie (il s'agit du montant
déprécié, valeur finale, appelé aussi valeur nette),
§ Pourcentage : la dépréciation se fait en fonction d'un taux saisi,
§ Utiliser la table de décision, consulter Paramétrage pour le comptage, inventaire et
dépréciation,
9. <Flèche verte> ou <F2>.
Une fois le tableau des dépréciations calculées affiché, il est également supprimer des articles ou
des biens à ne pas déprécier. Il est toujours possible d'apporter des ajustements en modifiant le
taux ou en saisissant directement un montant déprécié.
