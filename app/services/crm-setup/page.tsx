import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "CRM Setup & Configuration",
  description: "CRM setup inside GoHighLevel: custom pipeline stages, contact fields, lead tracking, and opportunity management configured to match your real sales process.",
  alternates: { canonical: `${site.url}/services/crm-setup` },
};

export default function CrmSetupPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-surface relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/30 rounded-bl-[150px] -z-10 blur-3xl" />
        <div className="container-page">
          <div className="flex flex-col items-center">
            <h1 className="text-display max-w-4xl mb-6">
              Configuration matched to your exact sales process.
            </h1>
            <p className="text-body-lg max-w-2xl mb-10">
              Pipeline stages, custom fields, smart lists, and opportunity routing
              built to reflect how your team actually works, rather than forcing
              your team into a generic template.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={site.cta.bookCall} className="btn btn-primary btn-lg group">
                <span>Book a Strategy Call</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/services" className="btn btn-outline btn-lg group">
                <span>All Services</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-md bg-surface">
        <div className="container-page">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="eyebrow mb-3 block">Capabilities</span>
            <h2 className="text-headline">
              What gets configured.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Pipeline Stages", items: ["Custom stage names and order", "Stage probability settings", "Automated task triggers per stage", "Stage-based workflow triggers"] },
              { title: "Contact Fields", items: ["Custom field configuration", "Required field validation", "Field group organization", "Lead source tracking fields"] },
              { title: "Opportunity Management", items: ["Opportunity value configuration", "Close date tracking", "Win/loss tracking", "Pipeline value reporting"] },
              { title: "Lead Tracking", items: ["Source attribution setup", "UTM parameter capture", "Form-to-CRM connection", "Lead routing logic"] },
              { title: "Views & Filtering", items: ["Custom list views", "Pipeline filters", "Team member assignment", "Contact segmentation"] },
              { title: "Documentation", items: ["Pipeline structure documentation", "Field reference guide", "Team walkthrough", "Post-launch support"] },
            ].map((cat) => (
              <div key={cat.title} className="bg-white rounded-xl p-7 border border-neutral-200 shadow-sm hover:shadow-md hover:border-[#1e90ff]/30 transition-all duration-300 h-full flex flex-col group">
                <h3 className="text-subtitle mb-5 pb-4 border-b border-gray-100 group-hover:border-blue-100 transition-colors">
                  {cat.title}
                </h3>
                <ul className="flex flex-col gap-4">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-body-sm">
                      <svg aria-hidden className="w-5 h-5 mt-0.5 shrink-0 text-[#1e90ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Build a CRM your team will actually use." />
    </>
  );
}
