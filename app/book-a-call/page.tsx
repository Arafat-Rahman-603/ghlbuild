import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description: `Schedule a strategy call with ${site.name}. We'll review your GoHighLevel setup needs and outline a clear implementation plan.`,
  alternates: { canonical: `${site.url}/book-a-call` },
};

const whatToExpect = [
  { title: "Business overview", desc: "We'll map your lead flow, sales process, and current operational setup." },
  { title: "Implementation scope", desc: "Define what needs to be built, configured, or fixed — and in what priority." },
  { title: "Technical requirements", desc: "Identify integrations, communication channels, and platform dependencies." },
  { title: "Clear next steps", desc: "You'll leave with a clear understanding of what implementation looks like for your business." },
];

export default function BookACallPage() {
  return (
    <div className="pt-20 pb-16 md:pt-32 md:pb-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/30 rounded-bl-[150px] -z-10 blur-3xl" />
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <h1 className="text-display mb-6">
              Book a strategy call.
            </h1>
            <p className="text-body-lg mb-12 leading-relaxed">
              A focused call to understand your business, identify what needs
              to be implemented, and outline a clear plan. No commitment
              required.
            </p>

            <div className="flex flex-col gap-6">
              <h2 className="text-subtitle">What we cover on the call.</h2>
              <div className="space-y-6">
                {whatToExpect.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1e90ff]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink-900 mb-1">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: booking area */}
          <div>
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10" />
              <h2 className="text-subtitle mb-3">Schedule your call.</h2>
              <p className="text-gray-500 mb-8">
                Select a time below to book directly into our calendar, or
                contact us by email if you have questions first.
              </p>

              {/* LeadConnector Booking Integration */}
              <div className="w-full overflow-hidden mb-8 rounded-[24px] border border-gray-100 bg-gray-50/50">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/DbOkfvXLIusWWUTgIxMK"
                  style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "650px" }}
                  scrolling="no"
                  id="DbOkfvXLIusWWUTgIxMK_1788670427688"
                />
                <Script
                  src="https://api.leadconnectorhq.com/js/form_embed.js"
                  strategy="lazyOnload"
                />
              </div>

              <div className="flex flex-col gap-3">
                <Link href={site.cta.contact} className="btn btn-outline btn-lg w-full justify-center">
                  Contact by email instead
                </Link>
                {site.email && (
                  <p className="text-center text-sm font-medium text-gray-500 mt-2">
                    Or email us directly at{" "}
                    <a href={`mailto:${site.email}`} className="text-[#1e90ff] hover:underline underline-offset-4">
                      {site.email}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
