"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { timeline } from "@/data/config";

export default function Experience() {
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
    <section
      id="experience"
      className="py-24 px-6"
      style={{ background: "var(--surface-alt)" }}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="font-mono text-sm font-semibold mb-2 tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            03. Experience
          </p>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ color: "var(--fg)" }}
          >
            My <span className="gradient-text">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line opacity-40 -translate-x-px" />

          <div className="space-y-8">
            {timeline.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const isWork = exp.type === "work";

              return (
                <div
                  key={idx}
                  className={`relative flex gap-6 md:gap-0 transition-all duration-700 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? "md:pr-10" : "md:pl-10"} ml-16 md:ml-0`}>
                    <div
                      className="rounded-2xl p-5 border transition-all duration-300"
                      style={{
                        background: "var(--card-bg)",
                        borderColor: "var(--border)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-o30)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px var(--accent-o10)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-bold text-base" style={{ color: "var(--fg)" }}>
                            {exp.role}
                          </h3>
                          <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                            {exp.company}
                          </p>
                        </div>
                        <span
                          className="text-xs px-2 py-1 rounded-lg font-mono flex-shrink-0 font-semibold"
                          style={
                            isWork
                              ? { background: "var(--surface-accent)", color: "var(--accent)" }
                              : { background: "var(--surface-accent-2)", color: "#d97706" }
                          }
                        >
                          {isWork ? "Work" : "Edu"}
                        </span>
                      </div>

                      <div
                        className="flex flex-wrap gap-2 text-xs font-mono mb-3"
                        style={{ color: "var(--subtle)" }}
                      >
                        <span>{exp.period}</span>
                        <span>·</span>
                        <span>{exp.location}</span>
                      </div>

                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--fg-3)" }}>
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-md text-xs font-mono border"
                            style={{
                              background: "var(--surface)",
                              color: "var(--fg-3)",
                              borderColor: "var(--border-light)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className="absolute left-6 md:left-1/2 top-5 -translate-x-1/2 z-10 w-12 h-12 rounded-xl border-2 shadow-sm flex items-center justify-center"
                    style={{
                      background: "var(--card-bg)",
                      borderColor: "var(--accent-o40)",
                    }}
                  >
                    {isWork
                      ? <Briefcase className="w-5 h-5" style={{ color: "var(--accent)" }} />
                      : <GraduationCap className="w-5 h-5" style={{ color: "var(--accent-2)" }} />
                    }
                  </div>

                  <div className="hidden md:block md:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
