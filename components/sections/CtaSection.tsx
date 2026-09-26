import Link from "next/link";
import { site } from "@/lib/content/site";

interface CtaSectionProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaSection({
  heading = "Not sure where to start?",
  subheading = "Book a free 30-minute call. We'll audit your setup, find the gaps, and map exactly what to build. No pitch, no pressure.",
  primaryLabel = "Book a Call",
  primaryHref,
}: CtaSectionProps) {
  const finalPrimaryHref = primaryHref ?? site.cta.bookCall;

  const renderHeading = () => {
    if (heading === "Not sure where to start?") {
      return (
        <>
          Not sure where to{" "}
          <span className="relative inline-block px-1">
            <span
              className="absolute inset-0 bg-[#e6f2ff] border border-[#99ccff] rounded-sm transform -rotate-1"
              style={{ zIndex: 0 }}
            />
            <span className="relative z-10">start?</span>
          </span>
        </>
      );
    }
    return heading;
  };

  return (
    <section
      className="py-16 md:py-24 bg-blue-50 border-t border-blue-100 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e90ff20_1px,transparent_1px),linear-gradient(to_bottom,#1e90ff20_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-blue-50"></div>
      </div>

      <div className="container-page relative z-10 w-full">
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          
          {/* Content Area */}
          <div className="flex flex-col items-center">
            <h2
              id="cta-heading"
              className="text-headline mb-6"
            >
              {renderHeading()}
            </h2>
            
            <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
              {subheading}
            </p>
          </div>
          
          {/* CTA Area */}
          <div className="flex flex-col items-center gap-4 mt-2">
            <Link
              href={finalPrimaryHref}
              className="btn btn-primary btn-lg group"
            >
              <span>{primaryLabel}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <div className="flex items-center justify-center gap-2 text-caption text-gray-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-[#1e90ff]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Average delivery — 5 business days
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
