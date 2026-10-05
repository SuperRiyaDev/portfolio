import { SectionReveal } from "@/components/SectionReveal";
import { BlogPostList } from "@/components/BlogPostList";
import { blog } from "@/content/blog";

export function BlogIndex() {
  return (
    <SectionReveal className="mx-auto max-w-5xl px-4 sm:px-6">
      <p className="mb-2 font-mono text-sm uppercase tracking-widest text-accent-primary">
        Tech blog
      </p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Writing
      </h1>
      <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted">
        {blog.intro}
      </p>
      {blog.posts.length > 0 && blog.posts.every((p) => p.comingSoon) && (
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent-secondary">
          Coming soon
        </p>
      )}
      <BlogPostList posts={blog.posts} />
    </SectionReveal>
  );
}
