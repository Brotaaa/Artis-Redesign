# Factures fournisseur

> Categorie: Achats | Pages 495-508

## Sous-rubriques
- Gérer les factures fournisseurs (p.495)
-   Particularités (p.497)
-     Ajouter du port sur une facture d'achat (p.497)
-     Ventiler les frais de facture (frais d'approche) (p.498)
-       Mode opératoire (p.500)
- Consulter l'historique des factures (p.500)
- Contrôler les factures fournisseur (p.500)
-   Mode opératoire (p.501)
-   Contrôler les factures fournisseur (p.505)
-   Paramétrage (p.506)

Commandes à livrer
11. La liste des commandes en attente de livraison pour le fournisseur concerné s'affiche,
12. Cocher "Mode douchette",
13. Sélectionner la commande à livrer,
14. <Disquette> ou <F2>,
15. Scanner les références des articles reçus,
Réceptionner une autre commande dans le même bon de livraison
16. Faire <Mosaïque>,
17. Cliquer sur "Commandes à livrer",
18. La liste des commandes en attente de livraison pour le fournisseur concerné s'affiche,
19. Refaire les étapes 11 à 15 ci-dessus,
20. Si nécessaire,  faire <Mosaïque> et "Aperçu du BL" ou "Imprimer le BL",
21. Les mouvements de stock sont automatiquement générés, et les fiches sur les biens ont été
crées automatiquement.
Paramètres
Mode douchette obligatoire
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "LIVRAISON_FORCEE_MODE_DOUCHETTE"
Valeur : exemple 999,
Indique le nombre de lignes au-delà duquel l'utilisateur est obligé d'effectuer les livraisons
des commandes fournisseurs en mode douchette.
Etiquette et mode douchette
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "IMPRIMER_ETIQUETTE_DOUCHETTE_FOURNISSEUR"
Valeur :
§ Coché : Imprime les étiquettes codes barres à la ligne, dans les livraisons fournisseurs
en mode douchette,
§ Non coché : Pas d'impression.
Factures fournisseur
Gérer les factures fournisseurs
CREER LES FACTURES FOURNISSEURS
Achats / Factures fournisseurs / Gérer les factures fournisseurs
Dès qu'une ligne de facture est enregistrée, la facture existe et est au statut "Enregistré".
Toute facture à l'état "Enregistré", est susceptible d'être prise en compte dans la génération des
écritures comptables.
Facture issue de la facturation des réceptions (livraisons
fournisseur)
Entête
1. Faire <+>,
2. Sélectionner le fournisseur,
3. Le cas échéant, compléter l'organisation interne dans "Reçue par",
4. Modifier la date : il s'agit de mettre la date de la facture du fournisseur,
5. Saisir le numéro externe : Il s'agit de mettre le numéro de facture donné par le fournisseur,
Cette information est reportée sur l'écriture comptable d'achat, et transférer en comptabilité
(pour lettrage),
6. Modifier le mode de règlement (calcul d'échéance),
Livraisons à facturer
7. Dans la liste des Livraisons à facturer, sélectionner le ou les BL,
8. <Disquette>,
9. Vérifier les lignes, dans l'ordre :
§ Vérifier les montants H.T. ,
§ Modifier les quantités (cocher la ligne, <Crayon>, Saisir la modification, <Disquette>,
§ Modifier les prix unitaires H.T., <Crayon>, Saisir la modification, <Disquette>,
10. Ajouter les autres livraisons à facturer :
§ Cliquer sur le lien "Livraisons à facturer" (dans "Carré de carrés" à droite),
§ Refaire les étapes 7 à 9,
Vérification de la facture
11. Vérifier le total H.T. de la facture :
§ Si le montant varie de plus de 1 €, ajouter une d'article de facturation pour enregistrer la
différence :
· Ajouter une ligne avec <+>,
· Changer le type de ligne et prendre "Facturation" (en haut à droite),
· Rechercher un article de facturation (cela suppose que les articles existent),
· Saisir la quantité 1 ou -1,
· Saisir la valeur de l'écart en prix unitaire,
· <Disquette>,
§ Si le montant varie de moins de 1 €, l'écart est enregistré dans la TVA :
· Passer en modification de la facture <Crayon>,
· Modifier le "Total TVA (€)" de façon à ne plus avoir d'écart (en bas, à gauche),
· Corriger une des échéances (de la même façon),
Remarque
Le nombre de caractère du numéro externe mis sur l'écriture comptable est dicté par le logiciel de
comptabilité.
Factures directe
Entête
1. Faire <+>,
2. Sélectionner le fournisseur,
3. Le cas échéant, compléter l'organisation interne dans "Reçue par",
4. Cocher la case "Directe" (en haut, à droite),
5. Modifier la date : il s'agit de mettre la date de la facture du fournisseur,
6. Saisir le numéro externe : Il s'agit de mettre le numéro de facture donné par le fournisseur,
Cette information est reportée sur l'écriture comptable d'achat, et transférer en comptabilité
(pour lettrage),
7. Modifier le mode de règlement (calcul d'échéance),
Lignes d'articles à facturer
Automatiquement, l'utilisateur est en ajout de ligne d'article,
8. Rechercher l'article,
9. Saisir la quantité et le prix unitaire
10. <Disquette>,
Une fois la facture créée
Lorsque la facture est en visualisation globale, l'utilisateur peut reprendre l'ajout de ligne, dans les
deux modes :
o Livraisons à facturer : voir les étapes 7 à 10 du chapitre "Facture issue de la facturation des
réceptions (livraisons fournisseur)"
o Lignes d'articles : voir les étapes 8 à 10 du chapitre "Factures directe"
Particularités
Ajouter du port sur une facture d'achat
AJOUTER DU PORT SUR UNE FACTURE D'ACHAT
Achat / Factures fournisseur / Gérer les factures fournisseur
o Rechercher la facture
ou
Lorsque la facture fournisseur est générée, la facture est affichée (en bleu)
1. <+> dans le tableau des lignes de factures
2. Cliquer en haut à droite zone « Ajouter Ligne » pour sélectionner une ligne de « Facturation »
3. Le pavé de saisie change
4. Saisir « PORT » dans la zone « Code » (ou <Entrée>)
5. Saisir la quantité 1 et le prix facturé par le fournisseur
6. <Disquette>
7. Puis <X >

Ventiler les frais de facture (frais d'approche)
VENTILER LES FRAIS DE FACTURE (FRAIS D'APPROCHE)
Un fournisseur facture à posteriori, des frais de transport, des frais de douanes qui viennent s'ajouter
à la valeur de la marchandises achetées.
Ces frais supplémentaires viennent donc impactés le PMP ou la valeur du bien. Le report des frais
d'approche sur les marchandises est appelé "Ventilation des frais".
Les étapes sont :
1. Saisie des factures de marchandise,
2. Les biens entre en stock avec la valeur d'achat fournisseur de marchandise,
3. Réception des factures des frais d'approche,
4. Saisie des factures de frais d'approche,
5. Ventilation des lignes de frais d'approche sur les lignes d'achat de marchandises.
Saisie des factures de marchandises
Factures et mouvements de stock
Etape Valeur  Valeur Mouvement fournisseur
Facture 1 fournisseur de marchandise
Achat du Bien 1         1 600.00   reporté en    zone "CA"
    et         1 600.00   zone "Valeur du mouvement"
Facture 2 fournisseur de marchandise
Achat du Bien 2         1 500.00   reporté en zone "CA"
 et         1 500.00   zone "Valeur du mouvement"
Achat de Consommable             500.00
  reporté en    zone "CA"
et             500.00  zone "Valeur unitaire"
 et             500.00  zone "Valeur du mouvement"
Fiche de bien
 Bien 1 Bien 2
Onglet "Achat", Section "Détail de la valorisation" Valeur Valeur
Prix d'achat 1 600.00 1 500.00
Frais ventilé - -
Ratio :  Bien 1 = (1600 + 0) / 1600, Bien 2 = (1500 + 0) / 150 1.00 1.00
Valeur 1 600.00 1 500.00
Saisie de facture des frais
Facture de frais d'approche
Etape Valeur  Valeur impacte sur le Mouvement fournisseur des
marchandises
Facture 3 fournisseur des frais d'approche
Frais à prendre en compte         1 000.00
Ventilation sur :
Bien 1             444.44
  reporté en zone "Frais ventilé"
et         2 044.44   zone "Valeur du mouvement"
Bien 2             416.67
  reporté en zone "Frais ventilé"
et         1 916.67   zone "Valeur du mouvement"
Consommable             138.89
  reporté en zone "Frais ventilé"
et             638.89  zone "Valeur du mouvement"
Fiche de bien
 Bien 1 Bien 2
Onglet "Achat", Section "Détail de la valorisation" Valeur Valeur
Prix d'achat 1 600.00 1 500.00
Frais ventilé 444.44 416.67
Ratio :  Bien 1 = (1600 + 444.44) / 2044.44, Bien 2 = (1500 + 416.67) / 1916.67 1.28 1.28
Valeur 2 044.44 1 916.67
Rédaction en-cours...
Mode opératoire
MODE OPÉRATOIRE
Ventiler les frais
Les frais à ventiler sont obligatoirement des articles de facturations, consulter Gérer les articles de
facturation.
1. Saisir la facture de frais (frais d'approche),
2. En visualisation de cette facture,
3. Sélectionner les lignes de frais à ventiler,
4. Cliquer sur "Ventilation les frais sur les lignes", dans l'entête de la section,
Ventilation des frais
5. Section "Filtre",
6. Compléter les critères de rechercher sur les factures de marchandise,
7. <Flèche verte> ou <F2>,
8. Sélectionner les factures,
9. <Flèche verte> ou <F2>,
10. Sélectionner les lignes de marchandises à impacter,
11. <Disquette> ou <F2>,
12. ARTIS.net revient à la facture.
Voir la ventilation effectuée
1. Saisir la facture de frais (frais d'approche),
2. En visualisation de cette facture,
3. Sélectionner les lignes de frais à ventiler,
4. Cliquer sur "Ventilation les frais sur les lignes", dans l'entête de la section,
Ventilation des frais
5. Les lignes de marchandises impactées sont affichées dans la partie basse de l'écran.
Remarque
L'autre possibilité est de faire une interrogation sur les mouvements de stock de type "Mouvement
fournisseur", et de vérifier les colonnes "Frais ventilé" et "Valeur du mouvement".
Consulter l'historique des factures
Contrôler les factures fournisseur
CONTRÔLER LES FACTURES FOURNISSEUR
Contexte
La saisie des commandes fournisseur et des livraisons fournisseur est effectuée de manière
habituelle, convenue dans ARTIS.
Le mode habituel dans ARTIS, est de créer une facture fournisseur reflétant le document envoyé par
le fournisseur (total hors taxe, montant des TVA, total toutes taxes). Le corps de la facture ARTIS
est constitué alors des lignes de livraison fournisseur, et de lignes supplémentaires (frais, articles
non compris dans des livraisons fournisseur).
L'insertion de ces lignes de livraisons fournisseur dans la facture fait changer l'état du BL concerné
vers les états « Facturé partiellement » ou « Facturé totalement ».
La facture est à l'état « Enregistré » et est susceptible de passer dans le traitement de la
génération des écritures comptables. L'état de la facture passe alors à « Validée en comptabilité ».
Objectif de "Contrôle facture"
Le prestataire paie les factures sous 8 jours, même si les factures sont en anomalie et non validées
par les personnes des services concernés. Les factures constatées d'avance et escomptes seront
aussi gérées par ce mécanisme.
Constat d'une anomalie
Si l'utilisateur comptable constate une anomalie sur la facture fournisseur (cas du montant à
rapprocher > 0), il poursuit et valide tout de même la facture.
Pour mettre en évidence ces écarts, l'utilisateur comptable dispose d'articles spécifiques «
Anomalie » (voir le paragraphe « Paramétrage »).
Ecart autorisé
A la validation de la facture, un article est généré automatiquement en fin de facture. Il permet
d'avoir une certaine souplesse, notamment sur les approximations de calcul entre la facture dans
Artis et la facture papier.
Le montant autorisé est calculé avec un pourcentage sur le montant HT, plafonné à un certain
montant (paramétrage par exemple de 1% pour un plafond de 2 €).
Le pourcentage et le plafond auront une valeur par défaut, valable pour tous les fournisseurs. Pour
chaque fournisseur, il sera possible de spécifier des valeurs prioritaires sur les valeurs standards
(voir le paragraphe « Paramétrage »).
Mode opératoire
MODE OPÉRATOIRE
Procédure de Gestion de la Facture
Réception de la facture fournisseur
La facture fournisseur est reçue dans le service comptabilité.
Saisie de la facture
Achat / Factures Fournisseur / Gérer les factures fournisseur
1. <+>,
Entête de la facture
2. Section "Infos principales de facture",
3. Saisir le montant TTC de la facture du document papier d'origine,
4. Le montant HT de la facture est pré calculé après la saisie du montant TTC. La zone est
modifiable par l'utilisateur comptable (lien sur le nom de la zone qui pré calcule),
5. Le type de service auquel est lié la facture (pièces détachées, consommables,….), dans la
liste. Ce type permettra d'affiner le traitement comptable du contrôle de facture,
6. "Facture constatée d'avance" : Elle permet de déterminer directement qu'aucune livraison n'est
être liée à la facture pour le moment,
7. ARTIS affiche à l'écran les soldes des montants HT et TTC à rapprocher,
8. A ce stade, le solde non rapproché est égal au montant HT ci-dessus. Le contrôle se fait
uniquement sur le TTC,
Rapprochement des livraisons
9. Sélectionner les livraisons fournisseur à inclure dans la facture,
10. Le cas échéant :
11. Supprimer des lignes,
12. Modifier les quantités sur les lignes,
13. Modifier les prix unitaires,
14. Ajouter des lignes (frais de port, frais autres…),
15. Les montants total HT et TTC de chaque ligne diminuent les soldes des montants à rapprocher,
16. Fin de la saisie de la facture
17.
18. Si le solde à rapprocher (TTC) n'est pas égal à 0, l'enregistrement de la facture va générer
automatiquement une ligne article :
19. Si les conditions sont remplies, un article d'écart autorisé va être ajouté avec pour valeur le
solde à rapprocher,
20. Si le solde à rapprocher est trop important, un article d'anomalie va être ajouté avec pour valeur
le solde à rapprocher (y compris le cas de la facture constatée d'avance),
Ce schéma résume la description ci-dessus : Position du solde sur une échelle de valeur
Avec
o FAR : facture à recevoir
o AAR : avoir à recevoir
Exemple 1 :
100 euros : La facture papier du fournisseur
 80 euros : La facture Artis
-------------
 20 euros : Anomalie Avoir à Recevoir
Exemple 2 :
100 euros : La facture papier du fournisseur
120 euros : La facture Artis
-------------
 20 euros : Anomalie Facture à recevoir
Cas particuliers
Suivant la manière de calculer le TTC (regroupement par ligne, regroupement par base TVA, …), un
fournisseur peut avoir un résultat différent du calcul effectué par Artis. Dans le cas où le mode de
calcul n'est pas le même que celui d'Artis, un second article d'écart autorisé (code TVA exonéré)
sera alors créé afin d'arriver à un TTC sur la facture fournisseur Artis égale au centime près à la
facture papier du fournisseur.
Le statut de la facture suit alors les règles suivantes :
o La présence d'au moins un article "Anomalie" fait passer obligatoirement la facture au statut
"Litige".
o L'absence des articles "Anomalie", avec présence ou non de l'article "Ecart autorisé" fait
passer la facture au statut "Bon à payer".
Fin de la saisie de la facture
A ce stade, quelque soit le statut de la facture, son état est "enregistré".
Suite à donner aux anomalies sur facture
Dans le cas d'une facture avec un statut "Litige", l'utilisateur comptable va transmettre le document
au service concerné pour analyse et correction de l'anomalie.

Comptabilisation des factures "Litige" et "Bon à payer"
Consulter le paragraphe "Traitement comptable des factures".
Traitement des anomalies sur facture
A la réception des documents, les utilisateurs des services concernés (utilisateurs à l'origine des
commandes) traitent les anomalies.
Correction de la facture
Le traitement des anomalies se fait de la façon suivante :
1. Rappel de la facture (statut "Litige", état "Traité en compta"),
2. Modification de la facture. Les opérations suivantes sont autorisées :
§ Supprimer des lignes,
§ Modifier les quantités sur les lignes,
§ Modifier les prix unitaires,
§ Ajouter des lignes (frais de port, frais autres…),
§ Ajouter une ligne de BL,
§ Ajouter un article de demande d'avoir.
En l'état, Artis ne peut distinguer des droits distincts pour les utilisateurs sur le traitement de la
facture. De plus, les reports en cascade sur les commandes et les bons de livraisons ne sont pas
possibles.
Fin de la saisie de la facture
Le statut de la facture suit les règles suivantes :
§ La présence d'au moins un article "Anomalie" ne fait pas changer le statut "Litige".
L'état de la facture est inchangé.
§ L'absence des articles "Anomalie", avec présence ou non de l'article "Ecart autorisé"
fait passer la facture au statut "Bon à payer (suite à litige)".
Suite à donner au traitement des anomalies sur facture
Une fois l'anomalie traitée, la facture est tamponnée et retransmise à la comptabilité.
Comptabilisation des factures "Bon à payer (suite à litige)"
Consulter le paragraphe "Traitement comptable des factures".

TRAITEMENT COMPTABLE DES FACTURES
Génération des écritures
La génération des écritures transcrit les factures en écritures comptables, de manière standard.
Les factures pouvant faire l'objet d'une génération sont :
§ Dans l'état "Vérifié" avec un statut "Bon à payer" ou "Litige",
§ Dans l'état "Traité en comptabilité" avec un statut "Bon à payer (suite à litige)".
Suite à ce traitement les factures sont :
§ Dans l'état "Validé en compta" avec un statut "Bon à payer". Les factures sont non
modifiables,
§ Dans l'état "Validé en compta" avec un statut "Bon à payer (suite à litige)". Les
factures sont non modifiables,
§ Dans l'état "Traité en compta" pour les factures dont le statut est "Litige". Les factures
sont encore modifiables, et peuvent faire l'objet d'une nouvelle génération.
Le statut "Traité en compta" signifie qu'une facture a fait l'objet d'une génération d'écritures mais
qu'une anomalie était présente : elle ne peut donc pas être directement validée sans une saisie
manuelle sur le logiciel Artis.
Dans le cas d'une génération d'écriture pour une facture dont l'état est"Traité en compta" et dont le
statut est "bon à payer (suite à litige)», la nouvelle transaction se substitue à l'ancienne.
Toutefois, l'ancienne transaction reste accessible.
Interface
Remarque
Le traitement des interfaces est propre à chaque client.
Le traitement des interfaces suit le descriptif en place. Le statut "Bon à payer" ou "Litige" est
transcrit dans l'interface. Le champ litige est positionné :
§ Avec la valeur "L" (Litige) pour les factures d'achat dont le statut est "Litige".
§ Avec la valeur "B" (Bon à payer) pour les factures d'achat dont le statut est "Bon à
payer (suite à litige)"
Dans tous les cas, pour les fournisseurs pratiquant l'escompte (voir paramétrage), il faut envoyer
"B" (Bon à payer) et non "L".
Lorsqu'une facture en anomalie est renvoyée corrigée dans l'interface, Seule l'entête de la facture
est interfacée (pas le détail).

Contrôler les factures fournisseur
LISTE DE CONTRÔLE DES FACTURES FOURNISSEUR
Achat / Factures Fournisseur / Contrôler les factures fournisseur
Position Position
lettrée Label de la colonne Format
Commentaire
1 A Numéro externe de facture  Texte
2 B Numéro de facture  Texte
2 C Date de facture  Instant
3 D Date de saisie  Instant
4 E Etat  Texte
5 F Statut  Texte
6 G Total HT  Monétaire
7 H Total TTC  Monétaire
8 I Code fourn  Texte
9 J Libellé fourn  Texte
10 K Articles d'ajustement  Texte
11 L Montant article d'ajustement  Texte
12 M Type de service  Texte
Paramétrage
PARAMÉTRAGE
Paramètres
Activation du module
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "SUIVI_ANOMALIES_FACTURATION"
Valeur :
§ Coché : Active le module avec le paramétrage de suivi des anomalies de facturation
§ Non coché : Non activé.
Classifications
Pratique escompte
Consulter Créer une classification avec les informations ci-après.
Classification
Nom : "Pratique escompte"
Abréviation : "ESCOMPTE"
Identifiant technique : "PRATIQUE_ESCOMPTE"
Domaine : "parties"
Classe : "com.artis.business.parties.Org"
Catégorie
Ensuite, pour les natures, ajouter les catégories  :
Nom : "Oui", Abréviation : "O", Identifiant technique : "OUI",
Nom : "Non", Abréviation : "N", Identifiant technique : "NON".
Table de décision
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
Ecart autorisé par fournisseur
Cette table de décision permet en fonction de chaque type  de dossier, et  de différents critères,
variant dans le  temps,  de  définir les  comptes  comptables  utiles  à  la  génération. Les  comptes
comptables doivent être créés dans le plan comptable.
Rechercher la Table de décision "TD_ECARTS_AUTORISES_PAR_FOURN".
Numéro Code Fournisseur Montant du plafond (en euros) Pourcentage du plafond (en % )
1 * 5 2
Pour la gestion d'une table de décision, voir Critère dans les tables de décision
Code fournisseur
Le code fournisseur « * » indique un pourcentage et un plafond valable pour tous les fournisseurs
non présents dans la table. Le traitement des écarts prend en compte le premier plafond atteint,
soit en pourcentage, soit en montant.
Contrôle Facture d'Achat
Pour gérer les articles d'anomalies par type de service, cette table de décisions permet d'associer
les anomalies à des articles de facturations
Rechercher la Table de décision "TD_CONTROLE_FACTURE_ACHAT".
Numéro Type de service Facture Constatée d'Avance Facture A Recevoir Avoir A Recevoir Ecart autorisé
1 Système d'Impression FCASI FARSI AARSI ECASI
2 Consommable FCACO FARCO AARCO ECACO
3 Pièce détachée FCAPD FARPD AARPD ECAPD
Type de services
Définir les types de service.
Le type de service auquel est lié la facture (pièces détachées, consommables...). Dans le cas où
un seul service est défini, ce service sera utilisé par défaut et la liste déroulante ne sera pas
affichée.
Ce type permettra de déterminer automatiquement le compte comptable de charge lors du
traitement comptable de la facture.
Type de service, Facture Constatée d'Avance, Facture A Recevoir, Avoir A Recevoir, Ecart
autorisé
Codes des articles de facturation.
§ Facture Constatée d'Avance (FCA),
§ Facture A Recevoir (FAR),
§ Avoir A Recevoir (AAR)
§ Ecart autorisé,
Les articles seront créés pour chaque type de service avec le compte comptable correspondant.
Remarque
Si des types de services différents sont mis en place, il faut créer des articles différents.
Articles de facturation
Des articles de facturation sont nécessaires au module :
CODE LIBELLE
ECASI Ecart autorisé
FCASI Facture constatée d'avance
FARSI Facture à recevoir
AARSI Avoir à recevoir
… …
Les codes de ces articles ainsi que les libellés sont personnalisables.
Remarque
Ne pas oublier de classifier ces articles dans la classification Activité / Famille / Sous-famille et la
classification comptable des achats et des ventes.
Fournisseur
Fournisseurs avec escompte
Les fournisseurs seront classifiés ‘avec escompte' s'ils pratiquent l'escompte.
Facture fournisseur
