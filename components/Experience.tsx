"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    role: "Senior Manager Software Development",
    company: "Reliance Jio",
    period: "Feb 2024 – Present",
    location: "Mumbai, India",
    description:
      "Spearheading development and implementation of scalable software solutions, enhancing operational efficiency and team collaboration. Own the complete development lifecycle — from technical design and effort estimation to coding, peer reviews (PMD, Sonar), testing (QA/UAT), production deployment, and post-launch support. Established coding standards, reducing technical debt. Serve as a key technical point of contact for business stakeholders.",
    techs: ["Kotlin", "Android", "Flutter", "MVVM", "Firebase", "PMD", "SonarQube"],
  },
  {
    type: "work",
    role: "Software Developer",
    company: "Mobile Programming India Pvt. Ltd.",
    period: "Jul 2013 – Dec 2023",
    location: "Chandigarh, India",
    description:
      "Built projects starting from Android SDK 2.1 (Eclipse) all the way to modern Kotlin and Flutter development, demonstrating adaptability across a decade of evolving technology. Collaborated with cross-functional teams using Agile methodologies. Assisted in the design and architecture of 15+ enterprise mobile applications. Optimized application performance through regular code reviews and refactoring.",
    techs: ["Android", "Kotlin", "Java", "Flutter", "SAP SDK", "SOAP", "REST", "Firebase"],
  },
  {
    type: "work",
    role: "Software Developer Intern",
    company: "A-One Technology Pvt. Ltd.",
    period: "Nov 2012 – Jun 2013",
    location: "Punjab, India",
    description:
      "Gained hands-on experience in mobile application development, working on Android projects and learning core development workflows and best practices.",
    techs: ["Android", "Java", "Eclipse", "SQLite"],
  },
  {
    type: "education",
    role: "B.Tech — Computer Science",
    company: "Himachal Pradesh University",
    period: "Graduated Jun 2012",
    location: "Himachal Pradesh, India",
    description:
      "Bachelor of Technology in Computer Science. Built a strong foundation in data structures, algorithms, operating systems, and software engineering that has driven 12+ years of professional growth.",
    techs: ["Data Structures", "Algorithms", "OS", "DBMS", "Software Engineering"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#6c63ff] font-mono text-sm font-medium mb-3 tracking-widest uppercase">
            03. Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My <span className="gradient-text">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line opacity-30 -translate-x-px" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const isWork = exp.type === "work";

              return (
                <div
                  key={idx}
                  className={`relative flex gap-6 md:gap-0 transition-all duration-700 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  } ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? "md:pr-10" : "md:pl-10"
                    } ml-16 md:ml-0`}
                  >
                    <div className="glass-card rounded-2xl p-5 hover:border-[#6c63ff]/30 transition-all duration-300 border border-white/5">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-white font-bold text-base">{exp.role}</h3>
                          <p className="text-[#6c63ff] text-sm font-medium">{exp.company}</p>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-lg font-mono flex-shrink-0 ${
                            isWork
                              ? "bg-[#6c63ff]/10 text-[#6c63ff]"
                              : "bg-[#00d4aa]/10 text-[#00d4aa]"
                          }`}
                        >
                          {exp.type === "work" ? "Work" : "Edu"}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs text-white/30 font-mono mb-3">
                        <span>{exp.period}</span>
                        <span>·</span>
                        <span>{exp.location}</span>
                      </div>

                      <p className="text-white/50 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-md bg-white/5 text-white/40 text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="absolute left-0 md:left-1/2 top-5 -translate-x-1/2 z-10 w-12 h-12 rounded-xl bg-[#0d0d14] border-2 border-[#6c63ff]/40 flex items-center justify-center flex-shrink-0">
                    {isWork ? (
                      <Briefcase className="w-5 h-5 text-[#6c63ff]" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-[#00d4aa]" />
                    )}
                  </div>

                  <div className="hidden md:block md:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
