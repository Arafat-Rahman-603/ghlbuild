import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service governing GoHighLevel implementation, automation architecture, and consulting engagements with ${site.name}.`,
  alternates: { canonical: `${site.url}/terms` },
};

export default function TermsOfServicePage() {
  const lastUpdated = "September 1, 2026";

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-surface relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-blue-100/30 rounded-bl-[150px] -z-10 blur-3xl" />
        <div className="container-narrow">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1e90ff] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm mx-auto">
            Legal
          </span>
          <h1 className="text-display mb-4">Terms of Service</h1>
          <p className="text-body-lg">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-md">
        <div className="container-narrow">
          <div className="prose prose-gray max-w-none flex flex-col gap-8 text-body text-gray-600 leading-relaxed">
            <div>
              <h2 className="text-title mb-3">1. Agreement to Terms</h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Client&rdquo;, &ldquo;you&rdquo;) and {site.name} (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By accessing our website ({site.url}), booking a strategy session, or retaining our services for GoHighLevel implementation, automation configuration, or systems consulting, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-title mb-3">2. Scope of Services</h2>
              <p className="mb-3">
                {site.name} provides specialized consulting and technical implementation for the GoHighLevel platform and connected business ecosystems. Services typically encompass:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Initial sub-account provisioning, DNS/domain verification, and communications setup.</li>
                <li>CRM architecture, custom field modeling, pipeline design, and opportunity stage routing.</li>
                <li>Workflow and trigger automation design, sequence scripting, and multi-channel notification logic.</li>
                <li>Funnel and website development within GoHighLevel connected to native calendars and forms.</li>
                <li>Third-party webhook, API, and platform integration (e.g., Stripe, Zapier, Make).</li>
              </ul>
              <p className="mt-3">
                Specific deliverables, milestones, and project timelines are formalized in an individual Statement of Work (SOW) or proposal agreed upon prior to project kickoff.
              </p>
            </div>

            <div>
              <h2 className="text-title mb-3">3. Client Responsibilities & Access</h2>
              <p className="mb-3">To ensure timely and effective implementation, the Client agrees to:</p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Provide administrative access to the relevant GoHighLevel account and third-party tools as agreed upon in the scoping phase.</li>
                <li>Provide required brand assets, copy guidelines, API keys, and workflow specifications in a timely manner.</li>
                <li>Designate an authorized point of contact for project decisions, reviews, and sign-offs.</li>
                <li>Review and test deliverables within the agreed review windows specified in the Statement of Work.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-title mb-3">4. Intellectual Property & Ownership</h2>
              <p className="mb-3">
                <strong className="text-ink-900">Client Ownership:</strong> You retain complete and exclusive ownership of your GoHighLevel account, customer data, contact records, proprietary workflows, and brand collateral.
              </p>
              <p className="mb-3">
                <strong className="text-ink-900">Deliverables License:</strong> Upon receipt of full payment for services rendered, {site.name} grants you an irrevocable, perpetual, worldwide license to use, modify, and expand all custom automations, templates, and configurations built specifically for your organization.
              </p>
              <p>
                <strong className="text-ink-900">Pre-existing Assets:</strong> We retain all intellectual property rights in our pre-existing proprietary frameworks, architectural methodologies, and internal scripts used to perform the implementation.
              </p>
            </div>

            <div>
              <h2 className="text-title mb-3">5. Third-Party Platforms & Software Fees</h2>
              <p>
                The Client acknowledges that {site.name} is an independent implementation service provider and not an agent, employee, or joint venture partner of HighLevel (GoHighLevel). The Client is solely responsible for maintaining active, paid subscriptions for GoHighLevel, Twilio, Mailgun, Stripe, Zapier, or any third-party services required to operate the completed system.
              </p>
            </div>

            <div>
              <h2 className="text-title mb-3">6. Fees & Payment Terms</h2>
              <p className="mb-3">
                Fees for implementation packages and custom engagements are set forth in the applicable proposal or invoice. Unless otherwise agreed:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Fixed-scope projects require an upfront deposit prior to scheduling kickoff, with milestone or completion balances due upon delivery.</li>
                <li>Invoices are due upon presentation. Overdue balances may pause ongoing build activities.</li>
                <li>Out-of-scope requests or changes to agreed workflows will be estimated and billed via separate written change orders.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-title mb-3">7. Testing, Handover & Support Period</h2>
              <p>
                Every implementation concludes with a comprehensive end-to-end testing phase followed by a formal handover walkthrough and documentation delivery. Projects include a post-launch support period (as specified in your SOW, typically 14 to 30 days) to address configuration bugs or workflow refinements within the original project scope.
              </p>
            </div>

            <div>
              <h2 className="text-title mb-3">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall {site.name} be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, or business opportunities arising out of or related to the services, third-party platform downtime, or platform policy changes. Our aggregate liability for all claims under any engagement shall not exceed the total fees paid by the Client to us during the three (3) months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-title mb-3">9. Termination</h2>
              <p>
                Either party may terminate an engagement for cause if the other party materially breaches these Terms and fails to cure such breach within fifteen (15) days of written notice. Upon termination, the Client shall pay for all work satisfactorily completed through the termination date, and {site.name} will deliver all completed configurations and documentation.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-title mb-3">10. Contact Information</h2>
              <p className="mb-3">
                For questions regarding these Terms of Service or your service agreement, please contact us:
              </p>
              <div className="bg-surface p-8 rounded-[24px] border border-gray-100 shadow-sm flex flex-col gap-2">
                <p className="font-bold text-ink-900 text-lg">{site.name}</p>
                <p className="text-body-sm mb-2">Legal & Operations Department</p>
                <p className="text-[15px]">
                  Email:{" "}
                  <a href={`mailto:${site.email}`} className="text-[#1e90ff] hover:underline">
                    {site.email}
                  </a>
                </p>
                <p className="text-[15px]">
                  Website:{" "}
                  <a href={site.url} className="text-[#1e90ff] hover:underline">
                    {site.url}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link href="/" className="btn btn-outline">
                ← Return to Home
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-ink-900 underline">
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
