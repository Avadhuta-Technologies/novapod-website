import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The 4-cube mark, embedded as a data URI (reliable inside Satori/ImageResponse).
const logoSvg = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
<defs>
<linearGradient id="t" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c8d9ff"/><stop offset="1" stop-color="#7ea4fb"/></linearGradient>
<linearGradient id="l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f6bf6"/><stop offset="1" stop-color="#2546d6"/></linearGradient>
<linearGradient id="r" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="#1f3fcf"/><stop offset="1" stop-color="#1c63d4"/></linearGradient>
</defs>
<g stroke="#14225f" stroke-width="0.4" stroke-opacity="0.18" stroke-linejoin="round">
<path d="M32 23 L44 29 L32 35 L20 29 Z" fill="url(#t)"/><path d="M20 29 L32 35 L32 48 L20 42 Z" fill="url(#l)"/><path d="M32 35 L44 29 L44 42 L32 48 Z" fill="url(#r)"/>
<path d="M20 29 L32 35 L20 41 L8 35 Z" fill="url(#t)"/><path d="M8 35 L20 41 L20 54 L8 48 Z" fill="url(#l)"/><path d="M20 41 L32 35 L32 48 L20 54 Z" fill="url(#r)"/>
<path d="M44 29 L56 35 L44 41 L32 35 Z" fill="url(#t)"/><path d="M32 35 L44 41 L44 54 L32 48 Z" fill="url(#l)"/><path d="M44 41 L56 35 L56 48 L44 54 Z" fill="url(#r)"/>
<path d="M32 10 L44 16 L32 22 L20 16 Z" fill="url(#t)"/><path d="M20 16 L32 22 L32 35 L20 29 Z" fill="url(#l)"/><path d="M32 22 L44 16 L44 29 L32 35 Z" fill="url(#r)"/>
</g></svg>`;
const logoDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(logoSvg)}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0b1430",
          backgroundImage:
            "radial-gradient(900px 500px at 80% -10%, rgba(59,102,245,0.45), transparent 60%), radial-gradient(700px 500px at 0% 120%, rgba(14,165,233,0.22), transparent 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoDataUri} width={84} height={84} alt="" />
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
            Novapod
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            Document Reconciliation AI that runs inside your infrastructure
          </div>
          <div style={{ fontSize: 30, color: "#aebfe0", maxWidth: 900 }}>
            On-prem &amp; private VPC · No external LLM APIs · Complete audit
            trail
          </div>
        </div>

        {/* Footer line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#8aa0cf",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 99,
              backgroundColor: "#3b66f5",
            }}
          />
          Built for regulated finance &amp; operations teams
        </div>
      </div>
    ),
    { ...size },
  );
}
