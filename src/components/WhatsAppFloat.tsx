"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/site";

/**
 * Floating WhatsApp button: the brand's whatsapp.png at full size,
 * no background circle behind it.
 */
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={whatsappLink(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Original Plus on WhatsApp"
      className={`group fixed bottom-24 right-4 z-40 transition-all duration-500 md:bottom-5 md:right-5 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <span className="absolute -left-44 top-1/2 hidden -translate-y-1/2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Chat with us on WhatsApp
      </span>
      <Image
        src="/images/whatsapp.png"
        alt=""
        width={56}
        height={56}
        className="h-14 w-14 animate-wa-pulse"
        aria-hidden="true"
      />
    </a>
  );
}
