import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const shots = [
  {
    src: "/images/lifestyle/gallery-1.jpg",
    alt: "Original Plus customer with the full Glow Plus collection",
  },
  {
    src: "/images/lifestyle/gallery-3.jpg",
    alt: "Original Plus skincare photoshoot",
  },
  {
    src: "/images/lifestyle/lifestyle-2.jpg",
    alt: "Model presenting Original Plus skincare products",
  },
  {
    src: "/images/lifestyle/gallery-6.jpg",
    alt: "Original Plus customer enjoying her skincare ritual",
  },
];

export default function RitualStrip() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="ritual-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
              The Original Plus Ritual
            </p>
            <h2
              id="ritual-heading"
              className="mt-3 max-w-xl font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.75rem]"
            >
              A daily ritual you will actually look forward to
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link
              href="/shop/"
              className="inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-bold tracking-wide text-ink transition-colors hover:bg-gold-light"
            >
              Start Your Ritual
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {shots.map((shot, i) => (
            <Reveal key={shot.src} delay={i * 100}>
              <div
                className={`overflow-hidden rounded-[1.75rem] ${
                  i % 2 === 1 ? "lg:mt-10" : ""
                }`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
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
  );
}
