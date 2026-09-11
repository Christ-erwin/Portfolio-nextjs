import React from "react";
import { LuCode, LuGauge, LuAccessibility, LuGithub } from "react-icons/lu";

const REPO_URL = "https://github.com/Christ-erwin";

const points = [
  {
    icon: LuCode,
    text: "Designed and built by me — Next.js (App Router), React 19, TypeScript and Tailwind CSS.",
  },
  {
    icon: LuAccessibility,
    text: "Accessibility-minded: semantic landmarks, visible focus, keyboard support, reduced-motion, AA contrast.",
  },
  {
    icon: LuGauge,
    text: "Static-rendered and image-optimised for fast loads on any connection.",
  },
];

export default function SiteCredit() {
  return (
    <section className="w-full bg-black px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="section-tag !text-white/70">About this site</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white max-w-xl leading-tight">
          The portfolio is the case study —{" "}
          <span className="grad-text">I designed and coded it.</span>
        </h2>
        <ul className="mt-6 grid sm:grid-cols-3 gap-4">
          {points.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="rounded-2xl border border-white/15 p-5"
            >
              <Icon className="w-5 h-5 text-white/80 mb-3" aria-hidden="true" />
              <p className="text-sm text-white/70 leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:opacity-80 transition-opacity"
        >
          <LuGithub className="w-4 h-4" aria-hidden="true" />
          See my code on GitHub
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
