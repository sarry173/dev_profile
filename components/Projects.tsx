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
    <section id="projects" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#1b63e8] font-mono text-sm font-semibold mb-2 tracking-widest uppercase">
            04. Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto">
            Play Store apps + enterprise web platforms — across Android, Flutter, React, Angular, and Next.js.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                filter === key
                  ? "bg-[#1b63e8] text-white shadow-md"
                  : "bg-[#f0f5ff] text-[#4b5563] hover:text-[#1b63e8] border border-[#dbe4f5] hover:border-[#1b63e8]/40"
              }`}
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
              className={`group rounded-2xl border ${p.highlight ? 'border-[#7c3aed] ring-1 ring-[#7c3aed]/30 shadow-[#7c3aed]/10 shadow-lg' : 'border-[#e2e8f0] bg-white hover:border-[#1b63e8]/25 hover:shadow-lg'} transition-all duration-300 overflow-hidden hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 55}ms` }}
            >
              {/* Color bar */}
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${p.color}, #f5b800)` }} />

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
                        <span className="text-xs px-2 py-0.5 rounded-md font-mono font-bold bg-[#f5b800]/10 text-[#f5b800] border border-[#f5b800]/20">
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
                    <span className="text-xs text-[#9ca3af] font-mono truncate max-w-[110px] text-right">
                      {p.client}
                    </span>
                  </div>
                </div>

                <h3 className="text-[#111827] font-bold text-base mb-2 group-hover:text-[#1b63e8] transition-colors">
                  {p.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4">{p.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-1 rounded-md bg-[#f0f5ff] text-[#4b5563] text-xs font-mono border border-[#dbe4f5]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end border-t border-[#f0f5ff] pt-3">
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#1b63e8] hover:text-[#f5b800] transition-colors font-semibold"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View on Play Store
                    </a>
                  ) : (
                    <span className="text-xs text-[#9ca3af] font-mono">Enterprise / Internal</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-10">
          <p className="text-[#9ca3af] text-sm flex items-center justify-center gap-2">
            <GithubIcon className="w-4 h-4" />
            Enterprise apps are internal — live demos available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
