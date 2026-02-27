"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Users, 
  Mic2,
  Globe,
  Award,
  ExternalLink 
} from "lucide-react";

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

// Conferences data - Actual conferences conducted by Prof. Gurinder Singh
const conferences = [
  {
    id: 1,
    title: "ICETM - International Conference on Engineering, Technology & Management",
    theme: "Engineering, Technology & Management for Industry-Academia Collaboration",
    role: "Conference General Chair",
    date: "13-14 May 2025",
    location: "Fairleigh Dickinson University, New Jersey, USA",
    participants: "500+",
    highlights: [
      "IEEE Long Island Section & Region 1 partnership",
      "Conference Record #63734",
      "Focus on automation, computation & knowledge management"
    ],
    type: "flagship",
    link: "https://www.amity.edu/icetm-2025/default.asp"
  },
  {
    id: 2,
    title: "IIPEM - International Conference on Intelligent and Innovative Practices in Engineering & Management",
    theme: "Intelligent Systems & Innovation in Engineering Management",
    role: "Conference Chair",
    date: "25 November 2025",
    location: "Amity Global Institute, Singapore",
    participants: "400+",
    highlights: [
      "IEEE Xplore indexed proceedings",
      "Focus on AI, automation & knowledge management",
      "Industry-academia research platform"
    ],
    type: "international",
    link: "https://www.amity.edu/iipem2025/Default.asp"
  },
  {
    id: 3,
    title: "ICCAKM - 5th International Conference on Computation, Automation and Knowledge Management",
    theme: "Computation, Automation & Knowledge Management for Digital Era",
    role: "Conference Chair",
    date: "11 December 2025",
    location: "Amity University Dubai, UAE",
    participants: "350+",
    highlights: [
      "5th edition of flagship conference series",
      "Cross-border research collaboration platform",
      "Focus on Industry 4.0 technologies"
    ],
    type: "international",
    link: "https://www.amity.edu/iccakm2025/default.asp"
  },
  {
    id: 4,
    title: "ICETTEM - International Conference on Emerging Technology Trends in Engineering and Management",
    theme: "Sustainable New Age Technologies aligned to Business 5.0",
    role: "Conference Chair",
    date: "19 May 2025",
    location: "University of Grenoble Alps, France",
    participants: "300+",
    highlights: [
      "Hybrid mode conference",
      "CUREUS publishing partner",
      "Focus on sustainable technologies & Business 5.0"
    ],
    type: "international",
    link: "https://www.amity.edu/icettem2025/Default.asp"
  },
  {
    id: 5,
    title: "ICCETM - International Conference on Computing, Engineering, Technology & Management",
    theme: "Computing & Engineering Solutions for Global Challenges",
    role: "Conference Chair",
    date: "Annual",
    location: "Sydney, Australia",
    participants: "300+",
    highlights: [
      "Indo-Pacific academic collaboration",
      "New Colombo Plan partnership integration",
      "Research exchange programs"
    ],
    type: "international",
    link: null
  },
  {
    id: 6,
    title: "INBUSH ERA World Summit",
    theme: "International Business Horizon - Where Global Leaders Converge",
    role: "Founder & Summit Director",
    date: "Annual Since 2008",
    location: "Amity University, Noida, India",
    participants: "20,000+",
    highlights: [
      "Asia's largest international business summit",
      "50+ ambassadors and diplomats participation",
      "500+ corporate leaders & 200+ academic institutions"
    ],
    type: "flagship",
    link: "https://www.amity.edu/inbush"
  },
];

const typeColors = {
  flagship: { bg: "bg-gold/20", text: "text-gold", border: "border-gold/30" },
  international: { bg: "bg-primary/20", text: "text-primary", border: "border-primary/30" },
  national: { bg: "bg-accent/20", text: "text-accent", border: "border-accent/30" },
  workshop: { bg: "bg-accent/20", text: "text-accent", border: "border-accent/30" },
};

