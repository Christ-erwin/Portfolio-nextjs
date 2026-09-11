import React from "react";
import { LuCode, LuGauge, LuAccessibility, LuGithub } from "react-icons/lu";
import { pick, type Locale } from "@/lib/locale";

const REPO_URL = "https://github.com/Christ-erwin";

export default function SiteCredit({ locale }: { locale: Locale }) {
  const points = [
    {
      icon: LuCode,
      text: pick(
        locale,
        "Designed and built by me — Next.js (App Router), React 19, TypeScript and Tailwind CSS.",
        "Conçu et développé par moi-même — Next.js (App Router), React 19, TypeScript et Tailwind CSS."
      ),
    },
    {
      icon: LuAccessibility,
      text: pick(
        locale,
        "Accessibility-minded: semantic landmarks, visible focus, keyboard support, reduced-motion, AA contrast.",
        "Pensé accessibilité : repères sémantiques, focus visible, navigation clavier, réduction de mouvement, contraste AA."
      ),
    },
    {
      icon: LuGauge,
      text: pick(
        locale,
        "Server-rendered and image-optimised for fast loads on any connection.",
        "Rendu serveur et images optimisées pour un chargement rapide sur toutes les connexions."
      ),
    },
  ];

  return (
    <section className="w-full bg-black px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="section-tag !text-white/70">
          {pick(locale, "About this site", "À propos de ce site")}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white max-w-xl leading-tight">
          {pick(
            locale,
            "The portfolio is the case study —",
            "Ce portfolio est lui-même une étude de cas —"
          )}{" "}
          <span className="grad-text">
            {pick(locale, "I designed and coded it.", "je l'ai conçu et codé.")}
          </span>
        </h2>
        <ul className="mt-6 grid sm:grid-cols-3 gap-4">
          {points.map(({ icon: Icon, text }) => (
            <li key={text} className="rounded-2xl border border-white/15 p-5">
              <Icon className="w-5 h-5 text-white/80 mb-3" aria-hidden="true" />
              <p className="text-sm text-white/70 leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:opacity-80 transition-opacity"
        >
          <LuGithub className="w-4 h-4" aria-hidden="true" />
          {pick(locale, "See my code on GitHub", "Voir mon code sur GitHub")}
          <span className="sr-only">
            ({pick(locale, "opens in a new tab", "ouvre un nouvel onglet")})
          </span>
        </a>
      </div>
    </section>
  );
}
