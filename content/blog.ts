/** New posts: copy from content/blog.post.boilerplate.ts into `posts[]` below. */

/** Figure with optional caption — put files under `public/blog/…` */
export type BlogImageBlock = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
};

/**
 * Each string is a Markdown block (paragraph, `##` heading, list, inline links, etc.).
 * Use `{ type: "image", … }` for figures with captions.
 */
export type BlogBodyBlock = string | BlogImageBlock;

export function isBlogImageBlock(
  block: BlogBodyBlock,
): block is BlogImageBlock {
  return typeof block === "object" && block.type === "image";
}

export function hasBlogBody(body?: BlogBodyBlock[]): body is BlogBodyBlock[] {
  if (!body?.length) return false;
  return body.some((block) =>
    isBlogImageBlock(block) ? Boolean(block.src) : block.trim().length > 0,
  );
}

export type BlogPost = {
  slug: string;
  title: string;
  /** Display date, e.g. Oct 2026 */
  date: string;
  /** Optional ISO date for `<time datetime>` */
  dateIso?: string;
  excerpt: string;
  /** On-site article blocks. Omit for external-only or coming-soon posts. */
  body?: BlogBodyBlock[];
  /** External URL when the full post lives elsewhere */
  href?: string;
  tags?: string[];
  comingSoon?: boolean;
};

export const blog = {
  intro: "Software engineering notes on things I build, learn, and figure out.",
  posts: [
    {
      slug: "geospatial-ai-plugins-mcp",
      title: "Geospatial APIs, plugins, and MCP for property Q&A",
      date: "Coming soon",
      excerpt:
        "How we're exposing building and neighborhood data so AI assistants can answer grounded questions through plugins and MCP.",
      tags: ["Geospatial", "MCP", "AI", "Team project"],
      comingSoon: true,
    },
    // {
    //   slug: "my-post-slug",
    //   title: "Post title",
    //   date: "Oct 2026",
    //   dateIso: "2026-10-06",
    //   excerpt: "One or two sentences for the index and SEO.",
    //   tags: ["Tag one", "Tag two"],
    //   body: [
    //     "First paragraph with an [internal link](/blog) or [external link](https://example.com).",
    //     "## Section heading",
    //     "Use **bold**, `inline code`, and bullet lists:\n\n- Item one\n- Item two",
    //     {
    //       type: "image",
    //       src: "/projects/measurement-tool.png",
    //       alt: "Example diagram",
    //       caption: "Optional caption under the image.",
    //     },
    //   ],
    // },
  ] as BlogPost[],
};

export function getBlogPost(slug: string): BlogPost | undefined {
  return blog.posts.find((p) => p.slug === slug);
}

export function getPublishedBlogPosts(): BlogPost[] {
  return blog.posts.filter(
    (p) => !p.comingSoon && (hasBlogBody(p.body) || p.href),
  );
}

export function getOnSiteBlogPosts(): BlogPost[] {
  return blog.posts.filter((p) => !p.comingSoon && hasBlogBody(p.body));
}
