import { SectionReveal } from "@/components/SectionReveal";
import type { Portfolio } from "@/content/portfolio";

type Props = {
  site: Portfolio["site"];
};

export function Hero({ site }: Props) {
  return (
    <div className="relative min-h-[85vh] px-4 pb-16 pt-20 sm:px-6 sm:pt-28 lg:pt-32">
      <SectionReveal className="relative mx-auto flex max-w-5xl flex-col gap-8">
        <div className="space-y-4">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="max-w-2xl text-xl text-muted sm:text-2xl">
            {site.title}
            <span className="mt-1 block text-base font-normal text-accent-code sm:text-lg">
              {site.headline}
            </span>
          </p>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.tagline}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent-code"
          >
            Get in touch
          </a>
        </div>
        {site.currentlyBuilding && (
          <p className="font-mono text-xs text-muted">
            <span className="text-accent-secondary">●</span> building:{" "}
            {site.currentlyBuildingUrl ? (
              <a
                href={site.currentlyBuildingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-code underline-offset-2 hover:underline"
              >
                {site.currentlyBuilding}
              </a>
            ) : (
              site.currentlyBuilding
            )}
          </p>
        )}
        <ul className="flex flex-wrap gap-4 pt-2">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent-code underline-offset-4 hover:underline"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </SectionReveal>
    </div>
  );
}
