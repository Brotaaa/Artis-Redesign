# Factures client

> Categorie: Ventes | Pages 437-451

## Sous-rubriques
-   Paramètres (p.437)
- Gérer les factures clients (p.437)
-   Particularités (p.438)
-     Avoir (p.438)
-       Généralités et Théorie (p.439)
-       Faire un avoir à partir d'une facture (p.440)
-       Avoir partiel de prix sur quantité multiple et impact sur PMP (p.443)
-       Rechercher la liste des avoirs (p.444)
-     Contrôler l'état des factures (p.444)
-     Gérer les commentaires (p.445)
-     Mettre un acompte sur une facture (p.445)
-     Modifiier les acomptes, les échéances (p.447)
-     Modifier un coût de revient (p.447)
-     Rechercher des factures (p.448)
-     Paramètres (p.449)
- Imprimer les factures (p.449)
- Générer les factures clients (p.451)

Mettre le même choix que le transporteur référent,
Type d'interface
KARELIS,
Référence chez le transporteur
Inutilisé, mettre 99999,
Numéro de compte chargeur EXAPAQ
Inutilisé, mettre 99999,
Paramètres d'application
Paramètres
Mode répertoire
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre ‘BON_TRANSPORT_KARELIS_REP'
Valeur : Le répertoire du serveur KARELIS dans lequel les fichiers d'interface devront être déposés,
exemple "/artis/interface/exapaq"
Paramètres
PARAMÈTRES
Modification des livraisons
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "BLOQ_LIVRCLT_FACT"
Valeur :
§ Coché : Les livraisons facturées sont bloquées : suppression, modification, ajout
impossible,
§ Non coché : Autorisé.
Factures client
Gérer les factures clients
Particularités
Avoir
Généralités et Théorie
GÉNÉRALITÉS SUR LES AVOIRS A PARTIR D'UNE FACTURE
Il s'agit de traiter des avoirs générés avec des organisations internes obsolètes. Il s'appuie :
1. Sur les relations actives du client avec les organisations internes, déclarées dans la fiche du
client :
§ Tiers / Clients / Gérer les organisations de type client,
§ Onglet "Client",
§ Section "Relation client",
La notion Actif/Inactif est à droite dans ce même tableau.
2. Sur les liens de collaboration entre le collaborateur et les organisations internes, déclarées
dans la fiche du collaborateur
§ Tiers / Clients / Gérer les organisations de type interne,
§ Onglet "Collaborateurs",
§ Collaborateur,
§ Onglet "Collaborations", section "Collaborations".
Une collaboration active est une collaboration présente dans le tableau, avec une période
valide.
Conditions sur la génération des avoirs à partir d'une facture
Dans le cas de la génération d'un avoir à partir d'une facture, ARTIS vérifie si la relation client avec
l'organisation interne de la facture d'origine est toujours active :
1. Si c'est le cas, et que le collaborateur collabore avec cette organisation interne, ARTIS autorise
et génère l'avoir avec la même entête que la facture.
Il s'agit du cas général de création d'avoir.
2. Dans les autres cas :
§ S'il s'agit d'une facture SSC, ARTIS prend en considération le prestataire de la
première SSC de la facture,
Si la relation client avec ce prestataire est active et que le collaborateur collabore avec
lui, ARTIS autorise et génère l'avoir au nom du client et du prestataire en question,
§ S'il ne s'agit pas d'une facture SSC, ARTIS prend en considération la première
organisation interne parmi les relations clients-organisations internes actives du client
qui coïncide avec les collaborations du collaborateur,
§ Si la condition est vérifiée, ARTIS autorise et génère l'avoir au nom du client et du
prestataire en question,
3. Dans les autres cas on ne génère pas l'avoir. Un message avertit l'utilisateur.
Faire un avoir à partir d'une facture
FAIRE UN AVOIR À PARTIR D'UNE FACTURE
Un avoir dans ARTIS.net est une facture dont le montant est inférieur à 0 (négatif)
Il existe 2 types d'avoir
o L'avoir en quantité
§ Génération d'un mouvement de stock
§ Si l'article est géré comme bien, les statuts sont mis à jour dans la fiche du bien
§ Si l'article géré comme bien est dans une SSC, l'avoir est impossible
o L'avoir en prix
§ Pas de mouvement de stock
§ Cela équivaut à un avoir financier
Faire l'avoir
1. Rechercher la facture,
2. Cliquer sur "Avoir client (Hors SSC)",
3. Vérifier la date de l'avoir,
4. Sélectionner "Avoir en quantité" ou "Avoir en prix",
5. Sélectionner les lignes à avoiriser,
6. <Disquette> ou <F2>.
Remarque
Dès lors qu'un BL est facturé, il n'est pas possible de le facturer une deuxième fois, même si un
avoir est fait à partir de la facture d'origine.
FAIRE UN AVOIR À PARTIR D'UNE FACTURE SUIVI D'UNE RE-
FACTURATION
2 cas sont possibles :
o Soit l'avoir et la re-facturation sont dans le même document,
o Soit vous souhaitez deux documents :
§ Un avoir
§ Une nouvelle facture
Avoir et re-facturation dans un même document
1. Rechercher la facture,
2. Cliquer sur "Avoir client (Hors SSC)",
3. Vérifier la date de l'avoir,
4. Sélectionner "Avoir en quantité" ou "Avoir en prix",
5. Cocher "Re-facturer l'avoir",
6. Saisir les "Prix re-facturé"(s),
7. Sélectionner les lignes utiles,
8. <Disquette> ou <F2>.
Un document est généré avec pour chaque ligne sélectionnée :
o Une ligne concernant l'avoir,
o Une ligne concernant la refacturation,
Avoir et re-facturation dans deux documents
Faire un avoir à partir d'une facture génère une facture négative (donc un avoir)
Faire un avoir à partir d'un avoir (facture négative) génère une facture positive (donc une facture)
1. Rechercher la facture,
2. Cliquer sur "Avoir client (Hors SSC)",
3. Vérifier la date de l'avoir,
4. Sélectionner "Avoir en quantité" ou "Avoir en prix",
5. Sélectionner les lignes utiles,
6. <Disquette> ou <F2>,
A partir de l'avoir qui vient d'être généré
7. Cliquer sur "Avoir client (Hors SSC)",
8. Vérifier la date de l'avoir,
9. Sélectionner "Avoir en quantité" ou "Avoir en prix",
10. Sélectionner les lignes utiles,
11. <Disquette> ou <F2>,
12. Modifier ensuite les prix unitaires.
Remarque
Sur la facture (issue de l'avoir), il est possible de modifier le code du client facturé (le client sur la
facture d'origine n'est pas le bon).
Dans le cas d'une facture issue d'une facture SSC, l'utilisateur peut ne pas avoir accès à la
modification du client. Dans ce cas, vérifier le paramètre "BLOQ_FACCLT_SOLSERV", consulter
Factures, Paramètres.
Paramètres
Avoir en prix
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "AVOIR_PRIX _ACTIF"
Valeur :
§ Coché :Active la possibilité de faire des avoir en prix,
§ Non coché : Non autorisé.
Edition des avoirs
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "EDITER_AVOIR_SANS_EDITER_FACTURE"
Valeur :
§ Coché : Autorise l'édition d'un avoir avant l'édition de la facture,
§ Non coché : Non autorisé.
Avoir partiel de prix sur quantité multiple et impact sur PMP
AVOIR PARTIEL DE PRIX SUR QUANTITÉ MULTIPLE ET
IMPACT SUR PMP
Une facture a été enregistrée, suite à un BL : Quantité de 5, prix à 10.00 €
Le fournisseur fait un avoir de 2.00 € sur une quantité de 3.

