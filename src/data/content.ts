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
  tagline: 'Entangle with Quinfosys™',
  address: 'T-Hub, 7th Floor, Hyderabad Knowledge City, Hyderabad, Telangana, India - 500081',
  email: 'info@quinfosys.com',
  phone: '+91 9059237828',
};

export const navigation: NavItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'Research', href: '/research-development' },
  { label: 'Resources', href: '/resources' },
  { label: 'Company', href: '/company' },
];

export const products: ContentItem[] = [
  {
    id: 'qucpl',
    title: 'QuCPL',
    eyebrow: 'Beta product',
    description: 'Domain-specific language designed for quantum algorithm development, offering intuitive syntax, strong typing, and interoperability with classical code.',
    bullets: ['Intuitive quantum syntax', 'First-class support for qubit operations', 'Quantum-classical interoperability', 'Built-in simulator and debugger'],
  },
  {
    id: 'qcs',
    title: 'Quantum Cloud Services (QCS)',
    eyebrow: 'Beta product',
    description: 'Scalable, on-demand cloud infrastructure enabling businesses to run quantum workloads with low latency and secure access to quantum hardware.',
    bullets: ['Elastic quantum compute environment', 'Hybrid classical-quantum pipelines', 'Integrated resource management', 'Security and compliance built in'],
  },
  {
    id: 'qws',
    title: 'Quantum Web Services (QWS)',
    eyebrow: 'Beta product',
    description: 'Web-based APIs and services for accessing quantum computing capabilities from existing enterprise applications.',
    bullets: ['RESTful APIs for quantum execution', 'Quantum microservices architecture', 'Cross-platform compatibility', 'Real-time processing results'],
  },
];

export const solutions: ContentItem[] = [
  { id: 'enterprise-strategy', title: 'Enterprise Quantum Strategy', description: 'Comprehensive quantum roadmaps tailored to enterprise challenges and current systems.' },
  { id: 'optimization', title: 'Quantum Optimization', description: 'Quantum-powered approaches for logistics, allocation, scheduling, and operational decision systems.' },
  { id: 'analytics', title: 'Quantum Analytics', description: 'Advanced analytics using quantum algorithms for deeper insights, forecasting, and decision intelligence.' },
  { id: 'security', title: 'Quantum-Enhanced Security', description: 'Quantum-resistant encryption, key distribution, and protocols for future-proof infrastructure.' },
  { id: 'cloud-migration', title: 'Quantum Cloud Migration', description: 'Hybrid adoption strategies that introduce quantum systems without disrupting existing cloud investments.' },
  { id: 'innovation-framework', title: 'Quantum Innovation Framework', description: 'A structured model to prioritize, prototype, and implement high-impact quantum initiatives.' },
];

export const services: ContentItem[] = [
  { id: 'consulting', title: 'Quantum Strategy Consulting', description: 'Expert guidance for quantum technology roadmaps aligned to business objectives.', bullets: ['Use-case discovery', 'Readiness assessment', 'Roadmap planning'] },
  { id: 'implementation', title: 'Quantum Implementation Services', description: 'Deployment and integration support for quantum technologies inside enterprise operations.', bullets: ['System integration', 'Testing and validation', 'Team handover'] },
  { id: 'support', title: 'Support & Maintenance', description: 'Ongoing operational support, maintenance, and optimization for quantum systems.', bullets: ['Monitoring', 'Updates', 'Performance review'] },
  { id: 'training', title: 'Quantum Training & Support', description: 'Training programs and technical support for teams adopting quantum technologies.', bullets: ['Foundational training', 'Developer enablement', 'Leadership orientation'] },
];

export const researchDevelopment: ContentItem[] = [
  { id: 'research-areas', title: 'Research Areas', description: 'Photonic quantum computing, quantum hardware, communication, networks, devices, sensors, algorithms, security, and theory.' },
  { id: 'technologies', title: 'Technologies', description: 'The technologies subsection lives inside Research & Development: quantum computer, hardware, communication, networks, devices, sensors, and quantum AI robotics.' },
  { id: 'research-projects', title: 'Research Projects', description: 'Applied work across quantum error correction, machine learning, communication networks, and sensing platforms.' },
  { id: 'collaborations', title: 'Collaborations', description: 'Academic, institutional, government, and industry collaboration channels.' },
];

export const resources: ContentItem[] = [
  { id: 'docs', title: 'Docs', description: 'Guides, API references, user documentation, and developer onboarding.' },
  { id: 'papers', title: 'Papers', description: 'Technical and strategic papers for quantum adoption and architecture planning.' },
  { id: 'events', title: 'Events', description: 'Upcoming and completed Quinfosys events, conclaves, and community sessions.' },
];

export const companySections: ContentItem[] = [
  { id: 'about', title: 'About Quinfosys', description: 'Quinfosys Private Limited is presented as a Hyderabad-based quantum technologies company focused on products, solutions, services, and R&D.' },
  { id: 'leadership', title: 'Leadership', description: 'Leadership content will be redesigned in a later iteration.' },
  { id: 'careers', title: 'Careers', description: 'Career openings and role descriptions will be refined later.' },
  { id: 'contact', title: 'Contact', description: `${company.email} · ${company.phone}` },
];
