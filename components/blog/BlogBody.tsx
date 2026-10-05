import Link from "next/link";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import { ProjectImage } from "@/components/ProjectImage";
import type { BlogBodyBlock } from "@/content/blog";
import { isBlogImageBlock } from "@/content/blog";

type Props = {
  blocks: BlogBodyBlock[];
};

function MarkdownLink({
  href,
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  if (!href) {
    return <span>{children}</span>;
  }
  const external = /^https?:\/\//i.test(href);
  if (!external && href.startsWith("/")) {
    return (
      <Link href={href} className="font-medium text-accent-code underline-offset-4 hover:underline">
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-accent-code underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}

const markdownComponents: Components = {
  a: ({ href, children }) => <MarkdownLink href={href}>{children}</MarkdownLink>,
  h2: ({ children }) => (
    <h2 className="mt-10 mb-3 text-xl font-semibold text-text first:mt-0">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-2 text-lg font-semibold text-text">{children}</h3>
  ),
  p: ({ children }) => <p className="leading-relaxed">{children}</p>,
  ul: ({ children }) => <ul className="my-4 list-disc space-y-2 pl-6">{children}</ul>,
  ol: ({ children }) => <ol className="my-4 list-decimal space-y-2 pl-6">{children}</ol>,
  li: ({ children }) => <li>{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-text">{children}</strong>,
  code: ({ children }) => (
    <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-text">{children}</code>
  ),
  img: ({ src, alt }) => {
    const url = typeof src === "string" ? src : undefined;
    if (!url) return null;
    return (
      <span className="my-6 block overflow-hidden rounded-xl border border-border bg-surface">
        <ProjectImage
          src={url}
          alt={alt ?? ""}
          className="h-auto w-full object-contain"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </span>
    );
  },
};

export function BlogBody({ blocks }: Props) {
  return (
    <div className="space-y-5 text-base text-muted">
      {blocks.map((block, i) => {
        if (isBlogImageBlock(block)) {
          return (
            <figure key={i} className="my-8">
              <div className="overflow-hidden rounded-xl border border-border bg-surface">
                <ProjectImage
                  src={block.src}
                  alt={block.alt}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              {block.caption ? (
                <figcaption className="mt-2 text-center text-sm text-muted">{block.caption}</figcaption>
              ) : null}
            </figure>
          );
        }

        const text = block.trim();
        if (!text) return null;

        return (
          <ReactMarkdown key={i} components={markdownComponents}>
            {text}
          </ReactMarkdown>
        );
      })}
    </div>
  );
}
