import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    CheckCircle2, Cpu, Play, Users, BookOpen, Shield, ShieldCheck,
    Zap, Monitor, Layers, Star, Wifi, PenTool, ChevronRight, LayoutTemplate, ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────
// Cinematic scroll section — mirrors ServicesPage.ServiceSection
// ─────────────────────────────────────────────────────────────
const DisplaySection = ({ image, imageAlt, badge, title, description, features, imageOnRight = true, accentColor = '#FF9F1B' }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            gsap.from(el.querySelectorAll('.ss-text'), {
                scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' },
                opacity: 0,
                x: imageOnRight ? -80 : 80,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out',
            });
            gsap.from(el.querySelectorAll('.ss-img'), {
                scrollTrigger: { trigger: el, start: 'top 75%', toggleActions: 'play none none reverse' },
                opacity: 0,
                x: imageOnRight ? 80 : -80,
                scale: 0.92,
                duration: 1.5,
                ease: 'power2.out',
            });
        }, el);
        return () => ctx.revert();
    }, [imageOnRight]);

    return (
        <section ref={ref} className="min-h-screen flex items-center bg-background border-t border-bento/50 py-32 px-6 overflow-hidden">
            <div className={`max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-24 items-center ${!imageOnRight ? 'lg:[direction:rtl]' : ''}`}>
                {/* Text block */}
                <div className="lg:[direction:ltr] lg:col-span-2 space-y-8">
                    <span className="ss-text block text-[#FF9F1B] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">{badge}</span>
                    <h2 className="ss-text text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.1]">{title}</h2>
                    <p className="ss-text text-lg md:text-xl text-foreground/60 font-medium max-w-xl leading-relaxed">{description}</p>
                    {features && (
                        <ul className="ss-text space-y-4 pt-2">
                            {features.map((f, i) => (
                                <li key={i} className="flex items-center gap-3 font-semibold text-foreground/80 text-base">
                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: accentColor }} />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Image block */}
                <div className="ss-img relative lg:[direction:ltr] lg:col-span-3">
                    <div className="absolute inset-0 -m-12 bg-[#FF9F1B]/5 rounded-3xl blur-3xl pointer-events-none" />
                    <img
                        src={image}
                        alt={imageAlt}
                        loading="eager"
                        fetchpriority="high"
                        className="relative w-full max-h-[800px] object-contain drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

// ─────────────────────────────────────────────────────────────
// Section 2 — Comparison Table
// ─────────────────────────────────────────────────────────────
const ComparisonSection = () => {
    const ref = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.fade-up', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out'
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    const specs = [
        {
            category: 'Display Resolution',
            eco: '4K UHD (3840×2160)',
            pro: '4K UHD (3840×2160)',
            corporate: '4K UHD (3840×2160)',
        },
        {
            category: 'Touch Points',
            eco: '20-point multi-touch',
            pro: '20-point multi-touch',
            corporate: '40-point multi-touch',
        },
        {
            category: 'Built-in AI',
            eco: '—',
            pro: 'AI whiteboard, Q&A, subtitles',
            corporate: 'AI whiteboard, framing, subtitles',
        },
        {
            category: 'Built-in Camera',
            eco: 'Optional add-on',
            pro: '12MP AI auto-framing camera',
            corporate: '12MP AI auto-framing camera',
        },
        {
            category: 'Audio',
            eco: 'Dual 20W speakers',
            pro: 'Dual 20W + 8-array mic',
            corporate: 'Dual 20W + 8-array mic',
        },
        {
            category: 'OS & Software',
            eco: 'Android 11, basic suite',
            pro: 'Android 13 + EDLA, education AI suite',
            corporate: 'Android 13 + EDLA, enterprise suite',
        },
        {
            category: 'Google EDLA',
            eco: '—',
            pro: '✓ Full EDLA certified',
            corporate: '✓ Full EDLA certified',
        },
        {
            category: 'Writing Latency',
            eco: '< 8ms',
            pro: '< 8ms',
            corporate: '< 8ms',
        },
        {
            category: 'Glass',
            eco: '7H anti-glare tempered',
            pro: '7H anti-glare tempered',
            corporate: '7H anti-glare tempered',
        },
        {
            category: 'Warranty',
            eco: '3-year onsite',
            pro: '3-year onsite',
            corporate: '3-year onsite',
        },
    ];

    return (
        <section ref={ref} className="py-24 bg-bento border-t border-foreground/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
                    <div className="inline-flex items-center justify-center p-4 bg-[#FF9F1B]/10 rounded-2xl mb-6">
                        <Layers className="w-8 h-8 text-[#FF9F1B]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-foreground">
                        Compare the Panels.
                    </h2>
                    <p className="text-xl text-foreground/70 font-medium">
                        Find the right InfinityX display for your environment with a side-by-side specification breakdown.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-foreground/10 shadow-sm fade-up">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-background text-foreground">
                                <th className="p-5 border-b border-foreground/10 font-bold text-foreground/60 uppercase tracking-widest text-xs w-1/4">Feature</th>
                                <th className="p-5 border-b border-foreground/10 font-bold text-center">
                                    <span className="text-foreground/50 text-xs uppercase tracking-widest block mb-1">ECO</span>
                                    <span className="text-foreground text-base">Eco Interactive Display</span>
                                </th>
                                <th className="p-5 border-b border-foreground/10 font-bold text-center bg-[#FF9F1B]/8">
                                    <span className="text-[#FF9F1B] text-xs uppercase tracking-widest block mb-1">⭐ FLAGSHIP</span>
                                    <span className="text-foreground text-base">Interactive Whiteboard</span>
                                    <span className="block text-xs text-[#FF9F1B] font-semibold mt-1">with AI Software</span>
                                </th>
                                <th className="p-5 border-b border-foreground/10 font-bold text-center">
                                    <span className="text-foreground/50 text-xs uppercase tracking-widest block mb-1">PRO</span>
                                    <span className="text-foreground text-base">Corporate Display</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium text-foreground/80">
                            {specs.map((row, i) => (
                                <tr key={i} className="border-b border-foreground/5 last:border-0 hover:bg-background/50 transition-colors">
                                    <td className="p-5 font-bold text-foreground/60">{row.category}</td>
                                    <td className="p-5 text-center">{row.eco}</td>
                                    <td className="p-5 text-center bg-[#FF9F1B]/5 text-foreground font-semibold">{row.pro}</td>
                                    <td className="p-5 text-center">{row.corporate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

// ─────────────────────────────────────────────────────────────
// Section 3 — Trusted Brand + Google EDLA
// ─────────────────────────────────────────────────────────────
const TrustedGoogleSection = () => {
    const ref = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.fade-up', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out'
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    const trustStats = [
        { label: 'Make in India', sub: 'Proudly assembled and optimized domestically.' },
        { label: 'A+ Grade Panel', sub: 'Premium zero-defect commercial displays.' },
        { label: 'Pan India Service', sub: 'Comprehensive deployment and technical support.' },
        { label: '3-Year Onsite Warranty', sub: 'Full hardware coverage — zero downtime guarantee.' },
    ];

    return (
        <section ref={ref} className="py-24 bg-background border-t border-foreground/5">
            <div className="max-w-7xl mx-auto px-6">
                {/* Trusted Brand */}
                <div className="text-center mb-16 fade-up">
                    <span className="text-[#FF9F1B] font-bold tracking-widest uppercase text-xs mb-4 block">Why InfinityX</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-foreground">Trusted Brand,<br />Established Results.</h2>
                    <p className="text-xl text-foreground/60 font-medium max-w-2xl mx-auto">
                        Built for durability, backed by experience. Every InfinityX panel is engineered for long-term institutional use.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 fade-up">
                    {trustStats.map((stat, i) => (
                        <div key={i} className="bg-bento border border-foreground/5 p-8 rounded-2xl text-center hover:border-[#FF9F1B]/30 transition-colors">
                            <Star className="w-8 h-8 text-[#FF9F1B] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-foreground mb-2">{stat.label}</h3>
                            <p className="text-foreground/60 text-sm font-medium">{stat.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Google EDLA */}
                <div className="bg-bento rounded-3xl border border-foreground/5 p-10 md:p-16 fade-up">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">Harness the Power of Google.</h3>
                        <p className="text-foreground/60 font-medium max-w-2xl mx-auto">
                            Native Google EDLA certification gives you full access to the Google Play Store, Google Workspace, and seamless security updates straight from Google — out of the box.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10 mb-12">
                        {[
                            { icon: <Play className="w-8 h-8 text-[#FF9F1B]" />, label: 'Google Play Store' },
                            { icon: <Users className="w-8 h-8 text-blue-500" />, label: 'Google Workspace' },
                            { icon: <BookOpen className="w-8 h-8 text-green-500" />, label: 'Google Chrome' },
                            { icon: <Shield className="w-8 h-8 text-purple-500" />, label: 'Google Security Updates' },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-background rounded-full shadow-md flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <span className="font-bold text-sm text-foreground">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-yellow-500/10 to-[#FF9F1B]/10 p-10 rounded-2xl border border-yellow-500/20 relative overflow-hidden">
                        <ShieldCheck className="w-40 h-40 text-yellow-500/10 absolute -right-6 -bottom-6 pointer-events-none" />
                        <div className="relative z-10 text-center">
                            <h4 className="text-2xl md:text-3xl font-display font-bold mb-3 flex items-center justify-center gap-3">
                                <Shield className="text-yellow-600 w-7 h-7" /> 3 Years Onsite Warranty
                            </h4>
                            <p className="font-medium text-foreground/70 max-w-xl mx-auto">
                                We stand by our hardware. Every InfinityX Board comes with a comprehensive 3-year onsite warranty ensuring zero downtime for your organization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ─────────────────────────────────────────────────────────────
// Section 4 — AI Software
// ─────────────────────────────────────────────────────────────
const AISection = () => {
    const ref = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.fade-up', {
                scrollTrigger: { trigger: ref.current, start: 'top 80%' },
                y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out'
            });
        }, ref);
        return () => ctx.revert();
    }, []);

    const coreAI = [
        'AI Whiteboard', 'AI Annotation', 'AI Q&A Assistant',
        'AI Voice Assistant', 'AI Live Subtitles', 'AI Auto-framing Camera',
        'AI Screen Adaptation', 'AI Content Search',
    ];

    const eduContent = [
        { label: 'Physics Simulations' }, { label: 'Chemistry Labs' },
        { label: 'Biology 3D Models' }, { label: 'Math Tools' },
        { label: 'Social Studies Maps' }, { label: 'Language Modules' },
    ];

    const teachingTools = [
        'Multi-user writing with instant split-screen lessons.',
        'Cloud file access & secure local screen recording.',
        'Zero-lag wireless casting from any mobile device.',
        'Remote teaching mode built-in for hybrid environments.',
        'Real-time quiz generation directly on the whiteboard.',
    ];

    return (
        <section ref={ref} className="py-24 bg-foreground text-background relative overflow-hidden border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#FF9F1B]/8 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 fade-up">
                    <div className="inline-flex items-center justify-center p-4 bg-[#FF9F1B]/20 rounded-2xl mb-6">
                        <Cpu className="w-8 h-8 text-[#FF9F1B]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-white">
                        AI-Powered Software.
                    </h2>
                    <p className="text-xl text-white/60 font-medium">
                        A dedicated intelligence layer transforming displays into active, collaborative participants — built directly into the OS.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 fade-up">
                    {/* Core AI Panel */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-8 text-[#FF9F1B] flex items-center gap-3">
                            <PenTool size={22} /> Core AI Features
                        </h3>
                        <div className="space-y-3">
                            {coreAI.map((item, i) => (
                                <div key={i} className="flex justify-between items-center bg-white/5 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                                    <span className="font-medium text-sm text-white/90">{item}</span>
                                    <div className="w-2 h-2 rounded-full bg-[#FF9F1B]" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Content Panel */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-4 text-[#FF9F1B] flex items-center gap-3">
                            <BookOpen size={22} /> Education Software
                        </h3>
                        <p className="text-white/50 text-sm font-medium mb-8 leading-relaxed">
                            Built-in K-12 digital content featuring 3,000+ interactive 3D learning resources running natively on the panel.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {eduContent.map((item, i) => (
                                <div key={i} className="bg-white/5 px-4 py-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors text-center text-sm font-semibold text-white/80">
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Teaching Tools Panel */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                            <Wifi size={22} /> Teaching Tools
                        </h3>
                        <ul className="space-y-5 text-white/80 font-medium">
                            {teachingTools.map((tool, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <span className="text-[#FF9F1B] font-bold text-sm min-w-[28px]">0{i + 1}</span>
                                    <span className="text-sm leading-relaxed">{tool}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};



// ─────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────
const ProductsPage = () => {
    return (
        <div className="pt-0 pb-0 bg-background min-h-screen text-foreground selection:bg-[#FF9F1B]/20">

            {/* ── Section 1: Scroll-1 — Eco Interactive Display ── */}
            <DisplaySection
                image={`${import.meta.env.BASE_URL}MATRIX PRODUCTS VISULAID (3)/ID.jpg`}
                imageAlt="Eco Interactive Display for Education"
                badge="Interactive Displays · Education"
                title="Eco Interactive Display."
                description="Designed for modern classrooms, the Eco Interactive Display delivers 4K UHD touch interaction, premium audio, and seamless device connectivity — making every lesson engaging and effortless."
                features={[
                    '4K UHD Anti-Glare Display',
                    '20-Point Multi-Touch with Palm Rejection',
                    'Dual 20W Built-in Speakers',
                    'Android 11 with Education Suite',
                ]}
                imageOnRight={true}
            />

            {/* ── Section 1: Scroll-2 — AI Interactive Whiteboard ── */}
            <DisplaySection
                image={`${import.meta.env.BASE_URL}MATRIX PRODUCTS VISULAID (3)/ID2.png`}
                imageAlt="Interactive Whiteboard with AI Software for Education"
                badge="Interactive Displays · Flagship AI"
                title="Interactive Whiteboard. AI Inside."
                description="The next evolution of classroom technology. Our AI-powered Interactive Whiteboard includes Google EDLA certification plus an intelligent software layer that generates quizzes, translates live speech, and auto-frames teachers — making it fundamentally different from any other panel."
                features={[
                    'Full Google EDLA Certification',
                    'AI Q&A, Annotation & Live Subtitles',
                    '12MP AI Auto-framing Built-in Camera',
                    '8-Array Microphone System',
                    '3,000+ Interactive K-12 Learning Resources',
                ]}
                imageOnRight={false}
            />

            {/* ── Section 1: Scroll-3 — Corporate Interactive Display ── */}
            <DisplaySection
                image={`${import.meta.env.BASE_URL}MATRIX PRODUCTS VISULAID (3)/ID3.png`}
                imageAlt="Corporate Interactive Display"
                badge="Interactive Displays · Enterprise"
                title="Corporate Interactive Display."
                description="Purpose-built for boardrooms, conference halls, and enterprise collaboration spaces. Featuring 40-point precision touch, Google EDLA, and a full enterprise software suite for seamless hybrid meetings."
                features={[
                    '40-Point Precision Touch',
                    'Google EDLA & Play Store Access',
                    'AI Camera + 8-Array Mic for VC',
                    'Enterprise Collaboration Suite',
                    'Zero-Lag Wireless Screen Casting',
                ]}
                imageOnRight={true}
            />

            {/* ── Section 2: Comparison Table ── */}
            <ComparisonSection />

            {/* ── Section 3: Trusted + Google EDLA ── */}
            <TrustedGoogleSection />

            {/* ── Section 4: AI Software ── */}
            <AISection />

            {/* ── Section 5: Digital Signage ── */}
            <DisplaySection
                image={`${import.meta.env.BASE_URL}MATRIX PRODUCTS VISULAID (3)/DigitalSignage.jpeg`}
                imageAlt="Digital Signage"
                badge="Commercial Displays · Signage"
                title="Digital Signage Solutions."
                description="Captivating commercial displays engineered for modern public spaces. From lobbies to campuses, our signage solutions create unforgettable first impressions with expansive synced configurations."
                features={[
                    'Digital Standees & Interactive Kiosks',
                    'UHD Video Wall Systems',
                    'Remote Content Management & Scheduling',
                    'Cloud-Based Centralized Broadcasting',
                    'Touch & Non-Touch Variants',
                ]}
                imageOnRight={false}
            />

        </div>
    );
};

export default ProductsPage;
