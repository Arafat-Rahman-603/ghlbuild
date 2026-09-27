import { ghlOutcome } from "@/lib/content/ghl-setup";

export function OutcomeSection() {
  const { heading, before, after } = ghlOutcome;

  return (
    <section
      className="section-md bg-white border-b border-gray-100"
      aria-labelledby="outcome-heading"
    >
      <div className="container-page">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="eyebrow mb-3 block">The Transformation</span>
          <h2 id="outcome-heading" className="text-headline">
            {heading}
          </h2>
        </div>

        {/* Before / After comparison */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          {/* Before */}
          <div className="p-10 lg:p-12 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
                Before implementation
              </span>
            </div>
            <ul className="flex flex-col gap-5 mt-auto">
              {before.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-4 text-gray-500 font-medium"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mt-0.5 shrink-0 text-gray-300"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M4 12L12 4M4 4l8 8"
                      strokeLinecap="round"
                    />
                  </svg>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="p-10 lg:p-12 bg-ink-900 rounded-xl shadow-2xl flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#1e90ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-white/50">
                After implementation
              </span>
            </div>
            <ul className="flex flex-col gap-5 mt-auto">
              {after.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-4 text-white/90 font-medium"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mt-0.5 shrink-0 text-[#1e90ff]"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      d="M2 8l5 5 7-9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
