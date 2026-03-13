import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Monitor, Cpu, Wifi, ArrowRight, Check,
  Phone, Mail, MapPin, Camera, Mic, Bot, PenTool,
  Lightbulb, MemoryStick, HardDrive, ScreenShare,
  ChevronLeft, ChevronRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL;

/* ─── Images ─────────────────────────────────────── */
const IMG_VALUE  = `${BASE}images/ID.jpg`;
const IMG_CSERIES = `${BASE}images/ID3.jpg`;
const IMG_PRO    = `${BASE}images/ID2.png`;

/* ─── Reusable scroll-reveal ─────────────────────── */
const useReveal = (sel, opts = {}) => {
  const { y = 30, x = 0, stagger = 0.1, start = 'top 85%' } = opts;
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(sel), {
        scrollTrigger: { trigger: el, start, toggleActions: 'play none none none' },
        opacity: 0, y, x, duration: 0.85, stagger, ease: 'power3.out',
      });
    }, el);
    return () => ctx.revert();
  }, [sel, y, x, stagger, start]);
  return ref;
};

const CORE_SPECS = [
  { label: "Memory", value: "8GB RAM" },
  { label: "Storage", value: "128GB ROM" },
  { label: "OS", value: "Android 14" },
  { label: "Certification", value: "EDLA Certified" },
];

/* ═══════════════════════════════════════════════
   FEATURE DATA FOR CAROUSEL
═══════════════════════════════════════════════ */
const PRO_FEATURES = [
  {
    icon: <Bot size={24} />,
    title: "Integrated AI Engine",
    desc: "Transform any lesson instantly. The Matrix Pro's onboard AI can draft lesson plans, generate live quizzes, and provide real-time translations without connecting an external PC.",
    tags: ["Lesson Generation", "Smart Summaries"]
  },
  {
    icon: <Camera size={24} />,
    title: "50MP AI Camera & 8-Mic",
    desc: "Crystal clear hybrid meetings with built-in auto-framing tracking and a 15m voice pickup range. Capture everything effortlessly.",
    tags: ["Auto-Framing", "15m Voice Pickup"]
  },
  {
    icon: <PenTool size={24} />,
    title: "Zero-Gap Optical Bonding",
    desc: "Experience pen-on-paper precision with Mohs 9 anti-glare glass and zero-gap optical bonding for the most natural writing experience.",
    tags: ["Mohs 9 Glass", "Anti-Glare"]
  },
  {
    icon: <Monitor size={24} />,
    title: "40-Point Multi-Touch",
    desc: "Collaborate seamlessly with up to 40 simultaneous touch points, turning any presentation into a highly interactive group session.",
    tags: ["Ultra Responsive", "40-Point Touch"]
  }
];

const CSERIES_FEATURES = [
  {
    icon: <Camera size={24} />,
    title: "Integrated A/V Communications",
    desc: "Built-in 12MP ultra-wide camera and 8-array microphone ensure remote participants never miss a beat. Perfect for hybrid classrooms.",
    tags: ["Wireless Casting", "Workspace Sync"]
  },
  {
    icon: <Wifi size={24} />,
    title: "Native Cloud Storage",
    desc: "Access your Google Drive securely right out of the box with EDLA certification and seamless cloud connectivity.",
    tags: ["Available & Included", "Seamless Access"]
  },
  {
    icon: <Monitor size={24} />,
    title: "40-Point Multi-Touch",
    desc: "Engage multiple users at once with pinpoint accuracy, making corporate brainstorming sessions truly collaborative.",
    tags: ["Fluid Ink", "40-Point Touch"]
  },
  {
    icon: <ScreenShare size={24} />,
    title: "Simultaneous Screen Sharing",
    desc: "Share up to 4 devices simultaneously onto the main display, accommodating an array of mobile and desktop operating systems without cables.",
    tags: ["4-Device Sync", "Zero Cables"]
  }
];

