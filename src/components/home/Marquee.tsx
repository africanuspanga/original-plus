const words = [
  "Premium Skincare",
  "Made for Your Glow",
  "Original Plus",
  "Radiant Skin",
  "Kariakoo · Dar es Salaam",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-ink py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-0">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {words.map((word) => (
              <span
                key={`${copy}-${word}`}
                className="flex items-center whitespace-nowrap font-display text-sm uppercase tracking-[0.3em] text-gold"
              >
                {word}
                <span className="mx-8 inline-block h-1.5 w-1.5 rounded-full bg-gold/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
