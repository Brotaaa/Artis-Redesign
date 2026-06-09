# Gérer les biens

> Categorie: Biens et Configurations | Pages 151-167

## Sous-rubriques
- Créer un bien manuellement (p.152)
- Particularités (p.155)
-   Ajouter ou modifier la localisation d'un bien (p.155)
-   Broker un bien (p.155)
-   Classifier un Bien (p.156)
-   Détruire ou Démanteler un bien (p.156)
-   Faire un échange technique (p.157)
-   Gérer les constituants d'un bien (p.160)
-   Gérer les relations Maîtres/Accessoires (p.161)
-   Lister les biens sans relevé depuis le (p.161)
-   Mettre à zéro les compteurs d'un bien d'occasion (p.162)
-   Mettre en immobilisation - Location pure - Mise à disposition (p.162)
-   Reprendre un bien non facturé (p.164)
-   Supprimer accessoire en état incohérent (p.165)
-   Suivre des biens stockés pour un client (p.166)
-   Suivre les Biens en atelier (p.166)
-   Vérifier l'état de couverture d'un bien (p.166)
-   Mettre un identifiant prestataire automatique (p.166)
-   Paramètres (p.167)

Gérer les biens
GÉRER LES BIENS
Biens et configurations / Gérer les biens
Cette option permet de :
o Visualiser un bien spécifique,
o Modifier un bien spécifique,
o Créer manuellement un bien spécifique,
o Supprimer un bien spécifique.
Historique de la Situation
La liste déroulante, en haut à droite, est positionnée sur la situation actuelle.
En sélectionnant une autre situation (par exemple, lors de la réception fournisseur), la fiche du bien
est alors actualisée pour afficher le bien à cette date.
Onglets
En fonction de la situation du bien, seuls les onglets propres à la situation s'affiche.
Pour les biens en stock, les onglets sont :
o L'onglet "Logistique" regroupe les informations sur le stockage,
o L'onglet "Grandeurs" regroupe les informations sur les compteurs,
o L'onglet "Statuts" regroupe les informations sur les statuts et l'état "immobilisation",
o L'onglet "Composition" regroupe les informations sur les propriétés (maître, connecté, etc) et
sur les composants (accessoires, constituants),
o L'onglet "Achats" regroupe les informations sur les chaîne des Achats et sur la valorisation de
stock et de marge commerciale,
o L'onglet "Classifications" regroupe les informations de classification des biens.
Pour les biens en clientèle, les onglets sont :
o L"onglet ‘Client' regroupe les informations sur l'Installation', la chaîne des Ventes, le lien vers la
SSC, le commentaire client, les Interlocuteurs privilégiés et l'Intervenant référent,
o L"onglet ‘Grandeurs' regroupe les informations sur les compteurs,
o L"onglet ‘Statuts' regroupe les informations sur les statuts et l'état "immobilisation",
o L"onglet ‘Composition' regroupe les informations sur les propriétés (maître, connecté, etc) et
sur les composants (accessoires, constituants),
o L'onglet ‘Grandeurs' regroupe les informations sur les compteurs et leur configuration.
Onglet "Achat"
Un écran permet de recenser toutes les informations liées à une valorisation d'un bien.
Section "Détail de la valorisation", colonne "Comptable"
o Prix d'achat et date d'achat : Vient de la saisie initiale de la facture d'achat ou en création
manuelle pour un bien neuf,
o Prix argus : Il peut être géré dans une table par Modèle du bien, fourchette de date d'achat et
fourchette de volume copies par grandeur,
o Prix de reprise et date de reprise : Vient lors de la reprise de bien ou en création manuelle pour
un bien d'occasion,
o Montant de reconditionnement : Saisie manuelle,
o Montant reconditionné : Est égal à Prix de reprise plus Montant de reconditionnement,
o Frais ventilé : Issu de la ventilation des factures d'achat de frais sur les factures de
marchandises (Gestion des frais d'approche),
o Ratio : (Valeur d'achat + Frais) / Prix d'achat,
o Valeur d'achat + Frais : Prix d'achat + Frais ventiléValeur dépréciée et date de dépréciation :
Saisie manuelle ou issue de la gestion des dépréciations,
o Montant de la dépréciation : Est égal à Montant reconditionné moins Valeur dépréciée.
Section "Détail de la valorisation", colonne "Économique"
o Prix argus : Saisie manuelle,
o Montant reconditionné : Est égal à Prix argus économique plus Montant de reconditionnement,
o Prix de cession commerciale : Saisie manuelle
Grandeurs options avancées
Ce lien donne accès aux compteurs, à la configuration prédéfinie et au relevé de stock de
consommables.
Dans le tableau, un lien "Historique" informe des liens entre les positions compteur et les règles de
facturation (RFC).
L'historique des compteurs dans la RFC sert à régulariser les copies dues dans une SSC groupée
dont un des biens a été repris en cours de période.
Suivi des modifications
Ce lien donne un tableau qui contient tous les événements qui ont modifié le bien.
Cet historique des modifications reprend dans l'ordre décroissant :
o Toute modification de texte telle qu'un commentaire,
o Toute modification de date telle qu'une reprise, un relevé compteur,
o Les modifications de valeurs telles qu'un prix, un relevé compteur.
Créer un bien manuellement
CRÉER UN BIEN MANUELLEMENT
Dans ARTIS.net, les fiches de Biens sont créés automatiquement lors de la validation des livraisons
fournisseur.
La procédure de création manuelle d'un bien est à utiliser dans les cas suivants :
o Prise en charge à l'entretien en lieu et place d'un confrère ou d'un constructeur,
o Prise en charge à l'entretien d'un bien non vendu par le prestataire,
o Rachat d'un parc.
Bien destiné au stock
Biens et Configurations / Gérer les biens
1. <+>?
2. Section "Identifiant", zone de saisie "Modèle", rechercher l'article modèle,
3. Dans "Fabricant", saisir le matricule du Bien,
4. Si l'utilisateur est mono organisation interne, celle-ci s'affiche automatiquement, dans le cas
contraire, rechercher celle-ci,
5. Cocher "En stock" en haut à droite,
Onglet "Logistique"
6. Dans "Dépôt", sélectionner le dépôt,
7. Si des emplacements logistiques sont gérés dans le dépôt, sélectionner le ou saisir
directement,
8. Saisir la date d'entrée en stock,
Onglet "Statuts"
9. Si le bien est d'occasion :
§ Sélectionner la ligne " J: neuf ",
§ <Crayon>,
§ Sélectionner la ligne "Occasion",
Onglet "Achats"
10. Si le bien est neuf, saisir obligatoirement le prix d'achat,
11. Si le bien est d'occasion, saisir obligatoirement le prix de reprise,
12. Saisir dans les différentes zones, les éléments connus,
Onglet "Classification",
13. Si besoin, utiliser les listes déroulantes pour choisir les éléments dans les listes,
14. <F2> ou <Disquette>,
15. Le bien est créé.
Onglet "Grandeurs"
16. Vérifier le tableau des relevés compteurs,
17. Deux solutions :
§ Correction des compteurs initialisés automatiquement à 0 :
a) Sélectionner les compteurs,
b) <Loupe> au dessus du tableau,
c) Sélectionner le relevé,
d) <Crayon> au dessus du tableau,
e) Corriger la "Valeur de mise à jour",
f) <F2> ou <Disquette>,
g) <X >,
h) Refaire les étapes pour chacun des compteurs,
§ Saisie d'un nouveau relevé :
a) Modifier par <Crayon> (en haut à droite)
b) Corriger la date,
c) Saisir les Valeur réelle,
d) Dans "Origine/Source", sélectionner "ACHAT OCCASION",
e) <F2> ou <Disquette>.
Bien en parc client
Biens et Configurations / Gérer les biens
1. <+>,
2. Zone "Identifiant", champ "Modèle", rechercher l'article modèle,
3. Champ "Fabricant", saisir le matricule du Bien,
4. Si l'utilisateur est mono organisation interne, celle-ci s'affiche automatiquement, dans le cas
contraire, rechercher celle-ci,
5. Cocher "En parc client",
Onglet "Client"
1. Section "Installé chez...",
2. Rechercher le code du client dans "Code",
3. Sélectionner un site,
4. Saisir obligatoirement "Date d'installation",
5. Saisir éventuellement la localisation,
6. Saisir éventuellement :
7. Contact SAV,
8. Contact Conso/Relevé (très utiles pour les demandes de relevé compteur et les commandes de
consommables),
9. Contact CRM
10. Saisir éventuellement l'intervenant responsable (technicien habituel pour ce bien),
Onglet "Statuts"
11. Si le bien est d'occasion :
§ Sélectionner la ligne " J: neuf ",
§ Modifier par <Crayon>,
§ Sélectionner la ligne "Occasion",
12. Statut " S : Ne pas modifier, il sera mis à jour lors de la création de la SSC,
Onglet "Achats"
13. Champs non obligatoires
Onglet "Classification"
14. Si besoin, utiliser les listes déroulantes pour choisir les éléments dans les listes,
1. <F2> ou <Disquette>,
2. Le bien est créé.
Onglet "Grandeurs"
17. Vérifier le tableau des relevés compteurs,
18. Deux solutions :
§ Correction des compteurs initialisés automatiquement à 0 :
a) Sélectionner les compteurs,
b) <Loupe> au dessus du tableau,
c) Sélectionner le relevé,
d) <Crayon> au dessus du tableau,
e) Corriger la "Valeur de mise à jour",
f) <F2> ou <Disquette>,
g) <X >,
h) Refaire les étapes pour chacun des compteurs,
§ Saisie d'un nouveau relevé :
a) Modifier par <Crayon> (en haut à droite)
b) Corriger la date,
c) Saisir les Valeur réelle,
d) Dans "Origine/Source", sélectionner "Installation chez le client",
e) <F2> ou <Disquette>.
Particularités
Ajouter ou modifier la localisation d'un bien
AJOUTER OU MODIFIER LA LOCALISATION D'UN BIEN
Bien en stock
Biens et configuration / Gérer les biens
1. Rechercher le bien,
2. Modifier
 ,
