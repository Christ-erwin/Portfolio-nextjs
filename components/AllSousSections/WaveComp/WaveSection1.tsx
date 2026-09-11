import React from "react";
import PageHero from "@/components/PageHero";
import { pick, type Locale } from "@/lib/locale";

export default function WaveSection1({ locale }: { locale: Locale }) {
  return (
    <PageHero
      eyebrow={pick(
        locale,
        "Personal Project · Fintech · Redesign",
        "Projet personnel · Fintech · Refonte"
      )}
      priority
      image="https://res.cloudinary.com/docanichi/image/upload/v1752175194/coverWaveBg_iyypz9.jpg"
      title="Wave"
      subtitle={pick(
        locale,
        "Redesigning a mobile money app trusted by millions across West Africa.",
        "Refonte d'une application mobile money utilisée par des millions de personnes en Afrique de l'Ouest."
      )}
      tags={
        pick(
          locale,
          ["UX Audit", "UI Redesign", "Mobile", "Figma", "Fintech"],
          ["Audit UX", "Refonte UI", "Mobile", "Figma", "Fintech"]
        )
      }
    />
  );
}
