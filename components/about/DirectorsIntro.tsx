"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function DirectorsIntro() {
  return (
    <section id="directors" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Director Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/about/chairman.jpg"
                alt="Chairman - Manjeet Pride Group"
                width={700}
                height={850}
                className="h-auto w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Gold Accent */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl border-4 border-[#C9A14A]" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
              Chairman's Message
            </p>

            <div className="my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

            <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
              A Vision Built on
              <span className="block font-semibold">
                Trust & Excellence
              </span>
            </h2>

            <div className="mt-10 rounded-3xl border-l-4 border-[#C9A14A] bg-[#F8F9FB] p-8">
              <Quote className="mb-5 h-10 w-10 text-[#C9A14A]" />

              <p className="text-lg leading-8 text-gray-700 italic">
                "At Manjeet Pride Group, every project is more than a building—
                it is a promise of quality, trust, and a better future for every
                family and business we serve."
              </p>
            </div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Our journey has always been driven by a commitment to innovation,
              transparency, and customer satisfaction. Every development reflects
              our passion for creating spaces that enrich lives and strengthen
              communities.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              As we continue to grow, we remain dedicated to delivering landmark
              projects that stand the test of time while exceeding the
              expectations of our customers and partners.
            </p>

            {/* Signature */}
            <div className="mt-10 border-t border-gray-200 pt-6">
              <h3 className="text-2xl font-semibold text-[#071A2E]">
                Mr. Manjeet Singh
              </h3>

              <p className="mt-2 uppercase tracking-widest text-[#0B5FA5]">
                Chairman & Managing Director
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}