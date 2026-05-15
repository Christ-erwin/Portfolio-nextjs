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

export default function FoodygoSection2() {
  return (
    <article className="w-full bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">

        <div className="grid md:grid-cols-3 gap-4">
          {[["Role","Full UX/UI Design · Visual Identity"],["Type","Personal Concept Project"],["Tools","Figma · FigJam"]].map(([k,v])=>(
            <div key={k} className="bg-gray-50 rounded-2xl p-5">
              <p className="text-xs text-black/40 font-semibold uppercase tracking-wider mb-1">{k}</p>
              <p className="text-black font-semibold">{v}</p>
            </div>
          ))}
        </div>

        <section>
          <StepTitle n="01" title="Project Context" />
          <p className="text-black/60 text-lg leading-relaxed">
            FoodyGo is a restaurant app concept for a fictional local restaurant looking to digitize its service. Beyond just design, this project includes full visual identity work — logo, color palette, typography — making it a brand-to-product exercise. The goal: make food ordering feel effortless, joyful, and fast.
          </p>
        </section>

        <section>
          <StepTitle n="02" title="User Research" />
          <p className="text-black/60 mb-6">I analyzed 3 popular food ordering apps (Uber Eats, Deliveroo, local competitors) and identified the key friction points users complain about:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "🛒", p: "Checkout flow too long — users abandon at payment step." },
              { icon: "🍽️", p: "Poor menu organization — no clear categories, no photos for every item." },
              { icon: "📍", p: "Order tracking is stressful — vague ETAs, no visual progress." },
              { icon: "🔁", p: "No easy reordering — users must search from scratch every time." },
            ].map((p,i) => (
              <div key={i} className="flex gap-4 bg-gray-50 rounded-2xl p-5">
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <p className="text-black/60 text-sm leading-relaxed">{p.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <StepTitle n="03" title="Visual Identity" />
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-black/60 mb-4 leading-relaxed">Before designing screens, I defined the brand identity to ensure every design decision was consistent:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-xs font-bold text-black/40 uppercase tracking-wider mb-2">Color Palette</p>
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-lg bg-red-500"></div>
                  <div className="w-10 h-10 rounded-lg bg-yellow-400"></div>
                  <div className="w-10 h-10 rounded-lg bg-gray-900"></div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200"></div>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-black/40 uppercase tracking-wider mb-2">Tone</p>
                <p className="text-black/60 text-sm">Warm, energetic, appetizing. Colors that make food look delicious.</p>
              </div>
              <div>
                <p className="text-xs font-bold text-black/40 uppercase tracking-wider mb-2">Typography</p>
                <p className="text-black/60 text-sm">Bold headlines for menu items, clean body text for descriptions and prices.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <StepTitle n="04" title="UX Solutions" />
          <div className="flex flex-col gap-4">
            {[
              { t: "Category-Based Menu Navigation", d: "Starters, Mains, Desserts, Drinks — clearly segmented with sticky tabs. No scrolling through 50 items to find what you want." },
              { t: "Visual-First Dish Cards", d: "Every dish has a hero photo, short description, and price visible at a glance. Good food photography is the best conversion tool." },
              { t: "Customizable Orders", d: "Cooking preferences, extras, and modifications handled inline before adding to cart — not as a confusing step at checkout." },
              { t: "One-Page Checkout", d: "Reduced checkout to a single screen: cart summary + delivery address + payment. Minimal steps = lower abandonment rate." },
              { t: "Live Order Tracking", d: "Visual step-by-step tracker (Confirmed → Preparing → On the way → Delivered) with real-time ETA. Reduces anxiety and support requests." },
              { t: "Smart Reordering", d: "\"Order again\" button on past orders. Saved favorites. Frequently ordered items surfaced on the home screen." },
            ].map((s,i) => (
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/images/Project_Images/Details/Foodygo/foodygoReal1.png", label: "Home & Menu" },
              { src: "/images/Project_Images/Details/Foodygo/foodygoReal2.png", label: "Dish Detail" },
              { src: "/images/Project_Images/Details/Foodygo/foodygoReal3.png", label: "Cart & Checkout" },
              { src: "/images/Project_Images/Details/Foodygo/foodygoReal4.png", label: "Order Tracking" },
              { src: "/images/Project_Images/Details/Foodygo/foodygoReal5.png", label: "Profile" },
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
            FoodyGo gave me deep practice in e-commerce UX — particularly the psychology of conversion at each step of a purchase funnel. I learned that in food apps, the visual quality of content is as important as the UX structure. And that reducing the checkout to a single screen is often the single highest-impact UX decision you can make.
          </p>
          <div className="mt-6 bg-purple-50 border-l-4 border-purple-400 p-5 rounded-r-2xl">
            <p className="text-purple-800 text-sm italic font-medium">
              &ldquo;In food ordering, every additional step is a potential exit. My goal was to get users from &lsquo;I&apos;m hungry&rsquo; to &lsquo;order confirmed&rsquo; in under 90 seconds.&rdquo;
            </p>
          </div>
        </section>

      </div>
    </article>
  );
}
