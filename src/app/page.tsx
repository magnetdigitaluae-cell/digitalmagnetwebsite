import { AboutPreview } from "@/components/sections/about-preview";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CtaBanner } from "@/components/sections/cta";
import { FeatureBoxes } from "@/components/sections/features";
import { HeroSlider } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";

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
