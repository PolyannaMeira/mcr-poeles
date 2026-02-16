import { ArrowLeft, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const MentionsLegales = () => {
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


            <main className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    Mentions Légales
                </h1>

                <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Éditeur du site
                        </h2>
                        <div className="space-y-2 text-gray-700">
                            <p><strong>Raison sociale :</strong> M.C.R</p>
                            <p><strong>Forme juridique :</strong> SAS</p>
                            <p><strong>Capital social :</strong> 5000.00 EUROS</p>
                            <p><strong>RCS :</strong> ARRAS</p>
                            <p><strong>SIRET :</strong> 95169677200015</p>
                            <p><strong>TVA Intracommunautaire :</strong> FR88951696772</p>
                        </div>
                    </section>


                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Coordonnées
                        </h2>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-orange-600" />
                                <p className="text-gray-700">
                                    Siège social : 1050 ROUTE DE LA BASSEE<br />
                                    62750 LOOS EN GOHELLE
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-orange-600" />
                                <p className="text-gray-700">0698373463</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-orange-600" />
                                <p className="text-gray-700">n.pinto.courtage@gmail.com</p>
                            </div>
                        </div>
                    </section>


                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Directeur de publication
                        </h2>
                        <p className="text-gray-700">Meira, Polyanna</p>
                    </section>


                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Hébergement
                        </h2>
                        <div className="text-gray-700">
                            <p><strong>Hébergeur :</strong> Hostinger International Ltd.</p>
                            <p><strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
                            <p><strong>Site web :</strong> www.hostinger.fr</p>
                        </div>
                    </section>

                    {/* Propriété intellectuelle */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Propriété intellectuelle
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, etc.)
                                est protégé par les dispositions du Code de la propriété intellectuelle.
                            </p>
                            <p>
                                Toute reproduction, représentation, modification, publication, adaptation de tout
                                ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé,
                                est interdite, sauf autorisation écrite préalable de M.C.R.
                            </p>
                        </div>
                    </section>

                    {/* Responsabilité */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Limitation de responsabilité
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Les informations contenues sur ce site sont aussi précises que possible et
                                le site est périodiquement remis à jour, mais peut toutefois contenir
                                des inexactitudes, des omissions ou des lacunes.
                            </p>
                            <p>
                                M.C.R ne pourra en aucun cas être tenue responsable de tout
                                dommage de quelque nature qu'il soit résultant de l'interprétation ou
                                de l'utilisation des informations et/ou documents disponibles sur ce site.
                            </p>
                        </div>
                    </section>

                    {/* Données personnelles */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Protection des données personnelles
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée
                                et au Règlement Général sur la Protection des Données (RGPD), vous disposez
                                d'un droit d'accès, de rectification, de suppression et d'opposition aux
                                données personnelles vous concernant.
                            </p>
                            <p>
                                Pour exercer ce droit, vous pouvez nous contacter à l'adresse email
                                mentionnée ci-dessus.
                            </p>
                        </div>
                    </section>

                    {/* Cookies */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Cookies
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement.
                            </p>
                            <p>
                                Vous pouvez configurer votre navigateur pour refuser les cookies,
                                mais certaines fonctionnalités du site pourraient alors être indisponibles.
                            </p>
                        </div>
                    </section>

                    {/* Droit applicable */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Droit applicable et juridiction
                        </h2>
                        <p className="text-gray-700">
                            Les présentes mentions légales sont soumises au droit français. En cas de litige,
                            et après tentative de résolution amiable, les tribunaux français seront seuls compétents.
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default MentionsLegales;