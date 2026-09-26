import React from "react";
import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  priority?: boolean;
  tags?: string[];
  /** Optional pill shown above the eyebrow (e.g. "Concept redesign"). */
  badge?: string;
};

/**
 * Full-bleed hero with a background image, a dark scrim for legibility,
 * and white foreground text. Used for landing sections of secondary pages
 * and case studies.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  priority = false,
  tags,
  badge,
}: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[26rem] md:min-h-[32rem] flex items-end px-6 pb-16 pt-32 overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35" />

      <div className="relative max-w-6xl w-full mx-auto">
        {badge && (
          <span className="mb-4 inline-block rounded-full border border-white/25 bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            {badge}
          </span>
        )}
        <p className="section-tag !text-white/80">{eyebrow}</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-[1.1]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 mt-4 text-lg max-w-lg leading-relaxed">
            {subtitle}
          </p>
        )}
        {tags && tags.length > 0 && (
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
        )}
      </div>
    </section>
  );
}
