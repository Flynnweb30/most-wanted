import React from 'react';
import Logo from './Logo';
import heroImage from '../assets/images/local_business_hero_1790992271022.jpg';
import { ArrowUpRight, Globe, Search, Megaphone, Mail, PhoneCall, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigateToContact: () => void;
  onExploreCapabilities: () => void;
}

export default function Hero({ onNavigateToContact, onExploreCapabilities }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-black text-white border-b border-zinc-800">
      {/* Subtle Ambient Backing Light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-900/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Bold Typography, Attention-Grabbing Hook & Full-Funnel Proposition (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Prestigious Eyebrow Lockup */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Logo size="md" variant="light" showWordmark={false} />
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
                  <span className="font-extrabold text-white">MOST WANTED</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-zinc-300">FULL-FUNNEL DIGITAL MARKETING & GROWTH</span>
                </div>
              </div>

              {/* Attention-Grabbing Signature Hook */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-zinc-900 border border-zinc-700/80 mb-6 text-xs sm:text-sm font-mono text-zinc-200 shadow-sm">
                <Sparkles className="w-4 h-4 text-white shrink-0" />
                <span className="font-bold tracking-wide">
                  “Whatever your ‘Most Wanted,’ we’ve got you covered.”
                </span>
              </div>

              {/* Bold Original Display Headline */}
              <div className="relative mb-6">
                <h1 className="text-5xl sm:text-7xl lg:text-[84px] leading-[0.93] font-black uppercase tracking-tighter font-display italic text-white">
                  WE MAKE BRANDS <br />
                  IMPOSSIBLE TO <br />
                  <span className="text-white underline decoration-zinc-600 decoration-4 underline-offset-8">
                    IGNORE.
                  </span>
                </h1>
              </div>

              {/* Value Proposition Tailored Specifically to U.S. Local Business Owners (No Pricing Mentioned) */}
              <p className="text-base sm:text-lg font-normal text-zinc-300 max-w-2xl mb-8 border-l-2 border-white pl-5 leading-relaxed">
                From high-converting web design and dominant search engine rankings to targeted paid advertising (Facebook & Google Ads), automated lead generation, email retention, and 24/7 AI lead capture—we engineer complete marketing solutions that consistently drive high-value clients to your business.
              </p>

              {/* Natural, Non-Salesy CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={onNavigateToContact}
                  className="px-8 py-4 bg-white hover:bg-zinc-200 text-black text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer active:scale-95 group"
                >
                  <span>Check Territory Availability</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
                </button>

                <button
                  onClick={onExploreCapabilities}
                  className="px-6 py-4 bg-transparent hover:bg-zinc-900 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-zinc-700 hover:border-zinc-400 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore All Services</span>
                </button>
              </div>
            </div>

            {/* Bottom Proof Metrics (No Pricing) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-zinc-800">
              <div className="bg-zinc-950/80 p-4 sm:p-5 border border-zinc-800">
                <div className="text-3xl lg:text-4xl font-black text-white italic font-display tabular-nums">
                  +340%
                </div>
                <div className="text-[11px] uppercase tracking-wider font-bold text-zinc-400 mt-1">
                  Average Client Revenue Growth
                </div>
              </div>

              <div className="bg-zinc-950/80 p-4 sm:p-5 border border-zinc-800">
                <div className="text-3xl lg:text-4xl font-black text-white italic font-display tabular-nums">
                  98.2%
                </div>
                <div className="text-[11px] uppercase tracking-wider font-bold text-zinc-400 mt-1">
                  Client Retention Rate
                </div>
              </div>

              <div className="bg-zinc-950/80 p-4 sm:p-5 border border-zinc-800">
                <div className="text-3xl lg:text-4xl font-black text-white italic font-display tabular-nums">
                  120+
                </div>
                <div className="text-[11px] uppercase tracking-wider font-bold text-zinc-400 mt-1">
                  Growth Systems Deployed
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card with Full Marketing Capabilities (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Visual Card with Realistic Photography */}
            <div className="bg-zinc-950 border border-zinc-800 p-6 flex-1 flex flex-col justify-between relative overflow-hidden group shadow-lg">
              {/* Studio & Growth Visual */}
              <div className="relative h-56 sm:h-64 -mx-6 -mt-6 mb-5 overflow-hidden border-b border-zinc-800 bg-zinc-900">
                <img
                  src={heroImage}
                  alt="Modern American business studio and client consultation room"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm border border-zinc-700 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-200 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Exclusive Territory Partnerships
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
                    Full-Funnel Capabilities
                  </h4>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">Integrated Stack</span>
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-center border-b border-zinc-800/80 pb-2">
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-zinc-300" />
                      <span className="text-xs font-medium text-zinc-200">Custom Web Design & CRO</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 font-semibold">Sub-0.4s Speed</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-zinc-800/80 pb-2">
                    <div className="flex items-center gap-2.5">
                      <Search className="w-4 h-4 text-zinc-300" />
                      <span className="text-xs font-medium text-zinc-200">Search Engine Optimization (SEO)</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 font-semibold">Google 3-Pack</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-zinc-800/80 pb-2">
                    <div className="flex items-center gap-2.5">
                      <Megaphone className="w-4 h-4 text-zinc-300" />
                      <span className="text-xs font-medium text-zinc-200">Targeted Paid Ads (Meta & Google)</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 font-semibold">High-ROI Leads</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-zinc-800/80 pb-2">
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-zinc-300" />
                      <span className="text-xs font-medium text-zinc-200">Email Marketing & Retention</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 font-semibold">Automated Flows</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                      <PhoneCall className="w-4 h-4 text-zinc-300" />
                      <span className="text-xs font-medium text-zinc-200">24/7 AI Missed-Call Lead Capture</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 font-semibold">&lt; 15s Text-Back</span>
                  </div>
                </div>
              </div>

              {/* Footnote */}
              <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>1 Partner Per Category / Territory</span>
                <button
                  onClick={onNavigateToContact}
                  className="text-white hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
