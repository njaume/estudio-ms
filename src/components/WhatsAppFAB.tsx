"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/5434300000000?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20sobre..."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="lg:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle size={26} className="text-white" strokeWidth={2} />
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ backgroundColor: "#25D366" }}
        aria-hidden="true"
      />
    </a>
  );
}
