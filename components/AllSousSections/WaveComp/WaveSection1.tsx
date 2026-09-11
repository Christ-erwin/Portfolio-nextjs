import React from "react";
import PageHero from "@/components/PageHero";

export default function WaveSection1() {
  return (
    <PageHero
      eyebrow="Personal Project · Fintech · Redesign"
      priority
      image="https://res.cloudinary.com/docanichi/image/upload/v1752175194/coverWaveBg_iyypz9.jpg"
      title="Wave"
      subtitle="Redesigning a mobile money app trusted by millions across West Africa."
      tags={["UX Audit", "UI Redesign", "Mobile", "Figma", "Fintech"]}
    />
  );
}
