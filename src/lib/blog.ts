import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
};

export type Post = PostMeta & { content: string };

function ensureDir(): boolean {
  return fs.existsSync(BLOG_DIR);
}

export function getPostSlugs(): string[] {
  if (!ensureDir()) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  if (!ensureDir()) return null;
  const cleanSlug = slug.replace(/\.mdx?$/, "");
  const mdPath = path.join(BLOG_DIR, `${cleanSlug}.md`);
  const mdxPath = path.join(BLOG_DIR, `${cleanSlug}.mdx`);
  const fullPath = fs.existsSync(mdPath)
    ? mdPath
    : fs.existsSync(mdxPath)
      ? mdxPath
      : null;
  if (!fullPath) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug: cleanSlug,
    title: data.title ?? cleanSlug,
    description: data.description ?? data.excerpt ?? "",
    date: data.date
      ? new Date(data.date).toISOString().slice(0, 10)
      : "1970-01-01",
    author: data.author ?? "Novapod",
    category: data.category ?? "Article",
    tags: Array.isArray(data.tags) ? data.tags : [],
    readingTime: stats.text,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content, ...meta }) => {
      void content;
      return meta;
    });
}

export function getAllCategories(): string[] {
  const set = new Set(getAllPosts().map((p) => p.category));
  return Array.from(set);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
