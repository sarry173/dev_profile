import type { Metadata } from "next";
import CoverLetterClient from "./CoverLetterClient";
import { personalInfo } from "@/data/config";

export const metadata: Metadata = {
  title: `Cover Letter — ${personalInfo.name}`,
  description: `Personalized cover letter for ${personalInfo.name} — Senior Mobile Engineer & Full Stack Developer with 12+ years of experience.`,
};

export default async function CoverLetterPage({
  searchParams,
}: {
  searchParams: Promise<{ pdf?: string; company?: string; role?: string; manager?: string; why?: string }>;
}) {
  const { pdf, company = "", role = "", manager = "", why = "" } = await searchParams;
  const isPdf = pdf === "1";

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <CoverLetterClient
      isPdf={isPdf}
      initialCompany={company}
      initialRole={role}
      initialManager={manager}
      initialWhy={why}
      today={today}
    />
  );
}
