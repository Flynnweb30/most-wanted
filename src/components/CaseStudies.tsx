import React, { useState } from 'react';
import { ArrowUpRight, Check, X, MapPin, Sparkles } from 'lucide-react';
import beaconDentalImage from '../assets/images/case_study_seo_real_1790990113917.jpg';
import prestigeHomesImage from '../assets/images/case_study_web_real_1790990101247.jpg';
import vanguardLawImage from '../assets/images/case_study_ai_real_1790990124721.jpg';

interface CaseStudiesProps {
  onNavigateToContact: () => void;
}

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  city: string;
  category: 'website' | 'maps' | 'ai';
  headline: string;
  image: string;
  primaryMetric: string;
  primaryLabel: string;
  secondaryMetric: string;
  secondaryLabel: string;
  duration: string;
  summary: string;
  challenge: string;
  solution: string[];
  results: string[];
}

export default function CaseStudies({ onNavigateToContact }: CaseStudiesProps) {
  const [filter, setFilter] = useState<'all' | 'website' | 'maps' | 'ai'>('all');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const studies: CaseStudy[] = [
    {
      id: 'beacon-dental',
      client: 'Beacon Dental & Orthodontics',
      industry: 'Dental Practice & Implants',
      city: 'Austin, TX',
      category: 'maps',
      headline: 'Securing #1 Google Maps 3-Pack Across 14 Greater Austin Zip Codes',
      image: beaconDentalImage,
      primaryMetric: '+215%',
      primaryLabel: 'Inbound Patient Calls',
      secondaryMetric: '#1 Rank',
      secondaryLabel: 'In 14 Target Zip Codes',
      duration: '4-Week Local Sprint',
      summary: 'Overhauled Google Business Profile categories, built localized suburb landing pages, and deployed review velocity automation that pushed the clinic to #1 on Google Maps.',
      challenge: 'Corporate-owned dental chains were dominating local Google Maps, forcing this premier practice to pay $120+ per click on Google Search Ads.',
      solution: [
        'Complete Google Business Profile (GBP) re-architecture & geo-grid verification',
        'Built suburb-specific landing pages targeting Westlake and Round Rock',
        'Implemented LocalBusiness JSON-LD schema triggering Google rich snippets',
        'Deployed automated post-visit SMS review system collecting 180+ 5-star reviews',
      ],
      results: [
        'Captured #1 Google 3-Pack rank across 14 target service zip codes',
        'Inbound new patient calls surged +215% within 60 days of launch',
        'Added 34 high-ticket cosmetic & implant cases per month',
      ],
    },
    {
      id: 'prestige-homes',
      client: 'Prestige Architectural Homes',
      industry: 'Luxury Residential Contractor',
      city: 'Denver, CO',
      category: 'website',
      headline: 'Sub-0.4s Mobile Architecture Yielding $4.2M in Contracted Projects',
      image: prestigeHomesImage,
      primaryMetric: '+184%',
      primaryLabel: 'Consultation Inquiries',
      secondaryMetric: '0.36s',
      secondaryLabel: 'Mobile Page Load Speed',
      duration: '3-Week Website Sprint',
      summary: 'Replaced a slow, clunky WordPress template with a custom headless React site featuring instant high-res portfolio viewing and mobile tap-to-call consult requests.',
      challenge: 'Affluent homeowners suffered 4.2-second load times on mobile devices, causing high bounce rates before prospective clients saw their completed homes.',
      solution: [
        'Custom React/Next.js frontend with sub-0.4s mobile load time',
        'Interactive architectural project viewer with fast filterable galleries',
        'Direct consultation request workflow routing instantly to the principal builder',
        'Integrated 5-star client testimonials and trade award badges',
      ],
      results: [
        'Consultation inquiry conversion doubled within the first month',
        'Directly generated $4.2M in contracted custom home construction projects',
        'Mobile bounce rate dropped by 52%',
      ],
    },
    {
      id: 'vanguard-law',
      client: 'Vanguard Litigation Group',
      industry: 'Personal Injury Law Firm',
      city: 'Chicago, IL',
      category: 'ai',
      headline: '15-Second Missed-Call Recovery Capturing 18 Retained Cases Monthly',
      image: vanguardLawImage,
      primaryMetric: '18 Cases',
      primaryLabel: 'Retained Monthly via SMS',
      secondaryMetric: '< 15 sec',
      secondaryLabel: 'Automated Response Time',
      duration: '2-Week AI Sprint',
      summary: 'Engineered an automated 15-second missed-call SMS text-back pipeline that engages callers after hours, pre-qualifies their claim, and books attorney consultations.',
      challenge: 'Callers on evenings and weekends were hanging up and immediately calling another firm on Google, leaking dozens of viable contingency retainers.',
      solution: [
        'Instant missed-call detection triggering an automated conversational SMS text-back',
        'Pre-qualification bot collecting incident date, injury details, and police reports',
        'Direct scheduling workflow booking appointments on the attorney calendar',
        'Instant priority SMS alerts to the managing partner for high-value cases',
      ],
      results: [
        'Average response time dropped from 6+ hours to under 15 seconds',
        'Recovers 15 to 20 retained cases every single month on autopilot',
        'Zero weekend staff hours required to triage initial incoming calls',
      ],
    },
  ];

  const filteredStudies = filter === 'all' ? studies : studies.filter((s) => s.category === filter);

  return (
    <section id="work" className="py-24 bg-[#FAFAFA] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-black" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 font-bold">
                Proven Local Outcomes
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight font-display text-black">
              VERIFIED WORK & <br />
              <span className="text-black underline decoration-zinc-300">LOCAL IMPACT.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-zinc-200 text-xs font-mono font-bold text-black shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>“Whatever your ‘Most Wanted,’ we’ve got you covered.”</span>
            </div>

            {/* Interactive Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-zinc-200 shadow-sm">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  filter === 'all'
                    ? 'bg-black text-white'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('maps')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  filter === 'maps'
                    ? 'bg-black text-white'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                Google 3-Pack
              </button>
              <button
                onClick={() => setFilter('website')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  filter === 'website'
                    ? 'bg-black text-white'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                Local Web
              </button>
              <button
                onClick={() => setFilter('ai')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  filter === 'ai'
                    ? 'bg-black text-white'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                AI Text-Back
              </button>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white border border-zinc-200 hover:border-black transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-sm hover:shadow-md"
            >
              {/* Image Preview */}
              <div className="relative h-60 overflow-hidden bg-zinc-100 border-b border-zinc-200">
                <img
                  src={study.image}
                  alt={study.client}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Duration & City Tag */}
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 border border-zinc-200 text-[10px] font-mono uppercase tracking-wider text-black font-semibold shadow-sm flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-black" />
                  <span>{study.city}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-900 font-bold bg-white/90 px-2 py-0.5 border border-zinc-200">
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-black mb-2 group-hover:text-zinc-800 transition-colors leading-snug">
                    {study.headline}
                  </h3>
                  <p className="text-xs text-zinc-600 mb-6 line-clamp-3 leading-relaxed">
                    {study.summary}
                  </p>
                </div>

                {/* Proof Metrics */}
                <div className="pt-4 border-t border-zinc-100">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-[#FAFAFA] p-3 border border-zinc-200">
                      <div className="text-2xl font-black text-black italic font-display tabular-nums">
                        {study.primaryMetric}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                        {study.primaryLabel}
                      </div>
                    </div>

                    <div className="bg-[#FAFAFA] p-3 border border-zinc-200">
                      <div className="text-2xl font-black text-black italic font-display tabular-nums">
                        {study.secondaryMetric}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                        {study.secondaryLabel}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedStudy(study)}
                    className="w-full py-2.5 bg-zinc-50 hover:bg-black hover:text-white text-zinc-900 text-xs font-bold uppercase tracking-wider border border-zinc-300 hover:border-black transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study In-Depth Inspection Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-zinc-300 max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-black bg-zinc-100 border border-zinc-200 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
              <span className="text-black font-bold">{selectedStudy.client}</span>
              <span>·</span>
              <span>{selectedStudy.city}</span>
              <span>·</span>
              <span>{selectedStudy.duration}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase font-display text-black mb-4 leading-tight">
              {selectedStudy.headline}
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#FAFAFA] p-4 border border-zinc-200">
                <span className="text-3xl font-black text-black font-display italic">
                  {selectedStudy.primaryMetric}
                </span>
                <p className="text-xs uppercase font-bold text-zinc-600 mt-1">
                  {selectedStudy.primaryLabel}
                </p>
              </div>
              <div className="bg-[#FAFAFA] p-4 border border-zinc-200">
                <span className="text-3xl font-black text-black font-display italic">
                  {selectedStudy.secondaryMetric}
                </span>
                <p className="text-xs uppercase font-bold text-zinc-600 mt-1">
                  {selectedStudy.secondaryLabel}
                </p>
              </div>
            </div>

            <div className="space-y-5 text-sm text-zinc-700">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold mb-1">
                  The Local Bottleneck
                </h4>
                <p className="leading-relaxed bg-zinc-50 p-3 border-l-2 border-zinc-400 text-xs sm:text-sm">
                  {selectedStudy.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-black font-bold mb-2">
                  Our Engineering Execution
                </h4>
                <ul className="space-y-2">
                  {selectedStudy.solution.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-black font-bold mb-2">
                  Verified Local Outcomes
                </h4>
                <div className="space-y-2">
                  {selectedStudy.results.map((res, idx) => (
                    <div key={idx} className="bg-zinc-50 border border-zinc-200 p-2.5 text-xs text-zinc-900 font-medium">
                      {res}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedStudy(null)}
                className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-black cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedStudy(null);
                  onNavigateToContact();
                }}
                className="px-6 py-2.5 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
              >
                <span>Check Your City</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
