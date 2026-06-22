import Link from "next/link";
import { LogoMark } from "./Logo";
import { Container } from "./ui";
import { footerNav, site } from "@/lib/site";
import { ShieldCheck, Lock, FileCheck2 } from "lucide-react";

export function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-ink-100 bg-ink-50/60">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="font-display text-xl font-bold tracking-tight text-ink-900">
                Nova<span className="text-brand-600">pod</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              Document reconciliation AI that runs entirely inside your
              infrastructure. Built for regulated organizations that require
              auditability, security, and compliance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-ink-500">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-inset ring-ink-200">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-600" /> On-Prem / VPC
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-inset ring-ink-200">
                <Lock className="h-3.5 w-3.5 text-brand-600" /> No External LLMs
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-inset ring-ink-200">
                <FileCheck2 className="h-3.5 w-3.5 text-brand-600" /> Full Audit Trail
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-600 transition-colors hover:text-brand-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink-200/70 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-ink-500">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-sm text-ink-500">
            Built for compliance-first finance &amp; operations teams.
          </p>
        </div>
      </Container>
    </footer>
  );
}
