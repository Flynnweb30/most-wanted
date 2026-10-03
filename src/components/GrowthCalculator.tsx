import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, PhoneCall, Calendar, MapPin, Calculator } from 'lucide-react';

interface GrowthCalculatorProps {
  onNavigateToContactWithPackage: (pkg: string) => void;
}

export default function GrowthCalculator({ onNavigateToContactWithPackage }: GrowthCalculatorProps) {
  const [ticketValue, setTicketValue] = useState<number>(1500);
  const [currentCalls, setCurrentCalls] = useState<number>(30);
  const [selectedFocus, setSelectedFocus] = useState<'all' | 'missed_calls' | 'maps_rank' | 'website'>('all');

  // Realistic local business calculations:
  // - Missed calls recovered: ~25% of inbound calls are missed after hours or while on jobs; AI text-back converts 60% of them
  const recoveredMissedCalls = Math.round(currentCalls * 0.25 * 0.6);
  
  // - Local Google 3-Pack surge: moving into top 3 generates ~80% more calls from local searchers
  const additionalMapCalls = Math.round(currentCalls * 0.85);
  
  // - High-converting mobile site: lifts booking rate from ~15% to ~32% (+17% net gain)
  const additionalWebBookings = Math.round(currentCalls * 0.4);

  let additionalBookedJobs = 0;
  if (selectedFocus === 'all') {
    additionalBookedJobs = recoveredMissedCalls + Math.round(additionalMapCalls * 0.3) + additionalWebBookings;
  } else if (selectedFocus === 'missed_calls') {
    additionalBookedJobs = recoveredMissedCalls;
  } else if (selectedFocus === 'maps_rank') {
    additionalBookedJobs = Math.round(additionalMapCalls * 0.35);
  } else {
    additionalBookedJobs = additionalWebBookings;
  }

  const additionalMonthlyRevenue = additionalBookedJobs * ticketValue;
  const additionalAnnualRevenue = additionalMonthlyRevenue * 12;

  return (
    <section id="calculator" className="py-24 bg-[#FAFAFA] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-black" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 font-bold">
              Local Revenue Estimator
            </span>
            <span className="w-2.5 h-2.5 bg-black" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight font-display text-black mb-4">
            Calculate Your Untapped Local Revenue
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            See how many high-value local jobs your business is leaving on the table each month due to missed calls, slow mobile load times, and ranking below competitors on Google Maps.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white border border-zinc-200 p-8 sm:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Inputs (Span 7) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Focus Selector */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-bold block mb-3">
                  01. Choose Growth Focus Area
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedFocus('all')}
                    className={`p-3.5 text-left border transition-all cursor-pointer ${
                      selectedFocus === 'all'
                        ? 'bg-zinc-50 border-black text-black ring-1 ring-black/10'
                        : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-black'
                    }`}
                  >
                    <div className="text-xs font-bold font-display uppercase tracking-tight">
                      Complete Growth Engine
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                      Website + Google Maps + AI Text-Back
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedFocus('missed_calls')}
                    className={`p-3.5 text-left border transition-all cursor-pointer ${
                      selectedFocus === 'missed_calls'
                        ? 'bg-zinc-50 border-black text-black ring-1 ring-black/10'
                        : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-black'
                    }`}
                  >
                    <div className="text-xs font-bold font-display uppercase tracking-tight">
                      Missed-Call Recovery
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                      Instant 24/7 SMS text-back
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedFocus('maps_rank')}
                    className={`p-3.5 text-left border transition-all cursor-pointer ${
                      selectedFocus === 'maps_rank'
                        ? 'bg-zinc-50 border-black text-black ring-1 ring-black/10'
                        : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-black'
                    }`}
                  >
                    <div className="text-xs font-bold font-display uppercase tracking-tight">
                      Google Maps 3-Pack
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                      Rank in top 3 local results
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedFocus('website')}
                    className={`p-3.5 text-left border transition-all cursor-pointer ${
                      selectedFocus === 'website'
                        ? 'bg-zinc-50 border-black text-black ring-1 ring-black/10'
                        : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-black'
                    }`}
                  >
                    <div className="text-xs font-bold font-display uppercase tracking-tight">
                      High-Conversion Mobile Site
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                      Double visitor-to-booking rate
                    </div>
                  </button>
                </div>
              </div>

              {/* Average Customer / Job Ticket Value Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-bold">
                    02. Your Average Job or Client Value
                  </label>
                  <span className="text-2xl font-black font-display text-black tabular-nums">
                    ${ticketValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="10000"
                  step="100"
                  value={ticketValue}
                  onChange={(e) => setTicketValue(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 accent-black cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1.5">
                  <span>$200 (Service Visit)</span>
                  <span>$2,500 (Project / Case)</span>
                  <span>$5,000 (Commercial Contract)</span>
                  <span>$10,000+ (High-End Trade)</span>
                </div>
              </div>

              {/* Current Monthly Inbound Calls Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-bold">
                    03. Estimated Monthly Inbound Calls / Inquiries
                  </label>
                  <span className="text-2xl font-black font-display text-black tabular-nums">
                    {currentCalls} <span className="text-xs font-normal text-zinc-500">calls/mo</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={currentCalls}
                  onChange={(e) => setCurrentCalls(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 accent-black cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1.5">
                  <span>10 calls</span>
                  <span>50 calls</span>
                  <span>100 calls</span>
                  <span>200+ calls</span>
                </div>
              </div>

            </div>

            {/* Right Projected Metrics (Span 5) */}
            <div className="lg:col-span-5 bg-black text-white p-8 sm:p-9 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                    Projected Local Revenue Lift
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">Territory Model</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase font-bold text-zinc-400 block mb-1">
                      Estimated Monthly Pipeline Lift
                    </span>
                    <div className="text-4xl sm:text-5xl font-black text-white font-display italic tracking-tight tabular-nums">
                      +${additionalMonthlyRevenue.toLocaleString()}
                      <span className="text-xs text-zinc-400 not-italic font-normal"> /month</span>
                    </div>
                    <span className="text-[11px] text-zinc-300 font-mono flex items-center gap-1.5 mt-2">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span>~{additionalBookedJobs} additional high-value jobs booked per month</span>
                    </span>
                  </div>

                  <div className="pt-4 border-t border-zinc-800 space-y-2.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-zinc-400">Estimated Annual Impact:</span>
                      <span className="text-white font-bold tabular-nums">+${additionalAnnualRevenue.toLocaleString()} /year</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-zinc-400">Recovered Missed Calls:</span>
                      <span className="text-white font-bold tabular-nums">~{recoveredMissedCalls} calls/month</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <button
                  onClick={() =>
                    onNavigateToContactWithPackage(
                      `Local Growth Plan ($${additionalMonthlyRevenue.toLocaleString()}/mo pipeline)`
                    )
                  }
                  className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md active:scale-95"
                >
                  <span>Claim Your Territory Plan</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
