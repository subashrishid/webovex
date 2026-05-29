"use client";

import { FormEvent, useState } from "react";

export function LeadForm({ audit = false }: { audit?: boolean }) {
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
          <input name="name" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-[#171a20]">Email</span>
          <input name="email" type="email" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500" />
        </label>
        {audit && (
          <label className="block">
            <span className="text-sm font-semibold text-[#171a20]">Company</span>
            <input name="company" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500" />
          </label>
        )}
        {audit && (
          <label className="block">
            <span className="text-sm font-semibold text-[#171a20]">Website</span>
            <input name="website" type="url" required placeholder="https://example.com" className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500" />
          </label>
        )}
        <label className="block">
          <span className="text-sm font-semibold text-[#171a20]">Phone optional</span>
          <input name="phone" type="tel" className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-[#171a20]">Project Type</span>
          <select name="projectType" className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500">
            <option>Website</option>
            <option>App</option>
            <option>E-Commerce</option>
            <option>Dashboard</option>
            <option>Other</option>
          </select>
        </label>
        {!audit && (
          <label className="block">
            <span className="text-sm font-semibold text-[#171a20]">Budget Range</span>
            <select name="budget" className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500">
              <option>Under Rs.25K</option>
              <option>Rs.25K-Rs.75K</option>
              <option>Rs.75K-Rs.1.5L</option>
              <option>Rs.1.5L+</option>
            </select>
          </label>
        )}
        {!audit && (
          <label className="block">
            <span className="text-sm font-semibold text-[#171a20]">Timeline</span>
            <select name="timeline" className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500">
              <option>ASAP</option>
              <option>1 month</option>
              <option>3 months</option>
              <option>Flexible</option>
            </select>
          </label>
        )}
      </div>
      <label className="mt-5 block">
        <span className="text-sm font-semibold text-[#171a20]">{audit ? "What should we improve?" : "Message"}</span>
        <textarea name="message" rows={5} required className="mt-2 w-full resize-y rounded-2xl border border-slate-200 bg-[#f7f8fb] px-4 py-3 outline-none focus:border-red-500" />
      </label>
      <button type="submit" className="mt-6 w-full rounded-full bg-[#171a20] px-7 py-4 text-sm font-semibold text-white transition hover:bg-red-600">
        {audit ? "Submit website for free audit" : "Send project enquiry"}
      </button>
      {sent && (
        <p className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
          Message ready. Webovex will follow up.
        </p>
      )}
    </form>
  );
}
