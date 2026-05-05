import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const host = request.headers.get("host") ?? "localhost:3000";
  const proto = host.startsWith("localhost") ? "http" : "https";
  const fileUrl = `${proto}://${host}/Suresh_Kumar_Resume.pdf`;

  const res = await fetch(fileUrl, { cache: "no-store" });
  if (!res.ok) {
    return NextResponse.json({ error: "Resume not found" }, { status: 404 });
  }

  const buffer = await res.arrayBuffer();

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Suresh_Kumar_Senior_Full_Stack_Developer_2026.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
