import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { industries } from "@/lib/content/industries";
import { CtaSection } from "@/components/sections/CtaSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: `GoHighLevel for ${industry.name}`,
    description: industry.description,
    alternates: { canonical: `${site.url}/industries/${slug}` },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <div className="container-page pt-5">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]} />
      </div>

      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-surface text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/30 rounded-bl-[150px] -z-10 blur-3xl" />
        <div className="container-page">
          <div className="flex flex-col items-center">
            <h1 className="text-display mb-6 max-w-4xl">
              GoHighLevel implementation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e90ff] to-cyan-500">{industry.name}</span>.
            </h1>
            <p className="text-body-lg max-w-2xl mb-10">{industry.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={site.cta.bookCall} className="btn btn-primary group">
                <span>Book a Strategy Call</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/services/gohighlevel-setup" className="btn btn-outline">
                GHL Setup Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-md bg-surface border-b border-gray-100">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-gray-200 shadow-xl group">
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                 alt={`${industry.name} Dashboard`}
                 className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div>
              <h2 className="text-headline mb-6">
                Purpose-built for {industry.name}.
              </h2>
              <div className="prose prose-lg text-gray-500 leading-relaxed mb-8">
                <p>
                  Generic CRM setups don&apos;t work for {industry.name.toLowerCase()}. 
                  You need pipelines that reflect your actual sales cycle, 
                  automations that speak your customers&apos; language, and 
                  reporting that tracks what actually matters to your bottom line.
                </p>
                <p className="mt-4">
                  We don&apos;t just hand you a template. We map your operational workflows, 
                  configure GoHighLevel to match them perfectly, and train your team 
                  to use the system effectively.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                 {[
                   "Done-for-you technical setup",
                   "Custom pipeline architecture",
                   "Automated follow-up sequences",
                   "Full team training & handover"
                 ].map(item => (
                   <li key={item} className="flex items-center gap-3 font-medium text-ink-900">
                     <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                       <svg className="w-3.5 h-3.5 text-[#1e90ff]" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2.5 7.5L5.5 10.5L11.5 3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                     </div>
                     {item}
                   </li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-md bg-white relative z-10">
        <div className="container-page">
          <div className="text-center mb-16">
            <h2 className="text-headline mb-4">Common workflows we configure.</h2>
            <p className="text-body-lg max-w-2xl mx-auto">These are the specialized systems we build directly into GoHighLevel for {industry.name} to eliminate manual tasks and drive revenue.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.workflows.map((wf, idx) => (
              <div key={wf} className="bg-surface rounded-xl p-7 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#1e90ff]/30 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#1e90ff] mb-6 group-hover:scale-110 group-hover:bg-[#1e90ff] group-hover:text-white transition-all duration-500">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" /><polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 className="text-subtitle mb-2 leading-snug relative z-10">{wf}</h3>
                
                <span className="absolute -bottom-4 -right-4 text-9xl font-black text-gray-50 opacity-[0.03] select-none group-hover:opacity-[0.05] transition-opacity duration-500">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading={`Ready to implement GoHighLevel for your ${industry.name.toLowerCase()} business?`} />
    </>
  );
}
