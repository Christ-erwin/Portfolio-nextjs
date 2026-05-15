"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaGithub, FaBehance } from "react-icons/fa6";

const socials = [
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/christ-erwin-fram-696a69257/", label: "LinkedIn" },
  { icon: FaBehance, url: "https://www.behance.net/christerwinfram", label: "Behance" },
  { icon: TbBrandDribbbleFilled, url: "https://dribbble.com/erwin270", label: "Dribbble" },
  { icon: FaGithub, url: "https://github.com/Christ-erwin", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-6">
        <Link href="/" className="text-white font-bold text-lg">CE<span className="grad-text">.FRAM</span></Link>
        <p className="text-white/40 text-sm">© 2025 Christ Erwin Fram. All rights reserved.</p>
        <div className="flex gap-5">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/40 hover:text-white transition-colors duration-200">
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
