"use client";

import { Code2, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6c63ff] to-[#00d4aa] flex items-center justify-center">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="text-white/40 text-sm">
            Suresh Kumar <span className="text-white/20">·</span> Full Stack Developer
          </span>
        </div>

        <p className="text-white/25 text-xs flex items-center gap-1.5">
          Built with
          <Heart className="w-3 h-3 text-[#ff6b6b] fill-[#ff6b6b]" />
          using Next.js & Tailwind · {year}
        </p>

        <nav className="flex gap-5 text-xs text-white/30">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() =>
                document
                  .getElementById(item.toLowerCase())
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-white/60 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
