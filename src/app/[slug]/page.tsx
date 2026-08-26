import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { ServiceSidebar } from "@/components/service-sidebar";
import { createMetadata } from "@/lib/seo";
import { getService, services } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamic = "force-static";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Not found" };
  return createMetadata({
    title: service.navTitle ?? service.title,
    description: service.excerpt,
    path: `/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader title={service.navTitle ?? service.title} />
      <section className="py-20">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_360px]">
          <article>
            <h2 className="text-3xl font-bold md:text-4xl">{service.heading}</h2>
            <div className="mt-6 space-y-4 text-muted">
              {service.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 grid gap-6">
              {service.features.map((feature, index) => (
                <div key={feature.title} className="flex gap-5">
                  <div className="font-display text-3xl font-bold text-gold-ink">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="mt-2 text-muted">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
          <ServiceSidebar current={service.slug} />
        </div>
      </section>
    </>
  );
}
