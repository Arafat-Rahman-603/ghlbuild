import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";
import { AnimatedStagger, AnimatedItem } from "@/components/ui/AnimatedStagger";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `Implementation case studies from ${site.name} — GoHighLevel setup, CRM configuration, and automation for businesses across industries.`,
  alternates: { canonical: `${site.url}/case-studies` },
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "cs-1",
      title: "Scaling Lead Volume with Automated Triage",
      client: "Apex Real Estate Group",
      industry: "Real Estate",
      metric: "40% Increase in Lead Conversion",
      challenge: "Handling 500+ monthly inbound leads manually. Sales team was overwhelmed, leads were falling through the cracks, and response times averaged 4 hours.",
      solution: "A multi-stage pipeline with an automated SMS triage system that instantly engages leads and categorizes them based on their initial reply.",
      implementation: [
        "Connected Facebook Lead Ads directly to GHL.",
        "Built a 5-minute automated SMS & Email outreach sequence.",
        "Created conditional logic to route hot leads directly to agents."
      ],
      outcome: "Response time dropped to 5 minutes. 40% more leads entered the qualification stage without any manual effort.",
      tags: ["Workflow Automation", "Pipeline CRM", "SMS Integration"],
      href: "/case-studies/scaling-lead-volume-automated-triage",
    },
    {
      id: "cs-2",
      title: "Eliminating No-Shows for Premium Consultations",
      client: "Elevate Legal Partners",
      industry: "Professional Services",
      metric: "95% Show Rate",
      challenge: "Clients were booking high-ticket consultations but failing to show up or complete necessary pre-meeting documentation.",
      solution: "A complete overhaul of their booking and calendar system, integrated directly into their CRM with multi-channel reminders and document collection.",
      implementation: [
        "Replaced Calendly with GHL native calendars.",
        "Built a mandatory pre-consultation form flow.",
        "Configured a 3-day WhatsApp and Email reminder sequence."
      ],
      outcome: "No-shows dropped from 25% to 5%. The firm saved hours of wasted preparation time per week.",
      tags: ["Calendar & Booking", "Email Sequences", "Forms"],
      href: "/case-studies/eliminating-no-shows",
    },
    {
      id: "cs-3",
      title: "Consolidating 5 Software Subscriptions into One",
      client: "Nexus Home Services",
      industry: "Home Services",
      metric: "$8,500/yr Saved",
      challenge: "Paying for Mailchimp, Calendly, PipeDrive, and Zapier. Data was scattered, and zaps were constantly breaking.",
      solution: "Migrated the entire tech stack into a single, cohesive GoHighLevel ecosystem configured specifically for home services dispatch.",
      implementation: [
        "Exported and cleaned 10,000+ contacts from Pipedrive.",
        "Rebuilt email templates and campaigns natively in GHL.",
        "Set up a unified inbox for technicians and dispatchers."
      ],
      outcome: "Saved $8,500 annually in software costs and eliminated data silos. The entire team now works from one dashboard.",
      tags: ["Migration", "System Consolidation", "Integrations"],
      href: "/case-studies/consolidating-software-subscriptions",
    }
  ];

  return (
    <>
      <section className="pt-20 md:pt-32 pb-8 bg-surface relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/30 rounded-bl-[150px] -z-10 blur-3xl" />
        <div className="container-page">
          <AnimatedStagger className="max-w-3xl mx-auto flex flex-col items-center">
            <AnimatedItem>
              <h1 className="text-display mb-6 max-w-4xl">
                Implementation in practice.
              </h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-body-lg max-w-2xl">
                Sample implementations demonstrating how we scope, architect, and build technical GoHighLevel ecosystems to solve real operational bottlenecks.
              </p>
            </AnimatedItem>
          </AnimatedStagger>
        </div>
      </section>

      <section className="section-md bg-surface border-b border-gray-100">
        <div className="container-page">
          <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <AnimatedItem key={cs.id}>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group overflow-hidden">
                  
                  {/* Top visual accent */}
                  <div className="h-32 bg-surface relative overflow-hidden flex items-center justify-center p-6 border-b border-gray-100">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    <div className="relative z-10 text-center">
                       <span className="eyebrow block mb-1 text-[#1e90ff]">Key Outcome</span>
                       <span className="block text-2xl font-black text-ink-900">{cs.metric}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-50 px-2 py-1 rounded-md">{cs.industry}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-50 px-2 py-1 rounded-md">{cs.client}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-ink-900 mb-4 line-clamp-2">{cs.title}</h2>
                    
                    <p className="text-body-sm text-gray-600 mb-8 line-clamp-3 flex-1">
                      {cs.challenge}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <Link 
                        href={cs.href}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#1e90ff] group-hover:text-blue-700 transition-colors group/btn w-full justify-between"
                      >
                        Read case study
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
