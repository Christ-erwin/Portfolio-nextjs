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
      "Wave — Unsolicited Concept Redesign",
      "Wave — Refonte conceptuelle non sollicitée"
    ),
    description: pick(
      locale,
      "An unsolicited concept redesign of a mobile money app used by millions across West Africa — not affiliated with or endorsed by Wave.",
      "Une refonte conceptuelle non sollicitée d'une application mobile money utilisée par des millions de personnes en Afrique de l'Ouest — non affiliée à Wave."
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
