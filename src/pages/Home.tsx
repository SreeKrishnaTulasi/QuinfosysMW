import {
  ArrowRight,
  BookOpen,
  ChartBar,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  FileText,
  Globe,
  GraduationCap,
  Layers,
  Network,
  RadioTower,
  Shield,
  Workflow,
  Zap,
} from "lucide-react";
import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import QuantumDoodleWave from "../components/QuantumDoodleWave";
import { company } from "../data/content";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

type Tile = {
  title: string;
  label: string;
  href: string;
  icon: ReactNode;
  badge?: string;
};

type ProductVisual = {
  title: string;
  desc: string;
  href: string;
  icon: ReactNode;
};

type SolutionVisual = {
  title: string;
  desc: string;
  href: string;
  icon: ReactNode;
};

const productPortfolio: ProductVisual[] = [
  {
    icon: <Code2 strokeWidth={1.5} />,
    title: "QuCPL",
    desc: "Domain-specific quantum programming language with intuitive syntax and classical interoperability.",
    href: "/products#qucpl",
  },
  {
    icon: <Cloud strokeWidth={1.5} />,
    title: "QCS Cloud",
    desc: "On-demand quantum cloud infrastructure for secure workload access and hybrid execution.",
    href: "/products#qcs",
  },
  {
    icon: <Globe strokeWidth={1.5} />,
    title: "QWS Web Services",
    desc: "API-first quantum services for integrating quantum processing into enterprise systems.",
    href: "/products#qws",
  },
];

const solutionPortfolio: SolutionVisual[] = [
  {
    icon: <Workflow strokeWidth={1.5} />,
    title: "Enterprise Strategy",
    desc: "Quantum adoption roadmaps for enterprise transformation.",
    href: "/solutions#enterprise-strategy",
  },
  {
    icon: <Cpu strokeWidth={1.5} />,
    title: "Quantum Optimization",
    desc: "Optimization gates for logistics, allocation, and operating models.",
    href: "/solutions#optimization",
  },
  {
    icon: <Shield strokeWidth={1.5} />,
    title: "Quantum-Safe Security",
    desc: "Future-facing cryptography, key exchange, and secure infrastructure.",
    href: "/solutions#security",
  },
];


type HeroTextContentProps = {
  animated?: boolean;
  interference?: boolean;
};

function HeroTextContent({
  animated = true,
  interference = false,
}: HeroTextContentProps) {
  const headingStyle = interference
    ? {
        WebkitTextStroke: "0.7px rgba(0, 0, 0, 0.5)",
        paintOrder: "stroke fill",
      }
    : {
        WebkitTextStroke: "0.7px rgba(255, 255, 255, 0.45)",
        paintOrder: "stroke fill",
        textShadow: "0 0 12px rgba(255, 255, 255, 0.12)",
      };

  if (!animated) {
    const staticFadeClass =
      "transition-all duration-1000 ease-out transform opacity-100 translate-y-0";

    return (
      <>
        <div className={staticFadeClass}>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em]">
            The Next Era of Computing
          </p>
        </div>
        <div className={staticFadeClass}>
          <h1
            className="mb-8 overflow-visible pb-3 text-5xl font-medium leading-[1.12] tracking-tighter md:text-7xl lg:text-[7rem]"
            style={headingStyle}
          >
            Entangle with <br className="hidden md:block" />
            <span>Quinfosys.</span>
          </h1>
        </div>
        <div className={staticFadeClass}>
          <p className="mx-auto mb-12 max-w-2xl text-lg font-light tracking-tight md:text-2xl">
            Transforming industries through enterprise-grade quantum innovation.
            Scalable, secure, and purely analytical.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <FadeInSection delay={100}>
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em]">
          The Next Era of Computing
        </p>
      </FadeInSection>
      <FadeInSection delay={200}>
        <h1
          className="mb-8 overflow-visible pb-3 text-5xl font-medium leading-[1.12] tracking-tighter md:text-7xl lg:text-[7rem]"
          style={headingStyle}
        >
          Entangle with <br className="hidden md:block" />
          <span>Quinfosys.</span>
        </h1>
      </FadeInSection>
      <FadeInSection delay={300}>
        <p className="mx-auto mb-12 max-w-2xl text-lg font-light tracking-tight md:text-2xl">
          Transforming industries through enterprise-grade quantum innovation.
          Scalable, secure, and purely analytical.
        </p>
      </FadeInSection>
    </>
  );
}

const gatewayGroups = [
  {
    title: "Services",
    href: "/services",
    icon: <GraduationCap strokeWidth={1.5} />,
    items: ["Consulting", "Implementation", "Support", "Training"],
  },
  {
    title: "Research & Development",
    href: "/research-development",
    icon: <RadioTower strokeWidth={1.5} />,
    items: ["Research Areas", "Technologies", "Projects", "Collaborations"],
  },
  {
    title: "Resources",
    href: "/resources",
    icon: <BookOpen strokeWidth={1.5} />,
    items: ["Docs", "Papers", "Events"],
  },
];

