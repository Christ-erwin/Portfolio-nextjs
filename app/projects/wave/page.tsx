import type { Metadata } from "next";
import WaveSection1 from "@/components/AllSousSections/WaveComp/WaveSection1";
import WaveSection2 from "@/components/AllSousSections/WaveComp/WaveSection2";
import PreFooter from "@/components/PreFooter";
import { getLocale } from "@/lib/locale.server";
import { projectMetadata } from "@/lib/projects";

export async function generateMetadata(): Promise<Metadata> {
  return projectMetadata("wave", await getLocale());
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
