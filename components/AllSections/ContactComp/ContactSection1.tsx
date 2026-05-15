import React from "react";
export default function ContactSection1() {
  return (
    <section className="w-full min-h-[40vh] flex items-end px-6 pb-16 pt-32 bg-[#F8F7F4]">
      <div className="max-w-6xl w-full mx-auto">
        <p className="section-tag">Contact</p>
        <h1 className="text-4xl md:text-6xl font-bold text-black max-w-2xl leading-tight">
          Let&apos;s build something<br /><span className="grad-text">great together</span>
        </h1>
        <p className="text-black/50 mt-4 text-lg max-w-lg">
          Available for remote contracts, freelance missions, and full-time roles. I typically respond within 24h.
        </p>
      </div>
    </section>
  );
}
