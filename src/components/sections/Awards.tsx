"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Star, Crown, Medal, Sparkles } from "lucide-react";

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

const awards = [
  {
    icon: Trophy,
    year: "2015",
    title: "The Build India Award",
    organization: "Bharat Nirman",
    description: "Honored at the 21st India International Culture Fest for promoting traditional wisdom in the corporate world",
    category: "National Recognition"
  },
  {
    icon: Star,
    year: "2011",
    title: "Global Achievers Award & Indira Gandhi Sadbhavna Award",
    organization: "Citizens Integration Peace Society",
    description: "Distinguished role in country development and outstanding contributions to society",
    category: "Excellence in Service"
  },
  {
    icon: Award,
    year: "2011",
    title: "Ambassador of Peace Award",
    organization: "Universal Peace Federation of India",
    description: "Distinguished Educationist for significant contributions in higher education at India International Centre, New Delhi",
    category: "Education Leadership"
  },
  {
    icon: Medal,
    year: "2003",
    title: "Life Time Achievement Award & Gold Medal",
    organization: "Indian Society for Industry & Intellectual Development",
    description: "At 5th National Seminar on Individual Achievements - Intellectual Excellence & National Development",
    category: "Lifetime Achievement"
  },
  {
    icon: Crown,
    year: "2004",
    title: "Rashtriya Samman Puruskar Awards",
    organization: "Indian Society for Industry & Intellectual Development (ISIID)",
    description: "Prestigious national recognition for outstanding contributions to education and development",
    category: "National Honor"
  },
  {
    icon: Trophy,
    year: "2002",
    title: "GEM OF INDIA & Arch of Excellence Award",
    organization: "All India Achievers' Conference",
    description: "Conferred at Taj Palace, New Delhi for exceptional achievements in education",
    category: "National Excellence"
  },
  {
    icon: Medal,
    year: "2002",
    title: "Excellence Award & Gold Medal",
    organization: "Institute of Economic Studies (IES)",
    description: "Outstanding performance in the field of education",
    category: "Academic Excellence"
  },
  {
    icon: Star,
    year: "1998-99",
    title: "Best Faculty Award",
    organization: "Amity Business School",
    description: "360° performance appraisal - top performer in teaching excellence",
    category: "Teaching Excellence"
  },
  {
    icon: Award,
    year: "1997",
    title: "Best Faculty Award",
    organization: "Apeejay School of Marketing",
    description: "Recognition for outstanding teaching and mentorship",
    category: "Teaching Excellence"
  },
  {
    icon: Trophy,
    year: "1986-87",
    title: "Best Debater of Delhi University",
    organization: "University of Delhi",
    description: "Won 107 prizes and contests - outstanding oratory and debate skills",
    category: "Academic Achievement"
  }
];

const recognitions = [
  {
    title: "Editorial Board Member",
    count: "12 Universities",
    institutions: [
      "University of Northampton, UK",
      "Swinburne University of Technology, Australia",
      "University of Birmingham, UK",
      "Purdue University, USA",
      "Deakin University, Australia",
      "University of Queensland, Australia",
      "Queen Mary University of London",
      "University College Dublin, Ireland",
      "Curtin University, Australia",
      "University of Massachusetts, Lowell, USA",
      "California State University, San Bernardino",
      "RMIT University, Australia"
    ]
  },
  {
    title: "Published Books",
    count: "7 Books",
    institutions: [
      "International Marketing Communication",
      "International Marketing Logistics",
      "International Marketing",
      "Case Study of Global Marketing",
      "Corporate Restructuring, Mergers and Acquisitions: Texts and Cases",
      "Thrust Areas of India's Export",
      "Human Resource Management"
    ]
  }
];

export default function Awards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="awards"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-64 w-[700px] h-[700px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/3 -left-64 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
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
            Recognition & Honors
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
          >
            Awards & <span className="text-gold heading-serif">Achievements</span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-foreground-secondary max-w-3xl mx-auto text-lg"
          >
            A legacy of excellence recognized nationally and internationally, 
            spanning four decades of transformative contributions to education and society.
          </motion.p>
        </motion.div>

        {/* Awards Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.h3 
            variants={fadeUpVariants}
            className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center heading-serif"
          >
            Prestigious Honors
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="glass rounded-2xl p-6 h-full relative overflow-hidden border border-transparent hover:border-gold/30 transition-all duration-500">
                    {/* Background Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-gold/30 transition-all duration-500">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded-full">
                              {award.year}
                            </span>
                            <span className="text-xs text-foreground-muted">
                              {award.category}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors duration-300">
                            {award.title}
                          </h4>
                        </div>
                      </div>

                      {/* Organization */}
                      <p className="text-sm font-medium text-primary mb-3">
                        {award.organization}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-foreground-secondary leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Professional Recognitions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h3 
            variants={fadeUpVariants}
            className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center heading-serif"
          >
            Professional Recognition
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="glass rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">
                      {recognition.title}
                    </h4>
                    <p className="text-gold text-sm font-medium">
                      {recognition.count}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {recognition.institutions.map((institution, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                      <p className="text-sm text-foreground-secondary">{institution}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: smoothEase }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">10+</p>
              <p className="text-sm text-foreground-muted">National Awards</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">12</p>
              <p className="text-sm text-foreground-muted">Editorial Boards</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">7</p>
              <p className="text-sm text-foreground-muted">Published Books</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">40+</p>
              <p className="text-sm text-foreground-muted">Years Excellence</p>
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
            <div className="absolute top-6 left-8 text-5xl text-gold/20 font-serif">"</div>
            <p className="text-lg md:text-xl text-foreground-secondary italic leading-relaxed relative z-10">
              Recognition is not the destination — it's a reminder of the 
              <span className="text-gold font-semibold not-italic"> responsibility </span> 
              we carry to inspire and uplift others.
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
