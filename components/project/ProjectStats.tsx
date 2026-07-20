"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Trophy,
  Landmark,
  Award,
  Leaf,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "20+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    value: "900+",
    label: "Happy Families",
  },
  {
    icon: Landmark,
    value: "18 Lakh+",
    label: "Sq. Ft. Developed",
  },
  {
    icon: Trophy,
    value: "25+",
    label: "Years of Excellence",
  },
  {
    icon: Award,
    value: "20+",
    label: "Awards & Recognitions",
  },
  {
    icon: Leaf,
    value: "IGBC",
    label: "Gold Rated Projects",
  },
];

export default function ProjectStats() {
  return (
    <section className="relative overflow-hidden bg-[#071A2E] py-24">
      {/* Decorative Glow */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#0B5FA5]/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#C9A14A]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Our Achievements
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-white md:text-5xl">
            Building Trust
            <span className="block font-semibold text-[#C9A14A]">
              Through Excellence
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Every milestone reflects our commitment to quality construction,
            innovation, customer satisfaction, and sustainable development.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-[#C9A14A] hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A14A]">
                  <Icon className="h-8 w-8 text-[#071A2E]" />
                </div>

                <h3 className="mt-8 text-5xl font-bold text-white">
                  {item.value}
                </h3>

                <div className="mt-4 h-1 w-14 rounded-full bg-[#C9A14A]" />

                <p className="mt-5 text-lg font-medium text-gray-300">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}