import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/site";
import type { Product } from "@/lib/products";
import QuickAdd from "@/components/QuickAdd";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(17,17,17,0.18)]">
      <Link
        href={`/products/${product.slug}/`}
        className="relative block aspect-square overflow-hidden bg-cream"
        aria-label={`View ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-ink px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gold">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Link href={`/products/${product.slug}/`}>
          <h3 className="font-display text-xl leading-snug text-ink transition-colors group-hover:text-gold-dark">
            {product.shortName}
          </h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink/55">
          {product.tagline}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 pt-1">
          <p className="text-lg font-bold text-ink">
            {formatPrice(product.price)}
          </p>
          <QuickAdd slug={product.slug} />
        </div>
      </div>
    </article>
  );
}
