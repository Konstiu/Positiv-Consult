import {homepageTrustItems} from "@/lib/site-data";

export function StatsStrip() {
  return (
      <section className="site-shell relative pb-6 md:pb-10">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {homepageTrustItems.map((item) => (
                  <article key={item.title} className="surface-card px-5 py-6 md:px-6 !bg-(--brand-dark)">
                      <p className="font-serif text-3xl font-semibold text-(--brand-red)">
                          {item.title}
                      </p>
                      <p className="mt-2 text-sm tracking-[0.18em] text-(--brand-blue-soft)">
                          {item.text}
                      </p>
                  </article>
              ))}
          </div>
      </section>
  );
}
