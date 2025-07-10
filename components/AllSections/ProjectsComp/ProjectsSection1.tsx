import React from "react";

export default function ProjectsSection1() {
  return (
    <div className="w-full h-max-fit flex justify-center items-center  ">
      <div
      className="w-full h-[60vh] md:h-[80vh] bg-cover bg-center flex justify-start items-end px-[5%]"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/docanichi/image/upload/v1752175191/bgCoverPj_aooeko.jpg')",
      }}
    >
        <div className="mb-[6%] ml-[1%]  ">
          <div>
            <div className="mb-[1%] 2xl:mb-[10%]">
              <p
                className="text-transparent bg-clip-text bg-gradient-to-r 
               from-[#FD23E3] via-[#8021E8] to-[#0619EA] text-4xl md:text-6xl 2xl:text-8xl font-bold"
              >
                Good design is when the user <br /> doesn&apos;t even realize
                it&apos;s been <br />
                designed.{" "}
              </p>
            </div>
            <div className="mb-7">
              <p className="text-black/50 text-lg ">
                Interface design isn&apos;t something you see,<br /> it&apos;s something you
                feel. My goal: to make<br /> every interaction fluid, intuitive and<br />
                memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
