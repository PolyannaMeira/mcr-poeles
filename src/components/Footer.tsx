import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logoPhilippe from '../assets/Logo - Philippe.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    produits: [
      { label: "Poêles à Granulés", href: "#produits" },
      { label: "Poêles à Bois", href: "#produits" },
      { label: "Entretien & SAV", href: "#produits" },
    ],
    entreprise: [
      { label: "À propos", href: "#apropos" },
      { label: "Nos engagements", href: "#avantages" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/politique-confidentialite" },

    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },

  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r flex items-center justify-center shadow-lg overflow-hidden">
                <img src={logoPhilippe} alt="Logo Philippe" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-xl text-white">
                <span className="text-white">M.C.R</span>
              </span>
            </a>
            <p className="text-gray-300 text-sm mb-6">
              Expert M.C.R Chauffage - Installation de poêles à bois et granulés Nord Pas-de-Calais depuis plus de 7 ans.
              Qualité RGE, performance énergétique et service client d'exception. </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>


          <div>
            <h3 className="font-semibold text-white mb-4">
              Nos Produits
            </h3>
            <ul className="space-y-3">
              {links.produits.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {links.entreprise.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="font-semibold text-white mb-4">
              Informations
            </h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} M.C.R. @Tous droits réservés.
            </p>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;