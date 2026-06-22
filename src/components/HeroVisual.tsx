import { Check, AlertTriangle, Lock, FileText } from "lucide-react";

const rows = [
  { id: "INV-20481", amount: "₹ 4,82,000", status: "matched" },
  { id: "INV-20482", amount: "₹ 1,19,500", status: "matched" },
  { id: "INV-20483", amount: "₹ 2,07,750", status: "exception" },
  { id: "INV-20484", amount: "₹ 96,200", status: "matched" },
];

export function HeroVisual() {
  return (
    <div className="relative">
      {/* Soft glow behind */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-brand-200/40 via-brand-100/30 to-accent-400/20 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-lift">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-ink-100 bg-ink-50/70 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-ink-200" />
            <span className="h-3 w-3 rounded-full bg-ink-200" />
            <span className="h-3 w-3 rounded-full bg-ink-200" />
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[0.7rem] font-medium text-ink-500 ring-1 ring-inset ring-ink-200">
            <Lock className="h-3 w-3 text-brand-600" />
            reconcile.internal.vpc
          </div>
          <div className="w-12" />
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-400">
                Reconciliation Run · June 2026
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-ink-900">
                Invoice ↔ Payment Matching
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Running on-prem
            </span>
          </div>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { k: "Documents", v: "2,418" },
              { k: "Auto-matched", v: "97.6%" },
              { k: "Exceptions", v: "58" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-xl border border-ink-100 bg-ink-50/50 p-3"
              >
                <p className="font-display text-xl font-bold text-ink-900">
                  {s.v}
                </p>
                <p className="text-[0.7rem] font-medium uppercase tracking-wide text-ink-400">
                  {s.k}
                </p>
              </div>
            ))}
          </div>

          {/* Rows */}
          <div className="mt-5 space-y-2">
            {rows.map((row) => (
              <div
                key={row.id}
                className="flex items-center justify-between rounded-xl border border-ink-100 bg-white px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <FileText className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-800">
                      {row.id}
                    </p>
                    <p className="text-xs text-ink-400">{row.amount}</p>
                  </div>
                </div>
                {row.status === "matched" ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    <Check className="h-3.5 w-3.5" /> Matched
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                    <AlertTriangle className="h-3.5 w-3.5" /> Review
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between rounded-xl bg-ink-900 px-4 py-3">
            <p className="text-xs font-medium text-ink-300">
              Every field traced to source · audit log signed
            </p>
            <span className="text-xs font-semibold text-brand-200">
              View trail →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
