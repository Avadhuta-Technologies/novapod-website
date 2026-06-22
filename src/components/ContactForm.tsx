"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // No backend wired yet — simulate submission. Replace with your endpoint.
    setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-ink-100 bg-white p-10 text-center shadow-card">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
          Thanks — we’ll be in touch
        </h3>
        <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-ink-600">
          We’ll review your details and reach out within one business day to
          schedule your 20-minute discovery call.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 shadow-sm outline-none transition-colors placeholder:text-ink-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100";
  const label = "mb-1.5 block text-sm font-medium text-ink-700";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-white p-7 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Full name
          </label>
          <input id="name" name="name" required className={field} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
            placeholder="jane@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className={label}>
            Company
          </label>
          <input id="company" name="company" className={field} placeholder="Acme Financial" />
        </div>
        <div>
          <label htmlFor="role" className={label}>
            Role
          </label>
          <input id="role" name="role" className={field} placeholder="Head of Finance Ops" />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="useCase" className={label}>
          What do you reconcile today?
        </label>
        <select id="useCase" name="useCase" className={field} defaultValue="">
          <option value="" disabled>
            Select a workflow…
          </option>
          <option>Invoice vs Payment</option>
          <option>Bank Statement</option>
          <option>Vendor Payment Verification</option>
          <option>Claims &amp; Settlement</option>
          <option>Multi-System Record Matching</option>
          <option>Something else</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={label}>
          Anything we should know? (volumes, systems, constraints)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={field}
          placeholder="We process ~5,000 invoices/month across two ERPs and can't use external AI services…"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-[0.95rem] font-medium text-white shadow-[0_8px_24px_-10px_rgba(29,57,207,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Request Discovery Call
          </>
        )}
      </button>
      <p className="mt-4 text-xs leading-relaxed text-ink-400">
        We only use your details to respond to your enquiry. Nothing is shared
        with third parties.
      </p>
    </form>
  );
}
