"use client";

import { motion } from "framer-motion";
import { Building2, Target, Eye } from "lucide-react";

export default function CompanyProfile() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 uppercase tracking-[0.35em] text-[#C9A14A]">
              Company Profile
            </p>

            <div className="mb-6 h-1 w-20 rounded-full bg-[#C9A14A]" />

            <h2 className="text-4xl font-light leading-tight text-[#071A2E] md:text-5xl">
              Creating Landmarks
              <span className="block font-semibold">
                That Inspire Generations
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Manjeet Pride Group has earned a reputation for delivering
              thoughtfully designed residential and commercial developments.
              Every project reflects superior craftsmanship, innovative
              planning, and a commitment to customer satisfaction.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              With years of experience and a strong foundation of trust,
              we continue to build spaces that enrich communities and
              redefine urban living.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div>
                <h3 className="text-3xl font-bold text-[#0B5FA5]">20+</h3>
                <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">
                  Years
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#0B5FA5]">50+</h3>
                <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#0B5FA5]">5000+</h3>
                <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">
                  Families
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#0B5FA5]">100%</h3>
                <p className="mt-2 text-sm uppercase tracking-wide text-gray-500">
                  Trust
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* About Card */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <Building2 className="mb-5 h-12 w-12 text-[#C9A14A]" />

              <h3 className="mb-4 text-2xl font-semibold text-[#071A2E]">
                Who We Are
              </h3>

              <p className="leading-8 text-gray-600">
                We are a trusted real estate developer committed to delivering
                premium residential and commercial spaces with timeless design,
                quality construction, and lasting value.
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-3xl border border-gray-200 bg-[#071A2E] p-8 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <Target className="mb-5 h-12 w-12 text-[#C9A14A]" />

              <h3 className="mb-4 text-2xl font-semibold">
                Our Mission
              </h3>

              <p className="leading-8 text-gray-300">
                To create world-class developments that enhance lifestyles,
                deliver long-term value, and exceed customer expectations.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <Eye className="mb-5 h-12 w-12 text-[#C9A14A]" />

              <h3 className="mb-4 text-2xl font-semibold text-[#071A2E]">
                Our Vision
              </h3>

              <p className="leading-8 text-gray-600">
                To become one of India's most respected real estate brands by
                building sustainable communities that inspire future
                generations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}