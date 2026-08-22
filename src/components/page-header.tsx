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
        <ul className="breadcrumb">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>{current ?? title}</li>
        </ul>
      </div>
    </section>
  );
}
