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
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--accent-o6)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--accent-2-o8)" }}
      />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* ── Left: Text ── */}
        <div className="order-2 lg:order-1">
          {/* Greeting badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{
              background: "var(--accent-o8)",
              borderColor: "var(--accent-o15)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--accent-2)" }}
            />
            <span className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
              Hi, I&apos;m
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-5xl md:text-6xl font-black mb-2 leading-tight"
            style={{ color: "var(--fg)" }}
          >
            {personalInfo.firstName}{" "}
            <span style={{ color: "var(--accent)" }}>{personalInfo.lastName}</span>
          </h1>

          {/* Role — large accent-2 */}
          <div className="h-14 md:h-16 flex items-center mb-4">
            <h2
              className="text-3xl md:text-4xl font-black leading-tight"
              style={{ color: "var(--accent-2)" }}
            >
              {displayed}
              <span
                className="inline-block w-0.5 h-8 ml-1 align-middle animate-[blink_1s_infinite]"
                style={{ background: "var(--accent-2)" }}
              />
            </h2>
          </div>

          {/* Sub-title */}
          <p
            className="text-sm font-mono tracking-widest uppercase mb-5"
            style={{ color: "var(--muted)" }}
          >
            {personalInfo.subtitle} · {personalInfo.yearsExperience} Years
          </p>

          {/* Description */}
          <p
            className="text-lg leading-relaxed mb-8 max-w-lg"
            style={{ color: "var(--fg-2)" }}
          >
            {personalInfo.summary}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 rounded-xl font-bold text-base hover:scale-105 transition-all duration-200 shadow-md glow-amber"
              style={{ background: "var(--accent-2)", color: "#111827" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.filter = "brightness(0.93)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.filter = "none")
              }
            >
              Hire Me
            </button>
            <a
              href="/resume"
              className="px-8 py-4 rounded-xl border-2 font-bold text-base hover:scale-105 transition-all duration-200 flex items-center gap-2"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="/cover-letter"
              className="px-8 py-4 rounded-xl border-2 font-bold text-base hover:scale-105 transition-all duration-200 flex items-center gap-2"
              style={{
                borderColor: "var(--accent-2)",
                color: "var(--accent-2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent-2)";
                (e.currentTarget as HTMLElement).style.color = "#111827";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--accent-2)";
              }}
            >
              Cover Letter
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
                  className="w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border-light)",
                    color: "var(--accent)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)";
                  }}
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
            {/* Organic blob behind photo */}
            <div
              className="absolute blob-bg animate-pulse-soft"
              style={{ inset: "-16px", transform: "rotate(-6deg)", background: "var(--accent)" }}
            />

            {/* Accent-2 blob */}
            <div
              className="absolute blob-bg"
              style={{
                width: "45%", height: "45%",
                bottom: "-8%", right: "-8%",
                transform: "rotate(15deg)",
                background: "var(--accent-2-o50)",
              }}
            />

            {/* Photo */}
            <div
              className="absolute inset-0 rounded-3xl overflow-hidden z-10 border-4 shadow-2xl"
              style={{ borderColor: "var(--card-bg)" }}
            >
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
                <div
                  className="w-full h-full flex items-center justify-center text-6xl font-black"
                  style={{
                    background: `linear-gradient(135deg, var(--accent-o20), var(--accent-2-o10))`,
                    color: "var(--accent)",
                  }}
                >
                  {personalInfo.initials}
                </div>
              )}
            </div>

            {/* Years badge */}
            <div
              className="absolute -bottom-4 -left-4 z-20 w-20 h-20 rounded-2xl shadow-lg flex flex-col items-center justify-center rotate-[-4deg] animate-float"
              style={{ background: "var(--accent-2)" }}
            >
              <span className="text-2xl font-black leading-none" style={{ color: "#111827" }}>
                {personalInfo.yearsExperience}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wide leading-tight text-center" style={{ color: "#111827", opacity: 0.7 }}>
                Years<br />Exp.
              </span>
            </div>

            {/* Available badge */}
            <div
              className="absolute -top-3 -right-3 z-20 px-3 py-2 rounded-xl shadow-lg border flex items-center gap-2 animate-float"
              style={{
                animationDelay: "1.5s",
                background: "var(--card-bg)",
                borderColor: "var(--border)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold" style={{ color: "var(--fg-2)" }}>
                {personalInfo.availabilityStatus}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
