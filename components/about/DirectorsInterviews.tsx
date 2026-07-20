"use client";

import { motion } from "framer-motion";
import { Play, Quote, Award, Building2, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DirectorsInterviews() {
  return (
    <section className="bg-[#071A2E] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left - Video */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/about/interview-thumbnail.jpg"
              alt="Director Interview"
              width={800}
              height={600}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40" />

            {/* Play Button */}
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C9A14A] text-[#071A2E] transition duration-300 hover:scale-110"
            >
              <Play className="ml-1 h-8 w-8 fill-current" />
            </Link>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
              Leadership Insights
            </p>

            <div className="my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

            <h2 className="text-4xl font-light leading-tight md:text-5xl">
              Hear From Our
              <span className="block font-semibold text-[#C9A14A]">
                Leadership
              </span>
            </h2>

            {/* Quote */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <Quote className="mb-5 h-10 w-10 text-[#C9A14A]" />

              <p className="text-lg leading-8 text-gray-300 italic">
                "Our vision extends beyond constructing buildings. We create
                vibrant communities, lasting relationships, and spaces that
                inspire generations."
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <Award className="mb-4 h-10 w-10 text-[#C9A14A]" />
                <h3 className="font-semibold">Quality</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Premium construction standards.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <Building2 className="mb-4 h-10 w-10 text-[#C9A14A]" />
                <h3 className="font-semibold">Innovation</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Modern design with sustainable thinking.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <Users className="mb-4 h-10 w-10 text-[#C9A14A]" />
                <h3 className="font-semibold">Trust</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Building lifelong customer relationships.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}