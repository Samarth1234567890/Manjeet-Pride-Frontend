"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Globe,
  Linkedin,
  ArrowRight,
  Award,
} from "lucide-react";

export default function AuthorCard() {
  return (
    <section className="bg-[#F8F7F3] py-20">
      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-xl"
        >
          <div className="grid gap-10 p-8 md:grid-cols-[220px_1fr] md:p-12">

            {/* Author Image */}

            <div className="flex justify-center md:block">
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-[#B08D57]/20">

                <Image
                  src="/images/team/editor.jpg"
                  alt="Author"
                  fill
                  className="object-cover"
                />

              </div>
            </div>

            {/* Content */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full bg-[#F3E9D8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                <Award size={15} />
                Editorial Team
              </span>

              <h3 className="mt-5 text-3xl font-bold text-[#173042]">
                Manjeet Pride Editorial Team
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                Our editorial team shares the latest company updates,
                construction milestones, project launches, real estate
                insights and industry knowledge to keep customers,
                investors and homebuyers informed about everything
                happening at Manjeet Pride Group.
              </p>

              {/* Stats */}

              <div className="mt-8 grid gap-5 sm:grid-cols-3">

                <div className="rounded-2xl bg-[#F8F7F3] p-5 text-center">
                  <h4 className="text-3xl font-bold text-[#173042]">
                    100+
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Articles Published
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F8F7F3] p-5 text-center">
                  <h4 className="text-3xl font-bold text-[#173042]">
                    15+
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Years of Excellence
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F8F7F3] p-5 text-center">
                  <h4 className="text-3xl font-bold text-[#173042]">
                    Trusted
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    Real Estate Brand
                  </p>
                </div>

              </div>

              {/* Links */}

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="mailto:info@manjeetpridegroup.com"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 font-medium transition hover:border-[#B08D57] hover:text-[#B08D57]"
                >
                  <Mail size={18} />
                  Email
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 font-medium transition hover:border-[#B08D57] hover:text-[#B08D57]"
                >
                  <Globe size={18} />
                  Website
                </Link>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 font-medium transition hover:border-[#B08D57] hover:text-[#B08D57]"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </Link>

              </div>

              {/* CTA */}

              <Link
                href="/media"
                className="mt-10 inline-flex items-center gap-2 font-semibold text-[#173042] transition hover:text-[#B08D57]"
              >
                Explore More Articles
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}