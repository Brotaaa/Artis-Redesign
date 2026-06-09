# Gérer la reprise administrative d'un bien

> Categorie: Biens et Configurations | Pages 171-175

## Sous-rubriques
- Reprendre un accessoire sans reprendre le bien (p.171)
- Généralités et Théorie (p.171)
- Gérer la reprise administrative (p.171)
- Particularités (p.173)
-   Traitement de Reprise logistique / Administrative des in-situ (p.173)
-   Paramètres (p.173)
-   Mettre en place un motif de fermeture lors de la reprise (p.175)

La reprise est alors annulée. Le bien retourne chez le client.
Reprendre un accessoire sans reprendre le bien
REPRENDRE UN ACCESSOIRE SANS REPRENDRE LE BIEN
Libérer l'accessoire du bien
Biens et configurations / Actualiser les biens des clients
Il faut détacher l'accessoire du bien maître, consulter Actualiser les biens des clients.
Faire une reprise logistique
Biens et configurations / Gérer la reprise logistique d'un bien
1. "Bien" : Faire <F1>,
2. "Type de bien" : Sélectionner "Accessoires",
3. "Identifiant Fabricant" : Saisir le matricule,
4. <Flèche verte>,
5. Poursuivre la reprise, consulter Gérer la reprise logistique.
Gérer la reprise administrative d'un bien
Généralités et Théorie
REPRENDRE LES BIENS
Consulter le chapitre Gérer la reprise logistique d'un bien / Généralités et Théorie.
Gérer la reprise administrative
GÉRER LA REPRISE ADMINISTRATIVE
Biens et configuration / Gérer la reprise administrative d'un bien
1. Section "Sélection des biens", rechercher le ou les biens, suivant plusieurs cirtères :
§ Sélection directe de biens : Rechercher sur les matricules,
§ Dossier de financement : Recherche des biens à partir du dossier de financement,
§ Dossier de rachat / reprise : Recherche des bien à partir des dossiers rachat/reprise,
2. Valider par
  ou <F2>.
3. Si la reprise logistique n'a pas été faite, elle se présente automatiquement. Consulter Gérer la
reprise logistique
4. Écran "Paramètres de facturation"
§ Remboursement des unités facturées non consommées
Compare le compteur de reprise et la dernière facturation effectuée et si
nécessaire, un avoir au client est fait.
Exemple :
On a facturé une tranche jusqu'à 180000 copies
On reprend la machine à 175000 copies è il y a donc un avoir de 5000 copies
§ Avoir sur montant forfaitaire au prorata
Compare la date de reprise par rapport à la date de fin de période de la dernière
facturation et si nécessaire, rembourse la période.
Exemple :
On a facturé un loyer du 01/12/2006 au 28/02/2007
On reprend ma machine le 24/01/2006 è faire avoir pour la période du 24/01/2007
au 28/02/2007
§ Ne pas facturer
La reprise se fera sans remboursement et sans complément de facturation.
§ Aucune case cochée
Une facturation des copies consommées depuis la dernière facture émise va se
déclencher, selon les cas suivants :
Cas des copies échues :
Compteur de reprise moins dernier compteur facturé : Si le résultat est
supérieur à zéro, facturation d'arrêté de compteurs.
Cas des tranches :
Compteur de reprise moins tranche à atteindre : Si le résultat est supérieur à
zéro, facturation d'arrêté de compteurs. Pas de facturation de tranche.
Cas des forfaits copies :
Compteur de reprise moins cumul des compteurs facturés : Si le résultat est
supérieur à zéro, facturation d'arrêté de compteurs.
Les copies sont facturées au prix du coût copie forfait.
Cas des montants forfaitaires :
Facturation de la période qui va du Dernier jour de la période échue à jour de la
reprise.
5. Valider par
  ou <F2>,
6. Si les paramètres déclenche une éventuelle facturation, l'écran "Préparation de la
facturation" (préfacturation") s'affiche :
§ Valider par
  ou <F2>,
§ Si rien est à facturer, passer au point 7,
§ Si il y a présence d'élément à facturer :
· Contrôler les éléments à facture,
· <Facturer>,
· Valider par
  ou <F2>,
