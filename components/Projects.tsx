import { ProjectCard } from "@/components/ProjectCard";
import { SectionReveal } from "@/components/SectionReveal";
import type { Portfolio } from "@/content/portfolio";

type Props = {
  projects: Portfolio["projects"];
};

export function Projects({ projects }: Props) {
  return (
    <SectionReveal className="mx-auto max-w-5xl px-4 sm:px-6">
      <h2 className="mb-2 font-mono text-sm uppercase tracking-widest text-accent-code">
        Projects
      </h2>
      <p className="mb-8 max-w-xl text-sm text-muted">
        Selected work — add screenshots under{" "}
        <code className="font-mono text-xs text-text">public/projects/</code> and
        set{" "}
        <code className="font-mono text-xs text-text">imageSrc</code>,{" "}
        <code className="font-mono text-xs text-text">liveUrl</code>, and{" "}
        <code className="font-mono text-xs text-text">repoUrl</code> in{" "}
        <code className="font-mono text-xs text-text">content/portfolio.ts</code>.
      </p>
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.title}>
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
