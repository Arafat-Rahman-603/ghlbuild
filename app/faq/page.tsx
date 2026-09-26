import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { faqData } from "@/lib/content/solutions";
import { Accordion } from "@/components/ui/Accordion";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Common questions about GoHighLevel implementation, automation, integrations, and working with ${site.name}.`,
  alternates: { canonical: `${site.url}/faq` },
};

export default function FaqPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-surface relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/30 rounded-bl-[150px] -z-10 blur-3xl" />
        <div className="container-page">
          <div className="flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1e90ff] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              FAQ
            </span>
            <h1 className="text-display mb-6 max-w-4xl">
              Frequently asked questions.
            </h1>
            <p className="text-body-lg max-w-2xl">
              Common questions about our services, process, and how GoHighLevel
              implementation works. If your question isn&apos;t here,{" "}
              <Link href="/contact" className="text-[#1e90ff] hover:underline underline-offset-4 font-semibold">
                get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-md bg-surface">
        <div className="container-page">
          <div className="max-w-3xl mx-auto flex flex-col gap-12">
            {faqData.map((group) => (
              <div key={group.category}>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4 pb-3 border-b border-gray-200">
                  {group.category}
                </h2>
                <Accordion items={group.questions} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Still have questions?" subheading="Book a strategy call and we'll answer everything specific to your situation." />
    </>
  );
}
