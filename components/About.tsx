import { SectionReveal } from "@/components/SectionReveal";
import type { Portfolio } from "@/content/portfolio";
import Image from "next/image";

type Props = {
  about: Portfolio["about"];
  location: string;
};

export function About({ about, location }: Props) {
  return (
    <SectionReveal className="mx-auto max-w-5xl px-4 sm:px-6">
      <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-accent-primary">
        About
      </h2>
      <div className="grid gap-8 md:grid-cols-[1fr_minmax(0,280px)] md:items-start">
        <div className="space-y-4 text-base leading-relaxed text-muted">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="text-sm text-text">
            Based in{" "}
            <span className="font-medium text-accent-secondary">{location}</span>.
          </p>
        </div>
        {about.photoSrc ? (
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src={about.photoSrc}
              alt={about.photoAlt}
              fill
              className="object-cover"
              sizes="280px"
            />
          </div>
        ) : (
          <div
            className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-border bg-surface p-6 text-center text-sm text-muted"
            aria-hidden
          >
            Add <code className="mx-1 font-mono text-xs">photoSrc</code> in
            content/portfolio.ts
          </div>
        )}
      </div>
    </SectionReveal>
  );
}
