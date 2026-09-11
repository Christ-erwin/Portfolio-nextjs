import type { Metadata } from "next";
import MoovyFlixSection1 from "@/components/AllSousSections/MoovyFlix/MoovyFlixSection1";
import MoovyFlixSection2 from "@/components/AllSousSections/MoovyFlix/MoovyFlixSection2";
import PreFooter from "@/components/PreFooter";

export const metadata: Metadata = {
  title: "MoovyFlix — Streaming App Concept",
  description:
    "Designing a modern streaming experience from scratch — immersive, personalized and intuitive.",
};

export default function MoovyFlixPage() {
  return (
    <div className="flex flex-col">
      <MoovyFlixSection1 />
      <MoovyFlixSection2 />
      <PreFooter />
    </div>
  );
}
