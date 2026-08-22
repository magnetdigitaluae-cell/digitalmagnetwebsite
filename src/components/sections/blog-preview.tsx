import Image from "next/image";
import Link from "next/link";
import { Calendar, MessageSquare, User } from "lucide-react";
import { SectionHeading } from "@/components/heading";
import { posts } from "@/lib/site";

export function BlogPreview() {
  return (
    <section className="bg-cream-2 pb-24 pt-20">
      <div className="container-site">
        <div className="mb-12">
          <SectionHeading eyebrow="Blog" title="Our Latest Blog" align="center" />
        </div>
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {posts.map((post) => (
            <article key={post.slug} className="overflow-hidden bg-white">
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={640}
                  height={420}
                  className="h-52 w-full object-cover transition duration-500 hover:scale-105"
                />
              </Link>
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wide text-gold">
                  {post.categories.map((category) => (
                    <span key={category}>{category}</span>
                  ))}
                </div>
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted">
                  <span className="inline-flex items-center gap-1">
                    <User className="h-3.5 w-3.5" /> {post.author}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5" /> {post.comments} Comments
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-gold">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex text-sm font-bold text-ink hover:text-gold"
                >
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
