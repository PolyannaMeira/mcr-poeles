import { useState } from "react";
import { Flame, TreePine, Wrench, Wifi, ThermometerSun, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import poeleGranulesBerry from "../assets/berry_90.jpg";
import poeleGranulesEntity from "../assets/entity90.jpg";
import poeleGranulesCell80 from "../assets/cell80.jpg";
import poeleGranulesGotha70 from "../assets/gotha70.jpg";
import serviceEntretien from "../assets/service-entretien.jpg";

const ProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      type: "Poêle à Granulés",
      model: "BERRY 90+",
      image: poeleGranulesBerry,
      description: "Poêle à granulés étanche canalisable avec inserts latéraux et avant en céramique à effet « cadre » et porte en fonte.",
      features: [
        { icon: Wifi, text: "Système E-Smart avec Wi-Fi intégré" },
        { icon: ThermometerSun, text: "Programmation journalière/hebdomadaire" },
        { icon: Sparkles, text: "Design céramique premium" },
      ],
      
      badge: "Best-seller",
      badgeColor: "bg-orange-500",
    },
    {
      id: 2,
      type: "Poêle à Granulés", 
      model: "CELL80+",
      image: poeleGranulesEntity,
description: "Poêle à granulés étanche canalisable « gain de place » avec seulement 30,5 cm de profondeur, au design linéaire, idéal pour le couloir mais adapté à tous les espaces de la maison. Avec porte en fonte et côtés en acier.",
      features: [
        { icon: Flame, text: "Foyer en vermiculite" },
        { icon: TreePine, text: "Bougie en céramique" },
        { icon: Sparkles, text: "Four en inox intégré" },
      ],
      
      badge: "Tradition",
      badgeColor: "bg-amber-600",
    },
    {
      id: 3,
      type: "Poêle à Granulés",
      model: "HYBRID PRO",
      image: poeleGranulesCell80, 
      description: "Poêle à granulés étanche canalisable « gain de place » avec seulement 30,5 cm de profondeur, au design linéaire, idéal pour le couloir mais adapté à tous les espaces de la maison. Avec porte en fonte et côtés en acier.",
      features: [
        { icon: Flame, text: "Ventilation air chaud vers le front" },
        { icon: Wifi, text: "Système E-Smart avec Wi-Fi intégré" },
        { icon: Sparkles, text: "Fonction Easy Timer / Relax" },
      ],
      
      badge: "Innovation",
      badgeColor: "bg-blue-600",
    },
    {
      id: 4,
      type: "Poêle à Granulés",
      model: "GOTHA 70",
      image: poeleGranulesGotha70, 
      description: "Poêle à granulés étanche « gain de place » avec seulement 30 cm de profondeur, idéal pour le couloir, mais adapté à tous les espaces de la maison, avec porte et inserts frontaux en acier.",
      features: [
        { icon: Flame, text: "Ventilation air chaud vers le front" },
        { icon: Wifi, text: "Système E-Smart avec Wi-Fi intégré" },
        { icon: Sparkles, text: "Panneau synoptique sur le top" },
      ],
      
      badge: "Innovation",
      badgeColor: "bg-blue-600",
    },
    {
      id: 5,
      type: "Poêle à Granulés",
      model: "HYBRID PRO",
      image: poeleGranulesCell80, 
      description: "Poêle à granulés étanche canalisable « gain de place » avec seulement 30,5 cm de profondeur, au design linéaire, idéal pour le couloir mais adapté à tous les espaces de la maison. Avec porte en fonte et côtés en acier.",
      features: [
        { icon: Flame, text: "Ventilation air chaud vers le front" },
        { icon: Wifi, text: "Système E-Smart avec Wi-Fi intégré" },
        { icon: Sparkles, text: "Fonction Easy Timer / Relax" },
      ],
      
      badge: "Innovation",
      badgeColor: "bg-blue-600",
    },
    {
      id: 6,
      type: "Entretien & SAV",
      model: "Service Clé en Main",
      image: serviceEntretien,
      description: "Votre tranquillité d'esprit assurée. Contrat d'entretien annuel et garantie prolongée sur toute l'installation.",
      features: [
        { icon: Wrench, text: "Maintenance préventive" },
        { icon: ThermometerSun, text: "Intervention rapide" },
        { icon: Sparkles, text: "Pièces d'origine" },
      ],
      
      badge: "Sérénité",
      badgeColor: "bg-green-600",
    },
    
    
    
  ];

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Calculer le nombre de slides visibles selon la taille d'écran
  const getVisibleSlides = () => {
    if (window.innerWidth >= 1024) return 3; // lg et plus
    if (window.innerWidth >= 768) return 2;  // md
    return 1; // mobile
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

  // Mettre à jour le nombre de slides visibles au redimensionnement
  useState(() => {
    const handleResize = () => setVisibleSlides(getVisibleSlides());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const maxSlide = Math.max(0, products.length - visibleSlides);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section id="produits" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos Produits d'Excellence
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Découvrez notre sélection de poêles haute performance, alliant design contemporain 
            et technologie de pointe pour un chauffage optimal.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all -ml-6 group"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-orange-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all -mr-6 group"
            disabled={currentSlide === maxSlide}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-orange-600" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`
              }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-200">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={product.image}
                        alt={`${product.type} ${product.model}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = `https://images.unsplash.com/photo-1574263867128-c397a8d1b5e3?w=400&h=300&fit=crop`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                      
                      {/* Badge */}
                      <span className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                        {product.badge}
                      </span>

                      {/* Model */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white/80 text-sm font-medium">{product.type}</p>
                        <h3 className="text-white font-bold text-xl">{product.model}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                              <feature.icon className="w-4 h-4 text-orange-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-900">{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      

                      {/* CTA */}
                      <button
                        type="button"
                        onClick={scrollToContact}
                        className="w-full border-2 border-orange-200 text-orange-600 hover:bg-orange-600 hover:text-white hover:border-orange-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                      >
                        Demander un devis
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de slides */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxSlide + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === i ? 'bg-orange-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Vous ne savez pas quel modèle choisir ?
          </p>
          <button
            type="button"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Obtenir un conseil personnalisé
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;