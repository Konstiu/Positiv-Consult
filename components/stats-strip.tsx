import {homepageTrustItems} from "@/lib/site-data";

export function StatsStrip() {
  return (
      <section className="site-shell relative py-10 md:py-14">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {homepageTrustItems.map((item) => (
                  <article key={item.title} className="surface-card px-6 py-8 text-center !bg-(--brand-dark)">
                      <p className="font-serif text-4xl font-semibold text-(--brand-red)">
                          {item.title}
                      </p>
                      <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-(--brand-blue-soft)">
                          {item.text}
                      </p>
                  </article>
              ))}
          </div>
      </section>
  );
}
