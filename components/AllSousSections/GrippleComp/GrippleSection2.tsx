import Image from "next/image";
import React from "react";

function Img({ src, alt, w = 280 }: { src: string; alt: string; w?: number }) {
  return <Image src={src} alt={alt} width={w} height={0} className="rounded-2xl w-full h-auto" />;
}
function StepTitle({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="step-badge">{n}</span>
      <h2 className="text-2xl md:text-3xl font-bold text-black">{title}</h2>
    </div>
  );
}

export default function GrippleSection2() {
  return (
    <article className="w-full bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">

        <div className="grid md:grid-cols-3 gap-4">
          {[["Role","Solo UX/UI Designer"],["Type","Personal Concept Project"],["Tools","Figma · FigJam"]].map(([k,v])=>(
            <div key={k} className="bg-gray-50 rounded-2xl p-5">
              <p className="text-xs text-black/40 font-semibold uppercase tracking-wider mb-1">{k}</p>
              <p className="text-black font-semibold">{v}</p>
            </div>
          ))}
        </div>

        <section>
          <StepTitle n="01" title="Project Context" />
          <p className="text-black/60 text-lg leading-relaxed">
            Gripple started from a personal observation: existing social networks are engineered for addiction, not connection. Infinite scroll, algorithmic manipulation, and notification overload make them exhausting to use. I asked: what would a social app look like if it were designed for meaningful interaction instead of maximum engagement time?
          </p>
        </section>

        <section>
          <StepTitle n="02" title="Problem Statement" />
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "🔄", p: "Infinite scroll and algorithmic feeds trap users in passive consumption loops." },
              { icon: "🔔", p: "Notification overload creates anxiety and compulsive checking behavior." },
              { icon: "👁️", p: "Vanity metrics (likes, follower count) distort self-expression and genuine connection." },
              { icon: "🌪️", p: "Feature bloat — Stories, Reels, Shops, Ads — clutters the core social experience." },
            ].map((p,i) => (
              <div key={i} className="flex gap-4 bg-gray-50 rounded-2xl p-5">
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <p className="text-black/60 text-sm leading-relaxed">{p.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="03" title="Design Principles" />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: "Intentional by Design", d: "No infinite scroll. Feed has a visible end. Users browse with purpose, not compulsion." },
              { t: "Content First", d: "No like counts visible to others. No follower vanity metrics. Your posts stand on their content alone." },
              { t: "Calm Interface", d: "Generous whitespace, muted palette, no flashing notifications. An app that respects your attention." },
            ].map(p => (
              <div key={p.t} className="bg-gray-50 rounded-2xl p-5">
                <p className="font-semibold text-black mb-2">{p.t}</p>
                <p className="text-black/50 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="04" title="Key Features Designed" />
          <div className="flex flex-col gap-3">
            {[
              "Sign up / Login with clean onboarding",
              "Create posts — text, photo, video — with minimal friction",
              "Minimalist feed with no algorithmic manipulation",
              "Thoughtful reactions (beyond just likes)",
              "Follow system with mutual connection focus",
              "User profile — bio, posts, no public vanity metrics",
              "Notification center with calm, grouped alerts (not red badges)",
            ].map((f,i) => (
              <div key={i} className="flex items-start gap-3 border border-gray-100 rounded-xl p-4">
                <span className="w-5 h-5 rounded-full grad-bg flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">✓</span>
                <p className="text-black/70 text-sm">{f}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="05" title="Screens" />
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: "/images/Project_Images/Details/Gripple/grippleReal2.png", label: "Home Feed" },
              { src: "/images/Project_Images/Details/Gripple/grippleReal3.png", label: "Post Detail" },
              { src: "/images/Project_Images/Details/Gripple/grippleReal4.png", label: "Profile" },
              { src: "/images/Project_Images/Details/Gripple/grippleReal7.png", label: "Create Post" },
            ].map(s => (
              <div key={s.label}>
                <Img src={s.src} alt={s.label} w={220} />
                <p className="text-center text-xs text-black/30 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="06" title="Reflections" />
          <p className="text-black/60 text-lg leading-relaxed">
            Gripple taught me how powerful design constraints can be. By deliberately removing features (infinite scroll, public like counts), the interface became cleaner, calmer, and more honest. This project deepened my understanding of ethical design — and how the choices we make as designers shape user behavior at scale.
          </p>
          <div className="mt-6 bg-purple-50 border-l-4 border-purple-400 p-5 rounded-r-2xl">
            <p className="text-purple-800 text-sm italic font-medium">
              &ldquo;The most powerful design decision I made on Gripple was what to remove. Every deletion was a deliberate act of respect for the user&apos;s attention.&rdquo;
            </p>
          </div>
        </section>

      </div>
    </article>
  );
}
