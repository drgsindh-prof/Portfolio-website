"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Users, Award, Briefcase, BookOpen, TrendingUp } from "lucide-react";

// Smooth easing for professional feel - typed as tuple for Framer Motion
const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

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
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const innovations = [
  {
    icon: BookOpen,
    title: "Syllabus Innovation in TNE",
    subtitle: "Transnational Education Framework",
    description: "Pioneered the integration of global curriculum standards with Indian educational context, creating hybrid syllabi that prepare students for both domestic and international careers.",
    highlights: [
      "Cross-border curriculum alignment",
      "Industry-aligned learning outcomes",
      "Cultural intelligence integration",
      "Multi-jurisdiction accreditation"
    ],
    stats: { value: "12+", label: "Universities" },
    color: {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      ring: "ring-blue-500/50",
      accent: "from-blue-500/20"
    }
  },
  {
    icon: Briefcase,
    title: "International Internship Integration",
    subtitle: "Global Work Experience Programs",
    description: "Developed comprehensive frameworks for embedding international internships into academic curricula, bridging the gap between classroom learning and global work experience.",
    highlights: [
      "Partnerships across 5 continents",
      "Credit-bearing internship programs",
      "Pre-departure training modules",
      "Industry placement networks"
    ],
    stats: { value: "1000+", label: "Students Placed" },
    color: {
      bg: "bg-emerald-500/20",
      text: "text-emerald-400",
      ring: "ring-emerald-500/50",
      accent: "from-emerald-500/20"
    }
  },
  {
    icon: Users,
    title: "Global Conference Convener",
    subtitle: "10+ International Conferences",
    description: "Hosted and organized over 10 major international conferences across continents, bringing together thought leaders, academics, and industry experts to advance management education.",
    highlights: [
      "Cross-continental symposiums",
      "Industry-academia dialogues",
      "Research collaboration forums",
      "Policy impact discussions"
    ],
    stats: { value: "10+", label: "Conferences" },
    color: {
      bg: "bg-purple-500/20",
      text: "text-purple-400",
      ring: "ring-purple-500/50",
      accent: "from-purple-500/20"
    }
  }
];

export default function Innovations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="innovations"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.span 
            variants={fadeUpVariants}
            className="text-primary text-sm font-medium uppercase tracking-wider inline-block"
          >
            Academic Innovation
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
          >
            Transforming <span className="text-gold heading-serif">Global Education</span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-foreground-secondary max-w-3xl mx-auto text-lg"
          >
            Leading initiatives that bridge academic excellence with global opportunities, 
            creating pathways for students to thrive in an interconnected world.
          </motion.p>
        </motion.div>

        {/* Innovations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon;
            return (
              <motion.div
                key={innovation.title}
                variants={fadeUpVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 h-full relative overflow-hidden border border-transparent hover:border-primary/20 transition-all duration-500">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${innovation.color.accent} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl ${innovation.color.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`w-8 h-8 ${innovation.color.text}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {innovation.title}
                    </h3>
                    <p className={`text-sm ${innovation.color.text} font-medium mb-4`}>
                      {innovation.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-foreground-secondary text-sm leading-relaxed mb-6">
                      {innovation.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {innovation.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${innovation.color.bg} mt-1.5 flex-shrink-0`} />
                          <p className="text-xs text-foreground-muted">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className={`${innovation.color.bg} rounded-xl p-4 text-center`}>
                      <p className={`text-3xl font-bold ${innovation.color.text}`}>
                        {innovation.stats.value}
                      </p>
                      <p className="text-xs text-foreground-muted mt-1">
                        {innovation.stats.label}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: smoothEase }}
          className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 heading-serif">
                Driving Educational Excellence Through Innovation
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                These initiatives represent a comprehensive approach to modernizing management education 
                — combining rigorous academic standards with practical global exposure, industry partnerships, 
                and collaborative learning environments that prepare students for leadership roles in an 
                increasingly interconnected business landscape.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <blockquote className="glass rounded-2xl p-8 md:p-10 max-w-3xl mx-auto relative">
            <div className="absolute top-6 left-8 text-5xl text-primary/20 font-serif">"</div>
            <p className="text-lg md:text-xl text-foreground-secondary italic leading-relaxed relative z-10">
              Innovation in education is not about following trends — it's about creating 
              <span className="text-gold font-semibold not-italic"> sustainable frameworks </span> 
              that empower generations of learners to excel globally.
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
