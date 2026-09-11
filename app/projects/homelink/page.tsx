import type { Metadata } from "next";
import HomeLinkSection1 from "@/components/AllSousSections/HomeLinkComp/HomeLinkSection1";
import HomeLinkSection2 from "@/components/AllSousSections/HomeLinkComp/HomeLinkSection2";
import PreFooter from "@/components/PreFooter";
import { getLocale } from "@/lib/locale.server";
import { pick } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, "HomeLink — Smart Home App", "HomeLink — App maison connectée"),
    description: pick(
      locale,
      "Full product design for a smart home app — buy, install and control connected devices from one place. UX research to final UI.",
      "Design produit complet pour une app maison connectée — acheter, installer et contrôler des appareils connectés depuis un seul endroit. De la recherche UX à l'UI finale."
    ),
  };
}

export default async function HomeLinkPage() {
  const locale = await getLocale();
  return (
    <div className="flex flex-col">
      <HomeLinkSection1 locale={locale} />
      <HomeLinkSection2 locale={locale} />
      <PreFooter locale={locale} />
    </div>
  );
}
