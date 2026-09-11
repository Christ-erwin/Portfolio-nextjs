import React from "react";
import PageHero from "@/components/PageHero";

export default function SkillsSection1() {
  return (
    <PageHero
      eyebrow="Skills & Tools"
      priority
      image="/images/Skills_Images/bg_Cover.jpg"
      title={
        <>
          My <span className="grad-text">craft</span>
        </>
      }
      subtitle="Design thinking backed by technical fluency. I speak both design and code."
    />
  );
}
