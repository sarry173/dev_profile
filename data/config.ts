// ─── PORTFOLIO CONFIG ─────────────────────────────────────────────────────────
// Single source of truth for all portfolio data.
// Update this file to add, remove, or modify any content on the site.

// ─── Personal Info ────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Suresh Kumar",
  firstName: "Suresh",
  lastName: "Kumar",
  initials: "SK",
  profileImage: "/profile.jpg",
  resumePdf: "/Suresh_Kumar_Resume.pdf",

  title: "Senior Mobile Engineer · Full Stack Developer · AI / GenAI Engineer",
  subtitle: "Senior Manager · Software Development",
  yearsExperience: "12+",
  summary:
    "Full Stack Developer bridging mobile, web, and intelligent AI systems — with hands-on expertise in RAG pipelines, agentic AI, MCP servers, and LLM-powered applications.",

  location: "Mumbai, India",
  locationFull: "Mumbai, IN 400070 · Open to Relocation",
  openToRelocation: true,

  availability: "June 2026",
  availabilityStatus: "Open to Roles",

  currentRole: "Senior Manager Software Development",
  currentCompany: "Reliance Jio",
  currentScope: "leading Android & Flutter teams serving 100K+ enterprise employees",

  portfolioUrl: "sureshkumar-dev.vercel.app",

  email: "suresh.my1989@gmail.com",
  phone: {
    raw: "+919867699779",
    display: "+91 98676 99779",
    formatted: "+91-9867699779",
  },

  socials: [
    {
      id: "linkedin",
      label: "LinkedIn",
      handle: "suresh-kumar-14726a74",
      href: "https://www.linkedin.com/in/suresh-kumar-14726a74/",
      displayUrl: "linkedin.com/in/suresh-kumar-14726a74",
      iconName: "LinkedinIcon" as const,
      color: "#0077b5",
    },
    {
      id: "github",
      label: "GitHub",
      handle: "sarry173",
      href: "https://github.com/sarry173",
      displayUrl: "github.com/sarry173",
      iconName: "GithubIcon" as const,
      color: "#111827",
    },
    {
      id: "stackoverflow",
      label: "Stack Overflow",
      handle: "suresh-kum",
      href: "https://stackoverflow.com/users/3367381/suresh-kum",
      displayUrl: "stackoverflow.com/users/3367381",
      iconName: "StackOverflowIcon" as const,
      color: "#f48024",
    },
    {
      id: "email",
      label: "Email",
      handle: "suresh.my1989@gmail.com",
      href: "mailto:suresh.my1989@gmail.com",
      iconName: "Mail" as const,
      color: "#1b63e8",
    },
    {
      id: "phone",
      label: "Phone",
      handle: "+91-9867699779",
      href: "tel:+919867699779",
      iconName: "Phone" as const,
      color: "#f5b800",
    },
  ],

  languages: [
    { name: "English", proficiency: "Professional proficiency" },
    { name: "Hindi", proficiency: "Native" },
  ],
};

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const seoMetadata = {
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
  resumeTitle:
    "Suresh Kumar — Resume | Senior Mobile Engineer & Full Stack Developer",
  resumeDescription:
    "Resume of Suresh Kumar — Senior Mobile Engineer, Full Stack Developer, and AI Engineer with 12+ years of experience at Reliance Jio.",
};

// ─── Hero Section ─────────────────────────────────────────────────────────────

export const heroRoles = [
  "Senior Mobile Engineer",
  "🤖 AI & GenAI Engineer",
  "Android & Kotlin Expert",
  "Flutter Developer",
  "React Native Engineer",
  "React.js / Next.js Dev",
  "Tech Lead & Mentor",
];

// ─── About Section ────────────────────────────────────────────────────────────

