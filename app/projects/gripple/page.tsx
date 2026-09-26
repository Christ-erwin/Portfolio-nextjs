import type { Metadata } from "next";
import GrippleSection1 from "@/components/AllSousSections/GrippleComp/GrippleSection1";
import GrippleSection2 from "@/components/AllSousSections/GrippleComp/GrippleSection2";
import PreFooter from "@/components/PreFooter";
import { getLocale } from "@/lib/locale.server";
import { projectMetadata } from "@/lib/projects";

export async function generateMetadata(): Promise<Metadata> {
  return projectMetadata("gripple", await getLocale());
}

export default async function GripplePage() {
  const locale = await getLocale();
  return (
    <div className="flex flex-col">
      <GrippleSection1 locale={locale} />
      <GrippleSection2 locale={locale} />
      <PreFooter locale={locale} />
    </div>
  );
}
