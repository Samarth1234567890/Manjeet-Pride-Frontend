"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star, Quote } from "lucide-react";

const stats = [
  { number: "5000+", label: "Happy Families" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "50+", label: "Premium Projects" },
];

export default function TestimonialsHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/testimonials/testimonials-hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2E]/95 via-[#071A2E]/85 to-black/60" />

      {/* Floating Glow */}
      <div className="absolute left-10 top-20 h-56 w-56 rounded-full bg-[#0B5FA5]/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-[#C9A14A]/20 blur-3xl" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-4 uppercase tracking-[0.35em] text-[#C9A14A]">
                Client Testimonials
              </p>

              <div className="mb-6 h-1 w-20 rounded-full bg-[#C9A14A]" />

              <h1 className="text-5xl font-light leading-tight text-white md:text-7xl">
                Stories of
                <span className="block font-semibold text-[#C9A14A]">
                  Trust & Happiness
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                Every project we deliver creates lasting relationships. Hear
                directly from the families and businesses who trusted Manjeet
                Pride Group to bring their dreams to life.
              </p>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                {stats.map((item) => (
                  <div key={item.label}>
                    <h3 className="text-4xl font-bold text-[#C9A14A]">
                      {item.number}
                    </h3>
                    <p className="mt-2 text-sm uppercase tracking-widest text-gray-300">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Floating Review Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">
                <Quote className="mb-6 h-12 w-12 text-[#C9A14A]" />

                <p className="text-lg italic leading-8 text-gray-200">
                  "The quality, professionalism, and timely delivery exceeded
                  our expectations. Choosing Manjeet Pride Group was one of the
                  best decisions for our family."
                </p>

                <div className="mt-8 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-[#C9A14A] text-[#C9A14A]"
                    />
                  ))}
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-white">
                    Amit Sharma
                  </h3>

                  <p className="text-sm uppercase tracking-widest text-gray-400">
                    Happy Homeowner
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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