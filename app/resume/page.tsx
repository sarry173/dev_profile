import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Suresh Kumar — Resume | Senior Mobile Engineer & Full Stack Developer",
  description:
    "Resume of Suresh Kumar — Senior Mobile Engineer, Full Stack Developer, and AI Engineer with 12+ years of experience at Reliance Jio.",
};

const experience = [
  {
    role: "Senior Manager, Software Development",
    company: "Reliance Jio",
    period: "Feb 2024 – Present",
    location: "Mumbai, India",
    bullets: [
      "Lead end-to-end development of Android and Flutter applications serving 100K+ Jio enterprise employees.",
      "Own the full SDLC — technical design, effort estimation, coding, peer reviews, QA/UAT, production deployment, and post-launch support.",
      "Established SonarQube and PMD quality gates that reduced code defect density by 30% across the team.",
      "Primary technical point of contact for business stakeholders; facilitated sprint planning and release cycles using Agile methodology.",
      "Mentored junior and mid-level engineers, conducting structured code reviews and knowledge-sharing sessions.",
    ],
    techs: "Kotlin · Android · Flutter · MVVM · Firebase · SonarQube · PMD · Agile",
  },
  {
    role: "Sr. Software Developer",
    company: "Mobile Programming India Pvt. Ltd.",
    period: "Jul 2013 – Dec 2023",
    location: "Chandigarh, India",
    bullets: [
      "Delivered 15+ enterprise mobile applications across a decade of Android evolution — from SDK 2.1 through modern Kotlin and Flutter.",
      "Designed and architected mobile platforms for Fortune 500 clients including Reliance Industries Ltd.",
      "Built cross-platform apps using Flutter (BLoC/GetX) and React Native (Redux), reducing time-to-market by reusing business logic across platforms.",
      "Integrated SAP SDK, SOAP, REST, GraphQL, and Firebase backends into production applications.",
      "Collaborated with cross-functional Agile teams; optimized app performance via profiling, refactoring, and systematic code reviews.",
      "Implemented unit testing with JUnit and integrated Docker containers for CI/CD pipelines.",
    ],
    techs: "Android · Kotlin · Java · Flutter · React Native · SAP SDK · SOAP · REST · Firebase · Agile · JUnit · Docker",
  },
  {
    role: "Software Developer Intern",
    company: "A-One Technology Pvt. Ltd.",
    period: "Nov 2012 – Jun 2013",
    location: "Punjab, India",
    bullets: [
      "Gained hands-on experience in Android application development using Java, Eclipse, and SQLite.",
      "Contributed to core development workflows, including requirements analysis, UI design, and QA testing.",
    ],
    techs: "Android · Java · Eclipse · SQLite",
  },
];

const skills: Record<string, string[]> = {
  "Mobile": [
    "Android (Kotlin, Java)", "Flutter (Dart)", "React Native",
    "Jetpack (ViewModel, LiveData, Room, Navigation, WorkManager)",
    "MVVM · Clean Architecture · BLoC · GetX · Redux",
    "SAP SDK · Firebase · FCM/GCM",
  ],
  "Web": [
    "React.js · Next.js (App Router, SSR, SSG)",
    "Angular · TypeScript · JavaScript · Tailwind CSS",
  ],
  "AI / GenAI": [
    "Anthropic Claude API · OpenAI · Gemini · HuggingFace",
    "Model Context Protocol (MCP) — server design & integration",
    "RAG Pipelines · LangChain · LlamaIndex",
    "Vector DBs: Pinecone · ChromaDB · FAISS",
    "Agentic AI · Multi-Agent Orchestration · Prompt Engineering · FastAPI · Python",
  ],
  "Backend & Data": [
    "REST · SOAP · GraphQL · Firebase Realtime DB · SQLite · Room",
  ],
  "DevOps & Tools": [
    "Git · Android Studio · Gradle · SonarQube · PMD · Vercel · CI/CD",
  ],
};