1. Appeler la facture,
Elle contient :
· 5 x 10 = 50,
2. Faire un "Avoir hors SSC" en quantité avec re-facturation,
3. Saisir dans le prix unitaire la moyenne du prix : 6.8 résultat de [ (3 x 8) + (2 x 10) ] / 5,
L'avoir contient :
· -5 x 10 = -50
· 5 x 8.8 = 44
Rechercher la liste des avoirs
RECHERCHER LA LISTE DES AVOIRS
Méthode 1
Ventes / Factures clients / Gérer les factures client
1. Dans "Numéro", faire <F1>,
2. Mettre la valeur "0" dans le critère de recherche "TTC inférieur à",
3. <Flèche verte> ou <F2>.
Voir Consulter l'historique des factures clients
Classifications sur les factures
Les motif posés sur les avoirs sont issus des catégories d'une classification sur les factures. Ce
paramétrage est particulier et est mis en place uniquement sur demande.
Pour les obtenir dans l'extraction : Il faut mettre le critère de recherche « Afficher classifications » à
la valeur « Oui ». Par défaut, cette valeur est à "Non" (sauf changement du paramétrage. De cette
façon, les temps de recherche restent raisonnables).
Méthode 2
Utiliser l'option "Extraire l'état des ventes". Les classifications des factures sont automatiquement
renseignées, voir Extraire l'état des ventes, livraisons ou marges.
Contrôler l'état des factures
CONTRÔLER L'ETAT DES FACTURES
Régulièrement, un contrôle sur les factures est nécessaire.
Solution de service / Solutions de service clients / Imprimer les factures
ou
Ventes / Factures clients / Imprimer les factures
1. Utilisez les critères de sélection, suivi d'un clic sur le bouton <Actualiser>
2. Au besoin, filtrer par login en saisissant le login dans la case filtre en bas du tableau
3. Si le tableau est vide : Les factures sont
§ Soit à l'état « Envoyée au destinataire » : Elles pourront passer en comptabilité (c'est
OK)
§ Soit à l'état « Passée en comptabilité » (c'est OK)
4. Si le tableau N'est PAS vide :
§ Voir avec les différents collaborateurs pourquoi les factures ne sont pas éditées,
§ Les imprimer et les expédier  le cas échéant (si l'impression des traites est
nécessaire, faites le avant d'imprimer les factures, cf Imprimer les traites et les factures
et les avoirs)
Gérer les commentaires
GÉRER LES COMMENTAIRES
Paramètres
Report de commentaire
Paramètres application / Paramètres application / Gérer les paramètres
Le commentaire de livraison est reporté sur la facture.
Paramètre "PASSER_COMMENTAIRE_BLFACT"
Valeur :
§ Coché : Commentaire reporté,
§ Non coché : Rien.
Modification du commentaire sur facture validée
Paramètres application / Paramètres application / Gérer les paramètres
Le commentaire de l'en-tête de la facture client validé en comptabilité est accessible.
Paramètre "ACTIVER_COMMENTAIRE_FACTURE_CLIENT_VALIDE_EN_COMPTABILITE"
Valeur :
§ Coché : Active la zone de commentaire de l'en-tête de la facture client validé en
comptabilité,
§ Non coché : Rien.
Mettre un acompte sur une facture
METTRE UN ACOMPTE SUR UNE FACTURE
Méthode en pied de facture
Ventes / Factures / Gérer les factures clients
1. Rechercher la facture ou Terminer votre facture sans l'acompte,
2. <Modifier> ou <Crayon>,
3. Saisir le montant de l'acompte dans "Acompte déjà payé",
4. Modifier le montant de l'échéance (ou des échéances) pour prendre en compte cet acompte,
5. <Disquette> ou <F2>.
Impression de la facture
A l'impression, la net à payer de la facture tient compte de l'acompte.
Dans ce cas, l'acompte n'apparait qu'au niveau de l'édition de la facture en pied de page et est
décompté du Net à Payer, mais pas du total TTC (il faut également que le paramétrage de l'imprimé
facture soit prévu pour faire apparaitre toutes ces zones).
Impact Comptable
ATTENTION, ARTIS.net ne génère aucune écriture comptable en comptabilité.
Dans cette procédure, l'acompte est juste une information dans l'édition de facture, qui permet au
client de régler le bon solde à payer.
Il n'y a aucune ligne d'article dans ARTIS. Il n'apparait pas au niveau de l'interface comptable
puisque que c'est le total TTC qui est transféré.
Par contre, dans le compte du client dans la comptabilité générale, le solde (lettrage) de la facture
se fait avec deux règlements : l'acompte et le solde de la facture (le net à payer).
Méthode avec une facture d'acompte
Pour un dossier de vente, cette méthode consiste à faire deux factures :
o Une facture d'acompte,
o Une facture du dossier, prenant en compte l'acompte.
Ce traitement permet :
o D'avoir en comptabilité une trace de l'acompte (écriture comptable),
o De prendre en compte la TVA sur le montant de l'acompte au moment où celui-ci est fait.
Article
Il faut au minimum un article de facturation "Acompte", consulter Gérer les articles de facturation.
Néanmoins, il est préférable d'avoir un article "Acompte" par activité, famille, ayant les mêmes
comptes (catégories comptables) que les articles de vente. Ces articles sont notamment utile pour
faire la différence entre Matériel et Prestations.
Mode de règlement
Il est préférable de créer un mode de règlement "Facture acquittée", consulter Gérer les modes de
paiement.
Facture d'acompte
Ventes / Factures / Gérer les factures clients
Lors de la création de la facture :
1. Insérer l'article de facturation "Acompte",
2. P.U HT : Il est égal à la valeur HT du montant de l'acompte :
Si l'acompte est de 1000 €, le montant à saisir est de 833.33 €,
3. Le mode de règlement : "Facture acquittée",
4. Le TTC et le Net à payer de la facture d'acompte sont alors de 1000 €.

