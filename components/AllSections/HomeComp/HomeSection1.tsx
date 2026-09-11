"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LuPalette, LuCodeXml, LuGlobe, LuMapPin } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "10+", label: "Projects delivered" },
  { value: "4", label: "Companies" },
];

const PHOTO =
  "https://res.cloudinary.com/docanichi/image/upload/v1752175194/myFace_wuyvpn.jpg";

export default function HomeSection1() {
  const reduceMotion = useReducedMotion();
  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" as const },
        };

  return (
    <section className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 pt-24 pb-16 bg-surface">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — text */}
        <motion.div className="flex flex-col gap-6" {...rise(0)}>
          <div className="flex items-center gap-2.5">
            <span className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <Image src={PHOTO} alt="" fill sizes="32px" className="object-cover" />
            </span>
            <span className="text-sm text-ink-subtle font-medium">
              Available for remote work
            </span>
            <span className="w-2 h-2 rounded-full bg-green-500 motion-safe:animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-ink leading-[1.1] tracking-tight text-balance">
            UI/UX Designer
            <br />
            <span className="grad-text">&amp; Full-Stack Web &amp; Mobile Developer</span>
          </h1>

          <p className="text-ink-muted text-lg leading-relaxed max-w-md">
            I&apos;m a product designer who ships. I hand engineering teams work
            that builds without friction — because I&apos;ve been the engineer.
            From UX research to React Native, across fintech, telecom and
            consumer apps.
          </p>

          <div className="flex items-center gap-2 text-sm text-ink-subtle font-medium">
            <LuMapPin className="w-4 h-4" aria-hidden="true" />
            <span>Abidjan, Côte d&apos;Ivoire</span>
            <span aria-hidden="true">·</span>
            <span>Remote worldwide</span>
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href="/projects"
              className="grad-bg text-white font-semibold px-7 py-3.5 rounded-full text-sm"
            >
              View my work
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-ink border border-ink/15 px-7 py-3.5 rounded-full hover:bg-surface-alt transition-colors"
            >
              Contact me
            </Link>
          </div>

          <dl className="flex gap-8 pt-4 border-t border-line">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold text-ink">
                    {s.value}
                  </span>
                  <span className="block text-xs text-ink-subtle mt-0.5">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-semibold text-ink-subtle hover:text-ink transition-colors"
          >
            <FcGoogle className="w-4 h-4" aria-hidden="true" />
            Google UX Design Certified
          </Link>
        </motion.div>

        {/* RIGHT — photo + tags */}
        <motion.div
          className="relative flex justify-center"
          {...rise(0.15)}
        >
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src={PHOTO}
                alt="Portrait of Christ Erwin Fram"
                fill
                priority
                sizes="(max-width: 768px) 16rem, 20rem"
                className="object-cover"
              />
            </div>

            <div className="absolute -top-4 -right-2 sm:-right-4 bg-white border border-line rounded-2xl shadow-lg px-4 py-2.5">
              <p className="flex items-center gap-2 text-xs font-semibold text-ink">
                <LuPalette className="w-4 h-4 text-brand" aria-hidden="true" />
                UI/UX Design
              </p>
            </div>
            <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white border border-line rounded-2xl shadow-lg px-4 py-2.5">
              <p className="flex items-center gap-2 text-xs font-semibold text-ink">
                <LuCodeXml className="w-4 h-4 text-brand" aria-hidden="true" />
                React&nbsp;/&nbsp;Next.js
              </p>
            </div>
            <div className="absolute top-1/2 -right-4 sm:-right-8 bg-black rounded-2xl shadow-lg px-4 py-2.5">
              <p className="flex items-center gap-2 text-xs font-semibold text-white">
                <LuGlobe className="w-4 h-4" aria-hidden="true" />
                Remote-ready
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
