import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, MailOpen, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { site } from "@/lib/site";

const quickLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/faqs", label: "FAQs" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/contact-us", label: "Contact Us" },
];

const footerServices = [
  { href: "/website-development", label: "Website Development" },
  { href: "/ecommerce", label: "Custom Ecommerce" },
  { href: "/mobile-app-development", label: "Mobile App Development" },
  { href: "/google-ads", label: "Google Ads" },
  { href: "/meta-ads", label: "Meta Ads" },
  { href: "/social-media", label: "Social Media Management" },
  { href: "/search-engine-optimization", label: "SEO/GEO" },
];

function GoldDivider() {
  return (
    <div
      className="mb-5 mt-1 h-5 w-[24%] bg-repeat-x"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%25' viewBox='0 0 24 24' fill='none' stroke='%23E3C57F' stroke-width='2.4' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpolyline points='0,6 6,6 6,18 18,18 18,6 24,6'/%3E%3C/svg%3E")`,
        backgroundSize: "20px 20px",
      }}
      aria-hidden
    />
  );
}

function ArrowLink({ href, label, gold }: { href: string; label: string; gold?: boolean }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2 py-[5px] font-display text-[15px] text-white transition-colors hover:text-gold"
      >
        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={2.5} />
        <span className={gold ? "text-gold" : undefined}>{label}</span>
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer
      className="relative bg-black bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/bg/bg-footer.png')" }}
    >
      <div className="container-site grid gap-x-8 gap-y-10 px-0 pb-5 pt-[70px] md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-[25px] inline-block w-1/2 max-w-[160px]">
            <Image
              src="/images/logo.png"
              alt="Magnet Digital LLC"
              width={491}
              height={508}
              className="h-auto w-full"
            />
          </Link>
          <p className="text-[15px] leading-7 text-white">
            <strong>Magnet Digital LLC</strong> is a values-driven SEO agency
            focused on helping businesses build a stronger online presence and
            achieve sustainable digital growth.
          </p>
          <div className="mt-6 flex gap-[5px]">
            {[
              { href: "https://facebook.com/", icon: FaFacebookF, label: "Facebook" },
              { href: "https://twitter.com/", icon: FaTwitter, label: "Twitter" },
              { href: "https://youtube.com/", icon: FaYoutube, label: "Youtube" },
              { href: "https://instagram.com/", icon: FaInstagram, label: "Instagram" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="social-icon grid h-10 w-10 place-items-center bg-gold text-white transition-colors hover:bg-ink hover:text-gold"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl font-bold text-white">Quick Link</h4>
          <GoldDivider />
          <ul>
            {quickLinks.map((link) => (
              <ArrowLink key={link.href} {...link} />
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl font-bold text-white">Our Services</h4>
          <GoldDivider />
          <ul>
            {footerServices.map((link) => (
              <ArrowLink key={link.href} {...link} />
            ))}
            <ArrowLink href="/services" label="View All Services" gold />
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl font-bold text-white">Contact Info</h4>
          <GoldDivider />
          <ul className="space-y-[5px] font-display text-[15px] text-white">
            <li>
              <span className="flex items-start gap-2 py-[5px]">
                <MapPin className="mt-0.5 h-[22px] w-[22px] shrink-0 text-gold" />
                {site.location}
              </span>
            </li>
            <li>
              <a
                href={`mailto:${site.emails[0]}`}
                className="flex items-start gap-2 py-[5px] transition-colors hover:text-gold"
              >
                <MailOpen className="mt-0.5 h-[22px] w-[22px] shrink-0 text-gold" />
                {site.emails[0]}
              </a>
            </li>
            <li>
              <a
                href="tel:+971501590490"
                className="flex items-start gap-2 py-[5px] transition-colors hover:text-gold"
              >
                <Phone className="mt-0.5 h-[22px] w-[22px] shrink-0 text-gold" />
                +971 50 1590490
              </a>
            </li>
            <li>
              <a
                href="tel:+971565242459"
                className="flex items-start gap-2 py-[5px] transition-colors hover:text-gold"
              >
                <Phone className="mt-0.5 h-[22px] w-[22px] shrink-0 text-gold" />
                +971 56 5242459
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/971501590490"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 py-[5px] transition-colors hover:text-gold"
              >
                <FaWhatsapp className="mt-0.5 h-[22px] w-[22px] shrink-0 text-gold" />
                +971 50 1590490
              </a>
            </li>
            <li>
              <a
                href="https://www.thedigitalmagnet.com"
                className="flex items-start gap-2 py-[5px] transition-colors hover:text-gold"
              >
                <Globe className="mt-0.5 h-[22px] w-[22px] shrink-0 text-gold" />
                {site.website}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-2.5 text-center text-[15px] text-white">
        Copyright © 2026 Magnet Digital llc. All Rights Reserved. & Design by :
        Magnet Digital LLC.
      </div>
    </footer>
  );
}
