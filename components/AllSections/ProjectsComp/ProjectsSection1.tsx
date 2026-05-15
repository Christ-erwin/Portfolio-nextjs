import React from "react";

export default function ProjectsSection1() {
  return (
    <section className="w-full min-h-[50vh] flex items-end px-6 pb-16 pt-32"
      style={{ backgroundImage: "url('https://res.cloudinary.com/docanichi/image/upload/v1778835491/Frame_79c%CC%A72_l9zbwy.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-6xl w-full mx-auto">
        <p className="section-tag text-white/60" style={{ color: 'rgba(255,255,255,0.6)' }}>Portfolio</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight mb-4">
          Work that speaks<br /><span className="grad-text">for itself</span>
        </h1>
        <p className="text-white/50 text-lg max-w-lg">
          Each project is a story — a problem, a process, and a solution.
        </p>
      </div>
    </section>
  );
}
