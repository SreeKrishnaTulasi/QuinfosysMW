import {
  ArrowUp,
  Award,
  BookOpen,
  BrainCircuit,
  Check,
  ChevronDown,
  ClipboardList,
  FileText,
  FlaskConical,
  Mail,
  Microscope,
  Network,
  Sparkles,
  Telescope,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "../data/content";

type ResearchSection = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  shortName: string;
  summary: string;
  longCopy: string;
  icon: LucideIcon;
  focus: string[];
  outputs: string[];
  readingPath: string[];
};

const researchSections: ResearchSection[] = [
  {
    id: "research-areas",
    number: "01",
    eyebrow: "Exploration layer",
    title: "Research Areas",
    shortName: "Research areas",
    icon: Telescope,
    summary:
      "Research Areas presents the scientific and engineering directions Quinfosys studies across quantum computing, networks, AI, security, sensing, and applied quantum systems.",
    longCopy:
      "This section is the technical map of the organization. It explains the themes that shape Quinfosys research, from photonic quantum computing and quantum hardware to algorithms, secure communication, sensing, and theory, and shows how each area connects to the Quinfosys technology domains.",
    focus: [
      "Quantum computing, photonic architectures, and algorithms",
      "Quantum hardware, devices, and control concepts",
      "Quantum networks, communication, and secure information transfer",
      "Quantum AI and quantum security research",
      "Quantum sensing and measurement systems",
    ],
    outputs: ["Research map", "Technical themes", "Capability direction", "Future pathways"],
    readingPath: ["Explore", "Compare", "Prioritize", "Document"],
  },
  {
    id: "research-programs",
    number: "02",
    eyebrow: "Programme layer",
    title: "Research Programs",
    shortName: "Programs",
    icon: FlaskConical,
    summary:
      "Research Programs organizes structured, long running research efforts that carry a technical question through experiments, prototypes, and results.",
    longCopy:
      "This section gives each research effort a defined scope, team, and milestone path. Programs connect inquiry with prototypes, internal tools, publications, and future product directions, so research progress stays visible and measurable.",
    focus: [
      "Applied quantum error correction and simulation studies",
      "Quantum machine learning and analytics experiments",
      "Quantum communication and network modelling",
      "Sensing, measurement, and signal processing concepts",
      "Internal prototypes that can mature into product directions",
    ],
    outputs: ["Program scope", "Prototype summaries", "Technical logs", "Research milestones"],
    readingPath: ["Question", "Experiment", "Validate", "Publish"],
  },
  {
    id: "publications",
    number: "03",
    eyebrow: "Dissemination layer",
    title: "Publications",
    shortName: "Publications",
    icon: BookOpen,
    summary:
      "Publications collects the articles, journal contributions, and conference outputs through which Quinfosys shares its research.",
    longCopy:
      "This section lists research outputs released by Quinfosys and its collaborators. It gives visitors a single place to follow what has been published, where, and how it connects to ongoing research areas and programs.",
    focus: [
      "Journal and conference contributions",
      "Joint publications with academic partners",
      "Research summaries for non specialist readers",
      "Citations and links to full texts",
      "Updates as new work is released",
    ],
    outputs: ["Journal articles", "Conference papers", "Research summaries", "Publication index"],
    readingPath: ["Locate", "Read", "Cite", "Follow"],
  },
  {
    id: "research-papers",
    number: "04",
    eyebrow: "Paper layer",
    title: "Research Papers",
    shortName: "Papers",
    icon: FileText,
    summary:
      "Research Papers presents full length scientific papers describing methods, results, and analysis from Quinfosys research.",
    longCopy:
      "This section holds detailed papers that document algorithms, models, experiments, and findings. Each paper is intended to be read as a complete technical record that other researchers can examine, reproduce, and build on.",
    focus: [
      "Quantum algorithm and circuit design papers",
      "Simulation and modelling studies",
      "Quantum networking and security analysis",
      "Quantum AI methods and benchmarks",
      "Preprints and peer reviewed work",
    ],
    outputs: ["Full papers", "Preprints", "Methods and results", "Reference lists"],
    readingPath: ["Frame", "Analyze", "Evaluate", "Reference"],
  },
  {
    id: "patents",
    number: "05",
    eyebrow: "Protection layer",
    title: "Patents",
    shortName: "Patents",
    icon: Award,
    summary:
      "Patents lists the inventions and intellectual property that Quinfosys develops through its research and engineering work.",
    longCopy:
      "This section records the patent filings and granted patents that come out of Quinfosys R&D. It shows the innovation base behind the products and technologies, and the areas where the company is building protected capability.",
    focus: [
      "Filed and granted patent records",
      "Inventions across computing, networks, AI, security, and sensing",
      "Links between patents and products",
      "Inventor and filing information",
      "Updates as new filings are made",
    ],
    outputs: ["Patent filings", "Granted patents", "Invention summaries", "IP portfolio"],
    readingPath: ["Invent", "File", "Examine", "Protect"],
  },
  {
    id: "technical-reports",
    number: "06",
    eyebrow: "Report layer",
    title: "Technical Reports",
    shortName: "Reports",
    icon: ClipboardList,
    summary:
      "Technical Reports shares detailed engineering and research documentation, including benchmarks, design notes, and experiment write ups.",
    longCopy:
      "This section carries working level documentation that sits between a research paper and product documentation. Technical reports describe designs, test setups, benchmark results, and lessons learned so partners and teams can understand how conclusions were reached.",
    focus: [
      "Design and architecture notes",
      "Benchmark and test reports",
      "Experiment write ups and logs",
      "Feasibility study summaries",
      "Engineering lessons and recommendations",
    ],
    outputs: ["Design notes", "Benchmark reports", "Experiment logs", "Feasibility summaries"],
    readingPath: ["Document", "Review", "Share", "Apply"],
  },
  {
    id: "research-collaborations",
    number: "07",
    eyebrow: "Collaboration layer",
    title: "Research Collaborations",
    shortName: "Collaborations",
    icon: Network,
    summary:
      "Research Collaborations frames how Quinfosys works with universities, institutions, government bodies, laboratories, and industry partners.",
    longCopy:
      "This section gives research a partnership pathway. It supports academic collaboration, institutional projects, public sector research, industry problem discovery, student programs, and joint pilots, with knowledge shared through reports, workshops, and publications.",
    focus: [
      "Academic research and student oriented technical programs",
      "Institutional and government research channels",
      "Industry collaboration for applied quantum use cases",
      "Laboratory style validation and prototype partnerships",
      "Knowledge exchange through reports, workshops, and research notes",
    ],
    outputs: ["Partner path", "Research alignment", "Joint pilots", "Knowledge exchange"],
    readingPath: ["Align", "Define", "Collaborate", "Share"],
  },
];

