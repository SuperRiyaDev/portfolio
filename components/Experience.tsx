import { SectionReveal } from "@/components/SectionReveal";
import type { ExperienceEntry } from "@/content/portfolio";

type Props = {
  experience: ExperienceEntry[];
};

function formatDateRange(entry: ExperienceEntry) {
  return `${entry.start} – ${entry.end}`;
}

function formatMeta(entry: ExperienceEntry) {
  const parts = [formatDateRange(entry)];
  if (entry.location) {
    parts.push(entry.location);
  }
  return parts.join(" · ");
}

export function Experience({ experience }: Props) {
  return (
    <SectionReveal className="mx-auto max-w-5xl px-4 sm:px-6">
      <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-accent-secondary">
        Experience
      </h2>
      <p className="mb-10 max-w-xl text-sm text-muted">
        Work history, newest first.
      </p>
      <ol className="relative space-y-0">
        <div
          className="absolute bottom-0 left-[11px] top-2 w-px bg-border sm:left-[15px]"
          aria-hidden
        />
        {experience.map((entry, index) => (
          <li key={`${entry.organization}-${entry.start}`} className="relative pb-10 last:pb-0">
            <div className="flex gap-4 sm:gap-6">
              <div className="relative z-10 mt-1.5 flex shrink-0 flex-col items-center">
                <span
                  className={`flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 sm:h-[30px] sm:w-[30px] ${
                    entry.current
                      ? "border-accent-primary bg-accent-primary/20"
                      : entry.kind === "education"
                        ? "border-accent-code bg-surface"
                        : "border-border bg-surface"
                  }`}
                >
                  {entry.current && (
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-primary opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-primary" />
                    </span>
                  )}
                </span>
              </div>
              <article
                className={`min-w-0 flex-1 rounded-2xl border p-5 sm:p-6 ${
                  entry.current
                    ? "border-accent-primary/40 bg-surface ring-1 ring-accent-primary/20"
                    : "border-border bg-surface"
                }`}
              >
                <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-text">{entry.title}</h3>
                    <p className="text-sm font-medium text-accent-code">
                      {entry.organization}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-muted">{formatMeta(entry)}</p>
                </div>
                {entry.kind === "education" ? (
                  entry.detail && (
                    <p className="text-sm text-muted">{entry.detail}</p>
                  )
                ) : (
                  entry.highlights && (
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                      {entry.highlights.map((line) => (
                        <li key={line.slice(0, 48)}>{line}</li>
                      ))}
                    </ul>
                  )
                )}
                {index === 0 && entry.kind === "work" && (
                  <span className="sr-only">Current role</span>
                )}
              </article>
            </div>
          </li>
        ))}
      </ol>
    </SectionReveal>
  );
}
