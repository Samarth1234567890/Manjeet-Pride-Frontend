"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function DirectorsHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about/directors-hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2E]/95 via-[#071A2E]/80 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Label */}
            <p className="mb-4 uppercase tracking-[0.4em] text-[#C9A14A]">
              Our Leadership
            </p>

            {/* Gold Line */}
            <div className="mb-6 h-1 w-20 rounded-full bg-[#C9A14A]" />

            {/* Heading */}
            <h1 className="text-5xl font-light leading-tight text-white md:text-7xl">
              Visionary
              <span className="block font-semibold text-[#C9A14A]">
                Leadership
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
              Meet the visionary leaders whose passion, integrity, and
              experience continue to shape Manjeet Pride Group into a trusted
              name in premium real estate development.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="#directors"
                className="rounded-full bg-[#0B5FA5] px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#094D87]"
              >
                Meet Our Directors
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#C9A14A] px-8 py-4 text-[#C9A14A] transition-all duration-300 hover:bg-[#C9A14A] hover:text-[#071A2E]"
              >
                Contact Leadership
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-[#C9A14A]" />
      </motion.div>
    </section>
  );
}