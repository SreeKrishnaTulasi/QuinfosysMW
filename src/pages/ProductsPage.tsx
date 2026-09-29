import {
  ArrowUp,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  FlaskConical,
  Globe,
  Mail,
  Network,
  Search,
  Sparkles,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "../data/content";

type ProductSection = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  shortName: string;
  summary: string;
  longCopy: string;
  icon: LucideIcon;
  capabilities: string[];
  useCases: string[];
  architecture: string[];
  href?: string;
};

const products: ProductSection[] = [
  {
    id: "qucpl",
    number: "01",
    eyebrow: "Language layer",
    title: "Quantum Computing Programming Language",
    shortName: "QuCPL",
    icon: Code2,
    summary:
      "QuCPL is the programming layer for teams that need to express quantum logic clearly, test it safely, and connect it with classical software workflows.",
    longCopy:
      "Designed as a purpose built quantum language, QuCPL gives developers a cleaner way to describe quantum circuits, algorithms, qubit operations, and classical control logic without forcing every project into low level syntax. It is intended for practical quantum development: readable enough for research teams, structured enough for enterprise engineering, and flexible enough to support simulation, debugging, and future hardware execution paths.",
    capabilities: [
      "Expressive syntax for quantum algorithms and circuit logic",
      "First class support for qubit operations and measurement flow",
      "Classical and quantum interoperability for hybrid workloads",
      "Built in direction for simulation, debugging, and validation",
      "Portable language layer for research, education, and enterprise prototypes",
    ],
    useCases: [
      "Algorithm design",
      "Quantum education",
      "Research prototypes",
      "Hybrid quantum and classical workflows",
    ],
    architecture: [
      "Syntax",
      "Compiler path",
      "Simulator support",
      "Debug workflow",
    ],
  },
  {
    id: "qiscode",
    number: "02",
    eyebrow: "Platform layer",
    title: "QisCode - Quantum IDE Platform",
    shortName: "QisCode - Quantum IDE Platform",
    icon: Terminal,
    href: "https://qiscode.quinfosys.com",
    summary:
      "QisCode - Quantum IDE Platform is the unified quantum computing platform for designing, simulating, transpiling, and executing quantum programs in one connected workspace.",
    longCopy:
      "QisCode - Quantum IDE Platform brings the full quantum development cycle into a single platform. The product direction covers circuit design, simulation, transpilation across backends, and execution management, giving developers and research teams a consistent workspace instead of stitching together separate tools for each stage of quantum program development.",
    capabilities: [
      "Unified workspace for quantum circuit design and editing",
      "Built in simulation for testing before hardware execution",
      "Transpilation support across multiple quantum backends",
      "Execution management and run history in one place",
      "Direction built for developers, students, and research teams",
    ],
    useCases: [
      "Circuit design",
      "Simulation and testing",
      "Cross backend transpilation",
      "Execution management",
    ],
    architecture: [
      "Design workspace",
      "Simulation engine",
      "Transpiler",
      "Execution manager",
    ],
  },
  {
    id: "qdd",
    number: "03",
    eyebrow: "Discovery layer",
    title: "Quantum Drug Discovery",
    shortName: "QDD",
    icon: FlaskConical,
    href: "https://drug.quinfosys.com",
    summary:
      "QDD applies quantum computing to molecular simulation and screening, helping research teams explore drug candidates with greater speed and precision.",
    longCopy:
      "Quantum Drug Discovery is built for pharmaceutical and life sciences teams that need to model molecular interactions beyond the reach of classical compute. The product direction focuses on quantum accelerated molecular simulation, candidate screening, and structure analysis, giving research groups a way to shorten early stage discovery cycles while keeping results reproducible and lab ready.",
    capabilities: [
      "Quantum accelerated molecular and protein simulation",
      "Candidate screening workflows for early stage discovery",
      "Hybrid classical and quantum modelling pipelines",
      "Structured output for lab and research validation",
      "Direction built for pharma, biotech, and academic research teams",
    ],
    useCases: [
      "Molecular simulation",
      "Candidate screening",
      "Research pipelines",
      "Pharma and biotech R&D",
    ],
    architecture: [
      "Molecular input",
      "Quantum simulation",
      "Candidate ranking",
      "Research output",
    ],
  },
  {
    id: "qns",
    number: "04",
    eyebrow: "Network layer",
    title: "Quantum Network System",
    shortName: "QNS",
    icon: Network,
    href: "https://qns.quinfosys.com",
    summary:
      "QNS is the connectivity layer for quantum enabled communication, giving teams a structured path toward secure, distributed quantum networking.",
    longCopy:
      "Quantum Network System is designed for organizations planning ahead for distributed and secure quantum communication. The product direction covers quantum enabled network protocols, secure node to node communication patterns, and infrastructure planning for teams that want to prepare their networking stack for the quantum era without disrupting current systems.",
    capabilities: [
      "Quantum enabled network protocol direction",
      "Secure node to node communication patterns",
      "Infrastructure planning for distributed quantum systems",
      "Hybrid classical and quantum network compatibility",
      "Built for telecom, research, and enterprise networking teams",
    ],
    useCases: [
      "Secure communication",
      "Distributed networking",
      "Telecom infrastructure",
      "Research networking",
    ],
    architecture: [
      "Node connection",
      "Protocol layer",
      "Secure channel",
      "Network monitoring",
    ],
  },
  {
    id: "brain",
    number: "05",
    eyebrow: "Cognition layer",
    title: "Quantum Brain",
    shortName: "Quantum Brain",
    icon: BrainCircuit,
    href: "https://brain.quinfosys.com",
    summary:
      "Quantum Brain is the cognition layer combining quantum computing with AI, built for teams exploring quantum enhanced learning and decision systems.",
    longCopy:
      "Quantum Brain is positioned at the intersection of quantum computing and artificial intelligence. The product direction focuses on quantum enhanced machine learning, pattern recognition, and decision support, giving research and enterprise teams a path to experiment with hybrid quantum and AI systems as the underlying hardware and tooling continue to mature.",
    capabilities: [
      "Quantum enhanced machine learning experimentation",
      "Hybrid AI and quantum decision support direction",
      "Pattern recognition for complex, high dimensional data",
      "Research friendly structure for model comparison and testing",
      "Built for AI research teams and enterprise innovation groups",
    ],
    useCases: [
      "Quantum machine learning",
      "Decision support",
      "Pattern recognition",
      "AI research",
    ],
    architecture: [
      "Data input",
      "Quantum learning core",
      "Model evaluation",
      "Decision output",
    ],
  },
  {
    id: "qcs",
    number: "06",
    eyebrow: "Execution layer",
    title: "Quantum Cloud Services",
    shortName: "QCS",
    icon: Cloud,
    href: "https://qcs.quinfosys.com",
    summary:
      "QCS is the cloud access layer for running quantum workloads through scalable infrastructure, managed resources, and secure hybrid computing paths.",
    longCopy:
      "Quantum Cloud Services gives organizations a route to experiment with, manage, and scale quantum workloads without rebuilding their infrastructure from the ground up. The product direction focuses on cloud based quantum execution, hybrid classical and quantum pipelines, controlled resource access, and secure workload management for teams preparing for applied quantum adoption.",
    capabilities: [
      "Elastic quantum compute environment for experimentation and scale",
      "Hybrid classical and quantum pipeline support",
      "Integrated user, workload, and resource management direction",
      "Secure access patterns for enterprise grade deployment planning",
      "Cloud first structure for research labs, startups, and businesses",
    ],
    useCases: [
      "Quantum workload execution",
      "Research compute access",
      "Enterprise pilots",
      "Hybrid cloud adoption",
    ],
    architecture: [
      "Cloud access",
      "Workload queue",
      "Hybrid pipelines",
      "Resource control",
    ],
  },
  {
    id: "qseo",
    number: "07",
    eyebrow: "Optimization layer",
    title: "Quantum Search Engine Optimisation",
    shortName: "QSEO",
    icon: Search,
    href: "https://qseo.quinfosys.com",
    summary:
      "QSEO applies quantum inspired optimization to search and ranking problems, helping teams process large scale relevance and discovery workloads faster.",
    longCopy:
      "Quantum Search Engine Optimisation brings quantum inspired optimization techniques to search, ranking, and discovery problems. The product direction targets large scale relevance modelling, content and keyword optimization, and search infrastructure teams that want a forward looking path toward quantum accelerated information retrieval.",
    capabilities: [
      "Quantum inspired ranking and relevance optimization",
      "Large scale search and discovery workload support",
      "Direction for content and keyword optimization at scale",
      "Hybrid classical and quantum search infrastructure compatibility",
      "Built for search platforms, publishers, and digital teams",
    ],
    useCases: [
      "Search optimization",
      "Ranking systems",
      "Content discovery",
      "Digital platforms",
    ],
    architecture: [
      "Query input",
      "Optimization core",
      "Ranking output",
      "Feedback loop",
    ],
  },
  {
    id: "qws",
    number: "08",
    eyebrow: "Integration layer",
    title: "Quantum Web Services",
    shortName: "QWS",
    icon: Globe,
    summary:
      "QWS is the web integration layer for connecting quantum capabilities to applications through APIs, service endpoints, and enterprise software systems.",
    longCopy:
      "Quantum Web Services is designed for organizations that want quantum enabled capabilities to connect with existing applications instead of living in isolated research tools. QWS focuses on API driven access, quantum microservice patterns, secure communication, and real time result delivery so teams can integrate quantum processing into web, enterprise, and platform workflows with less friction.",
    capabilities: [
      "REST oriented access model for quantum algorithm execution",
      "Quantum microservice architecture for application teams",
      "Cross platform integration with existing enterprise systems",
      "Real time quantum processing result delivery direction",
      "Security focused communication patterns for future ready web infrastructure",
    ],
    useCases: [
      "Application integration",
      "Quantum APIs",
      "Enterprise platforms",
      "Secure web workflows",
    ],
    architecture: [
      "API endpoints",
      "Service layer",
      "Result delivery",
      "Security layer",
    ],
  },

];

