import Image from "next/image";
import Link from "next/link";

import {addressLines, companyName, footerLinks, teamContacts, toTelHref, withBasePath,} from "@/lib/site-data";

export function SiteFooter() {
    return (
        <footer className="border-t border-black/5 bg-[var(--brand-dark)] text-[var(--paper)]">
            <div className="site-shell grid gap-10 py-14 md:grid-cols-[1.35fr_1fr_0.9fr]">
                <div className="space-y-4">
                    <Image
                        src={withBasePath("/brand/positivconsult-logo.png")}
                        alt={companyName}
                        width={176}
                        height={27}
                        className="block h-auto w-[11rem]"
                    />
                    <p className="max-w-md text-sm leading-7 text-slate-300">
                        Erfahrene Unternehmensberatung mit Fokus auf Wachstum,
                        Digitalisierung, Vertrieb, Förderthemen und KI-Beratung.
                    </p>
                </div>

                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-blue-soft)]">
                        Kontakt
                    </p>
                    <p className="text-sm text-slate-300">{addressLines.join(", ")}</p>
                    <div className="space-y-4">
                        {teamContacts.map((person) => (
                            <div key={person.email} className="space-y-2">
                                <p className="text-sm font-semibold text-white">{person.name}</p>
                                <p className="text-sm text-slate-400">{person.role}</p>
                                <a
                                    href={`mailto:${person.email}`}
                                    className="block text-sm text-slate-300 hover:text-[var(--brand-red)]"
                                >
                                    {person.email}
                                </a>
                                <a
                                    href={toTelHref(person.phone)}
                                    className="block text-sm text-slate-300 hover:text-[var(--brand-blue-soft)]"
                                >
                                    {person.phone}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-blue-soft)]">
                        Rechtliches
                    </p>
                    {footerLinks.map((link) => (
                        <Link key={link.href} href={link.href}
                              className="block text-sm text-white hover:text-[var(--brand-red)]">
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="site-shell py-6 text-center text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} POSITIVconsult</p>
                </div>
            </div>
        </footer>
    );
}
