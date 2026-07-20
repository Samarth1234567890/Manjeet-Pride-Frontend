"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

const leaders = [
  {
    id: 1,
    name: "Mr. Manjeet Singh",
    role: "Chairman & Managing Director",
    department: "Executive Leadership",
    image: "/images/team/chairman.jpg",
    expertise: ["Leadership", "Strategy", "Growth"],
    linkedin: "https://linkedin.com",
    email: "chairman@manjeetpride.com",
  },
  {
    id: 2,
    name: "Mrs. Priya Singh",
    role: "Executive Director",
    department: "Business Operations",
    image: "/images/team/director-1.jpg",
    expertise: ["Operations", "Planning", "Management"],
    linkedin: "https://linkedin.com",
    email: "director@manjeetpride.com",
  },
  {
    id: 3,
    name: "Mr. Rahul Sharma",
    role: "Project Director",
    department: "Projects",
    image: "/images/team/director-2.jpg",
    expertise: ["Construction", "Quality", "Execution"],
    linkedin: "https://linkedin.com",
    email: "projects@manjeetpride.com",
  },
  {
    id: 4,
    name: "Ms. Neha Patel",
    role: "Head of Sales",
    department: "Sales & Marketing",
    image: "/images/team/director-3.jpg",
    expertise: ["Sales", "Marketing", "Customer Success"],
    linkedin: "https://linkedin.com",
    email: "sales@manjeetpride.com",
  },
];

export default function LeadershipGrid() {
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
            Leadership Team
          </p>

          <div className="mx-auto my-5 h-1 w-20 rounded-full bg-[#C9A14A]" />

          <h2 className="text-4xl font-light text-[#071A2E] md:text-5xl">
            Meet the
            <span className="block font-semibold">People Who Lead</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our experienced leaders combine innovation, integrity, and expertise
            to deliver projects that create lasting value.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
              className="group rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A14A] hover:shadow-2xl"
            >
              {/* Portrait */}
              <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-[#C9A14A]">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-2xl font-semibold text-[#071A2E]">
                {leader.name}
              </h3>

              <p className="mt-2 font-medium text-[#0B5FA5]">
                {leader.role}
              </p>

              <p className="mt-1 text-sm uppercase tracking-widest text-gray-500">
                {leader.department}
              </p>

              {/* Expertise */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {leader.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#F8F4EA] px-3 py-1 text-xs font-medium text-[#071A2E]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Icons */}
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href={leader.linkedin}
                  target="_blank"
                  className="rounded-full border border-gray-300 p-3 transition hover:border-[#0B5FA5] hover:bg-[#0B5FA5] hover:text-white"
                >
                  <Linkedin size={18} />
                </Link>

                <Link
                  href={`mailto:${leader.email}`}
                  className="rounded-full border border-gray-300 p-3 transition hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-[#071A2E]"
                >
                  <Mail size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}