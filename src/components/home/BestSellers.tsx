import { bestSellers } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function BestSellers() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="bestsellers-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Customer Favourites"
            title="Best Sellers"
            description="The products our customers reorder again and again — loved across Tanzania."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((product, i) => (
            <Reveal key={product.slug} delay={i * 100}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
