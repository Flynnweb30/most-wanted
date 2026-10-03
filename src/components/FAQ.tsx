import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you work with my direct competitors in my city?',
      a: 'Never. We operate on a strict 100% Territory Exclusivity policy. When we partner with your business, your market radius is legally locked—we will not take on any other business in your direct trade or medical specialty within your agreed metropolitan territory.',
    },
    {
      q: 'How does the 24/7 AI missed-call text-back system connect to my phone line?',
      a: 'It integrates seamlessly with your existing office or mobile phone number without requiring new hardware. When a customer calls and you are on a job, in a consultation, or closed after hours, our system automatically senses the missed call and sends an immediate personalized SMS within 15 seconds to keep the customer engaged and book the appointment.',
    },
    {
      q: 'How quickly does Google Maps 3-Pack ranking improve?',
      a: 'Initial technical remediation, Google Business Profile re-architecture, and citation updates are deployed within the first 14 days. Most local partners begin observing significant geo-grid ranking improvements and inbound call velocity surges between 30 and 60 days as Google indexes the new authority signals.',
    },
    {
      q: 'Why is sub-0.4s mobile speed so critical for a local business?',
      a: 'Over 80% of local customers search for contractors, doctors, attorneys, and trade specialists from their smartphone. Studies show that if a page takes more than 3 seconds to load on mobile, over 40% of visitors immediately bounce and tap the competitor directly below you on Google. Fast loading equals more phone calls.',
    },
    {
      q: 'What is required from me and my staff during setup?',
      a: 'Very little. We handle the entire technical workload—from custom coding and schema generation to Google Business Profile verification and AI SMS routing. We conduct one 30-minute kickoff discovery call to gather basic credentials and business FAQs, and then deliver your live systems on a fixed timeline.',
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-black" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 font-bold">
              Frequently Addressed Questions
            </span>
            <span className="w-2 h-2 bg-black" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200 text-xs font-mono font-bold text-black mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>“Whatever your ‘Most Wanted,’ we’ve got you covered.”</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-display text-black">
            Answers for Local Business Leaders
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAFAFA] border border-zinc-200 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-black">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 shrink-0 rounded-none border border-zinc-300 flex items-center justify-center transition-transform duration-200 ${
                      isOpen ? 'rotate-180 border-black text-black' : 'text-zinc-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-zinc-600 leading-relaxed border-t border-zinc-200 pt-4 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
