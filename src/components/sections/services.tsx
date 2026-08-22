import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/heading";
import { ServiceCard } from "@/components/service-card";
import { homeServices } from "@/lib/site";

export function ServicesPreview() {
  return (
    <section
      className="bg-cream bg-no-repeat py-[70px]"
      style={{
        backgroundImage: "url('/images/bg/bg-shape3.png')",
        backgroundPosition: "53% 45px",
      }}
    >
      <div className="container-wide">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Services"
            title="What We Offer"
            align="center"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homeServices.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              description={service.short}
              cta="button"
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="btn btn-primary btn-icon">
            View All Services
            <span className="icon-circle">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
