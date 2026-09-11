import BoxProject from "@/components/BoxProject";
import React from "react";

export default function ProjectsSection2() {
  return (
    <section className="w-full bg-surface px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="max-w-2xl">
          <p className="section-tag">Case studies</p>
          <p className="text-ink-muted leading-relaxed">
            One client project (published with permission) and four self-initiated
            projects I use to work through the full design process. Each write-up
            covers the problem, the constraints, the decisions and how I&apos;d
            measure success. My work for Orange, Yoomi and Dughu is under NDA —
            summarised further down.
          </p>
        </div>

        <BoxProject
          backgroundImage="/images/Project_Images/homelinkBg.png"
          title="HOMELINK"
          description={
            "Smart home app · Client project — Pommy\nFull product design — research, architecture, UI, prototype"
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
              "Mobile-money redesign concept\nSelf-initiated · Fintech · UX audit + redesign"
            }
            link="/projects/wave"
          />
          <BoxProject
            backgroundImage="/images/Project_Images/moovyflixBg.png"
            title="MOOVYFLIX"
            description={
              "Streaming app, designed from scratch\nSelf-initiated · Entertainment · Design system"
            }
            link="/projects/moovyflix"
          />
          <BoxProject
            backgroundImage="/images/Project_Images/grippleBg.png"
            title="GRIPPLE"
            description={
              "Calm social network concept\nSelf-initiated · Social · Constraint-driven design"
            }
            link="/projects/gripple"
          />
          <BoxProject
            backgroundImage="/images/Project_Images/foodygoBg.png"
            title="FOODYGO"
            description={
              "Restaurant ordering app + brand\nSelf-initiated · FoodTech · Brand-to-product"
            }
            link="/projects/foodygo"
          />
        </div>
      </div>
    </section>
  );
}
