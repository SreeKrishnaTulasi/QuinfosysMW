import {
  ArrowUp,
  Check,
  ChevronDown,
  ChartBar,
  Cloud,
  Gauge,
  Lightbulb,
  Mail,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "../data/content";

type SolutionSection = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  shortName: string;
  summary: string;
  longCopy: string;
  icon: LucideIcon;
  capabilities: string[];
  businessUse: string[];
  deliveryPath: string[];
};

const solutions: SolutionSection[] = [
  {
    id: "enterprise-strategy",
    number: "01",
    eyebrow: "Readiness layer",
    title: "Enterprise Quantum Strategy",
    shortName: "Strategy",
    icon: Workflow,
    summary:
      "Enterprise Quantum Strategy helps organizations identify where quantum technologies can create practical value across existing systems, teams, and long term business priorities.",
    longCopy:
      "This solution area is built for leadership teams that need a clear quantum roadmap before committing to infrastructure, product development, or major transformation work. The engagement direction focuses on use case discovery, feasibility mapping, current system alignment, phased adoption planning, and executive level decision support so quantum adoption is treated as a structured business capability rather than a disconnected research experiment.",
    capabilities: [
      "Quantum opportunity mapping across business units and technical systems",
      "Use case prioritization based on value, feasibility, and implementation readiness",
      "Roadmap planning for staged enterprise quantum adoption",
      "Alignment between current digital infrastructure and future quantum capability",
      "Decision support for pilots, partnerships, training, and investment planning",
    ],
    businessUse: [
      "Enterprise roadmap",
      "Readiness assessment",
      "Leadership planning",
      "Quantum pilot selection",
    ],
    deliveryPath: ["Assess", "Prioritize", "Roadmap", "Pilot"],
  },
  {
    id: "optimization",
    number: "02",
    eyebrow: "Operations layer",
    title: "Quantum Optimization",
    shortName: "Optimization",
    icon: Gauge,
    summary:
      "Quantum Optimization focuses on complex decision problems where routing, allocation, scheduling, and resource planning can benefit from ready for quantum modeling.",
    longCopy:
      "This solution is intended for organizations dealing with high dimensional operational constraints, where classical methods can become slow, costly, or difficult to scale. Quinfosys structures optimization opportunities around logistics, resource allocation, scheduling, portfolio style selection, and operational decision systems, with a practical path from problem framing to hybrid quantum and classical experimentation.",
    capabilities: [
      "Problem modeling for constrained logistics, scheduling, and allocation scenarios",
      "Hybrid quantum and classical optimization workflow direction",
      "Operational bottleneck analysis for suitable for quantum use cases",
      "Scenario testing for cost, time, capacity, and resource tradeoffs",
      "Prototype planning for optimization engines and decision support systems",
    ],
    businessUse: [
      "Logistics planning",
      "Resource allocation",
      "Scheduling systems",
      "Operational decisions",
    ],
    deliveryPath: ["Frame", "Model", "Simulate", "Optimize"],
  },
  {
    id: "analytics",
    number: "03",
    eyebrow: "Insight layer",
    title: "Quantum Analytics",
    shortName: "Analytics",
    icon: ChartBar,
    summary:
      "Quantum Analytics brings quantum algorithm thinking into forecasting, pattern discovery, and business intelligence workflows that need deeper computational insight.",
    longCopy:
      "This solution area is designed for teams that want to explore how quantum approaches can support analytics pipelines, complex feature relationships, forecasting models, and decision intelligence systems. The direction combines quantum algorithm evaluation, data workflow mapping, and practical analytics architecture so organizations can understand where quantum enhanced analysis may become useful as the technology matures.",
    capabilities: [
      "Quantum aware analytics use case discovery for data intensive workflows",
      "Forecasting and decision intelligence opportunity mapping",
      "Hybrid analytics architecture for classical data and quantum methods",
      "Model evaluation paths for pattern discovery and complex relationships",
      "Business intelligence direction for ready for quantum insight systems",
    ],
    businessUse: [
      "Forecasting",
      "Decision intelligence",
      "Data exploration",
      "Business analytics",
    ],
    deliveryPath: ["Map data", "Select methods", "Evaluate", "Deliver insight"],
  },
  {
    id: "security",
    number: "04",
    eyebrow: "Trust layer",
    title: "Quantum Enhanced Security",
    shortName: "Security",
    icon: ShieldCheck,
    summary:
      "Quantum Enhanced Security prepares organizations for quantum era risk through encryption planning, key distribution direction, and future proof infrastructure thinking.",
    longCopy:
      "This solution area addresses the security transition created by quantum computing. Quinfosys frames security work around quantum resistant encryption readiness, secure protocol planning, key distribution concepts, infrastructure risk review, and practical migration paths so organizations can begin preparing sensitive systems before quantum threats become operationally urgent.",
    capabilities: [
      "Quantum risk review for sensitive data, platforms, and communication paths",
      "Post quantum encryption readiness and migration planning",
      "Quantum key distribution concept alignment for future secure channels",
      "Security architecture direction for infrastructure, cloud, and application layers",
      "Governance support for long term cryptographic transition planning",
    ],
    businessUse: [
      "Data protection",
      "Infrastructure security",
      "Encryption planning",
      "Risk readiness",
    ],
    deliveryPath: ["Review", "Harden", "Transition", "Monitor"],
  },
  {
    id: "cloud-migration",
    number: "05",
    eyebrow: "Adoption layer",
    title: "Quantum Cloud Migration",
    shortName: "Cloud migration",
    icon: Cloud,
    summary:
      "Quantum Cloud Migration helps teams introduce quantum capability through hybrid cloud pathways without disrupting current cloud investments.",
    longCopy:
      "This solution is for organizations that want quantum access to sit beside existing cloud and software infrastructure. The focus is not a forced replacement of current systems; it is a controlled migration path that supports experimentation, hybrid workload routing, secure access, workload management, and gradual operational adoption across cloud first environments.",
    capabilities: [
      "Hybrid cloud adoption planning for quantum and classical workloads",
      "Workload routing direction for experimentation and staged deployment",
      "Secure access planning across users, systems, and compute resources",
      "Cloud architecture review for ready for quantum integration points",
      "Migration roadmap for teams moving from research tests toward operational pilots",
    ],
    businessUse: [
      "Hybrid cloud",
      "Compute access",
      "Enterprise pilots",
      "Cloud architecture",
    ],
    deliveryPath: ["Connect", "Route", "Secure", "Scale"],
  },
  {
    id: "innovation-framework",
    number: "06",
    eyebrow: "Execution layer",
    title: "Quantum Innovation Framework",
    shortName: "Framework",
    icon: Lightbulb,
    summary:
      "Quantum Innovation Framework gives organizations a systematic way to prioritize, prototype, and scale high impact quantum initiatives.",
    longCopy:
      "This framework is intended to move quantum ideas out of scattered discussions and into a repeatable innovation pipeline. It structures the journey from opportunity discovery to prototype selection, team enablement, technical validation, and implementation planning, helping organizations build a practical portfolio of quantum initiatives instead of isolated experiments.",
    capabilities: [
      "Structured discovery process for quantum innovation opportunities",
      "Scoring model for business value, readiness, risk, and technical feasibility",
      "Prototype planning for selected quantum initiatives",
      "Team enablement direction for leadership, developers, and domain experts",
      "Portfolio model for moving from research exploration to practical implementation",
    ],
    businessUse: [
      "Innovation pipeline",
      "Prototype planning",
      "Team enablement",
      "Portfolio execution",
    ],
    deliveryPath: ["Discover", "Score", "Prototype", "Implement"],
  },
];

