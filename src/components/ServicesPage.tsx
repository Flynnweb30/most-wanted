import React, { useState } from 'react';
import Logo from './Logo';
import { Globe, Search, Megaphone, Target, Mail, PhoneCall, Sparkles, ArrowUpRight, Check, ShieldCheck, Clock, Zap } from 'lucide-react';
import { PageRoute } from './Navbar';

interface ServicesPageProps {
  onNavigateToContactWithService: (serviceName: string) => void;
  onNavigate: (page: PageRoute) => void;
}

export default function ServicesPage({
  onNavigateToContactWithService,
  onNavigate,
}: ServicesPageProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'seo' | 'ads' | 'leads' | 'email' | 'ai'>('all');

  const services = [
    {
      id: 'web',
      number: '01',
      title: 'Web Design & Conversion Architecture',
      tagline: 'Sub-second mobile speed, direct tap-to-call, and built-in conversion psychology',
      description:
        'When local homeowners, patients, or corporate clients look for your service on their phone, they decide in seconds. We build custom, ultra-fast websites designed specifically for local conversion—cutting load time to under 0.4 seconds, showcasing your verified customer reviews, and making it effortless to call or book an appointment.',
      deliverables: [
        'Custom Mobile-First Architecture (iOS & Android optimized)',
        'Sub-0.4s Local Load Speeds to prevent visitor drop-offs',
        'Direct Tap-to-Call, Live Booking, & Map Routing Navigation',
        'Automated 5-Star Google Review Trust Badge Integration',
        'Instant Lead Form Routing directly to your smartphone',
        'Full Analytics, Meta Pixel/CAPI, and Google Tag Manager Setup',
      ],
      timeline: '2–3 Week Dedicated Sprint',
      territory: 'Territory Protected for Your Practice or Trade',
      icon: Globe,
      inquiryName: 'Web Design & Conversion Architecture',
    },
    {
      id: 'seo',
      number: '02',
      title: 'Search Engine Optimization (SEO & Google 3-Pack)',
      tagline: 'Claim top 3 ranking when high-intent local customers search "best [service] near me"',
      description:
        'Over 60% of all high-value phone calls come directly from the Google Local 3-Pack. We optimize your Google Business Profile, build rock-solid local citations across your entire metropolitan area, and structure rich schema markup so Google consistently recommends your business above nearby competitors.',
      deliverables: [
        'Complete Google Business Profile (GBP) re-architecture & geo-grid overhaul',
        'Local Citation & NAP Synchronization across 80+ top directories',
        'LocalBusiness JSON-LD Schema Graph for prominent search visibility',
        'Targeted Suburb & Neighborhood Service Area Pages',
        'Proactive 5-Star Review Generation & Reputation Defense',
        'Transparent Call Tracking & Real-World Inbound Lead Reports',
      ],
      timeline: '2–4 Week Implementation & Authority Launch',
      territory: 'Locked Per City / Trade Category',
      icon: Search,
      inquiryName: 'Search Engine Optimization (SEO & Google 3-Pack)',
    },
    {
      id: 'ads',
      number: '03',
      title: 'Targeted Paid Advertising (Facebook & Google Ads)',
      tagline: 'High-ROI client acquisition funnels that capture customers with immediate commercial intent',
      description:
        'Stop burning cash on generic ad agencies. We engineer hyper-targeted local campaigns on Meta (Facebook & Instagram) and Google Search. We write compelling copy, produce scroll-stopping creative, and connect directly to high-converting landing pages built to turn clicks into phone calls.',
      deliverables: [
        'Hyper-Local Demographic & Geo-Radius Targeting',
        'Custom Ad Creative, Video Hooks, & High-Conversion Copywriting',
        'Dedicated High-Converting Landing Page per Campaign',
        'Advanced Retargeting Funnels for Previous Visitors & Inquiries',
        'Real-Time Attribution Tracking and Clean ROAS Reporting',
        'Continuous Split-Testing of Headings, Offers, and Callouts',
      ],
      timeline: '7–10 Day Campaign Launch',
      territory: 'Custom Geo-Radius Optimization',
      icon: Megaphone,
      inquiryName: 'Targeted Paid Advertising (Facebook & Google Ads)',
    },
    {
      id: 'leads',
      number: '04',
      title: 'Automated Lead Generation & Inbound Funnels',
      tagline: 'Predictable client acquisition funnels that capture, qualify, and book jobs 24/7',
      description:
        'We build automated inbound client acquisition funnels designed to capture local clients at the exact moment of commercial intent. Every inquiry is automatically triaged for budget, location, and project scope before reaching your calendar.',
      deliverables: [
        'Interactive Quote Estimators, Assessment Quizzes, & Multi-Step Forms',
        'Automated Lead Qualification filtering out tire-kickers',
        'Instant SMS & Email Alerts to your phone when a hot lead submits',
        'Bi-Directional CRM Synchronization (HubSpot, Jobber, ServiceTitan)',
        'Automated Calendar Appointment Scheduling & SMS Reminders',
        'Lead Attribution Tracking by Channel (Google, Facebook, Organic)',
      ],
      timeline: '10–14 Day Funnel Deployment',
      territory: 'Direct Pipeline to Your Team',
      icon: Target,
      inquiryName: 'Automated Lead Generation & Inbound Funnels',
    },
    {
      id: 'email',
      number: '05',
      title: 'Email Marketing & Customer Retention',
      tagline: 'Turn past customers into repeat revenue, consistent referrals, and 5-star Google reviews',
      description:
        'Your past customer database is an untapped goldmine. We build automated email marketing workflows that re-engage previous clients, generate consistent repeat business, and systematically collect 5-star Google reviews on complete autopilot.',
      deliverables: [
        'Database Reactivation Campaigns generating immediate bookings',
        'Automated Post-Service Follow-Up & Review Request Sequences',
        'Seasonal Maintenance & VIP Customer Promotional Broadcasts',
        'Clean List Hygiene, Segmentation, & High Inbox Deliverability',
        'Mobile-Optimized Responsive Email Templates in Your Branding',
        'Monthly Revenue Attribution & Open/Click Performance Metrics',
      ],
      timeline: '1–2 Week Flow Setup',
      territory: 'Automated for Your Customer Base',
      icon: Mail,
      inquiryName: 'Email Marketing & Customer Retention',
    },
    {
      id: 'ai',
      number: '06',
      title: '24/7 AI Missed-Call Lead Recovery & Automation',
      tagline: 'Automatically respond via SMS within 15 seconds so callers never go to competitors',
      description:
        'When you’re in a meeting, performing a service, or closed after 5 PM, missed calls mean lost revenue. Our smart automated system instantly texts callers back within 15 seconds, answers common questions about your services, pre-qualifies their project, and books the appointment directly into your calendar.',
      deliverables: [
        'Instant Missed-Call Auto Text-Back (< 15 second response time)',
        'Intelligent Conversational Agent answering local FAQs & estimates',
        'Direct Calendar Integration (Google Calendar, Outlook, CRM)',
        'Pre-Qualification Triage (Location, Service Type, Project Scope)',
        'Instant SMS Alerts to your phone when a hot lead books',
        'Seamless Integration with your current business phone line',
      ],
      timeline: '10–14 Day Rapid Deployment Sprint',
      territory: 'Plug-and-play for your team',
      icon: PhoneCall,
      inquiryName: '24/7 AI Missed-Call Lead Recovery & Automation',
    },
  ];

  const filteredServices =
    activeTab === 'all'
      ? services
      : services.filter((s) => s.id === activeTab);

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
              <span className="text-white font-bold">Services & Offerings</span>
            </div>

            {/* Signature Attention Hook */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 mb-4 text-xs font-mono text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>“Whatever your ‘Most Wanted,’ we’ve got you covered.”</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase font-display italic tracking-tight text-white mb-6">
              Full-Funnel Digital Marketing Solutions.
            </h1>

            <p className="text-base sm:text-xl font-normal text-zinc-300 leading-relaxed max-w-2xl border-l-2 border-white pl-5">
              Not limited to one narrow tactic. We engineer complete marketing engines across web design, SEO, Facebook & Google ads, automated lead generation, email retention, and AI automation.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-[#FAFAFA] border-b border-zinc-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-700">
          <span className="flex items-center gap-2 font-bold text-black">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            100% Territory Exclusivity Guarantee
          </span>
          <span className="hidden sm:inline text-zinc-400">·</span>
          <span>Never Compete Against Our Own Clients</span>
          <span className="hidden sm:inline text-zinc-400">·</span>
          <span className="font-bold text-black">Senior U.S. Technical Execution Only</span>
        </div>
      </div>

      {/* SECTION 2: Filter & Detailed Service Cards */}
      <section className="py-16 md:py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Segmented Filter Control */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-zinc-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                Strategic Disciplines
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase font-display text-black">
                Select a Specialized Marketing Solution
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100 border border-zinc-200">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                All Solutions
              </button>
              <button
                onClick={() => setActiveTab('web')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === 'web'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                Web Design
              </button>
              <button
                onClick={() => setActiveTab('seo')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === 'seo'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                SEO & Maps
              </button>
              <button
                onClick={() => setActiveTab('ads')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === 'ads'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                Paid Ads
              </button>
              <button
                onClick={() => setActiveTab('leads')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === 'leads'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                Lead Gen
              </button>
              <button
                onClick={() => setActiveTab('email')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === 'email'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                Email
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === 'ai'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                AI Auto
              </button>
            </div>
          </div>

          {/* Detailed Service Cards */}
          <div className="space-y-12">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-[#FAFAFA] border border-zinc-200 hover:border-black transition-all duration-300 p-8 sm:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Column 1: Info & Outcomes (Span 7) */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-8 bg-black text-white flex items-center justify-center font-display font-black text-sm">
                          {service.number}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
                          Dedicated Marketing Solution
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black uppercase font-display text-black mb-2">
                        {service.title}
                      </h3>

                      <p className="text-sm font-semibold text-zinc-800 mb-4">
                        {service.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-600 pt-4 border-t border-zinc-200">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-black" />
                          <span className="font-semibold text-zinc-800">{service.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-700">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>{service.territory}</span>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Deliverables & Action (Span 5) */}
                    <div className="lg:col-span-5 bg-white border border-zinc-200 p-6 flex flex-col justify-between h-full shadow-sm">
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3 pb-2 border-b border-zinc-100 font-bold">
                          Key Deliverables
                        </div>
                        <ul className="space-y-2.5 mb-6">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                              <Check className="w-4 h-4 text-black shrink-0 mt-0.5 stroke-[2.5]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-zinc-100">
                        <button
                          onClick={() => onNavigateToContactWithService(service.inquiryName)}
                          className="w-full py-3.5 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
                        >
                          <span>Inquire for {service.title.split(' ')[0]}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Unified Full-Funnel Growth Stack Banner */}
          <div className="mt-16 bg-black text-white p-8 sm:p-12 border border-zinc-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>TOTAL MARKET MONOPOLY · COMPLETE INTEGRATION</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black uppercase font-display text-white italic mb-4">
                  The Full-Funnel Growth Engine
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  Synchronize your entire digital footprint: a high-speed website, dominant Google Maps SEO, targeted Facebook and Google ad funnels, automated inbound lead capture, email customer retention, and 24/7 AI missed-call text-back.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-zinc-300">
                  <div className="p-3 bg-zinc-900 border border-zinc-800">
                    <span className="text-white font-bold block mb-0.5">01. Web & SEO</span>
                    Sub-0.4s speed + Google 3-Pack
                  </div>
                  <div className="p-3 bg-zinc-900 border border-zinc-800">
                    <span className="text-white font-bold block mb-0.5">02. Ads & Lead Gen</span>
                    Targeted Meta/Google Ad funnels
                  </div>
                  <div className="p-3 bg-zinc-900 border border-zinc-800">
                    <span className="text-white font-bold block mb-0.5">03. Email & AI Auto</span>
                    Retention + 24/7 missed-call text
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
                  Territory Exclusivity
                </div>
                <div className="text-xs text-zinc-400 mb-6">
                  Protected non-compete for your local area
                </div>
                <button
                  onClick={() => onNavigateToContactWithService('The Full-Funnel Growth Engine (All Services)')}
                  className="px-8 py-4 bg-white hover:bg-zinc-200 text-black text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
                >
                  <span>Check Territory Availability</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: Technical Deliverables Comparison Matrix */}
      <section className="py-16 md:py-20 bg-[#F8F9FA] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
              Deliverables Matrix
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase font-display text-black">
              System Scope Comparison
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 mt-2">
              Transparent breakdown of what is engineered and deployed in each digital marketing solution.
            </p>
          </div>

          <div className="overflow-x-auto border border-zinc-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50 text-[11px] font-mono uppercase tracking-wider text-zinc-600">
                  <th className="py-4 px-6 font-bold">Feature & Deliverable</th>
                  <th className="py-4 px-6 text-center font-bold">Web Design</th>
                  <th className="py-4 px-6 text-center font-bold">SEO & Maps</th>
                  <th className="py-4 px-6 text-center font-bold">Paid Ads</th>
                  <th className="py-4 px-6 text-center font-bold">Lead Gen</th>
                  <th className="py-4 px-6 text-center font-bold bg-zinc-100 text-black">Full-Funnel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-700">
                <tr>
                  <td className="py-3.5 px-6 font-medium text-black">Custom Mobile-First Website</td>
                  <td className="py-3.5 px-6 text-center text-black font-bold">Included</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center font-bold bg-zinc-50 text-black">Included</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-black">Sub-0.4s Mobile PageSpeed</td>
                  <td className="py-3.5 px-6 text-center text-black font-bold">Included</td>
                  <td className="py-3.5 px-6 text-center text-black font-bold">Audited</td>
                  <td className="py-3.5 px-6 text-center text-black font-bold">Landing Page</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center font-bold bg-zinc-50 text-black">Included</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-black">Google Maps 3-Pack Optimization</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center text-black font-bold">Included</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center font-bold bg-zinc-50 text-black">Included</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-black">Meta (Facebook) & Google Ad Campaigns</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center text-black font-bold">Included</td>
                  <td className="py-3.5 px-6 text-center text-black font-bold">Included</td>
                  <td className="py-3.5 px-6 text-center font-bold bg-zinc-50 text-black">Included</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-black">Automated Lead Triage & Qualification</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center text-black font-bold">Included</td>
                  <td className="py-3.5 px-6 text-center font-bold bg-zinc-50 text-black">Included</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-black">24/7 AI Missed-Call SMS Recovery</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center text-zinc-400">—</td>
                  <td className="py-3.5 px-6 text-center font-bold bg-zinc-50 text-black">Included</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-black">100% Territory Exclusivity Guarantee</td>
                  <td className="py-3.5 px-6 text-center text-black font-bold">Included</td>
                  <td className="py-3.5 px-6 text-center text-black font-bold">Included</td>
                  <td className="py-3.5 px-6 text-center text-black font-bold">Included</td>
                  <td className="py-3.5 px-6 text-center text-black font-bold">Included</td>
                  <td className="py-3.5 px-6 text-center font-bold bg-zinc-50 text-black">Guaranteed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: Direct Consultation CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-black uppercase font-display text-black mb-3">
            Ready to Dominate Your Local Market?
          </h3>
          <p className="text-zinc-600 text-sm max-w-lg mx-auto mb-6">
            We evaluate your market’s competitive landscape and provide a clear growth plan within 24 hours.
          </p>
          <button
            onClick={() => onNavigateToContactWithService('Full-Funnel Local Marketing Strategy')}
            className="px-8 py-3.5 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
          >
            <span>Check Your City Availability</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
