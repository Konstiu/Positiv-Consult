import { stats } from "@/lib/site-data";

export function StatsStrip() {
  return (
    <section className="site-shell">
      <div className="surface-card grid gap-px overflow-hidden bg-[rgba(31,78,140,0.08)] md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[var(--brand-dark)] px-6 py-8 text-center md:px-8 md:text-left">
            <p className="font-serif text-4xl font-semibold text-[var(--brand-red)]">
              {stat.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--brand-blue-soft)]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
