import Link from "next/link";
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { pick, type Locale } from "@/lib/locale";

export default function PreFooter({ locale }: { locale: Locale }) {
  return (
    <section className="w-full py-24 px-6 flex flex-col items-center text-center gap-6 bg-surface">
      <p className="section-tag">
        {pick(locale, "Let's work together", "Travaillons ensemble")}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-ink max-w-xl leading-tight">
        {pick(locale, "Got a project in mind?", "Un projet en tête ?")}
        <br />
        <span className="grad-text">
          {pick(locale, "Let's build it.", "Construisons-le.")}
        </span>
      </h2>
      <p className="text-ink-muted max-w-md text-base leading-relaxed">
        {pick(
          locale,
          "I'm available for remote contracts, freelance missions, and full-time roles. Based in Abidjan — working with teams worldwide.",
          "Disponible pour des contrats remote, des missions freelance ou des postes à temps plein. Basé à Abidjan — je travaille avec des équipes partout dans le monde."
        )}
      </p>
      <div className="flex gap-4 flex-wrap justify-center mt-2">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 grad-bg text-white font-semibold px-8 py-3.5 rounded-full text-sm"
        >
          {pick(locale, "Contact me", "Me contacter")}{" "}
          <LuArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
        <a
          href="mailto:framchristerwintl@gmail.com"
          className="text-sm font-semibold text-ink border border-ink/15 px-8 py-3.5 rounded-full hover:bg-surface-alt transition-colors"
        >
          framchristerwintl@gmail.com
        </a>
      </div>
    </section>
  );
}
