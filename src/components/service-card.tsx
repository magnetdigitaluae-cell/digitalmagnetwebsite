import Link from "next/link";
import {
  AppWindow,
  ArrowRight,
  Code2,
  IdCard,
  Layers,
  Megaphone,
  Monitor,
  PanelsTopLeft,
  PenTool,
  Search,
  Server,
  Share2,
  ShoppingBag,
  Smartphone,
  ThumbsUp,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/site";

const serviceIcons: Record<string, LucideIcon> = {
  "website-development": Monitor,
  ecommerce: ShoppingBag,
  "mobile-app-development": Smartphone,
  "google-ads": Megaphone,
  "meta-ads": ThumbsUp,
  "social-media": Share2,
  "search-engine-optimization": Search,
  "web-hosting": Server,
  "web-maintenance": Wrench,
  "content-management-system": PanelsTopLeft,
  "logo-designing": PenTool,
  "business-card-brochures": IdCard,
  "flat-web-design": Layers,
  "single-page-web-design": AppWindow,
  "video-integration": Video,
};

function ServiceIcon({ slug }: { slug: string }) {
  const Icon = serviceIcons[slug] ?? Code2;
  return <Icon className="h-[30px] w-[30px]" strokeWidth={1.6} />;
}

export function ServiceCard({
  service,
  description,
  cta = "link",
}: {
  service: Service;
  description: string;
  cta?: "link" | "button";
}) {
  const title = service.navTitle ?? service.title;

  if (cta === "button") {
    return (
      <article className="icon-box-s3-static group flex h-full flex-col justify-between bg-white p-[30px] shadow-[8px_8px_30px_rgba(42,67,113,0.08)] transition hover:shadow-[8px_8px_30px_rgba(42,67,113,0.14)]">
        <div>
          <div className="icon-main">
            <ServiceIcon slug={service.slug} />
          </div>
          <h3 className="text-xl font-bold">
            <Link href={`/${service.slug}`} className="hover:text-gold-ink">
              {title}
            </Link>
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-muted">{description}</p>
        </div>
        <Link
          href={`/${service.slug}`}
          className="btn btn-secondary btn-icon btn-sm mt-6 -ml-[30px] w-fit rounded-l-none"
          aria-label={`Read more about ${title}`}
        >
          Read more
          <span className="icon-circle" aria-hidden>
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </article>
    );
  }

  return (
    <article className="icon-box-s3 group">
      <div className="icon-overlay" aria-hidden />
      <div className="icon-main">
        <ServiceIcon slug={service.slug} />
      </div>
      <div>
        <h3 className="mb-3 text-lg font-bold transition">
          <Link href={`/${service.slug}`}>{title}</Link>
        </h3>
        <p className="line-clamp-5 text-[15px] leading-7 text-muted transition">
          {description}
        </p>
      </div>
      <div className="icon-action flex justify-center">
        <Link
          href={`/${service.slug}`}
          className="btn btn-gold btn-icon btn-sm"
          aria-label={`Read more about ${title}`}
        >
          Read more
          <span className="icon-circle" aria-hidden>
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </div>
    </article>
  );
}
