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
    "Full Stack Developer with 12+ years of experience. Senior Manager at Reliance Jio. Expert in Android, Flutter, React Native, React.js, Next.js, Angular — and AI Engineering including RAG pipelines, Agentic AI, MCP servers, and LLM-powered applications built on Anthropic Claude.",
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
    "AI Engineer",
    "Generative AI",
    "LLM",
    "RAG",
    "LangChain",
    "LlamaIndex",
    "Agentic AI",
    "Multi-Agent Systems",
    "OpenAI",
    "Anthropic",
    "Claude API",
    "MCP",
    "Model Context Protocol",
    "Vector Database",
    "Pinecone",
    "Prompt Engineering",
    "LLM Integration",
    "FastAPI",
    "Code Migration Agent",
  ],
  authors: [{ name: "Suresh Kumar" }],
  openGraph: {
    title: "Suresh Kumar — Senior Mobile Engineer & Full Stack Developer",
    description:
      "Full Stack Developer with 12+ years of experience. Senior Manager at Reliance Jio. Expert in Android, Flutter, React Native, React.js, Next.js, Angular — and AI Engineering including RAG pipelines, Agentic AI, MCP servers, and LLM-powered applications built on Anthropic Claude.",
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
