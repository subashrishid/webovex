import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "../components/LeadForm";
import { FloatingWhatsApp, FreeAuditCta, WebsiteProblems } from "../components/SharedSections";
import { whatsappUrl } from "../data/conversionContent";

export const metadata: Metadata = {
  title: "Free Website Audit | Webovex",
  description:
    "Get a free website audit and redesign report from Webovex. Built for outreach, WhatsApp, and email campaign leads.",
  alternates: { canonical: "https://webovex.com/free-audit" },
};

export default function FreeAuditPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#171a20]">
      <nav className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-6 sm:px-8 lg:px-16">
        <Link className="font-bold" href="/">
          Webovex
        </Link>
        <a className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white" href={whatsappUrl}>
          WhatsApp Audit
        </a>
      </nav>
      <main>
        <section className="px-6 py-20 sm:px-8 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Free website audit</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-[#171a20] sm:text-6xl">
                Get a free website audit for your business.
              </h1>
              <p className="mt-6 text-xl leading-8 text-slate-600">
                Find out why your website is not converting visitors into enquiries. Webovex will review design,
                mobile experience, SEO basics, speed signals, WhatsApp flow, and redesign opportunities.
              </p>
              <div className="mt-8 grid gap-3 text-sm font-semibold text-[#171a20] sm:grid-cols-2">
                {[
                  "Design review",
                  "Mobile experience review",
                  "SEO basics check",
                  "Speed and performance notes",
                  "WhatsApp/contact flow suggestions",
                  "Redesign opportunity score",
                ].map((item) => (
                  <span className="rounded-2xl border border-slate-200 bg-white px-4 py-3" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <LeadForm audit />
          </div>
        </section>
        <WebsiteProblems />
        <FreeAuditCta compact />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