const stackMarkers = [
  { label: "Language", text: "Design quantum logic" },
  { label: "Cloud", text: "Run managed workloads" },
  { label: "Web", text: "Connect with applications" },
];


function ProductHeroInfographic() {
  const layers = [
    { icon: Code2, label: "QuCPL", text: "Language layer" },
    { icon: Cloud, label: "QCS", text: "Cloud execution" },
    { icon: Globe, label: "QWS", text: "Web integration" },
  ];

  return (
    <div className="relative mx-auto mt-12 w-full max-w-md lg:mt-0 lg:max-w-none">
      <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.22),transparent_58%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-5">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.13),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(245,245,245,0.16),transparent_34%)]" />
        <div className="relative rounded-[1.5rem] border border-white/10 bg-[#070707]/85 p-5 sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-100/70">
                Product system
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[#f8f8f8] sm:text-3xl">
                Build. Run. Integrate.
              </h2>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f8f8f8] text-[#111111] shadow-2xl">
              <Sparkles className="h-5 w-5" strokeWidth={1.6} />
            </div>
          </div>

          <div className="space-y-3">
            {layers.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group/layer relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-white/70 to-zinc-500/70" />
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#111111] text-zinc-100">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-base font-semibold tracking-tight text-[#f8f8f8]">
                          {item.label}
                        </p>
                        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
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

          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            {['SDK', 'Cloud', 'API'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductVisual({
  product,
  isOpen,
}: {
  product: ProductSection;
  isOpen: boolean;
}) {
  const Icon = product.icon;

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[18rem] items-center justify-center rounded-[2.5rem] border border-slate-700/45 bg-gradient-to-br from-[#181818] via-[#0c0c0c] to-[#070707] shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:max-w-sm lg:max-w-md">
      <div className="absolute inset-5 rounded-[2rem] border border-white/[0.06]" />
      <div className="absolute inset-10 rounded-full border border-white/10" />
      <div className="absolute h-[72%] w-[72%] rounded-full bg-[radial-gradient(circle,_rgba(245,245,245,0.18),_rgba(212,212,212,0.08)_45%,_transparent_72%)] blur-md transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="absolute top-1/2 h-px w-[calc(100%-4rem)] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div
        className={`absolute h-20 w-20 rounded-full border border-white/15 bg-white/[0.06] transition-all duration-700 sm:h-24 sm:w-24 ${
          isOpen
            ? "scale-125 opacity-100 shadow-[0_0_60px_rgba(245,245,245,0.22)]"
            : "scale-100 opacity-70"
        }`}
      />
      <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#fafafa] to-[#e8e8e8] text-[#111111] shadow-2xl transition-transform duration-500 group-hover:scale-105 sm:h-24 sm:w-24">
        <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.45} />
      </div>
      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300/80 backdrop-blur-md">
        <Sparkles className="h-3 w-3 text-zinc-100" strokeWidth={1.5} />
        {product.shortName}
      </div>
    </div>
  );
}

function ProductBlock({
  product,
  index,
  isOpen,
  onToggle,
}: {
  product: ProductSection;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isReversed = index % 2 === 1;

  return (
    <article className="group border-t border-slate-700/35 py-12 first:border-t-0 sm:py-14 lg:py-20">
      <div
        className={`grid items-center gap-10 rounded-[2rem] border border-white/[0.06] bg-gradient-to-br from-white/[0.055] via-white/[0.025] to-transparent p-5 shadow-[0_30px_100px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-7 lg:grid-cols-[1fr_0.82fr] lg:gap-16 lg:p-10 ${
          isReversed ? "lg:grid-cols-[0.82fr_1fr]" : ""
        }`}
      >
        <div className={isReversed ? "lg:order-2" : ""}>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              {product.number}
            </span>
            <span className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-100/85">
              {product.eyebrow}
            </span>
          </div>

          <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.045em] text-[#f8f8f8] sm:text-4xl lg:text-6xl">
            {product.title}
          </h2>
          <p className="mt-3 text-xl font-light tracking-tight text-slate-400 sm:text-2xl">
            {product.shortName}
          </p>

          <div className="relative mt-8 max-w-2xl overflow-hidden">
            <p className="text-[1.02rem] font-light leading-8 text-slate-300 sm:text-lg sm:leading-9">
              {product.summary}
            </p>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-700 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pt-5 text-sm font-light leading-8 text-slate-400 sm:text-base">
                  {product.longCopy}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-controls={`${product.id}-details`}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f8f8f8] transition-all duration-300 hover:border-white/25 hover:bg-[#f8f8f8] hover:text-[#111111]"
            >
              {isOpen ? "Show less" : "Read more"}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                strokeWidth={1.5}
              />
            </button>
            {product.href && (
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f8f8f8] transition-all duration-300 hover:border-white/25 hover:bg-[#f8f8f8] hover:text-[#111111]"
              >
                Visit product
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>

        <div className={isReversed ? "lg:order-1" : ""}>
          <ProductVisual product={product} isOpen={isOpen} />
        </div>
      </div>

      <div
        id={`${product.id}-details`}
        className={`grid transition-[grid-template-rows,opacity,margin-top] duration-700 ease-out ${
          isOpen
            ? "mt-7 grid-rows-[1fr] opacity-100 sm:mt-9"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-4 rounded-[2rem] border border-white/[0.07] bg-[#141414]/80 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:p-6 lg:grid-cols-3 lg:p-8">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-[#f7f7f7] to-[#e5e5e5] p-6 text-[#171717]">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Core capabilities
              </p>
              <ul className="space-y-3">
                {product.capabilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-700"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[#171717]"
                      strokeWidth={1.7}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-[#0b0b0b] p-6 text-[#f8f8f8]">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Built for
              </p>
              <div className="flex flex-wrap gap-2">
                {product.useCases.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 text-[#f8f8f8]">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Product structure
              </p>
              <div className="space-y-3">
                {product.architecture.map((item, step) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-full border border-white/10 bg-[#090909]/70 px-4 py-3 text-sm text-slate-300"
                  >
                    <span>{item}</span>
                    <span className="text-[10px] text-slate-600">
                      0{step + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  const [openProduct, setOpenProduct] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const threshold = Math.min(window.innerHeight * 0.72, 680);
      setShowScrollTop(window.scrollY > threshold);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-[#f8f8f8]">
      <section className="relative isolate overflow-hidden px-6 py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(245,245,245,0.13),transparent_30%),radial-gradient(circle_at_84%_8%,rgba(212,212,212,0.12),transparent_32%),linear-gradient(180deg,#171717_0%,#0b0b0b_54%,#080808_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#0d0d0d]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.04fr_0.66fr] lg:gap-14">
          <div className="max-w-5xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-100/70">
              Products
            </p>
            <h1 className="text-4xl font-medium tracking-[-0.05em] text-[#f8f8f8] sm:text-5xl lg:text-7xl">
              Eight Quantum Products. One connected stack.
            </h1>
            <p className="mt-8 max-w-3xl text-[1.02rem] font-light leading-8 text-slate-300 sm:text-lg sm:leading-9">
              Quinfosys products are structured as a connected quantum stack: a
              development language, a cloud execution layer, and a web services
              layer for bringing quantum capability into practical software
              systems.
            </p>
          </div>
          <ProductHeroInfographic />
        </div>
      </section>

      <section className="border-y border-slate-700/35 bg-gradient-to-r from-[#f7f7f7] via-[#eeeeee] to-[#ffffff] px-6 py-8 text-[#171717] sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Product pathway
            </p>
            <h2 className="mt-2 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
              Explore the stack from concept to integration.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[34rem]">
            {stackMarkers.map((item, index) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white/65 p-4 shadow-sm backdrop-blur-sm"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  0{index + 1}
                </span>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {item.label}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {products.map((product, index) => (
            <ProductBlock
              key={product.id}
              product={product}
              index={index}
              isOpen={openProduct === product.id}
              onToggle={() =>
                setOpenProduct(openProduct === product.id ? null : product.id)
              }
            />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-700/35 bg-gradient-to-br from-[#171717] via-[#0d0d0d] to-[#080808] px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#f7f7f7] to-[#e8e8e8] p-6 text-[#171717] shadow-2xl sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Product access
            </p>
            <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl">
              Need a demo, technical walkthrough, or product discussion?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Reach the Quinfosys team directly. We will align the discussion
              around the product layer you want to explore.
            </p>
          </div>
          <a
            href={`mailto:${company.email}`}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#171717] px-6 py-4 text-sm font-semibold text-[#f8f8f8] transition-transform duration-300 hover:scale-105"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            Contact Quinfosys
          </a>
        </div>
      </section>

      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0b0b0b]/80 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-[#171717] sm:px-5"
        >
          <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.7} />
          <span className="hidden sm:inline">Top</span>
        </button>
      )}
    </div>
  );
}
