import SkillsSection1 from "@/components/AllSections/SkillsComp/SkillsSection1";
import SkillsSection2 from "@/components/AllSections/SkillsComp/SkillsSection2";
import Menu from "@/components/Menu";
import PreFooter from "@/components/PreFooter";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-[#F2F8FC] overflow-hidden flex flex-col">
        <Menu />
        <SkillsSection1 />
        <SkillsSection2 />
        <PreFooter />
      </div>
    </>
  );
}