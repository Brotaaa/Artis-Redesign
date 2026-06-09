# Paramètres PDA dans ARTIS.net

> Categorie: PDA | Pages 829-830

Paramètres PDA dans ARTIS.net

PARAMÈTRES PDA DANS ARTIS.NET
Consulter Gérer les éléments accessibles (Portail, PDA),
Consulter Gérer les remplacements d'attributs (Portail, PDA).
Article
Article non connu
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "CODE_ARTICLE_A_CREER"
Valeur : Code article (type composant, suivi en stock) à utiliser pour les créations d'article.
Paramètres
Affichage dans le planning
Paramètres application / Paramètres application / Gérer les paramètres

Paramètre "AFFICH_APLANIF"
Valeur :
§ Coché : Les IT à planifier sont affichées dans les plannings des techniciens,
§ Non coché : Non affiché.
Signature
Paramètres application / Paramètres application / Gérer les paramètres

Paramètre "ENREGISTREMENT_SIGNATURE_PDA"
Valeur :
§ Coché : L'enregistrement des signatures depuis le PDA est géré,
§ Non coché : Non géré.
Dépôt
Paramètres application / Paramètres application / Gérer les paramètres

Paramètre "DEPOTS_AFFICHES_SUR_PDA"
Valeur :
§ MOBILE : Seuls les dépôts mobile des techniciens sont visibles,
§ REAPPRO : Seul le dépôt de réapprovisionnement est visible,
§ TOUS : Tous les dépôts sont visibles.
Code secret
Paramètres application / Paramètres application / Gérer les paramètres

Paramètre "GESTION_CODE_SECRET_MOBILITE"
Valeur :
§ Coché : Le code secret est utilisé dans l'automatisation,
§ Non coché : Non utilisé.
Limiter l'affichage du nombre de biens
Ces paramètres concerne les biens affichés sur le PDA sont limités.

Limite sur le nombre de biens du client
Paramètres application / Paramètres application / Gérer les paramètres
Lorsqu'un client possède plus de x biens, la liste des articles compatibles pour les biens du client
n'est pas renvoyé par le web-service (optimisation de performances).
Paramètre "LIMITE_MAX _BIENS_DU_CLIENT"
Valeur : 50
Limite sur le nombre de biens du site
Paramètres application / Paramètres application / Gérer les paramètres
Lorsqu'un site possède plus de x biens, la liste des biens n'est pas renvoyé par le web-service
(optimisation de performances).
Paramètre "LIMITE_MAX _BIENS_DU_SITE"
Valeur : 20
Limite sur le nombre de sites
Paramètres application / Paramètres application / Gérer les paramètres
Lorsqu'un client possède plus de x sites, la liste des articles compatibles pour les biens du client
n'est pas renvoyé par le web-service (optimisation de performances).
Paramètre "LIMITE_MAX _SITES_DU_CLIENT"
Valeur : 20
Remarque
Ces paramètres doivent être ajuster par petits paliers car l'application d'ARTIS risque de devenir
instable (problème de mémoire notamment).
Quelle que soit la valeur de ces trois paramètres, la saisie du relevé de stock sur le bien de
l'intervention est maintenant toujours possible.
