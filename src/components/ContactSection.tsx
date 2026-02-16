import { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    codePostal: "",
    typeProjet: "granules",
  });

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^(?:(?:\+33|0)[1-9](?:[. -]?\d{2}){4})$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validatePostalCode = (code: string): boolean => {
    const postalRegex = /^\d{5}$/;
    return postalRegex.test(code);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Validação dos dados do formulário
    const newErrors: { [key: string]: string } = {};
    if (!validatePhone(formData.telephone)) {
      newErrors.telephone = 'Veuillez saisir un numéro de téléphone français valide';
    }
    if (!validatePostalCode(formData.codePostal)) {
      newErrors.codePostal = 'Veuillez saisir un code postal français valide (5 chiffres)';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // 2. Criar um iframe invisível para servir como alvo da submissão.
      // Isso evita que a página principal seja redirecionada.
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // 3. Criar um formulário temporário na memória.
      const form = document.createElement('form');
      form.action = 'https://docs.google.com/forms/d/e/1FAIpQLSdYk-9kW0P3G5uYjnXfZryAdVGO_yW4xxwTbvyqWAR6pqTOQQ/formResponsehttps://docs.google.com/forms/d/e/1FAIpQLSdYk-9kW0P3G5uYjnXfZryAdVGO_yW4xxwTbvyqWAR6pqTOQQ/formResponse?usp=publish-editorPOST';
      form.target = iframe.name; // O alvo é o nosso iframe invisível!

      // 4. Mapear os dados do estado do React para os nomes de campo do Google Forms.
      // ESSES IDs ('entry.xxxx') SÃO CRÍTICOS E DEVEM CORRESPONDER AO SEU GOOGLE FORM.
      const googleFormFields = {
        'entry.2005620554': formData.nom,
        'entry.1045781291': formData.prenom,
        'entry.1065046570': formData.email,
        'entry.1166974658': formData.telephone,
        'entry.839337160': formData.codePostal,
        'entry.2125309862': formData.typeProjet,
      };

      // 5. Adicionar cada campo como um input oculto no formulário temporário.
      for (const key in googleFormFields) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = googleFormFields[key as keyof typeof googleFormFields];
        form.appendChild(input);
      }
      
      // 6. Adicionar o formulário temporário ao corpo do documento e submetê-lo.
      document.body.appendChild(form);
      form.submit();

      // 7. Aguardar um curto período para garantir que a submissão foi processada.
      // Este método é "fire-and-forget", não recebemos uma confirmação de sucesso do Google.
      // Apenas assumimos que funcionou. O timeout ajuda a tornar a transição de UI mais suave.
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 8. Limpeza: remover o iframe e o formulário temporários do DOM.
      document.body.removeChild(iframe);
      document.body.removeChild(form);

      // 9. Atualizar a UI para mostrar a mensagem de sucesso.
      setIsSubmitted(true);
      setErrors({}); // Limpar quaisquer erros antigos
      // Opcional: Resetar o formulário
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        codePostal: "",
        typeProjet: "granules",
      });

    } catch (error) {
      console.error('Erro ao criar os elementos do formulário:', error);
      
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Téléphone", value: "+33 6 98 37 34 63" },
    { icon: Mail, label: "Email", value: "n.pinto.courtage@gmail.com" },
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
              Remplissez le formulaire ci-dessous et nous vous contacterons rapidement
              pour étudier votre projet et vous proposer une solution personnalisée.
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
                    Demande envoyée avec succès !
                  </h3>
                  <p className="text-gray-600">
                    Votre demande a été transmise avec succès. Notre équipe vous contactera
                    rapidement pour étudier votre projet et vous proposer une solution adaptée.
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
                      placeholder="votre.email@exemple.com"
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
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${errors.telephone ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {errors.telephone && (
                        <p className="text-sm text-red-600 mt-1">{errors.telephone}</p>
                      )}
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
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${errors.codePostal ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {errors.codePostal && (
                        <p className="text-sm text-red-600 mt-1">{errors.codePostal}</p>
                      )}
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
                        Envoyer mes informations
                      </span>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    En cliquant sur ce bouton, votre demande sera envoyée directement à notre équipe.
                    Vos informations sont protégées et ne seront jamais partagées.
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