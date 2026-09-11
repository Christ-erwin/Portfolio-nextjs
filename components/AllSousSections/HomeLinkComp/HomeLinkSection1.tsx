import React from "react";
import Image from "next/image";

const tags = [
  "UX Research",
  "UI Design",
  "Prototyping",
  "iOS & Android",
  "Design System",
];

export default function HomeLinkSection1() {
  return (
    <section className="relative w-full min-h-[30rem] md:min-h-[38rem] flex items-end px-6 pb-14 pt-32 overflow-hidden">
      <Image
        src="https://res.cloudinary.com/docanichi/image/upload/v1778846969/Free_iPhone_17_Pro_f9dyxw.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />

      <div className="relative max-w-6xl w-full mx-auto">
        <span className="inline-block rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
          Client Project · Pommy
        </span>

        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-[1.1]">
          HomeLink
        </h1>

        <p className="mt-4 max-w-xl text-lg md:text-xl font-medium text-white/85 leading-relaxed">
          Smart Home App — buy, install &amp; control your connected devices from
          one place.
        </p>

        <ul className="mt-6 flex flex-wrap gap-2.5">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/25 px-3 py-1 text-xs font-medium text-white/85"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