3. Onglet "Logistique",
4. Mettre la localisation dans "Emplacement",
5. Valider par
  ou <F2>.
Bien installé chez le client
Biens et configuration / Gérer les biens
1. Rechercher le bien,
2. Modifier
 ,
3. Onglet "Client",
4. Section ' Installé chez...',
5. Saisir dans "Localisation", ou sélectionner une localisation existante,
6. Valider par
   ou <F2>,
7. Pour le détail de la localisation :
§ Cliquer sur le mot "Localisation",
§ Saisir les éléments de localisation,
§ Valider par
   ou <F2>.
Consulter Faire les demandes de relevés compteur par fax ou e-mail
Broker un bien
BROKER UN BIEN
Tiers / Clients / Gérer les organisations de type client
1. Saisir une commande client au nom du brokeur,
2. Dans la ligne de commande du bien, positionner "Non couvert.validé" dans "Statut SSC",
3. Livrer le bien,
4. Facturer le cas échéant.
Les statuts du ou des biens sont actualisés automatiquement :
o Statut Commercial : "Vendu à un Brooker",
o Statut Logistique : "Enlevé par le Brooker".
Remarque
Les statuts sont gérés automatiquement à condition que le client brokeur est typé "Broker",
consulter Classifier le client, Type de client.
Classifier un Bien
CLASSIFIER SUR UN BIEN
Biens et configurations / Gérer les biens
1. Rechercher le bien,
2. Onglet "Classification", modifier par <Crayon>,
3. Sur la ligne de la classification, sélectionner la Catégorie dans la liste déroulante de la
classification concernée,
4. Valider par
   ou <F2>.
