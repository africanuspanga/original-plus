import Image from "next/image";
import Reveal from "@/components/Reveal";

const marks = ["TBS Certified", "Quality Tested", "Safe for Your Skin"];

export default function TrustBadge() {
  return (
    <section className="bg-white py-14 lg:py-20" aria-labelledby="tbs-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-8 rounded-[2rem] border border-gold/40 bg-gradient-to-br from-cream to-white px-6 py-10 text-center shadow-sm sm:px-12 lg:flex-row lg:text-left">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-white p-3 shadow-md ring-1 ring-ink/5">
              <Image
                src="/images/tbs-logo.png"
                alt="Tanzania Bureau of Standards (TBS) logo"
                width={156}
                height={154}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
                Certified Quality
              </p>
              <h2
                id="tbs-heading"
                className="mt-2 font-display text-2xl leading-snug text-ink sm:text-3xl"
              >
                Vetted and passed by the Tanzania Bureau of Standards
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink/60 lg:mx-0">
                Every Original Plus product is inspected and approved by TBS,
                so you can trust exactly what you are putting on your skin.
              </p>
            </div>
            <ul className="flex flex-wrap items-center justify-center gap-2.5 lg:flex-col lg:items-end">
              {marks.map((mark) => (
                <li
                  key={mark}
                  className="flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-gold"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {mark}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