· La facture est générée,
7. Si les paramètres ne déclenche pas facturation, l'utilisateur doit confirmer
8. Validez-vous la reprise administrative des biens ?",
9. Reprise administrative terminée,
Cas particulier de reprise partielle sur une flotte
En cas de reprise partielle sur une flotte, il est impératif de cocher : "Ne pas facturer".
La facturation ultérieure de la SSC tiendra compte des compteurs de reprise des biens concernés.
Particularités
Traitement de Reprise logistique / Administrative des in-situ
TRAITEMENT DE REPRISE LOGISTIQUE / ADMINISTRATIVE
DES IN-SITU
1. Sélectionner le ou les bien, du dossier de financement, du dossier de rachat,
2. Sélectionner les biens dans le tableau,
3. <Disquette> ou <F2>,
4. Mettre la date de reprise (pour le mouvement de stock),
5. Mettre la date du relevé, par défaut la même (utilisé lors de la facturation de la RFC, selon la
date de travail/calcul, si facturation il y a),
6. Mettre le statut et le dépôt,
7. Saisir le relevé compteur,
8. <Disquette> ou <F2>.
Si la SSC doit être conservée :
9. Cocher "Ne pas facturer",
10. Décocher toutes les lignes de RFC.
Paramètres
PARAMÉTRAGE
Reprise en une seule fois
Paramètres application / Paramètres application / Gérer les paramètres
Il est possible d'interdire la reprise logistique, obligeant ainsi à faire les deux étapes en une seule.
les deux reprises sont chainées.
Paramètre ‘FORCER_REPRISE_EN_UNE_ETAPE'
Valeur :
§ Case cochée : les reprises logistiques et administratives s'enchainent
§ Case non cochée : la reprise logistique et administrative s'enchainent ou peuvent
s'effectuer en 2 étapes.
· Soit parce que les opérateurs concernés sont différents,
· Soit parce que les deux étapes ne peuvent des faire en même temps.
Avoir sur les Montants Forfaitaires lors de la reprise ou fermeture
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "AVOIR_SUR_MF"
Valeur :
§ Coché : Ce paramètre permet d'indiquer lors d'une reprise de bien ou d'une fermeture
de contrat si on rembourse les copies Non consommées dans le cas des règles de
facturation de type RFCMF,
§ Non coché : Non autorisé.
Avoir sur les Unités Consommées lors de la reprise ou fermeture
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "RBT_COPIES_NON_CONSOMMEES_RFCUC"
Valeur :
§ Coché : Indique lors d'une reprise de bien ou d'une fermeture de contrat si on
rembourse les copies Non consommées dans le cas des règles de facturation de type
RFCUC,
§ Non coché : Non autorisé.
Avoir sur les Forfait+ Régularisation lors de la reprise ou fermeture
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "AVOIR_SUR_MF"
Valeur :
§ Coché : Indique lors d'une reprise de bien ou d'une fermeture de contrat si on
rembourse les copies Non consommées dans le cas des règles de facturation de type
RFCFR,
§ Non coché : Non autorisé.
Avoir sur les Tranche lors de la reprise ou fermeture
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "RBT_COPIES_NON_CONSOMMEES_RFCT"
Valeur :
§ Coché : Indique lors d'une reprise de bien ou d'une fermeture de contrat si on
rembourse les copies Non consommées dans le cas des règles de facturation de type
RFCT,
§ Non coché : Non autorisé.
Avoir sur les GTB lors de la reprise ou fermeture
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "RBT_COPIES_NON_CONSOMMEES_RFCGTB"
Valeur :
§ Coché : Indique lors d'une reprise de bien ou d'une fermeture de contrat si on
rembourse les copies Non consommées dans le cas des règles de facturation de type
RFCGTB,
§ Non coché : Non autorisé.
Avoir sur les SF1 lors de la reprise ou fermeture
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "RBT_COPIES_NON_CONSOMMEES_RFCSF"
Valeur :
§ Coché : Indique lors d'une reprise de bien ou d'une fermeture de contrat si on
rembourse les copies Non consommées dans le cas des règles de facturation de type
RFCSF,
§ Non coché : Non autorisé.
Avoir sur les Montant Forfaitaire pour x Grandeur lors de la reprise ou fermeture
Paramètres application / Paramètres application / Gérer les paramètres
Paramètre "RBT_UNITES_NON_CONSOMMEES_RFCMFG"
Valeur :
§ Coché : Indique lors d'une reprise de bien ou d'une fermeture de contrat si on
rembourse les copies Non consommées dans le cas des règles de facturation de type
RFCMFG,
§ Non coché : Non autorisé.
Mettre en place un motif de fermeture lors de la reprise
METTRE EN PLACE UN MOTIF DE FERMETURE LORS DE LA
REPRISE
L'utilisateur a la possibilité d'indiquer un motif de fermeture lors de la reprise administrative, dans le
cas elle conduit à la fermeture de la SSC.
Classification
