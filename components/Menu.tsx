"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { LuArrowLeft } from "react-icons/lu";
import { pick, type Locale } from "@/lib/locale";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const links = (locale: Locale) => [
  { href: "/", label: pick(locale, "Home", "Accueil") },
  { href: "/projects", label: pick(locale, "Projects", "Projets") },
  { href: "/about", label: pick(locale, "About", "À propos") },
  { href: "/skills", label: pick(locale, "Skills", "Compétences") },
  { href: "/contact", label: "Contact" },
];

const showBackButtonOn = [
  "/projects/wave",
  "/projects/moovyflix",
  "/projects/gripple",
  "/projects/foodygo",
  "/projects/homelink",
];

export default function Menu({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const navLinks = links(locale);

  const showBackButton = showBackButtonOn.includes(pathname);

  const isActive = useCallback(
    (href: string) =>
      href === "/" ? pathname === "/" : pathname.startsWith(href),
    [pathname]
  );

  // Sticky background on scroll (passive + rAF throttled)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      aria-label={pick(locale, "Primary", "Principale")}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          aria-label={pick(locale, "Christ Erwin Fram — home", "Christ Erwin Fram — accueil")}
          className="flex items-center"
        >
          <Image
            src="/images/Logo_Img/logo.svg"
            alt="Christ Erwin Fram"
            width={132}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                isActive(l.href)
                  ? "font-semibold text-ink"
                  : "text-ink-subtle hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} className="ml-2" />
          <Link
            href="/contact"
            className="ml-1 text-sm font-semibold text-white grad-bg px-5 py-2.5 rounded-full"
          >
            {pick(locale, "Hire me", "Me contacter")}
          </Link>
        </div>

        {/* Mobile: language switcher + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            className="flex items-center justify-center w-11 h-11 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={
              open
                ? pick(locale, "Close menu", "Fermer le menu")
                : pick(locale, "Open menu", "Ouvrir le menu")
            }
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="relative block w-5 h-4" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 block w-5 h-0.5 bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block w-5 h-0.5 bg-ink transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 block w-5 h-0.5 bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Back button (case-study pages) */}
      {showBackButton && (
        <div className="max-w-6xl mx-auto px-6">
          <button
            type="button"
            onClick={() => router.back()}
            aria-label={pick(
              locale,
              "Go back to the previous page",
              "Revenir à la page précédente"
            )}
            className="mt-2 w-12 h-12 grad-bg rounded-full flex justify-center items-center text-white shadow-md hover:opacity-90 transition-opacity"
          >
            <LuArrowLeft className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="md:hidden bg-white border-t border-line px-6 py-4 flex flex-col gap-1"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`py-3 text-base ${
                isActive(l.href) ? "font-semibold text-ink" : "text-ink-subtle"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 text-sm font-semibold text-white grad-bg px-5 py-3 rounded-full inline-block text-center"
          >
            {pick(locale, "Hire me", "Me contacter")}
          </Link>
        </div>
      )}
    </nav>
  );
}
