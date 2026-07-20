"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Phone,
  Download,
} from "lucide-react";

export default function GalleryCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/gallery/gallery-cta.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#071A2E]/85" />

      {/* Decorative Blur */}
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#0B5FA5]/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#C9A14A]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          <p className="uppercase tracking-[0.4em] text-[#C9A14A]">
            Experience Luxury
          </p>

          <div className="mx-auto my-6 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-5xl font-light leading-tight text-white md:text-6xl">
            Discover Your
            <span className="block font-semibold text-[#C9A14A]">
              Dream Property
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            Every photograph reflects our commitment to quality,
            thoughtful design and creating communities where families
            thrive. Visit our projects and experience the Manjeet Pride
            difference firsthand.
          </p>

          {/* Buttons */}
          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#C9A14A] px-8 py-4 font-semibold text-[#071A2E] transition duration-300 hover:scale-105"
            >
              <Building2 size={20} />
              Explore Projects
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/brochure.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#071A2E]"
            >
              <Download size={18} />
              Download Brochure
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#C9A14A] px-8 py-4 font-semibold text-[#C9A14A] transition duration-300 hover:bg-[#C9A14A] hover:text-[#071A2E]"
            >
              <Phone size={18} />
              Contact Us
            </Link>
          </div>

          {/* Bottom Stats */}
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
                IGBC
              </h3>
              <p className="mt-2 text-gray-300">
                Gold Rated Projects
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}