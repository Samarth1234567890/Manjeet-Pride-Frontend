"use client";

import { motion } from "framer-motion";
import {
  BadgeIndianRupee,
  GraduationCap,
  BriefcaseBusiness,
  Trophy,
  HeartHandshake,
  Laptop,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeIndianRupee,
    title: "Competitive Salary",
    description:
      "We offer attractive compensation packages that reward talent, dedication, and performance.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description:
      "Upskill through continuous learning, mentorship, and hands-on experience on landmark projects.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Growth",
    description:
      "Grow your career with challenging opportunities and a clear path for professional advancement.",
  },
  {
    icon: Trophy,
    title: "Recognition & Rewards",
    description:
      "Your achievements are celebrated through performance recognition and career milestones.",
  },
  {
    icon: HeartHandshake,
    title: "Positive Work Culture",
    description:
      "Collaborate with passionate professionals in a supportive and inclusive work environment.",
  },
  {
    icon: Laptop,
    title: "Modern Workplace",
    description:
      "Work with advanced tools, innovative processes, and a dynamic team focused on excellence.",
  },
];

export default function CareerBenefits() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Employee Benefits
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
            Benefits That Help You
            <span className="block font-semibold">
              Grow & Succeed
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We invest in our people by providing an inspiring workplace,
            opportunities for growth, and benefits that support both
            personal and professional success.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-gray-200 bg-[#F8F9FB] p-8 transition-all duration-300 hover:border-[#C9A14A] hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071A2E] transition-all duration-300 group-hover:bg-[#C9A14A]">
                  <Icon className="h-8 w-8 text-[#C9A14A] group-hover:text-[#071A2E]" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-[#071A2E]">
                  {benefit.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}