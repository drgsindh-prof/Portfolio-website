"use client";

import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { systemsBuilt, institutionBuilderPillars } from "@/data/content";
import type { ReactNode } from "react";

// Smooth easing for professional feel - typed as tuple for Framer Motion
const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

// Icons for the pillars
const pillarIcons: Record<string, ReactNode> = {
  "Institution Builder": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  "TNE Pioneer": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "Global Convener": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  "Academic Innovator": (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

// Images for expanded cards
const systemImages: Record<string, string[]> = {
  "The 3-Continent Program": [
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600",
    "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=600",
    "https://images.unsplash.com/photo-1562774053-701939374585?w=600",
  ],
  "New Colombo Plan Partnership": [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
    "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600",
  ],
  "Vice Chancellors' Council": [
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
  ],
  "INBUSH ERA World Summit": [
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600",
  ],
};

const colorSchemes = [
  { bg: "bg-primary/20", text: "text-primary", border: "border-primary", accent: "from-primary/20", shadow: "shadow-primary/20", ring: "ring-primary" },
  { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-400", accent: "from-emerald-500/20", shadow: "shadow-emerald-500/20", ring: "ring-emerald-400" },
  { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-400", accent: "from-purple-500/20", shadow: "shadow-purple-500/20", ring: "ring-purple-400" },
  { bg: "bg-gold/20", text: "text-gold", border: "border-gold", accent: "from-gold/20", shadow: "shadow-gold/20", ring: "ring-gold" },
];

const AUTO_ROTATE_INTERVAL = 6000; // 6 seconds

export default function InstitutionBuilder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Auto-carousel with progress
  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return prev; // Don't reset here, let the other effect handle the transition
        }
        return prev + (100 / (AUTO_ROTATE_INTERVAL / 100));
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isPaused]);

  // Handle transition to next card when progress completes
  useEffect(() => {
    if (progress >= 100 && !isPaused) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % systemsBuilt.length);
      setProgress(0);
    }
  }, [progress, isPaused]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    setProgress(0);
    // Resume auto-rotation after 15 seconds of inactivity
    setTimeout(() => setIsPaused(false), 15000);
  };

  const activeSystem = systemsBuilt[activeIndex];
  const activeColors = colorSchemes[activeIndex % colorSchemes.length];
  const activeImages = systemImages[activeSystem?.title] || [];

  return (
    <section
      id="institution-builder"
      ref={containerRef}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Effects with Parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y: yBg1 }}
          className="absolute top-1/4 -right-64 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" 
        />
        <motion.div 
          style={{ y: yBg2 }}
          className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" 
        />
      </div>

      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.span 
            variants={fadeUpVariants}
            className="text-primary text-sm font-medium uppercase tracking-wider inline-block"
          >
            System Architect
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
          >
            The <span className="text-gold heading-serif">Institution Builder</span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-foreground-secondary max-w-3xl mx-auto text-lg"
          >
            Not just an academic achiever — a builder of educational ecosystems 
            that have transformed how institutions operate across continents.
          </motion.p>
        </motion.div>

        {/* Systems He Built */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent" />
              <h3 className="text-lg font-medium text-foreground-muted">Systems He Built</h3>
            </div>
            
            {/* Auto-rotate indicator */}
            <div className="flex items-center gap-2 text-xs text-foreground-muted">
              <span className={`w-2 h-2 rounded-full transition-colors ${isPaused ? 'bg-foreground-muted' : 'bg-primary animate-pulse'}`} />
              <span>{isPaused ? 'Paused • Click to resume' : 'Auto-rotating'}</span>
            </div>
          </motion.div>

          {/* Cards Grid - Always Visible */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {systemsBuilt.map((system, index) => {
              const colors = colorSchemes[index % colorSchemes.length];
              const isActive = index === activeIndex;
              
              return (
                <motion.div
                  key={system.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleCardClick(index)}
                  className="cursor-pointer"
                >
                  <div className={`glass rounded-2xl p-6 h-full relative overflow-hidden transition-all duration-500 ${
                    isActive 
                      ? `ring-2 ${colors.ring} shadow-lg shadow-${colors.shadow} scale-[1.02]` 
                      : 'hover:bg-white/5 hover:scale-[1.01]'
                  }`}>
                    {/* Progress bar for active card */}
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 overflow-hidden rounded-t-2xl">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${colors.accent.replace('from-', 'from-')} to-transparent`}
                          style={{ width: `${progress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                    )}

                    {/* Background Gradient for active */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.accent} via-transparent to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} mb-4 transition-transform duration-500 ${isActive ? 'scale-110' : ''}`}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                        </svg>
                      </div>

                      {/* Year Badge */}
                      <span className="text-xs text-foreground-muted">{system.year}</span>

                      {/* Title */}
                      <h4 className={`text-lg font-bold mt-1 mb-3 transition-colors line-clamp-2 ${isActive ? colors.text : 'text-foreground'}`}>
                        {system.title}
                      </h4>

                      {/* Description */}
                      <p className="text-foreground-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                        {system.description.slice(0, 80)}...
                      </p>

                      {/* Stats Preview */}
                      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                        <div>
                          <p className={`text-xl font-bold ${colors.text}`}>{system.stats[0]?.value}</p>
                          <p className="text-[10px] text-foreground-muted">{system.stats[0]?.label}</p>
                        </div>
                      </div>

                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute top-4 right-4">
                          <div className={`w-3 h-3 rounded-full ${colors.text === 'text-primary' ? 'bg-primary' : colors.text === 'text-emerald-400' ? 'bg-emerald-400' : colors.text === 'text-purple-400' ? 'bg-purple-400' : 'bg-gold'} animate-pulse`} />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Expanded Detail Section - Below Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activeColors.accent} via-transparent to-transparent opacity-30`} />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                  <div className={`w-16 h-16 rounded-2xl ${activeColors.bg} flex items-center justify-center ${activeColors.text} flex-shrink-0`}>
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-medium uppercase tracking-wider ${activeColors.text} bg-white/5 px-3 py-1 rounded-full`}>
                        Est. {activeSystem?.year}
                      </span>
                      <span className="text-xs text-foreground-muted">
                        {activeIndex + 1} of {systemsBuilt.length}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground heading-serif">
                      {activeSystem?.title}
                    </h3>
                    <p className="text-gold text-lg mt-1">{activeSystem?.headline}</p>
                  </div>
                  
                  {/* Navigation Dots */}
                  <div className="flex gap-2 md:flex-col">
                    {systemsBuilt.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleCardClick(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          idx === activeIndex 
                            ? `scale-125 ${activeColors.text === 'text-primary' ? 'bg-primary' : activeColors.text === 'text-emerald-400' ? 'bg-emerald-400' : activeColors.text === 'text-purple-400' ? 'bg-purple-400' : 'bg-gold'}` 
                            : 'bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left - Description & Stats */}
                  <div>
                    <p className="text-foreground-secondary text-lg leading-relaxed mb-8">
                      {activeSystem?.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {activeSystem?.stats.map((stat, i) => (
                        <div key={i} className="glass rounded-xl p-4 text-center">
                          <p className={`text-2xl md:text-3xl font-bold ${activeColors.text}`}>{stat.value}</p>
                          <p className="text-xs text-foreground-muted mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-4">Key Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeSystem?.highlights.map((highlight, i) => (
                          <span key={i} className={`text-sm ${activeColors.bg} ${activeColors.text} px-4 py-2 rounded-full`}>
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right - Images */}
                  <div className="space-y-4">
                    {activeImages.length > 0 && (
                      <>
                        <motion.div 
                          className="aspect-video rounded-2xl overflow-hidden"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <img 
                            src={activeImages[0]} 
                            alt={activeSystem?.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        {activeImages.length > 1 && (
                          <div className="grid grid-cols-2 gap-4">
                            {activeImages.slice(1).map((img, i) => (
                              <motion.div 
                                key={i} 
                                className="aspect-video rounded-xl overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                              >
                                <img 
                                  src={img} 
                                  alt={`${activeSystem?.title} ${i + 2}`}
                                  className="w-full h-full object-cover"
                                />
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => handleCardClick((activeIndex - 1 + systemsBuilt.length) % systemsBuilt.length)}
                    className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors group"
                  >
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm hidden md:inline">
                      {systemsBuilt[(activeIndex - 1 + systemsBuilt.length) % systemsBuilt.length]?.title}
                    </span>
                    <span className="text-sm md:hidden">Previous</span>
                  </button>
                  
                  <button
                    onClick={() => handleCardClick((activeIndex + 1) % systemsBuilt.length)}
                    className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors group"
                  >
                    <span className="text-sm hidden md:inline">
                      {systemsBuilt[(activeIndex + 1) % systemsBuilt.length]?.title}
                    </span>
                    <span className="text-sm md:hidden">Next</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <blockquote className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto relative">
            <div className="absolute top-6 left-8 text-6xl text-primary/20 font-serif">"</div>
            <p className="text-xl md:text-2xl text-foreground-secondary italic leading-relaxed relative z-10">
              Building institutions is not about creating structures; it's about creating 
              <span className="text-gold font-semibold not-italic"> systems that outlive you</span>.
            </p>
            <footer className="mt-6">
              <cite className="text-foreground not-italic font-medium">
                — Prof. (Dr.) Gurinder Singh
              </cite>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