Facture du dossier, prenant en compte l'acompte
Ventes / Factures / Gérer les factures clients
Lors de la création de la facture :
1. Insérer les articles permettant de facturer le dossier (ou issus des livraisons),
2. Insérer l'article de facturation "Acompte", utilisé dans la facture d'acompte,
3. P.U HT : Il est égal à la valeur HT du montant de l'acompte, en négatif pour établir une
déduction :
Si l'acompte est de 1000 €, le montant à saisir est de -833.33 €,
4. Le TTC et le Net à payer de la facture sont alors du montant total du dossier TTC - 1000 €.
Modifiier les acomptes, les échéances
MODIFIER LES ACOMPTES, LES ÉCHÉANCES
Montant de l'acompte et des échéances
Lorsque les échéances ou un acompte sont modifiés, ARTIS.net contrôle si la somme est bien
égale au total HT de la facture. En cas d'anomalie, un message s'affiche avec l'échéancier et
l'acompte. L'utilisateur doit procéder à la correction. Tant qu'il n'est pas cohérent, la validation du
message ne s'effectue pas.
Date de facture et échéances
La modification de la date de facture implique le recalul des dates d'échéance.
Modifier un coût de revient
MODIFIER UN COÛT DE REVIENT
La facture étant émise, il faut repartir de la facture.
1. Appeler la facture
2. Cocher la ligne  à rectifier puis  <Loupe>  (Pas modification)
3. Cliquer sur le libellé  « Total C.Rev. Ligne »  (à gauche)
4. Passer en modification avec <Crayon>
5. Rectifier votre « Coût rev. Unitaire utilisateur » à droite de l'écran
6. Puis cliquer sur le lien complètement à droite « Recalculer coût rev. Total utilisateur »
7. Puis enregistrer votre modification.
8. Puis revenir à la facture
Cette opération est à effectuer pour chaque ligne concernée par un changement de coût de revient.
La modification du coût de revient est répercutée sur le BL et la commande client associés.
Rechercher des factures
RECHERCHER LES FACTURES
Critère de recherche
Les critères de recherche rapide sont :
o Nunméro interne,
o Numéro externe,
o Nom du client.
En tapant directement les caractères recherchés dans la zone "Nnuméro interne", ARTIS.net
regarde dans les trois critères de recherche rapide et ramène toutes les factures correspondantes.
Paramètres
Recherche rapide
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre permet de redéfinir les critères de recherche rapide.
Paramètre "RECHERCHE_RAPIDE_FACTURE_CLIENT_OPTIONS"
Valeur :
§ Numéros : La recherche n'est possible que sur les N° de factures,
§ Numéros et Nom client : La recherche se fait sur le N° de facture et le nom du client,
§ Numéros et Code et Nom client : La recherche se fait sur le N° de facture, le code et
le nom du client.
Colonnes à compléter
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre permet de définir les élements qui seront affichés.
Paramètre "RECHERCHE_FACTURE_CLIENT_AFFICHAGE"
Valeur :
§ Défaut : Les colonnes de base hormises celles du RIB et des classifications,
§ Défaut et Rib : Toutes les colonnes décrites dans le mode "Défaut", y compris le RIB,
§ Défaut, Rib et Classifications : Il s'agit du mode "Défaut et Rib", y compris les
classifications.
Remarque
Lorsque des colonnes ne sont pas alimentées, la recherche des factures est accélérée.
Paramètres
PARAMÈTRES
Modification des factures
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "BLOQ_FACCLT_ENVDEST"
Valeur :
§ Coché : Les factures clients envoyées au destinataire sont bloquées : suppression,
modification, ajout impossible,
§ Non coché : Autorisé.
Suppression des factures SSC
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "BLOQ_FACCLT_SOLSERV"
Valeur :
§ Coché : Les factures clients issues de la facturation SSC sont bloquées : suppression,
modification, ajout impossible,
§ Non coché : Autorisé.
Imprimer les factures
IMPRIMER LES TRAITES, IMPRIMER LES FACTURES
Solution de service / Solutions de service clients / Imprimer les factures
ou
Ventes / Factures clients / Imprimer les factures
Imprimer les factures jamais imprimées
1. Si le tableau N'est PAS vide, des factures sont à imprimer.
2. Toutes les factures sont présélectionnées,
3. Cliquer sur le lien "Imprimer les factures"
Imprimer les traites et les factures jamais imprimées
Il n'y a pas d'état d'impression des traites.
L'impression s'effectue en même temps que les factures.
Il est plus facile d'imprimer les traites avant les factures. Dans le cas contraire, laborieusement, il
sera nécessaire de rechercher, filtrer les factures pour pouvoir imprimer les traites.
1. Si le tableau N'est PAS vide, des factures sont à imprimer.
2. Toutes les factures sont présélectionnées,
3. Cliquer sur le lien "Imprimer les traites"
§ Selon le mode de règlement présent sur les factures, ARTIS.net imprimera les lettres-
traites.
4. Cliquer sur le lien "Imprimer les factures"
Remarque
Une traite est imprimée uniquement si le moyen de paiement est "LCR soumise à l'acceptation"
Ré-imprimer des factures
1. Décocher toutes les factures,
2. Il est conseiller à l'utilisateur de cibler le ou les factures en précisant au moins un des critères
suivants :
§ De la facture, à la facture,
§ De la date, à la date,
§ Du lot, au lot,
3. Décocher "N'afficher que les factures à l'état Enregistré",
4. Au besoin, faire "Actualiser" (en haut, à droite),
5. Cocher le ou les factures (utiliser les filtres au besoin),
6. Cliquer sur le lien "Imprimer les factures".
Paramètres
Impression multi exemplaires des factures
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "EX EMPLAIRES_FACTURE_REGROUPE"
Valeur :
§ Coché : Tous les premiers exemplaires dans un premier temps, puis tous les 2ème
exemplaire dans un deuxième à la suite, etc... le tout dans un seul fichier PDF,
§ Non coché : Facture après facture, chaque exemplaire (du 2ème et tous les autres)
sont à suivre du premier exemplaire.
Taille des fichiers PDF de factures
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "NBMAX I_FACTURES_PAR_GPIMPRESSION"
Valeur : exemple, 1000,
Le fichier pdf généré contient au maximum 1000 factures, l'édition sera découpée en fichier
PDF de 1000 factures.
Impression des factures triées dans l'ordre des numéros
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "ORDRE_FACT_PAR_NO"
Valeur :
§ Coché : Les factures imprimées sont triées par numéro interne. Le paramètre
"ORDRE_FACT_PAR_ORDRE_CODECLIENT" doit être non coché.
§ Non coché :
· Si le paramètre "ORDRE_FACT_PAR_ORDRE_CODECLIENT" est coché,
consulter ce paramètre,
· Si le paramètre "ORDRE_FACT_PAR_ORDRE_CODECLIENT" est non coché,
il n'y a pas de tri.
Impression des factures triées dans l'ordre des clients
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "ORDRE_FACT_PAR_ORDRE_CODECLIENT"
Valeur :
§ Coché : Les factures imprimées sont triées par code client. Le paramètre
"ORDRE_FACT_PAR_NO" doit être non coché.
§ Non coché :
· Si le paramètre "ORDRE_FACT_PAR_NO" est coché, consulter ce paramètre,
· Si le paramètre "ORDRE_FACT_PAR_NO" est non coché, il n'y a pas de tri.
Générer les factures clients
GÉNÉRER LES FACTURES CLIENTS
Cette option permet de :
o Facturer en masse un ensemble de bon de livraison,
o Facturer en masse un ensemble d'interventions,
Ventes / Factures clients / Générer les factures clients
Interventions
1. Sélectionner "Interventions",
2. Dans l'écran de génération des factures, la case "Regrouper les factures par org. Interne et
cliente",
3. Indiquer les dates si nécessaires,
4. Sélectionner un opérateur ou une Organisation interne si nécessaire,
5. <Flèche verte> ou <F2>,
6. Le cas échéant, filtrer un client,
7. Cocher les lignes des différentes demandes d'interventions,
