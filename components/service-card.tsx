import type { ServiceItem } from "@/lib/site-data";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="surface-card card-stack group min-h-[19.5rem] border-t-4 border-t-[var(--brand-blue)] p-5 md:p-6">
      <div className="flex h-full flex-col gap-2.5">
        <div className="space-y-1.5">
          <h3 className="font-serif text-[1.5rem] leading-tight font-semibold text-[var(--brand-blue)] xl:text-[1.35rem] xl:whitespace-nowrap">
            {service.title}
          </h3>
          <p className="text-base leading-7 text-[var(--muted)]">
            {service.description}
          </p>
        </div>
        <ul className="mt-auto space-y-1.5 pt-1.5 text-sm leading-6 text-[var(--ink)]">
          {service.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-red)]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
