# Clients

> Categorie: Tiers | Pages 563-591

## Sous-rubriques
- Gérer les organisations de type client (p.563)
-   Créer un client (p.563)
-     Enregistrer les coordonnées bancaires (p.565)
-     Créer, modifier un interlocuteur (p.566)
-     Créer, modifier les identifiants (p.566)
-     Créer, modifier un site (p.567)
-   Modifier, supprimer un client (p.568)
-   Particularités (p.569)
-     Ajouter une nouvelle relation avec une organisation interne (p.569)
-     Appliquer des frais de factures (p.569)
-       Mise en place dans ARTIS.net (p.570)
-       Utilisation & impact des frais de facture (p.572)
-     Classifier le client pour un vendeur dans Suivi Commercial (p.573)
-     Classifier le client pour le Type de client (p.574)
-     Classifier le site pour la Demande de relevé compteurs (p.574)
-     Contrôle des données (p.575)
-     Gérer les Alertes, Blocage, Déblocage des clients (p.580)
-     Gérer les différentes adresses sur les factures (p.581)
-     Mettre une adresse privilégiée de livraison de consommable (p.583)
-     Mettre une numérotation automatique des sites (p.584)
-     Modifie, corriger un code client et/ou comptable (p.585)
-     Rechercher les coordonnées GPS (p.585)
-     Saisir les horaires d'ouverture d'un site ou d'un client (p.587)
-     Supprimer un interlocuteur (p.588)
- Gérer les organisations de type financeur (p.588)
- Gérer les organisations de type banque (p.589)
- Gérer les relations entre organisations (p.590)
- Lister les clients avec relations entre organisations (p.591)

