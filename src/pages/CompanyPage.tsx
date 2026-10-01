import {
  ArrowDown,
  ArrowUp,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  FileText,
  Mail,
  Newspaper,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import FadeInSection from "../components/FadeInSection";
import { company } from "../data/content";
import ceoImage from "../assets/company/ceo.jpeg";
import rmitImage from "../assets/company/rmit.png";
import piyushImage from "../assets/company/piyush.png";
import shankarImage from "../assets/company/shankar.png";
import radhikaImage from "../assets/company/radhika.png";
import shaswanthImage from "../assets/company/shaswanth-vemur.jpg";
import quinfocbitImage from "../assets/company/quinfocbit.jpg";
import vrOneImage from "../assets/company/vr1.jpeg";
import vrTwoImage from "../assets/company/vr2.jpeg";
import quantumBgImage from "../assets/company/quantumBG.png";

type Leader = {
  id: number;
  name: string;
  position: string;
  image: string;
  label?: string;
  imagePosition?: string;
};

type NewsItem = {
  imageUrls?: string[];
  imageUrl?: string;
  title: string;
  fullContent: string;
};

type MouItem = {
  name: string;
  newsIndex: number;
};

type CareerParagraph = {
  type: "paragraph";
  content: string;
};

type CareerHeading = {
  type: "heading";
  content: string;
};

type CareerList = {
  type: "list";
  items: string[];
};

type CareerContent = CareerParagraph | CareerHeading | CareerList;

type JobDescription = {
  id: number;
  title: string;
  companyName: string;
  location: string;
  jobType?: string;
  description: CareerContent[];
};

const sectionLinks = [
  { label: "About Quinfosys", href: "#about-us" },
  { label: "Leadership", href: "#leadership" },
  { label: "Vision & Mission", href: "#vision-mission" },
  { label: "Partners", href: "#partners" },
  { label: "Investors", href: "#investors" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const investorItems = [
  {
    title: "Company",
    text: "Quinfosys Private Limited was established in August 2023 and is headquartered in Hyderabad, India.",
  },
  {
    title: "Focus",
    text: "Quantum products, technologies, industry solutions, services, and research for enterprises worldwide.",
  },
  {
    title: "Investor Relations",
    text: `For investor enquiries, write to ${company.email}.`,
  },
];

const contactItems = [
  { title: "Email", text: company.email },
  { title: "Phone", text: company.phone },
  { title: "Address", text: company.address },
];

const values = [
  "Trustworthiness",
  "Agility",
  "Sustainability",
  "Confidentiality",
  "Customer-focus",
  "Honesty",
  "Integrity",
  "Innovation",
  "Excellence",
  "Reliability",
];

const purposeItems = [
  {
    title: "Our Vision",
    text: "To be the foremost global leader in quantum technology, driving innovation and excellence to empower industries and businesses.",
  },
  {
    title: "Our Mission",
    text: "To provide pioneering quantum products and solutions with outstanding service, transforming industries and advancing business success through innovation.",
  },
  {
    title: "Our Commitments",
    text: "To serve the needs of our customers and clients with dedication and professionalism and ensure that deadlines are met without delay.",
  },
];

const leaders: Leader[] = [
  {
    id: 1,
    name: "Dr. Maheswara Rao Valluri",
    position: "Founder & CEO",
    image: ceoImage,
  },
];

const rndTeam: Leader[] = [
  {
    id: 2,
    name: " Dr. Sreenivas Tirumala",
    position: "Quantum AI, RMIT University, Vietnam",
    image: rmitImage,
  },
  {
    id: 3,
    name: "Dr Piyush Dua",
    position: "Material Scientist for Quantum Tech, DBS Global University, Dehradun",
    image: piyushImage,
  },
  {
    id: 4,
    name: "Dr. Shankar Pidishety",
    position: "Expert in Fiber Devices For Quantum, NIT Warangal",
    image: shankarImage,
  },
  {
    id: 5,
    name: "Dr. T S L Radhika",
    position: "Quantum Machine Learning, BITS Pilani",
    image: radhikaImage,
  },
  {
    id: 6,
    name: "Shaswanth Vemuri",
    position: "Researcher in Quantum Physics, McMaster University, Canada",
    image: shaswanthImage,
    label: "Software Developer and Consultant",
    imagePosition: "50% 30%",
  },
];

const newsItems: NewsItem[] = [
  {
    imageUrls: [vrOneImage, vrTwoImage],
    title:
      "Quinfosys™ and VR Siddhartha Engineering College Signed MoU to Establish Centre of Excellence for Quantum Computing",
    fullContent:
      "Hyderabad, November 11, 2024 – Quinfosys™ , a pioneering company in quantum technologies, and Velagapudi Ramakrishna Siddhartha Engineering College (V R Siddhartha College) Deemed to be University have formalized a strategic partnership aimed at creating a state-of-the-art Centre of Excellence (CoE) for Quantum Computing...",
  },
  {
    imageUrl: quinfocbitImage,
    title:
      "Quinfosys Pvt Ltd and CBIT Join Forces to Drive Innovation and Skill Development",
    fullContent:
      "Hyderabad, October 5, 2024 – In a significant move to enhance industry-academia collaboration, Quinfosys Pvt Ltd has signed a Memorandum of Understanding (MOU) with Chaitanya Bharathi Institute of Technology (CBIT)...",
  },
];

const mouData: MouItem[] = [
  {
    name:
      "VR Siddhartha Engineering College (VRSEC) [Deemed to be University], Vijayawada, India",
    newsIndex: 0,
  },
  {
    name: "Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad, India",
    newsIndex: 1,
  },
];

const jobs: JobDescription[] = [
  {
    id: 4,
    title: "Quantum Business Strategist",
    companyName: "Quinfosys™",
    location: "Hyderabad, India",
    description: [
      { type: "heading", content: "Job Overview" },
      {
        type: "paragraph",
        content:
          "Quinfosys™ is seeking a dynamic and visionary Quantum Business Strategist to join our executive team. In this role, you will lead the development and execution of strategic initiatives that integrate quantum computing advancements with business growth. You will serve as the key liaison between our technology experts and market stakeholders, ensuring our quantum solutions deliver tangible value to our clients.",
      },
      { type: "heading", content: "Key Responsibilities" },
      {
        type: "list",
        items: [
          "Strategic Planning: Develop and implement comprehensive business strategies that leverage emerging quantum computing technologies.",
          "Market Analysis: Conduct in-depth market research to identify trends, opportunities, and competitive dynamics in the quantum sector.",
          "Business Modeling: Build robust business cases for quantum initiatives, including financial modeling, risk assessment, and value proposition development.",
          "Cross-Functional Collaboration: Work closely with the CTO, R&D teams, and business units to align quantum strategies with overall corporate objectives.",
          "Partnership Development: Identify and nurture strategic partnerships with industry leaders, academic institutions, and technology innovators.",
          "Thought Leadership: Represent Quinfosys™ at industry events, conferences, and forums, and contribute to thought leadership through whitepapers, blogs, and public speaking.",
          "Go-to-Market Strategies: Design and execute effective go-to-market plans for quantum products and services.",
        ],
      },
      { type: "heading", content: "Qualifications" },
      {
        type: "list",
        items: [
          "Bachelor’s or Master’s degree in Business, Engineering, Computer Science, or a related field; an MBA or advanced degree is highly preferred.",
          "Preference will be given to graduates from IIM (Indian Institutes of Management) or IIT (Indian Institutes of Technology).",
          "A deep understanding of quantum computing principles and the broader IT landscape.",
          "Proven experience in strategic planning, market analysis, or business development within a technology-driven environment.",
          "Strong analytical and financial modeling skills, with the ability to translate complex technical concepts into clear business strategies.",
          "Excellent communication and leadership skills, with a track record of successful cross-functional collaboration.",
          "A passion for innovation and a proactive approach to navigating emerging technologies.",
        ],
      },
      { type: "heading", content: "What We Offer" },
      {
        type: "list",
        items: [
          "Competitive salary and comprehensive benefits package.",
          "An opportunity to work at the forefront of quantum computing and IT innovation.",
          "A collaborative, dynamic, and inclusive work environment.",
          "Professional development and career growth opportunities.",
          "Flexible work arrangements to promote work-life balance.",
        ],
      },
      { type: "heading", content: "How to Apply" },
      {
        type: "paragraph",
        content:
          "Interested candidates should submit their resume, cover letter, and any relevant portfolio materials to careers@quinfosys.com with the subject line \"Quantum Business Strategist Application – Your Name.\" We look forward to exploring how you can contribute to our groundbreaking journey.",
      },
    ],
  },
  {
    id: 1,
    title: "Quantum Software Engineer",
    companyName: "Quinfosys™",
    location: "Hyderabad, India",
    description: [
      { type: "heading", content: "Job Overview" },
      {
        type: "paragraph",
        content:
          "We are looking for an experienced Quantum Software Engineer with a deep understanding of quantum computing principles and hands-on experience in developing quantum algorithms and software. The ideal candidate will have expertise in quantum programming languages, quantum algorithms, and a solid foundation in classical computing. You will be responsible for designing, implementing, and optimizing quantum algorithms and applications to solve complex problems and advance our quantum computing initiatives.",
      },
      { type: "heading", content: "Key Responsibilities" },
      {
        type: "paragraph",
        content:
          "Quantum Algorithm Development: Design and implement quantum algorithms to solve complex problems in fields such as optimization, cryptography, communication protocols, fintech, and machine learning. Collaborate with research scientists and engineers to develop novel quantum computing techniques and applications. Optimize quantum algorithms for performance and scalability on various quantum hardware platforms.",
      },
      {
        type: "paragraph",
        content:
          "Quantum Software Engineering: Develop and maintain quantum software using quantum programming languages such as Qiskit, Cirq, or Q#. Create and manage quantum software libraries and tools to support the development and execution of quantum algorithms. Test, debug, and optimize quantum software for compatibility with quantum hardware and simulators.",
      },
      {
        type: "paragraph",
        content:
          "Classical Computing Integration: Integrate quantum algorithms with classical computing systems to create hybrid solutions that leverage the strengths of both quantum and classical computing. Develop classical software components that interface with quantum algorithms and manage data exchange between quantum and classical systems.",
      },
      {
        type: "paragraph",
        content:
          "Collaboration and Support: Work closely with cross-functional teams, including quantum researchers, software engineers, and product managers, to gather requirements and deliver effective solutions. Provide technical support and guidance on quantum computing challenges and solutions. Write and maintain comprehensive technical documentation for quantum algorithms, software, and system architecture.",
      },
      { type: "heading", content: "Required Skills and Qualifications" },
      {
        type: "list",
        items: [
          "Bachelor's degree in Computer Science, Physics, Mathematics, or a related field, or equivalent work experience.",
          "Proven experience as a Quantum Software Engineer or in a similar role, with a strong background in quantum computing.",
          "Expertise in quantum programming languages such as Qiskit, Cirq, or Q#.",
          "Solid understanding of quantum computing principles, quantum algorithms, and quantum hardware.",
          "Experience with classical programming languages (e.g., Python, C++, Java) and software development practices.",
          "Familiarity with quantum hardware platforms and simulators.",
          "Strong analytical and problem-solving skills, with the ability to tackle complex computational challenges.",
          "Excellent communication skills and the ability to work effectively in a collaborative environment.",
        ],
      },
      { type: "heading", content: "Preferred Skills" },
      {
        type: "list",
        items: [
          "Advanced degree (Master's or PhD) in a relevant field.",
          "Experience with quantum error correction and fault-tolerant quantum computing.",
          "Knowledge of quantum cryptography and quantum information theory.",
          "Experience with cloud-based quantum computing platforms (e.g., IBM Quantum Experience, Google Quantum AI).",
          "Familiarity with containerization technologies (e.g., Docker) and cloud infrastructure.",
          "Experience with Agile/Scrum methodologies for project management.",
        ],
      },
      { type: "heading", content: "Benefits" },
      {
        type: "paragraph",
        content:
          "Competitive salary and performance-based bonuses. Comprehensive health, dental, and vision insurance. Flexible work hours and remote work options. Professional development opportunities and support for certifications.",
      },
      { type: "heading", content: "How to Apply" },
      {
        type: "paragraph",
        content:
          "Please submit your resume, cover letter, and any relevant research or project portfolio to careers@quinfosys.com with the subject line \"Quantum Software Engineer: Application – Your Name.\" We look forward to your application and hope to welcome you to our team!",
      },
      { type: "heading", content: "Equal Opportunity Employer" },
      {
        type: "paragraph",
        content:
          "Quinfosys is an equal opportunity employer and values diversity in the workplace. We encourage applicants of all backgrounds to apply.",
      },
    ],
  },
];

function CompanySubnav() {
  const mailToInfo = `mailto:${company.email}?subject=${encodeURIComponent("Quinfosys inquiry")}`;

  return (
    <div className="sticky top-16 z-30 border-b border-white/10 bg-[#070707]/88 px-5 py-4 backdrop-blur-2xl sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-center gap-2 overflow-x-auto rounded-full border border-white/[0.08] bg-white/[0.035] p-2 shadow-[0_24px_90px_rgba(0,0,0,0.22)]" aria-label="Company sections">
        {sectionLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 transition-all duration-300 hover:bg-white/[0.07] hover:text-white sm:px-5"
          >
            {item.label}
          </a>
        ))}
        <a
          href={mailToInfo}
          className="shrink-0 rounded-full bg-[#111111] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_55px_rgba(17,17,17,0.25)] transition-transform duration-300 hover:scale-[1.03] sm:px-5"
        >
          {company.email}
        </a>
      </nav>
    </div>
  );
}

function SectionShell({
  id,
  label,
  title,
  children,
  tone = "dark",
  intro,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  tone?: "dark" | "deeper" | "soft";
  intro?: string;
}) {
  const isSoft = tone === "soft";

  return (
    <section
      id={id}
      className={`relative scroll-mt-40 overflow-hidden px-5 py-24 sm:px-6 md:py-32 lg:px-8 ${
        isSoft
          ? "bg-[#101010] text-[#f8f8f8]"
          : tone === "deeper"
            ? "bg-[#070707] text-[#f8f8f8]"
            : "bg-[#0a0a0a] text-[#f8f8f8]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[72rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="absolute -left-48 top-24 h-[28rem] w-[28rem] rounded-full bg-[#111111]/10 blur-3xl" />
        <div className="absolute -right-56 bottom-8 h-[32rem] w-[32rem] rounded-full bg-white/[0.045] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <FadeInSection>
          <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1.618fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-zinc-100/60">
                {label}
              </p>
              <h2 className="max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#f8f8f8] sm:text-5xl md:text-6xl">
                {title}
              </h2>
            </div>
            {intro ? (
              <p className="max-w-md text-sm leading-7 text-slate-400 lg:justify-self-end">
                {intro}
              </p>
            ) : (
              <div className="hidden h-px bg-white/10 lg:block" />
            )}
          </div>
        </FadeInSection>
        {children}
      </div>
    </section>
  );
}

function SmoothRevealPanel({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <div
      className={`grid transition-[grid-template-rows,opacity,margin] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        open ? "mt-7 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <div
          className={`transition-[opacity,transform,filter] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "translate-y-0 opacity-100 blur-0" : "translate-y-5 opacity-0 blur-[2px]"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}



function ValueConstellation() {
  return (
    <FadeInSection delay={260}>
      <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_36px_120px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-7 lg:p-8">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-100/60">Core Values</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">The operating principles underneath the company</h3>
          </div>
          <div className="hidden h-px flex-1 bg-white/10 sm:block" />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {values.map((value, index) => (
            <div
              key={value}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.075] bg-[#141414]/70 px-4 py-4 text-sm font-medium text-slate-200 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-[#1c1c1c]"
              style={{ transitionDelay: `${index * 18}ms` }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(245,245,245,0.16),transparent_38%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-zinc-100" strokeWidth={1.6} />
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}

function AboutPurposePanel({ items = purposeItems }: { items?: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item, index) => (
        <FadeInSection key={item.title} delay={index * 120} className="h-full">
          <div className="group h-full rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_26px_90px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.065]">
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#111111]/24 text-xs font-semibold text-zinc-100">
                0{index + 1}
              </span>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
            <p className="text-sm leading-7 text-slate-400">{item.text}</p>
          </div>
        </FadeInSection>
      ))}
    </div>
  );
}

function AboutInfographic() {
  return (
    <FadeInSection delay={180}>
      <div className="relative min-h-[29rem] overflow-hidden rounded-[2.75rem] border border-white/10 bg-[#0b0b0b]/86 p-6 shadow-[0_44px_140px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,245,245,0.16),transparent_42%)]" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-52 w-52 rounded-full border border-white/10" />

        <div className="relative flex h-full min-h-[25rem] flex-col justify-between">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-100/60">Quantum Direction</p>
            <span className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
              Est. 2023
            </span>
          </div>

          <div className="relative mx-auto my-8 flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-7 rounded-full border border-white/12" />
            <div className="absolute inset-16 rounded-full bg-[#111111]/20 blur-2xl" />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.065] text-center shadow-[0_24px_80px_rgba(17,17,17,0.26)] backdrop-blur-md">
              <span className="text-sm font-semibold leading-5 text-white">Quinfosys™</span>
            </div>

            {[
              { label: "Quantum", pos: "left-1 top-8 sm:left-0 sm:top-8" },
              { label: "Enterprise", pos: "right-1 top-16 sm:right-0 sm:top-16" },
              { label: "Innovation", pos: "bottom-5 left-1/2 -translate-x-1/2 sm:bottom-4" },
            ].map((node, index) => (
              <div
                key={node.label}
                className={`absolute ${node.pos} max-w-[8.5rem] rounded-full border border-white/10 bg-[#070707]/90 px-2.5 py-1.5 text-center text-[9px] font-semibold uppercase leading-none tracking-[0.1em] text-zinc-100 shadow-[0_16px_60px_rgba(0,0,0,0.22)] transition-transform duration-500 hover:scale-105 sm:max-w-none sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.18em]`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {node.label}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-3">
            {[
              { value: "Hyderabad", label: "Headquarters" },
              { value: "Global", label: "Enterprises" },
              { value: "Quantum", label: "Focus" },
            ].map((item) => (
              <div key={item.label} className="min-w-0 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-3">
                <p className="truncate text-sm font-semibold text-white sm:whitespace-normal">{item.value}</p>
                <p className="mt-1 break-words text-[9px] uppercase tracking-[0.1em] text-slate-500 sm:text-[10px] sm:tracking-[0.14em]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

function LeaderCard({ leader, featured = false }: { leader: Leader; featured?: boolean }) {
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.05] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.075] ${
        featured ? "grid gap-7 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:p-8" : "p-5"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,245,245,0.14),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex flex-col items-center text-center sm:items-center">
        <div className={`overflow-hidden rounded-full border border-white/10 bg-[#0b0b0b] shadow-2xl ${featured ? "h-40 w-40" : "h-28 w-28"}`}>
          <img
            src={leader.image}
            alt={leader.name.trim()}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={leader.imagePosition ? { objectPosition: leader.imagePosition } : undefined}
          />
        </div>
      </div>
      <div className={`relative ${featured ? "text-center sm:text-left" : "mt-5 text-center"}`}>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-100/50">
          {leader.label ?? (featured ? "Founder" : "Consultant")}
        </p>
        <h3 className={`${featured ? "text-2xl sm:text-3xl" : "text-lg"} font-semibold tracking-tight text-white`}>
          {leader.name}
        </h3>
        <p className="mt-3 text-sm leading-7 text-zinc-100/70">{leader.position}</p>
      </div>
    </div>
  );
}

function LeadershipConstellation() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.618fr] lg:items-start">
      <FadeInSection delay={120}>
        <div className="lg:sticky lg:top-40">
          <LeaderCard leader={leaders[0]} featured />
          <div className="mt-5 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-slate-400">
            Meet the visionary leaders driving the quantum revolution at Quinfosys™. Our team blends deep expertise in quantum computing, AI, and advanced technologies.
          </div>
        </div>
      </FadeInSection>

      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-12 hidden h-[72%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />
        <FadeInSection delay={160}>
          <div className="mb-7 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
            <h3 className="text-2xl font-semibold text-white">R&D Team Consultants</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Our R&D team is composed of passionate innovators and technologists driving cutting-edge research, product development, and future-focused solutions.
            </p>
          </div>
        </FadeInSection>
        <div className="grid gap-5 sm:grid-cols-2">
          {rndTeam.map((member, index) => (
            <FadeInSection key={member.id} delay={220 + index * 90} className={`h-full ${index % 2 === 1 ? "lg:pt-12" : ""}`}>
              <LeaderCard leader={member} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsContent({ content }: { content: string }) {
  return (
    <div className="space-y-4 text-sm leading-7 text-slate-300">
      {content.split(/(?<=[.!?])\s+/).map((sentence) => (
        <p key={sentence}>{sentence}</p>
      ))}
    </div>
  );
}

function NewsExpansion({ item, open }: { item: NewsItem; open: boolean }) {
  return (
    <SmoothRevealPanel open={open}>
      <div className="space-y-7 border-t border-white/10 pt-7">
        {item.imageUrls && item.imageUrls.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {item.imageUrls.map((image, imageIndex) => (
              <div key={image} className="overflow-hidden rounded-3xl bg-[#070707]">
                <img
                  src={image}
                  alt={`Quinfosys update ${imageIndex + 1}`}
                  loading="eager"
                  className={`h-64 w-full object-cover transition-[opacity,transform,filter] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:h-80 ${
                    open ? "scale-100 opacity-90 blur-0" : "scale-[1.04] opacity-0 blur-sm"
                  }`}
                />
              </div>
            ))}
          </div>
        ) : item.imageUrl ? (
          <div className="overflow-hidden rounded-3xl bg-[#070707]">
            <img
              src={item.imageUrl}
              alt="Quinfosys update"
              loading="eager"
              className={`h-72 w-full object-cover transition-[opacity,transform,filter] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open ? "scale-100 opacity-90 blur-0" : "scale-[1.04] opacity-0 blur-sm"
              }`}
            />
          </div>
        ) : null}
        <NewsContent content={item.fullContent} />
      </div>
    </SmoothRevealPanel>
  );
}

function CareerContentBlock({ content }: { content: CareerContent }) {
  if (content.type === "heading") {
    return <h4 className="pt-3 text-base font-semibold text-white">{content.content}</h4>;
  }

  if (content.type === "list") {
    return (
      <ul className="space-y-3 text-sm leading-7 text-slate-300">
        {content.items.map((item) => (
          <li key={item} className="flex gap-3">
            <Check className="mt-1 h-4 w-4 shrink-0 text-zinc-100" strokeWidth={1.6} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return <p className="text-sm leading-7 text-slate-300">{content.content}</p>;
}

export default function CompanyPage() {
  const [expandedNews, setExpandedNews] = useState<number | null>(null);
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);
  const [partnershipsOpen, setPartnershipsOpen] = useState(false);
  const mailToInfo = `mailto:${company.email}?subject=${encodeURIComponent("Quinfosys inquiry")}`;

  return (
    <div className="relative bg-[#070707] font-sans text-[#f8f8f8] selection:bg-[#f5f5f5] selection:text-[#070707]">
      <CompanySubnav />

      <SectionShell
        id="about-us"
        label="About Quinfosys"
        title="Quinfosys Private Limited"
      >
        <div className="grid gap-12 lg:grid-cols-[1.618fr_1fr] lg:items-stretch lg:gap-18 xl:gap-20">
          <FadeInSection>
            <div className="flex h-full flex-col justify-between rounded-[2.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_40px_140px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8 lg:p-10">
              <div>
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-100/60">
                  Quinfosys™
                </p>
                <p className="text-xl font-light leading-9 text-slate-200 md:text-1xl md:leading-10">
                  Quinfosys Private Limited (Brand Name: Quinfosys™), established in August 2023 and headquartered in Hyderabad, India, is a pioneering provider of cutting-edge quantum technologies for enterprises worldwide. Harnessing the transformative power of quantum computing to drive innovation, efficiency, and competitive advantage across industries.
                </p>
              </div>
              <div className="mt-10 h-px w-full bg-gradient-to-r from-white/25 via-white/10 to-transparent" />
            </div>
          </FadeInSection>

          <AboutInfographic />
        </div>

      </SectionShell>

      <SectionShell
        id="leadership"
        label="Leadership Team"
        title="People behind the Quantum Direction"
        tone="deeper"
        intro="The page keeps leadership simple, readable, and visually balanced while preserving the team information already present in the company content."
      >
        <LeadershipConstellation />
      </SectionShell>

      <SectionShell
        id="vision-mission"
        label="Vision & Mission"
        title="Where Quinfosys is going, and why"
        tone="soft"
      >
        <AboutPurposePanel />

        <div className="mt-10">
          <ValueConstellation />
        </div>
      </SectionShell>

      <SectionShell
        id="partners"
        label="Partners"
        title="MoUs, News, and Partner Updates"
        tone="deeper"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1.618fr] lg:items-start lg:gap-16">
          <div>
            <FadeInSection>
              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_36px_120px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-8">
                <p className="text-lg font-light leading-9 text-slate-300">
                  Quinfosys™ believes that collaboration fuels innovation. Through strategic Memorandums of Understanding (MoUs) with key stakeholders in government, academia, and industry, we are building a dynamic ecosystem that accelerates technological progress, drives cutting-edge research, and promotes innovation in technology development.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={160}>
              <button
                type="button"
                onClick={() => setPartnershipsOpen((value) => !value)}
                className="mt-6 flex w-full items-center justify-between rounded-[2rem] border border-white/10 bg-white/[0.055] px-5 py-4 text-left text-white transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08]"
              >
                <span className="flex items-center gap-3 text-sm font-semibold leading-6">
                  <FileText className="h-5 w-5 shrink-0 text-zinc-100" strokeWidth={1.5} />
                  MoUs: Bridging Government, Academia, and Industry
                </span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-500 ${partnershipsOpen ? "rotate-180" : ""}`} strokeWidth={1.5} />
              </button>
              <SmoothRevealPanel open={partnershipsOpen}>
                <div className="space-y-3">
                  {mouData.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setExpandedNews(item.newsIndex)}
                      className="flex w-full flex-col gap-4 rounded-3xl border border-white/[0.07] bg-[#141414]/70 p-5 text-left transition-all duration-300 hover:border-white/25 hover:bg-[#1c1c1c]/70"
                    >
                      <span className="text-sm font-semibold leading-6 text-white">{item.name}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-100/70">View Details</span>
                    </button>
                  ))}
                </div>
              </SmoothRevealPanel>
            </FadeInSection>
          </div>

          <div className="space-y-6">
            {newsItems.map((item, index) => {
              const open = expandedNews === index;
              return (
                <FadeInSection key={item.title} delay={index * 130}>
                  <article className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_32px_110px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.075] sm:p-6">
                    <div className="grid gap-5 md:grid-cols-[12rem_1fr] md:items-start">
                      <div className="overflow-hidden rounded-[1.5rem] bg-[#070707]">
                        <img
                          src={item.imageUrls?.[0] || item.imageUrl}
                          alt="Quinfosys update preview"
                          loading="eager"
                          className="h-44 w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105 md:h-36"
                        />
                      </div>
                      <div>
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.07] text-zinc-100">
                          <Newspaper className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-semibold leading-8 text-white">{item.title}</h3>
                        {!open && <p className="mt-4 text-sm leading-7 text-slate-400">{item.fullContent.slice(0, 150)}...</p>}
                      </div>
                    </div>

                    <NewsExpansion item={item} open={open} />

                    <button
                      type="button"
                      onClick={() => setExpandedNews(open ? null : index)}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111111] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition-all duration-300 hover:border-white/25 hover:text-white"
                    >
                      {open ? (
                        <>
                          Show Less <ArrowUp className="h-4 w-4" strokeWidth={1.5} />
                        </>
                      ) : (
                        <>
                          Read More <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
                        </>
                      )}
                    </button>
                  </article>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="investors"
        label="Investors"
        title="Investing in the quantum era"
        tone="soft"
      >
        <AboutPurposePanel items={investorItems} />
        <FadeInSection delay={160}>
          <a href={`mailto:${company.email}?subject=${encodeURIComponent("Investor inquiry")}`} className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#111111] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_24px_80px_rgba(17,17,17,0.28)] transition-transform duration-300 hover:scale-[1.03]">
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            Investor inquiries
          </a>
        </FadeInSection>
      </SectionShell>

      <SectionShell id="careers" label="Careers" title="Careers" tone="deeper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.618fr] lg:items-start lg:gap-16">
          <FadeInSection>
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_32px_110px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-8 lg:sticky lg:top-40">
              <div className="overflow-hidden rounded-[1.75rem] bg-[#070707]">
                <img src={quantumBgImage} alt="Quantum technology visual" className="h-64 w-full object-cover opacity-85" />
              </div>
              <a href={mailToInfo} className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#111111] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_24px_80px_rgba(17,17,17,0.28)] transition-transform duration-300 hover:scale-[1.03]">
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                {company.email}
              </a>
            </div>
          </FadeInSection>

          <div className="space-y-6">
            {jobs.map((job, index) => {
              const open = expandedJobId === job.id;
              return (
                <FadeInSection key={job.id} delay={index * 120}>
                  <article className="rounded-[2.25rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_32px_110px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.075] sm:p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.07] text-zinc-100">
                          <BriefcaseBusiness className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-semibold tracking-tight text-white">{job.title}</h3>
                        <div className="mt-5 grid gap-3 text-sm text-slate-400 md:grid-cols-3">
                          <p><span className="font-medium text-slate-200">Company:</span> {job.companyName}</p>
                          <p><span className="font-medium text-slate-200">Location:</span> {job.location}</p>
                          <p><span className="font-medium text-slate-200">Job Type:</span> {job.jobType || "Full-Time"}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setExpandedJobId(open ? null : job.id)}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-[#111111] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition-all duration-300 hover:border-white/25 hover:text-white"
                      >
                        {open ? "Show Less" : "Read More"}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-500 ${open ? "rotate-180" : ""}`} strokeWidth={1.5} />
                      </button>
                    </div>

                    <SmoothRevealPanel open={open}>
                      <div className="space-y-5 border-t border-white/10 pt-8">
                        {job.description.map((content, contentIndex) => (
                          <CareerContentBlock key={`${job.id}-${contentIndex}`} content={content} />
                        ))}
                        <div className="pt-3">
                          <a href={`mailto:careers@quinfosys.com?subject=${encodeURIComponent(`${job.title}: Application`)}`} className="inline-flex items-center gap-2 rounded-full border border-[#111111]/20 bg-[#111111] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_20px_60px_rgba(17,17,17,0.24)] transition-transform duration-300 hover:scale-105">
                            Apply Now <ArrowDown className="h-4 w-4 -rotate-90" strokeWidth={1.5} />
                          </a>
                        </div>
                      </div>
                    </SmoothRevealPanel>
                  </article>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="contact"
        label="Contact"
        title="Get in touch with Quinfosys"
        tone="soft"
      >
        <AboutPurposePanel items={contactItems} />
        <FadeInSection delay={160}>
          <a href={mailToInfo} className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#111111] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_24px_80px_rgba(17,17,17,0.28)] transition-transform duration-300 hover:scale-[1.03]">
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            {company.email}
          </a>
        </FadeInSection>
      </SectionShell>

      <div className="sr-only">
        <Sparkles />
      </div>
    </div>
  );
}
