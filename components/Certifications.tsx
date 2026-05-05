"use client";

import { useEffect, useRef, useState } from "react";
import { X, ExternalLink, Download, ShieldCheck, BadgeCheck } from "lucide-react";

import { certifications, type Certification } from "@/data/config";

type Filter = "all" | "coursera" | "linkedin";
type Cert = Certification;

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
            <button
              onClick={onClose}
              className="md:hidden mb-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl mb-5 shadow-lg">
              {cert.icon}
            </div>

            <h3 className="text-white font-black text-lg leading-snug mb-2">{cert.title}</h3>
            <p className="text-white/80 text-sm font-semibold mb-1">{cert.issuer}</p>
            <p className="text-white/60 text-xs font-mono mb-5">{cert.date}</p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-sm mb-5">
              {cert.platform === "Coursera" ? (
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
              ) : (
                <BadgeCheck className="w-3.5 h-3.5 text-white" />
              )}
              <span className="text-white text-xs font-bold">{cert.platform}</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((s) => (
                <span key={s} className="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-sm text-white text-[11px] font-semibold">
                  {s}
                </span>
              ))}
            </div>
          </div>

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
        <div
          className="flex-1 flex flex-col min-h-0"
          style={{ background: "color-mix(in srgb, var(--card-bg) 85%, transparent)", backdropFilter: "blur(24px)" }}
        >
          <div
            className="flex items-center justify-between px-5 py-3 border-b flex-shrink-0"
            style={{ borderColor: "var(--border)" }}
          >
            <p className="text-xs font-mono truncate" style={{ color: "var(--muted)" }}>
              {cert.title}
            </p>
            <button
              onClick={onClose}
              className="hidden md:flex w-8 h-8 rounded-xl border items-center justify-center transition-all"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--fg)";
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 overflow-hidden" style={{ background: "var(--surface-accent)" }}>
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
    filter === "coursera" ? certifications.filter((c) => c.platform === "Coursera") :
      filter === "linkedin" ? certifications.filter((c) => c.platform === "LinkedIn Learning") :
        certifications;

  const counts = {
    all: certifications.length,
    coursera: certifications.filter((c) => c.platform === "Coursera").length,
    linkedin: certifications.filter((c) => c.platform === "LinkedIn Learning").length,
  };

  const tabs: { key: Filter; label: string }[] = [
    { key: "all",      label: `All  (${counts.all})` },
    { key: "coursera", label: `Coursera  (${counts.coursera})` },
    { key: "linkedin", label: `LinkedIn  (${counts.linkedin})` },
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-6"
      style={{ background: "var(--bg)" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p
            className="font-mono text-sm font-semibold mb-2 tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            05. Certifications
          </p>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: "var(--fg)" }}
          >
            My <span className="gradient-text">Credentials</span>
          </h2>
          <p className="max-w-lg mx-auto text-sm" style={{ color: "var(--muted)" }}>
            {counts.all} verified certificates from Google, University of Virginia &amp; LinkedIn Learning.
            Click any card to preview.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex items-center gap-1 p-1 rounded-2xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border-light)" }}
          >
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                style={
                  filter === key
                    ? { background: "var(--accent)", color: "#fff" }
                    : { color: "var(--muted)" }
                }
                onMouseEnter={(e) => {
                  if (filter !== key)
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  if (filter !== key)
                    (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                }}
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
                className={`group relative text-left rounded-2xl border transition-all duration-300 overflow-hidden ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  background: "var(--card-bg)",
                  transitionDelay: `${i * 60}ms`,
                  borderColor: isHovered ? `${cert.color}55` : "var(--border)",
                  boxShadow: isHovered
                    ? `0 8px 30px ${cert.color}25, 0 0 0 1px ${cert.color}30`
                    : `0 1px 3px color-mix(in srgb, var(--fg) 6%, transparent)`,
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
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"
                    style={{ "--tw-gradient-from": "var(--card-bg)" } as React.CSSProperties}
                  />

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
                  <span
                    className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold mb-2"
                    style={{ background: `${cert.color}15`, color: cert.color }}
                  >
                    {cert.platform === "Coursera" ? "Coursera" : "LinkedIn Learning"}
                  </span>

                  <h3
                    className="font-bold text-[13px] leading-snug mb-1 transition-colors duration-200"
                    style={{ color: isHovered ? cert.color : "var(--fg)" }}
                  >
                    {cert.title}
                  </h3>

                  <p
                    className="text-[11px] font-semibold mb-2"
                    style={{ color: "var(--muted)" }}
                  >
                    By: {cert.issuer}
                  </p>

                  <p
                    className="text-[10px] font-mono mb-3"
                    style={{ color: "var(--subtle)" }}
                  >
                    {cert.date}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {cert.skills.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="px-1.5 py-0.5 rounded-md text-[10px] font-mono border transition-colors duration-200"
                        style={{
                          color: "var(--fg-3)",
                          background: isHovered ? `${cert.color}10` : "var(--surface)",
                          borderColor: isHovered ? `${cert.color}30` : "var(--border-light)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex items-center gap-1.5 text-[11px] font-semibold transition-all duration-200"
                    style={{ color: isHovered ? cert.color : "var(--subtle)" }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200"
                      style={{
                        background: isHovered ? `${cert.color}15` : "transparent",
                        border: `1px solid ${isHovered ? cert.color : "var(--border)"}`,
                      }}
                    >
                      <span className="text-[8px]">▶</span>
                    </div>
                    Preview Certificate
                  </div>
                </div>

                {/* Bottom color bar */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{
                    width: isHovered ? "100%" : "0%",
                    background: `linear-gradient(90deg, ${cert.color}, var(--accent-2))`,
                  }}
                />
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p
            className="text-center text-sm py-12"
            style={{ color: "var(--subtle)" }}
          >
            No certificates in this category.
          </p>
        )}

      </div>

      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
