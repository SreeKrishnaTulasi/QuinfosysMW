import {
  ArrowUp,
  BookOpen,
  Briefcase,
  Calendar,
  Check,
  ChevronDown,
  Code2,
  Download,
  FileText,
  GraduationCap,
  Layers,
  LibraryBig,
  Mail,
  Newspaper,
  PenLine,
  Sparkles,
  Terminal,
  Video,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "../data/content";

type ResourceSection = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  shortName: string;
  summary: string;
  longCopy: string;
  icon: LucideIcon;
  formats: string[];
  audience: string[];
  readingPath: string[];
  audienceLabel?: string;
  pathLabel?: string;
};

type ResourceFormat = {
  name: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

const resourceSections: ResourceSection[] = [
  {
    id: "documentation",
    number: "01",
    eyebrow: "Knowledge base",
    title: "Documentation",
    shortName: "Documentation",
    icon: BookOpen,
    summary:
      "Documentation organizes product references, onboarding guides, and technical explanations in a clean content first structure.",
    longCopy:
      "This area is designed for practical reading. It holds user guides, configuration explanations, onboarding pages, release notes, and implementation walkthroughs for Quinfosys products and technologies, written so both technical and business readers can follow them.",
    formats: ["User guides", "Onboarding guides", "Release notes", "Configuration notes"],
    audience: [
      "Teams who need clear product guidance",
      "Business readers who need plain technical explanations",
      "Partners reviewing product and service details",
      "Internal teams maintaining consistent public information",
    ],
    readingPath: ["Locate", "Read", "Apply", "Return"],
  },
  {
    id: "developer-resources",
    number: "02",
    eyebrow: "Build material",
    title: "Developer Resources",
    shortName: "Developer Resources",
    icon: Code2,
    summary:
      "Developer Resources gathers the tools, guides, and examples developers need to start building with Quinfosys products.",
    longCopy:
      "This section is for people writing quantum and hybrid software. It brings together quick start guides, code examples, SDK and tooling notes, and learning material for QuCPL, QisCode, QCS, QWS, and related products.",
    formats: ["Quick start guides", "Code examples", "SDK and tooling notes", "Learning material"],
    audience: [
      "Developers building quantum and hybrid applications",
      "Students learning quantum programming",
      "Research teams prototyping algorithms",
      "Partners integrating Quinfosys products",
    ],
    readingPath: ["Set up", "Build", "Test", "Ship"],
  },
  {
    id: "api-documentation",
    number: "03",
    eyebrow: "Reference",
    title: "API Documentation",
    shortName: "API Documentation",
    icon: Terminal,
    summary:
      "API Documentation provides the reference for connecting to Quinfosys services through APIs and service endpoints.",
    longCopy:
      "This section documents endpoints, request and response formats, authentication, and usage notes for Quinfosys services such as Quantum Web Services and Quantum Computing Services, so application teams can integrate quantum capability into existing systems.",
    formats: ["Endpoint reference", "Request and response formats", "Authentication notes", "Usage examples"],
    audience: [
      "Application developers integrating quantum services",
      "Enterprise engineering teams",
      "Platform teams evaluating integration effort",
      "Partners building on Quinfosys services",
    ],
    readingPath: ["Authenticate", "Call", "Handle results", "Monitor"],
  },
  {
    id: "technical-papers",
    number: "04",
    eyebrow: "Technical depth",
    title: "Technical Papers",
    shortName: "Technical Papers",
    icon: FileText,
    summary:
      "Technical Papers provide deeper technical writing on quantum architecture, methods, and implementation direction.",
    longCopy:
      "This section is more formal than documentation. It supports technical papers, architecture notes, and implementation studies that explain how Quinfosys systems and methods work and why design decisions were made.",
    formats: ["Technical papers", "Architecture notes", "Implementation studies", "Method descriptions"],
    audience: [
      "Researchers reviewing technical direction",
      "Engineers evaluating architecture choices",
      "Institutions comparing capability",
      "Technical decision makers",
    ],
    readingPath: ["Frame", "Analyze", "Evaluate", "Apply"],
  },
  {
    id: "whitepapers",
    number: "05",
    eyebrow: "Long form insight",
    title: "Whitepapers",
    shortName: "Whitepapers",
    icon: LibraryBig,
    summary:
      "Whitepapers offer strategic, long form perspectives on quantum adoption, industry applications, and readiness.",
    longCopy:
      "This section collects whitepapers written for decision makers. Topics include quantum readiness, industry use cases, security transition planning, and adoption frameworks, presented in a form that supports planning and investment discussions.",
    formats: ["Strategy briefs", "Readiness guides", "Industry perspectives", "Adoption frameworks"],
    audience: [
      "Decision makers studying quantum readiness",
      "Enterprises planning long term technology adoption",
      "Industry teams exploring sector use cases",
      "Investors and partners reviewing direction",
    ],
    readingPath: ["Frame", "Analyze", "Evaluate", "Decide"],
  },
  {
    id: "blog",
    number: "06",
    eyebrow: "Perspectives",
    title: "Blog",
    shortName: "Blog",
    icon: PenLine,
    summary:
      "The Blog shares articles, explainers, and commentary from the Quinfosys team on quantum technology and its applications.",
    longCopy:
      "This section is the place for shorter, more regular writing. It covers explainers, product updates, technology commentary, and lessons from the field in a readable, accessible tone.",
    formats: ["Explainers", "Product updates", "Technology commentary", "Team perspectives"],
    audience: [
      "Readers new to quantum technology",
      "Customers following product progress",
      "Developers and researchers",
      "The wider quantum community",
    ],
    readingPath: ["Discover", "Read", "Share", "Return"],
  },
  {
    id: "news",
    number: "07",
    eyebrow: "Announcements",
    title: "News",
    shortName: "News",
    icon: Newspaper,
    summary:
      "News brings together company announcements, partnerships, milestones, and press updates from Quinfosys.",
    longCopy:
      "This section records what is happening at Quinfosys, including partnership announcements, agreements with institutions, product milestones, and coverage of company activity, so visitors can follow progress over time.",
    formats: ["Company announcements", "Partnership updates", "Product milestones", "Press releases"],
    audience: [
      "Customers and partners following progress",
      "Institutions and government stakeholders",
      "Investors and analysts",
      "Media and the wider community",
    ],
    readingPath: ["Announce", "Read", "Follow", "Share"],
  },
  {
    id: "media",
    number: "08",
    eyebrow: "Press & visuals",
    title: "Media",
    shortName: "Media",
    icon: Video,
    summary:
      "Media provides press material, brand assets, images, and videos about Quinfosys for journalists, partners, and the community.",
    longCopy:
      "This section gives media and partners a single place to find approved visuals and background information, including brand assets, product images, event photos, and recorded sessions.",
    formats: ["Press kit", "Brand assets", "Images and photos", "Videos and recordings"],
    audience: [
      "Journalists and media teams",
      "Event organizers and partners",
      "Community and educators",
      "Internal and partner marketing teams",
    ],
    readingPath: ["Find", "Review", "Use", "Credit"],
  },
  {
    id: "events",
    number: "09",
    eyebrow: "Community & sessions",
    title: "Events",
    shortName: "Events",
    icon: Calendar,
    summary:
      "Events brings together upcoming and completed Quinfosys sessions, conclaves, and community gatherings in one place.",
    longCopy:
      "This section tracks Quinfosys events as they are announced and as they wrap up. Upcoming sessions are listed here first, and the completed list grows as events take place, giving visitors a simple record of Quinfosys community activity.",
    formats: ["Conclave", "Meetups", "Seminars", "Workshops", "Summit"],
    audience: [
      "Quinfosys Quantum Industry Conclave 2027 — August 20, 2027",
    ],
    audienceLabel: "Upcoming",
    readingPath: [],
    pathLabel: "Completed",
  },
  {
    id: "case-studies",
    number: "10",
    eyebrow: "Applied outcomes",
    title: "Case Studies",
    shortName: "Case Studies",
    icon: Briefcase,
    summary:
      "Case Studies explain how Quinfosys technologies and solutions address real business and technical problems.",
    longCopy:
      "This section presents application focused stories that describe context, approach, and outcomes. Case studies connect products, technologies, and solutions to the industries and customers they serve.",
    formats: ["Industry case studies", "Solution walkthroughs", "Pilot summaries", "Outcome reports"],
    audience: [
      "Industry teams evaluating applications",
      "Customers comparing approaches",
      "Partners seeking reference examples",
      "Decision makers reviewing outcomes",
    ],
    readingPath: ["Context", "Approach", "Result", "Learn"],
  },
  {
    id: "downloads",
    number: "11",
    eyebrow: "Files & assets",
    title: "Downloads",
    shortName: "Downloads",
    icon: Download,
    summary:
      "Downloads offers brochures, datasheets, documents, and other files related to Quinfosys products and services.",
    longCopy:
      "This section collects downloadable material in one place, including product brochures, datasheets, whitepaper PDFs, and presentation material that visitors can keep and share.",
    formats: ["Brochures", "Datasheets", "PDF documents", "Presentations"],
    audience: [
      "Customers reviewing offerings offline",
      "Partners sharing material internally",
      "Researchers collecting references",
      "Investors and institutions",
    ],
    readingPath: ["Browse", "Download", "Review", "Share"],
  },
];

const resourceFormats: ResourceFormat[] = [
  {
    name: "Guides",
    icon: GraduationCap,
    description:
      "Structured learning material for people who need a clear path from concept to use.",
    signals: ["Learning", "Onboarding", "Clarity"],
  },
  {
    name: "References",
    icon: Layers,
    description:
      "Technical lookup material for product details, methods, interfaces, and reusable explanations.",
    signals: ["Lookup", "Details", "Reuse"],
  },
  {
    name: "Papers",
    icon: FileText,
    description:
      "Longer analytical writing for architecture, strategy, research direction, and adoption planning.",
    signals: ["Analysis", "Strategy", "Depth"],
  },
  {
    name: "Stories",
    icon: Newspaper,
    description:
      "Application focused content that explains context, approach, and meaningful outcomes.",
    signals: ["Context", "Application", "Outcomes"],
  },
];

const resourceNotes = [
  {
    label: "Content library",
    text: "The page behaves like a reading center rather than an offering catalogue.",
  },
  {
    label: "Expandable reading",
    text: "Each section starts closed so visitors can scan first and open details later.",
  },
  {
    label: "Future ready",
    text: "The structure can grow into documentation, papers, case studies, downloads, and events.",
  },
];

function ResourcesHeroVisual() {
  const shelves = [
    { label: "Documentation", icon: BookOpen, text: "Guides, references, and onboarding" },
    { label: "Technical Papers", icon: FileText, text: "Strategic and technical depth" },
    { label: "Events", icon: Calendar, text: "Upcoming and completed sessions" },
  ];

  return (
    <div
      className="relative mx-auto mt-12 w-full max-w-sm lg:mt-0 lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute -inset-6 rounded-[3rem] bg-slate-500/[0.08] blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#141414]/62 p-4 shadow-[0_32px_110px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-5">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(148,163,184,0.09),transparent_38%),radial-gradient(circle_at_85%_10%,rgba(245,245,245,0.075),transparent_34%)]" />
        <div className="relative rounded-[1.5rem] border border-white/[0.08] bg-[#050505]/88 p-5 sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-100/70">
                Resource library
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[#f8f8f8] sm:text-3xl">
                Read. Learn. Apply.
              </h2>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f8f8f8] text-[#111111] shadow-2xl">
              <LibraryBig className="h-5 w-5" strokeWidth={1.6} />
            </div>
          </div>

          <div className="space-y-3">
            {shelves.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group/resource relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#141414]/62 p-4 transition-all duration-300 hover:border-slate-400/30 hover:bg-[#1c1c1c]/70"
                >
                  <div className="absolute inset-y-0 left-0 w-px bg-white/25 opacity-0 transition-opacity duration-300 group-hover/resource:opacity-100" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/[0.07] bg-[#171717] text-zinc-100">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-base font-semibold tracking-tight text-[#f8f8f8]">
                          {item.label}
                        </p>
                        <span className="text-[10px] font-semibold text-slate-600">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl border border-white/[0.07] bg-[#141414]/50 px-4 py-3">
            <div className="grid grid-cols-3 gap-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              <span>Guides</span>
              <span>Papers</span>
              <span>Stories</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourceVisual({
  section,
  isOpen,
}: {
  section: ResourceSection;
  isOpen: boolean;
}) {
  const Icon = section.icon;

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[15.5rem] items-center justify-center rounded-[2.25rem] border border-white/[0.07] bg-[#141414]/72 shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:max-w-[17rem] lg:max-w-[19rem]">
      <div className="absolute inset-5 rounded-[2rem] border border-white/[0.06] bg-[#050505]/45" />
      <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-slate-300/18 to-transparent" />
      <div className="absolute inset-x-10 bottom-10 h-px bg-gradient-to-r from-transparent via-slate-300/14 to-transparent" />

      <div className="relative flex h-24 w-24 items-center justify-center rounded-[1.75rem] border border-white/[0.08] bg-[#050505]/72 text-zinc-100 shadow-[0_0_38px_rgba(245,245,245,0.12)] transition-transform duration-500 sm:h-28 sm:w-28">
        <Icon className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.35} />
      </div>

      <div className="absolute left-5 top-5 rounded-2xl border border-white/[0.07] bg-[#050505]/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {section.number}
      </div>
      <div className="absolute bottom-5 right-5 rounded-2xl border border-white/15 bg-[#050505]/75 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-100">
        {isOpen ? "Open" : "Preview"}
      </div>
    </div>
  );
}

function ResourceFormatCard({ resource }: { resource: ResourceFormat }) {
  const Icon = resource.icon;

  return (
    <article className="group/resource-card relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-[#141414]/55 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-slate-400/25 hover:bg-[#1c1c1c]/62">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.1),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover/resource-card:opacity-100" />
      <div className="relative flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/[0.07] bg-[#050505] text-zinc-100">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-[#f8f8f8]">
            {resource.name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {resource.description}
          </p>
        </div>
      </div>
      <div className="relative mt-5 flex flex-wrap gap-2">
        {resource.signals.map((signal) => (
          <span
            key={signal}
            className="rounded-full border border-white/[0.07] bg-[#050505]/55 px-3 py-1 text-[11px] font-medium text-slate-300"
          >
            {signal}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ResourcesPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative overflow-hidden bg-[#050505] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,#0b0b0b_42%,#171717_100%)]" />
      <div className="pointer-events-none absolute left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-slate-500/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute right-[-14rem] top-[18rem] h-[38rem] w-[38rem] rounded-full bg-white/[0.055] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <section className="relative px-6 pb-20 pt-28 sm:pt-32 lg:px-8 lg:pb-32 lg:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.06fr_0.82fr] lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-zinc-100/85">
              <Sparkles className="h-3.5 w-3.5" />
              Resources
            </div>
            <h1 className="mt-9 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.06em] text-[#f8f8f8] sm:text-5xl lg:text-7xl">
              A reading center for documentation, papers, news, and events.
            </h1>
            <p className="mt-8 max-w-2xl text-base font-light leading-8 text-slate-300 sm:text-lg">
              Resources gives Quinfosys a content oriented space for documentation, developer resources, technical papers, whitepapers, blog, news, media, events, case studies, and downloads.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {resourceNotes.map((note) => (
                <div
                  key={note.label}
                  className="rounded-[1.35rem] border border-white/[0.07] bg-[#141414]/55 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-[#f8f8f8]">
                    {note.label}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {note.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <ResourcesHeroVisual />
        </div>
      </section>

      <section className="relative px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-100/65">
                Resource index
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[#f8f8f8] sm:text-4xl">
                Open the resource areas that need deeper reading.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Each area begins as a clean preview. The expanded state adds purpose, audience, available formats, and a simple reading path.
            </p>
          </div>

          <div className="space-y-5">
            {resourceSections.map((section, index) => {
              const isOpen = openSection === section.id;
              return (
                <article
                  key={section.id}
                  className="group/section overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#141414]/55 shadow-[0_28px_100px_rgba(0,0,0,0.26)] backdrop-blur-xl transition-all duration-500 hover:border-slate-400/25 hover:bg-[#171717]/70"
                >
                  <button
                    type="button"
                    onClick={() => setOpenSection(isOpen ? null : section.id)}
                    className="grid w-full gap-8 p-6 text-left sm:p-8 lg:grid-cols-[0.68fr_1.32fr] lg:p-10"
                    aria-expanded={isOpen}
                    aria-controls={`${section.id}-details`}
                  >
                    <ResourceVisual section={section} isOpen={isOpen} />

                    <div className="flex min-h-full flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-100/80">
                          {section.eyebrow}
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="mt-5 flex items-start justify-between gap-5">
                        <div>
                          <h3 className="text-3xl font-medium tracking-[-0.04em] text-[#f8f8f8] sm:text-4xl">
                            {section.title}
                          </h3>
                          <p className="mt-5 max-w-3xl text-base font-light leading-8 text-slate-300">
                            {section.summary}
                          </p>
                        </div>
                        <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/[0.07] bg-[#050505]/70 text-slate-300 transition-transform duration-300 group-hover/section:border-white/20 group-hover/section:text-zinc-100">
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                            strokeWidth={1.5}
                          />
                        </span>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {section.formats.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/[0.07] bg-[#050505]/55 px-3 py-1.5 text-xs font-medium text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>

                  <div
                    id={`${section.id}-details`}
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/[0.07] px-6 pb-8 pt-8 sm:px-8 lg:px-10 lg:pb-10">
                        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
                          <div className="rounded-[1.5rem] border border-white/[0.07] bg-[#050505]/68 p-6 sm:p-7">
                            <p className="text-sm leading-7 text-slate-300">
                              {section.longCopy}
                            </p>
                            {section.audienceLabel && (
                              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-100/70">
                                {section.audienceLabel}
                              </p>
                            )}
                            <div className={`grid gap-3 sm:grid-cols-2 ${section.audienceLabel ? "mt-3" : "mt-6"}`}>
                              {section.id === "events"
                                ? section.audience.map((item) => {
                                    const [eventName, eventDate] = item.split(" \u2014 ");
                                    return (
                                      <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#050505]/65 p-4 sm:col-span-2"
                                      >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-zinc-100">
                                          <section.icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                                        </span>
                                        <div className="min-w-0">
                                          <p className="text-sm font-semibold leading-6 text-[#f8f8f8]">
                                            {eventName}
                                          </p>
                                          {eventDate && (
                                            <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                                              {eventDate}
                                            </p>
                                          )}
                                        </div>
                                      </div>
                                    );
                                  })
                                : section.audience.map((item) => (
                                    <div
                                      key={item}
                                      className="flex gap-3 rounded-2xl border border-white/[0.07] bg-[#141414]/50 p-4"
                                    >
                                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-zinc-100" strokeWidth={1.7} />
                                      <p className="text-sm leading-6 text-slate-300">
                                        {item}
                                      </p>
                                    </div>
                                  ))}
                            </div>
                          </div>

                          <div className="rounded-[1.5rem] border border-white/[0.07] bg-[#141414]/48 p-6 sm:p-7">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-100/70">
                              {section.pathLabel ?? "Reading path"}
                            </p>
                            <div className="mt-5 space-y-3">
                              {section.readingPath.map((step, stepIndex) => (
                                <div
                                  key={step}
                                  className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#050505]/65 p-3"
                                >
                                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xs font-semibold text-zinc-100">
                                    {stepIndex + 1}
                                  </span>
                                  <span className="text-sm font-medium text-slate-200">
                                    {step}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-8 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/[0.07] bg-[#141414]/55 p-6 shadow-[0_28px_100px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-100/70">
                Content formats
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[#f8f8f8] sm:text-3xl">
                A flexible structure for public knowledge assets.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-slate-400">
              The page can support short guides, deep papers, platform references, and future stories without changing the overall site structure.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {resourceFormats.map((resource) => (
              <ResourceFormatCard key={resource.name} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#141414]/58 p-7 shadow-[0_30px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-9 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-100/65">
                Resource contact
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-[#f8f8f8] sm:text-4xl">
                Use this page as the public knowledge center for Quinfosys.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                The structure is ready for documentation, papers, event updates, technical guides, and future downloadable content.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white px-6 py-4 text-sm font-semibold text-[#050505] shadow-[0_20px_60px_rgba(245,245,245,0.16)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Contact Team
              </a>
              <a
                href={`mailto:${company.email}?subject=Quinfosys Resource Request`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.07] bg-[#050505]/65 px-6 py-4 text-sm font-semibold text-slate-100 transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/20"
              >
                <Download className="h-4 w-4" />
                Request Resource
              </a>
            </div>
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-[#f8f8f8] px-4 py-3 text-sm font-semibold text-[#050505] shadow-2xl transition-all duration-300 ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
        <span className="hidden sm:inline">Top</span>
      </button>
    </div>
  );
}
