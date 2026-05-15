import Image from "next/image";
import React from "react";

function Img({ src, alt, w = 280 }: { src: string; alt: string; w?: number }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={0}
      style={{ width: w, height: "auto" }}
      className="rounded-2xl"
    />
  );
}
function Ph({ label, h = 400 }: { label: string; h?: number }) {
  return (
    <div className="img-placeholder rounded-2xl w-full text-gray-400 text-xs p-4 text-center" style={{ minHeight: h }}>
      <span className="text-3xl block mb-2">🖼️</span>{label}
    </div>
  );
}
function StepTitle({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="step-badge">{n}</span>
      <h2 className="text-2xl md:text-3xl font-bold text-black">{title}</h2>
    </div>
  );
}

export default function WaveSection2() {
  return (
    <article className="w-full bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">

        {/* Overview */}
        <div className="grid md:grid-cols-3 gap-4">
          {[["Role","Solo UX/UI Designer"],["Type","Personal Redesign Project"],["Tools","Figma · FigJam"]].map(([k,v])=>(
            <div key={k} className="bg-gray-50 rounded-2xl p-5">
              <p className="text-xs text-black/40 font-semibold uppercase tracking-wider mb-1">{k}</p>
              <p className="text-black font-semibold">{v}</p>
            </div>
          ))}
        </div>

        {/* 01 Context */}
        <section>
          <StepTitle n="01" title="Project Context" />
          <p className="text-black/60 leading-relaxed text-lg">
            Wave is one of the most widely used mobile money apps in West Africa, with millions of users sending and receiving money daily. Despite its popularity, the app has notable UX weaknesses that create friction in everyday usage. This personal project is a full UX redesign — analyzing what&apos;s broken, defining solutions, and delivering a modern interface.
          </p>
        </section>

        {/* 02 UX Audit */}
        <section>
          <StepTitle n="02" title="UX Audit — What&apos;s Broken" />
          <p className="text-black/60 mb-6 leading-relaxed">Before designing anything, I conducted a thorough audit of the existing app to identify friction points:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "🧭", title: "Complex Navigation", desc: "Core actions like sending money require too many steps. Users lose their way in long flows." },
              { icon: "👁️", title: "Weak Visual Hierarchy", desc: "Balance, transactions, and CTAs lack visual priority. Users scan but don't find what they need." },
              { icon: "♿", title: "Low Accessibility", desc: "Several contrast ratios fail WCAG standards, reducing readability for a large portion of users." },
              { icon: "👥", title: "Poor Contact Management", desc: "No clear interface for finding, adding, or managing beneficiaries — a core use case." },
              { icon: "🎨", title: "Weak Brand Identity", desc: "Inconsistent visual language across screens. No strong design system holding it together." },
            ].map(p => (
              <div key={p.title} className="flex gap-4 bg-gray-50 rounded-2xl p-5">
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <div>
                  <p className="font-semibold text-black mb-1">{p.title}</p>
                  <p className="text-black/50 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <Img src="/images/Project_Images/Details/Wave/waveOld.png" alt="Wave original interface" w={300} />
              <p className="text-center text-xs text-black/30 mt-2">Original Wave interface</p>
            </div>
          </div>
        </section>

        {/* 03 Strategy */}
        <section>
          <StepTitle n="03" title="UX Strategy &amp; Solutions" />
          <p className="text-black/60 mb-6 leading-relaxed">Following the audit, I defined a user-centered approach to address each pain point:</p>
          <div className="flex flex-col gap-4">
            {[
              { title: "Navigation Redesign", desc: "Restructured bottom nav to surface the 3 most-used actions (Send, Receive, Balance) within one tap. Removed unnecessary steps from the transfer flow." },
              { title: "Visual Hierarchy System", desc: "Applied a clear typographic scale and spacing system. Balance is now the hero element; CTAs are high-contrast and prominently placed." },
              { title: "Accessible Color Palette", desc: "Rebuilt the color system to meet WCAG AA contrast requirements across all text sizes, improving readability for all users." },
              { title: "Beneficiary Management", desc: "Designed a dedicated contacts screen with search, recent contacts, and clear add/manage actions — reducing friction for repeat transfers." },
              { title: "Consistent Design System", desc: "Created a component library (buttons, cards, inputs, modals) ensuring visual consistency across all screens." },
            ].map((s, i) => (
              <div key={s.title} className="flex gap-4 border border-gray-100 rounded-2xl p-5 hover:border-purple-200 transition-colors">
                <span className="text-sm font-bold text-purple-400 flex-shrink-0 pt-0.5">0{i+1}</span>
                <div>
                  <p className="font-semibold text-black mb-1">{s.title}</p>
                  <p className="text-black/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04 Screens */}
        <section>
          <StepTitle n="04" title="Design Screens" />
          <div className="flex flex-wrap justify-around gap-6 mb-6">
            <Img src="/images/Project_Images/Details/Wave/wavaPresent1.png" alt="Wave redesign screen 1" w={180} />
            <Img src="/images/Project_Images/Details/Wave/wavaPresent2.png" alt="Wave redesign screen 2" w={180} />
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden">
              <video autoPlay loop muted playsInline className="w-full max-w-xs h-auto rounded-2xl shadow-lg">
                <source src="https://res.cloudinary.com/docanichi/video/upload/v1752175194/waveRecord_qoi5g5.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* 05 Reflection */}
        <section>
          <StepTitle n="05" title="Reflections" />
          <p className="text-black/60 leading-relaxed text-lg">
            This redesign deepened my understanding of the unique challenges of financial UX — security perception, trust signals, and accessibility. It also gave me practice building a complete design system from scratch and maintaining consistency across 20+ screens.
          </p>
          <div className="mt-6 bg-purple-50 border-l-4 border-purple-400 p-5 rounded-r-2xl">
            <p className="text-purple-800 text-sm italic font-medium">
              &ldquo;The best fintech UX is the one that feels invisible — the user moves money without ever feeling like they&apos;re operating software.&rdquo;
            </p>
          </div>
        </section>

      </div>
    </article>
  );
}
