'use client';
import Link from "next/link";
import React, { useEffect, useState } from 'react';

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "10+", label: "Projects delivered" },
  { value: "3", label: "Companies" },
];

export default function HomeSection1() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 pt-20 pb-16 bg-white">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — text */}
        <div className={`flex flex-col gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
              style={{ backgroundImage: "url('https://res.cloudinary.com/docanichi/image/upload/v1752175194/myFace_wuyvpn.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </span>
            <span className="text-sm text-black/50 font-medium">Available for remote work</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight tracking-tight">
            UI/UX Designer<br />
            <span className="grad-text">&amp; Frontend Dev</span>
          </h1>

          <p className="text-black/55 text-lg leading-relaxed max-w-md">
            I design mobile and web products that are both beautiful and buildable.
            From UX research to React Native — I bridge design and engineering so your product ships faster and feels right.
          </p>

          <div className="flex items-center gap-2 text-sm text-black/40 font-medium">
            <span>✦ Abidjan, Côte d&apos;Ivoire</span>
            <span>·</span>
            <span>Remote Worldwide</span>
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            <Link href="/projects">
              <span className="grad-bg text-white font-semibold px-7 py-3.5 rounded-full text-sm inline-block">
                View my work
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-sm font-semibold text-black border border-black/20 px-7 py-3.5 rounded-full inline-block hover:bg-gray-50 transition-colors">
                Contact me
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-4 border-t border-gray-100">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-black">{s.value}</p>
                <p className="text-xs text-black/40 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — photo + tags */}
        <div className={`relative flex justify-center transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
              style={{ backgroundImage: "url('https://res.cloudinary.com/docanichi/image/upload/v1752175194/myFace_wuyvpn.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
            {/* Floating tags */}
            <div className="absolute -top-4 -right-4 bg-white border border-gray-100 rounded-2xl shadow-lg px-4 py-2.5">
              <p className="text-xs font-semibold text-black">🎨 UI/UX Design</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 rounded-2xl shadow-lg px-4 py-2.5">
              <p className="text-xs font-semibold text-black">⚛️ React Native/ Js / Next JS</p>
            </div>
            <div className="absolute top-1/2 -right-10 bg-black rounded-2xl shadow-lg px-4 py-2.5">
              <p className="text-xs font-semibold text-white">🌍 Remote-ready</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
