"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

const showBackButtonOn = [
  "/projects/wave",
  "/projects/moovyflix",
  "/projects/gripple",
  "/projects/foodygo",
  "/projects/homelink",
];

export default function Menu() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const showBackButton = showBackButtonOn.includes(pathname);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <img
            src="/images/Logo_Img/logo.svg"
            alt="Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors duration-200 ${
                pathname === l.href
                  ? "font-semibold text-black"
                  : "text-black/50 hover:text-black"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact">
            <span className="text-sm font-semibold text-white grad-bg px-5 py-2 rounded-full">
              Hire me
            </span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Back button */}
      {showBackButton && (
        <div
          onClick={() => router.back()}
          className="w-14 h-14 ml-[6%] mt-[1%] bg-[#FD23E3] rounded-full
          flex justify-center items-center cursor-pointer hover:bg-[#1E1BEA]
          transition-colors duration-300"
        >
          <FaArrowLeft color="white" className="w-6 h-auto" />
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm ${pathname === l.href ? "font-semibold text-black" : "text-black/60"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            <span className="text-sm font-semibold text-white grad-bg px-5 py-2 rounded-full inline-block">
              Hire me
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}