"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

type ProjectType = "mobile" | "web" | "ai";
type Project = {
  title: string; description: string; image: string; tags: string[];
  live: string | null; featured: boolean; color: string; bg: string;
  client: string; type: ProjectType; highlight?: boolean;
};

const projects: Project[] = [
  { title: "Code Migration Agent + MCP Server", description: "An autonomous AI agent and MCP (Model Context Protocol) server that automatically migrates codebases to their latest framework/library versions. Powered by the Anthropic Claude API — the agent analyzes existing code, detects deprecated patterns, understands breaking changes, and rewrites code to be fully compliant with the latest version. The MCP server exposes migration tools that can be consumed by any MCP-compatible AI client (e.g. Claude Desktop, Cursor).", image: "⚙️", tags: ["Anthropic Claude API", "MCP", "Agentic AI", "Code Analysis", "Python", "AST Parsing"], live: null, featured: true, color: "#7c3aed", bg: "#f3e8ff", client: "Personal / Open Source", type: "ai", highlight: true },
  { title: "RAG-based Knowledge Assistant", description: "An intelligent document Q&A system built using Retrieval-Augmented Generation. Ingests PDFs, docs, and web content into a vector store, then answers queries with grounded, source-cited responses using an LLM. Supports multi-turn conversations with context memory.", image: "🧠", tags: ["LangChain", "Pinecone", "OpenAI GPT-4", "FastAPI", "Python"], live: null, featured: true, color: "#7c3aed", bg: "#f3e8ff", client: "Personal / Enterprise", type: "ai" },
  { title: "Agentic AI Workflow Engine", description: "A multi-step autonomous AI agent capable of reasoning, tool use, and decision-making across complex tasks. Built with LangChain agents and custom tools — integrates web search, code execution, and API calls within a single agentic loop.", image: "🤖", tags: ["LangChain Agents", "Claude API", "Tool Use", "ReAct Pattern", "Python"], live: null, featured: true, color: "#7c3aed", bg: "#f3e8ff", client: "Personal / Enterprise", type: "ai" },
  { title: "AI-powered Mobile Assistant", description: "Integrated an LLM-based conversational assistant into an enterprise Android/Flutter app. Users query data, get summaries, and trigger actions via natural language — bridging mobile UX with generative AI capabilities via a FastAPI backend.", image: "📱", tags: ["LLM Integration", "Android / Flutter", "FastAPI", "REST API", "Kotlin"], live: null, featured: false, color: "#7c3aed", bg: "#f3e8ff", client: "Enterprise", type: "ai" },
  { title: "LEARNET-RIL", description: "Video and text-based interactive learning platform for Reliance employees to share knowledge, success stories, and connect with subject-matter experts.", image: "🎓", tags: ["Android", "Kotlin", "SQLite", "ExoPlayer", "Firebase"], live: "https://play.google.com/store/apps/details?id=com.ril.learnet", featured: true, color: "#1b63e8", bg: "#eef3ff", client: "Reliance Industries", type: "mobile" },
  { title: "Mission Kurukshetra", description: "Flutter platform for Reliance employees to submit innovative ideas and get rewarded by the Reliance Foundation — with rich media and offline support.", image: "💡", tags: ["Flutter", "Dart", "SOAP", "Firebase", "Fabric"], live: "https://play.google.com/store/apps/details?id=com.ril.mku", featured: true, color: "#f5b800", bg: "#fffbeb", client: "Reliance Industries", type: "mobile" },
  { title: "Share-A-Ride", description: "Carpooling app for Reliance employees using intelligent route-matching and real-time GPS tracking with verified colleague verification.", image: "🚗", tags: ["Android", "Kotlin", "Firebase", "Google Maps", "FCM"], live: "https://play.google.com/store/apps/details?id=com.ril.shareAride", featured: true, color: "#ef4444", bg: "#fef2f2", client: "Reliance Industries", type: "mobile" },
  { title: "JIO-HRU", description: "Jio HR companion app — employees view pay-slips, tax projections, HR details, and manage the entire candidate on-boarding workflow digitally.", image: "👥", tags: ["Android", "SAP Android SDK", "SOAP", "Kotlin"], live: null, featured: true, color: "#8b5cf6", bg: "#f5f3ff", client: "Reliance Jio", type: "mobile" },
  { title: "Reliance CRM", description: "Real-time CRM for division-wise order/invoice management, order status tracking, and customer summaries with analytics dashboard.", image: "📊", tags: ["Android", "SAP Android SDK", "SOAP", "MpCharts"], live: "https://play.google.com/store/apps/details?id=com.ril.crm", featured: false, color: "#1b63e8", bg: "#eef3ff", client: "Reliance Industries", type: "mobile" },
  { title: "Engage", description: "Automated Flutter platform to send WhatsApp messages to channel partners, sales teams, and stakeholders — streamlining B2B communications at scale.", image: "💬", tags: ["Flutter", "Dart", "Firebase"], live: null, featured: false, color: "#10b981", bg: "#ecfdf5", client: "QSTS", type: "mobile" },
  { title: "Cattlefax", description: "Livestock industry data app — live price feeds, dynamic charts, industry news, and real-time weather forecasts with GCM push notifications.", image: "🐄", tags: ["Android", "SOAP", "Shinobi Charts", "GCM"], live: "https://play.google.com/store/apps/details?id=com.cattlefax.main", featured: false, color: "#f5b800", bg: "#fffbeb", client: "Cattlefax USA", type: "mobile" },
  { title: "Trance-ACT", description: "Fleet cash loading app that accelerates cash/cheque loading workflows with barcode scanning and detailed reporting.", image: "💰", tags: ["Android", "Kotlin", "SOAP", "Reporting"], live: null, featured: false, color: "#1b63e8", bg: "#eef3ff", client: "Reliance Industries", type: "mobile" },
  { title: "R-Medical Portal", description: "Hospital companion for Sir HNH Hospital — appointment scheduling, medical history, health calculators, and personalised diet plans.", image: "🏥", tags: ["Android", "SAP SDK", "SOAP"], live: null, featured: false, color: "#ef4444", bg: "#fef2f2", client: "Reliance Industries", type: "mobile" },
  { title: "Developer Portfolio", description: "This very site — a responsive, animated developer portfolio built with Next.js 16, Tailwind CSS v4, and TypeScript.", image: "🌐", tags: ["Next.js", "TypeScript", "Tailwind CSS"], live: null, featured: true, color: "#8b5cf6", bg: "#f5f3ff", client: "Personal", type: "web" },
  { title: "Enterprise Dashboard", description: "Internal analytics dashboard built with Angular for tracking KPIs, sales performance, and operational metrics across Reliance business units.", image: "📈", tags: ["Angular", "TypeScript", "RxJS", "Angular Material"], live: null, featured: true, color: "#dd0031", bg: "#fef2f2", client: "Reliance Industries", type: "web" },
  { title: "E-Learn Web Platform", description: "Web version of the enterprise e-learning platform in React.js, supporting online training modules, video lessons, and offline content sync.", image: "📚", tags: ["React.js", "Redux", "REST", "Video Player"], live: null, featured: true, color: "#61dafb", bg: "#ecfeff", client: "Enterprise", type: "web" },
  { title: "Channel Partner Portal", description: "React-based web portal for LPG channel partners to manage business transactions, view reports, and access real-time inventory data.", image: "🔗", tags: ["React.js", "TypeScript", "REST API", "Tailwind"], live: null, featured: false, color: "#1b63e8", bg: "#eef3ff", client: "Reliance Industries", type: "web" },
  { title: "HR Self-Service Web App", description: "Next.js web application for employees to access HR services — payslips, leave management, on-boarding checklists, and tax declarations.", image: "🏢", tags: ["Next.js", "React.js", "TypeScript", "SAP API"], live: null, featured: false, color: "#f5b800", bg: "#fffbeb", client: "Reliance Jio", type: "web" },
];

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
