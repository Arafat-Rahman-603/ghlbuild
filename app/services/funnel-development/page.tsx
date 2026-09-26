import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Funnel Development",
  description: "Landing pages, opt-in funnels, sales pages, and booking funnels built inside GoHighLevel and connected to your CRM and automation workflows.",
  alternates: { canonical: `${site.url}/services/funnel-development` },
};

export default function FunnelDevelopmentPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-surface relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/30 rounded-bl-[150px] -z-10 blur-3xl" />
        <div className="container-page">
          <div className="flex flex-col items-center">
            <h1 className="text-display max-w-4xl mb-6">
              Funnels built inside GHL — connected to your CRM from day one.
            </h1>
            <p className="text-body-lg max-w-2xl mb-10">
              Landing pages, opt-in funnels, appointment booking pages, and sales
              pages built inside GoHighLevel and integrated with your pipeline,
              automation workflows, and communication systems.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={site.cta.bookCall} className="btn btn-primary btn-lg group">
                <span>Book a Strategy Call</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/services" className="btn btn-outline btn-lg group">
                <span>All Services</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-md bg-surface">
        <div className="container-page">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="eyebrow mb-3 block">Capabilities</span>
            <h2 className="text-headline">
              What we build.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Lead Capture Funnels", desc: "Opt-in pages connected directly to your CRM — every lead captured, tagged, and entered into your follow-up workflow immediately." },
              { title: "Appointment Booking Pages", desc: "Booking pages integrated with your calendar, confirmation workflow, and CRM pipeline — structured to reduce friction and increase conversions." },
              { title: "Sales & VSL Pages", desc: "Sales pages and video sales letter pages built to move prospects from awareness to action, connected to your fulfillment and CRM workflow." },
              { title: "Multi-step Funnels", desc: "Multi-page funnels with step-specific logic, conditional paths, and automation triggers at each stage of the process." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-7 border border-neutral-200 shadow-sm hover:shadow-md hover:border-[#1e90ff]/30 transition-all duration-300 group">
                <h3 className="text-subtitle mb-4">{item.title}</h3>
                <p className="text-body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Build funnels that connect to your entire system." />
    </>
  );
}
