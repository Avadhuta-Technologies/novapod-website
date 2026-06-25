import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { useCases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Document reconciliation use cases for finance and operations teams: invoice vs payment, bank statement, vendor verification, claims settlement, and multi-system matching.",
  alternates: { canonical: "/use-cases" },
};

const detail: Record<string, { points: string[]; outcome: string }> = {
  "Invoice vs Payment Reconciliation": {
    points: [
      "Match invoices to payments across formats and currencies",
      "Detect short payments, overpayments, and duplicates",
      "Flag missing or mismatched references for review",
    ],
    outcome: "Close the books faster with a defensible trail for every match.",
  },
  "Bank Statement Reconciliation": {
    points: [
      "Validate statement lines against internal ledgers",
      "Reconcile across multiple accounts and banks",
      "Surface unexplained or unmatched transactions",
    ],
    outcome: "Cut manual statement review while keeping full traceability.",
  },
  "Vendor Payment Verification": {
    points: [
      "Confirm payments against POs and supporting documents",
      "Verify bank details and approval thresholds",
      "Hold suspicious or incomplete payments for review",
    ],
    outcome: "Reduce payment errors and fraud exposure before funds move.",
  },
  "Claims & Settlement Reconciliation": {
    points: [
      "Compare submitted claims to approved settlements",
      "Identify discrepancies in amounts and coverage",
      "Route exceptions to the right reviewer automatically",
    ],
    outcome: "Faster settlement cycles with consistent, auditable decisions.",
  },
  "Multi-System Record Matching": {
    points: [
      "Reconcile data across ERP, accounting, and ops systems",
      "Normalize records from inconsistent source formats",
      "Maintain one trusted, reconciled view of the truth",
    ],
    outcome: "Eliminate silo-by-silo manual matching across systems.",
  },
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Use Cases"
        title={
          <>
            Reconciliation workflows we{" "}
            <span className="text-gradient">automate end to end</span>
          </>
        }
        description="Wherever records must be matched across documents and systems — under compliance constraints — Novapod replaces hours of manual review with an auditable, human-supervised pipeline."
      />

      <Section>
        <Container>
          <div className="space-y-6">
            {useCases.map((uc, i) => {
              const d = detail[uc.title];
              return (
                <div
                  key={uc.title}
                  className="grid gap-8 rounded-3xl border border-ink-100 bg-white p-8 shadow-card lg:grid-cols-[1fr_1.3fr] lg:p-10"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-[0_8px_20px_-8px_rgba(29,57,207,0.6)]">
                        <uc.icon className="h-7 w-7" />
                      </span>
                      <span className="font-display text-sm font-semibold text-ink-300">
                        Use Case 0{i + 1}
                      </span>
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink-900">
                      {uc.title}
                    </h2>
                    <p className="mt-3 text-[0.975rem] leading-relaxed text-ink-600">
                      {uc.body}
                    </p>
                    {d && (
                      <p className="mt-auto pt-6 text-sm font-medium text-brand-700">
                        → {d.outcome}
                      </p>
                    )}
                  </div>

                  {d && (
                    <div className="rounded-2xl border border-ink-100 bg-ink-50/50 p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-400">
                        What it handles
                      </p>
                      <ul className="mt-5 space-y-4">
                        {d.points.map((p) => (
                          <li key={p} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                            <span className="text-[0.95rem] leading-relaxed text-ink-700">
                              {p}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Don’t see your exact workflow?"
        description="Reconciliation rarely looks identical across organizations. Tell us what you match today and we’ll assess whether it’s a fit in a discovery sprint."
        secondaryLabel="How It Works"
        secondaryHref="/how-it-works"
      />
    </>
  );
}
