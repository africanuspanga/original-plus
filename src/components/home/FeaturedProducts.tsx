import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The Collection"
            title="Featured Products"
            description="Four signature formulas, one promise — visibly radiant, even-toned, confident skin."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 100}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            href="/shop/"
            className="inline-block rounded-full border-2 border-ink px-8 py-3.5 text-sm font-bold tracking-wide text-ink transition-colors hover:bg-ink hover:text-white"
          >
            View All Products
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
