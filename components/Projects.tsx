"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

type ProjectType = "mobile" | "web";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  live: string | null;
  featured: boolean;
  color: string;
  client: string;
  type: ProjectType;
};

const projects: Project[] = [
  // ── Mobile Projects ──────────────────────────────────────────
  {
    title: "LEARNET-RIL",
    description:
      "Video and text-based interactive learning platform for Reliance employees to share knowledge, success stories, and connect with subject-matter experts.",
    image: "🎓",
    tags: ["Android", "Kotlin", "SQLite", "ExoPlayer", "Firebase"],
    live: "https://play.google.com/store/apps/details?id=com.ril.learnet",
    featured: true,
    color: "#6c63ff",
    client: "Reliance Industries",
    type: "mobile",
  },
  {
    title: "Mission Kurukshetra",
    description:
      "Flutter platform for Reliance employees to submit innovative ideas and get rewarded by the Reliance Foundation — with rich media and offline support.",
    image: "💡",
    tags: ["Flutter", "Dart", "SOAP", "Firebase", "Fabric"],
    live: "https://play.google.com/store/apps/details?id=com.ril.mku",
    featured: true,
    color: "#00d4aa",
    client: "Reliance Industries",
    type: "mobile",
  },
  {
    title: "Share-A-Ride",
    description:
      "Carpooling app for Reliance employees to offer or join rides with verified colleagues using intelligent route-matching and real-time GPS tracking.",
    image: "🚗",
    tags: ["Android", "Kotlin", "Firebase", "Google Maps", "FCM"],
    live: "https://play.google.com/store/apps/details?id=com.ril.shareAride",
    featured: true,
    color: "#ff6b6b",
    client: "Reliance Industries",
    type: "mobile",
  },
  {
    title: "JIO-HRU",
    description:
      "Jio HR companion app — employees view pay-slips, tax projections, HR details, and manage the entire candidate on-boarding workflow digitally.",
    image: "👥",
    tags: ["Android", "SAP Android SDK", "SOAP", "Kotlin", "Fabric"],
    live: null,
    featured: true,
    color: "#ffd93d",
    client: "Reliance Jio",
    type: "mobile",
  },
  {
    title: "Reliance CRM",
    description:
      "Real-time CRM for division-wise order/invoice management, order status tracking, and customer summaries with MpCharts analytics dashboard.",
    image: "📊",
    tags: ["Android", "SAP Android SDK", "SOAP", "MpCharts"],
    live: "https://play.google.com/store/apps/details?id=com.ril.crm",
    featured: false,
    color: "#6c63ff",
    client: "Reliance Industries",
    type: "mobile",
  },
  {
    title: "Engage",
    description:
      "Automated Flutter platform to send WhatsApp messages to channel partners, sales teams, and stakeholders — streamlining B2B communications at scale.",
    image: "💬",
    tags: ["Flutter", "Dart", "Firebase", "Android Studio"],
    live: "https://play.google.com/store/apps/details?id=com.qsts.rws",
    featured: false,
    color: "#00d4aa",
    client: "QSTS",
    type: "mobile",
  },
  {
    title: "Rapid-Way-Services",
    description:
      "All-India mobile directory app for finding professional service contacts by GPS location, built in Flutter with real-time geolocation search.",
    image: "📍",
    tags: ["Flutter", "GPS", "Firebase", "Google Maps"],
    live: "https://play.google.com/store/apps/details?id=com.qsts.rws",
    featured: false,
    color: "#ff6b6b",
    client: "QSTS",
    type: "mobile",
  },
  {
    title: "Cattlefax",
    description:
      "Livestock industry data app — live price feeds, dynamic Shinobi charts, industry news, and real-time weather forecasts with GCM push notifications.",
    image: "🐄",
    tags: ["Android", "SOAP", "Shinobi Charts", "GCM", "Weather API"],
    live: "https://play.google.com/store/apps/details?id=com.cattlefax.main",
    featured: false,
    color: "#ffd93d",
    client: "Cattlefax USA",
    type: "mobile",
  },
  {
    title: "Trance-ACT",
    description:
      "Fleet cash loading app that accelerates cash/cheque loading workflows with minimal data entry, barcode scanning, and detailed reporting.",
    image: "💰",
    tags: ["Android", "Kotlin", "SOAP", "Reporting"],
    live: "https://play.google.com/store/apps/details?id=com.ril.cashloading",
    featured: false,
    color: "#6c63ff",
    client: "Reliance Industries",
    type: "mobile",
  },
  {
    title: "R-Medical Portal",
    description:
      "Hospital companion app for Sir HNH Hospital — appointment scheduling, medical history, health calculators, and personalised diet plans.",
    image: "🏥",
    tags: ["Android", "SAP Android SDK", "SOAP", "Fabric"],
    live: null,
    featured: false,
    color: "#00d4aa",
    client: "Reliance Industries",
    type: "mobile",
  },
  // ── Web Projects ─────────────────────────────────────────────
  {
    title: "Developer Portfolio",
    description:
      "This very site — a responsive, animated developer portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion. Statically generated for blazing speed.",
    image: "🌐",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React.js"],
    live: null,
    featured: true,
    color: "#ffd93d",
    client: "Personal",
    type: "web",
  },
  {
    title: "Enterprise Dashboard (Angular)",
    description:
      "Internal analytics dashboard built with Angular for tracking KPIs, sales performance, and operational metrics across multiple Reliance business units.",
    image: "📈",
    tags: ["Angular", "TypeScript", "RxJS", "REST API", "Angular Material"],
    live: null,
    featured: true,
    color: "#dd0031",
    client: "Reliance Industries",
    type: "web",
  },
  {
    title: "E-Learn Web Platform",
    description:
      "Web version of the enterprise e-learning platform built in React.js, supporting online training modules, video lessons, and offline content sync.",
    image: "📚",
    tags: ["React.js", "Redux", "REST", "Video Player", "SOAP"],
    live: null,
    featured: true,
    color: "#61dafb",
    client: "Enterprise",
    type: "web",
  },
  {
    title: "Channel Partner Portal",
    description:
      "React-based web portal for LPG channel partners to manage business transactions, view reports, and access real-time inventory data.",
    image: "🔗",
    tags: ["React.js", "TypeScript", "REST API", "Tailwind CSS"],
    live: null,
    featured: false,
    color: "#6c63ff",
    client: "Reliance Industries",
    type: "web",
  },
  {
    title: "HR Self-Service Web App",
    description:
      "Next.js web application for employees to access HR services — payslips, leave management, on-boarding checklists, and tax declarations.",
    image: "🏢",
    tags: ["Next.js", "React.js", "TypeScript", "SAP API", "Tailwind CSS"],
    live: null,
    featured: false,
    color: "#00d4aa",
    client: "Reliance Jio",
    type: "web",
  },
];