o Les adresses privilégiées,
o Les informations comptables,
o Des identifiants,
o Le mode de règlement.
Unité organisationnelle
Une unité organisationnelle est une entité au sein d'une organisation qui ne possède pas
d'identification ou de désignation légale. Elle correspond à un service, un département, une entité
non physique (par ex: projet).
Une organisation peut avoir aucune ou plusieurs unités organisationnelles. Une unité
organisationnelle peut être composée d'éléments (eux-mêmes des unités organisationnelles).
Il est ainsi possible de définir une structure correspondant à la structure interne du client ou une vue
extérieure de l'organisation. Le rôle de l'unité organisationnelle peut correspondre au nom de cette
unité. Un choix parmi une liste de rôle peut également être fait.
L'utilité des unités organisationnelles est de "décrire" le fonctionnement ou la façon dont est
structuré le tiers. En pratique, elles sont surtout mises en place au sein des organisations internes,
pour définir des groupes de collaborateurs :
o Groupe de collaborateurs travaillant sur ARTIS.net ayant un même profil (différent des droits et
des habilitations),
o Groupe de collaborateurs vendeurs (utile dans la gestion des affaires),
o Etc...
Interlocuteur / Collaborateur
Dans chaque organisation des interlocuteurs peuvent être enregistrés. Dans le cas d'un
organisation interne, il ne s'agit pas d'interlocuteurs mais de collaborateurs. Pour chaque
interlocuteur, il est possible de renseigner plusieurs informations :
o Domaine ou fonction de l'interlocuteur
o Un usage, par exemple : Affaire,
o Une localisation, par exemple : Bureau,
o Une disponibilité, par exemple : Tous les jours,
o Des médias : téléphone, fax, Courriel, adresse postale,
o Son appartenance à un ou des sites,
o Son appartenance à une ou des unités organisationnelles,
o Ses missions (dans le cas de collaborateurs),
o Etc…
Clients
Gérer les organisations de type client
Créer un client
CRÉER UN CLIENT
Créer un client à partir d'une fiche d'un autre type
Il s'agit de créer un client à partir d'une fiche déjà existante, comme une fiche fournisseur,
organisation interne, fabricant, banque, transporteur, financeur (ou sous-traitant, commanditaire,
mainteneur).
Consulter Créer un tiers à partir d'un tiers.
Créer un client
Fiche client
Tiers / Clients / Gérer les organisations de type client
1. <+>,
Section "Informations principales"
2. Le code du client prendra un numéro issu de la règle de numérotation lors de la validation de la
fiche client,
3. "Raison Sociale" : Saisir la dénomination sociale du client,
4. "SIRET" et "Forme juridique" : Obligatoire en fonction d'un paramétrage, consulter Contrôle des
données,
Onglet "Fiche principale"
5. Saisir "Adresse 1" (obligatoire),
6. "Code postal" : Saisir le code postal puis  <Entrée>,
§ Si une liste se présente, de préférence, sélectionner dans la liste proposée la ville
(avec un code Insee dans la dernière colonne),
§ Si la ville recherchée n'est pas présente, faire <X >,
7. "Ville" :
§ La ville est complétée par la sélection précédente,
§ Ou rechercher la ville,
§ Ou saisir la ville sans faire <Entrée>. Dans ce cas, cette nouvelle association CP-Ville
sera enregistrée lors de la validation de la fiche client,
8. "Pays" : Vérifier ou compléter (obligatoire et utile pour déterminer le régime fical et la TVA),
9. Régime fiscal : Vérifier ou compléter (obligatoire et utile pour déterminer le régime fical et la
TVA),
10. <Disquette> ou <F2>,
Section "Relation entre organisation", si affiché
11. Sélectionner l'organisation interne qui gère le client,
Section "Classifications"
12. Compléter les classifications obligatoires, avec une croix rouge :
§ Soit en utilisant les listes déroulantes,
§ Soit en sélectionnant la ligne, puis "Classifier" dans l'entête de la section à droite,
13. Compléter les classifications non obligatoires, sans croix rouge :
§ Soit en utilisant les listes déroulantes,
§ Soit en sélectionnant la ligne, puis "Classifier" dans l'entête de la section à droite,
Section "Mode de règlement"
14. A modifier au besoin,
Section "Relation"
15. "Factures regroupées" : Cochée, ARTIS.net regroupe la génération de facture regroupera la
facturation sur une facture (facturation des livraison, facturation des SSC),
16. "Frais facturation" : Cochée, ARTIS.net ajoutera automatiquement les frais de facture sur les
factures générées  de SSC (facturation des livraison, facturation des SSC),
Section "Comptes comptables auxiliaires"
17. "Code compte auxiliaire", "Numéro compte auxiliaire" :
§ Soit à vérifier une fois la fiche client enregistrée (report automatique du code client),
consulter Préfixer les comptes auxiliaires,
§ Soit saisir les informations, si les données sont spécifiques,
Section "Secteur d'intervention"
18. Sélectionner un secteur dans la liste,
Section "Dépôts attachés à l'adresse de livraison"
19. Sélectionner un dépôt dans la liste (non obligatoire),
Section "Informations sur la filière"
20. Les champs sont renseigner automatiquement, à vérifier,
21. <Disquette> ou <F2>,
22. Un numéro est attribué automatiquement.
Interlocuteur, Identifiant, Site
1. Consulter Créer, modifier un interlocuteur,
2. Consulter Créer, modifier les identifiants,
3. Consulter Créer, modifier un site.
Enregistrer les coordonnées bancaires
ENREGISTRER LES COORDONNÉES BANCAIRES
Coordonnées bancaires
Tiers / Clients / Gérer les organisations de type client
1. Rechercher le client,
2. Faire <Mosaïque>,
3. Sélectionner "Coordonnées bancaires",
4. <Modifier> ou <Crayon>,
5. Section "Coordonnées bancaires de l'organisation cliente",
6. <+>,
7. Sélectionner le "Code BIC" dans la liste,
8. Saisir le "Code IBAN" et la "Domiciliation" (obligatoires), consulter Contrôle des données,
9. Cocher la case "Prélevé par défaut pour l'org...",
10. <Disquette> ou <F2>,
Information sur le Mandat (SEPA)
1. Cliquer sur "Mandats",
2. <Modifier> ou <Crayon>,
3. <+>,
4. Sélectionner l'organisation interne,
5. "Référence Unique de Mandat" : Compléter :
La référence doit être unique. Par souci de facilité, mettre le code du client suivi d'un
numéro d'ordre. Pour un deuxième mandat pour le client 01672608, mettre "01672608-02",
6. Mettre la date de signature du mandat,
7. Ne pas compléter la date de résiliation du mandat,
8. <Disquette> ou <F2>,
9. <X >.
Résilier un mandat
1. Rechercher le client,
2. Faire <Mosaïque>,
3. Sélectionner "Coordonnées bancaires",
4. Section "Coordonnées bancaires de l'organisation cliente",
5. Cliquer sur "Mandats",
6. <Modifier> ou <Crayon>,
7. Mettre la date de résiliation du mandat,
8. <Disquette> ou <F2>,
9. <X >.
Créer, modifier un interlocuteur
CRÉER, MODIFIER UN INTERLOCUTEUR
Tiers / Clients / Gérer les organisations de type client
1. Rechercher le client,
2. Onglet "Interlocuteurs",
3. <+>,
4. Section "Personne",
5. Sélectionner le Titre,
6. Saisir le nom, le prénom.
7. Les autres champs sont optionnels,
8. <Disquette> ou <F2>.
Créer, modifier les identifiants
CRÉER, MODIFIER LES IDENTIFIANTS
Tiers / Clients / Gérer les organisations de type client
1. Rechercher le client,
2. Onglet "Identifiants",
3. <Modifier> ou <Crayon>,
4. Compléter,
5. <Disquette> ou <F2>.
Information sur les identifiants présents
o Code reprise
Il s'agit d'une valeur correspondant à un identifiant du client dans un logiciel antérieur à
ARTIS.net.
o TVA Intracommunautaire
En général, elle est imprimée sur la facture adressée au client (selon le paramétrage
de l'imprimé).
o Identifiant Créancier SEPA
Ne pas compléter (utile uniquement pour l'organisation interne).
Créer, modifier un site
CRÉER, MODIFIER UN SITE
Tiers / Clients / Gérer les organisations de type client
1. Rechercher le client,
2. Cliquer sur "Sites" dans l'entête de la section,
3. <+>,
Section " Informations site"
4. "Code site" :
§ Soit laisser vide. Selon le paramétrage, le code sera complété lors de la validation,
consulter Mettre une numérotation automatique des sites,
§ Soit saisir les informations, si les données sont spécifiques,
5. Section "Adresse",
6. Saisir "Adresse 1" (obligatoire),
7. "Code postal" : Saisir le code postal puis  <Entrée>,
§ Si une liste se présente, de préférence, sélectionner dans la liste proposée la ville
(avec un code Insee dans la dernière colonne),
§ Si la ville recherchée n'est pas présente, faire <X >,
8. "Ville" :
9. La ville est complétée par la sélection précédente,
10. Ou rechercher la ville,
11. Ou saisir la ville sans faire <Entrée>. Dans ce cas, cette nouvelle association CP-Ville sera
enregistrée lors de la validation de la fiche client,
12. "Pays" : Vérifier ou compléter (obligatoire et utile pour déterminer le régime fical et la TVA),
13. Régime fiscal : Vérifier ou compléter (obligatoire et utile pour déterminer le régime fical et la
TVA),
Section "Classifications"
14. Compléter les classifications obligatoires, avec une croix rouge :
§ Soit en utilisant les listes déroulantes,
§ Soit en sélectionnant la ligne, puis "Classifier" dans l'entête de la section à droite,
15. Compléter les classifications non obligatoires, sans croix rouge :
§ Soit en utilisant les listes déroulantes, consulter Classifier le site pour la Demande de
relevé compteurs,
§ Soit en sélectionnant la ligne, puis "Classifier" dans l'entête de la section à droite,
16. Section "Secteur d'intervention"
17. Sélectionner un secteur dans la liste,
18. Section "Dépôts attachés à l'adresse de livraison"
19. Sélectionner un dépôt dans la liste (non obligatoire),
20. <Disquette> ou <F2>.
Modifier, supprimer un client
MODIFIER, SUPPRIMER UN CLIENT
Modifier un client
Tiers / Clients / Gérer les organisations de type Client
1. Rechercher le client,
2. Consulter Créer, modifier un interlocuteur,
3. Consulter Créer, modifier les identifiants,
4. Consulter Créer, modifier un site.
Supprimer un client dans sa totalité
Tiers / Clients / Gérer les organisations de type Client
La suppression des clients n'est pas possible dans ARTIS, mais un client peut devenir non actif.
1. Rechercher le client,
2. <Modifier> ou <Crayon>,
3. Décocher "Actif" en haut à droite de l'écran,
4. Dans toutes les lignes du tableau "Relation client", "Active" passe automatiquement en non
cochée,
5. <Disquette> ou <F2>,
6. Modifier tous les sites, pour mettre "Actif" non coché,
7. Modifier tous les interlocuteurs, pour mettre "Actif" non coché.
Particularités
Ajouter une nouvelle relation avec une organisation interne
AJOUTER UNE NOUVELLE RELATION AVEC UNE
ORGANISATION INTERNE
Tiers / Clients / Gérer les organisations de type Client
1. Rechercher le client,
2. Onglet "Client", section "Filières",
3. Dans le tableau, il y a une ligne pour chaque relation entre le client et une organisation interne,
4. <+>,
5. Compléter "Organisation interne",
6. Compléter les classifications obligatoires,
7. Vérifier le mode de règlement,
8. Compléter la section "Secteur d'intervention",
9. <Disquette>,
10. Vérifier la section "Comptes comptables auxiliaires",
Si nécessaire :
§ <Crayon>,
§ Compléter Code compte auxiliaire, Numéro compte auxiliaire, Intitulé compte auxiliaire,
§ <Disquette>,
11. <X >.
Appliquer des frais de factures
APPLIQUER DES FRAIS DE FACTURES
Ces frais portent aussi le nom de PRD, FTC, PFA, Frais de facture, Frais de facturation, Frais de
participation, Frais de tenue de compte.
Consulter Mise en place dans ARTIS.net,
Consulter Utilisation & impact des frais de facture.
Remarque
Les frais d'estimation ne sont pas les frais de facturation (ou frais de facture), consulter Appliquer
des frais d'estimation., Appliquer des frais d'expédition de consommable.
Mise en place dans ARTIS.net
MISE EN PLACE DANS ARTIS.NET
Le client subit-il des frais ?
Non
Dans la fiche client :
o Frais de facture = « Non »
o Regroupement de facture = « Oui »
Oui
Dans la fiche client :
o Frais de facture = « Oui »
o Regroupement de facture = « Non »
Si le client subit des frais Et veut être en regroupement
Dans la fiche client :
o Frais de facture = « Non »
o Regroupement de facture = « Oui »
Dans ce cas, il faut envisager de transformer les frais en une RFC à insérer dans les SSC (ajout
manuel de RFC de frais).
Remarque
Les Leaseurs, les organisations internes créées en tant que client n'ont pas les frais de facture.
Paramètre
Pré-cocher les frais de facturation
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "FRAIS_FACTURATION_CLIENT"
Valeur :
§ Coché : Pré-coche les frais de facturation (FTC) lors de la création d'un client,
§ Non coché : Rien
Article des frais de facturation
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_ART_FACTU"
Valeur : Code de l'article correspondant aux frais FTC (article de facturation).
Utilisation & impact des frais de facture
UTILISATION & IMPACT DES FRAIS DE FACTURE
Frais de facture par défaut
Pour un client, si dans la fiche client, la zone « Frais de facture » est mise à « Oui », alors le
montant par défaut des frais s'appliquent sur ses factures.
Le montant des frais par défaut est le montant du tarif public.
Les factures concernées
Les factures contenant au moins une ligne d'article sérialisé ne subissent pas les frais de facture
(facture de vente de matériel)
Toutes les factures issues d'une génération :
§ Génération lors de la facturation des SSC
§ Génération des factures d'intervention
· Ventes / Factures client / Générer les factures clients
· Option « Facturer les interventions »
§ Génération des factures liées à des livraisons
· Ventes / Factures client / Générer les factures clients
· Option « Facturer les interventions »
§ Création de factures dans la chaîne de vente (Commande, BL, Facture)
Lors de la création des factures directes, les frais ne sont pas mis. C'est à l'utilisateur de les
mettre.
Frais de valeur différente du tarif public
Si le client doit avoir un montant des frais différent de celui par défaut, il faut ajouter le code du
client dans le tarif correspondant :
Dans un premier temps, il faut créer le tarif correspondant à ce montant
1. Articles / Tarifs / Gérer les tarifs
2. <+>
3. Donner le code, le libellé, la période de validité et cocher "en vigueur"
4. Cocher "Vente particulier" et "Valorisation à prix net"
5. <Disquette>
6. Dans le carré de carrés, sélectionner "Superposition de tarif"
7. Dans le tableau "Ce tarif prend le pas sur", ajouter le tarif public de vente
(habituellement codifié "PUB")
8. <X >
9. Puis sélectionner "Conditions tarifaires"
10. Dans le tableau "Accordé par les organisations", il faut mettre les organisations
internes
 A chaque client à qui on veut appliquer ce montant particulier, il faut alors ajouter le code du client
dans les conditions tarifaires du tarif
1. Articles / Tarif / Gérer les tarifs
2. Afficher le tarif souhaité
3. Prendre l'option « Condition de ventes et Achats »
4. Ajouter le code du client dans le tableau « accordé aux », avec l'option à droite
« Rattacher ».
Remarque
Dans la version 159, le montant des frais doit être positionné par un intervenant ARTIS.
Classifier le client pour un vendeur dans Suivi Commercial
CLASSIFIER LE CLIENT POUR UN VENDEUR DANS SUIVI
COMMERCIAL
Client
Tiers / Clients / Gérer les organisations de type client
1. Rechercher le client,
2. <Modifier> ou <Crayon>,
Section "Classifications"
3. Sélectionner la ligne "SUIVI COMMERCIAL", puis compléter :
§ Soit en utilisant les listes déroulantes,
§ Soit en sélectionnant la ligne, puis "Classifier" dans l'entête de la section à droite,
4. <Disquette> ou <F2>.
Paramètres
Paramètres applications / Classifications, listes et tables de décision / Gérer les classifications
Consulter Créer une classification
Classification
Nom : "SUIVI COMMERCIAL"
Abréviation : "SUIVI_COM"
Identifiant technique : "SECTEUR_COM"
Domaine : "parties"
Classe : "com.artis.business.parties.ProfilClt"
Catégorie
Ajouter les catégories concernées.
Classifier le client pour le Type de client
TYPE DE CLIENT
Client
Tiers / Clients / Gérer les organisations de type client
1. Rechercher le client,
2. <Modifier> ou <Crayon>,
Section "Classifications"
3. Sélectionner la ligne "Type client", puis compléter :
§ Soit en utilisant les listes déroulantes,
§ Soit en sélectionnant la ligne, puis "Classifier" dans l'entête de la section à droite,
4. <Disquette> ou <F2>.
Paramètres
Type de client
Paramètres applications / Classifications, listes et tables de décision / Gérer les classifications
Consulter Créer une classification.
Classification
Nom : "Type client"
Abréviation : "TYPE_CLIENT"
Identifiant technique :
Domaine : "parties"
Classe : "com.artis.business.parties.ProfilClt"
Catégorie
Ensuite, ajouter la catégorie :
Identifiant technique : "BROKEUR"
Nom : Broker
Abrèv. : BR
Remarque
Les autres catégories peuvent être, selon les besoins :
§ Grand compte,
§ Compte géographique,
§ etc...
Classifier le site pour la Demande de relevé compteurs
CLASSIFIER LE SITE POUR LA DEMANDE DE RELEVÉ
COMPTEURS
Site du client
Le fait de positionner le  mode sur le  site  permet de reporter automatiquement ce  mode  sur  les
biens qui seront livrés sur ce site, consulter Faire les demandes de relevés compteur par fax ou e-
mail.
Tiers / Clients / Gérer les organisations de type client
1. Rechercher le client,
2. Cliquer sur "Sites" dans l'entête de la section,
3. Sélectionner le site,
4. <Modifier> ou <Crayon>,
Section "Classifications"
5. Sélectionner la ligne "Demande de relevés de compteurs Site", puis compléter :
§ Soit en utilisant les listes déroulantes,
§ Soit en sélectionnant la ligne, puis "Classifier" dans l'entête de la section à droite,
6. <Disquette> ou <F2>.
Paramètres
Mode de relevé par défaut
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre est 'identifiant technique de la catégorie de la classification Demande de relevés des
sites.
Paramètre "CATEG_DEMANDE_RELEVES"
Valeur :
§ Fax,
§ Adresse e-mail.
Contrôle des données
CONTRÔLE DES DONNÉES
SIRET
Contrôle
Les éventuelles lettres saisies dans le SIRET sont systématiquement transformées en majuscules.
Si le SIRET n'est pas obligatoire, aucun contrôle n'est effectué.
Si le SIRET est obligatoire alors :
§ La forme juridique devient obligatoire,
§ Le contrôle est actif et est fait uniquement lors de l'enregistrement.
Rendre le SIRET obligatoire et activer le contrôle
SIRET obligatoire
Paramètres application / Classifications, listes et tables de décision / Gérer les identifiants
1. Sélectionner la ligne du SIRET,
2. Modifier/Éditer,
3. Cocher la case "Obligatoire",
4. <Disquette>.
Voir Gérer les identifiants d'organisation
Activer le contrôle
Paramètres application / Classifications, Listes et tables de décision / Gérer les tables de
décisions
Modifier la table de décision "TD_CONTROLE_IDENTIFIANT".
Numéro Code org. int Identifiant Abrév. Pays Abrév. Forme Juridique Contrôler l'identifiant
1 01 SIRET FR SARL|SACP Oui
2 01 SIRET * PART Non
3 * SIRET * SARL|SACP Oui
4 * SIRET * PART Non
a) Le paramétrage de ligne dont l'identifiant est "SIRET" avec l'option "Contrôler l'identifiant" à
"Oui" active le contrôle du SIRET.
b) Le paramétrage de ligne dont l'identifiant est "SIRET" avec l'option "Contrôler l'identifiant" à
"Non" N'active PAS le contrôle du SIRET.
La saisie dans la table de ce dernier paramétrage (option b) n'est pas obligatoire. Son absence
revient à dire "Pas de contrôle".
Code org. int.
Il est possible d'activer le contrôle pour une organisation, sans qu'il le soit pour les
autres.
· Dans le cas d'un collaborateur mono-société : ARTIS.net prendra en compte la
règle (une ligne dans la table) correspondant à son organisation interne, à
défaut d'en trouver, il prendra la première avec le méta-caractère " * ".
· Dans le cas d'un collaborateur multi-société : ARTIS.net prendra en compte
automatique une règle (une ligne dans la table) correspondant à " * ".
Abrév. Pays
· Information saisie dans l'adresse du client, voir Ajouter un pays.
Abrév. Forme Juridique
· Information saisie dans la fiche client, voir Ajouter une forme juridique.
Mettre dans la case toutes les formes juridiques pour lesquelles, le SIRET doit être
contrôlé, séparées par " | " (sans espace).
Cas particulier
Tiers particulier
Les particuliers n'ont pas de SIRET, si le SIRET est obligatoire, la forme juridique l'est
également.
Il convient donc de mettre en place une forme juridique "PART - Particulier". Ceci afin de ne
pas activer le contrôle sur ces fiches client.
La Poste
La poste est une Société Anonyme (SA) à capitaux publics possédant un très grand
nombre d'établissement. En conséquence, le contrôle du modulo 10 (voir ci-après) contraint
le nombre d'établissement à une valeur inférieure à la réalité. Pour résoudre le problème, le
contrôle (mis en place par l'INSEE) est du type modulo 5.
Il convient donc de mettre en place une forme juridique "SACP - Société Anonyme à
Capitaux Publics" pour les distinguer. Ceci afin d'activer le contrôle du type modulo 5.
ARTIS.net intègre les deux algorithmes.
Description du contrôle
Composition
Le numéro de SIRET est composé :
o Des 9 chiffres du numéro RCS
o D'un numéro d'établissement sur 4 chiffres (0001 pour le premier établissement),
o Le 14ème et dernier chiffre est une clé de Luhn
Algorithme de clé de Luhn, modulo 10
L'algorithme procède en trois étapes.
1. L'algorithme multiplie par deux un chiffre sur deux, en commençant par l'avant dernier et en se
déplaçant de droite à gauche. Si un chiffre qui est multiplié par deux est plus grand que neuf
(comme c'est le cas par exemple pour 8 qui devient 16), alors il faut le ramener à un chiffre
entre 1 et 9. Pour cela, il y a 2 manières de faire (pour un résultat identique) :
§ Soit les chiffres composant le doublement sont additionnés (pour le chiffre 8: on obtient
d'abord 16 en le multipliant par 2 puis 7 en sommant les chiffres composant le résultat
: 1+6).
§ Soit on lui soustrait 9 (pour le chiffre 8 : on obtient 16 en le multipliant par 2 puis 7 en
soustrayant 9 au résultat).
2. La somme de tous les chiffres obtenus est effectuée.
3. Le résultat est divisé par 10. Si le reste de la division est égal à zéro, alors le nombre original
est valide.
Exemple, pour le Siret 972-487-086 :
Chiffre
9 7 2 4 8 7 0 8 6 Somme
9 14 2 8 8 14 0 16 6
9 5 2 8 8 5 0 7 6 50
50 est divisée par 10 : le reste est 0,
donc le nombre est valide
Algorithme de clé de Luhn, modulo 5
L'algorithme est le même. Seule la division est par 5, au lieu de 10.
IBAN
Contrôle
Le contrôle a lieu
o Dynamiquement lors de la saisie,
o Lors de l'enregistrement
Sont contrôlés :
o La longueur,
o La clé de contrôle,
o Le pays.
Composition
BIC / SWIFT
123 …
11
(chiffres ou lettres)
Les codes sur 8 sont complétés
avec "X" jusqu'à 11
Pays Clé de contrôle Code Banque Code Guichet Numéro de Compte Clé RIB
XX 12 12345 12345 12345678901 12
2 2 5 5 11 2
(lettres) (chiffres) (chiffres) (chiffres) (chiffres ou lettres) (chiffres)
Vérifier dans la liste
jointe des pays
Structure d'un RIB français
La longueur est vérifiée d'après la liste jointe des pays

Algorithme de vérification de l'IBAN
1. Enlever les caractères indésirables (espaces, tirets)
2. Déplacer les 4 premiers caractères à droite
3. Substituer les lettres par des chiffres via une table de conversion (A=10, B=11, C=12 etc.)
4. Diviser le nombre ainsi obtenu par 97.
5. Si le reste n'est pas égal à 1 l'IBAN est incorrect : Modulo de 97 égal à 1
Exemples
30002 04227 0000 0633 12D 56
GB87BARC20658244971655
BARC20658244971655GB87
1110271220658244971655161187
1110271220658244971655161187 Modulo 97 = 1
BE43068999999501
BE43068999999501
068999999501BE43
068999999501111443
068999999501111443 Modulo 97 = 1
Les comptes français uniquement constitués de chiffres ont tous la même clef IBAN égale à 76.
Cela est dû à la clef du RIB français qui est elle-même un modulo 97. La correspondance
numérique des lettres étant différente entre le calcul de la clef RIB et le calcul de la clef IBAN, cela
n'est pas vrai pour les comptes français qui comportent au moins une lettre.
Pays
Code Pays Pays Longueur Exemple de code IBAN
DE Allemagne 22 DE89 3704 0044 0532 0130 00
AT Autriche 20 AT61 1904 3002 3457 3201
BE Belgique 16 BE68 5390 0754 7034
BG Bulgarie 22 BG62 UBBS 8002 1079 3545 17
CY Chypre 28 CY17 0020 0128 0000 0012 0052 7600
DK Danemark 18 DK50 0040 0440 1162 43
ES Espagne 24 ES91 2100 0418 4502 0005 1332
EE Estonie 20 EE85 2200 2210 2014 6585
FI Finlande 18 FI21 1234 5600 0007 85
FR France 27 FR14 2004 1010 0505 0001 3M02 606
GR Grèce 27 GR16 0110 1250 0000 0001 2300 695
HU Hongrie 28 HU42 1177 3016 1111 1018 0000 0000
IE Irlande 22 IE29 AIBK 9311 5212 3456 78
IS Islande 26 IS14 0159 2600 7654 5510 7303 39
IT Italie 27 IT60 X054 2811 1010 0000 0123 456
LV Lettonie 21 LV80 BANK 0000 4351 9500 1
LI Liechtenstein 21 LI21 0881 0000 2324 013A A
LT Lituanie 20 LT12 1000 0111 0100 1000
LU Luxembourg 20 LU28 0019 4006 4475 0000
MT Malte 31 MT84 MALT 0110 0001 2345 MTLC AST0 01S
NO Norvège 15 NO93 8601 1117 947
NL Pays-Bas 18 NL91 ABNA 0417 1643 00
PL Pologne 28 PL27 1140 2004 0000 3002 0135 5387
PT Portugal 25 PT50 0002 0123 1234 5678 9015 4
CZ République
Tchèque 24 CZ65 0800 0000 1920 0014 5399
RO Roumanie 24 RO49 AAAA 1B31 0075 9384 0000
GB Royaume-Uni 22 GB29 NWBK 6016 1331 9268 19
SK Slovaquie 24 SK31 1200 0000 1987 4263 7541
SI Slovénie 19 SI56 1910 0000 0123 438
SE Suède 24 SE35 5000 0000 0549 1000 0003
Gérer les Alertes, Blocage, Déblocage des clients
GÉRER LES ALERTES, BLOCAGE, DÉBLOCAGE DES
CLIENTS
Mise en place
Consulter Gérer les Alertes et Blocages des clients
Alerte ou blocage d'un client
2 cas possibles :
1. En comptabilité générale, il faut bloquer le compte (suppose que l'interrogation comptable est
en place, voir Consulter la comptabilité depuis ARTIS.net),
2. Dans ARTIS.net, classifier le client dans une catégorie non bloquante ou bloquante.
Déblocage d'un client
Déblocage permanent
2 cas possibles :
1. En comptabilité générale, il faut débloquer le compte (suppose que l'interrogation comptable est
en place, voir Consulter la comptabilité depuis ARTIS.net),
2. Dans ARTIS.net, classifier le client dans une catégorie non bloquante ou déclassifier le client
de cette catégorie.
Déblocage temporaire
Il est possible de saisir une date dans la fiche client permettant ainsi de poursuivre la saisie :
o Tiers / Client / Gérer les organisations de type client
o Rechercher le client
o Facturation
o <Crayon>
o Saisir la date dans la zone "Client débloqué jusqu'au"
o <Disquette>
Exemple de situation :
1. En date du 07/01/2014, le client 1000485 est bloquée (soit par une catégorie alerte bloquante,
soit par la comptabilité générale).
2. Le service comptable a le client au téléphone et ce dernier lui assure un règlement au
lendemain.
Le comptable peut alors saisir sur la fiche du client 1000485 dans ARTIS.net, un déblocage
jusqu'à la date du 08/01/2014.
Il autorise ainsi les saisies le concernant jusqu'à cette date.
3. Si le service comptable reçoit bien le paiement, il procède au déblocage définitif (soit par une
catégorie alerte non bloquante, soit en le déclassifiant, soit par le déblocage en comptabilité
générale).
Si aucune opération n'est effectuée, le blocage redevient effectif une la date du 08/01/2014
dépassée.

Remarque
La liste des clients ayant une date de déblocage temporaire est consultable (en fonction des
habilitations) :
o Paramètres applications / Classifications, listes et tables de décision / Gérer les tables de
décision
o Rechercher la table "TD_CLIENTS_DEBLOQUES_TEMPO_ENCOMPTA"
Gérer les différentes adresses sur les factures
GÉRER LES DIFFÉRENTES ADRESSES SUR LES FACTURES
Liste des différentes adresses
Coordonnées de la fiche client de facturation
Tiers / Clients / Gérer les organisations de type client / Onglet "Fiche principale"
L'adresse qui est saisit dans la fiche principale du client de facturation est liée au premier site
créé.
Toute modification dans cette fiche se reporte dans ce site et inversement.
Ce site est automatiquement coché :
Adresse de livraison,
Adresse de facturation,
Adresse d'envoi.
Rappel sur les types d'adresse
En saisie de commande (entête et ligne), en modification de livraison, la recherche d'un site
livré se fait uniquement sur les sites cochés "Adresse de livraison" du client sélectionné.
En saisie de commande (entête et ligne), en saisie ou modification de facture, la recherche d'un
site facturé se fait uniquement sur les sites cochés "Adresse de facturation" du client
sélectionné.
Dans la fiche client, onglet "Client", Section "Relation client", seuls les sites cochés "Adresse
d'envoi" sont visibles lors de la recherche en zone "Adr envoi privilégiée".
Voir le paragraphe "Adresses privilégiées" ci-après.
Site de facturation
Tiers / Clients / Gérer les organisations de type client / Site
Le premier site créé correspond au site du client de facturation, voir le paragraphe précédent.
Lors de la création d'un nouveau site, il est possible de le typer dans l'un ou tous les types
d'adresse.
Si des sites sont créés uniquement pour des besoins de facturation (regroupement de règles de
facturation), il est fortement conseillé de les cocher uniquement "Adresse de facturation".
Adresses privilégiées
Tiers / Clients / Gérer les organisations de type client / Onglet "Client"
Lors de la saisie d'un client, le site de la fiche principale est par défaut :
§ L'adresse de livraison privilégiée,
En saisie de commande, ce site apparaît automatiquement à l'appel du client de
livraison (si le client n'a pas de particularité, voir le tableau ci-après).
§ L'adresse de facturation privilégiée,
En saisie de commande et de facture, ce site apparaît automatiquement à l'appel
du client de facturation (si le client n'a pas de particularité, voir le tableau ci-après).
§ L'adresse d'envoi privilégiée,
Lors de la création de la facture, l'adresse d'envoi est complétée avec ce site (si le
client n'a pas de particularité, voir le tableau ci-après).
Adresse d'envoi privilégiée
Dans la section "Relation client", la zone "Adr envoi privilégiée" permet de définir une adresse
d'expédition à mettre sur la facture. Il s'agit d'acheminer la facture à cette adresse. Il ne s'agit
pas de l'adresse de facturation.
En conséquence, sur la facture imprimée, apparaissent deux adresses :
§ Dans le cadre prévu pour les enveloppes à fenêtre, est imprimée l'adresse d'expédition,
§ A un autre emplacement sur la facture, est mentionnée l'adresse de facturation.
Utilisation des adresses
CAS
Ecran
Facture de SSC lors de
la génération
Facture à imprimer
Cde BL Facture RFC Adresse de
facturation Adresse d'envoi
1 Coordonnées de la fiche
client de facturation
Oui,
Automatique
Oui,
Automatique
Oui,
Automatique Non Oui,
Automatique
Adresse de facturation = Adresse d'envoi
=
Raison sociale et adresse du client
2
Site
w cochée "Adresse de
facturation"
w mis en "Adr factu
privilégiée"
Oui,
Automatique
Oui,
Automatique
Oui,
Automatique Non Oui,
Automatique
Adresse de facturation = Adresse d'envoi
=
Raison sociale du client + Adresse de
facturation principale/privilégiée
3 Site  Oui, Oui, Oui, Non Non Adresse de facturation = Adresse d'envoi
w cochée "Adresse de
facturation"
Sélection
manuelle
Sélection
manuelle
Sélection
manuelle
=
Raison sociale du client + Adresse de
facturation sélectionnée
4
Site
w cochée "Adresse de
facturation"
Non Non Non
Oui,
Sélection
manuelle
Oui,
Automatique
Adresse de facturation = Adresse d'envoi
=
Raison sociale du client principal + « , » +
Nom du site (si différent) + Adresse du site
5
Site dans RFC
Avec Site de facturation
w mis en "Adr envoi
privilégiée"
Le site de facturation n'est pas utilisable.
Voir le cas suivant n°6
Si un site de facturation est sélectionné, l'adresse d'expédition n'est pas prise en
compte : voir le cas précédent n°4
6
Site
w mis en "Adr envoi
privilégiée"
Sans Site de facturation dans
les RFC
Non Non Oui,
Automatique Non visible Oui,
Automatique
Raison sociale du
client + Adresse de
facturation
Raison sociale du
client + Adresse
d'envoi des
factures
Le cas 1 : C'est le cas général.
Le cas 4 : Le site de facturation est surtout utiliser pour regrouper des règles de facturation sur une même
facture.
Dans l'écran facture, que ce soit :
o Une facture directe,
o Une facture SSC,
o Une facture issue de la facturation d'une livraison,
Il est toujours possible :
o De sélectionner une autre adresse de facturation,
o De sélectionner une autre adresse d'envoi de facture,
o De modifier directement dans la facture les champs des deux types d'adresse.
Mettre une adresse privilégiée de livraison de consommable
METTRE UNE ADRESSE PRIVILÉGIÉE DE LIVRAISON DE
CONSOMMABLE
Site du client
Tiers / Clients / Gérer les organisations de type client
1. Rechercher le client,
2. Cliquer sur "Sites" dans l'entête de la section,
3. Sélectionner le site qui correspond à cette adresse privilégiée,
4. <Modifier> ou <Crayon>,
Section "Classifications"
5. Sélectionner la ligne "Adresse privilégiée pour consommables", puis compléter :
§ Soit en utilisant les listes déroulantes,
§ Soit en sélectionnant la ligne, puis "Classifier" dans l'entête de la section à droite,
6. <Disquette> ou <F2>.
Paramètre
Adresse privilégiée pour consommables
Paramètres application / Classification, listes et tables de décision / Gérer les classifications
Consulter Créer une classification.
Classification
Nom : "Adresse privilégiée pour consommables",
Abréviation : "ADR_PRIVILEGIE_CONSO",
Identifiant technique : "SITE_ADRESSE_PRIVILEGIEE_CONSOMMABLE",
Domaine : "Parties",
Classe : "com.artis.business.parties.Site".
Catégorie
La classification ne possède qu'une catégorie :
Nom : "OUI",
Abréviation : "O",
Identifiant technique : "OUI".
Mettre une numérotation automatique des sites
METTRE UNE NUMÉROTATION AUTOMATIQUE DES SITES
Paramètres
Code site
Paramètres application / Paramètres application / Gérer les paramètres
Ce paramètre indique si la génération du code site est activée. La valeur représente la longueur du
code généré (si 0, la génération est non active).
Paramètre "GENERATION_CODE_SITE"
Valeur : exemple, "0001"
Modifie, corriger un code client et/ou comptable
MODIFIER, CORRIGER UN CODE CLIENT
Tiers / Clients / Gérer les organisations de type client
1. Passer en modification par <Crayon>,
2. Dans la zone "Code", appeler le client par son code ou par son nom,
3. Dans la zone "Information principale",
4. Corriger le code,
5. <Disquette>.
Modifier, corriger un code comptable d'un client
Tiers / Clients / Gérer les organisations de type client
1. Passer en modification par <Crayon>,
2. Dans l'onglet  "Client", zone "Comptes comptables auxiliaires" (en bas de page)
3. Corriger les zones :
§ Code compte auxiliaire
§ Numéro compte auxiliaire
4. vérifier aussi "l'intitulé compte auxiliaire" qui reprend le nom du client noté dans "Raison
sociale"
5. <Disquette>.
Rechercher les coordonnées GPS
RECHERCHER LES COORDONNÉES GPS
Recherche des coordonnées GPS
Tiers / Clients / Gérer les organisations de type client
Fiche client et Site
Le lien "Rechercher les coordonnées GPS" situé sous l'adresse postal permet de rechercher les
coordonnées GPS de cet adresse.
La recherche se fait :
1. En premier sur l'adresse 1 et le code postal et la ville (11 rue de l'argentière, 41295 VINEUIL
dans l'exemple ci-dessus),
2. Si aucun résultat n'est trouvé, elle se fait sur l'adresse 2 et le code postal et la ville,
3. Sinon, elle se fait sur l'adresse 3 et le code postal et la ville, Dans ce dernier cas, un message
alerte l'utilisateur.
Une fois les coordonnées GPS trouvées, les zones "Latitude" et "Longitude" se complètent.
Paramétrages
Paramètres
Géocodage
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "ADRESSE_GEOCODAGE"
Valeur : URL du serveur appelé par la servlet de géocodage (MapPoint uniquement pour l'instant),
exemple "http://adresse_du_serveur_mappoint:8855/ArtisMapPoint/".
Paramétrage autres
Fonctionnement de l'application de recherche : Le fonctionnement de l'application de recherche des
coordonnées GPS via MapPoint est le suivant :
Applications à installer sur un serveur Windows accessible depuis ARTIS.net :
o Microsoft MapPoint 2009. L'utilisateur Windows ayant accès à MapPoint devra pouvoir installer
des services Windows.
o Microsoft .NET framework 3.5 : http://www.microsoft.com/downloads/details.aspx?
displaylang=fr&FamilyID=333325fd-ae52-4e35-b531-508d977d32a6
o ArtisMapPoint : Le programme ci-joint. Il s'agit d'un service Windows qui devra être installé
avec un utilisateur ayant accès à MapPoint.
Manière de tester et résolution de problèmes
o En local sur le serveur Windows :
§ En utilisant l'url paramétrée dans ARTIS.net en remplaçant l'adresse du serveur par
localhost,
§ En précisant les paramètres de recherche (geo_num, geo_adr1 (2, 3), geo_cp,
geo_ville),
§ Cela permet de vérifier que le service Windows fonctionne correctement,
o A distance à partir du serveur ARTIS.net :
§ Il s'agit de la même recherche que précédemment mais avec l'adresse du serveur dans
l'url,
§ Cela permet de vérifier que le serveur Windows est accessible depuis ARTIS.net,
o En utilisant la servlet Artis.net :
§ http://srvartis/ArtisWeb/servlet/GeocodageMapPoint avec les mêmes paramètres que
précédemment,
§ Cela permet de vérifier qu'ARTIS.net est capable d'interroger le serveur Windows-
MapPoint,
o Dans le navigateur de l'utilisateur :
§ La même adresse que précédemment,
§ Permet de vérifier qu'il n'y a pas de problème de paramétrage sur le poste de
l'utilisateur,
o Avec ARTIS.net sur le poste de l'utilisateur :
§ Permet de vérifier que l'adresse paramétrée dans ARTIS.net est correcte.
Saisir les horaires d'ouverture d'un site ou d'un client
GERER LES HORAIRES DE CLIENTS
Les horaires ne sont visibles que sur le PDA du technicien (non visibles sur le planning en session
Artis.net).
Ils sont également visibles lors de l'affectation d'un technicien à une IT (en session Artis.net).
Saisir les horaires d'ouverture d'un client
Tiers / Clients / Gérer les organisations de type client
1. Rechercher le client
2. Faire <Mosaïque>,
3. Sélectionner "Calendrier"
4. Zone "Semaines", cocher "semaine standard" puis modifier avec <Crayon> du tableau,
5. Sélectionner les lignes à modifier ou toutes les plages en haut de colonne puis <Crayon> du
tableau
6. Modifier les horaires du jour affiché,
7. Valider par < Disquette >
8. La plage suivante s'affiche, Modifier les horaires du jour affiché,
9. Valider par < Disquette >,
10. etc. jusqu'à traitement de tous les horaires sélectionnés.
11. Une fois toutes les lignes traitées, le tableau des "Jours et heures ouvrables" s'affiche.
12. Valider par < Disquette >,
13. Sortir par la < X  >
Saisir les horaires d'ouverture d'un site de client
Tiers / Clients / Gérer les organisations de type Client
o Rechercher le client
o Suivre "Sites" en haut à droite de la fiche,
o Sélectionner le site dans le tableau, puis < loupe >,
o Zone "Informations site", dans le carré de carrés
   sélectionner "Calendrier "
Suivre le même procédure que ci-dessus.
Supprimer un interlocuteur
SUPPRIMER UN INTERLOCUTEUR
Supprimer un interlocuteur
Rendre inactif un interlocuteur
Un interlocuteur est supprimable dès lors qu'il n'a pas encore été utilisé (exemple : suite à une
erreur de saisie).
Dans le cas contraire, il est possible de le rendre inactif.
Tiers / Clients / Gérer les organisations de type Client
1. Rechercher le client
2. Onglet "Interlocuteurs", section "Interlocuteurs"
3. sélectionner l'interlocuteur,
4. <Modifier>,
5. Décocher la case "Inactif" (en haut, à droite)
6. < Disquette >.
Gérer les organisations de type financeur
GÉRER LES ORGANISATIONS DE TYPE FINANCEUR
Tiers / Clients / Gérer les organisations de type Financeur
La fiche se complète comme une fiche classique d'un tiers
Informations particulières à un financeur
Désignation courante
Si le financeur est utilisé dans le traitement de la négociation des dossiers de financement, il est
nécessaire d'avoir un nom "court" des organismes de financement pour le tableau de négociation.
Ce nom court est utilisé uniquement en affichage, pour ordonner les fianceurs, exemple :
§ Code client : "01900985"
§ Raison sociale : "LIX X BAIL"
§ Désignation courante : "2- LIX X BAIL"
Onglet "Financeur", Section "Relation financeur"
Code client
Ce code est celui utilisé pour récapituler les factures d'un organisme de financement dans un fichier
au format spécifique.
Comptabilisation des échéances de l'organisme de financement
Pour générer les écritures de loyers des dossiers de financement, onglet "organisme de
financement", il est possible de paramétrer :
o Soit un compte de trésorerie,
o Soit un compte de tiers.
Consulter Paramétrage lié aux financements.
Créer un financeur à partir d'une fiche d'un autre type
Il s'agit de créer un financeur à partir d'une fiche déjà existante, comme une fiche client, fournisseur,
organisation interne, fabricant, banque, transporteur, (ou sous-traitant, commanditaire, mainteneur).
Consulter Créer un tiers à partir d'un tiers.
Créer un financeur
1. Créer le financeur en tant que client,
2. Créer le financeur en tant que financeur à partir de la fiche client, consulter le paragraphe ci-
dessus.
Gérer les organisations de type banque
GÉRER LES ORGANISATIONS DE TYPE BANQUE
Tiers / Clients / Gérer les organisations de type Banque
Environ 3700 banques sont déjà présentes dans la base de données. Les banques donnent lieu à
des fusions, des créations d'agence et donc la liste ne peut être exhaustive. Certaines sont donc à
créer.
Informations particulières à un financeur
Code
Saisir le code BIC dans le code de la banque. Si le code ne fait 11 caractères, des "X " doivent
compléter le code pour faire cette longueur, exemple : le code ""AAAGFRP1" devient
"AAAGFRP1X X X ".
Onglet "Banque", Section "Informations bancaires"
Code BIC
Mettre dans ce code, le code BIC en respectant la règle ci-dessus.
Créer un client à partir d'une fiche d'un autre type
Il s'agit de créer une banque à partir d'une fiche déjà existante, comme une fiche client, fournisseur,
organisation interne, fabricant, financeur, transporteur, (ou sous-traitant, commanditaire,
mainteneur).
Consulter Créer un tiers à partir d'un tiers.
Créer un financeur
Tiers / Clients / Gérer les organisations de type Banque
1. La procédure est identique à celle d'un client.
Gérer les relations entre organisations
GÉRER LES RELATIONS ENTRE ORGANISATIONS
Cette procédure permet d'établir une ou plusieurs relations entre organisation (on entend par
organisation des clients ayant un code client). Les relations sont nommées, exemple : "est le
donneur d'ordre" : cette relation permet d'indiquer qu'un client est le donneur d'ordre pour lui-même
et un ensemble de clients.
Si une relation doit être ajoutée, contacter ARTIS.
Dans la relation "L'organisation 010 est le donneur d'ordre de l'organisation 020", les organisations
en cause sont nommées :
o L'organisation 010 est considérée comme "L'organisation à gauche" de la relation,
o L'organisation 020 est considérée comme "L'organisation à droite" de la relation.
Relation entre organisations
1. Section "Relations d'une organisation",
2. "L'organisation" :  Rechercher l'organisation  principale,  également  appelée  "Organisation  à
gauche de la relation",
3. Si des relations existent déjà, elles s'afichent,
4. <+>,
5. "A comme relation" : Sélectionner la relation,
6. "Organisation 2" : Ajouter les organisations secondaires, également appelées "Organisation à
droite de la relation",
7. <Disquette> ou <F2>.
"Relation entre organisation" : affiche sous forme d'arbre, le client à gauche de la relation et tous
les clients à droite de la relation et ceci de manière récursive.
Recherche de client à partir de "Relation entre Org."
La requête (loupe) de recherche de client a un critère supplémentaire : "Code client (recherche par
'Relation entre organisations')".
Ce  critère  de  recherche permet de  sélectionner l'ensemble  des  clients  à  droite  d'une  relation,
permettant ainsi  un  traitement,  un  calcul  statistique  pour tous  les  clients  ayant  cette  relation
commune.
1. Arpès avoir fait <F1> ou <Loupe> sur code client,
2. Recherche des clients à droite de la relation : saisir le client à gauche de la relation,
3. Suivi de <Entrée>
4. ARTIS recherche le client  à  droite de la  relation, à  partir de l'information saisie,  et  affiche le
résultat. Puis sélectionner l'ensemble (ou une partie) des lignes du résultat de la recherche,
5. Suivi de <Disquette> ou <F2>,
6. Au retour sur la page des critères de la requête précédente, ARTIS.net complète la  valeur de
recherche avec tous les codes clients à droite de la relation,
7. Après  validation, le  traitement  ou  le  calcul  statistique  s'effectuera  pour  tous  les  clients
précisés.
Lister les clients avec relations entre organisations
LISTER LES CLIENTS AVEC RELATIONS ENTRE
ORGANISATIONS
o Code client (à gauche de la relation) : permet de lister les clients uniquement à gauche de la
relation.
o Code client (à droite de la relation) : permet de lister les clients uniquement à droite de la
relation.
o Code client (à gauche et à droite de la relation) : permet de lister les clients qui sont à gauche
comme à droite de la relation (permet de contrôler les données saisies).
o Nom de la relation : permet d'interroger sur une relation plutôt qu'une autre.
Les informations listées sont :
Position Position
lettrée Champs Informations
1 A Code client 1 à gauche de la relation
2 B Nom client 1 à gauche de la relation
3 C CP client 1 à gauche de la relation
4 D Ville client 1 à gauche de la relation
5 E Nom de la relation
6 F Code client 2 à droite de la relation
7 G Nom client 2 à droite de la relation
