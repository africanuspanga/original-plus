"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

/** Bold notification shown whenever an item is added to the cart. */
export default function CartToast() {
  const { toast, count } = useCart();

  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed left-1/2 top-[7.5rem] z-[60] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 animate-toast-in md:top-32"
    >
      <div className="flex items-center gap-3 rounded-2xl bg-ink p-4 shadow-2xl ring-1 ring-gold/40">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.6}
            className="h-5 w-5 text-ink"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-white">
            {toast} added to cart
          </p>
          <p className="text-xs text-white/60">
            {count} item{count === 1 ? "" : "s"} in your cart
          </p>
        </div>
        <Link
          href="/cart/"
          className="shrink-0 rounded-full bg-gold px-4 py-2 text-xs font-bold text-ink transition-colors hover:bg-gold-light"
        >
          View Cart
        </Link>
      </div>
    </div>
  );
}
