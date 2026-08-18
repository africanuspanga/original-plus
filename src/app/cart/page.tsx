"use client";

import Image from "next/image";
import Link from "next/link";
import { buildOrderMessage, useCart } from "@/lib/cart";
import { formatPrice, whatsappLink } from "@/lib/site";

export default function CartPage() {
  const { detailedItems, subtotal, setQty, remove, hydrated } = useCart();

  if (!hydrated) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center pt-32">
        <p className="text-sm text-ink/50">Loading your cart…</p>
      </div>
    );
  }

  if (detailedItems.length === 0) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-32 pb-20 text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-cream">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-9 w-9 text-gold-dark" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
          </svg>
        </span>
        <h1 className="mt-6 font-display text-3xl text-ink sm:text-4xl">
          Your cart is empty
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/55">
          Discover our signature skincare collection and start your glow
          ritual today.
        </p>
        <Link
          href="/shop/"
          className="mt-8 rounded-full bg-ink px-9 py-4 text-sm font-bold tracking-wide text-white transition-colors hover:bg-gold hover:text-ink"
        >
          Shop Now
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-cream to-white pb-24 pt-32 sm:pt-36">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-display text-4xl text-ink sm:text-5xl">
          Your Cart
        </h1>
        <p className="mt-3 text-center text-sm text-ink/55">
          Review your order, then check out — we confirm everything on
          WhatsApp.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Items */}
          <ul className="space-y-4">
            {detailedItems.map(({ product, qty }) => (
              <li
                key={product.slug}
                className="flex gap-4 rounded-3xl bg-white p-4 ring-1 ring-ink/5 sm:gap-6 sm:p-5"
              >
                <Link
                  href={`/products/${product.slug}/`}
                  className="shrink-0 overflow-hidden rounded-2xl bg-cream"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={112}
                    height={112}
                    className="h-24 w-24 object-cover sm:h-28 sm:w-28"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Link
                        href={`/products/${product.slug}/`}
                        className="font-display text-lg leading-snug text-ink transition-colors hover:text-gold-dark"
                      >
                        {product.shortName}
                      </Link>
                      <p className="mt-0.5 text-xs text-ink/50">{product.size}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(product.slug)}
                      aria-label={`Remove ${product.shortName} from cart`}
                      className="rounded-full p-1.5 text-ink/40 transition-colors hover:bg-red-50 hover:text-red-500"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4.5 w-4.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center rounded-full border border-ink/15">
                      <button
                        type="button"
                        onClick={() => setQty(product.slug, qty - 1)}
                        aria-label="Decrease quantity"
                        className="flex h-8 w-8 items-center justify-center transition-colors hover:text-gold-dark"
                      >
                        −
                      </button>
                      <span className="w-7 text-center text-sm font-semibold" aria-live="polite">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty(product.slug, qty + 1)}
                        aria-label="Increase quantity"
                        className="flex h-8 w-8 items-center justify-center transition-colors hover:text-gold-dark"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm font-bold text-ink">
                      {formatPrice(product.price * qty)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Summary */}
          <aside className="h-fit rounded-3xl bg-ink p-7 text-white lg:sticky lg:top-32">
            <h2 className="font-display text-xl">Order Summary</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-white/60">Subtotal</dt>
                <dd className="font-semibold">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/60">Delivery</dt>
                <dd className="text-white/80">Confirmed on WhatsApp</dd>
              </div>
              <div className="flex justify-between border-t border-white/15 pt-3 text-base">
                <dt className="font-semibold">Total</dt>
                <dd className="font-display text-xl font-semibold text-gold">
                  {formatPrice(subtotal)}
                </dd>
              </div>
            </dl>
            <Link
              href="/checkout/"
              className="mt-7 block rounded-full bg-gold py-4 text-center text-sm font-bold tracking-wide text-ink transition-colors hover:bg-gold-light"
            >
              Proceed to Checkout
            </Link>
            <a
              href={whatsappLink(buildOrderMessage(detailedItems, subtotal))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-full bg-[#25d366] py-4 text-center text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#1eb85a]"
            >
              Order Now via WhatsApp
            </a>
            <Link
              href="/shop/"
              className="mt-5 block text-center text-xs font-medium text-white/60 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              Continue shopping
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
