import type { Metadata, Viewport } from "next";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/lib/site";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "digital marketing UAE",
    "SEO agency Sharjah",
    "website development Dubai",
    "Google Ads",
    "Meta Ads",
    "ecommerce development",
    "mobile app development",
    "Magnet Digital LLC",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/images/home-banner.png",
        width: 770,
        height: 770,
        alt: "Magnet Digital LLC digital marketing and web design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/home-banner.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.png" },
    ],
    apple: [{ url: "/images/logo.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061729",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  image: `${site.url}/images/logo.png`,
  logo: `${site.url}/images/logo.png`,
  description: site.description,
  email: site.emails[0],
  telephone: site.phones[0],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sharjah",
    addressRegion: "Sharjah",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.3463,
    longitude: 55.4209,
  },
  areaServed: [
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Dubai" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  sameAs: [
    "https://facebook.com/",
    "https://instagram.com/",
    "https://linkedin.com/",
    "https://twitter.com/",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AE"
      className={`${redHatDisplay.variable} ${redHatText.variable} antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
