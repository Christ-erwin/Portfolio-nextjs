import React from "react";
import PageHero from "@/components/PageHero";
import { pick, type Locale } from "@/lib/locale";

export default function SkillsSection1({ locale }: { locale: Locale }) {
  return (
    <PageHero
      eyebrow={pick(locale, "Skills & Tools", "Compétences & outils")}
      priority
      image="/images/Skills_Images/bg_Cover.jpg"
      title={
        <>
          {pick(locale, "My ", "Mon ")}
          <span className="grad-text">{pick(locale, "craft", "métier")}</span>
        </>
      }
      subtitle={pick(
        locale,
        "Design thinking backed by technical fluency. I speak both design and code.",
        "Une pensée design appuyée par une vraie fluidité technique. Je parle design et code."
      )}
    />
  );
}