const projects = [
  {
    title: "Code Migration Agent + MCP Server",
    client: "Personal / Open Source",
    type: "AI",
    description:
      "Autonomous AI agent + MCP server that migrates codebases to the latest framework versions using AST parsing and Anthropic Claude API. Exposes migration tools consumable by any MCP-compatible client (Claude Desktop, Cursor).",
    techs: "Anthropic Claude API, MCP, Agentic AI, AST Parsing, Python",
  },
  {
    title: "RAG-based Knowledge Assistant",
    client: "Personal / Enterprise",
    type: "AI",
    description:
      "Document Q&A system using Retrieval-Augmented Generation. Ingests PDFs and web content into a vector store, answers queries with source-cited responses and multi-turn memory.",
    techs: "LangChain, Pinecone, OpenAI GPT-4, FastAPI, Python",
  },
  {
    title: "Agentic AI Workflow Engine",
    client: "Personal / Enterprise",
    type: "AI",
    description:
      "Multi-step autonomous AI agent using LangChain ReAct pattern with custom tools — integrates web search, code execution, and API calls in a single agentic loop.",
    techs: "LangChain Agents, Claude API, Tool Use, ReAct Pattern, Python",
  },
  {
    title: "LEARNET-RIL",
    client: "Reliance Industries",
    type: "Android",
    description:
      "Video and text-based interactive e-learning platform for Reliance employees to share knowledge and connect with subject-matter experts. Published on the Play Store.",
    techs: "Android, Kotlin, SQLite, ExoPlayer, Firebase",
    live: "https://play.google.com/store/apps/details?id=com.ril.learnet",
  },
  {
    title: "Mission Kurukshetra",
    client: "Reliance Industries",
    type: "Flutter",
    description:
      "Flutter platform for Reliance employees to submit and get rewarded for innovative ideas by the Reliance Foundation — with rich media and offline support.",
    techs: "Flutter, Dart, SOAP, Firebase, Fabric",
    live: "https://play.google.com/store/apps/details?id=com.ril.mku",
  },
  {
    title: "Share-A-Ride",
    client: "Reliance Industries",
    type: "Android",
    description:
      "Carpooling app for Reliance employees with intelligent route-matching and real-time GPS tracking. Available on the Play Store.",
    techs: "Android, Kotlin, Firebase, Google Maps, FCM",
    live: "https://play.google.com/store/apps/details?id=com.ril.shareAride",
  },
  {
    title: "JIO-HRU",
    client: "Reliance Jio",
    type: "Android",
    description:
      "Jio HR companion app — employees view payslips, tax projections, HR details, and manage the full candidate onboarding workflow digitally.",
    techs: "Android, SAP Android SDK, SOAP, Kotlin",
  },
  {
    title: "Enterprise Dashboard",
    client: "Reliance Industries",
    type: "Angular",
    description:
      "Internal analytics dashboard for tracking KPIs, sales performance, and operational metrics across Reliance business units.",
    techs: "Angular, TypeScript, RxJS, Angular Material, REST",
  },
  {
    title: "Developer Portfolio",
    client: "Personal",
    type: "Next.js",
    description:
      "Responsive animated developer portfolio built with Next.js 16, Tailwind CSS v4, and TypeScript — deployed on Vercel.",
    techs: "Next.js, TypeScript, Tailwind CSS, Vercel",
  },
];

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
            <h1 className="text-[28px] font-black tracking-tight mb-1 text-white">Suresh Kumar</h1>
            <p className="resume-title text-[#93c5fd] text-[15px] font-semibold mb-4">
              Senior Mobile Engineer · Full Stack Developer · AI / GenAI Engineer
            </p>
            <div className="resume-contact flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] text-[#cbd5e1]">
              <span>suresh.my1989@gmail.com</span>
              <span>+91 98676 99779</span>
              <span>Mumbai, India · Open to Relocation</span>
              <a
                href="https://www.linkedin.com/in/suresh-kumar-14726a74/"
                className="underline underline-offset-2"
                target="_blank" rel="noopener noreferrer"
              >
                linkedin.com/in/suresh-kumar-14726a74
              </a>
              <a
                href="https://github.com/sarry173"
                className="underline underline-offset-2"
                target="_blank" rel="noopener noreferrer"
              >
                github.com/sarry173
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
                Full Stack Developer and Senior Manager with <strong>12+ years</strong> of
                end-to-end software delivery — from Android SDK 2.1 to modern Kotlin, Flutter,
                and cross-platform mobile, through to React.js / Next.js web frontends and
                AI-powered backends. Currently at{" "}
                <strong>Reliance Jio</strong> leading Android and Flutter teams whose apps serve{" "}
                <strong>100,000+ enterprise employees</strong>. Proven track record delivering
                20+ production apps for Fortune 500 clients including Reliance Industries.
                Hands-on expertise in <strong>Generative AI engineering</strong> — RAG pipelines,
                agentic AI systems, MCP server design, and LLM integration using Anthropic Claude,
                OpenAI, and LangChain. Available from June 2026; open to senior engineering and
                leadership roles globally.
              </p>
            </section>

            {/* TECHNICAL SKILLS */}
            <section className="resume-section">
              <h2 className="section-h2 text-[10px] font-black uppercase tracking-[0.15em] text-[#1b63e8] border-b border-[#dbe4f5] pb-1.5 mb-3">
                Technical Skills
              </h2>
              <div className="space-y-2">
                {Object.entries(skills).map(([cat, items]) => (
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
                {experience.map((exp, i) => (
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
                      {exp.techs}
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
                {projects.map((p, i) => (
                  <div key={i} className="keep-together">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-0.5">
                      <h3 className="text-[13.5px] font-bold text-[#111827]">{p.title}</h3>
                      <span className="proj-meta text-[11px] text-[#1b63e8] font-semibold">
                        {p.type} · {p.client}
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
                    <p className="text-[12px] text-[#4b5563] leading-relaxed mb-0.5">{p.description}</p>
                    <p className="text-[11px] text-[#9ca3af]">
                      <span className="font-semibold text-[#6b7280]">Tech: </span>{p.techs}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* EDUCATION */}
            <section className="resume-section">
              <h2 className="section-h2 text-[10px] font-black uppercase tracking-[0.15em] text-[#1b63e8] border-b border-[#dbe4f5] pb-1.5 mb-3">
                Education
              </h2>
              <div className="keep-together flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[15px] font-black text-[#111827]">
                    B.Tech — Computer Science &amp; Engineering
                  </h3>
                  <p className="edu-org text-[#1b63e8] font-semibold text-[13px]">Himachal Pradesh University</p>
                  <p className="text-[13px] text-[#4b5563] mt-1">
                    Data structures, algorithms, operating systems, DBMS, and software engineering.
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[13px] font-semibold text-[#374151]">Graduated Jun 2012</p>
                  <p className="text-[12px] text-[#9ca3af]">Himachal Pradesh, India</p>
                </div>
              </div>
            </section>

            {/* CERTIFICATIONS */}
            <section className="resume-section">
              <h2 className="section-h2 text-[10px] font-black uppercase tracking-[0.15em] text-[#1b63e8] border-b border-[#dbe4f5] pb-1.5 mb-3">
                Certifications
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {[
                  { title: "Introduction to Generative AI", issuer: "Google Cloud · Coursera", date: "Mar 2024", url: "https://coursera.org/verify/VQQEU4V5SKZH" },
                  { title: "Agile Project Management", issuer: "Google · Coursera", date: "Mar 2024", url: "https://coursera.org/verify/L6H9W54ZNDPM" },
                  { title: "Design Thinking for Innovation", issuer: "University of Virginia · Coursera", date: "Mar 2024", url: "https://coursera.org/verify/HJXJA8V95F5Y" },
                  { title: "Become a Blockchain Developer", issuer: "LinkedIn Learning", date: "Mar 2025", url: null },
                  { title: "Blockchain: Learning Solidity", issuer: "LinkedIn Learning", date: "Mar 2025", url: null },
                  { title: "Flutter: Building UIs (Part 07)", issuer: "LinkedIn Learning", date: "Jun 2020", url: null },
                  { title: "Learning Kotlin for Android", issuer: "LinkedIn Learning", date: "Jul 2017", url: null },
                  { title: "Learning Data Analytics", issuer: "LinkedIn Learning", date: "Jul 2017", url: null },
                ].map((c) => (
                  <div key={c.title} className="keep-together">
                    <p className="text-[12.5px] font-bold text-[#111827] leading-snug">{c.title}</p>
                    <p className="text-[11px] text-[#1b63e8] font-semibold">{c.issuer}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-[#9ca3af] font-mono">{c.date}</span>
                      {c.url && (
                        <a href={c.url} className="text-[10px] text-[#1b63e8] underline underline-offset-2 font-mono" target="_blank" rel="noopener noreferrer">
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
                    <li className="list-disc">English — Professional proficiency</li>
                    <li className="list-disc">Hindi — Native</li>
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
                        href="https://stackoverflow.com/users/3367381/suresh-kum"
                        className="links-a text-[#1b63e8] underline underline-offset-2"
                        target="_blank" rel="noopener noreferrer"
                      >
                        stackoverflow.com/users/3367381
                      </a>
                    </li>
                    <li className="list-disc">
                      Portfolio:{" "}
                      <a
                        href="https://sureshkumar-dev.vercel.app/"
                        className="links-a text-[#1b63e8] underline underline-offset-2"
                        target="_blank" rel="noopener noreferrer"
                      >
                        sureshkumar-dev
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
                suresh.my1989@gmail.com · +91 98676 99779 · Mumbai, India · Open to Relocation
              </p>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
