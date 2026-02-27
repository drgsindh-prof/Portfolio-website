"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, Building2, Calendar, Users, GraduationCap, Globe2, MapPin } from "lucide-react";
import { globalCampuses } from "@/data/content";
import dynamic from "next/dynamic";

// Smooth easing for professional feel
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

// Real geographic coordinates (latitude, longitude) for all campuses
const campusCoordinates: Record<string, { lat: number; lng: number }> = {
  // HEADQUARTERS — Noida (North India)
  noida: { lat: 28.5355, lng: 77.3910 },

  // INDIAN CAMPUSES
  gurgaon: { lat: 28.4595, lng: 77.0266 },
  jaipur: { lat: 26.9124, lng: 75.7873 },
  lucknow: { lat: 26.8467, lng: 80.9462 },
  gwalior: { lat: 26.2183, lng: 78.1828 },
  patna: { lat: 25.5941, lng: 85.1376 },
  kolkata: { lat: 22.5726, lng: 88.3639 },
  ranchi: { lat: 23.3441, lng: 85.3096 },
  raipur: { lat: 21.2514, lng: 81.6296 },
  mumbai: { lat: 19.0760, lng: 72.8777 },
  bengaluru: { lat: 12.9716, lng: 77.5946 },

  // EUROPE
  london: { lat: 51.5074, lng: -0.1278 },
  amsterdam: { lat: 52.3676, lng: 4.9041 },
  paris: { lat: 48.8566, lng: 2.3522 },
  bucharest: { lat: 44.4268, lng: 26.1025 },

  // MIDDLE EAST & CENTRAL ASIA
  dubai: { lat: 25.2048, lng: 55.2708 },
  abudhabi: { lat: 24.4539, lng: 54.3773 },
  tashkent: { lat: 41.2995, lng: 69.2401 },

  // AFRICA
  nairobi: { lat: -1.2921, lng: 36.8219 },
  johannesburg: { lat: -26.2041, lng: 28.0473 },
  mauritius: { lat: -20.3484, lng: 57.5522 },

  // NORTH AMERICA
  sanfrancisco: { lat: 37.7749, lng: -122.4194 },
  newyork: { lat: 40.7128, lng: -74.0060 },
  toronto: { lat: 43.6532, lng: -79.3832 },

  // SOUTHEAST ASIA
  singapore: { lat: 1.3521, lng: 103.8198 },

  // AUSTRALIA
  sydney: { lat: -33.8688, lng: 151.2093 },
  melbourne: { lat: -37.8136, lng: 144.9631 },
};

// Campus images - using actual Amity University images (shuffled across campuses)
const campusImages: Record<string, string> = {
  // Using the 4 available Amity campus images, shuffled across all campuses
  noida: "/noida.jpeg",
  gurgaon: "/gwalior.jpeg",
  jaipur: "/kolkata.jpeg",
  lucknow: "/ranchi.jpg",
  gwalior: "/gwalior.jpeg",
  patna: "/noida.jpeg",
  kolkata: "/kolkata.jpeg",
  ranchi: "/ranchi.jpg",
  raipur: "/gwalior.jpeg",
  mumbai: "/noida.jpeg",
  bengaluru: "/kolkata.jpeg",
  london: "/ranchi.jpg",
  amsterdam: "/noida.jpeg",
  paris: "/gwalior.jpeg",
  bucharest: "/kolkata.jpeg",
  dubai: "/ranchi.jpg",
  abudhabi: "/noida.jpeg",
  tashkent: "/gwalior.jpeg",
  nairobi: "/kolkata.jpeg",
  johannesburg: "/ranchi.jpg",
  mauritius: "/noida.jpeg",
  sanfrancisco: "/gwalior.jpeg",
  newyork: "/kolkata.jpeg",
  toronto: "/ranchi.jpg",
  singapore: "/noida.jpeg",
  sydney: "/gwalior.jpeg",
  melbourne: "/kolkata.jpeg",
};

// Dynamically import the map component to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-background-secondary rounded-2xl">
      <div className="text-center">
        <Globe2 className="w-16 h-16 text-primary/30 mx-auto mb-4 animate-pulse" />
        <p className="text-foreground-muted">Loading interactive map...</p>
      </div>
    </div>
  ),
});

