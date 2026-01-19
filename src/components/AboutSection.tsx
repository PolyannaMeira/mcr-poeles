import { MapPin, Users, Heart, Award } from "lucide-react";
import equipeExperts from "../assets/equipe-experts.jpg";

const AboutSection = () => {
  const stats = [
    { value: "250+", label: "Installations réalisées" },
    { value: "7", label: "Années d'expérience" },
    { value: "98%", label: "Clients satisfaits" },
    { value: "24h", label: "Délai de réponse" },
  ];

  const values = [
    {
      icon: MapPin,
      title: "Proximité Locale",
      description: "Basés dans votre région, nous intervenons rapidement et connaissons parfaitement les spécificités climatiques locales.",
    },
    {
      icon: Users,
      title: "Savoir-faire",
      description: "Nos équipes sont formées aux dernières techniques et certifiées RGE pour une installation dans les règles de l'art.",
    },
    {
      icon: Heart,
      title: "Engagement Qualité",
      description: "Une gamme de poêles sélectionnés avec soin répondant à des normes de qualité accrues.",
    },
    {
      icon: Award,
      title: "Garantie Totale",
      description: "3 ans de garantie sur nos installations, garantie décennale.",
    },
  ];

  return (
    <section id="apropos" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image et stats */}
          <div className="relative">
            <div className="relative">
              <img
                //src=
                alt="Notre équipe d'experts en installation de poêles"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              
              {/* Overlay décoratif */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-200/60 rounded-2xl -z-10" />
            </div>

            {/* Stats overlay */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-4 text-center shadow-lg border border-gray-200"
                >
                  <p className="font-bold text-2xl md:text-3xl text-orange-600">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contenu textuel */}
          <div>
            <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              À propos de nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Votre Expert en Chauffage au Bois
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Depuis plus de 7 ans, nous accompagnons les foyers français dans leur transition 
              vers un chauffage plus économique et écologique. Notre expertise et notre 
              engagement qualité font de nous le partenaire idéal pour votre projet.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nous avons sélectionné pour vous une gamme de poêles de très haute qualité, ayant des performances énergétiques de pointe et au design élégant qui s'intègreront dans tous les intérieurs.
            </p>

            {/* Valeurs */}
            <div className="space-y-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                    <value.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;