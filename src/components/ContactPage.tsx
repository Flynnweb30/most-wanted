import React, { useState } from 'react';
import Logo from './Logo';
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck, Mail, MapPin, Phone, Calendar, Clock, Sparkles } from 'lucide-react';
import { PageRoute } from './Navbar';

interface ContactPageProps {
  onBackToHome: () => void;
  onNavigate: (page: PageRoute) => void;
  preselectedService?: string;
}

export default function ContactPage({
  onBackToHome,
  onNavigate,
  preselectedService,
}: ContactPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [cityState, setCityState] = useState('');
  const [service, setService] = useState(
    preselectedService || 'Local Google 3-Pack & Maps Dominance'
  );
  const [growthGoal, setGrowthGoal] = useState('Rank #1 in Google Maps & Increase Phone Calls');
  const [preferredTime, setPreferredTime] = useState('This Week (Morning EST)');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const timeSlots = [
    'This Week (Morning EST)',
    'This Week (Afternoon EST)',
    'Next Week (Morning EST)',
    'Next Week (Afternoon EST)',
    'Email / Territory Feasibility Report First',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid work email.');
      return;
    }
    if (!businessName.trim()) {
      setError('Please provide your local business name or website.');
      return;
    }
    if (!cityState.trim()) {
      setError('Please provide your target City and State.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);
  };

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-white">
      {/* SECTION 1: Black Header with White Text */}
      <section className="bg-black text-white py-16 md:py-24 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6">
              <button
                onClick={onBackToHome}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-white font-bold">Territory & Inquiries</span>
            </div>

            {/* Signature Attention Hook */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 mb-4 text-xs font-mono text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>“Whatever your ‘Most Wanted,’ we’ve got you covered.”</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase font-display italic tracking-tight text-white mb-6">
              Check Territory Availability.
            </h1>

            <p className="text-base sm:text-xl font-normal text-zinc-300 leading-relaxed max-w-2xl border-l-2 border-white pl-5">
              We operate on strict territory exclusivity: only ONE partner per trade in your metropolitan radius. Submit your details to confirm your city is currently open.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Clean High-Contrast Contact Body */}
      <section className="py-16 md:py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="max-w-2xl mx-auto bg-[#FAFAFA] border border-zinc-200 p-8 sm:p-14 text-center space-y-6 shadow-md">
              <div className="w-14 h-14 bg-black text-white mx-auto flex items-center justify-center">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold">
                  Territory Check Requested
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-black mt-2">
                  Thank You, {name}.
                </h2>
                <p className="text-sm text-zinc-600 max-w-md mx-auto mt-3 leading-relaxed">
                  Our senior local growth architects are reviewing market availability for{' '}
                  <strong className="text-black">{businessName}</strong> in{' '}
                  <strong className="text-black">{cityState}</strong>. We will send our territory feasibility breakdown within 24 business hours.
                </p>
              </div>

              <div className="p-5 bg-white border border-zinc-200 text-left text-xs font-mono space-y-2 max-w-md mx-auto">
                <div className="flex justify-between text-zinc-600">
                  <span>Reference ID:</span>
                  <span className="text-black font-bold">
                    MW-{Math.floor(100000 + Math.random() * 900000)}
                  </span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Target Territory:</span>
                  <span className="text-black font-bold">{cityState}</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>System of Interest:</span>
                  <span className="text-black font-bold">{service}</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Guaranteed SLA:</span>
                  <span className="text-black font-bold">Under 24 Hours</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onBackToHome}
                  className="px-8 py-3.5 bg-black hover:bg-zinc-800 text-white font-bold uppercase tracking-wider text-xs cursor-pointer transition-colors shadow-sm"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Direct Studio Coordinates & Standards (Span 5) */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 bg-black" />
                    <span className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500 font-bold">
                      Direct Partner Access
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black uppercase font-display text-black leading-tight">
                    Lock In Your Market Exclusivity.
                  </h2>

                  <p className="text-sm text-zinc-600 leading-relaxed mt-4">
                    When you work with Most Wanted, we legally lock out your direct local competitors in your agreed radius. You will speak directly with senior U.S. search architects and developers.
                  </p>
                </div>

                {/* Studio Coordinates */}
                <div className="p-6 bg-[#FAFAFA] border border-zinc-200 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold pb-2 border-b border-zinc-200">
                    Direct Partner Office
                  </div>

                  <div className="space-y-3 text-xs text-zinc-700">
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-black font-mono">partners@mostwantedagency.com</div>
                        <div className="text-[11px] text-zinc-500">24-hour business response guarantee</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-black font-mono">+1 (212) 555-0198</div>
                        <div className="text-[11px] text-zinc-500">Direct Partner Line (Mon–Fri, 9am–6pm EST)</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-black">New York Studio</div>
                        <div className="text-[11px] text-zinc-500">450 Lexington Ave, New York, NY 10017</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What Happens Next */}
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-black font-bold">
                    What Happens On Your Free Territory Audit:
                  </div>
                  <div className="space-y-2.5 text-xs text-zinc-600">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 bg-zinc-100 border border-zinc-300 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold text-black">
                        1
                      </span>
                      <span><strong>Competitor Geo-Grid Audit:</strong> We scan your city to see which competitors are currently winning Google Maps 3-Pack clicks.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 bg-zinc-100 border border-zinc-300 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold text-black">
                        2
                      </span>
                      <span><strong>Missed-Call Leak Inspection:</strong> We model how many calls and consults your website and phone lines are leaking.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 bg-zinc-100 border border-zinc-300 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold text-black">
                        3
                      </span>
                      <span><strong>Territory Reservation:</strong> If your market is open, we reserve your radius and deliver a clear action plan.</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Clean Professional Form (Span 7) */}
              <div className="lg:col-span-7 bg-[#FAFAFA] border border-zinc-200 p-8 sm:p-12 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-black mb-1.5">
                    Request Local Territory Check
                  </h3>
                  <p className="text-xs text-zinc-600">
                    Provide your business details and city so our partners can review your market’s competitive landscape.
                  </p>
                </div>

                {error && (
                  <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 text-xs">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-700 font-bold block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Robert Miller"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-zinc-300 focus:border-black px-4 py-3 text-sm text-black focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-700 font-bold block mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="robert@millermedical.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-zinc-300 focus:border-black px-4 py-3 text-sm text-black focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-700 font-bold block mb-1.5">
                        Local Business Name / Website *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Miller Medical or millermedical.com"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full bg-white border border-zinc-300 focus:border-black px-4 py-3 text-sm text-black focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-700 font-bold block mb-1.5">
                        Target City & State *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Austin, TX"
                        value={cityState}
                        onChange={(e) => setCityState(e.target.value)}
                        className="w-full bg-white border border-zinc-300 focus:border-black px-4 py-3 text-sm text-black focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-700 font-bold block mb-1.5">
                        Primary System of Interest
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-white border border-zinc-300 focus:border-black px-4 py-3 text-xs text-black focus:outline-none transition-colors"
                      >
                        <option value="Web Design & Conversion Architecture">Web Design & Conversion Architecture</option>
                        <option value="Search Engine Optimization (SEO & Google 3-Pack)">Search Engine Optimization (SEO & Google 3-Pack)</option>
                        <option value="Targeted Paid Advertising (Facebook & Google Ads)">Targeted Paid Advertising (Facebook & Google Ads)</option>
                        <option value="Automated Lead Generation & Inbound Funnels">Automated Lead Generation & Inbound Funnels</option>
                        <option value="Email Marketing & Customer Retention">Email Marketing & Customer Retention</option>
                        <option value="24/7 AI Missed-Call Lead Recovery & Automation">24/7 AI Missed-Call Lead Recovery & Automation</option>
                        <option value="The Full-Funnel Growth Engine (All Services)">The Full-Funnel Growth Engine (All Services)</option>
                        <option value="General Local Territory Audit">General Local Territory Audit</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-700 font-bold block mb-1.5">
                        Primary Business Objective
                      </label>
                      <select
                        value={growthGoal}
                        onChange={(e) => setGrowthGoal(e.target.value)}
                        className="w-full bg-white border border-zinc-300 focus:border-black px-4 py-3 text-xs text-black focus:outline-none transition-colors"
                      >
                        <option value="Rank #1 in Google Maps & Increase Phone Calls">Rank #1 in Google Maps & Increase Phone Calls</option>
                        <option value="Stop Losing Missed Calls After Hours">Stop Losing Missed Calls After Hours</option>
                        <option value="Modernize Website to Convert More Mobile Visitors">Modernize Website to Convert More Mobile Visitors</option>
                        <option value="Complete Local Market Monopoly">Complete Local Market Monopoly</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-700 font-bold block mb-1.5">
                      Preferred Discussion Window
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-white border border-zinc-300 focus:border-black px-4 py-3 text-xs text-black focus:outline-none transition-colors"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-700 font-bold block mb-1.5">
                      Current Roadblocks or Target Service Zip Codes (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share your primary zip codes, local competitors you want to beat, or current phone call bottlenecks..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white border border-zinc-300 focus:border-black px-4 py-3 text-sm text-black focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-black hover:bg-zinc-800 text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all active:scale-95 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Checking Territory Availability...</span>
                      ) : (
                        <>
                          <span>Check Territory Availability</span>
                          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 font-mono pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-zinc-600" />
                    <span>100% confidential · Non-disclosure protected · 24-hour response</span>
                  </div>
                </form>
              </div>

            </div>
          )}
        </div>
      </section>
    </div>
  );
}
