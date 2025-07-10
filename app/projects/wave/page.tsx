import WaveSection1 from "@/components/AllSousSections/WaveComp/WaveSection1";
import WaveSection2 from "@/components/AllSousSections/WaveComp/WaveSection2";
import Menu from "@/components/Menu";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-[#F2F8FC] overflow-hidden flex flex-col">
        <Menu />
        <WaveSection1 />
        <WaveSection2 />
      </div>
    </>
  );
}