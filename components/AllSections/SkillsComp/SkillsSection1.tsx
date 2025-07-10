import React from "react";

export default function SkillsSection1() {
  return (
    <div className="w-full h-max-fit flex justify-center items-center  ">
      <div
        className="w-full h-[60vh] md:h-[80vh] bg-[url('/images/Skills_Images/bg_Cover.jpg')] bg-cover bg-center 
        flex justify-start items-end px-[5%]"
      >
        <div className="mb-[6%] ml-[1%]  ">
          <div> 
            <div className="mb-[20%] 2xl:mb-[40%]">
              <p
                className="text-transparent bg-clip-text bg-gradient-to-r 
               from-[#FD23E3] via-[#8021E8] to-[#0619EA] text-4xl md:text-6xl 2xl:text-8xl font-bold"
              >
                My skills art{" "}
              </p>
            </div>
            <div className="mb-7">
              <p className="text-black/50 text-lg ">
               With a passion for user-centered design and modern interface
              development, I master a range of tools and<br /> technologies to
              create effective, aesthetic and functional digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
