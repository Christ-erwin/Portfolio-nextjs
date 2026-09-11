import React from "react";
import type { IconType } from "react-icons";
import { LuRefreshCw, LuBellRing, LuEye, LuWind, LuCheck } from "react-icons/lu";
import {
  Snapshot,
  StepTitle,
  Callout,
  Figure,
  ConstraintList,
  Outcomes,
} from "@/components/CaseStudy";

const problems: { icon: IconType; p: string }[] = [
  {
    icon: LuRefreshCw,
    p: "Infinite scroll and algorithmic feeds trap users in passive consumption loops.",
  },
  {
    icon: LuBellRing,
    p: "Notification overload creates anxiety and compulsive checking.",
  },
  {
    icon: LuEye,
    p: "Public vanity metrics (likes, follower counts) distort self-expression and genuine connection.",
  },
  {
    icon: LuWind,
    p: "Feature bloat — Stories, Reels, Shops, Ads — buries the core social experience.",
  },
];

const principles = [
  {
    t: "Intentional by design",
    d: "No infinite scroll. The feed has a visible end. Users browse with purpose, not compulsion.",
  },
  {
    t: "Content first",
    d: "No like counts visible to others, no follower vanity metrics. Posts stand on their content alone.",
  },
  {
    t: "Calm interface",
    d: "Generous whitespace, a muted palette, grouped notifications. An app that respects your attention.",
  },
];

const features = [
  "Sign up / login with a short, clean onboarding",
  "Create posts — text, photo, video — with minimal friction",
  "A minimalist feed with no algorithmic manipulation",
  "Thoughtful reactions beyond a single like",
  "A follow system built around mutual connection",
  "Profiles with bio and posts, no public vanity metrics",
  "A calm notification center with grouped alerts, not red badges",
];

const screens = [
  { src: "/images/Project_Images/Details/Gripple/grippleReal2.png", label: "Home Feed" },
  { src: "/images/Project_Images/Details/Gripple/grippleReal3.png", label: "Post Detail" },
  { src: "/images/Project_Images/Details/Gripple/grippleReal4.png", label: "Profile" },
  { src: "/images/Project_Images/Details/Gripple/grippleReal7.png", label: "Create Post" },
];

export default function GrippleSection2() {
  return (
    <article className="w-full bg-surface px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Snapshot
          role="Solo — concept, UX, UI, prototype"
          timeline="~3 weeks, self-initiated"
          type="Concept project"
          platform="Mobile (iOS & Android)"
          status="Designed & prototyped · not shipped"
          links={[
            { kind: "prototype", href: "#" /* TODO: Figma prototype URL */ },
          ]}
        />

        <section>
          <StepTitle n="01" title="Context" />
          <p className="text-ink-muted text-lg leading-relaxed">
            Gripple started from a personal observation: mainstream social
            networks are engineered for time-on-app, not connection. Infinite
            scroll, algorithmic feeds and notification overload make them
            exhausting. The design question: what would a social app look like if
            it optimised for meaningful interaction instead of engagement time?
          </p>
        </section>

        <section>
          <StepTitle n="02" title="Constraints & scope" />
          <ConstraintList
            items={[
              "Self-initiated, solo, ~3 weeks — a focused MVP, not a full platform.",
              "In scope: onboarding, feed, post creation, reactions, profile, notifications.",
              "Out of scope: DMs, groups, discovery, moderation tooling, monetisation.",
              "Design thesis fixed up front: no infinite scroll, no public vanity metrics.",
              "No user research budget — direction is driven by well-documented attention-economy critique, to be validated later.",
            ]}
          />
        </section>

        <section>
          <StepTitle n="03" title="Problem statement" />
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map(({ icon: Icon, p }) => (
              <div key={p} className="flex gap-4 bg-surface-alt rounded-2xl p-5">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-tint text-brand flex-shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <p className="text-ink-muted text-sm leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="04" title="Design principles" />
          <div className="grid md:grid-cols-3 gap-4">
            {principles.map((p) => (
              <div key={p.t} className="bg-surface-alt rounded-2xl p-5">
                <p className="font-semibold text-ink mb-2">{p.t}</p>
                <p className="text-ink-muted text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="05" title="What I designed" />
          <ul className="flex flex-col gap-3">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 border border-line rounded-xl p-4"
              >
                <span className="w-5 h-5 rounded-full grad-bg flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                  <LuCheck className="w-3 h-3" aria-hidden="true" />
                </span>
                <p className="text-ink-muted text-sm">{f}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <StepTitle n="06" title="Screens" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {screens.map((s) => (
              <Figure key={s.label} src={s.src} alt={s.label} w={220} caption={s.label} />
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="07" title="Outcomes" />
          <Outcomes
            criteria={[
              "A session has a natural end — the feed stops instead of scrolling forever.",
              "No like counts or follower numbers are visible to other users anywhere in the UI.",
              "Notifications arrive grouped and calm — no red count badges.",
              "Posting a text update takes 2 screens and under 20 seconds.",
            ]}
            tested={[
              "Walked every screen against the two design-thesis rules to catch violations.",
              "Prototype run-through of the post, react and follow flows.",
              "Heuristic review focused on attention: what pulls the eye, what creates urgency, what can be removed.",
            ]}
            next="Diary study with 5–6 heavy social-media users trying Gripple for a week, measuring perceived calm and whether the missing metrics are actually missed."
          />
        </section>

        <section>
          <StepTitle n="08" title="Reflections & what I'd do next" />
          <p className="text-ink-muted text-lg leading-relaxed">
            Gripple taught me how much a clear thesis and a few hard constraints
            can do for a design — removing features (infinite scroll, public
            likes) made the interface calmer and more honest. Next I&apos;d run
            the diary study, design the moderation and reporting flows I scoped
            out, and test whether a bounded feed keeps people coming back.
          </p>
          <Callout>
            &ldquo;The most powerful decision on Gripple was what to leave out —
            every deletion was a deliberate act of respect for the user&apos;s
            attention.&rdquo;
          </Callout>
        </section>
      </div>
    </article>
  );
}