function ProductInfographicCard({
  item,
  index,
}: {
  item: ProductVisual;
  index: number;
}) {
  return (
    <FadeInSection delay={index * 140} className="h-full">
      <Link
        to={item.href}
        className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-[#141414]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-500/45 hover:bg-[#1c1c1c]/70 sm:p-8"
      >
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.055] text-slate-300 transition-colors group-hover:bg-white/[0.09] group-hover:text-[#f8f8f8]">
          {item.icon}
        </div>
        <h3 className="mb-3 flex items-center gap-2 text-xl font-medium tracking-tight text-[#f8f8f8]">
          {item.title}
          <span className="rounded-full bg-white/[0.09] px-2 py-0.5 text-[10px] uppercase tracking-wider text-slate-300">
            Beta
          </span>
        </h3>
        <p className="text-sm font-light leading-relaxed text-slate-400">
          {item.desc}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 transition-colors group-hover:text-slate-300">
          Open product{" "}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </FadeInSection>
  );
}

function SolutionLine({
  item,
  index,
}: {
  item: SolutionVisual;
  index: number;
}) {
  return (
    <FadeInSection delay={index * 120}>
      <Link
        to={item.href}
        className="group flex gap-5 rounded-3xl p-2 transition-colors hover:bg-white/[0.03]"
      >
        <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.07] bg-[#141414] text-slate-300 transition-colors group-hover:border-slate-500/45 group-hover:text-[#f8f8f8]">
          {item.icon}
        </div>
        <div>
          <h4 className="text-base font-medium text-slate-200 transition-colors group-hover:text-[#f8f8f8]">
            {item.title}
          </h4>
          <p className="mt-1 text-sm font-light leading-relaxed text-slate-400">
            {item.desc}
          </p>
        </div>
      </Link>
    </FadeInSection>
  );
}

function CircularSolutionInfographic() {
  return (
    <FadeInSection delay={220} className="hidden w-full lg:block">
      <div className="relative mx-auto aspect-square max-w-[470px] rounded-full border border-slate-700/45 p-12">
        <div className="absolute inset-0 animate-[spin_40s_linear_infinite] rounded-full border border-white/[0.07] scale-75" />
        <div className="absolute inset-0 animate-[spin_60s_linear_infinite_reverse] rounded-full border border-dashed border-slate-700/45 scale-90" />
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-slate-500/45 bg-gradient-to-tr from-[#141414] to-[#070707]">
          <ChartBar className="h-16 w-16 text-[#f8f8f8]/20 stroke-[1]" />
          <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-white/5 to-transparent" />
          <div className="absolute left-[18%] top-[23%] h-2 w-2 rounded-full bg-white/40" />
          <div className="absolute right-[22%] top-[36%] h-1.5 w-1.5 rounded-full bg-white/30" />
          <div className="absolute bottom-[24%] left-[35%] h-1.5 w-1.5 rounded-full bg-white/30" />
        </div>
      </div>
    </FadeInSection>
  );
}

export default function Home() {
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const portfolioSectionRef = useRef<HTMLElement | null>(null);
  const mailToSales = `mailto:${company.email}?subject=${encodeURIComponent("Quinfosys enterprise inquiry")}`;

  const scrollToPortfolio = () => {
    portfolioSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative bg-[#050505] text-[#f8f8f8] font-sans selection:bg-[#f5f5f5] selection:text-[#050505]">
      <Navbar />

      <section
        ref={heroSectionRef}
        className="sticky top-0 z-0 flex h-screen w-full flex-col items-center justify-center isolate overflow-hidden bg-[#050505]"
      >
        <QuantumDoodleWave
          sectionRef={heroSectionRef}
          textRef={heroTextRef}
          interferenceText={<HeroTextContent animated={false} interference />}
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center text-white">
          <div ref={heroTextRef} className="relative text-white">
            <HeroTextContent />
          </div>
          <FadeInSection
            delay={400}
            className="relative z-30 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={scrollToPortfolio}
              className="w-full rounded-full bg-[#f8f8f8] px-8 py-4 text-sm font-semibold tracking-wide text-[#111111] shadow-[0_18px_60px_rgba(148,163,184,0.18)] transition-transform duration-300 hover:scale-105 sm:w-auto"
            >
              Explore Quinfosys
            </button>
          </FadeInSection>
        </div>
      </section>

      <section
        id="quantum-portfolio"
        ref={portfolioSectionRef}
        className="relative z-10 flex min-h-screen w-full flex-col justify-center border-t border-slate-700/35 bg-gradient-to-br from-[#171717] via-[#0d0d0d] to-[#080808] px-5 py-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] sm:px-6 lg:sticky lg:top-0 lg:h-screen lg:py-0">
        <div className="mx-auto w-full max-w-7xl">
          <FadeInSection>
            <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
              Products
            </p>
            <h2 className="mb-4 text-center text-4xl font-medium tracking-tighter text-[#f8f8f8] md:text-5xl">
              Quantum Product Portfolio.
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-center text-sm font-light leading-7 text-slate-400 md:text-base">
              Designed for developers, researchers, and enterprises. Complex
              quantum mechanics packaged into elegant, scalable software.
            </p>
          </FadeInSection>

          <div className="grid gap-5 md:grid-cols-3">
            {productPortfolio.map((item, index) => (
              <ProductInfographicCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 flex min-h-screen w-full flex-col justify-center border-t border-slate-700/35 bg-gradient-to-br from-[#080808] via-[#0b0b0b] to-[#171717] px-5 py-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] sm:px-6 lg:sticky lg:top-0 lg:h-screen lg:py-0">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="w-full flex-1 lg:pr-10">
            <FadeInSection>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                Solutions
              </p>
              <h2 className="mb-6 text-4xl font-medium leading-[1.1] tracking-tighter text-[#f8f8f8] md:text-6xl">
                Quantum Solutions Portfolio.
              </h2>
              <p className="mb-8 max-w-md text-base font-light leading-8 text-slate-300 md:text-lg">
                Industry-specific solution gates designed to cut through
                operational complexity without overloading the homepage.
              </p>
            </FadeInSection>

            <div className="space-y-4">
              {solutionPortfolio.map((item, index) => (
                <SolutionLine key={item.title} item={item} index={index} />
              ))}
            </div>

            <FadeInSection delay={420}>
              <Link
                to="/solutions"
                className="mt-9 inline-flex items-center gap-2 rounded-full border border-slate-700/45 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition-colors hover:border-white/30 hover:text-[#f8f8f8]"
              >
                Open solutions page <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </FadeInSection>
          </div>

          <div className="w-full flex-1">
            <CircularSolutionInfographic />
          </div>
        </div>
      </section>

      <section className="relative z-30 flex min-h-screen w-full flex-col justify-center border-t border-slate-700/35 bg-gradient-to-br from-[#080808] via-[#0b0b0b] to-[#171717] px-5 py-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] sm:px-6 lg:sticky lg:top-0 lg:h-screen lg:py-0">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <FadeInSection>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
              Website Gateways
            </p>
            <h2 className="mb-6 text-4xl font-medium leading-[1.05] tracking-tighter text-[#f8f8f8] md:text-6xl">
              Doors into the full Quinfosys system.
            </h2>
            <p className="max-w-md text-base font-light leading-8 text-slate-300">
              The homepage stays light. Each main page opens into its own
              expandable in-page sections during later redesign iterations.
            </p>
          </FadeInSection>

          <div className="grid gap-5 md:grid-cols-3">
            {gatewayGroups.map((group, index) => (
              <FadeInSection
                key={group.title}
                delay={index * 120}
                className="h-full"
              >
                <Link
                  to={group.href}
                  className="group flex h-full flex-col rounded-[1.8rem] border border-white/[0.07] bg-[#141414]/68 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-500/45 hover:bg-[#1c1c1c]/70"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.055] text-slate-300 transition-colors group-hover:bg-white/[0.09] group-hover:text-[#f8f8f8]">
                    {group.icon}
                  </div>
                  <h3 className="mb-5 text-xl font-medium tracking-tight text-[#f8f8f8]">
                    {group.title}
                  </h3>
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between border-b border-white/[0.07] pb-2 text-sm font-light text-slate-400"
                      >
                        <span>{item}</span>
                        <span className="text-slate-600">+</span>
                      </div>
                    ))}
                  </div>
                  <span className="mt-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 transition-colors group-hover:text-slate-300">
                    Open page{" "}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-40 flex min-h-screen w-full flex-col justify-between border-t border-slate-200/80 bg-[#f7f7f7] text-[#171717] shadow-[0_-20px_50px_rgba(0,0,0,0.35)] lg:sticky lg:top-0 lg:h-screen">
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
          <FadeInSection>
            <h2 className="mb-6 text-5xl font-medium tracking-tighter md:text-7xl">
              The future is here.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl font-light tracking-tight text-slate-600">
              Navigate through products, solutions, services, research, and
              resources without overloading the homepage.
            </p>
            <a
              href={mailToSales}
              className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#171717] px-8 py-4 text-sm font-medium tracking-wide text-[#f8f8f8] shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              Contact Enterprise Sales <ChevronRight className="h-4 w-4" />
            </a>
          </FadeInSection>
        </div>

        <Footer />
        <div className="sr-only">{company.brand}</div>
      </section>
    </div>
  );
}
