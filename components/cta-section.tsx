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
    <section className="site-shell">
      <div className="relative overflow-hidden rounded-[2rem] bg-[var(--brand-dark)] px-6 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)] md:px-10 md:py-14">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,rgba(215,38,61,0.24),transparent_56%)]" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_bottom_left,rgba(31,78,140,0.22),transparent_52%)]" />
        <div className="relative max-w-3xl space-y-5">
          <span className="eyebrow border-white/14 bg-white/6 text-[var(--brand-blue-soft)]">
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
              className="button-primary inline-flex justify-center rounded-full px-5 text-sm font-semibold"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link
                href={secondaryHref}
                className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-white/18 bg-transparent px-5 text-sm font-semibold text-white/92 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] hover:border-white/34 hover:bg-white/8 hover:text-white"
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
