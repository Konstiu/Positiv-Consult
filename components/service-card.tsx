import type { ServiceItem } from "@/lib/site-data";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="surface-card card-stack group min-h-[22rem] border-t-4 border-t-[var(--brand-blue)] p-6 md:p-7">
      <div className="space-y-5">
        <div className="space-y-3">
          <h3 className="font-serif text-[1.65rem] leading-tight font-semibold text-[var(--ink)]">
            {service.title}
          </h3>
          <p className="text-base leading-7 text-[var(--muted)]">
            {service.description}
          </p>
        </div>
        <ul className="space-y-2 text-sm leading-6 text-[var(--ink)]">
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
