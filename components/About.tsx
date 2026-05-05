"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Calendar } from "lucide-react";
import { personalInfo, aboutBio, skillBars, stats } from "@/data/config";

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
    <section
      id="about"
      className="py-24 px-6"
      style={{ background: "var(--surface-alt)" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="font-mono text-sm font-semibold mb-2 tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            01. About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: "var(--fg)" }}>
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
            <h3
              className="text-2xl md:text-3xl font-black mb-4"
              style={{ color: "var(--fg)" }}
            >
              {aboutBio.tagline}
            </h3>
            {aboutBio.paragraphs.map((para, i) => (
              <p key={i} className="leading-relaxed mb-4" style={{ color: "var(--fg-3)" }}>
                {para}
              </p>
            ))}

            {/* Quick info chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { Icon: MapPin, text: `${personalInfo.location} · Open to Relocation` },
                { Icon: Calendar, text: `${personalInfo.yearsExperience} Years in Software Development` },
              ].map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm shadow-sm"
                  style={{
                    background: "var(--card-bg)",
                    borderColor: "var(--border)",
                    color: "var(--fg-3)",
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: "var(--accent)" }} />
                  {text}
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center py-4 rounded-2xl border shadow-sm"
                  style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
                >
                  <div className="text-2xl font-black gradient-text">{value}</div>
                  <div
                    className="text-[10px] mt-1 font-mono uppercase tracking-wide leading-tight"
                    style={{ color: "var(--subtle)" }}
                  >
                    {label}
                  </div>
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
            <h4
              className="text-lg font-bold mb-6"
              style={{ color: "var(--fg)" }}
            >
              Core Technical Proficiency
            </h4>
            <div className="space-y-5">
              {skillBars.map((s, i) => (
                <div key={s.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold" style={{ color: "var(--fg)" }}>
                      {s.label}
                    </span>
                    <span className="text-sm font-bold" style={{ color: "var(--accent-2)" }}>
                      {s.level}%
                    </span>
                  </div>
                  <div
                    className="h-2.5 rounded-full overflow-hidden"
                    style={{ background: "var(--border)" }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: visible ? `${s.level}%` : "0%",
                        transitionDelay: `${i * 130}ms`,
                        background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights card */}
            <div
              className="mt-8 p-5 rounded-2xl border shadow-sm"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
            >
              <p
                className="text-xs font-mono uppercase tracking-widest mb-3"
                style={{ color: "var(--subtle)" }}
              >
                Currently at
              </p>
              <p className="font-bold text-lg mb-1" style={{ color: "var(--fg)" }}>
                {personalInfo.currentCompany}
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                {personalInfo.currentRole} — {personalInfo.currentScope}.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-600 text-xs font-semibold">
                  Open to opportunities · Available {personalInfo.availability}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
