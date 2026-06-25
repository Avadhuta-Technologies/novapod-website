import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, CalendarDays } from "lucide-react";
import { Container } from "@/components/ui";
import { Markdown } from "@/components/Markdown";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import {
  formatDate,
  getAllPosts,
  getPostBySlug,
  getPostSlugs,
} from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found" };
  const url = `${site.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/icon.svg` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <article>
        {/* Header */}
        <header className="relative overflow-hidden border-b border-ink-100 pt-14 pb-12 sm:pt-20 sm:pb-16">
          <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,black,transparent)]" />
          <Container className="relative">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-brand-700"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to blog
              </Link>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium">
                <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 font-semibold uppercase tracking-[0.1em] text-brand-700 ring-1 ring-inset ring-brand-100">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-ink-400">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5 text-ink-400">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime}
                </span>
              </div>

              <h1 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink-900 sm:text-[2.6rem]">
                {post.title}
              </h1>
              {post.description && (
                <p className="mt-5 text-lg leading-relaxed text-ink-600">
                  {post.description}
                </p>
              )}

              <div className="mt-7 flex items-center gap-3 border-t border-ink-100 pt-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 text-sm font-semibold text-white">
                  {post.author.slice(0, 1)}
                </span>
                <div className="text-sm">
                  <p className="font-medium text-ink-800">{post.author}</p>
                  <p className="text-ink-400">Novapod</p>
                </div>
              </div>
            </div>
          </Container>
        </header>

        {/* Body */}
        <div className="py-14 sm:py-16">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Markdown content={post.content} />

              {post.tags.length > 0 && (
                <div className="mt-12 flex flex-wrap gap-2 border-t border-ink-100 pt-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-ink-50 px-3 py-1.5 text-xs font-medium text-ink-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-ink-100 bg-ink-50/50 py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900">
              Keep reading
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title="Ready to evaluate your workflow?"
        description="Book a 20-minute discovery call to see whether secure, in-house reconciliation is the right fit for your team."
        secondaryLabel="How It Works"
        secondaryHref="/how-it-works"
      />
    </>
  );
}
