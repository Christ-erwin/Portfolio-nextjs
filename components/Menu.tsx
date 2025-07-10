"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";


export default function Menu() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

   const showBackButtonOn = [
    "/projects/wave",
    "/projects/moovyflix",
    "/projects/gripple",
    "/projects/foodygo",
  ];

  const showBackButton = showBackButtonOn.includes(pathname);


  return (
    <div className="fixed top-4 left-0 w-full z-50">
      <div className="w-full block md:flex justify-between h-fit px-[5%] ">
        <div>
          <Link href="/">
            <img
              src="/images/Logo_Img/logo.png"
              alt="Logo"
              className="max-w-[90px] md:max-w-[115px] 2xl:max-w-[150px] h-auto cursor-pointer"
            />
          </Link>
        </div>

        <div className="w-fit flex justify-center items-center py-4">
          <nav
            className="flex gap-6 px-8 py-3 rounded-full bg-white/25 backdrop-blur-md 
            border-b-2 border-[#5DB5FF]"
          >
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link key={index} href={item.href}>
                  <p
                    className={`text-lg font-medium transition-all duration-300 ease-in-out ${
                      isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA]"
                        : "text-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FD23E3] hover:via-[#8021E8] hover:to-[#0619EA]"
                    }`}
                  >
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      {showBackButton && (
      <div>
        <div onClick={() => router.back()}
          className="w-14 h-14 md:w-14 md:h-14 ml-[6%] mt-[1%] bg-[#FD23E3] rounded-full
          flex justify-center items-center cursor-pointer hover:bg-[#1E1BEA] 
          transition-colors duration-300">
          <FaArrowLeft color="white" className="w-6 h-auto" />
        </div>
      </div>
      )}
    </div>
  );
}
