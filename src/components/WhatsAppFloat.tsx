"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { defaultWhatsAppMessage, whatsappLink } from "@/lib/site";

/**
 * Floating WhatsApp button — the brand's whatsapp.png at full size,
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
      className={`group fixed bottom-5 right-5 z-40 transition-all duration-500 ${
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
        className="h-14 w-14 drop-shadow-[0_6px_16px_rgba(37,211,102,0.45)] transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      />
    </a>
  );
}
