"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Phone,
  Mail,
} from "lucide-react";

export default function CareerCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/careers/career-cta.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#071A2E]/90" />

      {/* Decorative Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#0B5FA5]/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#C9A14A]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Join Our Team
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-5xl font-light leading-tight text-white md:text-6xl">
            Shape the Future
            <span className="block font-semibold text-[#C9A14A]">
              With Manjeet Pride Group
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            We are always looking for passionate, talented, and driven
            professionals who want to build exceptional projects and create
            lasting communities. Take the next step in your career with us.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="#career-form"
              className="inline-flex items-center gap-2 rounded-full bg-[#C9A14A] px-8 py-4 font-semibold text-[#071A2E] transition duration-300 hover:scale-105"
            >
              <BriefcaseBusiness size={20} />
              Apply Now
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#071A2E]"
            >
              <Phone size={18} />
              Contact HR
            </Link>

            <a
              href="mailto:abdpridegroup@yahoo.com"
              className="inline-flex items-center gap-2 rounded-full border border-[#C9A14A] px-8 py-4 font-semibold text-[#C9A14A] transition duration-300 hover:bg-[#C9A14A] hover:text-[#071A2E]"
            >
              <Mail size={18} />
              Email Us
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold text-[#C9A14A]">
                25+
              </h3>
              <p className="mt-2 text-gray-300">
                Years of Excellence
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C9A14A]">
                20+
              </h3>
              <p className="mt-2 text-gray-300">
                Landmark Projects
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C9A14A]">
                900+
              </h3>
              <p className="mt-2 text-gray-300">
                Happy Families
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C9A14A]">
                Growing
              </h3>
              <p className="mt-2 text-gray-300">
                Career Opportunities
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}