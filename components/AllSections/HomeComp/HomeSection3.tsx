'use client'
import React from "react";
import Link from "next/link";
import { useState } from 'react'


export default function HomeSection3() {
    const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="group w-full h-screen"
     onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        <div
        className="w-full h-full flex flex-col justify-center items-center gap-6 bg-cover bg-center px-[5%] transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: isHovered
            ? `url('https://res.cloudinary.com/docanichi/image/upload/v1752175190/bgSection3Dark_fn3fir.jpg')`
            : `url('/images/Home_Images/bgSection3White.png')`,
        }}
      >
        <div className="px-6 py-4">
          <p
            className="text-2xl md:text-4xl font-semibold text-center text-black 
        group-hover:text-white transition-colors duration-700 ease-in-out"
          >
            I shape your ideas into a creative vision
          </p>
        </div>
        <div className="flex gap-36 2xl:gap-64 ">
          <div className="flex flex-col justify-center items-center gap-10 px-6 py-4">
            <div>
              <img
                src="/images/Home_Images/Card1.png"
                alt="Description"
                className="max-w-[250px] 2xl:max-w-[500px]  h-auto"
              />
            </div>
            <Link href={"/projects"}>
            <div className="w-fit h-fit p-[2px] rounded-2xl bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA] transition-all duration-500 ease-in-out group">
              <div className="px-10 py-3 rounded-2xl bg-white group-hover:bg-transparent transition-all duration-500 ease-in-out flex flex-col justify-center items-center">
                <p
                  className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA]
        group-hover:text-white group-hover:bg-none transition-all duration-500 ease-in-out"
                >
                  View my visual
                </p>
              </div>
            </div>
            </Link>
          </div>

          <div className="hidden md:flex flex-col justify-center items-center gap-10 px-6 py-4">
            <div>
              <img
                src="/images/Home_Images/Card2.png"
                alt="Description"
                className="max-w-[250px] 2xl:max-w-[500px]  h-auto"
              />
            </div>
            <div
              className="w-fit h-fit px-10 py-3 flex flex-col justify-center 
      items-center rounded-2xl  bg-gray-500"
            >
              <p className="text-white font-semibold">Not yet available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
