import {
  Server,
  GitCompareArrows,
  UserCheck,
  Scale,
  Receipt,
  Landmark,
  BadgeCheck,
  FileSearch,
  Network,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { FAQItem } from "@/components/FAQ";

export const trustPillars: {
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Data stays under your control",
    body: "Deploy inside your own infrastructure. No external AI APIs. No sensitive document ever leaves your environment.",
    icon: Server,
  },
  {
    title: "Every decision is traceable",
    body: "Every extracted field, validation step, and reconciliation decision traces back to the source document.",
    icon: GitCompareArrows,
  },
  {
    title: "Exceptions are escalated",
    body: "The system does not guess. Low-confidence scenarios are automatically routed for human review.",
    icon: UserCheck,
  },
  {
    title: "Built around governance",
    body: "Designed with DPDP considerations, internal security policies, and audit requirements in mind from day one.",
    icon: Scale,
  },
];

export const useCases: {
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Invoice vs Payment Reconciliation",
    body: "Match invoices against payment records and surface discrepancies automatically.",
    icon: Receipt,
  },
  {
    title: "Bank Statement Reconciliation",
    body: "Validate transactions against internal systems and financial records.",
    icon: Landmark,
  },
  {
    title: "Vendor Payment Verification",
    body: "Confirm vendor payments against supporting documentation before release.",
    icon: BadgeCheck,
  },
  {
    title: "Claims & Settlement Reconciliation",
    body: "Compare submitted records against approved transactions and settlements.",
    icon: FileSearch,
  },
  {
    title: "Multi-System Record Matching",
    body: "Reconcile data across ERP, accounting, and operational systems in one pass.",
    icon: Network,
  },
];

export const homeFaqs: FAQItem[] = [
  {
    question: "Why not use ChatGPT or a public AI service?",
    answer:
      "Many organizations cannot send sensitive financial or operational data to external AI providers due to compliance, contractual, or governance requirements. Novapod runs entirely inside your environment, so that data never leaves your control.",
  },
  {
    question: "Does this require GPU infrastructure?",
    answer:
      "Not always. Infrastructure recommendations depend on document volume, complexity, and latency requirements. We size the deployment during the discovery sprint and recommend the most cost-effective option that meets your constraints.",
  },
  {
    question: "Can this integrate with our ERP?",
    answer:
      "Yes. Integrations can be designed around your existing ERP, accounting, and workflow systems so reconciliation fits the processes your teams already use.",
  },
  {
    question: "Is this a software product?",
    answer:
      "No. This is a custom-built solution tailored to your workflow and compliance requirements — not an off-the-shelf SaaS tool that forces your process into someone else's mold.",
  },
];
