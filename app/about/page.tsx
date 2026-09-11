import type { Metadata } from "next";
import AboutSection1 from "@/components/AllSections/AboutComp/AboutSection1";
import AboutSection2 from "@/components/AllSections/AboutComp/AboutSection2";
import PreFooter from "@/components/PreFooter";
import { getLocale } from "@/lib/locale.server";
import { pick } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, "About", "À propos"),
    description: pick(
      locale,
      "Product Designer and Frontend Developer with 4+ years designing mobile and web products across fintech, smart home, real estate, and entertainment.",
      "Product Designer et développeur frontend avec 4+ ans d'expérience en design de produits mobiles et web dans la fintech, la maison connectée, l'immobilier et le divertissement."
    ),
  };
}

export default async function AboutPage() {
  const locale = await getLocale();
  return (
    <div className="flex flex-col">
      <AboutSection1 locale={locale} />
      <AboutSection2 locale={locale} />
      <PreFooter locale={locale} />
    </div>
  );
}
