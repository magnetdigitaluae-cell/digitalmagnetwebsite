import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { services } from "@/lib/site";

export function ServiceSidebar({ current }: { current?: string }) {
  return (
    <aside className="space-y-8">
      <div className="overflow-hidden rounded-xl bg-[#f7f7f7] p-8">
        <h3 className="mb-5 text-2xl font-bold">Our Service</h3>
        <ul>
          {services.map((service) => (
            <li key={service.slug} className="border-b border-black/5 last:border-0">
              <Link
                href={`/${service.slug}`}
                className={`flex min-h-11 items-center justify-between py-3 text-[15px] hover:text-gold-ink ${
                  current === service.slug ? "font-bold text-gold-ink" : "text-ink"
                }`}
              >
                {service.navTitle ?? service.title}
                <span>›</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl bg-navy p-8 text-white">
        <p className="sub-heading text-gold">CONTACT US</p>
        <h3 className="mt-3 mb-6 text-2xl font-bold text-white">Ready to Get Started?</h3>
        <div className="[&_.form-field]:bg-white">
          <ContactForm />
        </div>
      </div>
    </aside>
  );
}
