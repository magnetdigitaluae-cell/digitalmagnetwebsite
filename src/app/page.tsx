import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/about-preview";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CtaBanner } from "@/components/sections/cta";
import { FeatureBoxes } from "@/components/sections/features";
import { HeroSlider } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FeatureBoxes />
      <AboutPreview />
      <ServicesPreview />
      <WhyUs />
      <CtaBanner />
      <BlogPreview />
    </>
  );
}
