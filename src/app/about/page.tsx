import type { Metadata } from "next";
import { Target, ShieldCheck, Boxes, Microscope } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Novapod builds custom document reconciliation AI for regulated organizations — security-first, auditable, and deployed entirely inside your own infrastructure.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: ShieldCheck,
    title: "Security is the architecture",
    desc: "We don't add compliance at the end. Every system is designed so your data never leaves your environment and every decision is auditable.",
  },
  {
    icon: Microscope,
    title: "Evidence before building",
    desc: "We validate feasibility, accuracy, and ROI in a discovery sprint before anyone commits to a full implementation.",
  },
  {
    icon: Boxes,
    title: "Custom, not off-the-shelf",
    desc: "We build around your workflow, your systems, and your constraints — rather than forcing your process into a generic product.",
  },
  {
    icon: Target,
    title: "Humans stay in control",
    desc: "The system escalates uncertainty instead of guessing. People make the calls that matter, with full context.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Novapod"
        title={
          <>
            We build reconciliation AI for teams that{" "}
            <span className="text-gradient">can’t compromise on trust</span>
          </>
        }
        description="Novapod designs and delivers custom document reconciliation systems for finance and operations teams in regulated industries — where auditability, security, and governance are non-negotiable."
      />

      {/* Mission */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              align="left"
              eyebrow="Why We Exist"
              title="AI automation shouldn’t mean giving up control of your data"
              description={
                <>
                  The most capable AI tools ask you to send sensitive financial
                  and operational documents to third-party providers. For
                  regulated organizations, that’s a non-starter — and so valuable
                  automation stalls in compliance review.
                </>
              }
            />
            <div className="flex flex-col justify-center gap-5 text-[1.05rem] leading-relaxed text-ink-600">
              <p>
                We started Novapod to close that gap: reconciliation AI that
                delivers real accuracy and time savings while running entirely
                inside your infrastructure. No external LLM APIs. No sensitive
                document transfer. A complete audit trail for every decision.
              </p>
              <p>
                We work as a build partner, not a product vendor. Each engagement
                starts with a structured discovery sprint, so you see the
                evidence — feasibility, expected accuracy, infrastructure, and ROI
                — before committing to anything.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section className="bg-ink-50/50">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="The principles behind every build"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="flex gap-5 rounded-2xl border border-ink-100 bg-white p-7 shadow-card"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-inset ring-brand-100">
                  <p.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.975rem] leading-relaxed text-ink-600">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Work With Us"
        title="Let’s evaluate your reconciliation workflow"
        description="A 20-minute discovery call is the fastest way to find out whether a secure, in-house reconciliation system is the right fit for your team."
        secondaryLabel="Discovery Sprint"
        secondaryHref="/discovery-sprint"
      />
    </>
  );
}
