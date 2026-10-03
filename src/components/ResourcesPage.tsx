import React, { useState } from 'react';
import Logo from './Logo';
import localSearchImage from '../assets/images/local_business_mobile_search_1790992290957.jpg';
import { ArrowUpRight, BookOpen, Clock, Calendar, X, ArrowLeft, Bookmark, Share2, Sparkles } from 'lucide-react';
import { PageRoute } from './Navbar';

interface ResourcesPageProps {
  onNavigateToContact: () => void;
  onNavigate: (page: PageRoute) => void;
}

interface Article {
  id: string;
  title: string;
  category: 'maps' | 'web' | 'ai' | 'strategy';
  categoryLabel: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  takeaways: string[];
}

export default function ResourcesPage({ onNavigateToContact, onNavigate }: ResourcesPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'maps' | 'web' | 'ai'>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 'google-3-pack-blueprint',
      title: 'The 2026 Google 3-Pack Blueprint: How to Rank #1 for "Near Me" Searches in Your City',
      category: 'maps',
      categoryLabel: 'Google Maps SEO',
      readTime: '6 min read',
      date: 'Oct 2026',
      excerpt:
        'Over 60% of all high-intent local service clicks happen within the Google Local 3-Pack. The exact geo-grid signals, citation graph, and review factors that put your business at the very top.',
      takeaways: [
        'Geo-grid proximity signals can be expanded by building localized neighborhood suburb landing pages.',
        'Primary Google Business Profile categorization drives 70% of initial ranking weight.',
        'Regular photo uploads and customer review responses signal active local authority to the algorithm.',
      ],
      content: [
        'When a homeowner has a burst pipe, a family needs an emergency dental consult, or a business requires litigation counsel, they do not scroll through page two of Google. They open their smartphone and tap the first reputable business in the Google Local 3-Pack.',
        'Dominating the 3-Pack is not about stuffing keywords into your business name—which Google now actively penalizes. It requires an authoritative local entity footprint: 100% NAP consistency across major consumer directories (Apple Maps, Bing, Yelp, Better Business Bureau), localized schema markup, and geo-targeted service area content.',
        'By systematically structuring your Google Business Profile and reinforcing it with genuine local customer reviews, your business becomes Google first recommendation across your entire metropolitan service radius.',
      ],
    },
    {
      id: 'missed-call-text-back',
      title: 'Why 62% of Missed Calls Go to Competitors: The 15-Second SMS Text-Back Rule',
      category: 'ai',
      categoryLabel: 'AI Automation',
      readTime: '5 min read',
      date: 'Sep 2026',
      excerpt:
        'When local buyers call your business and hit voicemail, over 80% hang up and call the next competitor on Google. How automated 15-second text-back recovers $10k+ in lost monthly revenue.',
      takeaways: [
        'Over 80% of consumers who reach a voicemail do not leave a message; they immediately call another provider.',
        'An automated SMS sent within 15 seconds keeps 78% of prospects engaged on your line.',
        'Automated calendar booking eliminates the frustrating game of phone tag.',
      ],
      content: [
        'As an active local business owner, you cannot be glued to your phone 24 hours a day. You are managing staff, performing consultations, or spending evenings with your family.',
        'Yet modern consumers demand instant gratification. If they call during dinner or on a Saturday afternoon and get no answer, they immediately click the next competitor in Google Maps.',
        'Our automated missed-call system triggers an instant SMS text-back within 15 seconds: "Hi, this is [Business Name]. Sorry we missed your call! How can we help you today?" This simple automation stops the prospect from calling competitors, answers their preliminary questions, and books the appointment directly on your calendar.',
      ],
    },
    {
      id: 'sub-second-local-web',
      title: 'The Modern High-Converting Local Website: Why Sub-0.4s Mobile Speeds Outperform Ad Spend',
      category: 'web',
      categoryLabel: 'Local Web Architecture',
      readTime: '7 min read',
      date: 'Aug 2026',
      excerpt:
        'Local businesses waste thousands on Google Ads while their website takes 4 seconds to load on mobile. Why speed and tap-to-call UX are the greatest conversion levers in local marketing.',
      takeaways: [
        'Every second of mobile latency reduces phone call conversion by up to 20%.',
        'Direct click-to-call buttons and tap-to-navigate maps must be permanently anchored for mobile thumbs.',
        'Prominently displaying verified Google 5-star reviews near the call CTA removes buyer skepticism.',
      ],
      content: [
        'Most local websites are built on bloated WordPress themes loaded with 25 conflicting plugins that crawl on mobile cellular connections.',
        'When prospective clients click your site from Google Maps or local search, they want three things immediately: proof that you are reputable, confirmation that you serve their neighborhood, and an effortless way to call or book.',
        'By deploying a custom headless React codebase, your pages load in under 0.4 seconds. The result is instant customer satisfaction, higher search engine rank, and a dramatic surge in inbound calls.',
      ],
    },
    {
      id: 'automated-review-velocity',
      title: 'The Automated Review Velocity System: Turning 5-Star Reviews into High-Value Calls',
      category: 'strategy',
      categoryLabel: 'Reputation Strategy',
      readTime: '6 min read',
      date: 'Jul 2026',
      excerpt:
        'Why the volume and recency of 5-star Google reviews directly dictate your Google Maps ranking, and how to automate customer review requests hands-free.',
      takeaways: [
        'Google algorithm heavily favors "review velocity"—consistent weekly reviews outperform a burst followed by silence.',
        'Automated SMS review requests sent within 1 hour of service completion achieve 4x higher response rates than emails.',
        'Negative feedback filtering allows managers to resolve issues before a customer posts a public review.',
      ],
      content: [
        'You provide exceptional service, but satisfied customers rarely think to leave a Google review unless prompted at the exact moment of peak satisfaction.',
        'Our automated review engine connects directly to your invoicing or CRM software. When a job is completed or payment is received, the client receives a polite, 1-tap SMS link directly to your Google review page.',
      ],
    },
    {
      id: 'territory-exclusivity',
      title: 'Territory Exclusivity vs Shared Directory Leads: Why Paying for Shared Leads Is Costing You Millions',
      category: 'strategy',
      categoryLabel: 'Business Growth',
      readTime: '6 min read',
      date: 'Jun 2026',
      excerpt:
        'Why lead generation directories that sell the same phone lead to 5 contractors create race-to-the-bottom price wars, and why owning your own local traffic is essential.',
      takeaways: [
        'Shared lead aggregators force businesses to compete solely on lowest price.',
        'Owning your own Google Maps ranking produces exclusive, high-margin inbound phone calls.',
        'Territory exclusivity guarantees your marketing partner is never working for your direct competitor.',
      ],
      content: [
        'Many local business owners rely on national lead platforms (Angi, Thumbtack, HomeAdvisor) that charge $80–$150 per lead, only to send that identical lead to four other competitors.',
        'The homeowner gets bombarded by five calls within two minutes, initiating a stressful price war where your margins get crushed.',
        'When you own the #1 Google 3-Pack spot and a high-converting website, every inbound call is 100% exclusive to you. The client is calling your business by name because they already trust your reputation.',
      ],
    },
  ];

  const filteredArticles =
    activeCategory === 'all'
      ? articles
      : articles.filter((a) => a.category === activeCategory || (activeCategory === 'web' && a.category === 'strategy'));

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
              <span className="text-white font-bold">Resources & Local Blueprints</span>
            </div>

            {/* Signature Attention Hook */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 mb-4 text-xs font-mono text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>“Whatever your ‘Most Wanted,’ we’ve got you covered.”</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase font-display italic tracking-tight text-white mb-6">
              Local Business Growth Playbooks.
            </h1>

            <p className="text-base sm:text-xl font-normal text-zinc-300 leading-relaxed max-w-2xl border-l-2 border-white pl-5">
              Actionable guides and tactical frameworks on dominating Google Maps, converting local smartphone searchers, and capturing 100% of inbound calls.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Featured Guide Banner */}
      <section className="py-12 bg-[#FAFAFA] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-zinc-200 p-8 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative border border-zinc-200 overflow-hidden bg-zinc-100">
                  <img
                    src={localSearchImage}
                    alt="Smartphone on desk showing top local Google search results"
                    referrerPolicy="no-referrer"
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1">
                    Featured Local Guide
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                  <span>Google Maps SEO</span>
                  <span aria-hidden="true">·</span>
                  <span>Published Oct 2026</span>
                  <span aria-hidden="true">·</span>
                  <span>6 min read</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black uppercase font-display text-black leading-tight">
                  The 2026 Google 3-Pack Blueprint: How to Rank #1 for "Near Me" Searches in Your City
                </h2>

                <p className="text-zinc-600 text-sm leading-relaxed">
                  Over 60% of all high-intent local service clicks happen within the Google Local 3-Pack. Learn the exact geo-grid signals, citation authority graph, and review factors that put your business at the very top.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedArticle(articles[0])}
                    className="px-6 py-3 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>Read Full Blueprint</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Filter Bar & Article Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Segmented Filter */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-zinc-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                Field Intelligence
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-display text-black">
                Articles & Local Playbooks
              </h3>
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
                All Playbooks
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
                onClick={() => setActiveCategory('ai')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === 'ai'
                    ? 'bg-black text-white shadow-sm'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                AI Text-Back
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
            </div>
          </div>

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-[#FAFAFA] border border-zinc-200 hover:border-black transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono mb-3">
                    <span>{article.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4 className="text-xl font-black uppercase font-display text-black mb-3 leading-snug group-hover:underline">
                    {article.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">{article.date}</span>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-xs font-bold uppercase tracking-wider text-black flex items-center gap-1 cursor-pointer group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Playbook</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white border border-zinc-200 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Modal Header */}
            <div className="sticky top-0 bg-black text-white px-6 py-4 flex items-center justify-between z-10 border-b border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
                <span className="text-white font-bold">{selectedArticle.categoryLabel}</span>
                <span>/</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close article reader"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Article Content */}
            <div className="p-6 sm:p-10 space-y-6">
              <div>
                <div className="text-xs font-mono text-zinc-500 mb-2">{selectedArticle.date}</div>
                <h2 className="text-2xl sm:text-4xl font-black uppercase font-display text-black leading-tight mb-4">
                  {selectedArticle.title}
                </h2>
                <p className="text-base text-zinc-600 font-medium pb-6 border-b border-zinc-200 leading-relaxed">
                  {selectedArticle.excerpt}
                </p>
              </div>

              {/* Core Takeaways Callout */}
              <div className="p-5 bg-zinc-50 border-l-4 border-black">
                <div className="text-xs font-mono uppercase tracking-wider text-black font-bold mb-3">
                  Key Strategic Takeaways
                </div>
                <ul className="space-y-2">
                  {selectedArticle.takeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                      <span className="font-bold text-black">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Prose Paragraphs */}
              <div className="space-y-4 pt-4">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Reader Action Footer */}
              <div className="pt-8 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 border border-zinc-300 text-xs font-bold uppercase tracking-wider text-zinc-700 hover:text-black cursor-pointer"
                >
                  Back to All Playbooks
                </button>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onNavigateToContact();
                  }}
                  className="px-6 py-2.5 bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm active:scale-95"
                >
                  Discuss Implementing in Your City
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: Inquire CTA */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-200 text-xs font-mono font-bold text-black mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>“Whatever your ‘Most Wanted,’ we’ve got you covered.”</span>
          </div>
          <h3 className="text-3xl font-black uppercase font-display text-black mb-3">
            Want to Deploy These Systems in Your Market?
          </h3>
          <p className="text-zinc-600 text-sm max-w-lg mx-auto mb-6">
            We apply these exact local playbooks in every high-performance territory we engineer.
          </p>
          <button
            onClick={onNavigateToContact}
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
