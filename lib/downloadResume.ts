export async function downloadResumePdf() {
  const res = await fetch("/api/resume-pdf");
  if (!res.ok) throw new Error("PDF generation failed");
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Suresh_Kumar_Senior_Full_Stack_Developer_2026.pdf";
  a.click();
  URL.revokeObjectURL(url);
}
