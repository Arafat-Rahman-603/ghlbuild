import { comparisonRows } from "@/lib/content/ghl-setup";

function CheckYes() {
  return (
    <span className="check-yes" aria-label="Yes">
      <svg viewBox="0 0 10 8" fill="none" className="w-2.5 h-2 text-white" stroke="currentColor" strokeWidth="2">
        <path d="M1 4l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function CheckNo() {
  return (
    <span className="check-no" aria-label="No">
      <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="1.75">
        <path d="M3 11L11 3M3 3l8 8" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <CheckYes />;
  if (value === false) return <CheckNo />;
  return <span className="text-body-sm font-medium text-gray-600">{value}</span>;
}

export function ComparisonSection() {
  return (
    <section
      className="section-md bg-white border-b border-gray-200"
      aria-labelledby="comparison-heading"
    >
      <div className="container-page">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-4 block">The Difference</span>
          <h2 id="comparison-heading" className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight leading-[1.1]">
            DIY vs. generic setup vs. professional implementation.
          </h2>
        </div>

        {/* Premium responsive table wrapper */}
        <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] bg-white relative">
          <table className="w-full text-left" aria-label="Implementation approach comparison">
            <thead>
              <tr className="border-b border-gray-200">
                <th scope="col" className="p-6 lg:p-8 w-1/3 sm:w-auto text-lg font-bold text-ink-900 bg-gray-50/30">
                  Feature
                </th>
                <th scope="col" className="p-6 lg:p-8 text-sm font-bold uppercase tracking-widest text-gray-400 text-center bg-white">
                  DIY
                </th>
                <th scope="col" className="p-6 lg:p-8 text-sm font-bold uppercase tracking-widest text-gray-400 text-center bg-white border-l border-r border-gray-100">
                  Generic Setup
                </th>
                <th scope="col" className="p-6 lg:p-8 text-sm font-bold uppercase tracking-widest text-white text-center bg-ink-900 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#1e90ff]" />
                  Professional
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="hover:bg-gray-50/50 transition-colors">
                  <th scope="row" className="p-5 lg:p-6 text-sm font-bold text-ink-900 bg-gray-50/30">
                    {row.feature}
                  </th>
                  <td className="p-5 lg:p-6 text-center">
                    <CellValue value={row.diy} />
                  </td>
                  <td className="p-5 lg:p-6 text-center border-l border-r border-gray-100 bg-white">
                    <CellValue value={row.generic} />
                  </td>
                  <td className="p-5 lg:p-6 text-center bg-ink-900/5">
                    <CellValue value={row.professional} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
