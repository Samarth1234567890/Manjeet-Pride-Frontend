"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Building2 } from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    name: "VXL Residences – My World",
    status: "Ongoing",
    location: "Opp. Airport, Jalna Road, Chh. Sambhajinagar",
    configuration: "3, 4 & 5 BHK Luxury Residences",
    image: "/images/projects/vxl-residences.jpg",
    description:
      "Experience ultra-luxury living with vastu-compliant residences, IGBC Gold-rated sustainability, premium amenities, and elegant architecture designed for modern lifestyles.",
  },
  {
    id: 2,
    name: "My World Township",
    status: "Sold Out",
    location: "Opp. Airport, Jalna Road",
    configuration: "2, 3 & 4 BHK Township",
    image: "/images/projects/my-world.jpg",
    description:
      "Aurangabad's first integrated township spread across 18 acres with 80% open space, 50+ lifestyle amenities, and home to 900+ happy families.",
  },
  {
    id: 3,
    name: "One World",
    status: "Ongoing",
    location: "Chh. Sambhajinagar",
    configuration: "Premium Township",
    image: "/one-world.jpg",
    description:
      "A landmark township crafted for the future with contemporary planning, sustainable infrastructure, and world-class lifestyle amenities.",
  },
  {
    id: 4,
    name: "Dream World",
    status: "Upcoming",
    location: "Chh. Sambhajinagar",
    configuration: "Luxury Residences",
    image: "/images/projects/dream-world.jpg",
    description:
      "A next-generation residential destination offering spacious homes, green landscapes, premium amenities, and exceptional connectivity.",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="featured-projects"
      className="bg-[#F8F9FB] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Featured Projects
          </p>

          <div className="mx-auto my-5 h-1 w-20 bg-[#C9A14A]" />

          <h2 className="text-5xl font-light text-[#071A2E]">
            Our Signature
            <span className="block font-semibold">
              Developments
            </span>
          </h2>
        </motion.div>

        {/* Cards */}

        <div className="space-y-28">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}

              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={900}
                  height={700}
                  className="rounded-3xl object-cover transition duration-700 hover:scale-105"
                />

                <span className="absolute left-6 top-6 rounded-full bg-[#C9A14A] px-5 py-2 text-sm font-semibold text-[#071A2E]">
                  {project.status}
                </span>
              </div>

              {/* Content */}

              <div>
                <h3 className="text-4xl font-semibold text-[#071A2E]">
                  {project.name}
                </h3>

                <div className="mt-5 h-1 w-16 bg-[#C9A14A]" />

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="text-[#0B5FA5]" size={20}/>
                    {project.location}
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <Building2 className="text-[#0B5FA5]" size={20}/>
                    {project.configuration}
                  </div>

                </div>

                <p className="mt-8 text-lg leading-8 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-10 flex gap-5">

                  <Link
                    href="/projects"
                    className="rounded-full bg-[#071A2E] px-8 py-4 text-white transition hover:bg-[#0B5FA5]"
                  >
                    View Details
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#071A2E] px-8 py-4 text-[#071A2E] transition hover:bg-[#071A2E] hover:text-white"
                  >
                    Book Visit
                    <ArrowRight size={18}/>
                  </Link>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}