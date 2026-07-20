"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Building2,
  Maximize2,
} from "lucide-react";

interface ProjectCardProps {
  title: string;
  image: string;
  location: string;
  configuration: string;
  area: string;
  status: "Ongoing" | "Completed" | "Upcoming" | "Sold Out";
  type: "Residential" | "Commercial" | "Township" | "Plotting";
  description: string;
  href: string;
}

export default function ProjectCard({
  title,
  image,
  location,
  configuration,
  area,
  status,
  type,
  description,
  href,
}: ProjectCardProps) {
  const statusColor = {
    Ongoing: "bg-green-600",
    Completed: "bg-blue-600",
    Upcoming: "bg-amber-500",
    "Sold Out": "bg-red-600",
  };

  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/90 via-transparent to-transparent" />

        {/* Status */}
        <span
          className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white ${statusColor[status]}`}
        >
          {status}
        </span>

        {/* Type */}
        <span className="absolute right-5 top-5 rounded-full bg-[#C9A14A] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#071A2E]">
          {type}
        </span>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-[#071A2E]">
          {title}
        </h3>

        <div className="mt-4 h-1 w-14 rounded-full bg-[#C9A14A]" />

        <div className="mt-6 space-y-4 text-gray-600">

          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-[#0B5FA5]" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-3">
            <Building2 size={18} className="text-[#0B5FA5]" />
            <span>{configuration}</span>
          </div>

          <div className="flex items-center gap-3">
            <Maximize2 size={18} className="text-[#0B5FA5]" />
            <span>{area}</span>
          </div>

        </div>

        <p className="mt-6 line-clamp-3 leading-7 text-gray-600">
          {description}
        </p>

        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0B5FA5] transition-all duration-300 hover:gap-4"
        >
          View Project
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.article>
  );
}