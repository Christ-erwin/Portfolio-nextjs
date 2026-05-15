import React from "react";
export default function AboutSection1() {
  return (
    <section className="w-full min-h-[50vh] flex items-end px-6 pb-16 pt-32 bg-[#F8F7F4]">
      <div className="max-w-6xl w-full mx-auto">
        <p className="section-tag">About me</p>
        <h1 className="text-4xl md:text-6xl font-bold text-black max-w-2xl leading-tight">
          Designer who <span className="grad-text">thinks in code</span>
        </h1>
      </div>
    </section>
  );
}
