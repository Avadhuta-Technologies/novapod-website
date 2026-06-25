import type { Metadata } from "next";
import {
  Workflow,
  Network,
  Gauge,
  Server,
  TrendingUp,
  FileText,
  Database,
  Layers,
  ShieldCheck,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { Button, Container, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Discovery Sprint",
  description:
    "A fixed-scope engagement that evaluates feasibility, expected accuracy, infrastructure requirements, and ROI before any reconciliation system is built.",
  alternates: { canonical: "/discovery-sprint" },
};

const reviewItems = [
  { icon: Workflow, label: "Current reconciliation process" },
  { icon: FileText, label: "Document types" },
  { icon: Gauge, label: "Volumes" },
  { icon: Database, label: "Existing systems" },
  { icon: ShieldCheck, label: "Compliance requirements" },
  { icon: Lock, label: "Security constraints" },
];

const deliverables = [
  {
    icon: Workflow,
    title: "Workflow Blueprint",
    desc: "Current-state and future-state process design, mapping exactly where automation fits.",
  },
  {
    icon: Network,
    title: "Technical Architecture",
    desc: "Recommended deployment and integration architecture for your environment.",
  },
  {
    icon: Gauge,
    title: "Accuracy Assessment",
    desc: "Expected extraction and reconciliation performance on your real documents.",
  },
  {
    icon: Server,
    title: "Infrastructure Plan",
    desc: "Infrastructure and deployment recommendations sized to your volume.",
  },
  {
    icon: TrendingUp,
    title: "Business Case",
    desc: "Estimated time savings and operational impact, quantified.",
  },
];

const timeline = [
  {
    week: "Week 1",
    title: "Understand & design",
    items: ["Process analysis", "Document review", "Architecture design"],
  },
  {
    week: "Week 2",
    title: "Validate & recommend",
    items: ["Prototype validation", "Findings", "Final recommendation"],
  },
];

export default function DiscoverySprintPage() {
  return (
    <>
      <PageHero
        eyebrow="Discovery Sprint"
        title={
          <>
            Validate the business case{" "}
            <span className="text-gradient">before building anything</span>
          </>
        }
        description="A fixed-scope engagement that evaluates feasibility, expected accuracy, infrastructure requirements, and ROI — so you commit to a build with evidence, not assumptions."
      >
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/contact" size="lg" withArrow>
            Book Discovery Call
          </Button>
          <span className="text-sm font-medium text-ink-500">
            Fixed scope · Fixed timeline · 2 weeks
          </span>
        </div>
      </PageHero>

      {/* What we do */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              align="left"
              eyebrow="What We Do"
              title="We start by understanding what you actually reconcile"
              description="Before recommending any technology, we build a precise picture of your process, your documents, and the constraints you operate under."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {reviewItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white p-4 shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="text-[0.95rem] font-medium text-ink-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Deliverables */}
      <Section className="bg-ink-50/50">
        <Container>
          <SectionHeading
            eyebrow="Deliverables"
            title="What you walk away with"
            description="Concrete, decision-ready artifacts — not a sales deck."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d) => (
              <div
                key={d.title}
                className="flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-inset ring-brand-100">
                  <d.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                  {d.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">
                  {d.desc}
                </p>
              </div>
            ))}
            <div className="flex flex-col justify-center rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-600 to-brand-800 p-7 text-white shadow-lift">
              <Layers className="h-8 w-8 text-brand-200" />
              <p className="mt-5 font-display text-lg font-semibold">
                One clear go / no-go decision
              </p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-brand-100">
                Every deliverable points to a single answer: whether to build,
                and exactly how.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Timeline"
            title="Two weeks, start to recommendation"
            description="A tight, structured engagement designed to give you clarity fast."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {timeline.map((t, i) => (
              <div
                key={t.week}
                className="relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-8 shadow-card"
              >
                <span
                  className="absolute right-6 top-4 font-display text-7xl font-bold text-ink-50"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <div className="relative">
                  <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-700 ring-1 ring-inset ring-brand-100">
                    {t.week}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
                    {t.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" />
                        <span className="text-[0.95rem] font-medium text-ink-700">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Book your Discovery Sprint"
        description="Fixed scope, fixed timeline, and a clear recommendation at the end. Start with a 20-minute call to confirm fit."
        secondaryLabel="See How It Works"
        secondaryHref="/how-it-works"
      />
    </>
  );
}
