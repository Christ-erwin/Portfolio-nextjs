import React from "react";
import { LuDownload } from "react-icons/lu";

export default function AboutSection1() {
  return (
    <section className="w-full min-h-[22rem] md:min-h-[26rem] flex items-end px-6 pb-16 pt-32 bg-surface-alt">
      <div className="max-w-6xl w-full mx-auto">
        <p className="section-tag">About me</p>
        <h1 className="text-4xl md:text-6xl font-bold text-ink max-w-2xl leading-[1.1]">
          Designer who <span className="grad-text">thinks in code</span>
        </h1>
        <a
          href="/cv/christ-erwin-fram-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-surface px-6 py-3 text-sm font-semibold text-ink hover:bg-surface-sunken transition-colors"
        >
          <LuDownload className="w-4 h-4" aria-hidden="true" />
          Download résumé (PDF)
        </a>
      </div>
    </section>
  );
}
