export type NavItem = {
  label: string;
  href: string;
};

export type ContentItem = {
  id: string;
  title: string;
  eyebrow?: string;
  description: string;
  bullets?: string[];
};

export const company = {
  brand: 'Quinfosys™',
  legalName: 'Quinfosys Private Limited',
  tagline: 'Entangle with Quantum',
  address: 'T-Hub, 7th Floor, Hyderabad Knowledge City, Hyderabad, Telangana, India - 500081',
  email: 'info@quinfosys.com',
  phone: '+91 9059237828',
};

export const navigation: NavItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Industries', href: '/industries' },
  { label: 'Services', href: '/services' },
  { label: 'Research', href: '/research' },
  { label: 'Resources', href: '/resources' },
  { label: 'Company', href: '/company' },
];

export const products: ContentItem[] = [
  {
    id: 'qucpl',
    title: 'QuCPL',
    eyebrow: 'Quantum Computing Programming Language',
    description: 'Domain-specific language designed for quantum algorithm development, offering intuitive syntax, strong typing, and interoperability with classical code.',
    bullets: ['Intuitive quantum syntax', 'First-class support for qubit operations', 'Quantum-classical interoperability', 'Built-in simulator and debugger'],
  },
  {
    id: 'qws',
    title: 'QWS',
    eyebrow: 'Quantum Web Services',
    description: 'Web-based APIs and services for accessing quantum computing capabilities from existing enterprise applications.',
    bullets: ['RESTful APIs for quantum execution', 'Quantum microservices architecture', 'Cross-platform compatibility', 'Real-time processing results'],
  },
  {
    id: 'qcs',
    title: 'QCS',
    eyebrow: 'Quantum Computing Services',
    description: 'Scalable, on-demand quantum computing services enabling businesses to run quantum workloads with secure access to quantum computing resources.',
    bullets: ['Elastic quantum compute environment', 'Hybrid classical-quantum pipelines', 'Integrated resource management', 'Security and compliance built in'],
  },
  {
    id: 'qns',
    title: 'QNS',
    eyebrow: 'Quantum Network Simulator',
    description: 'Simulator for modelling, testing, and analysing quantum network protocols, nodes, and links.',
    bullets: ['Quantum network protocol simulation', 'Node and link modelling', 'Hybrid classical-quantum network scenarios', 'Performance analysis and visualization'],
  },
  {
    id: 'qiscode',
    title: 'QisCode',
    eyebrow: 'Quantum IDE',
    description: 'Quantum IDE for designing, simulating, transpiling, and executing quantum programs in one connected workspace.',
    bullets: ['Circuit design and editing', 'Built-in simulation', 'Transpilation across backends', 'Execution management'],
  },
  {
    id: 'qseo',
    title: 'QSEO',
    eyebrow: 'Quantum Search Engine Optimization',
    description: 'Quantum-inspired optimization for search, ranking, and large scale relevance and discovery workloads.',
    bullets: ['Ranking and relevance optimization', 'Large scale discovery workloads', 'Content and keyword optimization', 'Hybrid search infrastructure compatibility'],
  },
];

export const technologies: ContentItem[] = [
  { id: 'quantum-computing', title: 'Quantum Computing', description: 'Circuit models, qubit systems, algorithms, and execution models for quantum computation.' },
  { id: 'quantum-networks', title: 'Quantum Networks', description: 'Distributed quantum systems, protocols, and network level models for future infrastructure.' },
  { id: 'quantum-ai', title: 'Quantum AI', description: 'Quantum enhanced machine learning, pattern recognition, and decision systems.' },
  { id: 'quantum-security', title: 'Quantum Security', description: 'Post quantum cryptography, secure key distribution, and crypto-agility.' },
  { id: 'quantum-sensing', title: 'Quantum Sensing', description: 'Precision measurement and sensing systems built on quantum effects.' },
];

export const industries: ContentItem[] = [
  { id: 'fintech', title: 'Quantum FinTech', description: 'Portfolio modelling, risk analysis, and fraud detection for financial institutions.', bullets: ['B2B'] },
  { id: 'health-intelligence', title: 'Quantum Health Intelligence System', description: 'Quantum enhanced health intelligence for providers, researchers, and individuals.', bullets: ['B2B', 'B2C'] },
  { id: 'drug-discovery', title: 'Quantum Drug Discovery', description: 'Molecular simulation and candidate screening for pharma and life sciences.', bullets: ['B2B', 'B2C'] },
  { id: 'material-discovery', title: 'Quantum Material Discovery', description: 'Material property prediction and discovery through quantum simulation.', bullets: ['B2B'] },
  { id: 'supply-chain', title: 'Quantum Supply Chain', description: 'Quantum optimization for routing, inventory, and logistics planning.', bullets: ['B2B'] },
  { id: 'aerospace-defence', title: 'Quantum Aerospace & Defence', description: 'Quantum capability for aerospace and defence programs.', bullets: ['B2B', 'B2G'] },
  { id: 'energy', title: 'Quantum Energy', description: 'Grid optimization, load forecasting, and energy resource planning.', bullets: ['B2B'] },
];

