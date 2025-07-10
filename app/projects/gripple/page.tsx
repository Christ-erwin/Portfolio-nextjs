import GrippleSection1 from "@/components/AllSousSections/GrippleComp/GrippleSection1";
import GrippleSection2 from "@/components/AllSousSections/GrippleComp/GrippleSection2";
import Menu from "@/components/Menu";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-[#F2F8FC] overflow-hidden flex flex-col">
        <Menu />
        <GrippleSection1 />
        <GrippleSection2 />
      </div>
    </>
  );
}