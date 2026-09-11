import React from "react";
import PageHero from "@/components/PageHero";

export default function ProjectsSection1() {
  return (
    <PageHero
      eyebrow="Portfolio"
      priority
      image="https://res.cloudinary.com/docanichi/image/upload/v1778835491/Frame_79c%CC%A72_l9zbwy.jpg"
      title={
        <>
          Work that speaks
          <br />
          <span className="grad-text">for itself</span>
        </>
      }
      subtitle="Each project is a story — a problem, a process, and a solution."
    />
  );
}
