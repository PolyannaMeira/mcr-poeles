import { ArrowLeft, Shield, Eye, Database, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const PolitiqueConfidentialite = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header simple */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour à l'accueil
                    </Link>
                </div>
            </header>

            {/* Contenu */}
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="flex items-center gap-3 mb-8">
                    <Shield className="w-8 h-8 text-orange-600" />
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Politique de Confidentialité
                    </h1>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
                    {/* Introduction */}
                    <section>
                        <div className="flex items-start gap-3 mb-4">
                            <UserCheck className="w-6 h-6 text-orange-600 mt-1" />
                            <h2 className="text-xl font-semibold text-gray-900">
                                Engagement de confidentialité
                            </h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            M.C.R s'engage à protéger la confidentialité et la sécurité de vos
                            données personnelles. Cette politique explique comment nous collectons,
                            utilisons et protégeons vos informations conformément au RGPD et à la loi
                            "Informatique et Libertés".
                        </p>
                    </section>

                    {/* Données collectées */}
                    <section>
                        <div className="flex items-start gap-3 mb-4">
                            <Database className="w-6 h-6 text-orange-600 mt-1" />
                            <h2 className="text-xl font-semibold text-gray-900">
                                Données collectées
                            </h2>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <h3 className="font-medium text-gray-900 mb-2">Données d'identification :</h3>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Nom et prénom</li>
                                    <li>Adresse postale</li>
                                    <li>Numéro de téléphone</li>
                                    <li>Adresse email</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900 mb-2">Données techniques :</h3>
                                <ul className="list-disc list-inside space-y-1 ml-4">
                                    <li>Adresse IP</li>
                                    <li>Type de navigateur</li>
                                    <li>Pages visitées sur notre site</li>
                                    <li>Date et heure de visite</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Finalités */}
                    <section>
                        <div className="flex items-start gap-3 mb-4">
                            <Eye className="w-6 h-6 text-orange-600 mt-1" />
                            <h2 className="text-xl font-semibold text-gray-900">
                                Utilisation des données
                            </h2>
                        </div>
                        <div className="space-y-4 text-gray-700">
                            <p>Nous utilisons vos données personnelles pour :</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Traiter vos demandes de devis et d'information</li>
                                <li>Vous contacter pour planifier des interventions</li>
                                <li>Gérer notre relation client</li>
                                <li>Améliorer nos services et notre site web</li>
                                <li>Respecter nos obligations légales et réglementaires</li>
                                <li>Établir des factures et gérer la comptabilité</li>
                            </ul>
                        </div>
                    </section>

                    {/* Base légale */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Base légale du traitement
                        </h2>
                        <div className="space-y-3 text-gray-700">
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <p><strong>Consentement :</strong> Lorsque vous nous contactez via notre formulaire</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <p><strong>Intérêt légitime :</strong> Pour améliorer nos services et assurer la sécurité</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <p><strong>Obligation légale :</strong> Pour respecter nos obligations comptables et fiscales</p>
                            </div>
                        </div>
                    </section>

                    {/* Partage des données */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Partage et transfert des données
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Vos données personnelles ne sont pas vendues, louées ou échangées à des tiers
                                à des fins commerciales.
                            </p>
                            <p>Nous pouvons partager vos données avec :</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Nos sous-traitants techniques (hébergement, maintenance)</li>
                                <li>Nos partenaires professionnels (fabricants, fournisseurs) si nécessaire</li>
                                <li>Les autorités compétentes si requis par la loi</li>
                            </ul>
                        </div>
                    </section>

                    {/* Durée de conservation */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Durée de conservation
                        </h2>
                        <div className="space-y-3 text-gray-700">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p><strong>Prospects :</strong> 3 ans après le dernier contact</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p><strong>Clients :</strong> 10 ans après la fin de la relation contractuelle</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p><strong>Données techniques :</strong> 13 mois maximum</p>
                            </div>
                        </div>
                    </section>

                    {/* Vos droits */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Vos droits
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p>Vous disposez des droits suivants :</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h3 className="font-medium text-gray-900 mb-2">Droit d'accès</h3>
                                    <p className="text-sm">Connaître les données que nous détenons sur vous</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h3 className="font-medium text-gray-900 mb-2">Droit de rectification</h3>
                                    <p className="text-sm">Corriger des données incorrectes ou incomplètes</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h3 className="font-medium text-gray-900 mb-2">Droit d'effacement</h3>
                                    <p className="text-sm">Demander la suppression de vos données</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h3 className="font-medium text-gray-900 mb-2">Droit d'opposition</h3>
                                    <p className="text-sm">Vous opposer au traitement de vos données</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h3 className="font-medium text-gray-900 mb-2">Droit à la portabilité</h3>
                                    <p className="text-sm">Récupérer vos données dans un format lisible</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h3 className="font-medium text-gray-900 mb-2">Droit de limitation</h3>
                                    <p className="text-sm">Limiter le traitement de vos données</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Comment exercer vos droits */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Exercer vos droits
                        </h2>
                        <div className="bg-orange-50 p-6 rounded-lg">
                            <p className="text-gray-700 mb-4">
                                Pour exercer vos droits, contactez-nous :
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>Par email :</strong> n.pinto.courtage@gmail.com</li>
                                <li><strong>Par courrier :</strong> M.C.R, 1050 ROUTE DE LA BASSEE, 62750 LOOS EN GOHELLE</li>
                            </ul>
                            <p className="text-sm text-gray-600 mt-4">
                                Une pièce d'identité pourra vous être demandée pour vérifier votre identité.
                            </p>
                        </div>
                    </section>

                    {/* Sécurité */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Sécurité des données
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
                                pour protéger vos données personnelles :
                            </p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>Chiffrement des données sensibles</li>
                                <li>Accès restreint aux données personnelles</li>
                                <li>Sauvegarde régulière des données</li>
                                <li>Formation de nos équipes à la protection des données</li>
                            </ul>
                        </div>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Contact et réclamations
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Si vous avez des questions concernant cette politique de confidentialité
                                ou nos pratiques de protection des données, contactez-nous.
                            </p>
                            <p>
                                Vous avez également le droit de déposer une plainte auprès de la CNIL
                                (Commission Nationale de l'Informatique et des Libertés) si vous estimez
                                que le traitement de vos données constitue une violation de vos droits.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p><strong>CNIL :</strong> 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</p>
                                <p><strong>Site web :</strong> www.cnil.fr</p>
                            </div>
                        </div>
                    </section>

                    {/* Mise à jour */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Mise à jour de cette politique
                        </h2>
                        <p className="text-gray-700">
                            Cette politique de confidentialité peut être mise à jour périodiquement.
                            La date de dernière mise à jour est indiquée en bas de cette page.
                        </p>
                        <div className="bg-orange-50 p-4 rounded-lg mt-4">
                            <p className="text-sm text-gray-600">
                                <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default PolitiqueConfidentialite;