"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Mail, ArrowRight } from "lucide-react";

interface DirectorCardProps {
  name: string;
  designation: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

export default function DirectorCard({
  name,
  designation,
  image,
  bio,
  linkedin,
  email,
}: DirectorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-[420px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/90 via-transparent to-transparent opacity-90" />

        {/* Designation */}
        <div className="absolute bottom-6 left-6">
          <span className="rounded-full bg-[#C9A14A] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#071A2E]">
            {designation}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-[#071A2E]">
          {name}
        </h3>

        <div className="mt-3 h-1 w-14 rounded-full bg-[#C9A14A]" />

        <p className="mt-6 leading-8 text-gray-600">
          {bio}
        </p>

        {/* Social Links */}
        <div className="mt-8 flex items-center gap-4">
          {linkedin && (
            <Link
              href={linkedin}
              target="_blank"
              className="rounded-full border border-gray-300 p-3 transition hover:border-[#0B5FA5] hover:bg-[#0B5FA5] hover:text-white"
            >
              <Linkedin size={18} />
            </Link>
          )}

          {email && (
            <Link
              href={`mailto:${email}`}
              className="rounded-full border border-gray-300 p-3 transition hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-[#071A2E]"
            >
              <Mail size={18} />
            </Link>
          )}
        </div>

        {/* Button */}
        <button className="mt-8 inline-flex items-center gap-2 font-medium text-[#0B5FA5] transition-all duration-300 hover:gap-3">
          View Profile
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}