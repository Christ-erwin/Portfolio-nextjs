import React from "react";

const hardSkills = [
  {
    category: "UX/UI Design",
    icon: "🎨",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Wireframing & Prototyping", level: 90 },
      { name: "UX Research & Audits", level: 80 },
      { name: "Design Systems", level: 75 },
      { name: "Interaction Design", level: 85 },
      { name: "User Journey Mapping", level: 80 },
    ],
  },
  {
    category: "Frontend Development",
    icon: "⚛️",
    skills: [
      { name: "React Native / React JS", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "HTML / CSS / Tailwind", level: 85 },
      { name: "JavaScript / TypeScript", level: 70 },
      { name: "NestJS / GraphQL", level: 60 },
      { name: "Expo", level: 75 },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 75 },
      { name: "Notion", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "FigJam", level: 80 },
      { name: "Slack / Linear / Jira", level: 70 },
    ],
  },
];

const softSkills = [
  { icon: "🔬", t: "Analytical thinking", d: "I break problems down before jumping to solutions." },
  { icon: "🤝", t: "Cross-functional collaboration", d: "Comfortable working with devs, PMs, and stakeholders." },
  { icon: "🎯", t: "User advocacy", d: "I defend design decisions with data and user empathy." },
  { icon: "⚡", t: "Autonomy & initiative", d: "I work without hand-holding — self-directed and proactive." },
  { icon: "⏱️", t: "Time management", d: "Remote-first mindset — async, focused, reliable on deadlines." },
  { icon: "💡", t: "Creative problem-solving", d: "I look for the simplest solution to the hardest problem." },
];

function Bar({ level }: { level: number }) {
  return (
    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div className="h-full grad-bg rounded-full" style={{ width: `${level}%` }}></div>
    </div>
  );
}

export default function SkillsSection2() {
  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">

        {/* Hard Skills */}
        <div>
          <p className="section-tag">Hard Skills</p>
          <div className="grid md:grid-cols-3 gap-6">
            {hardSkills.map(cat => (
              <div key={cat.category} className="bg-gray-50 rounded-2xl p-6">
                <p className="text-xl mb-1">{cat.icon}</p>
                <p className="font-semibold text-black mb-4">{cat.category}</p>
                <div className="flex flex-col gap-3">
                  {cat.skills.map(s => (
                    <div key={s.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-black/70">{s.name}</span>
                        <span className="text-xs text-black/30">{s.level}%</span>
                      </div>
                      <Bar level={s.level} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <p className="section-tag">Soft Skills</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map(s => (
              <div key={s.t} className="border border-gray-100 rounded-2xl p-5 hover:border-purple-200 transition-colors">
                <p className="text-2xl mb-3">{s.icon}</p>
                <p className="font-semibold text-black mb-1">{s.t}</p>
                <p className="text-black/50 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <p className="section-tag">Languages</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { lang: "French", level: "Native", pct: 100 },
              { lang: "English", level: "Intermediate (B2) — actively improving spoken fluency", pct: 70 },
            ].map(l => (
              <div key={l.lang} className="bg-gray-50 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-black">{l.lang}</p>
                  <span className="text-xs text-black/40">{l.level.split('—')[0].trim()}</span>
                </div>
                <Bar level={l.pct} />
                {l.level.includes('—') && <p className="text-xs text-black/30 mt-1.5">{l.level.split('—')[1].trim()}</p>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
