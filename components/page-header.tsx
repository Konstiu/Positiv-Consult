import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights?: string[];
  aside?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  highlights = [],
  aside,
}: PageHeaderProps) {
  return (
    <section className="hero-grid overflow-hidden">
      <div className="site-shell grid gap-10 py-16 md:py-18 lg:py-22">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <span className="eyebrow">{eyebrow}</span>
          <div className="space-y-5">
            <h1 className="text-balance font-serif text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mx-auto max-w-3xl text-pretty text-lg leading-8 text-[var(--muted)]">
              {description}
            </p>
          </div>
        </div>
        {aside ? <div className="surface-card p-6 md:p-8">{aside}</div> : null}
      </div>
    </section>
  );
}
