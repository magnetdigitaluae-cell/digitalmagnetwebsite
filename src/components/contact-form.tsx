"use client";

import { FormEvent, useId, useState } from "react";
import { site } from "@/lib/site";

const CONTACT_EMAIL = site.emails[0];

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const formId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSending(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          message: data.get("message"),
          honey: data.get("honey"),
        }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        setError(
          result.error ||
            `Something went wrong. Please email us directly at ${CONTACT_EMAIL}.`,
        );
        return;
      }

      setSent(true);
    } catch {
      setError(
        `Something went wrong. Please email us directly at ${CONTACT_EMAIL}.`,
      );
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <p className="rounded-xl bg-cream px-5 py-6 text-center text-ink" role="status">
        Thank you. Your message has been sent. We will contact you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div aria-hidden="true" className="hidden">
        <label htmlFor={`${formId}-honey`}>Company</label>
        <input
          id={`${formId}-honey`}
          type="text"
          name="honey"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <Field id={`${formId}-name`} label="Your name">
        <input
          id={`${formId}-name`}
          name="name"
          required
          autoComplete="name"
          placeholder="Your Name *"
          className="form-field"
        />
      </Field>
      <Field id={`${formId}-email`} label="Your email">
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your Email *"
          className="form-field"
        />
      </Field>
      <Field id={`${formId}-phone`} label="Phone number">
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Phone Number"
          className="form-field"
        />
      </Field>
      <Field id={`${formId}-subject`} label="Subject">
        <input
          id={`${formId}-subject`}
          name="subject"
          placeholder="Subject"
          className="form-field"
        />
      </Field>
      <Field id={`${formId}-message`} label="Your message">
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          placeholder="Your Message *"
          rows={5}
          className="form-field resize-y"
        />
      </Field>
      {error ? (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit" className="btn btn-primary w-fit" disabled={sending}>
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
