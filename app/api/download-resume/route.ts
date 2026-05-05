import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Suresh_Kumar_Senior_Full_Stack_Developer_2026.pdf");
  const fileBuffer = await readFile(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Suresh_Kumar_Senior_Full_Stack_Developer_2026.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
