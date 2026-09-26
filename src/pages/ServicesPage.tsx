import {
  ArrowUp,
  Check,
  ChevronDown,
  ClipboardCheck,
  GraduationCap,
  Headphones,
  Mail,
  Rocket,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "../data/content";

type ServiceSection = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  shortName: string;
  summary: string;
  longCopy: string;
  icon: LucideIcon;
  engagementFocus: string[];
  outcomes: string[];
  workingModel: string[];
};

const services: ServiceSection[] = [
  {
    id: "consulting",
    number: "01",
    eyebrow: "Advisory layer",
    title: "Quantum Strategy Consulting",
    shortName: "Consulting",
    icon: ClipboardCheck,
    summary:
      "Quantum Strategy Consulting helps organizations understand where quantum technologies can create practical value before they invest in platforms, pilots, or internal teams.",
    longCopy:
      "This service is designed for leaders who need clarity before execution. Quinfosys reviews business priorities, current systems, technical readiness, and adoption constraints to define a realistic quantum roadmap. The work focuses on useful opportunity discovery, investment direction, capability planning, and clear decision support for teams that want to move from curiosity to structured action.",
    engagementFocus: [
      "Business and technical readiness review",
      "Quantum opportunity discovery across departments and systems",
      "Use case prioritization based on value and feasibility",
      "Roadmap planning for staged adoption",
      "Leadership support for pilots, partnerships, and internal capability building",
    ],
    outcomes: [
      "Readiness assessment",
      "Opportunity map",
      "Adoption roadmap",
      "Pilot direction",
    ],
    workingModel: ["Discover", "Assess", "Prioritize", "Plan"],
  },
  {
    id: "implementation",
    number: "02",
    eyebrow: "Execution layer",
    title: "Quantum Implementation Services",
    shortName: "Implementation",
    icon: Rocket,
    summary:
      "Quantum Implementation Services support the practical deployment, integration, testing, and handover of quantum ready systems inside real organizational workflows.",
    longCopy:
      "This service turns selected opportunities into working technical paths. Quinfosys helps teams plan architecture, integrate quantum tools with classical systems, validate outputs, prepare workflows, and move prototypes toward controlled operational use. The emphasis is careful execution, clean documentation, and a handover model that allows client teams to understand what has been built and how it can evolve.",
    engagementFocus: [
      "Architecture planning for quantum and classical workflows",
      "Prototype development and controlled implementation support",
      "System integration with existing applications and cloud environments",
      "Testing, validation, and technical review",
      "Documentation and handover for internal technical teams",
    ],
    outcomes: [
      "Prototype build",
      "Integration plan",
      "Validation report",
      "Technical handover",
    ],
    workingModel: ["Design", "Build", "Validate", "Handover"],
  },
  {
    id: "support",
    number: "03",
    eyebrow: "Operations layer",
    title: "Support and Maintenance",
    shortName: "Support",
    icon: Headphones,
    summary:
      "Support and Maintenance keeps quantum related systems stable, reviewed, and ready for improvement after the first deployment or pilot stage.",
    longCopy:
      "This service is built for teams that need continued operational confidence after implementation. Quinfosys supports monitoring direction, performance review, issue investigation, update planning, and improvement cycles so quantum enabled systems can mature without becoming isolated experimental assets. The service helps clients protect continuity while refining technical and business value over time.",
    engagementFocus: [
      "Operational review for quantum related workflows",
      "Maintenance planning for systems, documentation, and integrations",
      "Performance review and improvement recommendations",
      "Issue triage and technical support direction",
      "Ongoing alignment with roadmap goals and adoption milestones",
    ],
    outcomes: [
      "System review",
      "Maintenance plan",
      "Performance notes",
      "Improvement backlog",
    ],
    workingModel: ["Monitor", "Review", "Improve", "Stabilize"],
  },
  {
    id: "training",
    number: "04",
    eyebrow: "Enablement layer",
    title: "Quantum Training and Support",
    shortName: "Training",
    icon: GraduationCap,
    summary:
      "Quantum Training and Support prepares leadership, developers, and domain teams to understand quantum technologies with the right level of depth for their role.",
    longCopy:
      "This service focuses on capability building rather than generic awareness. Quinfosys can structure learning paths for executives, technical teams, students, and business units so each group understands the concepts, limits, tools, and implementation direction relevant to them. The goal is to help organizations build internal confidence before scaling quantum initiatives.",
    engagementFocus: [
      "Foundational quantum computing orientation for teams",
      "Developer enablement for quantum programming and workflow concepts",
      "Leadership sessions focused on adoption, risk, and opportunity",
      "Role based learning paths for technical and non technical groups",
      "Support material for continued learning and internal knowledge transfer",
    ],
    outcomes: [
      "Training sessions",
      "Learning pathway",
      "Team enablement",
      "Support material",
    ],
    workingModel: ["Orient", "Teach", "Practice", "Enable"],
  },
];

const serviceMarkers = [
  { label: "Consult", text: "Clarify the opportunity and direction" },
  { label: "Build", text: "Turn selected work into practical systems" },
  { label: "Operate", text: "Keep systems stable and improving" },
  { label: "Enable", text: "Prepare teams to use the capability" },
];

