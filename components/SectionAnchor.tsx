"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import type { SectionId } from "@/lib/sections";

type Props = {
  id: SectionId;
  children: ReactNode;
  className?: string;
};

export function SectionAnchor({ id, children, className }: Props) {
  const { registerSection } = usePortfolio();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerSection(id, ref.current);
    return () => registerSection(id, null);
  }, [id, registerSection]);

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
}
