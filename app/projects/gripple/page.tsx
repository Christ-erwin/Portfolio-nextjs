import type { Metadata } from "next";
import GrippleSection1 from "@/components/AllSousSections/GrippleComp/GrippleSection1";
import GrippleSection2 from "@/components/AllSousSections/GrippleComp/GrippleSection2";
import PreFooter from "@/components/PreFooter";
import { getLocale } from "@/lib/locale.server";
import { pick } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, "Gripple — Social Network Concept", "Gripple — Concept de réseau social"),
    description: pick(
      locale,
      "A minimalist social network designed for meaningful, distraction-free interaction.",
      "Un réseau social minimaliste conçu pour des interactions sincères, sans distraction."
    ),
  };
}

export default async function GripplePage() {
  const locale = await getLocale();
  return (
    <div className="flex flex-col">
      <GrippleSection1 locale={locale} />
      <GrippleSection2 locale={locale} />
      <PreFooter locale={locale} />
    </div>
  );
}
