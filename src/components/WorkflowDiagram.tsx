import {
  FileStack,
  ScanText,
  ShieldCheck,
  GitCompareArrows,
  AlertTriangle,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: { label: string; icon: LucideIcon; note: string }[] = [
  { label: "Documents", icon: FileStack, note: "Invoices, statements, payments" },
  { label: "Extraction", icon: ScanText, note: "Structured fields & line items" },
  { label: "Validation", icon: ShieldCheck, note: "Rules & integrity checks" },
  { label: "Matching", icon: GitCompareArrows, note: "Records reconciled" },
  { label: "Exceptions", icon: AlertTriangle, note: "Routed for human review" },
  { label: "Audit Trail", icon: ClipboardList, note: "Every decision traceable" },
];

export function WorkflowDiagram() {
  return (
    <div className="relative">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {steps.map((step, i) => (
          <div key={step.label} className="relative">
            <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-sm font-semibold text-ink-300">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-ink-900">
                {step.label}
              </h3>
              <p className="mt-1 text-sm leading-snug text-ink-500">
                {step.note}
              </p>
            </div>

            {/* Connector arrow (desktop only, not after last) */}
            {i < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:flex">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-500 ring-1 ring-ink-100">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
