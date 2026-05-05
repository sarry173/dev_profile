"use client";

import { useEffect, useState } from "react";
import { Download, Mail, Phone } from "lucide-react";
import { LinkedinIcon, StackOverflowIcon, GithubIcon } from "@/components/SocialIcons";
import Image from "next/image";
import { personalInfo, heroRoles } from "@/data/config";

const iconMap = {
  LinkedinIcon,
  GithubIcon,
  StackOverflowIcon,
  Mail,
  Phone,
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const current = heroRoles[roleIndex];
    const t = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length)
          setTimeout(() => setIsDeleting(true), 2200);
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setRoleIndex((p) => (p + 1) % heroRoles.length);
        }
      }
    }, isDeleting ? 45 : 95);
    return () => clearTimeout(t);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen hero-bg grid-pattern flex items-center overflow-hidden px-6 pt-24 pb-12">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1b63e8]/6 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#f5b800]/8 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* ── Left: Text ── */}
        <div className="order-2 lg:order-1">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1b63e8]/8 border border-[#1b63e8]/15 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f5b800] animate-pulse" />
            <span className="text-[#1b63e8] text-sm font-semibold">Hi, I&apos;m</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-black text-[#111827] mb-2 leading-tight">
            {personalInfo.firstName}{" "}
            <span className="text-[#1b63e8]">{personalInfo.lastName}</span>
          </h1>

          {/* Role — large yellow */}
          <div className="h-14 md:h-16 flex items-center mb-4">
            <h2 className="text-3xl md:text-4xl font-black text-[#f5b800] leading-tight">
              {displayed}
              <span className="inline-block w-0.5 h-8 bg-[#f5b800] ml-1 align-middle animate-[blink_1s_infinite]" />
            </h2>
          </div>

          {/* Sub-title */}
          <p className="text-[#6b7280] text-sm font-mono tracking-widest uppercase mb-5">
            {personalInfo.subtitle} · {personalInfo.yearsExperience} Years
          </p>

          {/* Description */}
          <p className="text-[#374151] text-lg leading-relaxed mb-8 max-w-lg">
            {personalInfo.summary}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-xl bg-[#f5b800] text-[#111827] font-bold text-base hover:bg-[#e5aa00] hover:scale-105 transition-all duration-200 shadow-md glow-amber"
            >
              Hire Me
            </button>
            <a
              href="/resume"
              className="px-8 py-4 rounded-xl border-2 border-[#1b63e8] text-[#1b63e8] font-bold text-base hover:bg-[#1b63e8] hover:text-white hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {personalInfo.socials.map(({ iconName, href, label }) => {
              const Icon = iconMap[iconName];
              return (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" && label !== "Phone" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl bg-[#f0f5ff] border border-[#dbe4f5] flex items-center justify-center text-[#1b63e8] hover:bg-[#1b63e8] hover:text-white hover:border-[#1b63e8] transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* ── Right: Photo with blob ── */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-72 h-80 md:w-96 md:h-[440px]">
            {/* Blue organic blob behind photo */}
            <div
              className="absolute blob-bg bg-[#1b63e8] animate-pulse-soft"
              style={{ inset: "-16px", transform: "rotate(-6deg)" }}
            />

            {/* Yellow accent blob */}
            <div
              className="absolute blob-bg bg-[#f5b800]/50"
              style={{
                width: "45%", height: "45%",
                bottom: "-8%", right: "-8%",
                transform: "rotate(15deg)"
              }}
            />

            {/* Photo */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden z-10 border-4 border-white shadow-2xl">
              {!imgError ? (
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#1b63e8]/20 to-[#f5b800]/20 flex items-center justify-center text-6xl font-black text-[#1b63e8]">
                  {personalInfo.initials}
                </div>
              )}
            </div>

            {/* Years badge */}
            <div className="absolute -bottom-4 -left-4 z-20 w-20 h-20 rounded-2xl bg-[#f5b800] shadow-lg flex flex-col items-center justify-center rotate-[-4deg] animate-float">
              <span className="text-2xl font-black text-[#111827] leading-none">{personalInfo.yearsExperience}</span>
              <span className="text-[9px] font-bold text-[#111827]/70 uppercase tracking-wide leading-tight text-center">Years<br />Exp.</span>
            </div>

            {/* Available badge */}
            <div className="absolute -top-3 -right-3 z-20 px-3 py-2 rounded-xl bg-white shadow-lg border border-[#e2e8f0] flex items-center gap-2 animate-float" style={{ animationDelay: "1.5s" }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-[#374151]">{personalInfo.availabilityStatus}</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
