import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Blog",
  description: `Guides and insights on GoHighLevel implementation, CRM configuration, and business automation from ${site.name}.`,
  alternates: { canonical: `${site.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-surface relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/30 rounded-bl-[150px] -z-10 blur-3xl" />
        <div className="container-page">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1e90ff] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Blog
            </span>
            <h1 className="text-display mb-6 max-w-4xl">
              Implementation guides & insights.
            </h1>
            <p className="text-body-lg max-w-2xl">
              Practical content on GoHighLevel implementation, CRM
              configuration, workflow automation, and business operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-md bg-white border-b border-gray-100">
        <div className="container-page">
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center bg-surface">
            <p className="text-lg font-semibold text-ink-900 mb-2">Articles coming soon.</p>
            <p className="text-body-sm max-w-md mx-auto leading-relaxed">
              We&apos;re publishing guides on GoHighLevel setup, automation
              configuration, and business operations. Subscribe to be notified
              when articles are published.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <Link href="/contact" className="btn btn-outline">Get notified</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
