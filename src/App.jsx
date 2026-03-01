import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ChevronRight, Monitor, Shield, Network, Mail, ArrowRight, Video, Server, Play, Cpu, PenTool, LayoutTemplate, Wifi, Menu, X } from 'lucide-react';
import ProductsPage from './ProductsPage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';

gsap.registerPlugin(ScrollTrigger);

const ContactModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Success! We will contact you soon.');
      setTimeout(() => {
        setStatus('');
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md">
      <div className="bg-bento border border-foreground/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors">
          <X size={24} />
        </button>
        <div className="p-8 sm:p-10">
          <h3 className="text-3xl font-display font-bold mb-2">Contact Sales.</h3>
          <p className="text-foreground/60 font-medium mb-8">Get in touch with our enterprise team to discuss your bespoke infrastructure needs.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground/80 mb-2">Name</label>
              <input type="text" required className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-foreground" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground/80 mb-2">Email Address</label>
              <input type="email" required className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-foreground" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground/80 mb-2">Inquiry Type</label>
              <select className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-foreground appearance-none">
                <option>Interactive Displays</option>
                <option>Campus Infrastructure</option>
                <option>Digital Signage</option>
                <option>Other Services</option>
              </select>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <button type="submit" disabled={status !== ''} className="bg-primary text-white font-medium px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors flex-1 shadow-sm disabled:opacity-50">
                {status || "Submit Inquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-bento/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={`${import.meta.env.BASE_URL}INFINITYX.png`} alt="InfinityX" className="h-20" />
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-foreground/80">
            <Link to="/products" className="hover:text-primary transition-colors">Interactive Displays</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Digital Solutions</Link>
            <Link to="/about" className="hover:text-primary transition-colors">Company</Link>
            <Link to="/#clients" className="hover:text-primary transition-colors">Clients</Link>
          </div>
          <div className="hidden md:flex">
            <button onClick={() => setIsContactModalOpen(true)} className="bg-foreground text-background px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-foreground/90 transition-colors font-medium">
              Contact Sales <ChevronRight size={16} />
            </button>
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
            <Link to="/products" onClick={() => setIsOpen(false)} className="text-foreground/80 font-medium hover:text-primary">Interactive Displays</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="text-foreground/80 font-medium hover:text-primary">Digital Solutions</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-foreground/80 font-medium hover:text-primary">Company</Link>
            <Link to="/#clients" onClick={() => setIsOpen(false)} className="text-foreground/80 font-medium hover:text-primary">Clients</Link>
            <button onClick={() => setIsContactModalOpen(true)} className="bg-foreground text-background px-4 py-2 rounded-full text-sm flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors font-medium">
              Contact Sales <ChevronRight size={16} />
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

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
      gsap.from('.hero-img', {
        scale: 1.05,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 1.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden relative z-10">
      <div ref={textRef} className="max-w-5xl mx-auto z-10">
        <h1 className="text-dynamic-hero text-foreground mb-6 flex flex-wrap justify-center gap-x-4">
          <span className="hero-word overflow-hidden inline-block text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70">Infrastructure.</span>
          <br className="hidden md:block" />
          <span className="hero-word inline-block">Integrated.</span>
          <span className="hero-word inline-block">Intelligent.</span>
          <span className="hero-word inline-block text-primary">Infinite.</span>
        </h1>
        <p className="hero-sub text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto mb-12 font-medium tracking-tight">
          Premier system integration partner delivering high-performance<br className="hidden md:block" /> IT infrastructure and intelligent display solutions.
        </p>
        <div className="hero-sub flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/products" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
            Explore Panels <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      <div className="hero-img w-full max-w-6xl mx-auto mt-20 relative rounded-2xl overflow-hidden shadow-2xl bg-bento aspect-video flex items-center justify-center border border-foreground/5">
        <img
          src={`${import.meta.env.BASE_URL}scroll/home_page_final.jpeg?v=2`}
          alt="Premium Smart Display"
          className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply"
        />
      </div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-1 bg-bento p-10 rounded-3xl flex flex-col justify-between overflow-hidden relative group">
            <div className="z-10 relative">
              <Shield className="text-primary mb-6 w-10 h-10" />
              <h3 className="text-2xl font-bold mb-4 font-display tracking-tight text-foreground">A Decade of Expertise.</h3>
              <p className="text-foreground/70 font-medium">Established in 2013, we have spent ten years providing IT solutions to blue-chip enterprises and educational institutes.</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 bg-bento p-10 rounded-3xl flex flex-col justify-between overflow-hidden relative group">
            <div className="z-10 min-h-[200px] flex flex-col justify-end">
              <Network className="text-primary mb-6 w-10 h-10" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display tracking-tight text-foreground max-w-lg">Holistic Integration.</h3>
              <p className="text-foreground/70 text-lg font-medium max-w-xl">Expertly managing everything from LAN/WAN and Wireless networking to advanced Storage and Servers.</p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 transition-transform duration-700 group-hover:scale-105 pointer-events-none">
              <img src={`${import.meta.env.BASE_URL}scroll/home_page_final.jpeg?v=2`} className="w-full h-full object-cover mix-blend-luminosity" alt="Server Integration" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-bento"></div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 bg-bento p-10 md:p-16 rounded-3xl flex flex-col md:flex-row items-center justify-between overflow-hidden relative group">
            <div className="z-10 w-full md:w-1/2 mb-10 md:mb-0 pr-8">
              <Monitor className="text-primary mb-6 w-10 h-10" />
              <h3 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-tight text-foreground">Intelligent<br />Surveillance.</h3>
              <p className="text-foreground/70 text-xl font-medium max-w-md">Delivering sophisticated CCTV architecture and Command Control Room solutions for total security.</p>
            </div>
            <div className="w-full md:w-1/2 relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <img src={`${import.meta.env.BASE_URL}scroll/cc_cams.jpeg?v=2`} className="w-full h-full object-cover" alt="Command Center" />
            </div>
          </div>
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
              <img src={`${import.meta.env.BASE_URL}scroll/${client}`} alt={`Ecosystem Partner ${i}`} className="w-full h-full object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" />
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
              <img src={`${import.meta.env.BASE_URL}INFINITYX.png`} alt="InfinityX" className="h-16" />
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
              <li><Link to="/products" className="hover:text-white transition-colors">Education Panels</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Pro Series Panels</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Digital Signage</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Video Conferencing</Link></li>
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
    <Hero />
    <BentoGrid />
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
      <div className="bg-background min-h-screen text-foreground selection:bg-primary/20 selection:text-primary scroll-smooth flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
