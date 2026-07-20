"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Phone,
  Mail,
  Navigation,
} from "lucide-react";
import Link from "next/link";

const locations = [
  {
    title: "Corporate Headquarters",
    value: "Ajanta Tower, Opp. Airport, Hyatt Road, My World, Chh. Sambhajinagar",
    icon: Building2,
  },
  {
    title: "Project Locations",
    value: "Jalna Road • Garkheda • Chikalthana • Paithan Road • Waluj • Vedant Nagar",
    icon: MapPin,
  },
  {
    title: "Email",
    value: "abdpridegroup@yahoo.com",
    icon: Mail,
  },
  {
    title: "Contact",
    value: "+91 91681 43690",
    icon: Phone,
  },
];

export default function ProjectLocation() {
  return (
    <section className="bg-white py-24">
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
            Our Presence
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
            Building Across
            <span className="block font-semibold">
              Chh. Sambhajinagar
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our landmark developments are strategically located to provide
            excellent connectivity, modern infrastructure, and premium
            lifestyles.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex h-[500px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#071A2E] to-[#0B5FA5]"
          >
            <div className="absolute inset-0 bg-[url('/images/map-pattern.png')] bg-cover opacity-10" />

            <div className="relative text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#C9A14A]">
                <Navigation className="h-12 w-12 text-[#071A2E]" />
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-white">
                Project Location Map
              </h3>

              <p className="mx-auto mt-4 max-w-sm text-gray-300">
                Replace this section with an embedded Google Map or interactive
                location map.
              </p>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {locations.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:border-[#C9A14A] hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#071A2E]">
                    <Icon className="h-7 w-7 text-[#C9A14A]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#071A2E]">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#071A2E] px-8 py-4 font-semibold text-white transition hover:bg-[#0B5FA5]"
              >
                Visit Our Office
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}