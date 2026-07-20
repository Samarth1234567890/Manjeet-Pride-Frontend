"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

const news = [
  {
    id: 1,
    title:
      "Manjeet Pride Group Always at the Forefront of Eco-Friendly Initiatives",
    description:
      "On the occasion of World Environment Day, Manjeet Pride Group reaffirmed its commitment towards sustainable development through One World and Dream World.",
    image: "/images/news/environment.jpg",
    date: "World Environment Day",
    slug: "/blogs/environment",
  },
  {
    id: 2,
    title:
      "Why Real Estate Continues to Be India's Strongest Long-Term Asset",
    description:
      "Discover why premium real estate continues to be one of India's most reliable long-term investments according to market trends.",
    image: "/images/news/real-estate.jpg",
    date: "Investment Insights",
    slug: "/blogs/real-estate",
  },
  {
    id: 3,
    title:
      "Father's Day Offer — Suvarna Sanman | A Resounding Success",
    description:
      "The exclusive Father's Day campaign received an overwhelming response from homeowners and investors across the city.",
    image: "/images/news/fathers-day.jpg",
    date: "Special Campaign",
    slug: "/blogs/fathers-day",
  },
];

export function LatestNews() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F6] py-32">

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#1B4E8A]/5 blur-[120px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-[#C9A54C]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <Reveal>

          <SectionTitle
            eyebrow="LATEST NEWS"
            title={
              <>
                News, Stories &
                <br />
                Project Updates
              </>
            }
            align="center"
            className="mx-auto"
          />

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-neutral-600">

            Stay connected with the latest announcements,
            project launches, awards, events and industry
            insights from Manjeet Pride Group.

          </p>

        </Reveal>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">
                      {news.map((article, index) => (
            <Reveal key={article.id} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35 }}
                className="group overflow-hidden rounded-[32px] border border-[#163d6c]/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]"
              >
                {/* Image */}

                <div className="relative overflow-hidden">

                  <Image
                    src={article.image}
                    alt={article.title}
                    width={900}
                    height={700}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute left-6 top-6 rounded-full bg-[#163d6c] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Latest
                  </div>

                </div>

                {/* Content */}

                <div className="p-8">

                  <div className="flex items-center gap-2 text-sm text-[#C9A54C]">

                    <Calendar className="h-4 w-4" />

                    <span>{article.date}</span>

                  </div>

                  <h3 className="mt-5 font-serif text-2xl leading-tight text-[#163d6c] transition-colors duration-300 group-hover:text-[#C9A54C]">

                    {article.title}

                  </h3>

                  <p className="mt-5 leading-7 text-neutral-600">

                    {article.description}

                  </p>

                  <Link
                    href={article.slug}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-[#163d6c] transition-colors duration-300 hover:text-[#C9A54C]"
                  >
                    Read More

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                  </Link>

                </div>

              </motion.article>
            </Reveal>
          ))}

        </div>

        {/* Bottom CTA */}

        <Reveal delay={0.35}>

          <div className="mt-24 rounded-[36px] bg-gradient-to-r from-[#163d6c] via-[#1B4E8A] to-[#163d6c] px-10 py-16 text-center shadow-[0_25px_80px_rgba(22,61,108,.25)]">

            <p className="text-xs uppercase tracking-[0.35em] text-[#C9A54C]">

              STAY UPDATED

            </p>

            <h3 className="mt-5 font-serif text-4xl text-white">

              Discover More Stories,
              <br />
              Events & Project Updates

            </h3>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/75">

              Explore our latest blogs, company announcements,
              construction updates and market insights from
              Manjeet Pride Group.

            </p>

            <Link
              href="/blogs"
              className="mt-10 inline-flex items-center rounded-full bg-[#C9A54C] px-8 py-4 font-semibold text-[#163d6c] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View All Articles
            </Link>

          </div>

        </Reveal>

      </div>

    </section>
  );
}