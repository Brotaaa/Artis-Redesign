# Devis techniques

> Categorie: Services | Pages 90-93

## Sous-rubriques
-   Paramètres (p.90)
- Gérer les devis techniques (p.90)
- Suivre les devis techniques (p.91)
- Éditer les devis techniques (p.92)
- Relancer les devis techniques (p.92)
- Particularités (p.92)
-   Saisir un CRIT lié à un Devis technique (p.92)
-   Traitement des devis réalisés (p.93)

5. Saisir l'abréviation et le nom du motif.
6. <Disquette>

Paramétrage
Créer la liste pour spécifier les catégories d'articles compatibles pour lesquels le relevé de stock
sera exigé.
Paramètres application / Classifications, listes et tables de décision / Gérer les listes

Créez une liste paramétrée comme suit :
o Id technique : ARTICLES_SAISIE_STOCK_OBLIGATOIRE_CRIT
o Nom : Liste des articles avec un relevé de stock exigé
o Domaine' articles', Classe ‘ArtVendu'
Rattacher cette classification aux organisations internes concernées, sélectionner le type de
classification (Articles vendus, couvertures contractuelles, etc) et cocher les catégories
obligatoires.
La liste tient compte de l'autre liste qui filtre les articles dont le stock est à relever.

Paramétrage
La table ‘TD_SAISIE_CRIT_OBLIGATOIRE' configure l'envoi de mail en cas de non saisie des
données obligatoires dans le CRIT : consulter Rendre la saisie des relevés compteurs obligatoires
Paramètres
PARAMÈTRES
Suite à validation du CRIT
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "RETOUR_DIRECT_PLANNING"
Valeur :
§ Coché : Retour direct au planning après saisie du CRIT : Validation CRIT puis retour à
l'écran Planning,
§ Non coché :  Validation CRIT puis reste sur la visualisation CRIT.
Devis techniques
Gérer les devis techniques
GÉRER LES DEVIS TECHNIQUES
Services / Devis techniques / Gérer les devis techniques
o
  pour créer un nouveau Devis technique,
o Saisir ou rechercher le Technicien intervenant,
o Saisir ou rechercher le client.
o Si c'est un nouveau client, il devra avoir été créé au préalable, sinon, créer un client Divers pour
ce type de prestation hors clientèle récurrente.
o Champ "Bien" : rechercher le bien s'il est en base, sinon laisser le champ vide.
o "Domaine" : faire 'Entrée' dans le champs et sélectionner le domaine d'intervention.
o "Détails" : saisir le détail de l'intervention à destination du client et des intervenants.
o Zone "Articles nécessaires"
o
  pour créer une ligne d'article
o Saisir ou rechercher le ou les article(s) voulu(s), ou un Kit,
o indiquer la quantité voulue si différente de 1,
o Valider par
 ,
o Saisir un nouvel article ou kit puis valider.
Pour  un  article  "A  créer"  dans  la  base,  noter  le  code  fournisseur  et  une  description  dans
"Commentaires".
o Sortir de la saisie des articles par
  pour revenir dans le devis,
o Modifier les "Prix unitaire HT" des articles si besoin
o Valider par
o Dans Dans le carré de carrés
  sélectionner "Editer"
Facturation
o Dès que le CRIT, faisant suite à un devis, est facturé, l'état du devis passe automatiquement en
‘Facturé'.
Suivre les devis techniques
SUIVRE LES DEVIS TECHNIQUES
Changer l'état d'un devis techniques
Services / Devis technique / Suivre les devis techniques
o Sélectionner dans la liste les devis à gérer
o Dans Dans le carré de carrés
  sélectionner "Changer l'état"
o indiquer l'Etat du devis suite au retour client,
o Valider par
Éditer les devis techniques
ÉDITER LES DEVIS TECHNIQUES
Donner le numéro du devis à imprimer.
Relancer les devis techniques
RELANCER LES DEVIS TECHNIQUES
Services / Devis technique / Relancer les devis techniques
o Cocher "Imprimer" si besoin d'éditer les devis. Les PDF sont générés au moment du
lancement.
o Appeler tous les devis ou les devis sur une période,
o Dans ce dernier cas, indiquer la date de début et la date de fin.
o L'état des devis passe à éditer si la case "Mise à jour de l'état des devis relancés"  est cochée.
o Lancer le traitement par
  ou F2,
Particularités
Saisir un CRIT lié à un Devis technique
SAISIR UNE DIT SUITE A UN DEVIS TECHNIQUE
Services / Devis Technique / Gérer les devis technique
1. Rechercher le devis,
2. <Mosaïque>,
3. Cliquer sur "Changer l'état" du devis en "Accepté",
4. <Disquette> ou <F2>,
5. <Mosaïque>,
6. Sélectionner "Générer demande",
7. Section "Etats des traitements",
8. Cliquer sur "Dit. générée" pour saisir les éléments complémentaires si besoin ou pour planifier,
9. Puis suivre la procédure Planifier / Suivre une IT.
Traitement des devis réalisés
TRAITEMENT DES DEVIS RÉALISÉS
Services / Devis techniques / Gérer les devis techniques
Les prix des prestations saisis dans les devis sont conservés dans le CRIT de réalisation.
ARTIS rapproche les articles de prestations utilisés du devis avec ceux des prestations prédéfinies
du domaine d'intervention. Sinon, ils sont considérés comme des articles autres et figurent dans le
tableau des articles sortis (composants, intangibles, etc).
Par exemple, un devis contient :
o 1 article de Déplacement (faisant partie des prestations prédéfinies)
o 1 article de Déplacement (non prévu dans les prestations prédéfinies)
o 1 article de Main d'œuvre (faisant partie des prestations prédéfinies)
o 1 article de Main d'œuvre (non prévu dans les prestations prédéfinies)
o 1 article de pièce (tangible autre)
o 1 article de pièce (composant)
o 1 article de frais (intangible)
En saisie de CRIT, le message "Le CRIT fait suite à un devis. Les couvertures ne seront pas
calculées" s'affiche.
Pour récupérer les lignes prévues dans le devis que vous avez saisi, ARTIS compare les articles du
devis avec ceux des prestations prédéfinies du domaine d'intervention (consulter Paramétrer les
prestations prédéfinies)
Tableau des prestations
o 1er article de Déplacement
Comme il est présent dans les prestations prédéfinies, le temps réel passé (0.45) est saisi
mais la ligne conserve la quantité (Temps facturé) et le tarif (prix unitaire) prévus dans le
devis (1x50.00 € soit 50.00 €)
o 1er article de Main d'œuvre
Comme il est présent dans les prestations prédéfinies, le temps réel passé (2.15) est saisi
mais la ligne conserve la quantité et le tarif prévus dans le devis (2x100.00 € soit 200.00 €)
Tableau des articles
o 2ème article de Déplacement
Comme il n'est pas présent dans les prestations prédéfinies, il est mis dans le tableau des
articles (tableau du bas) avec la quantité et le tarif prévus dans le devis (1x60.00 €)
o 2ème article de Main d'œuvre
Comme il n'est pas présent dans les prestations prédéfinies, il est mis dans le tableau des
articles (tableau du bas) avec la quantité et le tarif prévus dans le devis (1x200.00 €)
o 1er article (tangible autre)
Il est dans le tableau du bas avec le tarif prévu dans le devis (5.00 €)
Pour tout article tangible, il est nécessaire de saisir la quantité fournie
o 2ème article (composant)
Il est dans le tableau du bas avec le tarif prévu dans le devis (10.00 €)
Pour tout article tangible, il est nécessaire de saisir la quantité fournie
o 3ème article de frais (intangible)
