import AboutSection1 from "@/components/AllSections/AboutComp/AboutSection1";
import AboutSection2 from "@/components/AllSections/AboutComp/AboutSection2";
import Menu from "@/components/Menu";
import PreFooter from "@/components/PreFooter";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-[#F2F8FC] overflow-hidden flex flex-col">
        <Menu />
        <AboutSection1 />
        <AboutSection2 />
        <PreFooter/>
      </div>
    </>
  );
}
