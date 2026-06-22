import { Button, Container } from "./ui";
import { ArrowRight } from "lucide-react";

export function CTASection({
  eyebrow = "Get Started",
  title,
  description,
  primaryLabel = "Book Discovery Call",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink-900 px-6 py-16 sm:px-16 sm:py-20">
          {/* Decorative glow */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="bg-dots pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true" />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-200 ring-1 ring-inset ring-white/15">
              {eyebrow}
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-[2.6rem]">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">
              {description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryHref} size="lg" withArrow>
                {primaryLabel}
              </Button>
              {secondaryLabel && secondaryHref && (
                <a
                  href={secondaryHref}
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-6.5 py-3.5 text-[0.95rem] font-medium text-white ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/10"
                >
                  {secondaryLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
