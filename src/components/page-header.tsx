import Link from "next/link";

export function PageHeader({
  title,
  current,
}: {
  title: string;
  current?: string;
}) {
  return (
    <section className="page-header">
      <div>
        <h1>{title}</h1>
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">{current ?? title}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
