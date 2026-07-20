"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const gallery = [
  {
    id: 1,
    image: "/images/team/gallery-1.jpg",
    title: "Leadership Meeting",
    category: "Corporate",
    height: "h-[520px]",
  },
  {
    id: 2,
    image: "/images/team/gallery-2.jpg",
    title: "Project Site Visit",
    category: "Projects",
    height: "h-[250px]",
  },
  {
    id: 3,
    image: "/images/team/gallery-3.jpg",
    title: "Annual Celebration",
    category: "Culture",
    height: "h-[250px]",
  },
  {
    id: 4,
    image: "/images/team/gallery-4.jpg",
    title: "Engineering Team",
    category: "Teamwork",
    height: "h-[520px]",
  },
  {
    id: 5,
    image: "/images/team/gallery-5.jpg",
    title: "Client Interaction",
    category: "Customer First",
    height: "h-[250px]",
  },
  {
    id: 6,
    image: "/images/team/gallery-6.jpg",
    title: "Award Ceremony",
    category: "Achievement",
    height: "h-[250px]",
  },
];

export default function TeamGallery() {
  return (
    <section className="bg-[#F8F9FB] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Life At Manjeet Pride
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
            Moments That Define
            <span className="block font-semibold">
              Our Journey
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Behind every successful project is a passionate team working
            together with dedication, innovation, and a shared vision for
            excellence.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
              }}
              className={`group relative overflow-hidden rounded-3xl ${item.height}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/95 via-[#071A2E]/30 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6">
                <span className="rounded-full bg-[#C9A14A] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#071A2E]">
                  {item.category}
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}