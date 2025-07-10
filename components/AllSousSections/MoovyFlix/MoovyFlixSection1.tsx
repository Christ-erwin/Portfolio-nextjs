import React from "react";

export default function MoovyFlixSection1() {
  return (
    <div className="w-full h-max-fit flex justify-center items-center px-[5%] shadow-lg">
      <div
        className="w-full max-w-[2028px] h-[80vh]
       bg-cover bg-center flex justify-start items-end"
        style={{
    backgroundImage:
        "url('https://res.cloudinary.com/docanichi/image/upload/v1752175192/coverMoovyFlixBg_uzm9ha.jpg')",
     }}
      >
        <div className="mb-[3%] ml-[3%]  ">
          <div>
            <div className="mb-[10%]">
              <p
                className="text-white text-4xl 2xl:text-7xl font-bold"
              >
                MoovyFlix{" "}
              </p>
            </div>
            <div className="mb-7">
              <p className="text-white text-lg 2xl:text-2xl font-semibold">
                Creation of a streaming application<br/>  for all types of content
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
