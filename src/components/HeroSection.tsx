import { Shield, Award, Clock, ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-poele.jpg";

const HeroSection = () => {
  const badges = [
    { icon: Shield, text: "Éligible MaPrimeRénov'" },
    { icon: Award, text: "Installation RGE" },
    { icon: Clock, text: "Garantie 10 ans" },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    const element = document.querySelector("#produits");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Famille profitant de la chaleur d'un poêle EK36"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
      </div>

      {/* Layout principal */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenu de gauche */}
          <div className="max-w-2xl">
            {/* Badge de confiance */}
            <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-100 px-4 py-2 rounded-full text-sm font-medium mb-3 border border-green-400/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Expert chauffage depuis 7 ans
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight mb-6">
              Chauffez votre maison avec{" "}
              <span className="text-orange-400">élégance</span> et{" "}
              <span className="text-orange-400">économie</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Installation experte de poêles à bois et à granulés. Profitez d'un 
              confort thermique optimal tout en réduisant vos factures d'énergie.
            </p>

            {/* Badges de réassurance */}
            <div className="flex flex-wrap gap-3 md:gap-4 mb-8">
              {badges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg border border-white/20"
                >
                  <badge.icon className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
                  <span className="text-xs md:text-sm font-medium text-white">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all group flex items-center justify-center"
              >
                Obtenir mon étude gratuite
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToProducts}
                className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-lg backdrop-blur-sm bg-gray-900/30 transition-all"
              >
                Découvrir nos produits
              </button>
            </div>
          </div>

          {/* Espaçador invisível para manter o grid */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Stats flottants - POSICIONADO MAIS EMBAIXO */}
      <div className="hidden lg:block absolute right-9 bottom-2">
        <div className="bg-white/90 backdrop-blur-md rounded-xl p-2 shadow-lg border border-gray-200 w-40">
          <div className="space-y-4">
            <div className="text-center">
              <p className="font-bold text-2xl text-orange-600">-60%</p>
              <p className="text-xs text-gray-600">sur vos factures</p>
            </div>
            <div className="w-full h-px bg-gray-200" />
            <div className="text-center">
              <p className="font-bold text-2xl text-green-600">500+</p>
              <p className="text-xs text-gray-600">installations</p>
            </div>
            <div className="w-full h-px bg-gray-200" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-1">
                {/* 4 estrelas completas */}
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                {/* Meia estrela */}
                <div className="relative">
                  <span className="text-gray-300 text-lg">★</span>
                  <span className="absolute inset-0 text-yellow-400 text-lg overflow-hidden w-1/2">★</span>
                </div>
              </div>
              <p className="text-xs text-gray-600">4.5/5 clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;