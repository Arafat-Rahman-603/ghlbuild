import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { services } from "@/lib/content/services";
import { CtaSection } from "@/components/sections/CtaSection";
import { AnimatedStagger, AnimatedItem } from "@/components/ui/AnimatedStagger";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Services",
  description: `GoHighLevel setup, CRM implementation, workflow automation, funnel development, and integrations — professional implementation services by ${site.name}.`,
  alternates: { canonical: `${site.url}/services` },
};

function ServicesHero() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-surface relative overflow-hidden text-center">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/30 rounded-bl-[150px] -z-10 blur-3xl" />
      <div className="container-page">
        <AnimatedStagger className="flex flex-col items-center">
          <AnimatedItem>
            <h1 className="text-display max-w-4xl mb-6">
              Engineering your revenue systems.
            </h1>
          </AnimatedItem>
          <AnimatedItem>
            <p className="text-body-lg max-w-2xl text-center">
              We design, build, and deploy GoHighLevel environments tailored exactly to how you sell and deliver. No generic templates—just precise technical architecture.
            </p>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </section>
  );
}

function ProblemFraming() {
  return (
    <section className="section-md bg-white border-b border-gray-100">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
           <AnimatedStagger className="order-2 lg:order-1 relative rounded-xl overflow-hidden aspect-[4/3] border border-gray-200 bg-gray-50 shadow-xl group">
             <img 
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
               alt="System Dashboard"
               className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
             />
           </AnimatedStagger>
           <AnimatedStagger className="order-1 lg:order-2">
             <AnimatedItem>
               <h2 className="text-headline mb-6">
                 The problem with most GoHighLevel setups.
               </h2>
             </AnimatedItem>
             <AnimatedItem>
               <div className="prose prose-lg max-w-none text-gray-500 leading-relaxed space-y-6">
                 <p>GoHighLevel is arguably the most powerful marketing automation tool on the market. But power without structure leads to chaos.</p>
                 <p>Many businesses purchase GHL only to end up with a tangled mess of broken automations, disorganized pipelines, and a team that refuses to log in. They try to apply a &quot;$97 template&quot; to a complex B2B sales process, resulting in lost leads and operational friction.</p>
                 <p className="text-ink-900 font-medium">We solve the implementation gap. We act as your fractional systems engineering team, mapping the logic before we build the workflows.</p>
               </div>
             </AnimatedItem>
           </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}

function ServicesShowcase() {
  const images = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=1200",
  ];

  return (
    <section className="section-md bg-surface relative z-10" aria-labelledby="services-list-heading">
      <div className="container-page">
        <AnimatedStagger className="text-center mb-16">
          <AnimatedItem>
            <h2 id="services-list-heading" className="text-headline mb-4">
              Our implementation areas.
            </h2>
            <p className="text-body-lg max-w-2xl mx-auto">
              Every service is delivered as a structured project with defined scopes, rigid testing protocols, and complete team handover.
            </p>
          </AnimatedItem>
        </AnimatedStagger>
        
        <AnimatedStagger className="flex flex-col gap-12 lg:gap-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <AnimatedItem key={service.slug}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 group">
                  <div className={`grid lg:grid-cols-2 min-h-[440px]`}>
                    {/* Visual Area */}
                    <div className={`relative overflow-hidden ${isEven ? 'lg:order-2' : ''}`}>
                      <img 
                        src={images[index % images.length]} 
                        alt={service.title} 
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-[10s] ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Content Area */}
                    <div className="p-10 lg:p-16 flex flex-col justify-center bg-white relative">
                      <div className="flex flex-col gap-4 mb-8">
                        <span className="text-5xl font-bold tracking-tighter text-gray-100 select-none">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-3xl font-black text-ink-900 mb-2 group-hover:text-[#1e90ff] transition-colors tracking-tight">
                            {service.title}
                          </h3>
                          <p className="text-lg font-medium text-gray-900 mb-2">{service.tagline}</p>
                          <p className="text-gray-500 text-[15px] leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 text-[15px] font-bold text-ink-900 hover:text-[#1e90ff] transition-colors group/btn"
                          aria-label={`Learn about ${service.title}`}
                        >
                          Explore Implementation
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedStagger>
      </div>
    </section>
  );
}

function CapabilitiesAndIntegrations() {
  const capabilities = [
    "Advanced Pipeline Logic",
    "Multi-step Nurture Sequences",
    "Conditional Workflow Routing",
    "Custom Form & Calendar Builds",
    "Two-way SMS & Email Provisioning",
    "Lead Scoring Systems",
    "Payment Gateway Integrations",
    "Webhook & API Configurations"
  ];

  return (
    <section className="section-md bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedStagger>
            <AnimatedItem>
              <h2 className="text-headline mb-6">
                You can&apos;t run a business on a generic template.
              </h2>
              <p className="text-body-lg mb-8">
                Most GoHighLevel implementations fail because they attempt to force a company&apos;s unique operations into a one-size-fits-all snapshot.
              </p>
            </AnimatedItem>
            <AnimatedItem className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
               {capabilities.map((cap) => (
                 <div key={cap} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#1e90ff]" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2.5 7.5L5.5 10.5L11.5 3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span className="text-[15px] font-medium text-gray-700">{cap}</span>
                 </div>
               ))}
            </AnimatedItem>
          </AnimatedStagger>
          
          <AnimatedStagger className="relative rounded-xl overflow-hidden aspect-square border border-gray-200 shadow-xl group">
             <img 
               src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" 
               alt="Integrations"
               className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/40 to-transparent flex flex-col justify-end p-10">
               <h3 className="text-2xl font-bold text-white mb-2">Connected Ecosystem</h3>
               <p className="text-gray-200 text-sm">We don&apos;t just build inside GoHighLevel. We connect it to your broader ecosystem using webhooks, Make, Zapier, and native integrations.</p>
             </div>
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}

function ServiceFaq() {
  const faqs = [
    {
      question: "Do you offer ongoing management after implementation?",
      answer: "Yes. While our primary focus is the initial build and handover, we offer ongoing optimization and support retainers for clients who want us to continue refining their systems."
    },
    {
      question: "Will you train my team to use the new system?",
      answer: "Absolutely. Every implementation project concludes with a comprehensive handover phase, which includes live training sessions and recorded video SOPs for your team to reference."
    },
    {
      question: "Can you fix a GoHighLevel account that someone else built poorly?",
      answer: "Yes, we offer audit and restructuring services. We will map the current broken logic, identify the bottlenecks, and rebuild the ecosystem correctly without losing your historical data."
    },
    {
      question: "Do I need to buy GoHighLevel before hiring you?",
      answer: "No, we can help you select the right GoHighLevel plan during our strategy call and guide you through the initial account creation before we begin the technical setup."
    }
  ];

  return (
    <section className="section-md bg-surface border-b border-gray-100">
      <div className="container-narrow">
        <AnimatedStagger className="text-center mb-12">
          <AnimatedItem>
            <h2 className="text-headline mb-6">Questions about our services.</h2>
          </AnimatedItem>
        </AnimatedStagger>
        <div className="w-full">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ProblemFraming />
      <ServicesShowcase />
      <CapabilitiesAndIntegrations />
      <ServiceFaq />
      <CtaSection 
        heading="Ready to rebuild your systems?" 
        subheading="Book a discovery call to map out exactly what your business needs." 
      />
    </>
  );
}
