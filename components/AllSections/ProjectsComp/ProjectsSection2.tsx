import BoxProject from "@/components/BoxProject";
import React from "react";
import { pick, type Locale } from "@/lib/locale";

export default function ProjectsSection2({ locale }: { locale: Locale }) {
  return (
    <section className="w-full bg-surface px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="max-w-2xl">
          <p className="section-tag">{pick(locale, "Case studies", "Études de cas")}</p>
          <p className="text-ink-muted leading-relaxed">
            {pick(
              locale,
              "One client project (published with permission) and four self-initiated projects I use to work through the full design process. Each write-up covers the problem, the constraints, the decisions and how I'd measure success. My work for Orange, Yoomi and Dughu is under NDA — summarised further down.",
              "Un projet client (publié avec autorisation) et quatre projets auto-initiés qui me servent à travailler le processus de design de bout en bout. Chaque étude couvre le problème, les contraintes, les décisions et la façon dont je mesurerais le succès. Mon travail pour Orange, Yoomi et Dughu est sous NDA — résumé plus bas."
            )}
          </p>
        </div>

        <BoxProject
          locale={locale}
          backgroundImage="/images/Project_Images/homelinkBg.png"
          title="HOMELINK"
          description={pick(
            locale,
            "Smart home app · Client project — Pommy\nFull product design — research, architecture, UI, prototype",
            "Application maison connectée · Projet client — Pommy\nDesign produit complet — recherche, architecture, UI, prototype"
          )}
          link="/projects/homelink"
          featured
          priority
        />
        <div className="grid md:grid-cols-2 gap-6">
          <BoxProject
            locale={locale}
            backgroundImage="/images/Project_Images/waveBg.png"
            title="WAVE"
            description={pick(
              locale,
              "Mobile-money redesign concept\nSelf-initiated · Fintech · UX audit + redesign",
              "Concept de refonte mobile-money\nAuto-initié · Fintech · Audit UX + refonte"
            )}
            link="/projects/wave"
          />
          <BoxProject
            locale={locale}
            backgroundImage="/images/Project_Images/moovyflixBg.png"
            title="MOOVYFLIX"
            description={pick(
              locale,
              "Streaming app, designed from scratch\nSelf-initiated · Entertainment · Design system",
              "App de streaming conçue de zéro\nAuto-initié · Divertissement · Design system"
            )}
            link="/projects/moovyflix"
          />
          <BoxProject
            locale={locale}
            backgroundImage="/images/Project_Images/grippleBg.png"
            title="GRIPPLE"
            description={pick(
              locale,
              "Calm social network concept\nSelf-initiated · Social · Constraint-driven design",
              "Concept de réseau social apaisé\nAuto-initié · Social · Design par contraintes"
            )}
            link="/projects/gripple"
          />
          <BoxProject
            locale={locale}
            backgroundImage="/images/Project_Images/foodygoBg.png"
            title="FOODYGO"
            description={pick(
              locale,
              "Restaurant ordering app + brand\nSelf-initiated · FoodTech · Brand-to-product",
              "App de commande resto + identité de marque\nAuto-initié · FoodTech · De la marque au produit"
            )}
            link="/projects/foodygo"
          />
        </div>
      </div>
    </section>
  );
}
