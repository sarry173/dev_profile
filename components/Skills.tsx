"use client";

import { useEffect, useRef, useState } from "react";
import { FaAndroid, FaReact, FaAngular, FaUsersCog, FaRobot } from "react-icons/fa";
import { SiFlutter, SiNextdotjs } from "react-icons/si";
import { services, coreBadges, type ServiceIconName } from "@/data/config";

const iconMap: Record<ServiceIconName, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  FaRobot,
  FaAndroid,
  SiFlutter,
  FaReact,
  SiNextdotjs,
  FaAngular,
  FaUsersCog,
};

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
    <section
      id="skills"
      className="py-24 px-6"
      style={{ background: "var(--bg)" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="font-mono text-sm font-semibold mb-2 tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            02. Services
          </p>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: "var(--fg)" }}
          >
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Six specialisations across mobile and web — delivered from design to production.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((s, i) => {
            const Icon = iconMap[s.iconName];
            return (
              <div
                key={s.title}
                className={`group p-6 rounded-2xl border transition-all duration-300 cursor-default ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--border)",
                  transitionDelay: `${i * 80}ms`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-o30)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px var(--accent-o10)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: s.bg }}
                >
                  <Icon className="w-7 h-7" style={{ color: s.color }} />
                </div>

                <h3
                  className="font-bold text-base mb-2 group-hover:transition-colors"
                  style={{ color: "var(--fg)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--fg)")
                  }
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {s.desc}
                </p>

                {/* Bottom accent */}
                <div
                  className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${s.color}, var(--accent-2))` }}
                />
              </div>
            );
          })}
        </div>

        {/* Supporting tech badges */}
        <div className="text-center">
          <p
            className="text-xs mb-5 uppercase tracking-widest font-mono"
            style={{ color: "var(--subtle)" }}
          >
            Supporting Tech &amp; Tools
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {coreBadges.map((tech, i) => (
              <span
                key={tech}
                className={`px-3 py-1.5 rounded-lg border text-xs cursor-default font-mono transition-all duration-200 ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border-light)",
                  color: "var(--fg-3)",
                  transitionDelay: `${500 + i * 20}ms`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-o40)";
                  (e.currentTarget as HTMLElement).style.background = "var(--surface-accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--fg-3)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)";
                  (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                }}
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
