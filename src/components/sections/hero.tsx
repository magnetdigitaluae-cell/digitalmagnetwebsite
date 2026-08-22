"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Creative Designs. Powerful Digital Experiences.",
    text: "We create modern, responsive, and user-friendly websites that showcase your brand, engage visitors, and help your business grow online.",
    href: "/website-development",
  },
  {
    title: "Get Found. Get Traffic. Grow Your Business.",
    text: "Boost your online visibility with result-driven SEO strategies that improve search rankings, attract targeted traffic, and turn visitors into loyal customers.",
    href: "/search-engine-optimization",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative min-h-[640px] overflow-hidden bg-navy md:min-h-[760px]">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-[6500ms]"
        style={{ backgroundImage: "url('/images/hero-slide.jpg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,23,41,0.78)_0%,rgba(6,23,41,0.35)_62%,rgba(6,23,41,0.15)_100%)]" />

      <div className="container-site relative flex min-h-[640px] items-center py-24 md:min-h-[760px]">
        <div className="max-w-2xl text-white">
          <h1
            key={slide.title}
            className="animate-[fadeUp_.6s_ease] text-4xl font-black leading-[1.15] md:text-6xl"
            style={{ color: "#fff" }}
          >
            {slide.title}
          </h1>
          <p
            key={slide.text}
            className="mt-6 max-w-xl animate-[fadeUp_.7s_ease] text-lg text-white/85"
          >
            {slide.text}
          </p>
          <Link href={slide.href} className="btn btn-primary btn-icon mt-8">
            Read More
            <span className="icon-circle">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((item, slideIndex) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Go to slide ${slideIndex + 1}`}
            onClick={() => setIndex(slideIndex)}
            className={`h-2.5 w-2.5 rounded-full ${
              slideIndex === index ? "bg-gold" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
