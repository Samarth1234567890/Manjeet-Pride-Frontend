"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-[#071A2E] py-24">
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#0B5FA5]/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#C9A14A]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-xl"
        >
          <div className="grid items-center gap-12 p-10 lg:grid-cols-2 lg:p-16">
            {/* Left */}
            <div>
              <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
                Stay Updated
              </p>

              <div className="my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

              <h2 className="text-4xl font-light text-white md:text-5xl">
                Join Our
                <span className="block font-semibold text-[#C9A14A]">
                  Newsletter
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Be the first to know about our latest residential,
                commercial, township and plotting projects, exclusive
                launches, offers and real estate updates from
                Manjeet Pride Group.
              </p>
            </div>

            {/* Right */}
            <div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A14A]">
                  <Mail className="h-8 w-8 text-[#071A2E]" />
                </div>

                <form className="space-y-5">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-gray-400 focus:border-[#C9A14A] focus:outline-none"
                  />

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#C9A14A] px-6 py-4 font-semibold text-[#071A2E] transition duration-300 hover:scale-[1.02]"
                  >
                    Subscribe Now
                    <Send size={18} />
                  </button>
                </form>

                <p className="mt-5 text-center text-sm text-gray-400">
                  We respect your privacy. No spam, only valuable updates.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}