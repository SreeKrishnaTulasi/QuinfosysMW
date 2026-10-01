import {
  ArrowUp,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  Cpu,
  Mail,
  Network,
  Radar,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "../data/content";

type TechnologySection = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  shortName: string;
  summary: string;
  longCopy: string;
  icon: LucideIcon;
  capabilities: string[];
  applications: string[];
  path: string[];
  href: string;
  solutions?: string[];
};

const technologies: TechnologySection[] = [
  {
    solutions: ["Quantum Risk Engine"],
    id: "quantum-computing",
    number: "01",
    eyebrow: "Core layer",
    title: "Quantum Computing",
    shortName: "Quantum Computing",
    icon: Cpu,
    href: "https://qc.quinfosys.com",
    summary:
      "Quantum Computing is the foundational domain behind the Quinfosys stack, covering circuit models, qubit systems, and quantum algorithm design.",
    longCopy:
      "This technology domain underpins the rest of the Quinfosys stack. The direction covers quantum circuit models, qubit systems, algorithm design, and hybrid classical and quantum computation, giving research and product teams a shared scientific foundation that products, solutions, and industry work can build on.",
    capabilities: [
      "Quantum circuit and algorithm design fundamentals",
      "Qubit system modelling and gate level operations",
      "Hybrid classical and quantum computation research",
      "Foundational layer for products built across the stack",
      "Direction built for research teams and platform engineering",
    ],
    applications: [
      "Algorithm research",
      "Hardware alignment",
      "Hybrid computation",
      "Platform foundations",
    ],
    path: ["Research", "Model", "Simulate", "Apply"],
  },
  {
    id: "quantum-networks",
    number: "02",
    eyebrow: "Connectivity layer",
    title: "Quantum Networks",
    shortName: "Quantum Networks",
    icon: Network,
    href: "https://network.quinfosys.com",
    summary:
      "Quantum Networks covers the science of distributed and secure quantum communication, from protocol design to node to node connectivity.",
    longCopy:
      "This technology domain focuses on how quantum systems communicate and connect across distance. The direction covers quantum network protocol design, secure node to node communication, and distributed quantum infrastructure research, forming the scientific base for Quinfosys networking products and future communication solutions.",
    capabilities: [
      "Quantum network protocol research and design",
      "Secure node to node communication modelling",
      "Distributed quantum infrastructure research",
      "Hybrid classical and quantum network compatibility studies",
      "Foundational layer for telecom and infrastructure solutions",
    ],
    applications: [
      "Protocol research",
      "Secure communication",
      "Distributed systems",
      "Telecom foundations",
    ],
    path: ["Research", "Design", "Simulate", "Validate"],
  },
  {
    solutions: ["Quantum Risk Engine", "AI Solutions"],
    id: "quantum-ai",
    number: "03",
    eyebrow: "Intelligence layer",
    title: "Quantum AI",
    shortName: "Quantum AI",
    icon: BrainCircuit,
    href: "https://ai.quinfosys.com",
    summary:
      "Quantum AI combines quantum computing with artificial intelligence, researching quantum enhanced learning, inference, and decision systems.",
    longCopy:
      "This technology domain sits at the intersection of quantum computing and AI. The direction covers quantum enhanced machine learning, pattern recognition, and hybrid inference research, giving teams a scientific base to evaluate where quantum methods can extend classical AI approaches as hardware and tooling mature.",
    capabilities: [
      "Quantum enhanced machine learning research",
      "Hybrid classical and quantum inference studies",
      "Pattern recognition for complex, high dimensional data",
      "Benchmarking across classical and quantum model variants",
      "Foundational layer for AI driven products and solutions",
    ],
    applications: [
      "Machine learning research",
      "Inference systems",
      "Pattern recognition",
      "AI foundations",
    ],
    path: ["Research", "Model", "Train", "Evaluate"],
  },
  {
    solutions: ["Crypto-Agility"],
    id: "quantum-security",
    number: "04",
    eyebrow: "Trust layer",
    title: "Quantum Security",
    shortName: "Quantum Security",
    icon: ShieldCheck,
    href: "https://security.quinfosys.com",
    summary:
      "Quantum Security researches the cryptographic transition created by quantum computing, covering encryption readiness and secure key distribution.",
    longCopy:
      "This technology domain addresses the security implications of quantum computing. The direction covers post quantum encryption research, quantum key distribution concepts, and migration planning, forming the scientific base for crypto agility and security services across Quinfosys solutions.",
    capabilities: [
      "Post quantum encryption research and readiness studies",
      "Quantum key distribution concept research",
      "Cryptographic migration planning frameworks",
      "Security architecture research for infrastructure and applications",
      "Foundational layer for crypto agility and security solutions",
    ],
    applications: [
      "Encryption research",
      "Key distribution",
      "Migration planning",
      "Security foundations",
    ],
    path: ["Research", "Assess", "Harden", "Monitor"],
  },
  {
    id: "quantum-sensing",
    number: "05",
    eyebrow: "Measurement layer",
    title: "Quantum Sensing",
    shortName: "Quantum Sensing",
    icon: Radar,
    href: "https://sensing.quinfosys.com",
    summary:
      "Quantum Sensing researches quantum enabled measurement and detection, enabling precision sensing beyond classical instrument limits.",
    longCopy:
      "This technology domain explores how quantum effects can be used for highly precise measurement and detection. The direction covers quantum enabled sensors, measurement precision research, and detection methods, forming a scientific base that can support future industry work in materials, energy, aerospace, and defence.",
    capabilities: [
      "Quantum enabled sensor and measurement research",
      "Precision detection methods beyond classical limits",
      "Research into environmental and structural sensing applications",
      "Hybrid classical and quantum measurement pipelines",
      "Foundational layer for materials, energy, and aerospace work",
    ],
    applications: [
      "Precision measurement",
      "Detection research",
      "Sensor design",
      "Applied research",
    ],
    path: ["Research", "Design", "Test", "Validate"],
  },
];

