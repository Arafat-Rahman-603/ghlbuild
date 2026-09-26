import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "GoHighLevel Automation",
  description: "Workflow automation inside GoHighLevel: lead follow-up sequences, appointment workflows, nurture sequences, and review request automation — tested and operational.",
  alternates: { canonical: `${site.url}/services/gohighlevel-automation` },
};

const automationCapabilities = [
  {
    category: "Lead Workflows",
    items: [
      "Instant lead follow-up on form submission",
      "Multi-step follow-up sequences (SMS + email)",
      "Lead scoring and conditional routing",
      "Re-engagement sequences for cold leads",
    ],
  },
  {
    category: "Appointment Automation",
    items: [
      "Booking confirmation messages",
      "Pre-appointment reminder sequences",
      "No-show follow-up workflows",
      "Post-appointment check-in sequences",
    ],
  },
  {
    category: "Client Communication",
    items: [
      "Onboarding automation sequences",
      "Milestone and status update workflows",
      "Review request sequences post-service",
      "Re-activation campaigns for inactive clients",
    ],
  },
];

export default function GhlAutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-surface relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/30 rounded-bl-[150px] -z-10 blur-3xl" />
        <div className="container-page">
          <div className="flex flex-col items-center">
            <h1 className="text-display max-w-4xl mb-6">
              Workflow automation that runs your business processes reliably.
            </h1>
            <p className="text-body-lg max-w-2xl mb-10">
              Lead follow-up, appointment confirmation, nurture sequences, and
              review requests — built, tested, and configured for your specific
              pipeline and workflow logic.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href={site.cta.bookCall} className="btn btn-primary btn-lg group">
                <span>Book a Strategy Call</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/services/gohighlevel-setup" className="btn btn-outline btn-lg group">
                <span>Full GHL Setup</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section-md bg-surface">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow mb-3 block">The Problem</span>
              <h2 className="text-headline mb-6">
                The gap between GHL and working automation.
              </h2>
              <p className="text-body-lg mb-6">
                GoHighLevel has powerful automation capabilities. But workflows
                configured from tutorials often have incorrect trigger conditions,
                missing steps, or fire on the wrong contacts — producing outcomes
                that are worse than no automation at all.
              </p>
              <p className="text-body-lg">
                Effective automation is built around your specific lead flow,
                business logic, and sales process — not a generic sequence copied
                from someone else&apos;s industry.
              </p>
            </div>
            <div className="flex flex-col gap-5 bg-white p-8 md:p-10 rounded-xl border border-gray-200 shadow-sm">
              {[
                "Workflows configured to your specific business logic",
                "Trigger conditions tested before activation",
                "Correct timing and delay configuration",
                "Multi-channel sequences (SMS and email)",
                "End-to-end testing with real test contacts",
                "Documentation of every workflow",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 text-body-sm">
                  <svg aria-hidden className="w-5 h-5 mt-0.5 shrink-0 text-[#1e90ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-md bg-white">
        <div className="container-page">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="eyebrow mb-3 block">Capabilities</span>
            <h2 className="text-headline">Automation workflows we build.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationCapabilities.map((cap) => (
              <div key={cap.category} className="bg-white rounded-xl p-7 border border-neutral-200 shadow-sm hover:shadow-md hover:border-[#1e90ff]/30 transition-all duration-300 flex flex-col group">
                <h3 className="text-subtitle mb-5 pb-4 border-b border-gray-100 group-hover:border-blue-100 transition-colors">
                  {cap.category}
                </h3>
                <ul className="flex flex-col gap-4">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-body-sm">
                      <svg aria-hidden className="w-5 h-5 mt-0.5 shrink-0 text-[#1e90ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CtaSection heading="Ready to get automation that actually works?" />
    </>
  );
}
