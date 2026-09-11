import React from "react";
import PageHero from "@/components/PageHero";
import { pick, type Locale } from "@/lib/locale";

export default function FoodygoSection1({ locale }: { locale: Locale }) {
  return (
    <PageHero
      eyebrow={pick(
        locale,
        "Personal Project · FoodTech · Mobile App",
        "Projet personnel · FoodTech · App mobile"
      )}
      priority
      image="https://res.cloudinary.com/docanichi/image/upload/v1752175190/coverFoodygoBg_khronn.png"
      title="FoodyGo"
      subtitle={pick(
        locale,
        "A smart restaurant ordering app — from menu browsing to real-time delivery tracking.",
        "Une app de commande de restaurant intelligente — de la navigation au menu au suivi de livraison en temps réel."
      )}
      tags={pick(
        locale,
        ["UX Research", "UI Design", "Mobile", "E-commerce UX", "Figma", "Prototyping"],
        ["Recherche UX", "Design UI", "Mobile", "UX e-commerce", "Figma", "Prototypage"]
      )}
    />
  );
}
