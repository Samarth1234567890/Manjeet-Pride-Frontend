"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

type Status = "Ongoing" | "Completed";

const projects = [
  {
    id: 1,
    title: "Manjeet Pride Landmark",
    status: "Ongoing" as Status,
    location: "Chh. Sambhajinagar",
    image: "/images/projects/landmark.jpg",
    href: "/manjeet_pride_landmark",
    description:
      "Luxury residences combining premium architecture, spacious layouts and world-class amenities for modern urban living.",
  },

  {
    id: 2,
    title: "One World",
    status: "Ongoing" as Status,
    location: "Chh. Sambhajinagar",
    image: "/images/projects/one-world.jpg",
    href: "/one_world",
    description:
      "Premium township featuring elegant residences, landscaped surroundings and thoughtfully curated lifestyle amenities.",
  },

  {
    id: 3,
    title: "Dream World",
    status: "Ongoing" as Status,
    location: "Chh. Sambhajinagar",
    image: "/images/projects/dream-world.jpg",
    href: "/dream_world",
    description:
      "Designed for families seeking comfort, convenience and exceptional living experiences in a prime location.",
  },

  {
    id: 4,
    title: "My World & VXL Residences",
    status: "Completed" as Status,
    location: "Chh. Sambhajinagar",
    image: "/images/projects/my-world.jpg",
    href: "/vxl_residences",
    description:
      "A landmark development successfully delivered with premium homes, superior quality and modern lifestyle features.",
  },

  {
    id: 5,
    title: "My Home",
    status: "Completed" as Status,
    location: "Chh. Sambhajinagar",
    image: "/images/projects/my-home.jpg",
    href: "/my_home",
    description:
      "Contemporary residences crafted with spacious planning, quality construction and timeless architectural appeal.",
  },

  {
    id: 6,
    title: "Pride Century",
    status: "Completed" as Status,
    location: "Chh. Sambhajinagar",
    image: "/images/projects/pride-century.jpg",
    href: "/pride_century",
    description:
      "An elegant residential community built around quality, trust and luxurious everyday living.",
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<
    "All" | "Ongoing" | "Completed"
  >("All");

  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesStatus =
        activeTab === "All" || project.status === activeTab;

      const matchesSearch =
        project.title
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesStatus && matchesSearch;
    });
  }, [activeTab, search]);

  return (
    <section className="relative overflow-hidden bg-[#F8F6F2] py-32">

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#1B4E8A]/5 blur-[130px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#C9A54C]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <Reveal>

          <SectionTitle
            eyebrow="PROJECTS"
            title={
              <>
                Luxury Living.
                <br />
                Exceptional Investments.
              </>
            }
            align="center"
            className="mx-auto"
          />

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-neutral-600">

            Explore Manjeet Pride Group's portfolio of
            ongoing and completed developments designed
            with timeless architecture, premium quality
            and thoughtfully planned living spaces.

          </p>

        </Reveal>

        {/* Search */}

        <Reveal delay={0.1}>

          <div className="mx-auto mt-14 max-w-xl">

            <div className="relative">

              <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />

              <input
                type="text"
                placeholder="Search Projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-16 w-full rounded-full border border-neutral-200 bg-white pl-14 pr-6 text-sm shadow-sm outline-none transition focus:border-[#1B4E8A]"
              />

            </div>

          </div>

        </Reveal>

        {/* Filters */}

        <Reveal delay={0.2}>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {["All", "Ongoing", "Completed"].map((tab) => (

              <button
                key={tab}
                onClick={() =>
                  setActiveTab(
                    tab as "All" | "Ongoing" | "Completed"
                  )
                }
                className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#1B4E8A] text-white shadow-xl"
                    : "bg-white text-neutral-700 hover:bg-[#1B4E8A] hover:text-white"
                }`}
              >
                {tab}
              </button>

            ))}

          </div>

        </Reveal>

        {/* Project Grid */}

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
                      {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={0.05 * index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35 }}
                className="group overflow-hidden rounded-[30px] border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,.12)]"
              >
                {/* Image */}

                <div className="relative overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={500}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <span
                    className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white ${
                      project.status === "Ongoing"
                        ? "bg-[#1B4E8A]"
                        : "bg-[#C9A54C]"
                    }`}
                  >
                    {project.status}
                  </span>

                </div>

                {/* Content */}

                <div className="p-8">

                  <div className="flex items-center gap-2 text-sm text-neutral-500">

                    <MapPin className="h-4 w-4 text-[#C9A54C]" />

                    {project.location}

                  </div>

                  <h3 className="mt-4 text-2xl font-serif text-neutral-900">

                    {project.title}

                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">

                    {project.description}

                  </p>

                  <Link
                    href={project.href}
                    className="group/link mt-8 inline-flex items-center gap-2 font-semibold text-[#1B4E8A] transition-colors hover:text-[#163d6c]"
                  >
                    Explore Project

                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />

                  </Link>

                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}

        <Reveal delay={0.4}>
          <div className="mt-20 text-center">

            <Link
              href="/projects"
              className="inline-flex items-center rounded-full bg-[#1B4E8A] px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#163d6c] hover:shadow-2xl"
            >
              View All Projects
            </Link>

          </div>
        </Reveal>

      </div>
    </section>
  );
}