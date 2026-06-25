/**
 * Renders a JSON-LD structured-data script. Safe: JSON.stringify output is
 * embedded in a script tag (no user-controlled HTML execution).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
