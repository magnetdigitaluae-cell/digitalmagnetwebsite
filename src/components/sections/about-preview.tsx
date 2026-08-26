import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/heading";

export function AboutPreview() {
  return (
    <section
      className="bg-right-bottom bg-no-repeat py-8 md:py-16"
      style={{ backgroundImage: "url('/images/bg/bg-shape1.png')" }}
    >
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto max-w-[520px]">
          <Image
            src="/images/home-banner.png"
            alt="Web design, SEO, and digital marketing services from Magnet Digital LLC"
            width={770}
            height={770}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        </div>
        <div className="lg:pl-10">
          <SectionHeading
            eyebrow="About Us"
            title="Discover the power of Web Design & Digital Marketing"
          />
          <div className="mt-6 space-y-4 text-[16px] leading-8 text-muted">
            <p>
              <strong className="text-ink">Magnet Digital LLC</strong> is a
              values-driven digital marketing and SEO agency committed to helping
              businesses grow, connect with their audiences, and build a powerful
              online presence. We combine strategic thinking, creative solutions,
              and data-driven insights to deliver digital strategies that create
              meaningful and measurable results.
            </p>
            <p>
              Our team understands that every business has unique goals and
              challenges. That’s why we create customized strategies tailored to
              each client’s industry, target audience, competition, and growth
              objectives. From{" "}
              <strong className="text-ink">
                SEO and content optimization to website development, digital
                marketing, Google Ads, and online brand visibility
              </strong>
              , we focus on solutions that deliver long-term value.
            </p>
          </div>
          <Link
            href="/about-us"
            className="btn btn-primary btn-icon mt-8"
            aria-label="Read more about Magnet Digital LLC"
          >
            About Magnet Digital
            <span className="icon-circle" aria-hidden>
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
