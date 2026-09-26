import { ghlConfigCategories } from "@/lib/content/ghl-setup";

export function ConfigSection() {
  return (
    <section
      className="section-md bg-white border-b border-gray-100"
      aria-labelledby="config-heading"
      id="configuration"
    >
      <div className="container-page">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-3 block">What Gets Built</span>
          <h2 id="config-heading" className="text-headline">
            Every system configured, tested, and documented.
          </h2>
        </div>

        {/* Premium grid of categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ghlConfigCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl p-8 lg:p-10 border border-gray-200 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 h-full flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-subtitle mb-6 pb-4 border-b border-gray-100 group-hover:border-blue-100 transition-colors">
                {category.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-500 font-medium"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 mt-0.5 shrink-0 text-[#1e90ff]"
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
          ))}
        </div>
      </div>
    </section>
  );
}
