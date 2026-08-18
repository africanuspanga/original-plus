"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/shop/", label: "Shop" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { count, hydrated } = useCart();

  // Close the mobile menu on navigation (render-time state adjustment)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/95 shadow-[0_1px_0_rgba(17,17,17,0.08)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      {/* Announcement bar */}
      <div className="bg-ink text-white">
        <p className="mx-auto max-w-7xl px-4 py-1.5 text-center text-[11px] font-medium tracking-wide sm:text-xs">
          Free delivery in Dar es Salaam on orders over TZS 100,000 · Order on
          WhatsApp {site.phone1}
        </p>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Original Plus home">
          <Image
            src="/images/logo-icon.png"
            alt="Original Plus logo"
            width={40}
            height={33}
            className="h-9 w-auto"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-wide text-ink">
            Original <span className="text-gold-dark">Plus</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold-dark ${
                isActive(item.href) ? "text-gold-dark" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/cart/"
            className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-sand"
            aria-label={`Shopping cart${hydrated && count > 0 ? `, ${count} items` : ""}`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
              />
            </svg>
            {hydrated && count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[11px] font-bold text-ink">
                {count}
              </span>
            )}
          </Link>

          <Link
            href="/shop/"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-ink md:block"
          >
            Shop Now
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-sand md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="h-6 w-6"
              aria-hidden="true"
            >
              {open ? (
                <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="fixed inset-x-0 bottom-0 top-[92px] z-50 flex flex-col bg-white px-6 pt-6 md:hidden"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b border-sand py-4 font-display text-2xl ${
                isActive(item.href) ? "text-gold-dark" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/cart/"
            className="border-b border-sand py-4 font-display text-2xl text-ink"
          >
            Cart{hydrated && count > 0 ? ` (${count})` : ""}
          </Link>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 rounded-full bg-gold py-4 text-center text-base font-bold text-ink"
          >
            Order on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
