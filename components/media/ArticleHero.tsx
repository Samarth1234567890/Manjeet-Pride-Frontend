"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, Clock3, User2 } from "lucide-react";

export default function ArticleHero() {
  return (
    <section className="relative overflow-hidden">

      {/* Hero Image */}
      <div className="relative h-[70vh] min-h-[520px] w-full">

        <Image
          src="/images/media/article-hero.jpg"
          alt="Article Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0E2230]/95 via-[#0E2230]/55 to-black/20" />

      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end">

        <div className="mx-auto w-full max-w-7xl px-6 pb-20">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >

            {/* Category */}
            <span className="inline-flex rounded-full bg-[#B08D57] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Project Update
            </span>

            {/* Title */}
            <h1 className="mt-7 text-4xl font-bold leading-tight text-white md:text-6xl">
              Building Landmarks
              <br />
              That Inspire Tomorrow
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-200">
              Discover how Manjeet Pride Group is shaping modern
              communities through thoughtful planning, premium
              construction quality and a commitment to delivering
              exceptional living experiences.
            </p>

            {/* Meta */}
            <div className="mt-10 flex flex-wrap gap-8 text-white">

              <div className="flex items-center gap-3">
                <CalendarDays size={18} />
                <span>20 July 2026</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 size={18} />
                <span>6 min read</span>
              </div>

              <div className="flex items-center gap-3">
                <User2 size={18} />
                <span>Manjeet Pride Editorial Team</span>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}