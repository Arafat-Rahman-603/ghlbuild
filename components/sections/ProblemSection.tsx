import { ghlProblems } from "@/lib/content/ghl-setup";

export function ProblemSection() {
  const { heading, intro, problems } = ghlProblems;

  return (
    <section
      className="section-md bg-white"
      aria-labelledby="problem-heading"
    >
      <div className="container-page">
        <div className="mb-16 max-w-3xl">
          <h2 id="problem-heading" className="text-headline mb-6">
            {heading}
          </h2>
          <p className="text-body-lg leading-relaxed">{intro}</p>
        </div>

        {/* Problem list — modernized grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <div
              key={problem.label}
              className="bg-gray-50 border border-gray-100 rounded-xl p-8 hover:bg-white hover:shadow-xl hover:border-gray-200 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700" />
              {/* Number */}
              <span
                className="text-4xl font-black text-gray-200 mb-6 block group-hover:text-blue-100 transition-colors"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Label */}
              <h3 className="text-subtitle leading-snug mb-3">
                {problem.label}
              </h3>

              {/* Body */}
              <p className="text-gray-500 leading-relaxed">{problem.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
