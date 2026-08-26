import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Portfolio",
  description:
    "See websites and digital projects delivered by Magnet Digital LLC, including Niagra UAE, Dyota Engineered Solutions, and SS Trailers.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHeader title="Portfolios" current="Portfolio" />
      <PortfolioGrid />
    </>
  );
}