export default function GlobalMap() {
  const [selectedCampus, setSelectedCampus] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMarkerClick = (campusId: string) => {
    setSelectedCampus(selectedCampus === campusId ? null : campusId);
  };

  useEffect(() => {
    if (selectedCampus && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [selectedCampus]);

  const selectedCampusData = globalCampuses.find(
    (c) => c.id === selectedCampus
  );
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Stats for the campus
  const getCampusStats = (campusId: string) => {
    const isHQ = campusId === "noida";
    const isIndia = globalCampuses.find(c => c.id === campusId)?.region === "South Asia";
    
    return {
      students: isHQ ? "50,000+" : isIndia ? "5,000+" : "2,000+",
      programs: isHQ ? "200+" : isIndia ? "50+" : "25+",
      faculty: isHQ ? "3,000+" : isIndia ? "200+" : "100+",
    };
  };

  return (
    <section id="global" ref={sectionRef} className="section-padding bg-background-secondary relative overflow-hidden">
      {/* Flowing Background Elements */}
      <motion.div
        style={{ y: yBg1 }}
        className="absolute top-24 -right-48 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: yBg2 }}
        className="absolute bottom-24 -left-48 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl pointer-events-none"
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
            Global Presence
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
          >
            <span className="text-primary heading-serif">27 Campuses</span> Across the Globe
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-foreground-secondary max-w-3xl mx-auto text-lg"
          >
            From Noida to New York, London to Tashkent—a network designed to
            create borderless professionals.
          </motion.p>
          
          {/* Click Hint */}
          <motion.div 
            variants={fadeUpVariants}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-primary"
            />
            <span className="text-sm text-primary font-medium">
              Click on any marker to explore campus details
            </span>
          </motion.div>
        </motion.div>

        {/* Interactive Leaflet Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: smoothEase }}
          className="relative"
        >
          <div className="relative h-[500px] md:h-[600px] max-w-6xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <MapComponent
              campuses={globalCampuses}
              coordinates={campusCoordinates}
              selectedCampus={selectedCampus}
              onMarkerClick={handleMarkerClick}
            />
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-gold border-2 border-white shadow-md" />
              <span className="text-sm text-foreground-secondary">
                Headquarters (Noida)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary border-2 border-white shadow-md" />
              <span className="text-sm text-foreground-secondary">
                Campus Location
              </span>
            </div>
          </div>
        </motion.div>

        {/* Campus Details Popup - Below Map */}
        <div ref={detailsRef} className="mt-8">
          <AnimatePresence mode="wait">
            {selectedCampusData && (
              <motion.div
                key={selectedCampusData.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: smoothEase }}
                className="max-w-5xl mx-auto"
              >
                <div className="glass rounded-2xl overflow-hidden border border-white/10">
                  {/* Header Bar */}
                  <div className={`px-6 py-4 flex items-center justify-between ${
                    selectedCampusData.id === "noida" 
                      ? "bg-gradient-to-r from-gold/20 to-transparent" 
                      : "bg-gradient-to-r from-primary/20 to-transparent"
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        selectedCampusData.id === "noida" ? "bg-gold" : "bg-primary"
                      }`}>
                        <MapPin className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground heading-serif">
                          {selectedCampusData.city}
                        </h3>
                        <p className="text-foreground-secondary text-sm">
                          {selectedCampusData.country} • {selectedCampusData.region}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCampus(null)}
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left - Info */}
                      <div>
                        {/* Badge */}
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                          selectedCampusData.id === "noida" 
                            ? "bg-gold/20 text-gold" 
                            : "bg-primary/20 text-primary"
                        }`}>
                          {selectedCampusData.significance}
                        </span>

                        {/* Description */}
                        <p className="text-foreground-secondary leading-relaxed mb-6">
                          {selectedCampusData.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {(() => {
                            const stats = getCampusStats(selectedCampusData.id);
                            return (
                              <>
                                <div className="glass rounded-xl p-4 text-center">
                                  <Users className={`w-5 h-5 mx-auto mb-2 ${
                                    selectedCampusData.id === "noida" ? "text-gold" : "text-primary"
                                  }`} />
                                  <p className="text-lg font-bold text-foreground">{stats.students}</p>
                                  <p className="text-xs text-foreground-muted">Students</p>
                                </div>
                                <div className="glass rounded-xl p-4 text-center">
                                  <GraduationCap className={`w-5 h-5 mx-auto mb-2 ${
                                    selectedCampusData.id === "noida" ? "text-gold" : "text-primary"
                                  }`} />
                                  <p className="text-lg font-bold text-foreground">{stats.programs}</p>
                                  <p className="text-xs text-foreground-muted">Programs</p>
                                </div>
                                <div className="glass rounded-xl p-4 text-center">
                                  <Building2 className={`w-5 h-5 mx-auto mb-2 ${
                                    selectedCampusData.id === "noida" ? "text-gold" : "text-primary"
                                  }`} />
                                  <p className="text-lg font-bold text-foreground">{stats.faculty}</p>
                                  <p className="text-xs text-foreground-muted">Faculty</p>
                                </div>
                              </>
                            );
                          })()}
                        </div>

                        {/* Established */}
                        <div className="flex items-center gap-3 text-sm">
                          <Calendar className={`w-4 h-4 ${
                            selectedCampusData.id === "noida" ? "text-gold" : "text-primary"
                          }`} />
                          <span className="text-foreground-secondary">
                            Established {selectedCampusData.established}
                          </span>
                        </div>
                      </div>

                      {/* Right - Images/Visual */}
                      <div className="space-y-4">
                        {/* Main Image */}
                        <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                          {campusImages[selectedCampusData.id] ? (
                            <img 
                              src={campusImages[selectedCampusData.id]}
                              alt={`${selectedCampusData.city} Campus`}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                              <div className="text-center p-8">
                                <Globe2 className={`w-16 h-16 mx-auto mb-4 ${
                                  selectedCampusData.id === "noida" ? "text-gold/30" : "text-primary/30"
                                }`} />
                                <p className="text-foreground-muted text-sm">
                                  {selectedCampusData.city} Campus
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Quick Actions */}
                        <div className="flex gap-3 pt-2">
                          <button className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                            selectedCampusData.id === "noida"
                              ? "bg-gold/20 text-gold hover:bg-gold/30"
                              : "bg-primary/20 text-primary hover:bg-primary/30"
                          }`}>
                            Learn More
                          </button>
                          <button className="flex-1 py-2.5 px-4 rounded-xl text-sm font-medium glass hover:bg-white/10 transition-all text-foreground-secondary">
                            Virtual Tour
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-gold mb-1">27</p>
            <p className="text-sm text-foreground-muted">Campuses Worldwide</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">6</p>
            <p className="text-sm text-foreground-muted">Continents</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-gold mb-1">15+</p>
            <p className="text-sm text-foreground-muted">Countries</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-1">150K+</p>
            <p className="text-sm text-foreground-muted">Students Globally</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
