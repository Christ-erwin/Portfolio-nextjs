// pages/index.tsx
import HomeSection1 from "@/components/AllSections/HomeComp/HomeSection1";
import HomeSection2 from "@/components/AllSections/HomeComp/HomeSection2";
import HomeSection3 from "@/components/AllSections/HomeComp/HomeSection3";
import HomeSection4 from "@/components/PreFooter";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div className="bg-[#F2F8FC] overflow-hidden flex flex-col gap-24">
      <Menu />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
    </div>
  );
}