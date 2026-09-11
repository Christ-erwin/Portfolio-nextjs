import type { Metadata } from "next";
import WaveSection1 from "@/components/AllSousSections/WaveComp/WaveSection1";
import WaveSection2 from "@/components/AllSousSections/WaveComp/WaveSection2";
import PreFooter from "@/components/PreFooter";
import { getLocale } from "@/lib/locale.server";
import { pick } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(
      locale,
      "Wave — Mobile Money Redesign",
      "Wave — Refonte mobile money"
    ),
    description: pick(
      locale,
      "UX audit and UI redesign of a mobile money app trusted by millions across West Africa.",
      "Audit UX et refonte UI d'une application mobile money utilisée par des millions de personnes en Afrique de l'Ouest."
    ),
  };
}

export default async function WavePage() {
  const locale = await getLocale();
  return (
    <div className="flex flex-col">
      <WaveSection1 locale={locale} />
      <WaveSection2 locale={locale} />
      <PreFooter locale={locale} />
    </div>
  );
}
