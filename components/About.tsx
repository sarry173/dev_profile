"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Calendar } from "lucide-react";

const skills = [
  { label: "Android (Kotlin / Java)", level: 95 },
  { label: "Flutter (Dart)",          level: 88 },
  { label: "React Native",            level: 78 },
  { label: "React.js / Next.js",      level: 84 },
  { label: "Angular",                 level: 75 },
];

const stats = [
  { value: "12+",  label: "Years Experience" },
  { value: "20+",  label: "Apps Shipped" },
  { value: "6",    label: "Tech Stacks" },
  { value: "F500", label: "Clients" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6 bg-[#f8faff]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#1b63e8] font-mono text-sm font-semibold mb-2 tracking-widest uppercase">
            01. About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827]">
            Know Who <span className="gradient-text">I Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ── Left: Text ── */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-black text-[#111827] mb-4">
              Mobile-first. Web-fluent. 12 years of shipping.
            </h3>
            <p className="text-[#4b5563] leading-relaxed mb-4">
              I&apos;m a Senior Mobile Engineer and Senior Manager with 12+ years spanning the full
              spectrum of modern development — from{" "}
              <span className="text-[#1b63e8] font-semibold">Android (Kotlin/Java)</span>,{" "}
              <span className="text-[#1b63e8] font-semibold">Flutter</span>, and{" "}
              <span className="text-[#1b63e8] font-semibold">React Native</span> on mobile, to{" "}
              <span className="text-[#1b63e8] font-semibold">React.js, Next.js</span>, and{" "}
              <span className="text-[#1b63e8] font-semibold">Angular</span> on the web.
            </p>
            <p className="text-[#4b5563] leading-relaxed mb-8">
              Led SDLC for 20+ enterprise apps for Fortune 500 clients including Reliance Industries.
              I champion clean architecture, performance-first thinking, and team mentorship.
            </p>

            {/* Quick info chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#e2e8f0] text-[#4b5563] text-sm shadow-sm">
                <MapPin className="w-4 h-4 text-[#1b63e8]" />
                Mumbai, India · Open to Relocation
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#e2e8f0] text-[#4b5563] text-sm shadow-sm">
                <Calendar className="w-4 h-4 text-[#1b63e8]" />
                12+ Years in Software Development
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center py-4 bg-white rounded-2xl border border-[#e2e8f0] shadow-sm">
                  <div className="text-2xl font-black gradient-text">{value}</div>
                  <div className="text-[#9ca3af] text-[10px] mt-1 font-mono uppercase tracking-wide leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Skill bars ── */}
          <div
            className={`transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h4 className="text-lg font-bold text-[#111827] mb-6">Core Technical Proficiency</h4>
            <div className="space-y-5">
              {skills.map((s, i) => (
                <div key={s.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#111827] text-sm font-semibold">{s.label}</span>
                    <span className="text-[#f5b800] text-sm font-bold">{s.level}%</span>
                  </div>
                  <div className="h-2.5 bg-[#e5e9f5] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#1b63e8] to-[#f5b800] transition-all duration-1000 ease-out"
                      style={{
                        width: visible ? `${s.level}%` : "0%",
                        transitionDelay: `${i * 130}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights card */}
            <div className="mt-8 p-5 bg-white rounded-2xl border border-[#e2e8f0] shadow-sm">
              <p className="text-xs font-mono text-[#9ca3af] uppercase tracking-widest mb-3">Currently at</p>
              <p className="text-[#111827] font-bold text-lg mb-1">Reliance Jio</p>
              <p className="text-[#6b7280] text-sm">Senior Manager Software Development — leading Android &amp; Flutter teams serving 100K+ enterprise employees.</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-600 text-xs font-semibold">Open to opportunities · Available June 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
