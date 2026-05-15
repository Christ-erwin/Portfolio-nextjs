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

export default function MoovyFlixSection2() {
  return (
    <article className="w-full bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">

        <div className="grid md:grid-cols-3 gap-4">
          {[["Role","Solo UX/UI Designer"],["Type","Personal Concept Project"],["Tools","Figma · FigJam · Protopie"]].map(([k,v])=>(
            <div key={k} className="bg-gray-50 rounded-2xl p-5">
              <p className="text-xs text-black/40 font-semibold uppercase tracking-wider mb-1">{k}</p>
              <p className="text-black font-semibold">{v}</p>
            </div>
          ))}
        </div>

        <section>
          <StepTitle n="01" title="Project Context" />
          <p className="text-black/60 leading-relaxed text-lg">
            MoovyFlix is a concept streaming app designed entirely from scratch. The challenge: compete with Netflix, Prime, and Disney+ by solving the UX problems they still haven&apos;t fixed. I used this project to practice the full design process — from user research to a polished, interactive prototype with a complete design system.
          </p>
        </section>

        <section>
          <StepTitle n="02" title="Problem Statement" />
          <p className="text-black/60 mb-6">After analyzing 3 major streaming platforms as a user, I identified recurring pain points:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "🗂️", p: "Cluttered home screens that overwhelm rather than guide the user toward content." },
              { icon: "🎯", p: "Poor content recommendation — &ldquo;continue watching&rdquo; buried deep, no smart suggestions." },
              { icon: "🔍", p: "Weak search and filter — hard to find content by genre, language, or mood." },
              { icon: "🎬", p: "No visual distinction between movies, series, and documentaries at a glance." },
            ].map((p,i) => (
              <div key={i} className="flex gap-4 bg-gray-50 rounded-2xl p-5">
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <p className="text-black/60 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: p.p }} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="03" title="User Persona" />
          <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-6 border border-purple-100">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full grad-bg flex items-center justify-center text-white font-bold text-lg">K</div>
              <div>
                <p className="font-bold text-black">Kofi, 27 — Urban Professional</p>
                <p className="text-black/40 text-sm">Watches 2–3h of content per evening after work</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-bold text-black/40 uppercase tracking-wider mb-2">Goals</p>
                {["Find something good to watch fast","Pick up where he left off easily","Discover new content without effort"].map(g=>(
                  <p key={g} className="text-black/60 text-sm mb-1">→ {g}</p>
                ))}
              </div>
              <div>
                <p className="text-xs font-bold text-black/40 uppercase tracking-wider mb-2">Frustrations</p>
                {["Spends 15 min choosing, then gives up","Forgets where he stopped in a series","Recommendations are irrelevant"].map(f=>(
                  <p key={f} className="text-red-400 text-sm mb-1">✗ {f}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <StepTitle n="04" title="UX Solutions" />
          <div className="flex flex-col gap-4">
            {[
              { t: "Smart Home Screen", d: "Organized into clear zones: \"Continue Watching\" at the top, then \"Trending\", \"New Releases\", and \"For You\" — each with a clear visual hierarchy so users find content in seconds." },
              { t: "Advanced Filter System", d: "Search by genre, format (movie/series/doc), duration, language, and mood. Users can discover by what they feel like watching, not just what they know." },
              { t: "Immersive Detail Page", d: "Full-bleed hero with trailer preview, synopsis, cast, user ratings, and content tags. A prominent play button with resume detection." },
              { t: "Dark-First Design System", d: "Built a full dark-mode design system optimized for evening/low-light viewing — high contrast content cards, muted backgrounds, cinematic feel." },
              { t: "Mini-Player & Continuity", d: "A floating mini-player persists while browsing. \"Continue Watching\" is always visible on the home screen — no hunting required." },
            ].map((s,i)=>(
              <div key={s.t} className="flex gap-4 border border-gray-100 rounded-2xl p-5 hover:border-purple-200 transition-colors">
                <span className="text-sm font-bold text-purple-400 flex-shrink-0 pt-0.5">0{i+1}</span>
                <div>
                  <p className="font-semibold text-black mb-1">{s.t}</p>
                  <p className="text-black/50 text-sm leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="05" title="Screens" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/Project_Images/Details/MoovyFlix/moovyReal1.png", label: "Onboarding" },
              { src: "/images/Project_Images/Details/MoovyFlix/moovyReal2.png", label: "Home" },
              { src: "/images/Project_Images/Details/MoovyFlix/moovyReal3.png", label: "Content Detail" },
              { src: "/images/Project_Images/Details/MoovyFlix/moovyReal4.png", label: "Search & Filter" },
              { src: "/images/Project_Images/Details/MoovyFlix/moovyReal5.png", label: "Profile" },
              { src: "/images/Project_Images/Details/MoovyFlix/moovyReal6.png", label: "Player" },
            ].map(s => (
              <div key={s.label}>
                <Img src={s.src} alt={s.label} w={200} />
                <p className="text-center text-xs text-black/30 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="06" title="Reflections" />
          <p className="text-black/60 text-lg leading-relaxed">
            MoovyFlix sharpened my ability to design complex information architectures and content-heavy interfaces. Building a full design system for dark mode taught me how to handle contrast, color, and readability at scale. It also deepened my understanding of how personalization drives retention in consumer apps.
          </p>
          <div className="mt-6 bg-purple-50 border-l-4 border-purple-400 p-5 rounded-r-2xl">
            <p className="text-purple-800 text-sm italic font-medium">
              &ldquo;In entertainment UX, reducing the time to first play is the metric that matters most. Every decision I made was tested against that criterion.&rdquo;
            </p>
          </div>
        </section>

      </div>
    </article>
  );
}
