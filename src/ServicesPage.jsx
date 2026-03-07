import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Wifi, Check, Cpu, ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Reusable scroll section for internal pages to maintain cinematic feel
const ServiceSection = ({ image, imageAlt, badge, title, description, features, partners, ctaLabel, ctaTo, imageOnRight = true }) => {
    const ref = useRef(null);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            // Entrance animation for text elements
            gsap.from('.ss-text', {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                x: imageOnRight ? -100 : 100,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out',
            });

            // Entrance animation for image — ONLY if loaded
            if (isLoaded) {
                gsap.fromTo('.ss-img-content',
                    {
                        opacity: 0,
                        x: imageOnRight ? 100 : -100,
                        scale: 0.9,
                        rotateY: imageOnRight ? -10 : 10,
                    },
                    {
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 75%',
                            toggleActions: 'play none none reverse',
                        },
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        rotateY: 0,
                        duration: 1.5,
                        ease: 'power2.out',
                    }
                );
            }
        }, el);
        return () => ctx.revert();
    }, [imageOnRight, isLoaded]);

    return (
        <section ref={ref} className="min-h-screen flex items-center bg-background border-t border-bento/50 py-32 px-6 overflow-hidden">
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
                <div className="ss-img relative lg:[direction:ltr] lg:col-span-3 min-h-[400px] flex items-center justify-center bg-foreground/[0.02] rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 -m-12 bg-[#FF9F1B]/5 rounded-3xl blur-3xl pointer-events-none" />
                    <img
                        src={image}
                        alt={imageAlt}
                        loading="eager"
                        fetchpriority="high"
                        onLoad={() => setIsLoaded(true)}
                        className={`ss-img-content relative w-full max-h-[800px] object-contain drop-shadow-2xl transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
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
                title="Next-Gen SmartClass."
                description="Transforming traditional classrooms into interactive, AI-powered learning environments designed for high engagement and modern pedagogy."
                image={`${import.meta.env.BASE_URL}MATRIX PRODUCTS VISULAID (3)/SmartClass.png`}
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
                image={`${import.meta.env.BASE_URL}MATRIX PRODUCTS VISULAID (3)/Network.png`}
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
                image={`${import.meta.env.BASE_URL}MATRIX PRODUCTS VISULAID (3)/ccCamera.png`}
                imageAlt="Surveillance Systems"
                imageOnRight={true}
            />

        </div>
    );
};

export default ServicesPage;
