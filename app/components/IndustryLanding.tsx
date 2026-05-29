import Link from "next/link";
import { FloatingWhatsApp, FreeAuditCta } from "./SharedSections";
import { whatsappUrl } from "../data/conversionContent";

type IndustryPage = {
  name: string;
  industry: string;
  headline: string;
  problem: string;
  outcome: string;
};

export function IndustryLanding({ page }: { page: IndustryPage }) {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#171a20]">
      <nav className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-6 sm:px-8 lg:px-16">
        <Link className="font-bold" href="/">
          Webovex
        </Link>
        <Link className="rounded-full bg-[#171a20] px-5 py-2 text-sm font-semibold text-white" href="/free-audit">
          Free Audit
        </Link>
      </nav>
      <main>
        <section className="px-6 py-20 sm:px-8 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Chennai website development</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-[#171a20] sm:text-6xl">{page.headline}</h1>
              <p className="mt-6 text-xl leading-8 text-slate-600">{page.outcome}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link className="rounded-full bg-[#171a20] px-7 py-3.5 text-center text-sm font-semibold text-white hover:bg-red-600" href="/free-audit">
                  Get Free {page.industry} Website Audit
                </Link>
                <a className="rounded-full border border-green-200 bg-white px-7 py-3.5 text-center text-sm font-semibold text-green-700 hover:border-green-600" href={whatsappUrl}>
                  WhatsApp Consultation
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-600">Common problem</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#171a20]">{page.problem}</h2>
              <p className="mt-5 text-slate-600">
                Webovex builds clean, mobile-friendly, SEO-ready pages that help visitors understand your business and
                contact you faster.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white px-6 py-20 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">What Webovex can build</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                "Premium business website",
                "SEO landing pages",
                "WhatsApp enquiry flow",
                "Lead capture forms",
                "Portfolio and proof sections",
                "Dashboard or app extension",
              ].map((item) => (
                <article className="rounded-3xl border border-slate-200 bg-[#f7f8fb] p-6" key={item}>
                  <h3 className="text-xl font-semibold text-[#171a20]">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Built with Webovex's current premium light design system and practical conversion structure.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="px-6 py-20 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">FAQ</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                ["How long does a website take?", "Most focused business websites can be planned and launched in 2-4 weeks depending on content and scope."],
                ["Can you redesign an existing website?", "Yes. Webovex can audit the current website and rebuild only the parts that affect trust, speed, SEO, and enquiries."],
                ["Can WhatsApp be integrated?", "Yes. WhatsApp CTAs, click-to-chat links, and outreach landing flows can be added without disturbing existing forms."],
                ["Will the page be SEO-ready?", "Yes. Pages can include titles, descriptions, service content, local keywords, internal links, and schema markup."],
              ].map(([question, answer]) => (
                <article className="rounded-3xl border border-slate-200 bg-white p-6" key={question}>
                  <h3 className="font-semibold text-[#171a20]">{question}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <FreeAuditCta compact />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
