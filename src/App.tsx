import React, { useState, useEffect } from 'react';
import Navbar, { PageRoute } from './components/Navbar';
import Hero from './components/Hero';
import ClientTicker from './components/ClientTicker';
import Services from './components/Services';
import Packages from './components/Packages';
import CaseStudies from './components/CaseStudies';
import GrowthCalculator from './components/GrowthCalculator';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import ResourcesPage from './components/ResourcesPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Parse route from both pathname and hash for seamless SPA routing on Render & local dev
  const parseCurrentRoute = (): PageRoute => {
    if (typeof window === 'undefined') return 'home';
    
    // Check pathname (e.g. /about, /services, /portfolio, /resources, /contact)
    const path = window.location.pathname.replace(/^\//, '').toLowerCase().split('/')[0];
    if (['about', 'services', 'portfolio', 'resources', 'contact'].includes(path)) {
      return path as PageRoute;
    }
    
    // Check hash fallback (e.g. #about, #services, #portfolio, #resources, #contact)
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['about', 'services', 'portfolio', 'resources', 'contact'].includes(hash)) {
      return hash as PageRoute;
    }
    
    return 'home';
  };

  useEffect(() => {
    const handleRouteChange = () => {
      const targetPage = parseCurrentRoute();
      setCurrentPage(targetPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Initialize route on mount
    setCurrentPage(parseCurrentRoute());

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const handleNavigate = (page: PageRoute, anchor?: string) => {
    setCurrentPage(page);

    if (page === 'home') {
      if (anchor) {
        window.location.hash = anchor;
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.history.pushState(null, '', '/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.history.pushState(null, '', `/${page}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateToContactWithService = (serviceName: string) => {
    setPreselectedService(serviceName);
    setCurrentPage('contact');
    window.history.pushState(null, '', '/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-black selection:text-white">
      {/* Universal Top Navigation with Strict 3-Zone Contract */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Multi-Page Content Area */}
      <main className="flex-1">
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigateToContactWithService={handleNavigateToContactWithService}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onNavigateToContactWithContext={handleNavigateToContactWithService}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesPage
            onNavigateToContact={() => handleNavigate('contact')}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onBackToHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
            preselectedService={preselectedService}
          />
        )}

        {currentPage === 'home' && (
          <>
            {/* FIRST SECTION: Black with White Text & Original Display Headline */}
            <Hero
              onNavigateToContact={() => handleNavigate('contact')}
              onExploreCapabilities={() => handleNavigate('services')}
            />

            {/* REST OF THE SITE: Balanced High-Contrast Lighter Palette */}
            <ClientTicker />

            <Services
              onSelectService={handleNavigateToContactWithService}
            />

            <Packages
              onSelectPackage={handleNavigateToContactWithService}
            />

            <CaseStudies
              onNavigateToContact={() => handleNavigate('contact')}
            />

            <GrowthCalculator
              onNavigateToContactWithPackage={handleNavigateToContactWithService}
            />

            <Methodology />

            <Testimonials />

            <FAQ />
          </>
        )}
      </main>

      {/* Universal Architectural Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
