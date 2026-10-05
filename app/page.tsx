import { PortfolioShell } from "@/components/PortfolioShell";
import { portfolio } from "@/content/portfolio";

export default function Home() {
  return <PortfolioShell data={portfolio} />;
}
