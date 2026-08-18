import Image from "next/image";
import Reveal from "@/components/Reveal";
import { defaultWhatsAppMessage, site, whatsappLink } from "@/lib/site";

export default function WhatsAppCTA() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="whatsapp-cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gold to-gold-dark px-6 py-14 text-center sm:px-12 lg:py-20">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-ink/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-2xl">
              <Image
                src="/images/whatsapp.png"
                alt=""
                width={64}
                height={64}
                className="mx-auto h-16 w-16"
                aria-hidden="true"
              />
              <h2
                id="whatsapp-cta-heading"
                className="mt-6 font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl"
              >
                Order in one WhatsApp message
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/70">
                No sign-ups, no cards, no stress. Message us on WhatsApp, tell
                us what you need, and we deliver — anywhere in Tanzania.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={whatsappLink(defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-ink px-9 py-4 text-center text-sm font-bold tracking-wide text-white transition-transform hover:scale-[1.03] sm:w-auto"
                >
                  Chat on WhatsApp — {site.phone1}
                </a>
                <a
                  href={`tel:${site.phone1Intl}`}
                  className="w-full rounded-full border-2 border-ink/30 px-9 py-4 text-center text-sm font-bold tracking-wide text-ink transition-colors hover:bg-ink hover:text-white sm:w-auto"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
