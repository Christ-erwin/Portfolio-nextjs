import type { Metadata } from "next";
import GrippleSection1 from "@/components/AllSousSections/GrippleComp/GrippleSection1";
import GrippleSection2 from "@/components/AllSousSections/GrippleComp/GrippleSection2";
import PreFooter from "@/components/PreFooter";

export const metadata: Metadata = {
  title: "Gripple — Social Network Concept",
  description:
    "A minimalist social network designed for meaningful, distraction-free interaction.",
};

export default function GripplePage() {
  return (
    <div className="flex flex-col">
      <GrippleSection1 />
      <GrippleSection2 />
      <PreFooter />
    </div>
  );
}
