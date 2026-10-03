import React, { useState } from 'react';
import { Globe, Search, Megaphone, Target, Mail, PhoneCall, ArrowUpRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const capabilities = [
    {
      id: '01',
      title: 'Web Design & Conversion Architecture',
      category: 'Web Experience & CRO',
      summary: 'Bespoke, lightning-fast mobile websites engineered to turn local traffic into inbound phone calls, booked appointments, and paying clients.',
      icon: Globe,
      metrics: 'Sub-0.4s Mobile Speeds · 2.4x Conversion Lift',
      deliverables: [
        'Bespoke mobile-first visual design tailored to your exact industry positioning',
        'Sub-second page speeds so mobile visitors never bounce to local competitors',
        'Direct tap-to-call, calendar booking, and interactive consultation pathways',
        'Built-in server-side analytics, Meta Pixel/CAPI, and Google conversion tracking',
      ],
      detailText: 'Your website is the foundational hub of all your marketing. When local business owners run Facebook or Google ads to a slow, confusing website, their ad dollars are wasted. We engineer custom headless web architectures that load in under 0.4 seconds and convert visitors into high-ticket clients.',
    },
    {
      id: '02',
      title: 'Search Engine Optimization (SEO & Google 3-Pack)',
      category: 'Organic Market Dominance',
      summary: 'Dominate Google search results and the Google Local 3-Pack when high-intent customers in your city search "best [service] near me".',
      icon: Search,
      metrics: '#1 Local Map Positions · +180% Inbound Calls',
      deliverables: [
        'Complete Google Business Profile (GBP) audit, categorization, and verification',
        'Local citation graph ensuring 100% consistent NAP across 80+ major directories',
        'Geo-targeted neighborhood landing pages capturing surrounding cities and zip codes',
        'LocalBusiness JSON-LD schema markup triggering prominent Google rich cards',
      ],
      detailText: 'The Google Local 3-Pack captures over 60% of all high-intent clicks for local searches. We structure an authoritative local citation and entity graph that secures top 3 rankings across your entire target territory, keeping your phone ringing with ready-to-hire clients.',
    },
    {
      id: '03',
      title: 'Targeted Paid Advertising (Facebook & Google Ads)',
      category: 'Paid Client Acquisition',
      summary: 'High-ROI customer acquisition campaigns on Meta (Facebook & Instagram) and Google Search, hyper-targeted to homeowners and businesses in your area.',
      icon: Megaphone,
      metrics: '3.8x Average Return On Ad Spend (ROAS)',
      deliverables: [
        'Hyper-localized demographic and geo-radius targeting around your service zones',
        'High-converting ad creative, copywriting, and video hooks that stop the scroll',
        'Dedicated landing pages engineered specifically for high paid traffic conversion',
        'Full attribution tracking and real-time ROAS dashboards with zero vanity metrics',
      ],
      detailText: 'Most local business owners waste money on Facebook and Google ads because their campaigns lack compelling creative, proper local targeting, or high-converting landing pages. We build profitable paid acquisition funnels that consistently generate qualified phone calls and consults at an attractive acquisition cost.',
    },
    {
      id: '04',
      title: 'Automated Lead Generation & Inbound Funnels',
      category: 'Inbound Customer Acquisition',
      summary: 'End-to-end inbound client generation funnels that capture, qualify, and route high-value leads directly to your sales calendar.',
      icon: Target,
      metrics: '+210% Qualified Lead Volume',
      deliverables: [
        'Interactive quote estimators, assessment quizzes, and instant booking funnels',
        'Automated multi-step lead qualification filtering out tire-kickers and low-budget leads',
        'Instant SMS and email alerts dispatched to your team smartphone upon lead submission',
        'Bi-directional synchronization with your CRM, scheduling calendar, and dispatch tools',
      ],
      detailText: 'We build automated inbound lead generation funnels designed to capture local clients at the exact moment of commercial intent. Every inquiry is automatically triaged for budget, location, and project scope before reaching your calendar.',
    },
    {
      id: '05',
      title: 'Email Marketing & Customer Retention',
      category: 'Lifetime Value & Repeat Sales',
      summary: 'Turn past customers into repeat revenue and continuous referrals with automated email sequences, review requests, and database reactivation.',
      icon: Mail,
      metrics: '+$28k Average Re-Engaged Pipeline',
      deliverables: [
        'Database reactivation campaigns that generate immediate bookings from dormant contacts',
        'Automated post-service follow-up sequences and 5-star Google review requests',
        'Seasonal maintenance, VIP promotion, and recurring service reminders',
        'Clean list hygiene, high inbox deliverability, and engaging mobile-first email design',
      ],
      detailText: 'Your past customer database is an untapped goldmine. We build automated email marketing workflows that re-engage previous clients, generate consistent repeat business, and systematically collect 5-star Google reviews on complete autopilot.',
    },
    {
      id: '06',
      title: '24/7 AI Missed-Call Lead Recovery & Automation',
      category: 'Intelligent Operations',
      summary: 'Never lose a high-paying job because you were on a roof, in surgery, with a client, or closed for the evening.',
      icon: PhoneCall,
      metrics: '< 15s SMS Response · 10–20 Jobs Saved/Mo',
      deliverables: [
        'Instant missed-call text-back: auto-responds via SMS within 15 seconds',
        'Intelligent conversational AI that answers business FAQs and collects project scope',
        'Direct calendar booking: schedules estimates and consults directly into your calendar',
        'Seamless integration with your existing business phone number and smartphone',
      ],
      detailText: '62% of calls to local businesses go unanswered during peak hours or after 5 PM. Over 80% of those callers immediately call your competitor rather than leaving a voicemail. Our automated system texts them back within 15 seconds, answers their questions, and secures the appointment before they can call anyone else.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-black" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 font-bold">
                Comprehensive Digital Marketing
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight font-display text-black">
              FULL-FUNNEL GROWTH <br />
              <span className="text-black underline decoration-zinc-300">FOR LOCAL LEADERS.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-black bg-zinc-100 px-3 py-1 border border-zinc-200 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>“Whatever your ‘Most Wanted,’ we’ve got you covered.”</span>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed font-normal">
              Not limited to just one tactic. We deploy integrated web design, local SEO, Facebook & Google ads, lead generation, email retention, and AI automation to dominate your city.
            </p>
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((service, index) => {
            const isFeatured = index === activeTab;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer transition-all duration-300 p-8 border ${
                  isFeatured
                    ? 'bg-[#FAFAFA] border-black shadow-md ring-1 ring-black/10'
                    : 'bg-white border-zinc-200 hover:border-zinc-400 hover:bg-[#FAFAFA]'
                } flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Accent Top Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-colors ${
                    isFeatured ? 'bg-black' : 'bg-transparent group-hover:bg-zinc-300'
                  }`}
                />

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black font-display text-black italic">
                        {service.id}
                      </span>
                      <div className="p-2.5 bg-zinc-100 border border-zinc-200 text-black">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-600 px-2 py-0.5 bg-zinc-100 border border-zinc-200">
                      {service.category.split(' ')[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-black mb-2 group-hover:text-zinc-800 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-zinc-600 mb-6 leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-zinc-600 truncate mr-2">
                    {service.metrics}
                  </span>
                  <div className="w-7 h-7 shrink-0 rounded-none border border-zinc-300 flex items-center justify-center text-zinc-600 group-hover:border-black group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service In-Depth Blueprint Card */}
        <div className="bg-[#FAFAFA] border border-zinc-300 p-8 sm:p-10 relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                <span className="text-black font-bold">{capabilities[activeTab].id} · {capabilities[activeTab].title}</span>
                <span>/</span>
                <span>Strategic Implementation</span>
              </div>
              <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-normal">
                {capabilities[activeTab].detailText}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onSelectService(capabilities[activeTab].title)}
                className="w-full sm:w-auto px-8 py-4 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
              >
                <span>Discuss {capabilities[activeTab].title.split(' ')[0]}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
