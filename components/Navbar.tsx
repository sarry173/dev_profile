"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "navbar-scrolled py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => go("#")} className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300"
            style={{
              background: "var(--accent-o10)",
              color: "var(--accent)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent-o10)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
          >
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-lg" style={{ color: "var(--fg)" }}>
            Suresh<span style={{ color: "var(--accent)" }}>Kumar.</span>
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
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: isActive ? "var(--accent)" : "var(--fg-3)",
                  background: isActive ? "var(--accent-o8)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.background = "var(--accent-o5)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "var(--fg-3)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                {l.label}
              </button>
            );
          })}
          <a
            href="/resume"
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{ color: "var(--fg-3)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              (e.currentTarget as HTMLElement).style.background = "var(--accent-o5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--fg-3)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Resume
          </a>

          <ThemeToggle />

          <button
            onClick={() => go("#contact")}
            className="ml-3 px-5 py-2.5 rounded-xl text-sm font-bold hover:scale-105 transition-all duration-200 shadow-sm"
            style={{
              background: "var(--accent-2)",
              color: "#111827",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.filter = "brightness(0.93)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.filter = "none")
            }
          >
            Contact Me
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="w-10 h-10 flex items-center justify-center rounded-xl transition-colors"
            style={{ background: "var(--surface)", color: "var(--accent)" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 shadow-lg border-t py-4 px-6 flex flex-col gap-1"
          style={{
            background: "var(--card-bg)",
            borderColor: "var(--border)",
          }}
        >
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="text-left px-4 py-3 rounded-xl transition-all font-medium"
              style={{ color: "var(--fg-2)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--fg-2)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {l.label}
            </button>
          ))}
          <a
            href="/resume"
            className="text-left px-4 py-3 rounded-xl transition-all font-medium"
            style={{ color: "var(--fg-2)" }}
          >
            Resume
          </a>
          <button
            onClick={() => go("#contact")}
            className="mt-2 px-5 py-3 rounded-xl font-bold text-center"
            style={{ background: "var(--accent-2)", color: "#111827" }}
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
}
