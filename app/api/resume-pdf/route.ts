import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer-core";

export const maxDuration = 30;

const LOCAL_CHROME_PATHS: Record<string, string> = {
  darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  linux: "/usr/bin/google-chrome",
  win32: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
};

const CHROMIUM_REMOTE_URL =
  "https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar";

async function getLaunchOptions() {
  if (process.env.VERCEL) {
    const chromium = (await import("@sparticuz/chromium-min")).default;
    return {
      executablePath: await chromium.executablePath(CHROMIUM_REMOTE_URL),
      args: chromium.args,
      headless: true as const,
    };
  }
  return {
    executablePath: LOCAL_CHROME_PATHS[process.platform] ?? LOCAL_CHROME_PATHS.linux,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    headless: true as const,
  };
}

export async function GET(request: NextRequest) {
  let browser;
  try {
    const launchOptions = await getLaunchOptions();
    browser = await puppeteer.launch(launchOptions);

    const page = await browser.newPage();
    // 794px = A4 width at 96dpi — matches the paper width so content lays out correctly
    await page.setViewport({ width: 794, height: 1123 });

    // Build the URL to the resume page using the incoming request's host
    const host = request.headers.get("host") ?? "localhost:3000";
    const proto = host.startsWith("localhost") ? "http" : "https";
    const url = `${proto}://${host}/resume?pdf=1`;

    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    // Let CSS @page { margin } handle margins — don't double-apply here
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: false,
    });

    return new NextResponse(Buffer.from(pdf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Suresh_Kumar_Senior_Full_Stack_Developer_2026.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("PDF generation failed:", err);
    return NextResponse.json(
      { error: "PDF generation failed. Make sure Chrome is installed." },
      { status: 500 }
    );
  } finally {
    await browser?.close();
  }
}
