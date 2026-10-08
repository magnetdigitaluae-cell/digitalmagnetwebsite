import type { Metadata } from "next";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/heading";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Facebook, Twitter } from "@/components/social-icons";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact Magnet Digital LLC in Sharjah, or our partner company Hussaini IT Services in India. Email info@thedigitalmagnet.com or visit hussainiitservices.com.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact us" />
      <section className="py-20">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="contact details" title="Our Contact" />
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-bold">Our Address:</h3>
                <p className="inline-flex items-start gap-2 text-muted">
                  <MapPin className="mt-1 h-4 w-4 text-gold" />
                  {site.location}
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">Our mailbox:</h3>
                {site.emails.map((email) => (
                  <p key={email} className="mb-1">
                    <a
                      href={`mailto:${email}`}
                      className="inline-flex items-center gap-2 text-muted hover:text-gold-ink"
                    >
                      <Mail className="h-4 w-4 text-gold" />
                      {email}
                    </a>
                  </p>
                ))}
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">Our phones:</h3>
                {site.phones.map((phone) => (
                  <p key={phone} className="mb-1">
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 text-muted hover:text-gold-ink"
                    >
                      <Phone className="h-4 w-4 text-gold" />
                      {phone}
                    </a>
                  </p>
                ))}
              </div>
              <div>
                <h3 className="mb-3 text-lg font-bold">Connect with Us</h3>
                <div className="flex gap-2">
                  <Facebook />
                  <Twitter />
                  <a
                    href="https://youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Youtube"
                    className="grid h-11 w-11 place-items-center rounded-full bg-orange text-white"
                  >
                    <FaYoutube className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="grid h-11 w-11 place-items-center rounded-full bg-gold text-navy"
                  >
                    <FaInstagram className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
              <div className="sm:col-span-2">
                <h3 className="mb-2 text-lg font-bold">Our Partner in India:</h3>
                <p className="font-display text-[17px] font-bold text-ink">
                  {site.partner.name}
                </p>
                <p className="mt-1 inline-flex items-start gap-2 text-muted">
                  <MapPin className="mt-1 h-4 w-4 text-gold" />
                  {site.partner.location}
                </p>
                <p className="mt-1">
                  <a
                    href={site.partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted hover:text-gold-ink"
                  >
                    <Globe className="h-4 w-4 text-gold" />
                    {site.partner.website}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-[#f7f7f7] p-8 md:p-10">
            <p className="sub-heading">GET IN TOUCH</p>
            <h2 className="mt-3 mb-6 text-3xl font-bold">Ready to Get Started?</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
