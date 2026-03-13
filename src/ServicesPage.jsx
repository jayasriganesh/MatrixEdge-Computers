import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Wifi, Check, Cpu, ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Reusable scroll section for internal pages to maintain cinematic feel
const ServiceSection = ({ image, imageAlt, badge, title, description, features, partners, ctaLabel, ctaTo, imageOnRight = true }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            // Entrance animation for text elements — fires once
            gsap.from(el.querySelectorAll('.ss-text'), {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
                opacity: 0,
                x: imageOnRight ? -60 : 60,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
            });

            // Entrance animation for image — fires once
            gsap.from(el.querySelectorAll('.ss-img'), {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                opacity: 0,
                x: imageOnRight ? 60 : -60,
                scale: 0.95,
                duration: 1.2,
                ease: 'power2.out',
            });
        }, el);
        return () => ctx.revert();
    }, [imageOnRight]);

    return (
        <section ref={ref} className="flex items-center bg-background border-t border-bento/50 py-14 md:py-24 px-6 overflow-hidden">
            <div className={`max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-24 items-center ${!imageOnRight ? 'lg:[direction:rtl]' : ''}`}>
                {/* Text block */}
                <div className="lg:[direction:ltr] lg:col-span-2 space-y-8">
                    <h2 className="ss-text text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.1]">{title}</h2>
                    <p className="ss-text text-lg md:text-xl text-foreground/60 font-medium max-w-xl leading-relaxed">{description}</p>

                    {features && (
                        <ul className="ss-text space-y-4 pt-4">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 font-semibold text-foreground/80 text-lg">
                                    <CheckCircle2 className="w-6 h-6 text-[#FF9F1B]" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}

                    {partners && (
                        <div className="ss-text pt-6">
                            <p className="text-sm font-bold tracking-widest uppercase text-foreground/40 mb-4">Infrastructure Partners</p>
                            <div className="flex flex-wrap gap-3">
                                {partners.map((partner, i) => (
                                    <span key={i} className="px-5 py-2.5 bg-bento rounded-xl text-sm font-bold text-foreground border border-foreground/5 shadow-sm">
                                        {partner}
                                    </span>
                                ))}
                            </div>
                        </div>
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

const ServicesPage = () => {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-[#FF9F1B]/20 pt-0">

            {/* Section 1: SmartClass */}
            <ServiceSection
                title="AI-Powered SmartClass."
                description="The infinityX Pro transforms classrooms into intelligent hubs. Automate lesson planning, summarize complex content in seconds, and track student engagement with built-in behavioral AI — creating a truly hybrid-ready learning environment."
                features={[
                    "AI Lesson Generation (5E & Bloom's)",
                    "Infinite Canvas & 3D Interactive Labs",
                    "Automated Attendance & Grading",
                    "Hybrid Ready: Remote Classroom Feed",
                    "Real-time AI Engagement Reports"
                ]}
                image={`${import.meta.env.BASE_URL}images/SmartClass.png`}
                imageAlt="SmartClass Solutions"
                imageOnRight={true}
            />

            {/* Section 2: Networking Solutions */}
            <ServiceSection
                title="Networking Solutions."
                description="Robust enterprise-grade connectivity for complete campus coverage. We deliver high-speed, secure, and manageable networking architectures."
                features={[
                    "Campus WiFi solutions",
                    "Network Integration",
                    "Bandwidth Management"
                ]}
                partners={["D-Link", "tp-link", "Ubiquiti", "Cisco"]}
                image={`${import.meta.env.BASE_URL}images/Network.png`}
                imageAlt="Networking Infrastructure"
                imageOnRight={false}
            />

            {/* Section 3: Campus Surveillance */}
            <ServiceSection
                title="Campus Surveillance."
                description="Intelligent security architectures providing total peace of mind. Our premium camera solutions ensure 24/7 monitoring with AI detection capabilities."
                features={[
                    "CCTV Architecture & Design",
                    "Command Control Room Setup",
                    "Access Control & Boom Barriers",
                    "Premium Camera Solutions"
                ]}
                image={`${import.meta.env.BASE_URL}images/ccCamera.png`}
                imageAlt="Surveillance Systems"
                imageOnRight={true}
            />

        </div>
    );
};

export default ServicesPage;
