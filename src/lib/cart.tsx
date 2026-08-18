"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct, type Product } from "@/lib/products";

export interface CartItem {
  slug: string;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  hydrated: boolean;
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  detailedItems: { product: Product; qty: number }[];
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "original-plus-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate the cart from localStorage once on mount (client-only storage)
  useEffect(() => {
    let parsed: CartItem[] = [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        parsed = (JSON.parse(raw) as CartItem[]).filter(
          (i) => getProduct(i.slug) && i.qty > 0
        );
      }
    } catch {
      // ignore corrupted storage
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional one-time hydration from localStorage
    setItems(parsed);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, hydrated]);

  const add = useCallback((slug: string, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === slug ? { ...i, qty: Math.min(i.qty + qty, 99) } : i
        );
      }
      return [...prev, { slug, qty }];
    });
  }, []);

  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.slug !== slug)
        : prev.map((i) => (i.slug === slug ? { ...i, qty: Math.min(qty, 99) } : i))
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const detailedItems = items
      .map((i) => ({ product: getProduct(i.slug)!, qty: i.qty }))
      .filter((i) => i.product);
    const count = items.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = detailedItems.reduce(
      (sum, i) => sum + i.product.price * i.qty,
      0
    );
    return {
      items,
      count,
      subtotal,
      hydrated,
      add,
      remove,
      setQty,
      clear,
      detailedItems,
    };
  }, [items, hydrated, add, remove, setQty, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

/** Build the WhatsApp order message for the current cart. */
export function buildOrderMessage(
  detailedItems: { product: Product; qty: number }[],
  subtotal: number,
  customer?: { name?: string; phone?: string; address?: string; notes?: string }
): string {
  const lines: string[] = ["Hello Original Plus! I would like to order:", ""];
  detailedItems.forEach(({ product, qty }, i) => {
    lines.push(
      `${i + 1}. ${product.name} (${product.size}) x${qty} — TZS ${(
        product.price * qty
      ).toLocaleString("en-US")}`
    );
  });
  lines.push("", `Total: TZS ${subtotal.toLocaleString("en-US")}`);
  if (customer?.name) lines.push("", `Name: ${customer.name}`);
  if (customer?.phone) lines.push(`Phone: ${customer.phone}`);
  if (customer?.address) lines.push(`Delivery address: ${customer.address}`);
  if (customer?.notes) lines.push(`Notes: ${customer.notes}`);
  lines.push("", "Please confirm my order. Thank you!");
  return lines.join("\n");
}
