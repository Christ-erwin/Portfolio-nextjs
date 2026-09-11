import React from "react";
import { LuQuote, LuLinkedin } from "react-icons/lu";
import { pick, type Locale } from "@/lib/locale";

type Testimonial = {
  quote: { en: string; fr: string };
  name: string;
  title: { en: string; fr: string };
};

/**
 * Add real testimonials here as you collect them (LinkedIn recommendations
 * from managers / colleagues at Orange, Yoomi, Dughu or the Pommy client).
 * While the list is empty the component shows a "references" strip instead —
 * nothing fake is ever rendered.
 */
const testimonials: Testimonial[] = [
  // {
  //   quote: {
  //     en: "Christ delivered the full redesign ahead of schedule and the team shipped it with almost no back-and-forth.",
  //     fr: "Christ a livré la refonte complète avant l'échéance et l'équipe l'a shippée quasi sans allers-retours.",
  //   },
  //   name: "Full Name",
  //   title: { en: "Product Lead, Company", fr: "Product Lead, Entreprise" },
  // },
];

const LINKEDIN_URL =
  "https://www.linkedin.com/in/christ-erwin-fram-696a69257/";

export default function Testimonials({ locale }: { locale: Locale }) {
  if (testimonials.length === 0) {
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
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-surface px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="section-tag">
          {pick(locale, "What people say", "Ce qu'on dit de mon travail")}
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-line bg-surface-alt p-6 m-0"
            >
              <LuQuote className="w-6 h-6 text-brand mb-3" aria-hidden="true" />
              <blockquote className="text-ink leading-relaxed">
                {pick(locale, t.quote.en, t.quote.fr)}
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-ink">{t.name}</span>
                <span className="block text-ink-subtle">
                  {pick(locale, t.title.en, t.title.fr)}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
