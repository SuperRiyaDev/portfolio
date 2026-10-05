import type { ThemeVariant } from "@/context/PortfolioContext";

const THEME_KEY = "portfolio-theme";

const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

function normalizeStored(raw: string | null): ThemeVariant {
  if (raw === "light") {
    return "light";
  }
  if (raw === "dark") {
    return "dark";
  }
  /* legacy keys from older portfolio themes */
  if (raw === "default" || raw === "soft" || raw === "warm-india") {
    return "dark";
  }
  return "dark";
}

export function getThemeSnapshot(): ThemeVariant {
  if (typeof window === "undefined") {
    return "dark";
  }
  return normalizeStored(localStorage.getItem(THEME_KEY));
}

export function subscribeTheme(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function setThemeSnapshot(theme: ThemeVariant) {
  localStorage.setItem(THEME_KEY, theme);
  emit();
}

export function toggleThemeSnapshot() {
  const next: ThemeVariant =
    getThemeSnapshot() === "dark" ? "light" : "dark";
  setThemeSnapshot(next);
}
