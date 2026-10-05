"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePortfolio } from "@/context/PortfolioContext";
import { NAV_ITEMS, sectionHref } from "@/lib/nav";
import type { SectionId } from "@/lib/sections";

export function Nav() {
  const pathname = usePathname();
  const { activeSection, toggleTheme, theme } = usePortfolio();
  const onBlog = pathname?.startsWith("/blog") ?? false;
  const onHome = pathname === "/";

  const isActive = (navId: string) => {
    if (navId === "blog") return onBlog;
    if (navId === "home") return onHome && activeSection === "hero";
    if (onBlog) return false;
    return activeSection === navId;
  };

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium text-accent-code hover:text-text"
        >
          ~/portfolio
        </Link>
        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.navId);
            const className = `rounded-full px-3 py-1.5 text-sm transition-colors ${
              active
                ? "bg-surface text-text"
                : "text-muted hover:text-text"
            }`;

            if (item.kind === "link") {
              return (
                <Link key={item.navId} href={item.href} className={className}>
                  {item.label}
                </Link>
              );
            }

            const href = sectionHref(item.sectionId);
            if (onHome) {
              return (
                <button
                  key={item.navId}
                  type="button"
                  onClick={() => scrollTo(item.sectionId)}
                  className={className}
                >
                  {item.label}
                </button>
              );
            }

            return (
              <Link key={item.navId} href={href} className={className}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent-primary hover:text-text"
          aria-label={`Switch theme (current: ${theme})`}
        >
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </header>
  );
}
