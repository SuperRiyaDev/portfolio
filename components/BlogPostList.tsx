import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { hasBlogBody } from "@/content/blog";

type Props = {
  posts: BlogPost[];
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

function postReadHref(post: BlogPost) {
  if (post.comingSoon) return null;
  if (hasBlogBody(post.body)) return `/blog/${post.slug}`;
  if (post.href) return post.href;
  return null;
}

function isExternal(post: BlogPost, href: string) {
  return Boolean(post.href && href === post.href);
}

export function BlogPostList({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-surface/50 px-5 py-8 text-sm text-muted">
        No posts yet. Add entries to{" "}
        <code className="font-mono text-xs text-text">content/blog.ts</code>.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-border rounded-2xl border border-border bg-surface">
      {posts.map((post) => {
        const readHref = postReadHref(post);
        const external = readHref ? isExternal(post, readHref) : false;

        return (
          <li key={post.slug}>
            <article className="flex flex-col gap-2 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <time
                  dateTime={post.dateIso ?? post.date}
                  className="font-mono text-xs text-accent-code"
                >
                  {post.date}
                </time>
                {post.comingSoon && (
                  <span className="rounded-full bg-accent-secondary/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent-secondary">
                    coming soon
                  </span>
                )}
              </div>
              <h2 className="text-lg font-semibold text-text">
                {readHref && !external && (
                  <Link href={readHref} className="hover:text-accent-code">
                    {post.title}
                  </Link>
                )}
                {readHref && external && (
                  <a
                    href={readHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-accent-code"
                  >
                    {post.title}
                    <ExternalIcon />
                  </a>
                )}
                {!readHref && post.title}
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
              {post.tags && post.tags.length > 0 && (
                <ul className="flex flex-wrap gap-2 pt-1">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-bg px-2 py-0.5 font-mono text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
              {readHref && external && (
                <a
                  href={readHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 w-fit text-sm font-medium text-accent-code underline-offset-4 hover:underline"
                >
                  Read post
                </a>
              )}
              {readHref && !external && (
                <Link
                  href={readHref}
                  className="mt-1 w-fit text-sm font-medium text-accent-code underline-offset-4 hover:underline"
                >
                  Read post
                </Link>
              )}
            </article>
          </li>
        );
      })}
    </ul>
  );
}
