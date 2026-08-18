import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-white to-white pt-36 pb-16 sm:pt-40 lg:pt-48 lg:pb-24">
      {/* Decorative gold glow */}
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-gold/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.35fr] lg:gap-4 lg:px-8">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-dark">
              Premium Skincare · Tanzania
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              Where Radiance
              <br />
              Becomes <span className="italic text-gold-dark">Ritual</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink/60 sm:text-lg lg:mx-0">
              Premium skincare crafted for luminous, confident skin, delivered
              across Tanzania.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/shop/"
                className="w-full rounded-full bg-ink px-9 py-4 text-center text-sm font-bold tracking-wide text-white transition-all hover:bg-gold hover:text-ink sm:w-auto"
              >
                Shop Now
              </Link>
              <Link
                href="/about/"
                className="w-full rounded-full border-2 border-ink/15 px-9 py-4 text-center text-sm font-bold tracking-wide text-ink transition-colors hover:border-gold hover:bg-gold/10 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <dl className="mt-12 flex items-center justify-center gap-8 lg:justify-start">
              {[
                ["4", "Signature Products"],
                ["1000", "Happy Customers"],
                ["24h", "Glass-Skin Glow"],
              ].map(([value, label]) => (
                <div key={label} className="text-center lg:text-left">
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-2xl font-semibold text-ink">
                    {value}
                    {value === "1000" && (
                      <span className="align-top text-sm">s</span>
                    )}
                  </dd>
                  <dd className="mt-0.5 text-[11px] uppercase tracking-wider text-ink/50">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none lg:scale-[1.07] xl:scale-110">
            <div
              className="absolute inset-x-8 bottom-0 top-16 rounded-t-full bg-gradient-to-b from-gold to-gold-dark/80"
              aria-hidden="true"
            />
            <Image
              src="/images/hero.png"
              alt="Woman with radiant, glowing skin enjoying Original Plus skincare"
              width={1400}
              height={741}
              priority
              className="relative z-10 w-full drop-shadow-2xl"
            />
            {/* Floating product card */}
            <div className="absolute -bottom-4 left-1/2 z-20 flex w-max -translate-x-1/2 items-center gap-3 rounded-2xl bg-white/95 px-5 py-3.5 shadow-xl ring-1 ring-ink/5 backdrop-blur">
              <Image
                src="/images/products/yellow-plus.jpg"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-xl object-cover"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-semibold text-ink">Yellow Plus</p>
                <p className="text-[11px] text-ink/50">Best Seller · TZS 60,000</p>
              </div>
              <Link
                href="/products/yellow-plus/"
                className="ml-2 rounded-full bg-ink px-4 py-2 text-[11px] font-bold text-white transition-colors hover:bg-gold hover:text-ink"
              >
                Shop
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