const researchNotes = [
  {
    label: "Content first",
    text: "The page works like a research notebook and publication index, not a sales catalogue.",
  },
  {
    label: "Expandable depth",
    text: "Visitors can scan quickly, then open deeper explanations only when they want detail.",
  },
  {
    label: "Research outputs",
    text: "Programs, publications, papers, patents, and reports are kept together in one clear knowledge structure.",
  },
];

function ResearchHeroVisual() {
  const stack = [
    { label: "Research", icon: Microscope, text: "Questions and technical directions" },
    { label: "Programs", icon: FlaskConical, text: "Structured research efforts" },
    { label: "Publications", icon: FileText, text: "Papers, patents, and reports" },
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
                Research library
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[#f8f8f8] sm:text-3xl">
                Study. Classify. Build.
              </h2>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f8f8f8] text-[#111111] shadow-2xl">
              <BrainCircuit className="h-5 w-5" strokeWidth={1.6} />
            </div>
          </div>

          <div className="space-y-3">
            {stack.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group/research relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#141414]/62 p-4 transition-all duration-300 hover:border-slate-400/30 hover:bg-[#1c1c1c]/70"
                >
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
              <span>Inquiry</span>
              <span>Programs</span>
              <span>Outputs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResearchVisual({
  section,
  isOpen,
}: {
  section: ResearchSection;
  isOpen: boolean;
}) {
  const Icon = section.icon;

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[15.5rem] items-center justify-center rounded-[2.25rem] border border-white/[0.07] bg-[#141414]/72 shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:max-w-[17rem] lg:max-w-[19rem]">
      <div className="absolute inset-5 rounded-[2rem] border border-white/[0.06] bg-[#050505]/45" />
      <div className="absolute inset-10 rounded-[1.5rem] border border-white/[0.05]" />
      <div className="absolute left-8 right-8 top-10 h-px bg-gradient-to-r from-transparent via-slate-300/18 to-transparent" />
      <div className="absolute bottom-10 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-300/14 to-transparent" />

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

export default function ResearchPage() {
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
              Research
            </div>
            <h1 className="mt-9 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.06em] text-[#f8f8f8] sm:text-5xl lg:text-7xl">
              A content layer for Quantum Research, Publications, and Applied Exploration.
            </h1>
            <p className="mt-8 max-w-2xl text-base font-light leading-8 text-slate-300 sm:text-lg">
              This page organizes the technical thinking behind Quinfosys. Research areas, programs, publications, papers, patents, technical reports, and collaborations are presented as a structured knowledge system rather than a commercial offering page.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {researchNotes.map((note) => (
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
          <ResearchHeroVisual />
        </div>
      </section>

      <section className="relative px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-100/65">
                Research index
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[#f8f8f8] sm:text-4xl">
                Open the sections that need deeper reading.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Every section starts closed so the page stays easy to scan. The expanded state adds context, focus points, outputs, and a simple reading path.
            </p>
          </div>

          <div className="space-y-5">
            {researchSections.map((section, index) => {
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
                    <ResearchVisual section={section} isOpen={isOpen} />

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
                        {section.outputs.map((item) => (
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
                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                              {section.focus.map((item) => (
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
                              Reading path
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

      <section className="relative px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#141414]/58 p-7 shadow-[0_30px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-9 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-100/65">
                Research contact
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-[#f8f8f8] sm:text-4xl">
                Use this page as the long form knowledge layer for Quinfosys research.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                The structure is ready for research notes, publications, patents, technical reports, partner summaries, and collaboration updates.
              </p>
            </div>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white px-6 py-4 text-sm font-semibold text-[#050505] shadow-[0_20px_60px_rgba(245,245,245,0.16)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Contact Research Team
            </a>
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
