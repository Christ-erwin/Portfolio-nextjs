import React from "react";

export default function AboutSection2() {
  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">

        {/* Bio */}
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 flex flex-col gap-5">
            <p className="text-black text-lg leading-relaxed">
              I&apos;m a Product Designer and Frontend Developer based in Abidjan, Côte d&apos;Ivoire. I&apos;ve spent 4+ years designing mobile and web products across fintech, smart home, real estate, and entertainment — always focused on clarity, usability, and real user impact.
            </p>
            <p className="text-black/60 leading-relaxed">
              What makes my work different: I started as a developer. I&apos;ve built apps in React Native and Next.js, which means I design with implementation in mind. I understand constraints, components, and handoff. When I work with an engineering team, there are fewer surprises — and faster delivery.
            </p>
            <p className="text-black/60 leading-relaxed">
              I&apos;ve worked solo on complete product builds (research → wireframes → UI → prototype) and in collaboration with development teams. I&apos;m autonomous, async-ready, and comfortable working with distributed remote teams across time zones.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-4">
              <p className="font-semibold text-black">Quick facts</p>
              {[
                ["📍 Location", "Abidjan, Côte d'Ivoire"],
                ["🌍 Availability", "Remote · Worldwide"],
                ["💬 Languages", "French (native) · English (B2)"],
                ["⚒️ Primary tool", "Figma"],
                ["⚛️ Dev stack", "React Native · Next.js · Tailwind"],
              ].map(([k,v]) => (
                <div key={k} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm text-black/40">{k}</span>
                  <span className="text-sm font-medium text-black text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <p className="section-tag">Experience</p>
          <div className="flex flex-col gap-0">
            {[
              { period: "Feb–May 2025", role: "Consultant UI/UX Designer", co: "Dughu", desc: "UX audits, strategic recommendations, wireframes and prototypes for web and mobile products." },
              { period: "Aug–Dec 2024", role: "UI/UX Designer", co: "Yoomi", desc: "Full product design across 4 major products: smart home app, real estate investment platform, property management app, restaurant booking platform. Sole designer on all projects." },
              { period: "Aug 2023–Feb 2024", role: "Web Developer & UI/UX Designer", co: "Wegam", desc: "Designed UX/UI mockups and prototypes for a gaming platform. Collaborated with frontend developers on implementation." },
            ].map((e, i) => (
              <div key={i} className="flex gap-6 pb-8 border-l-2 border-gray-100 pl-6 relative last:border-transparent">
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full grad-bg flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <p className="font-semibold text-black">{e.role} · <span className="grad-text">{e.co}</span></p>
                    <span className="text-xs text-black/40 bg-gray-50 px-3 py-1 rounded-full">{e.period}</span>
                  </div>
                  <p className="text-black/60 text-sm leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-black rounded-3xl p-8 md:p-10">
          <p className="section-tag" style={{ color: 'rgba(255,255,255,0.4)' }}>My philosophy</p>
          <p className="text-white text-2xl md:text-3xl font-bold leading-tight max-w-lg">
            Good design is invisible —<br />
            <span className="grad-text">it&apos;s the experience that feels obvious in hindsight.</span>
          </p>
          <p className="text-white/50 mt-4 leading-relaxed max-w-lg">
            I work user-first, always asking: what does this person actually need, and what&apos;s getting in their way? Then I remove the friction. My goal is never to impress — it&apos;s to make things work so well that nobody notices the design at all.
          </p>
        </div>

        {/* What I offer */}
        <div>
          <p className="section-tag">Services</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: "🔍", t: "UX Research & Audits", d: "User interviews, competitive analysis, usability audits, personas, and journey mapping." },
              { icon: "🎨", t: "UI Design", d: "High-fidelity mockups, design systems, component libraries, and Figma handoff." },
              { icon: "📐", t: "Wireframing & Prototyping", d: "Low to high fidelity wireframes, interactive prototypes for user testing." },
              { icon: "⚛️", t: "Frontend Implementation", d: "React Native, React JS, Next.js, Tailwind — I ship what I design." },
              { icon: "🌐", t: "Remote Collaboration", d: "Async-first, Figma-native, comfortable with Notion, Slack, Jira, Linear." },
              { icon: "🚀", t: "MVP Design", d: "Fast, focused design for early-stage products that need to ship and learn." },
            ].map(s => (
              <div key={s.t} className="flex gap-4 border border-gray-100 rounded-2xl p-5 hover:border-purple-200 transition-colors">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div>
                  <p className="font-semibold text-black mb-1">{s.t}</p>
                  <p className="text-black/50 text-sm leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
