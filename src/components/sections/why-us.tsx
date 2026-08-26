"use client";

import { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  Code2,
  MessageSquare,
  Palette,
} from "lucide-react";
import { SectionHeading } from "@/components/heading";

const counters = [
  { to: 330, label: "Active Clients" },
  { to: 850, label: "Projects Done" },
  { to: 25, label: "Team Advisors" },
];

const process = [
  {
    title: "Info Gathering",
    text: "Gathering information for smarter business strategies.",
    icon: MessageSquare,
    color: "text-cyan",
    shadow: "shadow-[10px_10px_30px_rgba(2,156,236,0.27)]",
    hover: "hover:bg-[#e5f9ff]",
  },
  {
    title: "Design",
    text: "Creating designs that inspire and engage.",
    icon: Palette,
    color: "text-orange",
    shadow: "shadow-[10px_10px_30px_rgba(254,76,28,0.31)]",
    hover: "hover:bg-[#ffebe6]",
  },
  {
    title: "Planning",
    text: "Planning strategies for successful business growth.",
    icon: ClipboardList,
    color: "text-blue",
    shadow: "shadow-[10px_10px_30px_rgba(1,96,231,0.26)]",
    hover: "hover:bg-[#eaf3ff]",
  },
  {
    title: "Development",
    text: "Building powerful solutions for digital growth.",
    icon: Code2,
    color: "text-[#ff9c27]",
    shadow: "shadow-[10px_10px_30px_rgba(255,156,39,0.29)]",
    hover: "hover:bg-[#fff3e9]",
  },
];

function useCountUp(to: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1400;
    const started = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - started) / duration, 1);
      setValue(Math.round(to * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, to]);

  return value;
}

function Counter({ to, label, start }: { to: number; label: string; start: boolean }) {
  const value = useCountUp(to, start);
  return (
    <div>
      <div className="font-display text-4xl font-bold text-gold-ink">
        {value}
        <span>+</span>
      </div>
      <div className="mt-1 font-display text-lg font-bold text-ink">{label}</div>
    </div>
  );
}

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStart(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-left-bottom bg-no-repeat pb-[250px] pt-[50px]"
      style={{ backgroundImage: "url('/images/bg/bg-shape2.png')" }}
    >
      <div className="container-site grid items-center gap-16 lg:grid-cols-2">
        <div className="lg:pr-16">
          <SectionHeading
            eyebrow="Why Us"
            title={
              <>
                Grow Your Business
                <br />
                with Our SEO Agency
              </>
            }
          />
          <p className="mt-6 text-[16px] leading-8 text-muted">
            Boost your online visibility with{" "}
            <strong className="text-ink">
              Magnet Digital LLC’s results-driven SEO strategies
            </strong>
            . We help businesses attract qualified traffic, improve search
            rankings, reach the right audience, and turn online opportunities
            into sustainable growth.
          </p>
          <p className="mt-4 text-[16px] leading-8 text-muted">
            Our SEO experts develop customized strategies based on your business
            goals, target audience, industry, and competition. From{" "}
            <strong className="text-ink">
              keyword research and technical SEO to on-page optimization,
              content strategy, local SEO, link building, and performance
              tracking
            </strong>
            , we focus on improving your search visibility and attracting
            high-quality organic traffic.
          </p>
          <div ref={ref} className="mt-10 grid grid-cols-3 gap-4">
            {counters.map((item) => (
              <Counter key={item.label} {...item} start={start} />
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {process.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-[20px] bg-white px-[27px] py-[45px] text-center transition hover:shadow-[8px_8px_30px_rgba(42,67,113,0.18)] ${item.hover} ${
                index === 2 ? "sm:-mt-5" : ""
              }`}
            >
              <div
                className={`mx-auto mb-5 grid h-[70px] w-[70px] place-items-center rounded-full bg-white ${item.shadow}`}
              >
                <item.icon className={`h-8 w-8 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-[15px] text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
