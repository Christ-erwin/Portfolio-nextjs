import React from "react";
import Link from "next/link";
import BoxProject from "@/components/BoxProject";

export default function HomeSection3() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
          <div>
            <p className="section-tag">Selected work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Recent projects
            </h2>
          </div>
          <Link href="/projects">
            <span className="text-sm font-semibold text-black/60 hover:text-black transition-colors">
              View all projects →
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <BoxProject
            backgroundImage="/images/Project_Images/homelinkBg.png"
            title="HOMELINK"
            description={"Smart Home App · Pommy\nFull product design — UX research to final UI"}
            link="/projects/homelink"
            featured={true}
          />
          <div className="grid md:grid-cols-2 gap-6">
            <BoxProject
              backgroundImage="/images/Project_Images/waveBg.png"
              title="WAVE"
              description={"Mobile money app redesign\nPopular across West Africa"}
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
