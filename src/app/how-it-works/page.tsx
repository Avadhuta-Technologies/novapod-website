import type { Metadata } from "next";
import {
  ScanText,
  ShieldCheck,
  GitCompareArrows,
  AlertTriangle,
  ClipboardList,
  FileStack,
  Server,
  Lock,
  Cpu,
} from "lucide-react";
import { Button, Container, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Novapod's document reconciliation pipeline runs end to end inside your infrastructure — extraction, validation, matching, exception handling, and a complete audit trail.",
};

const stages = [
  {
    icon: FileStack,
    title: "Documents",
    desc: "Invoices, payments, bank statements, and supporting documents enter the pipeline from your existing systems — no manual re-keying.",
  },
  {
    icon: ScanText,
    title: "Extraction",
    desc: "Structured fields and line items are extracted from each document. Models run locally; no content is sent to external providers.",
  },
  {
    icon: ShieldCheck,
    title: "Validation",
    desc: "Extracted records are checked against business rules, integrity constraints, and your reference data before any matching occurs.",
  },
  {
    icon: GitCompareArrows,
    title: "Matching",
    desc: "Records are reconciled across sources. Confident matches are completed automatically with a confidence score attached to each.",
  },
  {
    icon: AlertTriangle,
    title: "Exception Handling",
    desc: "The system does not guess. Low-confidence or conflicting cases are routed to a reviewer with full context for a fast decision.",
  },
  {
    icon: ClipboardList,
    title: "Audit Trail",
    desc: "Every extracted field, validation step, and decision is logged and traceable back to the source document for audit and compliance.",
  },
];

const deployment = [
  {
    icon: Server,
    title: "On-Prem or Private VPC",
    desc: "The entire pipeline is deployed inside your own infrastructure — your data center or your private cloud tenancy.",
  },
  {
    icon: Lock,
    title: "No External LLM APIs",
    desc: "Reconciliation never depends on a third-party AI endpoint. Sensitive documents stay within your security perimeter.",
  },
  {
    icon: Cpu,
    title: "Sized to your volume",
    desc: "GPU is not always required. We recommend infrastructure based on your document volume, complexity, and latency needs.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title={
          <>
            A reconciliation pipeline that runs{" "}
            <span className="text-gradient">entirely inside your walls</span>
          </>
        }
        description="From raw documents to a signed audit trail — every stage runs within your infrastructure, with humans in the loop wherever confidence is low."
      >
        <Button href="/contact" size="lg" withArrow>
          Book Discovery Call
        </Button>
      </PageHero>

      {/* Pipeline stages */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="The Pipeline"
            title="Six stages, one secure environment"
            description="Each stage hands off to the next without your data ever leaving your control."
          />
          <div className="mt-16 space-y-5">
            {stages.map((stage, i) => (
              <div
                key={stage.title}
                className="group flex flex-col gap-5 rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-all duration-300 hover:shadow-lift sm:flex-row sm:items-center sm:p-8"
              >
                <div className="flex items-center gap-5 sm:w-72 sm:shrink-0">
                  <span className="font-display text-3xl font-bold text-ink-200">
                    0{i + 1}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                    <stage.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink-900">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-[0.975rem] leading-relaxed text-ink-600 sm:border-l sm:border-ink-100 sm:pl-8">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Deployment */}
      <Section className="bg-ink-50/50">
        <Container>
          <SectionHeading
            eyebrow="Deployment Model"
            title="Built to satisfy security review"
            description="The architecture is designed so your compliance and security teams can sign off with confidence."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {deployment.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-inset ring-brand-100">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="See the pipeline applied to your documents"
        description="In a discovery sprint we run your real document types through the pipeline and report expected accuracy before you commit to building."
        secondaryLabel="Explore Discovery Sprint"
        secondaryHref="/discovery-sprint"
      />
    </>
  );
}
