"use client";

import { PortfolioProvider } from "@/context/PortfolioContext";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <PortfolioProvider>{children}</PortfolioProvider>;
}
