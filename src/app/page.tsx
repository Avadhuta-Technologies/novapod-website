import Link from "next/link";
import {
  ArrowRight,
  Server,
  Lock,
  UserCheck,
  ClipboardList,
  XCircle,
  CheckCircle2,
} from "lucide-react";
import { Button, Container, Eyebrow, Section, SectionHeading } from "@/components/ui";
import { HeroVisual } from "@/components/HeroVisual";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { trustPillars, useCases, homeFaqs } from "@/lib/content";

const trustIndicators = [
  { label: "On-Prem or Private VPC Deployment", icon: Server },
  { label: "No External LLM APIs Required", icon: Lock },
  { label: "Human-in-the-Loop Validation", icon: UserCheck },
  { label: "Complete Audit Trail", icon: ClipboardList },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden pt-14 sm:pt-20">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-200/35 blur-[120px]"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
            <div className="reveal max-w-xl">
              <Eyebrow>Reconciliation AI · On Your Infrastructure</Eyebrow>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.07] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
                Document Reconciliation AI that runs{" "}
                <span className="text-gradient">inside your infrastructure</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-600">
                Automate invoice, payment, statement, and document reconciliation
                without sending sensitive data to external AI providers. Built for
                regulated organizations that require auditability, security, and
                compliance.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg" withArrow>
                  Book Discovery Call
                </Button>
                <Button href="/how-it-works" size="lg" variant="secondary">
                  See How It Works
                </Button>
              </div>

              <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {trustIndicators.map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <dt className="text-sm font-medium text-ink-700">
                      {item.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="reveal lg:pl-4" style={{ animationDelay: "120ms" }}>
              <HeroVisual />
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- The Problem ---------------- */}
      <Section className="bg-ink-50/50">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              align="left"
              eyebrow="The Problem"
              title="Manual reconciliation doesn’t scale"
              description="Finance and operations teams spend hundreds of hours reconciling invoices, payments, statements, and supporting documents. Most AI solutions require sending that sensitive information to third-party providers — creating compliance and governance concerns."
            />
            <div className="flex flex-col justify-center gap-4">
              {[
                "Teams remain dependent on spreadsheets and manual reviews",
                "Errors become difficult to identify",
                "Processing times increase with volume",
                "AI initiatives stall during compliance reviews",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 shadow-card"
                >
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
                  <p className="text-[0.975rem] font-medium text-ink-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------- The Solution + Workflow ---------------- */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="The Solution"
            title="Reconciliation AI designed for regulated environments"
            description="We design and build document reconciliation systems that operate entirely within your infrastructure. The system extracts data, validates records, identifies matches, flags exceptions, and creates a complete audit trail for every decision. Nothing leaves your environment."
          />
          <div className="mt-16">
            <WorkflowDiagram />
          </div>
        </Container>
      </Section>

      {/* ---------------- Why Compliance Teams Trust It ---------------- */}
      <Section className="bg-ink-50/50">
        <Container>
          <SectionHeading
            eyebrow="Why It’s Trusted"
            title="Why compliance teams trust Novapod"
            description="Security and governance aren’t features bolted on at the end — they shape every architectural decision."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {trustPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group flex gap-5 rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-inset ring-brand-100">
                  <pillar.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[0.975rem] leading-relaxed text-ink-600">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------- Use Cases ---------------- */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Use Cases"
            title="Where reconciliation AI pays off"
            description="Common workflows we automate for finance and operations teams in regulated industries."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="group relative flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <uc.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                  {uc.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">
                  {uc.body}
                </p>
              </div>
            ))}
            <Link
              href="/use-cases"
              className="group flex flex-col justify-between rounded-2xl border border-dashed border-brand-200 bg-brand-50/40 p-7 transition-colors hover:bg-brand-50"
            >
              <span className="font-display text-lg font-semibold text-ink-900">
                Explore all use cases
              </span>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                See detailed breakdowns
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ---------------- Discovery Sprint band ---------------- */}
      <Section className="bg-ink-50/50">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              align="left"
              eyebrow="Start Here"
              title="Start with a Discovery Sprint"
              description="Before committing to a full implementation, we run a structured discovery sprint. Fixed scope. Fixed timeline."
            />
            <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-400">
                You receive
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Workflow assessment",
                  "Sample document analysis",
                  "Reconciliation approach",
                  "Expected accuracy benchmarks",
                  "Infrastructure recommendation",
                  "Cost-benefit estimate",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-600" />
                    <span className="text-[0.95rem] font-medium text-ink-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button href="/discovery-sprint" withArrow>
                  Explore the Discovery Sprint
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------- FAQ ---------------- */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Questions we hear from compliance teams"
              description="Still unsure whether this fits your governance constraints? Book a 20-minute call and we’ll walk through your specifics."
            />
            <FAQ items={homeFaqs} />
          </div>
        </Container>
      </Section>

      {/* ---------------- Final CTA ---------------- */}
      <CTASection
        eyebrow="See Whether This Is a Fit"
        title="Book a 20-minute discovery call"
        description="Evaluate your workflow, compliance constraints, and automation potential — no obligation, no data shared."
        primaryLabel="Book Discovery Call"
        secondaryLabel="See How It Works"
        secondaryHref="/how-it-works"
      />
    </>
  );
}
