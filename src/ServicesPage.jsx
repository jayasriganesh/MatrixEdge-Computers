import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Monitor, Wifi, Check, Cpu, PlayCircle, Video } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.fade-up').forEach((elem) => {
                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: 'top 85%',
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="pt-24 pb-20 bg-background min-h-screen text-foreground selection:bg-primary/20">

            {/* 1. Flagship Digital Solutions Funnel */}
            <section className="relative overflow-hidden bg-gradient-to-b from-bento to-background pt-20 pb-0">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 fade-up">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">End-to-End Integration</span>
                        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground tracking-tight">Digital Classrooms & Active LED Signage</h1>
                        <p className="text-xl text-foreground/70 font-medium mb-10">Holistic audio-visual architectures designed to captivate audiences and modernize learning.</p>

                        <div className="bg-background border border-foreground/10 p-6 rounded-2xl shadow-xl max-w-lg relative z-10">
                            <h4 className="font-bold text-foreground mb-4">Talk to Our Expert! Book A Free Consultation</h4>
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <input type="text" placeholder="Name*" className="bg-bento border border-foreground/5 rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-primary" />
                                <input type="text" placeholder="Phone Number*" className="bg-bento border border-foreground/5 rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-primary" />
                                <input type="email" placeholder="Email Address*" className="bg-bento border border-foreground/5 rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-primary" />
                                <input type="text" placeholder="Organization*" className="bg-bento border border-foreground/5 rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-primary" />
                            </div>
                            <button className="w-full bg-primary text-white font-bold py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors">Submit Request</button>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={`${import.meta.env.BASE_URL}scroll/cc_cams.jpeg?v=2`} alt="Active LED Wall" className="rounded-3xl shadow-2xl relative z-10 mix-blend-luminosity opacity-90" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-background py-16 border-y border-foreground/5 fade-up">
                    <div className="max-w-5xl mx-auto px-6">
                        <h3 className="text-center text-3xl font-display font-bold mb-10">Trusted Integrator with Established Results</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-foreground/10 pb-6 md:pb-0 last:border-0">
                                <span className="text-primary font-bold text-2xl mb-1">Turnkey Solutions</span>
                                <span className="text-foreground/70 font-medium text-sm text-center px-4">From design and wiring to full deployment & testing.</span>
                            </div>
                            <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-foreground/10 pb-6 md:pb-0 last:border-0">
                                <span className="text-primary font-bold text-2xl mb-1">Premium Hardware</span>
                                <span className="text-foreground/70 font-medium text-sm text-center px-4">Sourced from top global OEM AV partners.</span>
                            </div>
                            <div className="flex flex-col items-center last:border-0">
                                <span className="text-primary font-bold text-2xl mb-1">Zero Downtime</span>
                                <span className="text-foreground/70 font-medium text-sm text-center px-4">Engineered for 24/7 continuous commercial operation.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Placeholder */}
                <div className="py-24 bg-bento fade-up">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <div className="aspect-video bg-foreground rounded-3xl overflow-hidden relative flex items-center justify-center shadow-2xl group cursor-pointer">
                            <img src={`${import.meta.env.BASE_URL}scroll/cc_cams.jpeg?v=2`} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 transition-transform duration-700 group-hover:scale-105" alt="Video Cover" />
                            <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center relative z-10 backdrop-blur-sm pl-1 shadow-lg group-hover:bg-primary transition-colors">
                                <PlayCircle className="text-white w-10 h-10" />
                            </div>
                            <h3 className="absolute bottom-10 left-10 text-white text-3xl font-display font-bold z-10 max-w-lg text-left hidden sm:block">Step inside a completely modernized Digital Studio.</h3>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="py-24 bg-background fade-up border-b border-foreground/5">
                    <div className="max-w-6xl mx-auto px-6">
                        <h3 className="text-center text-4xl font-display font-bold mb-16">Cutting-Edge Audio/Visual Architecture</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="relative order-2 md:order-1">
                                <div className="w-full aspect-square bg-bento rounded-full absolute -top-10 -left-10 blur-3xl opacity-50"></div>
                                <img src={`${import.meta.env.BASE_URL}scroll/cc_cams.jpeg?v=2`} className="rounded-3xl shadow-xl relative z-10 mix-blend-multiply" alt="Features Detail" />
                            </div>
                            <div className="space-y-6 order-1 md:order-2">
                                <div className="border-l-4 border-primary pl-6 py-2">
                                    <h4 className="text-xl font-bold text-foreground mb-2">Active LED Video Walls</h4>
                                    <p className="text-foreground/70 font-medium text-sm">Seamless, bezel-less displays with ultra-high brightness perfect for auditoriums and corporate lobbies.</p>
                                </div>
                                <div className="border-l-4 border-foreground/10 pl-6 py-2 hover:border-primary/50 transition-colors">
                                    <h4 className="text-xl font-bold text-foreground mb-2">Smart Classroom Integration</h4>
                                    <p className="text-foreground/70 font-medium text-sm">Complete setups including interactive boards, digital podiums, and robust network backbones.</p>
                                </div>
                                <div className="border-l-4 border-foreground/10 pl-6 py-2 hover:border-primary/50 transition-colors">
                                    <h4 className="text-xl font-bold text-foreground mb-2">Digital Studio Accents</h4>
                                    <p className="text-foreground/70 font-medium text-sm">Green screen deployments, professional lighting, and broadcast-grade camera rigs.</p>
                                </div>
                                <div className="border-l-4 border-foreground/10 pl-6 py-2 hover:border-primary/50 transition-colors">
                                    <h4 className="text-xl font-bold text-foreground mb-2">Public Addressing (PA) Systems</h4>
                                    <p className="text-foreground/70 font-medium text-sm">Clear, zoned audio distribution across entire campus or corporate block architectures.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">

                {/* Surveillance */}
                <section className="mb-32 bg-bento rounded-3xl p-10 lg:p-16 border border-foreground/5 fade-up">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2 order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                            <img src={`${import.meta.env.BASE_URL}scroll/cc_cams.jpeg?v=2`} alt="Command Center" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent"></div>
                            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                                <p className="text-sm font-bold tracking-widest uppercase text-foreground/50 mb-4">Featured Partners</p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="px-4 py-2 bg-background/50 backdrop-blur-md rounded-full text-sm font-bold text-foreground">HIKVISION</span>
                                    <span className="px-4 py-2 bg-background/50 backdrop-blur-md rounded-full text-sm font-bold text-foreground">dahua TECHNOLOGY</span>
                                    <span className="px-4 py-2 bg-background/50 backdrop-blur-md rounded-full text-sm font-bold text-foreground">CP PLUS</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-primary/10 rounded-2xl"><Shield className="w-8 h-8 text-primary" /></div>
                                <h2 className="text-3xl md:text-4xl font-display font-bold">Surveillance</h2>
                            </div>
                            <p className="text-lg text-foreground/70 font-medium mb-8">
                                Delivering intelligent security architectures and robust integration for total peace of mind.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "CCTV Architecture and Design Solutions",
                                    "CCTV Command Control Room Solutions",
                                    "Access Control & Boom Barrier Solutions",
                                    "INTEGRATION AND MAINTENANCE"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 bg-background p-4 rounded-xl border border-foreground/5 shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        <span className="font-semibold text-foreground/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* IT Products & Networking Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 fade-up">
                    {/* IT Products */}
                    <section className="bg-background rounded-3xl p-10 border border-bento shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-primary/10 rounded-2xl"><Cpu className="w-8 h-8 text-primary" /></div>
                                <h2 className="text-3xl font-display font-bold">IT Products & Services</h2>
                            </div>
                            <p className="text-foreground/70 font-medium mb-8">
                                Benefit from our proficient team's expert advice. We provide professional IT services encompassing hardware, software sales, IT consultancy, and engineering at competitive prices.
                            </p>
                        </div>
                        <div className="mt-8">
                            <p className="text-sm font-bold tracking-widest uppercase text-foreground/50 mb-4">Desktops, Laptops & Servers</p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-5 py-2.5 bg-bento rounded-xl text-sm font-bold text-foreground border border-foreground/5">HP</span>
                                <span className="px-5 py-2.5 bg-bento rounded-xl text-sm font-bold text-foreground border border-foreground/5">Dell</span>
                                <span className="px-5 py-2.5 bg-bento rounded-xl text-sm font-bold text-foreground border border-foreground/5">Lenovo</span>
                                <span className="px-5 py-2.5 bg-bento rounded-xl text-sm font-bold text-foreground border border-foreground/5">Acer</span>
                            </div>
                        </div>
                    </section>

                    {/* Networking */}
                    <section className="bg-background rounded-3xl p-10 border border-bento shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-primary/10 rounded-2xl"><Wifi className="w-8 h-8 text-primary" /></div>
                                <h2 className="text-3xl font-display font-bold">Networking Solutions</h2>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Campus WiFi solutions",
                                    "Network Integration",
                                    "Bandwidth Management"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-semibold text-foreground/90">
                                        <Check className="w-5 h-5 text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-8">
                            <p className="text-sm font-bold tracking-widest uppercase text-foreground/50 mb-4">Infrastructure Partners</p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-5 py-2.5 bg-bento rounded-xl text-sm font-bold text-foreground border border-foreground/5">D-Link</span>
                                <span className="px-5 py-2.5 bg-bento rounded-xl text-sm font-bold text-foreground border border-foreground/5">tp-link</span>
                                <span className="px-5 py-2.5 bg-bento rounded-xl text-sm font-bold text-foreground border border-foreground/5 uppercase">Ubiquiti</span>
                                <span className="px-5 py-2.5 bg-bento rounded-xl text-sm font-bold text-foreground border border-foreground/5 uppercase">Cisco</span>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default ServicesPage;
