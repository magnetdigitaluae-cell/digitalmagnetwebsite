import type { Metadata } from "next";
import { site } from "@/lib/site";

const ogImage = {
  url: "/images/home-banner.png",
  width: 770,
  height: 770,
  alt: "Magnet Digital LLC digital marketing and web design",
};

export function createMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = path.endsWith("/") ? path : `${path}/`;
  const absolute = new URL(canonical, `${site.url}/`).toString();

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: absolute,
      siteName: site.name,
      locale: "en_AE",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [ogImage.url],
    },
  };
}
