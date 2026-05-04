import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suresh Kumar — Full Stack Developer",
  description:
    "Full Stack Developer with 12+ years of experience across Android (Kotlin/Java), Flutter, React Native, Angular, React.js, and Next.js. Senior Manager Software Development at Reliance Jio.",
  keywords: [
    "Full Stack Developer",
    "Android Developer",
    "Kotlin",
    "Flutter",
    "React Native",
    "React.js",
    "Next.js",
    "Angular",
    "Senior Manager Software Development",
    "Mobile Developer",
  ],
  authors: [{ name: "Suresh Kumar" }],
  openGraph: {
    title: "Suresh Kumar — Full Stack Developer",
    description:
      "12+ years across Android, Flutter, React Native, Angular, React.js & Next.js. Currently Senior Manager at Reliance Jio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
