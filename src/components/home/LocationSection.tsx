import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function LocationSection() {
  return (
    <section className="bg-cream py-20 lg:py-28" aria-labelledby="location-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
              Visit Us
            </p>
            <h2
              id="location-heading"
              className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl"
            >
              Find us in the heart of Kariakoo
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/60">
              Walk into our shop for personal skincare advice, or order from
              anywhere in Tanzania — we deliver to your doorstep.
            </p>

            <address className="mt-8 space-y-5 not-italic">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5 text-ink" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Our Location</p>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block text-sm leading-relaxed text-ink/60 underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-ink"
                  >
                    {site.location}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5 text-ink" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Call or WhatsApp</p>
                  <p className="mt-0.5 text-sm text-ink/60">
                    <a href={`tel:${site.phone1Intl}`} className="transition-colors hover:text-ink">
                      {site.phone1}
                    </a>
                    {" · "}
                    <a href={`tel:${site.phone2Intl}`} className="transition-colors hover:text-ink">
                      {site.phone2}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5 text-ink" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Opening Hours</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink/60">
                    Monday – Saturday: 8:00 – 18:00
                    <br />
                    Sunday: 10:00 – 15:00
                  </p>
                </div>
              </div>
            </address>
          </Reveal>

          <Reveal delay={150}>
            <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-ink/5">
              <iframe
                title="Original Plus location — Kariakoo, Mafia & Jangwani Street, Dar es Salaam"
                src="https://www.google.com/maps?q=Kariakoo,+Mafia+Street,+Dar+es+Salaam,+Tanzania&output=embed"
                className="h-[380px] w-full border-0 lg:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
