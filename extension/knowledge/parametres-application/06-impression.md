# Impression

> Categorie: Paramètres Application | Pages 804-807

## Sous-rubriques
- Généralités et Théorie (p.804)
- Gérer les formats de sortie (p.805)
- Gérer les formats d'impression (p.806)
- Gérer les types d'imprimantes (p.806)
- Gérer les types de système d'exploitation (p.806)
- Gérer les commandes Shell (p.807)
- Gérer les imprimantes (p.807)
- Gérer les imprimantes par modèle d'impression (p.807)

Réservé à ARTIS.
Impression
Généralités et Théorie
GESTION DES IMPRESSIONS
Les impressions, dans l'environnement Linux ou Windows, se font sous trois principaux formats de
sortie :
o PDF
o Excel
o Direct
o ...
Format PDF
Le format PDF est celui qui permet d'imprimer, via un "programme d'impression" avec l'extension
X SL. Ce dernier est élaboré avec un outils externe à ARTIS.net, fonctionnant sous environnement
Windows. A chaque document imprimé depuis ARTIS.net, correspond un programme X SL.
PDF et Imprimante
Trois situations sont possibles :
1. Lorsque une imprimante est créée et associée à un document, l'impression est directement fait
sur cette imprimante.
2. Lorsque plusieurs imprimantes sont associées à un document, ARTIS.net va demander à
l'utilisateur de faire un choix avant d'envoyer l'impression sur celle-ci.
3. Lorsque aucune imprimante n'est paramétrée pour un document, ARTIS.net ouvre
automatiquement le document PDF sur le poste de l'utilisateur. Ce-dernier imprime le document
ouvert sur une imprimante de son choix (imprimante paramétrée dans l'environnement Windows
du poste de l'utilisateur).
Les situations 1 et 2 correspondent à une mise en place de paramétrage entre le modèle
d'impression et les imprimantes par modèle d'impression, consulter le diagramme ci-après.
Format Excel
Lorsque l'utilisateur demande un export (au format X LS, X SLX ), un fichier est généré. Ce dernier,
selon l'environnement du poste de l'utilisateur, s'ouvre automatiquement dans l'Excel du poste, ou
est alors télécharger dans ses documents.
Direct
Ce format (EPL, ZPL) correspond à des impressions particulières comme l'impression d'étiquettes à
code barres ou à QrCode.
Présentation générale du paramétrage
Gérer les formats de sortie
GÉRER LES FORMATS DE SORTIE
Réservé à ARTIS.
Ce sont les formats de fichier en sortie depuis ARTIS.NET. Les formats de sortie sont une
énumération fixe dans le modèle de données. Seuls les libellés sont modifiables.
Code Libellé Commentaires
ESCP2 Escp2 Format pour imprimantes matricielles
PDF Pdf Format pour imprimantes laser
XLS Xls Excel
RTF Rtf
ZPL2 Zpl2 Format pour imprimantes codes barres
EPL2 Epl2 Format pour imprimantes codes barres
TXT Txt
FUSION Fusion Format pour fichier de fusion Word
Gérer les formats d'impression
GÉRER LES FORMATS D'IMPRESSION
En cours de création.
Gérer les types d'imprimantes
GÉRER LES TYPES D'IMPRIMANTES
Réservé à ARTIS.
Le type d'imprimante permet d'associer une imprimante avec un format de sortie. Cette table définit
ce que l'imprimante est capable de faire. Le nom de l'imprimante ne figure pas dans cette liste. Cela
se fera avec l'option Gérer les imprimantes.
Code Libellé
PDF Laser
BARRES_Z Code barres ZPL2
BARRES_E Code barres EPL2
MATR Matricielle
Gérer les types de système d'exploitation
GÉRER LES TYPES DE SYSTÈME D'EXPLOITATION
Réservé à ARTIS.
Ce sont les types d'O.S (Operating System ou Système d'exploitation). Les type d'OS sont une
énumération fixe dans le modèle de données. Seuls les libellés sont modifiables.
Code OS Libellé OS
Linux Linux
Windows Windows
Gérer les commandes Shell
GÉRER LES COMMANDES SHELL
Réservé à ARTIS.
Il s'agit de saisir la commande qui permet au système d'exploitation d'imprimer à destination d'une
imprimante :
o IP de l'imprimante : lien qui permet d'insérer dans la zone la chaîne de caractère « %IP%
» (évite de saisir).
o Nom de l'imprimante : lien qui permet d'insérer dans la zone la chaîne de caractère « %NOM%
» (évite de saisir).
Type d'OS Libellé Commande SHELL
Windows Windows print /D:\\%IP%\%NOM%
Linux Linux lp -d %NOM%
Gérer les imprimantes
GÉRER LES IMPRIMANTES
La modification et la création sont réservées à ARTIS.
Liste des imprimantes physiques sur le réseau :
o Nom : C'est le nom physique de l'imprimante dans le réseau,
o Description : information sur l'imprimante,
o Type d'imprimante : permet d'associer à l'imprimante en cours un format de sortie,
o Commandes Shell rattachée à l'imprimante : définit la commande à exécuter pour imprimer sur
cette imprimante,
o Organisations rattachées à l'imprimante : Cette imprimante est accessible pour les
organisations insérées dans le tableau,
Remarque
Lorsqu'il n'y a pas de commande Shell, le document de type PDF est attendu à l'aperçu (le
document sera ouvert à l'utilisateur, ce dernier utilisera l'option "imprimer" du menu de
AcrobatReader).
Gérer les imprimantes par modèle d'impression
GÉRER LES IMPRIMANTES PAR MODÈLE D'IMPRESSION