const ECO_FEATURES = [
  {
    icon: <Monitor size={24} />,
    title: "Enterprise-Grade Display",
    desc: "Experience the power of Matrix Edge at an accessible price point. The Eco Series delivers crystal-clear 4K UHD visuals for active learning.",
    tags: ["4K UHD", "Anti-Glare"]
  },
  {
    icon: <Mic size={24} />,
    title: "Optional A/V Upgrades",
    desc: "Strictly optional modular Camera & Microphone add-ons, allowing you to scale your AV setup entirely based on real needs.",
    tags: ["Modular", "Cost-Effective"]
  },
  {
    icon: <Cpu size={24} />,
    title: "Android 14 OS Base",
    desc: "Future-proof performance out of the box with the latest Android 14 operating system and full EDLA certification.",
    tags: ["Android 14", "EDLA Certified"]
  },
  {
    icon: <PenTool size={24} />,
    title: "40-Point Multi-Touch",
    desc: "Highly responsive 40-point multi-touch for interactive learning environments without breaking the budget.",
    tags: ["Responsive", "Multi-Touch"]
  }
];

/* ═══════════════════════════════════════════════
   FEATURE CAROUSEL COMPONENT
═══════════════════════════════════════════════ */
const FeatureCarousel = ({ features, badgeColor }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [features.length]);

  const nextSlide = () => setIndex(prev => (prev + 1) % features.length);
  const prevSlide = () => setIndex(prev => (prev === 0 ? features.length - 1 : prev - 1));

  const activeColorStr = 
    badgeColor === 'accent' ? 'text-accent' :
    badgeColor === 'blue' ? 'text-blue-400' :
    badgeColor === 'yellow' ? 'text-amber-400' :
    'text-emerald-400';
    
  const activeBgStr = 
    badgeColor === 'accent' ? 'bg-accent/10 border-accent/20' :
    badgeColor === 'blue' ? 'bg-blue-500/10 border-blue-500/20' :
    badgeColor === 'yellow' ? 'bg-amber-500/10 border-amber-500/20' :
    'bg-emerald-500/10 border-emerald-500/20';

  const dotActiveStr = 
    badgeColor === 'accent' ? 'bg-accent' :
    badgeColor === 'blue' ? 'bg-blue-400' :
    badgeColor === 'yellow' ? 'bg-amber-400' :
    'bg-emerald-400';

  const hoverBorderStr = 
    badgeColor === 'accent' ? 'hover:border-accent/40' :
    badgeColor === 'blue' ? 'hover:border-blue-500/40' :
    badgeColor === 'yellow' ? 'hover:border-amber-500/40' :
    'hover:border-emerald-500/40';

  return (
    <div className={`col-span-1 md:col-span-2 lg:col-span-3 relative overflow-hidden bg-[#111214] border border-white/5 rounded-2xl group transition-all duration-300 ${hoverBorderStr}`}>
      <div 
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] h-full w-full" 
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {features.map((f, i) => (
          <div key={i} className="min-w-full w-full flex-shrink-0 p-8 md:p-10 flex flex-col justify-between" style={{ width: '100%' }}>
            <div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${activeBgStr} ${activeColorStr}`}>
                {f.icon}
              </div>
              <h3 className="text-[26px] md:text-[28px] font-bold text-white mb-3 tracking-tight">{f.title}</h3>
              <p className="text-[15px] md:text-[16px] text-white/60 leading-relaxed mb-8 max-w-[90%] md:max-w-[85%]">
                {f.desc}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {f.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1.5 text-[11px] md:text-[12px] font-medium bg-white/5 border border-white/10 text-white/70 rounded-md shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Previous / Next Arrows */}
      <button 
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center text-white/30 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hidden md:flex"
      >
        <ChevronLeft size={28} />
      </button>

      <button 
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center justify-center text-white/30 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hidden md:flex"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute top-10 right-10 flex gap-2 z-10 bg-[#0a0a0a]/40 px-3 py-2 rounded-full backdrop-blur-md">
        {features.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? `${dotActiveStr} scale-125` : 'bg-white/30 hover:bg-white/60'}`} />
        ))}
      </div>
    </div>
  );
};


