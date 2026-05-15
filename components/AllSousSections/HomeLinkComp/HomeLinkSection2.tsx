import React from "react";
import Image from "next/image";

// ── Section title ─────────────────────────────────────────────────────────────
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-semibold text-3xl md:text-4xl text-black mb-4">
      {children}
    </p>
  );
}

export default function HomeLinkSection2() {
  return (
    <div className="w-full h-auto rounded-t-[120px] flex flex-col justify-around gap-16 p-[5%]">
      {/* ── 01 · Project Overview ─────────────────────────────────────── */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-white bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA] px-3 py-1 rounded-full">
            01
          </span>
          <SectionTitle>Project Overview</SectionTitle>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="font-bold text-black mb-1">Client</p>
            <p className="text-black/60">Pommy</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="font-bold text-black mb-1">Platform</p>
            <p className="text-black/60">iOS &amp; Android (React Native)</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="font-bold text-black mb-1">My Role</p>
            <p className="text-black/60">
              Solo Product Designer — end to end, from concept to final UI
            </p>
          </div>
        </div>
        <p className="text-black/60 leading-relaxed mt-2">
          HomeLink is a mobile application that transforms any home into a smart
          home. It unifies three distinct experiences — buying connected
          devices, installing them, and controlling them daily — into a single,
          coherent product. I led the full design process solo, from initial UX
          research to the final UI delivered to development.
        </p>
      </div>

      {/* ── 02 · The Challenge ────────────────────────────────────────── */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-white bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA] px-3 py-1 rounded-full">
            02
          </span>
          <SectionTitle>The Challenge</SectionTitle>
        </div>
        <p className="text-black/60 leading-relaxed">
          The core UX problem: how do you merge three fundamentally different
          mental models — e-commerce, technical setup, and home automation —
          into one experience that feels natural?
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-2">
          {[
            {
              icon: "🛒",
              title: "Commerce",
              desc: "Discovering and buying connected devices — a retail experience",
            },
            {
              icon: "⚙️",
              title: "Installation",
              desc: "Configuring a technical device — a guided, step-by-step experience",
            },
            {
              icon: "🏠",
              title: "Control",
              desc: "Managing the home daily — a dashboard and automation experience",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 rounded-2xl p-5"
            >
              <p className="text-3xl mb-3">{item.icon}</p>
              <p className="font-bold text-black mb-1">{item.title}</p>
              <p className="text-black/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-2xl mt-2">
          <p className="font-bold text-amber-800 mb-1">Main UX Risk</p>
          <p className="text-amber-700 text-sm">
            Users could feel lost switching between a shopping logic and a home
            control logic. The challenge was to create a seamless journey across
            these three modes without jarring transitions.
          </p>
        </div>
      </div>

      {/* ── 03 · UX Research ─────────────────────────────────────────── */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-white bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA] px-3 py-1 rounded-full">
            03
          </span>
          <SectionTitle>UX Research &amp; User Persona</SectionTitle>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-8 items-start">
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-black/60 leading-relaxed">
              I defined the primary persona to guide every design decision
              throughout the project.
            </p>
            <div className="bg-gradient-to-br from-[#f8f0ff] to-[#ffe8fb] rounded-2xl p-6 border border-purple-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA] flex items-center justify-center text-white text-2xl">
                  👤
                </div>
                <div>
                  <p className="font-bold text-black">Primary User</p>
                  <p className="text-black/50 text-sm">
                    Homeowner or head of household · 30–50 years old
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="font-semibold text-black text-sm mb-1">
                    Motivations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Secure the home", "Improve comfort", "Save energy"].map(
                      (m) => (
                        <span
                          key={m}
                          className="bg-white text-black/70 text-xs px-3 py-1 rounded-full border border-purple-100"
                        >
                          {m}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm mb-1">
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
                        className="bg-white text-red-400 text-xs px-3 py-1 rounded-full border border-red-100"
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
              alt="persona — project"
              width={280}
              height={320}
              className="w-full max-w-[280px] h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* ── 04 · User Journey ────────────────────────────────────────── */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-white bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA] px-3 py-1 rounded-full">
            04
          </span>
          <SectionTitle>
            User Journey &amp; Information Architecture
          </SectionTitle>
        </div>
        <p className="text-black/60 leading-relaxed">
          I structured the entire experience around a logical four-step cycle
          that mirrors how users naturally think about their smart home:
        </p>
        <div className="flex flex-wrap md:flex-nowrap items-center gap-3 mt-2">
          {[
            {
              step: "01",
              label: "Discover",
              sub: "Browse & buy devices",
              icon: "🛍️",
            },
            {
              step: "02",
              label: "Install",
              sub: "Guided device setup",
              icon: "🔧",
            },
            {
              step: "03",
              label: "Control",
              sub: "Dashboard & remote control",
              icon: "📱",
            },
            {
              step: "04",
              label: "Automate",
              sub: "Create smart scenarios",
              icon: "⚡",
            },
          ].map((item, i, arr) => (
            <React.Fragment key={item.step}>
              <div className="flex-1 bg-gray-50 rounded-2xl p-5 text-center">
                <p className="text-3xl mb-2">{item.icon}</p>
                <p className="text-xs text-black/40 font-bold">{item.step}</p>
                <p className="font-bold text-black">{item.label}</p>
                <p className="text-black/50 text-xs mt-1">{item.sub}</p>
              </div>
              {i < arr.length - 1 && (
                <p className="text-2xl text-black/20 hidden md:block">→</p>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-4">
          <p className="font-semibold text-black mb-3">
            App Architecture — 5 main sections:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              {
                name: "Home",
                sub: "Dashboard — core of the experience",
                icon: "🏠",
              },
              { name: "Store", sub: "Discover & buy devices", icon: "🛒" },
              { name: "Scenarios", sub: "Manage automations", icon: "⚡" },
              { name: "Onboarding", sub: "Install new device", icon: "🔧" },
              { name: "Profile", sub: "Account & settings", icon: "👤" },
            ].map((s) => (
              <div
                key={s.name}
                className="bg-white border border-gray-100 rounded-xl p-3 text-center shadow-sm"
              >
                <p className="text-2xl mb-1">{s.icon}</p>
                <p className="font-bold text-black text-sm">{s.name}</p>
                <p className="text-black/40 text-xs">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            src="/images/Project_Images/Details/HomeLink/sitemap.png"
            alt="Information Architecture — HomeLink"
            width={700}
            height={300}
            className="w-full max-w-[700px] h-auto rounded-2xl"
          />
        </div>
      </div>

      {/* ── 05 · Design System ───────────────────────────────────────── */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-white bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA] px-3 py-1 rounded-full">
            05
          </span>
          <SectionTitle>Design Principles &amp; System</SectionTitle>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
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
          ].map((p) => (
            <div key={p.title} className="bg-gray-50 rounded-2xl p-5">
              <p className="font-bold text-black text-lg mb-2">{p.title}</p>
              <p className="text-black/50 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Image
            src="/images/Project_Images/Details/HomeLink/designSystem.png"
            alt="Information Architecture — HomeLink"
            width={700}
            height={280}
            className="w-full max-w-[700px] h-auto rounded-2xl"
          />
        </div>
      </div>

      {/* ── 06 · Key Screens ─────────────────────────────────────────── */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-white bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA] px-3 py-1 rounded-full">
            06
          </span>
          <SectionTitle>Key Screens</SectionTitle>
        </div>

        {/* Dashboard */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 items-start">
          <div className="flex-1">
            <p className="font-bold text-black text-xl mb-2">
              Dashboard — Home Control Hub
            </p>
            <p className="text-black/60 leading-relaxed">
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
              alt="Dashboard — HomeLink"
              width={180}
              height={380}
              className="w-full max-w-[180px] h-auto rounded-2xl"
            />
            <Image
              src="/images/Project_Images/Details/HomeLink/detailDevicesPage.png"
              alt="Detail Devices — HomeLink"
              width={180}
              height={380}
              className="w-full max-w-[180px] h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Store */}
        <div className="flex flex-wrap-reverse md:flex-nowrap gap-8 items-start mt-6">
          <div className="flex gap-4">
            <Image
              src="/images/Project_Images/Details/HomeLink/productsPage.png"
              alt="ListProducts — HomeLink"
              width={180}
              height={380}
              className="w-full max-w-[180px] h-auto rounded-2xl"
            />
            <Image
              src="/images/Project_Images/Details/HomeLink/productDetailPage.png"
              alt="Product Detail — HomeLink"
              width={180}
              height={380}
              className="w-full max-w-[180px] h-auto rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <p className="font-bold text-black text-xl mb-2">
              Store — Buy Connected Devices
            </p>
            <p className="text-black/60 leading-relaxed">
              The Store allows users to discover and purchase compatible
              connected devices directly in the app. After purchase, the app
              guides them seamlessly into the Onboarding flow — the transition
              is invisible and intentional.
            </p>
          </div>
        </div>

        {/* Onboarding */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 items-start mt-6">
          <div className="flex-1">
            <p className="font-bold text-black text-xl mb-2">
              Onboarding — Guided Device Setup
            </p>
            <p className="text-black/60 leading-relaxed">
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
              alt="Onboarding — HomeLink"
              width={180}
              height={380}
              className="w-full max-w-[180px] h-auto rounded-2xl"
            />
            <Image
              src="/images/Project_Images/Details/HomeLink/onBoardingTwo.png"
              alt="Onboarding2 — HomeLink"
              width={180}
              height={380}
              className="w-full max-w-[180px] h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Scenarios */}
        <div className="flex flex-wrap-reverse md:flex-nowrap gap-8 items-start mt-6">
          <div className="flex gap-4">
            <Image
              src="/images/Project_Images/Details/HomeLink/automatisationPage.png"
              alt="Automations — HomeLink"
              width={180}
              height={380}
              className="w-full max-w-[180px] h-auto rounded-2xl"
            />
            <Image
              src="/images/Project_Images/Details/HomeLink/automatisationStep.png"
              alt="Automation Step — HomeLink"
              width={180}
              height={380}
              className="w-full max-w-[180px] h-auto rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <p className="font-bold text-black text-xl mb-2">
              Scenarios — Smart Automations
            </p>
            <p className="text-black/60 leading-relaxed">
              Automations are the most powerful — and most intimidating —
              feature of any smart home app. I broke the creation flow into
              small, digestible steps using plain language and visual cues, so
              users build confident automations without needing technical
              knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* ── 07 · System States ───────────────────────────────────────── */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-white bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA] px-3 py-1 rounded-full">
            07
          </span>
          <SectionTitle>System State Management</SectionTitle>
        </div>
        <p className="text-black/60">
          A smart home app must always communicate what&apos;s happening. I
          designed clear, accessible states for all critical device conditions:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: "🟢",
              state: "Device Online",
              color: "bg-green-50 border-green-200",
            },
            {
              icon: "🔴",
              state: "Device Offline",
              color: "bg-red-50 border-red-200",
            },
            {
              icon: "🔋",
              state: "Low Battery",
              color: "bg-amber-50 border-amber-200",
            },
            {
              icon: "🚨",
              state: "Security Alert",
              color: "bg-purple-50 border-purple-200",
            },
          ].map((s) => (
            <div
              key={s.state}
              className={`${s.color} border rounded-2xl p-4 text-center`}
            >
              <p className="text-3xl mb-2">{s.icon}</p>
              <p className="font-semibold text-black text-sm">{s.state}</p>
            </div>
          ))}
        </div>
        {/*
        <div className="flex justify-center mt-2">
          <ImgPlaceholder
            label="States — online / offline / battery / alert (Figma screenshot)"
            width={600}
            height={250}
            className="w-full max-w-[600px]"
          />
        </div>*/}
      </div>

      {/* ── 08 · Reflections ─────────────────────────────────────────── */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-white bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA] px-3 py-1 rounded-full">
            08
          </span>
          <SectionTitle>Reflections &amp; Learnings</SectionTitle>
        </div>
        <p className="text-black/60 leading-relaxed">
          HomeLink was the most complex product I&apos;ve designed to date — not
          because of the visual challenge, but because of the mental model
          challenge. Merging commerce, installation, and control into one
          coherent experience required constant user empathy and ruthless
          simplification. Every screen had to earn its place.
        </p>
        <p className="text-black/60 leading-relaxed">
          Working solo end-to-end also sharpened my ability to make fast,
          confident decisions with limited feedback loops — a skill I now
          consider one of my core strengths for remote work.
        </p>
        <div className="bg-gradient-to-r from-[#FD23E3]/10 via-[#8021E8]/10 to-[#0619EA]/10 rounded-2xl p-6 border border-purple-100 mt-2">
          <p className="font-bold text-black mb-2">Key takeaway</p>
          <p className="text-black/70 italic">
            &ldquo;The best product experiences feel like they were always meant
            to work exactly that way. HomeLink taught me that getting there
            requires designing for the user&apos;s mental model, not the
            product&apos;s technical structure.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