Consulter Faire les demandes de relevés compteur par fax ou e-mail
Détruire ou Démanteler un bien
DETRUIRE UN BIEN OU DEMANTELER UN BIEN
La destruction a trois cas possibles :
§ La suppression :
Le bien est supprimée de la base de données. Il n'y a plus aucune trace du bien
dans la base de données,
§ La destruction démantelée,
§ La destruction.
Pour détruire un bien, il doit être obligatoirement en stock.
Bien en stock
Biens et Configurations / Gérer les biens
1. Rechercher le bien,
2. Cliquer sur <Poubelle>
 ,
3. Sélectionner le "Nouvel état des biens" :
§ Détruire (avec archivage en base),
§ Démanteler,
§ Supprimer définitivement de la base,
4. Indiquer la "Date de destruction",
5. Valider par
   ou <F2>.
Bien en parc client
1. Procéder à une reprise du bien en stock, consulter Gérer la reprise administrative
2. Effectuer la procédure ci-dessus "Bien en stock"
Attention
Si le bien détruit a une date antérieur à la date d'un lot de comptage d'inventaire contenant ce bien, un
message bloquant indique que la destruction n'est pas possible et qu'il faut saisir une date de destruction
ultérieure à ce lot.
SUPPRIMER UNE DESTRUCTION
Biens et Configurations / Gérer les biens
1. Rechercher le bien
§ En utilisant <F1>,
§ Mettre dans le statut juridique "Détruit.Démantelé" et/ou "Détruit.Physiquement"
2. Dans la fiche du bien, cliquer sur "Annuler la destruction" (en haut à droite)
3. Valider le message "Êtes-vous sûr de vouloir annuler la destruction du bien et le remettre en
stock ?"
4. Le bien est à nouveau exploitable.
Nota : Après le message de confirmation, un second message peut s'afficher si la destruction a été
faite dans une version antérieure à la V160
§ "L'historique des lieux n'est pas suffisant pour changer le précédent"
§ La modification n'est pas prise en compte.
Faire un échange technique
FAIRE UN ÉCHANGE TECHNIQUE D'UN BIEN
Deux cas existent : le bien initial fait partie ou non d'un dossier de financement. La procédure est
différente suivant le cas, consulter les procédures ci-dessous.
Le bien ne fait pas l'objet d'un dossier de financement
Un bien a été livré et facturé à un client. Ce bien pose problème et il y a une décision prise par le
responsable technique de procéder au remplacement définitif de celui-ci.
L'opération va consister :
1. Livrer au client le nouveau bien, à partir du stock,
2. Insérer le bien dans la SSC existante,
3. Reprendre la machine défectueuse pour la mettre en stock d'occasion.
Suivre les paragraphes ci-dessous pour plus d'explications.
Livraison de la nouvelle machine
Faire le chaînage :
1. Saisie de commande client,
§ Le prix de vente est à saisir sur le nouvel article matériel,
§ Ajouter une ligne négative avec l'article « Divers matériel » qui a comme prix de vente le
prix de vente initial,
L'objectif est d'avoir la fiche du bien correctement renseigné au niveau des prix de vente.
2. Livraison client,
Lors de la livraison, le BL est 0, et automatiquement il passe à l'état "Non facturable",
3. Facturation client (optionnelle)
Selon les procédures de gestion, la facture peut être faite. Son total hors taxe est à 0 euro.
Modification de la Solution de Service
Il s'agit de mettre dans la SSC, le nouveau bien.
A ce moment, l'ancien bien est toujours et doit rester dans la SSC (voir paragraphe suivant).
1. Appeler la SSC concernée,
2. Modifier les modules pour y ajouter les biens,
3. Modifier les RFC en conséquence.
Reprise de la machine défectueuse
1. Le bien est sous SSC,
2. Faire la reprise administrative du bien,
3. Le bien revient en stock,
4. Les RFC tiendront compte alors des compteurs de reprise. Selon le type de règle de
facturation, la SSC est soit facturable immédiatement, soit elle le sera au moment de la
prochaine régularisation. Ceci pour facturer les copies qui n'ont pas été facturées du bien repris.
Consulter Gérer la reprise administrative
Le bien est dans un dossier de financement
L'opération va consister :
1. Livrer au client le nouveau bien, à partir du stock,
2. Insérer le bien dans la SSC existante,
1. Insérer le bien dans le dossier de financement,
2. Reprendre la machine défectueuse pour la mettre en stock d'occasion.
Suivre les paragraphes ci-dessous pour plus d'explications.
Livraison de la nouvelle machine
Faire le chaînage :
1. Saisie de commande client,
§ Le client facturé doit être le financeur du dossier de financement,
§ Le prix de vente à saisir sur le nouvel article matériel doit être mis à 0 (zéro euro),
2. Livraison client,
Lors de la livraison, le BL est 0, et automatiquement il passe à l'état "Non facturable",
3. Facturation client (optionnelle)
Selon les procédures de gestion, la facture peut être faite. Son total hors taxe est à 0 euro.
Modification de la Solution de Service
Il s'agit de mettre dans la SSC, le nouveau bien.
A ce moment, l'ancien bien est toujours et doit rester dans la SSC (voir paragraphe suivant).
1. Appeler la SSC concernée,
2. Modifier les modules pour y ajouter les biens,
3. Modifier les RFC en conséquence.
Modification du dossier de financement
1. Appeler le dossier de financement,
2. Dans la section "Commandes financées", faire <Attacher>,
3. Sélectionner la commande du nouveau bien livré,
4. La commande est insérée dans le dossier de financement,
5. Dans la section "Lignes de commandes financées", les lignes de cette commande sont
insérées automatiquement (cliquer sur "Afficher/masquer les lignes avec montant à 0" pour les
faire apparaître),
6. <Modifier> ou <Crayon> (jaune),
7. Modifier le statut en "Aucun" (cliquer sur la croix bleue dans la zone à droite),
8. <Disquette> ou <F2>,
9. <Modifier> ou <Crayon> (jaune),
10. Modifier le statut en "Validé",
11. <Disquette> ou <F2>,
12. Dans la section "Biens, solutions de services et fins de financement", attacher la RFC sur le
bien.
Reprise de la machine défectueuse
1. Le bien est sous SSC,
2. Faire la reprise administrative du bien,
3. Le bien revient en stock,
4. Les RFC tiendront compte alors des compteurs de reprise. Selon le type de règle de
facturation, la SSC est soit facturable immédiatement, soit elle le sera au moment de la
prochaine régularisation. Ceci pour facturer les copies qui n'ont pas été facturées du bien repris.
Consulter Gérer la reprise administrative
Gérer les constituants d'un bien
GÉRER LES CONSTITUANTS D'UN BIEN
Les accessoires sont des biens sérialisés et possède une fiche avec des caractéristiques. Ils sont
rattachés au bien maître par la relation maître-accessoire.
Les constituants sont des articles livrés à un client pour un bien. L'article livré devient un constituant
et la relation avec le bien maître est visible dans la fiche du bien maître (et d'autres écran comme
les DIT,...).
Pour qu'un article soit géré comme constituant, les caractéristiques sont :
o Article non gérés comme bien mais suivi en stock (type composant),
o L'activité, famille, sous-famille de l'article doit être paramétrée dans la table de décision s'y
rapportant.
Afficher les articles constituants d'un bien
Biens et Configurations / Gérer les biens
1. Rechercher le bien,
2. Onglet "Composition",
3. Les composants s'affichent (code article vendu en gras) dans l'arbre des Accessoires/
Composants,
4. Répéter l'opération autant de fois que nécessaire,
5. Valider par
   ou <F2>.
