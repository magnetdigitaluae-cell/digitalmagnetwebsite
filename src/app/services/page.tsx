import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/heading";
import { ServiceCard } from "@/components/service-card";
import { createMetadata } from "@/lib/seo";
import { services } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Digital Marketing Services",
  description:
    "Website development, custom ecommerce, iOS and Android apps, Google Ads, Meta Ads, social media management, SEO/GEO, hosting, and design services from Magnet Digital LLC.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" />
      <section className="pb-28 pt-20">
        <div className="container-site">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <SectionHeading
              eyebrow="our services"
              title={
                <>
                  Introduce Best
                  <br />
                  SEO Services for Business
                </>
              }
              align="center"
            />
          </div>
          <div className="grid gap-x-6 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                description={service.excerpt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