export const aboutBio = {
  tagline: "Mobile-first. Web-fluent. 12 years of shipping.",
  paragraphs: [
    "I'm a Senior Mobile Engineer and Senior Manager with 12+ years of experience spanning the full spectrum of modern development — from Android (Kotlin/Java), Flutter, and React Native on mobile, to React.js, Next.js, and Angular on the web.",
    "Led SDLC for 20+ enterprise apps for Fortune 500 clients including Reliance Industries. I champion clean architecture, performance-first thinking, and team mentorship.",
    "Beyond mobile and web, I'm deeply invested in AI engineering — building RAG pipelines that ground LLMs in enterprise knowledge, designing agentic systems that reason and act autonomously, building MCP (Model Context Protocol) servers, and integrating generative AI into production mobile and web applications. I work across the full AI stack: from prompt engineering and vector databases to multi-agent orchestration, all the way to agentic developer tooling powered by Anthropic Claude.",
  ],
};

export const skillBars = [
  { label: "Android (Kotlin / Java)", level: 95 },
  { label: "Flutter (Dart)", level: 88 },
  { label: "React Native", level: 78 },
  { label: "React.js / Next.js", level: 84 },
  { label: "Angular", level: 75 },
  { label: "LLM Integration (Claude/OpenAI)", level: 88 },
  { label: "RAG Pipelines (LangChain)", level: 85 },
  { label: "MCP Server Development", level: 83 },
  { label: "Agentic AI", level: 82 },
];

export const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "20+", label: "Apps Shipped" },
  { value: "6", label: "Tech Stacks" },
  { value: "F500", label: "Clients" },
];

// ─── Skills Section ───────────────────────────────────────────────────────────

export type ServiceIconName =
  | "FaRobot"
  | "FaAndroid"
  | "SiFlutter"
  | "FaReact"
  | "SiNextdotjs"
  | "FaAngular"
  | "FaUsersCog";

export type Service = {
  iconName: ServiceIconName;
  title: string;
  desc: string;
  color: string;
  bg: string;
};

export const services: Service[] = [
  {
    iconName: "FaRobot",
    title: "AI / GenAI",
    desc: "Building MCP servers, autonomous agents, and RAG pipelines powered by Anthropic Claude and OpenAI. Expert in prompt engineering and vector databases.",
    color: "#7C3AED",
    bg: "#f3e8ff",
  },
  {
    iconName: "FaAndroid",
    title: "Android Development",
    desc: "Native Android apps in Kotlin/Java using MVVM, Jetpack, Room, and SAP SDK — from SDK 2.1 through modern architectures.",
    color: "#3DDC84",
    bg: "#eafaf1",
  },
  {
    iconName: "SiFlutter",
    title: "Flutter / Cross-Platform",
    desc: "High-fidelity Flutter apps with BLoC/GetX state management, Firebase, platform channels, and Play Store deployments.",
    color: "#02569B",
    bg: "#e1f0fa",
  },
  {
    iconName: "FaReact",
    title: "React Native",
    desc: "Cross-platform mobile apps with React Native, Expo, Redux, and deep integration with native device APIs.",
    color: "#61dafb",
    bg: "#ecfeff",
  },
  {
    iconName: "SiNextdotjs",
    title: "React.js / Next.js",
    desc: "Modern web frontends with React.js hooks, Next.js App Router, SSR/SSG, and Tailwind CSS — deployed on Vercel.",
    color: "#111827",
    bg: "#f3f4f6",
  },
  {
    iconName: "FaAngular",
    title: "Angular",
    desc: "Enterprise Angular dashboards with TypeScript, RxJS, Angular Material, NgRx state, and REST/GraphQL APIs.",
    color: "#dd0031",
    bg: "#fef2f2",
  },
  {
    iconName: "FaUsersCog",
    title: "Tech Leadership",
    desc: "End-to-end SDLC ownership — architecture design, SonarQube/PMD code quality, team mentoring, and stakeholder communication.",
    color: "#f5b800",
    bg: "#fffbeb",
  },
];

