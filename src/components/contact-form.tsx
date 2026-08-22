"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-xl bg-cream px-5 py-6 text-center text-ink">
        Thank you. Your message has been sent. We will contact you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input name="name" required placeholder="Your Name *" className="form-field" />
      <input
        name="email"
        type="email"
        required
        placeholder="Your Email *"
        className="form-field"
      />
      <input name="phone" placeholder="Phone Number" className="form-field" />
      <input name="subject" placeholder="Subject" className="form-field" />
      <textarea
        name="message"
        required
        placeholder="Your Message *"
        rows={5}
        className="form-field resize-y"
      />
      <button type="submit" className="btn btn-primary w-fit">
        Send Message
      </button>
    </form>
  );
}