export default function Conferences() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % conferences.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + conferences.length) % conferences.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentConference = conferences[currentIndex];
  const typeStyle = typeColors[currentConference.type as keyof typeof typeColors];

  return (
    <section
      id="conferences"
      ref={sectionRef}
      className="section-padding bg-background-secondary relative overflow-hidden"
    >
      {/* Background Elements */}
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
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUpVariants}
            className="text-primary text-sm font-medium uppercase tracking-wider inline-block"
          >
            Leadership & Convening
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
          >
            <span className="text-primary heading-serif">Conferences</span> Conducted
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-foreground-secondary max-w-3xl mx-auto text-lg"
          >
            Organizing and leading international conferences, summits, and workshops 
            that bring together thought leaders, researchers, and industry experts.
          </motion.p>
        </motion.div>

        {/* Main Carousel */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: smoothEase }}
            className="relative"
          >
            {/* Conference Card */}
            <div className={`glass rounded-2xl p-8 md:p-10 border ${typeStyle.border}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, ease: smoothEase }}
                >
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      {/* Type Badge */}
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-3 ${typeStyle.bg} ${typeStyle.text}`}>
                        {currentConference.type}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-foreground heading-serif mb-2">
                        {currentConference.title}
                      </h3>
                      
                      {/* Theme */}
                      <p className="text-foreground-secondary italic">
                        Theme: {currentConference.theme}
                      </p>
                    </div>
                    
                    {/* Role Badge */}
                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                      <Mic2 className={`w-5 h-5 ${typeStyle.text}`} />
                      <span className="text-sm font-medium text-foreground">
                        {currentConference.role}
                      </span>
                    </div>
                  </div>

                  {/* Info Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-foreground-muted uppercase">Date</p>
                        <p className="text-foreground font-medium">{currentConference.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                      <MapPin className="w-5 h-5 text-gold" />
                      <div>
                        <p className="text-xs text-foreground-muted uppercase">Location</p>
                        <p className="text-foreground font-medium">{currentConference.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg">
                      <Users className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-xs text-foreground-muted uppercase">Participants</p>
                        <p className="text-foreground font-medium">{currentConference.participants}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4">
                      Key Highlights
                    </h4>
                    <div className="grid md:grid-cols-3 gap-3">
                      {currentConference.highlights.map((highlight, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start gap-2 bg-white/5 p-3 rounded-lg"
                        >
                          <Award className={`w-4 h-4 mt-0.5 flex-shrink-0 ${typeStyle.text}`} />
                          <span className="text-sm text-foreground-secondary">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Link Button for conferences with links */}
                  {currentConference.link && (
                    <div>
                      <a 
                        href={currentConference.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg ${typeStyle.bg} ${typeStyle.text} hover:opacity-80 transition-opacity font-medium text-sm`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Official Website
                      </a>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                {/* Dots */}
                <div className="flex gap-2">
                  {conferences.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-primary w-8"
                          : "bg-white/20 w-2.5 hover:bg-white/40"
                      }`}
                      aria-label={`Go to conference ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Counter & Arrows */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-foreground-muted">
                    {currentIndex + 1} / {conferences.length}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={goToPrev}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                      aria-label="Previous conference"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                      aria-label="Next conference"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <motion.div variants={fadeUpVariants} className="text-center">
            <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-3">
              <Globe className="w-7 h-7 text-gold" />
            </div>
            <p className="text-3xl md:text-4xl font-bold text-gold mb-1">8+</p>
            <p className="text-sm text-foreground-muted">ICETM Countries</p>
          </motion.div>
          <motion.div variants={fadeUpVariants} className="text-center">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">25K+</p>
            <p className="text-sm text-foreground-muted">Total Participants</p>
          </motion.div>
          <motion.div variants={fadeUpVariants} className="text-center">
            <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-7 h-7 text-accent" />
            </div>
            <p className="text-3xl md:text-4xl font-bold text-accent mb-1">15+</p>
            <p className="text-sm text-foreground-muted">Years Organizing</p>
          </motion.div>
          <motion.div variants={fadeUpVariants} className="text-center">
            <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-3">
              <Mic2 className="w-7 h-7 text-gold" />
            </div>
            <p className="text-3xl md:text-4xl font-bold text-gold mb-1">50+</p>
            <p className="text-sm text-foreground-muted">Editions Conducted</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
