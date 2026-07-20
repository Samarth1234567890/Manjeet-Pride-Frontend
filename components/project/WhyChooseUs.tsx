"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock3,
  Building2,
  Leaf,
  MapPinned,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "25+ Years of Excellence",
    description:
      "A legacy of trust, innovation, and quality that has shaped landmark developments across the city.",
  },
  {
    icon: Building2,
    title: "Superior Construction",
    description:
      "Premium materials, modern engineering, and meticulous craftsmanship ensure long-lasting value.",
  },
  {
    icon: Leaf,
    title: "Sustainable Living",
    description:
      "IGBC Gold-rated developments with green spaces, energy-efficient systems, and eco-conscious planning.",
  },
  {
    icon: MapPinned,
    title: "Prime Locations",
    description:
      "Projects strategically located with excellent connectivity to schools, hospitals, workplaces, and city landmarks.",
  },
  {
    icon: Clock3,
    title: "Timely Delivery",
    description:
      "Committed to delivering projects on schedule while maintaining the highest quality standards.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "900+ happy families trust us for transparent processes, personalized service, and exceptional after-sales support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
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
            Why Choose Us
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
            Building More Than
            <span className="block font-semibold">
              Just Properties
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We create thoughtfully planned communities, premium living spaces,
            and lasting relationships built on trust, quality, and innovation.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-500 hover:border-[#C9A14A] hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071A2E] transition-colors duration-300 group-hover:bg-[#C9A14A]">
                  <Icon className="h-8 w-8 text-[#C9A14A] transition-colors duration-300 group-hover:text-[#071A2E]" />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold text-[#071A2E]">
                  {feature.title}
                </h3>

                <div className="mt-4 h-1 w-14 rounded-full bg-[#C9A14A]" />

                {/* Description */}
                <p className="mt-6 leading-8 text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}