import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  ChevronRight, Monitor, Shield, Network, Mail, ArrowRight, Video, Server,
  Cpu, Wifi, Menu, X, Plus, Minus, Check, ArrowUp, Instagram, Linkedin
} from 'lucide-react';
import ProductsPage from './ProductsPage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ClientsPage from './ClientsPage';
import ContactPage from './ContactPage';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   UTILITY: scroll-reveal factory
   ───────────────────────────────────────────── */
const useReveal = (selector, { y = 30, x = 0, stagger = 0.1, delay = 0, start = 'top 85%' } = {}) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(selector), {
        scrollTrigger: { trigger: el, start, toggleActions: 'play none none none' },
        opacity: 0, y, x, duration: 0.8, stagger, delay, ease: 'power3.out',
      });
    }, el);
    return () => ctx.revert();
  }, []);
  return ref;
};

/* ─────────────────────────────────────────────
   1. NAVBAR
   ───────────────────────────────────────────── */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Interactive Flat Panels', to: '/products' },
    { label: 'Services', to: '/services' },
    { label: 'Infrastructure', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Pricing', to: '/#pricing' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300"
        style={{ background: 'rgba(10,10,10,0.75)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white text-[17px] font-semibold tracking-tight">
            MatrixEdge<span className="text-accent">.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 text-[14px] font-normal text-white/70">
            {links.map(l => (
              <Link key={l.label} to={l.to}
                className="hover:text-white transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex gap-3 items-center">
            <Link to="/contact"
              className="text-[13px] font-medium text-white border border-white/35 px-5 py-2 rounded-full hover:border-white/70 transition-colors duration-200">
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 px-6 py-5 flex flex-col gap-5 bg-[#0a0a0a]">
            {links.map(l => (
              <Link key={l.label} to={l.to} onClick={() => setIsOpen(false)}
                className="text-white/70 text-sm font-medium hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}
              className="text-white border border-white/35 text-sm font-medium px-5 py-3 rounded-full text-center hover:border-white/70 transition-colors">
              Get in Touch
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

/* ─────────────────────────────────────────────
   2. HERO
   ───────────────────────────────────────────── */
const Hero = () => {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const imageRef = useRef(null);
  const [index, setIndex] = useState(0);

  const sentences = [
    { text: "Transforming classrooms with AI-powered SmartClass technology.", word: "SmartClass", img: "SmartClass.png" },
    { text: "Bringing intelligent Interactive Flat Panels to every institution.", word: "Interactive", img: "INTERACTIVE SMART BOARD.png" },
    { text: "Where lesson planning meets artificial intelligence.", word: "artificial intelligence", img: "home_page_final.jpeg" },
    { text: "Equipping boardrooms with seamless Google and Microsoft integration.", word: ["Google", "Microsoft"], img: "ID3.jpg" },
    { text: "End-to-end IT infrastructure built for modern enterprises.", word: "IT infrastructure", img: "DigitalSignage.jpeg" },
    { text: "Campus-wide WiFi networks, deployed with precision.", word: "WiFi", img: "ID2.png" },
    { text: "High-speed connectivity powered by Cisco, Ubiquiti, and more.", word: "connectivity", img: "Network.png" },
    { text: "Intelligent surveillance and access control for every campus.", word: "surveillance", img: "ccCamera.png" },
    { text: "One partner for displays, infrastructure, networking, and security.", word: "One partner", img: "ID.jpg" }
  ];

  const colors = ['#FF9F1B', '#2563eb', '#00dfd8', '#ff0055', '#7000ff', '#4ade80', '#fbbf24', '#f87171', '#818cf8', '#c084fc'];

  // Helper to get dynamic font size for absolute stability
  const getHeadlineSize = (text) => {
    const len = text.length;
    if (len > 70) return 'clamp(1.6rem, 3.5vw, 2.4rem)';
    if (len > 60) return 'clamp(1.8rem, 4.2vw, 2.7rem)';
    if (len > 50) return 'clamp(2rem, 4.6vw, 3.1rem)';
    return 'clamp(2.2rem, 5vw, 3.8rem)';
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['.hero-headline-wrap', '.hero-body'], {
        y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.1
      });
      gsap.from('.hero-image-area', {
        opacity: 0, x: 50, duration: 1.2, ease: 'power2.out', delay: 0.4
      });
    }, containerRef);

    const interval = setInterval(() => {
      // Headline rotation (vertical slide)
      gsap.to(headlineRef.current, {
        opacity: 0, y: -20, duration: 0.5, ease: 'power3.in',
        onComplete: () => {
          setIndex((prev) => (prev + 1) % sentences.length);
          gsap.fromTo(headlineRef.current, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
          );
        }
      });

      // Image rotation (Vertical slide-up)
      gsap.to(imageRef.current, {
        opacity: 0, y: -40, duration: 0.6, ease: 'power2.in',
        onComplete: () => {
          gsap.fromTo(imageRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
          );
        }
      });
    }, 5000);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  const renderHeadline = (item) => {
    const highlightWords = Array.isArray(item.word) ? item.word : [item.word];
    let content = [item.text];

    highlightWords.forEach(word => {
      const newContent = [];
      content.forEach(part => {
        if (typeof part === 'string') {
          const splitParts = part.split(word);
          splitParts.forEach((sp, i) => {
            newContent.push(sp);
            if (i < splitParts.length - 1) {
              newContent.push(<span key={word + i} style={{ color: colors[index] }}>{word}</span>);
            }
          });
        } else {
          newContent.push(part);
        }
      });
      content = newContent;
    });

    return (
      <span style={{ fontSize: getHeadlineSize(item.text) }} className="block transition-all duration-500 ease-in-out">
        {content}
      </span>
    );
  };

  return (
    <section ref={containerRef} className="relative pt-20 pb-8 lg:pt-32 lg:pb-16 bg-[#0a0a0a] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-12 lg:gap-24 items-center">
        
        {/* Left Column — Content (40%) */}
        <div className="z-10 py-4 lg:py-10 flex flex-col justify-center min-h-[300px] lg:min-h-[450px]">
          {/* Rigid Frame for Headline to ensure absolute stability */}
          <div className="hero-headline-wrap min-h-[120px] lg:min-h-[220px] flex items-start">
            <h1 ref={headlineRef} className="hero-headline font-bold text-white leading-[1.15] tracking-[-0.03em] max-w-[540px] w-full origin-left">
              {renderHeadline(sentences[index])}
            </h1>
          </div>

          <p className="hero-body text-[16px] text-white/80 leading-[1.8] mt-4 max-w-[440px]">
            Matrix Edge Computers delivers premium Interactive Flat Panels, enterprise IT infrastructure,
            and end-to-end system integration — trusted by institutions since 2013.
          </p>
        </div>

        {/* Right Column — Cinematic Vertical Slider (60%) */}
        <div className="hero-image-area relative aspect-video lg:aspect-[16/10] w-full overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#0a0a0a]/40 via-transparent to-transparent pointer-events-none" />
          <img 
            ref={imageRef}
            src={`${import.meta.env.BASE_URL}images/${sentences[index].img}`} 
            alt="Matrix Edge Solution" 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   3. WHO WE ARE
   ───────────────────────────────────────────── */
const WhoWeAre = () => {
  const ref = useReveal('.wwa-el', { y: 30, stagger: 0.12 });

  return (
    <section ref={ref} className="bg-[#111214] py-14 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left image */}
        <div className="wwa-el rounded-2xl overflow-hidden bg-[#1a1c20]" style={{ minHeight: 320 }}>
          <img
            src={`${import.meta.env.BASE_URL}images/home_page_final.jpeg`}
            alt="Matrix Edge Interactive Panel demo"
            className="w-full h-full object-cover"
            style={{ minHeight: 320 }}
          />
        </div>

        {/* Right copy */}
        <div className="flex flex-col gap-6">
          <span className="wwa-el inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.1em] uppercase text-white/55">
            <span className="text-accent">/</span> Who We Are
          </span>
          <h2 className="wwa-el text-section-lg font-bold text-white leading-tight">
            A decade of precision-engineered IT integration.
          </h2>
          <p className="wwa-el text-[14px] text-white/55 leading-[1.75] max-w-md">
            Matrix Edge Computers, established in 2013, is a premier system integration partner serving
            blue-chip enterprises, SMBs, and educational institutions across India. We translate
            technology into measurable outcomes.
          </p>
          <div className="wwa-el">
            <Link to="/about"
              className="inline-flex text-[13px] font-medium text-white border border-white/35 px-6 py-3 rounded-full hover:border-white/70 transition-colors duration-200">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   4. STATS BAR
   ───────────────────────────────────────────── */
const StatsBar = () => {
  const stats = [
    { number: '13+', label: 'Years of experience' },
    { number: '500+', label: 'Institutions served' },
    { number: '4K UHD', label: 'Panel resolution standard' },
    { number: '3-Year', label: 'Warranty on all hardware' },
  ];

  return (
    <section className="bg-[#0f0f0f] border-y border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i}
            className={`flex flex-col gap-1 px-8 py-10 relative ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}>
            <span className="text-[2.5rem] font-bold text-white leading-none tracking-tight">{s.number}</span>
            <span className="text-[11px] font-normal text-white/40 mt-1">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   5. CORE STRENGTHS
   ───────────────────────────────────────────── */
const CoreStrengths = () => {
  const ref = useReveal('.cs-el', { y: 30, stagger: 0.12 });

  const cards = [
    {
      badge: 'EDUCATION-FIRST',
      title: 'We design smart classrooms built for real learning outcomes',
      body: 'Our Interactive Flat Panels come with built-in AI lesson planning, 3D labs, and engagement analytics — not just a screen.',
      icon: <Monitor size={22} className="text-[#0f0f0f]" />,
    },
    {
      badge: 'INFRASTRUCTURE-GRADE',
      title: 'We deploy campus-wide networks that perform under pressure',
      body: 'From LAN/WAN to campus Wi-Fi and bandwidth management — partnered with Cisco, Ubiquiti, and D-Link.',
      icon: <Wifi size={22} className="text-[#0f0f0f]" />,
    },
    {
      badge: 'FUTURE FOCUSED',
      title: 'We embed AI at every layer of the classroom experience',
      body: "Automated Bloom's Taxonomy lesson plans, Physics/Chemistry/Biology 3D labs, and real-time student engagement reports.",
      icon: <Cpu size={22} className="text-[#0f0f0f]" />,
    },
  ];

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-14 md:py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="cs-el inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.1em] uppercase text-white/50">
            <span className="text-accent">/</span> Our Approach
          </span>
          <h2 className="cs-el text-section-lg font-bold text-white mt-3 max-w-2xl leading-tight">
            Bridging hardware excellence with intelligent software ecosystems.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div key={i} className="cs-el bg-[#111214] border border-white/5 rounded-[18px] p-8 flex flex-col gap-5 transition-colors duration-200 hover:bg-[#1a1c20]">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                {React.cloneElement(c.icon, { className: "text-accent" })}
              </div>
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase"
                style={{ background: 'rgba(37,99,235,0.12)', color: '#2563eb', padding: '3px 8px', borderRadius: 99, display: 'inline-block', width: 'fit-content' }}>
                {c.badge}
              </span>
              <h3 className="text-[18px] font-semibold text-white leading-snug">{c.title}</h3>
              <p className="text-[14px] text-white/50 leading-[1.75]">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   6. WHAT WE OFFER — Accordion
   ───────────────────────────────────────────── */
const services = [
  { num: '/ 001', label: 'Interactive Flat Panels', desc: 'Premium 4K UHD IFPs with built-in AI cameras, 8-array microphones, and 64-point multi-touch for education and enterprise collaboration.' },
  { num: '/ 002', label: 'Digital Signage & Display Systems', desc: 'End-to-end digital signage from content management to hardware deployment for lobbies, campuses, and retail environments.' },
  { num: '/ 003', label: 'Video Conferencing Solutions', desc: 'Certified VC setups featuring PTZ cameras, beam-forming audio, and seamless integration with Teams, Zoom, and Google Meet.' },
  { num: '/ 004', label: 'Networking & Campus Wi-Fi', desc: 'LAN/WAN design, structured cabling, and campus-wide Wi-Fi — partnered with Cisco, Ubiquiti, and D-Link.' },
  { num: '/ 005', label: 'Surveillance & Access Control', desc: 'Multi-camera CCTV, command control rooms, biometric access, and boom barrier solutions for complete campus security.' },
  { num: '/ 006', label: 'Computer Lab Provisioning', desc: 'End-to-end lab setup including hardware procurement, imaging, networking, and software licensing for educational institutions.' },
];

const ServicesAccordion = () => {
  const [open, setOpen] = useState(null);
  const ref = useReveal('.sa-el', { y: 20, stagger: 0.08 });

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-14 md:py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <span className="sa-el inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.1em] uppercase text-white/50">
            <span className="text-accent">/</span> What We Offer
          </span>
          <h2 className="sa-el text-section-lg font-bold text-white mt-3 leading-tight max-w-md">
            Helping institutions and enterprises succeed through technology and execution.
          </h2>
          <p className="sa-el text-[14px] text-white/50 italic mt-5">
            Delivering integrated solutions with confidence.
          </p>
        </div>

        {/* Right accordion */}
        <div className="flex flex-col divide-y divide-white/10">
          {services.map((s, i) => (
            <div key={i} className="sa-el">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group transition-colors duration-200 hover:text-accent"
                id={`service-btn-${i}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-bold text-accent tracking-widest">{s.num}</span>
                  <span className="text-[15px] font-medium text-white group-hover:text-accent transition-colors duration-200">
                    {s.label}
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 ml-3 transition-transform duration-200"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  <Plus size={13} className="text-white" />
                </div>
              </button>
              {open === i && (
                <p className="text-[14px] text-white/50 leading-[1.75] pb-5 max-w-lg">
                  {s.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ─────────────────────────────────────────────
   8. PROCESS / OUTCOMES
   ───────────────────────────────────────────── */
const processSteps = [
  { num: '01', title: 'Audit & Discover', body: 'We audit your infrastructure, classroom layouts, and connectivity gaps to design a custom solution blueprint.' },
  { num: '02', title: 'Configure & Integrate', body: 'Hardware and software are configured and installed by certified engineers with zero disruption to operations.' },
  { num: '03', title: 'Training & Adoption', body: 'We conduct on-site faculty training and technical walkthroughs to ensure your team is ready to go live.' },
  { num: '04', title: 'Monitor & Maintain', body: 'Ongoing AMC support and remote diagnostics ensure your technology stays modern and performs flawlessly.' },
];

const Process = () => {
  const ref = useReveal('.proc-el', { y: 25, stagger: 0.1 });

  return (
    <section ref={ref} className="relative py-14 md:py-28 px-6 overflow-hidden bg-[#111214]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20 gap-8">
          <div>
            <span className="proc-el inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.1em] uppercase text-accent">
              / The Matrix Path
            </span>
            <h2 className="proc-el text-section-lg font-bold text-white mt-4 max-w-xl leading-tight">
              From audit to adoption — every step engineered for success.
            </h2>
          </div>
          <p className="proc-el text-white/40 text-[14px] max-w-xs leading-relaxed hidden lg:block">
            Our systematic approach ensures enterprise-grade reliability for every institution we partner with.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[22px] left-0 w-full h-[1px] bg-white/10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            {processSteps.map((s, i) => (
              <div key={i} className="proc-el flex flex-col gap-6 relative group">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center text-white text-[13px] font-bold z-10 shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform duration-300">
                    {s.num}
                  </div>
                  <div className="h-[1px] flex-grow bg-white/10 lg:hidden" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">{s.title}</h3>
                  <p className="text-[14px] text-white/50 leading-[1.7] max-w-[260px]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   9. PARTNER LOGOS
   ───────────────────────────────────────────── */

/* ─────────────────────────────────────────────
   10. PRICING
   ───────────────────────────────────────────── */
const Pricing = () => {
  const ref = useReveal('.price-el', { y: 25, stagger: 0.1 });

  const features = [
    'Interactive Flat Panel supply and installation',
    'Campus Wi-Fi design and deployment',
    'Surveillance architecture and setup',
    'On-site faculty and staff training',
    'Annual Maintenance Contract (AMC)',
  ];

  return (
    <section id="pricing" ref={ref} className="bg-[#0a0a0a] py-14 md:py-24 px-6 relative overflow-hidden border-t border-white/10">

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <span className="price-el inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.1em] uppercase text-white/50">
            <span className="text-accent">/</span> Service Cost
          </span>
          <h2 className="price-el text-section-lg font-bold text-white mt-3 leading-tight max-w-md">
            Smart solutions, straightforward investment.
          </h2>
          <p className="price-el text-[14px] text-white/50 leading-[1.75] mt-5 max-w-sm">
            Transparent pricing for premium classroom and enterprise technology deployments.
          </p>
        </div>

        {/* Right — pricing card */}
        <div className="price-el rounded-[20px] p-8 md:p-10 border border-white/5" style={{ background: '#111214' }}>
          {/* Badge */}
          <span className="inline-block text-[10px] font-bold tracking-[0.1em] uppercase text-white bg-white/10 px-3 py-1 rounded-full mb-6 relative overflow-hidden">
            <span className="relative z-10">Integrated Package</span>
            <div className="absolute inset-0 bg-accent/20 blur-md pointer-events-none" />
          </span>
          <div className="text-[2.5rem] font-bold text-white leading-none tracking-tight mb-8">
            ₹2,50,000 – ₹15,00,000
          </div>

          <div className="flex flex-col gap-4 mb-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <Check size={11} className="text-accent" />
                </div>
                <span className="text-[14px] text-white/80 leading-snug">{f}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[13px] text-white/40 max-w-xs leading-snug">
              Premium integration services with transparent costs and measurable ROI.
            </p>
            <Link to="/contact"
              className="flex-shrink-0 border border-white/20 text-white text-[13px] font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors duration-200 whitespace-nowrap">
              Request a Proposal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   11. FAQ
   ───────────────────────────────────────────── */
const faqs = [
  { q: 'What interactive panel sizes do you supply?', a: 'We supply 65", 75", and 85" Interactive Flat Panels across our Eco, Pro, and Max series, all with 4K UHD resolution and multi-touch support.' },
  { q: 'Do you offer installation and training?', a: 'Yes. Every deployment includes on-site technical installation, faculty training sessions, and a post-installation walkthrough for IT administrators.' },
  { q: 'What brands do you partner with for networking?', a: 'We are certified partners with Cisco, Ubiquiti, and D-Link for structured cabling, Wi-Fi, and LAN/WAN infrastructure projects.' },
  { q: 'Do you work with government and private schools?', a: 'We serve both government institutions and private schools, with procurement processes aligned to applicable tender norms and purchase orders.' },
  { q: 'How can we request a demo or site survey?', a: 'Submit a demo request via our website, and our team will schedule an on-site survey within 3 business days at no cost.' },
  { q: 'What does your AMC cover?', a: 'Our Annual Maintenance Contract covers preventive maintenance visits, remote diagnostics, on-site repair, part replacement, and a dedicated support helpline.' },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const ref = useReveal('.faq-el', { y: 20, stagger: 0.08 });

  // Split FAQs into two columns for absolute layout stability
  const leftCol = faqs.slice(0, 3);
  const rightCol = faqs.slice(3);

  const AccordionItem = ({ f, i, offset }) => {
    const totalIndex = i + offset;
    const isOpen = open === totalIndex;
    return (
      <div className="faq-el border-b border-white/10 last:border-0 md:last:border-b">
        <button
          onClick={() => setOpen(isOpen ? null : totalIndex)}
          className="w-full flex items-center justify-between py-6 text-left hover:text-accent transition-all duration-300 group"
          id={`faq-btn-${totalIndex}`}
        >
          <span className={`text-[15px] font-medium pr-4 transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-white/90'}`}>
            {f.q}
          </span>
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-accent border-accent rotate-45' : 'border-white/20 group-hover:border-accent'}`}>
            <Plus size={14} className={`transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/40 group-hover:text-accent'}`} />
          </div>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
          <p className="text-[14px] text-white/50 leading-[1.8] pr-8">
            {f.a}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section ref={ref} className="py-14 md:py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          <span className="faq-el inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
            <span className="text-accent">/</span> Common Questions
          </span>
          <h2 className="faq-el text-section-lg font-bold text-white mt-5 max-w-2xl mx-auto leading-tight">
            Straightforward answers to help you make informed choices.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 items-start">
          <div className="flex flex-col">
            {leftCol.map((f, i) => <AccordionItem key={i} f={f} i={i} offset={0} />)}
          </div>
          <div className="flex flex-col">
            {rightCol.map((f, i) => <AccordionItem key={i} f={f} i={i} offset={3} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   12. NEWSLETTER / CTA
   ───────────────────────────────────────────── */
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const ref = useReveal('.nl-el', { y: 25, stagger: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) { setSent(true); setEmail(''); }
  };

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-14 md:py-24 px-6 border-t border-white/10 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="nl-el text-section-lg font-bold text-white leading-tight mb-4">
          Unlock smarter learning with cutting-edge technology.
        </h2>
        <p className="nl-el text-[14px] text-white/55 leading-[1.75] mb-10">
          Get updates on new product launches, integration guides, and education technology insights.
        </p>
        {sent ? (
          <p className="nl-el text-accent font-semibold text-[15px]">Thank you — you're subscribed!</p>
        ) : (
          <form onSubmit={handleSubmit} className="nl-el flex flex-col sm:flex-row items-center gap-0 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white/10 text-white text-[14px] px-5 py-3 rounded-full sm:rounded-r-none border border-white/20 focus:outline-none focus:border-white/50 placeholder-white/30 w-full sm:w-auto"
            />
            <button type="submit"
              className="bg-white text-[#0f0f0f] text-[13px] font-medium px-6 py-3 rounded-full sm:rounded-l-none hover:opacity-90 transition-opacity duration-200 mt-2 sm:mt-0 w-full sm:w-auto whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   CLIENT MARQUEE (kept from original)
   ───────────────────────────────────────────── */
const ClientMarquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.marquee-track', {
        xPercent: -50,
        repeat: -1,
        duration: 45,
        ease: 'none',
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  const clients = [
    'Screenshot 2026-02-22 111241.png', 'Screenshot 2026-02-22 111247.png', 'Screenshot 2026-02-22 111255.png',
    'Screenshot 2026-02-22 111304.png', 'Screenshot 2026-02-22 111311.png', 'Screenshot 2026-02-22 111321.png',
    'Screenshot 2026-02-22 111330.png', 'Screenshot 2026-02-22 111339.png', 'Screenshot 2026-02-22 111349.png',
    'Screenshot 2026-02-22 111357.png', 'Screenshot 2026-02-22 111407.png', 'Screenshot 2026-02-22 111417.png',
    'Screenshot 2026-02-22 111425.png', 'Screenshot 2026-02-22 111435.png', 'Screenshot 2026-02-22 111440.png',
    'Screenshot 2026-02-22 111448.png', 'Screenshot 2026-02-22 111453.png', 'Screenshot 2026-02-22 111501.png',
    'Screenshot 2026-02-22 111509.png', 'Screenshot 2026-02-22 111520.png', 'Screenshot 2026-02-22 111528.png',
    'Screenshot 2026-02-22 111534.png', 'Screenshot 2026-02-22 111539.png', 'Screenshot 2026-02-22 111546.png',
    'Screenshot 2026-02-22 111559.png', 'Screenshot 2026-02-22 111613.png', 'Screenshot 2026-02-22 111621.png',
    'Screenshot 2026-02-22 111628.png', 'Screenshot 2026-02-22 111634.png', 'Screenshot 2026-02-22 111640.png',
    'Screenshot 2026-02-22 111648.png', 'Screenshot 2026-02-22 111655.png',
  ];

  return (
    <section className="py-14 border-y border-white/10 bg-[#0a0a0a] overflow-hidden flex flex-col items-center">
      <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.1em] mb-8 text-center">
        Trusted by Institutions Across India
      </p>
      <div ref={marqueeRef} className="w-full relative flex whitespace-nowrap overflow-hidden">
        <div className="marquee-track flex gap-12 md:gap-16 px-8 items-center">
          {clients.concat(clients).map((client, i) => (
            <div key={i} className="flex-shrink-0 w-32 h-16 md:w-36 md:h-20">
              <img
                src={`${import.meta.env.BASE_URL}scroll/${encodeURIComponent(client)}`}
                alt={`Client ${i}`}
                className="w-full h-full object-contain brightness-110 contrast-125 filter grayscale-[20%] hover:grayscale-0 transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   13. FOOTER
   ───────────────────────────────────────────── */
const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Company */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/40 mb-6">Company</p>
            <ul className="space-y-4 text-[13px] text-white/55">
              {[['About Us', '/about'], ['Services', '/services'], ['Infrastructure', '/services'], ['Pricing', '/#pricing']].map(([l, t]) => (
                <li key={l}><Link to={t} className="hover:text-white transition-colors duration-200">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/40 mb-6">Products</p>
            <ul className="space-y-4 text-[13px] text-white/55">
              {['Interactive Flat Panel', 'Digital Signage', 'Corporate Display', 'Interactive Whiteboard'].map(p => (
                <li key={p}><Link to="/products" className="hover:text-white transition-colors duration-200">{p}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/40 mb-6">Contact</p>
            <address className="not-italic text-[13px] text-white/55 space-y-3 leading-relaxed">
              <p>Matrix Edge Computers</p>
              <p>APIIC Industrial Area C4/110,<br />100 Feet Rd, Vijayawada – 520007</p>
              <p><a href="tel:+919292252880" className="hover:text-white transition-colors duration-200">+91 9292252880</a></p>
              <p><a href="mailto:matrixedgevij@gmail.com" className="hover:text-white transition-colors duration-200">matrixedgevij@gmail.com</a></p>
            </address>
          </div>

          {/* Back to top + socials */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            <button onClick={scrollTop}
              className="flex items-center gap-2 text-[13px] text-white/55 hover:text-white transition-colors duration-200">
              Back to Top <ArrowUp size={14} />
            </button>
            <div className="flex gap-3">
              {[
                { label: 'Email', icon: <Mail size={15} />, href: 'mailto:matrixedgevij@gmail.com' },
                { label: 'Instagram', icon: <Instagram size={15} />, href: '#' },
                { label: 'LinkedIn', icon: <Linkedin size={15} />, href: '#' },
                { label: 'WhatsApp', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" /></svg>, href: 'https://wa.me/919292252880' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/55 hover:text-white hover:border-white/50 transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/30 uppercase tracking-widest">
            © 2026 INFINITYX. ALL RIGHTS RESERVED. A MATRIX EDGE INITIATIVE.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/about" className="text-[11px] text-white/30 hover:text-white/60 transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-[10px] font-bold bg-white/10 text-white/50 px-3 py-1 rounded-full uppercase tracking-widest">
              MEC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ─────────────────────────────────────────────
   LANDING PAGE COMPOSITE
   ───────────────────────────────────────────── */
const LandingPage = () => (
  <>
    <Hero />
    <WhoWeAre />
    <StatsBar />
    <CoreStrengths />
    <ServicesAccordion />
    <Process />
    <Pricing />
    <FAQ />
    <Newsletter />
    <ClientMarquee />
  </>
);

/* ─────────────────────────────────────────────
   SCROLL TO HASH
   ───────────────────────────────────────────── */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); }
    else {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [pathname, hash]);
  return null;
};

/* ─────────────────────────────────────────────
   APP ROOT
   ───────────────────────────────────────────── */
function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-accent/20 selection:text-accent scroll-smooth flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
