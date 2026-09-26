import type { Metadata } from "next";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Process",
  description: `How ${site.name} implements GoHighLevel and automation systems — from discovery and scoping through implementation, testing, and post-launch support.`,
  alternates: { canonical: `${site.url}/process` },
};

const processSteps = [
  { num: "01", title: "Discovery", desc: "We map your business model, lead flow, sales process, communication requirements, and technical environment. This shapes everything that follows.", deliverable: "Business and workflow brief" },
  { num: "02", title: "Planning", desc: "Based on discovery, we define the exact scope of implementation — what gets built, what gets configured, what gets connected, and the timeline.", deliverable: "Implementation scope document" },
  { num: "03", title: "Configuration", desc: "We build your CRM structure, pipeline stages, contact fields, calendar and booking systems, and communication channels.", deliverable: "Working CRM and booking system" },
  { num: "04", title: "Automation", desc: "We build and configure your automation workflows — lead follow-up, appointment sequences, nurture, and review requests — all tested with real trigger conditions.", deliverable: "Active, tested workflows" },
  { num: "05", title: "Testing", desc: "End-to-end verification of every workflow, form, integration, and communication channel. We test what we build before we hand it over.", deliverable: "Verified, operational system" },
  { num: "06", title: "Launch", desc: "Structured go-live. We activate the system, verify everything is running correctly in production, and confirm all integrations are working.", deliverable: "Live operational system" },
  { num: "07", title: "Support", desc: "Post-launch support period for questions, adjustments, and refinements. We remain available as your team begins operating the system.", deliverable: "Ongoing support access" },
];

export default function ProcessPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-surface relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/30 rounded-bl-[150px] -z-10 blur-3xl" />
        <div className="container-page">
          <div className="flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1e90ff] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Our Process
            </span>
            <h1 className="text-display mb-6 max-w-4xl">
              A structured implementation methodology.
            </h1>
            <p className="text-body-lg max-w-2xl">
              Every engagement follows the same disciplined process — adapted
              to your business specifics, but executed with consistent
              structure to ensure nothing is missed.
            </p>
          </div>
        </div>
      </section>

      <section className="section-md bg-white border-b border-gray-100">
        <div className="container-narrow">
          <div className="flex flex-col gap-0 max-w-2xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={step.num}
                className={`relative pl-12 pb-14 ${index < processSteps.length - 1 ? "border-l-2 border-blue-100 ml-[15px]" : "ml-[15px]"}`}
              >
                {/* Dot */}
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-blue-50 border-2 border-[#1e90ff] flex items-center justify-center shadow-sm">
                  <span className="text-xs font-bold tabular-nums text-[#1e90ff]">{step.num}</span>
                </div>

                <div className="bg-surface rounded-[24px] p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  <h2 className="text-subtitle mb-3">{step.title}</h2>
                  <p className="text-[15px] leading-relaxed text-gray-500 mb-5">{step.desc}</p>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-2">
                    <svg aria-hidden className="w-3.5 h-3.5 shrink-0" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1.5 6l4 4 5-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Deliverable: {step.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Ready to start the implementation process?" />
    </>
  );
}
