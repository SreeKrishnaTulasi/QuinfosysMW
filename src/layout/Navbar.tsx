import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { company, navigation } from '../data/content';

const contactHref = `mailto:${company.email}?subject=${encodeURIComponent('Quinfosys inquiry')}`;
const contactNeutral = '#111111';
const displayNavigation = navigation.map((item) =>
  item.href === '/research-development' ? { ...item, label: 'Research' } : item
);
const mobileNavigation = [{ label: 'Home', href: '/' }, ...displayNavigation];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-[90] border-b border-black/10 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-6">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Go to Quinfosys homepage"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img src={logo} alt="Quinfosys" className="h-8 w-auto sm:h-9" />
          </Link>

          <div className="hidden items-center gap-8 text-[13px] font-semibold tracking-wide text-zinc-500 lg:flex">
            {displayNavigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `transition-colors duration-200 hover:text-black ${isActive ? 'text-black' : 'text-zinc-500'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <a
            href={contactHref}
            className="hidden rounded-full px-5 py-2 text-[13px] font-semibold text-white shadow-[0_18px_45px_rgba(17,17,17,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(17,17,17,0.34)] lg:block"
            style={{ backgroundColor: contactNeutral }}
          >
            Contact
          </a>

          <button
            className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition-[background-color,border-color,transform,box-shadow] duration-300 active:scale-95 lg:hidden"
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            type="button"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="grid place-items-center transition-transform duration-300 ease-out">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation-menu"
        className={`fixed inset-x-0 bottom-0 top-16 z-[80] lg:hidden ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-300 ease-out ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(17,17,17,0.10),transparent_38%),linear-gradient(180deg,#ffffff_0%,#fafafa_100%)] transition-opacity duration-500 ease-out ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="relative h-full overflow-y-auto overscroll-contain px-5 pt-5 pb-[calc(env(safe-area-inset-bottom)+1.25rem)]">
          <div
            className={`mx-auto flex min-h-full w-full max-w-[28rem] flex-col transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
            }`}
          >
            <div className="space-y-2.5 pt-1">
              {mobileNavigation.map((item, index) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `group flex items-center justify-between rounded-2xl border px-5 py-4 text-[15px] font-semibold tracking-wide shadow-sm transition-[opacity,transform,border-color,background-color,color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                    } ${
                      isActive
                        ? 'border-[#111111]/30 bg-[#111111] text-white shadow-[0_18px_44px_rgba(17,17,17,0.22)]'
                        : 'border-slate-200 bg-white/90 text-slate-700 hover:border-[#111111]/25 hover:bg-white hover:text-[#111111] hover:shadow-[0_16px_38px_rgba(15,23,42,0.08)]'
                    }`
                  }
                  style={{ transitionDelay: mobileMenuOpen ? `${70 + index * 34}ms` : '0ms' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="text-lg leading-none opacity-45 transition-transform duration-300 group-hover:translate-x-0.5">›</span>
                </NavLink>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <a
                href={contactHref}
                className={`block rounded-full px-5 py-4 text-center text-sm font-semibold tracking-wide text-white shadow-[0_22px_55px_rgba(17,17,17,0.24)] transition-[opacity,transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] ${
                  mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
                style={{ backgroundColor: contactNeutral, transitionDelay: mobileMenuOpen ? '330ms' : '0ms' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <p className="mt-4 text-center text-xs font-medium text-slate-400">{company.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
