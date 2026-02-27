"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Play, X, Quote } from "lucide-react";
import { galleryImages, quotes } from "@/data/content";
import { InfiniteCarousel } from "@/components/ui";

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

const videoContent = [
  {
    id: "1",
    title: "The Global Competitiveness of Indian Youth",
    tagline: "Global Skills for Local Heroes",
    thumbnail:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=340&fit=crop",
    description:
      "Dr. Singh discussing why Indian students must understand German engineering and Google's culture to compete globally.",
  },
  {
    id: "2",
    title: "Education in the Post-COVID Era",
    tagline: "The Future of Learning",
    thumbnail:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=340&fit=crop",
    description:
      "Discussing the shift to online learning and the importance of multidisciplinary programs.",
  },
  {
    id: "3",
    title: "The Amity Mission",
    tagline: "Vision & Values",
    thumbnail:
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&h=340&fit=crop",
    description:
      "Addressing the student body on the topic of Nation Building through education.",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section id="gallery" ref={sectionRef} className="section-padding bg-background-secondary relative overflow-hidden">
      {/* Flowing Background Elements */}
      <motion.div
        style={{ y: yBg1 }}
        className="absolute top-32 -right-40 w-[450px] h-[450px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: yBg2 }}
        className="absolute bottom-32 -left-40 w-[350px] h-[350px] rounded-full bg-gold/5 blur-3xl pointer-events-none"
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
            Media Gallery
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
          >
            <span className="text-primary heading-serif">Moments & Milestones</span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-foreground-secondary max-w-3xl mx-auto text-lg"
          >
            From keynote addresses at global forums to mentoring sessions with
            students—glimpses of a career dedicated to education.
          </motion.p>
        </motion.div>

        {/* Infinite Auto-Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="mb-16 -mx-6 md:-mx-8 lg:-mx-16"
        >
          <InfiniteCarousel 
            items={galleryImages}
            speed={40}
            onItemClick={(index) => setSelectedImage(index)}
          />
        </motion.div>

        {/* Video Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h3 
            variants={fadeUpVariants}
            className="text-2xl md:text-3xl text-center mb-10 heading-serif text-foreground"
          >
            Featured Talks
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {videoContent.map((video, index) => (
              <motion.button
                key={video.id}
                onClick={() => setSelectedVideo(video.id)}
                className="group text-left"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: smoothEase }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 border border-white/5 group-hover:border-primary/30 transition-colors duration-300">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-background ml-1" />
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {video.title}
                </h4>
                <p className="text-sm text-gold mb-2">{video.tagline}</p>
                <p className="text-sm text-foreground-secondary">
                  {video.description}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Quotes Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            variants={fadeUpVariants}
            className="text-2xl md:text-3xl text-center mb-10 heading-serif text-foreground"
          >
            Words of Wisdom
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: smoothEase }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass rounded-lg p-6 card-interactive group"
              >
                <Quote className="w-8 h-8 text-gold/50 mb-4 group-hover:text-gold group-hover:scale-110 transition-all duration-300" />
                <blockquote className="text-foreground italic mb-4 leading-relaxed heading-serif">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                <cite className="text-sm text-foreground-secondary not-italic group-hover:text-primary transition-colors duration-300">
                  — {quote.context}
                </cite>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox for Images */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-foreground mt-4">
                {galleryImages[selectedImage].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal Placeholder */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full glass rounded-lg p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Play className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2 heading-serif">
                {videoContent.find((v) => v.id === selectedVideo)?.title}
              </h3>
              <p className="text-foreground-secondary mb-6">
                Video content placeholder. Actual videos will be embedded here
                once available.
              </p>
              <button
                onClick={() => setSelectedVideo(null)}
                className="btn-secondary"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
