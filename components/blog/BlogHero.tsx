"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowDown, Newspaper } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/blog/blog-hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2E]/95 via-[#071A2E]/80 to-black/70" />

      {/* Decorative Blur */}
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#0B5FA5]/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#C9A14A]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A14A]/40 bg-[#C9A14A]/10 backdrop-blur-md"
        >
          <Newspaper className="h-10 w-10 text-[#C9A14A]" />
        </motion.div>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-300"
        >
          <Link href="/" className="hover:text-[#C9A14A] transition">
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="text-[#C9A14A]">Blogs</span>
        </motion.div>

        {/* Gold Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 90 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mt-8 h-1 rounded-full bg-[#C9A14A]"
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-5xl font-light leading-tight text-white md:text-7xl"
        >
          Latest News &
          <span className="block font-semibold text-[#C9A14A]">
            Insights
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300"
        >
          Stay informed with the latest updates from Manjeet Pride Group,
          including project launches, company news, community initiatives,
          events, real estate insights, and industry trends.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <Link
            href="#featured-blog"
            className="rounded-full bg-[#C9A14A] px-8 py-4 font-semibold text-[#071A2E] transition hover:scale-105"
          >
            Explore Blogs
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071A2E]"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <h3 className="text-3xl font-bold text-[#C9A14A]">25+</h3>
            <p className="mt-2 text-gray-300">Years of Excellence</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <h3 className="text-3xl font-bold text-[#C9A14A]">20+</h3>
            <p className="mt-2 text-gray-300">Landmark Projects</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <h3 className="text-3xl font-bold text-[#C9A14A]">Latest</h3>
            <p className="mt-2 text-gray-300">News & Updates</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-7 w-7 text-[#C9A14A]" />
      </motion.div>
    </section>
  );
}