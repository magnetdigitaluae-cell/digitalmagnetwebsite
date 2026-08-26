import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms and Conditions",
  description:
    "Terms of use for thedigitalmagnet.com and Magnet Digital LLC website, services, and project engagements.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms and Conditions" />
      <section className="py-20">
        <div className="container-site max-w-4xl space-y-5 text-muted">
          <p>
            By using thedigitalmagnet.com you agree to the terms of Magnet Digital
            LLC. All website content, branding, and design remain the property of
            Magnet Digital LLC unless otherwise stated.
          </p>
          <p>
            Service descriptions are for information. Project scope, timelines,
            and fees are confirmed in a separate proposal or agreement before
            work begins.
          </p>
          <p>
            We work to keep the website accurate and available, but we cannot
            guarantee uninterrupted access. Magnet Digital LLC is not liable for
            damages arising from use of this website.
          </p>
          <p>
            These terms are governed by the laws of the United Arab Emirates.
          </p>
        </div>
      </section>
    </>
  );
}
