import Image from "next/image";
import Link from "next/link";

type CtaSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  backgroundImageSrc?: string;
};

export function CtaSection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  backgroundImageSrc,
}: CtaSectionProps) {
  return (
    <section className="site-shell pb-10 pt-10">
      <div className="relative overflow-hidden rounded-[2rem] bg-[var(--brand-dark)] px-6 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)] md:px-10 md:py-14">
        {backgroundImageSrc ? (
          <div className="pointer-events-none absolute inset-0">
            <Image
              src={backgroundImageSrc}
              alt=""
              fill
              sizes="100vw"
              className="object-cover grayscale opacity-[0.12]"
            />
            <div className="absolute inset-0 bg-[rgba(17,24,39,0.72)]" />
          </div>
        ) : null}

        <div className="relative max-w-3xl space-y-5">
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="text-pretty text-base leading-8 text-white/74 md:text-lg">
            {description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(31,78,140,0.25)] transition hover:bg-[var(--brand-blue)]/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              {primaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
