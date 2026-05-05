"use client";

import { useEffect, useRef, useState } from "react";
import { X, ExternalLink, Download, ShieldCheck, BadgeCheck } from "lucide-react";

type Platform = "Coursera" | "LinkedIn Learning";
type Filter = "all" | "coursera" | "linkedin";

type Cert = {
  title: string;
  issuer: string;
  platform: Platform;
  date: string;
  year: number;
  skills: string[];
  pdfFile: string;
  thumb: string;
  verifyUrl?: string;
  color: string;
  bg: string;
  icon: string;
};

const certs: Cert[] = [
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    platform: "Coursera",
    date: "Mar 2024",
    year: 2024,
    skills: ["Generative AI", "LLMs", "Google Cloud"],
    pdfFile: "/cert-coursera-generative-ai.pdf",
    thumb: "/cert-thumbnails/cert-coursera-generative-ai.jpg",
    verifyUrl: "https://coursera.org/verify/VQQEU4V5SKZH",
    color: "#34a853",
    bg: "#e6f4ea",
    icon: "🤖",
  },
  {
    title: "Agile Project Management",
    issuer: "Google",
    platform: "Coursera",
    date: "Mar 2024",
    year: 2024,
    skills: ["Agile", "Scrum", "Project Management"],
    pdfFile: "/cert-coursera-agile-pm.pdf",
    thumb: "/cert-thumbnails/cert-coursera-agile-pm.jpg",
    verifyUrl: "https://coursera.org/verify/L6H9W54ZNDPM",
    color: "#4285f4",
    bg: "#e8f0fe",
    icon: "📋",
  },
  {
    title: "Design Thinking for Innovation",
    issuer: "University of Virginia",
    platform: "Coursera",
    date: "Mar 2024",
    year: 2024,
    skills: ["Design Thinking", "Innovation", "Problem Solving"],
    pdfFile: "/cert-coursera-design-thinking.pdf",
    thumb: "/cert-thumbnails/cert-coursera-design-thinking.jpg",
    verifyUrl: "https://coursera.org/verify/HJXJA8V95F5Y",
    color: "#e87722",
    bg: "#fff4ed",
    icon: "💡",
  },
  {
    title: "Become a Blockchain Developer",
    issuer: "LinkedIn Learning",
    platform: "LinkedIn Learning",
    date: "Mar 2025",
    year: 2025,
    skills: ["Blockchain", "Ethereum", "Cryptography"],
    pdfFile: "/cert-linkedin-blockchain-developer.pdf",
    thumb: "/cert-thumbnails/cert-linkedin-blockchain-developer.jpg",
    color: "#0a66c2",
    bg: "#e8f1fb",
    icon: "⛓️",
  },
  {
    title: "Blockchain: Learning Solidity",
    issuer: "LinkedIn Learning",
    platform: "LinkedIn Learning",
    date: "Mar 2025",
    year: 2025,
    skills: ["Solidity", "Blockchain", "Smart Contracts"],
    pdfFile: "/cert-linkedin-solidity.pdf",
    thumb: "/cert-thumbnails/cert-linkedin-solidity.jpg",
    color: "#7c3aed",
    bg: "#f5f3ff",
    icon: "📜",
  },
  {
    title: "Flutter: Building UIs (Part 07)",
    issuer: "LinkedIn Learning",
    platform: "LinkedIn Learning",
    date: "Jun 2020",
    year: 2020,
    skills: ["Flutter", "UI Design", "Dart"],
    pdfFile: "/cert-linkedin-flutter-ui.pdf",
    thumb: "/cert-thumbnails/cert-linkedin-flutter-ui.jpg",
    color: "#02569B",
    bg: "#e1f0fa",
    icon: "📱",
  },
  {
    title: "Learning Kotlin for Android",
    issuer: "LinkedIn Learning",
    platform: "LinkedIn Learning",
    date: "Jul 2017",
    year: 2017,
    skills: ["Kotlin", "Android Development"],
    pdfFile: "/cert-linkedin-kotlin-android.pdf",
    thumb: "/cert-thumbnails/cert-linkedin-kotlin-android.jpg",
    color: "#7F52FF",
    bg: "#f0edff",
    icon: "⚡",
  },
  {
    title: "Learning Data Analytics",
    issuer: "LinkedIn Learning",
    platform: "LinkedIn Learning",
    date: "Jul 2017",
    year: 2017,
    skills: ["Data Analysis", "Business Intelligence", "Excel"],
    pdfFile: "/cert-linkedin-data-analytics.pdf",
    thumb: "/cert-thumbnails/cert-linkedin-data-analytics.jpg",
    color: "#059669",
    bg: "#ecfdf5",
    icon: "📊",
  },
];

