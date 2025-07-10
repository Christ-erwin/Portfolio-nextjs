import React from "react";

export default function AboutSection1() {
  return (
    <div className="w-full h-max-fit flex justify-center items-center px-[5%] ">
      <div
        className="w-full max-w-[2028px] h-[60vh] md:h-screen bg-[#F2F8FC] md:bg-[url('/images/About_Images/AboutbgMain.jpg')] 
        bg-cover bg-center flex justify-start items-center"
      >
        <div className="mb-[6%] ml-[5%] ">
          <div>
            <div className="mb-7">
              <p className="text-black/50 text-lg ">Your favorite</p>
            </div>
            <div  className="mb-16">
                <p className="text-transparent bg-clip-text bg-gradient-to-r 
                from-[#FD23E3] via-[#8021E8] to-[#0619EA] text-4xl md:text-6xl 2xl:text-8xl font-bold">
              UI/UX Designer </p>
            </div>
            <div>
             <p className="text-transparent bg-clip-text bg-gradient-to-r 
             from-[#FD23E3] via-[#8021E8] to-[#0619EA] text-4xl md:text-6xl 2xl:text-8xl font-bold">
              Developer front-end</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
