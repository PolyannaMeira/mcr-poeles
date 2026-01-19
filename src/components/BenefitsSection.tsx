import { PiggyBank, Leaf, FileCheck, BadgeCheck } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: PiggyBank,
      title: "Économies Substantielles",
      description: "Réduisez vos factures d'énergie jusqu'à 60% grâce à la haute performance des modèles EDILKAMIN.",
      stat: "60%",
      statLabel: "d'économies",
    },
    {
      icon: Leaf,
      title: "Énergie Verte",
      description: "Energie verte poêles certifiés conformes RGE labelisés ecodesign 7 flammes.",
      stat: "100%",
      statLabel: "écologique",
    },
    {
      icon: FileCheck,
      title: "Accompagnement Complet",
      description: "Nous gérons l'intégralité de votre dossier administratif, vous ne payez que le reste à charge (MaPrimeRénov'). Nous vous proposons également des solutions de financement.",
      stat: "0%",
      statLabel: "de tracas",
    },
    {
      icon: BadgeCheck,
      title: "Expertise Certifiée",
      description: "Nos installateurs sont certifiés RGE et interviennent dans toute votre région avec un savoir-faire reconnu.",
      stat: "7+",
      statLabel: "ans d'expérience",
    },
  ];

  return (
    <section id="avantages" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Pourquoi nous choisir
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Des Avantages Concrets
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Faites le choix d'un chauffage performant, économique et respectueux de l'environnement 
            avec un accompagnement professionnel de A à Z.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-3xl text-orange-600">
                      {benefit.stat}
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      {benefit.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="font-bold text-2xl md:text-3xl mb-4">
            🔥 Éligible aux aides de l'État
          </h3>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-95">
            Bénéficiez de MaPrimeRénov' et des Certificats d'Économies d'Énergie (CEE) 
            pour financer votre projet de chauffage écologique.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['MaPrimeRénov', 'CEE', 'Éco-PTZ', 'TVA 5.5%'].map((aide) => (
              <span key={aide} className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold text-sm">
                {aide}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;