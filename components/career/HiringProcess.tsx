"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Search,
  Users,
  MessageSquare,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Your Application",
    description:
      "Complete the application form or email your updated CV along with the required details.",
  },
  {
    icon: Search,
    title: "Resume Screening",
    description:
      "Our HR team carefully reviews your profile to match your skills with available opportunities.",
  },
  {
    icon: Users,
    title: "HR Interview",
    description:
      "A conversation to understand your experience, career goals, and cultural fit with our organization.",
  },
  {
    icon: MessageSquare,
    title: "Technical / Department Round",
    description:
      "Meet the respective department to discuss your technical expertise and project experience.",
  },
  {
    icon: CheckCircle2,
    title: "Final Selection",
    description:
      "Successful candidates receive an offer with complete onboarding details.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Welcome to Manjeet Pride Group",
    description:
      "Begin your journey with a team dedicated to excellence, innovation, and growth.",
  },
];

export default function HiringProcess() {
  return (
    <section className="bg-[#071A2E] py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Hiring Process
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-white md:text-5xl">
            Your Journey
            <span className="block font-semibold text-[#C9A14A]">
              Starts Here
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our recruitment process is transparent, efficient, and designed
            to help us find talented individuals who share our passion for
            excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-[#C9A14A]/30 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } items-center gap-8`}
                >
                  {/* Card */}
                  <div className="w-full md:w-5/12">
                    <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md transition hover:border-[#C9A14A]">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#C9A14A]">
                        Step {index + 1}
                      </p>

                      <h3 className="mb-4 text-2xl font-semibold text-white">
                        {step.title}
                      </h3>

                      <p className="leading-7 text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#071A2E] bg-[#C9A14A]">
                    <Icon className="h-7 w-7 text-[#071A2E]" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}