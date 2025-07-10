import ContactSection1 from "@/components/AllSections/ContactComp/ContactSection1";
import ContactSection2 from "@/components/AllSections/ContactComp/ContactSection2";
import Menu from "@/components/Menu";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-[#F2F8FC] overflow-hidden flex flex-col">
        <Menu />
        <ContactSection1 />
        <ContactSection2 />
      </div>
    </>
  );
}