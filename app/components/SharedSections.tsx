import Link from "next/link";
import {
  industries,
  leadMagnets,
  portfolio,
  stats,
  testimonials,
  websiteProblems,
  whatsappUrl,
} from "../data/conversionContent";

export function FreeAuditCta({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "px-6 py-10 sm:px-8 lg:px-16" : "px-6 py-16 sm:px-8 lg:px-16"}>
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-red-100 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Free website audit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#171a20] sm:text-4xl">
            Not sure why your website is not bringing leads?
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Get a free Webovex website audit, redesign report, and consultation direction for your business.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center rounded-full bg-[#171a20] px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Get Free Website Audit
          </Link>
          <a
            href={whatsappUrl}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-[#f7f8fb] px-6 py-3 text-sm font-semibold text-[#171a20] transition hover:border-red-500 hover:text-red-600"
          >
            WhatsApp Audit Chat
          </a>
        </div>
      </div>
    </section>
  );
}

export function StatsBar() {
  return (
    <section className="px-6 pb-16 sm:px-8 lg:px-16" aria-label="Webovex business stats">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div className="flex items-center gap-4 rounded-2xl bg-[#f7f8fb] p-5" key={stat.label}>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-xs font-bold text-red-600">
              {stat.icon}
            </span>
            <div>
              <p className="text-2xl font-semibold text-[#171a20]">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.label}</p>
              <p className="mt-1 text-xs text-slate-400">{stat.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WebsiteProblems() {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Conversion leaks</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#171a20] sm:text-5xl">
            Why your website may be losing customers.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Most business websites do not fail because the service is bad. They fail because visitors do not get trust,
            clarity, and a simple enquiry path fast enough.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {websiteProblems.map((problem) => (
            <div className="rounded-3xl border border-slate-200 bg-[#f7f8fb] p-5" key={problem}>
              <span className="text-sm font-bold text-red-600">FIX</span>
              <h3 className="mt-3 text-xl font-semibold text-[#171a20]">{problem}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white px-6 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Client words</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#171a20] sm:text-5xl">
            Trusted by business owners who need clean execution.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article className="rounded-[1.5rem] border border-slate-200 bg-[#f7f8fb] p-6" key={testimonial.name}>
              <p className="text-sm font-semibold text-yellow-500">5/5 rating</p>
              <p className="mt-5 text-lg leading-7 text-[#171a20]">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-semibold text-[#171a20]">{testimonial.name}</p>
                <p className="text-sm text-slate-600">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-5 rounded-3xl border border-dashed border-slate-300 bg-[#f7f8fb] p-5 text-sm text-slate-600">
          Video testimonials and Google review embed support can be connected here after real reviews are collected.
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjects() {
  return (
    <section id="portfolio" className="bg-white px-6 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Featured projects</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#171a20] sm:text-5xl">
              Portfolio cards with business problems, technology, and results.
            </h2>
          </div>
          <Link href="/free-audit" className="text-sm font-semibold text-red-600 hover:text-[#171a20]">
            Get redesign report
          </Link>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {portfolio.map((project) => (
            <article className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[#f7f8fb]" key={project.name}>
              <img src={project.image} alt={`${project.name} screenshot placeholder`} className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-semibold text-red-600">{project.type}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#171a20]">{project.name}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">Industry: {project.industry}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Tech: {project.stack}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">Problem: {project.problem}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Solution: {project.solution}</p>
                <p className="mt-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#171a20]">
                  Result: {project.result}
                </p>
                <Link
                  href="/free-audit"
                  className="mt-6 inline-flex rounded-full bg-[#171a20] px-5 py-3 text-sm font-semibold text-white hover:bg-red-600"
                >
                  View project
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudies() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Case studies</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#171a20] sm:text-5xl">
          How Webovex turns website problems into business outcomes.
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {portfolio.map((project) => (
            <article className="rounded-[1.5rem] border border-slate-200 bg-white p-6" key={project.name}>
              <h3 className="text-2xl font-semibold text-[#171a20]">{project.name}</h3>
              <dl className="mt-5 grid gap-4 text-sm leading-6 text-slate-600">
                <div>
                  <dt className="font-semibold text-[#171a20]">Client Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#171a20]">Solution Provided</dt>
                  <dd>{project.solution}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#171a20]">Technologies Used</dt>
                  <dd>{project.stack}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#171a20]">Business Outcome</dt>
                  <dd>{project.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComparisonTable() {
  const rows = [
    ["Support", "Delayed handoffs", "Direct founder-led communication"],
    ["Speed", "Long process", "Fast launch-focused execution"],
    ["Custom Development", "Template-heavy", "Business-specific builds"],
    ["SEO Readiness", "Often optional", "Built into structure"],
    ["Scalability", "Limited", "App and dashboard-ready architecture"],
    ["Security", "Basic setup", "Secure deployment practices"],
  ];

  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Why Webovex</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#171a20] sm:text-5xl">
          Why businesses choose Webovex over a traditional agency.
        </h2>
        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[#f7f8fb]">
          <div className="grid grid-cols-3 bg-white p-4 text-sm font-semibold text-[#171a20]">
            <span>Area</span>
            <span>Traditional Agency</span>
            <span>Webovex</span>
          </div>
          {rows.map(([area, agency, webovex]) => (
            <div className="grid grid-cols-1 gap-2 border-t border-slate-200 p-4 text-sm sm:grid-cols-3" key={area}>
              <span className="font-semibold text-[#171a20]">{area}</span>
              <span className="text-slate-600">{agency}</span>
              <span className="font-semibold text-red-600">{webovex}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeadMagnet() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Lead magnet</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#171a20]">Download practical website guides.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Capture email before download. Connect this form to your email tool when ready.
          </p>
          <div className="mt-6 grid gap-3">
            {leadMagnets.map((item) => (
              <span className="rounded-2xl bg-[#f7f8fb] px-4 py-3 text-sm font-semibold text-[#171a20]" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <form className="grid content-start gap-4 rounded-[1.5rem] bg-[#f7f8fb] p-5">
          <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-red-500" placeholder="Your email" type="email" required />
          <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-red-500">
            {leadMagnets.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <button className="rounded-full bg-[#171a20] px-6 py-3 text-sm font-semibold text-white hover:bg-red-600" type="submit">
            Send download link
          </button>
        </form>
      </div>
    </section>
  );
}

export function FounderSection() {
  return (
    <section id="about" className="px-6 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="grid aspect-[4/5] place-items-center overflow-hidden rounded-[1.5rem] bg-slate-100 text-center text-slate-500">
            <img src="/software-engineer.jpg" alt="Founder photo placeholder for Subash N" className="h-full w-full object-cover opacity-90" />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Founder-led development</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#171a20] sm:text-5xl">
            About Subash N and why Webovex started.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Webovex is founded by Subash N, a Chennai-based full-stack developer focused on building premium websites,
            apps, dashboards, and e-commerce systems for serious businesses.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Subash started Webovex to give business owners a clearer, faster, and more reliable way to launch digital
            products without agency confusion.
          </p>
          <a
            href="https://www.linkedin.com/in/subash-n-a33b38228"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#171a20] hover:border-red-500 hover:text-red-600"
          >
            View LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export function BookingSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Book consultation</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#171a20] sm:text-5xl">
            Book a free 20-minute website consultation.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Use this space for Calendly or Google Meet booking. It keeps the current contact form untouched.
          </p>
        </div>
        <div className="rounded-[2rem] border border-dashed border-slate-300 bg-[#f7f8fb] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Calendly placeholder</p>
          <h3 className="mt-4 text-2xl font-semibold text-[#171a20]">Connect Calendly embed here</h3>
          <p className="mt-3 text-slate-600">Add your Calendly URL later without changing the rest of the website.</p>
          <Link
            href="/free-audit"
            className="mt-6 inline-flex rounded-full bg-[#171a20] px-6 py-3 text-sm font-semibold text-white hover:bg-red-600"
          >
            Use consultation form
          </Link>
        </div>
      </div>
    </section>
  );
}

export function IndustryLinks() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Chennai industry pages</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#171a20] sm:text-5xl">
          SEO-ready website development pages for local business searches.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link
              href={`/${industry.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-5 text-sm font-semibold text-[#171a20] shadow-[0_16px_45px_rgba(15,23,42,0.06)] hover:border-red-500 hover:text-red-600"
              key={industry.slug}
            >
              {industry.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FloatingWhatsApp() {
  return (
    <>
      <a
        href={whatsappUrl}
        className="fixed bottom-5 right-5 z-50 hidden rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(22,163,74,0.35)] transition hover:bg-green-700 md:inline-flex"
      >
        WhatsApp Audit
      </a>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <a
          href={whatsappUrl}
          className="flex w-full items-center justify-center rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white"
        >
          Get free audit on WhatsApp
        </a>
      </div>
    </>
  );
}
