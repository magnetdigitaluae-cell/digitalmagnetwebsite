import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationCountryPage } from "@/components/location-page";
import { createMetadata } from "@/lib/seo";
import { gccCountries, getGccCountry } from "@/lib/gcc-countries";

type Props = {
  params: Promise<{ country: string }>;
};

export function generateStaticParams() {
  return gccCountries.map((country) => ({ country: country.slug }));
}

export const dynamic = "force-static";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getGccCountry(slug);
  if (!country) return { title: "Not found" };
  return createMetadata({
    title: country.title,
    description: country.description,
    path: `/best-it-services/${country.slug}`,
    keywords: country.keywords,
  });
}

export default async function GccCountryPage({ params }: Props) {
  const { country: slug } = await params;
  const country = getGccCountry(slug);
  if (!country) notFound();
  return <LocationCountryPage country={country} />;
}
