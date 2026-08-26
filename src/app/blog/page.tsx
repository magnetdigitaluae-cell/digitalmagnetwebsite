import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MessageSquare, User } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/seo";
import { posts } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "SEO, digital marketing, and website growth articles from Magnet Digital LLC for businesses in Sharjah, Dubai, and across the UAE.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Blog" />
      <section className="py-20">
        <div className="container-site grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="overflow-hidden bg-white shadow-[8px_8px_30px_rgba(42,67,113,0.08)]">
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                <Image
                  src={post.image}
                  alt={`${post.title} article thumbnail`}
                  width={900}
                  height={560}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                />
              </Link>
              <div className="p-8">
                <div className="mb-3 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-gold-ink">
                  {post.categories.map((category) => (
                    <span key={category}>{category}</span>
                  ))}
                </div>
                <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted">
                  <span className="inline-flex items-center gap-1">
                    <User className="h-4 w-4" /> {post.author}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" /> {post.comments} Comments
                  </span>
                </div>
                <h2 className="text-2xl font-bold">
                  <Link href={`/blog/${post.slug}`} className="hover:text-gold-ink">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 text-muted">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex min-h-11 items-center font-display text-sm font-bold hover:text-gold-ink"
                  aria-label={`Read article: ${post.title}`}
                >
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
