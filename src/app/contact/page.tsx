import type { Metadata } from "next";
import { Clock, ShieldCheck, MessageSquare, Mail } from "lucide-react";
import { Container, Section } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Discovery Call",
  description:
    "Book a 20-minute discovery call to evaluate your reconciliation workflow, compliance constraints, and automation potential.",
  alternates: { canonical: "/contact" },
};

const assurances = [
  {
    icon: Clock,
    title: "20 minutes",
    desc: "A focused call to understand your workflow and constraints.",
  },
  {
    icon: ShieldCheck,
    title: "No data shared",
    desc: "We don’t need your sensitive documents to assess fit.",
  },
  {
    icon: MessageSquare,
    title: "Straight answers",
    desc: "We’ll tell you honestly whether this is a fit for you.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            See whether this is{" "}
            <span className="text-gradient">a fit</span>
          </>
        }
        description="Book a 20-minute discovery call to evaluate your workflow, compliance constraints, and automation potential."
      />

      <Section className="pt-16 sm:pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900">
                  What to expect
                </h2>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-ink-600">
                  Tell us a little about what you reconcile today. We’ll follow up
                  within one business day to schedule your call.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {assurances.map((a) => (
                  <div
                    key={a.title}
                    className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-card"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                      <a.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink-900">
                        {a.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600">
                        {a.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-5">
                <p className="text-sm font-medium text-ink-500">
                  Prefer email?
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-flex items-center gap-2 font-display text-lg font-semibold text-brand-700 hover:text-brand-800"
                >
                  <Mail className="h-5 w-5" />
                  {site.email}
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
