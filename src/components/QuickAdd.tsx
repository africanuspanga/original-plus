"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";

/** Small round add-to-cart button used on product cards. */
export default function QuickAdd({ slug }: { slug: string }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        add(slug, 1);
        setAdded(true);
        setTimeout(() => setAdded(false), 1400);
      }}
      aria-label={added ? "Added to cart" : "Add to cart"}
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
        added
          ? "bg-gold text-ink"
          : "bg-ink text-white hover:bg-gold hover:text-ink"
      }`}
    >
      {added ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="h-5 w-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      )}
    </button>
  );
}
