import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Neema M.",
    location: "Dar es Salaam",
    quote:
      "Yellow Plus changed my skin completely. Dark spots I had for years started fading within two weeks. I will never use anything else.",
    product: "Yellow Plus",
  },
  {
    name: "Rehema K.",
    location: "Mwanza",
    quote:
      "The Glow Plus Face Cream is so light and my makeup sits perfectly on it. The SPF 50 is a bonus, my face stays protected all day.",
    product: "Glow Plus Face Cream",
  },
  {
    name: "Zainabu A.",
    location: "Arusha",
    quote:
      "I ordered on WhatsApp and my products arrived in two days. The Glow Plus Oil gives my skin the most beautiful shine. Asanteni!",
    product: "Glow Plus Oil",
  },
  {
    name: "Wema S.",
    location: "Dodoma",
    quote:
      "Active Serum brought my dull skin back to life. My face looks brighter and more radiant every single week.",
    product: "Active Serum",
  },
  {
    name: "Happy L.",
    location: "Dar es Salaam",
    quote:
      "The Glow Plus Oil is magic on my knuckles and elbows. Within a month the difference was obvious. Highly recommended.",
    product: "Glow Plus Oil",
  },
  {
    name: "Aisha J.",
    location: "Tanga",
    quote:
      "Original Plus customer care is amazing. They helped me choose the right products on WhatsApp and my glow speaks for itself.",
    product: "Yellow Plus",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, s) => (
        <svg
          key={s}
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-gold"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 0 0-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 0 0-1.175 0l-3.367 2.446c-.783.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 0 0-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 0 0 .95-.69l1.286-3.958Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="overflow-hidden bg-sand py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Real Reviews"
            title="Loved by Women Across Tanzania"
            description="Real results from real customers. The Original Plus glow speaks for itself."
          />
        </Reveal>
      </div>

      {/* Auto-scrolling review marquee (pauses on hover) */}
      <Reveal className="mt-14">
        <div className="group relative">
          <div className="flex w-max animate-marquee gap-6 pr-6 [animation-duration:45s] group-hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 gap-6" aria-hidden={copy === 1}>
                {testimonials.map((t) => (
                  <figure
                    key={`${copy}-${t.name}`}
                    className="flex w-[300px] shrink-0 flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-ink/5 sm:w-[340px]"
                  >
                    <Stars />
                    <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6 border-t border-sand pt-4">
                      <p className="text-sm font-semibold text-ink">{t.name}</p>
                      <p className="mt-0.5 text-xs text-ink/50">
                        {t.location} · uses {t.product}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
          {/* Edge fades */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-sand to-transparent sm:w-28"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-sand to-transparent sm:w-28"
            aria-hidden="true"
          />
        </div>
      </Reveal>
    </section>
  );
}
