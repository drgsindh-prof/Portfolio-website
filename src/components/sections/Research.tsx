"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Leaf,
  Globe,
  TrendingUp,
  BookOpen,
  Award,
  ExternalLink,
  ArrowRight,
  Newspaper,
  Users,
  FileText,
} from "lucide-react";
import {
  researchMetrics,
  researchClusters,
} from "@/data/content";
import { getPublicationStats } from "@/data/publications";
import { AnimatedCounter } from "@/components/ui";

const iconMap = {
  cpu: Cpu,
  leaf: Leaf,
  globe: Globe,
};

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

export default function Research() {
  const metricsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(metricsRef, { once: true, margin: "-100px" });
  const pubStats = getPublicationStats();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section id="research" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Flowing Background Elements */}
      <motion.div
        style={{ y: yBg1 }}
        className="absolute top-40 -left-48 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: yBg2 }}
        className="absolute bottom-40 -right-48 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl pointer-events-none"
      />
      
      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeUpVariants}
            className="text-primary text-sm font-medium uppercase tracking-wider inline-block"
          >
            Research & Publications
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
          >
            <span className="text-primary heading-serif">Intellectual Capital</span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-foreground-secondary max-w-3xl mx-auto text-lg"
          >
            Ranked among the Top 2% of Scientists Worldwide (Stanford Rankings
            2023-2025), with a focus on AI, Green Finance, and Industry 4.0.
          </motion.p>
        </motion.div>

        {/* Metrics Grid with Animated Counters */}
        <motion.div
          ref={metricsRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <motion.div 
            className="glass rounded-lg p-6 text-center card-interactive group"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {isInView ? (
                <AnimatedCounter end={researchMetrics.citations.total} duration={2000} />
              ) : "0"}
            </div>
            <p className="text-sm text-foreground-secondary">Total Citations</p>
            <p className="text-xs text-gold mt-2">
              {researchMetrics.citations.growth}
            </p>
          </motion.div>

          <motion.div 
            className="glass rounded-lg p-6 text-center card-interactive group"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <Award className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
              {isInView ? (
                <AnimatedCounter end={researchMetrics.hIndex} duration={1500} />
              ) : "0"}
            </div>
            <p className="text-sm text-foreground-secondary">H-Index</p>
            <p className="text-xs text-foreground-muted mt-2">
              Top 2% Scientists
            </p>
          </motion.div>

          <motion.div 
            className="glass rounded-lg p-6 text-center card-interactive group"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: smoothEase }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <BookOpen className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {isInView ? (
                <><AnimatedCounter end={pubStats.total} duration={1500} />+</>
              ) : "0"}
            </div>
            <p className="text-sm text-foreground-secondary">Publications</p>
            <p className="text-xs text-foreground-muted mt-2">
              Research Papers
            </p>
          </motion.div>

          <motion.div 
            className="glass rounded-lg p-6 text-center card-interactive group"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: smoothEase }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <Globe className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
              {isInView ? (
                <AnimatedCounter end={researchMetrics.books} duration={1200} />
              ) : "0"}
            </div>
            <p className="text-sm text-foreground-secondary">
              Books & Monographs
            </p>
            <p className="text-xs text-foreground-muted mt-2">
              Authored & Edited
            </p>
          </motion.div>
        </motion.div>

        {/* Publications Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="glass rounded-2xl p-8 md:p-10 mb-16 border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 heading-serif">
                Research Publications
              </h3>
              <p className="text-foreground-secondary mb-6">
                Over a decade of research spanning Artificial Intelligence, Machine Learning, 
                Business Analytics, Industry 4.0, and Sustainable Development across leading 
                journals, IEEE conferences, and academic publishers.
              </p>
              <Link
                href="/publications"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                <span>View All Publications</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 border border-emerald-500/20">
                <Newspaper className="w-5 h-5 text-emerald-400 mb-2" />
                <p className="text-2xl font-bold text-foreground">{pubStats.journals}</p>
                <p className="text-xs text-foreground-muted">Journal Articles</p>
              </div>
              <div className="glass rounded-xl p-4 border border-blue-500/20">
                <Users className="w-5 h-5 text-blue-400 mb-2" />
                <p className="text-2xl font-bold text-foreground">{pubStats.conferences}</p>
                <p className="text-xs text-foreground-muted">Conference Papers</p>
              </div>
              <div className="glass rounded-xl p-4 border border-purple-500/20">
                <BookOpen className="w-5 h-5 text-purple-400 mb-2" />
                <p className="text-2xl font-bold text-foreground">{pubStats.books}</p>
                <p className="text-xs text-foreground-muted">Books</p>
              </div>
              <div className="glass rounded-xl p-4 border border-amber-500/20">
                <FileText className="w-5 h-5 text-amber-400 mb-2" />
                <p className="text-2xl font-bold text-foreground">{pubStats.chapters}</p>
                <p className="text-xs text-foreground-muted">Book Chapters</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research Clusters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h3 
            variants={fadeUpVariants}
            className="text-2xl md:text-3xl text-center mb-10 heading-serif"
          >
            Research Focus Areas
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {researchClusters.map((cluster, index) => {
              const Icon = iconMap[cluster.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={cluster.title}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: smoothEase }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="glass rounded-lg p-8 card-interactive group"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3 heading-serif group-hover:text-primary transition-colors duration-300">
                    {cluster.title}
                  </h4>
                  <p className="text-foreground-secondary text-sm mb-6">
                    {cluster.description}
                  </p>
                  <div className="space-y-3">
                    {cluster.papers.map((paper, pIndex) => (
                      <motion.div
                        key={pIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 + pIndex * 0.1 }}
                        className="p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 hover:bg-background/70 transition-all duration-300"
                      >
                        <p className="text-sm text-foreground font-medium mb-1">
                          {paper.title}
                        </p>
                        <p className="text-xs text-foreground-muted">
                          {paper.journal}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Google Scholar CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="text-center"
        >
          <a
            href="https://scholar.google.com/citations?user=aJZXltMAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 group"
          >
            <span>View Google Scholar Profile</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
