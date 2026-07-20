"use client";

import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  Bell,
} from "lucide-react";

export default function NewsletterCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[#071A2E]" />

      {/* Decorative Elements */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#0B5FA5]/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#C9A14A]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A14A]/40 bg-[#C9A14A]/10">
            <Bell className="h-10 w-10 text-[#C9A14A]" />
          </div>

          <p className="mt-8 uppercase tracking-[0.35em] text-[#C9A14A]">
            Stay Updated
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-white md:text-6xl">
            Get Latest Updates
            <span className="block font-semibold text-[#C9A14A]">
              From Manjeet Pride Group
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Subscribe to receive the latest project launches, real estate
            insights, company news, events, and exclusive offers directly
            in your inbox.
          </p>

          {/* Newsletter Form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-md sm:flex-row"
          >
            <div className="relative flex-1">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                type="email"
                placeholder="Enter Your Email Address..."
                className="w-full rounded-xl bg-white px-12 py-4 text-[#071A2E] outline-none placeholder:text-gray-500"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#C9A14A] px-8 py-4 font-semibold text-[#071A2E] transition hover:scale-105"
            >
              Subscribe
              <ArrowRight size={18} />
            </button>
          </motion.form>

          {/* Small Text */}
          <p className="mt-5 text-sm text-gray-400">
            No spam. Only valuable updates from Manjeet Pride Group.
          </p>
        </motion.div>
      </div>
    </section>
  );
}