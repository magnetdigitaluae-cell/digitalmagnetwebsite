import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/heading";
import { ContactForm } from "@/components/contact-form";
import { gccCountries, gccCountryLinks, type GccCountry } from "@/lib/gcc-countries";
import { site } from "@/lib/site";

function LocationSidebar({ current }: { current: string }) {
  return (
    <aside className="space-y-8">
      <div className="overflow-hidden rounded-xl bg-[#f7f7f7] p-8">
        <h2 className="mb-5 text-2xl font-bold">GCC countries</h2>
        <ul>
          {gccCountryLinks.map((link) => (
            <li key={link.slug} className="border-b border-black/5 last:border-0">
              <Link
                href={link.href}
                className={`flex min-h-11 items-center justify-between py-3 text-[15px] hover:text-gold-ink ${
                  current === link.slug ? "font-bold text-gold-ink" : "text-ink"
                }`}
              >
                {link.label}
                <span aria-hidden>›</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl bg-navy p-8 text-white">
        <p className="sub-heading text-gold">CONTACT US</p>
        <h2 className="mt-3 mb-6 text-2xl font-bold text-white">
          Discuss your project
        </h2>
        <div className="[&_.form-field]:bg-white">
          <ContactForm />
        </div>
      </div>
    </aside>
  );
}

export function LocationCountryPage({ country }: { country: GccCountry }) {
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
          {
            "@type": "ListItem",
            position: 3,
            name: country.title,
            item: `${site.url}/best-it-services/${country.slug}/`,
          },
        ],
      },
      {
        "@type": "Service",
        name: country.title,
        serviceType: "IT and digital marketing services",
        description: country.description,
        url: `${site.url}/best-it-services/${country.slug}/`,
        provider: {
          "@type": "ProfessionalService",
          name: site.name,
          url: site.url,
          telephone: site.phones[0],
          email: site.emails[0],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Sharjah",
            addressCountry: "AE",
          },
        },
        areaServed: {
          "@type": "Country",
          name: country.officialName,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: country.faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  const others = gccCountries.filter((item) => item.slug !== country.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={country.title}
        current={country.shortName}
        parent={{ href: "/best-it-services", label: "Best IT Services" }}
      />

      <section className="py-20">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_360px]">
          <article>
            <p className="font-display text-sm font-bold uppercase tracking-wide text-gold-ink">
              {country.officialName} · Capital {country.capital}
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{country.heading}</h2>
            <div className="mt-6 space-y-4 text-muted">
              {country.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-12 text-2xl font-bold">
              How the {country.shortName} market searches and buys
            </h3>
            <ul className="mt-5 space-y-3">
              {country.market.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-2xl font-bold">
              Cities and areas we serve in {country.shortName}
            </h3>
            <p className="mt-3 text-muted">
              Magnet Digital LLC supports businesses across {country.officialName},
              including:
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {country.cities.map((city) => (
                <li
                  key={city}
                  className="flex min-h-11 items-center gap-2 rounded-lg bg-[#f7f7f7] px-4 py-2 text-[15px]"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-gold" />
                  {city}
                </li>
              ))}
            </ul>
          </article>
          <LocationSidebar current={country.slug} />
        </div>
      </section>

      <section className="bg-[#f0f6ff] py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="industries"
            title={`Sectors we support in ${country.shortName}`}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {country.industries.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="our services"
            title={`Best IT services we deliver in ${country.shortName}`}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {country.servicesFocus.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="group rounded-xl border border-black/5 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-xl font-bold group-hover:text-gold-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted">{item.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-display text-sm font-bold text-gold-ink">
                  View service
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="why Magnet Digital"
            title={`Why companies in ${country.shortName} work with us`}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {country.why.map((item, index) => (
              <div key={item.title} className="flex gap-5">
                <div className="font-display text-3xl font-bold text-gold-ink">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site max-w-4xl">
          <SectionHeading
            eyebrow="FAQs"
            title={`IT services in ${country.shortName} — common questions`}
          />
          <div className="mt-10 space-y-4">
            {country.faqs.map((item) => (
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

      <section className="border-t border-black/5 py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="GCC coverage"
            title="Best IT services in other GCC countries"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/best-it-services/${item.slug}`}
                  className="flex min-h-11 items-center justify-between rounded-lg bg-[#f7f7f7] px-4 py-3 text-[15px] font-display font-bold hover:bg-gold-soft hover:text-gold-ink"
                >
                  Best IT services in {item.shortName}
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link href="/contact-us" className="btn btn-primary">
              Enquire about {country.shortName} services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
