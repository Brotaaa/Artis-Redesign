# Classifications, listes et tables de décision

> Categorie: Paramètres Application | Pages 776-783

## Sous-rubriques
- Paramètres Application (p.776)
- Gérer les Classifications (p.776)
- Lister les classifications (p.777)
- Gérer les listes (p.778)
- Gérer les tables de décision (p.779)
-   Généralités et Théorie (p.779)
-     Critère dans les tables de décision (p.779)
-   Paramètres (p.779)
- Gérer les tables de libellés ARTIS (p.780)
-   Particularités (p.780)
-     Ajouter une fonction (p.781)
-     Ajouter une forme juridique (p.781)
-     Ajouter une marque (p.781)
-     Ajouter un pays (p.782)
-     Ajouter une source valorisation (p.782)
-     Ajouter une unité de service (p.782)
- Gérer les identifiants d'organisation (p.783)
- Import/Export des table de décision (p.783)

Paramètres Application
Classifications, listes et tables de décision
Gérer les Classifications
GÉRER LES CLASSIFICATIONS
Objectif
Une classification est une structure de classement, éventuellement hiérarchisée, destinée à faciliter
la recherche. Cela peut être par exemple, une répartition géographique des clients (Rennes, Lorient,
Brest,…) ou de gérer des alertes.
Les  classifications  sont  établies  à  des  fins  statistiques  principalement et  servent aussi,  pour
certaines, de liens entre les tables et certaines fonctionnalités. Elles  peuvent être obligatoires en
base, ou être rendues obligatoires par choix.
Classifications obligatoires :
o Articles,
o Comptes comptables.
Classifications non obligatoires :
o Types de clients,
o Types de relevés compteurs.
Les classifications peuvent être :
o Prédéfinies et pré-renseignées par ARTIS et obligatoires en saisie,
o Prédéfinies par ARTIS et devant être renseignées par l'administrateur du logiciel et  obligatoire
en saisie,
o Définies par l'administrateur du logiciel et obligatoire en saisie,
o Définies par l'administrateur du logiciel et non obligatoire en saisie.
Remarque
Après modification, si la modification ne semble pas prise en compte, il faut alors vider le cache
concerné sur le serveur d'application concerné (contacter ARTIS pour plus d'information).
Au fil des versions d'ARTIS.net, de nouvelles classifications entraînent de nouvelles possibilités.
Créer une classification
Paramètres application / Classification, listes et tables de décision / Gérer les classifications
1. <+>,
2. Section "Classification"
1. "Id technique", rechercher l'identifiant dans la liste, utiliser <Loupe>, exemple
"ID_CLASSIF_BIEN_PLANNING",
L'identifiant technique n'est pas systématique. Sa présence est requise lorsque la
classification a un impact sur une fonctionnalité,
2. Saisir le nom, exemple "Biens VIP",
3. Saisir l'abréviation, exemple "B_VIP",
3. Section "Classe classifiable"
1. Champs "Domaine", rechercher le domaine dans la liste déroulante, pour cette
exemple "biens",
2. Champs "Classe", rechercher la classe dans la liste, utiliser <Loupe>, pour cette
exemple "com.artis.business.biens.Bien",
4. <F2> ou <Disquette>.
Remarque
Les champs "Domaine" et "Classe" revêtent une grande importance, car ils déterminent ce sur quoi
porte la classification, et du même coup l'écran dans lequel elle va s'afficher.
Si un doute subsiste dans le choix des informations à saisir, prendre pour exemple une
classification déjà existante, utilisée et qui fonctionne correctement, et reproduire la saisie.
Dans la document en ligne, il est indiqué, suivant le paramétrage à mettre en place, les valeurs à
saisir (y compris les identifiants techniques si nécessaire).
Création des catégories dans la classification
1. Rechercher la classification avec son nom,
2. Cliquer sur le même nom se trouvant sous le titre de la section "Catégorie",
3. <+>,
4. Saisir le Nom et l'Abréviation (exemple  "Bien VIP" / "VIP", "Adresse conso spécifique" /
"ADRSPE"),
5. Saisir l'identifiant technique,
L'identifiant technique n'est pas systématique. Sa présence est requise lorsque la
classification a un impact sur une fonctionnalité,
6. <F2> ou <Disquette>.
Le principe est le même pour la modification et la suppression. Lors de la suppression, un contrôle
est effectué.
Remarque
Dans la document en ligne, il est indiqué, suivant le paramétrage à mettre en place, les valeurs à
saisir (y compris les identifiants techniques si nécessaire).
Lister les classifications
LISTER LES CLASSIFICATIONS
Dans les critères "Code classification", il est nécessaire de saisir les abréviations des
classifications, voir Gérer les Classifications .
Position Position
lettrée Label de la colonne Format Commentaire
1 A Code1  Texte
2 B Nom1  Texte
3 C Code2  Texte
4 D Nom2  Texte
5 E Code3  Texte
6 F Nom3  Texte
7 G Id3  Texte
8 H Id2  Texte
9 I Id1  Texte
10 J CodeClass1  Texte
11 K NomClassif1  Texte
12 L CodeClass2  Texte
13 M NomClassif2  Texte
14 N NomClassif3  Texte
15 O CodeClass3  Texte
16 P Id1SuitId  Texte
17 Q Id1précèdeId  Texte
18 R Id2SuitId  Texte
19 S Id2PrécèdeId  Texte
20 T Id3SuitId  Texte
21 U Id3PrécèdeId  Texte
22 V TypeClassif1  Texte
23 W TypeClassif2  Texte
24 X TypeClassif3  Texte
Gérer les listes
GÉRER UNE LISTE
Différents menus permettent de sélectionner des éléments pour édition ou traitement de données.
Ces listes se retrouvent à différents menus dans ARTIS.
o Article vendu,
o Règle de facturation prédéfinie,
o Article de stock,
o Dépôt de stockage,
o Solution de services prédéfinie,
o Règle de facturation prédéfinie,
o Marque,
o Module de services prédéfini.
Paramètres application / Classification, listes et tables de décision / Gérer les listes
Exemple :
1. <+>
2. Nom de la liste : "REGLES FACT PREDEF CONNEX",
3. Domaine : solutionsdeservice,
4. Classe : RegleFactuPredef,
5. Organisation interne :
§ Une liste portant sur des informations propres à une organisation interne doit être que
pour celle-ci (une seule organisation interne de cochée).
§ Une liste portant sur des informations communes à toutes les organisations internes
sont multi-organisations internes.Enregistrez la liste,
6. <Modifier>,
7. <Disquette> ou <F2>,
8. Cliquez sur le nom de la liste créée "REGLES FACT PREDEF CONNEX",
9. Cliquer sur Rattacher élément,
10. Cocher les règles de facturation de la connectique,
11. <Disquette> ou <F2>.
Gérer les tables de décision
Généralités et Théorie
Critère dans les tables de décision
CRITÈRE DANS LES TABLES DE DÉCISION
Pour chaque critère, la valeur « * » permet d'indiquer que le critère n'est pas pris en compte dans la
ligne (donc la valeur source n'est pas prise en compte).
Pour chaque critère, la syntaxe « texte.* » (où texte correspond à une suite de caractère) permet
d'indiquer que la valeur doit commencer par ce texte.
Pour chaque critère, la syntaxe « (.*)texte » (où texte correspond à une suite de caractère) permet
d'indiquer que la valeur doit terminer par ce texte.
Pour chaque critère, la syntaxe « valeur1|valeur2 » permet d'indiquer que le critère peut l'une des
deux valeurs pour cette même ligne.
Pour chaque critère, si la syntaxe doit contenir un caractère non chiffré ou non lettré, il convient de
mettre un anti-slash, exemple : « \( », « \( », « \+ ». une SSP ayant un code "SSPFULL(mnt)" doit
être écrit « SSPFULL\(mnt\) »
L'ordre des lignes dans la table a une importance. En partant de la première ligne, dès que tous les
critères de la ligne sont vérifiés, la valeur résultante (colonne de droite) est alors sélectionné. La
lecture des lignes est stoppée. Le traitement « quitte » la table de décision.
Remarque
Après modification, si la modification ne semble pas prise en compte, il faut alors vider le cache
concerné sur le serveur d'application concerné (contacter ARTIS pour plus d'information).
Paramètres
PARAMÉTRAGE
Table de décision
...CALENDRIER_EXCLUSION_COLLECTE_COMPTEUR
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
Rechercher la Table de décision "CALENDRIER_EX CLUSION_COLLECTE_COMPTEUR".
...en cours...
Pour la gestion d'une table de décision, voir Critère dans les tables de décision
...CALENDRIER_GENERIQUE_COLLECTE_COMPTEUR
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
Rechercher la Table de décision "CALENDRIER_GENERIQUE_COLLECTE_COMPTEUR".
...en cours...
Pour la gestion d'une table de décision, voir Critère dans les tables de décision
...CALENDRIER_PARTICULIER_COLLECTE_COMPTEUR
Paramètres application / Classifications, listes et tables de décision / Gérer les tables de décision
Rechercher la Table de décision "ALENDRIER_PARTICULIER_COLLECTE_COMPTEUR".
...en cours...
Pour la gestion d'une table de décision, voir Critère dans les tables de décision
Gérer les tables de libellés ARTIS
GÉRER LES TABLES DE LIBELLÉ
Remarque
Après modification, si la modification ne semble pas prise en compte, il faut alors vider le cache
concerné sur le serveur d'application concerné (contacter ARTIS pour plus d'information).
Particularités
Ajouter une fonction
AJOUTER UNE FONCTION
Paramètres applications / Classifications, listes et tables de décision / Gérer les tables de libellés
ARTIS
1. Dans la case filtre, mettre "fonction" suivi de <Entrée>
2. Cliquer sur "Fonction"
3. <Loupe>
4. <+>
5. Saisir le code et le nom
6. <Disquette>
Ajouter une forme juridique
AJOUTER UNE FORME JURIDIQUE
Paramètres applications / Classifications, listes et tables de décision / Gérer les tables de libellés
ARTIS
Cette option ne permet que de visualiser les formes juridiques existantes.
Pour en créer, suivre la procédure ci-dessous.
Tiers / Clients / Gérer les organisations de type client
1. Cliquer sur "Forme juridique",
2. <+>,
3. Saisir l'abréviation, le nom et le pays (ne rien mettre dans "Type de propriété légale"),
4. <Disquette>
5. <X >
Ajouter une marque
AJOUTER UNE MARQUE
Paramètres applications / Classifications, listes et tables de décision / Gérer les tables de libellés
ARTIS
1. Dans la case filtre, mettre "marque" suivi de <Entrée>
2. Cliquer sur "Marque"
3. <Loupe>
4. <+>
5. Saisir le code et le nom
6. <Disquette>
Paramètres
Marque
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "MARQUE_SOCIETE"
Valeur : Marque de la société.
Ajouter un pays
AJOUTER UN PAYS
Paramètres applications / Classifications, listes et tables de décision / Gérer les tables de libellés
ARTIS
1. Dans la case filtre, mettre "pays" suivi de <Entrée>
2. Cliquer sur "Pays"
3. <Loupe>
4. <+>
5. Saisir le code et le nom
6. <Disquette>
Contacter ARTIS afin qu'un régime fiscal soit attribué au pays créé.
En attendant, cette mise à jour, dans la fiche fournisseur, mettre le bon régime fiscal.

Ajouter une source valorisation
AJOUTER UNE SOURCE VALORISATION
Paramètres applications / Classifications, listes et tables de décision / Gérer les tables de libellés
ARTIS
1. Cliquer sur "Source valorisation",
2. <+>,
3. Saisir le code, le libellé,
4. <Disquette>
5. <X >
Ajouter une unité de service
AJOUTER UNE UNITÉ DE SERVICE
Paramètres applications / Classifications, listes et tables de décision / Gérer les tables de libellés
ARTIS
1. Dans la case filtre, mettre "marque" suivi de <Entrée>
2. Cliquer sur "com.artis.business.articles.UniteServ"
3. <Loupe>
4. <+>
5. Saisir l'abréviation et le nom
6. <Disquette>
ou
1. Sélectionner l'unité
2. <Crayon>
3. Modifier
4. <Disquette>
Gérer les identifiants d'organisation
GÉRER LES IDENTIFIANTS D'ORGANISATION
Paramètres application / Classifications, listes et tables de décision / Gérer les identifiants
1. Sélectionner la ligne,
2. Modifier/Editer,
3. Le cas échéant, modifier le libellé,
4. Cocher la case "Obligatoire",
5. <Disquette>.
Il est possible de créer des nouveaux identifiants.
Remarque
Cependant, les libellés des identifiants suivants ne le sont pas (utilisés dans le fonctionnel
d'ARTIS.net) :
§ Code ancien
§ Autre Code
§ TVA INTRACOMMUNAUTAIRE
§ SIRET
§ CAPITAL
§ NAF
§ RCS
§ SIREN EUROPEEN
§ Identifiant Créancier SEPA
Import/Export des table de décision
IMPORT/EXPORT DES TABLE DE DÉCISION
