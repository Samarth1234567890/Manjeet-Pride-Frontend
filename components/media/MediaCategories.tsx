"use client";

import { motion } from "framer-motion";

const categories = [
  "All",
  "Company News",
  "Project Updates",
  "Awards",
  "Construction",
  "Events",
  "CSR",
  "Blogs",
];

export default function MediaCategories() {
  return (
    <section className="py-12 bg-[#F8F7F3] border-y border-stone-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.05,
                duration: 0.35,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -3,
                scale: 1.04,
              }}
              whileTap={{ scale: 0.96 }}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300
              ${
                index === 0
                  ? "bg-[#173042] text-white shadow-lg"
                  : "border border-stone-300 bg-white text-stone-700 hover:border-[#B08D57] hover:bg-[#B08D57] hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}