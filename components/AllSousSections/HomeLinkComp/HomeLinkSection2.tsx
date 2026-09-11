import React from "react";
import Image from "next/image";
import type { IconType } from "react-icons";
import { Snapshot, Outcomes } from "@/components/CaseStudy";
import {
  LuShoppingCart,
  LuSettings,
  LuHouse,
  LuShoppingBag,
  LuWrench,
  LuSmartphone,
  LuZap,
  LuUser,
  LuArrowRight,
  LuWifi,
  LuWifiOff,
  LuBatteryLow,
  LuSiren,
} from "react-icons/lu";

function Step({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="step-badge" aria-hidden="true">
        {n}
      </span>
      <h2 className="font-semibold text-3xl md:text-4xl text-ink">{children}</h2>
    </div>
  );
}

function IconChip({ icon: Icon }: { icon: IconType }) {
  return (
    <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-tint text-brand mb-3">
      <Icon className="w-5 h-5" aria-hidden="true" />
    </span>
  );
}

const challenge: { icon: IconType; title: string; desc: string }[] = [
  {
    icon: LuShoppingCart,
    title: "Commerce",
    desc: "Discovering and buying connected devices — a retail experience",
  },
  {
    icon: LuSettings,
    title: "Installation",
    desc: "Configuring a technical device — a guided, step-by-step experience",
  },
  {
    icon: LuHouse,
    title: "Control",
    desc: "Managing the home daily — a dashboard and automation experience",
  },
];

const journey: { step: string; label: string; sub: string; icon: IconType }[] = [
  { step: "01", label: "Discover", sub: "Browse & buy devices", icon: LuShoppingBag },
  { step: "02", label: "Install", sub: "Guided device setup", icon: LuWrench },
  { step: "03", label: "Control", sub: "Dashboard & remote control", icon: LuSmartphone },
  { step: "04", label: "Automate", sub: "Create smart scenarios", icon: LuZap },
];

const architecture: { name: string; sub: string; icon: IconType }[] = [
  { name: "Home", sub: "Dashboard — core of the experience", icon: LuHouse },
  { name: "Store", sub: "Discover & buy devices", icon: LuShoppingCart },
  { name: "Scenarios", sub: "Manage automations", icon: LuZap },
  { name: "Onboarding", sub: "Install new device", icon: LuWrench },
  { name: "Profile", sub: "Account & settings", icon: LuUser },
];

const principles = [
  {
    title: "Simplicity",
    desc: "Key actions are accessible in 1–2 taps from the Dashboard. No buried menus.",
  },
  {
    title: "Progressivity",
    desc: "Complex features like automations are presented step by step, never all at once.",
  },
  {
    title: "Modularity",
    desc: "The interface works equally well with 1 device or 30. It scales gracefully.",
  },
];

const states: { icon: IconType; state: string; color: string }[] = [
  { icon: LuWifi, state: "Device Online", color: "bg-green-50 border-green-200 text-green-700" },
  { icon: LuWifiOff, state: "Device Offline", color: "bg-red-50 border-red-200 text-red-700" },
  { icon: LuBatteryLow, state: "Low Battery", color: "bg-amber-50 border-amber-200 text-amber-700" },
  { icon: LuSiren, state: "Security Alert", color: "bg-brand-tint border-brand/20 text-brand-strong" },
];

