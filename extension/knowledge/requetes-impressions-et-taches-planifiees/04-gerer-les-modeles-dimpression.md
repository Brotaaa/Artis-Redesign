# Gérer les modèles d'impression

> Categorie: Requêtes, impressions et tâches planifiées | Pages 809-812

## Sous-rubriques
- Requêtes, impressions et tâches planifiées (p.809)
- Gérer les requêtes (p.809)
- Exporter les requêtes (p.809)
- Importer les requêtes (p.809)

Réservé à ARTIS.
Requêtes, impressions et tâches planifiées
Gérer les requêtes
GÉRER LES REQUÊTES
Toutes les impressions depuis ARTIS.NET passent obligatoirement par une requête. Les requêtes
sont :
o Des requêtes créées à l'aide du requêteur, basées sur des classes et des relations, et des
sélections de champs (attributs).
o Des requêtes stockées. Ces requêtes sont créées de toutes pièces à l'aide d'un programme.
Dans le requêteur, il a juste été nécessaire de faire la liste des champs que le programme
alimente.
C'est une liste "à plat" de tous les champs de la requête.
Cette option est réservée à des utilisateurs de type "admin" ayant une connaissance approfondie
sur l'utilisation du requêteur ARTIS.net.
Exporter les requêtes
EXPORTER LES REQUÊTES
Réservé à ARTIS.
Importer les requêtes
IMPORTER LES REQUÊTES
Réservé à ARTIS.
Gérer les modèles d'impression
GÉRER LES MODÈLES D'IMPRESSION
Requêtes, impressions et tâches planifiées / Gérer les modèles d'impression
Le modèle d'impression permet d'avoir une structure sur les champs retournés par la requête. Cette
structure est générée au moment de l'impression. Le fichier résultat est un fichier de données de
type "xml".
Lors d'une demande d'impression de la part de l'utilisateur, l'outil FOP se sert de ce fichier et du
fichier d'impression (fichier de type "xsl" qui correspond au format d'impression) afin de produire le
document résultat.
Lors de la mise au point d'un document, l'outil X slFast permet à partir du fichier de description, et
de ce fichier de données, de créer, de mettre en page le document résultat et enfin de générer le
fichier d'impression de type "xsl".
Fichier de description
Le fichier de description complète est générer à partir du lien "Générer squelette" de l'écran
précédent. Le fichier "VEN_LignesFactArtVendu_v3_stk.xml" ci-dessous est une liste exhaustive
des informations générées par ARTIS.NET. Ce fichier sert de base de travail à la création d'un
document X slFast, afin de générer un fichier d'impression exploitable ('.xsl') par ARTIS.NET.
<?xml version="1.0" encoding="ISO-8859-1"?>
<VEN_LignesFactArtVendu_v3_stk ID="991" TYPE="SECTIONPRINCIPALE" DESCRIPTION="Modèle avec
requête stockée pour impression factures client (Anne &amp; Lucian) (ok)">
    <VEN_ri_LignesFactArtVendu_v3_stk ID="990" TYPE="SECTIONREQUETE" DESCRIPTION=" ">
        <FactureEnvoyeePar ID="946" TYPE="SECTIONREQUETE" DESCRIPTION=" ">
            <Factureenvoyéepar ID="945" TYPE="SECTIONFEUILLE" DESCRIPTION="
">Factureenvoyéepar</Factureenvoyéepar>
            <Client ID="948" TYPE="SECTIONREQUETE" DESCRIPTION=" ">
                <CODECLIENT ID="947" TYPE="SECTIONFEUILLE" DESCRIPTION=" ">CODECLIENT</
CODECLIENT>
                <CLIENT-Raisonsociale ID="949" TYPE="SECTIONFEUILLE" DESCRIPTION="
">CLIENT-Raisonsociale</CLIENT-Raisonsociale>
                <Facture ID="951" TYPE="SECTIONREQUETE" DESCRIPTION=" ">
                    <CLIENT-Adr1.1-No ID="950" TYPE="SECTIONFEUILLE" DESCRIPTION="
