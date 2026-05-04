"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Send, MapPin, Phone, CheckCircle } from "lucide-react";
import { LinkedinIcon, StackOverflowIcon } from "@/components/SocialIcons";

const socials = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    handle: "suresh-kumar-14726a74",
    href: "https://www.linkedin.com/in/suresh-kumar-14726a74/",
    color: "#0077b5",
  },
  {
    icon: StackOverflowIcon,
    label: "Stack Overflow",
    handle: "suresh-kum",
    href: "https://stackoverflow.com/users/3367381/suresh-kum",
    color: "#f48024",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "suresh.my1989@gmail.com",
    href: "mailto:suresh.my1989@gmail.com",
    color: "#00d4aa",
  },
  {
    icon: Phone,
    label: "Phone",
    handle: "+91-9867699779",
    href: "tel:+919867699779",
    color: "#6c63ff",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto URL
    const recipient = "suresh.my1989@gmail.com";
    const mailtoSubject = encodeURIComponent(form.subject);
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    
    // Open the default email client
    window.location.href = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Show success state
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 relative" ref={ref}>
      <div className="absolute inset-0 hero-bg pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#6c63ff] font-mono text-sm font-medium mb-3 tracking-widest uppercase">
            05. Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Looking for a senior mobile engineer, tech lead, or team manager? Let&apos;s
            talk about how I can add value to your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: contact info */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="glass-card rounded-2xl p-8 border border-white/5">
              <h3 className="text-white font-bold text-xl mb-2">Get in touch</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                I&apos;m open to senior engineering roles, technical leadership positions,
                and consulting engagements in mobile development. Response within 24 hours.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#6c63ff]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#6c63ff]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wide font-mono">
                      Location
                    </p>
                    <p className="text-white/70 text-sm">Mumbai, IN 400070 · Open to Relocation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00d4aa]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#00d4aa]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wide font-mono">
                      Email
                    </p>
                    <a
                      href="mailto:suresh.my1989@gmail.com"
                      className="text-white/70 text-sm hover:text-[#00d4aa] transition-colors"
                    >
                      suresh.my1989@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#6c63ff]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#6c63ff]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wide font-mono">
                      Phone
                    </p>
                    <a
                      href="tel:+919867699779"
                      className="text-white/70 text-sm hover:text-[#6c63ff] transition-colors"
                    >
                      +91-9867699779
                    </a>
                  </div>
                </div>
              </div>

              <div className="section-divider mb-8" />
              <p className="text-white/30 text-xs uppercase tracking-widest font-mono mb-4">
                Find me on
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Phone" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/3 hover:bg-white/8 border border-white/5 hover:border-white/10 transition-all duration-200 group"
                  >
                    <Icon className="w-4 h-4 flex-shrink-0 transition-colors" style={{ color }} />
                    <div className="min-w-0">
                      <p className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">
                        {label}
                      </p>
                      <p className="text-white/30 text-xs font-mono truncate">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {submitted ? (
              <div className="glass-card rounded-2xl p-10 border border-[#00d4aa]/20 flex flex-col items-center justify-center text-center h-full min-h-80">
                <div className="w-16 h-16 rounded-2xl bg-[#00d4aa]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-[#00d4aa]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-white/40 text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8 border border-white/5 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/40 text-xs font-mono uppercase tracking-wide mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#6c63ff]/50 focus:bg-[#6c63ff]/5 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs font-mono uppercase tracking-wide mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#6c63ff]/50 focus:bg-[#6c63ff]/5 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/40 text-xs font-mono uppercase tracking-wide mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Job opportunity / Collaboration / Project"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#6c63ff]/50 focus:bg-[#6c63ff]/5 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/40 text-xs font-mono uppercase tracking-wide mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the role or project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#6c63ff]/50 focus:bg-[#6c63ff]/5 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6c63ff] to-[#00d4aa] text-white font-semibold text-sm hover:opacity-90 hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
