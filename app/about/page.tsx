import type { Metadata } from "next";
import AboutSection1 from "@/components/AllSections/AboutComp/AboutSection1";
import AboutSection2 from "@/components/AllSections/AboutComp/AboutSection2";
import PreFooter from "@/components/PreFooter";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product Designer and Frontend Developer with 4+ years designing mobile and web products across fintech, smart home, real estate, and entertainment.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutSection1 />
      <AboutSection2 />
      <PreFooter />
    </div>
  );
}
