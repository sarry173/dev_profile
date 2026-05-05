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
  title: "Suresh Kumar — Senior Mobile Engineer & Full Stack Developer",
  description:
    "Senior Mobile Engineer (Android/Flutter) with 12+ years of experience. Full-stack capability across React Native, React.js, Next.js, and Angular. Senior Manager at Reliance Jio, open to senior engineering and tech lead roles.",
  keywords: [
    "Senior Mobile Engineer",
    "Android Developer",
    "Flutter Developer",
    "Kotlin Expert",
    "Tech Lead India",
    "Mobile Architect",
    "Engineering Manager",
    "React Native Developer",
    "Full Stack Developer",
    "Senior Manager Software Development",
    "React.js",
    "Next.js",
    "Angular",
    "Mumbai",
    "India",
    "remote",
    "Reliance Jio",
    "Android tech lead",
    "Flutter tech lead",
    "mobile development India",
    "senior engineer Mumbai",
    "enterprise mobile apps",
  ],
  authors: [{ name: "Suresh Kumar" }],
  openGraph: {
    title: "Suresh Kumar — Senior Mobile Engineer & Full Stack Developer",
    description:
      "12+ years shipping enterprise mobile & web apps. Android/Flutter expert + full-stack web. Senior Manager at Reliance Jio. Open to senior roles.",
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
