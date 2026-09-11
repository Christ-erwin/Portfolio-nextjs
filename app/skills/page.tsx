import type { Metadata } from "next";
import SkillsSection1 from "@/components/AllSections/SkillsComp/SkillsSection1";
import SkillsSection2 from "@/components/AllSections/SkillsComp/SkillsSection2";
import PreFooter from "@/components/PreFooter";

export const metadata: Metadata = {
  title: "Skills & Tools",
  description:
    "Design thinking backed by technical fluency — Figma, UX research, design systems, React Native, Next.js and Tailwind.",
};

export default function SkillsPage() {
  return (
    <div className="flex flex-col">
      <SkillsSection1 />
      <SkillsSection2 />
      <PreFooter />
    </div>
  );
}
