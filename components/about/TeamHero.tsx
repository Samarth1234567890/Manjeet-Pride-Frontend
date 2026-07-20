"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const stats = [
  { number: "150+", label: "Professionals" },
  { number: "20+", label: "Years Experience" },
  { number: "50+", label: "Projects Delivered" },
  { number: "5000+", label: "Happy Families" },
];

export default function TeamHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about/team-hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2E]/95 via-[#071A2E]/80 to-black/60" />

      {/* Decorative Blurs */}
      <div className="absolute left-10 top-24 h-48 w-48 rounded-full bg-[#0B5FA5]/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-56 w-56 rounded-full bg-[#C9A14A]/20 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="mb-4 uppercase tracking-[0.4em] text-[#C9A14A]">
              Our Team
            </p>

            <div className="mb-6 h-1 w-20 rounded-full bg-[#C9A14A]" />

            <h1 className="text-5xl font-light leading-tight text-white md:text-7xl">
              The People Behind
              <span className="block font-semibold text-[#C9A14A]">
                Every Landmark
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
              Our strength lies in a passionate team of architects, engineers,
              designers, project managers, and professionals dedicated to
              delivering exceptional developments with precision and care.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <h3 className="text-4xl font-bold text-[#C9A14A]">
                  {item.number}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-widest text-gray-300">
                  {item.label}
                </p>
              </div>
            ))}
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