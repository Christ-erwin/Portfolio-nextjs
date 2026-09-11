import React from "react";
import { LuQuote, LuLinkedin } from "react-icons/lu";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

/**
 * Add real testimonials here as you collect them (LinkedIn recommendations
 * from managers / colleagues at Orange, Yoomi, Dughu or the Pommy client).
 * While the list is empty the component shows a "references" strip instead —
 * nothing fake is ever rendered.
 */
const testimonials: Testimonial[] = [
  // {
  //   quote: "Christ delivered the full redesign ahead of schedule and the team shipped it with almost no back-and-forth.",
  //   name: "Full Name",
  //   title: "Product Lead, Company",
  // },
];

const LINKEDIN_URL =
  "https://www.linkedin.com/in/christ-erwin-fram-696a69257/";

export default function Testimonials() {
  if (testimonials.length === 0) {
    return (
      <section className="w-full bg-surface px-6 py-16">
        <div className="max-w-4xl mx-auto rounded-2xl border border-line bg-surface-alt p-8 text-center">
          <p className="section-tag justify-center">References</p>
          <p className="text-ink-muted max-w-lg mx-auto leading-relaxed">
            Recommendations from managers and teammates I&apos;ve worked with are
            on my LinkedIn. References available on request.
          </p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-surface px-6 py-3 text-sm font-semibold text-ink hover:bg-surface-sunken transition-colors"
          >
            <LuLinkedin className="w-4 h-4" aria-hidden="true" />
            Read recommendations on LinkedIn
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-surface px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="section-tag">What people say</p>
        <div className="grid md:grid-cols-2 gap-6 mt-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-line bg-surface-alt p-6 m-0"
            >
              <LuQuote
                className="w-6 h-6 text-brand mb-3"
                aria-hidden="true"
              />
              <blockquote className="text-ink leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-ink">{t.name}</span>
                <span className="block text-ink-subtle">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
