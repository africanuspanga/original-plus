"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart";
import { site, whatsappLink } from "@/lib/site";
import type { Product } from "@/lib/products";

/** Add to Cart / Buy Now / WhatsApp order buttons for a product. */
export default function ProductActions({ product }: { product: Product }) {
  const { add } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(product.slug, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const handleBuyNow = () => {
    add(product.slug, qty);
    router.push("/checkout/");
  };

  const waMessage = `Hello Original Plus! I would like to order:\n\n${product.name} (${product.size}) x${qty} = TZS ${(
    product.price * qty
  ).toLocaleString("en-US")}\n\nPlease confirm my order. Thank you!`;

  return (
    <div className="space-y-4">
      {/* Quantity */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-ink/70">Quantity</span>
        <div className="flex items-center rounded-full border border-ink/15">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="flex h-10 w-10 items-center justify-center text-lg transition-colors hover:text-gold-dark"
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-semibold" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
            aria-label="Increase quantity"
            className="flex h-10 w-10 items-center justify-center text-lg transition-colors hover:text-gold-dark"
          >
            +
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={handleAdd}
          className={`rounded-full border-2 py-3.5 text-sm font-bold tracking-wide transition-all ${
            added
              ? "border-gold bg-gold text-ink"
              : "border-ink bg-white text-ink hover:bg-ink hover:text-white"
          }`}
        >
          {added ? "✓ Added to Cart" : "Add to Cart"}
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className="rounded-full bg-gold py-3.5 text-sm font-bold tracking-wide text-ink transition-colors hover:bg-gold-light"
        >
          Buy Now
        </button>
      </div>

      <a
        href={whatsappLink(waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-[#25d366] py-3.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#1eb85a]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/whatsapp.png" alt="" className="h-5 w-5" aria-hidden="true" />
        Order via WhatsApp
      </a>

      <p className="text-center text-xs text-ink/50">
        Questions? Call us on {site.phone1}. We deliver across Tanzania.
      </p>
    </div>
  );
}
