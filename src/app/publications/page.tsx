"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Users,
  Calendar,
  Filter,
  Search,
  ArrowLeft,
  ChevronDown,
  ExternalLink,
  BookMarked,
  Newspaper,
  GraduationCap,
} from "lucide-react";
import { publications, getPublicationStats } from "@/data/publications";

const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

const typeIcons = {
  journal: Newspaper,
  conference: Users,
  book: BookMarked,
  chapter: FileText,
};

const typeColors = {
  journal: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  conference: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  book: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  chapter: "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

const typeLabels = {
  journal: "Journal Article",
  conference: "Conference Paper",
  book: "Book",
  chapter: "Book Chapter",
};

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  const stats = getPublicationStats();

  // Get unique years
  const years = useMemo(() => {
    const uniqueYears = [...new Set(publications.map((p) => p.year))].sort(
      (a, b) => b - a
    );
    return uniqueYears;
  }, []);

  // Filter publications
  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        searchQuery === "" ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.venue.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = selectedType === "all" || pub.type === selectedType;
      const matchesYear =
        selectedYear === "all" || pub.year.toString() === selectedYear;

      return matchesSearch && matchesType && matchesYear;
    });
  }, [searchQuery, selectedType, selectedYear]);

  // Group by year
  const groupedPublications = useMemo(() => {
    const grouped: Record<number, typeof publications> = {};
    filteredPublications.forEach((pub) => {
      if (!grouped[pub.year]) {
        grouped[pub.year] = [];
      }
      grouped[pub.year].push(pub);
    });
    return grouped;
  }, [filteredPublications]);

  const sortedYears = Object.keys(groupedPublications)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-40 -right-48 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 -left-48 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl" />

        <div className="container-custom mx-auto relative z-10">
          {/* Back Link */}
          <Link
            href="/#research"
            className="inline-flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors mb-8"
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
              className="text-primary text-sm font-medium uppercase tracking-wider inline-block"
            >
              Research Portfolio
            </motion.span>
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl lg:text-6xl mt-4 mb-6"
            >
              <span className="text-primary heading-serif">Publications</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              className="text-foreground-secondary text-lg max-w-2xl"
            >
              A comprehensive collection of {stats.total}+ research publications
              spanning AI, Machine Learning, Business Analytics, and Industry
              4.0 across leading journals, conferences, and academic publishers.
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
              className="glass rounded-xl p-5 text-center"
            >
              <Newspaper className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.journals}</p>
              <p className="text-sm text-foreground-muted">Journal Articles</p>
            </motion.div>
            <motion.div
              variants={fadeUpVariants}
              className="glass rounded-xl p-5 text-center"
            >
              <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.conferences}</p>
              <p className="text-sm text-foreground-muted">Conference Papers</p>
            </motion.div>
            <motion.div
              variants={fadeUpVariants}
              className="glass rounded-xl p-5 text-center"
            >
              <BookMarked className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.books}</p>
              <p className="text-sm text-foreground-muted">Books</p>
            </motion.div>
            <motion.div
              variants={fadeUpVariants}
              className="glass rounded-xl p-5 text-center"
            >
              <FileText className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.chapters}</p>
              <p className="text-sm text-foreground-muted">Book Chapters</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-6 border-y border-white/10 sticky top-16 bg-background/80 backdrop-blur-xl z-40">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary/50"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl hover:bg-white/10 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 flex flex-wrap gap-4"
            >
              {/* Type Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedType("all")}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    selectedType === "all"
                      ? "bg-primary text-white"
                      : "glass hover:bg-white/10"
                  }`}
                >
                  All Types
                </button>
                {(["journal", "conference", "book", "chapter"] as const).map(
                  (type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        selectedType === type
                          ? "bg-primary text-white"
                          : "glass hover:bg-white/10"
                      }`}
                    >
                      {typeLabels[type]}
                    </button>
                  )
                )}
              </div>

              {/* Year Filter */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-foreground focus:outline-none focus:border-primary/50"
              >
                <option value="all">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                ))}
              </select>
            </motion.div>
          )}

          {/* Results count */}
          <p className="text-sm text-foreground-muted mt-4">
            Showing {filteredPublications.length} of {publications.length}{" "}
            publications
          </p>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-12">
        <div className="container-custom mx-auto">
          {sortedYears.map((year) => (
            <div key={year} className="mb-12">
              {/* Year Header */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-primary heading-serif">
                  {year}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                <span className="text-sm text-foreground-muted">
                  {groupedPublications[year].length} publications
                </span>
              </div>

              {/* Publications */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {groupedPublications[year].map((pub) => {
                  const TypeIcon = typeIcons[pub.type];
                  return (
                    <motion.div
                      key={pub.id}
                      variants={fadeUpVariants}
                      className="glass rounded-xl p-5 hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex flex-col md:flex-row gap-4">
                        {/* Type Badge */}
                        <div className="flex-shrink-0">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${typeColors[pub.type]}`}
                          >
                            <TypeIcon className="w-3 h-3" />
                            {typeLabels[pub.type]}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-foreground font-medium leading-snug mb-2 group-hover:text-primary transition-colors">
                            {pub.title}
                          </h3>
                          <p className="text-sm text-foreground-secondary mb-2">
                            {pub.authors}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-foreground-muted">
                            <span className="flex items-center gap-1">
                              <BookOpen className="w-3 h-3" />
                              {pub.venue}
                            </span>
                            {pub.publisher && (
                              <span className="flex items-center gap-1">
                                <GraduationCap className="w-3 h-3" />
                                {pub.publisher}
                              </span>
                            )}
                            {pub.pages && (
                              <span>pp. {pub.pages}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}

          {filteredPublications.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-foreground-muted/30 mx-auto mb-4" />
              <p className="text-foreground-muted">
                No publications found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 border-t border-white/10">
        <div className="container-custom mx-auto text-center">
          <p className="text-foreground-secondary mb-4">
            Interested in collaboration or research partnerships?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
          >
            Get in Touch
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
