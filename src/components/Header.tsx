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

const icons = {
  home: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"
    />
  ),
  bag: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
    />
  ),
  menu: <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />,
  close: <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />,
};

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
    <>
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
            Order on WhatsApp {site.phone1} · We deliver across Tanzania
          </p>
        </div>

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-24 lg:px-8">
          <Link href="/" className="flex items-center" aria-label="Original Plus home">
            <Image
              src="/images/logo-icon.png"
              alt="Original Plus logo"
              width={96}
              height={79}
              className="h-14 w-auto md:h-[4.25rem]"
              priority
            />
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
              className="relative hidden h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-sand md:flex"
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
                {icons.bag}
              </svg>
              {hydrated && count > 0 && (
                <span
                  key={count}
                  className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 animate-badge-pop items-center justify-center rounded-full bg-gold px-1 text-[11px] font-bold text-ink"
                >
                  {count}
                </span>
              )}
            </Link>

            <Link
              href="/shop/"
              className="hidden rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-ink md:block"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {open && (
          <nav
            className="fixed inset-x-0 bottom-0 top-[108px] z-50 flex flex-col bg-white px-6 pt-6 md:hidden"
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

      {/* Mobile bottom tab bar */}
      <nav
        className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
        aria-label="Mobile tabs"
      >
        <div className="grid grid-cols-5 items-end">
          <Link
            href="/"
            className={`flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium ${
              isActive("/") ? "text-gold-dark" : "text-ink/60"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
              {icons.home}
            </svg>
            Home
          </Link>

          <Link
            href="/cart/"
            className={`relative flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium ${
              isActive("/cart/") ? "text-gold-dark" : "text-ink/60"
            }`}
          >
            <span className="relative">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
                {icons.bag}
              </svg>
              {hydrated && count > 0 && (
                <span
                  key={count}
                  className="absolute -right-2 -top-1.5 flex h-4 min-w-4 animate-badge-pop items-center justify-center rounded-full bg-gold px-1 text-[9px] font-bold text-ink"
                >
                  {count}
                </span>
              )}
            </span>
            Cart
          </Link>

          {/* Big center Shop button */}
          <div className="flex justify-center">
            <Link
              href="/shop/"
              aria-label="Shop all products"
              className={`-mt-7 flex h-16 w-16 items-center justify-center rounded-full shadow-lg ring-4 ring-white transition-transform active:scale-95 ${
                isActive("/shop/") ? "bg-gold-light" : "bg-gold"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7 text-ink" aria-hidden="true">
                {icons.bag}
              </svg>
            </Link>
          </div>

          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium text-ink/60"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/whatsapp.png" alt="" className="h-6 w-6" aria-hidden="true" />
            WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium ${
              open ? "text-gold-dark" : "text-ink/60"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
              {open ? icons.close : icons.menu}
            </svg>
            Menu
          </button>
        </div>
      </nav>
    </>
  );
}
