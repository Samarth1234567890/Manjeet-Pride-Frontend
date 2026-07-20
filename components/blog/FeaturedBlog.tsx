"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarDays, Tag } from "lucide-react";

export default function FeaturedBlog() {
  return (
    <section
      id="featured-blog"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Featured Story
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
            Latest From
            <span className="block font-semibold">
              Manjeet Pride Group
            </span>
          </h2>
        </motion.div>

        {/* Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl bg-[#F8F9FB] shadow-xl lg:grid lg:grid-cols-2"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src="/images/blog/fathers-day.jpg"
              alt="Father's Day Offer"
              className="h-full w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-10 lg:p-14">
            {/* Badge */}
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#071A2E] px-4 py-2 text-sm font-medium text-[#C9A14A]">
              <Tag size={16} />
              Company News
            </div>

            {/* Date */}
            <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
              <CalendarDays size={16} />
              June 2025
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold leading-tight text-[#071A2E]">
              Father's Day Offer – Suvarna Sanman
              <span className="block mt-2 text-[#C9A14A]">
                A Resounding Success
              </span>
            </h3>

            {/* Description */}
            <p className="mt-6 leading-8 text-gray-600">
              Manjeet Pride Group's exclusive Father's Day campaign,
              <strong> "Suvarna Sanman"</strong>, concluded with an
              overwhelming response. The initiative celebrated fathers
              while offering exclusive opportunities to own premium homes,
              receiving exceptional appreciation from customers across the
              city.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/blog/fathers-day-offer"
                className="inline-flex items-center gap-2 rounded-full bg-[#C9A14A] px-8 py-4 font-semibold text-[#071A2E] transition duration-300 hover:scale-105"
              >
                Read Full Story
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}