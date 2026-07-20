"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  "All",
  "Company News",
  "Projects",
  "Events",
  "CSR",
  "Awards",
  "Real Estate",
];

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="bg-[#F8F9FB] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Explore
          </p>

          <div className="mx-auto my-4 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E]">
            Browse By
            <span className="block font-semibold">
              Category
            </span>
          </h2>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-[#C9A14A] text-[#071A2E] shadow-lg"
                    : "border border-[#071A2E]/20 bg-white text-[#071A2E] hover:border-[#C9A14A] hover:bg-[#071A2E] hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}