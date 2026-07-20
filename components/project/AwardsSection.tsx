"use client";

import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Building2,
  Trophy,
  Star,
} from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "PMAY Award",
    description:
      "Recognized for delivering quality and affordable housing with excellence.",
  },
  {
    icon: Award,
    title: "IGBC Gold Rated",
    description:
      "Developing environmentally responsible projects with sustainable construction practices.",
  },
  {
    icon: Building2,
    title: "CREDAI Member",
    description:
      "Proud member of CREDAI, committed to ethical and transparent real estate development.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Developer",
    description:
      "Thousands of families trust Manjeet Pride Group for quality construction and timely delivery.",
  },
];

const certificates = [
  "PMAY Excellence",
  "IGBC Gold",
  "CREDAI",
  "ISO Quality",
  "Customer Choice",
  "Construction Excellence",
];

export default function AwardsSection() {
  return (
    <section className="relative overflow-hidden bg-[#071A2E] py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#0B5FA5]/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#C9A14A]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Awards & Recognition
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-5xl font-light text-white">
            Excellence
            <span className="block font-semibold text-[#C9A14A]">
              Recognized
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our commitment to quality, innovation and customer satisfaction
            has earned recognition from respected organizations and
            industry leaders.
          </p>
        </motion.div>

        {/* Award Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {awards.map((award, index) => {
            const Icon = award.icon;

            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-[#C9A14A] hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A14A]">
                  <Icon className="h-8 w-8 text-[#071A2E]" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {award.title}
                </h3>

                <div className="mt-4 h-1 w-14 bg-[#C9A14A]" />

                <p className="mt-6 leading-8 text-gray-300">
                  {award.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Recognition Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .5 }}
          className="mt-20 overflow-hidden rounded-full border border-white/10 bg-white/5 py-5"
        >
          <div className="flex animate-[scroll_25s_linear_infinite] whitespace-nowrap">
            {[...certificates, ...certificates].map((item, index) => (
              <div
                key={index}
                className="mx-10 flex items-center gap-3"
              >
                <Star
                  className="text-[#C9A14A]"
                  size={18}
                  fill="currentColor"
                />

                <span className="text-lg text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}