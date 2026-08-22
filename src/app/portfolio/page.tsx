"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { portfolio, portfolioFilters } from "@/lib/site";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof portfolioFilters)[number]>("All");
  const items = useMemo(
    () =>
      filter === "All"
        ? portfolio
        : portfolio.filter((item) =>
            (item.categories as readonly string[]).includes(filter),
          ),
    [filter],
  );

  return (
    <>
      <PageHeader title="Portfolios" current="Portfolio" />
      <section className="py-20">
        <div className="container-site">
          <div className="project-filters">
            {portfolioFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={filter === item ? "is-active" : undefined}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="grid gap-x-[30px] gap-y-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <a
                key={item.slug}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="projects-box group"
              >
                <div className="projects-thumb">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 370px"
                    className="object-cover"
                  />
                </div>
                <div className="portfolio-info">
                  <div className="portfolio-info-inner">
                    <h3 className="portfolio-info-title">{item.title}</h3>
                    <p className="portfolio-cates">
                      {item.categories.join(" / ")}/
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
