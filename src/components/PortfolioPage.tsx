import React, { useState } from 'react';
import Logo from './Logo';
import portfolioFintechImage from '../assets/images/portfolio_fintech_showcase_1790990940671.jpg';
import portfolioEcommerceImage from '../assets/images/portfolio_ecommerce_showcase_1790990953376.jpg';
import aiCaseStudyImage from '../assets/images/case_study_ai_real_1790990124721.jpg';
import seoCaseStudyImage from '../assets/images/case_study_seo_real_1790990113917.jpg';
import { ArrowUpRight, Check, X, Layers, ExternalLink, ShieldCheck, TrendingUp, Sparkles, MapPin, PhoneCall } from 'lucide-react';
import { PageRoute } from './Navbar';

interface PortfolioPageProps {
  onNavigateToContactWithContext: (context: string) => void;
  onNavigate: (page: PageRoute) => void;
}

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  city: string;
  category: 'web' | 'maps' | 'ai';
  categoryLabel: string;
  headline: string;
  summary: string;
  image: string;
  primaryMetric: string;
  metricLabel: string;
  secondaryMetrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  techStack: string[];
  clientQuote: { text: string; author: string; role: string };
}

export default function PortfolioPage({
  onNavigateToContactWithContext,
  onNavigate,
}: PortfolioPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'maps' | 'ai'>('all');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const studies: CaseStudy[] = [
    {
      id: 'beacon-dental',
      client: 'Beacon Dental & Orthodontics',
      industry: 'High-Ticket Dental Practice',
      city: 'Austin, TX',
      category: 'maps',
      categoryLabel: 'Google 3-Pack Dominance',
      headline: 'Securing #1 Google Maps 3-Pack Across 14 Zip Codes in Greater Austin',
      summary:
        'Beacon Dental was buried on page 3 of Google Maps, losing high-value implant and cosmetic cases to corporate dental chains. We overhauled their Google Business Profile, established a local citation graph, and structured local schema that surged monthly new patient inquiries by +215%.',
      image: portfolioFintechImage,
      primaryMetric: '+215%',
      metricLabel: 'Inbound Patient Calls',
      secondaryMetrics: [
        { label: 'Google 3-Pack Rank', value: '#1 in 14 Zips' },
        { label: 'High-Ticket Implants', value: '+34 Cases/Mo' },
        { label: 'Verified Reviews', value: '180+ 5-Star' },
      ],
      challenge:
        'Corporate DSO-backed dental clinics with massive budgets were outranking this premier private practice on Google Maps, forcing them to pay $120+ per click on Google Search Ads.',
      solution:
        'Completely overhauled Google Business Profile categories, built geo-targeted suburb pages for Round Rock and Westlake, resolved 40+ citation inconsistencies, and deployed automated review generation.',
      techStack: ['Google Business Profile', 'Local Citation Graph', 'LocalBusiness Schema', 'CallRail Tracking'],
      clientQuote: {
        text: 'Most Wanted put us at the top of Google Maps where our patients actually look. Our implant consult calendar has been booked solid for four consecutive months.',
        author: 'Dr. Ryan Alcott, DDS',
        role: 'Founder & Lead Clinician, Beacon Dental',
      },
    },
    {
      id: 'prestige-homes',
      client: 'Prestige Custom Builders',
      industry: 'Luxury Residential Contractor',
      city: 'Denver, CO',
      category: 'web',
      categoryLabel: 'High-Conversion Local Web',
      headline: 'Sub-0.4s Mobile Architecture Yielding $4.2M in Qualified Project Consults',
      summary:
        'Prestige builds $1.5M+ custom homes, but their old WordPress website was sluggish on mobile and lacked a portfolio-first conversion pathway. We launched an ultra-fast headless React web experience that doubled consultation requests from affluent homeowners.',
      image: portfolioEcommerceImage,
      primaryMetric: '+184%',
      metricLabel: 'Qualified Project Consultations',
      secondaryMetrics: [
        { label: 'Contracted Pipeline', value: '$4.2M Added' },
        { label: 'Mobile PageSpeed', value: '0.36s' },
        { label: 'Bounce Rate Reduction', value: '-52%' },
      ],
      challenge:
        'High-net-worth homeowners browsing on iPhones suffered 4-second load times and difficult image galleries, causing prospective luxury home clients to abandon the site.',
      solution:
        'Bespoke mobile-first React architecture with edge CDN caching, instant high-res architectural project viewer, and an interactive project budget calculator routing directly to the owner.',
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'Vercel Edge', 'SMS Triage'],
      clientQuote: {
        text: 'The site looks and feels like an architectural masterpiece. High-end clients immediately comment on the speed and clarity before we even meet for the initial walk-through.',
        author: 'Bradley Sorenson',
        role: 'Principal, Prestige Custom Builders',
      },
    },
    {
      id: 'vanguard-law',
      client: 'Vanguard Injury & Trial Law',
      industry: 'Personal Injury Law Firm',
      city: 'Chicago, IL',
      category: 'ai',
      categoryLabel: '24/7 AI Lead Text-Back',
      headline: 'Instant 15-Second Missed-Call Recovery Capturing 18 High-Value Cases/Month',
      summary:
        'When accident victims call an attorney, they call the first number that answers. Vanguard was missing 30% of calls after hours and on weekends. We deployed our instant SMS text-back system that qualifies claimants within 15 seconds.',
      image: aiCaseStudyImage,
      primaryMetric: '18 Cases',
      metricLabel: 'Retained Monthly from Missed Calls',
      secondaryMetrics: [
        { label: 'Response Latency', value: '< 15 seconds' },
        { label: 'Lead Capture Rate', value: '78%' },
        { label: 'Staff Weekend Hours', value: '0 Hours Needed' },
      ],
      challenge:
        'Callers on Saturday or after 6 PM were hanging up and immediately calling another firm on Google, costing the practice tens of thousands in lost contingency retainers.',
      solution:
        'Engineered an instant automated SMS text-back pipeline that engages the caller, asks preliminary triage questions (date of incident, injury severity), and instantly alerts the on-duty partner.',
      techStack: ['Conversational AI', 'Twilio SMS Gateway', 'Clio Legal CRM', 'Secure Webhook Bridge'],
      clientQuote: {
        text: 'The missed-call text-back system paid for itself on day three. A client who called at 9:30 PM on a Sunday was text-qualified and signed up by Monday morning.',
        author: 'Anthony Martone, Esq.',
        role: 'Managing Partner, Vanguard Law Group',
      },
    },
    {
      id: 'cascade-hvac',
      client: 'Cascade Mechanical Services',
      industry: 'Commercial & Residential HVAC',
      city: 'Seattle, WA',
      category: 'maps',
      categoryLabel: 'Full Local Dominance',
      headline: 'Displacing Regional Franchisees to Secure #1 Local 3-Pack in King County',
      summary:
        'Cascade had 40 technicians ready to deploy, but their Google Maps rankings lagged behind national chains. We deployed city-specific landing pages and an automated review pipeline that earned 220+ verified 5-star reviews in 90 days.',
      image: seoCaseStudyImage,
      primaryMetric: '+290%',
      metricLabel: 'Inbound Emergency Service Calls',
      secondaryMetrics: [
        { label: 'New Reviews', value: '220+ 5-Star' },
        { label: 'Average Google Rating', value: '4.9 Stars' },
        { label: 'Dispatch Capacity', value: '100% Booked' },
      ],
      challenge:
        'National franchise aggregators dominated the top search results with multi-million dollar ad spends, drowning out this premier family-owned mechanical contractor.',
      solution:
        'Built neighborhood-level service pages covering Seattle, Bellevue, and Kirkland, structured JSON-LD HVAC schema, and launched an automated SMS review request sent upon invoice payment.',
      techStack: ['Local SEO Geo-Grid', 'ServiceTitan Webhooks', 'Google Business API', 'Schema.org'],
      clientQuote: {
        text: 'We went from relying on word-of-mouth to having our dispatch phones ring off the hook every morning. We had to hire 6 new technicians to keep up with the volume.',
        author: 'Mark Henderson',
        role: 'Owner, Cascade Mechanical Services',
      },
    },
  ];

  const filteredStudies =
    activeCategory === 'all'
      ? studies
      : studies.filter((s) => s.category === activeCategory);

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-white">
      {/* SECTION 1: Black Header with White Text */}
      <section className="bg-black text-white py-16 md:py-24 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-white font-bold">Case Studies & Proof</span>
            </div>

            {/* Signature Attention Hook */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 mb-4 text-xs font-mono text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>“Whatever your ‘Most Wanted,’ we’ve got you covered.”</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase font-display italic tracking-tight text-white mb-6">
              Verified Local Outcomes.
            </h1>

            <p className="text-base sm:text-xl font-normal text-zinc-300 leading-relaxed max-w-2xl border-l-2 border-white pl-5">
              Real U.S. local business owners dominating their cities: more inbound phone calls, top Google Maps rankings, and recovered missed-call revenue.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Category Filter Bar & Case Studies Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Segmented Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-zinc-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                Territory Results
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase font-display text-black">
                Recent Client Growth
              </h2>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-zinc-100 border border-zinc-200">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                All Case Studies
              </button>
              <button
                onClick={() => setActiveCategory('maps')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === 'maps'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                Google 3-Pack
              </button>
              <button
                onClick={() => setActiveCategory('web')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === 'web'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                Local Web
              </button>
              <button
                onClick={() => setActiveCategory('ai')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === 'ai'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                AI Text-Back
              </button>
            </div>
          </div>

          {/* Grid of Case Studies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-[#FAFAFA] border border-zinc-200 hover:border-black transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Image Header */}
                  <div className="relative h-64 sm:h-72 overflow-hidden border-b border-zinc-200 bg-zinc-100">
                    <img
                      src={study.image}
                      alt={study.client}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-zinc-200 px-3 py-1 text-xs font-mono uppercase tracking-wider text-black flex items-center gap-1.5 shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-black" />
                      <span>{study.city} · {study.industry}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8">
                    <div className="flex items-baseline justify-between gap-4 mb-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold">
                        {study.client}
                      </span>
                      <span className="text-3xl font-black text-black font-display tabular-nums italic">
                        {study.primaryMetric}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black uppercase font-display text-black mb-3 leading-tight">
                      {study.headline}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                      {study.summary}
                    </p>

                    {/* Secondary Metrics */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-zinc-200 bg-white px-3 mb-6">
                      {study.secondaryMetrics.map((m, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xs sm:text-sm font-bold text-black font-mono tabular-nums">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-zinc-500 uppercase tracking-tight mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="p-8 pt-0 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedStudy(study)}
                    className="text-xs font-bold uppercase tracking-wider text-black hover:underline cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() =>
                      onNavigateToContactWithContext(
                        `Local Growth Plan similar to ${study.client} in ${study.city}`
                      )
                    }
                    className="px-4 py-2 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>Check Your City</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Case Study Full Brief Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white border border-zinc-200 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Modal Header */}
            <div className="sticky top-0 bg-black text-white px-6 py-4 flex items-center justify-between z-10 border-b border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
                <span className="text-white font-bold">{selectedStudy.client}</span>
                <span>/</span>
                <span>{selectedStudy.city} Brief</span>
              </div>
              <button
                onClick={() => setSelectedStudy(null)}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close case study details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase font-display text-black mb-3">
                  {selectedStudy.headline}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {selectedStudy.summary}
                </p>
              </div>

              {/* Verified Metrics Block */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#FAFAFA] border border-zinc-200">
                <div>
                  <div className="text-3xl font-black text-black font-display tabular-nums italic">
                    {selectedStudy.primaryMetric}
                  </div>
                  <div className="text-xs uppercase font-bold text-zinc-600 mt-1">
                    {selectedStudy.metricLabel}
                  </div>
                </div>
                {selectedStudy.secondaryMetrics.slice(0, 2).map((m, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-bold text-black font-mono tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-xs uppercase font-medium text-zinc-600 mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 border border-zinc-200 bg-white">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold mb-2">
                    The Initial Bottleneck
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    {selectedStudy.challenge}
                  </p>
                </div>

                <div className="p-5 border border-zinc-200 bg-white">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold mb-2">
                    Our Local Execution
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    {selectedStudy.solution}
                  </p>
                </div>
              </div>

              {/* Client Quote */}
              <div className="p-6 bg-zinc-50 border-l-4 border-black">
                <p className="text-sm italic text-zinc-800 leading-relaxed mb-3">
                  "{selectedStudy.clientQuote.text}"
                </p>
                <div className="text-xs font-bold text-black">
                  {selectedStudy.clientQuote.author}
                </div>
                <div className="text-[11px] text-zinc-500">
                  {selectedStudy.clientQuote.role}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="px-5 py-2.5 border border-zinc-300 text-xs font-bold uppercase tracking-wider text-zinc-700 hover:text-black cursor-pointer"
                >
                  Close Brief
                </button>
                <button
                  onClick={() => {
                    const ctx = `Plan similar to ${selectedStudy.client}`;
                    setSelectedStudy(null);
                    onNavigateToContactWithContext(ctx);
                  }}
                  className="px-6 py-2.5 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm active:scale-95"
                >
                  Check Availability in Your City
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-200 text-xs font-mono font-bold text-black mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>“Whatever your ‘Most Wanted,’ we’ve got you covered.”</span>
          </div>
          <h3 className="text-3xl font-black uppercase font-display text-black mb-3">
            Ready to Dominate Your Local Service Area?
          </h3>
          <p className="text-zinc-600 text-sm max-w-lg mx-auto mb-6">
            We operate under strict territory exclusivity: 1 partner per industry in your target city.
          </p>
          <button
            onClick={() => onNavigateToContactWithContext('General Inquiry from Portfolio')}
            className="px-8 py-3.5 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
          >
            <span>Lock In Your Territory</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