export const services: ContentItem[] = [
  { id: 'quantum-technology-consulting', title: 'Quantum Technology Consulting', description: 'Expert guidance for quantum technology roadmaps aligned to business objectives.' },
  { id: 'ai-consulting-development', title: 'AI Consulting & Development', description: 'Planning, building, and deploying AI and quantum AI systems.' },
  { id: 'quantum-software-development', title: 'Quantum Software Development', description: 'Quantum algorithms, applications, and tooling connected to classical systems.' },
  { id: 'quantum-hardware-development', title: 'Quantum Hardware Development', description: 'Design and engineering of quantum devices and photonic systems.' },
  { id: 'quantum-network-development', title: 'Quantum Network Development', description: 'Architecture and development of secure, distributed quantum networks.' },
  { id: 'quantum-security-services', title: 'Quantum Security Services', description: 'Post quantum readiness, crypto-agility, and cryptographic transition support.' },
  { id: 'quantum-rd-services', title: 'Quantum R&D Services', description: 'Research and engineering capacity for applied quantum technology problems.' },
  { id: 'training-certification', title: 'Training & Certification', description: 'Training programs and certification for leadership, developers, and domain teams.' },
];

export const researchDevelopment: ContentItem[] = [
  { id: 'research-areas', title: 'Research Areas', description: 'Photonic quantum computing, hardware, communication, networks, sensing, algorithms, security, and theory.' },
  { id: 'research-programs', title: 'Research Programs', description: 'Structured research efforts across error correction, machine learning, networks, and sensing.' },
  { id: 'publications', title: 'Publications', description: 'Articles, journal contributions, and conference outputs.' },
  { id: 'research-papers', title: 'Research Papers', description: 'Full length scientific papers on methods, results, and analysis.' },
  { id: 'patents', title: 'Patents', description: 'Inventions and intellectual property developed by Quinfosys.' },
  { id: 'technical-reports', title: 'Technical Reports', description: 'Design notes, benchmarks, and experiment documentation.' },
  { id: 'research-collaborations', title: 'Research Collaborations', description: 'Academic, institutional, government, and industry collaboration channels.' },
];

export const resources: ContentItem[] = [
  { id: 'documentation', title: 'Documentation', description: 'Guides, references, user documentation, and onboarding.' },
  { id: 'developer-resources', title: 'Developer Resources', description: 'Quick start guides, examples, and tooling notes.' },
  { id: 'api-documentation', title: 'API Documentation', description: 'Endpoint reference and integration notes.' },
  { id: 'technical-papers', title: 'Technical Papers', description: 'Technical writing on architecture, methods, and implementation.' },
  { id: 'whitepapers', title: 'Whitepapers', description: 'Strategic perspectives on quantum adoption and readiness.' },
  { id: 'blog', title: 'Blog', description: 'Articles and commentary from the Quinfosys team.' },
  { id: 'news', title: 'News', description: 'Announcements, partnerships, and milestones.' },
  { id: 'media', title: 'Media', description: 'Press material, brand assets, images, and videos.' },
  { id: 'events', title: 'Events', description: 'Upcoming and completed Quinfosys events, conclaves, and community sessions.' },
  { id: 'case-studies', title: 'Case Studies', description: 'Applied stories describing context, approach, and outcomes.' },
  { id: 'downloads', title: 'Downloads', description: 'Brochures, datasheets, and documents.' },
];

export const companySections: ContentItem[] = [
  { id: 'about', title: 'About Quinfosys', description: 'Quinfosys Private Limited is a Hyderabad-based quantum technologies company.' },
  { id: 'leadership', title: 'Leadership', description: 'The leadership team and advisors behind Quinfosys.' },
  { id: 'vision-mission', title: 'Vision & Mission', description: 'Our vision, mission, commitments, and core values.' },
  { id: 'partners', title: 'Partners', description: 'MoUs, partnerships, and partner updates.' },
  { id: 'investors', title: 'Investors', description: `Investor enquiries: ${company.email}` },
  { id: 'careers', title: 'Careers', description: 'Career openings and role descriptions.' },
  { id: 'contact', title: 'Contact', description: `${company.email} · ${company.phone}` },
];
