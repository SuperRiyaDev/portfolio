"use client";

import { useState } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import type { Portfolio, Skill } from "@/content/portfolio";

type Props = {
  skills: Portfolio["skills"];
};

const categoryLabels: Record<Skill["category"], string> = {
  ai: "AI / LLM",
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend & APIs",
  cloud: "Cloud & DevOps",
  security: "Security",
  architecture: "Architecture",
  geospatial: "Geospatial & Desktop",
  coreCs: "Core CS",
  design: "Design",
};

const categoryOrder: Skill["category"][] = [
  "ai",
  "languages",
  "frontend",
  "backend",
  "cloud",
  "security",
  "architecture",
  "geospatial",
  "coreCs",
  "design",
];

export function Skills({ skills }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const byCategory = skills.reduce(
    (acc, skill) => {
      acc[skill.category].push(skill);
      return acc;
    },
    {
      ai: [] as Skill[],
      languages: [] as Skill[],
      frontend: [] as Skill[],
      backend: [] as Skill[],
      cloud: [] as Skill[],
      security: [] as Skill[],
      architecture: [] as Skill[],
      geospatial: [] as Skill[],
      coreCs: [] as Skill[],
      design: [] as Skill[],
    },
  );

  return (
    <SectionReveal className="mx-auto max-w-5xl px-4 sm:px-6">
      <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-accent-secondary">
        Skills
      </h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {categoryOrder.map((cat) => {
          const items = byCategory[cat];
          if (items.length === 0) return null;
          return (
            <div key={cat}>
              <h3 className="mb-3 text-sm font-semibold text-text">
                {categoryLabels[cat]}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li key={skill.name}>
                    <button
                      type="button"
                      onClick={() =>
                        setActive((a) => (a === skill.name ? null : skill.name))
                      }
                      className={`rounded-xl border px-3 py-2 text-left text-sm transition-colors ${
                        active === skill.name
                          ? "border-accent-primary bg-accent-primary/10 text-text"
                          : "border-border bg-surface text-muted hover:border-accent-code hover:text-text"
                      }`}
                    >
                      <span className="font-medium">{skill.name}</span>
                      {active === skill.name && skill.blurb && (
                        <span className="mt-1 block text-xs text-muted">
                          {skill.blurb}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionReveal>
  );
}
