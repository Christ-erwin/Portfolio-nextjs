import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

interface ProjectCardProps {
  backgroundImage: string;
  title: string;
  description: string;
  link: string;
  featured?: boolean;
  priority?: boolean;
}

const BoxProject: React.FC<ProjectCardProps> = ({
  backgroundImage,
  title,
  description,
  link,
  featured = false,
  priority = false,
}) => {
  const lines = description.split("\n");

  return (
    <Link
      href={link}
      aria-label={`${title} — view case study`}
      className={`group relative block w-full overflow-hidden rounded-3xl ${
        featured ? "min-h-[26rem] md:min-h-[30rem]" : "min-h-[22rem] md:min-h-[24rem]"
      }`}
    >
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 1100px"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
      />

      {/* Scrim for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
        <div>
          {featured && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              Featured project
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="mb-1 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              {title}
            </h3>
            <p className="text-sm text-white/80">{lines[0]}</p>
            {lines[1] && (
              <p className="mt-0.5 text-xs text-white/60">{lines[1]}</p>
            )}
          </div>
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-transform duration-300 group-hover:translate-x-1"
          >
            View case study <LuArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BoxProject;
