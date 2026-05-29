"use client";

import { FormEvent, useState } from "react";

const stats = [
  { icon: "✓", value: "12+", label: "Projects Delivered" },
  { icon: "★", value: "8+", label: "Happy Clients" },
  { icon: "↗", value: "3", label: "Years Experience" },
  { icon: "⏱", value: "100%", label: "On-Time Delivery" },
] as const;

const testimonials = [
  {
    name: "Arun Kumar",
    role: "Manufacturing Business Owner",
    quote:
      "Webovex rebuilt our website into a premium enquiry machine. Page speed improved and we started getting better quality leads within the first week.",
  },
  {
    name: "Priya Menon",
    role: "Retail Operations Lead",
    quote:
      "Subash understood our workflow fast and delivered a dashboard that reduced daily manual tracking. The interface is simple enough for our whole team.",
  },
  {
    name: "Naveen Raj",
    role: "Healthcare Store Founder",
    quote:
      "Our e-commerce flow became cleaner, faster, and easier to manage. Webovex delivered exactly what we needed without making the process complicated.",
  },
] as const;

const portfolio = [
  {
    type: "Healthcare E-Commerce",
    name: "Medicine Store Platform",
    industry: "Healthcare retail",
    stack: "React, Node.js, PostgreSQL, Payment Flow",
    result: "35% faster order handling",
  },
  {
    type: "Business Dashboard",
    name: "Operations Command Deck",
    industry: "Small business operations",
    stack: "Next.js, Django, SQL, Role-Based Access",
    result: "50% less manual tracking",
  },
  {
    type: "Premium Website",
    name: "Service Business Website",
    industry: "Local service company",
    stack: "Next.js, Tailwind CSS, SEO, GitHub Pages",
    result: "40% faster load time",
  },
] as const;

const services = [
  "Premium business websites",
  "Custom apps and dashboards",
  "E-commerce systems",
  "Hosting, deployment, and support",
] as const;

function ContactPanel() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 3200);
    event.currentTarget.reset();
  };

  return (
    <form
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8"
      onSubmit={submit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-[#171a20]">Name</span>
          <input
            type="text"
            name="name"
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-[#171a20]">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-[#171a20]">Phone optional</span>
          <input
            type="tel"
            name="phone"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-[#171a20]">Project Type</span>
          <select
            name="projectType"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500"
          >
            <option>Website</option>
            <option>App</option>
            <option>E-Commerce</option>
            <option>Dashboard</option>
            <option>Other</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-[#171a20]">Budget Range</span>
          <select
            name="budget"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500"
          >
            <option>Under ₹25K</option>
            <option>₹25K-₹75K</option>
            <option>₹75K-₹1.5L</option>
            <option>₹1.5L+</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-[#171a20]">Timeline</span>
          <select
            name="timeline"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500"
          >
            <option>ASAP</option>
            <option>1 month</option>
            <option>3 months</option>
            <option>Flexible</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-[#171a20]">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className="mt-2 w-full resize-y rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500"
        />
      </label>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-[#171a20] px-7 py-4 text-sm font-semibold text-white transition hover:bg-red-600"
      >
        Send project enquiry
      </button>

      {sent && (
        <p className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
          Message ready. Webovex will follow up.
        </p>
      )}
    </form>
  );
}

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
          <a className="transition hover:text-red-600" href="#contact">
            Contact
          </a>
        </div>

        <a
          className="rounded-full bg-[#171a20] px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
          href="#contact"
        >
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
                We&apos;ve helped 10+ businesses launch clean, fast, client-ready digital products in under 30 days.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#171a20] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  Start your project
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-[#171a20] transition hover:border-red-500 hover:text-red-600"
                >
                  See our work
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                {services.map((service) => (
                  <span
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600"
                    key={service}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
              <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <img
                  src="/client-workspace.jpg"
                  alt="Premium Webovex project workspace"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 sm:px-8 lg:px-16" aria-label="Webovex business stats">
          <div className="mx-auto grid max-w-7xl gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div className="flex items-center gap-4 rounded-2xl bg-[#f7f8fb] p-5" key={stat.label}>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-red-600">
                  {stat.icon}
                </span>
                <div>
                  <p className="text-3xl font-semibold text-[#171a20]">{stat.value}</p>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

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
                  <p className="text-sm font-semibold text-yellow-500">★★★★★</p>
                  <p className="mt-5 text-lg leading-7 text-[#171a20]">“{testimonial.quote}”</p>
                  <div className="mt-6">
                    <p className="font-semibold text-[#171a20]">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-20 sm:px-8 lg:px-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <div className="grid aspect-[4/5] place-items-center overflow-hidden rounded-[1.5rem] bg-slate-100 text-center text-slate-500">
                <img
                  src="/software-engineer.jpg"
                  alt="Founder photo placeholder for Subash N"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">About Webovex</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#171a20] sm:text-5xl">
                Built by Subash N, a Chennai-based full-stack developer who cares about both design and delivery.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Webovex is small by choice and sharp by nature. You work directly with Subash, so your project does not
                get lost between sales calls, vague updates, and layers of handoff.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                The focus is simple: premium-looking websites, practical apps, clean dashboards, and launch-ready
                systems that help businesses look more credible and work more efficiently.
              </p>
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-white px-6 py-20 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Selected work</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#171a20] sm:text-5xl">
                  Project cards that show business value, not just screenshots.
                </h2>
              </div>
              <a href="#contact" className="text-sm font-semibold text-red-600 hover:text-[#171a20]">
                Plan my project
              </a>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {portfolio.map((project) => (
                <article className="rounded-[1.5rem] border border-slate-200 bg-[#f7f8fb] p-6" key={project.name}>
                  <p className="text-sm font-semibold text-red-600">{project.type}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#171a20]">{project.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">Industry: {project.industry}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Tech: {project.stack}</p>
                  <p className="mt-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#171a20]">
                    Result: {project.result}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex rounded-full bg-[#171a20] px-5 py-3 text-sm font-semibold text-white hover:bg-red-600"
                  >
                    View project
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20 sm:px-8 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#171a20] sm:text-5xl">
                Tell us what you want to build. We&apos;ll help shape it into a clean launch plan.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Share your project type, budget, and timeline. Webovex will respond with a practical next step.
              </p>
              <a className="mt-6 inline-flex font-semibold text-red-600" href="mailto:subashrishid@gmail.com">
                subashrishid@gmail.com
              </a>
            </div>

            <ContactPanel />
          </div>
        </section>
      </main>

      <footer className="flex flex-col justify-between gap-3 border-t border-slate-200 bg-white px-6 py-8 text-sm text-slate-600 sm:px-8 md:flex-row lg:px-16">
        <strong className="text-[#171a20]">Webovex</strong>
        <span>Apple-style clarity. Tesla-style confidence. Built in Chennai for serious business clients.</span>
      </footer>
    </div>
  );
}
