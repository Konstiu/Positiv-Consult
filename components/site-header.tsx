"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/site-data";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-5">
      <span
        className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-[var(--ink)] transition ${
          open ? "translate-y-1.5 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-[var(--ink)] transition ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-[var(--ink)] transition ${
          open ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:rgba(255,255,255,0.92)] backdrop-blur-xl">
      <div className="site-shell flex min-h-[4.25rem] items-center justify-between gap-5 py-2">
        <Link href="/" className="flex h-10 shrink-0 items-center">
          <span className="flex items-center gap-3 whitespace-nowrap font-serif text-[1.18rem] font-semibold tracking-[0.04em] text-[var(--ink)]">
            <span>POSITIVconsult</span>
            <span className="font-sans text-[0.68rem] uppercase tracking-[0.24em] text-[var(--muted)]">
              Wien
            </span>
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex h-10 items-center whitespace-nowrap rounded-full px-4 text-[0.95rem] font-medium transition ${
                  active
                    ? "bg-[rgba(17,24,39,0.08)] text-[var(--ink)]"
                    : "text-[var(--muted)] hover:bg-[rgba(31,78,140,0.06)] hover:text-[var(--brand-blue)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(31,78,140,0.14)] bg-white text-[var(--ink)] lg:hidden"
            aria-expanded={open}
            aria-label="Navigation öffnen"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="site-shell flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex min-h-[3rem] items-center rounded-2xl px-4 text-base transition ${
                    active
                      ? "bg-[rgba(17,24,39,0.08)] text-[var(--ink)]"
                      : "text-[var(--muted)] hover:bg-[var(--brand-light)] hover:text-[var(--brand-blue)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
