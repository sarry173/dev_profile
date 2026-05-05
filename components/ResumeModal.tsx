"use client";

import { useEffect, useRef } from "react";
import { X, Download, ExternalLink } from "lucide-react";

async function downloadResume() {
  const res = await fetch("/api/download-resume");
  if (!res.ok) return;
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Suresh_Kumar_Senior_Full_Stack_Developer_2026.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={(e) => { if (e.target === backdropRef.current) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#111827]/60 backdrop-blur-md" />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl h-[90vh] flex flex-col rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-2xl bg-white">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#e2e8f0] flex-shrink-0 bg-[#f8faff]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#eef3ff] border border-[#dbe4f5] flex-shrink-0 flex items-center justify-center">
              <span className="text-[#1b63e8] text-xs font-extrabold font-mono">PDF</span>
            </div>
            <div className="min-w-0 pr-2">
              <p className="text-[#111827] text-sm font-bold truncate">Suresh Kumar — Resume</p>
              <p className="text-[#9ca3af] text-xs font-mono truncate">Suresh_Kumar_Senior_Mobile_Developer_2026.pdf</p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="/Suresh_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Open in new tab"
              className="w-9 h-9 rounded-xl border border-[#e2e8f0] bg-white flex items-center justify-center text-[#6b7280] hover:text-[#1b63e8] hover:border-[#1b63e8]/40 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={downloadResume}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f5b800] text-[#111827] text-sm font-bold hover:bg-[#e5aa00] transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl border border-[#e2e8f0] bg-white flex items-center justify-center text-[#6b7280] hover:text-[#111827] hover:border-[#9ca3af] transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden bg-[#f0f5ff]">
          <iframe
            src="/Suresh_Kumar_Resume.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
            title="Suresh Kumar Resume"
            className="w-full h-full"
            style={{ border: "none" }}
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-[#e2e8f0] bg-[#f8faff] flex-shrink-0">
          <p className="text-[#9ca3af] text-xs font-mono">Senior Mobile Engineer · Reliance Jio</p>
          <button
            onClick={downloadResume}
            className="text-xs text-[#1b63e8] hover:text-[#f5b800] transition-colors font-mono flex items-center gap-1"
          >
            <Download className="w-3 h-3" />
            suresh.my1989@gmail.com
          </button>
        </div>
      </div>
    </div>
  );
}
