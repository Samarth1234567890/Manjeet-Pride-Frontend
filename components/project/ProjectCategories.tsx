"use client";

import { motion } from "framer-motion";
import { Building2, Home, Landmark, MapPinned, Layers, Grid2x2 } from "lucide-react";

const categories = [
  {
    id: "all",
    title: "All Projects",
    icon: Grid2x2,
  },
  {
    id: "residential",
    title: "Residential",
    icon: Home,
  },
  {
    id: "commercial",
    title: "Commercial",
    icon: Building2,
  },
  {
    id: "township",
    title: "Township",
    icon: Landmark,
  },
  {
    id: "plotting",
    title: "Plotting",
    icon: MapPinned,
  },
  {
    id: "ongoing",
    title: "Ongoing",
    icon: Layers,
  },
  {
    id: "completed",
    title: "Completed",
    icon: Layers,
  },
];

export default function ProjectCategories() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Browse Projects
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
            Find Your
            <span className="block font-semibold">
              Perfect Property
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our portfolio of premium residential, commercial,
            township, and plotting developments designed for modern living.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.04,
                }}
                whileTap={{ scale: 0.96 }}
                className={`group flex items-center gap-3 rounded-full border px-7 py-4 transition-all duration-300
                ${
                  category.id === "all"
                    ? "border-[#C9A14A] bg-[#071A2E] text-white shadow-lg"
                    : "border-gray-200 bg-white text-[#071A2E] hover:border-[#C9A14A] hover:bg-[#071A2E] hover:text-white hover:shadow-xl"
                }`}
              >
                <Icon
                  size={20}
                  className="text-[#C9A14A] transition-colors"
                />

                <span className="font-medium">
                  {category.title}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}