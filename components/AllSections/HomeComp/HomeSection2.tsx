import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandDribbbleFilled } from "react-icons/tb";
import { FaUpwork, FaGithub, FaBehance } from "react-icons/fa6";

const socials = [
  { name: "LinkedIn", icon: FaLinkedin, color: "#0A66C2", url: "https://www.linkedin.com/in/christ-erwin-fram-696a69257/" },
  { name: "Behance", icon: FaBehance, color: "#0052FE", url: "https://www.behance.net/christerwinfram" },
  { name: "Dribbble", icon: TbBrandDribbbleFilled, color: "#E74D89", url: "https://dribbble.com/erwin270" },
  { name: "Upwork", icon: FaUpwork, color: "#14A800", url: "https://www.upwork.com/freelancers/~010c58c0b2c056db71" },
  { name: "GitHub", icon: FaGithub, color: "#111", url: "https://github.com/Christ-erwin" },
];

const services = [
  { icon: "🔍", title: "UX Research", desc: "User interviews, competitive analysis, usability audits to understand the problem before solving it." },
  { icon: "🎨", title: "UI Design", desc: "High-fidelity mockups, design systems, and interactive Figma prototypes ready for handoff." },
  { icon: "⚛️", title: "Frontend Dev", desc: "React Native, React JS, Tailwind — I implement designs with precision and speed." },
  { icon: "📐", title: "Design Systems", desc: "Scalable component libraries that keep products consistent as they grow." },
];

export default function HomeSection2() {
  return (
    <section className="w-full bg-[#F8F7F4] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">

        {/* Services */}
        <div>
          <p className="section-tag">What I do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 max-w-lg">
            Design that&apos;s beautiful<br />and <span className="grad-text">buildable</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <p className="text-3xl mb-4">{s.icon}</p>
                <p className="font-semibold text-black text-base mb-2">{s.title}</p>
                <p className="text-black/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Find me on */}
        <div>
          <p className="section-tag">Find me on</p>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-5 py-3 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                  <Icon style={{ color: s.color }} className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium text-black">{s.name}</span>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
