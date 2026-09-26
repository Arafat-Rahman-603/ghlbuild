import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { solutions } from "@/lib/content/solutions";
import { CtaSection } from "@/components/sections/CtaSection";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Business automation solutions: lead capture, sales process automation, appointment booking, and client follow-up — powered by GoHighLevel.",
  alternates: { canonical: `${site.url}/solutions` },
};

// One icon per solution slot
const icons = [
  // Lead Capture
  <svg key="lead" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  // Sales Automation
  <svg key="sales" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  // Appointment
  <svg key="appt" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  // Retention
  <svg key="ret" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
];

export default function SolutionsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-surface border-b border-gray-100 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-white to-surface -z-10" />
        <div className="container-page">
          <div className="flex flex-col items-center relative z-10">
            <h1 className="text-display mb-6 max-w-4xl text-center">
              Business outcomes, not just{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e90ff] to-cyan-500">
                technical features.
              </span>
            </h1>
            <p className="text-body-lg max-w-2xl text-center">
              Every solution we build addresses a specific operational bottleneck — from{" "}
              <span className="text-ink-900 font-medium">lead management</span> to{" "}
              <span className="text-ink-900 font-medium">client retention</span> — using GoHighLevel as the ultimate growth engine.
            </p>
          </div>
        </div>
      </section>

      {/* ── CARDS ────────────────────────────────────────────────────── */}
      <section className="section-md bg-surface">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {solutions.map((sol, index) => (
              <div
                key={sol.slug}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-[#1e90ff]/40 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                {/* Subtle gradient glow on hover */}
                <div className="absolute -top-32 -right-32 w-72 h-72 bg-[#1e90ff] rounded-full blur-[120px] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none" />

                {/* Card Header */}
                <div className="p-8 pb-6 flex items-start gap-5 border-b border-gray-50">
                  {/* Icon pill */}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1e90ff] group-hover:bg-[#1e90ff] group-hover:text-white group-hover:border-[#1e90ff] transition-all duration-500">
                    {icons[index % icons.length]}
                  </div>
                  <div className="flex-1 min-w-0">
                    {/* Step number badge */}
                    <span className="inline-block text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                      Solution {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-bold text-ink-900 leading-snug group-hover:text-[#1e90ff] transition-colors duration-300">
                      {sol.title}
                    </h2>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-body-sm text-gray-500 leading-relaxed mb-8">
                    {sol.description}
                  </p>

                  {/* Outcomes */}
                  <div className="flex-1 mb-8">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4">Key Outcomes</p>
                    <ul className="flex flex-col gap-3">
                      {sol.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#1e90ff]" strokeWidth={3} />
                          </span>
                          <span className="text-sm font-medium text-ink-900/80 leading-snug">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA — two-button row */}
                  <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                    <Link
                      href={site.cta.bookCall}
                      className="flex-1 btn btn-primary flex items-center justify-center gap-2 text-sm"
                    >
                      Book a Meeting
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 btn btn-outline flex items-center justify-center gap-2 text-sm group/link"
                    >
                      Contact Us
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
