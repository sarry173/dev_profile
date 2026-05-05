import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PrintButton from "./PrintButton";
import {
  personalInfo,
  seoMetadata,
  timeline,
  resumeSkills,
  resumeSummary,
  projects,
  certifications,
} from "@/data/config";

export const metadata: Metadata = {
  title: seoMetadata.resumeTitle,
  description: seoMetadata.resumeDescription,
};

const workExperience = timeline.filter((e) => e.type === "work");
const education = timeline.filter((e) => e.type === "education")[0];
const resumeProjects = projects.filter((p) => p.resumeInclude);

export default async function ResumePage({
  searchParams,
}: {
  searchParams: Promise<{ pdf?: string }>;
}) {
  const { pdf } = await searchParams;
  const isPdf = pdf === "1";

  return (
    <>
      <style>{`
        /* Force background colors in print/PDF */
        *, *::before, *::after {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        /* Headings must not be orphaned — they always stick to the content below */
        .section-h2 { break-after: avoid; page-break-after: avoid; }

        /* Individual items must not be split mid-entry */
        .keep-together { break-inside: avoid; page-break-inside: avoid; }

        /* Small two-col footer section stays together */
        .bottom-grid { break-inside: avoid; page-break-inside: avoid; }

        /* Sections themselves CAN split across pages so pages fill naturally */

        @media print {
          html, body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .no-print { display: none !important; }
          .resume-bg {
            background: white !important;
            padding: 0 !important;
          }
          .resume-sheet {
            box-shadow: none !important;
            margin: 0 !important;
            max-width: 100% !important;
            border-radius: 0 !important;
            overflow: visible !important;
          }
          .resume-header {
            background-color: #0f172a !important;
            color: white !important;
          }
          .resume-header h1 { color: white !important; }
          .resume-header .resume-title { color: #93c5fd !important; }
          .resume-header .resume-contact { color: #cbd5e1 !important; }
          .resume-header a { color: #93c5fd !important; text-decoration: none !important; }
          .section-h2 { color: #1b63e8 !important; border-bottom-color: #dbe4f5 !important; }
          .exp-company { color: #1b63e8 !important; }
          .proj-meta { color: #1b63e8 !important; }
          .proj-link { color: #1b63e8 !important; }
          .edu-org { color: #1b63e8 !important; }
          .links-a { color: #1b63e8 !important; }
          @page { margin: 0.4in 0.45in; size: A4 portrait; }
        }
      `}</style>

      {/* Controls bar — hidden when generating PDF */}
      {!isPdf && (
        <div className="no-print sticky top-0 z-50 bg-white border-b border-[#e2e8f0] shadow-sm px-6 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#1b63e8] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <PrintButton />
        </div>
      )}

      {/* Page background */}
      <div className={`resume-bg ${isPdf ? "" : "min-h-screen bg-[#f0f4f8] py-8 px-4"}`}>
        {/* Resume sheet */}
        <div className={`resume-sheet bg-white ${isPdf ? "" : "max-w-[820px] mx-auto shadow-xl rounded-lg"}`}>

          {/* ── HEADER ── */}
          <header className={`resume-header bg-[#0f172a] text-white px-10 ${isPdf ? "py-6" : "py-8 rounded-t-lg"}`}>
            <h1 className="text-[28px] font-black tracking-tight mb-1 text-white">{personalInfo.name}</h1>
            <p className="resume-title text-[#93c5fd] text-[15px] font-semibold mb-4">
              {personalInfo.title}
            </p>
            <div className="resume-contact flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] text-[#cbd5e1]">
              <span>{personalInfo.email}</span>
              <span>{personalInfo.phone.display}</span>
              <span>{personalInfo.location} · Open to Relocation</span>
              <a
                href={personalInfo.socials.find((s) => s.id === "linkedin")!.href}
                className="underline underline-offset-2"
                target="_blank" rel="noopener noreferrer"
              >
                {personalInfo.socials.find((s) => s.id === "linkedin")!.displayUrl}
              </a>
              <a
                href={personalInfo.socials.find((s) => s.id === "github")!.href}
                className="underline underline-offset-2"
                target="_blank" rel="noopener noreferrer"
              >
                {personalInfo.socials.find((s) => s.id === "github")!.displayUrl}
              </a>
            </div>
          </header>

          {/* ── BODY ── */}
          <div className={isPdf ? "px-10 py-4 space-y-4" : "px-10 py-7 space-y-6"}>

            {/* PROFESSIONAL SUMMARY */}
            <section className="resume-section">
              <h2 className="section-h2 text-[10px] font-black uppercase tracking-[0.15em] text-[#1b63e8] border-b border-[#dbe4f5] pb-1.5 mb-3">
                Professional Summary
              </h2>
              <p className="text-[#374151] text-[13px] leading-relaxed">
                {resumeSummary}
              </p>
            </section>

            {/* TECHNICAL SKILLS */}
            <section className="resume-section">
              <h2 className="section-h2 text-[10px] font-black uppercase tracking-[0.15em] text-[#1b63e8] border-b border-[#dbe4f5] pb-1.5 mb-3">
                Technical Skills
              </h2>
              <div className="space-y-2">
                {Object.entries(resumeSkills).map(([cat, items]) => (
                  <div key={cat} className="keep-together flex gap-3 text-[13px]">
                    <span className="font-bold text-[#111827] w-28 flex-shrink-0 pt-px">{cat}</span>
                    <span className="text-[#4b5563] leading-relaxed">{items.join(" · ")}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* WORK EXPERIENCE */}
            <section className="resume-section">
              <h2 className="section-h2 text-[10px] font-black uppercase tracking-[0.15em] text-[#1b63e8] border-b border-[#dbe4f5] pb-1.5 mb-3">
                Work Experience
              </h2>
              <div className={isPdf ? "space-y-4" : "space-y-5"}>
                {workExperience.map((exp, i) => (
                  <div key={i} className="keep-together">
                    <div className="flex items-start justify-between gap-4 mb-1.5">
                      <div>
                        <h3 className="text-[15px] font-black text-[#111827]">{exp.role}</h3>
                        <p className="exp-company text-[#1b63e8] font-semibold text-[13px]">{exp.company}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-[13px] font-semibold text-[#374151]">{exp.period}</p>
                        <p className="text-[12px] text-[#9ca3af]">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="mt-1.5 space-y-0.5 pl-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-[13px] text-[#4b5563] leading-relaxed list-disc">
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-1.5 text-[11px] text-[#9ca3af]">
                      <span className="font-semibold text-[#6b7280]">Stack: </span>
                      {exp.techsString}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* KEY PROJECTS */}
            <section className="resume-section">
              <h2 className="section-h2 text-[10px] font-black uppercase tracking-[0.15em] text-[#1b63e8] border-b border-[#dbe4f5] pb-1.5 mb-4">
                Key Projects
              </h2>
              <div className="space-y-3.5">
                {resumeProjects.map((p, i) => (
                  <div key={i} className="keep-together">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-0.5">
                      <h3 className="text-[13.5px] font-bold text-[#111827]">{p.title}</h3>
                      <span className="proj-meta text-[11px] text-[#1b63e8] font-semibold">
                        {p.resumeType} · {p.client}
                        {p.live ? (
                          <a
                            href={p.live}
                            className="proj-link ml-2 text-[#1b63e8] underline underline-offset-2"
                            target="_blank" rel="noopener noreferrer"
                          >
                            Play Store ↗
                          </a>
                        ) : null}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#4b5563] leading-relaxed mb-0.5">
                      {p.resumeDescription ?? p.description}
                    </p>
                    <p className="text-[11px] text-[#9ca3af]">
                      <span className="font-semibold text-[#6b7280]">Tech: </span>
                      {p.resumeTechs ?? p.tags.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* EDUCATION */}
            {education && (
              <section className="resume-section">
                <h2 className="section-h2 text-[10px] font-black uppercase tracking-[0.15em] text-[#1b63e8] border-b border-[#dbe4f5] pb-1.5 mb-3">
                  Education
                </h2>
                <div className="keep-together flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[15px] font-black text-[#111827]">
                      B.Tech — Computer Science &amp; Engineering
                    </h3>
                    <p className="edu-org text-[#1b63e8] font-semibold text-[13px]">{education.company}</p>
                    <p className="text-[13px] text-[#4b5563] mt-1">
                      {education.bullets[0]}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[13px] font-semibold text-[#374151]">{education.period}</p>
                    <p className="text-[12px] text-[#9ca3af]">{education.location}</p>
                  </div>
                </div>
              </section>
            )}

            {/* CERTIFICATIONS */}
            <section className="resume-section">
              <h2 className="section-h2 text-[10px] font-black uppercase tracking-[0.15em] text-[#1b63e8] border-b border-[#dbe4f5] pb-1.5 mb-3">
                Certifications
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {certifications.map((c) => (
                  <div key={c.title} className="keep-together">
                    <p className="text-[12.5px] font-bold text-[#111827] leading-snug">{c.title}</p>
                    <p className="text-[11px] text-[#1b63e8] font-semibold">{c.issuerResume}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-[#9ca3af] font-mono">{c.date}</span>
                      {c.verifyUrl && (
                        <a href={c.verifyUrl} className="text-[10px] text-[#1b63e8] underline underline-offset-2 font-mono" target="_blank" rel="noopener noreferrer">
                          Verify ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* LANGUAGES & LINKS */}
            <section className="resume-section">
              <div className="bottom-grid grid grid-cols-2 gap-6">
                <div>
                  <h2 className="section-h2 text-[10px] font-black uppercase tracking-[0.15em] text-[#1b63e8] border-b border-[#dbe4f5] pb-1.5 mb-2">
                    Languages
                  </h2>
                  <ul className="text-[13px] text-[#4b5563] space-y-1 pl-4">
                    {personalInfo.languages.map((lang) => (
                      <li key={lang.name} className="list-disc">
                        {lang.name} — {lang.proficiency}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="section-h2 text-[10px] font-black uppercase tracking-[0.15em] text-[#1b63e8] border-b border-[#dbe4f5] pb-1.5 mb-2">
                    Links
                  </h2>
                  <ul className="text-[13px] text-[#4b5563] space-y-1 pl-4">
                    <li className="list-disc">
                      Stack Overflow:{" "}
                      <a
                        href={personalInfo.socials.find((s) => s.id === "stackoverflow")!.href}
                        className="links-a text-[#1b63e8] underline underline-offset-2"
                        target="_blank" rel="noopener noreferrer"
                      >
                        {personalInfo.socials.find((s) => s.id === "stackoverflow")!.displayUrl}
                      </a>
                    </li>
                    <li className="list-disc">
                      Portfolio:{" "}
                      <a
                        href={`https://${personalInfo.portfolioUrl}/`}
                        className="links-a text-[#1b63e8] underline underline-offset-2"
                        target="_blank" rel="noopener noreferrer"
                      >
                        {personalInfo.portfolioUrl}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Footer — hidden when generating PDF and on print */}
          {!isPdf && (
            <div className="no-print px-10 py-4 bg-[#f8faff] border-t border-[#e2e8f0] text-center rounded-b-lg">
              <p className="text-xs text-[#9ca3af] font-mono">
                {personalInfo.email} · {personalInfo.phone.display} · {personalInfo.location} · Open to Relocation
              </p>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
