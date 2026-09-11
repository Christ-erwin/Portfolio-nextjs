import HomeSection1 from "@/components/AllSections/HomeComp/HomeSection1";
import HomeSection2 from "@/components/AllSections/HomeComp/HomeSection2";
import HomeSection3 from "@/components/AllSections/HomeComp/HomeSection3";
import Testimonials from "@/components/Testimonials";
import SiteCredit from "@/components/SiteCredit";
import PreFooter from "@/components/PreFooter";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <Testimonials />
      <SiteCredit />
      <PreFooter />
    </div>
  );
}
