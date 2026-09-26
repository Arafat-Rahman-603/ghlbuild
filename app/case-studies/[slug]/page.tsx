import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/sections/CtaSection";
import { ArrowLeft } from "lucide-react";

const caseStudies = [
  {
    id: "cs-1",
    slug: "scaling-lead-volume-automated-triage",
    title: "Scaling Lead Volume with Automated Triage",
    subtitle: "How Apex Real Estate Group automated their inbound lead process, eliminating manual triage and boosting conversion by 40%.",
    client: "Apex Real Estate Group",
    service: "Workflow Automation",
    duration: "3 Weeks",
    industry: "Real Estate",
    productsUsed: "GHL Pipelines, SMS Workflows, Zapier",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1400",
    challengeImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
    approachImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    challenge: "Clearly Managing 500+ Monthly Inbound Leads",
    challengeBody: "Handling 500+ monthly inbound leads manually was unsustainable. The sales team was overwhelmed, leads were falling through the cracks, and response times averaged 4 hours — causing serious revenue leakage.",
    challengeBullets: [
      "Connected Facebook Lead Ads directly to GHL for instant capture.",
      "Built a 5-minute automated SMS & Email outreach sequence to engage leads instantly.",
      "Created conditional logic to route hot leads directly to senior agents.",
    ],
    stats: [
      { value: "+40%", label: "Lead Conversion" },
      { value: "5 min", label: "Avg Response Time" },
      { value: "3 Weeks", label: "Turnaround" },
    ],
    approachTitle: "Our Automation Approach",
    approachBody: "We focused on building a reliable, hands-off lead triage engine — so the team could focus on closing, not sorting.",
    approachBullets: [
      "Multi-stage pipeline design",
      "Instant SMS engagement",
      "Smart conditional routing",
    ],
    outcome: "The Outcome",
    outcomeBody: "The project was a complete success. Response time dropped to 5 minutes. 40% more leads entered the qualification stage without any manual effort from the sales team. The system now runs fully on autopilot — freeing the team to focus entirely on closing deals.",
    tags: ["Workflow Automation", "Pipeline CRM", "SMS Integration"],
  },
  {
    id: "cs-2",
    slug: "eliminating-no-shows",
    title: "Eliminating No-Shows for Premium Consultations",
    subtitle: "How Elevate Legal Partners brought their show rate from 75% to 95% using a fully automated booking and reminder system.",
    client: "Elevate Legal Partners",
    service: "Calendar & Booking",
    duration: "2 Weeks",
    industry: "Professional Services",
    productsUsed: "GHL Calendars, WhatsApp, Email",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1400",
    challengeImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    approachImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
    challenge: "Clients Booking But Not Showing Up",
    challengeBody: "Clients were booking high-ticket consultations but failing to show up or complete necessary pre-meeting documentation — wasting attorney time and causing revenue losses.",
    challengeBullets: [
      "Replaced Calendly with GHL native calendars for tighter CRM integration.",
      "Built a mandatory pre-consultation form flow gating the booking confirmation.",
      "Configured a 3-day WhatsApp and Email reminder sequence with links to the form.",
    ],
    stats: [
      { value: "95%", label: "Show Rate" },
      { value: "-80%", label: "No-Shows" },
      { value: "2 Weeks", label: "Turnaround" },
    ],
    approachTitle: "Our Booking Strategy",
    approachBody: "We rebuilt the entire booking journey — making sure every booked client was also a prepared, confirmed client.",
    approachBullets: [
      "Pre-consultation form gating",
      "Multi-channel reminder sequences",
      "Native GHL calendar integration",
    ],
    outcome: "The Outcome",
    outcomeBody: "No-shows dropped from 25% to 5%. The firm saved hours of wasted preparation time per week. Attorneys now walk into every consultation knowing the client is prepared and committed.",
    tags: ["Calendar & Booking", "Email Sequences", "Forms"],
  },
  {
    id: "cs-3",
    slug: "consolidating-software-subscriptions",
    title: "Consolidating 5 Software Subscriptions into One",
    subtitle: "How Nexus Home Services eliminated data silos, cancelled 4 subscriptions, and saved $8,500/yr by migrating to GHL.",
    client: "Nexus Home Services",
    service: "System Migration",
    duration: "4 Weeks",
    industry: "Home Services",
    productsUsed: "GHL CRM, Email Campaigns, Automations",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400",
    challengeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
    approachImage: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800",
    challenge: "5 Disconnected Tools Causing Data Chaos",
    challengeBody: "The company was paying for Mailchimp, Calendly, PipeDrive, and Zapier simultaneously. Data was scattered across platforms, and Zaps were constantly breaking — requiring weekly maintenance.",
    challengeBullets: [
      "Exported and cleaned 10,000+ contacts from Pipedrive.",
      "Rebuilt all email templates and campaigns natively in GHL.",
      "Recreated complex Zapier routing rules using GHL Workflows — no Zapier needed.",
    ],
    stats: [
      { value: "$8,500", label: "Saved Per Year" },
      { value: "4", label: "Tools Eliminated" },
      { value: "4 Weeks", label: "Turnaround" },
    ],
    approachTitle: "Our Migration Approach",
    approachBody: "We methodically moved every workflow, contact, and campaign into a single GHL ecosystem — with zero data loss.",
    approachBullets: [
      "Full data export and cleaning",
      "Native workflow reconstruction",
      "Zero-downtime migration",
    ],
    outcome: "The Outcome",
    outcomeBody: "Eliminated 4 software subscriptions saving $8,500 annually. Data silos were removed — giving leadership a single unified view of every customer for the first time. The team now operates 100% within one platform.",
    tags: ["System Migration", "Consolidation", "Data Architecture"],
  }
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find(cs => cs.slug === slug);
  if (!study) return { title: "Not Found" };
  return {
    title: `${study.title} | Case Study`,
    description: study.subtitle,
  };
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find(cs => cs.slug === slug);
  if (!study) notFound();

  return (
    <>
      {/* ── HERO IMAGE ─────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[360px] md:h-[480px] lg:h-[560px] bg-ink-900">
        <Image
          src={study.heroImage}
          alt={study.title}
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-transparent" />
      </section>

      {/* ── TITLE + META ───────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-page py-10 md:py-14">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#1e90ff] mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>

          <h1 className="text-headline max-w-3xl mb-4">{study.title}</h1>
          <p className="text-body-lg text-gray-500 max-w-2xl mb-10">{study.subtitle}</p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-100 pt-8">
            {[
              { label: "Client", value: study.client },
              { label: "Service", value: study.service },
              { label: "Duration", value: study.duration },
              { label: "Products Used", value: study.productsUsed },
            ].map((m) => (
              <div key={m.label}>
                <p className="eyebrow text-gray-400 mb-1">{m.label}</p>
                <p className="text-sm font-semibold text-ink-900">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE ──────────────────────────────────────────────────── */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={study.challengeImage}
                alt="The Challenge"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div>
              <span className="eyebrow block mb-3 text-[#1e90ff]">The Challenge</span>
              <h2 className="text-title mb-6">{study.challenge}</h2>
              <p className="text-body-lg text-gray-600 mb-8">{study.challengeBody}</p>
              <ul className="flex flex-col gap-4">
                {study.challengeBullets.map((b, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-[#1e90ff] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <span className="text-body-sm text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-gray-100">
        <div className="container-page py-12 md:py-16">
          <div className="grid grid-cols-3 divide-x divide-gray-100 text-center">
            {study.stats.map((s) => (
              <div key={s.label} className="px-6 py-4">
                <p className="text-3xl md:text-4xl font-black text-ink-900 mb-1">{s.value}</p>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH ───────────────────────────────────────────────────────── */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <span className="eyebrow block mb-3 text-[#1e90ff]">Approach</span>
              <h2 className="text-title mb-6">{study.approachTitle}</h2>
              <p className="text-body-lg text-gray-600 mb-8">{study.approachBody}</p>
              <ul className="flex flex-col gap-3">
                {study.approachBullets.map((b, i) => (
                  <li key={i} className="text-body-sm font-semibold text-ink-900">
                    — {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={study.approachImage}
                alt="Our Approach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── THE RESULTS ────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-100 py-16 md:py-24 text-center">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-headline mb-6">{study.outcome}</h2>
            <p className="text-body-lg text-gray-600 mb-10">{study.outcomeBody}</p>
            <Link
              href="/contact"
              className="btn btn-primary btn-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
