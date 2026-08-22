"use client";

import { useEffect, useRef, useState } from "react";

export function ProgressBar({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(value);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="mb-5">
      <div className="mb-2.5 flex justify-between font-display text-[15px] font-medium text-ink">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-[10px] overflow-hidden rounded-[5px] bg-white">
        <div
          className="h-full rounded-[5px] bg-cyan shadow-[10px_10px_24px_0_rgba(0,195,255,0.3)] transition-[width] duration-700 ease-linear"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