">CLIENT-Adr1.1-No</CLIENT-Adr1.1-No>
                    <CLIENT-Adr1.2-Voie ID="952" TYPE="SECTIONFEUILLE" DESCRIPTION="
">CLIENT-Adr1.2-Voie</CLIENT-Adr1.2-Voie>
                    <CLIENT-Adr2.1-Quartier ID="953"
                        TYPE="SECTIONFEUILLE" DESCRIPTION=" ">CLIENT-Adr2.1-Quartier</
CLIENT-Adr2.1-Quartier>
                    <CLIENT-Adr2.2-Immeuble ID="954"
                        TYPE="SECTIONFEUILLE" DESCRIPTION=" ">CLIENT-Adr2.2-Immeuble</
CLIENT-Adr2.2-Immeuble>
                    <CLIENT-Adr3.1-CP ID="955" TYPE="SECTIONFEUILLE" DESCRIPTION="
">CLIENT-Adr3.1-CP</CLIENT-Adr3.1-CP>
                    <CLIENT-Adr3.2-Ville ID="956" TYPE="SECTIONFEUILLE" DESCRIPTION="
">CLIENT-Adr3.2-Ville</CLIENT-Adr3.2-Ville>
                    <FACTURE ID="957" TYPE="SECTIONFEUILLE" DESCRIPTION=" ">FACTURE</
FACTURE>
                    <DATE ID="958" TYPE="SECTIONFEUILLE" DESCRIPTION=" ">DATE</DATE>
                    <TOTALT.T.C. ID="959" TYPE="SECTIONFEUILLE" DESCRIPTION="
">TOTALT.T.C.</TOTALT.T.C.>
                    <ACOMPTE ID="960" TYPE="SECTIONFEUILLE" DESCRIPTION=" ">ACOMPTE</
ACOMPTE>
                    <NETAPAYER ID="961" TYPE="SECTIONFEUILLE" DESCRIPTION=" ">NETAPAYER</
NETAPAYER>
                    <MODEDEREGLEMENT ID="962" TYPE="SECTIONFEUILLE" DESCRIPTION="
">MODEDEREGLEMENT</MODEDEREGLEMENT>
                    <DATEECHEANCE ID="963" TYPE="SECTIONFEUILLE" DESCRIPTION="
">DATEECHEANCE</DATEECHEANCE>
                    <COMMENTAIREFACTURE ID="964" TYPE="SECTIONFEUILLE" DESCRIPTION="
">COMMENTAIREFACTURE</COMMENTAIREFACTURE>
                    <IsProforma ID="5009" TYPE="SECTIONFEUILLE"
DESCRIPTION="">IsProforma</IsProforma>
                    <LigneFacture ID="966" TYPE="SECTIONREQUETE" DESCRIPTION=" ">
                        <CODEARTIS ID="965" TYPE="SECTIONFEUILLE" DESCRIPTION="
">CODEARTIS</CODEARTIS>
                        <REF.FOURNISSEUR ID="967" TYPE="SECTIONFEUILLE" DESCRIPTION="
">REF.FOURNISSEUR</REF.FOURNISSEUR>
                        <DESIGNATION ID="968" TYPE="SECTIONFEUILLE" DESCRIPTION="
">DESIGNATION</DESIGNATION>
                        <MARQUE ID="969" TYPE="SECTIONFEUILLE" DESCRIPTION=" ">MARQUE</
MARQUE>
                        <QUANTITELIVREE ID="970" TYPE="SECTIONFEUILLE" DESCRIPTION="
">QUANTITELIVREE</QUANTITELIVREE>
                        <P.U.H.T. ID="971" TYPE="SECTIONFEUILLE" DESCRIPTION="
">P.U.H.T.</P.U.H.T.>
                        <P.U.H.T.NET ID="972" TYPE="SECTIONFEUILLE" DESCRIPTION="
">P.U.H.T.NET</P.U.H.T.NET>
                        <MONTANTH.T. ID="973" TYPE="SECTIONFEUILLE" DESCRIPTION="
