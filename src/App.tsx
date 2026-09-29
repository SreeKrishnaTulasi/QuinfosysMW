import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageShell from './layout/PageShell';
import CompanyPage from './pages/CompanyPage';
import Home from './pages/Home';
import IndustriesPage from './pages/IndustriesPage';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ProductsPage from './pages/ProductsPage';
import ResearchDevelopmentPage from './pages/ResearchDevelopmentPage';
import ResourcesPage from './pages/ResourcesPage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';

function RoutedPage({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}

function getRouteTransitionClass(pathname: string) {
  if (pathname === '/') {
    return 'route-home';
  }

  const routeName = pathname.split('/').filter(Boolean)[0] ?? 'page';
  return `route-${routeName.replace(/[^a-z0-9]/gi, '').toLowerCase()}`;
}

type TransitionPhase = 'boot' | 'idle' | 'cover' | 'reveal';

export default function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionPhase, setTransitionPhase] = useState<TransitionPhase>('boot');
  const previousPathnameRef = useRef(location.pathname);

  const routeTransitionClass = getRouteTransitionClass(location.pathname);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [displayLocation.pathname]);

  useEffect(() => {
    if (previousPathnameRef.current === location.pathname) {
      const bootTimer = window.setTimeout(() => {
        setTransitionPhase('idle');
      }, 1000);

      return () => window.clearTimeout(bootTimer);
    }

    previousPathnameRef.current = location.pathname;
    setTransitionPhase('cover');

    const coverTimer = window.setTimeout(() => {
      setDisplayLocation(location);
      setTransitionPhase('reveal');
    }, 280);

    const revealTimer = window.setTimeout(() => {
      setTransitionPhase('idle');
    }, 1250);

    return () => {
      window.clearTimeout(coverTimer);
      window.clearTimeout(revealTimer);
    };
  }, [location]);

  return (
    <div className="quinfosys-route-frame">
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<RoutedPage><ProductsPage /></RoutedPage>} />
        <Route path="/solutions" element={<RoutedPage><SolutionsPage /></RoutedPage>} />
        <Route path="/industries" element={<RoutedPage><IndustriesPage /></RoutedPage>} />
        <Route path="/services" element={<RoutedPage><ServicesPage /></RoutedPage>} />
        <Route path="/research-development" element={<RoutedPage><ResearchDevelopmentPage /></RoutedPage>} />
        <Route path="/resources" element={<RoutedPage><ResourcesPage /></RoutedPage>} />
        <Route path="/company" element={<RoutedPage><CompanyPage /></RoutedPage>} />
        <Route path="/privacy-policy" element={<RoutedPage><PrivacyPolicy /></RoutedPage>} />
        <Route path="/terms-of-service" element={<RoutedPage><TermsOfService /></RoutedPage>} />
        <Route path="*" element={<RoutedPage><NotFound /></RoutedPage>} />
      </Routes>

      {transitionPhase !== 'idle' ? (
        <div
          className={`quinfosys-route-overlay quinfosys-route-overlay-${transitionPhase} ${routeTransitionClass}`}
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
}
