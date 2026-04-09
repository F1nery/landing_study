import type { Metadata } from "next";
import { ResumeLanding } from "@/components/resume/ResumeLanding";
import { resume } from "@/data/resume";

export const metadata: Metadata = {
  title: resume.name,
  description: `${resume.title} — ${resume.tagline}`,
};

export default function Home() {
  return <ResumeLanding data={resume} />;
}
