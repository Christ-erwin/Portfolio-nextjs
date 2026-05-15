import BoxProject from "@/components/BoxProject";
import React from "react";

export default function ProjectsSection2() {
  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <BoxProject
          backgroundImage="/images/Project_Images/homelinkBg.png"
          title="HOMELINK"
          description={"Smart Home App · Client Project — Pommy \nFull product design — UX research, architecture, UI, prototype"}
          link="/projects/homelink"
          featured={true}
        />
        <div className="grid md:grid-cols-2 gap-6">
          <BoxProject backgroundImage="/images/Project_Images/waveBg.png" title="WAVE"
            description={"Mobile money app redesign\nPersonal project · Fintech · West Africa"} link="/projects/wave" />
          <BoxProject backgroundImage="/images/Project_Images/moovyflixBg.png" title="MOOVYFLIX"
            description={"Streaming app design from scratch\nPersonal project · Entertainment"} link="/projects/moovyflix" />
          <BoxProject backgroundImage="/images/Project_Images/grippleBg.png" title="GRIPPLE"
            description={"Social networking app concept\nPersonal project · Social media"} link="/projects/gripple" />
          <BoxProject backgroundImage="/images/Project_Images/foodygoBg.png" title="FOODYGO"
            description={"Restaurant ordering app\nPersonal project · Food delivery"} link="/projects/foodygo" />
        </div>
      </div>
    </section>
  );
}
