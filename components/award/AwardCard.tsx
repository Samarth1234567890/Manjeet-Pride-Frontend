"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AwardCardProps {
  title: string;
  organization: string;
  year: string;
  image: string;
  description: string;
}

export default function AwardCard({
  title,
  organization,
  year,
  image,
  description,
}: AwardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">
        <span className="text-sm font-semibold text-[#6A8791]">
          {year}
        </span>

        <h3 className="text-xl font-semibold text-gray-800 mt-2">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          {organization}
        </p>

        <p className="text-gray-600 mt-4 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}