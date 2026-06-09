# Généralités et Théorie

> Categorie: Solutions de services | Pages 228-231

## Sous-rubriques
- Solutions de services (p.228)
- Procédure type de facturation (p.230)
- Tacite reconduction (p.231)

Solutions de services

Généralités et Théorie
GÉNÉRALITÉS ET THÉORIE SUR LES SOLUTIONS DE
SERVICES
Résumé
Une Solution de Services Client (SSC) est  créée  à  partir  d'une  Solution  de  Services Prédéfinie
(SSP).
Une Solution de Services Client est constituée de un ou plusieurs Modules Services Clients (MSC)
qui permettent de facturer la maintenance technique de un ou plusieurs biens.
Chaque Module Service Client est composé de :
o Une ou plusieurs Règles de Facturation Clients (RFC)
o Une ou plusieurs couvertures
Chaque Règle de Facturation contient ses propres conditions de Facturation et est Liée à :
o Une ou plusieurs grandeurs de Biens Spécifiques
o Un ou plusieurs Biens Spécifiques
o Un Parc de Biens Génériques
o Une Raison Sociale
Statuts SSC
Les différents statuts que peuvent prendre les SSC sont :
État Solution De
Service
niveau 1
État Solution De Service
niveau 2 Commentaire Caractéristiques
Arrêtée Uniquement pour les SSC
Détruite Non utilisé
En devis Non utilisé
Fermée Uniquement pour les SSC
Pré-créée Uniquement pour les SSC SSC non active
Purgée Non utilisé
Refusée Non utilisé
Résiliée Résiliée.en attente Uniquement pour les SSC
Résiliée Résiliée.soldée Uniquement pour les SSC
Suspendue Suspendue SSC ou MSC
Suspendue Suspendue.autre SSC ou MSC
Suspendue Suspendue.contentieux SSC ou MSC
Suspendue Suspendue.négociation commerciale SSC ou MSC
Suspendue Suspendue.partiellement Uniquement pour les SSC
Suspendue Suspendue.résiliation dans les délais Non utilisé
Validée Validée Uniquement pour les SSC
o Avec tacite reconduction
o Sans tacite reconduction
Validée Validée.prolongée Uniquement pour les SSC
État des RFC
État RFC Type de RFC Commentaire
Active Comportement habituel
Inactive
RFC avec consommation
(liée normalement à des grandeurs)
Lorsque aucune grandeur n'est attachée à la RFC
ou
La RFC possède une date de désactivation
RFC sans consommation
Dépend du statut du module dans lequel elle se trouve
ou
La RFC possède une date de désactivation
Procédure type de facturation
PROCÉDURE TYPE DE FACTURATION
Procédure type de facturation en fin de mois
1. Le 20 du mois
§ Simuler la facturation
§ Faire les demandes de relevé compteur
2. A réception des compteurs
§ Saisir les relevés compteur
3. Le 25 du mois
§ Simuler la facturation
· Traiter les anomalies
· Contrôler les estimations les plus fortes, les quantités les plus fortes, les
montants facturés les plus forts
§ Faire les demandes de relevé compteur (moins de demande car des relevés ont été
saisis)
4. A réception des compteurs
§ Saisir les relevés compteur
5. Le 29 du mois
§ Simuler la facturation
· Traiter les anomalies
· Contrôler les estimations les plus fortes, les quantités les plus fortes, les
montants facturés les plus forts
§ Appeler les clients n'ayant pas renvoyer leur compteurs
6. En fin de mois
§ Traiter les anomalies
§ Contrôler les estimations les plus fortes, les quantités les plus fortes, les montants
facturés les plus forts
§ Facturation au réel pour les biens pour lesquels un relevé a été obtenu
§ Facturation sur estimation pour les autres
Procédure type de facturation au fil des saisies
Cette procédure suppose que le paramètre "FACTURATION_SI_ANOMALIE" est à Non (non
cochée). Ainsi Artis.net facturera les SSC uniquement s'il n'y a pas d'anomalie. La cas "Sans
Estimation" va justement provoquer une anomalie.
o Le 20 du mois
§ Simuler la facturation
§ Faire les demandes de relevé compteur
o A réception des compteurs
§ Saisir les relevés compteur
§ Facturer les SSC en cochant "Sans Estimation"
o Le 25 du mois
§ Simuler la facturation
§ Faire les demandes de relevé compteur (moins de demande car des relevés ont été
saisis)
o A réception des compteurs
§ Saisir les relevés compteur
§ Facturer les SSC en cochant "Sans Estimation"
o Le 29 du mois
§ Simuler la facturation
§ Appeler les clients n'ayant pas renvoyer leur compteurs
o En fin de mois
§ Facturation sur estimation (laisser la case "Sans Estimation" NON cochée)
Tacite reconduction
TACITE RECONDUCTION
La tacite reconduction est gérée sur 3 Niveaux :
o La Solution de Service Client,
o Le ou les modules Services Client,
o Un ou plusieurs couvertures d'un client.
La tacite reconduction est liée à un nombre de mois de renouvellement. En cas de tacite
reconduction, les dates de début initial et de fin initiale de SSC  ne sont jamais modifiées. Seules
les dates de fin de module sont repoussées du nombre de mois de renouvellement.
Dès qu'un module est soumis à reconduction, les couvertures liées à ce module sont reconduites si
elles sont elles mêmes soumises à tacite reconduction et que leur date de fin est calée sur la date
de fin du module.
Si la Solution de Service n'est pas en tacite reconduction, aucun module et aucune couverture ne
