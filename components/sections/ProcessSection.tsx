import { ghlProcess } from "@/lib/content/ghl-setup";

export function ProcessSection() {
  return (
    <section
      className="py-24 md:py-32 bg-surface overflow-hidden"
      aria-labelledby="process-heading"
      id="process"
    >
      <div className="container-page">
        {/* Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-3 block">Our Process</span>
          <h2
            id="process-heading"
            className="text-headline"
          >
            How we work with you
          </h2>
        </div>

        {/* Process List */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[39px] md:left-[47px] top-4 bottom-4 w-1 bg-gradient-to-b from-blue-100 via-[#1e90ff] to-blue-100 rounded-full" />
          <div className="flex flex-col gap-12">
            {ghlProcess.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex items-start gap-8 md:gap-12 group"
              >
                {/* Number Indicator */}
                <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-gray-100 shadow-xl flex items-center justify-center shrink-0 group-hover:border-[#1e90ff] transition-colors duration-500">
                  <span className="text-2xl md:text-3xl font-black text-[#1e90ff]">
                    {step.number}
                  </span>
                </div>
                
                {/* Content Card */}
                <div className="flex-1 bg-white p-8 md:p-10 rounded-xl border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:border-blue-100 transition-all duration-500">
                  <span className="eyebrow mb-2 block">Phase 0{idx + 1}</span>
                  <h3 className="text-subtitle mb-4">
                    {step.title}
                  </h3>
                  <p className="text-body-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
