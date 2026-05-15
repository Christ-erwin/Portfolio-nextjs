import React from "react";
export default function SkillsSection1() {
  return (
    <section className="w-full min-h-[50vh] flex items-end px-6 pb-16 pt-32"
      style={{ backgroundImage: "url('/images/Skills_Images/bg_Cover.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-6xl w-full mx-auto">
        <p className="section-tag text-white/50" style={{ color: 'rgba(255,255,255,0.5)' }}>Skills & Tools</p>
        <h1 className="text-4xl md:text-6xl font-bold text-black max-w-xl leading-tight">
          My <span className="grad-text">craft</span>
        </h1>
        <p className="text-black/50 mt-3 max-w-lg text-lg">
          Design thinking backed by technical fluency. I speak both design and code.
        </p>
      </div>
    </section>
  );
}
