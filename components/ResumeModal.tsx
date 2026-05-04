"use client";

import { useEffect, useRef } from "react";
import { X, Download, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Lock body scroll while open
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
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl h-[90vh] flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
           style={{ background: "#13131f" }}>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/8 flex-shrink-0">
          <div className="flex items-center gap-3">
            {/* PDF icon */}
            <div className="w-8 h-8 rounded-lg bg-[#6c63ff]/15 border border-[#6c63ff]/25 flex items-center justify-center">
              <span className="text-[#6c63ff] text-xs font-bold font-mono">PDF</span>
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-tight">Suresh Kumar — Resume</p>
              <p className="text-white/30 text-xs font-mono">Suresh_Kumar_Resume.pdf</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Open in new tab */}
            <a
              href="/Suresh_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Open in new tab"
              className="w-9 h-9 rounded-lg glass-card border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Download */}
            <a
              href="/Suresh_Kumar_Resume.pdf"
              download="Suresh_Kumar_Resume.pdf"
              title="Download"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#6c63ff] to-[#00d4aa] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              title="Close"
              className="w-9 h-9 rounded-lg glass-card border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden bg-[#0d0d14]">
          <iframe
            src="/Suresh_Kumar_Resume.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
            title="Suresh Kumar Resume"
            className="w-full h-full"
            style={{ border: "none" }}
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-white/8 flex-shrink-0">
          <p className="text-white/25 text-xs font-mono">
            Senior Manager Software Development · Reliance Jio
          </p>
          <a
            href="/Suresh_Kumar_Resume.pdf"
            download="Suresh_Kumar_Resume.pdf"
            className="text-xs text-[#6c63ff] hover:text-[#00d4aa] transition-colors font-mono flex items-center gap-1"
          >
            <Download className="w-3 h-3" />
            suresh.my1989@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
