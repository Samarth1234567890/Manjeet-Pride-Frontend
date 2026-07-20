"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Project Update",
    title: "Construction Progress Reaches Another Major Milestone",
    description:
      "Our latest residential development continues to progress on schedule with exceptional quality and engineering excellence.",
    image: "/images/media/media-1.jpg",
    date: "15 July 2026",
    href: "/media/construction-progress",
  },
  {
    id: 2,
    category: "Company News",
    title: "Delivering Homes Built on Trust & Quality",
    description:
      "Manjeet Pride continues its commitment to creating premium homes designed for modern families.",
    image: "/images/media/media-2.jpg",
    date: "10 July 2026",
    href: "/media/delivering-trust",
  },
  {
    id: 3,
    category: "Events",
    title: "Celebrating Another Successful Project Launch",
    description:
      "A memorable launch event attended by customers, partners and the entire Manjeet Pride family.",
    image: "/images/media/media-3.jpg",
    date: "05 July 2026",
    href: "/media/project-launch",
  },
  {
    id: 4,
    category: "CSR",
    title: "Giving Back Through Community Development",
    description:
      "Supporting local initiatives and creating a positive impact beyond construction.",
    image: "/images/media/media-4.jpg",
    date: "28 June 2026",
    href: "/media/community-development",
  },
  {
    id: 5,
    category: "Awards",
    title: "Recognised for Excellence in Real Estate",
    description:
      "Our commitment to quality continues to earn appreciation across the industry.",
    image: "/images/media/media-5.jpg",
    date: "20 June 2026",
    href: "/media/awards",
  },
  {
    id: 6,
    category: "Architecture",
    title: "Designing Spaces That Inspire Everyday Living",
    description:
      "Thoughtful architecture that balances elegance, comfort and functionality.",
    image: "/images/media/media-6.jpg",
    date: "12 June 2026",
    href: "/media/designing-spaces",
  },
];

export default function MediaExplorer() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
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

              <div className="p-7">

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CalendarDays size={16} />
                  {article.date}
                </div>

                <h3 className="mt-4 text-2xl font-bold leading-snug text-[#173042] transition group-hover:text-[#B08D57]">
                  {article.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {article.description}
                </p>

                <Link
                  href={article.href}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#173042] transition hover:text-[#B08D57]"
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