">MONTANTH.T.</MONTANTH.T.>
                        <TVA ID="974" TYPE="SECTIONFEUILLE" DESCRIPTION=" ">TVA</TVA>
                        <COMMENTAIREDELIGNE ID="975"
                            TYPE="SECTIONFEUILLE" DESCRIPTION=" ">COMMENTAIREDELIGNE</
COMMENTAIREDELIGNE>
                        <IDLIGNE ID="976" TYPE="SECTIONFEUILLE" DESCRIPTION=" ">IDLIGNE</
IDLIGNE>
                        <AFFICHE_PIED ID="977" TYPE="SECTIONFEUILLE" DESCRIPTION="
">AFFICHE_PIED</AFFICHE_PIED>
                        <Matricules ID="979" TYPE="SECTIONREQUETE" DESCRIPTION=" ">
                            <MATRICULE ID="978" TYPE="SECTIONFEUILLE" DESCRIPTION="
">MATRICULE</MATRICULE>
                        </Matricules>
                        <Lignescommentaires ID="981"
                            TYPE="SECTIONREQUETE" DESCRIPTION=" ">
                            <COMMENTAIREAVECMISEENEVIDENCE ID="980"
                                TYPE="SECTIONFEUILLE" DESCRIPTION="
">COMMENTAIREAVECMISEENEVIDENCE</COMMENTAIREAVECMISEENEVIDENCE>
                            <IDLIGNECOMMENT ID="982"
                                TYPE="SECTIONFEUILLE" DESCRIPTION=" ">IDLIGNECOMMENT</
IDLIGNECOMMENT>
                        </Lignescommentaires>
                    </LigneFacture>
                    <SectionTVA ID="984" TYPE="SECTIONREQUETE" DESCRIPTION=" ">
                        <MONTANTH.T.-séctionTVA ID="983"
                            TYPE="SECTIONFEUILLE" DESCRIPTION=" ">MONTANTH.T.-
séctionTVA</MONTANTH.T.-séctionTVA>
                        <F.T.C.-séctionTVA ID="985"
                            TYPE="SECTIONFEUILLE" DESCRIPTION=" ">F.T.C.-séctionTVA</
F.T.C.-séctionTVA>
                        <CodeTVA-séctionTVA ID="986"
                            TYPE="SECTIONFEUILLE" DESCRIPTION=" ">CodeTVA-séctionTVA</
CodeTVA-séctionTVA>
                        <BASET.V.A.-séctionTVA ID="987"
                            TYPE="SECTIONFEUILLE" DESCRIPTION=" ">BASET.V.A.-séctionTVA</
BASET.V.A.-séctionTVA>
                        <TAUX-séctionTVA ID="988" TYPE="SECTIONFEUILLE" DESCRIPTION="
">TAUX-séctionTVA</TAUX-séctionTVA>
                        <MONTANTT.V.A.S_DEBIT-séctionTVA ID="989"
                            TYPE="SECTIONFEUILLE" DESCRIPTION=" ">MONTANTT.V.A.S_DEBIT-
séctionTVA</MONTANTT.V.A.S_DEBIT-séctionTVA>
                    </SectionTVA>
                </Facture>
            </Client>
        </FactureEnvoyeePar>
    </VEN_ri_LignesFactArtVendu_v3_stk>
