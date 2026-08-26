"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { team } from "@/lib/site";

export function TeamSlider() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState<string | null>(null);
  const visible = 3;
  const pages = Math.max(1, team.length - visible + 1);
  const items = useMemo(
    () => team.slice(index, index + visible),
    [index],
  );

  return (
    <div>
      <div className="grid gap-8 md:grid-cols-3">
        {items.map((member) => (
          <TeamCard
            key={member.name}
            member={member}
            open={open === member.name}
            onToggle={() =>
              setOpen((value) => (value === member.name ? null : member.name))
            }
          />
        ))}
      </div>
      <div className="mt-[70px] flex justify-center gap-2.5">
        {Array.from({ length: pages }).map((_, dot) => (
          <button
            key={dot}
            type="button"
            aria-label={`Team slide ${dot + 1}`}
            onClick={() => setIndex(dot)}
            className="grid h-11 w-11 place-items-center"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === dot ? "bg-orange" : "bg-[#d9d9d9]"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function TeamCard({
  member,
  open,
  onToggle,
}: {
  member: (typeof team)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="text-center">
      <div className="overflow-hidden rounded-[15px]">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role} at Magnet Digital LLC`}
          width={400}
          height={480}
          className="h-auto w-full object-cover transition duration-300 hover:scale-[1.04]"
        />
      </div>
      <div className="relative z-[1] mx-[30px] -mt-20 rounded-[15px] bg-white px-[25px] pb-9 pt-[25px] shadow-[8px_8px_30px_0_rgba(42,67,113,0.15)]">
        <h3 className="mb-[3px] text-lg font-bold">{member.name}</h3>
        <span className="text-sm text-muted">{member.role}</span>
        <div className="absolute -bottom-[18px] left-0 flex w-full justify-center">
          <div className="flex items-center">
            {[
              {
                href: "https://twitter.com/",
                icon: FaTwitter,
                label: "Twitter",
                className: "bg-[#15b7ec] shadow-[5px_5px_18px_0_rgba(21,183,236,0.3)]",
              },
              {
                href: "https://facebook.com/",
                icon: FaFacebookF,
                label: "Facebook",
                className: "bg-blue shadow-[5px_5px_18px_0_rgba(1,96,231,0.3)]",
              },
              {
                href: "https://pinterest.com/",
                icon: FaPinterestP,
                label: "Pinterest",
                className: "bg-orange shadow-[5px_5px_18px_0_rgba(254,76,28,0.3)]",
              },
            ].map(({ href, icon: Icon, label, className }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`social-icon mr-3 grid h-11 w-11 place-items-center rounded-full text-white transition duration-300 ${className} ${
                  open ? "visible translate-x-0 opacity-100" : "invisible -translate-x-4 opacity-0"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
            <button
              type="button"
              onClick={onToggle}
              aria-label="Toggle social links"
              className="grid h-11 w-11 place-items-center rounded-full bg-orange text-white shadow-[5px_5px_18px_0_rgba(254,76,28,0.3)]"
            >
              <Plus className={`h-4 w-4 transition ${open ? "rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
