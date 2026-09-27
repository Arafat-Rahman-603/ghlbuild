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
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-gray-200 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/20 rounded-bl-[150px] -z-10 blur-3xl" />
        
        <div className="container-page pt-6 pb-2 text-left">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Industries", href: "/industries" },
            { label: industry.name },
          ]} />
        </div>

        <div className="container-page pb-10 pt-6 md:pb-14 md:pt-8 lg:pb-16 lg:pt-10">
          <div className="flex flex-col items-center">
            <span className="eyebrow mb-5 block">Industry Specific Implementation</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 mb-6 max-w-4xl leading-[1.1]">
              GoHighLevel systems for <span className="text-[#1e90ff]">{industry.name}</span>.
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">{industry.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={site.cta.bookCall} className="btn btn-primary group">
                <span>Book a Strategy Call</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/services/gohighlevel-setup" className="btn btn-outline">
                View Setup Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHALLENGES SECTION */}
      <section className="section-md bg-[#f8f8f6] border-b border-gray-200">
        <div className="container-page">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900 mb-4">
              Generic software doesn&apos;t work for {industry.name.toLowerCase()}.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Most {industry.name.toLowerCase()} businesses fail with GoHighLevel because they try to fit their complex operations into basic, pre-built templates. You need a system mapped to your exact sales cycle.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Scattered Lead Data", desc: "Leads falling through the cracks because they are spread across emails, spreadsheets, and basic contact forms without a central CRM." },
              { title: "Manual Follow-Ups", desc: "Your sales team spending hours manually following up with prospects instead of focusing on high-value conversations and closing deals." },
              { title: "Inconsistent Reporting", desc: "No clear visibility into which marketing channels are actually driving revenue and where bottlenecks exist in your pipeline." }
            ].map((problem, i) => (
              <div key={problem.title} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                 <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-6">
                   <span className="text-lg font-bold text-red-500">{String(i + 1).padStart(2, '0')}</span>
                 </div>
                 <h3 className="text-xl font-bold text-ink-900 mb-3 tracking-tight">{problem.title}</h3>
                 <p className="text-gray-500 leading-relaxed text-sm md:text-base">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PURPOSE-BUILT SECTION */}
      <section className="section-md bg-white border-b border-gray-200">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl group border border-gray-100">
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                 alt={`${industry.name} Dashboard`}
                 className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
               />
               <div className="absolute inset-0 bg-blue-900/10 pointer-events-none mix-blend-multiply" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="eyebrow mb-4 block">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900 mb-6 leading-[1.1]">
                Purpose-built architecture for {industry.name}.
              </h2>
              <div className="prose prose-lg text-gray-500 leading-relaxed mb-8">
                <p>
                  We don&apos;t just hand you a template. We map your operational workflows, 
                  configure GoHighLevel to match them perfectly, and train your team 
                  to use the system effectively.
                </p>
                <p>
                  By understanding the nuances of the {industry.name.toLowerCase()} space, we build pipelines that reflect your actual sales cycle and automations that speak your customers&apos; language.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                 {[
                   "Done-for-you technical setup & migration",
                   "Custom pipeline & custom field architecture",
                   "Automated conditional logic sequences",
                   "Full team training & technical handover"
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

      {/* 4. WORKFLOWS SECTION */}
      <section className="section-md bg-[#f8f8f6] border-b border-gray-200">
        <div className="container-page">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="eyebrow mb-4 block">Core Automations</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900 mb-4">Common workflows we configure.</h2>
            <p className="text-lg text-gray-500 leading-relaxed">These are the specialized systems we build directly into GoHighLevel for {industry.name} to eliminate manual tasks and drive scalable revenue.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.workflows.map((wf, idx) => (
              <div key={wf} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between h-full min-h-[200px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex justify-between items-start mb-6 w-full">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm flex items-center justify-center text-[#1e90ff] group-hover:scale-110 group-hover:bg-[#1e90ff] group-hover:text-white transition-all duration-500">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" /><polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <span className="text-5xl font-black text-gray-100/60 select-none pointer-events-none group-hover:text-blue-100 transition-colors duration-500 tracking-tighter">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-ink-900 leading-snug relative z-10 pr-2">{wf}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <CtaSection 
        heading={`Ready to implement GoHighLevel for your ${industry.name.toLowerCase()} business?`} 
        subheading="Book a call to discuss your exact operational bottlenecks and how we can architect a system to solve them."
      />
    </>
  );
}
