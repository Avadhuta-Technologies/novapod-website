import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { Container, Section } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on secure document reconciliation, compliant AI deployment, and finance operations automation from the Novapod team.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Notes on <span className="text-gradient">compliant AI</span> &amp;
            reconciliation
          </>
        }
        description="Practical perspectives on automating reconciliation without compromising security, auditability, or governance."
      />

      <Section className="pt-16 sm:pt-20">
        <Container>
          {posts.length === 0 ? (
            <div className="mx-auto flex max-w-md flex-col items-center rounded-2xl border border-dashed border-ink-200 bg-ink-50/50 p-12 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <FileText className="h-7 w-7" />
              </span>
              <h2 className="mt-5 font-display text-xl font-semibold text-ink-900">
                Articles are on the way
              </h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">
                We’re preparing our first set of articles. Check back soon, or
                book a discovery call in the meantime.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {featured && (
                <div className="grid gap-6 lg:grid-cols-2">
                  <BlogCard post={featured} featured />
                  <div className="flex flex-col justify-center rounded-2xl border border-ink-100 bg-gradient-to-br from-ink-900 to-brand-950 p-9 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
                      Latest
                    </p>
                    <h2 className="mt-3 font-display text-2xl font-bold leading-snug">
                      Reconciliation, done inside your perimeter
                    </h2>
                    <p className="mt-3 text-[0.975rem] leading-relaxed text-ink-300">
                      Every article here comes back to the same principle:
                      automation should never require handing your sensitive data
                      to someone else.
                    </p>
                  </div>
                </div>
              )}

              {rest.length > 0 && (
                <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </div>
          )}
        </Container>
      </Section>

      <CTASection
        title="Have a reconciliation challenge in mind?"
        description="Skip the reading and talk to us directly. A 20-minute call is often the fastest way to know if this is a fit."
        secondaryLabel="Discovery Sprint"
        secondaryHref="/discovery-sprint"
      />
    </>
  );
}
