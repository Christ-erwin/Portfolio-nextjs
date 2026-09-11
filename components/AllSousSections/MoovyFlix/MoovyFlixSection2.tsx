import React from "react";
import type { IconType } from "react-icons";
import { LuLayoutGrid, LuTarget, LuSearch, LuClapperboard } from "react-icons/lu";
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
    icon: LuLayoutGrid,
    p: "Cluttered home screens that overwhelm rather than guide the user toward content.",
  },
  {
    icon: LuTarget,
    p: "Poor content recommendation — “continue watching” buried deep, no smart suggestions.",
  },
  {
    icon: LuSearch,
    p: "Weak search and filter — hard to find content by genre, language, or mood.",
  },
  {
    icon: LuClapperboard,
    p: "No visual distinction between movies, series, and documentaries at a glance.",
  },
];

const solutions = [
  {
    t: "Smart Home Screen",
    d: 'Organized into clear zones: "Continue Watching" at the top, then "Trending", "New Releases", and "For You" — each with a clear visual hierarchy so users find content in seconds.',
  },
  {
    t: "Advanced Filter System",
    d: "Search by genre, format (movie/series/doc), duration, language, and mood. Users can discover by what they feel like watching, not just what they know.",
  },
  {
    t: "Immersive Detail Page",
    d: "Full-bleed hero with trailer preview, synopsis, cast, user ratings, and content tags. A prominent play button with resume detection.",
  },
  {
    t: "Dark-First Design System",
    d: "Built a full dark-mode design system optimized for evening/low-light viewing — high contrast content cards, muted backgrounds, cinematic feel.",
  },
  {
    t: "Mini-Player & Continuity",
    d: 'A floating mini-player persists while browsing. "Continue Watching" is always visible on the home screen — no hunting required.',
  },
];

const screens = [
  { src: "/images/Project_Images/Details/MoovyFlix/moovyReal1.png", label: "Onboarding" },
  { src: "/images/Project_Images/Details/MoovyFlix/moovyReal2.png", label: "Home" },
  { src: "/images/Project_Images/Details/MoovyFlix/moovyReal3.png", label: "Content Detail" },
  { src: "/images/Project_Images/Details/MoovyFlix/moovyReal4.png", label: "Search & Filter" },
  { src: "/images/Project_Images/Details/MoovyFlix/moovyReal5.png", label: "Profile" },
  { src: "/images/Project_Images/Details/MoovyFlix/moovyReal6.png", label: "Player" },
];

export default function MoovyFlixSection2() {
  return (
    <article className="w-full bg-surface px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Snapshot
          role="Solo — research, UX, UI, design system, prototype"
          timeline="~4 weeks, self-initiated"
          type="Concept project"
          platform="iOS & Android"
          status="Designed & prototyped · not shipped"
          links={[
            { kind: "prototype", href: "#" /* TODO: Figma prototype URL */ },
          ]}
        />

        <section>
          <StepTitle n="01" title="Context" />
          <p className="text-ink-muted leading-relaxed text-lg">
            MoovyFlix is a self-initiated concept: design a streaming app from
            scratch that fixes the UX problems the big platforms still ship. I
            used it to practice the full process — from problem framing to a
            polished, interactive prototype with a complete design system.
          </p>
        </section>

        <section>
          <StepTitle n="02" title="Constraints & scope" />
          <ConstraintList
            items={[
              "Solo project, ~4 weeks part-time — scope had to stay tight.",
              "In scope: browse, search/filter, content detail, resume playback, profile.",
              "Out of scope: account/billing, downloads, social features, live TV.",
              "Mobile-first, dark UI, single design system — no tablet or TV layouts.",
              "No access to real platform analytics — decisions are based on heuristic analysis and my own audit of 3 competitors.",
            ]}
          />
        </section>

        <section>
          <StepTitle n="02b" title="Problem statement" />
          <p className="text-ink-muted mb-6">
            After auditing 3 major streaming platforms as a user, I grouped the
            recurring friction into four themes:
          </p>
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
          <StepTitle n="03" title="Who I designed for" />
          <div className="bg-gradient-to-br from-surface-alt to-brand-tint rounded-2xl p-6 border border-brand/15">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-strong mb-3">
              Proto-persona — assumption-based, to be validated
            </p>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full grad-bg flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <div>
                <p className="font-bold text-ink">Kofi, 27 — Urban Professional</p>
                <p className="text-ink-subtle text-sm">
                  Watches 2–3h of content per evening after work
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-bold text-ink-subtle uppercase tracking-wider mb-2">
                  Goals
                </p>
                {[
                  "Find something good to watch fast",
                  "Pick up where he left off easily",
                  "Discover new content without effort",
                ].map((g) => (
                  <p key={g} className="text-ink-muted text-sm mb-1">
                    → {g}
                  </p>
                ))}
              </div>
              <div>
                <p className="text-xs font-bold text-ink-subtle uppercase tracking-wider mb-2">
                  Frustrations
                </p>
                {[
                  "Spends 15 min choosing, then gives up",
                  "Forgets where he stopped in a series",
                  "Recommendations are irrelevant",
                ].map((f) => (
                  <p key={f} className="text-red-600 text-sm mb-1">
                    ✗ {f}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <StepTitle n="04" title="Design decisions & rationale" />
          <div className="flex flex-col gap-4">
            {solutions.map((s, i) => (
              <div
                key={s.t}
                className="flex gap-4 border border-line rounded-2xl p-5 hover:border-brand/30 transition-colors"
              >
                <span className="text-sm font-bold text-brand flex-shrink-0 pt-0.5">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink mb-1">{s.t}</p>
                  <p className="text-ink-muted text-sm leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="05" title="Screens" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {screens.map((s) => (
              <Figure key={s.label} src={s.src} alt={s.label} w={200} caption={s.label} />
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="06" title="Outcomes" />
          <Outcomes
            criteria={[
              "Time-to-first-play under 20 seconds from cold open for a returning user.",
              "\"Continue watching\" reachable in one tap from any main screen.",
              "Content type (movie / series / doc) identifiable without reading a label.",
              "Filter flow completable in under 15 seconds for a specific mood + genre.",
            ]}
            tested={[
              "Heuristic evaluation of every screen against Nielsen's 10 usability heuristics.",
              "Click-through walkthroughs of the 3 core tasks (resume, discover, search) in the Figma prototype.",
              "Competitive teardown of Netflix, Prime Video and Disney+ to check each decision against a real baseline.",
            ]}
            next="Unmoderated testing with 5–8 regular streamers to measure time-to-first-play and filter success on the prototype, then iterate the home hierarchy."
          />
        </section>

        <section>
          <StepTitle n="07" title="Reflections & what I'd do next" />
          <p className="text-ink-muted text-lg leading-relaxed">
            MoovyFlix sharpened my ability to design complex information
            architectures and content-heavy interfaces, and to build a dark-mode
            design system that holds contrast and readability at scale. If I took
            it further, I&apos;d validate the home-screen zoning with real users,
            pressure-test the recommendation model with content metadata, and
            design the account and download flows I scoped out.
          </p>
          <Callout>
            &ldquo;In entertainment UX, time-to-first-play is the metric that
            matters most — every screen was tested against it.&rdquo;
          </Callout>
        </section>
      </div>
    </article>
  );
}