function ServicesHeroInfographic() {
  const steps = [
    { icon: ClipboardCheck, label: "Consult", text: "Set the direction" },
    { icon: Rocket, label: "Build", text: "Create the system" },
    { icon: Headphones, label: "Support", text: "Keep it reliable" },
    { icon: GraduationCap, label: "Enable", text: "Train the team" },
  ];

  return (
    <div
      className="relative mx-auto mt-12 w-full max-w-md lg:mt-0 lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.18),transparent_58%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-5">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.13),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(245,245,245,0.14),transparent_34%)]" />
        <div className="relative rounded-[1.5rem] border border-white/10 bg-[#070707]/85 p-5 sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-100/70">
                Service system
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[#f8f8f8] sm:text-3xl">
                Consult. Build. Support.
              </h2>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f8f8f8] text-[#111111] shadow-2xl">
              <Wrench className="h-5 w-5" strokeWidth={1.6} />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group/service relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
                >
                  <div className="absolute right-3 top-3 text-[10px] font-semibold text-slate-600">
                    0{index + 1}
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#111111] text-zinc-100">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <p className="mt-4 text-base font-semibold tracking-tight text-[#f8f8f8]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <div className="flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              <span>Advisory</span>
              <span>Delivery</span>
              <span>Enablement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceVisual({
  service,
  isOpen,
}: {
  service: ServiceSection;
  isOpen: boolean;
}) {
  const Icon = service.icon;

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[18rem] items-center justify-center rounded-[2.5rem] border border-slate-700/45 bg-gradient-to-br from-[#181818] via-[#0c0c0c] to-[#070707] shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:max-w-sm lg:max-w-md">
      <div className="absolute inset-5 rounded-[2rem] border border-white/[0.06]" />
      <div className="absolute inset-10 rounded-full border border-white/10" />
      <div className="absolute h-[72%] w-[72%] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.17),_rgba(245,245,245,0.08)_45%,_transparent_72%)] blur-md transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute left-10 right-10 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-10 top-10 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/18 to-transparent" />
      <div
        className={`absolute h-20 w-20 rounded-full border border-white/15 bg-white/[0.06] transition-all duration-700 sm:h-24 sm:w-24 ${
          isOpen
            ? "scale-125 opacity-100 shadow-[0_0_60px_rgba(255,255,255,0.22)]"
            : "scale-100 opacity-70"
        }`}
      />
      <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#fafafa] to-[#e8e8e8] text-[#111111] shadow-2xl transition-transform duration-500 group-hover:scale-105 sm:h-24 sm:w-24">
        <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.45} />
      </div>
      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300/80 backdrop-blur-md">
        <Sparkles className="h-3 w-3 text-zinc-100" strokeWidth={1.5} />
        {service.shortName}
      </div>
    </div>
  );
}

function ServiceBlock({
  service,
  index,
  isOpen,
  onToggle,
}: {
  service: ServiceSection;
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
              {service.number}
            </span>
            <span className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-100/85">
              {service.eyebrow}
            </span>
          </div>

          <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.045em] text-[#f8f8f8] sm:text-4xl lg:text-6xl">
            {service.title}
          </h2>
          <p className="mt-3 text-xl font-light tracking-tight text-slate-400 sm:text-2xl">
            {service.shortName}
          </p>

          <div className="relative mt-8 max-w-2xl overflow-hidden">
            <p className="text-[1.02rem] font-light leading-8 text-slate-300 sm:text-lg sm:leading-9">
              {service.summary}
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
                  {service.longCopy}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={`${service.id}-details`}
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
          <ServiceVisual service={service} isOpen={isOpen} />
        </div>
      </div>

      <div
        id={`${service.id}-details`}
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
                Engagement focus
              </p>
              <ul className="space-y-3">
                {service.engagementFocus.map((item) => (
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
                Outputs
              </p>
              <div className="flex flex-wrap gap-2">
                {service.outcomes.map((item) => (
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
                Working model
              </p>
              <div className="space-y-3">
                {service.workingModel.map((item, step) => (
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

export default function ServicesPage() {
  const [openService, setOpenService] = useState<string | null>(null);
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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.13),transparent_30%),radial-gradient(circle_at_84%_8%,rgba(245,245,245,0.12),transparent_32%),linear-gradient(180deg,#171717_0%,#0b0b0b_54%,#080808_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#0d0d0d]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.04fr_0.66fr] lg:gap-14">
          <div className="max-w-5xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-100/70">
              Services
            </p>
            <h1 className="text-4xl font-medium tracking-[-0.05em] text-[#f8f8f8] sm:text-5xl lg:text-7xl">
              Practical Quantum Services for teams moving from idea to execution.
            </h1>
            <p className="mt-8 max-w-3xl text-[1.02rem] font-light leading-8 text-slate-300 sm:text-lg sm:leading-9">
              Quinfosys services connect advisory, implementation, operational
              support, and training into one delivery model for organizations
              preparing to adopt quantum technologies with structure and care.
            </p>
          </div>
          <ServicesHeroInfographic />
        </div>
      </section>

      <section className="border-y border-slate-700/35 bg-gradient-to-r from-[#f7f7f7] via-[#eeeeee] to-[#ffffff] px-6 py-8 text-[#171717] sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Service pathway
            </p>
            <h2 className="mt-2 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
              Move from strategy to delivery without losing continuity.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-4 lg:min-w-[40rem]">
            {serviceMarkers.map((item, index) => (
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
          {services.map((service, index) => (
            <ServiceBlock
              key={service.id}
              service={service}
              index={index}
              isOpen={openService === service.id}
              onToggle={() =>
                setOpenService(openService === service.id ? null : service.id)
              }
            />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-700/35 bg-gradient-to-br from-[#171717] via-[#0d0d0d] to-[#080808] px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#f7f7f7] to-[#e8e8e8] p-6 text-[#171717] shadow-2xl sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Service discussion
            </p>
            <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl">
              Need help choosing the right service path?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Reach the Quinfosys team directly. We will align the conversation
              around your current stage, technical readiness, and adoption goals.
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
