"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn, scrollToSection } from "@/lib/utils";

const navItems = [
  { label: "About", href: "about" },
  { label: "Timeline", href: "timeline" },
  { label: "Conferences", href: "conferences" },
  { label: "Research", href: "research" },
  { label: "Patents", href: "patents" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div className="container-custom mx-auto px-6">
          <motion.div
            className={cn(
              "flex items-center justify-between rounded-lg transition-all duration-500 border",
              isScrolled 
                ? "glass px-5 py-2 border-white/5" 
                : "bg-transparent px-6 py-3 border-transparent"
            )}
            layout
          >
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className={cn(
                  "rounded-lg bg-primary flex items-center justify-center transition-all duration-500",
                  isScrolled ? "w-8 h-8" : "w-10 h-10"
                )}
              >
                <span className={cn(
                  "text-background font-bold transition-all duration-500",
                  isScrolled ? "text-sm" : "text-lg"
                )}>GS</span>
              </motion.div>
              <div className="hidden sm:block">
                <p className={cn(
                  "font-semibold text-foreground group-hover:text-primary transition-all duration-500 heading-serif",
                  isScrolled ? "text-xs" : "text-sm"
                )}>
                  Prof. Gurinder Singh
                </p>
                <p className={cn(
                  "text-foreground-secondary transition-all duration-500",
                  isScrolled ? "text-[10px]" : "text-xs"
                )}>
                  Group Vice Chancellor
                </p>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "text-foreground-secondary hover:text-foreground transition-all duration-300 rounded-lg hover:bg-white/5",
                    isScrolled ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Hamburger Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-all duration-500 lg:hidden",
                isScrolled ? "w-8 h-8" : "w-10 h-10"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={cn("transition-all", isScrolled ? "w-4 h-4" : "w-5 h-5")} />
              ) : (
                <Menu className={cn("transition-all", isScrolled ? "w-4 h-4" : "w-5 h-5")} />
              )}
            </motion.button>

            {/* Desktop CTA */}
            <motion.button
              onClick={() => handleNavClick("contact")}
              className={cn(
                "hidden lg:block btn-primary transition-all duration-500",
                isScrolled ? "text-xs px-4 py-2" : "text-sm"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get in Touch</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center min-h-screen gap-6 px-6"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-2xl font-medium text-foreground-secondary hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleNavClick("contact")}
                className="mt-4 btn-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <span>Get in Touch</span>
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
