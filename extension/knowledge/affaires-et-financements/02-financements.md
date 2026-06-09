# Financements

> Categorie: Affaires et Financements | Pages 723-775

## Sous-rubriques
- Généralités et Théorie (p.723)
- Gérer les dossiers de financements (p.724)
-   Particularités (p.726)
-     Modifiier le bien dans un financement suite à un échange (p.726)
-     Modifier le leaseur sur un dossier sans négociation (p.726)
-     Modifier le leaseur sur un dossier avec négociation (p.727)
-     Faire un financement avec adjonction (p.729)
-     Facturer une pré-échéance depuis le dossier de financement (p.729)
-     Facturer une pré-échéance direct en Financement partenaire Matériel (p.730)
-     Mettre un leaseur sur une commande livrée dont le client factur én'est pas un leaseur (p.731)
-     Paramétrer les types de dossiers de financement (p.731)
-     Paramétrage lié aux financements (p.733)
-   Gérer le financement à son terme (p.738)
-     Rachat par le client (p.738)
-     Rachat par le leaser (p.739)
-     Reprise sèche en fin de location sans revente (p.740)
-     Fin de financement avec reconduction (p.741)
-     Location pure (p.744)
- Négocier les financements (p.747)
-   Envoyer la liste des dossiers de financement aux Leaseurs (p.749)
-   Particularités (p.751)
-     Paramétrage lié à la négociation (p.751)
- Gérer les dossiers de rachat / reprise (p.751)
-   Reprendre un bien (p.751)
-   Particularités (p.751)
-     Paramétrage lié aux rachats/reprises (p.752)
-     Dossier de rachat pour prise en compte de loyers (p.757)
- Editer les fiches de reprise ou de relevés compteurs (p.757)
- Consulter les rachats de dossiers (p.759)
- Lister les biens en fin de financement (p.760)
- Récapituler les factures d'un organisme de financement (p.761)
- Rapprocher les loyers client et organisme de financement (p.764)
- Rapprocher les loyers client et organisme de financement (détaillé) (p.765)
- Calculer les PCA-PAR (Cut-off) des financements (p.768)
- Lister les pré-échéances directement depuis les dossiers de financement (p.769)
- Lister les pré-échéances depuis les SSC (p.771)
- Lister les éléments des dossiers de rachat/reprise (p.771)
- Lister les financements (p.773)
- Lister les financements avec infos Bien, SSC (p.774)

Article de dérogation
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_ART_AJUSTEMENT_DEROGATION"
Valeur : Code article d'ajustement à utiliser pour le calcul de la dérogation.
Type de ligne de budget
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_DERO"
Valeur : Code du type de ligne de budget dans la table de libellé typLgnBudget pour les lignes de
budget "Dérogation récupérable".
Financements
Généralités et Théorie
CONTEXTE
Le client choisit souvent de financer son matériel auprès d'un organisme spécialisé, le leaser ou
financeur, qui prend en charge totalement ou partiellement le montant de l'affaire et devient
propriétaire du matériel.
Le leaser loue le matériel au client final et prélève des échéances de loyer, avec une périodicité et
une durée variable dans le temps.
A la fin de la location, selon le type de financement, le client peut choisir de payer une valeur
résiduelle et devenir le propriétaire du matériel, ou bien de l'abandonner, généralement pour
démarrer le financement d'un nouveau matériel dans le cadre d'une nouvelle affaire.
Dès l'acceptation du dossier par le leaser, celui-ci fournit deux types de documents pour renseigner
les éléments du financement :
§ L'accord de financement, qui donne le numéro de dossier et autres informations sur le
nouveau financement
§ La confirmation du solde du dossier en cours, qui donne le numéro de dossier du
financement précédent et le montant de rachat comptable des matricules soldés,
lorsque l'affaire inclut un rachat de biens financés.
OBJECTIF
Ce module permet :
o De suivre, coté « Client » :
§ Le stockage des informations sur les dossiers de financement,
§ D'avoir une situation sur les dossiers de financement, à tout moment (échéancier),
§ D'avoir en lien avec ces dossiers, les solutions de service client de type Loyer,
o De suivre, coté « Organisme de financement » :
§ Le stockage des informations sur les dossiers de financement,
§ D'avoir une situation sur le dossier de financement, à tout moment (échéancier),
§ D'interfacer en comptabilité les loyers,
o De faire un rapprochement entre les loyers Client et les loyers des Organismes de financement,
o De contrôler les rachats de matériel.
o D'établir un récapitulatif mensuel des factures de matériel par Organisme de financement.
Remarque
La facturation des SSC de type loyer permet d'interfacer en comptabilité les loyers Client.
POSTULAT AFFAIRE – FINANCEMENT - RACHAT
La gestion des dossiers de financements et des dossiers de rachat implique la gestion des affaires.
Il faut également tenir compte des points suivants :
o Une affaire possède au moins une commande,
o Une affaire possède éventuellement n dossiers de financement,
o Une affaire possède éventuellement n dossiers de rachat.
Un dossier de financement = n commandes contenant chacune un seul bien maître financé.
Reprise de données (migration, import)
La reprise des dossiers de financement est possible avec l'outil d'import des financements, à partir
d'un fichier.
CAS PRATIQUE
Pour créer un dossier de vente complet, il faut :
1. Créer une commande,
2. Créer une affaire et la lier à la commande précédemment créée,
3. Créer les commandes suivantes et les lier à l'affaire précédemment créée,
4. Créer le dossier de financement,
5. Créer le dossier de rachat,
6. Si il y a un rachat de dossier, terminer le financement si nécessaire
Gérer les dossiers de financements

GÉRER LES DOSSIERS DE FINANCEMENTS
Création d'un dossier de financement
1. Se positionner dans l'affaire,
2. Cocher la ou les commandes,
3. Cliquer sur "Créer un dossier de financement à partir des commandes" dans
  ,
4. L'onglet "Client" est automatiquement créé.
§ La section Filière définit les parties intervenant dans la mise en place du dossier de
financement,
§ Onglet « Client » décrit le dossier client :
1. Le pavé « Infos principales » qualifie le dossier client,
2. Le pavé « loyer » recense les informations utiles au loyer client,
3. Le tableau « commandes financées » liste les commandes liées au dossier client,
4. Le tableau « lignes commandes financées » liste les lignes des commandes liées,
5. Le tableau « biens, solutions de services et fin de financement » liste les biens
affectés aux lignes de commandes. Des traitements particuliers sont disponibles.
Affaire, Gestionnaire, Vendeur
Ces informations sont reprises automatiquement depuis l'affaire ou les commandes,
Org. de financement
Obligatoire, issu du client facturé des commandes client sélectionnées, il s'agit
obligatoirement d'une organisation de type financeur,
Numéro externe du dossier
Obligatoire au moment de la validation,
Type de dossier
Non obligatoire, permet de typer les dossiers, permet ensuite de faire des traitements,
des extractions plus précis, voir Paramétrer les types de dossiers de financement,
Statut
Obligatoire, permet de spécifier ou de voir l'état d'avancement du dossier.
Statut
A étudier Subira le traitement de la négociation
Négocié Statut après négociation
Sans négociation Financement classique direct avec l'organisme de financement
Validé Mis manuellement, correspond à un dossier actif
Terminé Dossier échu, date de fin de financement terminé normalement
Soldé partiellement Un des biens financés a été retiré du financement (dossier de rachat)
Soldé en totalité Tous les biens ont été retirés du financement (dossier de rachat)
Prolongé Financement dont la date de fin initiale a été repoussée
Montant financé commandé : est la somme des lignes commandées dont le client facturé
est l'organisme de financement du dossier,
Montant financé facturé : est la somme des lignes facturées dont le client facturé est
l'organisme de financement du dossier,
Durée de financement : à exprimer en nombre de mois,
Périodicité : est la périodicité des loyers,
Pré-échéance : donne la possibilité de générer une facture de pré-loyer,
Terme : A échoir ou échu,
Montant de l'échéance : montant du loyer hors taxe,
Valeur résiduelle  : à exprimer en % ou en montant,
Assurance : à exprimer en % ou en montant,
Nombre d'échéance : cliquer sur
 , = Durée du financement / Périodicité ramenée en
mois,
Première échéance : date de la première échéance (Attention : tenir compte du terme échu
ou à échoir),
Fin de financement : cliquer sur
 , date de fin pour la durée totale du financement
