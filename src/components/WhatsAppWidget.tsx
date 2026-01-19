import { MessageCircleMore } from "lucide-react";

const WhatsAppWidget = () => {
  const phoneNumber = "33613787751"; 
  const message = encodeURIComponent("Bonjour, je souhaite obtenir des informations sur vos poêles EK36.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 animate-bounce"
      aria-label="Nous contacter sur WhatsApp"
    >
      <MessageCircleMore className="w-7 h-7 md:w-8 md:h-8" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppWidget;