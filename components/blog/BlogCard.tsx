"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Tag,
} from "lucide-react";

interface BlogCardProps {
  blog: {
    title: string;
    category: string;
    image: string;
    date: string;
    excerpt: string;
    slug: string;
  };
  index: number;
}

export default function BlogCard({
  blog,
  index,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/70 to-transparent" />

        {/* Category */}
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-[#C9A14A] px-4 py-2 text-xs font-semibold text-[#071A2E]">
          <Tag size={14} />
          {blog.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Date */}
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays size={16} />
          {blog.date}
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 text-2xl font-semibold leading-tight text-[#071A2E] transition group-hover:text-[#C9A14A]">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="mt-4 line-clamp-3 leading-7 text-gray-600">
          {blog.excerpt}
        </p>

        {/* Button */}
        <Link
          href={`/blog/${blog.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-[#071A2E] transition hover:text-[#C9A14A]"
        >
          Read More
          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}