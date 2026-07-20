"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  {
    id: 1,
    image: "/images/media/gallery-1.jpg",
    title: "Project Overview",
  },
  {
    id: 2,
    image: "/images/media/gallery-2.jpg",
    title: "Construction Progress",
  },
  {
    id: 3,
    image: "/images/media/gallery-3.jpg",
    title: "Site Development",
  },
  {
    id: 4,
    image: "/images/media/gallery-4.jpg",
    title: "Modern Architecture",
  },
  {
    id: 5,
    image: "/images/media/gallery-5.jpg",
    title: "Premium Amenities",
  },
  {
    id: 6,
    image: "/images/media/gallery-6.jpg",
    title: "Completed Spaces",
  },
];

export default function ArticleGallery() {
  return (
    <section className="bg-[#F8F7F3] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full bg-[#B08D57]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
            Gallery
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#173042] md:text-5xl">
            Project Gallery
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Explore a glimpse of our construction quality, architectural
            excellence, thoughtfully designed spaces, and premium lifestyle
            developments.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl bg-white shadow-md"
            >
              <div className="relative h-72 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 translate-y-8 p-6 transition duration-500 group-hover:translate-y-0">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}