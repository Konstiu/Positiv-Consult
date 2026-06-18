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
    <section className="hero-grid overflow-hidden border-b border-black/5">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-18 md:px-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(300px,0.8fr)] lg:items-end lg:py-24">
        <div className="space-y-8">
          <span className="eyebrow">{eyebrow}</span>
          <div className="space-y-5">
            <h1 className="text-balance font-serif text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl text-pretty text-lg leading-8 text-[var(--muted)]">
              {description}
            </p>
          </div>
          {highlights.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="surface-card px-5 py-4 text-sm leading-7 text-[var(--ink)]">
                  {item}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        {aside ? <div className="surface-card p-6 md:p-8">{aside}</div> : null}
      </div>
    </section>
  );
}
