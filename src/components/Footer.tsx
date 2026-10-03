import React from 'react';
import Logo from './Logo';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { PageRoute } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageRoute, anchor?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-800 py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Brand Info (Span 4) */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left cursor-pointer"
            >
              <Logo size="lg" variant="light" showWordmark={true} />
            </button>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed font-normal">
              Most Wanted is an elite digital engineering and growth agency. We build high-converting web applications, dominant search engine authority, and autonomous AI operational pipelines for category leaders.
            </p>
            <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Accepting New Engagements</span>
            </div>
          </div>

          {/* Nav Links (Span 8) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
                Sitemap
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                    About Studio
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Services & Offerings
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('portfolio')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Case Studies & Proof
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Resources & Field Notes
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer text-left text-white font-bold">
                    Contact & Inquiry →
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
                Core Disciplines
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Headless Web Engineering
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Search Engine Optimization
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                    AI Business Automation
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Triple Growth Engine
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
                Studio Coordinates
              </h4>
              <ul className="space-y-2.5 text-xs font-mono text-zinc-400">
                <li>New York Studio · 450 Lexington Ave</li>
                <li>London · Shoreditch</li>
                <li>San Francisco · SOMA</li>
                <li className="pt-2 text-white font-semibold">inquiries@mostwantedagency.com</li>
                <li className="text-zinc-500">+1 (212) 555-0198</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-zinc-300 font-semibold">“Whatever your ‘Most Wanted,’ we’ve got you covered.”</span>
            <span className="hidden sm:inline">·</span>
            <span>© {new Date().getFullYear()} Most Wanted Agency LLC.</span>
            <span>·</span>
            <span className="text-zinc-400">Territory Protected</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('contact')}
              className="text-white hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Check Your City</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
