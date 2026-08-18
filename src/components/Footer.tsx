import Image from "next/image";
import Link from "next/link";
import { defaultWhatsAppMessage, site, whatsappLink } from "@/lib/site";
import { products } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-full.png"
                alt="Original Plus logo"
                width={140}
                height={140}
                className="h-28 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Premium skincare crafted for radiant, confident skin. Proudly
              serving Tanzania from the heart of Kariakoo, Dar es Salaam.
            </p>
          </div>

          {/* Shop */}
          <nav aria-label="Products">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Shop
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}/`}
                    className="text-white/70 transition-colors hover:text-gold"
                  >
                    {p.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/shop/"
                  className="text-white/70 transition-colors hover:text-gold"
                >
                  View all products
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/about/" className="text-white/70 transition-colors hover:text-gold">
                  About Original Plus
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-white/70 transition-colors hover:text-gold">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/cart/" className="text-white/70 transition-colors hover:text-gold">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href={`tel:${site.phone1Intl}`} className="transition-colors hover:text-gold">
                  {site.phone1}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone2Intl}`} className="transition-colors hover:text-gold">
                  {site.phone2}
                </a>
              </li>
              <li className="leading-relaxed">{site.location}</li>
            </ul>
            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-gold-light"
            >
              <Image
                src="/images/whatsapp.png"
                alt=""
                width={18}
                height={18}
                aria-hidden="true"
              />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Original Plus. All rights reserved.
          </p>
          <p>{site.locationShort}, Tanzania</p>
        </div>
      </div>
    </footer>
  );
}
