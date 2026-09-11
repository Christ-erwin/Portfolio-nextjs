import React from "react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import BoxProject from "@/components/BoxProject";
import { pick, type Locale } from "@/lib/locale";

export default function HomeSection3({ locale }: { locale: Locale }) {
  return (
    <section className="w-full bg-surface py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
          <div>
            <p className="section-tag">{pick(locale, "Selected work", "Travaux sélectionnés")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink">
              {pick(locale, "Recent projects", "Projets récents")}
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted hover:text-ink transition-colors"
          >
            {pick(locale, "View all projects", "Voir tous les projets")}{" "}
            <LuArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <BoxProject
            locale={locale}
            backgroundImage="/images/Project_Images/homelinkBg.png"
            title="HOMELINK"
            description={pick(
              locale,
              "Smart Home App · Pommy\nFull product design — UX research to final UI",
              "Application maison connectée · Pommy\nDesign produit complet — de la recherche UX à l'UI finale"
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
                "Mobile money app redesign\nPopular across West Africa",
                "Refonte d'une app mobile money\nPopulaire en Afrique de l'Ouest"
              )}
              link="/projects/wave"
            />
            <BoxProject
              locale={locale}
              backgroundImage="/images/Project_Images/moovyflixBg.png"
              title="MOOVYFLIX"
              description={pick(
                locale,
                "Streaming app design\nFull UX/UI from scratch",
                "Design d'une app de streaming\nUX/UI complet, conçu de zéro"
              )}
              link="/projects/moovyflix"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