type FilterType = "all" | "featured" | "mobile" | "web";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState<FilterType>("featured");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    filter === "featured"
      ? projects.filter((p) => p.featured)
      : filter === "mobile"
      ? projects.filter((p) => p.type === "mobile")
      : filter === "web"
      ? projects.filter((p) => p.type === "web")
      : projects;

  const filterOptions: { key: FilterType; label: string }[] = [
    { key: "featured", label: "⭐ Featured" },
    { key: "mobile", label: "📱 Mobile" },
    { key: "web", label: "🌐 Web" },
    { key: "all", label: `All (${projects.length})` },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d4aa]/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-[#6c63ff] font-mono text-sm font-medium mb-3 tracking-widest uppercase">
            04. Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Mobile apps shipped to the Play Store + web platforms built for enterprise — across
            Android, Flutter, React Native, React.js, Next.js, and Angular.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterOptions.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                filter === key
                  ? "bg-[#6c63ff] text-white"
                  : "glass-card text-white/40 hover:text-white border border-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <div
              key={project.title}
              className={`glass-card rounded-2xl p-6 flex flex-col group hover:border-white/15 transition-all duration-500 border border-white/5 hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 60}ms` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${project.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  {project.image}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span
                    className="text-xs px-2 py-0.5 rounded-md font-mono"
                    style={{ background: `${project.color}15`, color: project.color }}
                  >
                    {project.type === "mobile" ? "📱 Mobile" : "🌐 Web"}
                  </span>
                  <span className="text-xs text-white/25 font-mono truncate max-w-[110px] text-right">
                    {project.client}
                  </span>
                </div>
              </div>

              {/* Title & description */}
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#6c63ff] transition-colors">
                {project.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md bg-white/5 text-white/40 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end border-t border-white/5 pt-4">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#00d4aa]/70 hover:text-[#00d4aa] transition-colors font-mono"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Play Store
                  </a>
                ) : (
                  <span className="text-xs text-white/20 font-mono">Enterprise / Internal</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-10">
          <p className="text-white/25 text-sm flex items-center justify-center gap-2">
            <GithubIcon className="w-4 h-4" />
            Enterprise apps are internal — live demos available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
