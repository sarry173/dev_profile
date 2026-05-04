"use client";

import { useEffect, useRef, useState } from "react";

type Category = {
  title: string;
  type: "mobile" | "web";
  color: string;
  skills: { name: string; level: number }[];
};

const skillCategories: Category[] = [
  {
    title: "Android",
    type: "mobile",
    color: "#6c63ff",
    skills: [
      { name: "Kotlin", level: 96 },
      { name: "Java (Android)", level: 90 },
      { name: "MVVM / MVP / MVC", level: 95 },
      { name: "Jetpack (Room, LiveData)", level: 88 },
      { name: "SAP Android SDK", level: 85 },
    ],
  },
  {
    title: "Flutter",
    type: "mobile",
    color: "#00d4aa",
    skills: [
      { name: "Flutter (Dart)", level: 88 },
      { name: "State Management (BLoC)", level: 82 },
      { name: "Flutter Firebase", level: 85 },
      { name: "Platform Channels", level: 78 },
      { name: "Flutter Web / Desktop", level: 70 },
    ],
  },
  {
    title: "React Native",
    type: "mobile",
    color: "#61dafb",
    skills: [
      { name: "React Native (JS/TS)", level: 78 },
      { name: "Expo", level: 74 },
      { name: "Navigation (React Nav)", level: 80 },
      { name: "Redux / Context API", level: 76 },
      { name: "Native Modules", level: 70 },
    ],
  },
  {
    title: "React.js",
    type: "web",
    color: "#ff6b6b",
    skills: [
      { name: "React.js (Hooks)", level: 84 },
      { name: "TypeScript", level: 80 },
      { name: "Redux / Zustand", level: 78 },
      { name: "REST / GraphQL", level: 82 },
      { name: "Testing (Jest / RTL)", level: 72 },
    ],
  },
  {
    title: "Next.js",
    type: "web",
    color: "#ffd93d",
    skills: [
      { name: "Next.js 14+ (App Router)", level: 82 },
      { name: "SSR / SSG / ISR", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "API Routes", level: 78 },
      { name: "Vercel Deployment", level: 84 },
    ],
  },
  {
    title: "Angular",
    type: "web",
    color: "#dd0031",
    skills: [
      { name: "Angular (TypeScript)", level: 75 },
      { name: "RxJS / Observables", level: 72 },
      { name: "Angular Material", level: 74 },
      { name: "NgRx", level: 68 },
      { name: "Angular CLI", level: 76 },
    ],
  },
];

const coreBadges = [
  "Kotlin", "Java", "Dart", "JavaScript", "TypeScript",
  "Flutter", "React Native", "React.js", "Next.js", "Angular",
  "SQLite", "Realm", "Room", "Firebase", "Redux",
  "REST", "SOAP", "SAP SDK", "GraphQL", "FCM/GCM",
  "Android Studio", "VS Code", "Git", "Gradle", "Tailwind CSS",
  "Vercel", "Google Maps", "ExoPlayer", "Fabric", "SonarQube",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "mobile" | "web">("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.type === activeTab);

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6c63ff]/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-[#6c63ff] font-mono text-sm font-medium mb-3 tracking-widest uppercase">
            02. Technical Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Full Stack <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Mobile-first to web-ready — 6 platforms, 12+ years of mastery
          </p>
        </div>

        {/* Tab filter */}
        <div className="flex justify-center gap-2 mb-10">
          {(["all", "mobile", "web"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-all duration-200 ${
                activeTab === tab
                  ? "bg-[#6c63ff] text-white"
                  : "glass-card text-white/40 hover:text-white border border-white/5"
              }`}
            >
              {tab === "all"
                ? "All (6)"
                : tab === "mobile"
                ? "📱 Mobile (3)"
                : "🌐 Web (3)"}
            </button>
          ))}
        </div>

        {/* Skill categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filtered.map((category, catIdx) => (
            <div
              key={category.title}
              className={`glass-card rounded-2xl p-6 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${catIdx * 80}ms` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <h3
                  className="text-sm font-mono font-bold tracking-widest uppercase"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
                <span
                  className="text-xs px-2 py-0.5 rounded-md font-mono"
                  style={{
                    background: `${category.color}15`,
                    color: category.color,
                  }}
                >
                  {category.type === "mobile" ? "Mobile" : "Web"}
                </span>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-white/75 text-sm font-medium">{skill.name}</span>
                      <span className="text-white/30 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: visible ? `${skill.level}%` : "0%",
                          background: `linear-gradient(90deg, ${category.color}80, ${category.color})`,
                          transitionDelay: `${catIdx * 80 + idx * 70}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Supporting tech */}
        <div className="text-center">
          <p className="text-white/30 text-xs mb-5 uppercase tracking-widest font-mono">
            Supporting Tech & Tools
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {coreBadges.map((tech, idx) => (
              <span
                key={tech}
                className={`px-3 py-1.5 rounded-lg glass-card text-xs text-white/45 border border-white/5 hover:text-[#6c63ff] hover:border-[#6c63ff]/30 transition-all duration-200 cursor-default font-mono ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${idx * 25}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
