'use client';
import React from "react";
import { useRouter } from "next/navigation";

export default function HomeLinkSection1() {
  const router = useRouter();

  return (
    <div className="relative w-full h-max-fit flex justify-center items-center px-[5%] shadow-lg">
      <button
        onClick={() => router.back()}
        className="absolute top-24 left-6 z-10 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/20 transition-all"
      >
        ← Back
      </button>
      <div
        className="w-full max-w-[2028px] h-[80vh] flex justify-start items-end relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/docanichi/image/upload/v1778846969/Free_iPhone_17_Pro_f9dyxw.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mb-[3%] ml-[3%]">
          <div className="mb-4">
            <span className="bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full backdrop-blur-sm">
              Client Project · Pommy
            </span>
          </div>
          <div className="mb-[5%]">
            <p className="text-white text-4xl 2xl:text-7xl font-bold">
              HomeLink
            </p>
          </div>
          <div className="mb-7">
            <p className="text-white text-lg 2xl:text-2xl font-semibold">
              Smart Home App — Buy, Install &amp; Control
              <br />
              your connected devices from one place
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">
              UX Research
            </span>
            <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">
              UI Design
            </span>
            <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">
              Prototyping
            </span>
            <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">
              iOS &amp; Android
            </span>
            <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">
              Design System
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
