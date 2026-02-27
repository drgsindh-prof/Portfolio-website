"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Flag, Globe, Briefcase, Quote } from "lucide-react";
import { philosophyPillars, quotes } from "@/data/content";

const iconMap = {
  flag: Flag,
  globe: Globe,
  briefcase: Briefcase,
};

// Smooth easing for professional feel - typed as tuple for Framer Motion
const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// Animation variants for flowing effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

const fadeSlideVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  // Subtle parallax for decorative elements
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-background-secondary relative overflow-hidden">
      {/* Flowing Background Elements */}
      <motion.div
        style={{ y: yBg1 }}
        className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: yBg2 }}
        className="absolute bottom-20 -left-32 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none"
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
            About
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
          >
            The <span className="text-primary heading-serif">Visionary Builder</span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-foreground-secondary max-w-3xl mx-auto text-lg"
          >
            An architect of global education ecosystems, bridging the gap
            between rigorous academia and agile corporate strategy.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left - Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="prose prose-lg prose-invert">
              <motion.p 
                variants={fadeSlideVariants}
                className="text-foreground-secondary leading-relaxed mb-6"
              >
                Prof. (Dr.) Gurinder Singh is not merely an administrator; he is
                an architect of global education ecosystems. With a career
                spanning over{" "}
                <span className="text-foreground font-medium">28 years</span>,
                he has stood at the helm of one of the most aggressive
                expansions in the history of Indian higher education.
              </motion.p>
              <motion.p 
                variants={fadeSlideVariants}
                className="text-foreground-secondary leading-relaxed mb-6"
              >
                An alumnus of the prestigious{" "}
                <span className="text-foreground font-medium">
                  Indian Institute of Foreign Trade (IIFT)
                </span>
                , where he secured the top rank with seven merits, Dr.
                Singh&apos;s foundational expertise lies in International
                Business. This academic grounding translated seamlessly into his
                administrative vision.
              </motion.p>
              <motion.p 
                variants={fadeSlideVariants}
                className="text-foreground-secondary leading-relaxed mb-6"
              >
                He holds the unique distinction of being the{" "}
                <span className="text-accent font-medium">
                  youngest Founder Pro Vice Chancellor
                </span>{" "}
                of Amity University, serving two consecutive terms. During this
                tenure, he did not just manage the status quo; he disrupted it.
              </motion.p>
              <motion.p 
                variants={fadeSlideVariants}
                className="text-foreground-secondary leading-relaxed"
              >
                Dr. Singh is widely credited as the operational force behind the
                &ldquo;Global Footprint&rdquo; initiative. His vision was to
                create a{" "}
                <span className="text-foreground font-medium">
                  borderless university
                </span>{" "}
                where a student could begin their degree in Noida, continue in
                London, and conclude in New York.
              </motion.p>
            </div>

            {/* Key Achievements */}
            <div className="mt-8 grid gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-5 glass rounded-lg hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 heading-serif">
                      IIFT Topper
                    </h4>
                    <p className="text-sm text-foreground-secondary">
                      Topped the batch with 7 academic merits at India&apos;s
                      premier trade institute, establishing early academic
                      dominance.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-5 glass rounded-lg hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 heading-serif">
                      Creator of 3-C Program
                    </h4>
                    <p className="text-sm text-foreground-secondary">
                      Pioneered the innovative 3-C (Competence, Character, Confidence) 
                      holistic development program for nurturing well-rounded leaders.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-5 glass rounded-lg hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 heading-serif">
                      Creator of SAP Program
                    </h4>
                    <p className="text-sm text-foreground-secondary">
                      Developed the Student Achievement Program (SAP) framework for 
                      systematic tracking and enhancement of student performance outcomes.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Image & Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Image */}
            <motion.div 
              className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/prof-portrait.jpg"
                alt="Prof. Gurinder Singh speaking"
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>

            {/* Featured Quote */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass rounded-lg p-6 hover:bg-white/5 transition-colors duration-300"
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <blockquote className="text-lg font-medium text-foreground italic mb-4 heading-serif">
                &ldquo;{quotes[0].text}&rdquo;
              </blockquote>
              <cite className="text-sm text-foreground-secondary not-italic">
                — {quotes[0].context}
              </cite>
            </motion.div>
          </motion.div>
        </div>

        {/* Philosophy Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            variants={fadeUpVariants}
            className="text-2xl md:text-3xl text-center mb-12 heading-serif"
          >
            Philosophy of Education
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophyPillars.map((pillar, index) => {
              const Icon = iconMap[pillar.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="glass rounded-lg p-8 card-interactive group"
                >
                  <motion.div 
                    className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300"
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-foreground mb-4 heading-serif group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h4>
                  <p className="text-foreground-secondary">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
