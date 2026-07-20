"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";

const blogs = [
  {
    id: 1,
    title: "Father's Day Offer — Suvarna Sanman | A Resounding Success",
    category: "Company News",
    image: "/images/blog/blog1.jpg",
    date: "June 2025",
    excerpt:
      "Manjeet Pride Group's exclusive Father's Day offer 'Suvarna Sanman' concluded with an overwhelming response from homebuyers.",
    slug: "fathers-day-offer",
  },
  {
    id: 2,
    title: "Manjeet Pride Group Always at the Forefront of Eco-Friendly Initiatives",
    category: "CSR",
    image: "/images/blog/blog2.jpg",
    date: "June 2025",
    excerpt:
      "On World Environment Day, Manjeet Pride Group reaffirmed its commitment towards sustainable development and eco-friendly living.",
    slug: "eco-friendly-initiatives",
  },
  {
    id: 3,
    title: "Why Real Estate Continues to Be India's Strongest Long-Term Asset",
    category: "Real Estate",
    image: "/images/blog/blog3.jpg",
    date: "May 2025",
    excerpt:
      "Discover why real estate continues to be one of India's most reliable long-term investments.",
    slug: "real-estate-investment",
  },
  {
    id: 4,
    title: "Labour Day Celebration at One World",
    category: "Events",
    image: "/images/blog/blog4.jpg",
    date: "May 2025",
    excerpt:
      "Celebrating the dedication and hard work of every worker behind our landmark developments.",
    slug: "labour-day",
  },
  {
    id: 5,
    title: "Dream World Phase 2 Receives Overwhelming Booking Response",
    category: "Projects",
    image: "/images/blog/blog5.jpg",
    date: "February 2025",
    excerpt:
      "Dream World Phase 2 witnessed exceptional customer response during its grand launch.",
    slug: "dream-world-phase2",
  },
  {
    id: 6,
    title: "Building Dreams, Empowering Futures",
    category: "Projects",
    image: "/images/blog/blog6.jpg",
    date: "January 2025",
    excerpt:
      "Supporting the vision of PMAY by providing quality homes for every family.",
    slug: "building-dreams",
  },
  {
    id: 7,
    title: "Champions on the Green | One World Golfers",
    category: "Awards",
    image: "/images/blog/blog7.jpg",
    date: "2025",
    excerpt:
      "One World Golfers won the MGM Golf League 2025 and made Manjeet Pride Group proud.",
    slug: "golf-league",
  },
  {
    id: 8,
    title: "One World Revives Lake Area at MGM Golf Club",
    category: "CSR",
    image: "/images/blog/blog8.jpg",
    date: "2025",
    excerpt:
      "A successful environmental initiative restoring the lake ecosystem in collaboration with community partners.",
    slug: "lake-restoration",
  },
  {
    id: 9,
    title: "Know the Cultural Significance of Buying Home During Diwali",
    category: "Real Estate",
    image: "/images/blog/blog9.jpg",
    date: "2024",
    excerpt:
      "Explore why purchasing a home during Diwali is considered one of the most auspicious decisions.",
    slug: "diwali-home-buying",
  },
];

export default function BlogGrid() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}