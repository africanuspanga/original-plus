import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { defaultWhatsAppMessage, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Original Plus: call or WhatsApp 0756533452, or visit us at Kariakoo, Mafia & Jangwani Street, Dar es Salaam, Tanzania.",
  alternates: { canonical: "/contact/" },
};

const channels = [
  {
    label: "Phone 1",
    value: site.phone1,
    href: `tel:${site.phone1Intl}`,
  },
  {
    label: "Phone 2",
    value: site.phone2,
    href: `tel:${site.phone2Intl}`,
  },
  {
    label: "WhatsApp",
    value: site.phone1,
    href: whatsappLink(defaultWhatsAppMessage),
  },
  {
    label: "Location",
    value: site.location,
    href: site.mapsUrl,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Questions about products, orders or your skin? Reach out. We reply fast, in English or Kiswahili."
      />

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Contact channels */}
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {channels.map((channel, i) => (
                  <Reveal key={channel.label} delay={i * 80}>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex h-full flex-col rounded-3xl bg-cream p-6 ring-1 ring-ink/5 transition-all hover:bg-sand"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-dark">
                        {channel.label}
                      </p>
                      <p className="mt-2.5 text-sm font-medium leading-relaxed text-ink group-hover:underline group-hover:decoration-gold group-hover:decoration-2 group-hover:underline-offset-4">
                        {channel.value}
                      </p>
                    </a>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={350}>
                <div className="mt-8 overflow-hidden rounded-3xl shadow-lg ring-1 ring-ink/5">
                  <iframe
                    title="Original Plus location map: Kariakoo, Dar es Salaam"
                    src="https://www.google.com/maps?q=Kariakoo,+Mafia+Street,+Dar+es+Salaam,+Tanzania&output=embed"
                    className="h-72 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </Reveal>

              <Reveal delay={420}>
                <div className="mt-8 flex items-center gap-4 rounded-3xl bg-ink p-6">
                  <Image
                    src="/images/whatsapp.png"
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-display text-lg text-white">
                      Fastest reply: WhatsApp
                    </p>
                    <p className="text-sm text-white/60">
                      We usually respond within minutes during business hours.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={150}>
              <div className="rounded-[2rem] bg-white p-7 shadow-xl ring-1 ring-ink/5 sm:p-10">
                <h2 className="font-display text-2xl text-ink">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-ink/55">
                  Fill in the form and it opens straight into WhatsApp.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
