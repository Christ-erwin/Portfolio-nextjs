import type { Metadata } from "next";
import FoodygoSection1 from "@/components/AllSousSections/Foodygo/FoodygoSection1";
import FoodygoSection2 from "@/components/AllSousSections/Foodygo/FoodygoSection2";
import PreFooter from "@/components/PreFooter";

export const metadata: Metadata = {
  title: "FoodyGo — Restaurant Ordering App",
  description:
    "A smart restaurant ordering app — from menu browsing to real-time delivery tracking.",
};

export default function FoodygoPage() {
  return (
    <div className="flex flex-col">
      <FoodygoSection1 />
      <FoodygoSection2 />
      <PreFooter />
    </div>
  );
}
