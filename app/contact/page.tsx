import type { Metadata } from "next";
import ContactSection1 from "@/components/AllSections/ContactComp/ContactSection1";
import ContactSection2 from "@/components/AllSections/ContactComp/ContactSection2";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Available for remote contracts, freelance missions, and full-time roles. I typically respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactSection1 />
      <ContactSection2 />
    </div>
  );
}
