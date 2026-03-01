import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Monitor, Shield, Wifi, ChevronRight, PenTool, Video, Play,
    Cpu, Server, LayoutTemplate, CheckCircle2, MessageSquare,
    Volume2, Settings, Users, BookOpen, PlayCircle, ShieldCheck
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SectionHeader = ({ title, subtitle, icon: Icon }) => (
    <div className="text-center max-w-3xl mx-auto mb-16 px-6 relative z-10">
        {Icon && <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl mb-6"><Icon className="w-8 h-8 text-primary" /></div>}
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-foreground">{title}</h2>
        <p className="text-xl text-foreground/70 font-medium">{subtitle}</p>
    </div>
);

const ProductsPage = () => {
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

            {/* 1. Flagship Interactive Panels Funnel */}
            <section className="relative overflow-hidden bg-gradient-to-b from-bento to-background pt-20 pb-0">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 fade-up">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">New! It's Available</span>
                        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground tracking-tight">InfinityX Board Essential | Education & Pro Series</h1>
                        <p className="text-xl text-foreground/70 font-medium mb-10">An interactive display designed to simplify teaching and enterprise collaboration.</p>

                        <div className="bg-background border border-foreground/10 p-6 rounded-2xl shadow-xl max-w-lg relative z-10">
                            <h4 className="font-bold text-foreground mb-4">Talk to Our Expert! Book A Free Demo</h4>
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
                        <img src={`${import.meta.env.BASE_URL}scroll/cc_cams.jpeg?v=2`} alt="Flagship Display" className="rounded-3xl shadow-2xl relative z-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-background py-16 border-y border-foreground/5 fade-up">
                    <div className="max-w-5xl mx-auto px-6">
                        <h3 className="text-center text-3xl font-display font-bold mb-10">Trusted Brand with Established Results</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-foreground/10 pb-6 md:pb-0 last:border-0">
                                <span className="text-primary font-bold text-2xl mb-1">Make in India</span>
                                <span className="text-foreground/70 font-medium text-sm text-center px-4">Proudly assembled and optimized domestically.</span>
                            </div>
                            <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-foreground/10 pb-6 md:pb-0 last:border-0">
                                <span className="text-primary font-bold text-2xl mb-1">A+ Grade Panel</span>
                                <span className="text-foreground/70 font-medium text-sm text-center px-4">Premium zero-defect commercial displays.</span>
                            </div>
                            <div className="flex flex-col items-center last:border-0">
                                <span className="text-primary font-bold text-2xl mb-1">Pan India Service</span>
                                <span className="text-foreground/70 font-medium text-sm text-center px-4">Comprehensive deployment and technical support network.</span>
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
                            <h3 className="absolute bottom-10 left-10 text-white text-3xl font-display font-bold z-10 max-w-lg text-left hidden sm:block">What is the real power of an InfinityX Smart Board?</h3>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="py-24 bg-background fade-up">
                    <div className="max-w-6xl mx-auto px-6">
                        <h3 className="text-center text-4xl font-display font-bold mb-16">Cutting-Edge Features for Optimal Performance</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="relative order-2 md:order-1">
                                <div className="w-full aspect-square bg-bento rounded-full absolute -top-10 -left-10 blur-3xl opacity-50"></div>
                                <img src={`${import.meta.env.BASE_URL}scroll/cc_cams.jpeg?v=2`} className="rounded-3xl shadow-xl relative z-10 mix-blend-multiply" alt="Features Detail" />
                            </div>
                            <div className="space-y-6 order-1 md:order-2">
                                <div className="border-l-4 border-primary pl-6 py-2">
                                    <h4 className="text-xl font-bold text-foreground mb-2">4K UHD Display with 7H Glass</h4>
                                    <p className="text-foreground/70 font-medium text-sm">Anti-glare, germ-resistant screen delivering crystal clear visuals even in bright rooms.</p>
                                </div>
                                <div className="border-l-4 border-foreground/10 pl-6 py-2 hover:border-primary/50 transition-colors">
                                    <h4 className="text-xl font-bold text-foreground mb-2">64-Point Multi-Touch</h4>
                                    <p className="text-foreground/70 font-medium text-sm">Zero-lag, palm-rejection enabled writing tailored for dynamic collaboration.</p>
                                </div>
                                <div className="border-l-4 border-foreground/10 pl-6 py-2 hover:border-primary/50 transition-colors">
                                    <h4 className="text-xl font-bold text-foreground mb-2">8-Array Microphone & Dual 20W Speakers</h4>
                                    <p className="text-foreground/70 font-medium text-sm">Built-in high-fidelity audio system optimizing voice clarity for remote participants.</p>
                                </div>
                                <div className="border-l-4 border-foreground/10 pl-6 py-2 hover:border-primary/50 transition-colors">
                                    <h4 className="text-xl font-bold text-foreground mb-2">Built-in AI Camera</h4>
                                    <p className="text-foreground/70 font-medium text-sm">Auto-framing and speaker tracking built into the top bezel for seamless VC.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Assistant */}
                <div className="py-24 bg-bento fade-up">
                    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-4xl font-display font-bold mb-6">Your Versatile Teaching Assistant – InfinityX AI</h3>
                            <p className="text-foreground/70 font-medium mb-6">Built directly into the core OS, our intelligence layer acts as your co-pilot. Instantly generate quizzes, translate live speech into subtitles, or ask questions directly on the whiteboard.</p>
                            <ul className="space-y-3 font-semibold text-sm">
                                <li className="flex gap-2 items-center"><CheckCircle2 className="text-primary w-5 h-5" /> Live Translation & Subtitles</li>
                                <li className="flex gap-2 items-center"><CheckCircle2 className="text-primary w-5 h-5" /> Whiteboard Q&A Generator</li>
                                <li className="flex gap-2 items-center"><CheckCircle2 className="text-primary w-5 h-5" /> Intelligent Content Formatting</li>
                            </ul>
                        </div>
                        <div className="relative">
                            <img src={`${import.meta.env.BASE_URL}scroll/cc_cams.jpeg?v=2`} className="rounded-3xl shadow-xl" alt="AI Interface" />
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="py-24 bg-background fade-up">
                    <div className="max-w-5xl mx-auto px-6">
                        <h3 className="text-center text-4xl font-display font-bold mb-16">InfinityX Board vs Traditional Setup</h3>
                        <div className="overflow-x-auto rounded-2xl border border-foreground/10 shadow-sm">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-bento text-foreground">
                                        <th className="p-6 border-b border-foreground/10 font-bold w-1/4">Features</th>
                                        <th className="p-6 border-b border-foreground/10 font-bold bg-primary/10 text-primary w-2/4">InfinityX Smart Board</th>
                                        <th className="p-6 border-b border-foreground/10 font-bold w-1/4">Traditional Projector</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-medium text-foreground/80">
                                    <tr>
                                        <td className="p-6 border-b border-foreground/5 font-bold">Display</td>
                                        <td className="p-6 border-b border-foreground/5 bg-primary/5">4K UHD, Anti-glare, constant brightness</td>
                                        <td className="p-6 border-b border-foreground/5 text-foreground/50">Fades over time, shadows, low resolution</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 border-b border-foreground/5 font-bold">Interactivity</td>
                                        <td className="p-6 border-b border-foreground/5 bg-primary/5">64-point touch with palm rejection</td>
                                        <td className="p-6 border-b border-foreground/5 text-foreground/50">Needs external sensors / passive</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 border-b border-foreground/5 font-bold">Audio/Video</td>
                                        <td className="p-6 border-b border-foreground/5 bg-primary/5">Built-in AI Camera, 8-array mic, 40W total speakers</td>
                                        <td className="p-6 border-b border-foreground/5 text-foreground/50">Requires complex external wiring</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-bold">Maintenance</td>
                                        <td className="p-6 bg-primary/5">Zero-maintenance, OTA updates</td>
                                        <td className="p-6 text-foreground/50">Bulb replacements, filter cleaning</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* EDLA & Warranty */}
                <div className="py-24 bg-bento fade-up relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <h3 className="text-3xl font-display font-bold mb-4">Harness the Power of Google</h3>
                        <p className="text-foreground/70 font-medium mb-12">Native Google EDLA certification gives you full access to the Google Play Store, Google Workspace, and seamless security updates straight from Google.</p>

                        <div className="flex flex-wrap justify-center gap-12 mb-20">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-4"><Play className="w-8 h-8 text-primary" /></div>
                                <span className="font-bold text-sm">Play Store</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-4"><Users className="w-8 h-8 text-blue-500" /></div>
                                <span className="font-bold text-sm">Google Workspace</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-4"><BookOpen className="w-8 h-8 text-green-500" /></div>
                                <span className="font-bold text-sm">Google Chrome</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-500/10 to-primary/10 p-10 rounded-3xl border border-yellow-500/20 shadow-inner relative overflow-hidden backdrop-blur-md">
                            <ShieldCheck className="w-40 h-40 text-yellow-500/10 absolute -right-6 -bottom-6" />
                            <h3 className="text-3xl font-display font-bold mb-4 relative z-10 flex items-center justify-center gap-3"><Shield className="text-yellow-600 w-8 h-8" /> 3 Years Onsite Warranty</h3>
                            <p className="font-medium text-foreground/80 relative z-10">We stand by our hardware. Every InfinityX Board comes with a comprehensive 3-year onsite warranty ensuring zero downtime for your organization.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Digital Signage */}
            <section className="py-24 bg-bento relative">
                <SectionHeader
                    icon={LayoutTemplate}
                    title="Digital Signage."
                    subtitle="Captivating commercial displays engineered for modern public spaces."
                />
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
                    <div className="md:col-span-2 bg-background p-10 rounded-3xl overflow-hidden relative min-h-[400px] flex flex-col justify-end border border-foreground/5">
                        <img src={`${import.meta.env.BASE_URL}scroll/cc_cams.jpeg?v=2`} className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 hover:scale-105 transition-transform duration-700" alt="Video Wall" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold font-display mb-4">Video Wall Systems & Lobby Displays</h3>
                            <p className="text-foreground/70 font-medium max-w-lg">Create unforgettable first impressions with expansive multi-screen synced configurations capable of stunning UHD visuals.</p>
                        </div>
                    </div>
                    <div className="md:col-span-1 bg-background p-10 rounded-3xl border border-foreground/5 flex flex-col justify-between">
                        <div>
                            <h4 className="text-xl font-bold mb-4">Signage Portfolio</h4>
                            <ul className="space-y-3 font-medium text-foreground/80 mb-8">
                                <li className="flex items-center gap-2 border-b border-bento pb-2"><ChevronRight size={16} className="text-primary" /> Digital Standees</li>
                                <li className="flex items-center gap-2 border-b border-bento pb-2"><ChevronRight size={16} className="text-primary" /> Interactive Kiosks</li>
                                <li className="flex items-center gap-2 border-b border-bento pb-2"><ChevronRight size={16} className="text-primary" /> Information Terminals</li>
                                <li className="flex items-center gap-2 pb-2"><ChevronRight size={16} className="text-primary" /> Touch & Non-Touch Variants</li>
                            </ul>
                        </div>
                        <div className="bg-bento p-5 rounded-2xl text-sm font-semibold">
                            <span className="text-primary block mb-1 uppercase tracking-widest text-xs">Core Features</span>
                            Remote content management, Cloud scheduling, and centralized Advertising broadcasting.
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. VC & Accessories */}
            <section className="py-24 bg-background border-b border-foreground/5">
                <SectionHeader
                    icon={Video}
                    title="Conferencing & Accessories."
                    subtitle="The complete hardware ecosystem connecting classrooms and businesses globally."
                />
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 fade-up">

                    {/* Box 1 */}
                    <div className="bg-bento p-8 rounded-3xl border border-foreground/5 shadow-sm">
                        <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm">
                            <Video className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-6">Video Conferencing</h3>
                        <ul className="space-y-4 font-medium text-foreground/80">
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> AI tracking cameras</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Conference microphones</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Premium speaker systems</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> All-in-one VC integration kits</li>
                        </ul>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-bento p-8 rounded-3xl border border-foreground/5 shadow-sm relative overflow-hidden group">
                        <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm relative z-10">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-6 relative z-10">Campus Solutions</h3>
                        <ul className="space-y-4 font-medium text-foreground/80 relative z-10">
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Campus CCTV system array</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Two-way audio monitoring</li>
                            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Central control room software</li>
                        </ul>
                        <img src={`${import.meta.env.BASE_URL}scroll/cc_cams.jpeg?v=2`} className="absolute right-[-20%] bottom-[-20%] w-2/3 h-2/3 object-cover opacity-10 group-hover:scale-110 transition-transform duration-500 rounded-tl-full mix-blend-multiply" alt="CCTV Background" />
                    </div>

                    {/* Box 3 */}
                    <div className="bg-bento p-8 rounded-3xl border border-foreground/5 shadow-sm">
                        <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm">
                            <LayoutTemplate className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-6">Panel Accessories</h3>
                        <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-foreground/70">
                            <span className="bg-background px-3 py-2 rounded-lg border border-foreground/5 text-center">Webcams</span>
                            <span className="bg-background px-3 py-2 rounded-lg border border-foreground/5 text-center">OPS Modules</span>
                            <span className="bg-background px-3 py-2 rounded-lg border border-foreground/5 text-center">Wall Mounts</span>
                            <span className="bg-background px-3 py-2 rounded-lg border border-foreground/5 text-center">Mobile Stands</span>
                            <span className="bg-background px-3 py-2 rounded-lg border border-foreground/5 text-center">Digital Podiums</span>
                            <span className="bg-background px-3 py-2 rounded-lg border border-foreground/5 text-center">Stylus Pens</span>
                            <span className="col-span-2 bg-background px-3 py-2 rounded-lg border border-foreground/5 text-center">Writing Board Enclosures</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. AI-Powered Software */}
            <section className="py-24 bg-foreground text-background relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="text-center max-w-3xl mx-auto mb-20 px-6 relative z-10">
                    <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-2xl mb-6"><Cpu className="w-8 h-8 text-primary" /></div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">AI-Powered Software.</h2>
                    <p className="text-xl text-background/70 font-medium">A dedicated intelligence layer transforming displays into active, collaborative participants.</p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 fade-up">

                    {/* Core AI */}
                    <div className="bg-background/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3"><PenTool size={24} /> Core AI Features</h3>
                        <div className="space-y-4">
                            {["AI Whiteboard", "AI Annotation", "AI Q&A Assistant", "AI Voice Assistant", "AI Subtitles (Live Captions)", "AI Camera Auto-framing", "AI Screen Adaptation", "AI Content Search"].map((item, i) => (
                                <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-xl">
                                    <span className="font-medium text-sm text-white/90">{item}</span>
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Content */}
                    <div className="bg-background/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-8 text-[#FF9F1B] flex items-center gap-3"><BookOpen size={24} /> Education Software</h3>
                        <p className="text-white/60 text-sm font-medium mb-6">Built-in K-12 digital content featuring 3000+ interactive 3D learning resources natively run on the panel.</p>
                        <div className="grid grid-cols-2 gap-3 text-center text-sm font-semibold text-white/80">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">Physics Simulations</div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">Chemistry Labs</div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">Biology Models</div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">Math Tools</div>
                            <div className="col-span-2 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">Social Studies Maps & Language Modules</div>
                        </div>
                    </div>

                    {/* Collaboration Tools */}
                    <div className="bg-background/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3"><Wifi size={24} /> Teaching Tools</h3>
                        <ul className="space-y-5 text-white/80 font-medium">
                            <li className="flex gap-4 items-start">
                                <span className="text-primary font-bold">01</span>
                                <span>Multi-user writing with instant split-screen lessons.</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-primary font-bold">02</span>
                                <span>Cloud file access & secure local screen recording.</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-primary font-bold">03</span>
                                <span>Zero-lag wireless casting from any mobile device.</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-primary font-bold">04</span>
                                <span>Remote teaching mode built-in for hybrid environments.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* 5. Infrastructure Solutions */}
            <section className="py-24 bg-bento">
                <SectionHeader
                    icon={Server}
                    title="Infrastructure Solutions."
                    subtitle="Building the foundation for reliable, scalable campus and corporate technology."
                />

                <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 fade-up">
                    <div className="bg-background rounded-3xl p-10 border border-foreground/5 shadow-xl relative overflow-hidden">
                        <Wifi className="w-12 h-12 text-primary opacity-20 absolute top-10 right-10" />
                        <h3 className="text-2xl font-display font-bold mb-2">Campus Technology</h3>
                        <p className="text-foreground/50 text-sm font-bold uppercase tracking-widest mb-8">Network & Security</p>
                        <ul className="space-y-4 font-medium text-foreground/80">
                            <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary" /> Campus Wi-Fi deployment</li>
                            <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary" /> Classroom CCTV systems</li>
                            <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary" /> Control room dashboards</li>
                            <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary" /> Secure classroom communication</li>
                        </ul>
                    </div>

                    <div className="bg-foreground text-background rounded-3xl p-10 border border-foreground/5 shadow-xl relative overflow-hidden">
                        <h3 className="text-2xl font-display font-bold mb-2">Computer Labs</h3>
                        <p className="text-background/50 text-sm font-bold uppercase tracking-widest mb-8">Hardware Logistics</p>
                        <div className="space-y-6">
                            <div className="border border-background/20 rounded-2xl p-4 flex gap-4 items-center bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
                                <Monitor className="w-8 h-8 text-primary" />
                                <div>
                                    <h4 className="font-bold text-white">Refurbished A+ Grade</h4>
                                    <p className="text-xs text-white/60">Fully certified computer hardware deployments.</p>
                                </div>
                            </div>
                            <div className="border border-background/20 rounded-2xl p-4 flex gap-4 items-center bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
                                <Shield className="w-8 h-8 text-primary" />
                                <div>
                                    <h4 className="font-bold text-white">3-Year Warranty</h4>
                                    <p className="text-xs text-white/60">Comprehensive hardware coverage.</p>
                                </div>
                            </div>
                            <div className="border border-background/20 rounded-2xl p-4 flex gap-4 items-center bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
                                <LayoutTemplate className="w-8 h-8 text-primary" />
                                <div>
                                    <h4 className="font-bold text-white">Preloaded Software</h4>
                                    <p className="text-xs text-white/60">Education packages ready out of the box.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default ProductsPage;
