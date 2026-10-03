import React from 'react';
import { Search, Flame, BarChart2, Repeat, Check } from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      num: '01',
      title: 'Technical Diagnostic & Architecture Audit',
      timeframe: 'Days 1 – 4',
      icon: Search,
      description: 'We audit your code performance, Core Web Vitals, organic keyword ranking gaps, and manual workflow bottlenecks.',
      bullets: [
        'Page speed & technical SEO crawl inspection',
        'Keyword commercial intent & competitor gaps',
        'Manual workflow & CRM friction analysis',
      ],
    },
    {
      num: '02',
      title: 'Bespoke Engineering & AI Agent Assembly',
      timeframe: 'Days 5 – 12',
      icon: Flame,
      description: 'We design custom UI/UX, write clean headless React code, deploy programmatic SEO clusters, or build autonomous AI routing agents.',
      bullets: [
        'Custom modern UI/UX design (zero templates)',
        'Autonomous AI agent training & CRM webhooks',
        'High-converting landing page architecture',
      ],
    },
    {
      num: '03',
      title: 'Rigorous Testing, Speed & Security Validation',
      timeframe: 'Days 13 – 16',
      icon: BarChart2,
      description: 'Before go-live, every page is tested on mobile devices, stress-tested for 95+ PageSpeed scores, and verified for tracking accuracy.',
      bullets: [
        'Cross-device responsive & speed verification',
        'Schema.org structured data validation',
        'Fail-safe AI agent fallback protocols',
      ],
    },
    {
      num: '04',
      title: 'Deployment & Autonomous Compounding',
      timeframe: 'Day 17 and Beyond',
      icon: Repeat,
      description: 'Your new systems go live. We monitor organic ranking progression, conversion rates, and automated lead processing.',
      bullets: [
        'Zero-downtime production deployment',
        '24/7 autonomous lead capture active',
        'Transparent reporting & post-launch support',
      ],
    },
  ];

  return (
    <section id="methodology" className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-black" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 font-bold">
                The 4-Stage Protocol
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight font-display text-black">
              HOW WE DELIVER <br />
              <span className="text-black underline decoration-zinc-300">MEASURABLE LIFT.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200 text-xs font-mono font-bold text-black mb-2">
              <Flame className="w-3.5 h-3.5 text-black" />
              <span>“Whatever your ‘Most Wanted,’ we’ve got you covered.”</span>
            </div>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              A battle-tested engineering process ensuring your local market systems are deployed on time, territory protected, and built for sustained growth.
            </p>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#FAFAFA] border border-zinc-200 p-8 flex flex-col justify-between group hover:border-black transition-all duration-300 shadow-sm hover:shadow"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl font-black font-display text-black italic">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 bg-white border border-zinc-200 px-2.5 py-1">
                    {step.timeframe}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display uppercase tracking-tight text-black mb-3 group-hover:text-zinc-800 transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200 space-y-2">
                {step.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-zinc-700">
                    <Check className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
