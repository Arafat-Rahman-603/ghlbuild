"use client";

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/content/site";
import { solutions } from "@/lib/content/solutions";
import { CtaSection } from "@/components/sections/CtaSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// One icon per solution slot (optional, can be used in the eyebrow)
const icons = [
  <svg key="lead" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="sales" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  <svg key="appt" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  <svg key="ret" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
];

const solutionImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", // Screen data
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", // Minimal laptop charts
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200", // Calendar/Desk
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200", // Team/People
];

const buttonTexts = [
  "Book a Meeting for Lead Capture",
  "Book a Meeting for Sales Automation",
  "Book a Meeting for Scheduling",
  "Book a Meeting for Client Retention"
];

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="section-md bg-[#f8f8f6] border-b border-gray-200 text-center relative overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1e90ff] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container-page relative z-10">
          <div className="flex flex-col items-center">
            <span className="eyebrow mb-6">Our Solutions</span>
            <h1 className="text-display mb-6 max-w-4xl text-center text-ink-900 tracking-tight">
              Business outcomes, not just technical features.
            </h1>
            <p className="text-body-lg max-w-2xl text-center text-gray-500">
              Every solution we build addresses a specific operational bottleneck — from{" "}
              <span className="text-ink-900 font-medium">lead management</span> to{" "}
              <span className="text-ink-900 font-medium">client retention</span> — using GoHighLevel as the ultimate growth engine.
            </p>
          </div>
        </div>
      </section>

      {/* ── ZIGZAG ROWS ────────────────────────────────────────────────────── */}
      <section className="section-md bg-white">
        <div className="container-page max-w-7xl">
          <div className="flex flex-col gap-24 lg:gap-40">
            {solutions.map((sol, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={sol.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24"
                >
                  {/* Content Column */}
                  <div className={`flex-1 flex flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="mb-4">
                      <span className="eyebrow !mb-0 text-[#1e90ff]">
                        Solution {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink-900 tracking-tight leading-[1.2] mb-4">
                      {sol.title}
                    </h2>
                    
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-8">
                      {sol.description}
                    </p>

                    <div className="mb-10">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Key Outcomes</p>
                      <ul className="flex flex-col gap-4">
                        {sol.outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-[#1e90ff] shrink-0 opacity-90" />
                            <span className="text-base font-medium text-ink-900/80 leading-snug pt-0.5">{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <Link
                        href={site.cta.bookCall}
                        className="btn btn-primary btn-lg inline-flex items-center justify-center gap-2 group"
                      >
                        {buttonTexts[index % buttonTexts.length]}
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Image Column */}
                  <div className={`flex-1 w-full relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-3xl overflow-hidden bg-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-200/60 group h-full min-h-[350px] lg:min-h-0">
                      <img 
                        src={solutionImages[index % solutionImages.length]} 
                        alt={sol.title}
                        className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                      {/* Subtle elegant overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
