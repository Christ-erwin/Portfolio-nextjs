"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaBehance } from "react-icons/fa6";

const icons = [
  {
    name: "Linkedin",
    icon: FaLinkedin,
    color: "text-white",
    url: "https://www.linkedin.com/in/christ-erwin-fram-696a69257/",
  },
  {
    name: "Behance",
    icon: FaBehance,
    color: "text-white",
    url: "https://www.behance.net/christerwinfram",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-white",
    url: "https://github.com/Christ-erwin",
  },
];

export default function Footer() {
  return (
    <div className="w-full h-fit flex justify-between items-center gap-6 bg-black px-[5%] py-[5px] flex-wrap">
      <div>
        <p className="text-white font-light text-center text-base">
          © 2025 Christ-erwin Fram. All rights reserved. 
        </p>
      </div>

      <div>
        <p className="text-white font-light text-center text-base">
           ✉️{" "}
          <a
            href="mailto:framchristerwintl.com"
            className="underline hover:text-[#FD23E3] transition-colors duration-300"
          >
            framchristerwintl.com
          </a>
        </p>
      </div>

      <div className="flex gap-4">
        {icons.map((item, i) => {
          const Icon = item.icon;
          return (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Icon className={`w-6 h-6 ${item.color}`} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
