/**
 * Blog post boilerplate — copy a block below into `posts[]` in content/blog.ts
 *
 * Workflow (GitHub → Vercel):
 * 1. Edit content/blog.ts on GitHub (or locally).
 * 2. Paste a new object into `posts` (newest first if you prefer).
 * 3. Commit to main → Vercel redeploys → post appears on /blog.
 *
 * Routes:
 * - Index:     /blog
 * - On-site:   /blog/your-slug   (requires `body`, not comingSoon)
 * - External:  list links out via `href` (no /blog/slug page)
 * - Draft:     `comingSoon: true` on index only
 */

import type { BlogPost } from "@/content/blog";

/** On-site article — full text at /blog/[slug] */
export const boilerplateOnSitePost = {
  slug: "my-post-slug",
  title: "Post title",
  date: "Oct 2026",
  dateIso: "2026-10-06",
  excerpt: "One or two sentences for the index and SEO.",
  tags: ["Tag one", "Tag two"],
  body: [
    "Intro with [links](https://example.com), **bold**, and `code`.",
    "## Section",
    "- Bullet one\n- Bullet two",
    {
      type: "image",
      src: "/blog/my-post-slug/diagram.png",
      alt: "Describe the image",
      caption: "Optional caption",
    },
  ],
} satisfies BlogPost;

/** LinkedIn / Medium / dev.to — index only, opens external URL */
export const boilerplateExternalPost = {
  slug: "my-external-post",
  title: "Post title",
  date: "Oct 2026",
  dateIso: "2026-10-06",
  excerpt: "Short summary on your site; full piece lives elsewhere.",
  href: "https://linkedin.com/posts/your-article",
  tags: ["Career", "Learning"],
} satisfies BlogPost;

/** Teaser on /blog before the write-up is ready */
export const boilerplateComingSoonPost = {
  slug: "upcoming-post-slug",
  title: "Working title",
  date: "Coming soon",
  excerpt: "What the post will cover.",
  tags: ["Topic"],
  comingSoon: true,
} satisfies BlogPost;

/*
 * --- paste into content/blog.ts (remove export / satisfies) ---

  {
    slug: "my-post-slug",
    title: "Post title",
    date: "Oct 2026",
    dateIso: "2026-10-06",
    excerpt: "One or two sentences for the index and SEO.",
    tags: ["Tag one", "Tag two"],
    body: [
      "Paragraph with [a link](https://example.com).",
      { type: "image", src: "/blog/my-post-slug/photo.png", alt: "Alt text" },
    ],
  },

 * When publishing: remove comingSoon, add body OR href, set a real date.
 * Optional: set portfolio.site.currentlyBuildingUrl to the post URL or LinkedIn link.
 */