const technologyMarkers = [
  { label: "Research", text: "Establish the scientific and engineering base" },
  { label: "Develop", text: "Turn research into dependable technology" },
  { label: "Apply", text: "Carry the domain into products and industries" },
];

function TechnologyHeroInfographic() {
  const steps = [
    { icon: Cpu, label: "Computing", text: "Circuits, qubits, and algorithms" },
    { icon: Network, label: "Networks", text: "Distributed quantum connectivity" },
    { icon: ShieldCheck, label: "Security", text: "Quantum era cryptographic trust" },
  ];

  return (
    <div
      className="relative mx-auto mt-12 w-full max-w-md lg:mt-0 lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_50%_45%,rgba(245,245,245,0.18),transparent_58%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-5">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,245,245,0.12),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(212,212,212,0.14),transparent_34%)]" />
        <div className="relative rounded-[1.5rem] border border-white/10 bg-[#070707]/85 p-5 sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-100/70">
                Technology system
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[#f8f8f8] sm:text-3xl">
                Research. Develop. Apply.
              </h2>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f8f8f8] text-[#111111] shadow-2xl">
              <Cpu className="h-5 w-5" strokeWidth={1.6} />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-4">
            <div className="space-y-3">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.label}
                    className="group/step relative flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111111]/75 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.075]"
                  >
                    <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-[#070707] text-zinc-100 shadow-xl">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.55} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-base font-semibold tracking-tight text-[#f8f8f8]">
                          {step.label}
                        </p>
                        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            {["Science", "Engineering", "Scale"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3"
              >
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

function TechnologyVisual({
  technology,
  isOpen,
}: {
  technology: TechnologySection;
  isOpen: boolean;
}) {
  const Icon = technology.icon;

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[18rem] items-center justify-center overflow-hidden rounded-[2.5rem] border border-slate-700/45 bg-gradient-to-br from-[#181818] via-[#0c0c0c] to-[#070707] shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:max-w-sm lg:max-w-md">
      <div className="absolute inset-5 rounded-[2rem] border border-white/[0.06]" />
      <div className="absolute inset-10 rounded-full border border-white/10" />
      <div className="absolute h-[74%] w-[74%] rounded-full bg-[radial-gradient(circle,_rgba(245,245,245,0.17),_rgba(212,212,212,0.09)_46%,_transparent_73%)] blur-md transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="absolute top-1/2 h-px w-[calc(100%-4rem)] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute left-8 top-8 h-16 w-16 rounded-full border border-white/10 bg-white/[0.035] blur-[1px]" />
      <div className="absolute bottom-14 right-8 h-20 w-20 rounded-full border border-white/10 bg-white/[0.045] blur-[1px]" />
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
        {technology.shortName}
      </div>
    </div>
  );
}

function TechnologyBlock({
  technology,
  index,
  isOpen,
  onToggle,
}: {
  technology: TechnologySection;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isReversed = index % 2 === 1;

  return (
    <article id={technology.id} className="group scroll-mt-28 border-t border-slate-700/35 py-12 first:border-t-0 sm:py-14 lg:py-20">
      <div
        className={`grid items-center gap-10 rounded-[2rem] border border-white/[0.06] bg-gradient-to-br from-white/[0.055] via-white/[0.025] to-transparent p-5 shadow-[0_30px_100px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-7 lg:grid-cols-[1fr_0.82fr] lg:gap-16 lg:p-10 ${
          isReversed ? "lg:grid-cols-[0.82fr_1fr]" : ""
        }`}
      >
        <div className={isReversed ? "lg:order-2" : ""}>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              {technology.number}
            </span>
            <span className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-100/85">
              {technology.eyebrow}
            </span>
          </div>

          <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.045em] text-[#f8f8f8] sm:text-4xl lg:text-6xl">
            {technology.title}
          </h2>

          <div className="relative mt-8 max-w-2xl overflow-hidden">
            <p className="text-[1.02rem] font-light leading-8 text-slate-300 sm:text-lg sm:leading-9">
              {technology.summary}
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
                  {technology.longCopy}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-controls={`${technology.id}-details`}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f8f8f8] transition-all duration-300 hover:border-white/25 hover:bg-[#f8f8f8] hover:text-[#111111]"
            >
              {isOpen ? "Show less" : "Read more"}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                strokeWidth={1.5}
              />
            </button>
            <a
              href={technology.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f8f8f8] transition-all duration-300 hover:border-white/25 hover:bg-[#f8f8f8] hover:text-[#111111]"
            >
              Visit technology
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className={isReversed ? "lg:order-1" : ""}>
          <TechnologyVisual technology={technology} isOpen={isOpen} />
        </div>
      </div>

      <div
        id={`${technology.id}-details`}
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
                {technology.capabilities.map((item) => (
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
                Applications
              </p>
              <div className="flex flex-wrap gap-2">
                {technology.applications.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {technology.solutions && (
                <>
                  <p className="mb-4 mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Solutions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {technology.solutions.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/[0.09] px-3 py-2 text-xs text-zinc-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 text-[#f8f8f8]">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Technology path
              </p>
              <div className="space-y-3">
                {technology.path.map((item, step) => (
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

export default function TechnologiesPage() {
  const [openTechnology, setOpenTechnology] = useState<string | null>(null);
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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(245,245,245,0.13),transparent_30%),radial-gradient(circle_at_84%_8%,rgba(212,212,212,0.12),transparent_32%),linear-gradient(180deg,#141414_0%,#0b0b0b_54%,#080808_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#0d0d0d]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.04fr_0.66fr] lg:gap-14">
          <div className="max-w-5xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-100/70">
              Technologies
            </p>
            <h1 className="text-4xl font-medium tracking-[-0.05em] text-[#f8f8f8] sm:text-5xl lg:text-7xl">
              Five core technologies. One quantum foundation.
            </h1>
            <p className="mt-8 max-w-3xl text-[1.02rem] font-light leading-8 text-slate-300 sm:text-lg sm:leading-9">
              Quinfosys technologies are the foundational scientific and
              engineering domains behind every product, solution, and
              industry practice, spanning computing, networks, AI, security,
              and sensing.
            </p>
          </div>
          <TechnologyHeroInfographic />
        </div>
      </section>

      <section className="border-y border-slate-700/35 bg-gradient-to-r from-[#f7f7f7] via-[#eeeeee] to-[#ffffff] px-6 py-8 text-[#171717] sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Technology pathway
            </p>
            <h2 className="mt-2 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
              From foundational research to applied technology.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[34rem]">
            {technologyMarkers.map((item, index) => (
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
          {technologies.map((technology, index) => (
            <TechnologyBlock
              key={technology.id}
              technology={technology}
              index={index}
              isOpen={openTechnology === technology.id}
              onToggle={() =>
                setOpenTechnology(openTechnology === technology.id ? null : technology.id)
              }
            />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-700/35 bg-gradient-to-br from-[#171717] via-[#0d0d0d] to-[#080808] px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#f7f7f7] to-[#e8e8e8] p-6 text-[#171717] shadow-2xl sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Technology access
            </p>
            <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl">
              Need to align technology to your roadmap?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Reach the Quinfosys team directly. The discussion can be aligned
              around computing, networks, AI, security, or sensing.
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
