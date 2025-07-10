import React from "react";

export default function WaveSection1() {
  return (
    <div className="w-full h-max-fit flex justify-center items-center px-[5%] shadow-lg">
      <div
        className="w-full max-w-[2028px] h-[80vh] bg-cover bg-center flex justify-start items-end"
       style={{
          backgroundImage:
              "url('https://res.cloudinary.com/docanichi/image/upload/v1752175194/coverWaveBg_iyypz9.jpg')",
           }}
      >
        <div className="mb-[3%] ml-[3%]  ">
          <div>
            <div className="mb-[10%]">
              <p
                className="text-white text-4xl 2xl:text-7xl font-bold"
              >
                Wave{" "}
              </p>
            </div>
            <div className="mb-7">
              <p className="text-white text-lg 2xl:text-2xl font-semibold">
                Redesign of a money-working<br/> application Popular in African countries
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
