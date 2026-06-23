import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ArrowRight,
  Send,
  Check,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Clock,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
  Globe,
  Sparkles,
  Calendar,
  Volume2
} from 'lucide-react';

// Custom data & imports
import {
  PROJECTS,
  TEAM_MEMBERS,
  TIMELINE_HIGHLIGHTS,
  PRESS_ENTRIES,
  TESTIMONIALS,
  CORPORATE_CLIENTS,
  CLIENT_SUCCESS_STORIES,
  CAPABILITIES,
  PARTNER_BRANDS,
  INSTAGRAM_IMAGES
} from './data';
import { Project } from './types';

// Global layout enhancements
import ParticlesBg from './components/ParticlesBg';
import CustomCursor from './components/CustomCursor';
import AnimatedSection from './components/AnimatedSection';
import ModalProjectDetails from './components/ModalProjectDetails';
import Logo from './components/Logo';
import LiveBorderCard from './components/LiveBorderCard';
import { Mouse } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'gallery' | 'press' | 'team' | 'clients' | 'testimonials' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  
  // Gallery states
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Home slider hero imagery
  const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80"
  ];
  const [heroSlide, setHeroSlide] = useState(0);

  // Form states
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: 'Corporate + Experiential',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Testimonials active carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Scroll to top on page navigation with dynamic mini loading screen simulation
  const handleTabChange = (tab: typeof activeTab) => {
    if (tab === activeTab) return;
    setIsNavigating(true);
    setMobileMenuOpen(false);
    
    // Smooth timing transition
    setTimeout(() => {
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      setTimeout(() => {
        setIsNavigating(false);
      }, 500);
    }, 350);
  };

  // Autoplay hero background slider & main testimonial rotating slides
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5500);

    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);

    // Turn off initial global page-loader after nice 1.6s delay
    const loaderTimer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1800);

    return () => {
      clearInterval(heroInterval);
      clearInterval(testimonialInterval);
      clearTimeout(loaderTimer);
    };
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;
    setContactSubmitted(true);
    setTimeout(() => {
      setContactForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        eventType: 'Corporate + Experiential',
        message: ''
      });
    }, 3000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#060606] text-gray-100 select-text overflow-x-hidden font-sans">
      
      {/* 1. Global Custom luxury particle background layer */}
      <ParticlesBg />

      {/* Ambient background glows for high-end luxury feel */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] ambient-flare-top-right pointer-events-none z-0" />
      <div className="absolute top-[25vh] left-[10vw] w-[40vw] h-[40vw] ambient-glow-burgundy pointer-events-none z-0" />

      {/* 2. Global Custom Cursor interactive system (desktop only) */}
      <CustomCursor />

      {/* 3. Global Initial Page Loader (Cinematic Animated Brand Reveal) */}
      <AnimatePresence>
        {isInitialLoading && (
          <motion.div
            id="global-initial-loader"
            className="fixed inset-0 bg-[#060606] z-[999] flex flex-col items-center justify-center p-6 overflow-hidden"
            exit={{ opacity: 0, filter: "blur(20px)", y: -60 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 ambient-glow-burgundy opacity-60 pointer-events-none scale-150" />
            
            <div className="text-center max-w-md space-y-6 relative z-10">
              {/* Subtle animated logo with stroke reveal / fade-scale */}
              <motion.div
                initial={{ scale: 0.75, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-3"
              >
                <Logo className="scale-130 md:scale-150 mb-3" />
                <h3 className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-gray-400 uppercase mt-4">
                  EXPERIENTIAL DESIGN AGENCY
                </h3>
              </motion.div>

              {/* Elegant Progress line */}
              <div className="relative w-40 h-[1.5px] bg-[#1a1a1c] mx-auto overflow-hidden rounded-full mt-8">
                <motion.div
                  className="absolute h-full bg-burgundy rounded-full"
                  initial={{ left: '-100%', width: '100%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-[9.5px] uppercase tracking-[0.3em] text-gray-500 font-bold mt-4"
              >
                We build immersive spatial moments...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Navigation Tab Changing Loader */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            id="nav-change-loader"
            className="fixed inset-0 bg-[#060606]/95 backdrop-blur-md z-[980] flex flex-col items-center justify-center p-6"
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.35 }}
          >
            <div className="text-center space-y-5">
              <span className="inline-block p-4 bg-burgundy/10 border border-burgundy/15 rounded-full text-burgundy animate-pulse">
                <Sparkles size={30} />
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-burgundy-light">
                REVEALING STORY
              </p>
              {/* Thin luxury progress line */}
              <div className="w-40 h-[1.5px] bg-[#1a1a1c] rounded-full mx-auto overflow-hidden">
                <div className="h-full bg-burgundy animate-[shimmer_1.5s_infinite] w-3/4 mx-auto rounded-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. STICKY NAVBAR */}
      <header className="sticky top-0 z-40 w-full transition-all duration-300 bg-[#060607]/75 backdrop-blur-md border-b border-burgundy/15 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          
          {/* Logo container left-aligned */}
          <button
            onClick={() => handleTabChange('home')}
            className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <Logo />
          </button>

          {/* Desktop Links (Center-Right Align) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {(['home', 'gallery', 'press', 'team', 'clients', 'testimonials', 'contact'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`relative py-2 text-xs font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
                  activeTab === tab ? 'text-burgundy-light' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-burgundy rounded-full shadow-[0_0_8px_#7A1F2B]"
                    layoutId="activeTabUnderline"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Partner Brands (Icons/Desktop Far Right) */}
          <div className="hidden lg:flex items-center gap-4 border-l border-burgundy/15 pl-6 pr-1">
            {PARTNER_BRANDS.map((partner) => (
              <a
                key={partner.name}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${partner.name}`}
                className="opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-105 filter brightness-0 invert"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  referrerPolicy="no-referrer"
                  className="h-4.5 w-auto object-contain"
                />
              </a>
            ))}
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-burgundy-light transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Menu Overlapping Header */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#08080a]/95 backdrop-blur-md border-l border-burgundy/20 shadow-2xl p-8 flex flex-col justify-between"
            initial={{ x: '100%', filter: 'blur(10px)' }}
            animate={{ x: 0, filter: 'blur(0px)' }}
            exit={{ x: '100%', filter: 'blur(10px)' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
          >
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-white"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Mobile links list */}
              <nav className="flex flex-col gap-6 pt-12">
                {(['home', 'gallery', 'press', 'team', 'clients', 'testimonials', 'contact'] as const).map((tab, idx) => (
                  <motion.button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`text-left text-sm font-bold tracking-[0.2em] uppercase py-2 border-l-2 pl-4 transition-all ${
                      activeTab === tab
                        ? 'border-burgundy text-white bg-burgundy/10'
                        : 'border-transparent text-gray-400 hover:text-white hover:pl-6'
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {tab}
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Mobile partner brands list bottom */}
            <div className="border-t border-burgundy/10 pt-8 space-y-4">
              <h5 className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                Partner Networks
              </h5>
              <div className="flex flex-wrap gap-4 items-center">
                {PARTNER_BRANDS.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-50 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      referrerPolicy="no-referrer"
                      className="h-4 w-auto"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. MAIN CONTENT PAGES */}
      <main className="relative z-10">

        {/* ==================== HOME PAGE ==================== */}
        {activeTab === 'home' && (
          <div className="animate-fade-in divide-y divide-gray-100/60 pb-12">
            
            {/* Immersive Home cinematic landing hero page */}
            <div className="relative h-screen bg-[#060606] flex items-center justify-center overflow-hidden">
              
              {/* Background transitioning images with smooth Ken Burns motion zoom effect */}
              <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={heroSlide}
                    initial={{ opacity: 0, filter: "blur(4px)", scale: 1.08 }}
                    animate={{ opacity: 0.45, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(4px)", scale: 0.96 }}
                    transition={{ duration: 2.2, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    <img
                      src={HERO_IMAGES[heroSlide]}
                      referrerPolicy="no-referrer"
                      className="object-cover w-full h-full"
                      alt="Luxury Showcase Backdrop"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Advanced Cinematic gradients, vignettes and top/bottom blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/30 to-[#060606]/95 z-10" />
                <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 30%, rgba(6,6,6,0.5) 75%, #060606 100%) z-10 hero-vignette" />
                <div className="absolute inset-0 ambient-glow-burgundy opacity-40 z-1" />
              </div>

              {/* Minimalist floating disco ball element with smooth modern premium parallax flow */}
              <motion.div
                className="absolute top-24 right-8 md:top-36 md:right-20 z-20 w-20 h-20 md:w-32 md:h-32 pointer-events-none opacity-40 mix-blend-screen"
                animate={{
                  y: [0, -14, 0],
                  rotate: [0, 6, -6, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src="https://23-layers.s3.amazonaws.com/wp-content/uploads/2024/02/25151723/discoball.png"
                  alt="Disco Ball Decor Accent"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(122,31,43,0.5)]"
                />
              </motion.div>

              {/* Main Landing copy: Staggered High-Fashion Editorial text reveal */}
              <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
                
                {/* Accent Tag */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-6"
                >
                  <span className="inline-block px-4 py-1.5 border border-burgundy/30 bg-burgundy/10 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-burgundy-light rounded-full shadow-[0_0_15px_rgba(122,31,43,0.2)]">
                    NYC PRESTIGE AGENCY
                  </span>
                </motion.div>

                {/* Staggered text layers - playfair / sans dynamic pairings */}
                <div className="overflow-hidden space-y-1.5 md:space-y-3 mb-10">
                  <motion.h4
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xs md:text-sm font-bold uppercase tracking-[0.6em] text-gray-300"
                  >
                    WE TRANSLATE DIGITAL DISRUPTION
                  </motion.h4>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white leading-none"
                  >
                    INTO <span className="font-sans font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white via-burgundy-light to-white">STUNNING</span>
                  </motion.h1>

                  <motion.h2
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-extrabold tracking-tight text-white leading-none"
                  >
                    REALITIES.
                  </motion.h2>
                </div>

                {/* Highly emotional minimal subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  transition={{ delay: 0.8, duration: 1.0 }}
                  className="max-w-xl text-gray-400 text-xs sm:text-sm md:text-base tracking-widest uppercase font-semibold leading-relaxed mb-12"
                >
                  We are storytellers, planners, visual architects & creative producers.
                </motion.p>

                {/* Interactive buttons with glowing gradient sweep boundaries */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 1.0 }}
                  className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md"
                >
                  <button
                    onClick={() => handleTabChange('gallery')}
                    className="w-full sm:w-auto px-8 py-4 bg-burgundy hover:bg-burgundy-light text-white rounded-xl text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 shadow-xl shadow-burgundy/20 hover:scale-105"
                  >
                    VIEW OUR WORK
                  </button>
                  <button
                    onClick={() => handleTabChange('contact')}
                    className="w-full sm:w-auto px-8 py-4 border border-burgundy/30 hover:border-burgundy-light hover:text-white text-gray-300 rounded-xl text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 bg-[#0A0A0C]/50 backdrop-blur-sm shadow-md hover:scale-105"
                  >
                    INITIATE BRIEF
                  </button>
                </motion.div>
              </div>

              {/* Premium Scroll-cue mouse down-indicator cue */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.3, duration: 1.0 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 cursor-pointer"
                onClick={() => {
                  const el = document.getElementById('home-corporate');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="text-[9px] font-bold tracking-[0.4em] text-gray-500 uppercase">
                  SCROLL
                </div>
                <motion.div
                  animate={{
                    y: [0, 8, 0]
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-burgundy-light bg-burgundy/5 p-2 rounded-full border border-burgundy/20 shadow-[0_0_10px_rgba(122,31,43,0.15)]"
                >
                  <Mouse size={18} className="animate-pulse" />
                </motion.div>
              </motion.div>

            </div>

            {/* Corporate Section (Animated reveal scroll-trigger component) */}
            <AnimatedSection
              id="home-corporate"
              imageSrc="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
              imageOnLeft={true}
              heading={
                <div className="space-y-3">
                  <span className="text-xs font-bold tracking-widest uppercase text-burgundy">
                    EXPERIENTIAL INNOVATION
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal uppercase leading-tight">
                    Corporate Showcase
                  </h2>
                </div>
              }
              description={
                <p>
                  We specialize in experiential events that elevate brands into popular culture and shareworthy immersive moments. Bringing a boutique approach to innovative global brands and startups alike, we create experiences that work.
                </p>
              }
              cta={
                <button
                  onClick={() => handleTabChange('gallery')}
                  className="px-6 py-3 border-2 border-burgundy hover:bg-burgundy hover:text-white text-burgundy text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300"
                >
                  View Corporate Work
                </button>
              }
            />

            {/* Social Section */}
            <AnimatedSection
              id="home-social"
              imageSrc="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
              imageOnLeft={false}
              heading={
                <div className="space-y-3">
                  <span className="text-xs font-bold tracking-widest uppercase text-burgundy">
                    CELEBRATIONS & MILESTONES
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal uppercase leading-tight">
                    Social Elegance
                  </h2>
                </div>
              }
              description={
                <p>
                  From concept creation to execution, we combine seasoned knowledge with inspiration. Cohesive creativity is our touchstone, where no detail goes unconsidered – be it food, service, entertainment or design. These unite in harmony, creating a spirit of enthusiasm and celebration.
                </p>
              }
              cta={
                <button
                  onClick={() => handleTabChange('gallery')}
                  className="px-6 py-3 border-2 border-charcoal hover:bg-charcoal hover:text-white text-charcoal text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300"
                >
                  Explore Celebrations
                </button>
              }
            />

            {/* Why Our Events Work */}
            {/* Why Our Events Work */}
            <section className="py-20 md:py-28 bg-[#0C0C0E] relative overflow-hidden">
              <div className="absolute top-[25%] left-[5%] w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-burgundy-light">
                    THE PROOF IS IN THE LAUNCH
                  </span>
                  <h2 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
                    Why Our Events Work
                  </h2>
                  <p className="text-gray-400 font-medium">
                    Like really, really work. Let us show you.
                  </p>
                </div>

                {/* Animated Highlights Statistics cards with LiveBorder Wrapper */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      num: "1.8B+",
                      title: "Social Impressions",
                      desc: "Engineered shareable spatial moments crafted exclusively to capture demographic focus.",
                      label: "CAMPAIGN IMPACT"
                    },
                    {
                      num: "150+",
                      title: "Prestige Launches",
                      desc: "Formulating product releases to transition into direct digital and physical conversations.",
                      label: "GLOBAL REVENUE"
                    },
                    {
                      num: "100%",
                      title: "Tailored Customization",
                      desc: "No boilerplate packages. Every flower, projection line, and color accent mapped uniquely.",
                      label: "PRECISION DESIGN"
                    }
                  ].map((stat, idx) => (
                    <LiveBorderCard
                      key={idx}
                      delay={idx * 0.1}
                      className="h-full"
                    >
                      <div className="space-y-4 flex-grow flex flex-col justify-between">
                        <div className="space-y-4">
                          <span className="inline-block text-[9.5px] font-bold tracking-widest text-burgundy-light bg-burgundy/10 border border-burgundy/25 px-2.5 py-1 rounded-full uppercase">
                            {stat.label}
                          </span>
                          <h4 className="text-4xl md:text-5xl font-black tracking-tight text-white group-hover:text-burgundy-light transition-colors duration-300">
                            {stat.num}
                          </h4>
                          <h5 className="text-lg font-bold text-gray-200 tracking-tight">{stat.title}</h5>
                          <p className="text-gray-400 text-sm leading-relaxed">{stat.desc}</p>
                        </div>
                        <div className="border-t border-burgundy/10 pt-4 mt-6">
                          <span className="text-xs font-bold text-burgundy-light flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                            Calculated Metrics <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </LiveBorderCard>
                  ))}
                </div>
              </div>
            </section>

            {/* Highlights Timeline (Animated Vertical) */}
            <section className="py-20 md:py-28 bg-[#060606] relative">
              <div className="max-w-4xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-burgundy-light">
                    CHRONICLE OF EXCELLENCE
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                    Highlights Timeline
                  </h2>
                </div>

                <div className="relative border-l-2 border-burgundy/15 ml-4 md:ml-32 space-y-12">
                  {TIMELINE_HIGHLIGHTS.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="relative pl-8 md:pl-12"
                      initial={{ opacity: 0, filter: "blur(5px)", x: -25 }}
                      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, delay: idx * 0.08 }}
                    >
                      {/* Badge timeline year on left desktop */}
                      <span className="hidden md:block absolute right-full top-0 mr-8 text-right font-extrabold text-burgundy-light text-xl leading-none">
                        {item.year}
                      </span>

                      {/* Floating Indicator dot with custom backglow pulse */}
                      <div className="absolute top-1.5 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-burgundy ring-4 ring-burgundy/20 animate-soft-glow" />

                      <div className="space-y-2">
                        <span className="md:hidden block font-extrabold text-burgundy-light text-sm">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-bold text-white tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-20 md:py-28 bg-[#0D0D10] relative">
              <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent, rgba(122,31,43,0.03)) pointer-events-none" />
              <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-burgundy-light">
                    CORE SPECIALTIES
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
                    Expert Capabilities
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {CAPABILITIES.map((cap, idx) => (
                    <LiveBorderCard
                      key={idx}
                      delay={idx * 0.08}
                    >
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <span className="block text-2xl font-black text-burgundy-light mb-4">
                            0{idx + 1}
                          </span>
                          <h4 className="text-lg font-bold text-white mb-3 tracking-tight">
                            {cap.title}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {cap.description}
                          </p>
                        </div>
                      </div>
                    </LiveBorderCard>
                  ))}
                </div>
              </div>
            </section>

            {/* Team Preview Slider */}
            <section className="py-20 bg-[#060606] overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                  <div className="space-y-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-burgundy-light">
                      DREAMERS / DOERS /
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
                      Our Event Mavericks
                    </h2>
                  </div>
                  <button
                    onClick={() => handleTabChange('team')}
                    className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-widest text-[#7A1F2B] hover:text-burgundy-light flex items-center gap-1.5 hover:gap-3 transition-all duration-300"
                  >
                    View All Bios <ArrowRight size={16} />
                  </button>
                </div>

                {/* Micro slider container row with custom glass overlays */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {TEAM_MEMBERS.slice(0, 3).map((member, idx) => (
                    <motion.div
                      key={idx}
                      className="group relative rounded-2xl overflow-hidden border border-burgundy/15 bg-[#0C0C0E]/60 shadow-xl flex flex-col justify-between h-[360px] md:h-[400px] cursor-pointer"
                      onClick={() => handleTabChange('team')}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Image zoom on hover */}
                      <div className="absolute inset-0 z-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale brightness-90 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/35 to-transparent" />
                      </div>

                      <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                        <span className="text-[9.5px] tracking-widest text-burgundy-light bg-black/75 px-3 py-1 border border-burgundy/20 rounded-full inline-block uppercase font-bold mb-2 max-w-fit">
                          {member.role.split(',')[0]}
                        </span>
                        <h4 className="text-lg font-bold tracking-tight text-white group-hover:text-burgundy-light transition-colors duration-300">
                          {member.name}
                        </h4>
                        <p className="text-gray-300 text-xs italic mt-2 line-clamp-2">
                          "{member.quote}"
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Who We Work With (Marquee Client Wall) */}
            <section className="py-20 bg-transparent overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12 space-y-3 relative z-10">
                <span className="text-xs font-bold tracking-[0.4em] uppercase text-burgundy-light">
                  TRUSTED BY DISRUPTORS
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Who We Work With
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
                  We have been entrusted by some of the most recognized and successful companies, as well as up-and-coming businesses that are disrupting their industries.
                </p>
              </div>

              {/* Infinite Marquee Wall */}
              <div className="relative flex overflow-x-hidden w-full py-6 border-y border-burgundy/10 bg-[#0E0E12]/40 backdrop-blur-sm">
                <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
                  {CORPORATE_CLIENTS.concat(CORPORATE_CLIENTS).map((client, idx) => (
                    <span
                      key={idx}
                      className="text-gray-400 text-xl font-extrabold tracking-[0.25em] uppercase hover:text-burgundy-light transition-colors duration-300 px-4 cursor-pointer"
                    >
                      {client.name}
                    </span>
                  ))}
                </div>

                <div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none bg-gradient-to-r from-[#060606] via-transparent to-[#060606]" />
              </div>

              <div className="text-center mt-10 relative z-10">
                <button
                  onClick={() => handleTabChange('clients')}
                  className="px-6 py-3 border border-burgundy/25 text-gray-300 hover:bg-burgundy hover:text-white rounded-xl text-xs font-bold tracking-widest uppercase hover:border-transparent transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(122,31,43,0.3)] hover:scale-105"
                >
                  View More Collaborations
                </button>
              </div>
            </section>

            {/* Instagram Grid Section */}
            <section className="py-20 bg-transparent relative">
              <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-12 space-y-3">
                  <span className="text-xs font-bold tracking-[0.4em] uppercase text-burgundy-light">
                    SOCIALLY IMMERSIVE
                  </span>
                  <h2 className="text-3xl font-extrabold text-white">
                    Follow Us!
                  </h2>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-burgundy-light inline-flex items-center gap-1.5 transition-colors duration-300"
                  >
                    @23layers <Instagram size={14} className="text-burgundy-light" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {INSTAGRAM_IMAGES.map((img, idx) => (
                    <motion.div
                      key={idx}
                      className="relative rounded-2xl overflow-hidden border border-burgundy/15 aspect-square group shadow-lg bg-[#0C0C0E]/70"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <img
                        src={img}
                        alt={`Instagram feed capture ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="portfolio-img object-cover w-full h-full transition-all duration-1000 ease-out group-hover:scale-108 group-hover:brightness-75"
                        data-hover-text="INSTAGRAM"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-burgundy/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-5 py-2.5 bg-burgundy hover:bg-burgundy-light text-white rounded-full text-[10px] font-bold tracking-widest uppercase shadow-xl transition-all duration-300">
                          View Feed
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 md:py-28 bg-[#0D0D10] relative overflow-hidden border-y border-burgundy/10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-burgundy/5 rounded-full blur-[140px] pointer-events-none" />
              <div className="max-w-3xl mx-auto text-center px-6 relative z-10 space-y-6">
                <span className="text-xs font-bold tracking-[0.4em] uppercase text-burgundy-light">
                  WIDGET OF POSSIBILITIES
                </span>
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Drop Us a Note
                </h3>
                <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-sans">
                  Connect with our curation planners to schedule an immersive spatial consultation. Let's make something remarkable.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => handleTabChange('contact')}
                    className="px-10 py-4.5 bg-burgundy hover:bg-burgundy-light text-white rounded-xl text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:scale-105 shadow-xl shadow-burgundy/20"
                  >
                    CONTACT US TODAY
                  </button>
                </div>
              </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-[#060606] relative">
              <div className="max-w-xl mx-auto px-6 text-center space-y-6 relative z-10">
                <span className="text-xs font-bold tracking-widest uppercase text-burgundy-light font-bold">
                  CURATED DISPATCHES
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  23 Layers in Your Inbox
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
                  Sign up to receive our news, keynotes, and design summaries.
                </p>

                {newsletterSubscribed ? (
                  <motion.div
                    className="p-6 bg-[#0D0D10] rounded-2xl border border-burgundy/25 flex flex-col items-center gap-3 shadow-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <div className="p-2.5 bg-green-500/10 rounded-full text-green-400 border border-green-500/20">
                      <Check size={20} className="animate-bounce" />
                    </div>
                    <h5 className="font-bold text-white">Subscription Complete!</h5>
                    <p className="text-xs text-gray-400">You are now registered for 23 Layers Updates.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2 p-1.5 bg-[#09090b]/90 border border-burgundy/15 rounded-2xl shadow-xl focus-within:border-burgundy-light/40 transition-colors">
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full px-4 py-3 text-sm text-white bg-transparent outline-none focus:outline-none placeholder-gray-500"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#7A1F2B] hover:bg-burgundy-light text-white rounded-xl text-[10px] font-bold tracking-[0.2em] uppercase transition-all flex-shrink-0"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </section>

          </div>
        )}

        {/* ==================== GALLERY PAGE ==================== */}
        {activeTab === 'gallery' && (
          <div className="animate-fade-in py-16 md:py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
              
              {/* Header block */}
              <div className="max-w-4xl mb-16 space-y-4">
                <span className="text-xs font-bold tracking-widest uppercase text-burgundy-light">
                  BRAND PORTFOLIO
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Explore Our Work
                </h1>
                <p className="text-gray-400 text-base md:text-lg max-w-2xl font-sans">
                  With an unrelenting demand for perfection, 23 Layers is devoted to providing clients with exceptional creative design work. We go beyond the norm. We push the envelope.
                </p>
              </div>

              {/* Categorization filters with luxury glassmorphic indicators */}
              <div className="flex flex-wrap gap-3 pb-8 border-b border-burgundy/10 mb-12">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'corporate-experiential', label: 'Corporate + Experiential' },
                  { id: 'milestones-celebrations', label: 'Milestones + Celebrations' },
                  { id: 'photo-shoots-styling', label: 'Photo Shoots + Styling' },
                  { id: 'popup-retail', label: 'Pop Up + Retail' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-5 py-2.5 text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 border ${
                      selectedCategory === cat.id
                        ? 'bg-burgundy border-burgundy-light/20 text-white shadow-xl shadow-burgundy/15'
                        : 'bg-[#101014]/60 border-burgundy/10 text-gray-400 hover:text-white hover:border-burgundy/25'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Portfolio Grid list wrapped inside Animated LiveBorder Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.filter((proj) => selectedCategory === 'all' || proj.category === selectedCategory).map((project, idx) => (
                  <motion.div
                    key={project.id}
                    className="group bg-[#0D0D10] rounded-2xl overflow-hidden border border-burgundy/15 hover:border-burgundy/30 cursor-pointer flex flex-col justify-between hover:shadow-xl shadow-[0_4px_30px_rgba(122,31,43,0.05)] transition-all duration-500 hover:-translate-y-2 h-[450px]"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ delay: idx * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Image space with Zoom */}
                    <div className="relative h-2/3 overflow-hidden bg-black/40">
                      <img
                        src={project.mainImage}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="portfolio-img object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-106"
                        data-hover-text="VIEW PIECE"
                      />
                      <span className="absolute bottom-4 left-4 inline-block px-2.5 py-1.5 bg-[#060606]/85 backdrop-blur-md shadow-sm rounded-lg text-[9px] font-bold text-burgundy-light tracking-widest uppercase border border-burgundy/20">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Meta info space */}
                    <div className="h-1/3 p-6 flex flex-col justify-between bg-[#0C0C0E]/95">
                      <div className="space-y-1">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                          {project.clientName}
                        </span>
                        <h4 className="text-base font-bold text-white group-hover:text-burgundy-light transition-colors duration-300 tracking-tight leading-tight line-clamp-1">
                          {project.title}
                        </h4>
                      </div>

                      <div className="flex items-center justify-between border-t border-burgundy/10 pt-4 text-xs">
                        <span className="text-gray-400 font-medium">
                          {project.location}
                        </span>
                        <span className="text-burgundy-light font-bold hover:translate-x-1.5 transition-all duration-300 flex items-center gap-1">
                          READ INTEGRATION <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* ==================== PRESS PAGE ==================== */}
        {activeTab === 'press' && (
          <div className="animate-fade-in py-16 md:py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
              
              <div className="max-w-4xl mb-16 space-y-4">
                <span className="text-xs font-bold tracking-widest uppercase text-burgundy-light">
                  EDITORIAL INDEX
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Twenty Three Layers in Press
                </h1>
                <p className="text-gray-400 max-w-2xl text-base md:text-lg font-sans">
                  Examine our media mentions, awards highlights, and custom creative talks speaking on experiential spaces.
                </p>
              </div>

              {/* Magazine Styled Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Column: Leading News */}
                <div className="lg:col-span-7 space-y-12 border-r border-burgundy/10 pr-0 lg:pr-12">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-burgundy-light pb-3 border-b-2 border-burgundy inline-block">
                    FEATURED PRESS COVERAGE
                  </h3>

                  {PRESS_ENTRIES.filter(e => e.category === 'Featured' || e.category === 'Editorial Highlights').map(entry => (
                    <motion.article
                      key={entry.id}
                      className="group space-y-4"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <span className="block text-4xl font-black text-burgundy/20 font-mono tracking-tight leading-none mb-1">
                        {entry.year}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-burgundy-light">
                        {entry.publisher}
                      </span>
                      <h4 className="text-2xl font-bold tracking-tight text-white group-hover:text-burgundy-light transition-colors duration-300">
                        {entry.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {entry.description}
                      </p>
                      <button className="text-xs font-bold uppercase tracking-widest text-burgundy-light inline-flex items-center gap-1.5 hover:gap-3 transition-all pt-2">
                        Read Magazine Column <ArrowRight size={14} />
                      </button>
                    </motion.article>
                  ))}
                </div>

                {/* Right Column: Mini Highlights & Awards */}
                <div className="lg:col-span-5 space-y-12">
                  
                  {/* Category Section: Industry recognition */}
                  <div className="space-y-8">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#7A1F2B] pb-3 border-b border-burgundy/15">
                      INDUSTRY RECOGNITION + AWARDS
                    </h3>

                    {PRESS_ENTRIES.filter(e => e.category !== 'Featured' && e.category !== 'Editorial Highlights').map(entry => (
                      <motion.div
                        key={entry.id}
                        className="group flex flex-col justify-between hover:bg-[#0D0D10]/80 p-5 rounded-2xl border border-transparent hover:border-burgundy/10 transition-all duration-300"
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-burgundy-light uppercase">
                              {entry.category}
                            </span>
                            <span className="text-xs font-bold text-gray-500 font-mono">
                              {entry.year}
                            </span>
                          </div>
                          
                          <span className="text-xs font-bold text-gray-400 uppercase">
                            {entry.publisher}
                          </span>
                          
                          <h4 className="font-bold text-white text-base tracking-tight group-hover:text-burgundy-light transition-colors">
                            {entry.title}
                          </h4>
                          
                          <p className="text-xs text-gray-400 italic">
                            {entry.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Standard Agency Press Contact callout */}
                  <div className="bg-[#0C0C0E]/70 p-6 rounded-2xl border border-burgundy/15 text-center space-y-4">
                    <h5 className="font-bold text-white text-sm uppercase tracking-wider">
                      Media & PR Inquiries
                    </h5>
                    <p className="text-xs text-gray-400">
                      For media kits, speaking requests, or photo permissions, please connect directory with our PR team.
                    </p>
                    <a
                      href="mailto:press@twentythreelayers.com"
                      className="inline-block py-2.5 px-6 bg-burgundy hover:bg-burgundy-light text-white rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-burgundy/15"
                    >
                      press@twentythreelayers.com
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* ==================== TEAM PAGE ==================== */}
        {activeTab === 'team' && (
          <div className="animate-fade-in py-16 md:py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
              
              <div className="max-w-3xl mb-16 space-y-4">
                <span className="text-xs font-bold tracking-widest uppercase text-burgundy-light">
                  DREAMERS & DOERS
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Meet the 23 Layers Team
                </h1>
                <p className="text-gray-400 text-base md:text-lg max-w-2xl font-sans">
                  The innovative planners, architects, visual designers, and tactical producers executing boutique concepts for global disruptors.
                </p>
              </div>

              {/* Team Bios premium grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TEAM_MEMBERS.map((member, idx) => (
                  <motion.div
                    key={member.name}
                    className="group bg-[#0C0C0E]/80 rounded-2xl overflow-hidden border border-burgundy/15 hover:border-burgundy/30 shadow-xl hover:shadow-[0_4px_30px_rgba(122,31,43,0.1)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.6 }}
                  >
                    {/* Headshot with grayscale/color dynamic hover */}
                    <div className="relative aspect-square overflow-hidden bg-black/40 flex items-center justify-center">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        referrerPolicy="no-referrer"
                        className="object-cover w-full h-full grayscale brightness-90 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-104"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/80 via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Quote & position specs */}
                    <div className="p-6 space-y-4 bg-[#0D0D10]/95 flex-grow">
                      <div className="space-y-1.5">
                        <span className="block text-xs font-semibold text-burgundy-light uppercase">
                          {member.role}
                        </span>
                        <h4 className="text-xl font-bold text-white tracking-tight">
                          {member.name}
                        </h4>
                      </div>

                      {/* Accent quotes box styled with left-aligned burgundy bar */}
                      <div className="border-l-2 border-burgundy pl-4 py-1.5 bg-burgundy/5 rounded-r-md">
                        <p className="text-gray-300 text-sm italic leading-relaxed">
                          "{member.quote}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* ==================== CLIENTS PAGE ==================== */}
        {activeTab === 'clients' && (
          <div className="animate-fade-in py-16 md:py-24 bg-transparent space-y-24 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
              
              <div className="max-w-3xl mb-16 space-y-4">
                <span className="text-xs font-bold tracking-widest uppercase text-burgundy-light">
                  INTEGRATED NETWORKS
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Prestige Client Relationships
                </h1>
                <p className="text-gray-400 text-base md:text-lg max-w-2xl font-sans">
                  From up-and-coming start-up disruptors to mega tier global corporations, we serve as the physical creative hand translating digital vision into shareable milestones.
                </p>
              </div>

              {/* Animated grid client list */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {CORPORATE_CLIENTS.map((client, idx) => (
                  <motion.div
                    key={client.name}
                    className="p-8 bg-[#0C0C0E]/70 border border-burgundy/10 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-burgundy/30 hover:bg-[#121215]/90 hover:shadow-xl transition-all duration-500"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-450 group-hover:text-white transition-colors duration-300">
                      {client.logoText}
                    </span>
                    <span className="text-[10px] tracking-wider text-burgundy-light font-bold block mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      SECURE CLIENT
                    </span>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Success Stories sections */}
            <div className="bg-[#0C0C0E] py-20 border-y border-burgundy/10 relative">
              <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-xl mb-12 space-y-3">
                  <span className="text-xs font-bold tracking-widest uppercase text-burgundy-light font-bold">
                    CASE OUTCOMES
                  </span>
                  <h3 className="text-3xl font-extrabold text-white uppercase">
                    Featured Integrations
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {CLIENT_SUCCESS_STORIES.map((story, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-[#111114] rounded-2xl overflow-hidden border border-burgundy/15 hover:border-burgundy/30 shadow-xl flex flex-col md:flex-row hover:-translate-y-1.5 transition-all duration-500"
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="w-full md:w-2/5 relative h-48 md:h-auto overflow-hidden bg-black/40">
                        <img
                          src={story.imageUrl}
                          alt={story.company}
                          referrerPolicy="no-referrer"
                          className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between bg-[#0C0C0E]/70">
                        <div className="space-y-4">
                          <span className="text-xs font-bold text-burgundy-light uppercase">
                            {story.company} — Success Story
                          </span>
                          <h4 className="text-lg font-bold text-white tracking-tight leading-snug">
                            Impact: {story.impact}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed font-sans">
                            {story.description}
                          </p>
                        </div>

                        <button
                          onClick={() => handleTabChange('gallery')}
                          className="mt-6 text-xs font-bold text-burgundy-light uppercase tracking-widest flex items-center gap-1.5 justify-end hover:text-white transition-colors"
                        >
                          View Gallery Cases <ArrowRight size={14} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}
                {/* ==================== TESTIMONIALS PAGE ==================== */}
        {activeTab === 'testimonials' && (
          <div className="animate-fade-in py-16 md:py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 relative z-10">
              
              <div className="max-w-3xl mb-12 space-y-4">
                <span className="text-xs font-bold tracking-widest uppercase text-burgundy-light">
                  CLIENT LOVE & FEEDBACK
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Kind Words from our Partners
                </h1>
                <p className="text-gray-400 text-base md:text-lg max-w-2xl font-sans">
                  The true metric of our storytelling isn't awards, it is long-term trust from founders, planners, and corporate decision creators.
                </p>
              </div>

              {/* Luxury interactive carousel spotlight section */}
              <div className="bg-[#0C0C0E]/90 p-8 md:p-16 rounded-3xl border border-burgundy/15 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden shadow-xl">
                
                <div className="w-full md:w-2/3 space-y-6">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-burgundy bg-burgundy/10 border border-burgundy/25 px-2.5 py-1 rounded-full text-burgundy-light inline-block">
                    SPOTLIGHT REVIEW
                  </span>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      <p className="text-xl md:text-2xl font-medium tracking-tight text-white leading-relaxed italic">
                        "{TESTIMONIALS[activeTestimonial].quote}"
                      </p>
                      
                      <div>
                        <h4 className="font-bold text-white text-base">
                          {TESTIMONIALS[activeTestimonial].clientName}
                        </h4>
                        <p className="text-xs text-burgundy-light uppercase tracking-widest">
                          {TESTIMONIALS[activeTestimonial].designation}, {TESTIMONIALS[activeTestimonial].company}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Manual pagination indicators */}
                  <div className="flex gap-2.5 pt-6">
                    {TESTIMONIALS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTestimonial(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          activeTestimonial === idx ? 'bg-burgundy w-8 ring-1 ring-burgundy-light/25' : 'bg-[#1e1e24] w-2.5 hover:bg-burgundy/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-1/3 flex flex-col justify-center border-t md:border-t-0 md:border-l border-burgundy/15 pt-8 md:pt-0 pl-0 md:pl-12 space-y-4 text-center md:text-left">
                  <h4 className="font-bold text-gray-300 uppercase tracking-widest text-xs">
                    Client Satisfaction Index
                  </h4>
                  <div className="text-5xl font-black text-[#7A1F2B] font-serif animate-pulse">
                    100%
                  </div>
                  <p className="text-xs text-gray-400">
                    Bespoke luxury events executed on budget, on target, and with perfect shareworthy perfection.
                  </p>
                </div>

              </div>

              {/* Masonry grids testimonies */}
              <div className="space-y-6">
                <h3 className="text-xs font-bold tracking-widest uppercase text-burgundy-light pb-3 border-b border-burgundy/15">
                  ALL CONSOLIDATED COMMUNICATIONS
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {TESTIMONIALS.map((test) => (
                    <div
                      key={test.id}
                      className="p-6 bg-[#0D0D10]/90 border border-burgundy/15 rounded-2xl shadow-xl flex flex-col justify-between space-y-6 hover:border-burgundy/30 hover:scale-[1.01] hover:shadow-rich transition-all duration-300"
                    >
                      <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed italic">
                        "{test.quote}"
                      </p>
                      <div className="border-t border-burgundy/10 pt-4">
                        <h5 className="font-bold text-white text-sm">
                          {test.clientName}
                        </h5>
                        <p className="text-[11px] text-gray-400 uppercase tracking-widest">
                          {test.company}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ==================== CONTACT PAGE ==================== */}
        {activeTab === 'contact' && (
          <div className="animate-fade-in py-16 md:py-24 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
              
              <div className="max-w-3xl mb-16 space-y-4">
                <span className="text-xs font-bold tracking-widest uppercase text-burgundy-light">
                  CONNECT WITH US
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Let's Launch Your Story
                </h1>
                <p className="text-gray-400 text-base md:text-lg max-w-2xl font-sans">
                  Ready to construct immersive physical moments? Populate the brief below, or drop an envelope to our Manhattan studio office.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Side: Contact Brief Form */}
                <div className="lg:col-span-7 bg-[#0C0C0E]/75 p-6 md:p-10 rounded-3xl border border-burgundy/15 shadow-2xl relative">
                  
                  {contactSubmitted ? (
                    <motion.div
                      className="text-center py-12 px-4 space-y-6 flex flex-col items-center justify-center bg-[#070709] rounded-2xl border border-burgundy/30 shadow-2xl"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      <div className="p-4 bg-green-500/10 rounded-full text-green-400 inline-block border border-green-500/20">
                        <Check size={36} className="animate-bounce" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          Brief Successfully Lodged!
                        </h3>
                        <p className="text-gray-400 text-sm max-w-md mx-auto">
                          Thank you for trusting 23 Layers. An executive curation planner will analyze your specifications and reach out within 1 business day.
                        </p>
                      </div>

                      <button
                        onClick={() => setContactSubmitted(false)}
                        className="py-3 px-6 bg-[#7A1F2B] hover:bg-burgundy-light text-white rounded-xl text-xs font-bold tracking-[0.15em] uppercase transition-all shadow-xl shadow-burgundy/15"
                      >
                        File Another Brief
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase text-gray-350 tracking-wider">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Jessica Sterling"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            className="w-full p-3 bg-[#111115] border border-burgundy/15 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-burgundy/40 focus:border-burgundy-light/40 transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase text-gray-350 tracking-wider">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="jessica@digitaldisrupt.com"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="w-full p-3 bg-[#111115] border border-burgundy/15 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-burgundy/40 focus:border-burgundy-light/40 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase text-gray-350 tracking-wider">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (212) 555-0123"
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                            className="w-full p-3 bg-[#111115] border border-burgundy/15 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-burgundy/40 focus:border-burgundy-light/40 transition-all"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase text-gray-350 tracking-wider">
                            Company Name
                          </label>
                          <input
                            type="text"
                            placeholder="Brand Inc."
                            value={contactForm.company}
                            onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                            className="w-full p-3 bg-[#111115] border border-burgundy/15 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-burgundy/40 focus:border-burgundy-light/40 transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-350 tracking-wider">
                          Event Category / Concept
                        </label>
                        <select
                          value={contactForm.eventType}
                          onChange={(e) => setContactForm({ ...contactForm, eventType: e.target.value })}
                          className="w-full p-3 bg-[#111115] border border-burgundy/15 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-burgundy/40 focus:border-burgundy-light/40"
                        >
                          <option>Corporate + Experiential</option>
                          <option>Milestones + Celebrations</option>
                          <option>Pop Up + Retail</option>
                          <option>Photo Shoots + Styling</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-350 tracking-wider">
                          General Request details
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Fleshing out a corporate launch in SOHO for October..."
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          className="w-full p-3 bg-[#111115] border border-burgundy/15 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-burgundy/40 focus:border-burgundy-light/40 transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-burgundy hover:bg-burgundy-light text-white rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-[1.01] shadow-xl shadow-burgundy/15"
                      >
                        Send Brief
                      </button>
                    </form>
                  )}

                </div>

                {/* Right Side: Contact parameters & Mini styled stylized Map */}
                <div className="lg:col-span-5 space-y-10">
                  
                  {/* Address specifics */}
                  <div className="bg-[#0C0C0E]/75 p-6 border border-burgundy/15 rounded-2xl shadow-xl space-y-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#7A1F2B] pb-2 border-b border-burgundy/10">
                      Studio HQ Locality
                    </h4>

                    <div className="space-y-4 text-sm leading-relaxed text-gray-350">
                      <div className="flex gap-4 items-start col-span-1">
                        <span className="p-2 bg-burgundy/10 border border-burgundy/25 rounded-lg text-burgundy-light">
                          <MapPin size={16} />
                        </span>
                        <div>
                          <strong className="block text-white font-semibold">Studio Office</strong>
                          <span className="text-sm">420 West 14th St., Ste. 2NE<br />New York, NY 10014</span>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start col-span-1">
                        <span className="p-2 bg-burgundy/10 border border-burgundy/25 rounded-lg text-burgundy-light">
                          <Clock size={16} />
                        </span>
                        <div>
                          <strong className="block text-white font-semibold">Business Hours</strong>
                          <span className="text-sm">Monday to Friday: 9am – 6pm EST</span>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start col-span-1">
                        <span className="p-2 bg-burgundy/10 border border-burgundy/25 rounded-lg text-burgundy-light">
                          <Mail size={16} />
                        </span>
                        <div>
                          <strong className="block text-white font-semibold">Digital Mailbox</strong>
                          <a href="mailto:info@twentythreelayers.com" className="text-burgundy-light font-bold hover:underline">
                            info@twentythreelayers.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stylized custom vector map pointing SOHO/Meatpacking */}
                  <div className="relative h-64 bg-[#09090b] border border-burgundy/15 rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col justify-end">
                    
                    {/* Map illustration background pattern */}
                    <div className="absolute inset-0 bg-[#09090b]" style={{ opacity: 0.15 }}>
                      {/* Generous layout grid representing block intersections */}
                      <div className="w-full h-full border-t border-r border-burgundy/10 grid grid-cols-4 grid-rows-4">
                        <div className="border-b border-l border-burgundy/10" />
                        <div className="border-b border-l border-burgundy/10" />
                        <div className="border-b border-l border-burgundy/10" />
                        <div className="border-b border-l border-burgundy/10" />
                      </div>
                    </div>

                    {/* Highly aesthetic map overlays */}
                    <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 text-center z-10 flex flex-col items-center">
                      <motion.div
                        className="p-3 bg-burgundy text-white border border-burgundy-light/20 rounded-full relative shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.15 }}
                      >
                        <MapPin size={20} className="relative z-10 text-white" />
                        <div className="absolute inset-0 bg-[#7A1F2B]/65 rounded-full animate-ping z-0" />
                      </motion.div>
                      <span className="text-[10px] font-bold text-white uppercase bg-burgundy px-2.5 py-1 rounded-full border border-burgundy-light/20 shadow-md tracking-wider mt-2.5 whitespace-nowrap">
                        23 LAYERS HQ
                      </span>
                    </div>

                    <div className="absolute top-1/3 right-1/4 translate-x-1/2 translate-y-1/2 text-burgundy/25 text-[10px] font-bold tracking-widest uppercase">
                      HUDSON RIVER
                    </div>

                    <div className="relative z-10 bg-[#0C0C0E]/95 p-3 border border-burgundy/15 rounded-xl shadow-xl">
                      <span className="block text-[9px] font-bold tracking-widest uppercase text-burgundy-light">
                        Meatpacking District
                      </span>
                      <p className="text-[11px] text-gray-400 italic mt-0.5">
                        Adjacent to High Line path
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

      </main>

      {/* 7. FOOTER */}
      <footer className="relative bg-[#060606] text-white pt-20 pb-12 border-t border-burgundy/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Logo column details */}
          <div className="col-span-1 md:col-span-4 space-y-6">
            <Logo className="h-10 w-auto" />
            <p className="text-gray-400 text-sm leading-relaxed font-sans max-w-sm">
              An award-winning NYC boutique experiential planning and spatial design agency. We translate digital disruption into physical, stunning, shareworthy narratives.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 bg-white/5 hover:bg-burgundy hover:text-white rounded-xl transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="p-2.5 bg-white/5 hover:bg-burgundy hover:text-white rounded-xl transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="p-2.5 bg-white/5 hover:bg-burgundy hover:text-white rounded-xl transition-all duration-300">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick links navigation */}
          <div className="col-span-1 md:col-span-3 md:col-start-6 space-y-6">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#7A1F2B]">
              Quick Nav
            </h4>
            <ul className="space-y-3">
              {(['home', 'gallery', 'press', 'team', 'clients', 'testimonials', 'contact'] as const).map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => handleTabChange(tab)}
                    className="text-gray-400 hover:text-white text-sm tracking-wide capitalize hover:translate-x-1.5 transition-transform text-left"
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location particulars */}
          <div className="col-span-1 md:col-span-4 space-y-6">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#7A1F2B]">
              New York Studio
            </h4>
            <div className="space-y-1.5 text-sm text-gray-400 font-sans leading-relaxed">
              <p className="font-semibold text-white">420 West 14th St., Ste. 2NE</p>
              <p>New York, NY 10014</p>
              <p className="pt-2 text-burgundy-light font-bold">info@twentythreelayers.com</p>
              <p className="text-xs opacity-60">© 2026 Twenty Three Layers Inc. All Rights Reserved.</p>
            </div>
          </div>

        </div>

        {/* Global sub footer metadata credits */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-[#111114] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Terms</a>
            <a href="#" className="hover:text-white">Terms of Curation</a>
            <a href="#" className="hover:text-white">PR Kit</a>
          </div>
          <div>
            <span>Executed with absolute spatial precision.</span>
          </div>
        </div>
      </footer>

      {/* Case-study/portfolio detail sheet overlay */}
      <ModalProjectDetails
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
