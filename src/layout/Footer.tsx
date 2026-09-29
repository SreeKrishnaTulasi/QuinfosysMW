import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { company, navigation } from '../data/content';

type IconProps = { size?: number; className?: string };

function LinkedInIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.35 8.05h4.3V23H.35V8.05zM7.55 8.05h4.12v2.04h.06c.57-1.08 1.98-2.22 4.07-2.22 4.35 0 5.15 2.86 5.15 6.58V23h-4.3v-7.58c0-1.81-.03-4.13-2.52-4.13-2.52 0-2.9 1.96-2.9 3.99V23H7.55V8.05z" />
    </svg>
  );
}

function YouTubeIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.5 3.57 12 3.57 12 3.57s-7.5 0-9.38.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.13c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3 3 0 0 0 2.12-2.13A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    </svg>
  );
}

function XIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.9 2h3.38l-7.38 8.43L23.58 22h-6.8l-5.32-6.96L5.37 22H2l7.9-9.03L1.58 2h6.97l4.81 6.36L18.9 2zm-1.19 17.96h1.87L7.53 3.93H5.52l12.19 16.03z" />
    </svg>
  );
}

function InstagramIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 8.5V6.7c0-.86.57-1.06.97-1.06h2.47V1.82L14.04 1.8c-3.78 0-4.64 2.83-4.64 4.64V8.5H6.5v4.3h2.9V23h4.6V12.8h3.43l.16-1.69.26-2.61H14z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/quinfosys',
    icon: LinkedInIcon,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@quinfosys',
    icon: YouTubeIcon,
  },
  {
    label: 'X',
    href: 'https://twitter.com/quinfosys2023',
    icon: XIcon,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/quinfosys',
    icon: InstagramIcon,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/quinfosys',
    icon: FacebookIcon,
  },
];

const legalLinks = [
  { label: 'Privacy Policy', href: 'https://quinfosys.com/privacy-policy' },
  { label: 'Terms and conditions', href: 'https://quinfosys.com/terms-of-service' },
  { label: 'Cookie Policy', href: 'https://qns.quinfosys.com/#' },
  { label: 'Refunds / Cancellations', href: 'https://qns.quinfosys.com/#' },
  { label: 'Shipping Policy', href: 'https://qns.quinfosys.com/#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white px-6 py-12 text-slate-700">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-2xl">
          <Link to="/" aria-label="Go to Quinfosys homepage" className="inline-flex">
            <img src={logo} alt="Quinfosys" className="h-10 w-auto" />
          </Link>

          <p className="mt-5 text-sm font-semibold startcase tracking-[0.24em] text-[#111111]">
            {company.tagline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Enterprise quantum products, solutions, services, research, and resources for organizations preparing for the next era of computing.
          </p>

          <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <a href={`mailto:${company.email}?subject=${encodeURIComponent('Quinfosys inquiry')}`} className="group flex items-center gap-3 transition-colors hover:text-[#111111]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#111111] transition-colors group-hover:border-[#111111]/40 group-hover:bg-[#111111]/5">
                <Mail size={16} />
              </span>
              {company.email}
            </a>
            <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="group flex items-center gap-3 transition-colors hover:text-[#111111]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#111111] transition-colors group-hover:border-[#111111]/40 group-hover:bg-[#111111]/5">
                <Phone size={16} />
              </span>
              {company.phone}
            </a>
            <p className="flex items-start gap-3 sm:col-span-2">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#111111]">
                <MapPin size={16} />
              </span>
              <span className="leading-6">{company.address}</span>
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Quinfosys on ${label}`}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-[0_14px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#111111]/45 hover:bg-[#111111] hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Navigation</h3>
            <div className="mt-5 grid gap-3 text-sm text-slate-600">
              {navigation.map((item) => (
                <Link key={item.href} to={item.href} className="transition-colors hover:text-[#111111]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Legal</h3>
            <div className="mt-5 grid gap-3 text-sm text-slate-600">
              {legalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#111111]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {company.legalName}. All rights reserved.</p>
        <p>Quinfosys - Entangle with Quantum</p>
      </div>
    </footer>
  );
}
