import React from "react";
import type { IconType } from "react-icons";
import CredentialCard from "@/components/CredentialCard";
import {
  LuMapPin,
  LuGlobe,
  LuClock,
  LuMessagesSquare,
  LuPenTool,
  LuCodeXml,
  LuSearch,
  LuPalette,
  LuFrame,
  LuUsersRound,
  LuRocket,
  LuTarget,
  LuComponent,
  LuFileCheck,
  LuFlaskConical,
} from "react-icons/lu";

const quickFacts: { icon: IconType; k: string; v: string }[] = [
  { icon: LuMapPin, k: "Based in", v: "Abidjan, Côte d'Ivoire" },
  { icon: LuClock, k: "Timezone", v: "GMT (UTC+0) · async-friendly" },
  { icon: LuGlobe, k: "Availability", v: "Remote · Worldwide" },
  { icon: LuMessagesSquare, k: "Languages", v: "French (native) · English (B2)" },
  { icon: LuPenTool, k: "Primary tool", v: "Figma" },
  { icon: LuCodeXml, k: "Dev stack", v: "React Native · Next.js · Tailwind" },
];

const experience = [
  {
    period: "2026 – Present",
    role: "UI/UX Designer",
    co: "Orange Côte d'Ivoire (via Synelia)",
    desc: "Designing and refining core user flows and interfaces for one of West Africa's largest telecom operators, alongside product and engineering.",
  },
  {
    period: "2024 – 2026",
    role: "UI/UX Designer — sole designer",
    co: "Yoomi",
    desc: "Full product design across four products (smart home, real-estate investment, property management, restaurant booking): research, information architecture, high-fidelity UI, design systems, and prototypes used directly in testing and dev handoff.",
  },
  {
    period: "Feb – May 2025",
    role: "Consultant UI/UX Designer",
    co: "Dughu",
    desc: "End-to-end UX audits with strategic recommendations for conversion and retention. Delivered wireframes, modern UI and interactive prototypes for web and mobile, aligned with business goals.",
  },
  {
    period: "2022 – 2024",
    role: "Web Developer & UI/UX Designer",
    co: "Wegam",
    desc: "UX/UI mockups and prototypes for gaming-platform features used by active users. Worked with the frontend team to bridge design intent and implementation.",
  },
];

const education = [
  {
    period: "2026",
    title: "Google UX Design Professional Certificate",
    org: "Coursera",
  },
  {
    period: "2022 – Present",
    title: "Self-directed UX/UI design training",
    org: "Coursera · YouTube · personal projects",
  },
  {
    period: "2021 – 2022",
    title: "Bachelor's Degree (Licence 3)",
    org: "ESMA, Abidjan",
  },
  {
    period: "2020 – 2021",
    title: "BTS — Application Development (IT)",
    org: "ESMA, Abidjan",
  },
  {
    period: "2018 – 2019",
    title: "Baccalauréat",
    org: "Collège le Figuier, Abidjan",
  },
];

const principles: { icon: IconType; t: string; d: string }[] = [
  {
    icon: LuTarget,
    t: "Start with the problem, not the screen",
    d: "I map the flow and its failure points before opening Figma. If I can't state the problem in one sentence, the design isn't ready.",
  },
  {
    icon: LuComponent,
    t: "Design in systems",
    d: "Tokens, components, and every state — empty, loading, error, edge. The product stays coherent as it grows and as the team changes.",
  },
  {
    icon: LuFileCheck,
    t: "Build for handoff",
    d: "Realistic content, specified states, annotated decisions. Engineers get a spec that builds without a dozen clarification threads.",
  },
  {
    icon: LuFlaskConical,
    t: "Ship and learn",
    d: "I'd rather test a rough version with five people than polish a guess. The goal is a product that works, not a portfolio shot.",
  },
];

