"use client";

import { motion } from "framer-motion";
import DirectorCard from "./DirectorCard";

const directors = [
  {
    id: 1,
    name: "Mr. Manjeet Singh",
    designation: "Chairman & Managing Director",
    image: "/images/about/chairman.jpg",
    bio: "Leading Manjeet Pride Group with a vision of trust, innovation, quality construction, and customer satisfaction.",
    linkedin: "https://linkedin.com",
    email: "chairman@manjeetpride.com",
  },
  {
    id: 2,
    name: "Mrs. Priya Singh",
    designation: "Executive Director",
    image: "/images/about/director-2.jpg",
    bio: "Driving strategic growth, operational excellence, and customer-centric development across the organization.",
    linkedin: "https://linkedin.com",
    email: "director@manjeetpride.com",
  },
  {
    id: 3,
    name: "Mr. Rahul Sharma",
    designation: "Director - Projects",
    image: "/images/about/director-3.jpg",
    bio: "Overseeing project planning, execution, quality standards, and timely delivery of landmark developments.",
    linkedin: "https://linkedin.com",
    email: "projects@manjeetpride.com",
  },
];

export default function DirectorsGrid() {
  return (
    <section className="bg-[#F8F9FB] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Leadership Team
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
            Meet Our
            <span className="block font-semibold">
              Visionary Directors
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our leadership team brings together decades of experience,
            innovation, and a commitment to delivering exceptional real estate
            developments.
          </p>
        </motion.div>

        {/* Directors Grid */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {directors.map((director, index) => (
            <motion.div
              key={director.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <DirectorCard
                name={director.name}
                designation={director.designation}
                image={director.image}
                bio={director.bio}
                linkedin={director.linkedin}
                email={director.email}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}