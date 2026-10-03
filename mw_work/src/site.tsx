import React, { FormEvent, useState } from 'react';

import heroImage from './assets/optimized/hero_agency_studio_1790990912798.webp';
import localHero from './assets/optimized/local_business_hero_1790992271022.webp';
import localSearch from './assets/optimized/local_business_mobile_search_1790992290957.webp';
import webCase from './assets/optimized/case_study_web_real_1790990101247.webp';
import seoCase from './assets/optimized/case_study_seo_real_1790990113917.webp';
import aiCase from './assets/optimized/case_study_ai_real_1790990124721.webp';
import aboutImage from './assets/optimized/about_team_workspace_1790990928663.webp';
import ecommerceImage from './assets/optimized/portfolio_ecommerce_showcase_1790990953376.webp';
import resourceImage from './assets/optimized/resources_editorial_desk_1790990969197.webp';

export type Navigate = (href: string) => void;

const Arrow = () => <svg className="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M5 3h8v8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const Check = () => <svg className="check" viewBox="0 0 16 16" aria-hidden="true"><path d="m3 8 3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const ArrowDown = () => <svg className="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v11M4 9l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;

export function HomePage({ onNavigate }: { onNavigate: Navigate }) {
  return <>
    <section className="hero section-dark">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">LOCAL GROWTH PARTNER · WEBSITES · SEARCH · LEADS</p>
          <h1>Be the business<br/><em>they ask for.</em></h1>
          <p className="hero-lead">Most Wanted builds the digital side of your business around one practical goal: make it easier for the right customers to find you, trust you, and take the next step.</p>
          <div className="button-row"><a className="button button-light" href="/contact/" onClick={(e)=>{e.preventDefault();onNavigate('/contact/')}}>Book a free growth review <Arrow/></a><a className="text-link light" href="/results/" onClick={(e)=>{e.preventDefault();onNavigate('/results/')}}>See the work <Arrow/></a></div>
          <div className="hero-proof"><span><b>01</b> Clear strategy</span><span><b>02</b> Practical execution</span><span><b>03</b> Measurable outcomes</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame"><img src={heroImage} alt="Modern creative team working on a digital project" fetchPriority="high" width="1376" height="768"/></div>
          <div className="hero-stamp"><img src="/most-wanted-logo.png" alt="Most Wanted" width="134" height="50"/><span>Built for businesses<br/>where every lead matters.</span></div>
        </div>
      </div>
    </section>

    <section className="ticker" aria-label="Most Wanted capabilities"><div className="ticker-track"><span>WEB DESIGN</span><b>✦</b><span>LOCAL SEO</span><b>✦</b><span>PAID ADS</span><b>✦</b><span>LEAD SYSTEMS</span><b>✦</b><span>CONVERSION</span><b>✦</b><span>WEB DESIGN</span><b>✦</b><span>LOCAL SEO</span></div></section>

    <section className="section section-light" id="verified-work">
      <div className="container">
        <SectionIntro kicker="03 / VERIFIED WORK & LOCAL IMPACT" title="Make your digital presence earn its place." text="A polished website is only the beginning. We connect visibility, conversion, and follow-up so the work supports the business — not the other way around."/>
        <div className="impact-grid">
          <article className="impact-card impact-main"><img src={localHero} alt="Local business website and customer acquisition concept" loading="lazy" width="1376" height="768"/><div className="impact-overlay"><span>Local business growth</span><strong>From “we need more leads” to a system the team can actually use.</strong></div></article>
          <div className="impact-stack"><article className="impact-stat"><span>WHAT WE LOOK FOR</span><strong>High-intent demand</strong><p>Where are customers already searching, comparing, calling, or asking for a recommendation?</p></article><article className="impact-stat"><span>WHAT WE FIX</span><strong>Friction</strong><p>Slow pages, weak offers, unclear calls to action, missed follow-up, and reporting that hides the useful answers.</p></article></div>
        </div>
      </div>
    </section>

    <section className="section section-paper"><div className="container"><SectionIntro kicker="04 / WHAT WE HANDLE" title="Three connected pieces. One accountable partner." text="You do not need another stack of disconnected tactics. You need the right foundation, demand generation, and a clear path from interest to enquiry."/>
      <div className="service-grid">{[
        ['01','Website','A faster, clearer website built around what customers need to know before they call, enquire, or book.'],
        ['02','Search & Ads','Local SEO and paid acquisition focused on commercial intent, not traffic for traffic’s sake.'],
        ['03','Lead Systems','Forms, booking flows, tracking, follow-up, and practical automations that help fewer opportunities slip away.']
      ].map(([num,title,text])=><article className="service-card" key={num}><span className="card-number">{num}</span><h3>{title}</h3><p>{text}</p><a href="/services/" onClick={(e)=>{e.preventDefault();onNavigate('/services/')}}>Explore capability <Arrow/></a></article>)}</div>
    </div></section>

    <section className="section section-dark"><div className="container split"><div><p className="eyebrow">A BETTER WAY TO BUY MARKETING</p><h2>Clear enough to approve.<br/><em>Strong enough to matter.</em></h2></div><div><p className="large-copy">We start with your business, customers, service area, current assets, and commercial priorities. Then we recommend the smallest useful system that can move the needle.</p><div className="check-list light-list">{['No bloated package just because it exists.','Plain-English priorities and next steps.','Tracking designed around enquiries and opportunities.','Work that your team can understand and keep using.'].map(x=><div key={x}><Check/>{x}</div>)}</div></div></div></section>

    <section className="section section-light"><div className="container"><SectionIntro kicker="05 / SELECTED WORK" title="Proof should be easy to understand." text="We use before-and-after thinking: what was getting in the way, what changed, and what the new system makes easier."/><div className="case-grid">{[
      [webCase,'Website conversion','A clearer service story, stronger mobile hierarchy, and a shorter path to enquiry.'],
      [seoCase,'Local search','A local visibility system built around service areas, customer intent, and useful pages.'],
      [aiCase,'Lead recovery','A practical follow-up layer that helps capture demand when the team cannot answer immediately.']
    ].map(([img,title,text])=><article className="case-card" key={String(title)}><img src={img as string} alt={String(title)} loading="lazy" width="1200" height="896"/><div className="case-body"><span>Most Wanted approach</span><h3>{title}</h3><p>{text}</p><a href="/results/" onClick={(e)=>{e.preventDefault();onNavigate('/results/')}}>View results <Arrow/></a></div></article>)}</div></div></section>

    <section className="section section-paper"><div className="container process"><SectionIntro kicker="06 / HOW IT WORKS" title="You talk. We map it. Then we get to work." text="The first step is not a proposal. It is a useful conversation about where growth is being lost and what would make the biggest difference."/><div className="process-grid">{[['01','Diagnose','We review your current site, visibility, offers, customer journey, and tracking.'],['02','Prioritise','We separate urgent fixes from useful upgrades and agree what success should look like.'],['03','Build','We design, write, configure, launch, and connect the agreed pieces.'],['04','Improve','We measure what happens next and keep refining around real customer behaviour.']].map(([n,t,d])=><div className="process-step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>

    <section className="section section-dark"><div className="container quote-section"><div className="quote-mark">“</div><blockquote>Marketing gets more useful when the business owner can explain what it is doing, why it matters, and what happens next.</blockquote><p>— The Most Wanted operating principle</p><a className="button button-light" href="/contact/" onClick={(e)=>{e.preventDefault();onNavigate('/contact/')}}>Start with a free review <Arrow/></a></div></section>
  </>;
}

export function ServicesPage({ onNavigate }: { onNavigate: Navigate }) {
  const services = [
    ['Website Design & Build','A conversion-first website that loads quickly, explains the offer clearly, and gives customers obvious next steps.',['Responsive UX and information architecture','Copy and page structure built around buying questions','Technical SEO foundations and analytics-ready implementation']],
    ['Local SEO','Make your business easier to discover across local search by aligning your site, location signals, service pages, and Google Business Profile strategy.',['Service-area and intent research','Local landing pages and on-site optimisation','Measurement focused on visibility and enquiries']],
    ['Google & Meta Ads','Paid campaigns built around the economics of your business, with clear landing experiences and practical tracking.',['Offer and audience planning','Creative, landing-page, and campaign testing','Budget and lead-quality reporting']],
    ['Lead Capture & Follow-Up','Turn interest into a consistent process with forms, booking paths, notifications, CRM connections, and follow-up.',['Lead routing and qualification','Booking and enquiry flows','Automated acknowledgement and recovery journeys']],
    ['Conversion Optimisation','Find the friction that makes good traffic underperform and fix the highest-impact pieces first.',['Page and funnel reviews','Message and CTA testing','Mobile-first usability improvements']],
    ['Ongoing Growth Support','A flexible operating layer for businesses that want a partner after launch instead of another project handover.',['Monthly priorities and reporting','Content and landing-page iterations','Performance review and next-step planning']]
  ];
  return <><PageHero kicker="SERVICES" title={<>Marketing systems built for<br/><em>real-world businesses.</em></>} text="Choose the pieces you need today. Connect them when the business is ready. Keep the plan understandable at every stage." image={localSearch} onNavigate={onNavigate}/>
    <section className="section section-light"><div className="container"><div className="service-list">{services.map(([title,desc,items],i)=><article className="service-detail" key={title as string}><div className="service-detail-head"><span>0{i+1}</span><div><h2>{title}</h2><p>{desc}</p></div></div><ul>{(items as string[]).map(item=><li key={item}><Check/>{item}</li>)}</ul><a className="text-link" href="/contact/" onClick={(e)=>{e.preventDefault();onNavigate('/contact/')}}>Talk about this service <Arrow/></a></article>)}</div></div></section>
    <section className="section section-dark"><div className="container cta-panel"><p className="eyebrow">NO ONE-SIZE-FITS-ALL PACKAGE</p><h2>Tell us what is getting in the way.</h2><p>We will help you work out what to fix first, what can wait, and what a sensible next step looks like.</p><a className="button button-light" href="/contact/" onClick={(e)=>{e.preventDefault();onNavigate('/contact/')}}>Book a free growth review <Arrow/></a></div></section></>;
}

export function AboutPage({ onNavigate }: { onNavigate: Navigate }) {
  return <><PageHero kicker="ABOUT MOST WANTED" title={<>A digital partner that keeps<br/><em>the business in view.</em></>} text="Most Wanted exists for owners who want capable digital work without turning marketing into another full-time job." image={aboutImage} onNavigate={onNavigate}/>
    <section className="section section-light"><div className="container split split-align"><div><p className="eyebrow">OUR APPROACH</p><h2>Useful work beats impressive-sounding work.</h2></div><div><p className="large-copy">We care about the parts a customer can actually experience: speed, clarity, trust, relevance, and an easy next step. Behind that, we build the measurement and operating structure needed to keep improving.</p><p>That means fewer vanity metrics, fewer disconnected tools, and more attention on the customer journey from first search to real conversation.</p></div></div></section>
    <section className="section section-paper"><div className="container values-grid">{[['01','Clarity','You should know what you are buying, what it is for, and what happens next.'],['02','Ownership','We take responsibility for the agreed work instead of handing you a checklist and walking away.'],['03','Practicality','The best system is the one your team can understand, use, and keep improving.'],['04','Evidence','We use customer behaviour and business outcomes to decide what deserves more attention.']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className="section section-light"><div className="container image-story"><img src={ecommerceImage} alt="Digital storefront and ecommerce experience" loading="lazy" width="1376" height="768"/><div><p className="eyebrow">BUILT TO SCALE SENSIBLY</p><h2>Start with the problem. Add complexity only when it earns its place.</h2><p>Some businesses need a better website. Others need local search, paid demand, lead routing, or a stronger follow-up process. Our job is to connect the pieces only when the commercial case is clear.</p><a className="text-link" href="/contact/" onClick={(e)=>{e.preventDefault();onNavigate('/contact/')}}>Talk through your situation <Arrow/></a></div></div></section>
  </>;
}

export function ResultsPage({ onNavigate }: { onNavigate: Navigate }) {
  const results = [[webCase,'Website & conversion','A service business needed a clearer path from mobile visit to enquiry. We rebuilt the hierarchy around customer questions, proof, and one primary action.','Outcome focus','More qualified enquiry opportunities'],[seoCase,'Local visibility','A location-led business needed stronger relevance for its highest-value services and service areas. We structured pages around commercial intent and local context.','Outcome focus','Better alignment between search intent and landing pages'],[aiCase,'Lead recovery','A busy team was losing opportunities whenever calls went unanswered. A faster response and booking path created a second chance for high-intent prospects.','Outcome focus','Fewer gaps between missed contact and follow-up']];
  return <><PageHero kicker="RESULTS & CASE STUDIES" title={<>Work should leave a<br/><em>visible difference.</em></>} text="We present results as business stories: the starting point, the intervention, and the outcome the system was designed to support." image={webCase} onNavigate={onNavigate}/>
    <section className="section section-light"><div className="container results-list">{results.map(([img,title,desc,label,outcome],i)=><article className="result-row" key={title as string}><img src={img as string} alt={String(title)} loading="lazy" width="1200" height="896"/><div><span className="eyebrow">0{i+1} / {title}</span><h2>{desc}</h2><p>{label}</p><strong>{outcome}</strong></div></article>)}</div></section>
    <section className="section section-paper"><div className="container metric-strip"><div><span>WHAT WE MEASURE</span><strong>Enquiries</strong><p>Are the right people taking action?</p></div><div><span>WHAT WE IMPROVE</span><strong>Conversion</strong><p>Does the experience make the next step easier?</p></div><div><span>WHAT WE PROTECT</span><strong>Clarity</strong><p>Can the owner see what is working?</p></div></div></section>
    <section className="section section-dark"><div className="container cta-panel"><p className="eyebrow">YOUR BUSINESS IS DIFFERENT</p><h2>Let’s find the useful story in your numbers.</h2><p>Bring your current website, ad account, search presence, or simply the problem you keep running into.</p><a className="button button-light" href="/contact/" onClick={(e)=>{e.preventDefault();onNavigate('/contact/')}}>Book a free growth review <Arrow/></a></div></section></>;
}

export function FAQPage({ onNavigate }: { onNavigate: Navigate }) {
  const faqs = [
    ['Do I need a new website to work with Most Wanted?','Not necessarily. We start by looking at what you already have. If the current site can be improved, we will say so. If it is creating more friction than value, we will explain why a rebuild may make sense.'],
    ['Do you only work with local businesses?','Our offer is designed around customer acquisition for service-led and local businesses, but the underlying approach can also support regional and multi-location teams.'],
    ['How do you report results?','We focus reporting on useful business signals: enquiries, booked actions, lead quality, campaign efficiency, search visibility, and the steps that influence them. The exact dashboard depends on your setup.'],
    ['Can you work with our existing CRM or booking software?','Yes. We prefer to work with the tools that already fit your operation where possible. We review the current setup before recommending replacements.'],
    ['How long does a website project take?','Timing depends on scope, content readiness, review cycles, and integrations. After the initial review, we give you a realistic timeline rather than a generic promise.'],
    ['Do you manage advertising budgets?','We can manage campaign setup and optimisation. Your media spend remains your budget, and we keep service fees and advertising spend clearly separated.'],
    ['What happens after launch?','You can keep working with us for ongoing improvements, campaigns, SEO, content, or lead-system support. If you prefer to manage internally, we hand over the agreed assets and access cleanly.'],
    ['Is the first conversation really free?','Yes. The first growth review is a practical conversation about your current situation and possible priorities. There is no obligation to buy anything.']
  ];
  const [open,setOpen] = useState<number|null>(0);
  return <><PageHero kicker="FAQ" title={<>Straight answers before<br/><em>you make a decision.</em></>} text="No technical homework. No pressure. Just the questions business owners usually want answered before they invest." image={resourceImage} onNavigate={onNavigate}/><section className="section section-light"><div className="container faq-list">{faqs.map(([q,a],i)=><div className={open===i?'faq-item open':'faq-item'} key={q}><button type="button" aria-expanded={open===i} onClick={()=>setOpen(open===i?null:i)}><span>{q}</span><b>{open===i?'−':'+'}</b></button><div className="faq-answer"><p>{a}</p></div></div>)}</div></section><section className="section section-dark"><div className="container cta-panel"><h2>Still have a question?</h2><p>Send us the situation in plain English. We will point you to the most relevant next step.</p><a className="button button-light" href="/contact/" onClick={(e)=>{e.preventDefault();onNavigate('/contact/')}}>Contact Most Wanted <Arrow/></a></div></section></>;
}

export function ContactPage({ onNavigate }: { onNavigate: Navigate }) {
  const [status,setStatus] = useState<'idle'|'sent'>('idle');
  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); const form = new FormData(e.currentTarget); const name=String(form.get('name')||''); const business=String(form.get('business')||''); const email=String(form.get('email')||''); const help=String(form.get('help')||''); const subject=encodeURIComponent(`Most Wanted growth review — ${business}`); const body=encodeURIComponent(`Name: ${name}\nBusiness: ${business}\nEmail: ${email}\nWhat I need help with:\n${help}`); window.location.href=`mailto:support@getmostwanted.com?subject=${subject}&body=${body}`; setStatus('sent'); };
  return <><PageHero kicker="CONTACT" title={<>Let’s make the next<br/><em>step obvious.</em></>} text="Tell us what is working, what is not, and what you want the business to do more of. We will take it from there." image={localHero} onNavigate={onNavigate}/><section className="section section-light"><div className="container contact-grid"><div className="contact-intro"><p className="eyebrow">FREE GROWTH REVIEW</p><h2>A conversation first. A clear plan before you commit.</h2><p>Bring your website, current marketing, or simply the problem you cannot quite solve. We will look at the customer journey and talk through practical options.</p><div className="contact-points"><span>01 <b>Business context</b></span><span>02 <b>Current digital presence</b></span><span>03 <b>Priorities and next step</b></span></div><a href="mailto:support@getmostwanted.com">support@getmostwanted.com</a></div><form className="contact-form" onSubmit={submit}><label>Name<input required name="name" autoComplete="name" placeholder="Your name"/></label><label>Business<input required name="business" autoComplete="organization" placeholder="Business name"/></label><label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@yourbusiness.com"/></label><label>What would you like help with?<textarea required name="help" rows={6} placeholder="For example: our website gets traffic but not enough enquiries..."></textarea></label><button className="button button-dark" type="submit">{status==='sent'?'Email draft opened':'Start the conversation'} <Arrow/></button><small>Submitting opens a pre-filled email in your default mail app. No information is stored by this static site.</small></form></div></section></>;
}

function SectionIntro({kicker,title,text}:{kicker:string;title:string;text:string}){return <div className="section-intro"><p className="eyebrow">{kicker}</p><h2>{title}</h2><p>{text}</p></div>}
function PageHero({kicker,title,text,image,onNavigate}:{kicker:string;title:React.ReactNode;text:string;image:string;onNavigate:Navigate}){return <section className="page-hero section-dark"><div className="container page-hero-grid"><div><p className="eyebrow">{kicker}</p><h1>{title}</h1><p className="hero-lead">{text}</p><div className="button-row"><a className="button button-light" href="/contact/" onClick={(e)=>{e.preventDefault();onNavigate('/contact/')}}>Book a free review <Arrow/></a><a className="text-link light" href="/results/" onClick={(e)=>{e.preventDefault();onNavigate('/results/')}}>See proof <Arrow/></a></div></div><div className="page-hero-image"><img src={image} alt="Most Wanted digital marketing work" width="1376" height="768" fetchPriority="high"/></div></div></section>}
