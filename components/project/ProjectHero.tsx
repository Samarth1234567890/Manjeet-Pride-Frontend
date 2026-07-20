"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const stats = [
  {
    number: "25+",
    label: "Years of Excellence",
  },
  {
    number: "20+",
    label: "Projects Delivered",
  },
  {
    number: "900+",
    label: "Happy Families",
  },
  {
    number: "18 Lakh+",
    label: "Sq. Ft. Developed",
  },
];

interface ProjectHeroProps {
  eyebrow?: string;
  title?: ReactNode;
  image?: string;
  description?: string;
}

export default function ProjectHero({
  eyebrow = "Our Projects",
  title = (
    <>
      Building
      <span className="block font-semibold text-[#C9A14A]">
        Landmark Spaces
      </span>
    </>
  ),
  image = "/images/projects/projects-hero.jpg",
  description = "Discover thoughtfully designed residential, commercial, township, and plotting developments crafted with innovation, quality, sustainability, and a commitment to enriching modern lifestyles.",
}: ProjectHeroProps) {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2E]/95 via-[#071A2E]/80 to-black/60" />

      {/* Decorative Blur */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#0B5FA5]/20 blur-3xl" />

      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#C9A14A]/20 blur-3xl" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-5 uppercase tracking-[0.35em] text-[#C9A14A]">
                {eyebrow}
              </p>

              <div className="mb-6 h-1 w-20 rounded-full bg-[#C9A14A]" />

              <h1 className="text-5xl font-light leading-tight text-white md:text-7xl">
                {title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                {description}
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  href="#featured-projects"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C9A14A] px-8 py-4 font-semibold text-[#071A2E] transition hover:scale-105"
                >
                  Explore Projects
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071A2E]"
                >
                  Book Site Visit
                </Link>

              </div>
            </motion.div>


            {/* Right Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur-xl"
            >

              <h2 className="text-3xl font-semibold text-white">
                Excellence Built Over Decades
              </h2>


              <p className="mt-5 leading-8 text-gray-300">
                From iconic townships to premium residences and commercial
                landmarks, every Manjeet Pride project is designed to deliver
                exceptional quality, sustainable living, and long-term value.
              </p>


              <div className="mt-10 grid grid-cols-2 gap-6">

                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >

                    <h3 className="text-3xl font-bold text-[#C9A14A]">
                      {item.number}
                    </h3>

                    <p className="mt-2 text-sm uppercase tracking-widest text-gray-300">
                      {item.label}
                    </p>

                  </div>
                ))}

              </div>

            </motion.div>

          </div>
        </div>
      </div>


      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-[#C9A14A]" />
      </motion.div>

    </section>
  );
}