const services: { icon: IconType; t: string; d: string }[] = [
  {
    icon: LuSearch,
    t: "UX Research & Audits",
    d: "User interviews, competitive analysis, usability audits, personas, and journey mapping.",
  },
  {
    icon: LuPalette,
    t: "UI Design",
    d: "High-fidelity mockups, design systems, component libraries, and Figma handoff.",
  },
  {
    icon: LuFrame,
    t: "Wireframing & Prototyping",
    d: "Low to high fidelity wireframes, interactive prototypes for user testing.",
  },
  {
    icon: LuCodeXml,
    t: "Frontend Implementation",
    d: "React Native, React JS, Next.js, Tailwind — I ship what I design.",
  },
  {
    icon: LuUsersRound,
    t: "Remote Collaboration",
    d: "Async-first, Figma-native, comfortable with Notion, Slack, Jira, Linear.",
  },
  {
    icon: LuRocket,
    t: "MVP Design",
    d: "Fast, focused design for early-stage products that need to ship and learn.",
  },
];

export default function AboutSection2() {
  return (
    <section className="w-full bg-surface px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        {/* Bio */}
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 flex flex-col gap-5">
            <p className="text-ink text-lg leading-relaxed">
              I started in code. I studied application development and built apps
              in React Native and Next.js — but the problems I found most
              interesting were upstream: not <em>how</em> to build a screen, but{" "}
              <em>why</em> a product confuses the people using it. So I moved into
              product design and never looked back.
            </p>
            <p className="text-ink-muted leading-relaxed">
              That background is my advantage. I design with implementation in
              mind — components, constraints, edge cases, handoff. When I give an
              engineering team a spec, it builds without a dozen back-and-forth
              threads, and the product ships closer to what was designed.
            </p>
            <p className="text-ink-muted leading-relaxed">
              Over 4+ years I&apos;ve worked solo end-to-end (research →
              wireframes → UI → prototype, sometimes the front-end build too) and
              inside product teams at Orange, Yoomi and Dughu. I&apos;m based in
              Abidjan and work async with distributed teams anywhere.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="bg-surface-alt rounded-2xl p-6 flex flex-col gap-4">
              <p className="font-semibold text-ink">Quick facts</p>
              {quickFacts.map(({ icon: Icon, k, v }) => (
                <div
                  key={k}
                  className="flex justify-between items-start gap-3 border-b border-line pb-3 last:border-0 last:pb-0"
                >
                  <span className="flex items-center gap-2 text-sm text-ink-subtle flex-shrink-0">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    {k}
                  </span>
                  <span className="text-sm font-medium text-ink text-right">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How I work */}
        <div>
          <p className="section-tag">How I work</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="rounded-2xl border border-line p-6 hover:border-brand/30 transition-colors"
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

        {/* Experience */}
        <div>
          <p className="section-tag">Experience</p>
          <ol className="flex flex-col gap-0">
            {experience.map((e, i) => (
              <li
                key={i}
                className="flex gap-6 pb-8 border-l-2 border-line pl-6 relative last:border-transparent"
              >
                <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full grad-bg flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <p className="font-semibold text-ink">
                      {e.role} · <span className="grad-text">{e.co}</span>
                    </p>
                    <span className="text-xs text-ink-subtle bg-surface-alt px-3 py-1 rounded-full">
                      {e.period}
                    </span>
                  </div>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    {e.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-ink-subtle mt-2">
            Client screens are under NDA —{" "}
            <a
              href="/projects"
              className="font-semibold text-brand-strong hover:underline"
            >
              see the redacted summary
            </a>
            .
          </p>
        </div>

        {/* Education & Certifications */}
        <div>
          <p className="section-tag">Education &amp; Certifications</p>
          <CredentialCard />
          <ul className="mt-4 flex flex-col divide-y divide-line rounded-2xl border border-line">
            {education.map((e) => (
              <li
                key={e.title}
                className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1 p-4"
              >
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {e.title}
                  </span>
                  <span className="block text-sm text-ink-subtle">{e.org}</span>
                </span>
                <span className="text-xs text-ink-subtle bg-surface-alt px-3 py-1 rounded-full">
                  {e.period}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* What I offer */}
        <div>
          <p className="section-tag">Services</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="flex gap-4 border border-line rounded-2xl p-5 hover:border-brand/30 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-tint text-brand flex-shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-ink mb-1">{t}</p>
                  <p className="text-ink-muted text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
