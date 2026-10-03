import React from 'react';
import { Star, Quote, Sparkles, MapPin } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Dr. Ryan Alcott, DDS',
      role: 'Founder & Lead Clinician',
      company: 'Beacon Dental Specialists',
      location: 'Austin, TX',
      metrics: '#1 Google 3-Pack Across 14 Zip Codes',
      quote: 'Most Wanted completely transformed our local patient acquisition. We went from being buried on page 3 of Google Maps to holding the #1 spot across our entire Austin service area. Our high-value cosmetic and implant consults surged by +215%.',
    },
    {
      name: 'Bradley Sorenson',
      role: 'Principal Builder',
      company: 'Prestige Architectural Homes',
      location: 'Denver, CO',
      metrics: '$4.2M in Contracted Local Pipeline',
      quote: 'Their mobile website loads in under 0.4 seconds and looks like an architectural monograph. Affluent homeowners consistently mention the speed and clarity of our portfolio. It directly generated $4.2M in contracted projects this year.',
    },
    {
      name: 'Anthony Martone, Esq.',
      role: 'Managing Partner',
      company: 'Vanguard Litigation Group',
      location: 'Chicago, IL',
      metrics: '18 Cases Retained Monthly via AI Text-Back',
      quote: 'When someone needs an attorney after hours, they call down the Google list until someone answers. The 15-second missed-call text-back system engages callers before they can dial another firm. It recovers 15 to 20 retained cases every single month.',
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-black" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 font-bold">
                Local Business Feedback
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight font-display text-black">
              WHAT LOCAL LEADERS SAY <br />
              <span className="text-black underline decoration-zinc-300">ABOUT OUR WORK.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-zinc-200 text-xs font-mono font-bold text-black shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>“Whatever your ‘Most Wanted,’ we’ve got you covered.”</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 mt-1">
              <span className="text-black font-black text-sm">5.0 / 5.0</span>
              <span>· Verified U.S. Partner Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="bg-white border border-zinc-200 p-8 flex flex-col justify-between group hover:border-black transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-black">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-300 group-hover:text-black transition-colors" />
                </div>

                <div className="bg-[#FAFAFA] px-3 py-1.5 border border-zinc-200 text-[11px] font-mono text-black font-bold uppercase mb-4 inline-block">
                  {rev.metrics}
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed italic mb-8">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-black text-base">
                    {rev.name}
                  </div>
                  <div className="text-xs text-zinc-500 font-mono">
                    {rev.role} · <span className="text-zinc-700 font-semibold">{rev.company}</span>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-black" />
                  <span>{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