</VEN_LignesFactArtVendu_v3_stk>
Extrait d'une ligne :
<CODECLIENT ID="947" TYPE="SECTIONFEUILLE" DESCRIPTION=" ">CODECLIENT</CODECLIENT>
└--------------------------------------------------------- ┘└-------- ┘└----------- ┘
Balise 1      info       Balise 2
o Balise 1 : est une balise d'ouverture qui possède :
§ Nom : nom de la balise,
§ Attribut : les attributs (Id, Type, Description) qui sont optionnels, sont générés dans le
squelette, mais disparaissent dans le fichier de données,
o Info : Information générée (dans le cas du squelette, l'information est égale à son nom,
o Balise 2 : est caractérisée par son nom identique à la balise d'ouverture, précédée de « / » (qui
indique la fermeture).
Exemple de fichier de données
Ci-dessous, un exemple de fichier de données généré par ARTIS.NET en vu d'impression d'une
facture. Le nom du fichier reprend le nom du modèle d'impression. Le fichier porte le nom :
"VEN_LignesFactArtVendu_v3_stk_1162798275326_2006-11-06.xml".
<?xml version="1.0" encoding="ISO-8859-1"?>
<VEN_LignesFactArtVendu_v3_stk>
    <VEN_ri_LignesFactArtVendu_v3_stk>
        <FactureEnvoyeePar>
            <Factureenvoyéepar>002</Factureenvoyéepar>
            <Facture>
                <MODEDEREGLEMENT>CHEQUE A RECEPTION</MODEDEREGLEMENT>
                <MONTANTECHEANCE2>0.0</MONTANTECHEANCE2>
                <IsProforma>N</IsProforma>
                <FACTURE>002130310</FACTURE>
                <TOTALT.T.C.>166.24</TOTALT.T.C.>
                <DATEECHEANCE4> </DATEECHEANCE4>
                <MONTANTECHEANCE3>0.0</MONTANTECHEANCE3>
                <NETAPAYER>166.24</NETAPAYER>
                <DATEECHEANCE3> </DATEECHEANCE3>
                <ACOMPTE>0.0</ACOMPTE>
                <DATE>2006-11-03</DATE>
                <CLIENT-Adr1.2-Voie>CENTRE E. LECLERC</CLIENT-Adr1.2-Voie>
                <MONTANTECHEANCE4>0.0</MONTANTECHEANCE4>
                <CLIENT-Adr2.1-Quartier>31 ALLEE ROCH PAPE</CLIENT-Adr2.1-Quartier>
                <CLIENT-Adr3.1-CP>84300</CLIENT-Adr3.1-CP>
                <DATEECHEANCE1>2006-11-18</DATEECHEANCE1>
                <CLIENT-Adr3.2-Ville>CAVAILLON</CLIENT-Adr3.2-Ville>
                <EXEMPLAIREN>1-002130310</EXEMPLAIREN>
                <DATEECHEANCE2> </DATEECHEANCE2>
                <MONTANTECHEANCE1>166.24</MONTANTECHEANCE1>
                <Client>
                    <CLIENT-Raisonsociale>SA CHEPAR</CLIENT-Raisonsociale>
                    <CPT_COMPTABLE>00002754</CPT_COMPTABLE>
                    <CODECLIENT>00002754</CODECLIENT>
                </Client>
                <LigneFacture>
                    <COMMENTAIREDELIGNE> </COMMENTAIREDELIGNE>
                    <P.U.H.T.NET> </P.U.H.T.NET>
                    <MARQUE> </MARQUE>
                    <CODEARTIS> </CODEARTIS>
                    <TVA> </TVA>
                    <P.U.H.T.> </P.U.H.T.>
                    <DESIGNATION> </DESIGNATION>
                    <AFFICHE_PIED>0</AFFICHE_PIED>
                    <MONTANTH.T.> </MONTANTH.T.>
                    <QUANTITELIVREE> </QUANTITELIVREE>
                    <IDLIGNE> </IDLIGNE>
                    <REF.FOURNISSEUR> </REF.FOURNISSEUR>
                    <Matricules>
                        <MATRICULE> </MATRICULE>
                    </Matricules>
                    <Lignescommentaires>
                        <COMMENTAIREAVECMISEENEVIDENCE>Interv 00200604600/00200604601-27/10/2006 16:15</
COMMENTAIREAVECMISEENEVIDENCE>
                        <IDLIGNECOMMENT>1297485</IDLIGNECOMMENT>
                    </Lignescommentaires>
                    <Lignescommentaires>
                        <IDLIGNECOMMENT>1297486</IDLIGNECOMMENT>
