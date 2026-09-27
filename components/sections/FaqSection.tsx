import { Accordion } from "@/components/ui/Accordion";
import { ghlSetupFaq } from "@/lib/content/ghl-setup";

export function FaqSection() {
  return (
    <section
      className="section-md bg-white border-b border-gray-100"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-page">
        <div className="grid lg:grid-cols-[450px_1fr] gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32 lg:self-start pr-4">
            <span className="eyebrow mb-4 block w-fit">FAQ</span>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-ink-900 leading-[1.1] mb-6">
              Common questions about the implementation.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              If your question isn&apos;t covered here, get in touch and we&apos;ll give
              you a direct answer.
            </p>
          </div>

          {/* Right: accordion */}
          <Accordion items={ghlSetupFaq} />
        </div>
      </div>
    </section>
  );
}
