import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, MessageSquare, User } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { blogBody, getPost, posts } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamic = "force-static";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader title={post.title} current="Blog" />
      <section className="py-20">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_320px]">
          <article>
            <Image
              src={post.image}
              alt={`${post.title} – Magnet Digital LLC blog`}
              width={1100}
              height={640}
              className="mb-8 h-auto w-full rounded-xl object-cover"
            />
            <div className="mb-5 flex flex-wrap gap-4 text-sm text-muted">
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
            <div className="mt-6 space-y-5 text-muted">
              {blogBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="mt-8 border-l-4 border-gold bg-cream px-6 py-5 text-lg italic text-ink">
              “I cannot give you the formula for success, but I can give you the
              formula for failure. It is: Try to please everybody.” – Herbert
              Bayard Swope
            </blockquote>
            <h2 className="mt-10 text-2xl font-bold">
              SEO is a Cost-Effective Advertising Strategy
            </h2>
            <p className="mt-4 text-muted">{blogBody[2]}</p>
          </article>
          <aside className="space-y-8">
            <div className="rounded-xl bg-[#f7f7f7] p-7">
            <h2 className="mb-5 text-xl font-bold">Latest News</h2>
              <ul className="space-y-4">
                {posts.slice(0, 3).map((item) => (
                  <li key={item.slug} className="flex gap-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={70}
                      height={70}
                      className="h-[70px] w-[70px] rounded object-cover"
                    />
                    <div>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="font-display text-sm font-bold leading-snug hover:text-gold-ink"
                      >
                        {item.title}
                      </Link>
                      <p className="mt-1 text-xs text-muted">{item.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-[#f7f7f7] p-7">
              <h2 className="mb-5 text-xl font-bold">Categories</h2>
              <ul className="space-y-2 text-[15px]">
                {["Marketing", "Business", "SEO"].map((category) => (
                  <li key={category}>
                    <Link href="/blog" className="hover:text-gold-ink">
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
