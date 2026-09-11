import React from "react";
import PageHero from "@/components/PageHero";

export default function FoodygoSection1() {
  return (
    <PageHero
      eyebrow="Personal Project · FoodTech · Mobile App"
      priority
      image="https://res.cloudinary.com/docanichi/image/upload/v1752175190/coverFoodygoBg_khronn.png"
      title="FoodyGo"
      subtitle="A smart restaurant ordering app — from menu browsing to real-time delivery tracking."
      tags={["UX Research", "UI Design", "Mobile", "E-commerce UX", "Figma", "Prototyping"]}
    />
  );
}
