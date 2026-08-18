export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-white/70" : "text-ink/60"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
