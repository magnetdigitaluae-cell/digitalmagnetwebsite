import type { Metadata } from "next";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/lib/site";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s – ${site.title}`,
  },
  description:
    "Magnet Digital LLC is a values-driven digital marketing and SEO agency committed to helping businesses grow, connect with their audiences, and build a powerful online presence.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.png" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${redHatDisplay.variable} ${redHatText.variable} antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
