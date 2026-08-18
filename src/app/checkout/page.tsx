"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { buildOrderMessage, useCart } from "@/lib/cart";
import { formatPrice, whatsappLink } from "@/lib/site";

export default function CheckoutPage() {
  const { detailedItems, subtotal, hydrated, clear } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [orderSent, setOrderSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = buildOrderMessage(detailedItems, subtotal, {
      name,
      phone,
      address,
      notes,
    });
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setOrderSent(true);
    clear();
  };

  const inputClass =
    "w-full rounded-2xl border border-ink/15 bg-white px-5 py-3.5 text-sm text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-gold-dark focus:ring-2 focus:ring-gold/40";

  if (orderSent) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-32 pb-20 text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="h-9 w-9 text-ink" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </span>
        <h1 className="mt-6 font-display text-3xl text-ink sm:text-4xl">
          Order sent to WhatsApp
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/55">
          Your order has been prepared in WhatsApp — just press send if you
          have not already. We will confirm your order and delivery details
          right away.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/shop/"
            className="rounded-full bg-ink px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-gold hover:text-ink"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="rounded-full border-2 border-ink/15 px-8 py-3.5 text-sm font-bold text-ink transition-colors hover:border-gold hover:bg-gold/10"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  if (hydrated && detailedItems.length === 0) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-32 pb-20 text-center">
        <h1 className="font-display text-3xl text-ink sm:text-4xl">
          Nothing to check out yet
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/55">
          Add some products to your cart first, then come back to complete
          your order.
        </p>
        <Link
          href="/shop/"
          className="mt-8 rounded-full bg-ink px-9 py-4 text-sm font-bold text-white transition-colors hover:bg-gold hover:text-ink"
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
          Checkout
        </h1>
        <p className="mx-auto mt-3 max-w-md text-center text-sm leading-relaxed text-ink/55">
          Fill in your details — your order is sent straight to our WhatsApp
          and we confirm delivery with you personally.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="h-fit rounded-3xl bg-white p-7 ring-1 ring-ink/5 sm:p-9"
          >
            <h2 className="font-display text-xl text-ink">Your Details</h2>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="checkout-name" className="mb-1.5 block text-sm font-medium text-ink">
                  Full name
                </label>
                <input
                  id="checkout-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aisha Juma"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="checkout-phone" className="mb-1.5 block text-sm font-medium text-ink">
                  Phone number
                </label>
                <input
                  id="checkout-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0756 533 452"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="checkout-address" className="mb-1.5 block text-sm font-medium text-ink">
                  Delivery address
                </label>
                <input
                  id="checkout-address"
                  type="text"
                  required
                  autoComplete="street-address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street, area, city — e.g. Sinza, Dar es Salaam"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="checkout-notes" className="mb-1.5 block text-sm font-medium text-ink">
                  Notes <span className="font-normal text-ink/40">(optional)</span>
                </label>
                <textarea
                  id="checkout-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Anything we should know about your order?"
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={!hydrated || detailedItems.length === 0}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] py-4 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#1eb85a] disabled:opacity-50"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/whatsapp.png" alt="" className="h-5 w-5" aria-hidden="true" />
              Place Order via WhatsApp
            </button>
            <p className="mt-4 text-center text-xs leading-relaxed text-ink/50">
              Pay on delivery in Dar es Salaam, or via mobile money for
              upcountry orders. We confirm everything on WhatsApp first.
            </p>
          </form>

          {/* Summary */}
          <aside className="h-fit rounded-3xl bg-ink p-7 text-white lg:sticky lg:top-32">
            <h2 className="font-display text-xl">Your Order</h2>
            <ul className="mt-5 space-y-4">
              {detailedItems.map(({ product, qty }) => (
                <li key={product.slug} className="flex items-center gap-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-snug">
                      {product.shortName}
                    </p>
                    <p className="text-xs text-white/50">Qty {qty}</p>
                  </div>
                  <p className="text-sm font-semibold">
                    {formatPrice(product.price * qty)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between border-t border-white/15 pt-4">
              <p className="font-semibold">Total</p>
              <p className="font-display text-xl font-semibold text-gold">
                {formatPrice(subtotal)}
              </p>
            </div>
            <p className="mt-3 text-xs text-white/50">
              Delivery fee confirmed on WhatsApp based on your location.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
