import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-28 text-center">
      <div className="container-site">
        <p className="font-display text-8xl font-black text-gold">404</p>
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
