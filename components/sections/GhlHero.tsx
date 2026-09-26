import Link from "next/link";
import { ghlSetupHero } from "@/lib/content/ghl-setup";

// Fictional CRM UI Composition — not the actual GoHighLevel interface
function CrmDashboardVisual() {
  const pipelineStages = [
    { name: "New Lead", count: 8, value: "$24,400" },
    { name: "Contacted", count: 5, value: "$18,200" },
    { name: "Proposal Sent", count: 3, value: "$31,500" },
    { name: "Closed Won", count: 2, value: "$14,800" },
  ];

  const recentContacts = [
    { initials: "MR", name: "Marcus Reed", stage: "New Lead", time: "2m ago", status: "new" },
    { initials: "SL", name: "Sarah Liu", stage: "Proposal Sent", time: "14m ago", status: "active" },
    { initials: "DK", name: "Daniel Kim", stage: "Contacted", time: "1h ago", status: "active" },
    { initials: "AP", name: "Alicia Park", stage: "Closed Won", time: "3h ago", status: "won" },
  ];

  return (
    <div
      className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden"
      aria-label="Fictional CRM interface demonstration"
      role="img"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-gray-200 bg-gray-50">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        <div className="flex-1 mx-4 bg-white border border-gray-200 rounded-md px-2 py-0.5 text-xs text-gray-400 font-mono">
          crm.example.com/pipeline
        </div>
      </div>

      {/* Topbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-ink-900">Sales Pipeline</span>
          <span className="text-xs text-[#6B7280] font-medium">
            Q3 Active
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">18 contacts</span>
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-xs text-green-600 font-medium">Live</span>
        </div>
      </div>

      {/* Pipeline stages */}
      <div className="grid grid-cols-4 divide-x divide-gray-100">
        {pipelineStages.map((stage) => (
          <div key={stage.name} className="p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
              {stage.name}
            </p>
            <p className="text-lg font-bold text-ink-900 leading-none mb-0.5">
              {stage.count}
            </p>
            <p className="text-[11px] text-gray-400">{stage.value}</p>
          </div>
        ))}
      </div>

      {/* Contact list */}
      <div className="border-t border-gray-100">
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
            Recent activity
          </span>
        </div>
        {recentContacts.map((contact, i) => (
          <div
            key={contact.name}
            className={`flex items-center gap-3 px-4 py-2.5 ${i < recentContacts.length - 1 ? "border-b border-gray-50" : ""}`}
          >
            <div
              className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500 shrink-0"
              aria-hidden="true"
            >
              {contact.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-ink-900 truncate">
                {contact.name}
              </p>
              <p className="text-[10px] text-gray-400">{contact.stage}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  contact.status === "won"
                    ? "bg-green-400"
                    : contact.status === "new"
                    ? "bg-blue-400"
                    : "bg-amber-400"
                }`}
              />
              <span className="text-[10px] text-gray-400">{contact.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer status */}
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
        <svg className="w-3 h-3 text-green-500" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          <circle cx="6" cy="6" r="6" />
        </svg>
        <span className="text-[10px] text-gray-500">
          3 automations running · Last synced 47s ago
        </span>
      </div>
    </div>
  );
}

export function GhlHero() {
  const { eyebrow, headline, subheadline, primaryCta, secondaryCta, trustIndicators } = ghlSetupHero;

  return (
    <section
      className="pt-16 pb-16 md:pt-24 md:pb-24 bg-white relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 rounded-bl-[120px] -z-10" />
      <div className="container-page">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <div>
            <h1
              id="hero-heading"
              className="text-display mb-6"
            >
              {headline}
            </h1>
            <p className="text-body-lg mb-10 leading-relaxed max-w-2xl">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link href={primaryCta.href} className="btn btn-primary btn-lg group">
                <span>{primaryCta.label}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link href={secondaryCta.href} className="btn btn-outline btn-lg group">
                <span>{secondaryCta.label}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8 border-t border-gray-100">
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 text-[#1e90ff]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="eyebrow text-gray-900">Trusted Implementation Partner</span>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
              
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {trustIndicators.slice(0, 3).map((indicator) => (
                  <div
                    key={indicator}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-600"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-[#1e90ff]"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path d="M2 7l4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {indicator}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: product visual */}
          <div className="relative">
             <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-2xl relative group bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                  alt="GoHighLevel System Architecture"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
