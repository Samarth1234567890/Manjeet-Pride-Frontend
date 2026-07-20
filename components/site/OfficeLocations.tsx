"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

const offices = [
  {
    city: "Corporate Office",
    address:
      "Manjeet Pride Group, Chhatrapati Sambhajinagar, Maharashtra",
    phone: "+91 98765 43210",
    hours: "Mon – Sat • 9:30 AM – 7:00 PM",
    map: "https://maps.google.com",
  },
  {
    city: "Sales Experience Centre",
    address:
      "Near One World Project, Chhatrapati Sambhajinagar, Maharashtra",
    phone: "+91 98765 43210",
    hours: "Everyday • 10:00 AM – 7:00 PM",
    map: "https://maps.google.com",
  },
];

export default function OfficeLocations() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="max-w-3xl">

          <span className="rounded-full bg-[#C9A54C]/10 px-4 py-2 text-sm font-medium text-[#C9A54C]">
            Our Offices
          </span>

          <h2 className="mt-6 font-serif text-4xl text-[#163d6c] sm:text-5xl">
            Visit us at our offices.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Meet our experienced consultants, explore project details,
            and receive personalized assistance for your dream home.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {offices.map((office, index) => (

            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -6 }}
              className="rounded-[32px] border border-neutral-200 bg-white p-10 shadow-sm transition hover:shadow-xl"
            >

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-semibold text-[#163d6c]">
                  {office.city}
                </h3>

                <div className="rounded-full bg-[#163d6c]/10 p-3 text-[#163d6c]">
                  <MapPin size={22} />
                </div>

              </div>

              <p className="mt-8 leading-8 text-neutral-600">
                {office.address}
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-4">

                  <Phone
                    size={18}
                    className="text-[#C9A54C]"
                  />

                  <a
                    href={`tel:${office.phone}`}
                    className="text-neutral-700 hover:text-[#163d6c]"
                  >
                    {office.phone}
                  </a>

                </div>

                <div className="flex items-center gap-4">

                  <Clock
                    size={18}
                    className="text-[#C9A54C]"
                  />

                  <span className="text-neutral-700">
                    {office.hours}
                  </span>

                </div>

              </div>

              <a
                href={office.map}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#163d6c] px-6 py-3 text-white transition hover:bg-[#C9A54C] hover:text-[#163d6c]"
              >
                Open in Google Maps

                <ArrowUpRight size={18} />

              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}