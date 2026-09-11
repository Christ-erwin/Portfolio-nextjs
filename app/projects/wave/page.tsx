import type { Metadata } from "next";
import WaveSection1 from "@/components/AllSousSections/WaveComp/WaveSection1";
import WaveSection2 from "@/components/AllSousSections/WaveComp/WaveSection2";
import PreFooter from "@/components/PreFooter";

export const metadata: Metadata = {
  title: "Wave — Mobile Money Redesign",
  description:
    "UX audit and UI redesign of a mobile money app trusted by millions across West Africa.",
};

export default function WavePage() {
  return (
    <div className="flex flex-col">
      <WaveSection1 />
      <WaveSection2 />
      <PreFooter />
    </div>
  );
}
