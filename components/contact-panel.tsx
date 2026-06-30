import { addressLines } from "@/lib/site-data";
import Link from "next/link";

export function ContactPanel({ id }: { id?: string }) {
  return (
    <section id={id} className="site-shell section-space grid gap-10">
      <div className="max-w-3xl space-y-6">
        <span className="eyebrow">Kontakt</span>
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
          Bereit für den nächsten Schritt?
        </h2>
        <p className="max-w-2xl text-pretty text-base leading-8 text-[var(--muted)] md:text-lg">
          Melden Sie sich für ein unverbindliches Erstgespräch. Wir klären in 30 Minuten,
          wo wir unterstützen können und welche Prioritäten sinnvoll sind.
        </p>
        <p className="text-sm text-[var(--muted)]">{addressLines.join(", ")}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/kontakt"
            className="button-primary inline-flex justify-center rounded-full px-5 text-sm font-semibold"
          >
            Jetzt Gespräch vereinbaren
          </Link>
        </div>
      </div>
    </section>
  );
}
