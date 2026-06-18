import { stats } from "@/lib/site-data";

export function StatsStrip() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 md:px-8">
      <div className="surface-card grid gap-px overflow-hidden bg-black/5 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white px-6 py-8 md:px-8">
            <p className="font-serif text-4xl font-semibold text-[var(--ink)]">
              {stat.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
