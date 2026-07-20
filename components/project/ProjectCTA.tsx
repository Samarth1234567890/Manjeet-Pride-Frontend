"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Phone } from "lucide-react";

export default function ProjectCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/projects/project-cta-bg.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2E]/95 via-[#071A2E]/85 to-black/70" />

      {/* Decorative Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#0B5FA5]/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#C9A14A]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[40px] border border-white/10 bg-white/10 p-10 backdrop-blur-xl lg:p-16"
        >
          <div className="mx-auto max-w-4xl text-center">
            {/* Tag */}
            <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
              Begin Your Journey
            </p>

            <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

            {/* Heading */}
            <h2 className="text-4xl font-light text-white md:text-6xl">
              Find Your
              <span className="block font-semibold text-[#C9A14A]">
                Dream Property
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Discover premium residences, townships, commercial spaces,
              and plotting developments thoughtfully designed for a modern,
              comfortable, and future-ready lifestyle.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              {/* Book Visit */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#C9A14A] px-8 py-4 font-semibold text-[#071A2E] transition duration-300 hover:scale-105"
              >
                Book Site Visit
                <ArrowRight size={18} />
              </Link>

              {/* Download Brochure */}
              <Link
                href="/brochure.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#071A2E]"
              >
                <Download size={18} />
                Download Brochure
              </Link>

              {/* Call */}
              <Link
                href="tel:+919168143690"
                className="inline-flex items-center gap-2 rounded-full border border-[#C9A14A] px-8 py-4 font-semibold text-[#C9A14A] transition duration-300 hover:bg-[#C9A14A] hover:text-[#071A2E]"
              >
                <Phone size={18} />
                Call Sales
              </Link>
            </div>

            {/* Small Note */}
            <p className="mt-10 text-sm tracking-wide text-gray-400">
              Trusted by 900+ families • 25+ years of excellence • Premium developments across Chh. Sambhajinagar
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}