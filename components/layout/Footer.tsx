
import Link from "next/link";
import { footerNav } from "@/lib/content/navigation";
import { site } from "@/lib/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="site-footer relative overflow-hidden bg-ink-900 text-white"
      role="contentinfo"
    >
      {/* Subtle top accent */}
      <div className="h-px w-full bg-white/10" />

      <div className="container-page relative z-10">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-14 py-16 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-10 lg:gap-y-16 lg:py-20">
          {/* Brand / Intro */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center group">
              <span className="flex items-center">
                <img src="/footer-logo.png" alt={`${site.name} logo`} className="h-12 md:h-14 w-auto object-contain " />
              </span>
            </Link>

            <p className="mt-6 max-w-[360px] text-[14px] leading-7 text-white/60">
              GoHighLevel systems engineered for growth — from CRM setup and
              automation to AI, funnels, and ongoing optimization.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href={site.cta.bookCall}
                className="btn btn-primary group"
              >
                <span>Let's work together</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Partner badge */}
           

            {/* Socials */}
            <div className="mt-8 flex items-center gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-200 hover:border-[#1e90ff]/50 hover:bg-[#1e90ff] hover:text-white"
              >
                <span className="text-[12px] font-bold">in</span>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-200 hover:border-[#1e90ff]/50 hover:bg-[#1e90ff] hover:text-white"
              >
                <span className="text-[14px] font-bold">f</span>
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-200 hover:border-red-500/50 hover:bg-red-600 hover:text-white"
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-200 hover:border-white/30 hover:bg-white hover:text-black"
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <FooterColumn title="Services" links={footerNav.services} />
          </div>

          {/* Industries */}
          <div>
            <FooterColumn title="Industries" links={footerNav.industries} />
          </div>

          {/* Company */}
          <div>
            <FooterColumn title="Company" links={footerNav.company} />
          </div>

          {/* Resources */}
          <div>
            <FooterColumn title="Resources" links={footerNav.resources} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-[11px] leading-5 text-white/40">
              © {year} {site.name}. GoHighLevel and HighLevel are trademarks
              of HighLevel Inc.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {footerNav.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[11px] font-medium text-white/45 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <>
      <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group inline-flex items-center text-[13px] leading-6 text-white/60 transition-colors duration-200 hover:text-white"
            >
              <span>{link.label}</span>

              <svg
                className="ml-1.5 h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
