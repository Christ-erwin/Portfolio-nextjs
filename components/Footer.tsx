import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaGithub, FaBehance } from "react-icons/fa6";

const socials = [
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/christ-erwin-fram-696a69257/",
    label: "LinkedIn",
  },
  {
    icon: FaBehance,
    url: "https://www.behance.net/christerwinfram",
    label: "Behance",
  },
  {
    icon: TbBrandDribbbleFilled,
    url: "https://dribbble.com/erwin270",
    label: "Dribbble",
  },
  { icon: FaGithub, url: "https://github.com/Christ-erwin", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-6">
        <Link href="/" className="text-white font-bold text-lg">
          CE<span className="grad-text">.FRAM</span>
        </Link>
        <p className="text-white/70 text-sm">
          © {new Date().getFullYear()} Christ Erwin Fram. All rights reserved.
        </p>
        <ul className="flex items-center gap-1">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in a new tab)`}
                  className="flex items-center justify-center w-11 h-11 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
