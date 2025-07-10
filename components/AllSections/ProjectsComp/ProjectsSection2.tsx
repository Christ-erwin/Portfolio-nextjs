import BoxProject from "@/components/BoxProject";
import React from "react";

export default function ProjectsSection2() {
  return (
    <div className="w-full h-auto bg-white rounded-t-none md:rounded-t-[120px] px-[5%] py-[4%]">
  <div className="flex flex-wrap justify-between items-center gap-10">
    <div className="w-full md:w-[48%]">
      <BoxProject
        backgroundImage="/images/Project_Images/wavebg.png"
        title="WAVE"
        description={`Redesign of a money-working application\nPopular in African countries`}
        link="/projects/wave"
      />
    </div>
    <div className="w-full md:w-[48%]">
      <BoxProject
        backgroundImage="/images/Project_Images/moovyflixBg.png"
        title="MOOVYFLIX"
        description={`Creation of a streaming application\nfor all types of content`}
        link="/projects/moovyflix"
      />
    </div>
    <div className="w-full md:w-[48%]">
      <BoxProject
        backgroundImage="/images/Project_Images/grippleBg.png"
        title="GRIPPLE"
        description={`Creating a social networking application\n conducive to meaningful interaction.`}
        link="/projects/gripple"
      />
    </div>
    <div className="w-full md:w-[48%]">
      <BoxProject
        backgroundImage="/images/Project_Images/foodygoBg.png"
        title="FOODYGO"
        description={`Creation of a smart restaurant app\n for managing menus, orders.`}
        link="/projects/foodygo"
      />
    </div>
  </div>
</div>
  );
}
