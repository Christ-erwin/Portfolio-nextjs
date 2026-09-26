import React from "react";
import { LuQuote, LuLinkedin } from "react-icons/lu";
import { pick, type Locale } from "@/lib/locale";
import { hasTodo, isPublishable } from "@/lib/draft";

type Testimonial = {
  quote: { en: string; fr: string };
  name: string;
  role: { en: string; fr: string };
  company: string;
};

/**
 * Real testimonials only (LinkedIn recommendations from managers / colleagues
 * at Orange, Yoomi, Dughu or the HomeLink client). Entries still containing a
 * TODO marker are hidden in production; while none is complete, the section
 * falls back to the LinkedIn references strip — nothing fake is ever rendered.
 */
const testimonials: Testimonial[] = [
  // {
  //   quote: { en: "…", fr: "…" },
  //   name: "Full Name",
  //   role: { en: "Product Lead", fr: "Product Lead" },
  //   company: "Company",
  // },
];

const LINKEDIN_URL =
  "https://www.linkedin.com/in/christ-erwin-fram-696a69257/";

function LinkedInLink({ locale }: { locale: Locale }) {
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-surface px-6 py-3 text-sm font-semibold text-ink hover:bg-surface-sunken transition-colors"
    >
      <LuLinkedin className="w-4 h-4" aria-hidden="true" />
      {pick(
        locale,
        "Read recommendations on LinkedIn",
        "Lire les recommandations sur LinkedIn"
      )}
      <span className="sr-only">
        ({pick(locale, "opens in a new tab", "ouvre un nouvel onglet")})
      </span>
    </a>
  );
}

export default function Testimonials({ locale }: { locale: Locale }) {
  const visible = testimonials.filter(isPublishable);

  if (visible.length === 0) {
    return (
      <section className="w-full bg-surface px-6 py-16">
        <div className="max-w-4xl mx-auto rounded-2xl border border-line bg-surface-alt p-8 text-center">
          <p className="section-tag justify-center">
            {pick(locale, "References", "Références")}
          </p>
          <p className="text-ink-muted max-w-lg mx-auto leading-relaxed">
            {pick(
              locale,
              "Recommendations from managers and teammates I've worked with are on my LinkedIn. References available on request.",
              "Les recommandations des managers et collègues avec qui j'ai travaillé sont sur mon LinkedIn. Références disponibles sur demande."
            )}
          </p>
          <LinkedInLink locale={locale} />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-surface px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <p className="section-tag">
          {pick(locale, "References", "Références")}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-10">
          {pick(locale, "What people say", "Ce qu'on dit de mon travail")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <figure
              key={i}
              className={`rounded-2xl border bg-surface-alt p-6 m-0 flex flex-col ${
                hasTodo(t) ? "border-dashed border-amber-400" : "border-line"
              }`}
            >
              <LuQuote className="w-6 h-6 text-brand mb-3" aria-hidden="true" />
              <blockquote className="text-ink leading-relaxed flex-1">
                {pick(locale, t.quote.en, t.quote.fr)}
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-ink">{t.name}</span>
                <span className="block text-ink-subtle">
                  {pick(locale, t.role.en, t.role.fr)} · {t.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="text-center">
          <LinkedInLink locale={locale} />
        </div>
      </div>
    </section>
  );
}
