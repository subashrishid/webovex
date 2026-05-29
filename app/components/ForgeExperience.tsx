import Link from "next/link";
import { LeadForm } from "./LeadForm";
import {
  BookingSection,
  CaseStudies,
  ComparisonTable,
  FeaturedProjects,
  FloatingWhatsApp,
  FounderSection,
  FreeAuditCta,
  IndustryLinks,
  LeadMagnet,
  StatsBar,
  Testimonials,
  WebsiteProblems,
} from "./SharedSections";
import { whatsappUrl } from "../data/conversionContent";

const services = [
  "Premium business websites",
  "Custom apps and dashboards",
  "E-commerce systems",
  "Hosting, deployment, and support",
] as const;

export default function ForgeExperience() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#171a20]">
      <nav className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-slate-200/70 bg-white/80 px-6 backdrop-blur-xl sm:px-8 lg:px-16">
        <a className="inline-flex items-center gap-3 text-sm font-bold" href="#home" aria-label="Webovex home">
          <span className="grid h-7 w-7 place-items-center rounded-lg border border-slate-200 bg-white text-xs text-red-600 shadow-inner">
            W
          </span>
          Webovex
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          <a className="transition hover:text-red-600" href="#portfolio">
            Work
          </a>
          <a className="transition hover:text-red-600" href="#testimonials">
            Clients
          </a>
          <a className="transition hover:text-red-600" href="#about">
            About
          </a>
          <Link className="transition hover:text-red-600" href="/free-audit">
            Free Audit
          </Link>
          <a className="transition hover:text-red-600" href="#contact">
            Contact
          </a>
        </div>
        <a className="rounded-full bg-[#171a20] px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600" href="#contact">
          Get quote
        </a>
      </nav>

      <main>
        <section id="home" className="px-6 pb-16 pt-28 sm:px-8 lg:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
                Apple clean, Tesla sharp
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[#171a20] sm:text-6xl lg:text-7xl">
                Premium websites and apps built for serious business growth.
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
                We have helped 10+ businesses launch clean, fast, client-ready digital products in under 30 days.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/free-audit" className="inline-flex items-center justify-center rounded-full bg-[#171a20] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-red-600">
                  Get Free Website Audit
                </Link>
                <a href={whatsappUrl} className="inline-flex items-center justify-center rounded-full border border-green-200 bg-white px-7 py-3.5 text-sm font-semibold text-green-700 transition hover:border-green-600">
                  WhatsApp Free Audit
                </a>
                <a href="#portfolio" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-[#171a20] transition hover:border-red-500 hover:text-red-600">
                  See our work
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                {services.map((service) => (
                  <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600" key={service}>
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
              <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <img src="/client-workspace.jpg" alt="Premium Webovex project workspace" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <StatsBar />
        <FreeAuditCta compact />
        <WebsiteProblems />
        <FeaturedProjects />
        <CaseStudies />
        <ComparisonTable />
        <FounderSection />
        <Testimonials />
        <LeadMagnet />
        <BookingSection />
        <IndustryLinks />

        <section id="contact" className="px-6 py-20 sm:px-8 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#171a20] sm:text-5xl">
                Tell us what you want to build. We will help shape it into a clean launch plan.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Share your project type, budget, and timeline. Webovex will respond with a practical next step.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex font-semibold text-red-600" href="mailto:subashrishid@gmail.com">
                  subashrishid@gmail.com
                </a>
                <a className="inline-flex font-semibold text-green-700" href={whatsappUrl}>
                  Quick WhatsApp audit
                </a>
              </div>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-sm text-slate-600 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <strong className="text-[#171a20]">Webovex</strong>
            <p className="mt-1">Apple-style clarity. Tesla-style confidence. Built in Chennai for serious business clients.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="rounded-full bg-[#171a20] px-5 py-3 font-semibold text-white hover:bg-red-600" href="/free-audit">
              Get Free Website Redesign Report
            </Link>
            <a className="rounded-full border border-green-200 px-5 py-3 font-semibold text-green-700 hover:border-green-600" href={whatsappUrl}>
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </footer>
      <FloatingWhatsApp />
    </div>
  );
}
