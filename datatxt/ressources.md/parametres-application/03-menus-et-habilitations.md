# Menus et habilitations

> Categorie: Paramètres Application | Pages 786-792

## Sous-rubriques
- Généralités et Théorie (p.786)
- Gérer la présentation des menus (p.787)
- Gérer les profils (p.788)
- Gérer les comptes d'accès (p.791)
- Gérer les comptes d'accès par utilisateur du PORTAIL (p.792)
- Modifier le mot de passe (p.792)
- Export des menus (p.792)
- Import des menus (p.792)

Menus et habilitations
Généralités et Théorie
MENU, PROFIL, DROITS D'ACCÈS
La gestion des droits d'accès englobe les accessibilités aux entrées de menu et les habilitations.
Il y a une différence non négligeable entre les accessibilités et les habilitations. L'exemple suivant
en donne l'explication :
Les "Techniciens chefs de groupe" et les "Techniciens de secteur" sont rattachés au même menu
"BUREAU MOBILE". Or, les "Techniciens de secteur" ne doivent pas accéder à la requête
générique "Consulter les articles demandés en intervention", un menu spécifique au profil
"Technicien de secteur" doit être créé. Il sera nécessaire de décocher l'accessibilité de leur menu.
Dans le même exemple, si les "Techniciens de secteur" ne doivent pas modifier ou supprimer un
CRIT, ce même menu commun sera modifié au niveau de l'habilitation du profil "Technicien de
secteur" pour l'écran concerné.
Gérer la présentation des menus
GÉRER LA PRÉSENTATION DES MENUS
Dupliquer une présentation de menu
Paramètres application / Menu et habilitations / Gérer la présentation des menus
1. En entrant dans cet écran, la liste des différents types de menu s'affiche,
2. Cliquer sur "Nouveau modèle à partir du modèle sélectionné",
3. Sélectionner une présentation de menu,
4. Donner un nom,
5. <Disquette> ou <F2>.
Attention
Il ne faut absolument pas modifier le modèle de présentation "ModPresentation_admin" auquel est
rattaché le profil administrateur. Une fausse manipulation sur ce modèle peut bloquer l'accès au
profil administrateur : LE SEUL habilité à la gestion des droits d'accès. Pour toute modification de
ce modèle, faire appel à un consultant ARTIS.
Si un nouveau menu est créé, il ne sera utilisable que lorsque au moins un profil y sera rattaché.
Ajouter une option à une présentation de menu (pour un écran)
Paramètres application / Menu et habilitations / Gérer la présentation des menus
1. Sélectionner le menu,
2. <Modifier>,
3. Dans "Carré de carrés", prendre "Ajouter une item final",
4. Mettre le nom de l'option à mettre au menu dans "Libellé",
5. Mettre le nom technique de l'écran (cf ARTIS) dans "Composant cinématique",
6. Sélectionner le mode de l'écran (cf ARTIS) dans "Entrée",
7. Développer et sélectionner la branche où doit s'ajouter la nouvelle option,
8. Sélectionner la position : Avant, Après ou Dans" par rapport à la branche sélectionnée,
9. <Disquette> ou <F2>.
Ajouter une option avec des paramètres
Lorsque l'option nécessite des paramètres (cf ARTIS), faire les étapes suivantes entre les étapes 6
et 7 de la procédure précédente :
a) Section "Paramètres",
b) Sélectionner le paramètre dans le tableau,
c) <Crayon> en haut du tableau,
d) Sélectionner ou saisir.
Rattacher un profil à un menu
Paramètres application / Menu et habilitations / Gérer la présentation des menus
1. Sélectionner le menu,
2. <Modifier>,
3. Dans la section "Profils rattachés au modèle de présentation",
4. <Attacher> ou <Chaîne>,
5. Sélectionner le profil,
6. <Disquette> ou <F2>.
Gérer les profils
GÉRER LES PROFILS
Créer un profil à partir d'un profil existant
Paramètres application / Menu et habilitations / Gérer les profils
1. <+>,
2. Saisir le nom et la description du nouveau profil,
3. Sélectionner un profil existant dans "Duplication des habilitations du profil",
4. <Disquette> ou <F2>.
Exemple :
o Pour un profil très limité en accès : Reprendre le profil le moins permissif car sinon le risque de
devoir faire beaucoup de modifications pour supprimer les accès inutiles est important,
o Pour un profil très peu limité en accès : Reprenez le profil "admin" qui donne accès à tout
ARTIS. Il vous suffira ensuite de limiter les quelques accès inutiles,
o Pour les autres profils : Reprendre le profil le plus similaire.
Rattacher un profil à un menu
Consulter Rattacher un profil à un menu.
Paramétrer les accessibilités et les habilitations d'un profil
utilisateur
Accessibilités
Paramètres application / Menu et habilitations / Gérer les profils
1. Sélectionner le profil,
2. Cliquer sur "Droits d'accès" en haut à droite,
3. Sélectionner l'entrée de menu à paramétrer (par exemple, Services – Bureau mobile des
techniciens),
4. Les entrées accessibles du menu apparaissent,
5. Décocher la ligne qui ne doit plus être accessible pour l'ensemble des profils rattachés au
même menu.
Remarque
Cliquer sur "Accessible" pour tout cocher ou tout décocher.
Attention
Le fait de décocher une ligne supprime uniquement l'accès depuis l'entrée de menu. L'utilisateur du
profil verra l'entrée de menu rendue inaccessible (lien désactivé). Cependant, l'accès par d'autres
écrans n'est absolument pas supprimé.
Exemple, si "Consulter les stocks par article" est décoché, l'utilisateur ne pourra pas y accéder par
le menu "Bureau mobile". Par contre, par l'écran de saisie du CRIT, il pourra cliquer sur le lien
"Consulter les stocks".
Si vous chargez une autre entrée de menu sans avoir enregistré la précédente, un message d'alerte
vous permet de sauvegarder les accessibilités. Répondez Oui
Habilitations
Paramètres application / Menu et habilitations / Gérer les profils
1. Sélectionner le profil,
2. Cliquer sur "Droits d'accès" en haut à droite,
3. Sélectionner l'entrée de menu à paramétrer (par exemple, Services – Bureau mobile des
techniciens),
4. Les entrées accessibles du menu apparaissent,
5. Cliquer sur une entrée de menu afin d'obtenir l'écran associé, exemple "Ajouter des CRIT",
l'écran associé s'affiche.
6. Donner les habilitations en cochant ou non Visualiser, Ajouter, Modifier et/ou Supprimer.
Remarque
Si la Visualisation est décochée, les autres actions seront automatiquement décochées après
l'enregistrement car il n'est pas possible d'autoriser l'ajout, la modification ou la suppression à
un profil qui n'a pas l'autorisation de visualiser un écran.
La gestion des habilitations peuvent se faire à deux niveaux :
§ 1er niveau
En décochant les habilitations (visualiser / Ajouter / Modifier / Supprimer), l'opérateur
n'a plus accès à l'écran et donc aux autres écrans liés. Pour autant,  à partir d'un autre
écran, ils pourront encore y accéder.
§ 2ème niveau
En cliquant sur le lien ‘Gérer les écrans liés', vous obtenez tous les liens de l'écran
pour gérer les habilitations de chacun et ce, quel que soit le domaine. Les informations
de navigation rappellent l'écran principal d'où sont accessibles les liens.
7. <Disquette> ou  <F2>.
Habilitations particulières
Certaines habilitations doivent être accordées sur des écrans particuliers :
§ En bloquant l'écran d'impression (nom technique "ccImpression"), l'opérateur ne pourra
plus rien imprimer,
§ En bloquant l'écran "Barre de progression", l'opérateur ne pourra plus générer des PDF
utilisant celle-ci,
§ Pour donner l'habilitation de visualisation, appeler par exemple le lien "Gérer le
catalogue des dépôts" et cocher "Visualiser" sur l'écran "Barre de progression".
Contrôle des profils rattachés à un seul menu
Si des profils rattachés au même menu sont modifiés, toute modification apportée impactera les
accessibilités des profils concernés. Un message d'alerte prévient l'utilisateur. Si les modifications
ne doivent impacter qu'un seul profil, il faut l'affecter un menu spécifique.
Application des accessibilités et des habilitations
Lorsque des modifications ont été faites et que l'utilisateur change d'option dans la section du haut,
Artis.NET le détecte et demande à l'utilisateur si un enregistrement doit être fait.
Dans l'affirmative, les droits sont enregistrés en base, mais ils ne seront appliqués que lorsque
l'utilisateur cliquera sur <Disquette>.
Un clic sur <Disquette> permet d'effacer le cache (les droits sont chargés une fois en mémoire lors
de la connexion de l'utilisateur). Ils se rechargeront automatiquement. Les nouveaux droits
s'appliqueront.
Rattacher des utilisateurs au profil
Paramètres application / Menu et habilitations / Gérer les profils
1. Sélectionner le profil,
2. Cliquer sur "Rattacher les utilisateurs",
3. Sélectionner les utilisateurs.
Attention
1. Il est conseillé de faire un essai avec un seul collaborateur avant de les transférer tous (si des
erreurs de droits d'accès sont constatés, un seul collaborateur sera concerné),
2. Lorsqu'un utilisateur est rattaché, il est automatiquement retiré de son ancien profil,
3. Pour retirer un utilisateur d'un profil, il est conseillé d'utiliser le lien ‘Rattacher des utilisateurs' à
partir du profil final au lieu d'utiliser la poubelle de la barre d'outils en bas du tableau. Ceci évitera
d'avoir des utilisateurs sans profil,
4. Lorsque qu'un collaborateur est créé dans l'organisation interne, s'il n'existe qu'un profil, il est
automatiquement rattaché à ce profil. S'il existe plusieurs profils, l'administrateur devra rattacher le
nouveau collaborateur au profil voulu.
Droits spécifiques
o Si "Activer la boîte à outils" est décoché, les utilisateurs rattachés à ce profil ne pourront pas
cliquer sur l'icône boite à outils de la barre verticale.
o Si "Activer l'export des tableaux" est décoché, les utilisateurs rattachés à ce profil ne pourront
pas cliquer sur l'icône d'export dans les tableaux.
Dans les deux cas, les utilisateurs non autorisés auront un message.
Gestion des mots de passe
Si "Activer la gestion des mots de passe", les zones de paramétrage s'affichent :
o Durée de vie minimum d'un mot de passe, par exemple, 30 jours : le mot de passe ne pourra
pas être modifié avant 30 jours,
o Durée de vie maximum d'un mot de passe, par exemple, 90 jours : le mot de passe devra être
changé au bout de 90 jours,
o Nombre d'erreur de saisie avant blocage du mot de passe, par exemple 3 :  après 3 essais
infructueux, le mot de passe est bloqué définitivement. L'administrateur devra en générer un
autre, consulter Gérer les compte d'accès,
o Nombre de mot de passe à utiliser, par exemple, 3 : un ancien mot de passe ne pourra être
repris qu'après 2 autres mots de passes différents,
o Date de rappel avant l'expiration d'un mot de passe, par exemple 7 : un message indiquera que
le message expire 7 jours avant l'échéance.
o Règles de validation :
§ Sans règle de validation
Le mot de passe doit contenir au moins 2 caractères et ne doit pas contenir le login,
§ Sécurité basse
Le mot de passe doit contenir des lettres et des chiffres et le symbole underscore. Il
doit y avoir un minimum de 4 caractères au total,
§ Sécurité moyenne
Le mot de passe doit commencer par une lettre, peut contenir des lettres et des
chiffres et le symbole underscore. Il doit y avoir un minimum de 6 caractères au total,
§ Sécurité haute
Le mot de passe nécessite au moins deux lettres minuscules, deux lettres
majuscules, deux chiffres et deux caractères spéciaux. Il doit y avoir un minimum de 8
caractères au total (les espaces ne sont pas admis).
Gérer les comptes d'accès
GÉRER LES COMPTES D'ACCÈS
Lors de la création du collaborateur dans l'organisation interne :
o Si un profil a été sélectionné dans sa fiche, le compte d'accès et le mot de passe sont
automatiquement créés avec le matricule saisi,
o Si aucun profil n'a été sélectionné dans sa fiche, le compte d'accès n'existe pas et devra être
créé manuellement.
Créer un compte d'accès
Paramètres application / Menu et habilitations / Gérer les compte d'accès
1. <+>,
2. Donner le compte d'accès (login ou matricule de la fiche du collaborateur),
3. Saisir le mot de passe (ne doit pas contenir le login),
4. Sélectionner le collaborateur,
5. Sélectionner le profil,
6. <Disquette> ou <F2>.
Modifier un mot de passe
Le collaborateur peut lui-même modifier son mot de passe, consulter Modifier le mot de passe.
Donner un nouveau mot de passe à un collaborateur
Ce lien ne doit être accessible qu'au profil "admin".
Modification du mot de passe de façon automatique
Paramètres application / Menu et habilitations / Gérer les compte d'accès
1. Sélectionner le compte d'accès,
2. <Modifier> ou <Crayon>,
3. Cliquer sur "Générer un nouveau mot de passe",
4. Le nouveau mot de passe est généré,
5. Cocher "Envoi par mail",
6. <Disquette> ou <F2>.
Si le collaborateur n'a pas de courriel, un message vous alerte. Dans ce cas, compléter la fiche du
collaborateur.
Modification du mot de passe de façon manuelle
Paramètres application / Menu et habilitations / Gérer les compte d'accès
1. Sélectionner le compte d'accès,
2. <Modifier> ou <Crayon>,
3. Saisir le nouveau mot de passe,
4. Le nouveau mot de passe est généré,
5. Cocher "Envoi par mail",
6. <Disquette> ou <F2>.
Si le collaborateur n'a pas de courriel, un message vous alerte. Dans ce cas, compléter la fiche du
collaborateur.
Gérer les comptes d'accès par utilisateur du PORTAIL
Modifier le mot de passe
MODIFIER LE MOT DE PASSE
Paramètres application / Menu et habilitations / Modification du mot de passe
1. Donner l'ancien mot de passe,
2. Saisir et confirmer le nouveau mot de passe,
3. <Disquette> ou <F2>.
Export des menus
EXPORT DES MENUS
Réservé à ARTIS.
Import des menus
IMPORT DES MENUS
Réservé à ARTIS.
