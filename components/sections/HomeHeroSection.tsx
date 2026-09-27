"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/content/site";

// ─── Animation ────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: "easeOut" as const },
  },
};

// ─── Trust indicators ─────────────────────────────────────────────────────────

const trustIndicators = [
  {
    label: "Official GoHighLevel partner",
    icon: (
      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="8" cy="8" r="6" />
        <path d="M5 8l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Fixed scope, fixed price",
    icon: (
      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M8 1l2 4.5 5 .5-3.5 3.5 1 5L8 12 3.5 14.5l1-5L1 6l5-.5L8 1z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Live in 2–4 weeks",
    icon: (
      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M9.5 2L4 9h5.5L7 14l6-8H8L9.5 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function HomeHeroSection() {
  return (
    <>
    <section
      className="section-md overflow-hidden relative bg-white"
      aria-labelledby="home-hero-heading"
    >
      {/* Subtle ambient glow behind text */}
      <div className="absolute top-0 left-0 w-[800px] h-[400px] bg-[#2897FC] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="container-page">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center text-center"
        >

          {/* Headline — large, heavy, centered with highlighted word */}
          <motion.h1
            variants={itemVariants}
            id="home-hero-heading"
            className="text-display max-w-[820px] mb-4 text-ink-900"
          >
            Hire GoHighLevel{" "}
            {/* Highlighted word — brand color background, editorial treatment */}
            <span className="relative inline-block">
              <span
                aria-hidden="true"
                className="absolute rounded"
                style={{
                  inset: "4px -6px 0px -6px",
                  backgroundColor: "#2897FC",
                  opacity: 0.15,
                  borderRadius: "6px",
                  zIndex: 0,
                }}
              />
              <span className="relative text-[#2897FC]" style={{ zIndex: 1 }}>experts</span>
            </span>{" "}
            who can turn{" "}
            <br className="hidden sm:block" />
            your CRM into booked calls.
          </motion.h1>

          {/* 
          <motion.p
            variants={itemVariants}
            className="text-body-lg max-w-[520px] mb-6"
          >
            We map your sales process first, then build the CRM, automations,
            and workflows around it — every system tested and operational before
            handover.
          </motion.p>
          */}

          {/* CTAs — pill-shaped buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-8 mt-4"
          >
            <Link
              href={site.cta.bookCall}
              className="btn btn-primary btn-lg group"
            >
              <span>Book a Strategy Call</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/services"
              className="btn btn-outline btn-lg group"
            >
              <span>Explore Services</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
     
    <section className="section-md bg-white overflow-hidden relative border-b border-gray-200">
      <div className="container-page flex flex-col items-center gap-10">
        
        {/* Top Row: Review Badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5">
          
          {/* Trustpilot */}
          <div className="flex items-center gap-3 bg-[#00b67a] shadow-sm px-5 py-2.5 rounded-xl hover:-translate-y-1 transition-transform cursor-default">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-[11px] text-white/90 font-medium">Excellent | 4.9 out of 5</span>
              <span className="font-bold text-sm sm:text-base text-white leading-tight">Trustpilot</span>
            </div>
          </div>

          {/* Google Review */}
          <div className="flex items-center gap-3 bg-[#4285F4] shadow-sm px-5 py-2.5 rounded-xl hover:-translate-y-1 transition-transform cursor-default">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current" aria-hidden="true">
              <path d="M21.35 11.1H12v2.77h5.44c-.25 1.4-1.55 4.12-5.44 4.12-3.28 0-5.95-2.73-5.95-6.1s2.67-6.1 5.95-6.1c1.86 0 3.19.8 3.92 1.49l2.21-2.14C16.54 3.75 14.47 2.9 12 2.9 6.98 2.9 2.9 6.98 2.9 12s4.08 9.1 9.1 9.1c5.25 0 8.73-3.69 8.73-8.89 0-.75-.1-1.39-.23-1.93z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-[11px] text-white/90 font-medium">Excellent | 4.8 out of 5</span>
              <span className="font-bold text-sm sm:text-base text-white leading-tight">Google</span>
            </div>
          </div>

          {/* Fiverr Review */}
          <div className="flex items-center gap-3 bg-[#1dbf73] shadow-sm px-5 py-2.5 rounded-xl hover:-translate-y-1 transition-transform cursor-default">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-[11px] text-white/90 font-medium">Excellent | 5.0 out of 5</span>
              <span className="font-bold text-sm sm:text-base text-white leading-tight">Fiverr</span>
            </div>
          </div>

        </div>

        {/* Bottom Row: Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 w-full max-w-4xl mx-auto">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center md:border-r border-gray-200">
            <span className="text-4xl md:text-5xl font-bold text-ink-900 tracking-tight mb-1">1,200+</span>
            <span className="text-[13px] font-medium text-gray-500">Clients Served</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center md:border-r border-gray-200">
            <span className="text-4xl md:text-5xl font-bold text-ink-900 tracking-tight mb-1">5,000+</span>
            <span className="text-[13px] font-medium text-gray-500">Projects Completed</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center md:border-r border-gray-200">
            <span className="text-4xl md:text-5xl font-bold text-ink-900 tracking-tight mb-1">7+</span>
            <span className="text-[13px] font-medium text-gray-500">Years of Experience</span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-ink-900 tracking-tight mb-1">100%</span>
            <span className="text-[13px] font-medium text-gray-500">Satisfaction Focus</span>
          </div>

        </div>

      </div>
    </section>
  </>
  );
}
