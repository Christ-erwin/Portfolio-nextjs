import React from "react";

export default function ContactSection1() {
  return (
    <div className="w-full h-max-fit flex justify-center items-center px-[5%] ">
      <div
        className="w-full max-w-[2028px] h-[60vh] md:h-screen bg-[#F2F8FC] md:bg-[url('/images/Contact_Images/bgCover.jpg')] 
       bg-cover bg-center flex justify-start items-end"
      >
        <div className="mb-[6%] ml-[1%]  ">
          <div>
            <div className="mb-[40%]">
              <p
                className="text-transparent bg-clip-text bg-gradient-to-r 
               from-[#FD23E3] via-[#8021E8] to-[#0619EA] text-4xl md:text-6xl 2xl:text-8xl font-bold"
              >
                Keep it touch{" "}
              </p>
            </div>
            <div className="mb-7">
              <p className="text-black/50 text-lg ">
                Got a project in mind? Let&apos;s talk about it!<br />
                I&apos;m available for freelance or full-time collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
