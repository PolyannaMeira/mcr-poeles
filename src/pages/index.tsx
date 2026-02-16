import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import BenefitsSection from "../components/BenefitsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppWidget from "../components/WhatsAppWidget";
import { useSEO, useStructuredData } from "../hooks/useSEO";

const Index = () => {
  // SEO Configuration
  useSEO({
    title: "M.C.R Chauffage - Poêles à Bois et Granulés Nord Pas-de-Calais | Installation & SAV",
    description: "Expert en poêles à bois et granulés dans le Nord et Pas-de-Calais. Installation, entretien, SAV. Devis gratuit. Rendement jusqu'à 83%. Économies garanties.",
    keywords: "poêle à bois, poêle à granulés, installation chauffage, Nord, Pas-de-Calais, entretien poêle, SAV, économies énergie, chauffage écologique",
    canonicalUrl: "https://www.mcrchauf.fr/"
  });

  // Structured Data for Business
  const businessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "M.C.R Chauffage",
    "description": "Expert en installation et entretien de poêles à bois et granulés dans le Nord et Pas-de-Calais",
    "telephone": "+33698373463",
    "email": "n.pinto.courtage@gmail.com",
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "50.6367",
          "longitude": "2.9833"
        },
        "geoRadius": "50000"
      }
    ],
    "serviceType": ["Installation de poêles à bois", "Installation de poêles à granulés", "Entretien de poêles", "SAV chauffage", "Ramonage"],
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Nord-Pas-de-Calais",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.6367",
      "longitude": "2.9833"
    },
    "url": "https://www.mcrchauf.fr",
    "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-12:00",
    "potentialAction": {
      "@type": "ContactAction",
      "target": "https://www.mcrchauf.fr/#contact"
    }
  };

  useStructuredData(businessStructuredData);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
};

export default Index;