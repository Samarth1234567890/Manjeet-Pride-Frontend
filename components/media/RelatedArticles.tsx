"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

const relatedArticles = [
  {
    id: 1,
    title: "Redefining Premium Living Through Modern Design",
    category: "Architecture",
    date: "18 July 2026",
    image: "/images/media/related-1.jpg",
    href: "/media/redefining-premium-living",
  },
  {
    id: 2,
    title: "Construction Milestones Achieved Ahead of Schedule",
    category: "Project Update",
    date: "12 July 2026",
    image: "/images/media/related-2.jpg",
    href: "/media/construction-milestones",
  },
  {
    id: 3,
    title: "Creating Communities That Inspire Future Generations",
    category: "Company News",
    date: "05 July 2026",
    image: "/images/media/related-3.jpg",
    href: "/media/creating-communities",
  },
];

export default function RelatedArticles() {
  return (
    <section className="bg-[#F8F7F3] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full bg-[#B08D57]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
            Continue Reading
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#173042] md:text-5xl">
            Related Articles
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Discover more stories, project updates and insights from
            Manjeet Pride Group.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {relatedArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <span className="absolute left-5 top-5 rounded-full bg-[#B08D57] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CalendarDays size={16} />
                  {article.date}
                </div>

                <h3 className="mt-4 text-2xl font-bold leading-snug text-[#173042] transition group-hover:text-[#B08D57]">
                  {article.title}
                </h3>

                <Link
                  href={article.href}
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-[#173042] transition hover:text-[#B08D57]"
                >
                  Read Article
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