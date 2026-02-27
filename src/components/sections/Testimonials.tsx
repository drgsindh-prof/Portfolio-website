"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star, Building2 } from "lucide-react";

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

// Testimonials data - can be expanded or moved to content file
const testimonials = [
  {
    id: 1,
    name: "Dr. Ashok K. Chauhan",
    title: "Founder President",
    organization: "Amity Education Group",
    image: null,
    quote:
      "Prof. Gurinder Singh exemplifies the true spirit of academic leadership. His vision for transnational education and his tireless efforts in building institutional systems have transformed how we approach global education.",
    rating: 5,
  },
  {
    id: 2,
    name: "Industry Leader",
    title: "CEO",
    organization: "Fortune 500 Company",
    image: null,
    quote:
      "Working with Prof. Singh on Industry 4.0 initiatives has been transformative. His research insights and practical approach to implementing AI in business operations have created measurable impact.",
    rating: 5,
  },
  {
    id: 3,
    name: "Research Collaborator",
    title: "Professor",
    organization: "International University",
    image: null,
    quote:
      "Prof. Singh's contributions to computational intelligence and sustainable development research have been groundbreaking. His collaborative spirit and rigorous methodology make him an exceptional research partner.",
    rating: 5,
  },
  {
    id: 4,
    name: "Former Student",
    title: "Senior Manager",
    organization: "Tech Corporation",
    image: null,
    quote:
      "The mentorship I received from Prof. Singh shaped my entire career. His emphasis on practical application of theory and his genuine investment in student success is truly remarkable.",
    rating: 5,
  },
  {
    id: 5,
    name: "Academic Peer",
    title: "Department Head",
    organization: "Global Business School",
    image: null,
    quote:
      "Prof. Singh's editorial contributions and his work on assessment methodologies have set new standards in management education. His intellectual rigor combined with practical wisdom is rare.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
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
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUpVariants}
            className="text-primary text-sm font-medium uppercase tracking-wider inline-block"
          >
            Voices of Impact
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
          >
            <span className="text-primary heading-serif">Testimonials</span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-foreground-secondary max-w-3xl mx-auto text-lg"
          >
            Words from colleagues, collaborators, students, and industry leaders
            who have experienced the impact of Prof. Singh&apos;s work.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: smoothEase }}
            className="relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 md:left-12">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="glass rounded-2xl p-8 md:p-12 pt-12 border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: smoothEase }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-gold fill-gold"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-gold/30 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-foreground-secondary">
                        {testimonials[currentIndex].title}
                      </p>
                      <p className="text-xs text-foreground-muted flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {testimonials[currentIndex].organization}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-primary w-8"
                          : "bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={goToPrev}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
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
          <motion.div
            variants={fadeUpVariants}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">50K+</p>
            <p className="text-sm text-foreground-muted">Students Mentored</p>
          </motion.div>
          <motion.div
            variants={fadeUpVariants}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-bold text-gold mb-1">200+</p>
            <p className="text-sm text-foreground-muted">Industry Partners</p>
          </motion.div>
          <motion.div
            variants={fadeUpVariants}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">15+</p>
            <p className="text-sm text-foreground-muted">Countries Impacted</p>
          </motion.div>
          <motion.div
            variants={fadeUpVariants}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-bold text-gold mb-1">30+</p>
            <p className="text-sm text-foreground-muted">Years of Excellence</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
