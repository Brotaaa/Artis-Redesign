# Gérer les configurations de grandeurs prédéfinies et leurs formules associées

> Categorie: Biens et Configurations | Pages 198-205

## Sous-rubriques
- Rechercher les accessoires non rattachés aux biens maîtres (p.198)
- Généralités et Théorie (p.198)
- Créer une Configuration de grandeurs prédéfinies (p.200)
- Particularités (p.202)
-   Changer la configuration d'un modèle (p.202)
-     Retirer un modèle d'une configuraiton (p.202)
-     Ajouter un modèle dans une configuration (p.203)
-   Identifier la source d'un relevé compteur (p.204)
-   Supprimer un relevé (p.205)
-   Paramètres (p.205)

1. Dans "Type de bien", sélectionner "Maître" ou "Accessoire" ou "Tous",
2. Valider par
  ou <F2>.
Rechercher les accessoires non rattachés aux biens maîtres
RECHERCHER LES ACCESSOIRES NON RATTACHÉS AUX
BIENS MAÎTRES
Biens et configurations / Consulter le parc des biens
1. Dans "Type de bien", sélectionner "Accessoire",
2. Valider par
  ou <F2>.
3. Faire un export sous Excel,
4. Sous Excel, filtrer les lignes vides sur la colonne "Est accessoire de...".
Consulter Actualiser les biens des clients
Gérer les configurations de grandeurs prédéfinies et leurs formules
associées
Généralités et Théorie
CONFIGURATION PRÉDÉFINIE DE GRANDEURS PRÉDÉFINIES
Le vocabulaire "Grandeur" est utilisé d'une manière globale, c'est à dire pour couvrir les besoins sur
plusieurs métiers. Dans le métier de l'impression la notion de "Grandeurs" correspond
majoritairement à la notion de "Compteurs".
Lors de la mise en place d'ARTIS.net, en général, toutes les configurations de grandeurs ont été
définies. Les configurations de grandeurs prédéfinies regroupent des grandeurs prédéfinies. Elles
permettent de :
· Respecter la  politique technico-commerciale de  l'entreprise  (par  exemple,  vous  voulez ne
facturer que les compteurs de pages et non pas les autres compteurs tels que les scans, les
e-mails, etc),
· Rendre homogène les configurations de grandeurs pour tous les biens d'un même modèle,
· Initialiser la configuration des grandeurs d'un nouveau modèle,
· Paramétrer des formules de calculs,  exemple :  la  grandeur "Compteur A4"  comptabilise les
pages A4 et 2 fois les pages A3.
Principe de gestion des grandeurs prédéfinies et du bien
Les grandeurs prédéfinies
Une grandeur prédéfinie permet de stocker un compteur d'unités. Une grandeur prédéfinie peut être
:
o "technique" : compteurs physiques du matériel,
o "calculées" : associé à une formule de calcul pour donner un nouveau compteur cumulé.
Ces grandeurs sont utilisées pour :
o Facturer une Solution de services, exemple : contrat de copies, contrat d'UT...
o Suivre la consommation d'un bien, exemple : nombre de scans effectués par le client,
o Ramener les volumes réalisés à un Équivalent en Pages A4 afin d'analyser la rentabilité du
matériel et la durée des vies des consommables (toners, pièces).
Les compteurs couramment gérés sont les compteurs de pages (compteur A4, A3, Totalisateur,
etc). Cependant il est aussi possible de paramétrer des compteurs de temps (UT), de M2, etc.
Formule sur les grandeurs calculées
La formule peut utiliser :
o Les constantes, exemple {0}, π {3.14},
o Des grandeurs techniques ou calculées, créées préalablement (les grandeurs sont encadrés
par le symbole $),
o Les opérateurs mathématiques sont :
§ L'addition : +,
§ La soustraction : -,
§ La multiplication : *,
§ La division : /.
o Les fonctions disponibles sont :
§ Math.abs( x ) : Valeur absolue de x
§ Math.round( x ) : Arrondi à la valeur la plus proche
§ Math.ceil( x ) : Arrondi supérieur de x
§ Math.floor( x ) : Arrondi inférieur de x
§ Math.min( x, y..., z ) : Valeur minimum de la liste
§ Math.max( x, y..., z ) : Valeur maximum de la liste
§ Math.pow( x, y ) : x ^ y (x puissance y)
§ Math.sqrt( x ) : Racine carrée de x
o Une expression conditionnelle simple :
if ( ... )
{ ... }
else
{ ... }
o Une expression conditionnelle à condition multiple :
if ( ... ) { ... }
else if ( ... ) { ... }
else if ( ... ) { ... }
...
else { ... }
o Les opérateurs booléens sont :
§ Et : &&,
§ Ou : ||,
§ Comparaison : =, <=, <, >, >=.
Exemple :
if ( $ML$ / $M2$ >5 &&  $ML$ / $M2$ <10) { Math.round((($ML$/5)-$M2$)) }
else if ( $ML$ / $M2$ >=10) { $M2$ }
else {0}
Biens et grandeurs
C'est à la livraison fournisseur que les grandeurs sont créées sur les biens : ARTIS.net effectue une
duplication de la configuration prédéfinie de grandeurs prédéfines en une configuration de grandeurs
"Client". La grandeur prédéfinie devient une grandeur client.
Pour des cas particuliers, il est alors possible d'intervenir sur cette configuration du bien, exemple :
créer des compteurs par utilisateurs. Le bien, de ce fait, ne suit plus la règle prédéfinie.
ARTIS préconise de ne jamais modifier une configuration de grandeurs prédéfinie pour les besoins
d'une configuration particulière pour  un client spécifique. Il est préférable d'en créer une nouvelle
Créer une Configuration de grandeurs prédéfinies
CRÉER UNE CONFIGURATION DE GRANDEURS PRÉDÉFINIES
Les procédures suivantes montrent à titre d'exemple deux créations de configuration.
Créer une configuration de grandeurs avec un compteur unique
Biens et Configurations / Gérer les configurations de grandeurs prédéfinies et leurs formules
associées
1. Faire <+>,
2. Saisir le nom et l'Abréviation,
3. <F2> ou <Disquette>,
4. Section "Grandeurs Prédéfinies", faire <+>,
5. Saisir le nom de la grandeur,
6. Sélectionner l'unité,
7. Sélectionner le type grandeur : "Technique",
8. Saisir l'abréviation de la grandeur,
9. <F2> ou <Disquette>.
Ventilation en page A4
1. Sélectionner la ligne de la grandeur,
2. Dans la section "Grandeurs Prédéfinies", faire <Mozaique>,
3. Cliquer sur "Saisie des ventilations en page A4",
4. Dans "Unité de ventilation", utiliser la liste déroulante pour ventiler sur N/B,
5. Sélectionner la ligne de la grandeur,
6. <F2> ou <Disquette>.
Créer une configuration de grandeurs avec compteurs techniques
et compteurs calculés
Biens et Configurations / Gérer les configurations de grandeurs prédéfinies et leurs formules
associées
1. Créer les compteurs techniques comme indiqué dans le paragraphe ci-dessus,
2. Créer le compteur calculé :
1. Section "Grandeurs Prédéfinies", faire <+>,
2. Saisir le nom de la grandeur,
3. Sélectionner l'unité,
4. Sélectionner le type grandeur : "Calculé",
5. Saisir l'abréviation de la grandeur,
6. <F2> ou <Disquette>.
Formule sur la grandeur calculée
1. Sélectionner la ligne de la grandeur,
2. Dans la section "Grandeurs Prédéfinies", faire <Mozaique>,
3. Cliquer sur "Formule de calcul",
4. Faire <+>,
5. Prendre en compte les grandeurs utiles à la formule :
1. Dans la section "Grandeurs de la formule", cliquer sur "Rattacher",
2. Sélectionner les lignes des compteurs à utiliser dans la formule de calcul,
3. <F2> ou <Disquette>
6. Mettre en place la formule de calcul :
1. Dans la section "Formule de calcul", se positionner dans l'espace d'insertion de la
formule,
2. Double cliquer sur l'Abrev du compteur,
3. Saisir le signe inclus dans la formule,
4. Double cliquer sur l'autre Abréviation de compteur,
5. La formule est du style : NBA4 + 2*NBA3
6. Dans la section "Grandeurs de la formule", "Valeur de test", saisir des quantités tests,
7. Dans la section "Vérification", cliquer sur "Vérifier la validité de la formule",
8. Vérifier le résultat,
7. <F2> ou <Disquette>.
Remarque
Il est possible de paramétrer des formules de calcul avec d'autres fonctions (condition par ex). Pour
cela, veuillez contacter un consultant ARTIS.
Ventilation en page A4
Qualifier la ventilation sur les grandeurs  comme indiqué dans le paragraphe ci-dessus.
Rendre obligatoire la saisie de relevé pour une grandeur
Il est possible de rendre obligatoire la saisie de relevé, consulter Rendre la saisie des relevés
compteur obligatoires.
Remarque
Lorsque que la saisie obligatoire est activée pour une grandeur, elle est reportée uniquement sur les
nouveaux biens créés. Les biens créés antérieurement ne sont pas impactés. L'utilisateur doit
intervenir dans ce cas sur les grandeurs de ces biens.
Particularités
Changer la configuration d'un modèle
Retirer un modèle d'une configuraiton
RETIRER UN MODÈLE D'UNE CONFIGURATION
A partir du menu Biens et Configurations
Biens et Configurations / Gérer les configurations de grandeurs prédéfinies
1. Section "Configuration prédéfinie de grandeurs prédéfinies",
2. Rechercher le configuration prédéfinie à traiter,
3. <Modifier> ou <Crayon>,
4. Sélectionner la ligne du modèle,
5. <Poubelle>,
6. Le modèle est retiré de la confirguration,
7. <X > ou <Esc>,
8. Ajouter la  configuration prédéfinie, consulter Ajouter un modèle dans une configuration.
A partir de la fiche de l'Article modèle
Articles / Articles / Gérer les articles
1. Rechercher l'article modèle à traiter,
2. Cliquer sur "Réf. fournisseur et/ou fabricant",
3. Section "Références", sélectionner une ligne,
4. Modifier par  <Crayon> du tableau,
5. Section "Références fabricant", dans la partie basse de l'écran,
6. Suivre le lien "Grandeurs",
7. <Modifier> ou <Crayon>,
8. Sélectionner la ligne du modèle,
9. <Poubelle>,
10. Le modèle est retiré de la confirguration,
11. <X > ou <Esc>,
12. Ajouter la  configuration prédéfinie, consulter Ajouter un modèle dans une configuration.
IMPORTANT :
Continuer la procédure par :
o Ajouter d'un Modèle dans une Configuration,
o Rectifier un ou des Matricules.
Lorsqu'un bien  n'a pas de  grandeur  rattachée,  aucune  facturation par  consommation ne
peut être faite.
Ajouter un modèle dans une configuration
AJOUT D'UN MODÈLE DANS UNE CONFIGURATION
A partir du menu Biens et Configurations
Biens et Configurations / Gérer les configurations de grandeurs prédéfinies
1. Section "Configuration prédéfinie de grandeurs prédéfinies",
2. Rechercher le configuration prédéfinie à traiter,
3. <Modifier> ou <Crayon>,
4. <+> du tableau,
5. Sélectionner le  modèle (utiliser le  filtre pour une recherche sur  la  référence ou  le  libellé  du
modèle),
6. <F2> ou <Disquette>,
7. Le modèle est ajouté à la confirguration,
8. <X > ou <Esc>.
Attention
L'ajout du modèle dans une configuration n'a pas d'effet sur les biens (matricules) liés à ce modèle.
Pour appliquer les modifications de grandeurs à un ou plusieurs biens, consulter Mettre à jour les
configurations de grandeurs.
A partir de la fiche del'Article modèle
Articles / Articles / Gérer les articles
1. Rechercher l'article modèle à traiter,
2. Cliquer sur "Réf. fournisseur et/ou fabricant",
3. Section "Références", sélectionner une ligne,
4. Modifier par  <Crayon> du tableau,
5. Section "Références fabricant", dans la partie basse de l'écran,
6. Suivre le lien "Grandeurs",
7. <Modifier> ou <Crayon>,
8. <+> du tableau,
9. Sélectionner le  modèle (utiliser le  filtre pour une recherche sur  la  référence ou  le  libellé  du
modèle),
10. <F2> ou <Disquette>,
11. Le modèle est ajouté à la confirguration,
12. <X > ou <Esc>.
Attention
L'ajout du modèle dans une configuration n'a pas d'effet sur les biens (matricules) liés à ce modèle.
Pour appliquer les modifications de grandeurs à un ou plusieurs biens, consulter Mettre à jour les
configurations de grandeurs.
Identifier la source d'un relevé compteur
IDENTIFIER LA SOURCE D'UN RELEVÉ COMPTEUR
Il est possible de stocker la source d'un relevé compteur, exemple :  les  compteurs saisis  par le
portail client ou par le PDA des techniciens sont identifiés.
Table de libellé
ARTIS est livré par défaut avec 5 sources. Le libellé est celui qui apparait sur les relevés compteurs.
Les sources permettent de détailler plus finement les Origines de relevés.
Consulter Ajouter une source valorisation.
Paramétrer la Table de décisions pour établir les liens avec les libellés
d'origine
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
Rechercher la Table de décision "TD_ORIGINE_SOURCE_RELEVE".
Numéro Code de la source Libellé de l'origine
1 RELEVE_PORTAIL Relevé client
2 RELEVE_MACHINE Relevé client
La liste des libellés d'origine (table système non modifiable) est :
Désignation
Achat neuf
Désignation
Achat occasion
Installation chez le client
Relevé client
Relevé prestataire
Estimation
Suspension
Résiliation
Reprise client
Fermeture SSC
Destruction
Vente broker
Vente confrère
Nouveau compteur
Pca par
Installation en prêt
Retour prêt
Exemple :
1. Un paramétrage a été mis en place pour identifier les compteurs saisis sur le Portail client en
RELEVE_PORTAIL.
2. En saisie de relevé compteur, la liste déroulante tient compte des correspondances, en
affichant la nouvelle source après l'origine, séparée d'un point (Relevé client.Relevé portail). Il
est toujours possible de ne saisir que ‘Relevé client'.
Remarque
Cas particulier : En saisie des CRIT, s'il s'agit d'un matériel avec plusieurs compteurs, l'opérateur
verra la combo avec les nouvelles correspondances établies.
Par contre, pour un matériel avec un seul compteur, l'origine du relevé sera enregistrée en ‘Relevé
prestataire'.
Supprimer un relevé
SUPPRIMER UN RELEVÉ
Date limite de suppression
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "SUPPRIMER_RELEVEFACTU"
Valeur : "2014-01-01 00:00:00.0" par défaut,
Date à partir de laquelle on ne peut plus supprimer les relevés facturables.
Paramètres
