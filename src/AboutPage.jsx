import React from 'react';
import { Target, Compass, Award, CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight text-foreground">About Us.</h1>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">Empowering customers, facilitating easy goal attainment, and fostering a more fulfilling and productive life.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <div>
                        <h2 className="text-3xl font-display font-bold mb-6 text-foreground">Our Story</h2>
                        <div className="space-y-4 text-lg text-foreground/70 font-medium">
                            <p>
                                InfinityX stands as a premier system integration partner, offering a comprehensive array of IT-integrated products and services. Established in 2013, InfinityX has navigated a decade-long journey, emerging as a prominent IT Infrastructure Solution provider catering to a diverse clientele, ranging from small and medium businesses to esteemed blue-chip enterprises. Additionally, we specialize in delivering tailored services to educational institutes.
                            </p>
                            <p>
                                With a wealth of experience, InfinityX excels in providing top-notch IT Infrastructure services across various verticals and technology landscapes. Our customer-centric approach, rooted in unwavering operational excellence, allows us to understand the intricate details of business, technology, and operations. Each encounter fuels our drive for innovation, enabling us to evolve as dynamic solution providers.
                            </p>
                            <p>
                                As a professionally managed, process-driven, and technology-focused System and Network Integrator, InfinityX specializes in LAN, WAN, WIRELESS, NETWORK MANAGEMENT, STORAGE, SERVERS, DESKTOP SECURITY & SURVEILLANCE, and a diverse array of DISPLAY Solutions domains. Our dedicated team of skilled professionals is committed to proposing technically superior and commercially competitive solutions, positioning InfinityX as the go-to enterprise solutions provider.
                            </p>
                        </div>
                    </div>
                    <div className="bg-bento rounded-3xl p-10 relative overflow-hidden h-full min-h-[400px] flex items-center justify-center border border-foreground/5 shadow-xl">
                        <img
                            src={`${import.meta.env.BASE_URL}scroll/cc_cams.jpeg?v=2`}
                            alt="Team meeting"
                            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
                            loading="eager"
                            fetchpriority="high"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    </div>
                </div>

                <div className="bg-background border border-bento rounded-3xl p-12 md:p-16 mb-24 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9F1B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <Target className="w-12 h-12 text-[#FF9F1B] mb-8" />
                    <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-foreground relative z-10">Mission</h2>
                    <p className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed max-w-4xl relative z-10">
                        Our mission is to deliver superior value by offering high-quality products that seamlessly blend performance with competitive pricing. We are dedicated to cultivating successful and lasting relationships with both our customers and suppliers.
                    </p>
                </div>

                <div>
                    <div className="text-center mb-16">
                        <Compass className="w-12 h-12 text-[#FF9F1B] mx-auto mb-6" />
                        <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-foreground">Our Approach</h2>
                        <p className="text-lg text-foreground/70 max-w-3xl mx-auto font-medium">
                            Rooted in our corporate ethos of perpetual enhancement and seamless integration, our company is steadfastly committed to delivering excellence through the robust framework of its quality management system. Our unwavering dedication is directed towards:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Delivering services and products of unparalleled quality that surpass customer expectations.",
                            "Ensuring optimal value for our customers' investments.",
                            "Providing courteous and delightful service that aligns seamlessly with both professionalism and personalized attention.",
                            "Offering candid and efficacious consultation and advice.",
                            "Ensuring swift and efficient delivery of both services and products."
                        ].map((text, i) => (
                            <div key={i} className="bg-bento p-8 rounded-2xl flex items-start gap-4 border border-foreground/5 hover:border-[#FF9F1B]/20 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-[#FF9F1B] shrink-0 mt-1" />
                                <p className="text-foreground/80 font-medium">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
