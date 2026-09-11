import type { Metadata } from "next";
import SkillsSection1 from "@/components/AllSections/SkillsComp/SkillsSection1";
import SkillsSection2 from "@/components/AllSections/SkillsComp/SkillsSection2";
import PreFooter from "@/components/PreFooter";
import { getLocale } from "@/lib/locale.server";
import { pick } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, "Skills & Tools", "Compétences & outils"),
    description: pick(
      locale,
      "Design thinking backed by technical fluency — Figma, UX research, design systems, React Native, Next.js and Tailwind.",
      "Une pensée design appuyée par une vraie fluidité technique — Figma, recherche UX, design systems, React Native, Next.js et Tailwind."
    ),
  };
}

export default async function SkillsPage() {
  const locale = await getLocale();
  return (
    <div className="flex flex-col">
      <SkillsSection1 locale={locale} />
      <SkillsSection2 locale={locale} />
      <PreFooter locale={locale} />
    </div>
  );
}
