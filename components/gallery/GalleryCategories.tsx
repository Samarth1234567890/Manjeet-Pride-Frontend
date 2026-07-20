"use client";

import { motion } from "framer-motion";

interface GalleryCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  "All",
  "Projects",
  "Events",
  "Awards",
  "CSR",
  "Festivals",
  "Community",
];

export default function GalleryCategories({
  activeCategory,
  onCategoryChange,
}: GalleryCategoriesProps) {
  return (
    <section className="bg-[#F8F9FB] py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 md:px-8 md:text-base ${
                activeCategory === category
                  ? "bg-[#071A2E] text-white shadow-lg"
                  : "border border-[#C9A14A] bg-white text-[#071A2E] hover:bg-[#C9A14A] hover:text-[#071A2E]"
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