import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested does not exist on Magnet Digital LLC.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="py-28 text-center">
      <div className="container-site">
        <p className="font-display text-8xl font-extrabold text-gold-ink">404</p>
        <h1 className="mt-4 text-4xl font-bold">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
