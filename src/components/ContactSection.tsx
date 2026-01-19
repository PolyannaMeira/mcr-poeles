import { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    codePostal: "",
    typeProjet: "granules",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (à remplacer par l'URL Google Forms ou API)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    { icon: Phone, label: "Téléphone", value: "01 23 45 67 89" },
    { icon: Mail, label: "Email", value: "contact@ek36-chauffage.fr" },
    { icon: MapPin, label: "Zone d'intervention", value: "Nous intervenons dans les départements du Nord et du Pas de Calais." },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Informations de contact */}
          <div>
            <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Contactez-nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Démarrez Votre Projet Aujourd'hui
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Remplissez le formulaire pour recevoir une étude personnalisée gratuite. 
              Notre équipe vous recontacte sous 24h pour discuter de votre projet.
            </p>

            {/* Infos contact */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="font-semibold text-gray-900">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Avantages du formulaire */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Ce que vous obtenez :</h3>
              <ul className="space-y-3">
                {[
                  "Étude personnalisée de votre projet",
                  "Estimation des économies réalisables",
                  "Simulation des aides disponibles",
                  "Devis gratuit et détaillé sans engagement",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-bold text-2xl text-gray-900 mb-4">
                    Merci pour votre demande !
                  </h3>
                  <p className="text-gray-600">
                    Un conseiller vous recontactera dans les 24 heures.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-900">
                        Nom *
                      </label>
                      <input
                        id="nom"
                        name="nom"
                        type="text"
                        placeholder="Votre nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="prenom" className="block text-sm font-medium text-gray-900">
                        Prénom *
                      </label>
                      <input
                        id="prenom"
                        name="prenom"
                        type="text"
                        placeholder="Votre prénom"
                        required
                        value={formData.prenom}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.fr"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="telephone" className="block text-sm font-medium text-gray-900">
                        Téléphone *
                      </label>
                      <input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="codePostal" className="block text-sm font-medium text-gray-900">
                        Code Postal *
                      </label>
                      <input
                        id="codePostal"
                        name="codePostal"
                        type="text"
                        placeholder="75001"
                        required
                        value={formData.codePostal}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="typeProjet" className="block text-sm font-medium text-gray-900">
                      Type de projet *
                    </label>
                    <select
                      id="typeProjet"
                      name="typeProjet"
                      value={formData.typeProjet}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    >
                      <option value="granules">Poêle à Granulés</option>
                      <option value="bois">Poêle à Bois</option>
                      <option value="indecis">Je ne sais pas encore</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 disabled:opacity-50 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Envoyer ma demande
                      </span>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe. 
                    Vos données sont protégées et ne seront jamais partagées.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;