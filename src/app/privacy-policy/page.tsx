import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Magnet Digital LLC collects, uses, and protects personal information submitted through thedigitalmagnet.com.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <section className="py-20">
        <div className="container-site max-w-4xl space-y-5 text-muted">
          <p>
            Magnet Digital LLC respects your privacy. This policy explains how we
            collect, use, and protect information submitted through
            thedigitalmagnet.com.
          </p>
          <p>
            Contact details you share through enquiry forms, email, or phone are
            used only to respond to your request and deliver our services. We do
            not sell personal information.
          </p>
          <p>
            Our website may use cookies and analytics to understand traffic and
            improve user experience. You can control cookies through your browser
            settings.
          </p>
          <p>
            For privacy questions, email info@thedigitalmagnet.com or write to us
            in Sharjah (UAE).
          </p>
        </div>
      </section>
    </>
  );
}
