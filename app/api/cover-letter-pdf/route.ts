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
    const { searchParams } = new URL(request.url);
    const company = searchParams.get("company") ?? "";
    const role = searchParams.get("role") ?? "";
    const manager = searchParams.get("manager") ?? "";
    const why = searchParams.get("why") ?? "";

    const launchOptions = await getLaunchOptions();
    browser = await puppeteer.launch(launchOptions);

    const page = await browser.newPage();
    await page.setViewport({ width: 794, height: 1123 });

    const host = request.headers.get("host") ?? "localhost:3000";
    const proto = host.startsWith("localhost") ? "http" : "https";

    const params = new URLSearchParams({ pdf: "1" });
    if (company) params.set("company", company);
    if (role) params.set("role", role);
    if (manager) params.set("manager", manager);
    if (why) params.set("why", why);

    const url = `${proto}://${host}/cover-letter?${params}`;
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: false,
    });

    const slug = company ? `_${company.replace(/\s+/g, "_")}` : "";
    const filename = `Suresh_Kumar_Cover_Letter${slug}.pdf`;

    return new NextResponse(Buffer.from(pdf), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Cover letter PDF generation failed:", err);
    return NextResponse.json(
      { error: "PDF generation failed. Make sure Chrome is installed." },
      { status: 500 }
    );
  } finally {
    await browser?.close();
  }
}
