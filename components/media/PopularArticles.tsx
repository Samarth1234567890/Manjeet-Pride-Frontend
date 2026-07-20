"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, CalendarDays } from "lucide-react";

const popularArticles = [
  {
    id: 1,
    title: "The Future of Premium Living in Pune",
    category: "Real Estate",
    date: "18 Jul 2026",
    image: "/images/media/popular-1.jpg",
    href: "/media/future-of-premium-living",
  },
  {
    id: 2,
    title: "Construction Quality That Builds Trust",
    category: "Construction",
    date: "12 Jul 2026",
    image: "/images/media/popular-2.jpg",
    href: "/media/construction-quality",
  },
  {
    id: 3,
    title: "Inside Our Latest Landmark Development",
    category: "Projects",
    date: "05 Jul 2026",
    image: "/images/media/popular-3.jpg",
    href: "/media/latest-landmark-development",
  },
];

export default function PopularArticles() {
  return (
    <section className="bg-[#F8F7F3] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#173042] px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
            <TrendingUp size={16} />
            Popular Reads
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#173042] md:text-5xl">
            Most Read Articles
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Explore the stories our readers are engaging with the most.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">

          {popularArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">

                <span className="inline-block rounded-full bg-[#F3E9D8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#B08D57]">
                  {article.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold leading-snug text-[#173042] transition group-hover:text-[#B08D57]">
                  {article.title}
                </h3>

                <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                  <CalendarDays size={16} />
                  {article.date}
                </div>

                <Link
                  href={article.href}
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-[#173042] transition hover:text-[#B08D57]"
                >
                  Read More
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

              </div>
            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}