import Link from "next/link";
import React from "react";

export default function PreFooter() {
  return (
    <section className="w-full py-24 px-6 flex flex-col items-center text-center gap-6 bg-white">
      <p className="section-tag">Let&apos;s work together</p>
      <h2 className="text-3xl md:text-5xl font-bold text-black max-w-xl leading-tight">
        Got a project in mind?<br />
        <span className="grad-text">Let&apos;s build it.</span>
      </h2>
      <p className="text-black/50 max-w-md text-base leading-relaxed">
        I&apos;m available for remote contracts, freelance missions, and full-time roles.
        Based in Abidjan — working with teams worldwide.
      </p>
      <div className="flex gap-4 flex-wrap justify-center mt-2">
        <Link href="/contact">
          <span className="grad-bg text-white font-semibold px-8 py-3.5 rounded-full text-sm inline-block">
            Contact me →
          </span>
        </Link>
        <a href="mailto:framchristerwintl@gmail.com">
          <span className="text-sm font-semibold text-black border border-black/20 px-8 py-3.5 rounded-full inline-block hover:bg-gray-50 transition-colors">
            framchristerwintl@gmail.com
          </span>
        </a>
      </div>
    </section>
  );
}
