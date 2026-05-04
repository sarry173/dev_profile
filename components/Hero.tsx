"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Mail, Download, Phone } from "lucide-react";
import { LinkedinIcon, StackOverflowIcon } from "@/components/SocialIcons";
import ResumeModal from "@/components/ResumeModal";

const roles = [
  "Full Stack Developer",
  "Android & Kotlin Expert",
  "Flutter Developer",
  "React.js / Next.js Dev",
  "React Native Engineer",
  "Angular Developer",
  "Team Lead & Mentor",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayed(current.slice(0, displayed.length + 1));
          if (displayed.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayed(current.slice(0, displayed.length - 1));
          if (displayed.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen hero-bg grid-pattern flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#6c63ff]/10 blur-3xl animate-pulse-glow pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#00d4aa]/10 blur-3xl animate-pulse-glow pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Floating code snippets */}
      <div className="absolute top-20 right-10 opacity-10 font-mono text-xs text-[#6c63ff] rotate-12 hidden lg:block select-none">
        <div>// Mobile + Web</div>
        <div>const stack = [</div>
        <div>&nbsp;&nbsp;&apos;Android&apos;, &apos;Flutter&apos;,</div>
        <div>&nbsp;&nbsp;&apos;React&apos;, &apos;Next.js&apos;</div>
        <div>]</div>
      </div>
      <div className="absolute bottom-32 left-10 opacity-10 font-mono text-xs text-[#00d4aa] -rotate-6 hidden lg:block select-none">
        <div>flutter build apk --release</div>
        <div>npm run build &amp;&amp; vercel deploy</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pb-28">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/20 text-[#00d4aa] text-sm font-medium mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
          Currently @ Reliance Jio · Open to Opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
          Suresh <span className="gradient-text">Kumar</span>
        </h1>
        <p className="text-white/40 text-base font-mono mb-6 tracking-widest uppercase">
          Senior Manager · Software Development · 12+ Years
        </p>

        {/* Animated role */}
        <div className="h-12 md:h-14 flex items-center justify-center mb-6">
          <p className="text-2xl md:text-3xl text-white/60 font-light">
            <span className="text-[#6c63ff] font-semibold">{displayed}</span>
            <span className="inline-block w-0.5 h-7 bg-[#6c63ff] ml-1 animate-pulse" />
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-8">
          Full Stack Developer bridging mobile and web. Expert in{" "}
          <span className="text-white/75">Android · Flutter · React Native</span> on the mobile
          side, and{" "}
          <span className="text-white/75">React.js · Next.js · Angular</span> on the web — with
          20+ enterprise apps delivered for Fortune 500 clients.
        </p>

        {/* Platform pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { label: "Android", emoji: "🤖" },
            { label: "Flutter", emoji: "🐦" },
            { label: "React Native", emoji: "⚛️" },
            { label: "React.js", emoji: "🔵" },
            { label: "Next.js", emoji: "▲" },
            { label: "Angular", emoji: "🔺" },
          ].map(({ label, emoji }) => (
            <span
              key={label}
              className="px-3 py-1.5 rounded-lg glass-card text-xs font-mono text-white/50 border border-white/5 hover:border-[#6c63ff]/30 hover:text-[#6c63ff] transition-all duration-200"
            >
              {emoji} {label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#6c63ff] to-[#00d4aa] text-white font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-200 glow-purple"
          >
            View My Work
          </button>
          <button
            onClick={() => setResumeOpen(true)}
            className="px-8 py-4 rounded-xl border border-white/10 text-white/80 font-semibold text-base hover:bg-white/5 hover:border-white/20 hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            View Resume
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3">
          {[
            {
              icon: LinkedinIcon,
              href: "https://www.linkedin.com/in/suresh-kumar-14726a74/",
              label: "LinkedIn",
            },
            {
              icon: StackOverflowIcon,
              href: "https://stackoverflow.com/users/3367381/suresh-kum",
              label: "Stack Overflow",
            },
            { icon: Mail, href: "mailto:suresh.my1989@gmail.com", label: "Email" },
            { icon: Phone, href: "tel:+919867699779", label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" && label !== "Phone" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-white/40 hover:text-[#6c63ff] hover:border-[#6c63ff]/40 transition-all duration-200 hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors animate-bounce"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </button>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
