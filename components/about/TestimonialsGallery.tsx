"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Homeowner",
    project: "Manjeet Pride Heights",
    image: "/testimonial.png",
    rating: 5,
    review:
      "The professionalism, transparency, and construction quality exceeded our expectations. We are proud to be a part of the Manjeet Pride family.",
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "Business Owner",
    project: "Manjeet Pride Business Park",
    image: "/testimonial1.png",
    rating: 5,
    review:
      "From booking to possession, the entire experience was smooth. The team was supportive, responsive, and highly professional.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Investor",
    project: "Manjeet Pride Residency",
    image: "/testimonial2.png",
    rating: 5,
    review:
      "Excellent project planning, timely delivery, and premium quality. A trusted brand for long-term real estate investment.",
  },
  {
    id: 4,
    name: "Priya Kulkarni",
    role: "Homeowner",
    project: "Manjeet Pride Avenue",
    image: "/testimonial3.png",
    rating: 5,
    review:
      "The attention to detail and customer support were outstanding. Our dream home became a reality with Manjeet Pride Group.",
  },
  {
    id: 5,
    name: "Vikram Joshi",
    role: "Entrepreneur",
    project: "Pride Corporate Centre",
    image: "/testimonial4.png",
    rating: 5,
    review:
      "Modern design, excellent location, and exceptional execution. I highly recommend Manjeet Pride Group to anyone looking for quality.",
  },
  {
    id: 6,
    name: "Neha Deshmukh",
    role: "Homeowner",
    project: "Pride Elite",
    image: "/testimonial5.png",
    rating: 5,
    review:
      "Every commitment was fulfilled. The entire process reflected honesty, trust, and excellence from start to finish.",
  },
];

export default function TestimonialsGallery() {
  return (
    <section className="bg-[#F8F9FB] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Customer Reviews
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
            Trusted by
            <span className="block font-semibold">
              Thousands of Families
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The greatest measure of our success is the trust and satisfaction
            of our customers. Their stories inspire us to build with passion,
            integrity, and excellence every day.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A14A] hover:shadow-2xl"
            >
              <Quote className="mb-6 h-10 w-10 text-[#C9A14A]" />

              <p className="leading-8 text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#C9A14A] text-[#C9A14A]"
                  />
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#C9A14A]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#071A2E]">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[#0B5FA5]">
                    {item.role}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
                    {item.project}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}