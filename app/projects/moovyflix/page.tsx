import type { Metadata } from "next";
import MoovyFlixSection1 from "@/components/AllSousSections/MoovyFlix/MoovyFlixSection1";
import MoovyFlixSection2 from "@/components/AllSousSections/MoovyFlix/MoovyFlixSection2";
import PreFooter from "@/components/PreFooter";
import { getLocale } from "@/lib/locale.server";
import { pick } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(
      locale,
      "MoovyFlix — Streaming App Concept",
      "MoovyFlix — Concept d'app de streaming"
    ),
    description: pick(
      locale,
      "Designing a modern streaming experience from scratch — immersive, personalized and intuitive.",
      "Concevoir une expérience de streaming moderne de zéro — immersive, personnalisée et intuitive."
    ),
  };
}

export default async function MoovyFlixPage() {
  const locale = await getLocale();
  return (
    <div className="flex flex-col">
      <MoovyFlixSection1 locale={locale} />
      <MoovyFlixSection2 locale={locale} />
      <PreFooter locale={locale} />
    </div>
  );
}
