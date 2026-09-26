import type { Metadata } from "next";
import FoodygoSection1 from "@/components/AllSousSections/Foodygo/FoodygoSection1";
import FoodygoSection2 from "@/components/AllSousSections/Foodygo/FoodygoSection2";
import PreFooter from "@/components/PreFooter";
import { getLocale } from "@/lib/locale.server";
import { projectMetadata } from "@/lib/projects";

export async function generateMetadata(): Promise<Metadata> {
  return projectMetadata("foodygo", await getLocale());
}

export default async function FoodygoPage() {
  const locale = await getLocale();
  return (
    <div className="flex flex-col">
      <FoodygoSection1 locale={locale} />
      <FoodygoSection2 locale={locale} />
      <PreFooter locale={locale} />
    </div>
  );
}
