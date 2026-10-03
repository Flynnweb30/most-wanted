import React from 'react';
import Logo from './Logo';
import teamWorkspaceImage from '../assets/images/about_team_workspace_1790990928663.jpg';
import { ArrowUpRight, Check, ShieldCheck, Terminal, Users, Cpu, Target, Sparkles, MapPin } from 'lucide-react';
import { PageRoute } from './Navbar';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const leadership = [
    {
      name: 'Alex Thorne',
      role: 'Managing Partner & Systems Architect',
      bio: 'Directs local search architecture and high-throughput conversion infrastructure for established regional businesses across the U.S.',
      focus: 'Local Search & Business Systems',
    },
    {
      name: 'Elena Vance',
      role: 'Technical Director & Web Engineering',
      bio: 'Architect of sub-0.4s headless web storefronts and mobile conversion funnels that maximize local customer phone calls.',
      focus: 'Mobile Speed & Conversion Rate Optimization',
    },
    {
      name: 'Marcus Chen',
      role: 'Director of Local Search & Google 3-Pack',
      bio: 'Pioneered geo-grid local citation graphs and Google Business Profile optimization strategies that hold top 3 map rankings.',
      focus: 'Google Maps & Local Citations',
    },
    {
      name: 'Sarah Lindqvist',
      role: 'Lead AI Automation Engineer',
      bio: 'Designs instant missed-call text-back bots and automated client qualification workflows for high-volume local service businesses.',
      focus: '24/7 AI Lead Capture & SMS Pipelines',
    },
  ];

  const tenets = [
    {
      icon: Target,
      title: 'Phone Calls & Real Revenue Over Fluff',
      description: 'We do not build vanity websites that look pretty but ring zero phones. Every pixel, Google Maps citation, and automated SMS is engineered to put paying clients on your schedule.',
    },
    {
      icon: Users,
      title: '100% Territory Exclusivity',
      description: 'Unlike big directory platforms that sell leads to five competitors simultaneously, we partner with only ONE business per category in your agreed service territory. Your market is protected.',
    },
    {
      icon: Terminal,
      title: 'Direct Senior U.S. Specialists',
      description: 'No offshore customer service queues, junior account reps, or confusing technical jargon. You communicate directly with the senior strategists and developers building your systems.',
    },
    {
      icon: Cpu,
      title: 'Zero Lost Leads with 24/7 Automation',
      description: 'We integrate smart missed-call text-back systems so when you are on a job, in surgery, or home with your family, incoming prospects are instantly engaged and booked before calling someone else.',
    },
  ];

  const stats = [
    { value: '28+', label: 'Major U.S. Metro Markets Dominated' },
    { value: '180%+', label: 'Average Inbound Phone Call Surge' },
    { value: '100%', label: 'Exclusive Territory Protection' },
    { value: '< 15s', label: 'Average Automated Lead Response Time' },
  ];

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
              <span className="text-white font-bold">About the Studio</span>
            </div>

            {/* Signature Attention Hook */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 mb-4 text-xs font-mono text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>“Whatever your ‘Most Wanted,’ we’ve got you covered.”</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase font-display italic tracking-tight text-white mb-6">
              Built Exclusively for U.S. Local Leaders.
            </h1>

            <p className="text-base sm:text-xl font-normal text-zinc-300 leading-relaxed max-w-2xl border-l-2 border-white pl-5">
              Most Wanted was founded on an unapologetic standard: local business owners deserve modern engineering and measurable local market dominance, without the bureaucracy and empty promises of traditional agencies.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Studio Visual & Agency Manifesto */}
      <section className="py-16 md:py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6">
              <div className="relative border border-zinc-200 shadow-md overflow-hidden group">
                <img
                  src={teamWorkspaceImage}
                  alt="Most Wanted Studio Team Collaboration"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-zinc-200 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-black">
                  U.S. Operations & Client Strategy Team
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
                <Logo size="sm" variant="dark" showWordmark={false} />
                <span>Our Standard</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-black leading-tight">
                We Build Local Market Dominance That Compounds Over Time.
              </h2>

              <p className="text-zinc-600 text-base leading-relaxed">
                Most agencies treat local businesses as an afterthought, selling templated websites and cookie-cutter SEO checklists that produce zero phone calls. At Most Wanted, we treat your local business like the multi-million-dollar asset it is.
              </p>

              <p className="text-zinc-600 text-base leading-relaxed">
                We engineer your digital infrastructure from top to bottom: capturing the top 3 spots on Google Maps across your entire service radius, launching an ultra-fast mobile website that converts visitors, and deploying 24/7 automated text-back systems so no caller is left waiting.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
                >
                  <span>Inquire for Your Local Territory</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Core Operating Tenets */}
          <div className="border-t border-zinc-200 pt-16">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
                Our Commitments
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-display text-black">
                How We Protect & Grow Your Business
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tenets.map((tenet, idx) => {
                const Icon = tenet.icon;
                return (
                  <div
                    key={tenet.title}
                    className="p-6 bg-[#FAFAFA] border border-zinc-200 hover:border-black transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-mono text-zinc-400 mb-1">0{idx + 1}</div>
                      <h4 className="text-lg font-bold uppercase text-black font-display mb-3">
                        {tenet.title}
                      </h4>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {tenet.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Track Record Numbers */}
      <section className="py-16 bg-[#F8F9FA] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 bg-white border border-zinc-200 text-center shadow-sm">
                <div className="text-4xl lg:text-5xl font-black text-black font-display tabular-nums italic mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider font-bold text-zinc-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Senior Leadership */}
      <section className="py-16 md:py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
              Leadership Team
            </span>
            <h3 className="text-3xl sm:text-4xl font-black uppercase font-display text-black">
              Direct Technical Hands On Your Account
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base mt-2">
              Our partners personally oversee your local search geo-grid and website conversion funnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="p-6 border border-zinc-200 bg-[#FAFAFA] flex flex-col justify-between hover:border-zinc-400 transition-colors"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                    {leader.focus}
                  </div>
                  <h4 className="text-xl font-bold uppercase text-black font-display mb-1">
                    {leader.name}
                  </h4>
                  <div className="text-xs font-semibold text-zinc-700 mb-4 pb-3 border-b border-zinc-200">
                    {leader.role}
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Next Step CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Logo size="lg" variant="light" showWordmark={true} className="mx-auto mb-6 justify-center" />
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display italic mb-4">
            Whatever Your ‘Most Wanted,’ We’ve Got You Covered.
          </h2>
          <p className="text-zinc-300 text-base max-w-xl mx-auto mb-8">
            Tell us about your city, service trade, and local growth goals. We will check territory availability within 24 hours.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-white hover:bg-zinc-200 text-black text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
          >
            <span>Check Your Local Market</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </section>
    </div>
  );
}
