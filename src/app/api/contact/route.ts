import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer needs the Node.js runtime (not Edge).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Gmail credentials. The app password is whitespace-tolerant — Google shows
// it as "abcd efgh ijkl mnop"; we strip spaces so a pasted value still works.
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");

const TO = process.env.CONTACT_TO || "vikram@novapod.ai";
// Gmail only lets you send as the authenticated account (or a verified alias),
// so the From defaults to the Gmail user with a friendly display name.
const FROM =
  process.env.CONTACT_FROM ||
  (GMAIL_USER ? `Novapod Website <${GMAIL_USER}>` : "");

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  useCase?: string;
  message?: string;
  // Honeypot — bots fill this; humans never see it.
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildTransport() {
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) return null;

  // `service: "gmail"` configures host/port/TLS for smtp.gmail.com automatically.
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: pretend success so bots get no signal.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 200);
  const email = clean(body.email, 200);
  const company = clean(body.company, 200);
  const role = clean(body.role, 200);
  const useCase = clean(body.useCase, 200);
  const message = clean(body.message, 5000);

  // Validation
  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please check the form fields.", errors },
      { status: 422 },
    );
  }

  const transporter = buildTransport();
  if (!transporter) {
    console.error(
      "[contact] Gmail is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD (and optionally CONTACT_TO, CONTACT_FROM) in your environment.",
    );
    return NextResponse.json(
      {
        ok: false,
        error: "Email service is not configured. Please try again later.",
      },
      { status: 500 },
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Role", role || "—"],
    ["Reconciles today", useCase || "—"],
  ];

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\nMessage:\n${message || "—"}`;

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#0e1730">
      <h2 style="font-size:18px;margin:0 0 16px">New discovery call request</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([k, v]) => `<tr>
              <td style="padding:8px 12px;background:#f6f8fb;border:1px solid #eef2f7;font-weight:600;width:160px">${escapeHtml(
                k,
              )}</td>
              <td style="padding:8px 12px;border:1px solid #eef2f7">${escapeHtml(
                v,
              )}</td>
            </tr>`,
          )
          .join("")}
      </table>
      <h3 style="font-size:14px;margin:20px 0 8px">Message</h3>
      <p style="font-size:14px;line-height:1.6;white-space:pre-wrap;background:#f6f8fb;border:1px solid #eef2f7;padding:12px;border-radius:8px;margin:0">${
        escapeHtml(message) || "—"
      }</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: FROM,
      to: TO,
      replyTo: `${name} <${email}>`,
      subject: `Discovery call request — ${name}${company ? ` (${company})` : ""}`,
      text,
      html,
    });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
