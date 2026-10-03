import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export type PageRoute = 'home' | 'about' | 'services' | 'portfolio' | 'resources' | 'contact';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, anchor?: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute; anchor?: string }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Portfolio', route: 'portfolio' },
    { label: 'Resources', route: 'resources' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleLinkClick = (route: PageRoute, anchor?: string) => {
    setMobileMenuOpen(false);
    onNavigate(route, anchor);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3.5 shadow-sm'
          : 'bg-white border-b border-zinc-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single Brand Wordmark Element with Authentic Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2 group transition-transform duration-200 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          aria-label="Most Wanted Digital Agency Home"
        >
          <Logo size="md" variant="dark" showWordmark={true} />
        </button>

        {/* Zone 2: Navigation Links (Clean Single-Line Sitemap Controls) */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8 text-xs uppercase tracking-widest font-bold text-zinc-600"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.route;
            return (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.route, link.anchor)}
                className={`py-1 cursor-pointer transition-colors relative ${
                  isActive
                    ? 'text-black font-extrabold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black'
                    : 'hover:text-black after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all after:duration-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action - Natural & Professional CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 text-[11px] font-mono text-zinc-600 bg-zinc-100 px-2.5 py-1 border border-zinc-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-zinc-800">“Whatever your ‘Most Wanted,’ we’ve got you covered.”</span>
          </div>

          <button
            onClick={() => handleLinkClick('contact')}
            className="px-5 py-2.5 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow active:scale-95"
          >
            <span>Check Availability</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger & Quick CTA */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => handleLinkClick('contact')}
            className="px-3 py-1.5 bg-black text-white text-[11px] font-bold uppercase tracking-wider"
          >
            Inquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pb-4 border-b border-zinc-100">
            {navLinks.map((link) => {
              const isActive = currentPage === link.route;
              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.route, link.anchor)}
                  className={`text-left text-sm uppercase tracking-wider py-1.5 cursor-pointer flex items-center justify-between ${
                    isActive ? 'font-black text-black' : 'font-medium text-zinc-600 hover:text-black'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Available for Sprints</span>
            </div>
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3.5 bg-black text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
