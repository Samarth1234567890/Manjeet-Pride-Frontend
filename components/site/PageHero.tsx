"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  image: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#163d6c]/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-32 sm:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-3xl text-white"
        >
          {eyebrow && (
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A54C]">
              {eyebrow}
            </p>
          )}

          <h1 className="font-serif text-5xl font-light leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          {description && (
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
              {description}
            </p>
          )}
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}