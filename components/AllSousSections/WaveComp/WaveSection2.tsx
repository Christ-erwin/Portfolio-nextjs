import React from "react";
import type { IconType } from "react-icons";
import {
  LuCompass,
  LuEye,
  LuAccessibility,
  LuUsers,
  LuPalette,
} from "react-icons/lu";
import {
  Snapshot,
  StepTitle,
  Callout,
  Figure,
  ConstraintList,
  Outcomes,
} from "@/components/CaseStudy";

const audit: { icon: IconType; title: string; desc: string }[] = [
  {
    icon: LuCompass,
    title: "Complex navigation",
    desc: "Core actions like sending money take too many steps. Users lose their place in long flows.",
  },
  {
    icon: LuEye,
    title: "Weak visual hierarchy",
    desc: "Balance, transactions and CTAs lack visual priority. Users scan but don't find what they need.",
  },
  {
    icon: LuAccessibility,
    title: "Low accessibility",
    desc: "Several text/background pairs fall short of WCAG AA contrast, hurting readability outdoors and for low-vision users.",
  },
  {
    icon: LuUsers,
    title: "Poor contact management",
    desc: "No clear place to find, add or manage beneficiaries — a core, repeated task.",
  },
  {
    icon: LuPalette,
    title: "Weak brand identity",
    desc: "Inconsistent visual language across screens; no design system holding it together.",
  },
];

const strategy = [
  {
    title: "Navigation redesign",
    desc: "Surface the 3 most-used actions (Send, Receive, Balance) within one tap and cut steps out of the transfer flow.",
  },
  {
    title: "Visual hierarchy system",
    desc: "A clear type scale and spacing system. Balance becomes the hero element; CTAs are high-contrast and consistently placed.",
  },
  {
    title: "Accessible colour palette",
    desc: "Rebuilt the colour system to meet WCAG AA contrast at every text size — verified with a contrast checker.",
  },
  {
    title: "Beneficiary management",
    desc: "A dedicated contacts screen with search, recent contacts and clear add/manage actions to cut friction on repeat transfers.",
  },
  {
    title: "Consistent design system",
    desc: "A component library (buttons, cards, inputs, modals) so every screen stays visually consistent.",
  },
];

export default function WaveSection2() {
  return (
    <article className="w-full bg-surface px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Snapshot
          role="Solo — UX audit, redesign, UI, design system"
          timeline="~3 weeks, self-initiated"
          type="Redesign concept"
          platform="Mobile (iOS & Android)"
          status="Not affiliated with Wave · concept only"
          links={[
            { kind: "prototype", href: "#" /* TODO: Figma prototype URL */ },
          ]}
        />

        <section>
          <StepTitle n="01" title="Context" />
          <p className="text-ink-muted leading-relaxed text-lg">
            Wave is one of the most widely used mobile-money apps in West Africa.
            I use it daily, and I kept hitting the same friction points — so I ran
            a structured UX audit and redesigned the core experience. This is an
            independent concept, not commissioned by or affiliated with Wave.
          </p>
        </section>

        <section>
          <StepTitle n="02" title="Constraints & scope" />
          <ConstraintList
            items={[
              "Independent project — no access to Wave's users, analytics or roadmap.",
              "In scope: onboarding, home/balance, send & receive, beneficiaries, transaction history.",
              "Out of scope: KYC, agent network, savings products, cross-border transfer.",
              "Had to preserve the low-bandwidth, low-end-device reality of the user base.",
              "Findings are based on my own heuristic audit and public app-store reviews, not primary research.",
            ]}
          />
        </section>

        <section>
          <StepTitle n="03" title="UX audit — what's broken" />
          <p className="text-ink-muted mb-6 leading-relaxed">
            I walked every core flow and scored it against usability heuristics
            and WCAG. Five issues came up repeatedly:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {audit.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 bg-surface-alt rounded-2xl p-5"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-tint text-brand flex-shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-ink mb-1">{title}</p>
                  <p className="text-ink-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Figure
              src="/images/Project_Images/Details/Wave/waveOld.png"
              alt="Original Wave interface, annotated during the audit"
              w={300}
              caption="Original interface — audited screen"
              className="w-full max-w-sm"
            />
          </div>
        </section>

        <section>
          <StepTitle n="04" title="Strategy & design decisions" />
          <p className="text-ink-muted mb-6 leading-relaxed">
            Each audit finding maps to a specific design response:
          </p>
          <div className="flex flex-col gap-4">
            {strategy.map((s, i) => (
              <div
                key={s.title}
                className="flex gap-4 border border-line rounded-2xl p-5 hover:border-brand/30 transition-colors"
              >
                <span className="text-sm font-bold text-brand flex-shrink-0 pt-0.5">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink mb-1">{s.title}</p>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="05" title="Redesigned screens" />
          <div className="flex flex-wrap justify-around gap-6 mb-6">
            <Figure
              src="/images/Project_Images/Details/Wave/wavaPresent1.png"
              alt="Wave redesign — home and balance"
              w={180}
            />
            <Figure
              src="/images/Project_Images/Details/Wave/wavaPresent2.png"
              alt="Wave redesign — transfer flow"
              w={180}
            />
          </div>
          <div className="flex justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-label="Screen recording of the redesigned Wave transfer flow"
              className="w-full max-w-xs h-auto rounded-2xl shadow-lg"
            >
              <source
                src="https://res.cloudinary.com/docanichi/video/upload/v1752175194/waveRecord_qoi5g5.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>

        <section>
          <StepTitle n="06" title="Outcomes" />
          <Outcomes
            criteria={[
              "Send-money flow reduced from its current step count to 3 screens.",
              "Balance and primary CTA meet WCAG AA contrast (4.5:1) at every size.",
              "Add / find a beneficiary reachable in 2 taps from home.",
              "One documented component library covering every screen in the redesign.",
            ]}
            tested={[
              "Before/after step-count comparison of the transfer flow.",
              "Contrast audit of the new palette with a WCAG contrast checker (all text ≥ 4.5:1).",
              "Prototype walkthrough of send, receive and beneficiary tasks.",
            ]}
            next="Moderated testing with 5–8 current Wave users on low-end Android devices, comparing task time and error rate against the live app."
          />
        </section>

        <section>
          <StepTitle n="07" title="Reflections & what I'd do next" />
          <p className="text-ink-muted leading-relaxed text-lg">
            This redesign deepened my understanding of financial UX — trust
            signals, security perception, and accessibility on low-end hardware —
            and gave me practice building a design system from zero across 20+
            screens. With more time I&apos;d run the moderated test above, design
            the error and edge states in full, and validate the new navigation
            with a first-click test.
          </p>
          <Callout>
            &ldquo;The best fintech UX feels invisible — the user moves money
            without ever feeling like they&apos;re operating software.&rdquo;
          </Callout>
        </section>
      </div>
    </article>
  );
}
