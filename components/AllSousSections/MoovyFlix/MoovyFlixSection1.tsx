import React from "react";
import PageHero from "@/components/PageHero";
import { pick, type Locale } from "@/lib/locale";

export default function MoovyFlixSection1({ locale }: { locale: Locale }) {
  return (
    <PageHero
      eyebrow={pick(
        locale,
        "Personal Project · Entertainment · Mobile App",
        "Projet personnel · Divertissement · App mobile"
      )}
      priority
      image="https://res.cloudinary.com/docanichi/image/upload/v1752175192/coverMoovyFlixBg_uzm9ha.jpg"
      title="MoovyFlix"
      subtitle={pick(
        locale,
        "Designing a modern streaming experience from scratch — immersive, personalized, and intuitive.",
        "Concevoir une expérience de streaming moderne de zéro — immersive, personnalisée et intuitive."
      )}
      tags={pick(
        locale,
        ["UX Research", "UI Design", "Prototyping", "Design System", "Dark UI", "Figma"],
        ["Recherche UX", "Design UI", "Prototypage", "Design System", "Dark UI", "Figma"]
      )}
    />
  );
}
