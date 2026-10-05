/**
 * Blog UI boilerplate — optional custom layout for a single post.
 *
 * Default path: all on-site posts use `BlogArticle` in app/blog/[slug]/page.tsx.
 *
 * To use a custom layout for one post:
 * 1. Copy this file → e.g. `BlogArticleGeospatialMcp.tsx`
 * 2. Implement the component (start from the skeleton below).
 * 3. In app/blog/[slug]/page.tsx, branch on slug:
 *
 *    import { BlogArticleGeospatialMcp } from "@/components/blog/BlogArticleGeospatialMcp";
 *
 *    export default async function BlogPostPage({ params }: PageProps) {
 *      const { slug } = await params;
 *      const post = getBlogPost(slug);
 *      if (!post || post.comingSoon || !hasBlogBody(post.body)) notFound();
 *
 *      return (
 *        <>
 *          <Nav />
 *          <main className="py-16 sm:py-20">
 *            {slug === "geospatial-ai-plugins-mcp" ? (
 *              <BlogArticleGeospatialMcp post={post} />
 *            ) : (
 *              <BlogArticle post={post} />
 *            )}
 *          </main>
 *          <SiteFooter location={portfolio.site.location} />
 *        </>
 *      );
 *    }
 *
 * 4. Reuse styles from BlogArticle.tsx (max-w-3xl, prose-like spacing).
 *
 * This file is not imported anywhere — it is documentation + a starting skeleton only.
 */

import Link from "next/link";
import { BlogBody } from "@/components/blog/BlogBody";
import type { BlogPost } from "@/content/blog";
import { hasBlogBody } from "@/content/blog";

type Props = {
  post: BlogPost;
};

/** Rename and wire in app/blog/[slug]/page.tsx when you need a custom post layout. */
export function BlogPostBoilerplate({ post }: Props) {
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
      </header>

      <BlogBody blocks={post.body} />

      {/* Example callout — add above/below BlogBody or replace with custom sections */}
      <aside className="mt-10 rounded-xl border border-border bg-surface p-5 text-sm text-muted">
        <p className="font-medium text-text">Takeaway</p>
        <p className="mt-2">Optional highlighted note for the reader.</p>
      </aside>
    </article>
  );
}
