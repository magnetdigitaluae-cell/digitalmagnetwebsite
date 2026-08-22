import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn(align === "center" && "text-center")}>
      <span
        className={cn(
          "sub-heading",
          align === "center" && "justify-center",
          light && "text-gold",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight md:text-[42px] md:leading-[1.2]",
          light && "text-white",
        )}
      >
        {title}
      </h2>
    </div>
  );
}
