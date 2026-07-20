"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, ArrowUpRight } from "lucide-react";

interface GalleryCardProps {
  id: number;
  title: string;
  category: string;
  image: string;
  onClick?: () => void;
}

export default function GalleryCard({
  title,
  category,
  image,
  onClick,
}: GalleryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
    >
      {/* Image */}
      <div
        className="relative h-80 cursor-pointer overflow-hidden"
        onClick={onClick}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/90 via-[#071A2E]/20 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

        {/* Category Badge */}
        <div className="absolute left-5 top-5 rounded-full bg-[#C9A14A] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#071A2E]">
          {category}
        </div>

        {/* View Button */}
        <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition duration-300 group-hover:bg-[#C9A14A]">
          <Eye className="h-5 w-5 text-white group-hover:text-[#071A2E]" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-semibold text-white">
            {title}
          </h3>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm text-gray-300">
              View Gallery
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A14A] transition duration-300 group-hover:bg-[#C9A14A]">
              <ArrowUpRight className="h-5 w-5 text-[#C9A14A] group-hover:text-[#071A2E]" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}