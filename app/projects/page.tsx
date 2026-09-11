import type { Metadata } from "next";
import ProjectsSection1 from "@/components/AllSections/ProjectsComp/ProjectsSection1";
import ProjectsSection2 from "@/components/AllSections/ProjectsComp/ProjectsSection2";
import ClientWork from "@/components/ClientWork";
import PreFooter from "@/components/PreFooter";
import { getLocale } from "@/lib/locale.server";
import { pick } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: pick(locale, "Projects", "Projets"),
    description: pick(
      locale,
      "One client project and four self-initiated case studies — problem, constraints, decisions and how I measure success. Client work for Orange, Yoomi and Dughu summarised under NDA.",
      "Un projet client et quatre études de cas auto-initiées — problème, contraintes, décisions et mesure du succès. Travail client pour Orange, Yoomi et Dughu résumé sous NDA."
    ),
  };
}

export default async function ProjectsPage() {
  const locale = await getLocale();
  return (
    <div className="flex flex-col">
      <ProjectsSection1 locale={locale} />
      <ProjectsSection2 locale={locale} />
      <ClientWork locale={locale} />
      <PreFooter locale={locale} />
    </div>
  );
}
