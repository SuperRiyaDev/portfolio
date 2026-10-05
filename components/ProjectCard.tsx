"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project, ProjectLink } from "@/content/portfolio";
import { ProjectImage } from "@/components/ProjectImage";

type Props = {
  project: Project;
  index: number;
};

function ExternalIcon() {
  return (
    <svg
      aria-hidden
      className="h-3.5 w-3.5 shrink-0 opacity-70"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
    </svg>
  );
}

function collectProjectLinks(project: Project): ProjectLink[] {
  const out: ProjectLink[] = [];
  if (project.liveUrl) {
    out.push({
      label: project.liveLinkLabel ?? "Live demo",
      href: project.liveUrl,
    });
  }
  if (project.repoUrl) {
    out.push({ label: "Repository", href: project.repoUrl });
  }
  if (project.links?.length) {
    out.push(...project.links);
  }
  return out;
}

function projectHasExpandableContent(project: Project) {
  return Boolean(
    project.detailParagraphs?.length ||
      project.highlights?.length ||
      project.gallery?.length
  );
}

type MediaProps = {
  project: Project;
  priority?: boolean;
};

function ProjectMedia({ project, priority }: MediaProps) {
  const alt = project.imageAlt ?? project.title;
  const liveHref = project.liveUrl;
  const liveLabel = project.liveLinkLabel ?? "Live demo";

  const image = project.imageSrc ? (
    <ProjectImage
      src={project.imageSrc}
      alt={alt}
      priority={priority}
      className="h-full w-full object-cover object-top transition duration-500 group-hover/media:scale-[1.02]"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
    />
  ) : (
    <div
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-code/15 via-surface to-accent-primary/15 px-6 text-center"
      aria-hidden
    >
      <span className="font-mono text-xs uppercase tracking-widest text-muted">
        Add imageSrc in portfolio.ts
      </span>
    </div>
  );

  const frame = (
    <>
      {image}
      {liveHref && (
        <span className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-bg/80 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover/media:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface/90 px-3 py-1 text-xs font-medium text-accent-secondary ring-1 ring-border">
            {liveLabel}
            <ExternalIcon />
          </span>
        </span>
      )}
    </>
  );

  const className =
    "group/media relative block aspect-[16/10] w-full overflow-hidden border-b border-border bg-bg";

  if (liveHref) {
    return (
      <a
        href={liveHref}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {frame}
        <span className="sr-only">
          {project.title} — {liveLabel}
        </span>
      </a>
    );
  }

  return <div className={className}>{frame}</div>;
}

function ProjectGallery({
  project,
  priority,
}: {
  project: Project;
  priority?: boolean;
}) {
  if (!project.gallery?.length) return null;

  return (
    <ul className="grid gap-2">
      {project.gallery.map((item, i) => (
        <li key={item.src} className="flex flex-col gap-1.5">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-bg">
            <ProjectImage
              src={item.src}
              alt={item.alt}
              priority={priority && i === 0}
              className="h-full w-full object-cover object-top"
              sizes="(max-width: 640px) 100vw, 480px"
            />
          </div>
          {item.caption && (
            <p className="text-xs leading-snug text-muted">{item.caption}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

export function ProjectCard({ project, index }: Props) {
  const reduced = useReducedMotion();
  const Card = reduced ? "article" : motion.article;
  const links = collectProjectLinks(project);
  const expandable = projectHasExpandableContent(project);
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();

  const motionProps = reduced
    ? {}
    : {
        whileHover: { y: -4, transition: { duration: 0.2 } },
      };

  return (
    <Card
      {...motionProps}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm ${
        project.featured ? "ring-1 ring-accent-primary/40" : ""
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-code/10 via-transparent to-accent-primary/10" />
      </div>
      <ProjectMedia project={project} priority={index < 2} />
      <div className="relative flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-text">{project.title}</h3>
          <div className="flex shrink-0 flex-wrap gap-1.5">
            {project.inProgress && (
              <span className="rounded-full bg-accent-secondary/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent-secondary">
                in progress
              </span>
            )}
            {project.featured && (
              <span className="rounded-full bg-accent-primary/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent-primary">
                featured
              </span>
            )}
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        {expandable && (
          <>
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={detailsId}
              onClick={() => setExpanded((open) => !open)}
              className="w-fit text-sm font-medium text-accent-code underline-offset-4 hover:underline"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
            {expanded && (
              <div id={detailsId} className="flex flex-col gap-3 border-t border-border pt-3">
                {project.detailParagraphs?.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted marker:text-accent-code">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                <ProjectGallery project={project} priority={false} />
              </div>
            )}
          </>
        )}

        <ul className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-bg px-2 py-0.5 font-mono text-xs text-accent-code"
            >
              {tag}
            </li>
          ))}
        </ul>
        {links.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {links.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-bg px-3 py-1.5 text-sm font-medium text-text transition hover:border-accent-code/50 hover:text-accent-code"
                >
                  {link.label}
                  <ExternalIcon />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <span className="sr-only">Project {index + 1}</span>
    </Card>
  );
}
