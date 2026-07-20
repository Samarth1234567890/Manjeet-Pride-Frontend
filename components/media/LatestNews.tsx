"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Manjeet Pride Announces New Premium Residential Development",
    date: "20 July 2026",
    image: "/images/media/news-1.jpg",
    description:
      "A new benchmark in thoughtfully designed living spaces with modern amenities and superior connectivity.",
    href: "/media/new-premium-development",
  },
  {
    id: 2,
    title: "Construction Progress Continues Ahead of Schedule",
    date: "12 July 2026",
    image: "/images/media/news-2.jpg",
    description:
      "Latest construction milestones reflect our commitment to timely delivery and uncompromising quality.",
    href: "/media/construction-progress",
  },
  {
    id: 3,
    title: "Manjeet Pride Celebrates Another Successful Project Launch",
    date: "03 July 2026",
    image: "/images/media/news-3.jpg",
    description:
      "Customers, partners and well-wishers joined us for the grand launch of our newest landmark project.",
    href: "/media/project-launch",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#173042] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
            <Newspaper size={16} />
            Latest News
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#173042] md:text-5xl">
            Stay Updated
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Catch up on our newest announcements, project milestones,
            achievements and company updates.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">

          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid md:grid-cols-[320px_1fr]">

                {/* Image */}
                <div className="relative h-64 md:h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 md:p-10">

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarDays size={16} />
                    {item.date}
                  </div>

                  <h3 className="mt-4 text-3xl font-bold text-[#173042] transition group-hover:text-[#B08D57]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-gray-600 leading-8">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-[#173042] transition hover:text-[#B08D57]"
                  >
                    Continue Reading
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>

                </div>

              </div>
            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}