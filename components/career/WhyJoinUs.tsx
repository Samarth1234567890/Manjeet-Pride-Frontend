"use client";

import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  GraduationCap,
  ShieldCheck,
  Building2,
  HeartHandshake,
} from "lucide-react";

const benefits = [
  {
    icon: Building2,
    title: "Industry Leadership",
    description:
      "Work with one of Chh. Sambhajinagar's leading real estate developers, delivering landmark residential and commercial projects.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Unlock continuous learning, exciting challenges, and opportunities to grow professionally within the organization.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description:
      "Enhance your skills through mentorship, practical experience, and continuous professional development.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Join a passionate team that values teamwork, innovation, mutual respect, and shared success.",
  },
  {
    icon: HeartHandshake,
    title: "Employee Well-being",
    description:
      "We believe happy employees create great communities, fostering a healthy and positive workplace.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Trust",
    description:
      "Build your career with an organization committed to quality, transparency, and customer trust.",
  },
];

export default function WhyJoinUs() {
  return (
    <section className="bg-[#F8F9FB] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Why Join Us
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
            Build More Than
            <span className="block font-semibold text-[#071A2E]">
              Just A Career
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Manjeet Pride Group, you'll be part of a team that creates
            exceptional spaces while building a rewarding and meaningful career.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#C9A14A] hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071A2E] transition group-hover:bg-[#C9A14A]">
                  <Icon className="h-8 w-8 text-[#C9A14A] transition group-hover:text-[#071A2E]" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-[#071A2E]">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}