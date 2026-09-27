import type { Metadata } from "next";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";
import { AnimatedStagger, AnimatedItem } from "@/components/ui/AnimatedStagger";
import { CheckCircle2, Target, Lightbulb, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} implements GoHighLevel and business automation systems for companies that want operational processes, not just software.`,
  alternates: { canonical: `${site.url}/about` },
};

// 1. ABOUT HERO
function AboutHero() {
  return (
    <section className="section-md bg-[#f8f8f6] relative overflow-hidden text-center border-b border-gray-200">
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/30 rounded-bl-[150px] -z-10 blur-3xl" />
      <div className="container-page">
        <AnimatedStagger className="max-w-5xl mx-auto flex flex-col items-center">
          <AnimatedItem>
            <h1 className="text-display mb-8 max-w-[1100px] mx-auto text-center">
              We implement systems that businesses can actually operate.
            </h1>
          </AnimatedItem>
          <AnimatedItem>
            <p className="text-body-lg max-w-2xl">
              {site.name} is a specialized GoHighLevel implementation and business automation agency. We bridge the gap between powerful software capabilities and the operational realities of scaling businesses.
            </p>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 2. WHO WE ARE
function WhoWeAre() {
  return (
    <section className="section-md bg-white border-b border-gray-200">
      <div className="container-page">
        <AnimatedStagger className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <AnimatedItem>
            <div className="bg-white p-10 rounded-xl border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
              <span className="eyebrow mb-3 block">01 / Focus</span>
              <h3 className="text-subtitle mb-4">What We Do</h3>
              <p className="text-body-sm">We architect, build, and deploy custom GoHighLevel CRM instances, marketing funnels, and complex workflow automations tailored to specific business operations.</p>
            </div>
          </AnimatedItem>
          <AnimatedItem>
            <div className="bg-white p-10 rounded-xl border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
              <span className="eyebrow mb-3 block">02 / Clients</span>
              <h3 className="text-subtitle mb-4">Who We Serve</h3>
              <p className="text-body-sm">We partner with B2B service providers, agencies, and high-ticket coaching businesses that have outgrown manual processes and need a reliable software ecosystem.</p>
            </div>
          </AnimatedItem>
          <AnimatedItem>
            <div className="bg-[#1e90ff] p-10 rounded-xl border border-blue-500 shadow-xl hover:-translate-y-2 transition-all duration-500 h-full text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -z-10" />
              <span className="eyebrow mb-3 block text-blue-100">03 / Value</span>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Our Difference</h3>
              <p className="text-[15px] text-blue-50 leading-relaxed">We don&apos;t sell generic templates. We act as your fractional systems engineering team, testing every automation before handover to ensure your team will actually adopt it.</p>
            </div>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 3. OUR STORY
function OurStory() {
  return (
    <section className="section-md bg-[#f8f8f6] border-b border-gray-200">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <AnimatedStagger>
            <AnimatedItem>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight mb-8 leading-[1.1]">
                Software is only as good as its implementation.
              </h2>
            </AnimatedItem>
            <AnimatedItem>
              <div className="prose prose-lg max-w-none text-gray-500 leading-relaxed space-y-6">
                <p>
                  Most businesses don&apos;t fail at GoHighLevel because the software lacks features. They fail because the system was never configured to match how their business actually operates in the real world.
                </p>
                <p>
                  We started {site.name} after watching countless companies purchase premium software, only to abandon it months later because the setup was too complex, the workflows were generic templates, and their team fundamentally refused to adopt it.
                </p>
                <div className="p-6 bg-blue-50/50 rounded-2xl border-l-4 border-[#1e90ff]">
                  <p className="text-ink-900 font-medium m-0">
                    We realized that companies didn&apos;t need another SaaS subscription—they needed an implementation partner. Someone to map the actual sales process, design the logic, build the pipelines, write the automations, and rigorously test everything.
                  </p>
                </div>
              </div>
            </AnimatedItem>
          </AnimatedStagger>
          <AnimatedStagger className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-gray-100 shadow-2xl group">
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
               alt="Team collaborating"
               className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="section-md bg-white border-b border-gray-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Image Side */}
          <AnimatedStagger className="relative w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl group border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
              alt="Team strategy session"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-blue-900/10 pointer-events-none mix-blend-multiply" />
          </AnimatedStagger>

          {/* Content Side */}
          <div className="flex flex-col justify-center gap-6">
            <AnimatedStagger>
              <AnimatedItem>
                <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="eyebrow mb-4 block">Our Mission</span>
                  <h2 className="text-2xl font-bold text-ink-900 leading-relaxed tracking-tight">
                    To eliminate operational friction for scaling businesses through precise, reliable automation.
                  </h2>
                </div>
              </AnimatedItem>
            </AnimatedStagger>

            <AnimatedStagger>
              <AnimatedItem>
                <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="eyebrow mb-4 block">Our Vision</span>
                  <h2 className="text-2xl font-bold text-ink-900 leading-relaxed tracking-tight">
                    A future where business owners focus purely on strategy, while connected systems handle the rest.
                  </h2>
                </div>
              </AnimatedItem>
            </AnimatedStagger>
          </div>

        </div>
      </div>
    </section>
  );
}

// 6 & 7. PHILOSOPHY & VALUES
function PhilosophyAndValues() {
  const values = [
    {
      title: "Business-First Configuration",
      icon: Target,
      body: "We never force your operations into a pre-built box. Every pipeline, workflow, and automation is built around how your business actually operates.",
      behavior: "We spend time mapping your physical processes before touching a single line of logic."
    },
    {
      title: "Tested Before Handover",
      icon: Shield,
      body: "An automation that misfires is worse than no automation at all. We don't hand over systems we haven't confirmed work end-to-end.",
      behavior: "We run dummy leads through every stage of your pipeline to verify conditional logic."
    },
    {
      title: "Documentation Built-In",
      icon: Lightbulb,
      body: "A system that can't be understood by the team that operates it isn't complete. Clear handover and training is built into every engagement.",
      behavior: "We record customized video walkthroughs of your specific instance, not generic GHL tutorials."
    },
    {
      title: "Long-Term Reliability",
      icon: CheckCircle2,
      body: "Going live is the start of the relationship. Every implementation focuses on sustainable architecture that won't break as you scale.",
      behavior: "We use standardized naming conventions and folder structures so the system remains clean."
    }
  ];

  return (
    <section className="section-md bg-[#f8f8f6] border-b border-gray-200">
      <div className="container-page">
        <AnimatedStagger className="mb-14 text-center max-w-3xl mx-auto">
          <AnimatedItem>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-4">What we believe about systems.</h2>
            <p className="text-lg text-gray-500 leading-relaxed">The core principles that guide how we architect, build, and deliver every GoHighLevel ecosystem.</p>
          </AnimatedItem>
        </AnimatedStagger>

        <AnimatedStagger className="grid md:grid-cols-2 gap-6 lg:gap-8 w-full">
          {values.map((val) => (
            <AnimatedItem key={val.title} className="h-full">
              <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 h-full flex flex-col group">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#1e90ff] mb-6 group-hover:scale-110 group-hover:bg-[#1e90ff] group-hover:text-white transition-all duration-500">
                  <val.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-ink-900 mb-3">{val.title}</h3>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">{val.body}</p>
                <div className="pt-8 border-t border-gray-100 mt-auto">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1e90ff] block mb-2">In Practice:</span>
                  <p className="text-[15px] font-medium text-ink-900 italic">&quot;{val.behavior}&quot;</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 8. EXPERTISE
function Expertise() {
  const areas = [
    "GoHighLevel Architecture",
    "CRM Data Structuring",
    "Complex Workflow Automation",
    "Sales Funnel Engineering",
    "Lead Routing & Management",
    "Third-Party API Integrations",
    "AI Automation & Chatbots",
    "Business Systems Analysis",
    "Conversion Tracking & Reporting"
  ];

  return (
    <section className="section-md bg-white border-b border-gray-200">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
          <AnimatedStagger>
            <AnimatedItem>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900 mb-4">Our specialized expertise.</h2>
              <p className="text-body-lg">We focus exclusively on the technical implementation of revenue-generating systems.</p>
            </AnimatedItem>
          </AnimatedStagger>
          <AnimatedStagger className="flex flex-wrap gap-3 lg:gap-4">
            {areas.map((area) => (
              <AnimatedItem key={area}>
                <span className="inline-block px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-body-sm font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-100 transition-colors cursor-default">
                  {area}
                </span>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}

// 9. HOW WE WORK
function HowWeWork() {
  const steps = [
    { name: "Discover", desc: "We audit your current tech stack and map your physical business processes to identify gaps." },
    { name: "Strategize", desc: "We design the system architecture, defining custom fields, pipeline stages, and automation logic." },
    { name: "Build", desc: "We configure the CRM, build the workflows, and establish integrations inside GoHighLevel." },
    { name: "Integrate", desc: "We connect external tools, authenticate domains, and ensure data flows seamlessly." },
    { name: "Launch", desc: "We run live tests, train your team, and officially transition operations to the new system." },
    { name: "Optimize", desc: "We monitor performance, refine workflows, and provide ongoing support as you scale." }
  ];

  return (
    <section className="section-md bg-[#f8f8f6] overflow-hidden border-b border-gray-200">
      <div className="container-page">
        <AnimatedStagger className="text-center mb-16">
          <AnimatedItem>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900 mb-4">How we execute.</h2>
            <p className="text-body-lg">A rigorous process designed for precision.</p>
          </AnimatedItem>
        </AnimatedStagger>

        <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <AnimatedItem key={step.name}>
              <div className="relative pl-10 border-l-2 border-gray-200 pb-10 h-full group hover:border-[#1e90ff] transition-colors">
                <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-white border-[3px] border-gray-300 group-hover:border-[#1e90ff] transition-colors" />
                <span className="eyebrow mb-2 block">Phase 0{idx + 1}</span>
                <h3 className="text-subtitle mb-3">{step.name}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 10. TECHNOLOGY / ECOSYSTEM
function Technology() {
  return (
    <section className="section-md bg-white border-b border-gray-200 text-center">
      <div className="container-page">
        <AnimatedStagger>
          <AnimatedItem>
            <h2 className="text-2xl font-bold text-gray-400 mb-8 uppercase tracking-widest">Integrated Ecosystems</h2>
            <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {/* Added a few random recognizable SVG shapes for visual interest instead of empty blocks */}
              <svg className="h-8" viewBox="0 0 100 30" fill="currentColor"><rect width="100" height="30" rx="4" /></svg>
              <svg className="h-8 w-24" viewBox="0 0 100 30" fill="currentColor"><circle cx="15" cy="15" r="10" /><rect x="35" y="10" width="60" height="10" rx="2" /></svg>
              <svg className="h-8 w-32" viewBox="0 0 100 30" fill="currentColor"><polygon points="10,25 25,5 40,25" /><rect x="50" y="10" width="50" height="10" rx="2" /></svg>
              <svg className="h-8 w-28" viewBox="0 0 100 30" fill="currentColor"><rect x="0" y="0" width="20" height="30" rx="2" /><rect x="30" y="10" width="70" height="10" rx="2" /></svg>
            </div>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 11. TEAM
function Team() {
  const team = [
    { name: "Marcus Thorne", role: "Lead Systems Architect", bio: "Former enterprise software consultant specializing in workflow orchestration and CRM adoption.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Elena Rostova", role: "Automation Specialist", bio: "Expert in Zapier, Make, and GoHighLevel native automations. Ensures data flows flawlessly.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "David Chen", role: "Integration Engineer", bio: "Handles complex API integrations, webhook configurations, and database management.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
    { name: "Sarah Jenkins", role: "Client Success Manager", bio: "Leads team training, creates documentation, and provides post-launch support.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <section className="section-md bg-[#f8f8f6] border-b border-gray-200">
      <div className="container-page">
        <AnimatedStagger className="text-center mb-16">
          <AnimatedItem>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900 mb-4">The team behind the systems.</h2>
            <p className="text-body-lg max-w-2xl mx-auto">
              Our implementation specialists combine deep technical expertise with a practical understanding of B2B sales and operations.
            </p>
          </AnimatedItem>
        </AnimatedStagger>

        <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <AnimatedItem key={member.name}>
              <div className="flex flex-col group">
                <div className="w-full aspect-square rounded-xl mb-6 relative overflow-hidden border border-gray-200 shadow-sm">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <h3 className="text-subtitle mb-1">{member.name}</h3>
                <p className="text-sm font-bold tracking-wider text-[#1e90ff] uppercase mb-4">{member.role}</p>
                <p className="text-body-sm">{member.bio}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 12 & 13. WORKSPACE & CULTURE
function WorkspaceCulture() {
  return (
    <section className="section-md bg-white border-b border-gray-200">
      <div className="container-page">
        <AnimatedStagger className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-12">
          <AnimatedItem className="order-2 lg:order-1 grid grid-cols-2 gap-6">
             <div className="aspect-[3/4] rounded-xl overflow-hidden group shadow-xl">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" alt="Workspace" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="aspect-[3/4] rounded-xl overflow-hidden mt-12 group shadow-xl">
                <img src="https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80&w=600" alt="Collaboration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
          </AnimatedItem>
          <AnimatedItem className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900 mb-6">Built on extreme ownership.</h2>
            <div className="prose prose-lg max-w-none text-gray-500 leading-relaxed space-y-6">
              <p>We don&apos;t believe in tossing software over the fence and wishing our clients good luck. Our culture is rooted in extreme ownership of the final operational outcome.</p>
              <p>When an automation fails, we don&apos;t blame the software limit. We find the workaround. When a team resists adoption, we don&apos;t blame the user. We improve the training and simplify the interface.</p>
              <p className="text-ink-900 font-medium">Our remote-first workspace is designed for deep work, rigorous testing, and continuous learning within the ever-evolving automation landscape.</p>
            </div>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 14. MILESTONES / JOURNEY
function Milestones() {
  const milestones = [
    { year: "2021", text: "Founded as a specialized GoHighLevel consultancy." },
    { year: "2022", text: "Expanded team to include dedicated integration engineers." },
    { year: "2023", text: "Completed our 100th full-scale GHL ecosystem implementation." },
    { year: "2024", text: "Launched proprietary internal frameworks for rapid deployment." }
  ];

  return (
    <section className="section-md bg-[#f8f8f6] border-b border-gray-200">
      <div className="container-narrow">
        <AnimatedStagger className="text-center mb-12">
           <AnimatedItem>
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900 mb-4">Our Journey</h2>
           </AnimatedItem>
        </AnimatedStagger>
        <AnimatedStagger className="space-y-6">
          {milestones.map((m) => (
            <AnimatedItem key={m.year} className="flex gap-6 items-center bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-subtitle border-r border-gray-200 pr-6 shrink-0">{m.year}</div>
              <p className="text-body text-gray-600">{m.text}</p>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 15. WHY CLIENTS WORK WITH US
function WhyUs() {
  return (
    <section className="section-md bg-white border-b border-gray-200">
      <div className="container-page">
        <div className="bg-surface rounded-2xl p-10 lg:p-16 border border-gray-200 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />
           
           <AnimatedStagger className="text-center max-w-3xl mx-auto mb-16">
             <AnimatedItem>
               <span className="eyebrow mb-3 block">Our Positioning</span>
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900 mb-4">Why clients choose {site.name}</h2>
               <p className="text-body-lg">We are not a traditional marketing agency. We are systems architects.</p>
             </AnimatedItem>
           </AnimatedStagger>

           <AnimatedStagger className="grid md:grid-cols-3 gap-8">
             <AnimatedItem>
               <div className="h-full bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
                 <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1e90ff] flex items-center justify-center mb-6">
                   <Target className="w-6 h-6" />
                 </div>
                 <h3 className="text-subtitle mb-3">Clarity over Complexity</h3>
                 <p className="text-body-sm">We untangle messy tech stacks and replace them with streamlined, understandable logic that anyone can follow.</p>
               </div>
             </AnimatedItem>
             <AnimatedItem>
               <div className="h-full bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
                 <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1e90ff] flex items-center justify-center mb-6">
                   <CheckCircle2 className="w-6 h-6" />
                 </div>
                 <h3 className="text-subtitle mb-3">Structured Process</h3>
                 <p className="text-body-sm">No guesswork. Every project follows our rigorous scoping, building, testing, and handover protocol.</p>
               </div>
             </AnimatedItem>
             <AnimatedItem>
               <div className="h-full bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
                 <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1e90ff] flex items-center justify-center mb-6">
                   <Shield className="w-6 h-6" />
                 </div>
                 <h3 className="text-subtitle mb-3">Practical Automation</h3>
                 <p className="text-body-sm">We build automations that solve real bottlenecks, not flashy gimmicks that break under pressure.</p>
               </div>
             </AnimatedItem>
           </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <OurStory />
      <MissionVision />
      <PhilosophyAndValues />
      <Expertise />
      <HowWeWork />
      <Technology />
      <Team />
      <WorkspaceCulture />
      <Milestones />
      <WhyUs />
      <CtaSection 
        heading="Ready to optimize your operations?" 
        subheading="Let's discuss how a custom GoHighLevel implementation can scale your business." 
      />
    </>
  );
}