export default function HomeLinkSection2() {
  return (
    <div className="w-full h-auto bg-surface rounded-t-[80px] flex flex-col gap-16 px-6 py-16 md:px-[5%]">
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-16">
        {/* 01 · Project Overview */}
        <section className="flex flex-col gap-5">
          <Step n="01">Project Overview</Step>
          <Snapshot
            role="Solo Product Designer — research to final UI"
            timeline="Client engagement"
            type="Client project · Pommy"
            platform="iOS & Android (React Native)"
            status="Delivered to development"
            links={[
              { kind: "prototype", href: "#" /* TODO: shareable prototype, if client permits */ },
            ]}
          />
          <p className="text-ink-muted leading-relaxed mt-2">
            HomeLink is a mobile application that transforms any home into a smart
            home. It unifies three distinct experiences — buying connected
            devices, installing them, and controlling them daily — into a single,
            coherent product. I led the full design process solo, from initial UX
            research to the final UI delivered to development. Screens are
            published with the client&apos;s permission.
          </p>
        </section>

        {/* 02 · The Challenge */}
        <section className="flex flex-col gap-5">
          <Step n="02">The Challenge</Step>
          <p className="text-ink-muted leading-relaxed">
            The core UX problem: how do you merge three fundamentally different
            mental models — e-commerce, technical setup, and home automation —
            into one experience that feels natural?
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-2">
            {challenge.map((item) => (
              <div key={item.title} className="border border-line rounded-2xl p-5">
                <IconChip icon={item.icon} />
                <p className="font-bold text-ink mb-1">{item.title}</p>
                <p className="text-ink-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl mt-2">
            <p className="font-bold text-amber-900 mb-1">Main UX Risk</p>
            <p className="text-amber-800 text-sm">
              Users could feel lost switching between a shopping logic and a home
              control logic. The challenge was to create a seamless journey
              across these three modes without jarring transitions.
            </p>
          </div>
        </section>

        {/* 03 · UX Research */}
        <section className="flex flex-col gap-5">
          <Step n="03">UX Research &amp; User Persona</Step>
          <div className="flex flex-wrap md:flex-nowrap gap-8 items-start">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-ink-muted leading-relaxed">
                I defined the primary persona to guide every design decision
                throughout the project.
              </p>
              <div className="bg-brand-tint rounded-2xl p-6 border border-brand/15">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full grad-bg flex items-center justify-center text-white">
                    <LuUser className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-ink">Primary User</p>
                    <p className="text-ink-subtle text-sm">
                      Homeowner or head of household · 30–50 years old
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="font-semibold text-ink text-sm mb-1">
                      Motivations
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Secure the home", "Improve comfort", "Save energy"].map(
                        (m) => (
                          <span
                            key={m}
                            className="bg-white text-ink-muted text-xs px-3 py-1 rounded-full border border-brand/15"
                          >
                            {m}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm mb-1">
                      Frustrations
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Complex installation",
                        "Unclear app interface",
                        "Automations too hard to set up",
                      ].map((f) => (
                        <span
                          key={f}
                          className="bg-white text-red-600 text-xs px-3 py-1 rounded-full border border-red-200"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/Project_Images/Details/HomeLink/personaVisuel.png"
                alt="Primary persona for HomeLink — a homeowner aged 30 to 50"
                width={280}
                height={320}
                sizes="(max-width: 640px) 80vw, 280px"
                className="w-full max-w-[280px] h-auto rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* 04 · User Journey */}
        <section className="flex flex-col gap-5">
          <Step n="04">User Journey &amp; Information Architecture</Step>
          <p className="text-ink-muted leading-relaxed">
            I structured the entire experience around a logical four-step cycle
            that mirrors how users naturally think about their smart home:
          </p>
          <ol className="flex flex-wrap md:flex-nowrap items-stretch gap-3 mt-2">
            {journey.map((item, i, arr) => (
              <React.Fragment key={item.step}>
                <li className="flex-1 bg-surface-alt rounded-2xl p-5 text-center">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-tint text-brand mb-2">
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <p className="text-xs text-ink-subtle font-bold">{item.step}</p>
                  <p className="font-bold text-ink">{item.label}</p>
                  <p className="text-ink-muted text-xs mt-1">{item.sub}</p>
                </li>
                {i < arr.length - 1 && (
                  <li
                    aria-hidden="true"
                    className="hidden md:flex items-center text-ink-subtle"
                  >
                    <LuArrowRight className="w-5 h-5" />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ol>
          <div className="mt-4">
            <p className="font-semibold text-ink mb-3">
              App Architecture — 5 main sections:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {architecture.map((s) => (
                <div
                  key={s.name}
                  className="bg-white border border-line rounded-xl p-3 text-center shadow-sm"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-tint text-brand mb-1">
                    <s.icon className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <p className="font-bold text-ink text-sm">{s.name}</p>
                  <p className="text-ink-subtle text-xs">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Image
              src="/images/Project_Images/Details/HomeLink/sitemap.png"
              alt="HomeLink information architecture sitemap"
              width={700}
              height={300}
              sizes="(max-width: 768px) 100vw, 700px"
              className="w-full max-w-[700px] h-auto rounded-2xl"
            />
          </div>
        </section>

        {/* 05 · Design System */}
        <section className="flex flex-col gap-5">
          <Step n="05">Design Principles &amp; System</Step>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="bg-surface-alt rounded-2xl p-5">
                <p className="font-bold text-ink text-lg mb-2">{p.title}</p>
                <p className="text-ink-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <Image
              src="/images/Project_Images/Details/HomeLink/designSystem.png"
              alt="HomeLink design system — colours, typography and components"
              width={700}
              height={280}
              sizes="(max-width: 768px) 100vw, 700px"
              className="w-full max-w-[700px] h-auto rounded-2xl"
            />
          </div>
        </section>

        {/* 06 · Key Screens */}
        <section className="flex flex-col gap-5">
          <Step n="06">Key Screens</Step>

          <div className="flex flex-wrap md:flex-nowrap gap-8 items-start">
            <div className="flex-1">
              <h3 className="font-bold text-ink text-xl mb-2">
                Dashboard — Home Control Hub
              </h3>
              <p className="text-ink-muted leading-relaxed">
                The Dashboard is the heart of HomeLink. At a glance, users see the
                status of all devices (online/offline, battery low, security
                alert), control rooms, and trigger their most-used automations.
                Every critical state is surfaced immediately — no digging
                required.
              </p>
            </div>
            <div className="flex gap-4">
              <Image
                src="/images/Project_Images/Details/HomeLink/dashboardPage.png"
                alt="HomeLink dashboard screen"
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
              <Image
                src="/images/Project_Images/Details/HomeLink/detailDevicesPage.png"
                alt="HomeLink device detail screen"
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-wrap-reverse md:flex-nowrap gap-8 items-start mt-6">
            <div className="flex gap-4">
              <Image
                src="/images/Project_Images/Details/HomeLink/productsPage.png"
                alt="HomeLink store product list screen"
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
              <Image
                src="/images/Project_Images/Details/HomeLink/productDetailPage.png"
                alt="HomeLink store product detail screen"
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-ink text-xl mb-2">
                Store — Buy Connected Devices
              </h3>
              <p className="text-ink-muted leading-relaxed">
                The Store allows users to discover and purchase compatible
                connected devices directly in the app. After purchase, the app
                guides them seamlessly into the Onboarding flow — the transition
                is invisible and intentional.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-8 items-start mt-6">
            <div className="flex-1">
              <h3 className="font-bold text-ink text-xl mb-2">
                Onboarding — Guided Device Setup
              </h3>
              <p className="text-ink-muted leading-relaxed">
                Installing a connected device is typically a pain point for
                non-technical users. I designed a step-by-step onboarding flow
                with clear progress indicators, visual instructions, and
                contextual help — making a complex technical process feel as
                simple as following a recipe.
              </p>
            </div>
            <div className="flex gap-4">
              <Image
                src="/images/Project_Images/Details/HomeLink/onBoardingPage.png"
                alt="HomeLink onboarding step one"
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
              <Image
                src="/images/Project_Images/Details/HomeLink/onBoardingTwo.png"
                alt="HomeLink onboarding step two"
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
            </div>
          </div>

          <div className="flex flex-wrap-reverse md:flex-nowrap gap-8 items-start mt-6">
            <div className="flex gap-4">
              <Image
                src="/images/Project_Images/Details/HomeLink/automatisationPage.png"
                alt="HomeLink automations list screen"
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
              <Image
                src="/images/Project_Images/Details/HomeLink/automatisationStep.png"
                alt="HomeLink automation creation step"
                width={180}
                height={380}
                sizes="180px"
                className="w-full max-w-[180px] h-auto rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-ink text-xl mb-2">
                Scenarios — Smart Automations
              </h3>
              <p className="text-ink-muted leading-relaxed">
                Automations are the most powerful — and most intimidating —
                feature of any smart home app. I broke the creation flow into
                small, digestible steps using plain language and visual cues, so
                users build confident automations without needing technical
                knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* 07 · System States */}
        <section className="flex flex-col gap-5">
          <Step n="07">System State Management</Step>
          <p className="text-ink-muted">
            A smart home app must always communicate what&apos;s happening. I
            designed clear, accessible states for all critical device conditions:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {states.map((s) => (
              <div
                key={s.state}
                className={`${s.color} border rounded-2xl p-4 text-center`}
              >
                <s.icon className="w-7 h-7 mx-auto mb-2" aria-hidden="true" />
                <p className="font-semibold text-ink text-sm">{s.state}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 07b · Outcomes */}
        <section className="flex flex-col gap-5">
          <Step n="08">Outcomes</Step>
          <Outcomes
            criteria={[
              "Key daily actions reachable in 1–2 taps from the Dashboard.",
              "A single design system covering commerce, onboarding and control — no visual seams between the three modes.",
              "Automation creation broken into steps a non-technical user can complete without help.",
              "Every critical device state (offline, low battery, alert) surfaced on the Dashboard, not buried.",
            ]}
            tested={[
              "Persona-driven walkthroughs of the four-step journey (discover → install → control → automate).",
              "Design-system audit for consistency across all 5 sections and 20+ screens.",
              "Final UI delivered to the development team as the build spec.",
            ]}
            next="Post-launch usability testing on the onboarding and automation flows, and analytics on activation (first device connected) and automation adoption."
          />
        </section>

        {/* 09 · Reflections */}
        <section className="flex flex-col gap-5">
          <Step n="09">Reflections &amp; Learnings</Step>
          <p className="text-ink-muted leading-relaxed">
            HomeLink was the most complex product I&apos;ve designed to date — not
            because of the visual challenge, but because of the mental model
            challenge. Merging commerce, installation, and control into one
            coherent experience required constant user empathy and ruthless
            simplification. Every screen had to earn its place.
          </p>
          <p className="text-ink-muted leading-relaxed">
            Working solo end-to-end also sharpened my ability to make fast,
            confident decisions with limited feedback loops — a skill I now
            consider one of my core strengths for remote work.
          </p>
          <div className="rounded-r-2xl border-l-4 border-brand bg-brand-tint p-5">
            <p className="font-bold text-ink mb-2">Key takeaway</p>
            <p className="text-brand-strong italic">
              &ldquo;The best product experiences feel like they were always meant
              to work exactly that way. HomeLink taught me that getting there
              requires designing for the user&apos;s mental model, not the
              product&apos;s technical structure.&rdquo;
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
