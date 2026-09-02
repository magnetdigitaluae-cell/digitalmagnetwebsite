import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxLengths = {
  name: 120,
  email: 160,
  phone: 40,
  subject: 160,
  message: 5000,
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function readEnv(name: string) {
  return process.env[name]?.replace(/^["']|["']$/g, "").trim() || "";
}

const CONTACT_FROM = "Magnet Digital <info@thedigitalmagnet.com>";
const CONTACT_TO = site.emails[0];

function resolveFrom() {
  const raw = readEnv("RESEND_FROM") || CONTACT_FROM;
  const domain = raw.match(/@([^>\s]+)/)?.[1]?.toLowerCase() ?? "";
  if (!domain || domain === "example.com" || domain.endsWith(".example.com")) {
    return CONTACT_FROM;
  }
  return raw;
}

export async function POST(request: Request) {
  const apiKey = readEnv("RESEND_API_KEY");
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured yet." },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (readString(body.honey)) {
    return NextResponse.json({ ok: true });
  }

  const name = readString(body.name);
  const email = readString(body.email);
  const phone = readString(body.phone);
  const subject = readString(body.subject) || "Website enquiry";
  const message = readString(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  if (
    name.length > maxLengths.name ||
    email.length > maxLengths.email ||
    phone.length > maxLengths.phone ||
    subject.length > maxLengths.subject ||
    message.length > maxLengths.message
  ) {
    return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  const to = readEnv("RESEND_TO") || CONTACT_TO;
  const from = resolveFrom();

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New enquiry from ${site.name}: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #1a1b1e; line-height: 1.6;">
        <h2 style="color: #061729;">New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Subject: ${subject}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: error.message || "Unable to send message." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
