import Link from "next/link";
import { BlogBody } from "@/components/blog/BlogBody";
import type { BlogPost } from "@/content/blog";
import { hasBlogBody } from "@/content/blog";

type Props = {
  post: BlogPost;
};

export function BlogArticle({ post }: Props) {
  if (!hasBlogBody(post.body)) {
    return null;
  }

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm font-medium text-accent-code underline-offset-4 hover:underline"
      >
        ← All posts
      </Link>
      <header className="mb-10 border-b border-border pb-8">
        <time
          dateTime={post.dateIso ?? post.date}
          className="font-mono text-xs text-accent-code"
        >
          {post.date}
        </time>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          {post.title}
        </h1>
        {post.tags && post.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-surface px-2 py-0.5 font-mono text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>
      <BlogBody blocks={post.body} />
    </article>
  );
}