Constituants d'un bien lors de la livraison
Lors du chaînage de la vente, les constituants sont générés automatiquement lors de la création du
bon de livraison.
Attacher les articles constituants à un bien
Biens et Configurations / Gérer les biens
1. Rechercher le bien,
2. Onglet "Composition",
3. <Modifier>
4. Dans "Carré de carrés", cliquer sur "Attacher un article constituant",
5. La liste des Activités-Familles-Sous-familles gérées comme constituants s'affiche,
6. Sélectionner la ligne concernée,
7. Cliquez sur "Voir les articles constituants",
8. Le tableau des articles composants s'affiche dans la partie basse de l'écran,
9. Sélectionner l'article,
10. Renseigner la quantité (Par défaut, la quantité est à 1),
11. Cliquez sur "Attacher",
12. Le composant s'affiche  (code article vendu en gras) dans l'arbre des Accessoires/Composants,
13. Répéter l'opération autant de fois que nécessaire,
14. Valider par
   ou <F2>.
Paramétrage
Paramètres application / Classifications, Listes et tables de décision / Gérer les tables de
décisions
Modifier la table de décision "TD_ARTICLES_CONSTITUANT".
Le paramétrage suivant permet de déterminer les activités, familles et sous-familles dont les articles
à gérer comme constituants :
Exemple :
Numéro Code activité Libelle activité Code famille Libelle famille Code sous famille Libelle sous famille rattachable
1 SI Matériel d'impres s ion ACC Acces s oires CONX Connexion Oui
2 SI Matériel d'impres s ion ACC Acces s oires ALIO Alimentation originaux Oui
3 SI Matériel d'impres s ion ACC Acces s oires SORP Sortie papier Oui
4 SI Matériel d'impres s ion ACC Acces s oires ALIP Alimentation papier Oui
5 SI Matériel d'impres s ion ACC Acces s oires FINI Finition (hors  finis s eurs ) Oui
6 SI Matériel d'impres s ion ACC Acces s oires FIPC Finis s eurs  Piqure à cheval Oui
7 SI Matériel d'impres s ion ACC Acces s oires FINS Finis s eurs  s imples Oui
8 SI Matériel d'impres s ion ACC Acces s oires TELC Télécopie Oui
9 SI Matériel d'impres s ion TRA Traceur ACTR Acces s oires  traceur Oui
10 SI Matériel d'impres s ion DUP Duplicopieur ACDU Acces s oires  duplicopieur Oui
11 SO Solutions IMP Impres s ion API A.P.I. Oui
12 SO Solutions IMP Impres s ion AUDI Audit Oui
13 SO Solutions IMP Impres s ion FLUD Flux d'impres s ion Oui
14 SO Solutions IMP Impres s ion GED Ges tion documentaire Oui
15 SO Solutions IMP Impres s ion GPAR Ges tion parc / utilis ateurs Oui
16 SO Solutions IMP Impres s ion M2M M2M Oui
Gérer les relations Maîtres/Accessoires
GÉRER LES RELATIONS MAÎTRES/ACCESSOIRES
Consulter Actualiser les biens des clients
Lister les biens sans relevé depuis le
LISTER LES BIENS SANS RELEVE DEPUIS LE
Deux modes sont possible : Faire des demandes de relevé compteur :
o Pour tous les biens pour lesquels les compteurs ne sont pas récents,
o Pour tous les biens dans le cadre de la simulation de facturation (pré-facturation).
Consulter Faire les demandes de relevés compteur par fax ou e-mail
Mettre à zéro les compteurs d'un bien d'occasion
METTRE À ZÉRO LES COMPTEURS D'UN BIEN D'OCCASION
Après livraison du bien le client :
§ Soit depuis le BL,
1. Actualiser les biens,
2. Clic sur « Détail » dans la colonne « Grandeur »,
3. Sélectionner « Installation chez le client »,
4. Saisir les positions compteurs (0 – zéro),
5. <Disquette>,
6. <Disquette>,
7. Retour au BL.
§ Soit depuis le menu « Biens et configuration »:
1. Saisir les relevés compteurs,
2. Mettre la date,
3. Rechercher le bien,
4. Cocher « Afficher aussi les biens sans SSC »,
5. Sélectionner « Installation chez le client »,
6. Saisir les positions compteurs (0 – zéro),
7. <Disquette>.
Mettre en immobilisation - Location pure - Mise à disposition
METTRE EN IMMOBILISATION - LOCATION PURE - MISE À
DISPOSITION
Cet état n'est pas un état statique de cycle de vie. C'est un état comptable résultant de l'historique
des
états par lequel est passé le bien. En d'autres termes, il est nécessaire de garder l'information
comme
quoi ce bien a transité au moins une fois par cet état.
Le bien entre en immobilisation dès qu'il est loué à un tiers et n'apparaît pas dans les inventaires.
Le bien quitte les immobilisations s'il est vendu (à un confrère, un client ou un broker) ou s'il est
détruit.
Saisie des commandes client
Saisir dans la commande ou sur les lignes de commande concernée :
1. Le mode de financement « Location pure »
2. Les prix de vente sont à zéro.
3. Cela induit un BL à 0 donc avec l'état « Non facturable », donc pas besoin de faire de facture.
Le numéro de facture d'origine est toujours conservé, ainsi que le nom du client facturé d'origine.
Pour faire disparaître ces anciennes valeurs, il faut alors faire une facture à 0 euros (à valider par le
service comptabilité).
Livraison client
Dès que la livraison est effectuée, si le statut Vue financement est à « Location pure »,
Les autres statuts deviennent :
o Vue commerciale : « Possédé par le prestataire et loué à un client »
o Vue logistique : « Installé en prêt client longue durée »
o Zone « Immobilisation-bien » à « OUI »
Inventaire
La zone « Immobilisation-Bien » peut être passée à NON par le contrôleur de gestion en utilisant
"Gérer les biens" et à condition d'avoir la bonne habilitation.
o Si cette zone est à « OUI » cela signifie :
Bien mis en prêt longue durée chez un client et enregistré dans les immobilisations
comptables du prestataire LE BIEN NE DOIT PAS ETRE PRESENT A L'INVENTAIRE,
o Si cette zone est à « NON » cela signifie :
Bien mis en prêt longue durée chez un client mais non enregistré dans les immobilisations
comptables du prestataire LE BIEN DOIT ETRE PRESENT A L'INVENTAIRE.
Reprise des biens
o Si la zone « Immobilisation-Bien » est à « OUI » cela signifie :
Bien mis en prêt longue durée chez un client et enregistré dans les immobilisations
comptables du prestataire. LE BIEN REPRIS EST RATTACHE A UNE AGENCE ET UN
DEPOT DE STOCKAGE.
§ Vue commerciale : « Possédé par le prestataire à destination du parc client et libre »
§ Vue financement : « Location pure »
§ Vue logistique : « Occasion en triage »
§ Vue SSC : « Non couvert »
o Si la zone « Immobilisation-Bien » est à « NON » cela signifie :
Bien mis en prêt longue durée chez un client mais non enregistré dans les immobilisations
comptable du prestataire. LE BIEN REPRIS EST RATTACHE A UNE AGENCE ET UN
DEPOT DE STOCKAGE.
§ Vue commerciale : « Possédé par le prestataire à destination du parc client et libre »
§ Vue financement : « Néant »
§ Vue logistique : « Occasion en triage »
§ Vue SSC : « Non couvert »
Vente d'un bien immobilisé
Livraison étant «Location pure », les statuts deviennent :
o Vue commerciale : « Vendu à un client » ou « Vendu à un Confrère » ou « Vendu à un Broker »
o Vue financement : « Auto Financé par……..»
o Vue logistique : « Installé chez le client »
o Zone « Immobilisation-bien » passe à « NON »
Destruction d'un bien immobilisé
Les statuts deviennent :
o Vue commerciale : « Détruit »
o Vue financement : « Détruit»
o Vue logistique : « Détruit »
Reprendre un bien non facturé
REPRENDRE UN BIEN NON FACTURÉ, SANS SSC
Un bien a été livré à un client et il n'a pas été facturé. Le bien n'est pas sous contrat.
Le bon de livraison est valorisé et est à l'état "Édité". Il est donc facturable.
Pour plusieurs raisons, le bien doit être repris.
Solution 1
S'il s'agit d'une livraison récente, et qu'aucun comptage ou inventaire n'a été fait, la solution la plus
simple est de supprimer le BL et la commande client.
Ventes / Livraisons client / Gérer les livraisons client
1. Rechercher le BL,
2. Supprimer par
 .
