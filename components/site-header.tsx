"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { navItems, withBasePath, basePath } from "@/lib/site-data";

const homeSectionLinks: Record<string, string> = {};

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-5">
      <span
        className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-white transition ${
          open ? "translate-y-1.5 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-white transition ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-white transition ${
          open ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    // Remove basePath from pathname for comparison
    const currentPath = basePath ? pathname.replace(basePath, "") : pathname;
    const normalizedPath = currentPath || "/";

    // Special case: /digitalisierung also matches /ai-consulting
    if (href === "/digitalisierung") {
      return normalizedPath === "/digitalisierung" || normalizedPath === "/ai-consulting";
    }

    // Direct match for all other pages
    return normalizedPath === href;
  };

  const renderNavItem = (item: (typeof navItems)[number], mobile = false) => {
    const active = isActive(item.href);
    const className = mobile
      ? `inline-flex min-h-[3rem] items-center px-4 text-base transition ${
          active
            ? "rounded-full bg-[var(--brand-blue)] text-white font-semibold"
            : "text-white/72 hover:bg-white/10 hover:text-white"
        }`
      : `inline-flex h-10 items-center whitespace-nowrap px-4 text-[0.95rem] font-medium transition rounded-full ${
          active
            ? "bg-[var(--brand-blue)] text-white font-semibold"
            : "text-white/72 hover:bg-white/10 hover:text-white"
        }`;

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setOpen(false)}
        className={className}
        aria-current={active ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[var(--brand-dark)] text-white backdrop-blur-xl">
      <div className="site-shell flex min-h-[5rem] items-center justify-between gap-5 py-3">
        <Link href="/" className="flex h-10 shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src={withBasePath("/brand/positivconsult-logo.png")}
            alt="POSITIVconsult"
            width={157}
            height={24}
            className="block h-auto w-[9.8rem]"
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 lg:flex">
          {navItems.map((item) => renderNavItem(item))}
        </nav>

        <div className="flex shrink-0 items-center lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white lg:hidden"
            aria-expanded={open}
            aria-label="Navigation öffnen"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/8 bg-[var(--brand-dark)] lg:hidden">
          <nav className="site-shell flex flex-col gap-1 py-4">
            {navItems.map((item) => renderNavItem(item, true))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
