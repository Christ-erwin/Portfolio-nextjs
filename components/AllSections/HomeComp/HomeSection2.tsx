import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaUpwork, FaGithub, FaBehance } from "react-icons/fa6";
import {
  LuSearch,
  LuPalette,
  LuCodeXml,
  LuComponent,
  LuExternalLink,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import { pick, type Locale } from "@/lib/locale";

const socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    color: "#0A66C2",
    url: "https://www.linkedin.com/in/christ-erwin-fram-696a69257/",
  },
  {
    name: "Behance",
    icon: FaBehance,
    color: "#0052FE",
    url: "https://www.behance.net/christerwinfram",
  },
  {
    name: "Dribbble",
    icon: TbBrandDribbbleFilled,
    color: "#C2306E",
    url: "https://dribbble.com/erwin270",
  },
  {
    name: "Upwork",
    icon: FaUpwork,
    color: "#0E7A00",
    url: "https://www.upwork.com/freelancers/~010c58c0b2c056db71",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#111111",
    url: "https://github.com/Christ-erwin",
  },
];

export default function HomeSection2({ locale }: { locale: Locale }) {
  const services: { icon: IconType; title: string; desc: string }[] = [
    {
      icon: LuSearch,
      title: pick(locale, "UX Research", "Recherche UX"),
      desc: pick(
        locale,
        "User interviews, competitive analysis, usability audits to understand the problem before solving it.",
        "Interviews utilisateurs, analyse concurrentielle, audits d'utilisabilité pour comprendre le problème avant de le résoudre."
      ),
    },
    {
      icon: LuPalette,
      title: pick(locale, "UI Design", "Design UI"),
      desc: pick(
        locale,
        "High-fidelity mockups, design systems, and interactive Figma prototypes ready for handoff.",
        "Maquettes haute-fidélité, design systems et prototypes Figma interactifs prêts pour le handoff."
      ),
    },
    {
      icon: LuCodeXml,
      title: pick(locale, "Frontend Dev", "Développement Frontend"),
      desc: pick(
        locale,
        "React Native, React JS, Tailwind — I implement designs with precision and speed.",
        "React Native, React JS, Tailwind — j'implémente les designs avec précision et rapidité."
      ),
    },
    {
      icon: LuComponent,
      title: pick(locale, "Design Systems", "Design Systems"),
      desc: pick(
        locale,
        "Scalable component libraries that keep products consistent as they grow.",
        "Des bibliothèques de composants évolutives qui gardent les produits cohérents à mesure qu'ils grandissent."
      ),
    },
  ];

  return (
    <section className="w-full bg-surface-alt py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {/* Services */}
        <div>
          <p className="section-tag">{pick(locale, "What I do", "Ce que je fais")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-10 max-w-lg">
            {pick(locale, "Design that's beautiful", "Un design à la fois beau")}
            <br />
            {pick(locale, "and ", "et ")}
            <span className="grad-text">
              {pick(locale, "buildable", "réalisable")}
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-surface rounded-2xl p-6 border border-line hover:shadow-md transition-shadow duration-300"
                >
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-tint text-brand mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <p className="font-semibold text-ink text-base mb-2">
                    {s.title}
                  </p>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Find me on */}
        <div>
          <p className="section-tag">{pick(locale, "Find me on", "Retrouvez-moi sur")}</p>
          <ul className="flex flex-wrap gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-surface border border-line rounded-2xl px-5 py-3 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
                  >
                    <Icon
                      style={{ color: s.color }}
                      className="w-5 h-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-ink">
                      {s.name}
                    </span>
                    <LuExternalLink
                      className="w-3.5 h-3.5 text-ink-subtle"
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      ({pick(locale, "opens in a new tab", "ouvre un nouvel onglet")})
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
