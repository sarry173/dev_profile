"use client";

import { useEffect, useRef, useState } from "react";
import { Smartphone, Globe, Code2, Layers, Database, Wrench } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Android Development",
    desc: "Native Android apps in Kotlin/Java using MVVM, Jetpack, Room, and SAP SDK — from SDK 2.1 through modern architectures.",
    color: "#1b63e8",
    bg: "#eef3ff",
  },
  {
    icon: Layers,
    title: "Flutter / Cross-Platform",
    desc: "High-fidelity Flutter apps with BLoC state management, Firebase, platform channels, and Play Store deployments.",
    color: "#f5b800",
    bg: "#fffbeb",
  },
  {
    icon: Smartphone,
    title: "React Native",
    desc: "Cross-platform mobile apps with React Native, Expo, Redux, and deep integration with native device APIs.",
    color: "#61dafb",
    bg: "#ecfeff",
  },
  {
    icon: Code2,
    title: "React.js / Next.js",
    desc: "Modern web frontends with React.js hooks, Next.js App Router, SSR/SSG, and Tailwind CSS — deployed on Vercel.",
    color: "#1b63e8",
    bg: "#eef3ff",
  },
  {
    icon: Globe,
    title: "Angular",
    desc: "Enterprise Angular dashboards with TypeScript, RxJS, Angular Material, NgRx state, and REST/GraphQL APIs.",
    color: "#dd0031",
    bg: "#fef2f2",
  },
  {
    icon: Wrench,
    title: "Tech Leadership",
    desc: "End-to-end SDLC ownership — architecture design, SonarQube/PMD code quality, team mentoring, and stakeholder communication.",
    color: "#f5b800",
    bg: "#fffbeb",
  },
];

const coreBadges = [
  "Kotlin", "Java", "Dart", "JavaScript", "TypeScript",
  "Flutter", "React Native", "React.js", "Next.js", "Angular",
  "SQLite", "Room", "Firebase", "Redux", "REST", "SOAP",
  "SAP SDK", "GraphQL", "FCM/GCM", "Android Studio", "Git",
  "Gradle", "Tailwind CSS", "Vercel", "SonarQube",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#1b63e8] font-mono text-sm font-semibold mb-2 tracking-widest uppercase">
            02. Services
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto">
            Six specialisations across mobile and web — delivered from design to production.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group p-6 rounded-2xl border border-[#e2e8f0] bg-white hover:border-[#1b63e8]/30 hover:shadow-lg transition-all duration-300 cursor-default ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: s.bg }}
              >
                <s.icon className="w-7 h-7" style={{ color: s.color }} />
              </div>

              <h3 className="text-[#111827] font-bold text-base mb-2 group-hover:text-[#1b63e8] transition-colors">
                {s.title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">{s.desc}</p>

              {/* Bottom accent */}
              <div
                className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${s.color}, #f5b800)` }}
              />
            </div>
          ))}
        </div>

        {/* Supporting tech badges */}
        <div className="text-center">
          <p className="text-[#9ca3af] text-xs mb-5 uppercase tracking-widest font-mono">
            Supporting Tech &amp; Tools
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {coreBadges.map((tech, i) => (
              <span
                key={tech}
                className={`px-3 py-1.5 rounded-lg bg-[#f0f5ff] border border-[#dbe4f5] text-xs text-[#4b5563] hover:text-[#1b63e8] hover:border-[#1b63e8]/40 hover:bg-[#eef3ff] transition-all duration-200 cursor-default font-mono ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${500 + i * 20}ms` }}
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
