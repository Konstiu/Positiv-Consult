import Link from "next/link";

import type { ServiceItem } from "@/lib/site-data";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="surface-card group flex h-full flex-col justify-between border-t-4 border-t-[var(--brand-blue)] p-6 md:p-7">
      <div className="space-y-5">
        <div className="inline-flex rounded-full border border-[rgba(31,78,140,0.16)] bg-[var(--brand-light)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue)]">
          Kompetenzfeld
        </div>
        <div className="space-y-3">
          <h3 className="font-serif text-2xl font-semibold text-[var(--ink)]">
            {service.title}
          </h3>
          <p className="text-sm leading-7 text-[var(--muted)]">
            {service.description}
          </p>
        </div>
        <ul className="space-y-2 text-sm text-[var(--ink)]">
          {service.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-red)]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={service.href}
        className="text-link mt-8 inline-flex items-center gap-2 text-sm font-semibold transition group-hover:translate-x-1"
      >
        Mehr erfahren
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
