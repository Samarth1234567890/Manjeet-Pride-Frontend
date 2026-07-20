"use client";

import { motion } from "framer-motion";
import GalleryCard from "@/components/gallery/GalleryCard";
import { galleryItems } from "@/components/data/gallery";

interface GalleryGridProps {
  activeCategory: string;
}

export default function GalleryGrid({
  activeCategory,
}: GalleryGridProps) {
  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section
      id="gallery"
      className="bg-[#F8F9FB] py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Gallery Collection
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
            Explore Our
            <span className="block font-semibold">
              Journey
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Browse our premium developments, events, awards,
            celebrations and memorable milestones.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
            >
              <GalleryCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}