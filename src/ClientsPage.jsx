import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Building2, Landmark, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ClientsPage = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.from('.hero-content', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',
            });

            // Stats Animation
            gsap.from('.stat-card', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.stats-grid',
                    start: 'top 85%',
                }
            });

            // Marquee Animations
            const rows = ['.marquee-row-0', '.marquee-row-1', '.marquee-row-2'];
            rows.forEach((row, index) => {
                const isEven = index % 2 === 0;
                // isEven (0, 2) -> Left to Right: -50% to 0%
                // index 1 -> Right to Left: 0% to -50%

                gsap.fromTo(row,
                    { xPercent: isEven ? -50 : 0 },
                    {
                        xPercent: isEven ? 0 : -50,
                        duration: 40 + (index * 10),
                        ease: "none",
                        repeat: -1,
                    }
                );
            });

            // Floating Animation for logos
            const innerLogos = gsap.utils.toArray('.client-logo-inner');
            innerLogos.forEach(logo => {
                gsap.to(logo, {
                    y: gsap.utils.random(-15, 15),
                    x: gsap.utils.random(-10, 10),
                    rotation: gsap.utils.random(-3, 3),
                    duration: gsap.utils.random(2.5, 5),
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: gsap.utils.random(0, 2)
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const stats = [
        { label: 'Happy Customers', value: '2000+', icon: Users },
        { label: 'Distributors', value: '150+', icon: Building2 },
        { label: 'Government Projects', value: '25+', icon: Landmark },
        { label: 'Years of Excellence', value: '13+', icon: Clock },
    ];

    const clients = [
        "Screenshot 2026-02-22 111241.png", "Screenshot 2026-02-22 111247.png", "Screenshot 2026-02-22 111255.png",
        "Screenshot 2026-02-22 111304.png", "Screenshot 2026-02-22 111311.png", "Screenshot 2026-02-22 111321.png",
        "Screenshot 2026-02-22 111330.png", "Screenshot 2026-02-22 111339.png", "Screenshot 2026-02-22 111349.png",
        "Screenshot 2026-02-22 111357.png", "Screenshot 2026-02-22 111407.png", "Screenshot 2026-02-22 111417.png",
        "Screenshot 2026-02-22 111425.png", "Screenshot 2026-02-22 111435.png", "Screenshot 2026-02-22 111440.png",
        "Screenshot 2026-02-22 111448.png", "Screenshot 2026-02-22 111453.png", "Screenshot 2026-02-22 111501.png",
        "Screenshot 2026-02-22 111509.png", "Screenshot 2026-02-22 111520.png", "Screenshot 2026-02-22 111528.png",
        "Screenshot 2026-02-22 111534.png", "Screenshot 2026-02-22 111539.png", "Screenshot 2026-02-22 111546.png",
        "Screenshot 2026-02-22 111559.png", "Screenshot 2026-02-22 111613.png", "Screenshot 2026-02-22 111621.png",
        "Screenshot 2026-02-22 111628.png", "Screenshot 2026-02-22 111634.png", "Screenshot 2026-02-22 111640.png",
        "Screenshot 2026-02-22 111648.png", "Screenshot 2026-02-22 111655.png"
    ];

    return (
        <div ref={containerRef} className="bg-background min-h-screen text-foreground selection:bg-[#FF9F1B]/20 selection:text-[#FF9F1B]">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center hero-content">
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight leading-[1.1]">
                        Transforming <span className="text-[#FF9F1B]">Education</span> Together <br />
                        with Our Valued Clients.
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/60 max-w-4xl mx-auto font-medium leading-relaxed">
                        We work closely with our clients to create innovative, scalable solutions that empower educators and enhance student learning experiences. By collaborating with educational institutions, we ensure that every solution is tailored to meet the unique needs of both teachers and learners.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-6 bg-bento/30 border-y border-foreground/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stats-grid">
                        {stats.map((stat, i) => (
                            <div key={i} className="stat-card bg-background border border-foreground/10 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
                                <stat.icon className="w-10 h-10 text-[#FF9F1B] mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">{stat.value}</h3>
                                <p className="text-foreground/50 font-semibold uppercase tracking-wider text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10 px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Trusted by Schools and Educators Across India</h2>
                        <div className="w-24 h-1 bg-[#FF9F1B] mx-auto rounded-full opacity-50"></div>
                    </div>
                </div>

                {/* Multi-Row Marquee */}
                <div className="space-y-12 md:space-y-20 py-10">
                    {[0, 1, 2].map((rowIndex) => {
                        const rowLogos = rowIndex === 0 ? clients.slice(0, 11) : rowIndex === 1 ? clients.slice(11, 21) : clients.slice(21);
                        return (
                            <div key={rowIndex} className="flex overflow-hidden">
                                <div className={`marquee-row-${rowIndex} flex gap-12 md:gap-24 items-center whitespace-nowrap w-max inline-flex`}>
                                    {[...rowLogos, ...rowLogos, ...rowLogos, ...rowLogos].map((client, i) => (
                                        <div key={i} className="client-logo flex-shrink-0 w-32 h-20 md:w-44 md:h-28 transform hover:scale-110 transition-transform duration-300">
                                            <div className="client-logo-inner w-full h-full flex items-center justify-center p-4">
                                                <img
                                                    src={`${import.meta.env.BASE_URL}scroll/${encodeURIComponent(client)}`}
                                                    alt={`Client Logo ${i}`}
                                                    className="max-w-full max-h-full object-contain pointer-events-none"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default ClientsPage;