(exemple : En terme échu, la date de fin de financement = la date de dernière échéance. En
terme à échoir, la date de fin de financement = date de dernière échéance + la périodicité de
l'échéance),
Taux de financement : à compléter,
Coef. de financement : Le coefficient est un rapport entre le montant financé et la mensualité.
Il s'agit d'un coefficient pour 100 euros financés.
Faire <Disquette>.
Informations complémentaires
Section "Infos principales dossier",  dans
Classification
Optionnel, Des classifications peuvent être mises en place pour qualifier les dossiers de
financement,
Configurations des types de financement
Voir Paramétrer les types de dossiers de financement
Créer le dossier de l'organisme de financement
Permet de créer l'onglet banque nommé "Organisme de financement". Les informations du
dossier client sont alors dupliquées,
Section "Loyers", dans
Historique des négociations
Voir Historique des négociations
Échéancier client
Affiche la liste des échéances client avec le suivi des loyers client générées en écriture
Particularités
Modifiier le bien dans un financement suite à un échange
MODIFIIER LE BIEN DANS UN FINANCEMENT SUITE À UN
ÉCHANGE
Consulter Faire un échange technique, le bien est dans un dossier de fiancement.
Modifier le leaseur sur un dossier sans négociation
MODIFIER LE LEASEUR SUR UN DOSSIER FINANCEMENT
SANS NÉGOCIATION
Lorsque la facture au premier financeur N'est PAS faite
Une affaire contient :
o Une commande A est à facturer au Leaseur 1,
o Un dossier de financement est fait auprès du Leaseur 1,
§ Le dossier de financement Client est validé,
§ Le dossier de financement Organisme de financement est créé,
o La commande est livrée : Livraison B,
o La facture A au Leaseur 1 N'est PAS faite.
Procédure
1. Le financeur n'est pas modifiable dans la commande client,
2. Aller sur le dossier de financement,
3. Si le dossier de financement est à l'état "validé",
§ <Crayon>,
§ Mettre l'état "Sans négociation",
§ <Disquette>,
4. <Crayon>,
5. Changer le financeur dans l'entête du dossier,
6. <Disquette>,
7. ARTIS.net affiche un message indiquant la modification impactée dans la commande,
8. <Valider>,
9. La commande et le BL ont été impactés.
Lorsque la facture au premier financeur est faite
Procédure
1. Passer à l'état "Validé" le dossier de financement initial non correct,
2. Créer une affaire au nom du client final,
3. Créer un dossier de rachat :
§ Rechercher le dossier de financement initial (impératif),
§ Ajouter (rattacher) le bien en question,
§ Mettre la fin de financement "Refinancement au même client in-situ",
§ Compléter Solde de rachat, "Valeur de reprise, Argus, montant à financer" avec la
valeur de vente initiale,
§ Compléter le nouveau financeur,
4. <Disquette> ou <F2>,
5. <Disquette> ou <F2>,
6. → Une nouvelle commande "in-situ" au nom du nouveau financeur est générée
automatiquement,
7. Faire la reprise administrative du dossier de rachat,
8. → Le dossier de financement initial est soldé,
9. → La commande in-situ créée passe de l'état "Brouillon" à "En-cours",
10. La livraison et le facture peuvent être faite au nouveau financeur,
11. Créer le nouveau dossier de financement à partir de cette commande,
12. Faire l'avoir de la facture du financeur initial.
Modifier le leaseur sur un dossier avec négociation
MODIFIER LE LEASEUR SUR UN DOSSIER FINANCEMENT
AVEC NÉGOCIATION
Lorsque la facture au premier financeur N'est PAS faite
Une affaire contient :
o Une commande A est à facturer au Leaseur 1,
o Un dossier de financement est fait auprès du Leaseur 1,
§ Le dossier de financement Client a été négocié,
§ Le dossier de financement Client est validé,
§ Le dossier de financement Organisme de financement est créé,
o La commande est livrée : Livraison B,
o La facture A au Leaseur 1 N'est PAS faite.
Procédure
1. Changer le statut du dossier de financement Client pour le mettre "A étudier",
2. Procéder à une négociation de ce même dossier
§ A la question de la suppression des articles de négociation, répondre "Oui"
§ Négocier dossier en appliquant un coefficient différent ou identique sur le nouveau
leaseur : Leaseur 2,
§ <Disquette>
§ Le dossier de financement passe à l'état "Négocié",
§ Le dossier de financement est alors au nom du Leaseur 2,
§ La commande est impactée par le nouveau client facturé Leaseur 2,
§ Artis va re-générer les nouveaux "NEGLEP" et "NEGLEM", à facturer au Leaseur 2,
3. Insérer dans le BL existant la ligne de commande du "NEGLEP".
Lorsque la facture au premier financeur est faite
Une affaire contient :
o une commande A avec pour client à facturer le Leaseur 1,
o Un dossier de financement auprès du Leaseur 1,
§ Le dossier de financement Client a été négocié,
§ Le dossier de financement Client est validé,
§ Le dossier de financement Organisme de financement est créé,
o La commande est livrée : Livraison B,
o La facture A au Leaseur 1 a été faite et est validée.
Procédure
1. Faire un avoir en prix à partir de la facture d'origine (Facture A) : Avoir 1
2. Changer le statut du dossier de financement Client pour le mettre "A étudier",
3. Procéder à une négociation de ce même dossier
§ Négocier dossier en appliquant un coefficient différent ou identique sur le nouveau
leaseur : Leaseur 2,
§ <Disquette>Le dossier de financement passe à l'état "Négocié"
§ Le dossier de financement est alors au nom du Leaseur 2
§ Artis va générer une nouvelle commande (Commande B) incluant les nouveaux
"NEGLEP" et "NEGLEM", à facturer au Leaseur 2
§ Artis va générer un nouveau BL (Livraison B) à partir de la nouvelle commande B
4. Faire un avoir partiel en prix à partir de l'avoir (Avoir 1, voir étape 1 ci-dessus), ne pas
sélectionner la ligne "NEGLEP"
§ Cet avoir est une nouvelle facture
5. Changer le client facturé et mettre le Leaseur 2
6. Insérer dans cette facture, le nouveau BL (Livraison B)
Faire un financement avec adjonction
FINANCEMENT AVEC ADJONCTION
Premier cas
Dans un dossier de financement, il est possible d'ajouter une commande à condition qu'elle fasse
partie de la même affaire initiale. Il faut alors modifier/compléter les informations du dossier de
financement.
Deuxième cas
La commande fait partie d'une nouvelle affaire. Dans cette affaire, il faut donc :
o Créer un dossier de rachat avec une fin de financement « Refinancement …in situ ». Le
montant à financer est égal au montant de la commande initiale.
o Dans la commande in-situ créée automatiquement, il faut ajouter une ligne d'article divers/
intangible égale au total de la commande en négatif. La commande passera alors à un total à 0
et donc il n'y aura pas de facture à faire.
o Créer un dossier de financement intégrant votre nouvelle commande et le commande in-situ.
Remarque
Ce deuxième cas ne faisait pas partie du cahier des charges initial. Nous le mettons dans la liste
des points à prendre en compte pour de nouveaux développements.
Facturer une pré-échéance depuis le dossier de financement
PRÉAMBULE
La facture de pré-échéance à partir du dossier de financement permet de facturer un loyer
intercalaire au client final. Si celui-ci doit subir les frais de facture, la ligne est ajoutée
automatiquement.
Création de la facture
1. Appeler le dossier de financement,
2. <Modifier>,
3. Sur le dossier de financement client, cocher la case "Pré-échéance",
4. Choisir le type de date permettant de calculer le loyer intercalaire,
5. Vérifier la date de première échéance,
6. <F2>,
7. Cliquer sur "Facturer la pré échéance",
8. Répondre "Oui" à la question,
9. La facture est alors créée.
Remarque
La date de première échéance peut être calculée de manière automatique Il faut cliquer sur le lien
 :
§ En périodicité mensuelle : La date calculée est le premier jour du trimestre qui suit la
date de la prestation retenue (voir point 4 ci-dessus),
§ En périodicité trimestrielle et autre : La date calculée est le premier jour du trimestre
qui suit la date de la prestation retenue (voir point 4 ci-dessus).
Ce calcul est possible si la gestion des prestations (DIT à partir des commandes) est mise en
place, voir Lien DIT - Prestation commande.
Visualisation de la facture
o Le lien s'est transformé en "Facture de pré échéance",
o Cliquer dessus pour visualiser la facture.
Liste des pré-échéances directement depuis les dossiers de
financement
Voir Lister les pré-échéances directement depuis les dossiers de financement
Paramètres
Le type de dossier doit permettre de facturer la pré-échéance, voir Paramétrer les types de dossiers
de financement.
L'article de loyer doit être paramétré, voir Paramétrage lié aux affaires.
Facturer une pré-échéance direct en Financement partenaire Matériel
PRÉAMBULE
La facture de pré-échéance à partir du dossier de financement permet de facturer normalement un
loyer intercalaire au client final. Si celui-ci doit subir les frais de facture, la ligne est ajoutée
automatiquement.
Dans le cas présent, la facture est détournée de son but initial. Elle va permettre d'enregistrer et de
lier le loyer intercalaire que l'organisme de financement doit reverser au prestataire.
La création et la modification présentées ci-dessous sont les mêmes que pour Facturer une pré-
échéance depuis le dossier de financement.
Création de la facture
1. Appeler le dossier de financement,
2. <Modifier>,
3. Sur le dossier de financement client, cocher la case "Pré-échéance",
4. Choisir la date permettant de calculer le loyer intercalaire,
5. Vérifier la date de première échéance,
6. <F2>,
7. Cliquer sur "Facturer la pré échéance",
8. Répondre "Oui" à la question,
9. La facture est alors créée.
Visualisation de la facture
o Le lien s'est transformé en "Facture de pré échéance",
o Cliquer dessus pour visualiser la facture.
Modification de la facture
1. Modifier le client facturé,
2. Modifier la ligne pour mettre x% de remise ou saisir le montant net,
3. Modifier éventuellement les autres lignes,
4. Supprimer éventuellement les lignes ne devant pas être facturé au client.
Liste des pré-échéances directement depuis les dossiers de
financement
Voir Lister les pré-échéances directement depuis les dossiers de financement
Paramètres
Le type de dossier doit permettre de facturer la pré-échéance, voir Paramétrer les types de dossiers
de financement.
L'article de loyer doit être paramétré, voir Paramétrage lié aux affaires.
Mettre un leaseur sur une commande livrée dont le client factur én'est pas un leaseur
METTRE UN LEASEUR SUR UNE COMMANDE LIVRÉE DONT
LE CLIENT FACTURÉ N'EST PAS UN LEASEUR
La commande a été saisie avec un client facturé qui n'est pas un leaseur. Cette commande est
livrée, voire même facturée.
Un dossier de financement doit être créé.
Il n'est pas possible de modifier le client facturé dans l'entête de la commande, et le dossier de
financement ne peut être créé que si celui-ci est un leaseur.
1. Appeler la commande,
2. Sélectionner toutes les lignes à financer,
3. <Modifer> ou <Crayon>,
4. "Client facturé" : mettre le client leaseur,
5. <Disquette> ou <F2>,
6. ARTIS.net passe à la ligne suivante,
7. Poursuivre les modifications,
8. Créer ensuite le dossier de financement selon la procédure habituelle.
Paramétrer les types de dossiers de financement
PARAMÉTRER LES TYPES DE DOSSIERS DE FINANCEMENT
Définition des types de dossier
En tenant compte des types de financement :
o Financement du matériel par un partenaire financier
o Financement du matériel et de la maintenance par un partenaire financier
o Financement du matériel par le prestataire
o Mise à disposition du matériel par le prestataire
... et des types contrat :
o Location financière
o LOA
o Crédit-bail
o Mandat de gestion
o Location
... les types de dossier à paramétrer sont :
Code Libellé
LFPM Loc. Fin. ou CB Partenaire Matériel
LFPMM Loc. Fin. Partenaire Matériel + Maintenance
LCBAM Loc. ou CB Adossée Matériel
LMADM Loc. Mise à dispo Matériel
LOA Location avec option d'achat
CBPM CB Partenaire Matériel
Procédure
Il est possible de personnaliser les types de dossier de financement :
Paramètres applications / Classifications, listes et tables de décision / Gérer les tables de libellés
ARTIS
o Dans la case filtre, mettre "financement" suivi de <Entrée>
o Cliquer sur "TypFinancement"
o <Loupe>
o <+>
o Saisir l'abréviation et le nom
o <Disquette>
Configuration des types de dossier de financement
Affaires et Financements / Financements / Gérer les dossiers de financements / Configuration des
types de financement
Selon les règles de gestion des types de dossier, il s'agit de déterminer quelles vont être les
saisies à effectuer pour chaque type de dossier.
En effet, il est possible, au choix, d'autoriser la saisie de :
o Un dossier client,
o Loyers client,
o Un dossier organisme de financement,
o Loyers Organisme de financement,
o Facture de pré-échéance directe.

Dossier client
ARTIS.NET autorise la saisie d'un dossier client (onglet nommé « Client »), en collectant toutes les
informations liées à ce dossier. Il s'agit de décrire le lien qui existe entre les trois parties qui y sont
renseignées : Le prestataire, le client final et l'organisme de financement.
Loyers client
ARTIS.NET autorise :
o La mise en place d'une SSC :
§ En création automatique à partir d'une SSP de type montant forfaitaire,
§ Ou en création pré-remplie et à compléter à partir d'une SSP sélectionnée,
o La mise en place d'un échéancier client, qui fait l'objet d'un pointage échéance par échéance.
Si cette option est cochée, la liste des SSP est affichée. La(les) SSP correspondant à ce type de
dossier doit (doivent) être cochée(s). Cette(ces) SSP doit(doivent) contenir obligatoirement une
seule RFP de type montant forfaitaire.
Dossier organisme de financement
ARTIS.NET autorise la saisie d'un dossier organisme de financement (onglet nommé « Organisme
de financement »), en collectant toutes les informations liées à ce dossier. Ce dossier existe que si
le dossier client existe également.
Loyers organisme de financement
ARTIS.NET autorise :
o La mise en place d'un échéancier client, qui fait l'objet d'un pointage échéance par échéance,
o La génération d'écriture pour interfaçage en comptabilité générale.
Le pointage des échéances permettra de faire un rapprochement entre les loyers banque et les
loyers client.
Paramétrage lié aux financements
PARAMÉTRAGE LIÉ AUX FINANCEMENTS
Règles de numérotation
Dossier de financement
Consulter Créer une règle de numérotation avec les informations ci-après.
Libellé : "Dossier de Financement - Numéro Interne"
Code : "FinancementClt_Num"
Classe : "Financement client"
Attribut numéroté : "Numéro interne"
Type : "Unique par organisation"
Organisation : une organisation interne
Type de règle : "Commun avec tous les exercices"
Premier numéro à prendre : 000001
Dernier numéro utilisé : 000000
Dernier numéro à prendre : 999999
Longueur du numéro : 6
Paramètres
Pré-échance
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre indique si la case pré-échéance en création de dossier de financement est pré-
cochée.
Paramètre "PRE_ECHEANCE_FINANCEMENT"
Valeur :
§ Non : La case n'est pas pré-cochée,
§ Oui : La case est pré-cochée.
Date pour le pré-échance
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre indique la ate à prendre en compte pour la pré-échéance.
Paramètre "DATE_PRE_ECHEANCE"
Valeur :
§ DATEDEDERNIERCRITINSTALLATION : La date du dernier CRIT d'installation de la
DIT liée aux commandes de l'affaire,
§ DATEDEDERNLIVRAISON : La date du dernier bon de livraison des commandes de
l'affaire.
Article pour la génération de facture de pré-loyer à partir d'un dossier de
financement
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre ‘FACTURE_PRE_LOYER_CODE_ART_VENDU'
Valeur : Mettre le code de l'article vendu à utiliser pour la facture de pré loyer
Article pour la génération de facture de pré-loyer à partir d'une SSC
Paramètres application / Paramètres application / Gérer les paramètres
Il s'agit du même paramètre : ‘FACTURE_PRE_LOYER_CODE_ART_VENDU', voir le paragraphe
précédent.
Ventilation comptable des loyers
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre ‘VENTIL_FINANCEMENT_CLIENT'
Valeur :
§ Non, Valeur par défaut : la ventilation comptable des factures de loyer client et des
échéances organisme de financement n'utilisent pas la table de décision
"TD_CompteCharge_Financement". La ventilation comptable des loyers clients
s'effectue, comme toutes SSC, sur les catégories comptables des articles (et donc les
comptes comptables associés) des articles des RFC.
§ Oui : Si le paramètre est à Oui, alors la table de décision est appliquée.
Type de compte de financement
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre indique le type de compte comptable lié au dossier de l'organisme de financement.
Paramètre "TYPE_COMPTE_FINANCEMENT_BANQUE"
Valeur :
§ FOURNISSEUR : Les écritures sont générées dans le journal des achats en utilisant
un compte de tiers,
§ TRESORERIE : Les écritures sont générées dans le journal des achats en utilisant un
compte de trésorerie, consulter le paramétrage des journaux ci-dessous.
Type d'opération pour les écritures de financement
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre indique le type de compte comptable lié au dossier de l'organisme de financement.
Paramètre "CODE_TYPEOPERATION_FINANCEMENT"
Valeur :
§ "TR" : par défaut, Paramètre utilisé lors de la génération des écritures comptables. Ce
paramètre désigne le type d'opération à utiliser lors de la création des transactions
comptables.
Table de décision
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
Ventilation comptable des loyers client et organisme de financement
Cette table de décision permet en fonction de chaque type  de dossier, et  de différents critères,
variant dans le  temps,  de  définir les  comptes  comptables  utiles  à  la  génération. Les  comptes
comptables doivent être créés dans le plan comptable.
Rechercher la Table de décision ‘TD_CompteCharge_Financement'.
Numéro Type de loyer Type de
financement Catégorie comptable Code SSP Statut Compte
comptable
1 Loyer Banque * * (.*)61 Validée 60450600
2 Loyer Banque CLFSLMTM|CLLFLMT * * Validée 60450100
3 Loyer Banque * * * Validée 60450200
4 Loyer Banque * * * Fermée|
Suspendue.Autre 60450500
5 Loyer Client Adossée LOCATIONS MATERIEL|LOYER * Terminée 70605000
6 Loyer Client Adossée LOCATIONS MATERIEL|LOYER * * 70605000
Pour la gestion d'une table de décision, voir Critère dans les tables de décision
Colonne "Statut"
Si la ligne définie dans la table est de type « loyer banque », la colonne « Statut » fait référence au
statut de la SSC de type loyer client. Il s'agit de la SSC dont la RFC est liée au bien se trouvant
dans le dossier de financement.
Si la ligne définie dans la table est de type « loyer client », la colonne « Statut » fait référence au
statut du dossier de financement organisme de financement.
Colonne "SSP"
La syntaxe particulière indique que la ligne s'applique à toutes les SSP dont le code se termine par
"61".
Lecture de la table
Exemple d'écriture de loyer Organisme de financement :
Journal Date Com pte Débit Crédit
CB Date échéance 61220500 Montant HTdu loyer
CB Date échéance Compte de TVA TVA s/montant HT du
loyer
CB Date échéance Cpte de trésorerie du dossier de
financement
Montant TTC du loyer
Exemple d'écriture de loyer Client (facture de SSC) :
Journal Date Com pte Débit Crédit
VE Date facture Compte collectif + Compte auxiliaire Client Montant TTC du loyer
VE Date facture 706500 Montant HTdu loyer
VE Date facture Compte de TVA collectée TVA s/montant HT du loyer
Remarque
Le compte de TVA est le compte de la table de décision correspondant au code TVA par défaut des
paramètres application.
Plan comptable
Il est nécessaire de créer les comptes comptables liés, utiles à la ventilation comptable des loyers
client et des loyers organisme de financement, voir Gérer les plans comptables.
Journal comptable
Il est nécessaire de créer un journal de type trésorerie par compte de trésorerie. Le lien entre le
journal et le compte doit être créer. Lors de l'interfaçage des écritures, le code en comptabilité du
journal est utilisé, voir Gérer les journaux comptables.
Gérer le financement à son terme
Le financement arrive à son terme
Terminer le financement des biens sélectionnés
Rachat par le client
RACHAT PAR LE CLIENT
Le client peut opter pour le rachat de son matériel auprès du leaseur. La transaction a lieu entre le
client et le leaseur, donc :
Affaires et financement / Financement / Gérer les dossiers de financement
1. Rechercher le dossier de financement,
2. Sélectionner le ou les biens,
3. Faire "Terminer le financement des biens sélectionnés" (dans carré de carrés, dans le titre de
la section),
4. Sélectionner "Rachat par le client".
ou
Biens et configuration / Gérer la reprise administrative d'un bien
1. Rechercher le dossier de financement,
2. Sélectionner "Rachat par le client.
puis
1. Saisie de la date de rachat,
2. ARTIS complète automatiquement :
a. Le statut du dossier client actuel passe à "Terminé",
b. Statut pour le bien :
· commercial : pas de changement,
· logistique : pas de changement,
· financement : "Financement client.Non identifié",
· juridique : pas de changement,
c. Case ‘Immobilisation' NON cochée,
d. Pas de mouvement de stock,
3. SSC de maintenance : pas de changement,
4. SSC de loyer : pas de changement,
5. Aucune facture d'émise.
Explication
Pas d'affaires car il n'y pas de dossier de rachat.
Dans le cas par exemple d'un crédit bail : le client est prioritaire pour le rachat du matériel, vient
ensuite le prestataire. En dernier lieu, le bailleur reste propriétaire jusqu'à la vente de celui-ci.
Description
o Le client rachète son financement auprès du bailleur : il n'y a donc pas de rachat dans ARTIS.
o Le bien appartient au leaseur. Le client devient propriétaire.
o Le client peut opter pour le rachat de son matériel auprès de son leaseur. La transaction a lieu
entre le client et le leaseur. Le leaseur facture le client final.
o Le bien reste chez le client. Aucune reprise de bien (pas de mouvement).
o Statut Juridique : Le statut juridique passe à "Occasion"
o Immo : La zone « En immobilisation » passe à « Non »
o Statut Financement : Le statut de financement passe à "Financement client.Non identifié'"
o Aucune facture n'est émise.
Rachat par le leaser
RACHAT PAR LE LEASER
Le bailleur peut rester propriétaire de son matériel.
Affaires et financement / Financement / Gérer les dossiers de financement
1. Rechercher le dossier de financement,
2. Sélectionner le ou les biens,
3. Faire "Terminer le financement des biens sélectionnés" (dans carré de carrés, dans le titre de
la section),
4. Sélectionner "Rachat par le leaseur".
ou
Biens et configuration / Gérer la reprise administrative d'un bien
1. Rechercher le dossier de financement,
2. Sélectionner "Rachat par le leaseur.
puis
1. Saisie de la date de rachat,
2. ARTIS complète automatiquement :
a. Le statut du dossier client actuel passe à "Terminé",
b. Statut pour le bien :
· commercial : pas de changement,
· logistique : pas de changement,
· financement : "Financement client.Non identifié",
· juridique : pas de changement,
c. Case ‘Immobilisation' NON cochée,
d. Pas de mouvement de stock,
3. SSC de maintenance : pas de changement,
4. SSC de loyer : pas de changement,
5. Aucune facture d'émise.
Explication
Pour effectuer cette fin de financement, il faut aller dans l'entrée de menu : "Gérer les fins de
financements" ou "Gérer la reprise administrative". Il n'est pas possible de la générer à partir des
affaires car il n'y pas de dossier de rachat.
Le bailleur peut rester propriétaire de son matériel. Le client, en général, "cherche à vendre le
matériel par le biais de l'hôtel des ventes".
Remarque : dans le cas par exemple d'un crédit bail : le client est prioritaire pour le rachat du
matériel, vient ensuite le prestataire, en dernier lieu le bailleur reste propriétaire jusqu'à la vente de
celui-ci.
Description
o Le bailleur veut rester propriétaire du bien : il n'y a donc pas de rachat dans ARTIS.
o Le bien appartient au leaseur et reste propriétaire.
o Le bien reste chez le client. Aucune reprise de bien (pas de mouvement).
o Statut F : Le statut de financement passe à 'Financement client.Non identifié'
o Aucune facture n'est émise.
Reprise sèche en fin de location sans revente
REPRISE SÈCHE EN FIN DE LOCATION SANS REVENTE
Le bien est repris.
Sans affaire
1. L'utilisateur saisit un dossier de reprise et renseigne les valeurs de reprises,
2. L'utilisateur sélectionne le menu "Gérer la reprise administrative du bien" :
a. Rappelle le dossier de rachat,
b. sélectionne l'option "Reprise sèche en fin de location sans revente",
3. ARTIS complète automatiquement :
a. Le statut du dossier de financement actuel passe à "Terminé",
b. Statut pour le bien :
1) commercial en "Possédé par le prestataire à destination du parc client.Libre",
2) logistique en "Occasion en triage",
3) financement : "Néant",
4) juridique en "Occasion",
4. Case "Immobilisation" NON cochée,
5. Mouvement de retour en stock,
6. Fermeture manuelle de la SSC de maintenance,
7. Fermeture manuelle de la SSC de loyer.
Avec affaire
La procédure est presque identique :
1. L'utilisateur crée une affaire,
2. Il saisit un dossier de reprise dans cette affaire,
3. A la validation du dossier de reprise, un article de reprise est généré dans la première
commande non livrée de l'affaire,
4. Une DIT de reprise peut être générée dans la commande liée,
5. Une fiche de reprise est éditable (option au menu ou dans le dossier de reprise).
Explication
Le bien est repris en automatique, les traitements appliqués sont :
1. Génération d'un mouvement de stock de reprise, pour faire rentrer le bien dans les stocks de
l'organisation interne,
2. Modification du statut juridique du bien en "Occasion",
3. Modification du statut financement du bien en "Néant",
4. Modification du statut commercial du bien en "Possédé par le prestataire à destination du parc
client. Libre",
5. Modification du statut logistique du bien avec la valeur mise lors de la reprise : "Emmagasiné"
ou "Occasion en triage",
6. Zone «En immobilisation» du bien à "Non",
7. Fermeture des solutions de services contenant le bien.
Une facture de rachat est à générer par l'utilisateur et modifiable.
Fin de financement avec reconduction
FIN DE FINANCEMENT AVEC RECONDUCTION
Résumé
Le financement du bien est prolongé jusqu'à la date de "Fin de location".
Le bien reste :
· Chez le client
· Financé par le leaseur
Les autres éléments de financement restent inchangés.
Explication
Pas d'affaires car il n'y pas de dossier de rachat.
Le bien reste chez le client, avec le même financement.
L'utilisateur renseigne une nouvelle date de fin de location pour le bien concerné, qui montre la prolongation
du financement : deux dates, hors et avec paiement de la VR
Les  autres  éléments  de  financement du  bien  restent  inchangés  ainsi  que  les  solutions  de  services
contenant le bien. De plus, aucun mouvement de stock, ni changement de statut du bien ne sont faits.
1.1.1 Cinématique de fin de financement
1.1.1.1 Fin de financement avec reconduction (à échéance)
Description
Le leaser prélevait le loyer directement auprès du client.  La date de fin initiale de financement est
atteinte. Sans dénonciation de la part du client, la reconduction est tacite sur une durée prévue par le
leaser. Selon le contrat passé entre le leaser et le prestataire, il reverse alors une part du loyer au
prestataire (pourcentage précisé dans le contrat).
· Le bien appartient au Leadeur et reste propriétaire.
· Le financement du bien est prolongé jusqu'à la date Fin de location.
· Le bien reste chez le client.
· Pas de dossier de rachat.
· Aucune reprise de bien (pas de mouvement).
· Les autres éléments de financement restent inchangés
· Aucune facture n'est émise.
Dans ce cas, il n'y a pas de nouvelle affaire, pas de commissionnement vendeur.
Cinématique de traitement
· L'utilisateur sélectionne le menu ‘Terminer les financements'
o L'utilisateur sélectionne l'option ‘Fin de financement avec reconduction'
o L'utilisateur doit saisir :
v Date d'effet : initialisée à la date de la fin du financement initial
v Fin de location : la date de fin de la prolongation
· ARTIS complète automatiquement :
o Dossier de financement
o Le statut du dossier client passe à ‘Prolongé'
o La date de fin de financement est valorisée avec la fin de location
o ARTIS impacte l'échéancier client :  clôture de l'échéancier précédent et  démarrage d'un
nouveau
o Bien
v Pas de changement de statut pour le bien
o Stock
v Pas de mouvement de stock
o Facture
v Pas de facture de rachat
v Pas d'avoir
o SSC
v Pas d'impact automatique sur la SSC de maintenance
Facture du loyer partiel reversé
Par SSC
L'utilisateur doit changer manuellement le  type  de  dossier  de  financement (autorisant des  loyers
client) : création manuelle d'une SSC ou d'une nouvelle RFC dans la SSC de maintenance (au choix
de l'ADV).
Paramètres de création :
· Org 1 : Prestataire
· Org 2 : Client final
· Org 3 : Client facturé=Leadeur
· Date début : date de fin initiale du dossier de financement
· Date de fin initiale : date de fin de prolongation
· RFC de montant forfaitaire = loyer partiel
· Etablir manuellement le lien entre la RFC et le dossier de financement client
Par facture globale
Le prestataire établit manuellement une facture directe pour l'ensemble des loyers partiels  que  le
leaser reverse au prestataire.
Dénonciation du financement
Dans le menu ‘Terminer les financements', l'utilisateur sélectionne une option de fin de financement
et change manuellement d'état du dossier de financement : de ‘Prolongé' à ‘Terminé'.
Si une facturation était effectuée par SSC, l'utilisateur doit arrêter manuellement la RFC de loyer.
Location pure
1.1.1.1 Location  pure  accordée  par  la  filiale  à  la  place  du  leaser  (à
échéance ou anticipée)
Description
Le leaser prélevait le loyer directement auprès du client.
La date de fin initiale de financement est atteinte.
Désormais, c'est le prestataire qui fait la location auprès du client.
· Le bien appartient au Leadeur. Le prestataire devient propriétaire.
· Le bien est repris puis reloué au même client (mouvements de stock).
· Selon le cas, le bien est retiré de la SSC ou une RFC de loyer est à ajouter à la SSC.
· Statut C : Le statut commercial passe à ‘Possédé par le prestataire et loué à un client'
· Statut L : Le statut logistique passe à ‘Installé en prêt client longue durée'
· Statut J : Le statut juridique passe à ‘Occasion'
· Immo : La zone ‘En immobilisation' passe à ‘Oui'
· Statut F : Le statut financement passe à ‘Location pure'
· Statut SSC : Si le bien est retiré de la SSC, il passe en ‘Non couvert'
· Une facture de rachat est à faire à partir du dossier de rachat.
Dans ce cas, il y a une nouvelle affaire, et donc commissionnement d'un vendeur.
Cinématique de traitement
· L'utilisateur saisit une affaire
· L'utilisateur saisit un dossier de rachat dans cette affaire, lié au dossier de financement initial
o Les biens seront cochés ‘in situ'
o Le montant à financer sera la valeur totale du loyer sur la période annoncée
o La valorisation du stock sera égale à la valeur résiduelle ou 1 euro
· A  la  validation, la  commande de bien ‘in  situ'  est  générée automatiquement et  rattachée à
l'affaire du dossier de rachat, à l'état ‘Brouillon'
· Une demande de relevé compteur est possible (option au menu)
· L'utilisateur sélectionne le menu ‘Terminer les financements'
o L'utilisateur sélectionne l'option ‘Location pure'
o L'utilisateur doit saisir :
v La date d'effet : initialisé à la fin du financement initial
v Le prix de cession commercial
v Le choix du type de dossier (un correspondant à la location pure)
· ARTIS complète automatiquement :
o Le statut du dossier de financement client initial passe à ‘Soldé partiellement' ou ‘Soldé en
totalité'
o Statut pour le bien
v commercial en ‘Possédé par le prestataire et loué à un client'
v logistique en «Installé en prêt client longue durée»
v financement en ‘Location pure'
v juridique en ‘Occasion'
o Case ‘Immobilisation' cochée
o Un mouvement de stock d'entrée est effectué à la date de fin de financement
o Le bon de livraison est généré automatiquement
o Un mouvement de stock de sortie est effectué à la date de début de location
· L'utilisateur crée un nouveau dossier de financement ‘Location pure' à partir de la  commande
générée, raccroché à l'affaire
Pas de changement dans la SSC de maintenance
Facturation du loyer
Création manuelle ou automatique depuis le dossier de financement d'une SSC
· Org 1 : Prestataire
· Org 2 : Client final (=client facturé)
· RFC de montant forfaitaire = loyer
· Etablir manuellement le lien entre la RFC et le dossier de financement client
Document de rachat
Génération manuelle de la facture ou avoir de rachat : créer à partir des liens mis à disposition en bas
de l'écran du dossier de rachat.
Fin de location
La RFC de loyer doit être stoppée.
Négocier les financements
NÉGOCIER LES FINANCEMENTS
Le statut du dossier de financement permet de suivre son évolution :
o "A étudier" implique que le dossier fera partie de la prochaine proposition de négociation,
o "Négocié" indique que le financement a été négocié.
Négocier les financements
Affaires et financement / Financement / Négocier les financements
1. Faire <+> pour créer une nouvelle négociation,
2. Sélectionner les lignes correspondant aux dossiers à traiter (par défaut, toutes les lignes du
tableau sont sélectionnées),
3. Choisir le type de calcul à appliquer, voir Application des négociations
4. Saisir le taux de l'organisme de financement pour un nombre de loyer et une périodicité,
5. Appliquer le taux en cliquant sur les « engrenages » ou en faisant <Entrée>.
L'application du  taux  se  fait  sur  les  lignes  correspondant au  nombre de  loyer  et  à  la
périodicité ET cochée (par défaut, toutes les lignes du tableau sont sélectionnées).
6. Selon les besoins, il faut refaire les étapes 1, 2 et 3 pour chaque ligne du tableau "Application
des négociations".
7. Valider par <F2>
Seules les lignes cochées sont enregistrées.
Les données du tableau sont enregistrées et consultables, voir Consulter les précédentes
négociations
Remarque
Après validation, pour chaque dossier de financement, l'organisme de financement final ainsi que
les articles de négociation sont mis à jour dans les commandes concernées :
o L'article intangible permet de facturer au leaseur le montant négocié (et de ventiler de manière
particulière cet écart).
o L'article d'ajustement permet de ne pas impacter le calcul des marges et des commissions
pour les vendeurs.
Application des négociations
Type de calcul
1. "L constant" ou Loyer constant : Le loyer client "L1" et le loyer calculé "L2" de l'organisme de
financement sont égaux.
Dans ce cas, le capital "K2" à facturer à l'organisme de financement est recalculé.
2. "K constant" ou Capital constant : Le capital client "K1" et la capital "K2" à facturer à
l'organisme de financement sont égaux.
Dans ce cas, le loyer "L2" de l'organisme de financement est recalculé.
Organisme de financement
Il s'agit des organisations type "Financeur", voir Gérer les organisations de type financeur
Loyer (nombre et périodicité)
Tous les types de loyers sont repris à l'identique. Les taux négociés auprès des organismes de
financement seront à saisir puis à appliquer sur les dossiers.
Description du pavé « Financements »
o Client, Affaire, Dossier
Tous les dossiers de financements dont le statut est positionné « A étudier » sont listés
dans le tableau. Il est possible, en cliquant sur les numéros, de consulter le client, l'affaire
et le dossier de financement.
o Les colonnes "xx L périodicité "
Correspond toutes les saisies qui ont pu être faites dans les dossiers affichés. xx est le
nombre de loyers, périodicité est celle du dossier.
o Org. fi. initial
Organisme de financement saisi dans le dossier de financement.
o Taux Client
Taux de financement que le client a signé lors de la commande (voir le dossier de
financement).
o Loyer Client (L1)
Montant de l'échéance que le client a signé lors de la commande (voir le dossier de
financement).
o Org. fi.
Organisme de financement prévu initialement par le vendeur lors de la signature de la
commande avec le client (voir le dossier de financement).
o Taux calculé
Taux appliqué par l'utilisateur à partir du pavé « Application des négociations ».
o Loyer TTC calculé
égale à l'application de la TVA sur le loyer HT calculé
= L2 x 1.196.
o Loyer HT calculé (L2)
Loyer recalculé en fonction des choix effectués par l'utilisateur à partir du pavé «
Application des négociations ».
o "L constant"
égale au loyer client.
= L1.
o "K constant"
égale au taux calculé appliqué sur le capital à financer
= K2 x Taux calculé / 100
o K Org. fi. (K2)
Organisme de financement retenu par l'utilisateur à partir du pavé « Application des
négociations ».
o "L constant"
égale au loyer de l'organisme de financement « L2 » divisé par le taux calculé.
= L2 / Taux calculé x 100.
o K constant"
égale au capital initial
= K1.
o Gain (G)
Gain réalisé par la négociation des financements.
o "L constant"
égale à la différence entre le capital initial et le capital recalculé à facturer à l'organisme de
financement.
= K2 – K1.
o "K constant"
égale à la somme des différences entre le loyer client et le loyer de l'organisme de
financement, sur la durée du financement.
= (L2 – L1) x nombre de loyer.
Consulter les précédentes négociations
Dans le dossier de financement, le lient "Historique des négociations" permet de consulter
l'ensemble des négociations qui ont été faites sur ce dossier.
Avant négociation du financement, l'historique comprend uniquement une ligne correspondant à la
saisie initiale du dossier. Chaque négociation du dossier va ajouter une ligne dans le tableau avec
les éléments de la négociation. Les lignes sont classées de la plus récente à la plus ancienne.
En utilisant la loupe, il est possible de visualiser la négociation effectuée.
Envoyer la liste des dossiers de financement aux Leaseurs
ENVOYER LA LISTE DES DOSSIERS DE FINANCEMENT AUX
LEASEURS
Affaires et financement / Financement / Négocier les financements
1. Faire <F1> dans "numéro interne",
2. Compléter les critères de recherche "Date Négociation Début", "Date Négociation Fin" et
"Organisme de financement",
3. <F2>,
4. Sélectionner tout ou partie de la liste du tableau de résultat,
5. <F2>,
6. Cliquer sur l'onglet "Organisme de financement",
7. Il s'agit des informations à envoyer aux organismes de financement. L'outil d'export permet de
transférer les données dans Excel pour filtrage, mise en page, impression et envoi aux
organismes de financement, voir ci-dessous.
Tableau de négociation, onglet « Organisme de financement »
Position Position
lettrée Label de la colonne Format Commentaire
1 A Négociation  Texte
2 B Date  Instant
3 C Client  Texte
4 D Affaire  Texte
5 E Dossier  Texte
6 F 36L.Mens.  Texte
7 G 8L.Trim.  Texte
8 H 12L.Trim.  Texte
9 I 16L.Trim.  Texte
10 J 17L.Trim.  Texte
11 K 18L.Trim.  Texte
12 L 20L.Trim.  Texte
13 M 21L.Trim.  Texte
14 N 22L.Trim.  Texte
15 O Org. fi.  Texte
16 P Coeff. calculé  Texte
17 Q Loyer TTC calculé  Monétaire
18 R Loyer HT calculé (L2)  Monétaire
Tableau de négociation, onglet « Client »
Position Position
lettrée Label de la colonne Format Commentaire
1 A Négociation  Texte
2 B Date  Instant
3 C Client  Texte
4 D Affaire  Texte
5 E Dossier  Texte
6 F Facture  Texte
7 G 36L.Mens. (K1)  Texte
8 H 8L.Trim. (K1)  Texte
9 I 12L.Trim. (K1)  Texte
10 J 16L.Trim. (K1)  Texte
11 K 17L.Trim. (K1)  Texte
12 L 18L.Trim. (K1)  Texte
13 M 20L.Trim. (K1)  Texte
14 N 21L.Trim. (K1)  Texte
15 O 22L.Trim. (K1)  Texte
16 P Org. fi. initial  Texte
17 Q Coeff. Client  Monétaire
18 R Loyer Client (L1)  Monétaire
19 S Org. fi.  Texte
20 T Coeff. calculé  Monétaire
21 U Loyer TTC calculé  Monétaire
22 V Loyer HT calculé (L2)  Monétaire
23 W K Org. fi. (K2)  Monétaire
24 X Gain (G)  Monétaire
Particularités
Paramétrage lié à la négociation
PARAMÉTRAGE LIÉ À LA NÉGOCIATION
Paramètres
Article à utiliser lors de la négociation
Cet article sera insérer dans la première commande du dossier de financement. Son montant est
égale au montant de la colonne «K bq - K client».
Il fera l'objet d'une livraison et d'une facturation aux clients en l'occurrence le financeur.

