import React from 'react';
import { Check, ArrowUpRight, Globe, MapPin, Megaphone, Target, Mail, PhoneCall, Sparkles } from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export default function Packages({ onSelectPackage }: PackagesProps) {
  const systems = [
    {
      id: 'website',
      name: 'Web Design & Conversion Architecture',
      category: 'Web & CRO',
      icon: Globe,
      tagline: 'Turn local searchers into confirmed calls, appointments, and showroom visits.',
      outcomes: 'Sub-0.4s load speed · Mobile tap-to-call · 5-Star review showcases',
      features: [
        'Custom bespoke mobile design built for local buyers on iOS & Android',
        'Sub-second page speeds so impatient local customers never bounce',
        'Prominent tap-to-call, appointment scheduling, and Google Maps directions',
        'Automated Google 5-star review integration to build immediate local trust',
        'Fast lead forms connected directly to your smartphone via SMS and email',
      ],
      cta: 'Inquire for Web Architecture',
    },
    {
      id: 'maps-seo',
      name: 'Search Engine Optimization (SEO & 3-Pack)',
      category: 'Search Dominance',
      icon: MapPin,
      tagline: 'Rank #1 when customers in your city search "best [service] near me".',
      outcomes: 'Top 3 Google Maps placement · Geo-grid ranking · Inbound call surges',
      features: [
        'Complete Google Business Profile (GBP) re-architecture & verification overhaul',
        'Geo-targeted neighborhood citation graph ensuring 100% NAP consistency',
        'LocalBusiness JSON-LD schema markup for prominent Google Search rich cards',
        'City-specific service pages designed to capture adjacent zip code traffic',
        'Automated review generation workflows to outpace competitor review counts',
      ],
      cta: 'Inquire for SEO & Maps',
    },
    {
      id: 'paid-ads',
      name: 'Targeted Paid Advertising (Meta & Google Ads)',
      category: 'Paid Acquisition',
      icon: Megaphone,
      tagline: 'High-ROI client acquisition funnels targeting ready-to-hire local customers.',
      outcomes: '3.8x Average ROAS · Hyper-local zip radius · Zero wasted clicks',
      features: [
        'Hyper-localized demographic and radius targeting around your service zones',
        'High-converting ad creative, copywriting, and video hooks that stop the scroll',
        'Dedicated landing pages engineered specifically for high ad conversion',
        'Full attribution tracking and real-time ROAS dashboards with zero vanity metrics',
        'Continuous split-testing of headings, offers, and local callouts',
      ],
      cta: 'Inquire for Paid Advertising',
    },
    {
      id: 'lead-gen',
      name: 'Automated Inbound Lead Generation',
      category: 'Inbound Funnels',
      icon: Target,
      tagline: 'Predictable client acquisition funnels that capture, qualify, and book jobs 24/7.',
      outcomes: '+210% Lead volume · Instant triage · Direct smartphone alerts',
      features: [
        'Interactive quote estimators, assessment quizzes, and instant booking funnels',
        'Automated multi-step lead qualification filtering out tire-kickers',
        'Instant SMS and email alerts dispatched to your team smartphone upon submission',
        'Bi-directional synchronization with your CRM, scheduling calendar, and dispatch',
        'Lead attribution tracking by channel (Google, Facebook, Organic)',
      ],
      cta: 'Inquire for Lead Generation',
    },
    {
      id: 'email-retention',
      name: 'Email Marketing & Customer Retention',
      category: 'Repeat Business',
      icon: Mail,
      tagline: 'Turn past customers into repeat revenue, consistent referrals, and 5-star reviews.',
      outcomes: '+$28k Re-engaged pipeline · Automated flows · Zero manual effort',
      features: [
        'Database reactivation campaigns that generate immediate bookings from past clients',
        'Automated post-service follow-up sequences and 5-star Google review requests',
        'Seasonal maintenance, VIP promotion, and recurring service reminders',
        'Clean list hygiene, high inbox deliverability, and mobile-optimized design',
        'Monthly revenue attribution tracking repeat customer bookings',
      ],
      cta: 'Inquire for Email Marketing',
    },
    {
      id: 'ai-lead',
      name: '24/7 AI Missed-Call Lead Recovery',
      category: 'Smart Operations',
      icon: PhoneCall,
      tagline: 'Never lose a high-value customer to a competitor because you were on a job or closed.',
      outcomes: '15-second response time · 24/7 calendar booking · 0 lost leads',
      features: [
        'Instant missed-call text back: auto-responds via SMS within 15 seconds',
        'Intelligent conversational AI that answers business FAQs and prices ranges',
        'Direct calendar integration: books appointments directly into your schedule',
        'Pre-qualifies customer job type, budget, and location before sending to you',
        'Recovers an estimated 10–20 jobs every month that otherwise go to competitors',
      ],
      cta: 'Inquire for AI Automation',
    },
  ];

  return (
    <section id="packages" className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-black" />
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500 font-bold">
              Integrated Digital Marketing Solutions
            </span>
            <span className="w-2 h-2 bg-black" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight font-display text-black mb-4">
            Full-Funnel Systems That Fill Your Schedule
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Local business leaders need more than a single tactic. We deploy integrated web design, local SEO, Facebook & Google ads, inbound lead funnels, email retention, and AI automation to dominate your market.
          </p>
        </div>

        {/* 6 Core Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {systems.map((sys) => {
            const Icon = sys.icon;
            return (
              <div
                key={sys.id}
                className="bg-[#FAFAFA] border border-zinc-200 hover:border-black p-8 flex flex-col justify-between transition-all duration-300 group hover:shadow-md"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-600 font-bold bg-white border border-zinc-200 px-2.5 py-1">
                      {sys.category}
                    </span>
                    <div className="p-2.5 bg-white border border-zinc-200 text-black group-hover:border-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black uppercase font-display text-black mb-2">
                    {sys.name}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed mb-4 min-h-[36px]">
                    {sys.tagline}
                  </p>

                  <div className="mb-6 pb-4 border-b border-zinc-200">
                    <span className="text-[11px] font-mono text-black font-bold block bg-zinc-100 p-2 border border-zinc-200">
                      {sys.outcomes}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-600 font-bold block mb-1">
                      What This Delivers:
                    </span>
                    {sys.features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                        <Check className="w-4 h-4 text-black shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPackage(sys.name)}
                  className="w-full py-4 bg-white hover:bg-black hover:text-white text-black text-xs font-bold uppercase tracking-wider border border-zinc-300 hover:border-black transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-sm"
                >
                  <span>{sys.cta}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            );
          })}
        </div>

        {/* The Full-Funnel Growth Engine Banner */}
        <div className="bg-black text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-black text-[10px] font-black uppercase tracking-widest font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TERRITORY EXCLUSIVE · 1 PARTNER PER CITY / CATEGORY</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black uppercase font-display text-white mb-3">
                THE FULL-FUNNEL GROWTH ENGINE
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl font-light mb-4">
                Deploy the complete digital marketing apparatus: an ultra-fast website, #1 Google Maps 3-Pack rankings, targeted Facebook & Google ads, automated lead generation, email retention, and 24/7 missed-call text-back.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-300">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-white" /> High-Speed Web Design</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-white" /> Local 3-Pack SEO</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-white" /> Meta & Google Ads</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-white" /> 24/7 AI Missed-Call Text</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="mb-4 text-left lg:text-right">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
                  Exclusivity Guaranteed
                </div>
                <div className="text-sm text-zinc-300">
                  We lock out your direct local competitors in your agreed radius.
                </div>
              </div>

              <button
                onClick={() => onSelectPackage('The Full-Funnel Growth Engine (All Services)')}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md active:scale-95"
              >
                <span>Check Territory Availability</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
