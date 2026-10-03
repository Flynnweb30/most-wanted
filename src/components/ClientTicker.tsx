import React from 'react';

export default function ClientTicker() {
  const localBusinesses = [
    { name: 'BEACON DENTAL SPECIALISTS', city: 'Austin, TX', impact: '#1 Google 3-Pack' },
    { name: 'PRESTIGE ARCHITECTURAL HOMES', city: 'Denver, CO', impact: '+240% Inbound Consults' },
    { name: 'VANGUARD LITIGATION GROUP', city: 'Chicago, IL', impact: '24/7 Lead Text-Back' },
    { name: 'SUMMIT HEALTH & REHAB', city: 'Phoenix, AZ', impact: 'Sub-0.4s Mobile Site' },
    { name: 'CASCADE MECHANICAL & HVAC', city: 'Seattle, WA', impact: '100% Territory Exclusivity' },
    { name: 'STERLING CAPITAL ADVISORS', city: 'Charlotte, NC', impact: 'Top 3 Map Ranking' },
  ];

  return (
    <section className="py-7 bg-white border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-900 font-extrabold">
                Trusted by Local Leaders
              </span>
              <span className="text-[10px] font-mono text-zinc-500">
                Across 28+ Major U.S. Metro Markets
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-8 min-w-max text-xs font-mono">
              {localBusinesses.map((b) => (
                <div key={b.name} className="flex items-center gap-2.5 py-1">
                  <span className="font-extrabold text-black tracking-tight">{b.name}</span>
                  <span className="text-zinc-400">·</span>
                  <span className="text-zinc-500 font-medium">{b.city}</span>
                  <span className="bg-zinc-100 text-zinc-800 text-[10px] px-2 py-0.5 border border-zinc-200 font-bold">
                    {b.impact}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
