import type { Metadata } from "next";
import ContactSection1 from "@/components/AllSections/ContactComp/ContactSection1";
import ContactSection2 from "@/components/AllSections/ContactComp/ContactSection2";
import { getLocale } from "@/lib/locale.server";
import { pick } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: "Contact",
    description: pick(
      locale,
      "Available for remote contracts, freelance missions, and full-time roles. I typically respond within 24 hours.",
      "Disponible pour des contrats remote, des missions freelance ou des postes à temps plein. Je réponds généralement sous 24 heures."
    ),
  };
}

export default async function ContactPage() {
  const locale = await getLocale();
  return (
    <div className="flex flex-col">
      <ContactSection1 locale={locale} />
      <ContactSection2 locale={locale} />
    </div>
  );
}
