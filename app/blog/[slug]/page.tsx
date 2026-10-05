import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/BlogArticle";
import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogPost, getOnSiteBlogPosts, hasBlogBody } from "@/content/blog";
import { portfolio } from "@/content/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** Pre-render known slugs at build; allow new slugs at request time (dev + after deploy). */
export const dynamicParams = true;

export async function generateStaticParams() {
  return getOnSiteBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post || post.comingSoon || !hasBlogBody(post.body)) {
    return { title: `Post not found · ${portfolio.site.name}` };
  }
  return {
    title: `${post.title} · ${portfolio.site.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post || post.comingSoon || !hasBlogBody(post.body)) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="py-16 sm:py-20">
        <BlogArticle post={post} />
      </main>
      <SiteFooter location={portfolio.site.location} />
    </>
  );
}
