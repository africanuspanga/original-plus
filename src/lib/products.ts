export interface Product {
  slug: string;
  name: string;
  shortName: string;
  price: number;
  size: string;
  image: string;
  tagline: string;
  description: string;
  benefits: string[];
  howToUse: string[];
  badge?: string;
  bestSeller?: boolean;
}

export const products: Product[] = [
  {
    slug: "yellow-plus",
    name: "Yellow Plus Strong Whitening Cream",
    shortName: "Yellow Plus",
    price: 60000,
    size: "300g",
    image: "/images/products/yellow-plus.jpg",
    tagline: "Our iconic face & body cream for a luminous, even glow.",
    description:
      "The signature Original Plus cream. Yellow Plus is a rich, fast-absorbing face and body cream that visibly brightens, smooths and evens the skin — giving you that unmistakable Original Plus glow in days, not months.",
    benefits: [
      "Visibly brightens and evens skin tone",
      "Fades dark spots and blemishes",
      "Softens the look of stretch marks",
      "Deeply moisturises for a smooth, glowing finish",
      "Suitable for both face and body",
    ],
    howToUse: [
      "Cleanse your skin and pat dry.",
      "Apply a small amount to face or body.",
      "Massage gently in circular motions until absorbed.",
      "Use morning and evening for best results.",
    ],
    badge: "Best Seller",
    bestSeller: true,
  },
  {
    slug: "glow-plus-face-cream",
    name: "Glow Plus Face Cream",
    shortName: "Glow Plus Face Cream",
    price: 35000,
    size: "50g · SPF 50",
    image: "/images/products/glow-plus-face-cream.jpg",
    tagline: "Daily face cream with SPF 50 protection and a glass-skin finish.",
    description:
      "A luxurious daily face cream that hydrates, brightens and protects. With SPF 50 and a silky, non-greasy texture, Glow Plus Face Cream keeps your skin radiant and shielded from the Tanzanian sun all day long.",
    benefits: [
      "SPF 50 sun protection",
      "Brightens and evens facial skin tone",
      "Lightweight, non-greasy hydration",
      "Helps fade dark spots and acne marks",
      "Perfect under makeup",
    ],
    howToUse: [
      "Cleanse your face and pat dry.",
      "Apply a pea-sized amount to face and neck.",
      "Massage gently until fully absorbed.",
      "Reapply during the day for continued sun protection.",
    ],
    badge: "SPF 50",
    bestSeller: true,
  },
  {
    slug: "glow-plus-oil",
    name: "Glow Plus Oil",
    shortName: "Glow Plus Oil",
    price: 35000,
    size: "250ml",
    image: "/images/products/glow-plus-oil.jpg",
    tagline: "Glutathione & Vitamin C serum oil for 24-hour glass skin.",
    description:
      "A feather-light face and body serum oil powered by Glutathione and Vitamin C. Glow Plus Oil melts into the skin to brighten, soften and restore — leaving a radiant, glass-skin finish that lasts 24 hours.",
    benefits: [
      "Glutathione & Vitamin C brightening complex",
      "Softens knuckles, dark armpits and dark spots",
      "Helps reduce the appearance of stretch marks",
      "Antioxidant care for dehydrated skin",
      "24-hour glass-skin glow",
    ],
    howToUse: [
      "Apply a few drops to clean, slightly damp skin.",
      "Massage over face or body until absorbed.",
      "Focus on knuckles, elbows and dark areas.",
      "Use daily, morning and night.",
    ],
    bestSeller: true,
  },
  {
    slug: "active-serum",
    name: "Active Serum",
    shortName: "Active Serum",
    price: 30000,
    size: "30ml",
    image: "/images/products/active-serum.jpg",
    tagline: "Concentrated strong whitening serum for stubborn dark spots.",
    description:
      "A concentrated treatment serum that targets stubborn dark spots and uneven tone. Active Serum refines, moisturises and renews — the perfect booster to layer under your cream for faster, visible results.",
    benefits: [
      "Targets stubborn dark spots",
      "Refines and smooths skin texture",
      "Boosts the results of your cream",
      "Deeply moisturising formula",
      "Fast-absorbing, lightweight feel",
    ],
    howToUse: [
      "Cleanse skin and pat dry.",
      "Apply 2–3 drops to targeted areas or full face.",
      "Allow to absorb, then follow with your cream.",
      "Use morning and evening consistently.",
    ],
    badge: "New",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const bestSellers = products.filter((p) => p.bestSeller);
