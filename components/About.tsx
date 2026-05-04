"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Calendar, Smartphone, Monitor } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "20+", label: "Apps Shipped" },
  { value: "6", label: "Tech Stacks" },
  { value: "F500", label: "Clients" },
];

const highlights = [
  { icon: MapPin, text: "Mumbai, India · Open to Relocation" },
  { icon: Calendar, text: "12+ Years in Software Development" },
  { icon: Smartphone, text: "Android · Flutter · React Native" },
  { icon: Monitor, text: "React.js · Next.js · Angular" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-[#6c63ff] font-mono text-sm font-medium mb-3 tracking-widest uppercase">
            01. About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <div
            className={`flex justify-center lg:justify-start transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Rotating gradient ring */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6c63ff] to-[#00d4aa] animate-spin-slow opacity-40 blur-sm"
                style={{ margin: "-4px" }}
              />

              {/* Card */}
              <div className="relative w-72 rounded-2xl glass-card overflow-hidden border border-white/10 flex flex-col">
                {/* Photo */}
                <div className="relative w-full h-80 bg-gradient-to-br from-[#6c63ff]/10 to-[#00d4aa]/10">
                  {!imgError ? (
                    <Image
                      src="/profile.jpg"
                      alt="Suresh Kumar"
                      fill
                      className="object-cover object-top"
                      onError={() => setImgError(true)}
                      priority
                    />
                  ) : (
                    /* Fallback initials if photo not found yet */
                    <div className="w-full h-full flex items-center justify-center text-white text-5xl font-black">
                      <span className="gradient-text">SK</span>
                    </div>
                  )}
                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0d0d14] to-transparent" />
                </div>

                {/* Name / role strip */}
                <div className="px-5 pt-3 pb-4 text-center">
                  <p className="text-white font-bold text-base">Suresh Kumar</p>
                  <p className="text-[#6c63ff] text-xs font-mono mb-3">
                    Full Stack Developer
                  </p>
                  <div className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/20 w-fit mx-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse" />
                    <span className="text-[#00d4aa] text-xs font-medium">Open to Opportunities</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-6 px-3 py-2 rounded-xl glass-card border border-[#6c63ff]/20 text-xs font-mono text-[#6c63ff] animate-float">
                Kotlin 🤖
              </div>
              <div
                className="absolute -bottom-4 -left-6 px-3 py-2 rounded-xl glass-card border border-[#00d4aa]/20 text-xs font-mono text-[#00d4aa] animate-float"
                style={{ animationDelay: "2s" }}
              >
                Next.js ▲
              </div>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Mobile-first. Web-fluent. 12 years of shipping.
            </h3>
            <p className="text-white/60 leading-relaxed mb-4">
              I&apos;m a Full Stack Developer and Senior Manager with 12+ years of experience
              spanning the full spectrum of modern development. On the mobile side, I specialize
              in <span className="text-white/80">Android (Kotlin/Java)</span>,{" "}
              <span className="text-white/80">Flutter</span>, and{" "}
              <span className="text-white/80">React Native</span>. On the web, I build with{" "}
              <span className="text-white/80">React.js</span>,{" "}
              <span className="text-white/80">Next.js</span>, and{" "}
              <span className="text-white/80">Angular</span>.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              I&apos;ve led the complete SDLC for 20+ enterprise-grade applications for
              Fortune 500 clients including Reliance Industries. I believe in clean
              architecture (MVVM), performance-first thinking, and mentoring teams to
              build products that last.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-white/50">
                  <Icon className="w-4 h-4 text-[#6c63ff] flex-shrink-0" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black gradient-text">{value}</div>
                  <div className="text-white/40 text-xs mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
