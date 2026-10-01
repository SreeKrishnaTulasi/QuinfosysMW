import {
  ArrowUp,
  ArrowUpRight,
  Atom,
  Check,
  ChevronDown,
  FlaskConical,
  HeartPulse,
  Landmark,
  Mail,
  Rocket,
  Sparkles,
  Truck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "../data/content";

type IndustrySection = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  shortName: string;
  summary: string;
  longCopy: string;
  icon: LucideIcon;
  businessModel: string;
  capabilities: string[];
  businessUse: string[];
  deliveryPath: string[];
  href: string;
};

const industries: IndustrySection[] = [
  {
    id: "fintech",
    number: "01",
    eyebrow: "Financial layer",
    title: "Quantum FinTech",
    shortName: "Quantum FinTech",
    icon: Landmark,
    href: "https://fintech.quinfosys.com",
    businessModel: "B2B",
    summary:
      "Quantum FinTech applies quantum computing to portfolio modelling, risk analysis, and fraud detection for financial institutions preparing for compute intensive workloads.",
    longCopy:
      "This industry area is designed for banks, asset managers, and financial platforms exploring quantum approaches to modelling problems that are difficult for classical systems at scale. The direction covers portfolio optimization, risk simulation, fraud pattern detection, and hybrid quantum and classical financial modelling pipelines.",
    capabilities: [
      "Portfolio optimization and risk simulation direction",
      "Fraud pattern detection across large transaction datasets",
      "Hybrid quantum and classical financial modelling pipelines",
      "Scenario testing for pricing, hedging, and capital allocation",
      "Built for banks, asset managers, and financial platforms",
    ],
    businessUse: [
      "Portfolio modelling",
      "Risk simulation",
      "Fraud detection",
      "Financial analytics",
    ],
    deliveryPath: ["Frame", "Model", "Simulate", "Deploy"],
  },
  {
    id: "health-intelligence",
    number: "02",
    eyebrow: "Care layer",
    title: "Quantum Health Intelligence System",
    shortName: "Quantum Health Intelligence System",
    icon: HeartPulse,
    href: "https://healthcare.quinfosys.com",
    businessModel: "B2B + B2C",
    summary:
      "Quantum Health Intelligence System directs quantum computing toward diagnostics support, treatment modelling, and healthcare operations for providers and research institutions.",
    longCopy:
      "This industry area is built for healthcare providers and research institutions exploring quantum enhanced approaches to diagnostics support, treatment pathway modelling, and operational planning. The direction combines quantum aware data modelling with practical healthcare workflow structures so early experimentation stays grounded in real clinical and operational needs.",
    capabilities: [
      "Diagnostics support modelling for complex clinical data",
      "Treatment pathway and outcome modelling direction",
      "Healthcare operations and resource planning support",
      "Hybrid quantum and classical healthcare data pipelines",
      "Built for providers, payers, and research institutions",
    ],
    businessUse: [
      "Diagnostics support",
      "Treatment modelling",
      "Operations planning",
      "Clinical research",
    ],
    deliveryPath: ["Assess", "Model", "Validate", "Apply"],
  },
  {
    id: "drug-discovery",
    number: "03",
    eyebrow: "Discovery layer",
    title: "Quantum Drug Discovery",
    shortName: "Quantum Drug Discovery",
    icon: FlaskConical,
    href: "https://drug.quinfosys.com",
    businessModel: "B2B + B2C",
    summary:
      "Quantum Drug Discovery applies quantum computing to molecular simulation and candidate screening, helping research teams explore drug candidates with greater speed and precision.",
    longCopy:
      "This industry area is built for pharmaceutical and life sciences teams that need to model molecular interactions beyond the reach of classical compute. The direction focuses on quantum accelerated molecular simulation, candidate screening, and structure analysis, giving research groups a way to shorten early stage discovery cycles while keeping results reproducible and lab ready.",
    capabilities: [
      "Quantum accelerated molecular and protein simulation",
      "Candidate screening workflows for early stage discovery",
      "Hybrid classical and quantum modelling pipelines",
      "Structured output for lab and research validation",
      "Built for pharma, biotech, and academic research teams",
    ],
    businessUse: [
      "Molecular simulation",
      "Candidate screening",
      "Research pipelines",
      "Pharma and biotech R&D",
    ],
    deliveryPath: ["Model", "Simulate", "Screen", "Validate"],
  },
  {
    id: "material-discovery",
    number: "04",
    eyebrow: "Structure layer",
    title: "Quantum Material Discovery",
    shortName: "Quantum Material Discovery",
    icon: Atom,
    href: "https://material.quinfosys.com",
    businessModel: "B2B",
    summary:
      "Quantum Material Discovery directs quantum simulation toward material property prediction and discovery, supporting research into new alloys, compounds, and structures.",
    longCopy:
      "This industry area is designed for research and engineering teams studying material behaviour at a scale where classical simulation becomes limited. The direction covers quantum simulation of atomic and molecular structures, property prediction, and discovery workflows for new materials across manufacturing, energy, and advanced engineering applications.",
    capabilities: [
      "Quantum simulation of atomic and molecular structures",
      "Material property prediction for new compounds and alloys",
      "Discovery workflows for advanced materials research",
      "Hybrid classical and quantum simulation pipelines",
      "Built for materials science and advanced engineering teams",
    ],
    businessUse: [
      "Material simulation",
      "Property prediction",
      "Research pipelines",
      "Advanced engineering",
    ],
    deliveryPath: ["Model", "Simulate", "Predict", "Validate"],
  },
  {
    id: "supply-chain",
    number: "05",
    eyebrow: "Logistics layer",
    title: "Quantum Supply Chain",
    shortName: "Quantum Supply Chain",
    icon: Truck,
    href: "https://supplychain.quinfosys.com",
    businessModel: "B2B",
    summary:
      "Quantum Supply Chain applies quantum optimization to routing, inventory, and logistics planning problems that are difficult to scale with classical methods alone.",
    longCopy:
      "This industry area is built for logistics and manufacturing organizations dealing with complex routing, allocation, and inventory constraints. The direction covers quantum optimization for network design, demand forecasting alignment, and resource allocation, giving supply chain teams a structured path from problem framing to hybrid quantum and classical experimentation.",
    capabilities: [
      "Quantum optimization for routing and network design",
      "Inventory and resource allocation modelling",
      "Demand forecasting alignment for supply networks",
      "Hybrid quantum and classical logistics pipelines",
      "Built for logistics, manufacturing, and retail supply teams",
    ],
    businessUse: [
      "Routing optimization",
      "Inventory planning",
      "Demand forecasting",
      "Logistics networks",
    ],
    deliveryPath: ["Map", "Model", "Optimize", "Deploy"],
  },
  {
    id: "aerospace-defence",
    number: "06",
    eyebrow: "Aerospace layer",
    title: "Quantum Aerospace & Defence",
    shortName: "Quantum Aerospace & Defence",
    icon: Rocket,
    href: "https://aerospace.quinfosys.com",
    businessModel: "B2B + B2G",
    summary:
      "Quantum Aerospace & Defence applies quantum computing to navigation, materials, and secure communication challenges across aerospace and defence programs.",
    longCopy:
      "This industry area is built for aerospace and defence organizations exploring quantum approaches to navigation precision, materials research, and secure communication. The direction covers quantum enabled sensing and navigation, secure defence communication, and materials modelling for demanding aerospace environments, aligned with government and enterprise program requirements.",
    capabilities: [
      "Quantum enabled navigation and positioning research",
      "Secure communication direction for defence programs",
      "Materials modelling for aerospace grade components",
      "Hybrid classical and quantum simulation pipelines",
      "Built for aerospace manufacturers, defence programs, and government partners",
    ],
    businessUse: [
      "Navigation systems",
      "Secure communication",
      "Materials research",
      "Defence programs",
    ],
    deliveryPath: ["Assess", "Model", "Secure", "Deploy"],
  },
  {
    id: "energy",
    number: "07",
    eyebrow: "Grid layer",
    title: "Quantum Energy",
    shortName: "Quantum Energy",
    icon: Zap,
    href: "https://energy.quinfosys.com",
    businessModel: "B2B",
    summary:
      "Quantum Energy directs quantum computing toward grid optimization, load forecasting, and energy resource planning for utilities and energy providers.",
    longCopy:
      "This industry area is designed for utilities and energy providers exploring quantum approaches to grid balancing, load forecasting, and resource planning. The direction covers quantum optimization for distribution networks, renewable integration modelling, and demand response planning, helping energy teams prepare for higher complexity grid systems.",
    capabilities: [
      "Grid optimization and load balancing direction",
      "Load forecasting and demand response modelling",
      "Renewable integration and resource planning support",
      "Hybrid quantum and classical energy modelling pipelines",
      "Built for utilities, grid operators, and energy providers",
    ],
    businessUse: [
      "Grid optimization",
      "Load forecasting",
      "Renewable integration",
      "Resource planning",
    ],
    deliveryPath: ["Assess", "Model", "Optimize", "Monitor"],
  },
];

