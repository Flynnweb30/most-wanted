import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { AboutPage, ContactPage, FAQPage, HomePage, ResultsPage, ServicesPage } from './site';

export type PageKey = 'home' | 'services' | 'about' | 'results' | 'faq' | 'contact';

function getPage(): PageKey {
  const raw = document.body.dataset.page as PageKey | undefined;
  return raw && ['home','services','about','results','faq','contact'].includes(raw) ? raw : 'home';
}

function App() {
  const [page, setPage] = useState<PageKey>(getPage);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const navigate = (href: string) => {
    setMenuOpen(false);
    window.location.href = href;
  };

  const props = { onNavigate: navigate, menuOpen, setMenuOpen };

  return (
    <div className="site-shell">
      <Header {...props} />
      <main id="main-content">
        {page === 'home' && <HomePage onNavigate={navigate} />}
        {page === 'services' && <ServicesPage onNavigate={navigate} />}
        {page === 'about' && <AboutPage onNavigate={navigate} />}
        {page === 'results' && <ResultsPage onNavigate={navigate} />}
        {page === 'faq' && <FAQPage onNavigate={navigate} />}
        {page === 'contact' && <ContactPage onNavigate={navigate} />}
      </main>
      <Footer onNavigate={navigate} />
      <a className="floating-cta" href="/contact/" aria-label="Book a free growth review">Start a growth review <ArrowIcon /></a>
    </div>
  );
}

function Header({ onNavigate, menuOpen, setMenuOpen }: { onNavigate: (href: string) => void; menuOpen: boolean; setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const links = [['Services','/services/'],['Results','/results/'],['About','/about/'],['FAQ','/faq/']];
  return <header className="site-header">
    <div className="container nav-wrap">
      <a className="brand" href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} aria-label="Most Wanted home">
        <img src="/most-wanted-logo.png" alt="Most Wanted" width="134" height="50" />
      </a>
      <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={(e) => { e.preventDefault(); onNavigate(href); }}>{label}</a>)}
        <a className="nav-cta" href="/contact/" onClick={(e) => { e.preventDefault(); onNavigate('/contact/'); }}>Book a free review <ArrowIcon /></a>
      </nav>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
        <span></span><span></span>
      </button>
    </div>
  </header>;
}

function Footer({ onNavigate }: { onNavigate: (href: string) => void }) {
  const go = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); onNavigate(href); };
  return <footer className="site-footer">
    <div className="container footer-top">
      <div className="footer-brand">
        <img src="/most-wanted-logo.png" alt="Most Wanted" width="134" height="50" />
        <p>Digital marketing for local businesses that want more of the right customers — and a clearer view of what is driving them.</p>
      </div>
      <div className="footer-col"><h3>Explore</h3><a href="/services/" onClick={go('/services/')}>Services</a><a href="/results/" onClick={go('/results/')}>Results</a><a href="/about/" onClick={go('/about/')}>About</a><a href="/faq/" onClick={go('/faq/')}>FAQ</a></div>
      <div className="footer-col"><h3>Work with us</h3><a href="/contact/" onClick={go('/contact/')}>Free growth review</a><a href="mailto:support@getmostwanted.com">support@getmostwanted.com</a><span>Websites · SEO · Paid Ads · Lead Systems</span></div>
      <div className="footer-note"><span>Built for business owners.</span><strong>Measured by opportunities.</strong></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Most Wanted. All rights reserved.</span><span>Privacy-friendly · Accessibility-minded · Static-host ready</span></div>
  </footer>;
}

function ArrowIcon() { return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M5 3h8v8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>; }

createRoot(document.getElementById('root')!).render(<App />);