/* ═══════════════════════════════════════════════
   1. PAGE HERO
═══════════════════════════════════════════════ */
const PageHero = () => {
  const ref = useReveal('.ph-el', { y: 30 });
  return (
    <section ref={ref} className="relative bg-[#0a0a0a] min-h-[40vh] md:min-h-[50vh] flex flex-col items-center justify-center pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 flex flex-col items-center text-center gap-6 mt-16">
        <div className="ph-el inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-[11px] font-medium tracking-wide text-white/80">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          The Matrix Edge Lineup
        </div>

        <h1 className="ph-el text-[48px] md:text-[64px] lg:text-[72px] font-bold text-white leading-[1.05] tracking-tight">
          The future of the classroom.<br className="hidden md:block" />
          <span className="text-white/40">Found here.</span>
        </h1>

        <p className="ph-el text-[16px] md:text-[18px] text-white/60 leading-[1.6] max-w-2xl mx-auto font-medium mb-8">
          Three powerful interactive series. One unified ecosystem. Engineered to transform learning outcomes across every budget and environment.
        </p>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SHARED SERIES SECTION WRAPPER
═══════════════════════════════════════════════ */
const SeriesSection = ({ id, badge, title, subtitle, img, badgeColor = "accent", children }) => {
  const ref = useReveal('.sec-el', { y: 30 });
  
  const badgeColors = {
    accent: "bg-accent/10 border-accent/20 text-accent",
    white: "bg-white/5 border-white/10 text-white/80",
    green: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    yellow: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  };
  
  const markerColors = {
    accent: "bg-accent animate-pulse",
    white: "bg-white/50",
    green: "bg-emerald-400 animate-pulse",
    blue: "bg-blue-400 animate-pulse",
    yellow: "bg-amber-400 animate-pulse",
  };
  
  const markerColor = markerColors[badgeColor] || "bg-white/50";

  return (
    <section id={id} ref={ref} className="bg-[#0a0a0a] border-b border-white/5 py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Stage 1: The Reveal */}
        <div className="sec-el flex flex-col items-center text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-[11px] font-bold tracking-widest uppercase mb-6 ${badgeColors[badgeColor]}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${markerColor}`} />
            {badge}
          </div>
          <h2 className="text-[48px] md:text-[64px] font-bold text-white tracking-tight leading-none mb-4">
            {title}
          </h2>
          <p className="text-[18px] md:text-[22px] text-white/50 font-medium text-center max-w-2xl">
            {subtitle}
          </p>
        </div>

        <div className="sec-el relative w-full mb-10 md:mb-24 flex justify-center">
          <div className="absolute inset-x-0 bottom-[-20%] h-[50%] bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <img src={img} alt={title} className="w-full object-contain max-h-[700px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)] mx-auto relative z-10" />
        </div>

        {/* Stage 2: The Grid With Carousel */}
        <div className="sec-el w-full">
          {children}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   2. PRO SERIES
═══════════════════════════════════════════════ */
const ProSeriesDeepDive = () => (
  <SeriesSection id="pro" badge="Flagship" title="Pro Series." subtitle="The ultimate teaching engine." img={IMG_PRO} badgeColor="yellow">
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
      {/* Dynamic Feature Slider (takes 3 columns) */}
      <FeatureCarousel features={PRO_FEATURES} badgeColor="yellow" />

      {/* Hardware Specs List (takes 1 column) */}
      <div className="bg-[#111214] border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-[360px] lg:h-auto">
        <div>
          <h3 className="text-[18px] font-bold text-white mb-6">Core Hardware</h3>
          <div className="flex flex-col gap-4">
            {CORE_SPECS.map((spec, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <span className="text-[14px] text-white/50">{spec.label}</span>
                <span className="text-[14px] font-bold text-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SeriesSection>
);

/* ═══════════════════════════════════════════════
   3. C-SERIES
═══════════════════════════════════════════════ */
const CSeriesDeepDive = () => (
  <SeriesSection id="cseries" badge="Corporate & Classroom Hybrid" title="C-Series." subtitle="The versatile workhorse. Engineered for environments that demand flexibility." img={IMG_CSERIES} badgeColor="blue">
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
      {/* Dynamic Feature Slider (takes 3 columns) */}
      <FeatureCarousel features={CSERIES_FEATURES} badgeColor="blue" />

      {/* Hardware Specs List (takes 1 column) */}
      <div className="bg-[#111214] border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-[360px] lg:h-auto">
        <div>
          <h3 className="text-[18px] font-bold text-white mb-6">Core Hardware</h3>
          <div className="flex flex-col gap-4">
            {CORE_SPECS.map((spec, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <span className="text-[14px] text-white/50">{spec.label}</span>
                <span className="text-[14px] font-bold text-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SeriesSection>
);

/* ═══════════════════════════════════════════════
   4. ECO SERIES
═══════════════════════════════════════════════ */
const EcoSeriesDeepDive = () => (
  <SeriesSection id="eco" badge="Value without compromise" title="Eco Series." subtitle="Experience the power of Matrix Edge at an accessible price point with essential smart tools." img={IMG_VALUE} badgeColor="green">
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
      {/* Dynamic Feature Slider (takes 3 columns) */}
      <FeatureCarousel features={ECO_FEATURES} badgeColor="green" />

      {/* Hardware Specs List (takes 1 column) */}
      <div className="bg-[#111214] border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-[360px] lg:h-auto">
        <div>
          <h3 className="text-[18px] font-bold text-white mb-6">Core Hardware</h3>
          <div className="flex flex-col gap-4">
            {CORE_SPECS.map((spec, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <span className="text-[14px] text-white/50">{spec.label}</span>
                <span className="text-[14px] font-bold text-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SeriesSection>
);


/* ═══════════════════════════════════════════════
   5. COMPARISON MATRIX (DARK MODE)
═══════════════════════════════════════════════ */
const COMP_ROWS = [
  { label: 'Operating System', eco: 'Android 14', c: 'Android 14', pro: 'Android 14' },
  { label: 'EDLA Certification', eco: 'Supported', c: 'Supported', pro: 'Supported' },
  { label: 'RAM', eco: '8GB', c: '8GB', pro: '8GB' },
  { label: 'Storage', eco: '128GB', c: '128GB', pro: '128GB' },
  { label: 'AI Engine', eco: 'Integrated', c: 'Integrated', pro: 'Integrated' },
  { label: 'Camera / Mic', eco: 'Optional Add-on', c: 'Included (12MP/8-Mic)', pro: 'Included (50MP/8-Mic)' },
  { label: 'Cloud Storage', eco: '-', c: 'Available', pro: 'Available' },
  { label: 'Multi-Touch', eco: '40-Point', c: '40-Point', pro: '40-Point' },
  { label: 'Display Bonding', eco: 'Standard', c: 'Standard', pro: 'Zero-Gap Optical' },
];

const ComparisonTable = () => {
  const ref = useReveal('tr', { y: 15, stagger: 0.05 });
  return (
    <section ref={ref} className="bg-[#0a0a0a] py-16 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight">Technical Matrix.</h2>
          <p className="text-[15px] md:text-[17px] text-white/50 mt-2">Compare specifications across the lineup.</p>
        </div>

        <div className="bg-[#111214] rounded-2xl border border-white/5 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10 uppercase tracking-widest text-[11px] font-bold text-white/50 bg-[#0a0a0a]/50">
                <th className="py-6 px-6 font-medium">Feature Matrix</th>
                <th className="py-6 px-6 font-medium text-white">Eco Series</th>
                <th className="py-6 px-6 font-medium text-white">C-Series</th>
                <th className="py-6 px-6 font-medium text-white">Pro Series</th>
              </tr>
            </thead>
            <tbody>
              {COMP_ROWS.map((r, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors duration-150 group">
                  <td className="py-5 px-6 text-[14px] font-medium text-white/60 group-hover:text-white/90">{r.label}</td>
                  <td className="py-5 px-6 text-[14px] font-bold text-white">{r.eco}</td>
                  <td className="py-5 px-6 text-[14px] font-bold text-white">{r.c}</td>
                  <td className="py-5 px-6 text-[14px] font-bold text-white">{r.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════════════
   6. STATS STRIP & ENQUIRY FORM
═══════════════════════════════════════════════ */
const STATS = [
  { label: 'Touch Points', suffix: 'V', full: '40V' },
  { label: 'Lifespan (Hrs)', suffix: 'K', full: '50K' },
  { label: 'OS Version', suffix: '', full: '14' },
  { label: 'Guarantee (Yrs)', suffix: '', full: '05' },
];

const StatsStrip = () => {
  const ref = useReveal('.stat-lbl', { y: 20 });
  return (
    <section ref={ref} className="bg-[#0a0a0a] border-t border-b border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={i} className={`flex flex-col items-center text-center py-10 px-4 ${i < STATS.length - 1 ? 'border-r border-white/10' : ''}`}>
            <span className="text-[2.5rem] font-bold text-white leading-none">{s.full}</span>
            <span className="stat-lbl text-[11px] font-medium text-white/50 mt-2 uppercase tracking-wider">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const EnquiryForm = () => {
  const [series, setSeries] = useState('Pro Series');
  const [size, setSize] = useState('75"');
  const [status, setStatus] = useState('');
  
  const submit = (e) => {
    e.preventDefault();
    setStatus('Request received. We will contact you soon.');
    setTimeout(() => setStatus(''), 4000);
  };

  const inputClass = "w-full bg-[#111214] border border-white/10 rounded-md px-4 py-3.5 text-[14px] text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20";
  const labelClass = "block text-[12px] font-semibold text-white/60 mb-2 mt-4 uppercase tracking-wider";

  return (
    <section className="bg-[#0a0a0a] py-16 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-[1.1] mb-6">Experience the difference.</h2>
            <p className="text-[15px] text-white/60 leading-relaxed mb-8">
              Matrix Edge interactive displays are trusted by cutting-edge institutions. Request a live demonstration or get a customized quote for your environment today.
            </p>
            <div className="flex flex-col gap-5 text-[14px] text-white/70">
              <div className="flex items-center gap-4"><Phone size={18} className="text-accent" /> +91 91548 40989</div>
              <div className="flex items-center gap-4"><Mail size={18} className="text-accent" /> contact@infinitx.in</div>
              <div className="flex items-start gap-4"><MapPin size={18} className="text-accent mt-1 shrink-0" /> Hyderabad, Telangana, India</div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-[#111214] p-8 md:p-10 rounded-2xl border border-white/5">
            <form onSubmit={submit} className="flex flex-col gap-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input required type="text" placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input required type="email" placeholder="john@institution.edu" className={inputClass} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Interested Series</label>
                <div className="flex flex-wrap gap-2">
                  {['Eco Series', 'C-Series', 'Pro Series'].map(s => (
                    <button type="button" key={s} onClick={() => setSeries(s)}
                      className={`px-4 py-2 rounded-md text-[13px] font-medium transition-colors duration-200 border ${series === s
                        ? 'bg-white text-black border-white'
                        : 'border-white/10 text-white/60 hover:bg-white/5'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass}>Panel Size</label>
                <div className="flex gap-2">
                  {['65"', '75"', '86"'].map(s => (
                    <button type="button" key={s} onClick={() => setSize(s)}
                      className={`px-4 py-2 rounded-md text-[13px] font-medium transition-colors duration-200 border ${size === s
                        ? 'bg-white text-black border-white'
                        : 'border-white/10 text-white/60 hover:bg-white/5'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelClass}>Message (optional)</label>
                <textarea rows={3} placeholder="Tell us about your institution and requirements..." className={`${inputClass} resize-none`} />
              </div>

              <div className="flex items-center gap-4 mt-6">
                <button type="submit"
                  className="bg-white text-black text-[14px] font-medium px-8 py-3.5 rounded-md hover:bg-white/90 transition-colors duration-200 flex items-center gap-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                  Request a Demo <ArrowRight size={16} />
                </button>
                {status && <p className="text-[13px] text-accent font-medium">{status}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════════════
   MAIN COMPONENT EXPORT
═══════════════════════════════════════════════ */
export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white font-sans overflow-x-hidden selection:bg-accent/30 selection:text-white pb-32">
      <PageHero />
      <ProSeriesDeepDive />
      <CSeriesDeepDive />
      <EcoSeriesDeepDive />
      <ComparisonTable />
      <StatsStrip />
      <EnquiryForm />
    </main>
  );
}
