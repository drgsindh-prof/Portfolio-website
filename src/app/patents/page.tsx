"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb,
  Brain,
  Cog,
  BookOpen,
  Layers,
  ArrowLeft,
  Filter,
  Search,
  ExternalLink,
  Sparkles,
  Shield,
  Smartphone,
} from "lucide-react";
import {
  assessmentTests,
  technicalSystems,
  theoreticalFrameworks,
  managementModels,
  allPatents,
  getPatentStats,
} from "@/data/patents";

const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
};

const categoryInfo = {
  tests: {
    title: "Psychometric Assessment Tools",
    subtitle: "26 Proprietary Tests",
    description:
      "A comprehensive suite of psychological and professional assessment tools designed to measure various aspects of human capability, personality, and potential.",
    icon: Brain,
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
  systems: {
    title: "Technical Systems & Innovations",
    subtitle: "7 Patented Systems",
    description:
      "Innovative technical solutions addressing real-world problems in automotive safety, digital identity, education, and healthcare.",
    icon: Cog,
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  theorems: {
    title: "Theoretical Frameworks",
    subtitle: "14 Original Theorems & Theories",
    description:
      "Groundbreaking theoretical contributions to management science, organizational behavior, and human psychology.",
    icon: Lightbulb,
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
  },
  models: {
    title: "Management Models",
    subtitle: "9 Strategic Models",
    description:
      "Practical frameworks and models for organizational development, leadership, and Industry 4.0 transformation.",
    icon: Layers,
    color: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
};

type CategoryKey = keyof typeof categoryInfo;

export default function PatentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | "all">("all");
  const stats = getPatentStats();

  const categoryData: Record<CategoryKey, typeof allPatents> = {
    tests: assessmentTests,
    systems: technicalSystems,
    theorems: theoreticalFrameworks,
    models: managementModels,
  };

  // Filter patents
  const filteredPatents = useMemo(() => {
    let patents = selectedCategory === "all" ? allPatents : categoryData[selectedCategory];
    
    if (searchQuery) {
      patents = patents.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return patents;
  }, [searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="absolute top-40 -right-48 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 -left-48 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />

        <div className="container-custom mx-auto relative z-10">
          {/* Back Link */}
          <Link
            href="/#research"
            className="inline-flex items-center gap-2 text-foreground-secondary hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.span
              variants={fadeUpVariants}
              className="text-gold text-sm font-medium uppercase tracking-wider inline-block"
            >
              Intellectual Property
            </motion.span>
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl lg:text-6xl mt-4 mb-6"
            >
              <span className="text-gold heading-serif">Patents & Copyrights</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              className="text-foreground-secondary text-lg max-w-2xl"
            >
              A portfolio of {stats.total} registered intellectual properties including
              psychometric assessment tools, technical innovations, theoretical
              frameworks, and management models.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            <motion.div
              variants={fadeUpVariants}
              className="glass rounded-xl p-5 text-center border border-purple-500/20"
            >
              <Brain className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.tests}</p>
              <p className="text-sm text-foreground-muted">Assessment Tests</p>
            </motion.div>
            <motion.div
              variants={fadeUpVariants}
              className="glass rounded-xl p-5 text-center border border-blue-500/20"
            >
              <Cog className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.systems}</p>
              <p className="text-sm text-foreground-muted">Technical Systems</p>
            </motion.div>
            <motion.div
              variants={fadeUpVariants}
              className="glass rounded-xl p-5 text-center border border-amber-500/20"
            >
              <Lightbulb className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.theorems}</p>
              <p className="text-sm text-foreground-muted">Theorems & Theories</p>
            </motion.div>
            <motion.div
              variants={fadeUpVariants}
              className="glass rounded-xl p-5 text-center border border-emerald-500/20"
            >
              <Layers className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.models}</p>
              <p className="text-sm text-foreground-muted">Management Models</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-y border-white/10 sticky top-16 bg-background/80 backdrop-blur-xl z-40">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
              <input
                type="text"
                placeholder="Search patents & copyrights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-gold/50"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-xl text-sm transition-colors ${
                  selectedCategory === "all"
                    ? "bg-gold text-background font-medium"
                    : "glass hover:bg-white/10"
                }`}
              >
                All ({stats.total})
              </button>
              {(Object.keys(categoryInfo) as CategoryKey[]).map((key) => {
                const info = categoryInfo[key];
                const Icon = info.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-4 py-2 rounded-xl text-sm transition-colors flex items-center gap-2 ${
                      selectedCategory === key
                        ? `${info.bgColor} ${info.textColor} font-medium border ${info.borderColor}`
                        : "glass hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {info.subtitle.split(" ")[0]}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="text-sm text-foreground-muted mt-4">
            Showing {filteredPatents.length} of {stats.total} intellectual properties
          </p>
        </div>
      </section>

      {/* Category Sections or Filtered Results */}
      <section className="py-12">
        <div className="container-custom mx-auto">
          {selectedCategory === "all" && !searchQuery ? (
            // Show all categories
            (Object.keys(categoryInfo) as CategoryKey[]).map((key) => {
              const info = categoryInfo[key];
              const Icon = info.icon;
              const items = categoryData[key];

              return (
                <div key={key} className="mb-16">
                  {/* Category Header */}
                  <div
                    className={`rounded-2xl p-6 mb-6 bg-gradient-to-r ${info.color} border ${info.borderColor}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${info.bgColor}`}>
                        <Icon className={`w-8 h-8 ${info.textColor}`} />
                      </div>
                      <div>
                        <h2 className={`text-2xl font-bold ${info.textColor} heading-serif`}>
                          {info.title}
                        </h2>
                        <p className="text-foreground-secondary mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Items Grid */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={fadeUpVariants}
                        className={`glass rounded-xl p-5 border ${info.borderColor} hover:bg-white/5 transition-colors group`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${info.bgColor} flex-shrink-0`}>
                            <Sparkles className={`w-4 h-4 ${info.textColor}`} />
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            {item.description && (
                              <p className="text-sm text-foreground-muted mt-1">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              );
            })
          ) : (
            // Show filtered results
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filteredPatents.map((item) => {
                // Determine category
                let catKey: CategoryKey = "tests";
                if (technicalSystems.includes(item)) catKey = "systems";
                else if (theoreticalFrameworks.includes(item)) catKey = "theorems";
                else if (managementModels.includes(item)) catKey = "models";

                const info = categoryInfo[catKey];

                return (
                  <motion.div
                    key={item.id}
                    variants={fadeUpVariants}
                    className={`glass rounded-xl p-5 border ${info.borderColor} hover:bg-white/5 transition-colors group`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${info.bgColor} flex-shrink-0`}>
                        <Sparkles className={`w-4 h-4 ${info.textColor}`} />
                      </div>
                      <div>
                        <span className={`text-xs ${info.textColor} font-medium`}>
                          {info.title}
                        </span>
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mt-1">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-sm text-foreground-muted mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {filteredPatents.length === 0 && (
            <div className="text-center py-16">
              <Lightbulb className="w-16 h-16 text-foreground-muted/30 mx-auto mb-4" />
              <p className="text-foreground-muted">
                No patents or copyrights found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-12 border-t border-white/10">
        <div className="container-custom mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 bg-gradient-to-br from-gold/10 to-transparent border border-gold/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Shield className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-foreground heading-serif mb-4">
                  Protecting Innovation
                </h3>
                <p className="text-foreground-secondary">
                  Each intellectual property represents years of research, development,
                  and practical application. These copyrighted works contribute to
                  advancing education, organizational development, and technological
                  innovation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-gold">{stats.total}</p>
                  <p className="text-sm text-foreground-muted">Total IPs</p>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-gold">15+</p>
                  <p className="text-sm text-foreground-muted">Years of Innovation</p>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-gold">4</p>
                  <p className="text-sm text-foreground-muted">Categories</p>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-gold">Global</p>
                  <p className="text-sm text-foreground-muted">Application</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container-custom mx-auto text-center">
          <p className="text-foreground-secondary mb-4">
            Interested in licensing or collaboration?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-background rounded-xl hover:bg-gold/90 transition-colors font-medium"
          >
            Get in Touch
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
