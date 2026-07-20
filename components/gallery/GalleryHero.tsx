"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ImageIcon, ArrowDown } from "lucide-react";

export default function GalleryHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/gallery/gallery-hero.jpg')",
        }}
      />

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2E]/95 via-[#071A2E]/80 to-black/70" />

      {/* Decorative Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#0B5FA5]/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#C9A14A]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-12">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A14A]/40 bg-[#C9A14A]/10 backdrop-blur-md"
        >
          <ImageIcon className="h-10 w-10 text-[#C9A14A]" />
        </motion.div>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-300"
        >
          <Link href="/" className="hover:text-[#C9A14A] transition">
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="text-[#C9A14A]">Gallery</span>
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
          Moments of
          <span className="block font-semibold text-[#C9A14A]">
            Excellence
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300"
        >
          Explore our journey through landmark developments, memorable
          events, awards, celebrations, and the vibrant communities built
          by Manjeet Pride Group over the years.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <Link
            href="#gallery"
            className="rounded-full bg-[#C9A14A] px-8 py-4 font-semibold text-[#071A2E] transition hover:scale-105"
          >
            Explore Gallery
          </Link>

          <Link
            href="/projects"
            className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071A2E]"
          >
            View Projects
          </Link>
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