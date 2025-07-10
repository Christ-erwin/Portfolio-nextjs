import React from "react";
import { FaLinkedin, FaPinterest } from "react-icons/fa";
import { TbBrandFiverr, TbBrandDribbbleFilled } from "react-icons/tb";
import { FaUpwork, FaGithub, FaBehance } from "react-icons/fa6";


export default function HomeSection2() {

   const icons = [
    {
      name: "Fiverr",
      icon: TbBrandFiverr,
      color: "text-[#6DAC87]",
      url: "https://fr.fiverr.com/christerwinfram?public_mode=true",
    },
    {
      name: "Linkedin",
      icon: FaLinkedin,
      color: "text-[#0A66C2]",
      url: "https://www.linkedin.com/in/christ-erwin-fram-696a69257/",
    },
    {
      name: "Upwork",
      icon: FaUpwork,
      color: "text-black",
      url: "https://www.upwork.com/freelancers/~010c58c0b2c056db71",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      color: "text-black",
      url: "https://github.com/Christ-erwin",
    },
    {
      name: "Behance",
      icon: FaBehance,
      color: "text-[#0052FE]",
      url: "https://www.behance.net/christerwinfram",
    },
    {
      name: "Dribbble",
      icon: TbBrandDribbbleFilled,
      color: "text-[#E74D89]",
      url: "https://dribbble.com/erwin270",
    },
    {
      name: "Pinterest",
      icon: FaPinterest,
      color: "text-[#CB1F27]",
      url: "https://fr.pinterest.com/framchristerwintl/_profile/_created/",
    },
  ];

  return (
    <div className="w-auto h-fit lg:h-screen flex flex-col justify-center px-[5%] gap-6">
      <div className="w-auto h-auto  px-6 py-4">
        <p className="font-semibold text-2xl md:text-4xl text-black mb-6">
          You can find me on
        </p>
        <div className="flex gap-4 flex-wrap justify-between items-center">
          {icons.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group transition-all duration-300"
              >
                <div
                  className="w-24 h-24 rounded-full bg-gray-100 group-hover:bg-gradient-to-r
                    group-hover:from-[#FD23E3] group-hover:via-[#8021E8] group-hover:to-[#0619EA]
                    flex items-center justify-center shadow transition-all duration-700 ease-in-out"
                >
                  <Icon
                    className={`w-9 h-9 transition-colors duration-700 ease-in-out group-hover:text-white ${item.color}`}
                  />
                </div>
                <span className="mt-2 text-sm text-black">{item.name}</span>
              </a>
            );
          })}
        </div>
    
      </div>

      <div className="w-auto flex-1 ">
        <div className="w-full px-6 py-4 flex flex-wrap-reverse lg:flex-nowrap items-center justify-between">
          <div>
            <div>
              <p className="font-semibold text-2xl md:text-4xl text-black mb-6">
                Clean, attractive design
              </p>
            </div>
            <div className="text-black/50 text-lg ">
              <p className="font-bold">
                Designed to provide a fluid, modern and pleasant experience for
                every user.
              </p>
              <p className="leading-loose">
                Each interface is designed to capture attention right from the
                start, with a clean, harmonious, user-centric design. My goal:
                to enhance the value of your product while ensuring intuitive
                navigation and a memorable visual experience.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 hidden md:flex justify-center items-center ">
            <img src="/images/Home_Images/mockupMac.png" alt="Description" className="max-w-[300px] lg:max-w-[600px]  h-auto" />
          </div>

        </div>
      </div>
    </div>
  );
}
