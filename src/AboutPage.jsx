import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, CheckCircle2, Shield, Wifi, Cpu, 
  Monitor, Camera, Network, Server, Globe,
  Briefcase, Target, Zap
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroRef = useReveal('.ab-hero-el', { y: 40 });
  const storyRef = useReveal('.ab-story-el', { y: 30 });
  const missionRef = useReveal('.ab-mission-el', { y: 25 });
  const ecosystemRef = useReveal('.ab-eco-el', { y: 30 });

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-accent/30 selection:text-white pb-32 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative pt-24 pb-12 md:pt-40 md:pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="ab-hero-el inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Empowering Progress Since 2013
          </div>
          
          <img
            src={`${import.meta.env.BASE_URL}images/INFINITYX.png`}
            alt="infinityX Logo"
            className="ab-hero-el h-20 md:h-28 object-contain mb-12 filter brightness-110 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          />
          
          <h1 className="ab-hero-el text-[48px] md:text-[72px] lg:text-[84px] font-bold text-white tracking-tight leading-[0.95] mb-8">
            Engineering the <br className="hidden md:block"/> 
            <span className="text-white/30 italic">Matrix Edge.</span>
          </h1>
          
          <p className="ab-hero-el text-[18px] md:text-[20px] text-white/50 max-w-2xl font-medium leading-relaxed">
            A decade of precision-engineered IT integration, delivering enterprise-grade infrastructure 
            and intelligent ecosystems across the Indian landscape.
          </p>
        </div>
      </section>

      {/* 2. THE STORY (Bento Style) */}
      <section ref={storyRef} className="py-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="ab-story-el text-[32px] md:text-[48px] font-bold text-white mb-4 tracking-tight">Our Narrative.</h2>
            <div className="ab-story-el h-1 w-20 bg-accent rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main Story Box */}
            <div className="ab-story-el md:col-span-8 bg-[#111214] border border-white/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-[24px] font-bold text-white mb-6">A Trusted Integration Partner</h3>
              <div className="space-y-6 text-[16px] text-white/60 leading-relaxed font-medium">
                <p>
                  Matrix Edge Computers (MEC) stands as a premier system integration partner, 
                  offering a comprehensive array of IT-integrated products and services. 
                  Established in 2013, MEC has navigated a decade-long journey, emerging as a prominent 
                  IT Infrastructure Solution provider.
                </p>
                <p>
                  From small businesses to blue-chip enterprises and elite educational institutions, 
                  we deliver tailored services that translate complex technology into measurable outcomes. 
                  Our customer-centric approach, rooted in operational excellence, allows us to 
                  understand the intricate details of business and education.
                </p>
              </div>
            </div>

            {/* Decade Box */}
            <div className="ab-story-el md:col-span-4 bg-accent/5 border border-accent/10 rounded-3xl p-8 flex flex-col justify-between items-start">
              <div className="text-accent">
                <Briefcase size={32} />
              </div>
              <div>
                <span className="text-[64px] font-bold text-accent leading-none">10+</span>
                <p className="text-[14px] font-bold uppercase tracking-widest text-accent/80 mt-2">Years of Precision</p>
              </div>
            </div>

            {/* Expertise Box */}
            <div className="ab-story-el md:col-span-4 bg-[#111214] border border-white/5 rounded-3xl p-8">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 mb-6">
                <Network size={20} />
              </div>
              <h4 className="text-[18px] font-bold text-white mb-3">Managed Networks</h4>
              <p className="text-[14px] text-white/50 leading-relaxed">
                Specializing in LAN, WAN, and high-density Wireless deployments with precision-driven management.
              </p>
            </div>

            {/* Security Box */}
            <div className="ab-story-el md:col-span-4 bg-[#111214] border border-white/5 rounded-3xl p-8">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 mb-6">
                <Shield size={20} />
              </div>
              <h4 className="text-[18px] font-bold text-white mb-3">Security & Surveillance</h4>
              <p className="text-[14px] text-white/50 leading-relaxed">
                Deploying enterprise-grade CCTV and access control systems for campuses and enterprises.
              </p>
            </div>

            {/* Hardware Box */}
            <div className="ab-story-el md:col-span-4 bg-[#111214] border border-white/5 rounded-3xl p-8">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 mb-6">
                <Server size={20} />
              </div>
              <h4 className="text-[18px] font-bold text-white mb-3">Computing Hardware</h4>
              <p className="text-[14px] text-white/50 leading-relaxed">
                Strategic procurement of high-performance servers, desktops, and enterprise storage solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION */}
      <section ref={missionRef} className="py-16 md:py-32 px-6 bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="ab-mission-el inline-flex items-center gap-2 text-accent text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
            <Target size={14} /> Our Mission
          </div>
          <h2 className="ab-mission-el text-[36px] md:text-[54px] font-bold text-white leading-tight mb-10">
            Blending high-performance hardware with <span className="text-accent underline underline-offset-8 decoration-white/10">unparalleled value.</span>
          </h2>
          <p className="ab-mission-el text-[18px] md:text-[20px] text-white/50 leading-relaxed font-medium">
            We are dedicated to cultivating successful and lasting relationships with both our customers 
            and suppliers by delivering superior value and engineering excellence in every deployment.
          </p>
        </div>
      </section>

      {/* 4. ECOSYSTEM (Partners & Expertise) */}
      <section ref={ecosystemRef} className="py-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left: Approach */}
            <div className="space-y-12">
              <div>
                <h2 className="ab-eco-el text-[32px] md:text-[40px] font-bold text-white mb-6">Core Ethos.</h2>
                <p className="ab-eco-el text-[16px] text-white/50 leading-relaxed font-medium max-w-lg">
                  Perpetual enhancement and seamless integration are the benchmarks of our framework.
                </p>
              </div>
              
              <ul className="ab-eco-el space-y-6">
                {[
                  "Quality that surpasses customer expectations.",
                  "Optimal value for every capital investment.",
                  "Courteous and professional service architecture.",
                  "Candid and efficacious technical consultation.",
                  "Swift and efficient end-to-end delivery."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-accent" />
                    </div>
                    <span className="text-[16px] text-white/70 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="ab-eco-el bg-[#111214] border border-white/5 p-8 rounded-2xl flex flex-col justify-between h-[240px]">
                <Globe className="text-white/30" />
                <div>
                  <h4 className="font-bold text-white mb-2">Digital Studio</h4>
                  <p className="text-[13px] text-white/50">Setup for professional recording and broadcasting.</p>
                </div>
              </div>
              
              <div className="ab-eco-el bg-[#111214] border border-white/5 p-8 rounded-2xl flex flex-col justify-between h-[240px]">
                <Monitor className="text-white/30" />
                <div>
                  <h4 className="font-bold text-white mb-2">infinityX Display</h4>
                  <p className="text-[13px] text-white/50">Standard-setting 4K Interactive Flat Panels.</p>
                </div>
              </div>

              <div className="ab-eco-el bg-[#111214] border border-white/5 p-8 rounded-2xl flex flex-col justify-between h-[240px]">
                <Cpu className="text-white/30" />
                <div>
                  <h4 className="font-bold text-white mb-2">AI Integration</h4>
                  <p className="text-[13px] text-white/50">Smart classrooms powered by behavioral AI.</p>
                </div>
              </div>

              <div className="ab-eco-el bg-[#111214] border border-white/5 p-8 rounded-2xl flex flex-col justify-between h-[240px]">
                <Wifi className="text-white/30" />
                <div>
                  <h4 className="font-bold text-white mb-2">Campus WiFi</h4>
                  <p className="text-[13px] text-white/50">High-speed, scalable network architectures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
