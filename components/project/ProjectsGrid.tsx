"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/components/data/projects";

export default function ProjectsGrid() {
  return (
    <section className="bg-[#F8F9FB] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#C9A14A]">
            Our Portfolio
          </p>

          <div className="mx-auto my-5 h-1 w-20 bg-[#C9A14A]" />

          <h2 className="text-5xl font-light text-[#071A2E]">
            Explore Our
            <span className="block font-semibold">
              Landmark Projects
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover thoughtfully planned residential, commercial,
            township, and plotting developments across
            Chhatrapati Sambhajinagar.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project: typeof projects[number], index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .08,
              }}
            >
              <ProjectCard
                {...project}
                status={project.status as "Ongoing" | "Sold Out" | "Completed" | "Upcoming"}
                type={project.type as "Residential" | "Township" | "Commercial" | "Plotting"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}