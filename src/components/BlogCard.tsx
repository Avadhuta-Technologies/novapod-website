import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { formatDate, type PostMeta } from "@/lib/blog";

export function BlogCard({
  post,
  featured = false,
}: {
  post: PostMeta;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-lift ${
        featured ? "lg:p-9" : ""
      }`}
    >
      <div className="flex items-center gap-3 text-xs font-medium">
        <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 font-semibold uppercase tracking-[0.1em] text-brand-700 ring-1 ring-inset ring-brand-100">
          {post.category}
        </span>
        <span className="inline-flex items-center gap-1.5 text-ink-400">
          <Clock className="h-3.5 w-3.5" />
          {post.readingTime}
        </span>
      </div>

      <h3
        className={`mt-4 font-display font-bold leading-snug tracking-tight text-ink-900 transition-colors group-hover:text-brand-700 ${
          featured ? "text-2xl sm:text-3xl" : "text-xl"
        }`}
      >
        {post.title}
      </h3>

      <p className="mt-3 flex-1 text-[0.975rem] leading-relaxed text-ink-600">
        {post.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-ink-100 pt-5">
        <div className="text-sm">
          <p className="font-medium text-ink-800">{post.author}</p>
          <p className="text-ink-400">{formatDate(post.date)}</p>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-50 text-ink-500 transition-colors group-hover:bg-brand-600 group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
