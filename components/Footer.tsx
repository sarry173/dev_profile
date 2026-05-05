"use client";

import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t"
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "var(--accent-o10)", color: "var(--accent)" }}
          >
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-base" style={{ color: "var(--fg)" }}>
            Suresh<span style={{ color: "var(--accent)" }}>Kumar.</span>
          </span>
          <span className="text-sm" style={{ color: "var(--subtle)" }}>
            · Senior Manager · Software Development
          </span>
        </div>

        <nav className="flex gap-5 text-xs" style={{ color: "var(--muted)" }}>
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() =>
                document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-medium transition-colors"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
              }
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
