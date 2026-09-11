import React from "react";
import PageHero from "@/components/PageHero";

export default function GrippleSection1() {
  return (
    <PageHero
      eyebrow="Personal Project · Social Media · Mobile App"
      priority
      image="https://res.cloudinary.com/docanichi/image/upload/v1752175191/coverGrippleBg_gltgte.png"
      title="Gripple"
      subtitle="A minimalist social network designed for meaningful, distraction-free interaction."
      tags={["UX Research", "UI Design", "Social App", "Mobile", "Figma", "Prototyping"]}
    />
  );
}
