"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme, themes } from "@/lib/theme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = themes.find((t) => t.id === theme)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change theme"
        title="Change theme"
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl border transition-all duration-200 hover:scale-105"
        style={{
          background: "var(--surface)",
          borderColor: open ? "var(--accent)" : "var(--border)",
        }}
      >
        <span
          className="w-3 h-3 rounded-full flex-shrink-0 ring-1 ring-black/10"
          style={{ background: current.accent }}
        />
        <span
          className="w-3 h-3 rounded-full flex-shrink-0 ring-1 ring-black/10"
          style={{ background: current.accent2 }}
        />
      </button>

      {open && (
        <div
          className="absolute top-full right-0 mt-2 p-1.5 rounded-2xl border shadow-xl z-[60] min-w-[155px]"
          style={{
            background: "var(--card-bg)",
            borderColor: "var(--border)",
            boxShadow: "0 8px 30px color-mix(in srgb, var(--fg) 12%, transparent)",
          }}
        >
          <p
            className="text-[10px] font-mono uppercase tracking-widest px-3 pt-1.5 pb-2"
            style={{ color: "var(--subtle)" }}
          >
            Theme
          </p>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all duration-150"
              style={{
                background: theme === t.id ? "var(--surface-accent)" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (theme !== t.id)
                  (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              }}
              onMouseLeave={(e) => {
                if (theme !== t.id)
                  (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <span className="flex gap-1 flex-shrink-0">
                <span
                  className="w-3.5 h-3.5 rounded-full ring-1 ring-black/10"
                  style={{ background: t.accent }}
                />
                <span
                  className="w-3.5 h-3.5 rounded-full ring-1 ring-black/10"
                  style={{ background: t.accent2 }}
                />
              </span>
              <span
                className="text-sm font-medium flex-1 text-left"
                style={{ color: "var(--fg)" }}
              >
                {t.label}
              </span>
              {theme === t.id && (
                <span
                  className="text-xs font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
