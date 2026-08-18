import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import { formatPrice, site } from "@/lib/site";
import ProductActions from "@/components/ProductActions";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.shortName} — ${formatPrice(product.price)}`,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}/` },
    openGraph: {
      title: `${product.name} | Original Plus`,
      description: product.tagline,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 1200,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `${site.url}${product.image}`,
    description: product.description,
    brand: { "@type": "Brand", name: "Original Plus" },
    offers: {
      "@type": "Offer",
      url: `${site.url}/products/${product.slug}/`,
      priceCurrency: "TZS",
      price: product.price,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-gradient-to-b from-cream to-white pb-20 pt-32 sm:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-ink/50">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="transition-colors hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/shop/" className="transition-colors hover:text-ink">
                  Shop
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-ink" aria-current="page">
                {product.shortName}
              </li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Gallery */}
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-ink/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={1200}
                  height={1200}
                  priority
                  className="aspect-square w-full object-cover"
                />
                {product.badge && (
                  <span className="absolute left-5 top-5 rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-gold">
                    {product.badge}
                  </span>
                )}
              </div>
            </Reveal>

            {/* Details */}
            <div>
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
                  Original Plus · {product.size}
                </p>
                <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
                  {product.shortName}
                </h1>
                <p className="mt-3 text-lg italic leading-relaxed text-ink/60">
                  {product.tagline}
                </p>
                <p className="mt-6 font-display text-3xl font-semibold text-ink">
                  {formatPrice(product.price)}
                </p>
                <p className="mt-6 text-base leading-relaxed text-ink/70">
                  {product.description}
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-8">
                  <ProductActions product={product} />
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/10 pt-6 text-xs text-ink/55">
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 text-gold-dark" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    In stock
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 text-gold-dark" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Delivery across Tanzania
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 text-gold-dark" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    Pay on delivery (Dar es Salaam)
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Benefits & How to use */}
          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[2rem] bg-cream p-8 sm:p-10">
                <h2 className="font-display text-2xl text-ink">Benefits</h2>
                <ul className="mt-6 space-y-4">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="h-3.5 w-3.5 text-ink" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="text-sm leading-relaxed text-ink/75">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-[2rem] bg-ink p-8 sm:p-10">
                <h2 className="font-display text-2xl text-white">How to Use</h2>
                <ol className="mt-6 space-y-5">
                  {product.howToUse.map((step, i) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold font-display text-xs font-bold text-ink">
                        {i + 1}
                      </span>
                      <span className="pt-0.5 text-sm leading-relaxed text-white/80">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-white py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <h2
                id="related-heading"
                className="font-display text-3xl text-ink sm:text-4xl"
              >
                Complete your ritual
              </h2>
              <Link
                href="/shop/"
                className="hidden shrink-0 text-sm font-semibold text-gold-dark underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-ink sm:block"
              >
                View all products
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
