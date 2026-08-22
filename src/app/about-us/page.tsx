import type { Metadata } from "next";
import Image from "next/image";
import { CountUp } from "@/components/count-up";
import { PageHeader } from "@/components/page-header";
import { ProgressBar } from "@/components/progress-bar";
import { SectionHeading } from "@/components/heading";
import { TeamSlider } from "@/components/team-slider";

export const metadata: Metadata = {
  title: "About Us",
};

const stats = [
  { to: 150, label: "ACTIVE CLIENTS" },
  { to: 140, label: "PROJECTS DONE" },
  { to: 15, label: "TEAM ADVISORS" },
  { to: 5, label: "GLORIOUS YEARS" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />

      <section className="py-[100px] max-lg:py-[60px]">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Image
              src="/images/about/about-1.png"
              alt="Magnet Digital LLC team"
              width={596}
              height={647}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="lg:pl-[95px] max-lg:text-center">
            <SectionHeading
              eyebrow="who we are"
              title={
                <>
                  We&apos;re on a Mission to
                  <br />
                  Change Your View of SEO
                </>
              }
            />
            <div className="mt-5 space-y-4 text-muted max-lg:mx-auto max-lg:max-w-2xl">
              <p className="font-display text-[22px] font-medium leading-9 text-ink">
                Magnet Digital llc is a values-driven SEO agency dedicated to
                empowering our customers.
              </p>
              <p>
                At <strong className="text-ink">Magnet Digital LLC</strong>, we
                are a values-driven SEO agency dedicated to empowering businesses
                with the digital visibility, strategy, and growth they need to
                succeed. We believe that effective SEO is more than achieving
                higher rankings—it is about creating meaningful connections
                between businesses and the people searching for their products or
                services.
              </p>
              <p>
                At Magnet Digital LLC,{" "}
                <strong className="text-ink">
                  integrity, transparency, collaboration, and continuous
                  improvement
                </strong>{" "}
                are at the heart of everything we do. We believe our customers
                deserve clear communication and strategies they can understand
                and trust. Rather than relying on shortcuts or temporary tactics,
                we focus on ethical, sustainable SEO practices that help
                businesses build lasting authority and credibility online.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f6ff] py-[80px] lg:pb-[140px] lg:pt-[90px]">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-[45%_55%]">
            <div>
              <SectionHeading
                eyebrow="Why Choose Us"
                title={
                  <>
                    Work with a Dedicated
                    <br />
                    SEO Company
                  </>
                }
              />
              <p className="mt-6 mb-9 text-muted">
                Work with a dedicated SEO company that understands your goals and
                is committed to your growth. Magnet Digital LLC delivers
                customized, data-driven SEO strategies designed to improve
                visibility, attract qualified traffic, and build long-term online
                success.
              </p>
              <ProgressBar label="Keyword Research" value={90} />
              <ProgressBar label="Technical SEO Audit" value={80} />
              <ProgressBar label="Content Optimization" value={78} />
            </div>
            <div className="max-lg:order-first">
              <Image
                src="/images/about/about-2.png"
                alt="SEO and digital marketing"
                width={660}
                height={617}
                className="mx-auto h-auto w-full max-w-[520px]"
              />
            </div>
          </div>

          <div className="relative z-10 mt-12 lg:mt-16">
            <div
              className="relative overflow-hidden rounded-[15px] px-4 py-[50px] shadow-[23px_23px_87px_0_rgba(254,76,28,0.42)] max-md:py-10"
              style={{
                backgroundImage: "url('/images/about/bg2-box.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#fe4c1c]/50" />
              <div className="relative grid grid-cols-2 gap-y-10 md:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <h6 className="relative mb-[13px] inline-block pl-5 font-display text-sm font-bold tracking-[1px] text-[#ffd68e]">
                      <span className="absolute left-0 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-[#ffd68e]" />
                      {stat.label}
                    </h6>
                    <div className="font-display text-5xl font-black leading-none text-[#071322]">
                      <CountUp to={stat.to} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[155px] pt-[20px] max-md:pb-16">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <SectionHeading
              eyebrow="professional team"
              title="Meet Our Leadership Team"
              align="center"
            />
            <p className="mt-4 text-muted">
              Our leadership team brings together expertise, experience, and a
              shared passion for digital growth. With a commitment to innovation,
              collaboration, and customer success, our leaders guide Magnet Digital
              LLC with a clear vision and purpose.
            </p>
          </div>
          <TeamSlider />
        </div>
      </section>
    </>
  );
}
