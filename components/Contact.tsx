"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Send, MapPin, Phone, CheckCircle, Calendar } from "lucide-react";
import { LinkedinIcon, StackOverflowIcon, GithubIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/config";

const iconMap = {
  LinkedinIcon,
  GithubIcon,
  StackOverflowIcon,
  Mail,
  Phone,
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`;
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#f8faff]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#1b63e8] font-mono text-sm font-semibold mb-2 tracking-widest uppercase">
            05. Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto mb-6">
            Looking for a senior mobile engineer, tech lead, or engineering manager?
            Let&apos;s talk about how I can add value to your team.
          </p>

          {/* Availability banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[#374151] text-sm font-semibold">
                Available for senior roles starting{" "}
                <span className="text-[#f5b800] font-bold">{personalInfo.availability}</span>
              </span>
            </div>
            <span className="text-[#d1d5db] hidden sm:block">·</span>
            <a
              href={`mailto:${personalInfo.email}?subject=Intro%20Call%20Request&body=Hi%20${encodeURIComponent(personalInfo.firstName)}%2C%20I%27d%20like%20to%20schedule%20a%2020-min%20intro%20call.`}
              className="flex items-center gap-1.5 text-[#1b63e8] text-sm font-bold hover:text-[#f5b800] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book a 20-min intro call
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: info */}
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm">
              <h3 className="text-[#111827] font-bold text-xl mb-2">Let&apos;s connect</h3>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-8">
                Open to senior engineering roles, technical leadership, and mobile consulting engagements.
                I respond within 24 hours.
              </p>

              {/* Contact details */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: MapPin, label: "Location", value: personalInfo.locationFull, color: "#1b63e8", bg: "#eef3ff" },
                  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "#f5b800", bg: "#fffbeb" },
                  { icon: Phone, label: "Phone", value: personalInfo.phone.formatted, href: `tel:${personalInfo.phone.raw}`, color: "#1b63e8", bg: "#eef3ff" },
                ].map(({ icon: Icon, label, value, href, color, bg }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <div>
                      <p className="text-xs text-[#9ca3af] uppercase tracking-wide font-mono">{label}</p>
                      {href
                        ? <a href={href} className="text-[#374151] text-sm font-medium hover:text-[#1b63e8] transition-colors">{value}</a>
                        : <p className="text-[#374151] text-sm font-medium">{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-px bg-[#e2e8f0] mb-6" />
              <p className="text-[#9ca3af] text-xs uppercase tracking-widest font-mono mb-4">Find me on</p>
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.socials.map(({ iconName, label, handle, href, color }) => {
                  const Icon = iconMap[iconName];
                  return (
                    <a
                      key={label}
                      href={href}
                      target={label !== "Phone" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#f8faff] hover:bg-[#eef3ff] border border-[#e2e8f0] hover:border-[#1b63e8]/30 transition-all duration-200 group"
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                      <div className="min-w-0">
                        <p className="text-[#374151] text-xs font-semibold group-hover:text-[#1b63e8] transition-colors">{label}</p>
                        <p className="text-[#9ca3af] text-xs font-mono truncate">{handle}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 border border-[#e2e8f0] shadow-sm flex flex-col items-center justify-center text-center min-h-80">
                <div className="w-16 h-16 rounded-2xl bg-[#fffbeb] flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-[#f5b800]" />
                </div>
                <h3 className="text-[#111827] font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-[#6b7280] text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "name", label: "Name *", type: "text", placeholder: "Your name" },
                    { key: "email", label: "Email *", type: "email", placeholder: "your@company.com" },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-[#374151] text-xs font-semibold uppercase tracking-wide mb-2">{label}</label>
                      <input
                        type={type}
                        required
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        placeholder={placeholder}
                        className="w-full px-4 py-3 rounded-xl bg-[#f8faff] border border-[#e2e8f0] text-[#111827] placeholder-[#9ca3af] text-sm focus:outline-none focus:border-[#1b63e8] focus:bg-white transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[#374151] text-xs font-semibold uppercase tracking-wide mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Job opportunity / Collaboration / Project"
                    className="w-full px-4 py-3 rounded-xl bg-[#f8faff] border border-[#e2e8f0] text-[#111827] placeholder-[#9ca3af] text-sm focus:outline-none focus:border-[#1b63e8] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[#374151] text-xs font-semibold uppercase tracking-wide mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the role or project..."
                    className="w-full px-4 py-3 rounded-xl bg-[#f8faff] border border-[#e2e8f0] text-[#111827] placeholder-[#9ca3af] text-sm focus:outline-none focus:border-[#1b63e8] focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#f5b800] text-[#111827] font-bold text-sm hover:bg-[#e5aa00] hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
