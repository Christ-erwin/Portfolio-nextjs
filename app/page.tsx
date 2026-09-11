import HomeSection1 from "@/components/AllSections/HomeComp/HomeSection1";
import HomeSection2 from "@/components/AllSections/HomeComp/HomeSection2";
import HomeSection3 from "@/components/AllSections/HomeComp/HomeSection3";
import Testimonials from "@/components/Testimonials";
import SiteCredit from "@/components/SiteCredit";
import PreFooter from "@/components/PreFooter";
import { getLocale } from "@/lib/locale.server";

export default async function Home() {
  const locale = await getLocale();

  return (
    <div className="flex flex-col">
      <HomeSection1 locale={locale} />
      <HomeSection2 locale={locale} />
      <HomeSection3 locale={locale} />
      <Testimonials locale={locale} />
      <SiteCredit locale={locale} />
      <PreFooter locale={locale} />
    </div>
  );
}
