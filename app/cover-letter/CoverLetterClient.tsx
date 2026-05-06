"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Loader2 } from "lucide-react";
import { personalInfo } from "@/data/config";

interface Props {
  isPdf: boolean;
  initialCompany: string;
  initialRole: string;
  initialManager: string;
  initialWhy: string;
  today: string;
}

export default function CoverLetterClient({
  isPdf,
  initialCompany,
  initialRole,
  initialManager,
  initialWhy,
  today,
}: Props) {
  const [company, setCompany] = useState(initialCompany);
  const [role, setRole] = useState(initialRole);
  const [manager, setManager] = useState(initialManager);
  const [why, setWhy] = useState(initialWhy);
  const [loading, setLoading] = useState(false);

  const linkedin = personalInfo.socials.find((s) => s.id === "linkedin")!;

  const handleDownload = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (company) params.set("company", company);
      if (role) params.set("role", role);
      if (manager) params.set("manager", manager);
      if (why) params.set("why", why);
      const res = await fetch(`/api/cover-letter-pdf?${params}`);
      if (!res.ok) throw new Error("PDF generation failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const slug = company ? `_${company.replace(/\s+/g, "_")}` : "";
      a.download = `Suresh_Kumar_Cover_Letter${slug}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
      window.print();
    } finally {
      setLoading(false);
    }
  };

  // Hook paragraph — leads with value, references role/company when provided
  const hookParagraph = role || company ? (
    <p>
      {role ? (
        <>
          The <strong>{role}</strong> role{company ? <> at <strong>{company}</strong></> : ""} is
          exactly the kind of challenge I&apos;ve been building toward. Twelve years of production
          engineering — mobile platforms used by 100,000+ employees, AI systems shipped and
          maintained in production, teams scaled from individual contributor to engineering
          management — that body of work is what I&apos;d bring from day one.
        </>
      ) : (
        <>
          The opportunity at <strong>{company}</strong> caught my attention immediately. Twelve years
          of production engineering — mobile platforms used by 100,000+ employees, AI systems shipped
          and maintained at scale, teams grown from individual contributor to engineering management —
          that body of work is what I&apos;d bring from day one.
        </>
      )}
    </p>
  ) : (
    <p>
      Shipping production software for 100,000+ enterprise users teaches you quickly that
      architecture matters more than effort — and that the decisions made before writing a line of
      code outlast everything else. That mindset is what I&apos;ve carried across twelve years of
      mobile, web, and AI engineering, and it&apos;s the foundation of every team I&apos;ve led.
    </p>
  );

  return (
    <>
      <style>{`
        *, *::before, *::after {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        .cl-keep { break-inside: avoid; page-break-inside: avoid; }
        @media print {
          html, body { background: white !important; margin: 0 !important; padding: 0 !important; }
          .no-print { display: none !important; }
          .cl-bg { background: white !important; padding: 0 !important; }
          .cl-sheet { box-shadow: none !important; margin: 0 !important; max-width: 100% !important; border-radius: 0 !important; }
          .cl-header { background-color: #0f172a !important; color: white !important; }
          .cl-header h1 { color: white !important; }
          .cl-header .cl-subtitle { color: #93c5fd !important; }
          .cl-header .cl-contact { color: #cbd5e1 !important; }
          .cl-header a { color: #93c5fd !important; text-decoration: none !important; }
          .cl-link { color: #1b63e8 !important; }
          @page { margin: 0.4in 0.45in; size: A4 portrait; }
        }
      `}</style>

      {/* Top bar */}
      {!isPdf && (
        <div className="no-print sticky top-0 z-50 bg-white border-b border-[#e2e8f0] shadow-sm px-6 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#1b63e8] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/resume"
              className="text-sm text-[#6b7280] hover:text-[#1b63e8] transition-colors font-medium"
            >
              View Resume
            </Link>
            <button
              onClick={handleDownload}
              disabled={loading}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1b63e8] text-white text-sm font-bold hover:bg-[#1550cc] transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              {loading ? "Generating PDF…" : "Download PDF"}
            </button>
          </div>
        </div>
      )}

      {/* Customization form */}
      {!isPdf && (
        <div className="no-print bg-[#f0f4f8] px-4 pt-6 pb-0">
          <div className="max-w-[820px] mx-auto">
            <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#1b63e8] mb-4">
                Customize Cover Letter
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6b7280] mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Google"
                    className="w-full px-3 py-2.5 rounded-xl border border-[#e2e8f0] text-sm text-[#111827] bg-white focus:outline-none focus:ring-2 focus:ring-[#1b63e8]/20 focus:border-[#1b63e8] transition-all placeholder:text-[#d1d5db]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6b7280] mb-1.5">
                    Job Title / Role
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Senior Mobile Engineer"
                    className="w-full px-3 py-2.5 rounded-xl border border-[#e2e8f0] text-sm text-[#111827] bg-white focus:outline-none focus:ring-2 focus:ring-[#1b63e8]/20 focus:border-[#1b63e8] transition-all placeholder:text-[#d1d5db]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6b7280] mb-1.5">
                    Hiring Manager{" "}
                    <span className="text-[#9ca3af] font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={manager}
                    onChange={(e) => setManager(e.target.value)}
                    placeholder="e.g. Sarah Johnson"
                    className="w-full px-3 py-2.5 rounded-xl border border-[#e2e8f0] text-sm text-[#111827] bg-white focus:outline-none focus:ring-2 focus:ring-[#1b63e8]/20 focus:border-[#1b63e8] transition-all placeholder:text-[#d1d5db]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#6b7280] mb-1.5">
                  Why this company / role{" "}
                  <span className="text-[#9ca3af] font-normal">
                    — this is what makes your letter stand out
                  </span>
                </label>
                <textarea
                  value={why}
                  onChange={(e) => setWhy(e.target.value)}
                  rows={3}
                  placeholder="e.g. Your investment in on-device ML aligns directly with the agent infrastructure I've been building at the edge. I've been following your Gemini Nano work and have already prototyped a similar approach with Anthropic's iOS SDK..."
                  className="w-full px-3 py-2.5 rounded-xl border border-[#e2e8f0] text-sm text-[#111827] bg-white focus:outline-none focus:ring-2 focus:ring-[#1b63e8]/20 focus:border-[#1b63e8] transition-all placeholder:text-[#d1d5db] resize-none leading-relaxed"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Letter document */}
      <div className={`cl-bg ${isPdf ? "" : "min-h-screen bg-[#f0f4f8] py-6 px-4"}`}>
        <div
          className={`cl-sheet bg-white ${
            isPdf ? "" : "max-w-[820px] mx-auto shadow-xl rounded-lg"
          }`}
        >
          {/* Header */}
          <header
            className={`cl-header bg-[#0f172a] text-white px-10 ${
              isPdf ? "py-6" : "py-8 rounded-t-lg"
            }`}
          >
            <h1 className="text-[28px] font-black tracking-tight mb-1 text-white">
              {personalInfo.name}
            </h1>
            <p className="cl-subtitle text-[#93c5fd] text-[15px] font-semibold mb-4">
              {personalInfo.title}
            </p>
            <div className="cl-contact flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] text-[#cbd5e1]">
              <span>{personalInfo.email}</span>
              <span>{personalInfo.phone.display}</span>
              <span>{personalInfo.location} · Open to Relocation</span>
              <a
                href={linkedin.href}
                className="underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkedin.displayUrl}
              </a>
            </div>
          </header>

          {/* Body */}
          <div className={isPdf ? "px-10 py-8" : "px-10 py-10"}>
            <div className="space-y-5 text-[14px] text-[#374151] leading-[1.75]">

              {/* Date */}
              <p className="text-[#9ca3af] font-mono text-[12px]">{today}</p>

              {/* Addressee */}
              {(manager || company) && (
                <div className="cl-keep space-y-0.5">
                  {manager && (
                    <p className="font-semibold text-[#111827] text-[14px]">{manager}</p>
                  )}
                  {company && <p className="text-[#374151]">{company}</p>}
                </div>
              )}

              {/* Salutation */}
              <p className="font-semibold text-[#111827]">
                Dear {manager ? manager : "Hiring Team"},
              </p>

              {/* Hook — leads with value, not intent */}
              {hookParagraph}

              {/* Achievement story 1: quality/process impact */}
              <p>
                At Reliance Jio, I stepped into a codebase where bug reports were outpacing fixes.
                Rather than adding more reviewers to an already slow process, I introduced
                SonarQube and PMD quality gates baked directly into CI, paired with structured
                peer review cadences that gave developers immediate, visible feedback.{" "}
                <strong>Within two quarters, defect density dropped 30% and held.</strong> The
                improvement didn&apos;t come from more process overhead — it came from making
                quality a first-class signal rather than an afterthought.
              </p>

              {/* Achievement story 2: AI differentiator */}
              <p>
                The differentiator I bring that most mobile engineers don&apos;t is production AI
                engineering. I&apos;ve built RAG pipelines that answer queries against private
                enterprise documents with source-cited accuracy, designed autonomous agents that
                reason across tools and APIs without human handholding, and shipped MCP servers
                that expose internal systems to AI clients. These are production systems I&apos;ve
                owned end-to-end — not prototypes. The intersection of mobile and AI is where
                I&apos;m most effective, and where I see the most interesting work being done
                right now.
              </p>

              {/* Company-specific paragraph — only shown if the user typed something */}
              {why && (
                <p>{why}</p>
              )}

              {/* Direct closing ask */}
              <p>
                I&apos;d welcome a 20-minute call to talk through what I&apos;d bring to the role. You can reach
                me directly at{" "}
                <strong>{personalInfo.email}</strong> or{" "}
                <strong>{personalInfo.phone.display}</strong>.
              </p>

              <p>Thank you for your time.</p>

              {/* Sign-off */}
              <div className="cl-keep pt-4 mt-2">
                <p className="mb-7 text-[#374151]">Sincerely,</p>
                <p className="font-black text-[20px] text-[#111827] leading-tight">
                  {personalInfo.name}
                </p>
                <p className="cl-link text-[#1b63e8] font-semibold text-[13px] mt-0.5">
                  {personalInfo.currentRole} · {personalInfo.currentCompany}
                </p>
                <div className="mt-2 space-y-0.5 text-[12px] text-[#9ca3af] font-mono">
                  <p>{personalInfo.email}</p>
                  <p>{personalInfo.phone.display}</p>
                  <a
                    href={linkedin.href}
                    className="cl-link block text-[#1b63e8] underline underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkedin.displayUrl}
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          {!isPdf && (
            <div className="no-print px-10 py-4 bg-[#f8faff] border-t border-[#e2e8f0] text-center rounded-b-lg">
              <p className="text-xs text-[#9ca3af] font-mono">
                {personalInfo.email} · {personalInfo.phone.display} · {personalInfo.location} ·
                Open to Relocation
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
