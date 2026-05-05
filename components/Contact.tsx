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

  const contactDetails = [
    { icon: MapPin, label: "Location", value: personalInfo.locationFull, href: undefined, bg: "var(--surface-accent)", color: "var(--accent)" },
    { icon: Mail,   label: "Email",    value: personalInfo.email, href: `mailto:${personalInfo.email}`, bg: "var(--surface-accent-2)", color: "var(--accent-2)" },
    { icon: Phone,  label: "Phone",    value: personalInfo.phone.formatted, href: `tel:${personalInfo.phone.raw}`, bg: "var(--surface-accent)", color: "var(--accent)" },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "var(--surface-alt)" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p
            className="font-mono text-sm font-semibold mb-2 tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            05. Contact
          </p>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: "var(--fg)" }}
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="max-w-xl mx-auto mb-6" style={{ color: "var(--muted)" }}>
            Looking for a senior mobile engineer, tech lead, or engineering manager?
            Let&apos;s talk about how I can add value to your team.
          </p>

          {/* Availability banner */}
          <div
            className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl border shadow-sm"
            style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold" style={{ color: "var(--fg-2)" }}>
                Available for senior roles starting{" "}
                <span className="font-bold" style={{ color: "var(--accent-2)" }}>
                  {personalInfo.availability}
                </span>
              </span>
            </div>
            <span className="hidden sm:block" style={{ color: "var(--border)" }}>·</span>
            <a
              href={`mailto:${personalInfo.email}?subject=Intro%20Call%20Request&body=Hi%20${encodeURIComponent(personalInfo.firstName)}%2C%20I%27d%20like%20to%20schedule%20a%2020-min%20intro%20call.`}
              className="flex items-center gap-1.5 text-sm font-bold transition-colors"
              style={{ color: "var(--accent)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent-2)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
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
            <div
              className="rounded-2xl p-8 border shadow-sm"
              style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
            >
              <h3 className="font-bold text-xl mb-2" style={{ color: "var(--fg)" }}>
                Let&apos;s connect
              </h3>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                Open to senior engineering roles, technical leadership, and mobile consulting engagements.
                I respond within 24 hours.
              </p>

              {/* Contact details */}
              <div className="space-y-4 mb-8">
                {contactDetails.map(({ icon: Icon, label, value, href, bg, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: bg }}
                    >
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <div>
                      <p
                        className="text-xs uppercase tracking-wide font-mono"
                        style={{ color: "var(--subtle)" }}
                      >
                        {label}
                      </p>
                      {href
                        ? (
                          <a
                            href={href}
                            className="text-sm font-medium transition-colors"
                            style={{ color: "var(--fg-2)" }}
                            onMouseEnter={(e) =>
                              ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                            }
                            onMouseLeave={(e) =>
                              ((e.currentTarget as HTMLElement).style.color = "var(--fg-2)")
                            }
                          >
                            {value}
                          </a>
                        )
                        : <p className="text-sm font-medium" style={{ color: "var(--fg-2)" }}>{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-px mb-6" style={{ background: "var(--border)" }} />
              <p
                className="text-xs uppercase tracking-widest font-mono mb-4"
                style={{ color: "var(--subtle)" }}
              >
                Find me on
              </p>
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.socials.map(({ iconName, label, handle, href, color }) => {
                  const Icon = iconMap[iconName];
                  return (
                    <a
                      key={label}
                      href={href}
                      target={label !== "Phone" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 group"
                      style={{
                        background: "var(--surface-alt)",
                        borderColor: "var(--border)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--surface-accent)";
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-o30)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--surface-alt)";
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      }}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                      <div className="min-w-0">
                        <p
                          className="text-xs font-semibold group-hover:transition-colors"
                          style={{ color: "var(--fg-2)" }}
                          onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                          }
                          onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color = "var(--fg-2)")
                          }
                        >
                          {label}
                        </p>
                        <p
                          className="text-xs font-mono truncate"
                          style={{ color: "var(--subtle)" }}
                        >
                          {handle}
                        </p>
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
              <div
                className="rounded-2xl p-10 border shadow-sm flex flex-col items-center justify-center text-center min-h-80"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: "var(--surface-accent-2)" }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: "var(--accent-2)" }} />
                </div>
                <h3 className="font-bold text-xl mb-2" style={{ color: "var(--fg)" }}>
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 border shadow-sm space-y-5"
                style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "name",  label: "Name *",  type: "text",  placeholder: "Your name" },
                    { key: "email", label: "Email *", type: "email", placeholder: "your@company.com" },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label
                        className="block text-xs font-semibold uppercase tracking-wide mb-2"
                        style={{ color: "var(--fg-2)" }}
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        required
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        placeholder={placeholder}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                        style={{
                          background: "var(--surface-alt)",
                          borderColor: "var(--border)",
                          color: "var(--fg)",
                        }}
                        onFocus={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                          (e.currentTarget as HTMLElement).style.background = "var(--card-bg)";
                        }}
                        onBlur={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                          (e.currentTarget as HTMLElement).style.background = "var(--surface-alt)";
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: "var(--fg-2)" }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Job opportunity / Collaboration / Project"
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                    style={{
                      background: "var(--surface-alt)",
                      borderColor: "var(--border)",
                      color: "var(--fg)",
                    }}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.background = "var(--card-bg)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.background = "var(--surface-alt)";
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: "var(--fg-2)" }}
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the role or project..."
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none"
                    style={{
                      background: "var(--surface-alt)",
                      borderColor: "var(--border)",
                      color: "var(--fg)",
                    }}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.background = "var(--card-bg)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.background = "var(--surface-alt)";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
                  style={{ background: "var(--accent-2)", color: "#111827" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.filter = "brightness(0.93)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.filter = "none")
                  }
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
