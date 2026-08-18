import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { CartProvider } from "@/lib/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Original Plus — Premium Skincare in Tanzania",
    template: "%s | Original Plus",
  },
  description: site.description,
  keywords: [
    "Original Plus",
    "skincare Tanzania",
    "Yellow Plus cream",
    "Glow Plus face cream",
    "Glow Plus oil",
    "Active Serum",
    "whitening cream Dar es Salaam",
    "beauty products Kariakoo",
    "skincare Dar es Salaam",
  ],
  authors: [{ name: "Original Plus" }],
  creator: "Original Plus",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_TZ",
    url: site.url,
    siteName: site.name,
    title: "Original Plus — Premium Skincare in Tanzania",
    description: site.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Original Plus premium skincare collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Original Plus — Premium Skincare in Tanzania",
    description: site.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f2c400",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/logo-full.png`,
  description: site.description,
  telephone: site.phone1Intl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mafia & Jangwani Street, Kariakoo",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone1Intl,
    contactType: "customer service",
    availableLanguage: ["English", "Swahili"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  );
}
