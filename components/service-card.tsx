import type { ServiceItem } from "@/lib/site-data";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="surface-card card-stack group min-h-[17rem] border-t-4 border-t-[var(--brand-blue)] p-5 md:p-6">
      <div className="flex h-full flex-col gap-3">
        <div className="space-y-2">
          <h3 className="font-serif text-[1.5rem] leading-tight font-semibold text-[var(--brand-blue)] xl:text-[1.35rem] xl:whitespace-nowrap">
            {service.title}
          </h3>
          <p className="text-base leading-7 text-[var(--muted)]">
            {service.description}
          </p>
        </div>
        <ul className="mt-auto space-y-2 pt-2 text-sm font-medium leading-6 text-[var(--ink)]">
          {service.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5">
              <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
