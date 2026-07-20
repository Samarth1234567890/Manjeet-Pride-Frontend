"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "Manjeet Pride Developers",
    description:
      "Delivering premium residential and commercial developments with modern architecture and exceptional quality.",
    image: "/images/about/company1.jpg",
  },
  {
    id: 2,
    name: "Manjeet Pride Infrastructure",
    description:
      "Building world-class infrastructure projects focused on innovation, sustainability, and long-term value.",
    image: "/images/about/company2.jpg",
  },
  {
    id: 3,
    name: "Manjeet Pride Realty",
    description:
      "Providing trusted real estate solutions with customer-first service and premium property experiences.",
    image: "/images/about/company3.jpg",
  },
];

export default function GroupCompanies() {
  return (
    <section className="bg-[#F8F9FB] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Our Group
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
            Companies That
            <span className="block font-semibold">Build Excellence</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every company within the Manjeet Pride Group shares the same
            commitment to innovation, quality, and customer satisfaction.
          </p>
        </motion.div>

        {/* Company Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/90 via-[#071A2E]/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-semibold text-[#071A2E]">
                  {company.name}
                </h3>

                <p className="mb-8 leading-8 text-gray-600">
                  {company.description}
                </p>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 font-medium text-[#0B5FA5] transition hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}