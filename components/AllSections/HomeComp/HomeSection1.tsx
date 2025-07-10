'use client';
import Link from "next/link";
import React from "react";
import { useEffect, useState } from 'react'


export default function HomeSection1() {

  const [bgImage, setBgImage] = useState('/images/Home_Images/bgResponsive.jpg')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setBgImage('https://res.cloudinary.com/docanichi/image/upload/v1752175188/coverLarge_hzrzlw.jpg');
      } else {
        setBgImage('/images/Home_Images/bgResponsive.jpg');
      }
    };

    // Appel initial
    handleResize();

    // Écoute les changements de taille d'écran
    window.addEventListener('resize', handleResize);

    // Nettoyage à la destruction du composant
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="w-full h-max-fit flex justify-center items-center px-[5%] ">
      <div
      className="w-full h-[100vh] md:h-screen bg-cover bg-center flex justify-between lg:justify-start items-center"
      style={{ backgroundImage: `url('${bgImage}')`}}
      >
        <div className="w-full flex flex-col justify-center items-center lg:hidden gap-9">
          <div
            className="w-[20vh] h-[20vh] bg-amber-700 rounded-full bg-[url('/images/Home_Images/myFace.JPG')]
            bg-cover bg-center"
            style={{
          backgroundImage:"url('https://res.cloudinary.com/docanichi/image/upload/v1752175194/myFace_wuyvpn.jpg')",
}}
          ></div>
          <div>
            <p className="text-black text-4xl font-bold text-center">
              👋Hi, I’m Christ erwin Ui/UX Designer, Developer front-end
            </p>
          </div>
          <Link href={"/contact"}>
            <div
              className="w-fit h-fit px-10 py-3 flex flex-col justify-center
              items-center rounded-2xl  bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA]"
            >
              <p className="text-white font-semibold">Contact-me</p>
            </div>
          </Link>
        </div>
        <div className="absolute bottom-[28%] left-[23%] hidden lg:block">
          <Link href={"/contact"}>
          <div
            className="w-fit h-fit px-10 py-3 flex flex-col justify-center 
            items-center rounded-2xl  bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA]"
          >
            <p className="text-white font-semibold">Contact-me</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
