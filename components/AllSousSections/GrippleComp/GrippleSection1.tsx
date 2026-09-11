import React from "react";
import PageHero from "@/components/PageHero";
import { pick, type Locale } from "@/lib/locale";

export default function GrippleSection1({ locale }: { locale: Locale }) {
  return (
    <PageHero
      eyebrow={pick(
        locale,
        "Personal Project · Social Media · Mobile App",
        "Projet personnel · Réseau social · App mobile"
      )}
      priority
      image="https://res.cloudinary.com/docanichi/image/upload/v1752175191/coverGrippleBg_gltgte.png"
      title="Gripple"
      subtitle={pick(
        locale,
        "A minimalist social network designed for meaningful, distraction-free interaction.",
        "Un réseau social minimaliste conçu pour des interactions sincères, sans distraction."
      )}
      tags={pick(
        locale,
        ["UX Research", "UI Design", "Social App", "Mobile", "Figma", "Prototyping"],
        ["Recherche UX", "Design UI", "App sociale", "Mobile", "Figma", "Prototypage"]
      )}
    />
  );
}
