import React from "react";
import { pick, type Locale } from "@/lib/locale";

export default function ContactSection1({ locale }: { locale: Locale }) {
  return (
    <section className="w-full min-h-[20rem] md:min-h-[24rem] flex items-end px-6 pb-16 pt-32 bg-surface-alt">
      <div className="max-w-6xl w-full mx-auto">
        <p className="section-tag">Contact</p>
        <h1 className="text-4xl md:text-6xl font-bold text-ink max-w-2xl leading-[1.1]">
          {pick(locale, "Let's build something", "Construisons quelque chose")}
          <br />
          <span className="grad-text">
            {pick(locale, "great together", "de grand, ensemble")}
          </span>
        </h1>
        <p className="text-ink-muted mt-4 text-lg max-w-lg leading-relaxed">
          {pick(
            locale,
            "Available for remote contracts, freelance missions, and full-time roles. I typically respond within 24 hours.",
            "Disponible pour des contrats remote, des missions freelance ou des postes à temps plein. Je réponds généralement sous 24 heures."
          )}
        </p>
      </div>
    </section>
  );
}
