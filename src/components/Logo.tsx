import Link from "next/link";

/**
 * Novapod mark — a "pod" of four isometric cubes: three in a base layer
 * with one stacked on top, rendered in the brand blue palette (top faces
 * light, left faces mid, right faces deep blue). Subtle edge strokes keep
 * each cube distinct down to favicon sizes.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="np-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c8d9ff" />
          <stop offset="1" stopColor="#7ea4fb" />
        </linearGradient>
        <linearGradient id="np-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3f6bf6" />
          <stop offset="1" stopColor="#2546d6" />
        </linearGradient>
        <linearGradient id="np-right" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#1f3fcf" />
          <stop offset="1" stopColor="#1c63d4" />
        </linearGradient>
      </defs>

      <g stroke="#14225f" strokeWidth="0.4" strokeOpacity="0.18" strokeLinejoin="round">
        {/* Back-center base cube */}
        <path d="M32 23 L44 29 L32 35 L20 29 Z" fill="url(#np-top)" />
        <path d="M20 29 L32 35 L32 48 L20 42 Z" fill="url(#np-left)" />
        <path d="M32 35 L44 29 L44 42 L32 48 Z" fill="url(#np-right)" />

        {/* Front-left base cube */}
        <path d="M20 29 L32 35 L20 41 L8 35 Z" fill="url(#np-top)" />
        <path d="M8 35 L20 41 L20 54 L8 48 Z" fill="url(#np-left)" />
        <path d="M20 41 L32 35 L32 48 L20 54 Z" fill="url(#np-right)" />

        {/* Front-right base cube */}
        <path d="M44 29 L56 35 L44 41 L32 35 Z" fill="url(#np-top)" />
        <path d="M32 35 L44 41 L44 54 L32 48 Z" fill="url(#np-left)" />
        <path d="M44 41 L56 35 L56 48 L44 54 Z" fill="url(#np-right)" />

        {/* Top cube (stacked on back-center) */}
        <path d="M32 10 L44 16 L32 22 L20 16 Z" fill="url(#np-top)" />
        <path d="M20 16 L32 22 L32 35 L20 29 Z" fill="url(#np-left)" />
        <path d="M32 22 L44 16 L44 29 L32 35 Z" fill="url(#np-right)" />
      </g>
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Novapod home"
    >
      <LogoMark className="h-8 w-8 transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="font-display text-[1.35rem] font-bold leading-none tracking-tight text-ink-900">
        Nova<span className="text-brand-600">pod</span>
      </span>
    </Link>
  );
}