export const coreBadges = [
  "Kotlin", "Java", "Dart", "JavaScript", "TypeScript",
  "Flutter", "React Native", "React.js", "Next.js", "Angular",
  "Anthropic Claude", "MCP", "LangChain", "LlamaIndex", "Pinecone",
  "ChromaDB", "FAISS", "OpenAI", "Gemini", "FastAPI", "Python",
  "HuggingFace", "RAG", "Agentic AI", "Prompt Engineering",
  "Model Context Protocol", "AST Parsing", "Code Migration",
  "SQLite", "Room", "Firebase", "Redux", "REST", "SOAP",
  "SAP SDK", "GraphQL", "FCM/GCM", "Android Studio", "Git",
  "Gradle", "Tailwind CSS", "Vercel", "SonarQube",
];

// ─── Experience & Education Timeline ─────────────────────────────────────────

export type TimelineEntry = {
  type: "work" | "education";
  role: string;
  company: string;
  period: string;
  location: string;
  /** Short prose summary shown on the portfolio timeline card */
  description: string;
  /** Bullet points used in the resume */
  bullets: string[];
  /** Badge array shown on timeline card */
  techs: string[];
  /** Dot-separated string shown in the resume */
  techsString: string;
};

export const timeline: TimelineEntry[] = [
  {
    type: "work",
    role: "Senior Manager Software Development",
    company: "Reliance Jio",
    period: "Feb 2024 – Present",
    location: "Mumbai, India",
    description:
      "Leading end-to-end development of Android and Flutter applications serving 100K+ Jio employees. Own the complete SDLC — technical design, effort estimation, coding, peer reviews (PMD, SonarQube), QA/UAT, production deployment, and post-launch support. Established SonarQube and PMD quality gates that reduced code defect density by 30% across the team. Primary technical point of contact for business stakeholders.",
    bullets: [
      "Lead end-to-end development of Android and Flutter applications serving 100K+ Jio enterprise employees.",
      "Own the full SDLC — technical design, effort estimation, coding, peer reviews, QA/UAT, production deployment, and post-launch support.",
      "Established SonarQube and PMD quality gates that reduced code defect density by 30% across the team.",
      "Primary technical point of contact for business stakeholders; facilitated sprint planning and release cycles using Agile methodology.",
      "Mentored junior and mid-level engineers, conducting structured code reviews and knowledge-sharing sessions.",
    ],
    techs: ["Kotlin", "Android", "Flutter", "MVVM", "Firebase", "SonarQube"],
    techsString: "Kotlin · Android · Flutter · MVVM · Firebase · SonarQube · PMD · Agile",
  },
  {
    type: "work",
    role: "Sr. Software Developer",
    company: "Mobile Programming India Pvt. Ltd.",
    period: "Jul 2013 – Dec 2023",
    location: "Chandigarh, India",
    description:
      "Delivered 15+ enterprise mobile applications across a decade of evolving Android ecosystem — from SDK 2.1 through modern Kotlin and Flutter. Designed and architected mobile platforms for Fortune 500 clients including Reliance Industries. Collaborated with cross-functional Agile teams and systematically optimized performance through code reviews and refactoring. Implemented unit testing with JUnit and integrated Docker containers for CI/CD pipelines.",
    bullets: [
      "Delivered 15+ enterprise mobile applications across a decade of Android evolution — from SDK 2.1 through modern Kotlin and Flutter.",
      "Designed and architected mobile platforms for Fortune 500 clients including Reliance Industries Ltd.",
      "Built cross-platform apps using Flutter (BLoC/GetX) and React Native (Redux), reducing time-to-market by reusing business logic across platforms.",
      "Integrated SAP SDK, SOAP, REST, GraphQL, and Firebase backends into production applications.",
      "Collaborated with cross-functional Agile teams; optimized app performance via profiling, refactoring, and systematic code reviews.",
      "Implemented unit testing with JUnit and integrated Docker containers for CI/CD pipelines.",
    ],
    techs: ["Android", "Kotlin", "Java", "Flutter", "SAP SDK", "SOAP", "REST", "Firebase", "JUnit", "Docker"],
    techsString: "Android · Kotlin · Java · Flutter · React Native · SAP SDK · SOAP · REST · Firebase · Agile · JUnit · Docker",
  },
  {
    type: "work",
    role: "Software Developer Intern",
    company: "A-One Technology Pvt. Ltd.",
    period: "Nov 2012 – Jun 2013",
    location: "Punjab, India",
    description:
      "Gained hands-on experience in mobile application development, working on Android projects and learning core development workflows and best practices.",
    bullets: [
      "Gained hands-on experience in Android application development using Java, Eclipse, and SQLite.",
      "Contributed to core development workflows, including requirements analysis, UI design, and QA testing.",
    ],
    techs: ["Android", "Java", "Eclipse", "SQLite"],
    techsString: "Android · Java · Eclipse · SQLite",
  },
  {
    type: "education",
    role: "B.Tech — Computer Science",
    company: "Himachal Pradesh University",
    period: "Graduated Jun 2012",
    location: "Himachal Pradesh, India",
    description:
      "Bachelor of Technology in Computer Science. Strong foundation in data structures, algorithms, operating systems, and software engineering — the bedrock of 12+ years of growth.",
    bullets: [
      "Data structures, algorithms, operating systems, DBMS, and software engineering.",
    ],
    techs: ["Data Structures", "Algorithms", "OS", "DBMS", "Software Engineering"],
    techsString: "B.Tech — Computer Science & Engineering",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export type ProjectType = "mobile" | "web" | "ai";

export type Project = {
  title: string;
  description: string;
  /** Short description variant for the resume (falls back to description if omitted) */
  resumeDescription?: string;
  image: string;
  tags: string[];
  /** Tech stack string for the resume */
  resumeTechs?: string;
  live: string | null;
  featured: boolean;
  color: string;
  bg: string;
  client: string;
  type: ProjectType;
  /** Extra highlight ring on the portfolio card */
  highlight?: boolean;
  /** Whether to include in the resume projects section */
  resumeInclude?: boolean;
  /** Project type label used in the resume */
  resumeType?: string;
};

export const projects: Project[] = [
  {
    title: "Code Migration Agent + MCP Server",
    description:
      "Autonomous AI agent + MCP server that migrates codebases to the latest framework versions using AST parsing and Anthropic Claude API. Exposes migration tools consumable by any MCP-compatible client.",
    resumeDescription:
      "Autonomous AI agent + MCP server that migrates codebases to the latest framework versions using AST parsing and Anthropic Claude API. Exposes migration tools consumable by any MCP-compatible client (Claude Desktop, Cursor).",
    image: "🤖",
    tags: ["Claude API", "MCP", "Python", "Agentic AI"],
    resumeTechs: "Anthropic Claude API, MCP, Agentic AI, AST Parsing, Python",
    live: null,
    featured: true,
    color: "#7C3AED",
    bg: "#F3E8FF",
    client: "Personal / Open Source",
    type: "ai",
    highlight: true,
    resumeInclude: true,
    resumeType: "AI",
  },
  {
    title: "RAG-based Knowledge Assistant",
    description:
      "An intelligent document Q&A system built using Retrieval-Augmented Generation. Ingests PDFs, docs, and web content into a vector store, then answers queries with grounded, source-cited responses using an LLM. Supports multi-turn conversations with context memory.",
    resumeDescription:
      "Document Q&A system using Retrieval-Augmented Generation. Ingests PDFs and web content into a vector store, answers queries with source-cited responses and multi-turn memory.",
    image: "🧠",
    tags: ["LangChain", "Pinecone", "OpenAI GPT-4", "FastAPI", "Python"],
    resumeTechs: "LangChain, Pinecone, OpenAI GPT-4, FastAPI, Python",
    live: null,
    featured: true,
    color: "#7c3aed",
    bg: "#f3e8ff",
    client: "Personal / Enterprise",
    type: "ai",
    resumeInclude: true,
    resumeType: "AI",
  },
  {
    title: "Agentic AI Workflow Engine",
    description:
      "A multi-step autonomous AI agent capable of reasoning, tool use, and decision-making across complex tasks. Built with LangChain agents and custom tools — integrates web search, code execution, and API calls within a single agentic loop.",
    resumeDescription:
      "Multi-step autonomous AI agent using LangChain ReAct pattern with custom tools — integrates web search, code execution, and API calls in a single agentic loop.",
    image: "🤖",
    tags: ["LangChain Agents", "Claude API", "Tool Use", "ReAct Pattern", "Python"],
    resumeTechs: "LangChain Agents, Claude API, Tool Use, ReAct Pattern, Python",
    live: null,
    featured: true,
    color: "#7c3aed",
    bg: "#f3e8ff",
    client: "Personal / Enterprise",
    type: "ai",
    resumeInclude: true,
    resumeType: "AI",
  },
  {
    title: "AI-powered Mobile Assistant",
    description:
      "Integrated an LLM-based conversational assistant into an enterprise Android/Flutter app. Users query data, get summaries, and trigger actions via natural language — bridging mobile UX with generative AI capabilities via a FastAPI backend.",
    image: "📱",
    tags: ["LLM Integration", "Android / Flutter", "FastAPI", "REST API", "Kotlin"],
    resumeTechs: "LLM Integration, Android / Flutter, FastAPI, REST API, Kotlin",
    live: null,
    featured: false,
    color: "#7c3aed",
    bg: "#f3e8ff",
    client: "Enterprise",
    type: "ai",
  },
  {
    title: "LEARNET-RIL",
    description:
      "Video and text-based interactive learning platform for Reliance employees to share knowledge, success stories, and connect with subject-matter experts. Published on the Play Store.",
    resumeDescription:
      "Video and text-based interactive e-learning platform for Reliance employees to share knowledge and connect with subject-matter experts. Published on the Play Store.",
    image: "🎓",
    tags: ["Android", "Kotlin", "SQLite", "ExoPlayer", "Firebase"],
    resumeTechs: "Android, Kotlin, SQLite, ExoPlayer, Firebase",
    live: "https://play.google.com/store/apps/details?id=com.ril.learnet",
    featured: true,
    color: "#1b63e8",
    bg: "#eef3ff",
    client: "Reliance Industries",
    type: "mobile",
    resumeInclude: true,
    resumeType: "Android",
  },
  {
    title: "Mission Kurukshetra",
    description:
      "Flutter platform for Reliance employees to submit innovative ideas and get rewarded by the Reliance Foundation — with rich media and offline support.",
    resumeDescription:
      "Flutter platform for Reliance employees to submit and get rewarded for innovative ideas by the Reliance Foundation — with rich media and offline support.",
    image: "💡",
    tags: ["Flutter", "Dart", "SOAP", "Firebase", "Fabric"],
    resumeTechs: "Flutter, Dart, SOAP, Firebase, Fabric",
    live: "https://play.google.com/store/apps/details?id=com.ril.mku",
    featured: true,
    color: "#f5b800",
    bg: "#fffbeb",
    client: "Reliance Industries",
    type: "mobile",
    resumeInclude: true,
    resumeType: "Flutter",
  },
  {
    title: "Share-A-Ride",
    description:
      "Carpooling app for Reliance employees using intelligent route-matching and real-time GPS tracking with colleague verification. Available on the Play Store.",
    resumeDescription:
      "Carpooling app for Reliance employees with intelligent route-matching and real-time GPS tracking. Available on the Play Store.",
    image: "🚗",
    tags: ["Android", "Kotlin", "Firebase", "Google Maps", "FCM"],
    resumeTechs: "Android, Kotlin, Firebase, Google Maps, FCM",
    live: "https://play.google.com/store/apps/details?id=com.ril.shareAride",
    featured: true,
    color: "#ef4444",
    bg: "#fef2f2",
    client: "Reliance Industries",
    type: "mobile",
    resumeInclude: true,
    resumeType: "Android",
  },
  {
    title: "JIO-HRU",
    description:
      "Jio HR companion app — employees view payslips, tax projections, HR details, and manage the entire candidate onboarding workflow digitally.",
    image: "👥",
    tags: ["Android", "SAP Android SDK", "SOAP", "Kotlin"],
    resumeTechs: "Android, SAP Android SDK, SOAP, Kotlin",
    live: null,
    featured: true,
    color: "#8b5cf6",
    bg: "#f5f3ff",
    client: "Reliance Jio",
    type: "mobile",
    resumeInclude: true,
    resumeType: "Android",
  },
  {
    title: "Reliance CRM",
    description:
      "Real-time CRM for division-wise order/invoice management, order status tracking, and customer summaries with analytics dashboard.",
    image: "📊",
    tags: ["Android", "SAP Android SDK", "SOAP", "MpCharts"],
    live: "https://play.google.com/store/apps/details?id=com.ril.crm",
    featured: false,
    color: "#1b63e8",
    bg: "#eef3ff",
    client: "Reliance Industries",
    type: "mobile",
  },
  {
    title: "Engage",
    description:
      "Automated Flutter platform to send WhatsApp messages to channel partners, sales teams, and stakeholders — streamlining B2B communications at scale.",
    image: "💬",
    tags: ["Flutter", "Dart", "Firebase"],
    live: null,
    featured: false,
    color: "#10b981",
    bg: "#ecfdf5",
    client: "QSTS",
    type: "mobile",
  },
  {
    title: "Cattlefax",
    description:
      "Livestock industry data app — live price feeds, dynamic charts, industry news, and real-time weather forecasts with GCM push notifications.",
    image: "🐄",
    tags: ["Android", "SOAP", "Shinobi Charts", "GCM"],
    live: "https://play.google.com/store/apps/details?id=com.cattlefax.main",
    featured: false,
    color: "#f5b800",
    bg: "#fffbeb",
    client: "Cattlefax USA",
    type: "mobile",
  },
  {
    title: "Trance-ACT",
    description:
      "Fleet cash loading app that accelerates cash/cheque loading workflows with barcode scanning and detailed reporting.",
    image: "💰",
    tags: ["Android", "Kotlin", "SOAP", "Reporting"],
    live: null,
    featured: false,
    color: "#1b63e8",
    bg: "#eef3ff",
    client: "Reliance Industries",
    type: "mobile",
  },
  {
    title: "R-Medical Portal",
    description:
      "Hospital companion for Sir HNH Hospital — appointment scheduling, medical history, health calculators, and personalised diet plans.",
    image: "🏥",
    tags: ["Android", "SAP SDK", "SOAP"],
    live: null,
    featured: false,
    color: "#ef4444",
    bg: "#fef2f2",
    client: "Reliance Industries",
    type: "mobile",
  },
  {
    title: "Developer Portfolio",
    description:
      "This very site — a responsive, animated developer portfolio built with Next.js 16, Tailwind CSS v4, and TypeScript.",
    resumeDescription:
      "Responsive animated developer portfolio built with Next.js 16, Tailwind CSS v4, and TypeScript — deployed on Vercel.",
    image: "🌐",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    resumeTechs: "Next.js, TypeScript, Tailwind CSS, Vercel",
    live: null,
    featured: true,
    color: "#8b5cf6",
    bg: "#f5f3ff",
    client: "Personal",
    type: "web",
    resumeInclude: true,
    resumeType: "Next.js",
  },
  {
    title: "Enterprise Dashboard",
    description:
      "Internal analytics dashboard built with Angular for tracking KPIs, sales performance, and operational metrics across Reliance business units.",
    image: "📈",
    tags: ["Angular", "TypeScript", "RxJS", "Angular Material"],
    resumeTechs: "Angular, TypeScript, RxJS, Angular Material, REST",
    live: null,
    featured: true,
    color: "#dd0031",
    bg: "#fef2f2",
    client: "Reliance Industries",
    type: "web",
    resumeInclude: true,
    resumeType: "Angular",
  },
  {
    title: "E-Learn Web Platform",
    description:
      "Web version of the enterprise e-learning platform in React.js, supporting online training modules, video lessons, and offline content sync.",
    image: "📚",
    tags: ["React.js", "Redux", "REST", "Video Player"],
    live: null,
    featured: true,
    color: "#61dafb",
    bg: "#ecfeff",
    client: "Enterprise",
    type: "web",
  },
  {
    title: "Channel Partner Portal",
    description:
      "React-based web portal for LPG channel partners to manage business transactions, view reports, and access real-time inventory data.",
    image: "🔗",
    tags: ["React.js", "TypeScript", "REST API", "Tailwind"],
    live: null,
    featured: false,
    color: "#1b63e8",
    bg: "#eef3ff",
    client: "Reliance Industries",
    type: "web",
  },
  {
    title: "HR Self-Service Web App",
    description:
      "Next.js web application for employees to access HR services — payslips, leave management, on-boarding checklists, and tax declarations.",
    image: "🏢",
    tags: ["Next.js", "React.js", "TypeScript", "SAP API"],
    live: null,
    featured: false,
    color: "#f5b800",
    bg: "#fffbeb",
    client: "Reliance Jio",
    type: "web",
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────

export type CertPlatform = "Coursera" | "LinkedIn Learning";

export type Certification = {
  title: string;
  issuer: string;
  /** Combined issuer + platform string for the resume (e.g. "Google Cloud · Coursera") */
  issuerResume: string;
  platform: CertPlatform;
  date: string;
  year: number;
  skills: string[];
  pdfFile: string;
  thumb: string;
  verifyUrl?: string;
  color: string;
  bg: string;
  icon: string;
};

export const certifications: Certification[] = [
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    issuerResume: "Google Cloud · Coursera",
    platform: "Coursera",
    date: "Mar 2024",
    year: 2024,
    skills: ["Generative AI", "LLMs", "Google Cloud"],
    pdfFile: "/cert-coursera-generative-ai.pdf",
    thumb: "/cert-thumbnails/cert-coursera-generative-ai.jpg",
    verifyUrl: "https://coursera.org/verify/VQQEU4V5SKZH",
    color: "#34a853",
    bg: "#e6f4ea",
    icon: "🤖",
  },
  {
    title: "Agile Project Management",
    issuer: "Google",
    issuerResume: "Google · Coursera",
    platform: "Coursera",
    date: "Mar 2024",
    year: 2024,
    skills: ["Agile", "Scrum", "Project Management"],
    pdfFile: "/cert-coursera-agile-pm.pdf",
    thumb: "/cert-thumbnails/cert-coursera-agile-pm.jpg",
    verifyUrl: "https://coursera.org/verify/L6H9W54ZNDPM",
    color: "#4285f4",
    bg: "#e8f0fe",
    icon: "📋",
  },
  {
    title: "Design Thinking for Innovation",
    issuer: "University of Virginia",
    issuerResume: "University of Virginia · Coursera",
    platform: "Coursera",
    date: "Mar 2024",
    year: 2024,
    skills: ["Design Thinking", "Innovation", "Problem Solving"],
    pdfFile: "/cert-coursera-design-thinking.pdf",
    thumb: "/cert-thumbnails/cert-coursera-design-thinking.jpg",
    verifyUrl: "https://coursera.org/verify/HJXJA8V95F5Y",
    color: "#e87722",
    bg: "#fff4ed",
    icon: "💡",
  },
  {
    title: "Become a Blockchain Developer",
    issuer: "LinkedIn Learning",
    issuerResume: "LinkedIn Learning",
    platform: "LinkedIn Learning",
    date: "Mar 2025",
    year: 2025,
    skills: ["Blockchain", "Ethereum", "Cryptography"],
    pdfFile: "/cert-linkedin-blockchain-developer.pdf",
    thumb: "/cert-thumbnails/cert-linkedin-blockchain-developer.jpg",
    color: "#0a66c2",
    bg: "#e8f1fb",
    icon: "⛓️",
  },
  {
    title: "Blockchain: Learning Solidity",
    issuer: "LinkedIn Learning",
    issuerResume: "LinkedIn Learning",
    platform: "LinkedIn Learning",
    date: "Mar 2025",
    year: 2025,
    skills: ["Solidity", "Blockchain", "Smart Contracts"],
    pdfFile: "/cert-linkedin-solidity.pdf",
    thumb: "/cert-thumbnails/cert-linkedin-solidity.jpg",
    color: "#7c3aed",
    bg: "#f5f3ff",
    icon: "📜",
  },
  {
    title: "Flutter: Building UIs (Part 07)",
    issuer: "LinkedIn Learning",
    issuerResume: "LinkedIn Learning",
    platform: "LinkedIn Learning",
    date: "Jun 2020",
    year: 2020,
    skills: ["Flutter", "UI Design", "Dart"],
    pdfFile: "/cert-linkedin-flutter-ui.pdf",
    thumb: "/cert-thumbnails/cert-linkedin-flutter-ui.jpg",
    color: "#02569B",
    bg: "#e1f0fa",
    icon: "📱",
  },
  {
    title: "Learning Kotlin for Android",
    issuer: "LinkedIn Learning",
    issuerResume: "LinkedIn Learning",
    platform: "LinkedIn Learning",
    date: "Jul 2017",
    year: 2017,
    skills: ["Kotlin", "Android Development"],
    pdfFile: "/cert-linkedin-kotlin-android.pdf",
    thumb: "/cert-thumbnails/cert-linkedin-kotlin-android.jpg",
    color: "#7F52FF",
    bg: "#f0edff",
    icon: "⚡",
  },
  {
    title: "Learning Data Analytics",
    issuer: "LinkedIn Learning",
    issuerResume: "LinkedIn Learning",
    platform: "LinkedIn Learning",
    date: "Jul 2017",
    year: 2017,
    skills: ["Data Analysis", "Business Intelligence", "Excel"],
    pdfFile: "/cert-linkedin-data-analytics.pdf",
    thumb: "/cert-thumbnails/cert-linkedin-data-analytics.jpg",
    color: "#059669",
    bg: "#ecfdf5",
    icon: "📊",
  },
];

// ─── Resume Skills ─────────────────────────────────────────────────────────────

export const resumeSkills: Record<string, string[]> = {
  Mobile: [
    "Android (Kotlin, Java)",
    "Flutter (Dart)",
    "React Native",
    "Jetpack (ViewModel, LiveData, Room, Navigation, WorkManager)",
    "MVVM · Clean Architecture · BLoC · GetX · Redux",
    "SAP SDK · Firebase · FCM/GCM",
  ],
  Web: [
    "React.js · Next.js (App Router, SSR, SSG)",
    "Angular · TypeScript · JavaScript · Tailwind CSS",
  ],
  "AI / GenAI": [
    "Anthropic Claude API · OpenAI · Gemini · HuggingFace",
    "Model Context Protocol (MCP) — server design & integration",
    "RAG Pipelines · LangChain · LlamaIndex",
    "Vector DBs: Pinecone · ChromaDB · FAISS",
    "Agentic AI · Multi-Agent Orchestration · Prompt Engineering · FastAPI · Python",
  ],
  "Backend & Data": [
    "REST · SOAP · GraphQL · Firebase Realtime DB · SQLite · Room",
  ],
  "DevOps & Tools": [
    "Git · Android Studio · Gradle · SonarQube · PMD · Vercel · CI/CD",
  ],
};

// ─── Resume Professional Summary ──────────────────────────────────────────────

export const resumeSummary =
  `Full Stack Developer and Senior Manager with 12+ years of end-to-end software delivery — ` +
  `from Android SDK 2.1 to modern Kotlin, Flutter, and cross-platform mobile, through to React.js / Next.js ` +
  `web frontends and AI-powered backends. Currently at Reliance Jio leading Android and Flutter teams whose ` +
  `apps serve 100,000+ enterprise employees. Proven track record delivering 20+ production apps for Fortune 500 ` +
  `clients including Reliance Industries. Hands-on expertise in Generative AI engineering — RAG pipelines, ` +
  `agentic AI systems, MCP server design, and LLM integration using Anthropic Claude, OpenAI, and LangChain. ` +
  `Available from June 2026; open to senior engineering and leadership roles globally.`;
