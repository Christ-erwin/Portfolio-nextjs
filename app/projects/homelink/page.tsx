import type { Metadata } from "next";
import HomeLinkSection1 from "@/components/AllSousSections/HomeLinkComp/HomeLinkSection1";
import HomeLinkSection2 from "@/components/AllSousSections/HomeLinkComp/HomeLinkSection2";
import PreFooter from "@/components/PreFooter";
import { getLocale } from "@/lib/locale.server";
import { projectMetadata } from "@/lib/projects";

export async function generateMetadata(): Promise<Metadata> {
  return projectMetadata("homelink", await getLocale());
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
