"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about/about-hero.jpg')",
        }}
      />

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2E]/95 via-[#071A2E]/80 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-gray-300">
              Home / About
            </p>

            {/* Gold Accent */}
            <div className="mb-6 h-[3px] w-20 rounded-full bg-[#C9A14A]" />

            {/* Small Title */}
            <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#C9A14A]">
              ABOUT MANJEET PRIDE GROUP
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl font-light leading-tight text-white md:text-7xl">
              Building
              <span className="block font-semibold text-[#C9A14A]">
                Trust & Excellence
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
              For decades, Manjeet Pride Group has been shaping exceptional
              residential and commercial landmarks through innovation,
              integrity, premium craftsmanship, and an unwavering commitment
              to quality.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/projects"
                className="rounded-full bg-[#0B5FA5] px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#0A4C86]"
              >
                Explore Projects
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full border border-[#C9A14A] px-8 py-4 text-[#C9A14A] transition-all duration-300 hover:bg-[#C9A14A] hover:text-[#071A2E]"
              >
                Contact Us
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