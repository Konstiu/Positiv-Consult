import {homepageTrustItems} from "@/lib/site-data";

export function StatsStrip() {
    return (
        <section className="site-shell relative py-10 md:py-14">
            <div className="grid gap-6 items-stretch sm:grid-cols-2 xl:grid-cols-4">
                {homepageTrustItems.map((item) => (
                    <article key={item.title}
                             className="surface-card px-6 py-8 text-center !bg-(--brand-dark) h-full flex flex-col justify-center">
                        <h3 className="font-serif text-3xl md:text-4xl font-semibold text-(--brand-red) leading-tight text-balance min-h-[4.5rem] flex items-center justify-center">
                            {item.title}
                        </h3>
                        <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-(--brand-blue-soft)">
                            {item.text}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