Le bien revient en stock ainsi que tous les articles de la livraison.
Ventes / Commandes client / Gérer les commandes client
1. Rechercher la commande,
2. Supprimer par
 .
Toute la chaîne de vente a été "nettoyée".
Il n'y a plus aucune traçabilité de la présence du bien à un moment donné, chez ce client.
Solution 2
Si la solution 1 n'est pas applicable ou si la procédure n'est acceptable, la solution 2 doit alors être
appliquée.
Il est nécessaire de faire la reprise logistique du bien, puis de corriger le bon de livraison.
Biens et configurations / Gérer la reprise logistique d'un bien
1. Gérer la reprise logistique d'un bien.
Consulter Gérer la reprise logistique
Ventes / Livraisons client / Gérer les livraisons client
1. Rechercher le BL,
2. Modifier les lignes valorisées, pour mettre le prix à 0.
Le bon de livraison passera automatiquement à 0 et à l'état "Non facturable".
Il n'est pas nécessaire de faire des factures à 0.
REPRENDRE UN NON FACTURÉ, AVEC SSC
Un bien a été livré à un client et il n'a pas été facturé. Le bien est sous contrat.
Pour plusieurs raisons, le bien doit être repris.
Biens et configurations / Gérer la reprise administrative d'un bien
1. Gérer la reprise administrative d'un bien (la reprise logistique se fera du coup en même temps).
Consulter Gérer la reprise administrative
Ventes / Livraisons client / Gérer les livraisons client
1. Rechercher le BL,
2. Modifier les lignes valorisées, pour mettre le prix à 0.
Le bon de livraison passera automatiquement à 0 et à l'état "Non facturable".
Il n'est pas nécessaire de faire des factures à 0.
Supprimer accessoire en état incohérent
SUPPRIMER UN ACCESSOIRE AYANT UN ÉTAT
DIFFÉRENT DU BIEN MAÎTRE
Il arrive que suite à des problèmes de suivi logistique, qu'un bien à dans sa composition des
accessoires qui sont dans un cycle de vie différent de celui du bien maître. Ce qui entraîne des
messages d'erreur dans certains traitements : création de SSC, Destruction d'un bien…
Biens et configurations / Gérer les biens
1. Appeler le bien maître
2. Modifier par
3. Onglet "Composition", section "Composants"
4. Double-cliquer pour aller directement sur la fiche de l'accessoire et vérifier son état
5. Revenir sur la fiche du bien maître par
6. Sélectionner l'accessoire sous le bien maître
7. Supprimer par