Paramètre ‘CODE_ART_INTANGIBLE_NEGOCIATION'
Valeur : mettre le code de l'article intangible
Article à utiliser lors de la négociation
Cet article sera insérer dans la première commande du dossier de financement. Son montant est
égale au montant de la colonne «K bq - K client».
Il ne sera jamais livré et facturé. Son objectif est de neutraliser le montant de la négociation afin que
son montant n'entre pas dans la marge du vendeur.
Paramètre ‘CODE_ART_AJUSTEMENT_NEGOCIATION'
Valeur : mettre le code de l'article d'ajustement
Gérer les dossiers de rachat / reprise
Reprendre un bien
REPRENDRE UN BIEN
Consulter Gérer la reprise logistique.
Consulter Gérer la reprise administrative.
Consulter Traitement de Reprise logistique / Administrative des in-situ.
Particularités
Paramétrage lié aux rachats/reprises
PARAMÉTRAGE LIÉ AUX RACHATS/REPRISES
Articles
Article d'ajustement utilisé pour la valorisation du montant du rachat
Articles / Articles / Gérer les articles
Un article de type ajustement doit être créé pour le rachat de dossier. Cet article est
automatiquement inséré dans les commandes sélectionnées et affecté de tout ou partie du montant
du rachat.
ATTENTION
Si un article d'ajustement doit être utilisé, l'article de type intangible ne doit pas être créé
(paragraphe suivant).
Paramètres applications / Classifications, listes et tables de décision / Gérer les tables de libellés
ARTIS
1. Dans la case filtre, mettre "ajustement" suivi de <Entrée>
2. Cliquer sur "Article d'ajustement"
3. <Loupe>
4. <+>
5. Saisir l'abréviation et le nom
6. <Disquette>
Article intangible utilisé pour la valorisation du montant du rachat
Articles / Articles / Gérer les articles
Un article de type intangible doit être créé pour le rachat de dossier. Cet article est
automatiquement inséré dans les commandes sélectionnées et affecté de tout ou partie du montant
du rachat, consulter Gérer les articles.
La référence fournisseur, exemple "RACHAT" est mise comme valeur dans les paramètres
application.
ATTENTION
Si un article intangible doit être utilisé, l'article de type ajustement ne doit pas être créé (paragraphe
précédent).
Article intangible utilisé comme modèle générique
Articles / Articles / Gérer les articles
Un article de type modèle, géré comme bien, suivi en stock doit être créé pour la reprise des
matériels dont les modèles sont inconnus dans ARTIS.net. L'utilisateur ne souhaite pas créer ces
modèles car ils sont rares ou ne font pas partie de la politique commerciale, consulter Gérer les
articles.
La référence fournisseur est par exemple "MATGEN".
Article intangible utilisé pour la reprise
Articles / Articles / Gérer les articles
Un article de type intangible doit être créé pour la reprise des matériels. Cet article est
automatiquement inséré dans les commandes sélectionnées et le commentaire est complété,
consulter Gérer les articles.
La référence fournisseur, exemple "REPRISE" est mise comme valeur dans les paramètres
application.
Article intangible utilisé pour la facture de rachat matériel
Articles / Articles / Gérer les articles
Un article de type intangible doit être créé pour la facture de rachat des matériels. Cet article est
automatiquement inséré dans une facture fournisseur, consulter Gérer les articles.
La référence fournisseur, exemple "FACRAC" est mise comme valeur dans les paramètres
application.
Paramètres
Financement / Rachat
Activation de la gestion des dossiers de rachat/reprise
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "GESTION_FINANCEMENT_SANS_RACHAT_NI_FIN_SPECIFIQUE"
Valeur : Oui / Non
§ Oui = Pas de fin de financement ou de rachat : les financements sont directement
terminés en cas de reprise,
§ Non = La présence d'un dossier de financement impose de passer par une fin de
financement.
Rachat / Reprise
Article du rachat
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_ART_RACHAT"
Valeur : Mettre le code de l'article à utiliser pour générer la ligne de rachat dans les commandes
client sélectionnées, voir les deux paragraphes précédents sur "Articles".
Impact du montant du rachat
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "IMPACT_RACHAT_CA"
Valeur : Oui pour que le montant du dossier de rachat impacte par défaut le C.A. de l'affaire
Mode de répartition du montant du rachat sur les les commandes
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "RACHAT_PRORATA_BIEN_SUR_PRIX _VENTES"
Valeur : Oui pour que le lien proratiser le montant global de rachat en fonction du prix de vente de
chaque bien
Article utilisé pour la reprise
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_ART_REPRISE"
Valeur : Code de l'article intangible ou d'ajustement pour la reprise.
Dépôt par défaut pour la reprise
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_DEPOT_DEFAUT_REPRISE_BIEN"
Valeur : Code du dépôt par défaut pour un dossier de reprise d'un bien.
Statut Par défaut dans le dossier
Paramètres application / Paramètres application / Gérer les paramètres
Statut logistique par défaut pour un dossier de reprise d'un bien.
Paramètre "STATUT_DEFAUT_REPRISE_BIEN"
Valeur :
§ Emmaganisé,
§ OccasionEnTriage : Occasion en triage.
Report de l'Argus
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "REPORT_ARGUS_SUR_LIGNE_REPRISE"
Valeur :
§ Cochée : La valeur ARGUS saisie dans un dossier de rachat est reporté au niveau du
coût de revient de la ligne de reprise,
§ Non cochée : Pas de report.
Valeur de reprise des accessoires
Paramètres application / Paramètres application / Gérer les paramètres
Valeurs par défaut des accessoires d'un bien repris.
Paramètre "VALEURS_ACCESSOIRE_BIEN"
Valeur :  Non obligatoire. La syntaxe doit respecter "Mode|Statut logistique|Valeur rachat|Valeur
reprise", exemple : "Repris|Emmagasiné|0|0"
où
§ Mode :
· Repris,
· Non repris,
§ Statut logistique :
· Triage,
· Emmagasiné,
· Détruit,
§ Valeur rachat,
§ Valeur reprise en stock,
§ "|" : obtenu avec <Alt Gr>+<6>.
Valeur de reprise des constituants
Paramètres application / Paramètres application / Gérer les paramètres
Valeurs par défaut des constituants d'un bien repris.
Paramètre "VALEURS_CONSTITUANT_BIEN"
Valeur : Non obligatoire. La syntaxe doit respecter "Mode|Statut logistique|Valeur rachat|Valeur
reprise", exemple : "Repris|Emmagasiné|0|0"
où
§ Mode :
· Repris,
· Non repris,
§ Statut logistique :
· Triage,
· Emmagasiné,
· Détruit,
§ Valeur rachat,
§ Valeur reprise en stock,
§ "|" : obtenu avec <Alt Gr>+<6>.
Rachat matériel
Article utilisé dans la génération des factures de rachat matériel
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "DOC_RACHAT_FACTURE_DIRECT"
Valeur :
§ Cochée : Facture directe pour solder un dossier de rachat,
§ Non cochée : Chaîne Commande/BL/facture.
Règles de numérotation
Dossier de Rachat/Reprise
Consulter Créer une règle de numérotation avec les informations ci-après.
Libellé : "Dossier de Rachat - Numéro Interne"
Code : "Rachat_Num"
Classe : "Rachat"
Attribut numéroté : "Numéro interne"
Type : "Unique par organisation"
Organisation : une organisation interne
Type de règle : "Commun avec tous les exercices"
Premier numéro à prendre : 000001
Dernier numéro utilisé : 000000
Dernier numéro à prendre : 999999
Longueur du numéro : 6
Table de décision
Rachat matériel
Article utilisé dans la génération des factures de rachat matériel
Cette table permet d'identifier l'article à utiliser dans le document de rachat.
Rechercher la Table de décision "TD_ARTICLES_DOCUMENT_RACHAT".
Numéro Type de document Type de fin de financement Activité Famille Sous famille Type de bien Code article Type de montant
1 FACTURE * * * * RACHAT FACRAC RACHAT
2 FACTURE * * * * VENDU FACRAC 0
3 AVOIR * * * * RACHAT FACRAC RACHAT
4 AVOIR * * * * VENDU FACRAC 0
Au minimum, la table de décision doit être celle ci-dessus.
Type de document
Le choix est parmi les options suivantes (respecter la casse) :
§ FACTURE,
§ AVOIR,
Type de fin de financement
Consulter les fins de financement dans la gestion des rachats/reprises,
Type de bien
Le choix est parmi les options suivantes (respecter la casse) :
§ RACHAT : L'article sera choisi selon l'activité, famille, sous-famille de l'article racheté,
§ VENDU : L'article sera choisi selon l'activité, famille, sous-famille de l'article vendu,
Type de montant
La valeur peut être :
§ 0,
§ RACHAT,
§ REPRISE,
§ Une opération du style :
· RACHAT-REPRISE.
CAS PARTICULIER
Numéro Type de document Type de fin de financement Activité Famille Sous famille Type de bien Code article Type de montant
1 FACTURE * SO * * RACHAT RACSOL REPRISE
2 FACTURE * SO * * VENDU RACSOL 0
3 FACTURE * * * * RACHAT FACRAC REPRISE
4 FACTURE * * * * VENDU FACRAC 0
5 AVOIR * SO * * RACHAT RACSOL REPRISE
6 AVOIR * SO * * VENDU RACSOL 0
7 AVOIR * * * * RACHAT FACRAC REPRISE
8 AVOIR * * * * VENDU FACRAC 0
Dossier de rachat pour prise en compte de loyers
DOSSIER DE RACHAT POUR PRISE EN COMPTE DE LOYERS
Il s'agit de prendre le montant des loyers sur la période entre la reprise et la fin de la période du
loyer déjà prélevé.
o Créer un dossier de rachat comme à l'habitude
o Créer une machine avec un identifiant prestataire automatique en utilisant un article générique
"MATGEN" (avec reprise de la machine en stock)
o Gérer la reprise de matériel
o Détruire la machine
o Depuis le dossier de rachat, générer la facture de rachat matériel
Remarque
Cela suppose que l'article "MATGEN" soit créé.
La table de décision pour le choix de l'article utilisé dans la facture de rachat matériel en tient
compte.
Editer les fiches de reprise ou de relevés compteurs
ÉDITER LES FICHES DE REPRISE OU DE RELEVÉS
COMPTEURS
1. Mettre les critères de recherche sur :
§ RachatNum : Numéro du dossier de rachat/reprise,
§ IdentifiantFabricant : Matricule du bien.
2. Puis sélectionner : Affichage PDF (ne pas le faire avant d'avoir mis vos critères de recherche),
3. <F2>.
Exemple de fiche de reprise
Le bien revient en stock.
Exemple de fiche relevé compteur
Le bien ne revient pas en stock, il reste chez le client final.

Consulter les rachats de dossiers
CONSULTER LES RACHATS DE DOSSIERS
Position Position
lettrée Label de la colonne Format Commentaire
1 A NumAffaire  Texte
2 B DateAffaire  Texte
3 C DateValidationAffaire  Texte
4 D AffaireValidée  Texte
5 E ClientAffaire  Texte
6 F NomClientAffaire  Texte
7 G GestNomAffaire  Texte
8 H GestPrénomAffaire  Texte
9 I VendeurCodeAffaire  Texte
10 J VendeurNomAffaire  Texte
11 K VendeurPrénomAffaire  Texte
12 L CommentairesAffaire  Texte
13 M OrgIntAff  Texte
14 N OrgInterneAffaire  Texte
15 O NumCde  Texte
16 P CodeGest  Texte
17 Q AffecteCACom  Texte
18 R MargeCde  Texte
19 S TotalHTLigneCde  Texte
20 T LibelléCde  Texte
21 U LibelléArticleVendu  Texte
22 V UO  Texte
23 W Unité(Groupe)  Texte
24 X CodeRacheteLeaseur  Texte
25 Y RacheteAuLeaseur  Texte
Lister les biens en fin de financement
LISTER LES BIENS EN FIN DE FINANCEMENT
Cette option permet de lister les dossiers de financement arrivant en fin de location pour une
période donnée.
Sans compléter les critères correspondant à la période de fin de financement, cette option remonte
les informations saisies (une ligne = un dossier de financement).
Position Position
lettrée Label de la colonne Format Commentaire
1 A matricule  Texte
2 B lib.bien  Texte
3 C code.client  Texte
4 D lib.client  Texte
5 E code.leaseur  Texte
6 F lib.leaseur  Texte
7 G code.prestataire  Texte
8 H lib.prestataire  Texte
9 I num.interne  Texte
10 J num.externe  Texte
11 K affaire  Texte
12 L matricule.gestionnaire  Texte
13 M matricule.vendeur  Texte
14 N assujetti.taxe.pro  Texte
15 O statut  Texte
16 P type.code.financement  Texte
17 Q type.lib.financement  Texte
18 R montant  Texte
19 S valeur.residuelle.montant  Texte
20 T valeur.residuelle.pourcent  Texte
21 U assurance.montant  Texte
22 V assurance.pourcent  Texte
23 W loyer  Texte
24 X mode.reglement  Texte
25 Y terme  Texte
26 Z duree  Texte
27 AA lib.periodicite  Texte
28 AB nb.echeance  Texte
29 AC date.premiere.echeance  Texte
30 AD date.fin.financement  Texte
31 AE taux  Texte
32 AF coeff  Texte
Récapituler les factures d'un organisme de financement
RÉCAPITULER LES FACTURES D'UN ORGANISME DE
FINANCEMENT
Cette option correspond à un besoin spécifique. En effet, soit un tableau de résultat peut être
exploité sous Excel, soit l'option "PDF" est cochée, donnant lieu à une mise en page spécifique.
Position Position
lettrée Label de la colonne Format Commentaire
1 A N° SSC  Texte
2 B N° Affaire  Texte
3 C N° externe de financement  Texte
4 D SIRET  Texte
5 E Client  Texte
6 F Adresse du client  Texte
7 G N° facture  Texte
8 H Date de facture  Instant
9 I Bien  Texte
10 J Identifiant fabricant  Texte
11 K Date de livraison  Instant
12 L Montant HT  Monétaire
13 M Durée du financement  Texte
14 N Nbre de loyers  Texte
15 O Date de première échéance  Instant
16 P Loyer  Monétaire
17 Q Valeur résiduelle  Monétaire
18 R % Valeur résiduelle  Texte
19 S Périodicité  Texte
20 T Terme  Texte
21 U Taxe professionnelle  Texte
22 V Org. interne  Texte
23 W Organisation interne  Texte
24 X Code org. fin.  Texte
25 Y Organisme de financement  Texte
26 Z Type financement  Texte
27 AA Total facture/financement  Monétaire
28 AB idLgnFact  Texte
29 AC idBien  Texte
30 AD dateFactDebut  Texte
31 AE dateFactFin  Texte
Export spécifique
Il existe un export spécifique de cette extraction, consulter ARTIS pour plus d'informations.
Table de décision
Assiette
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
Cette table de décision permet d'établir une correspondance entre l'activité /  famille /  sous-famille
d'un article et le code assiette théorique des imports automatisés de financement Lixxbail.
Rechercher la Table de décision "LIX X BAIL_CODE_ASSIETTE".
Numéro Code Activité Code Famille Code Sous-famille Code Assiette Théorique
1 SI MNB * U03C
2 SI MCO * U03C
3 SI ACC * U03C
4 SI TRA * 218C
5 SI DUP * U01C
6 SI SCA * U03C
7 SI INB * 206C
8 SI ICO * 206C
9 SI IAC * 206C
10 SO * * 219Q
11 SH IMP MULT U06C
12 SH IMP ACSH U06C
13 SH IMP * V16Q
14 SH INF * 209B
15 * * * U03C
Pour la gestion d'une table de décision, voir Critère dans les tables de décision
TVA
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
Cette table de décision permet d'établir une correspondance entre le  Code TVA ARTIS.net et  le
Code Taxe des imports automatisés de financement Lixxbail.
Rechercher la Table de décision "LIX X BAIL_CODE_TAX E".
Numéro Code TVA Code Taxe
1 E 10
2 N 10
3 P 10
4 R 10
5 S 10
6 Z9 10
7 * 10
Pour la gestion d'une table de décision, voir Critère dans les tables de décision
Rapprocher les loyers client et organisme de financement
RAPPROCHER LES LOYERS CLIENT ET ORGANISME DE
FINANCEMENT
Position Position
lettrée Label de la colonne Format Commentaire
1 A DATE_TRAITEMENT  Instant
2 B CODE_CLIENT  Texte
3 C NOM_CLIENT  Texte
4 D CODE_ORG_FINANCEUR  Texte
5 E NOM_ORG_FINANCEUR  Texte
6 F NUMERO_INTERNE_FINANCEMENT  Texte
7 G NUMERO_EX TERNE_FINANCEMENT  Texte
8 H PERIODICITE_ORG_FINANCEUR  Texte
9 I NOMBRE_ECHEANCES_ORG_FINANCEUR  Texte
10 J LOYER_HT_ORG_FINANCEUR  Monétaire
11 K DATE_PREMIER_LOYER_ORG_FINANCEUR  Instant
12 L DATE_DERNIER_LOYER_ORG_FINANCEUR  Instant
13 M NB_LOYERS_ORG_FINANCEUR_COMPTABILISES  Monétaire
14 N SOMME_LOYERS_ORG_FINANCEUR_COMPTABILIS
ES_THEORIQUE  Monétaire
15 O SOMME_LOYERS_ORG_FINANCEUR_COMPTABILIS
ES_REEL  Monétaire
16 P NB_LOYERS_ORG_FINANCEUR_RESTANT_DU  Monétaire
17 Q SOMME_LOYERS_ORG_FINANCEUR_RESTANT_DU  Monétaire
18 R PERIODICITE_CLIENT  Texte
19 S NOMBRE_ECHEANCES_CLIENT  Monétaire
20 T VR  Texte
21 U LOYER_HT_CLIENT  Monétaire
22 V DATE_PREMIER_LOYER_CLIENT  Instant
23 W DATE_DERNIER_LOYER_CLIENT  Instant
24 X NB_LOYERS_CLIENT_COMPTABILISES  Monétaire
25 Y SOMME_LOYERS_CLIENT_COMPTABILISES_THEOR
IQUE  Monétaire
26 Z SOMME_LOYERS_CLIENT_COMPTABILISES_REEL  Monétaire
27 AA NB_LOYERS_CLIENT_RESTANT_DU  Monétaire
28 AB SOMME_LOYERS_CLIENT_RESTANT_DU  Monétaire
29 AC CODE_PRESTATAIRE  Texte
30 AD NOM_PRESTATAIRE  Texte
31 AE CODE_AGENCE  Texte
32 AF NOM_AGENCE  Texte
33 AG NUMERO_AFFAIRE  Texte
Rapprocher les loyers client et organisme de financement (détaillé)
RAPPROCHER LES LOYERS CLIENT ET ORGANISME DE
FINANCEMENT (DÉTAILLÉ)
Sans analytique
Position Position
lettrée Label de la colonne Format Commentaire
1 A DATE_TRAITEMENT  Instant
2 B CODE_CLIENT  Texte
3 C NOM_CLIENT  Texte
4 D NUMERO_FACTURE  Texte
5 E DATE_FACTURE  Instant
6 F PRIX _VENTE_HT  Texte
7 G MATRICULE_BIEN  Texte
8 I CODE_ORG_FINANCEUR  Texte
9 J NOM_ORG_FINANCEUR  Texte
10 K COMPTE_TRESORERIE  Texte
11 L NUMERO_INTERNE_FINANCEMENT  Texte
12 M NUMERO_EX TERNE_FINANCEMENT  Texte
13 N PERIODICITE_ORG_FINANCEUR  Texte
14 O TERME_BANQUE  Texte
15 P TAUX _BANQUE  Texte
16 Q COEFFICIENT_BANQUE  Texte
17 R NOMBRE_ECHEANCES_ORG_FINANCEUR  Texte
18 S LOYER_HT_ORG_FINANCEUR  Monétaire
19 T VR  Monétaire
20 U DATE_PREMIER_LOYER_ORG_FINANCEUR  Instant
21 V DATE_DERNIER_LOYER_ORG_FINANCEUR  Instant
22 W NB_LOYERS_ORG_FINANCEUR_RESTANT_DU  Monétaire
23 X SOMME_LOYERS_ORG_FINANCEUR_RESTANT_DU  Monétaire
24 Y PERIODICITE_CLIENT  Texte
25 Z TERME_CLIENT  Texte
26 AA TAUX _CLIENT  Texte
27 AB COEFFICIENT_CLIENT  Texte
28 AC NOMBRE_ECHEANCES_CLIENT  Monétaire
29 AD LOYER_HT_CLIENT  Monétaire
30 AE DATE_PREMIER_LOYER_CLIENT  Instant
31 AF DATE_DERNIER_LOYER_CLIENT  Instant
32 AG NB_LOYERS_CLIENT_RESTANT_DU  Monétaire
33 AH SOMME_LOYERS_CLIENT_RESTANT_DU  Monétaire
34 AI NUMERO_SSC  Texte
35 AJ STATUT_SSC  Texte
36 AK CODE_PRESTATAIRE  Texte
37 AL NOM_PRESTATAIRE  Texte
38 AM CODE_AGENCE  Texte
39 AN NOM_AGENCE  Texte
40 AO NUMERO_AFFAIRE  Texte
41 AP NB_LOYERS_ORG_FINANCEUR_COMPTABILISES  Monétaire
42 AQ SOMME_LOYERS_ORG_FINANCEUR_COMPTABILIS
ES_THEORIQUE  Monétaire
43 AR SOMME_LOYERS_ORG_FINANCEUR_COMPTABILIS
ES_REEL  Monétaire
44 AS NB_LOYERS_CLIENT_COMPTABILISES  Monétaire
45 AT SOMME_LOYERS_CLIENT_COMPTABILISES_THEOR
IQUE  Monétaire
46 AU SOMME_LOYERS_CLIENT_COMPTABILISES_REEL  Monétaire
Avec analytique
Position Position Label de la colonne Format Commentaire
lettrée
1 A DATE_TRAITEMENT  Instant
2 B CODE_CLIENT  Texte
3 C NOM_CLIENT  Texte
4 D COMPTE_ANALYTIQUE  Texte
5 E NUMERO_FACTURE  Texte
6 F DATE_FACTURE  Instant
7 G PRIX _VENTE_HT  Texte
8 H MATRICULE_BIEN  Texte
9 I CODE_ORG_FINANCEUR  Texte
10 J NOM_ORG_FINANCEUR  Texte
11 K COMPTE_TRESORERIE  Texte
12 L NUMERO_INTERNE_FINANCEMENT  Texte
13 M NUMERO_EX TERNE_FINANCEMENT  Texte
14 N PERIODICITE_ORG_FINANCEUR  Texte
15 O TERME_BANQUE  Texte
16 P TAUX _BANQUE  Texte
17 Q COEFFICIENT_BANQUE  Texte
18 R NOMBRE_ECHEANCES_ORG_FINANCEUR  Texte
19 S LOYER_HT_ORG_FINANCEUR  Monétaire
20 T VR  Monétaire
21 U DATE_PREMIER_LOYER_ORG_FINANCEUR  Instant
22 V DATE_DERNIER_LOYER_ORG_FINANCEUR  Instant
23 W NB_LOYERS_ORG_FINANCEUR_RESTANT_DU  Monétaire
24 X SOMME_LOYERS_ORG_FINANCEUR_RESTANT_DU  Monétaire
25 Y PERIODICITE_CLIENT  Texte
26 Z TERME_CLIENT  Texte
27 AA TAUX _CLIENT  Texte
28 AB COEFFICIENT_CLIENT  Texte
29 AC NOMBRE_ECHEANCES_CLIENT  Monétaire
30 AD LOYER_HT_CLIENT  Monétaire
31 AE DATE_PREMIER_LOYER_CLIENT  Instant
32 AF DATE_DERNIER_LOYER_CLIENT  Instant
33 AG NB_LOYERS_CLIENT_RESTANT_DU  Monétaire
34 AH SOMME_LOYERS_CLIENT_RESTANT_DU  Monétaire
35 AI NUMERO_SSC  Texte
36 AJ STATUT_SSC  Texte
37 AK CODE_PRESTATAIRE  Texte
38 AL NOM_PRESTATAIRE  Texte
39 AM CODE_AGENCE  Texte
40 AN NOM_AGENCE  Texte
41 AO NUMERO_AFFAIRE  Texte
42 AP NB_LOYERS_ORG_FINANCEUR_COMPTABILISES  Monétaire
43 AQ SOMME_LOYERS_ORG_FINANCEUR_COMPTABILISE
S_THEORIQUE  Monétaire
44 AR SOMME_LOYERS_ORG_FINANCEUR_COMPTABILISE
S_REEL  Monétaire
45 AS NB_LOYERS_CLIENT_COMPTABILISES  Monétaire
46 AT SOMME_LOYERS_CLIENT_COMPTABILISES_THEORI
QUE  Monétaire
47 AU SOMME_LOYERS_CLIENT_COMPTABILISES_REEL  Monétaire
Calculer les PCA-PAR (Cut-off) des financements
CALCULER LES PCA-PAR (CUT-OFF) DES FINANCEMENTS
Cette option permet de faire un arrêté des financements (dossiers validés uniquement) à une date
donnée :
o Par défaut, le calcul est initialisé pour lancer un état détaillé :
§ Configuration de tableau : "Vue détaillée"
§ Critère de recherche "Type de calcul : 0-Détaillé 1-Synthétique" : " 0 "
o Pour un état synthétique :
§ Configuration de tableau : "Vue synthétique"
§ Critère de recherche "Type de calcul : 0-Détaillé 1-Synthétique" : " 1 "
Vue détaillée
Position Position
lettrée Label de la colonne Format Commentaire
1 A No. Affaire  Texte
2 B Num. Int. Dossier  Texte
3 C Num. Ext. Dossier  Texte
4 E Code Org. Int.  Texte
5 F Nom Org. Int.  Texte
6 G Code Org. Fin  Texte
7 H Nom Org. Fin  Texte
8 I Code Org. Client  Texte
9 J Nom Org. Client  Texte
10 K Code Agence  Texte
11 L Nom Agence  Texte
12 M Compte  Texte
13 N Intitulé  Texte
14 O Analytique  Texte
15 P Terme  Texte
16 Q Date traitement  Instant
17 R Date dernière échéance comptabilisée  Instant
18 S Date prochaine échéance à
comptabiliser  Instant
19 T Date fin dossier  Instant
20 U Nbr. jours  Monétaire
21 V Nbr. jours total  Monétaire
22 W Mt. échéance  Monétaire
23 X PCA  Monétaire
24 Y PAR  Monétaire
Vue synthétique
Position Position
lettrée Label de la colonne Format Commentaire
1 A Code Org. Int.  Texte
2 B Nom Org. Int.  Texte
3 C Code Agence  Texte
4 D Nom Agence  Texte
5 E Compte  Texte
6 F Intitulé  Texte
7 G Analytique  Texte
8 H Date traitement  Instant
9 I PCA  Monétaire
10 J PAR  Monétaire
Lister les pré-échéances directement depuis les dossiers de financement
LISTER LES PRÉ-ÉCHÉANCES DIRECTEMENT DEPUIS LES
DOSSIERS DE FINANCEMENT
Cette option ne traite donc pas des factures de pré-échéances générées par les SSC.
Voir Facturer une pré-échéance depuis le dossier de financement.
Voir Facturer une pré-échéance direct en Financement partenaire Matériel.
Position Position
lettrée Label de la colonne Format Commentaire
1 A Affaire  Texte
2 B DateAffaire  Instant
3 C CodeCltAff  Texte
4 D ClientAffaire  Texte
5 E TypeFinanct  Texte
6 F TypeFinancement  Texte
7 G NumFinancement  Texte
8 H NumExterneFinancement  Texte
9 I CodeLeaseur  Texte
10 J CltLeaseur  Texte
11 K PremièreEchéance  Instant
12 L MontantEchéance  Monétaire
13 M CodeCltFacture  Texte
14 N NomCltFacture  Texte
15 O Facture  Texte
16 P DateFacture  Instant
17 Q CodeArt  Texte
18 R LibelleArticleFacture  Texte
19 S LibelléArticle  Texte
20 T QtéFacture  Monétaire
21 U PUBrut  Monétaire
22 V Remise  Monétaire
23 W TotalHTLigne  Monétaire
24 X OrgInterne  Texte
25 Y Pré-Loyer  Texte
Lister les pré-échéances depuis les SSC
LISTER LES PRÉ-ÉCHÉANCES DEPUIS LES SSC
Position Position
lettrée
Label de la
colonne Format Commentaire
1 A Facture  Texte
2 B Date de facture  Instant
3 C Code Article  Texte
4 D Article  Texte
5 E Qté facturée  Monétaire
6 F Total HT  Monétaire
7 G Début période facturée  Instant
8 H Fin période facturée  Instant
9 I SSC  Texte
10 J Libellé SSC  Texte
11 K Date début SSC  Instant
12 L Date fin initiale SSC  Instant
13 M Montant RFC  Monétaire
14 N Affaire  Texte
15 O Date Validation Affaire  Instant
16 P Affaire validée  Texte
17 Q Financement  Texte
18 R Code Clt  Texte
19 S Client  Texte
20 T Date Première échéance  Instant
21 U Echéance HT  Monétaire
22 V Type Fin  Texte
23 W Type Financement  Texte
24 X Org interne  Texte
25 Y Organisation interne  Texte
Lister les éléments des dossiers de rachat/reprise
LISTER LES ÉLÉMENTS DES DOSSIERS DE RACHAT/
REPRISE
Cette option permet de lister les dossiers de rachat/reprise avec toutes les données saisies, en
mentionnant les biens (une ligne = un bien dans un dossier de rachat/reprise).
Position Position
lettrée Label de la colonne Format Commentaire
1 A Affaire  Texte
2 B EtatDeFaturation  Texte
3 C DossierRachat  Texte
4 D EtatDossier  Texte
5 E NumExtFinanRachete  Texte
6 F CodeClt  Texte
7 G Client  Texte
8 H CodeOrgFin  Texte
9 I Organisme de financement  Texte
10 J RepriseSeule  Texte
11 K LibelléBien  Texte
12 L IdentFabricant  Texte
13 M IdentPrestataire  Texte
14 N In-situ  Texte
15 O EtatDuBienDossier  Texte
16 P DatePrévReprise  Instant
17 Q DateReelleReprise  Instant
18 R ValeurDeReprise  Monétaire
19 S ValeurRachat  Monétaire
20 T ValRachatTotal  Monétaire
21 U DateValidSolde  Instant
22 V MntAFinancer  Monétaire
23 W CmdeNouvVte  Texte
24 X BLNouvVte  Texte
25 Y DateBLNouvVte  Instant
26 Z FactNouvVte  Texte
27 AA DateFactNouvVte  Instant
28 AB DateRèglement  Instant
29 AC RégléAuLeaser  Texte
30 AD Compensation  Texte
31 AE CmdeFournRachatMat  Texte
32 AF DateCmdeFourn  Instant
33 AG FactFournRachatMat  Texte
34 AH DateFactFournRachatMat  Instant
35 AI DateAffaire  Instant
36 AJ FinDeFinancement  Texte
37 AK FinancementInitial  Texte
38 AL NumExtFinanInitial  Texte
39 AM CollaboAff  Texte
40 AN OrgInterne  Texte
Lister les financements
LISTER LES FINANCEMENTS
Cette option permet de lister les dossiers de financement avec toutes les données saisies, sans
mentionner les biens financés (une ligne = un dossier de financement).
Position Position
lettrée Label de la colonne Format Commentaire
1 A Num Fin Interne Format Texte
2 B Num Fin Externe Format Texte
3 C Affaire Format Texte
4 D Type Financement Format Texte
5 E Statut Fin Client Format Texte
6 F Code Clt Format Texte
7 G Client Format Texte
8 H Code Financeur Format Texte
9 I Financeur Format Texte
10 J Mnt financé Format Texte
11 K Statut Fin Banque Format Texte
12 L Echéance HT Client Format Texte
13 M Nbre Echéances Client Format Texte
14 N Périodicité Client Format Texte
15 O Terme Client Format Texte
16 P Val. Résiduelle Mnt Clt Format Monétaire
17 Q Val. Résiduelle Taux Clt Format Monétaire
18 R Echéance HT Banque Format Texte
19 S Nbre Echéances Banque Format Texte
20 T Première Echéance Client Format Instant
21 U Prochaine Echéance Client Format Instant
22 V Dernière Echéance Client Format Instant
23 W Première Echéance Banque Format Instant
24 X Prochaine Echéance Banque Format Instant
25 Y Dernière Echéance  Banque Format Instant
26 Z Val. Résiduelle Mnt Fin. Format Monétaire
27 AA Val. Résiduelle Taux Fin. Format Monétaire
28 AB Date Validation Affaire Format Instant
29 AC Affaire Validée Format Texte
30 AD Commentaire Dossier Clt Format Texte
31 AE Commentaire Dossier Fin. Format Texte
32 AF Org interne Format Texte
33 AG Organisation interne Format Texte
Lister les financements avec infos Bien, SSC
LISTER LES FINANCEMENTS AVEC INFOS BIEN, SSC
Cette option permet de lister les dossiers de financement avec toutes les données saisies, en
mentionnant les biens financés, les RFC et SSC liés aux biens le cas échéant (une ligne = un bien
dans un dossier de financement) .
Position Position
lettrée Label de la colonne Format Commentaire
1 A Num Fin Interne Format Texte
2 B Num Fin Externe Format Texte
3 C Affaire Format Texte
4 D Type Financement Format Texte
5 E Statut Fin Client Format Texte
6 F Code Clt Format Texte
7 G Client Format Texte
8 H Code Financeur Format Texte
9 I Financeur Format Texte
10 J Mnt financé Format Texte
11 K Statut Fin Banque Format Texte
12 L Echéance HT Client Format Texte
13 M Nbre Echéances Client Format Texte
14 N Périodicité Client Format Texte
15 O Terme Client Format Texte
16 P Echéance HT Banque Format Texte
17 Q Nbre Echéances Banque Format Texte
18 R Val. Résiduelle Mnt Clt Format
Monétaire
19 S Val. Résiduelle Taux Clt Format
Monétaire
20 T Première Echéance Client Format Instant
21 U Prochaine Echéance Client Format Instant
22 V Dernière Echéance Client Format Instant
23 W Première Echéance Banque Format Instant
24 X Prochaine Echéance Banque Format Instant
25 Y Dernière Echéance  Banque Format Instant
26 Z Val. Résiduelle Mnt Fin. Format
Monétaire
27 AA Val. Résiduelle Taux Fin. Format
Monétaire
28 AB Identifiant Fabricant Bien financé Format Texte
29 AC Identifiant Prestataire Bien financé Format Texte
30 AD Bien financé Format Texte
31 AE RFC Bien financé Format Texte
32 AF Statut MSC Bien financé Format Texte
33 AG SSC Bien financé Format Texte
34 AH Identifiant Fabricant Bien de destination Format Texte
35 AI Identifiant Prestataire Bien de destination Format Texte
36 AJ Bien de destination Format Texte
37 AK RFC Bien de destination Format Texte
38 AL Statut MSC Bien de destination Format Texte
39 AM SSC Bien de destination Format Texte
40 AN Date Validation Affaire Format Instant
41 AO Affaire Validée Format Texte
42 AP Commentaire Dossier Clt Format Texte
43 AQ Commentaire Dossier Fin. Format Texte
44 AR Org interne Format Texte
45 AS Organisation interne Format Texte
