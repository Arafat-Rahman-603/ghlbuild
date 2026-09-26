import type { Metadata } from "next";
import { site } from "@/lib/content/site";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Tell us about your GoHighLevel implementation or automation project.`,
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/30 rounded-bl-[150px] -z-10 blur-3xl" />
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1e90ff] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Contact
            </span>
            <h1 className="text-display mb-6">
              Get in touch.
            </h1>
            <p className="text-body-lg mb-12 leading-relaxed max-w-xl">
              Tell us about your business and what you&apos;re trying to
              implement. We&apos;ll review your inquiry and follow up with next
              steps.
            </p>

            <div className="flex flex-col gap-8">
              {site.email && (
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-lg font-bold text-ink-900 hover:text-[#1e90ff] transition-colors"
                  >
                    {site.email}
                  </a>
                </div>
              )}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">Prefer to schedule?</p>
                <a
                  href={site.cta.bookCall}
                  className="text-lg font-bold text-[#1e90ff] hover:underline underline-offset-4"
                >
                  Book a strategy call →
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10" />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