8. Sortir par
 .
Suivre des biens stockés pour un client
SUIVRE DES BIENS STOCKÉS POUR UN CLIENT
Suite à la vente de matériel chez un client déjà équipé par un concurrent, Il est possible d'être
amené à stocker des biens pour ceclient pendant une certaine période. Il faut pouvoir régulièrement
lister ces biens par date de restitution.
A réception physique de la machine :
1. Créer manuellement le bien
2. Modifier les statuts :
§ statut commercial sera : "Non possédé par le prestataire"
§ statut logistique sera "Emmagasiné"
§ statut juridique sera "Occasion"
§ statut SSC sera "Non Couvert"
3. Saisir la date de restitution sous la forme " AAAAMMJJ " dans l'identifiant client
4. Mettre le dépôt de stockage "Stock à restituer", créé au préalable
5. Aucune valeur de reprise.
Impact sur situation des stocks et l'inventaire :
Le dépôt sera à exclure des listes de dépôts à prendre en compte pour les situations de stock de
situation mensuelle ou les inventaires.
Consulter les biens :
Lister tout ou partie des biens à restituer en utilisant les filtres liés à cette extraction.
Suivre les Biens en atelier
SUIVRE LES BIENS EN ATELIER
Consulter Saisir une DIT et une fiche Atelier
Vérifier l'état de couverture d'un bien
VÉRIFIER L'ÉTAT DE COUVERTURE D'UN BIEN
Consulter Correction des couvertures (Suppression/Ajout/Modification)
Mettre un identifiant prestataire automatique
METTRE UN IDENTIFIANT PRESTATAIRE AUTOMATIQUE
Règle de numérotation
Consulter Paramètres, Gérer les numéros.
Identifiant de référence
Ce paramètre indique l'identifiant choisi pour identifier le bien.
Paramètres application / Paramètres application / Gérer les paramètres
o Paramètre "IDENTIFIANT_BIEN_IMMA"
o Valeur :
§ FABRICANT (valeur par défaut),
§ PRESTATAIRE,
§ CLIENT.
Si le paramètre est sur "Identifiant" avec présence d'une règle de numérotation : les biens ont alors
un numéro automatique dans l'identifiant prestataire. Mais en livraison fournisseur, l'identifiant
fabriquant reste obligatoire.
Si le paramètre est sur "Prestataire" avec présence d'une règle de numérotation : les biens ont
alors un numéro automatique dans l'identifiant prestataire. Mais en livraison fournisseur, l'identifiant
fabricant n'est pas obligatoire :
§ Si l'utilisateur l'identifiant fabricant est saisi, il est enregistré,
§ Si l'utilisateur ne saisit pas d'identifiant fabricant et qu'il coche la ligne (case à cocher à
l'extrême gauche), alors ARTIS.net attribue un numéro automatique à l'identifiant
prestataire et le reporte dans l'identifiant fabricant.
Remarque
Concernant cet identifiant automatique :
o Le numéro d'ordre de l'identifiant détermine en quelque sorte l'ancienneté des biens.
o Il est parfois plus facile de lire cet identifiant à 6 chiffres que l'identifiant fabricant comprenant
des lettres et des chiffres.
o Il est peut être plus facile de l'utiliser dans le QR Code de l'étiquette des biens (il ne contient
que des chiffres).
Paramètres
PARAMÈTRE
Données spécifiques
MCBS, delta copies
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "LIMIT_DELTA_COPIES"
