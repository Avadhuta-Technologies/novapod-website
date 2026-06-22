import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export function Markdown({ content }: { content: string }) {
  return (
    <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-2xl prose-h3:text-xl prose-p:text-ink-700 prose-li:text-ink-700 prose-strong:text-ink-900 prose-a:font-medium prose-blockquote:border-l-brand-400 prose-blockquote:bg-brand-50/40 prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-ink-700 prose-code:rounded prose-code:bg-ink-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.85em] prose-code:font-medium prose-code:text-brand-800 prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:rounded-2xl prose-pre:border prose-pre:border-ink-800 prose-pre:bg-ink-900 prose-img:rounded-2xl prose-img:border prose-img:border-ink-100 prose-hr:border-ink-100">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
