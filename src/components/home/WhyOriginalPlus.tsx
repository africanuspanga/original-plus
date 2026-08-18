import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const pillars = [
  {
    title: "Visible Results",
    text: "Formulas chosen for one reason: they work. Brighter, smoother, more even skin you can see.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
      />
    ),
  },
  {
    title: "Trusted in Tanzania",
    text: "Thousands of happy customers across Dar es Salaam and beyond, from the heart of Kariakoo.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    ),
  },
  {
    title: "Easy WhatsApp Ordering",
    text: "No accounts, no cards, no hassle. Order in one message and we deliver to your door.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
      />
    ),
  },
];

export default function WhyOriginalPlus() {
  return (
    <section className="bg-cream py-20 lg:py-28" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-gold"
                aria-hidden="true"
              />
              <Image
                src="/images/lifestyle/why-original-plus.jpg"
                alt="Happy Original Plus customer holding Glow Plus Face Cream"
                width={900}
                height={1100}
                className="relative rounded-[2rem] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-3 rounded-2xl bg-ink px-6 py-4 shadow-xl sm:-right-6">
                <p className="font-display text-3xl font-semibold text-gold">5★</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wider text-white/70">
                  Customer rated
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
                Why Original Plus
              </p>
              <h2
                id="why-heading"
                className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.75rem]"
              >
                Skincare that feels as good as it looks
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/60">
                Original Plus was created for women who want real results
                without complicated routines. Every product is selected, tested
                and loved by our community in Tanzania.
              </p>
            </Reveal>

            <div className="mt-10 space-y-8">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 100}>
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        className="h-6 w-6 text-ink"
                        aria-hidden="true"
                      >
                        {pillar.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <Link
                href="/about/"
                className="mt-10 inline-block rounded-full bg-ink px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-gold hover:text-ink"
              >
                Our Story
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
