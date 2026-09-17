import type { Metadata } from "next";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop All Skincare Products",
  description:
    "Shop the full Original Plus collection: Yellow Plus, Glow Plus Face Cream, Glow Plus Oil, Active Serum and Booster White Serum. Premium skincare delivered across Tanzania.",
  alternates: { canonical: "/shop/" },
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Shop"
        title="The Original Plus Collection"
        description="Five signature formulas for radiant, even-toned, deeply hydrated skin. Order online and we deliver anywhere in Tanzania."
      />
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 100}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 rounded-3xl bg-cream px-6 py-10 text-center sm:px-12">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              Not sure which product is right for you?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink/60">
              Message us on WhatsApp and we will help you build the perfect
              routine for your skin. Free advice, no obligation.
            </p>
            <a
              href={whatsappLink(
                "Hello Original Plus! I need help choosing the right product for my skin."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-ink px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-gold hover:text-ink"
            >
              Get Free Advice on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
