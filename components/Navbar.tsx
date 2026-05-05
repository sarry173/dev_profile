"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ["about", "skills", "experience", "projects", "contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setIsOpen(false);
    if (href === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — Dev Icon */}
        <button onClick={() => go("#")} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#1b63e8]/10 flex items-center justify-center text-[#1b63e8] group-hover:bg-[#1b63e8] group-hover:text-white transition-colors duration-300">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-lg text-[#111827]">
            Suresh<span className="text-[#1b63e8]">Kumar.</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => {
            const id = l.href === "#" ? "" : l.href.slice(1);
            const isActive = l.href === "#" ? active === "" : active === id;
            return (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                  ? "text-[#1b63e8] bg-[#1b63e8]/8"
                  : "text-[#4b5563] hover:text-[#1b63e8] hover:bg-[#1b63e8]/5"
                  }`}
              >
                {l.label}
              </button>
            );
          })}
          <a
            href="/resume"
            className="px-4 py-2 rounded-lg text-sm font-medium text-[#4b5563] hover:text-[#1b63e8] hover:bg-[#1b63e8]/5 transition-all duration-200"
          >
            Resume
          </a>
          <button
            onClick={() => go("#contact")}
            className="ml-3 px-5 py-2.5 rounded-xl bg-[#f5b800] text-[#111827] text-sm font-bold hover:bg-[#e5aa00] hover:scale-105 transition-all duration-200 shadow-sm"
          >
            Contact Me
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#f0f5ff] text-[#1b63e8]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-[#e2e8f0] py-4 px-6 flex flex-col gap-1">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="text-left px-4 py-3 rounded-xl text-[#374151] hover:text-[#1b63e8] hover:bg-[#f0f5ff] transition-all font-medium"
            >
              {l.label}
            </button>
          ))}
          <a
            href="/resume"
            className="text-left px-4 py-3 rounded-xl text-[#374151] hover:text-[#1b63e8] hover:bg-[#f0f5ff] transition-all font-medium"
          >
            Resume
          </a>
          <button
            onClick={() => go("#contact")}
            className="mt-2 px-5 py-3 rounded-xl bg-[#f5b800] text-[#111827] font-bold text-center"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
