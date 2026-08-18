import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const benefits = [
  "Brighter, more even skin tone",
  "Fades dark spots & blemishes",
  "Softens stretch marks",
  "Deep, lasting hydration",
  "SPF 50 sun protection",
  "Glass-skin glow in 24 hours",
];

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-28" aria-labelledby="benefits-heading">
      <div
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                align="left"
                dark
                eyebrow="Product Benefits"
                title="Everything your skin has been asking for"
                description="Each Original Plus formula is built around results you can see and feel — brightness, smoothness and deep, healthy hydration."
              />
            </Reveal>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, i) => (
                <Reveal key={benefit} delay={i * 80}>
                  <li className="flex items-start gap-3 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-sm font-medium leading-relaxed text-white/85">
                      {benefit}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={150} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/lifestyle/gallery-4.jpg"
                alt="Customer applying Yellow Plus cream to her skin"
                width={700}
                height={875}
                className="mt-10 rounded-[2rem] object-cover shadow-2xl"
              />
              <Image
                src="/images/lifestyle/lifestyle-1.jpg"
                alt="Smiling customer holding Glow Plus Oil"
                width={700}
                height={875}
                className="rounded-[2rem] object-cover shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
