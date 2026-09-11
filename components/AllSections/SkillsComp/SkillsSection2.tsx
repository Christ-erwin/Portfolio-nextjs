import React from "react";
import type { IconType } from "react-icons";
import CredentialCard from "@/components/CredentialCard";
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

type Tier = "Expert" | "Proficient" | "Working knowledge";

const tierStyle: Record<Tier, string> = {
  Expert: "bg-brand text-white",
  Proficient: "bg-brand-tint text-brand-strong",
  "Working knowledge": "bg-surface-sunken text-ink-subtle",
};

const hardSkills: {
  category: string;
  icon: IconType;
  skills: { name: string; tier: Tier }[];
}[] = [
  {
    category: "UX/UI Design",
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
    category: "Frontend Development",
    icon: LuCodeXml,
    skills: [
      { name: "HTML / CSS / Tailwind", tier: "Proficient" },
      { name: "React Native / React JS", tier: "Proficient" },
      { name: "Next.js", tier: "Proficient" },
      { name: "Expo", tier: "Proficient" },
      { name: "Dev–Design Handoff", tier: "Proficient" },
      { name: "JavaScript / TypeScript", tier: "Working knowledge" },
      { name: "NestJS / GraphQL", tier: "Working knowledge" },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: LuWrench,
    skills: [
      { name: "VS Code", tier: "Expert" },
      { name: "FigJam", tier: "Proficient" },
      { name: "Notion", tier: "Proficient" },
      { name: "Git / GitHub", tier: "Proficient" },
      { name: "Slack / Linear / Jira", tier: "Working knowledge" },
    ],
  },
];

const softSkills: { icon: IconType; t: string; d: string }[] = [
  {
    icon: LuMicroscope,
    t: "Analytical thinking",
    d: "I break problems down before jumping to solutions.",
  },
  {
    icon: LuHandshake,
    t: "Cross-functional collaboration",
    d: "Comfortable working with devs, PMs, and stakeholders.",
  },
  {
    icon: LuTarget,
    t: "User advocacy",
    d: "I defend design decisions with rationale and user evidence.",
  },
  {
    icon: LuZap,
    t: "Autonomy & initiative",
    d: "Self-directed and proactive — I work without hand-holding.",
  },
  {
    icon: LuTimer,
    t: "Time management",
    d: "Remote-first: async, focused, reliable on deadlines.",
  },
  {
    icon: LuLightbulb,
    t: "Creative problem-solving",
    d: "I look for the simplest solution to the hardest problem.",
  },
];

export default function SkillsSection2() {
  return (
    <section className="w-full bg-surface px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        {/* Hard Skills */}
        <div>
          <p className="section-tag">Hard Skills</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-xs text-ink-subtle">
            {(Object.keys(tierStyle) as Tier[]).map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <span
                  className={`inline-block w-2.5 h-2.5 rounded-full ${
                    tierStyle[t].split(" ")[0]
                  }`}
                />
                {t}
              </span>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {hardSkills.map(({ category, icon: Icon, skills }) => (
              <div key={category} className="bg-surface-alt rounded-2xl p-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-tint text-brand mb-3">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <p className="font-semibold text-ink mb-4">{category}</p>
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
                        {s.tier === "Working knowledge" ? "Working" : s.tier}
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
          <p className="section-tag">Soft Skills</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="border border-line rounded-2xl p-5 hover:border-brand/30 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-tint text-brand mb-3">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <p className="font-semibold text-ink mb-1">{t}</p>
                <p className="text-ink-muted text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <p className="section-tag">Languages</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-surface-alt rounded-2xl p-5">
              <p className="font-semibold text-ink">French</p>
              <p className="text-sm text-ink-subtle mt-1">Native</p>
            </div>
            <div className="bg-surface-alt rounded-2xl p-5">
              <p className="font-semibold text-ink">English</p>
              <p className="text-sm text-ink-subtle mt-1">
                Intermediate (B2) — strong professional written communication,
                actively improving spoken fluency.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <p className="section-tag">Certifications</p>
          <CredentialCard />
        </div>
      </div>
    </section>
  );
}
