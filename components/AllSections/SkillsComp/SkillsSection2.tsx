import React from "react";
import type { IconType } from "react-icons";
import CredentialCard from "@/components/CredentialCard";
import { pick, type Locale } from "@/lib/locale";
import {
  LuPalette,
  LuCodeXml,
  LuWrench,
  LuMicroscope,
  LuHandshake,
  LuTarget,
  LuZap,
  LuTimer,
  LuLightbulb,
} from "react-icons/lu";

type BiText = { en: string; fr: string };
type Tier = "Expert" | "Proficient" | "Working";

const tierLabel: Record<Tier, BiText> = {
  Expert: { en: "Expert", fr: "Expert" },
  Proficient: { en: "Proficient", fr: "Confirmé" },
  Working: { en: "Working knowledge", fr: "Notions" },
};

const tierStyle: Record<Tier, string> = {
  Expert: "bg-brand text-white",
  Proficient: "bg-brand-tint text-brand-strong",
  Working: "bg-surface-sunken text-ink-subtle",
};

const hardSkills: {
  category: BiText;
  icon: IconType;
  skills: { name: string; tier: Tier }[];
}[] = [
  {
    category: { en: "UX/UI Design", fr: "Design UX/UI" },
    icon: LuPalette,
    skills: [
      { name: "Figma", tier: "Expert" },
      { name: "Wireframing & Prototyping", tier: "Expert" },
      { name: "Interaction Design", tier: "Proficient" },
      { name: "UX Research & Audits", tier: "Proficient" },
      { name: "User Journey Mapping", tier: "Proficient" },
      { name: "Design Systems", tier: "Proficient" },
      { name: "Accessibility (WCAG)", tier: "Proficient" },
    ],
  },
  {
    category: { en: "Frontend Development", fr: "Développement Frontend" },
    icon: LuCodeXml,
    skills: [
      { name: "HTML / CSS / Tailwind", tier: "Proficient" },
      { name: "React Native / React JS", tier: "Proficient" },
      { name: "Next.js", tier: "Proficient" },
      { name: "Expo", tier: "Proficient" },
      { name: "Dev–Design Handoff", tier: "Proficient" },
      { name: "JavaScript / TypeScript", tier: "Working" },
      { name: "NestJS / GraphQL", tier: "Working" },
    ],
  },
  {
    category: { en: "Tools & Workflow", fr: "Outils & workflow" },
    icon: LuWrench,
    skills: [
      { name: "VS Code", tier: "Expert" },
      { name: "FigJam", tier: "Proficient" },
      { name: "Notion", tier: "Proficient" },
      { name: "Git / GitHub", tier: "Proficient" },
      { name: "Slack / Linear / Jira", tier: "Working" },
    ],
  },
];

const softSkills: { icon: IconType; t: BiText; d: BiText }[] = [
  {
    icon: LuMicroscope,
    t: { en: "Analytical thinking", fr: "Pensée analytique" },
    d: {
      en: "I break problems down before jumping to solutions.",
      fr: "Je décompose les problèmes avant de me jeter sur les solutions.",
    },
  },
  {
    icon: LuHandshake,
    t: { en: "Cross-functional collaboration", fr: "Collaboration transverse" },
    d: {
      en: "Comfortable working with devs, PMs, and stakeholders.",
      fr: "À l'aise avec les devs, les PM et les parties prenantes.",
    },
  },
  {
    icon: LuTarget,
    t: { en: "User advocacy", fr: "Défense de l'utilisateur" },
    d: {
      en: "I defend design decisions with rationale and user evidence.",
      fr: "Je défends mes décisions de design avec des arguments et des preuves utilisateur.",
    },
  },
  {
    icon: LuZap,
    t: { en: "Autonomy & initiative", fr: "Autonomie & initiative" },
    d: {
      en: "Self-directed and proactive — I work without hand-holding.",
      fr: "Autonome et proactif — je travaille sans qu'on me tienne la main.",
    },
  },
  {
    icon: LuTimer,
    t: { en: "Time management", fr: "Gestion du temps" },
    d: {
      en: "Remote-first: async, focused, reliable on deadlines.",
      fr: "Remote-first : async, concentré, fiable sur les délais.",
    },
  },
  {
    icon: LuLightbulb,
    t: { en: "Creative problem-solving", fr: "Résolution créative de problèmes" },
    d: {
      en: "I look for the simplest solution to the hardest problem.",
      fr: "Je cherche la solution la plus simple au problème le plus complexe.",
    },
  },
];

export default function SkillsSection2({ locale }: { locale: Locale }) {
  const t = (b: BiText) => pick(locale, b.en, b.fr);

  return (
    <section className="w-full bg-surface px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        {/* Hard Skills */}
        <div>
          <p className="section-tag">{pick(locale, "Hard Skills", "Compétences techniques")}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-xs text-ink-subtle">
            {(Object.keys(tierStyle) as Tier[]).map((tier) => (
              <span key={tier} className="inline-flex items-center gap-1.5">
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${
                    tierStyle[tier].split(" ")[0]
                  }`}
                />
                {t(tierLabel[tier])}
              </span>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {hardSkills.map(({ category, icon: Icon, skills }) => (
              <div key={category.en} className="bg-surface-alt rounded-2xl p-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-tint text-brand mb-3">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <p className="font-semibold text-ink mb-4">{t(category)}</p>
                <ul className="flex flex-col gap-2.5">
                  {skills.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center justify-between gap-3"
                    >
                      <span className="text-sm text-ink-muted">{s.name}</span>
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full flex-shrink-0 ${
                          tierStyle[s.tier]
                        }`}
                      >
                        {t(tierLabel[s.tier])}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <p className="section-tag">{pick(locale, "Soft Skills", "Compétences humaines")}</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map(({ icon: Icon, t: title, d }) => (
              <div
                key={title.en}
                className="border border-line rounded-2xl p-5 hover:border-brand/30 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-tint text-brand mb-3">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <p className="font-semibold text-ink mb-1">{t(title)}</p>
                <p className="text-ink-muted text-sm leading-relaxed">{t(d)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <p className="section-tag">{pick(locale, "Languages", "Langues")}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-surface-alt rounded-2xl p-5">
              <p className="font-semibold text-ink">
                {pick(locale, "French", "Français")}
              </p>
              <p className="text-sm text-ink-subtle mt-1">
                {pick(locale, "Native", "Natif")}
              </p>
            </div>
            <div className="bg-surface-alt rounded-2xl p-5">
              <p className="font-semibold text-ink">
                {pick(locale, "English", "Anglais")}
              </p>
              <p className="text-sm text-ink-subtle mt-1">
                {pick(
                  locale,
                  "Intermediate (B2) — strong professional written communication, actively improving spoken fluency.",
                  "Intermédiaire (B2) — bonne communication écrite professionnelle, amélioration active de l'oral."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <p className="section-tag">{pick(locale, "Certifications", "Certifications")}</p>
          <CredentialCard locale={locale} />
        </div>
      </div>
    </section>
  );
}
