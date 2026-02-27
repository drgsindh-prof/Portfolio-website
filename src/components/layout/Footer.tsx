"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { contactInfo } from "@/data/content";

const footerLinks = [
  { label: "About", href: "about" },
  { label: "Journey", href: "timeline" },
  { label: "Global Reach", href: "global" },
  { label: "Research", href: "research" },
  { label: "Gallery", href: "gallery" },
  { label: "Contact", href: "contact" },
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container-custom mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">GS</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Prof. (Dr.) Gurinder Singh
                </p>
                <p className="text-sm text-foreground-secondary">
                  Group Vice Chancellor
                </p>
              </div>
            </motion.div>
            <p className="text-foreground-secondary text-sm leading-relaxed mb-6">
              Transforming Indian higher education through global partnerships,
              cutting-edge research, and a vision for borderless learning.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Google Scholar"
              >
                <BookOpen className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="ResearchGate"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-foreground-secondary hover:text-foreground transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-foreground-secondary hover:text-foreground transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-foreground-secondary text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{contactInfo.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Affiliation */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Affiliation</h4>
            <div className="glass rounded-xl p-4">
              <p className="text-sm text-foreground-secondary mb-2">
                Primary Institution
              </p>
              <p className="font-medium text-foreground">Amity Universities</p>
              <p className="text-sm text-foreground-secondary mt-3">
                27 Campuses Worldwide
              </p>
              <p className="text-xs text-foreground-muted mt-1">
                11 in India • 16 International
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground-muted">
            © {new Date().getFullYear()} Prof. (Dr.) Gurinder Singh. All rights
            reserved.
          </p>
          <p className="text-sm text-foreground-muted">
            Crafted with purpose for global education
          </p>
        </div>
      </div>
    </footer>
  );
}
