import Link from "next/link";

type CtaSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaSection({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 md:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-[var(--ink)] px-6 py-10 text-white shadow-[0_30px_80px_rgba(18,31,41,0.18)] md:px-10 md:py-14">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,rgba(221,196,154,0.26),transparent_58%)]" />
        <div className="relative max-w-3xl space-y-5">
          <span className="eyebrow border-white/14 bg-white/6 text-white/78">
            {eyebrow}
          </span>
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="text-pretty text-base leading-8 text-white/74 md:text-lg">
            {description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--ink)]"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link
                href={secondaryHref}
                className="inline-flex justify-center rounded-full border border-white/14 px-5 py-3 text-sm font-semibold text-white"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
