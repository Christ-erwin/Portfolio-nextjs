import React from "react";
export default function GrippleSection1() {
  return (
    <section className="w-full min-h-[80vh] flex items-end px-6 pb-16 pt-32 shadow-lg"
      style={{ backgroundImage: "url('https://res.cloudinary.com/docanichi/image/upload/v1752175191/coverGrippleBg_gltgte.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-6xl w-full mx-auto">
        <div className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20 mb-6">
          Personal Project · Social Media · Mobile App
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Gripple</h1>
        <p className="text-white/60 text-xl max-w-xl mb-6">A minimalist social network designed for meaningful, distraction-free interaction</p>
        <div className="flex flex-wrap gap-3">
          {["UX Research","UI Design","Social App","Mobile","Figma","Prototyping"].map(t => (
            <span key={t} className="text-white/60 text-xs border border-white/20 px-3 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
