import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ChevronRight, Monitor, Shield, Network, Mail, ArrowRight, Video, Server, Play, Cpu, PenTool, LayoutTemplate, Wifi, Menu, X } from 'lucide-react';
import ProductsPage from './ProductsPage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ClientsPage from './ClientsPage';
import ContactPage from './ContactPage';

gsap.registerPlugin(ScrollTrigger);



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9] border-b border-bento/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={`${import.meta.env.BASE_URL}MATRIX%20PRODUCTS%20VISULAID%20(3)/INFINITYX.png`} alt="InfinityX" className="h-20" />
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-foreground/80">
            <Link to="/products" className="hover:text-[#FF9F1B] transition-colors">Interactive Displays</Link>
            <Link to="/services" className="hover:text-[#FF9F1B] transition-colors">Digital Solutions</Link>
            <Link to="/about" className="hover:text-[#FF9F1B] transition-colors">Company</Link>
            <Link to="/clients" className="hover:text-[#FF9F1B] transition-colors">Clients</Link>
          </div>
          <div className="hidden md:flex">
            <Link to="/contact" className="bg-[#FF9F1B] text-white px-5 py-2.5 rounded-full text-sm flex items-center gap-2 hover:bg-[#FF9F1B]/90 transition-all hover:scale-105 active:scale-95 font-bold shadow-md shadow-[#FF9F1B]/20">
              Contact Sales <ChevronRight size={16} />
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-b border-bento/50 px-6 py-4 flex flex-col space-y-4">
            <Link to="/products" onClick={() => setIsOpen(false)} className="text-foreground/80 font-medium hover:text-[#FF9F1B]">Interactive Displays</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="text-foreground/80 font-medium hover:text-[#FF9F1B]">Digital Solutions</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-foreground/80 font-medium hover:text-[#FF9F1B]">Company</Link>
            <Link to="/clients" onClick={() => setIsOpen(false)} className="text-foreground/80 font-medium hover:text-[#FF9F1B]">Clients</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-foreground text-background px-4 py-3 rounded-full text-sm flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors font-bold">
              Contact Sales <ChevronRight size={16} />
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-word', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.2
      });
      gsap.from('.hero-sub', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen flex flex-col items-center justify-center text-center overflow-hidden relative z-10 px-6">
      <div className="max-w-5xl mx-auto z-10">
        <h1 className="text-dynamic-hero text-foreground mb-6 flex flex-wrap justify-center gap-x-4">
          <span className="hero-word inline-block">Infrastructure.</span>
          <br className="hidden md:block" />
          <span className="hero-word inline-block">Integrated.</span>
          <span className="hero-word inline-block">Intelligent.</span>
          <span className="hero-word inline-block text-[#FF9F1B]">InfinityX.</span>
        </h1>
        <p className="hero-sub text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto mb-12 font-medium tracking-tight">
          Premier system integration partner delivering high-performance<br className="hidden md:block" /> IT infrastructure and intelligent display solutions.
        </p>
        <div className="hero-sub flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/products" className="w-full sm:w-auto bg-[#FF9F1B] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#FF9F1B]/90 transition-colors shadow-lg shadow-[#FF9F1B]/20 flex items-center justify-center gap-2">
            Explore Products <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Reusable full-screen scroll section with alternating image placement
const ScrollSection = ({ image, imageAlt, badge, title, description, ctaLabel, ctaTo, imageOnRight = true }) => {
  const ref = useRef(null);

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
        x: imageOnRight ? -100 : 100, // Slide in from opposite side of image
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Entrance animation for image
      gsap.from('.ss-img', {
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: imageOnRight ? 100 : -100, // Slide in from its side
        scale: 0.9,
        rotateY: imageOnRight ? -10 : 10,
        duration: 1.5,
        ease: 'power2.out',
      });
    }, el);
    return () => ctx.revert();
  }, [imageOnRight]);

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-background border-t border-bento/50 py-32 px-6 overflow-hidden">
      <div className={`max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-24 items-center ${!imageOnRight ? 'lg:[direction:rtl]' : ''}`}>
        {/* Text block — always LTR internally */}
        <div className="lg:[direction:ltr] lg:col-span-2 space-y-6">
          <span className="ss-text block text-[#FF9F1B] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">{badge}</span>
          <h2 className="ss-text text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.15]">{title}</h2>
          <p className="ss-text text-lg md:text-xl text-foreground/60 font-medium max-w-xl leading-relaxed">{description}</p>
          <div className="ss-text pt-2">
            <Link
              to={ctaTo}
              className="inline-flex items-center gap-3 bg-[#FF9F1B] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#FF9F1B]/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#FF9F1B]/20"
            >
              {ctaLabel} <ArrowRight size={20} />
            </Link>
          </div>
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



const ClientMarquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.marquee-track', {
        xPercent: -50,
        repeat: -1,
        duration: 45,
        ease: "none",
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

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
    <section id="clients" className="py-20 border-y border-bento/50 bg-background overflow-hidden flex flex-col items-center">
      <p className="text-sm font-semibold text-foreground/50 uppercase tracking-widest mb-10 text-center px-4">Trusted Integrations & Ecosystem Partners</p>
      <div ref={marqueeRef} className="w-full relative flex whitespace-nowrap overflow-hidden group">
        <div className="marquee-track flex gap-12 md:gap-16 px-8 items-center">
          {clients.concat(clients).map((client, i) => (
            <div key={i} className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 hover:scale-105 transition-transform duration-300">
              <img src={`${import.meta.env.BASE_URL}scroll/${encodeURIComponent(client)}`} alt={`Ecosystem Partner ${i}`} className="w-full h-full object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const Footer = () => {
  return (
    <footer className="bg-[#1D1D1F] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={`${import.meta.env.BASE_URL}MATRIX%20PRODUCTS%20VISULAID%20(3)/INTERACTIVE%20SMART%20BOARD.png`} alt="InfinityX" className="h-16" />
            </Link>
            <p className="text-white/60 font-medium max-w-sm mb-6">
              Premier system integration partner delivering high-performance IT infrastructure and intelligent display solutions.
            </p>
            <div className="text-white/70 text-sm font-medium mb-8 space-y-2">
              <p>APIIC Industrial area C4/110, 100 Feet Rd</p>
              <p>Vijayawada-520007</p>
              <p>Mobile: +91 9292252880</p>
              <p>Email: <a href="mailto:matrixedgevij@gmail.com" className="hover:text-white transition-colors">matrixedgevij@gmail.com</a></p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Products</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><Link to="/products" className="hover:text-white transition-colors">Eco Interactive Display</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Interactive Whiteboard</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Corporate Display</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Digital Signage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Contact Matrix Edge</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm font-medium">
          <p>© 2026 InfinityX. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>A Matrix Edge Initiative</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

const LandingPage = () => (
  <>
    {/* Scroll-1: Hero — text only, fullscreen */}
    <Hero />

    {/* Scroll-2: Interactive Displays */}
    <ScrollSection
      image={`${import.meta.env.BASE_URL}MATRIX%20PRODUCTS%20VISULAID%20(3)/home_page_final.jpeg`}
      imageAlt="InfinityX Interactive Displays"
      badge="Flagship Product"
      title="Interactive Displays. Built for Learning & Business."
      description="InfinityX smart boards deliver 4K UHD visuals, 64-point multi-touch, built-in AI cameras, and an 8-array microphone system — engineered for education and enterprise collaboration."
      ctaLabel="Explore Interactive Displays"
      ctaTo="/products"
      imageOnRight={true}
    />

    {/* Scroll-3: Holistic Integration */}
    <ScrollSection
      image={`${import.meta.env.BASE_URL}MATRIX%20PRODUCTS%20VISULAID%20(3)/Network.png`}
      imageAlt="Holistic Network Integration"
      badge="End-to-End Integration"
      title="Holistic Integration. Connecting Every Layer."
      description="From campus-wide LAN/WAN and wireless networks to advanced storage and server deployments — InfinityX architects the complete technology backbone your organization needs to scale."
      ctaLabel="Explore Digital Solutions"
      ctaTo="/services"
      imageOnRight={false}
    />

    {/* Scroll-4: Intelligent Surveillance */}
    <ScrollSection
      image={`${import.meta.env.BASE_URL}MATRIX%20PRODUCTS%20VISULAID%20(3)/ccCamera.png`}
      imageAlt="Intelligent Surveillance Systems"
      badge="Security & Surveillance"
      title="Intelligent Surveillance. Total Control."
      description="Multi-camera CCTV architectures, command control room deployments, access control, and boom barrier solutions — comprehensive security intelligence for campuses and enterprises."
      ctaLabel="Explore Security Solutions"
      ctaTo="/services"
      imageOnRight={true}
    />

    <ClientMarquee />
  </>
);

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top on page change
    if (!hash) {
      window.scrollTo(0, 0);
    }
    // Scroll to section on hash match with slight delay to ensure render
    else {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <div className="bg-background min-h-screen text-foreground selection:bg-[#FF9F1B]/20 selection:text-[#FF9F1B] scroll-smooth flex flex-col">
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
