import type { Metadata } from "next";
import HomeLinkSection1 from "@/components/AllSousSections/HomeLinkComp/HomeLinkSection1";
import HomeLinkSection2 from "@/components/AllSousSections/HomeLinkComp/HomeLinkSection2";
import PreFooter from "@/components/PreFooter";

export const metadata: Metadata = {
  title: "HomeLink — Smart Home App",
  description:
    "Full product design for a smart home app — buy, install and control connected devices from one place. UX research to final UI.",
};

export default function HomeLinkPage() {
  return (
    <div className="flex flex-col">
      <HomeLinkSection1 />
      <HomeLinkSection2 />
      <PreFooter />
    </div>
  );
}
