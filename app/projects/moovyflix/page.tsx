import type { Metadata } from "next";
import MoovyFlixSection1 from "@/components/AllSousSections/MoovyFlix/MoovyFlixSection1";
import MoovyFlixSection2 from "@/components/AllSousSections/MoovyFlix/MoovyFlixSection2";
import PreFooter from "@/components/PreFooter";
import { getLocale } from "@/lib/locale.server";
import { projectMetadata } from "@/lib/projects";

export async function generateMetadata(): Promise<Metadata> {
  return projectMetadata("moovyflix", await getLocale());
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
