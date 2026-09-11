import React from "react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import BoxProject from "@/components/BoxProject";

export default function HomeSection3() {
  return (
    <section className="w-full bg-surface py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
          <div>
            <p className="section-tag">Selected work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink">
              Recent projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted hover:text-ink transition-colors"
          >
            View all projects <LuArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <BoxProject
            backgroundImage="/images/Project_Images/homelinkBg.png"
            title="HOMELINK"
            description={
              "Smart Home App · Pommy\nFull product design — UX research to final UI"
            }
            link="/projects/homelink"
            featured
            priority
          />
          <div className="grid md:grid-cols-2 gap-6">
            <BoxProject
              backgroundImage="/images/Project_Images/waveBg.png"
              title="WAVE"
              description={
                "Mobile money app redesign\nPopular across West Africa"
              }
              link="/projects/wave"
            />
            <BoxProject
              backgroundImage="/images/Project_Images/moovyflixBg.png"
              title="MOOVYFLIX"
              description={"Streaming app design\nFull UX/UI from scratch"}
              link="/projects/moovyflix"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
