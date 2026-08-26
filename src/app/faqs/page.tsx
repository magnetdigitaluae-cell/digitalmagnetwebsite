import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/heading";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "FAQs",
  description:
    "Answers to common questions about Magnet Digital LLC services, location in Sharjah, SEO, and how to start a website or marketing project.",
  path: "/faqs",
});

const faqs = [
  {
    q: "What services does Magnet Digital LLC offer?",
    a: "We provide website development, custom ecommerce, mobile app development for iOS and Android, Google Ads, Meta Ads, social media management, SEO/GEO, web hosting, website maintenance, CMS, logo design, print design, and video integration.",
  },
  {
    q: "Where is Magnet Digital LLC located?",
    a: "We are based in Sharjah, UAE, and serve clients across Dubai and the wider UAE.",
  },
  {
    q: "How do I start a project?",
    a: "Use the Enquire Now button, call +971 56 5242459, or send a message from the Contact page. Our team will discuss your requirements and recommend the right solution.",
  },
  {
    q: "Do you offer SEO for local businesses in the UAE?",
    a: "Yes. We create customized SEO and GEO strategies including keyword research, technical SEO, content optimization, local SEO, generative engine optimization, and performance tracking.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHeader title="FAQs" />
      <section className="py-20">
        <div className="container-site max-w-4xl">
          <SectionHeading eyebrow="Help" title="Frequently Asked Questions" />
          <div className="mt-10 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl bg-[#f7f7f7] p-6 open:bg-cream"
              >
                <summary className="cursor-pointer list-none">
                  <h3 className="font-display text-lg font-bold">{item.q}</h3>
                </summary>
                <p className="mt-3 text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
