"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { projects } from "@/data/config";

type Filter = "all" | "featured" | "mobile" | "web" | "ai";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter]   = useState<Filter>("featured");

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  const filtered =
    filter === "featured" ? projects.filter((p) => p.featured) :
    filter === "mobile"   ? projects.filter((p) => p.type === "mobile") :
    filter === "web"      ? projects.filter((p) => p.type === "web") :
    filter === "ai"       ? projects.filter((p) => p.type === "ai") :
    projects;

  const tabs: { key: Filter; label: string }[] = [
    { key: "all",      label: `All (${projects.length})` },
    { key: "featured", label: "⭐ Featured" },
    { key: "mobile",   label: "📱 Mobile" },
    { key: "web",      label: "🌐 Web" },
    { key: "ai",       label: "🤖 AI" },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6"
      style={{ background: "var(--bg)" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="font-mono text-sm font-semibold mb-2 tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            04. Projects
          </p>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: "var(--fg)" }}
          >
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Play Store apps + enterprise web platforms — across Android, Flutter, React, Angular, and Next.js.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={
                filter === key
                  ? { background: "var(--accent)", color: "#fff" }
                  : {
                      background: "var(--surface)",
                      color: "var(--fg-3)",
                      border: "1px solid var(--border-light)",
                    }
              }
              onMouseEnter={(e) => {
                if (filter !== key) {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-o40)";
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== key) {
                  (e.currentTarget as HTMLElement).style.color = "var(--fg-3)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)";
                }
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className={`group rounded-2xl border transition-all duration-300 overflow-hidden hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                background: "var(--card-bg)",
                borderColor: p.highlight ? "#7c3aed" : "var(--border)",
                boxShadow: p.highlight ? "0 4px 20px rgba(124,58,237,0.1)" : "none",
                transitionDelay: `${i * 55}ms`,
              }}
              onMouseEnter={(e) => {
                if (!p.highlight) {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-o25)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px var(--accent-o10)";
                }
              }}
              onMouseLeave={(e) => {
                if (!p.highlight) {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }
              }}
            >
              {/* Color bar */}
              <div
                className="h-1.5 w-full"
                style={{ background: `linear-gradient(90deg, ${p.color}, var(--accent-2))` }}
              />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: p.bg }}
                  >
                    {p.image}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex gap-2">
                      {p.highlight && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-md font-mono font-bold border"
                          style={{
                            background: "var(--accent-2-o10)",
                            color: "var(--accent-2)",
                            borderColor: "var(--accent-2-o25)",
                          }}
                        >
                          ⭐ Featured
                        </span>
                      )}
                      <span
                        className="text-xs px-2 py-0.5 rounded-md font-mono font-semibold"
                        style={{ background: p.bg, color: p.color }}
                      >
                        {p.type === "mobile" ? "📱 Mobile" : p.type === "web" ? "🌐 Web" : "🤖 AI"}
                      </span>
                    </div>
                    <span
                      className="text-xs font-mono truncate max-w-[110px] text-right"
                      style={{ color: "var(--subtle)" }}
                    >
                      {p.client}
                    </span>
                  </div>
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
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded-md text-xs font-mono border"
                      style={{
                        background: "var(--surface)",
                        color: "var(--fg-3)",
                        borderColor: "var(--border-light)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div
                  className="flex items-center justify-end border-t pt-3"
                  style={{ borderColor: "var(--surface)" }}
                >
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
                      style={{ color: "var(--accent)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "var(--accent-2)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                      }
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View on Play Store
                    </a>
                  ) : (
                    <span
                      className="text-xs font-mono"
                      style={{ color: "var(--subtle)" }}
                    >
                      Enterprise / Internal
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-10">
          <p
            className="text-sm flex items-center justify-center gap-2"
            style={{ color: "var(--subtle)" }}
          >
            <GithubIcon className="w-4 h-4" />
            Enterprise apps are internal — live demos available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
