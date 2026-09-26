"use client";

import { useState } from "react";

const STAGES = [
  {
    id: "new",
    name: "New Lead",
    color: "#1b6ef3",
    contacts: [
      { initials: "MR", name: "Marcus Reed", company: "Reed HVAC", value: "$4,200", date: "Today" },
      { initials: "JH", name: "Jennifer Hayes", company: "Hayes Realty", value: "$8,800", date: "Today" },
      { initials: "CP", name: "Chris Park", company: "Park Law Firm", value: "$3,400", date: "Yesterday" },
    ],
  },
  {
    id: "contacted",
    name: "Contacted",
    color: "#f59e0b",
    contacts: [
      { initials: "AL", name: "Amanda Liu", company: "Liu Consulting", value: "$6,100", date: "Mon" },
      { initials: "TM", name: "Tom Mitchell", company: "Mitchell Plumb.", value: "$2,900", date: "Mon" },
    ],
  },
  {
    id: "proposal",
    name: "Proposal",
    color: "#8b5cf6",
    contacts: [
      { initials: "RG", name: "Rachel Green", company: "Green Dental", value: "$12,500", date: "Fri" },
      { initials: "NK", name: "Noah Kim", company: "Kim Agency", value: "$9,200", date: "Fri" },
    ],
  },
  {
    id: "won",
    name: "Won",
    color: "#10b981",
    contacts: [
      { initials: "EW", name: "Emma Wilson", company: "Wilson Realty", value: "$14,800", date: "Jun 12" },
    ],
  },
];

export function PipelineVisual() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section
      className="section-md bg-surface overflow-hidden"
      aria-labelledby="pipeline-heading"
    >
      <div className="container-page">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow mb-3 block">CRM Pipeline</span>
          <h2 id="pipeline-heading" className="text-headline">
            A pipeline that maps to your actual sales process.
          </h2>
        </div>

        {/* Premium Pipeline UI */}
        <div
          className="rounded-xl border border-gray-200 shadow-xl bg-white overflow-hidden p-6 lg:p-10"
          role="img"
          aria-label="Fictional CRM pipeline interface showing contact stages"
        >
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-subtitle">Sales Pipeline</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">Q3 2024</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-500">8 active deals</span>
              <span className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-bold shadow-sm">
                $47,100 pipeline
              </span>
            </div>
          </div>

          {/* Kanban columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAGES.map((stage) => (
              <div key={stage.id} className="flex flex-col gap-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                {/* Stage header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full shadow-sm"
                      style={{ backgroundColor: stage.color }}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-bold text-ink-900 uppercase tracking-wider">
                      {stage.name}
                    </span>
                  </div>
                  <span className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 shadow-sm">
                    {stage.contacts.length}
                  </span>
                </div>

                {/* Cards */}
                {stage.contacts.map((contact) => {
                  const cardId = `${stage.id}-${contact.name}`;
                  const isActive = activeCard === cardId;
                  return (
                    <button
                      key={contact.name}
                      onClick={() => setActiveCard(isActive ? null : cardId)}
                      aria-pressed={isActive}
                      className={`text-left w-full rounded-xl p-4 transition-all duration-300 cursor-pointer shadow-sm relative overflow-hidden group ${
                        isActive
                          ? "bg-white shadow-md scale-[1.02]"
                          : "bg-white hover:shadow-md hover:scale-[1.02]"
                      }`}
                      style={{ borderLeft: `4px solid ${stage.color}` }}
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                          {contact.initials}
                        </span>
                        <div>
                          <span className="text-[13px] font-bold text-ink-900 block leading-tight">
                            {contact.name}
                          </span>
                          <span className="text-[11px] text-gray-500 font-medium">
                            {contact.company}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                        <span className="text-sm font-black text-ink-900">
                          {contact.value}
                        </span>
                        <span className="text-[11px] font-semibold text-gray-400 flex items-center gap-1">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                          {contact.date}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm font-medium text-center text-gray-400">
          Fictional demonstration — illustrative of a typical implementation
        </p>
      </div>
    </section>
  );
}
