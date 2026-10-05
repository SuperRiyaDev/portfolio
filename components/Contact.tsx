import { SectionReveal } from "@/components/SectionReveal";
import type { Portfolio } from "@/content/portfolio";

type Props = {
  site: Portfolio["site"];
};

export function Contact({ site }: Props) {
  return (
    <SectionReveal className="mx-auto max-w-5xl px-4 pb-8 sm:px-6">
      <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-accent-primary">
        Contact
      </h2>
      <p className="mb-6 max-w-lg text-muted">
        Open to interesting problems, collaborations, and conversations about
        software craft.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex w-fit items-center justify-center rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.02]"
        >
          Email me
        </a>
        <ul className="flex flex-wrap items-center gap-4">
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
      </div>
    </SectionReveal>
  );
}
