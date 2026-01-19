import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#produits", label: "Produits" },
    { href: "#avantages", label: "Avantages" },
    { href: "#apropos", label: "À propos" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              <span className="text-noir">M.C.R</span>
            </span>
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Devis Gratuit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-900"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="text-left text-gray-900 font-medium py-2 hover:text-orange-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white font-semibold py-3 rounded-lg w-full mt-2"
            >
              Devis Gratuit
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;