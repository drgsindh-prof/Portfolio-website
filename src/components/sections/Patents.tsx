"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb,
  Brain,
  Cog,
  Layers,
  ArrowRight,
  Shield,
  Sparkles,
} from "lucide-react";
import { getPatentStats } from "@/data/patents";

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

const categories = [
  {
    title: "Assessment Tools",
    count: 26,
    icon: Brain,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    description: "Psychometric tests for measuring human potential",
    examples: ["STRESS-O-GAUGE", "EQ Test", "HQ Test"],
  },
  {
    title: "Technical Systems",
    count: 7,
    icon: Cog,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "Innovative technical solutions and inventions",
    examples: ["Helmet Controlled Ignition", "Digital Identity System"],
  },
  {
    title: "Theorems & Theories",
    count: 14,
    icon: Lightbulb,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    description: "Original theoretical contributions",
    examples: ["Nucleus Theorem", "J-THEORY", "V KAN THEORY"],
  },
  {
    title: "Management Models",
    count: 9,
    icon: Layers,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    description: "Strategic frameworks for organizations",
    examples: ["6F Model", "IMPRESA Model", "3 A's of Future Jobs"],
  },
];

export default function Patents() {
  const sectionRef = useRef<HTMLElement>(null);
  const stats = getPatentStats();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      id="patents"
      ref={sectionRef}
      className="section-padding bg-background-secondary relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y: yBg1 }}
        className="absolute top-32 -right-48 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: yBg2 }}
        className="absolute bottom-32 -left-48 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
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
            className="text-gold text-sm font-medium uppercase tracking-wider inline-block"
          >
            Intellectual Property
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
          >
            <span className="text-gold heading-serif">Patents & Copyrights</span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-foreground-secondary max-w-3xl mx-auto text-lg"
          >
            A portfolio of {stats.total} registered intellectual properties spanning
            psychometric assessment, technical innovation, and management science.
          </motion.p>
        </motion.div>

        {/* Main Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="glass rounded-2xl p-8 md:p-10 mb-12 border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10 text-gold" />
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-gold">
                    {stats.total}
                  </p>
                  <p className="text-foreground-muted text-sm">
                    Registered Copyrights
                  </p>
                </div>
              </div>
              <p className="text-foreground-secondary">
                Each intellectual property represents original research and practical
                innovation, contributing to education, organizational development,
                and technological advancement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.title}
                    className={`glass rounded-xl p-4 border ${cat.borderColor}`}
                  >
                    <Icon className={`w-5 h-5 ${cat.color} mb-2`} />
                    <p className="text-2xl font-bold text-foreground">{cat.count}</p>
                    <p className="text-xs text-foreground-muted">{cat.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={fadeUpVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`glass rounded-xl p-6 border ${cat.borderColor} group`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${cat.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 ${cat.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 heading-serif">
                  {cat.title}
                </h3>
                <p className="text-sm text-foreground-secondary mb-4">
                  {cat.description}
                </p>
                <div className="space-y-2">
                  {cat.examples.map((example, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-foreground-muted"
                    >
                      <Sparkles className={`w-3 h-3 ${cat.color}`} />
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="text-center"
        >
          <Link
            href="/patents"
            className="btn-secondary inline-flex items-center gap-2 group"
          >
            <span>Explore All Patents & Copyrights</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
