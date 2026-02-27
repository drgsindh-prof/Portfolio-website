"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles, Award } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { siteConfig, roles, stats } from "@/data/content";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Background parallax
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Content parallax - different speeds for layered effect
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  const nameY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
  const taglineY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  
  const descY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const descOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const rolesY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const rolesOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  
  // Stats bar parallax
  const statsY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const statsOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  
  // Scroll indicator
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Full Background Image with Parallax */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Desktop/Tablet: Full landscape image */}
        <div className="hidden md:block absolute inset-0">
          <img
            src="/prof-hero.png"
            alt="Prof. (Dr.) Gurinder Singh"
            className="w-full h-full object-cover object-right"
          />
        </div>
        
        {/* Mobile: Cropped to professor */}
        <div className="md:hidden absolute inset-0">
          <img
            src="/prof-hero.png"
            alt="Prof. (Dr.) Gurinder Singh"
            className="w-full h-full object-cover object-[75%_center]"
          />
        </div>
      </motion.div>

      {/* Dark Gradient Overlay - Left to Right fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 via-40% to-background/30 md:to-transparent" />
      
      {/* Additional vertical gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      
      {/* Mobile: Extra overlay for readability */}
      <div className="md:hidden absolute inset-0 bg-background/60" />

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.4)_100%)]" />

      {/* Subtle Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-custom mx-auto px-6 py-32 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            style={{ y: badgeY, opacity: badgeOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 badge-gold mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Stanford Top 2% Scientists Worldwide</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            style={{ y: nameY, opacity: nameOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            <span className="text-foreground font-semibold">Prof. (Dr.)</span>
            <br />
            <span className="text-primary heading-serif">Gurinder Singh</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            style={{ y: titleY, opacity: titleOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground-secondary mb-6"
          >
            {siteConfig.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            style={{ y: taglineY, opacity: taglineOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gold mb-4 heading-serif italic"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            style={{ y: descY, opacity: descOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-foreground-secondary leading-relaxed mb-8 max-w-xl"
          >
            {siteConfig.description}
          </motion.p>

          {/* Roles */}
          <motion.div
            style={{ y: rolesY, opacity: rolesOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {roles.slice(0, 2).map((role, index) => (
              <span
                key={index}
                className="badge text-foreground-secondary"
              >
                {role.split(",")[0]}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            style={{ y: ctaY, opacity: ctaOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection("institution-builder")}
              className="btn-primary flex items-center gap-2"
            >
              <span>Explore My Journey</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection("research")}
              className="btn-secondary flex items-center gap-2"
            >
              <Award className="w-4 h-4" />
              <span>View Research Impact</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          style={{ y: statsY, opacity: statsOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="text-center p-5 rounded-lg glass card-interactive"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-foreground-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-foreground-muted"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
