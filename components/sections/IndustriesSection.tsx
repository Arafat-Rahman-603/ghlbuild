"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ─── Industry Items Data ──────────────────────────────────────────────────────

interface IndustryCardItem {
  slug: string;
  name: string;
  description: string;
  workflows: string[];
  icon: React.ReactNode;
}

const industryCards: IndustryCardItem[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    description:
      "Automated pipelines, lead generation, and booking for brokerages.",
    workflows: ["Intake", "Tours", "Contracts"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    slug: "home-services",
    name: "Home Services",
    description:
      "Booking automation, review requests, and job tracking for service teams.",
    workflows: ["Estimates", "Dispatch", "Reviews"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    slug: "coaching-consulting",
    name: "Consultants",
    description:
      "Course delivery, calendar booking, and nurture sequences for clients.",
    workflows: ["Discovery", "Onboarding", "Nurture"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    ),
  },
  {
    slug: "digital-agencies",
    name: "Digital Agencies",
    description:
      "White-label GHL systems your clients use under your brand, end to end.",
    workflows: ["White-Label", "Deploy", "Reports"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  },
  {
    slug: "healthcare",
    name: "Medical & Wellness",
    description:
      "Patient communication workflows and appointment automation with high delivery.",
    workflows: ["Intake", "Reminders", "Follow-ups"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    description:
      "Abandoned cart recovery, SMS follow-ups, and post-purchase retention.",
    workflows: ["Carts", "SMS Promos", "Retention"],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function IndustriesSection() {
  return (
    <section
      className="section-md border-b border-gray-200 overflow-hidden relative"
      style={{ backgroundColor: "#f5f4f0" }}
      aria-labelledby="industries-heading"
    >
      {/* Decorative ambient subtle accent dots from reference image */}
      <div
        className="absolute top-12 left-1/4 w-2 h-2 rounded-full bg-blue-400/40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 left-12 w-2.5 h-2.5 rounded-full bg-amber-400/50 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-8 w-2 h-2 rounded-full bg-pink-400/40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-page relative z-10">
        {/* ── Header ────────────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <span className="eyebrow text-neutral-500 mb-3 block">
              EVERY NICHE, EVERY MARKET
            </span>
            <h2
              id="industries-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900"
            >
              A GHL expert for your industry
            </h2>
          </div>

          {/* Top-Right CTA Pill */}
          <div className="relative inline-block self-start md:self-auto">
            <Link
              href="/book-a-call"
              className="btn btn-primary group text-sm"
            >
              <span>Don&apos;t see yours? Tell us</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ── 3x2 Cards Grid ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {industryCards.map((card, index) => (
            <motion.div
              key={card.slug}
              className="h-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link
                href={`/industries/${card.slug}`}
                className="relative group h-full bg-white rounded-xl p-6 sm:p-7 border border-neutral-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#1e90ff]/40 transition-all duration-300 flex flex-col gap-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e90ff]"
              >
                <div className="flex-1 flex flex-col">
                  {/* Icon & Arrow Container */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#1e90ff] group-hover:scale-110 group-hover:bg-[#1e90ff] group-hover:text-white transition-all duration-300">
                      {card.icon}
                    </div>
                    
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 group-hover:text-[#1e90ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-title text-neutral-900 mt-0 pr-8 mb-2.5 line-clamp-1">
                    {card.name}
                  </h3>

                  {/* Description */}
                  <p className="text-body-sm text-neutral-600 ">
                    {card.description}
                  </p>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