const industryMarkers = [
  { label: "Assess", text: "Find the industry specific quantum opportunity" },
  { label: "Model", text: "Shape a practical, sector aware solution path" },
  { label: "Scale", text: "Move safely toward operational adoption" },
];


function IndustryHeroInfographic() {
  const steps = [
    { icon: Landmark, label: "FinTech", text: "Financial risk and fraud modelling" },
    { icon: HeartPulse, label: "Health", text: "Diagnostics and treatment modelling" },
    { icon: FlaskConical, label: "Discovery", text: "Molecular and materials research" },
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
                Industry system
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[#f8f8f8] sm:text-3xl">
                Assess. Model. Scale.
              </h2>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f8f8f8] text-[#111111] shadow-2xl">
              <Landmark className="h-5 w-5" strokeWidth={1.6} />
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

function IndustryVisual({
  industry,
  isOpen,
}: {
  industry: IndustrySection;
  isOpen: boolean;
}) {
  const Icon = industry.icon;

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
        {industry.shortName}
      </div>
    </div>
  );
}

function IndustryBlock({
  industry,
  index,
  isOpen,
  onToggle,
}: {
  industry: IndustrySection;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isReversed = index % 2 === 1;

  return (
    <article id={industry.id} className="group scroll-mt-28 border-t border-slate-700/35 py-12 first:border-t-0 sm:py-14 lg:py-20">
      <div
        className={`grid items-center gap-10 rounded-[2rem] border border-white/[0.06] bg-gradient-to-br from-white/[0.055] via-white/[0.025] to-transparent p-5 shadow-[0_30px_100px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-7 lg:grid-cols-[1fr_0.82fr] lg:gap-16 lg:p-10 ${
          isReversed ? "lg:grid-cols-[0.82fr_1fr]" : ""
        }`}
      >
        <div className={isReversed ? "lg:order-2" : ""}>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              {industry.number}
            </span>
            <span className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-100/85">
              {industry.eyebrow}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              {industry.businessModel}
            </span>
          </div>

          <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.045em] text-[#f8f8f8] sm:text-4xl lg:text-6xl">
            {industry.title}
          </h2>
          <p className="mt-3 text-xl font-light tracking-tight text-slate-400 sm:text-2xl">
            {industry.shortName}
          </p>

          <div className="relative mt-8 max-w-2xl overflow-hidden">
            <p className="text-[1.02rem] font-light leading-8 text-slate-300 sm:text-lg sm:leading-9">
              {industry.summary}
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
                  {industry.longCopy}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-controls={`${industry.id}-details`}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f8f8f8] transition-all duration-300 hover:border-white/25 hover:bg-[#f8f8f8] hover:text-[#111111]"
            >
              {isOpen ? "Show less" : "Read more"}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                strokeWidth={1.5}
              />
            </button>
            <a
              href={industry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f8f8f8] transition-all duration-300 hover:border-white/25 hover:bg-[#f8f8f8] hover:text-[#111111]"
            >
              Visit industry
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className={isReversed ? "lg:order-1" : ""}>
          <IndustryVisual industry={industry} isOpen={isOpen} />
        </div>
      </div>

      <div
        id={`${industry.id}-details`}
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
                {industry.capabilities.map((item) => (
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
                {industry.businessUse.map((item) => (
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
                Industry path
              </p>
              <div className="space-y-3">
                {industry.deliveryPath.map((item, step) => (
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

export default function IndustriesPage() {
  const [openIndustry, setOpenIndustry] = useState<string | null>(null);
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
              Industries
            </p>
            <h1 className="text-4xl font-medium tracking-[-0.05em] text-[#f8f8f8] sm:text-5xl lg:text-7xl">
              Quantum built for the industries that run the world.
            </h1>
            <p className="mt-8 max-w-3xl text-[1.02rem] font-light leading-8 text-slate-300 sm:text-lg sm:leading-9">
              Quinfosys industry practices apply quantum computing to
              FinTech, health intelligence, drug discovery, material
              discovery, supply chain, aerospace and defence, and energy,
              giving sector teams a direct path from quantum capability to
              operational value.
            </p>
          </div>
          <IndustryHeroInfographic />
        </div>
      </section>

      <section className="border-y border-slate-700/35 bg-gradient-to-r from-[#f7f7f7] via-[#eeeeee] to-[#ffffff] px-6 py-8 text-[#171717] sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Industry pathway
            </p>
            <h2 className="mt-2 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
              Move from sector problem to ready for quantum execution.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[34rem]">
            {industryMarkers.map((item, index) => (
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
          {industries.map((industry, index) => (
            <IndustryBlock
              key={industry.id}
              industry={industry}
              index={index}
              isOpen={openIndustry === industry.id}
              onToggle={() =>
                setOpenIndustry(openIndustry === industry.id ? null : industry.id)
              }
            />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-700/35 bg-gradient-to-br from-[#171717] via-[#0d0d0d] to-[#080808] px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#f7f7f7] to-[#e8e8e8] p-6 text-[#171717] shadow-2xl sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Industry access
            </p>
            <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl">
              Need to map quantum to your industry?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Reach the Quinfosys team directly. The discussion can be aligned
              around FinTech, health intelligence, drug discovery, material
              discovery, supply chain, aerospace and defence, or energy.
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
