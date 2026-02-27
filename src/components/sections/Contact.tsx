"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  BookOpen,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { contactInfo } from "@/data/content";

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

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Flowing Background Elements */}
      <motion.div
        style={{ y: yBg1 }}
        className="absolute top-20 -left-40 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: yBg2 }}
        className="absolute bottom-20 -right-40 w-[350px] h-[350px] rounded-full bg-gold/5 blur-3xl pointer-events-none"
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
            Get in Touch
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl mt-4 mb-6"
          >
            Let&apos;s <span className="text-gold heading-serif">Connect</span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-foreground-secondary max-w-3xl mx-auto text-lg"
          >
            Whether for academic collaborations, speaking engagements, or
            institutional partnerships—reach out through any of these channels.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: smoothEase }}
          >
            <div className="glass rounded-lg p-8 hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-500">
              <h3 className="text-xl font-semibold text-foreground mb-6 heading-serif">
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-2 heading-serif">
                    Message Sent!
                  </h4>
                  <p className="text-foreground-secondary">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground-secondary mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground-muted transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground-secondary mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground-muted transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground-secondary mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground-muted transition-colors"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground-secondary mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground-muted transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: smoothEase }}
            className="space-y-6"
          >
            {/* Direct Contact */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6 heading-serif">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-colors group card-interactive"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-secondary">Email</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-secondary">Phone</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {contactInfo.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-secondary">Address</p>
                    <p className="text-foreground font-medium">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Academic Links */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6 heading-serif">
                Academic & Social Profiles
              </h3>
              <div className="space-y-3">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-colors group card-interactive"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0A66C2]/20 flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">LinkedIn</p>
                      <p className="text-sm text-foreground-secondary">
                        Professional Network
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors" />
                </a>

                <a
                  href={contactInfo.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4285F4]/20 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-[#4285F4]" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">
                        Google Scholar
                      </p>
                      <p className="text-sm text-foreground-secondary">
                        Research Publications
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors" />
                </a>

                <a
                  href={contactInfo.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00D0AF]/20 flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-[#00D0AF]" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">ResearchGate</p>
                      <p className="text-sm text-foreground-secondary">
                        Academic Network
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Secondary Email */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                AIBS Specific Inquiries
              </h3>
              <p className="text-sm text-foreground-secondary mb-4">
                For matters related to Amity International Business School:
              </p>
              <a
                href={`mailto:${contactInfo.secondaryEmail}`}
                className="text-primary hover:text-primary-hover transition-colors"
              >
                {contactInfo.secondaryEmail}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
