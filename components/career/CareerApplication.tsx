"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Upload,
  FileText,
  User,
  Phone,
  Briefcase,
  Send,
} from "lucide-react";

export default function CareerApplication() {
  return (
    <section
      id="career-form"
      className="bg-[#F8F9FB] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            HOW TO APPLY
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
            Join Our
            <span className="block font-semibold">
              Growing Team
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071A2E]">
                <Mail className="text-[#C9A14A]" size={30} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#071A2E]">
                  Send Us An Email
                </h3>

                <p className="mt-2 text-gray-600">
                  abdpridegroup@yahoo.com
                </p>
              </div>
            </div>

            {/* CV */}
            <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071A2E]">
                <Upload className="text-[#C9A14A]" size={30} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#071A2E]">
                  Include Your CV
                </h3>

                <p className="mt-2 text-gray-600">
                  Attach your updated CV along with all
                  relevant details.
                </p>
              </div>
            </div>

            {/* Subject */}
            <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071A2E]">
                <FileText className="text-[#C9A14A]" size={30} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#071A2E]">
                  Subject Line
                </h3>

                <p className="mt-2 text-gray-600">
                  Job Application for Manjeet Pride Group
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 shadow-xl"
          >
            <form className="space-y-6">
              <div className="relative">
                <User className="absolute left-4 top-4 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-gray-300 py-4 pl-12 pr-4 outline-none focus:border-[#C9A14A]"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-300 py-4 pl-12 pr-4 outline-none focus:border-[#C9A14A]"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-4 text-gray-400" size={20} />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-gray-300 py-4 pl-12 pr-4 outline-none focus:border-[#C9A14A]"
                />
              </div>

              <input
                type="text"
                placeholder="Years of Experience"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#C9A14A]"
              />

              <div className="relative">
                <Briefcase className="absolute left-4 top-4 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Job Position"
                  className="w-full rounded-xl border border-gray-300 py-4 pl-12 pr-4 outline-none focus:border-[#C9A14A]"
                />
              </div>

              <input
                type="file"
                className="w-full rounded-xl border border-gray-300 p-4 file:mr-4 file:rounded-lg file:border-0 file:bg-[#071A2E] file:px-4 file:py-2 file:text-white"
              />

              <textarea
                rows={5}
                placeholder="Cover Letter (Optional)"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#C9A14A]"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#071A2E] py-4 font-semibold text-white transition hover:bg-[#C9A14A] hover:text-[#071A2E]"
              >
                <Send size={18} />
                Apply Now
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}