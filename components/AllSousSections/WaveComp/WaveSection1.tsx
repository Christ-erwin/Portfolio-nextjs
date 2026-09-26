import React from "react";
import PageHero from "@/components/PageHero";
import { pick, type Locale } from "@/lib/locale";

export default function WaveSection1({ locale }: { locale: Locale }) {
  return (
    <PageHero
      badge={pick(locale, "Concept redesign", "Concept de refonte")}
      eyebrow={pick(
        locale,
        "Unsolicited · Self-initiated · Fintech",
        "Non sollicité · Auto-initié · Fintech"
      )}
      priority
      image="https://res.cloudinary.com/docanichi/image/upload/v1752175194/coverWaveBg_iyypz9.jpg"
      title="Wave"
      subtitle={pick(
        locale,
        "An unsolicited concept redesign of a mobile money app used by millions across West Africa — not affiliated with or endorsed by Wave.",
        "Une refonte conceptuelle non sollicitée d'une application mobile money utilisée par des millions de personnes en Afrique de l'Ouest — non affiliée à Wave et non approuvée par Wave."
      )}
      tags={pick(
        locale,
        ["Concept Redesign", "UX Audit", "Mobile", "Figma", "Fintech"],
        ["Refonte conceptuelle", "Audit UX", "Mobile", "Figma", "Fintech"]
      )}
    />
  );
}
