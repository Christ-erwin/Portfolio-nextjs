import MoovyFlixSection1 from "@/components/AllSousSections/MoovyFlix/MoovyFlixSection1";
import MoovyFlixSection2 from "@/components/AllSousSections/MoovyFlix/MoovyFlixSection2";
import Menu from "@/components/Menu";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-[#F2F8FC] overflow-hidden flex flex-col">
        <Menu />
        <MoovyFlixSection1 />
        <MoovyFlixSection2 />
      </div>
    </>
  );
}