"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-[#173042] py-24">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#B08D57]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#B08D57] text-white shadow-xl">
            <Mail size={34} />
          </div>

          <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
            Stay Connected
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Subscribe to receive the latest project launches,
            construction updates, company announcements, blogs,
            and exclusive real estate insights from Manjeet Pride Group.
          </p>

        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 flex max-w-3xl flex-col gap-4 md:flex-row"
        >

          <input
            type="email"
            placeholder="Enter your email address"
            className="h-16 flex-1 rounded-full border border-white/20 bg-white/10 px-7 text-white placeholder:text-gray-300 outline-none backdrop-blur transition focus:border-[#B08D57]"
          />

          <button
            type="submit"
            className="inline-flex h-16 items-center justify-center gap-2 rounded-full bg-[#B08D57] px-10 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#9A7748]"
          >
            Subscribe
            <ArrowRight size={18} />
          </button>

        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-sm text-gray-400"
        >
          We respect your privacy. No spam. You can unsubscribe at any time.
        </motion.p>

      </div>

    </section>
  );
}