import type { Metadata } from "next";
import FoodygoSection1 from "@/components/AllSousSections/Foodygo/FoodygoSection1";
import FoodygoSection2 from "@/components/AllSousSections/Foodygo/FoodygoSection2";
import PreFooter from "@/components/PreFooter";
import { getLocale } from "@/lib/locale.server";
import { pick } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, "FoodyGo — Restaurant Ordering App", "FoodyGo — App de commande de restaurant"),
    description: pick(
      locale,
      "A smart restaurant ordering app — from menu browsing to real-time delivery tracking.",
      "Une app de commande de restaurant intelligente — de la navigation au menu au suivi de livraison en temps réel."
    ),
  };
}

export default async function FoodygoPage() {
  const locale = await getLocale();
  return (
    <div className="flex flex-col">
      <FoodygoSection1 locale={locale} />
      <FoodygoSection2 locale={locale} />
      <PreFooter locale={locale} />
    </div>
  );
}
