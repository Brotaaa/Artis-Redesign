# Mettre à jour les configurations de grandeurs

> Categorie: Biens et Configurations | Pages 206-207

PARAMÈTRES
Recalul des grandeurs calulées
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "DATE_MIGRATION"
Valeur : "01/01/1971  00:00:00" par défaut,
Ne pas recalculer les valeurs des grandeurs antérieures à la Date de migration..
Mettre à jour les configurations de grandeurs
METTRE À JOUR LES CONFIGURATIONS DE GRANDEURS
Biens et configurations /  Mettre à jour les configurations de grandeurs
Traitement
Dans la page de critères de sélection des biens et/ou des types d'anomalies :
1. Sélectionner un ou des biens par leur(s) identifiant(s),
§ ou par leur(s) type de produit,
§ ou par leur(s) code client(s),
§ ou par leur configuration de grandeurs,
§ ou par leur(s) code(s) de RFC,
2. En mettant "Oui" dans le critère "Avec RFC", seuls les biens ayant au moins une grandeur liée
à une RFC sont ramenés,
3. Renseigner un ou plusieurs types d'anomalies (sans aucune anomalie sélectionnée, l'ensemble
des biens est pris en compte),
4. Par défaut, le nombre de biens maximum ramenés est limité à 1000. Possibilité de changer
cette valeur en mettant moins de 1000,
5. <F2> ou <Disquette>.
Ecran de contrôle et/ou de correction des anomalies
1. Tous les biens correspondants aux critères demandés ou les 1000 premiers biens sont listés.
2. Dans la liste des biens à traiter, cliquer sur la ligne d'un bien,
3. La ligne sélectionnée devient verte et le détail de l'anomalie s'affiche dans la section "Maj des
configurations de grandeurs",
4. ARTIS.net affiche la configuration de grandeurs du bien. Si le bien n'a pas de configuration de
grandeurs, ARTIS affiche celle du modèle du bien.
Liens et infos disponibles
Dans la Mosaïque, plusieurs liens sont disponibles :
o Actualiser la liste des biens :
ARTIS.net recharge la liste des biens en fonction des critères demandés initialement. Si
entre temps, des biens ont été mis à jour, ils ne sont plus affichés après actualisation de la
liste,
o Filtrer et actualiser la liste des biens :
ARTIS.net revient sur la première page des critères de sélection,
o Mise à jour des biens/grandeurs :
ARTIS.net met à jour le bien en fonction des modifications apportées (voir le paragraphe
suivant),
o Ajouter nouvelle config. Prédéf. :
ARTIS.net donne accès à l'écran de création des configurations de grandeurs, consulter
Gérer les configurations de grandeurs prédéfinies et leurs formules associées.
Messages d'erreur sur les grandeurs
o Soit la grandeur n'est pas dans une configuration (prédéfinie ou de bien), soit elle n'est pas
dans la même configuration que le bien,
o La grandeur n'a pas de grandeur prédéfinie,
o Il existe une différence entre l'abréviation de la grandeur du bien et celle de la grandeur
prédéfinie.
o Il existe une différence entre le nom de la grandeur du bien et celui de la grandeur prédéfinie,
o Il existe une différence entre la formule de calcul de la grandeur du bien et celle de la grandeur
prédéfinie.
Messages d'erreur sur les biens
o Un des liens entre le bien, la configuration de grandeurs du bien et la configuration de grandeurs
prédéfinie est cassé,
o Il existe une différence entre le nombre de grandeurs du bien et celui de la grandeur prédéfinie,
o Il existe une différence entre l'abréviation de la configuration de grandeurs du bien et celle de la
configuration de grandeurs prédéfinies,
o Il existe une différence entre le nom de la configuration de grandeurs du bien et celui de la
configuration de grandeurs prédéfinies.
Sélectionner une nouvelle configuration de grandeurs prédéfinie
Anomalie sur le nombre de grandeurs :
Sélectionner une nouvelle configuration de grandeurs.,
Exemple: si le bien possède une configuration avec une seule grandeur, sélectionner la bonne
configuration avec 2 grandeurs.
Ajout / Suppression / Modification d'une nouvelle grandeur
En sélectionnant une nouvelle configuration de grandeurs qui ne possède pas le même nombre de
grandeurs, ajouter ou supprimer des grandeurs dans le bien pour l'adapter à sa nouvelle
configuration.
o Ajout d'une grandeur :
1. Cliquer sur <+>,
2. Choisir la grandeur adaptée.
o Suppression d'une grandeur :
1. Avant de supprimer la grandeur, ARTIS établit les contrôles suivants :
1. Aucune règle de facturation ne doit être associée à la grandeur à supprimer. Si
une RFC est détectée, un message bloquant s'affiche,
2. Aucune facture ne doit porter sur la grandeur à supprimer,
3. La grandeur supprimée ne doit pas faire partie d'une formule de calcul qui porte
