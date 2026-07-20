"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

export default function FeaturedArticle() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-xl"
    >
      <div className="grid lg:grid-cols-2">

        {/* Image */}

        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src="/images/media/featured.jpg"
            alt="Featured Story"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <span className="absolute left-6 top-6 rounded-full bg-[#B08D57] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Featured Story
          </span>
        </div>

        {/* Content */}

        <div className="flex flex-col justify-center p-8 md:p-12">

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">

            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              July 2026
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={18} />
              5 min read
            </div>

          </div>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-[#1F2937] md:text-5xl">
            Building Landmarks That
            <span className="text-[#B08D57]"> Inspire Tomorrow</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how Manjeet Pride Group is redefining modern living
            through innovative architecture, sustainable development,
            superior construction quality and thoughtfully planned
            communities that create lasting value.
          </p>

          <div className="mt-8">

            <Link
              href="/media/building-landmarks"
              className="inline-flex items-center gap-2 rounded-full bg-[#173042] px-7 py-4 text-white transition hover:bg-[#0F2230]"
            >
              Read Full Story

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </div>
    </motion.section>
  );
}