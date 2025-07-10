import ProjectsSection1 from "@/components/AllSections/ProjectsComp/ProjectsSection1";
import ProjectsSection2 from "@/components/AllSections/ProjectsComp/ProjectsSection2";
import Menu from "@/components/Menu";
import PreFooter from "@/components/PreFooter";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-[#F2F8FC] overflow-hidden flex flex-col">
        <Menu />
        <ProjectsSection1 />
        <ProjectsSection2 />
        <PreFooter/>
      </div>
    </>
  );
}