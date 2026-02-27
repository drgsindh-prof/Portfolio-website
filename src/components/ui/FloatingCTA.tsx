"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Phone, ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = () => {
    setIsExpanded(false);
    scrollToSection("contact");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-24 right-8 z-50"
        >
          {/* Expanded Panel */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-16 right-0 w-72 glass rounded-lg p-4 mb-2"
              >
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-3 right-3 w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
                
                <h4 className="font-semibold text-foreground mb-3">
                  Get in Touch
                </h4>
                <p className="text-sm text-foreground-secondary mb-4">
                  Reach out for collaborations, speaking engagements, or inquiries.
                </p>
                
                <div className="space-y-2">
                  <a
                    href="mailto:gsingh@amity.edu"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground-secondary group-hover:text-foreground transition-colors">
                      gsingh@amity.edu
                    </span>
                  </a>
                  <a
                    href="tel:+91-120-4392044"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground-secondary group-hover:text-foreground transition-colors">
                      +91-120-4392044
                    </span>
                  </a>
                </div>
                
                <button
                  onClick={handleContactClick}
                  className="w-full mt-4 btn-primary text-sm flex items-center justify-center gap-2"
                >
                  <span>Open Contact Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-14 h-14 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 ${
              isExpanded
                ? "bg-white/10 border border-white/10"
                : "bg-primary"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contact options"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isExpanded ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <MessageCircle className="w-5 h-5 text-background" />
              )}
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
