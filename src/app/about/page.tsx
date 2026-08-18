import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import WhatsAppCTA from "@/components/home/WhatsAppCTA";

export const metadata: Metadata = {
  title: "About Us — Our Story",
  description:
    "Original Plus is a premium Tanzanian skincare brand based in Kariakoo, Dar es Salaam. Learn our story, our promise and why thousands of women trust us with their skin.",
  alternates: { canonical: "/about/" },
};

const values = [
  {
    title: "Results First",
    text: "Every product we stock must prove itself. If it does not deliver visible results, it does not carry the Original Plus name.",
  },
  {
    title: "Honest Advice",
    text: "We recommend what your skin needs — nothing more. Our team gives free, personal skincare guidance to every customer.",
  },
  {
    title: "Made for You",
    text: "Our collection is chosen for African skin and the Tanzanian climate — lightweight, protective and deeply nourishing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Original Plus"
        title="Beauty with confidence, from the heart of Dar es Salaam"
        description="Original Plus began with a simple belief — every woman deserves skincare that truly works, at a price she can afford."
      />

      {/* Story */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] bg-gold"
                  aria-hidden="true"
                />
                <Image
                  src="/images/lifestyle/lifestyle-2.jpg"
                  alt="Original Plus brand photoshoot with model holding products"
                  width={800}
                  height={1000}
                  className="relative rounded-[2rem] object-cover shadow-xl"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
                  Our Story
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/65">
                  <p>
                    Original Plus was born in Kariakoo — the beating commercial
                    heart of Dar es Salaam — where we watched women search
                    endlessly for skincare they could trust. Too many products
                    promised everything and delivered nothing.
                  </p>
                  <p>
                    So we built a collection that does what it says. Yellow
                    Plus, Glow Plus and Active Serum have become household
                    favourites because they deliver real, visible results:
                    brighter, smoother, more even skin.
                  </p>
                  <p>
                    Today, thousands of women across Tanzania start their
                    morning with Original Plus — and we are just getting
                    started.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <Link
                  href="/shop/"
                  className="mt-8 inline-block rounded-full bg-ink px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-gold hover:text-ink"
                >
                  Shop the Collection
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl text-ink sm:text-4xl">
              What we stand for
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 120}>
                <div className="h-full rounded-3xl bg-white p-8 ring-1 ring-ink/5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold font-display text-lg font-bold text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery band */}
      <section className="bg-white py-16 lg:py-24" aria-label="Original Plus gallery">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              ["/images/lifestyle/gallery-2.jpg", "Original Plus customer photoshoot"],
              ["/images/lifestyle/gallery-5.jpg", "Original Plus skincare lifestyle photo"],
              ["/images/lifestyle/lifestyle-1.jpg", "Customer holding Glow Plus Oil"],
              ["/images/lifestyle/gallery-4.jpg", "Customer applying Yellow Plus cream"],
            ].map(([src, alt], i) => (
              <Reveal key={src} delay={i * 100}>
                <div className={`overflow-hidden rounded-[1.75rem] ${i % 2 === 1 ? "lg:mt-8" : ""}`}>
                  <Image
                    src={src}
                    alt={alt}
                    width={700}
                    height={875}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTA />
    </>
  );
}
