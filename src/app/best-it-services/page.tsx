import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/heading";
import { createMetadata } from "@/lib/seo";
import { gccCountries } from "@/lib/gcc-countries";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Best IT Services in the GCC",
  description:
    "Best IT services across the GCC from Magnet Digital LLC. Country pages for the UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, and Oman — websites, SEO, ads, and apps.",
  path: "/best-it-services",
  keywords: [
    "best IT services GCC",
    "IT company Gulf",
    "digital marketing GCC",
    "website development UAE Saudi Arabia",
    "SEO agency GCC",
  ],
});

const gccFaqs = [
  {
    q: "Which GCC countries does Magnet Digital LLC serve?",
    a: "We serve businesses in all six GCC countries: the United Arab Emirates, Saudi Arabia, Kuwait, Qatar, Bahrain, and Oman. Our office is in Sharjah, UAE.",
  },
  {
    q: "Do you have an office in every GCC country?",
    a: "Our studio is in Sharjah. Projects across the GCC run remotely with video, WhatsApp, and structured delivery. Larger work can also involve our India partner, Hussaini IT Services.",
  },
  {
    q: "What IT services do you provide in the GCC?",
    a: "Website development, custom ecommerce, iOS and Android apps, SEO and GEO, Google Ads, Meta Ads, social media management, hosting, maintenance, CMS, and brand design.",
  },
  {
    q: "How do I choose a country page?",
    a: "Open the page for the country where your customers search and buy. Each page covers local cities, industries, and how we deliver in that market.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${site.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Best IT Services",
          item: `${site.url}/best-it-services/`,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      name: "Best IT Services in the GCC",
      url: `${site.url}/best-it-services/`,
      description:
        "Country pages for IT and digital marketing services across GCC markets.",
      isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    },
    {
      "@type": "FAQPage",
      mainEntity: gccFaqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function BestItServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader title="Best IT Services" />

      <section className="py-20">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading
              eyebrow="GCC coverage"
              title="Best IT services for every GCC country"
            />
            <div className="mt-6 space-y-4 text-muted">
              <p>
                Magnet Digital LLC is a Sharjah-based digital agency providing IT
                and marketing services across the Gulf Cooperation Council. If you
                need a website, ecommerce store, mobile app, SEO, Google Ads, or
                Meta Ads in the UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, or Oman,
                these country pages explain how we work in each market.
              </p>
              <p>
                Search demand, language mix, and competition differ by country. A
                Doha hospitality brand does not need the same keywords as a Riyadh
                B2B supplier or a Muscat tour operator. That is why we publish one
                dedicated, SEO-focused page per GCC country instead of a single
                generic “we serve the Middle East” blurb.
              </p>
              <p>
                Choose your country below, then enquire from{" "}
                <Link href="/contact-us" className="font-bold text-gold-ink underline">
                  Contact Us
                </Link>{" "}
                or email {site.emails[0]}. Delivery is led from Sharjah, with{" "}
                {site.partner.name} available as our India technology partner when
                a build needs extra engineering capacity.
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-navy p-8 text-white">
            <Globe className="h-10 w-10 text-gold" />
            <h2 className="mt-4 text-2xl font-bold text-white">
              Six countries, one GCC partner
            </h2>
            <ul className="mt-6 space-y-3 text-white/90">
              {[
                "UAE studio based in Sharjah",
                "Arabic and English digital journeys",
                "Web, SEO, ads, and apps under one plan",
                "Country-specific targeting — not wasted GCC-wide spend",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f6ff] py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="country pages"
            title="Best IT services by GCC country"
            align="center"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Open a country page for local cities, industries, services, and FAQs.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gccCountries.map((country, index) => (
              <Link
                key={country.slug}
                href={`/best-it-services/${country.slug}`}
                className="group flex h-full flex-col rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="font-display text-sm font-bold text-gold-ink">
                  {String(index + 1).padStart(2, "0")} · {country.officialName}
                </span>
                <h3 className="mt-3 text-2xl font-bold group-hover:text-gold-ink">
                  Best IT services in {country.shortName}
                </h3>
                <p className="mt-3 flex-1 text-muted">{country.cardText}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold text-gold-ink">
                  View {country.shortName} page
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site max-w-4xl">
          <SectionHeading
            eyebrow="FAQs"
            title="Best IT services in the GCC — questions we hear first"
          />
          <div className="mt-10 space-y-4">
            {gccFaqs.map((item) => (
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
          <Link href="/contact-us" className="btn btn-primary mt-10">
            Talk to Magnet Digital LLC
          </Link>
        </div>
      </section>
    </>
  );
}
