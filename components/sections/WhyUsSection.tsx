import { ghlWhyUs } from "@/lib/content/ghl-setup";

export function WhyUsSection() {
  return (
    <section
      className="section-md bg-white border-b border-gray-100"
      aria-labelledby="why-us-heading"
    >
      <div className="container-page">
        <div className="mb-16 max-w-3xl">
          <span className="eyebrow mb-3 block">Why Work With Us</span>
          <h2 id="why-us-heading" className="text-headline mb-6">
            Implementation quality that your business can depend on.
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {ghlWhyUs.map((item) => (
            <div key={item.title} className="bg-surface p-10 lg:p-12 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-500 group flex flex-col items-start">
              <div
                className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-8 text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-all duration-500"
                aria-hidden="true"
              >
                <svg
                  className="w-8 h-8 transition-colors duration-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-subtitle mb-4">{item.title}</h3>
              <p className="text-body-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
