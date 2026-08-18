import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-32 pb-20 text-center">
      <p className="font-display text-7xl text-gold">404</p>
      <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
        This page has gone missing
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/55">
        The page you are looking for does not exist — but your glow ritual is
        only one click away.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-ink px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-gold hover:text-ink"
        >
          Back to Home
        </Link>
        <Link
          href="/shop/"
          className="rounded-full border-2 border-ink/15 px-8 py-3.5 text-sm font-bold text-ink transition-colors hover:border-gold hover:bg-gold/10"
        >
          Shop Products
        </Link>
      </div>
    </section>
  );
}
