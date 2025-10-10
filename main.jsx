import React from 'react';

export default function PolarityMediaSite() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [persona, setPersona] = React.useState("smb");
  const [annual, setAnnual] = React.useState(false);
  const [active, setActive] = React.useState("home");
  const [openFAQ, setOpenFAQ] = React.useState(null);

  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;
    const sections = document.querySelectorAll("section[id]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-50% 0px -40% 0px", threshold: 0.01 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const price = (base) => (annual ? Math.round(base * 10) : base);

  const services =
    persona === "infra"
      ? [
          {
            title: "Editorial + Analyst Brief",
            desc: "Weekly executive brief on enterprise infrastructure: cloud, networking, security, data center & AI infra—written for decision‑makers.",
          },
          {
            title: "Vendor Index Pages",
            desc: "SEO landing pages and profiles for your B2B products with category positioning and buyer‑persona copy.",
          },
          {
            title: "Launch PR Lite (B2B)",
            desc: "Announcement page, media list, analyst angles and LinkedIn carousel set for GTM teams.",
          },
        ]
      : [
          { title: "Editorial Brand Kit", desc: "Voice, headlines, bio, storylines and a press‑ready one‑pager." },
          { title: "Social Content Studio", desc: "12 posts + 4 carousels + 4 reels/mo with hooks and CTAs. Scheduling included." },
          { title: "Launch PR Lite", desc: "Media list + pitch angles + founder Q&A + 1 announcement page on your site." },
        ];

  const faq = [
    {
      q: "Are you affiliated with Advance Publications / Condé Nast?",
      a: "No—Polarity is independent. We're simply inspired by their editorial standards, and we understand how to package stories brands and local press actually want.",
    },
    {
      q: "Can this be deployed privately?",
      a: "Yes. We support private or invite‑only deployments (e.g., Vercel with password protection, Cloudflare Access, Netlify Pro Basic Auth, or an Nginx reverse proxy).",
    },
    {
      q: "Do I need a backend?",
      a: "Not for the landing pages. You can add a small /api/contact endpoint for forms and keep the rest static.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-sans { font-family: 'Inter', system-ui, sans-serif; }
        
        .navlink { 
          font-size: 0.8125rem; 
          letter-spacing: 0.025em; 
          text-transform: uppercase;
          padding: 0.5rem 0;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s;
        }
        .navlink:hover, .navlink.active { 
          border-bottom-color: #18181b;
        }
        
        html { scroll-behavior: smooth; }
        
        .editorial-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 2rem;
        }
        
        .fade-in {
          animation: fadeIn 0.6s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header - Minimal & Editorial */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 rounded-sm" />
            <span className="font-serif text-xl font-light tracking-tight">Polarity Media</span>
          </a>
          
          <nav className="hidden lg:flex items-center gap-8 font-sans">
            {[
              {id:'work',label:'Work'},
              {id:'services',label:'Services'},
              {id:'packages',label:'Packages'},
              {id:'about',label:'About'},
            ].map((l)=> (
              <a key={l.id} href={`#${l.id}`} className={`navlink ${active===l.id ? 'active' : ''}`}>
                {l.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden lg:block px-6 py-2.5 text-xs font-sans font-medium tracking-wider uppercase bg-zinc-900 text-white hover:bg-zinc-800 transition">
              Start Project
            </a>
            <button 
              aria-label="Menu" 
              onClick={()=>setMenuOpen(s=>!s)} 
              className="lg:hidden w-10 h-10 flex items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
        
        {menuOpen && (
          <div className="lg:hidden border-t border-zinc-200 bg-white">
            <div className="max-w-screen-2xl mx-auto px-6 py-6 space-y-4 font-sans">
              {['work','services','packages','about','contact'].map((id)=> (
                <a 
                  key={id} 
                  onClick={()=>setMenuOpen(false)} 
                  href={`#${id}`} 
                  className="block text-sm tracking-wider uppercase hover:text-zinc-600"
                >
                  {id}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero - Editorial Layout */}
      <section id="home" className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-3 text-xs font-sans tracking-wider uppercase text-zinc-500">
                <span>Editorial Studio</span>
                <span>·</span>
                <button 
                  onClick={()=>setPersona(p=>p==='smb'?'infra':'smb')} 
                  className="underline hover:text-zinc-900"
                >
                  {persona==='smb'?'Switch to Enterprise':'Switch to Small Business'}
                </button>
              </div>
              
              <h1 className="font-serif text-5xl lg:text-7xl font-light leading-[1.1] tracking-tight">
                {persona==='infra' ? (
                  <>Editorial clarity for enterprise infrastructure</>
                ) : (
                  <>Premium storytelling for small businesses</>
                )}
              </h1>
              
              <p className="font-sans text-lg lg:text-xl text-zinc-600 leading-relaxed max-w-2xl">
                {persona==='infra'
                  ? 'We transform complex cloud, networking, security and AI infrastructure into compelling narratives that drive pipeline and thought leadership.'
                  : 'Magazine-quality narratives across digital, social and PR. Editorial standards without the overhead of traditional publishers.'}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#packages" className="px-8 py-4 bg-zinc-900 text-white text-xs font-sans font-medium tracking-wider uppercase hover:bg-zinc-800 transition">
                  View Packages
                </a>
                <a href="#work" className="px-8 py-4 border border-zinc-900 text-xs font-sans font-medium tracking-wider uppercase hover:bg-zinc-50 transition">
                  See Work
                </a>
              </div>
              
              <p className="text-xs font-sans text-zinc-400 italic">
                * Inspired by Condé Nast & Advance Local editorial standards. Independent studio.
              </p>
            </div>
            
            <div className="lg:col-span-5">
              <div className="aspect-[3/4] bg-zinc-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 via-zinc-100 to-white opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white via-white to-transparent">
                  <div className="font-serif text-sm text-zinc-500">Editorial Excellence</div>
                  <div className="font-sans text-xs text-zinc-400 mt-1">Premium Content Studio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work - Magazine Layout */}
      <section id="work" className="py-24 border-t border-zinc-200">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-light">Selected Work</h2>
              <p className="font-sans text-sm text-zinc-500 mt-2 tracking-wide uppercase">Case Studies</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {(
              persona==='infra'
                ? [
                    { title: 'Edge Security Platform', tag: 'B2B Infrastructure', desc: 'LinkedIn series, analyst brief, and launch positioning' },
                    { title: 'Observability Suite', tag: 'Enterprise SaaS', desc: 'Website narrative refresh and positioning framework' },
                    { title: 'GPU Cloud Provider', tag: 'AI Infrastructure', desc: 'Founder storytelling and technical content strategy' },
                    { title: 'SASE for Enterprise', tag: 'Network Security', desc: 'Visual content system and sales enablement' },
                  ]
                : [
                    {title:'Boutique Beauty Brand', tag:'Consumer Launch', desc:'Complete brand narrative, social strategy, and PR campaign'},
                    {title:'Specialty Coffee Roaster', tag:'Local Business', desc:'Founder story, visual identity, and digital presence'},
                    {title:'Campus Streetwear', tag:'Fashion Retail', desc:'Creator partnerships and product launch strategy'},
                    {title:'Wellness Studio', tag:'Health & Lifestyle', desc:'Content calendar, email revamp, and media features'},
                  ]
            ).map((c,idx)=> (
              <a key={idx} href="#" className="group block space-y-4">
                <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-50 group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="space-y-2">
                  <div className="font-sans text-xs tracking-wider uppercase text-zinc-500">{c.tag}</div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-light">{c.title}</h3>
                  <p className="font-sans text-sm text-zinc-600 leading-relaxed">{c.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Clean Grid */}
      <section id="services" className="py-24 bg-zinc-50">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">
              Services {persona==='infra' && <span className="text-zinc-400">for Enterprise Infrastructure</span>}
            </h2>
            <p className="font-sans text-zinc-600 text-lg">Editorial precision. {persona==='infra' ? 'Technical clarity' : 'Creative execution'}. Strategic impact.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((s,i)=> (
              <div key={s.title} className="bg-white p-8 space-y-4 border border-zinc-200 hover:border-zinc-900 transition">
                <div className="font-sans text-xs tracking-widest uppercase text-zinc-400">0{i+1}</div>
                <h3 className="font-serif text-2xl font-light">{s.title}</h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages - Refined Pricing */}
      <section id="packages" className="py-24 border-t border-zinc-200">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-4">Investment</h2>
            <p className="font-sans text-zinc-600 mb-8">Transparent pricing. Flexible terms.</p>
            
            <div className="inline-flex items-center gap-1 border border-zinc-300 p-1">
              <button 
                onClick={()=>setAnnual(false)} 
                className={`px-6 py-2 text-xs font-sans tracking-wider uppercase transition ${!annual? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:text-zinc-900'}`}
              >
                Monthly
              </button>
              <button 
                onClick={()=>setAnnual(true)} 
                className={`px-6 py-2 text-xs font-sans tracking-wider uppercase transition ${annual? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:text-zinc-900'}`}
              >
                Annual <span className="ml-1 text-zinc-400 normal-case">(Save 17%)</span>
              </button>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {name:'Starter', base:799, suffix:'/mo', items:['Brand foundation kit','8 social posts + 2 reels','Performance analytics'], cta:'Begin'},
              {name:'Growth', base:1999, suffix:'/mo', items:['Strategic content calendar','12 posts + 4 reels monthly','Creator partnerships','Executive reporting'], cta:'Schedule Call', featured:true},
              {name:'Launch', base:3500, suffix:' project', items:['Complete launch strategy','Professional shoot (half-day)','Landing page + email sequence'], cta:'Plan Launch', onetime:true},
            ].map((p)=> {
              const priceValue = p.onetime ? p.base : price(p.base);
              const suffix = p.onetime ? p.suffix : annual ? '/yr' : '/mo';
              return (
                <div key={p.name} className={`bg-white p-10 space-y-6 ${p.featured? 'border-2 border-zinc-900' : 'border border-zinc-200'}`}>
                  <div>
                    <div className="font-sans text-xs tracking-widest uppercase text-zinc-500 mb-4">{p.name}</div>
                    <div className="font-serif text-5xl font-light">
                      ${priceValue.toLocaleString()}
                      <span className="text-lg font-sans text-zinc-500">{suffix}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 pt-6 border-t border-zinc-200">
                    {p.items.map((it)=> (
                      <li key={it} className="flex gap-3 font-sans text-sm text-zinc-700">
                        <span className="text-zinc-400">—</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="#contact" 
                    className={`block w-full text-center px-6 py-4 text-xs font-sans font-medium tracking-wider uppercase transition ${
                      p.featured 
                        ? 'bg-zinc-900 text-white hover:bg-zinc-800' 
                        : 'border border-zinc-900 hover:bg-zinc-50'
                    }`}
                  >
                    {p.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About - Editorial Two-Column */}
      <section id="about" className="py-24 bg-zinc-50">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-light mb-8">The Polarity Approach</h2>
              <div className="space-y-6 font-sans text-zinc-700 leading-relaxed">
                <p>We bring magazine-level editorial standards to brand storytelling. Our process is influenced by the workflows of Condé Nast and Advance Local—publications known for narrative precision and visual excellence.</p>
                <p>Every piece of content is crafted with the same attention to detail you'd expect from premium editorial: considered headlines, strategic positioning, and execution that reflects your brand's sophistication.</p>
                <p>We work lean, move fast, and deliver content that converts while maintaining the polish of traditional media.</p>
              </div>
            </div>
            
            <div className="bg-white p-10 border border-zinc-200">
              <div className="font-sans text-xs tracking-widest uppercase text-zinc-500 mb-6">Capabilities</div>
              <div className="grid grid-cols-2 gap-4">
                {['Brand Voice & Strategy','Visual Content Systems','Editorial Copywriting','Social Media Production','Media Relations','Performance Analytics'].map((t)=> (
                  <div key={t} className="font-sans text-sm text-zinc-700 pb-4 border-b border-zinc-100">{t}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Minimalist */}
      <section className="py-24 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-12">Questions</h2>
          <div className="divide-y divide-zinc-200">
            {faq.map((f,i)=> (
              <div key={i} className="py-6">
                <button 
                  onClick={()=>setOpenFAQ(openFAQ===i? null : i)} 
                  className="w-full text-left flex items-start justify-between gap-4 group"
                >
                  <span className="font-sans text-lg">{f.q}</span>
                  <span className="text-2xl font-light text-zinc-400 group-hover:text-zinc-900 transition flex-shrink-0">
                    {openFAQ===i? '−' : '+'}
                  </span>
                </button>
                {openFAQ===i && (
                  <p className="mt-4 font-sans text-zinc-600 leading-relaxed pr-8">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Statement Form */}
      <section id="contact" className="py-24 bg-zinc-900 text-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl lg:text-6xl font-light">Let's create something exceptional</h2>
            <p className="font-sans text-zinc-400 text-lg">Share your vision and we'll respond with a strategic content plan.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-8">
              <input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 h-14 px-6 bg-white/10 border border-white/20 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/40 font-sans"
              />
              <a
                href="#"
                onClick={(e)=>{
                  e.preventDefault();
                  const v = document.getElementById('email').value || '';
                  const mail = `mailto:hello@polarity.media?subject=Project%20inquiry&body=My%20email:%20${encodeURIComponent(v)}`;
                  window.location.href = mail;
                }}
                className="px-8 h-14 flex items-center justify-center bg-white text-zinc-900 text-xs font-sans font-medium tracking-wider uppercase hover:bg-zinc-100 transition whitespace-nowrap"
              >
                Start Conversation
              </a>
            </div>
            
            <p className="text-xs font-sans text-zinc-500 pt-4">
              Private deployment supported · Netlify · Namecheap · Vercel
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-zinc-900 text-white border-t border-white/10 py-16">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 font-sans text-sm">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white" />
                <span className="font-serif text-lg font-light">Polarity Media</span>
              </div>
              <p className="text-zinc-400 leading-relaxed max-w-sm">
                Editorial excellence for modern brands. {persona==='infra'?'Enterprise infrastructure narratives.':'Small business storytelling.'}
              </p>
            </div>
            
            <div>
              <div className="text-xs tracking-widest uppercase text-zinc-500 mb-4">Navigate</div>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#work" className="hover:text-white transition">Work</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#packages" className="hover:text-white transition">Packages</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
              </ul>
            </div>
            
            <div>
              <div className="text-xs tracking-widest uppercase text-zinc-500 mb-4">Connect</div>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} Polarity Media · Independent Studio · Inspired by Editorial Excellence
          </div>
        </div>
      </footer>
    </div>
  );
}
