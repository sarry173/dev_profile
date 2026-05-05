"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { downloadResumePdf } from "@/lib/downloadResume";

export default function PrintButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      await downloadResumePdf();
    } catch (e) {
      console.error(e);
      window.print();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1b63e8] text-white text-sm font-bold hover:bg-[#1550cc] transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Download className="w-4 h-4" />
      )}
      {loading ? "Generating PDF…" : "Download PDF"}
    </button>
  );
}
