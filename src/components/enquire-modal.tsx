"use client";

import { X } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export function EnquireModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-black/55 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquire-title"
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream text-ink"
          aria-label="Close enquiry form"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="sub-heading">CONTACT US</p>
        <h2 id="enquire-title" className="mt-3 mb-6 text-3xl font-bold">
          Ready to Get Started?
        </h2>
        <ContactForm />
      </div>
    </div>
  );
}