const solutionMarkers = [
  { label: "Discover", text: "Find suitable for quantum business problems" },
  { label: "Prototype", text: "Convert solution areas into pilots" },
  { label: "Scale", text: "Connect validated work to operations" },
];

function SolutionHeroInfographic() {
  const steps = [
    { icon: Workflow, label: "Assess", text: "Find the right business problem" },
    { icon: Gauge, label: "Model", text: "Shape a practical solution path" },
    { icon: ShieldCheck, label: "Scale", text: "Move safely toward adoption" },
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
                Solution system
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[#f8f8f8] sm:text-3xl">
                Assess. Model. Scale.
              </h2>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f8f8f8] text-[#111111] shadow-2xl">
              <Workflow className="h-5 w-5" strokeWidth={1.6} />
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
            {["Fit", "Pilot", "Adopt"].map((item) => (
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

function SolutionVisual({
  solution,
  isOpen,
}: {
  solution: SolutionSection;
  isOpen: boolean;
}) {
  const Icon = solution.icon;

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
        {solution.shortName}
      </div>
    </div>
  );
}

function SolutionBlock({
  solution,
  index,
  isOpen,
  onToggle,
}: {
  solution: SolutionSection;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isReversed = index % 2 === 1;

  return (
    <article id={solution.id} className="group scroll-mt-28 border-t border-slate-700/35 py-12 first:border-t-0 sm:py-14 lg:py-20">
      <div
        className={`grid items-center gap-10 rounded-[2rem] border border-white/[0.06] bg-gradient-to-br from-white/[0.055] via-white/[0.025] to-transparent p-5 shadow-[0_30px_100px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-7 lg:grid-cols-[1fr_0.82fr] lg:gap-16 lg:p-10 ${
          isReversed ? "lg:grid-cols-[0.82fr_1fr]" : ""
        }`}
      >
        <div className={isReversed ? "lg:order-2" : ""}>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              {solution.number}
            </span>
            <span className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-100/85">
              {solution.eyebrow}
            </span>
          </div>

          <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.045em] text-[#f8f8f8] sm:text-4xl lg:text-6xl">
            {solution.title}
          </h2>
          <p className="mt-3 text-xl font-light tracking-tight text-slate-400 sm:text-2xl">
            {solution.shortName}
          </p>

          <div className="relative mt-8 max-w-2xl overflow-hidden">
            <p className="text-[1.02rem] font-light leading-8 text-slate-300 sm:text-lg sm:leading-9">
              {solution.summary}
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
                  {solution.longCopy}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={`${solution.id}-details`}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f8f8f8] transition-all duration-300 hover:border-white/25 hover:bg-[#f8f8f8] hover:text-[#111111]"
          >
            {isOpen ? "Show less" : "Read more"}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              strokeWidth={1.5}
            />
          </button>
        </div>

        <div className={isReversed ? "lg:order-1" : ""}>
          <SolutionVisual solution={solution} isOpen={isOpen} />
        </div>
      </div>

      <div
        id={`${solution.id}-details`}
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
                {solution.capabilities.map((item) => (
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
                {solution.businessUse.map((item) => (
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
                Solution path
              </p>
              <div className="space-y-3">
                {solution.deliveryPath.map((item, step) => (
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

export default function SolutionsPage() {
  const [openSolution, setOpenSolution] = useState<string | null>(null);
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
              Solutions
            </p>
            <h1 className="text-4xl font-medium tracking-[-0.05em] text-[#f8f8f8] sm:text-5xl lg:text-7xl">
              Quantum solution areas for real business systems.
            </h1>
            <p className="mt-8 max-w-3xl text-[1.02rem] font-light leading-8 text-slate-300 sm:text-lg sm:leading-9">
              Quinfosys solutions are structured around adoption, optimization,
              analytics, security, cloud migration, and innovation execution,
              giving teams a clear path from quantum opportunity to practical
              implementation.
            </p>
          </div>
          <SolutionHeroInfographic />
        </div>
      </section>

      <section className="border-y border-slate-700/35 bg-gradient-to-r from-[#f7f7f7] via-[#eeeeee] to-[#ffffff] px-6 py-8 text-[#171717] sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Solution pathway
            </p>
            <h2 className="mt-2 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
              Move from business problem to ready for quantum execution.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[34rem]">
            {solutionMarkers.map((item, index) => (
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
          {solutions.map((solution, index) => (
            <SolutionBlock
              key={solution.id}
              solution={solution}
              index={index}
              isOpen={openSolution === solution.id}
              onToggle={() =>
                setOpenSolution(openSolution === solution.id ? null : solution.id)
              }
            />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-700/35 bg-gradient-to-br from-[#171717] via-[#0d0d0d] to-[#080808] px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#f7f7f7] to-[#e8e8e8] p-6 text-[#171717] shadow-2xl sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Solution access
            </p>
            <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl">
              Need to map a quantum solution to your organization?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Reach the Quinfosys team directly. The discussion can be aligned
              around strategy, optimization, analytics, security, cloud
              migration, or innovation planning.
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
