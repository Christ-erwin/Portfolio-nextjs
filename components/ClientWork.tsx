import React from "react";
import { LuLock, LuArrowRight } from "react-icons/lu";

type Engagement = {
  company: string;
  period: string;
  role: string;
  domain: string;
  work: string;
};

const engagements: Engagement[] = [
  {
    company: "Orange Côte d'Ivoire",
    period: "2026 – Present",
    role: "UI/UX Designer (via Synelia)",
    domain: "Telecom · self-service",
    work: "Designing and refining core user flows and interfaces for one of West Africa's largest telecom operators, working alongside product and engineering.",
  },
  {
    company: "Yoomi",
    period: "2024 – 2026",
    role: "UI/UX Designer — sole designer",
    domain: "Smart home · real-estate investment · property management · restaurant booking",
    work: "Full product design across four products: UX research, information architecture, high-fidelity UI, design systems and interactive prototypes used directly in user-testing sessions and dev handoff.",
  },
  {
    company: "Dughu",
    period: "Feb – May 2025",
    role: "Consultant UI/UX Designer",
    domain: "Web & mobile products",
    work: "End-to-end UX audits with strategic recommendations for conversion and retention, plus wireframes, UI and interactive prototypes aligned with business goals.",
  },
  {
    company: "Wegam",
    period: "2022 – 2024",
    role: "Web Developer & UI/UX Designer",
    domain: "Gaming platform",
    work: "UX/UI mockups and prototypes for platform features used by active users, implemented in collaboration with the frontend team.",
  },
];

export default function ClientWork() {
  return (
    <section className="w-full bg-surface-alt px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="section-tag">Client work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">
          Under NDA — available on request
        </h2>
        <p className="text-ink-muted max-w-2xl leading-relaxed">
          My work for Orange, Yoomi and Dughu is covered by confidentiality
          agreements, so I can&apos;t publish the screens here. Below is the shape
          of each engagement. I&apos;m happy to walk through the process, my
          decisions and the outcomes in a call or portfolio review.
        </p>

        <ul className="mt-8 flex flex-col gap-3">
          {engagements.map((e) => (
            <li
              key={e.company}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-bold text-ink">
                  {e.company} ·{" "}
                  <span className="font-semibold text-ink-muted">{e.role}</span>
                </p>
                <span className="text-xs text-ink-subtle bg-surface-alt px-3 py-1 rounded-full">
                  {e.period}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-strong mt-2">
                {e.domain}
              </p>
              <p className="text-sm text-ink-muted leading-relaxed mt-2">
                {e.work}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-2 text-sm text-ink-subtle">
          <LuLock className="w-4 h-4" aria-hidden="true" />
          <span>
            Need to see confidential work?{" "}
            <a
              href="/contact"
              className="font-semibold text-brand-strong hover:underline"
            >
              Request a walkthrough
            </a>
            <LuArrowRight className="inline w-3.5 h-3.5 ml-1" aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  );
}
