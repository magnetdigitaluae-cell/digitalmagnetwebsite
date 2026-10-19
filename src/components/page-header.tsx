import Link from "next/link";

export function PageHeader({
  title,
  current,
  parent,
}: {
  title: string;
  current?: string;
  parent?: { href: string; label: string };
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
            {parent ? (
              <li>
                <Link href={parent.href}>{parent.label}</Link>
              </li>
            ) : null}
            <li aria-current="page">{current ?? title}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
