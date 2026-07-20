"use client";

import { useState } from "react";

export function EnquiryForm() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      alert("Thank you! Your enquiry has been submitted.");
      setLoading(false);
      e.currentTarget.reset();
    }, 1200);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <label className="block mb-2 text-sm font-medium">
          Full Name
        </label>

        <input
          name="name"
          placeholder="Enter your name"
          required
          className="w-full rounded-xl border border-[#C6BFA2] px-4 py-3 outline-none focus:ring-2 focus:ring-[#6A8791]"
        />
      </div>


      <div>
        <label className="block mb-2 text-sm font-medium">
          Email Address
        </label>

        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          className="w-full rounded-xl border border-[#C6BFA2] px-4 py-3 outline-none focus:ring-2 focus:ring-[#6A8791]"
        />
      </div>


      <div>
        <label className="block mb-2 text-sm font-medium">
          Phone Number
        </label>

        <input
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          required
          className="w-full rounded-xl border border-[#C6BFA2] px-4 py-3 outline-none focus:ring-2 focus:ring-[#6A8791]"
        />
      </div>


      <div>
        <label className="block mb-2 text-sm font-medium">
          Message
        </label>

        <textarea
          name="message"
          rows={6}
          placeholder="Tell us about your enquiry..."
          required
          className="w-full rounded-xl border border-[#C6BFA2] px-4 py-3 outline-none focus:ring-2 focus:ring-[#6A8791]"
        />
      </div>


      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#6A8791] py-3 text-white font-medium hover:bg-[#58717A] transition disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Send Enquiry"}
      </button>

    </form>
  );
}