/* ── Modal ─────────────────────────────────────────────────────── */
function CertModal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 md:p-8"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="absolute inset-0 bg-[#0f172a]/70" />

      <div className="relative z-10 w-full max-w-4xl h-[90vh] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl">

        {/* ── Left panel: cert details ── */}
        <div
          className="md:w-[280px] flex-shrink-0 flex flex-col justify-between p-7"
          style={{ background: `linear-gradient(145deg, ${cert.color}ee, ${cert.color}88)` }}
        >
          <div>
            {/* Close on mobile */}
            <button
              onClick={onClose}
              className="md:hidden mb-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl mb-5 shadow-lg">
              {cert.icon}
            </div>

            {/* Cert title */}
            <h3 className="text-white font-black text-lg leading-snug mb-2">{cert.title}</h3>
            <p className="text-white/80 text-sm font-semibold mb-1">{cert.issuer}</p>
            <p className="text-white/60 text-xs font-mono mb-5">{cert.date}</p>

            {/* Platform badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-sm mb-5">
              {cert.platform === "Coursera" ? (
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
              ) : (
                <BadgeCheck className="w-3.5 h-3.5 text-white" />
              )}
              <span className="text-white text-xs font-bold">{cert.platform}</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((s) => (
                <span key={s} className="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-sm text-white text-[11px] font-semibold">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 mt-6">
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#111827] text-sm font-bold hover:bg-white/90 transition-all shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Verify Certificate
              </a>
            )}
            <a
              href={cert.pdfFile}
              download
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/20 backdrop-blur-sm text-white text-sm font-bold hover:bg-white/30 transition-all border border-white/30"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>
          </div>
        </div>

        {/* ── Right panel: PDF viewer ── */}
        <div className="flex-1 flex flex-col bg-white/85 backdrop-blur-2xl min-h-0">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#e2e8f0]/60 flex-shrink-0">
            <p className="text-[#6b7280] text-xs font-mono truncate">{cert.title}</p>
            <button
              onClick={onClose}
              className="hidden md:flex w-8 h-8 rounded-xl border border-[#e2e8f0]/60 items-center justify-center text-[#6b7280] hover:text-[#111827] hover:border-[#9ca3af] hover:bg-white/50 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {/* PDF iframe */}
          <div className="flex-1 bg-[#f0f5ff]/40 overflow-hidden">
            <iframe
              src={`${cert.pdfFile}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
              title={cert.title}
              className="w-full h-full mix-blend-multiply"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main section ───────────────────────────────────────────────── */
export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Cert | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  const filtered =
    filter === "coursera" ? certs.filter((c) => c.platform === "Coursera") :
      filter === "linkedin" ? certs.filter((c) => c.platform === "LinkedIn Learning") :
        certs;

  const counts = {
    all: certs.length,
    coursera: certs.filter((c) => c.platform === "Coursera").length,
    linkedin: certs.filter((c) => c.platform === "LinkedIn Learning").length,
  };

  const tabs: { key: Filter; label: string }[] = [
    { key: "all", label: `All  (${counts.all})` },
    { key: "coursera", label: `Coursera  (${counts.coursera})` },
    { key: "linkedin", label: `LinkedIn  (${counts.linkedin})` },
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#1b63e8] font-mono text-sm font-semibold mb-2 tracking-widest uppercase">
            05. Certifications
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] mb-4">
            My <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-[#6b7280] max-w-lg mx-auto text-sm">
            {counts.all} verified certificates from Google, University of Virginia &amp; LinkedIn Learning.
            Click any card to preview.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-[#f0f5ff] border border-[#dbe4f5]">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${filter === key
                  ? "bg-[#1b63e8] text-white shadow-md"
                  : "text-[#6b7280] hover:text-[#1b63e8]"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((cert, i) => {
            const isHovered = hovered === i;
            return (
              <button
                key={cert.title}
                onClick={() => setSelected(cert)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative text-left rounded-2xl border bg-white transition-all duration-300 overflow-hidden ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{
                  transitionDelay: `${i * 60}ms`,
                  borderColor: isHovered ? `${cert.color}55` : "#e2e8f0",
                  boxShadow: isHovered
                    ? `0 8px 30px ${cert.color}25, 0 0 0 1px ${cert.color}30`
                    : "0 1px 3px rgba(0,0,0,0.06)",
                  transform: isHovered
                    ? "translateY(-6px) scale(1.01)"
                    : visible ? "translateY(0)" : "translateY(32px)",
                }}
              >
                {/* Certificate thumbnail */}
                <div className="relative overflow-hidden rounded-t-2xl" style={{ height: "130px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.thumb}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500"
                    style={{ transform: isHovered ? "scale(1.06)" : "scale(1)" }}
                  />
                  {/* Subtle gradient overlay at bottom so body blends in */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
                    {cert.year >= 2024 && (
                      <span
                        className="px-1.5 py-0.5 rounded-md text-[9px] font-black text-white shadow"
                        style={{ background: cert.color }}
                      >
                        NEW
                      </span>
                    )}
                    {cert.verifyUrl && (
                      <span className="px-1.5 py-0.5 rounded-md text-[9px] font-black bg-[#111827] text-white flex items-center gap-0.5 shadow">
                        <ShieldCheck className="w-2.5 h-2.5" /> Verified
                      </span>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4">
                  {/* Platform badge */}
                  <span
                    className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold mb-2"
                    style={{ background: `${cert.color}15`, color: cert.color }}
                  >
                    {cert.platform === "Coursera" ? "Coursera" : "LinkedIn Learning"}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-[#111827] font-bold text-[13px] leading-snug mb-1 transition-colors duration-200"
                    style={{ color: isHovered ? cert.color : "#111827" }}
                  >
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-[11px] text-[#6b7280] font-semibold mb-2">By: {cert.issuer}</p>

                  {/* Date */}
                  <p className="text-[10px] text-[#9ca3af] font-mono mb-3">{cert.date}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {cert.skills.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-[#4b5563] border transition-colors duration-200"
                        style={{
                          background: isHovered ? `${cert.color}10` : "#f0f5ff",
                          borderColor: isHovered ? `${cert.color}30` : "#dbe4f5",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Preview CTA */}
                  <div
                    className="flex items-center gap-1.5 text-[11px] font-semibold transition-all duration-200"
                    style={{ color: isHovered ? cert.color : "#9ca3af" }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200"
                      style={{
                        background: isHovered ? `${cert.color}15` : "transparent",
                        border: `1px solid ${isHovered ? cert.color : "#d1d5db"}`,
                      }}
                    >
                      <span className="text-[8px]">▶</span>
                    </div>
                    Preview Certificate
                  </div>
                </div>

                {/* Bottom color bar — expands on hover */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{
                    width: isHovered ? "100%" : "0%",
                    background: `linear-gradient(90deg, ${cert.color}, #f5b800)`,
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Empty state (shouldn't happen but defensive) */}
        {filtered.length === 0 && (
          <p className="text-center text-[#9ca3af] text-sm py-12">No certificates in this category.</p>
        )}

      </div>

      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
