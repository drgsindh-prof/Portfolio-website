"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { timeline } from "@/data/content";

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

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);
  const yBg1 = useTransform(sectionProgress, [0, 1], [0, -80]);
  const yBg2 = useTransform(sectionProgress, [0, 1], [0, 60]);

  return (
    <section id="timeline" ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Flowing Background Elements */}
      <motion.div
        style={{ y: yBg1 }}
        className="absolute top-32 -left-48 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: yBg2 }}
        className="absolute bottom-32 -right-48 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl pointer-events-none"
      />
      
      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeUpVariants}
            className="text-primary text-sm font-medium uppercase tracking-wider inline-block"
          >
            Career Journey
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
          >
            The <span className="text-gold heading-serif">Chronological Tapestry</span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-foreground-secondary max-w-3xl mx-auto text-lg"
          >
            A journey defined by academic excellence, institutional building, 
            global expansion, and technological leadership.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Background Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/10" />
          
          {/* Animated Progress Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-primary via-gold to-primary origin-top"
            style={{ height: lineHeight }}
          />

          {/* Era Sections */}
          <div className="space-y-24">
            {timeline.map((era, eraIndex) => (
              <div key={era.era} className="relative">
                {/* Era Header */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, ease: smoothEase }}
                  className={`flex items-center gap-4 mb-8 ${
                    eraIndex % 2 === 0 
                      ? "md:flex-row" 
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Era Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                      <span className="text-xs font-bold text-background">{eraIndex + 1}</span>
                    </div>
                  </div>

                  {/* Era Title Card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    eraIndex % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}>
                    <div className="glass rounded-xl px-6 py-4 inline-block">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground heading-serif">
                        {era.era}
                      </h3>
                      <p className="text-gold text-sm font-medium">{era.period}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Events */}
                <div className="space-y-6 ml-16 md:ml-0">
                  {era.events.map((event, eventIndex) => (
                    <motion.div
                      key={event.title}
                      initial={{ opacity: 0, x: eraIndex % 2 === 0 ? -40 : 40, scale: 0.95 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: eventIndex * 0.12, ease: smoothEase }}
                      whileHover={{ x: eraIndex % 2 === 0 ? 5 : -5, transition: { duration: 0.3 } }}
                      className={`md:w-[calc(50%-2rem)] ${
                        eraIndex % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                      }`}
                    >
                      {/* Small Event Dot */}
                      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 mt-3">
                        <div className="w-3 h-3 rounded-full bg-foreground-muted" />
                      </div>

                      {/* Event Card */}
                      <div className={`glass rounded-lg p-5 transition-all duration-300 hover:bg-white/5 ${
                        event.title.includes("PIVOTAL") 
                          ? "border-l-4 border-l-gold bg-gold/5" 
                          : "border-l-2 border-l-primary/50 hover:border-l-primary"
                      }`}>
                        <h4 className={`font-semibold mb-2 ${
                          event.title.includes("PIVOTAL") 
                            ? "text-gold text-lg" 
                            : "text-foreground"
                        }`}>
                          {event.title}
                        </h4>
                        <p className="text-foreground-secondary text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* End Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 bottom-0 translate-y-8"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center">
              <span className="text-background font-bold text-lg">∞</span>
            </div>
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "28+", label: "Years of Excellence" },
            { value: "5", label: "Transformative Eras" },
            { value: "27", label: "Global Campuses" },
            { value: "∞", label: "Continuing Legacy" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: smoothEase }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass rounded-xl p-6 text-center group"
            >
              <p className={`text-3xl md:text-4xl font-bold group-hover:scale-110 transition-transform duration-300 ${
                index % 2 === 0 ? "text-primary" : "text-gold"
              }`}>
                {stat.value}
              </p>
              <p className="text-sm text-foreground-muted mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
