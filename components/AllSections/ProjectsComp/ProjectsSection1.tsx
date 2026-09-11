import React from "react";
import PageHero from "@/components/PageHero";
import { pick, type Locale } from "@/lib/locale";

export default function ProjectsSection1({ locale }: { locale: Locale }) {
  return (
    <PageHero
      eyebrow={pick(locale, "Portfolio", "Portfolio")}
      priority
      image="https://res.cloudinary.com/docanichi/image/upload/v1778835491/Frame_79c%CC%A72_l9zbwy.jpg"
      title={
        <>
          {pick(locale, "Work that speaks", "Un travail qui parle")}
          <br />
          <span className="grad-text">
            {pick(locale, "for itself", "de lui-même")}
          </span>
        </>
      }
      subtitle={pick(
        locale,
        "Each project is a story — a problem, a process, and a solution.",
        "Chaque projet est une histoire — un problème, un processus et une solution."
      )}
    />
  );
}
