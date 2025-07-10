import FoodygoSection1 from "@/components/AllSousSections/Foodygo/FoodygoSection1";
import FoodygoSection2 from "@/components/AllSousSections/Foodygo/FoodygoSection2";
import Menu from "@/components/Menu";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-[#F2F8FC] overflow-hidden flex flex-col ">
        <Menu />
        <FoodygoSection1 />
        <FoodygoSection2 />
      </div>
    </>
  );
}