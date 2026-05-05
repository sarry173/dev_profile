"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-[#e2e8f0] bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="relative flex items-center w-9 h-6">
            <span className="absolute left-0 w-5 h-5 rounded-full bg-[#1b63e8]" />
            <span className="absolute left-3 w-5 h-5 rounded-full bg-[#f5b800]" />
          </span>
          <span className="font-extrabold text-base text-[#111827]">
            Suresh<span className="text-[#1b63e8]">.</span>
          </span>
          <span className="text-[#9ca3af] text-sm">· Senior Mobile Engineer</span>
        </div>

        <p className="text-[#9ca3af] text-xs">
          Built with Next.js &amp; Tailwind CSS · {year}
        </p>

        <nav className="flex gap-5 text-xs text-[#6b7280]">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() =>
                document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-[#1b63e8] transition-colors font-medium"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
