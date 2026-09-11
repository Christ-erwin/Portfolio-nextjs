import React from "react";

export default function ContactSection1() {
  return (
    <section className="w-full min-h-[20rem] md:min-h-[24rem] flex items-end px-6 pb-16 pt-32 bg-surface-alt">
      <div className="max-w-6xl w-full mx-auto">
        <p className="section-tag">Contact</p>
        <h1 className="text-4xl md:text-6xl font-bold text-ink max-w-2xl leading-[1.1]">
          Let&apos;s build something
          <br />
          <span className="grad-text">great together</span>
        </h1>
        <p className="text-ink-muted mt-4 text-lg max-w-lg leading-relaxed">
          Available for remote contracts, freelance missions, and full-time
          roles. I typically respond within 24&nbsp;hours.
        </p>
      </div>
    </section>
  );
}
