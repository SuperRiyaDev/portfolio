import type { Metadata } from "next";
import { BlogIndex } from "@/components/BlogIndex";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { blog } from "@/content/blog";
import { portfolio } from "@/content/portfolio";

export const metadata: Metadata = {
  title: `Tech blog · ${portfolio.site.name}`,
  description: blog.intro,
};

export default function BlogPage() {
  return (
    <>
      <a
        href="#blog-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-text"
      >
        Skip to content
      </a>
      <Nav />
      <main id="blog-main" className="py-16 sm:py-20">
        <BlogIndex />
      </main>
      <SiteFooter location={portfolio.site.location} />
    </>
  );
}
