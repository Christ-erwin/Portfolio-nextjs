import type { Metadata } from "next";
import ProjectsSection1 from "@/components/AllSections/ProjectsComp/ProjectsSection1";
import ProjectsSection2 from "@/components/AllSections/ProjectsComp/ProjectsSection2";
import ClientWork from "@/components/ClientWork";
import PreFooter from "@/components/PreFooter";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "One client project and four self-initiated case studies — problem, constraints, decisions and how I measure success. Client work for Orange, Yoomi and Dughu summarised under NDA.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <ProjectsSection1 />
      <ProjectsSection2 />
      <ClientWork />
      <PreFooter />
    </div>
  );
}
