"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { SectionId } from "@/lib/sections";
import {
  getThemeSnapshot,
  subscribeTheme,
  toggleThemeSnapshot,
} from "@/lib/themeStore";

export type ThemeVariant = "dark" | "light";

type PortfolioContextValue = {
  activeSection: SectionId;
  setActiveSection: (id: SectionId) => void;
  theme: ThemeVariant;
  toggleTheme: () => void;
  registerSection: (id: SectionId, el: HTMLElement | null) => void;
};

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    () => "dark" as ThemeVariant,
  );
  const [sectionRegistry, setSectionRegistry] = useState<
    Map<SectionId, HTMLElement>
  >(() => new Map());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const registerSection = useCallback(
    (id: SectionId, el: HTMLElement | null) => {
      setSectionRegistry((prev) => {
        const next = new Map(prev);
        if (el) {
          next.set(id, el);
        } else {
          next.delete(id);
        }
        return next;
      });
    },
    [],
  );

  useEffect(() => {
    const elements = [...sectionRegistry.values()];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (id) {
          setActiveSection(id as SectionId);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const el of elements) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sectionRegistry]);

  const toggleTheme = useCallback(() => {
    toggleThemeSnapshot();
  }, []);

  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
      theme,
      toggleTheme,
      registerSection,
    }),
    [activeSection, theme, toggleTheme, registerSection],
  );

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error("usePortfolio must be used within PortfolioProvider");
  }
  return ctx;
}
