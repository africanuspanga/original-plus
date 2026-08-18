import Reveal from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-gradient-to-b from-cream to-white pb-12 pt-36 sm:pt-40 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-dark">
            {eyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/60">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
