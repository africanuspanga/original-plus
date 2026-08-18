export const site = {
  name: "Original Plus",
  tagline: "Premium Skincare, Made for Your Glow",
  url: "https://www.originalplus.co.tz",
  description:
    "Original Plus is a premium skincare brand in Dar es Salaam, Tanzania. Shop Yellow Plus, Glow Plus Face Cream, Glow Plus Oil and Active Serum — order easily via WhatsApp.",
  phone1: "0756533452",
  phone1Intl: "+255756533452",
  phone2: "0743 908 538",
  phone2Intl: "+255743908538",
  whatsapp: "255756533452",
  location: "Kariakoo, Mafia & Jangwani Street, Dar es Salaam, Tanzania",
  locationShort: "Kariakoo, Dar es Salaam",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kariakoo%2C+Mafia+%26+Jangwani+Street%2C+Dar+es+Salaam%2C+Tanzania",
} as const;

/** Build a wa.me link with an optional pre-filled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const defaultWhatsAppMessage =
  "Hello Original Plus! I would like to place an order.";

/** Format a price in Tanzanian Shillings. */
export function formatPrice(amount: number): string {
  return `TZS ${amount.toLocaleString("en-US")}`;
}
