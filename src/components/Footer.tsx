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

        {/* Payment methods */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            We accept
          </p>
          <ul className="mt-4 flex flex-wrap items-center gap-3">
            {[
              ["mpesa.png", "M-Pesa"],
              ["airtel-money.png", "Airtel Money"],
              ["halopesa.png", "Halo Pesa"],
              ["mixx.png", "Mixx by Yas (Tigo Pesa)"],
              ["selcom.png", "Selcom"],
            ].map(([file, label]) => (
              <li
                key={file}
                className="flex h-11 items-center rounded-xl bg-white px-4"
              >
                <Image
                  src={`/images/payments/${file}`}
                  alt={label}
                  width={120}
                  height={40}
                  className="h-6 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-white/50">
            Mobile money and pay on delivery available.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Original Plus. All rights reserved.
          </p>
          <p>{site.locationShort}, Tanzania</p>
        </div>
      </div>
    </footer>
  );
}
