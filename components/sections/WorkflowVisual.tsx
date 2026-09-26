const WORKFLOW_STEPS = [
  {
    id: "trigger",
    label: "Trigger",
    title: "New Lead Submitted",
    detail: "Form, ad, or API",
    type: "trigger",
  },
  {
    id: "condition",
    label: "Condition",
    title: "Lead Source Check",
    detail: "Route by source type",
    type: "condition",
  },
  {
    id: "sms",
    label: "Action",
    title: "Send SMS — Instant",
    detail: "Personalized response within 60s",
    type: "action",
  },
  {
    id: "email",
    label: "Action",
    title: "Send Email — Follow-up",
    detail: "Next business day",
    type: "action",
  },
  {
    id: "wait",
    label: "Wait",
    title: "Wait 48h",
    detail: "If no reply",
    type: "wait",
  },
  {
    id: "booking",
    label: "Action",
    title: "Send Booking Link",
    detail: "Calendar invite prompt",
    type: "action",
  },
  {
    id: "end",
    label: "End / Branch",
    title: "Tag and Move Stage",
    detail: "Based on response",
    type: "end",
  },
];

const typeStyles: Record<string, string> = {
  trigger: "border-l-2 border-l-blue-400 bg-blue-50/60",
  condition: "border-l-2 border-l-amber-400 bg-amber-50/60",
  action: "border-l-2 border-l-ink-900 bg-white",
  wait: "border-l-2 border-l-gray-300 bg-gray-50",
  end: "border-l-2 border-l-green-400 bg-green-50/60",
};

const labelColors: Record<string, string> = {
  trigger: "text-blue-600",
  condition: "text-amber-600",
  action: "text-ink-900",
  wait: "text-gray-500",
  end: "text-green-600",
};

export function WorkflowVisual() {
  return (
    <section
      className="section-md bg-white border-b border-gray-100 overflow-hidden"
      aria-labelledby="workflow-heading"
    >
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <div>
            <span className="eyebrow mb-3 block">Automation Architecture</span>
            <h2 id="workflow-heading" className="text-headline mb-8">
              Automation that runs your follow-up process reliably.
            </h2>
            <ul className="flex flex-col gap-5">
              {[
                "Lead follow-up within minutes, not days",
                "Conditional routing based on source and response",
                "Multi-channel sequences across SMS and email",
                "Appointment booking integrated into the flow",
                "Stage updates and tagging automated",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-gray-600 font-medium text-lg"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 mt-0.5 shrink-0 text-[#1e90ff]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: premium workflow diagram */}
          <div
            role="img"
            aria-label="Fictional automation workflow diagram showing lead follow-up steps"
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-3xl -z-10" />
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xl relative">
              {/* Toolbar */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50 animate-pulse" />
                  <span className="text-sm font-bold text-ink-900 uppercase tracking-widest">
                    Lead Follow-up Workflow
                  </span>
                </div>
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold uppercase tracking-widest">
                  Live
                </span>
              </div>

              {/* Nodes */}
              <div className="p-8 flex flex-col gap-0 max-h-[500px] overflow-y-auto custom-scrollbar">
                {WORKFLOW_STEPS.map((step, index) => (
                  <div key={step.id} className="relative group">
                    {/* Node */}
                    <div
                      className={`relative z-10 rounded-2xl border border-gray-200 p-5 flex items-center gap-5 transition-all duration-300 hover:shadow-lg bg-white overflow-hidden`}
                    >
                      {/* Left color bar */}
                      <div className={`absolute left-0 top-0 bottom-0 w-2 ${typeStyles[step.type].split(' ')[0]}`} />
                      
                      {/* Label badge */}
                      <span
                        className={`text-[10px] font-black uppercase tracking-widest shrink-0 w-24 text-right ${labelColors[step.type]}`}
                      >
                        {step.label}
                      </span>
                      
                      <div className="w-px h-10 bg-gray-100 shrink-0 mx-2" />
                      
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-ink-900 mb-1">
                          {step.title}
                        </p>
                        <p className="text-xs text-gray-500 font-medium">
                          {step.detail}
                        </p>
                      </div>
                    </div>

                    {/* Connector */}
                    {index < WORKFLOW_STEPS.length - 1 && (
                      <div className="flex items-center justify-center h-10 relative">
                        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-200 group-hover:bg-blue-200 transition-colors" aria-hidden="true" />
                        <svg
                          aria-hidden="true"
                          className="absolute bottom-0 text-gray-300 group-hover:text-blue-300 transition-colors w-3 h-3 translate-y-1"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 21l-12-18h24z" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm font-medium text-center text-gray-400">
              Fictional demonstration — illustrative of a typical workflow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
