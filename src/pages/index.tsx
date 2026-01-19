import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import BenefitsSection from "../components/BenefitsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppWidget from "../components/WhatsAppWidget";

const Index = () => {
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