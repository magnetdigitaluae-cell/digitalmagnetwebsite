"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Search,
  X,
} from "lucide-react";
import { EnquireModal } from "@/components/enquire-modal";
import { BrandIcon, headerSocials } from "@/components/brand-icons";
import { navLinks, serviceLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="hidden bg-navy text-white lg:block">
        <div className="container-site flex items-center justify-between py-2.5 text-sm font-medium">
          <div className="flex items-center gap-6">
            <span>Follow Us:</span>
            <div className="follow-us flex items-center gap-2 border-l border-white/15 pl-6">
              {headerSocials.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <BrandIcon name={icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-7 text-white">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              {site.location}
            </span>
            {site.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" />
                {email}
              </a>
            ))}
          </div>
        </div>
      </div>

      <header
        className={cn(
          "z-50 bg-white transition-shadow",
          sticky ? "sticky top-0 shadow-[4px_4px_30px_0_rgba(42,67,113,0.15)]" : "relative",
        )}
      >
        <div className="container-site flex items-center justify-between py-3 lg:py-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Magnet Digital LLC"
              width={82}
              height={82}
              className="h-[70px] lg:h-[82px]"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 xl:flex">
            {navLinks.map((link) =>
              link.href === "/services" ? (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex items-center gap-1 font-display text-[15px] font-bold transition-colors hover:text-gold",
                      pathname.startsWith("/services") ||
                        serviceLinks.some(
                          (service) =>
                            pathname.replace(/\/$/, "") === `/${service.slug}`,
                        )
                        ? "text-gold"
                        : "text-ink",
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-40 w-[280px] translate-y-2 pt-4 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="max-h-[70vh] overflow-auto rounded-md bg-white py-3 shadow-[0_10px_40px_rgba(26,27,30,0.12)]">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/${service.slug}/`}
                          className="block px-5 py-2 text-sm text-muted hover:bg-cream hover:text-ink"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-display text-[15px] font-bold transition-colors hover:text-gold",
                    pathname === link.href ? "text-gold" : "text-ink",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen((value) => !value)}
              className="grid h-11 w-11 place-items-center rounded-full bg-gold-soft text-ink"
            >
              <Search className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => setEnquireOpen(true)} className="btn btn-gold">
              Enquire Now
            </button>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md border border-black/10 xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {searchOpen ? (
          <div className="border-t border-black/5 bg-white px-5 py-4">
            <form action="/blog" className="container-site flex gap-3">
              <input
                name="s"
                placeholder="Search..."
                className="form-field"
                autoFocus
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        ) : null}

        {open ? (
          <div className="border-t border-black/5 bg-white xl:hidden">
            <nav className="flex flex-col px-5 py-4">
              {navLinks.map((link) =>
                link.href === "/services" ? (
                  <div key={link.href}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 font-display font-bold"
                      onClick={() => setServicesOpen((value) => !value)}
                    >
                      Services
                      <ChevronDown
                        className={cn("h-4 w-4 transition", servicesOpen && "rotate-180")}
                      />
                    </button>
                    {servicesOpen
                      ? serviceLinks.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/${service.slug}/`}
                            className="block py-2 pl-4 text-sm text-muted"
                          >
                            {service.title}
                          </Link>
                        ))
                      : null}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-3 font-display font-bold"
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <button
                type="button"
                onClick={() => setEnquireOpen(true)}
                className="btn btn-gold mt-3 w-full"
              >
                Enquire Now
              </button>
            </nav>
          </div>
        ) : null}
      </header>
      <EnquireModal open={enquireOpen} onClose={() => setEnquireOpen(false)} />
    </>
  );
}
