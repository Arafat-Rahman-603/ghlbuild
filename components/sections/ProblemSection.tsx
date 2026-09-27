import { ghlProblems } from "@/lib/content/ghl-setup";

export function ProblemSection() {
  const { heading, intro, problems } = ghlProblems;

  return (
    <section
      className="section-md bg-[#f8f8f6] border-b border-gray-200"
      aria-labelledby="problem-heading"
    >
      <div className="container-page">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-16">
          <div className="flex-1">
            <span className="eyebrow mb-4 block">The Challenge</span>
            <h2 id="problem-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight leading-[1.1] mb-6">
              {heading}
            </h2>
          </div>
          <div className="flex-1 md:pt-8">
            <p className="text-lg text-gray-500 leading-relaxed border-l-2 border-[#1e90ff] pl-6">
              {intro}
            </p>
          </div>
        </div>

        {/* Problem list — modernized sleek grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div
              key={problem.label}
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                <span className="text-lg font-bold text-red-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-xl font-bold text-ink-900 leading-snug mb-3 tracking-tight">
                {problem.label}
              </h3>

              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {problem.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
